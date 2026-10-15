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

  function collectQA() {
    var list = [];
    textInputs().forEach(function (inp) {
      list.push({ q: inputLabel(inp), a: (inp.value || '').trim() || '(no answer)' });
    });
    textAreas().forEach(function (ta) {
      list.push({ q: inputLabel(ta), a: (ta.value || '').trim() || '(no answer)' });
    });
    var names = [];
    $all('input[type="radio"]').forEach(function (r) { if (names.indexOf(r.name) < 0) names.push(r.name); });
    names.forEach(function (name) {
      var checked = null;
      $all('input[type="radio"]').forEach(function (x) { if (x.name === name && x.checked) checked = x; });
      list.push({ q: radioLabel(name), a: checked ? checked.value : '(no answer)' });
    });
    return list;
  }

  function docTitle() { return document.title.replace(/\s+/g, ' ').trim(); }

  function buildBody() {
    var lines = [];
    lines.push(docTitle());
    lines.push('eslnote.com — ' + location.pathname);
    lines.push('Date: ' + new Date().toLocaleDateString());
    var sc = scoreText();
    if (sc) lines.push('Score: ' + sc);
    lines.push('');
    lines.push('My answers:');
    var items = collectQA();
    items.forEach(function (it, i) {
      lines.push((i + 1) + '. ' + it.q);
      lines.push('   → ' + it.a);
    });
    if (!items.length) lines.push('(no answers found on this page)');
    return lines.join('\n');
  }

  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function printAnswers() {
    save();
    var area = document.getElementById('esl-print-area');
    if (!area) {
      area = document.createElement('div');
      area.id = 'esl-print-area';
      document.body.appendChild(area);
      var st = document.createElement('style');
      st.textContent = '@media print{' +
        'body>*:not(#esl-print-area){display:none !important;}' +
        '#esl-print-area{display:block !important;font-family:Arial,Helvetica,sans-serif;color:#000;}' +
        '#esl-print-area h1{font-size:20px;margin:0 0 6px;}' +
        '#esl-print-area .meta{font-size:13px;color:#333;margin-bottom:14px;}' +
        '#esl-print-area .qa{margin:0 0 10px;page-break-inside:avoid;}' +
        '#esl-print-area .q{font-weight:bold;}' +
        '#esl-print-area .a{margin:2px 0 0 14px;}' +
        '}' +
        '@media screen{#esl-print-area{display:none;}}';
      document.head.appendChild(st);
    }
    var html = '<h1>' + esc(docTitle()) + '</h1><div class="meta">' +
      esc('eslnote.com — ' + location.pathname) + ' · ' + esc(new Date().toLocaleDateString());
    var sc = scoreText();
    if (sc) html += ' · Score: ' + esc(sc);
    html += '</div>';
    collectQA().forEach(function (it, i) {
      html += '<div class="qa"><div class="q">' + (i + 1) + '. ' + esc(it.q) +
              '</div><div class="a">' + esc(it.a) + '</div></div>';
    });
    area.innerHTML = html;
    window.print();
  }

  function download() {
    save();
    var blob = new Blob([buildBody()], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var name = docTitle().replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase();
    a.download = (name || 'worksheet') + '-my-answers.txt';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { try { URL.revokeObjectURL(a.href); } catch (e) {} a.remove(); }, 800);
  }

  function email() {
    save();
    var subject = 'My answers — ' + docTitle();
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

  function gmail() {
    save();
    var subject = 'My answers — ' + docTitle();
    var url = 'https://mail.google.com/mail/?view=cm&fs=1&su=' + encodeURIComponent(subject) +
              '&body=' + encodeURIComponent(buildBody());
    if (url.length > 8000) {
      alert('Your answers are too long for this. Please use "Save my answers" or "Copy answers" instead.');
      return;
    }
    window.open(url, '_blank', 'noopener');
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
    b2.type = 'button'; b2.id = 'esl-mail'; b2.style.cssText = BTN; b2.textContent = '✉️ Email app';
    b2.onclick = email;
    b2.title = 'Opens your computer\u2019s email program with answers filled in';
    var b2g = document.createElement('button');
    b2g.type = 'button'; b2g.id = 'esl-gmail'; b2g.style.cssText = BTN; b2g.textContent = '📧 Gmail';
    b2g.onclick = gmail;
    b2g.title = 'Opens Gmail in your browser with answers filled in (no email program needed)';
    var b3 = document.createElement('button');
    b3.type = 'button'; b3.id = 'esl-copy'; b3.style.cssText = BTN; b3.textContent = '📋 Copy answers';
    b3.onclick = function () { copyAnswers(b3); };
    var note = document.createElement('span');
    note.style.cssText = 'font-size:13px;color:#666;';
    note.textContent = 'Tip: your answers are also saved in this browser automatically. Email options open a draft with everything filled in — just add your address and press Send.';
    bar.appendChild(b1); bar.appendChild(b2); bar.appendChild(b2g); bar.appendChild(b3); bar.appendChild(note);
    if (btn) {
      btn.parentNode.insertBefore(bar, btn.nextSibling);
    } else {
      // free-writing pages with no submit button: put toolbar at end of content
      var host = $('.content-container') || $('.container') || document.body;
      host.appendChild(bar);
    }
  }

  var submitted = false;
  function hasSubmitButton() { return !!$('.submit-button,#submitBtn,#checkBtn,[id^="submitBtn"]'); }
  function hasAnswers() {
    return collectQA().some(function (it) { return it.a !== '(no answer)'; });
  }

  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('.submit-button,#submitBtn,#checkBtn,[id^="submitBtn"]') : null;
    if (b) { submitted = true; setTimeout(addToolbar, 700); return; }
    var r = e.target && e.target.closest ? e.target.closest('#resetBtn,.reset-button') : null;
    if (r) {
      submitted = false;
      try { localStorage.removeItem(KEY); } catch (e2) {}
      var bar = document.getElementById('esl-save-toolbar');
      if (bar) bar.remove();
    }
  });

  // Print buttons print the student's answers, but only after submit.
  // A blank (unsubmitted) worksheet still prints blank as before.
  // Capture phase runs before the inline onclick="window.print()".
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('.print-button') : null;
    if (!b) return;
    var printFilled = submitted || (!hasSubmitButton() && hasAnswers());
    if (printFilled) { e.preventDefault(); e.stopPropagation(); printAnswers(); }
    // otherwise: let the page's own window.print() run (blank worksheet)
  }, true);

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
