/* worksheet-save.js — lets students keep their worksheet answers.
 * - Auto-saves answers in this browser (localStorage) and restores them on revisit.
 * - After Submit/Check, adds "Save my answers" (downloads a .txt file) and
 *   "Email my answers" (opens the student's email app with answers prefilled).
 * Works on any practice worksheet page; does nothing on pages without inputs.
 */
(function () {
  'use strict';
  var KEY = 'eslnote-answers:' + location.pathname;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function textInputs() {
    return $all('input.blank-input').concat(
      $all('input[type="text"]').filter(function (i) { return i.className.indexOf('blank-input') < 0; })
    );
  }

  function textAreas() { return $all('textarea'); }

  function collect() {
    var data = { text: [], radio: {}, area: [] };
    textInputs().forEach(function (inp, i) { data.text[i] = inp.value || ''; });
    textAreas().forEach(function (ta, i) { data.area[i] = ta.value || ''; });
    $all('input[type="radio"]:checked').forEach(function (r) { data.radio[r.name] = r.value; });
    return data;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(collect())); } catch (e) {}
  }

  var saveSoon = (function () {
    var t = null;
    return function () { clearTimeout(t); t = setTimeout(save, 600); };
  })();

  function restore() {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { return; }
    if (!raw) return;
    var data;
    try { data = JSON.parse(raw); } catch (e) { return; }
    var ins = textInputs();
    (data.text || []).forEach(function (v, i) {
      if (ins[i] && !ins[i].value && v) ins[i].value = v;
    });
    var tas = textAreas();
    (data.area || []).forEach(function (v, i) {
      if (tas[i] && !tas[i].value && v) tas[i].value = v;
    });
    Object.keys(data.radio || {}).forEach(function (name) {
      if (document.querySelector('input[type="radio"][name="' + name + '"]:checked')) return;
      var r = null;
      $all('input[type="radio"]').forEach(function (x) { if (x.name === name && x.value === data.radio[name]) r = x; });
      if (r) r.checked = true;
    });
  }

  function cleanText(s) {
    return (s || '').replace(/\s+/g, ' ').trim();
  }

  function num(t) { return cleanText(t).replace(/^\d+[.)]\s*/, '').slice(0, 220); }

  function inputLabel(inp) {
    if (inp.id) {
      var lab = document.querySelector('label[for="' + inp.id + '"]');
      if (lab && cleanText(lab.textContent)) return num(lab.textContent);
    }
    var li = inp.closest('li');    if (li) {
      var c = li.cloneNode(true);
      $all('input, button, .inline-feedback', c).forEach(function (n) { n.remove(); });
      var t = cleanText(c.textContent);
      if (t) return num(t);
    }
    var p = inp.closest('p');
    if (p) { var t2 = cleanText(p.textContent); if (t2) return num(t2); }
    if (inp.placeholder) return cleanText(inp.placeholder);
    if (inp.getAttribute && inp.getAttribute('aria-label')) return cleanText(inp.getAttribute('aria-label'));
    return 'Question';
  }

  function radioLabel(name) {
    var first = document.querySelector('input[type="radio"][name="' + name + '"]');
    if (!first) return 'Question';
    var rg = first.closest('[role="radiogroup"]');
    if (rg && rg.getAttribute('aria-label')) return cleanText(rg.getAttribute('aria-label'));
    var li = first.closest('li');
    if (li) {
      var c = li.cloneNode(true);
      $all('input, button, .inline-feedback', c).forEach(function (n) { n.remove(); });
      var t = cleanText(c.textContent);
      if (t) return num(t);
    }
    return 'Question (' + name + ')';
  }

  function scoreText() {
    var cc = $('#correctCount'), tc = $('#totalCount');
    if (cc && tc && cleanText(cc.textContent)) return cleanText(cc.textContent) + ' / ' + cleanText(tc.textContent);
    var sb = $('#scoreBox');
    if (sb && cleanText(sb.textContent) && sb.style.display !== 'none') return cleanText(sb.textContent);
    var rs = $('#results');
    if (rs && cleanText(rs.textContent).length < 120) {
      var t = cleanText(rs.textContent);
      if (/correct|score/i.test(t)) return t;
    }
    return '';
  }

  function buildBody() {
    var lines = [];
    lines.push(document.title.replace(/\s+/g, ' ').trim());
    lines.push('eslnote.com — ' + location.pathname);
    lines.push('Date: ' + new Date().toLocaleDateString());
    var sc = scoreText();
    if (sc) lines.push('Score: ' + sc);
    lines.push('');
    lines.push('My answers:');
    var ins = textInputs();
    ins.forEach(function (inp, i) {
      var v = (inp.value || '').trim() || '(no answer)';
      lines.push((i + 1) + '. ' + inputLabel(inp));
      lines.push('   → ' + v);
    });
    var tas = textAreas();
    tas.forEach(function (ta, i) {
      var v = (ta.value || '').trim() || '(no answer)';
      lines.push((ins.length + i + 1) + '. ' + inputLabel(ta));
      lines.push('   → ' + v);
    });
    var base = ins.length + tas.length;
    var names = [];
    $all('input[type="radio"]').forEach(function (r) { if (names.indexOf(r.name) < 0) names.push(r.name); });
    names.forEach(function (name, i) {
      var checked = document.querySelector('input[type="radio"][name="' + name + '"]:checked');
      lines.push((base + i + 1) + '. ' + radioLabel(name));
      lines.push('   → ' + (checked ? checked.value : '(no answer)'));
    });
    if (!ins.length && !tas.length && !names.length) lines.push('(no answers found on this page)');
    return lines.join('\n');
  }

  function download() {
    save();
    var blob = new Blob([buildBody()], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var name = document.title.replace(/\s+/g, ' ').trim().replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase();
    a.download = (name || 'worksheet') + '-my-answers.txt';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { try { URL.revokeObjectURL(a.href); } catch (e) {} a.remove(); }, 800);
  }

  function email() {
    save();
    var subject = 'My answers — ' + document.title.replace(/\s+/g, ' ').trim();
    var url = 'mailto:?subject=' + encodeURIComponent(subject) +
              '&body=' + encodeURIComponent(buildBody());
    if (url.length > 8000) {
      alert('Your answers are too long to email this way. Please use "Save my answers" or "Copy answers" instead.');
      return;
    }
    // Use a real link click: more reliable than location.href for mailto: on mobile.
    var a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { a.remove(); }, 800);
  }

  function flash(btn, msg) {
    var old = btn.textContent;
    btn.textContent = msg;
    setTimeout(function () { btn.textContent = old; }, 1600);
  }

  function copyAnswers(btn) {
    save();
    var text = buildBody();
    function legacy() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      try { document.execCommand('copy'); flash(btn, 'Copied!'); }
      catch (e) { flash(btn, 'Copy failed'); }
      ta.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { flash(btn, 'Copied!'); },
        function () { legacy(); }
      );
    } else {
      legacy();
    }
  }

  var BTN = 'background:#124076;color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:15px;cursor:pointer;';

  function addToolbar() {
    if ($('#esl-save-toolbar')) return;
    var btn = $('.submit-button,#submitBtn,#checkBtn,[id^="submitBtn"]');
    save();
    var bar = document.createElement('div');
    bar.id = 'esl-save-toolbar';
    bar.style.cssText = 'margin:14px 0;display:flex;gap:10px;flex-wrap:wrap;align-items:center;';
    var b1 = document.createElement('button');
    b1.type = 'button'; b1.id = 'esl-dl'; b1.style.cssText = BTN; b1.textContent = '💾 Save my answers';
    b1.onclick = download;
    var b2 = document.createElement('button');
    b2.type = 'button'; b2.id = 'esl-mail'; b2.style.cssText = BTN; b2.textContent = '✉️ Email my answers';
    b2.onclick = email;
    var b3 = document.createElement('button');
    b3.type = 'button'; b3.id = 'esl-copy'; b3.style.cssText = BTN; b3.textContent = '📋 Copy answers';
    b3.onclick = function () { copyAnswers(b3); };
    var note = document.createElement('span');
    note.style.cssText = 'font-size:13px;color:#666;';
    note.textContent = 'Tip: your answers are also saved in this browser automatically. Email opens your email app with everything filled in — just add your address and send.';
    bar.appendChild(b1); bar.appendChild(b2); bar.appendChild(b3); bar.appendChild(note);
    if (btn) {
      btn.parentNode.insertBefore(bar, btn.nextSibling);
    } else {
      // free-writing pages with no submit button: put toolbar at end of content
      var host = $('.content-container') || $('.container') || document.body;
      host.appendChild(bar);
    }
  }

  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('.submit-button,#submitBtn,#checkBtn,[id^="submitBtn"]') : null;
    if (b) setTimeout(addToolbar, 700);
  });

  document.addEventListener('input', saveSoon, true);
  document.addEventListener('change', saveSoon, true);

  function init() {
    var hasInputs = textInputs().length || textAreas().length || $('input[type="radio"]');
    if (!hasInputs) return;
    restore();
    if (!$('.submit-button,#submitBtn,#checkBtn,[id^="submitBtn"]') && textAreas().length) {
      setTimeout(addToolbar, 1200); // free-writing pages: show toolbar without submit
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); setTimeout(restore, 900); setTimeout(restore, 2200); });
  } else {
    init(); setTimeout(restore, 900); setTimeout(restore, 2200);
  }
})();
