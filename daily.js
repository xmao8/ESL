/* Daily word & sentence data for the ESLnote homepage. Rotates by day of year.
   Level: intermediate to advanced. */
var WORDS = [
{w:"meticulous",pos:"adjective",ipa:"/məˈtɪkjələs/",def:"Very careful and precise.",ex:"She keeps meticulous records of every expense."},
{w:"ambiguous",pos:"adjective",ipa:"/æmˈbɪɡjuəs/",def:"Having more than one possible meaning; unclear.",ex:"His answer was ambiguous, so nobody knew what he had decided."},
{w:"inevitable",pos:"adjective",ipa:"/ɪnˈevɪtəbəl/",def:"Certain to happen; unavoidable.",ex:"Some stress during finals week is inevitable."},
{w:"resilient",pos:"adjective",ipa:"/rɪˈzɪliənt/",def:"Able to recover quickly from problems.",ex:"Children are remarkably resilient after hardship."},
{w:"controversial",pos:"adjective",ipa:"/ˌkɑːntrəˈvɜːrʃəl/",def:"Causing public disagreement.",ex:"The new policy proved highly controversial."},
{w:"phenomenon",pos:"noun",ipa:"/fəˈnɑːmɪnɑːn/",def:"Something remarkable that can be observed.",ex:"Rapid urban growth is a worldwide phenomenon."},
{w:"implication",pos:"noun",ipa:"/ˌɪmplɪˈkeɪʃən/",def:"Something suggested without being said directly; a likely consequence.",ex:"The implication of his silence was clear: he disagreed."},
{w:"perspective",pos:"noun",ipa:"/pərˈspektɪv/",def:"A particular way of seeing things.",ex:"Travel gave her a new perspective on life."},
{w:"obstacle",pos:"noun",ipa:"/ˈɑːbstəkəl/",def:"Something that blocks progress.",ex:"Lack of funding was a major obstacle."},
{w:"accomplish",pos:"verb",ipa:"/əˈkɑːmplɪʃ/",def:"To succeed in doing something.",ex:"She accomplished more in a year than most do in five."},
{w:"dilemma",pos:"noun",ipa:"/dɪˈlemə/",def:"A difficult choice between two options.",ex:"He faced the dilemma of choosing between two job offers."},
{w:"procrastinate",pos:"verb",ipa:"/proʊˈkræstɪneɪt/",def:"To delay doing something you should do.",ex:"Stop procrastinating and start your essay."},
{w:"skeptical",pos:"adjective",ipa:"/ˈskeptɪkəl/",def:"Doubting that something is true.",ex:"She was skeptical of the salesman's promises."},
{w:"subtle",pos:"adjective",ipa:"/ˈsʌtəl/",def:"Not obvious; delicate.",ex:"There is a subtle difference between the two words."},
{w:"thrive",pos:"verb",ipa:"/θraɪv/",def:"To grow or succeed strongly.",ex:"Small businesses thrive in this neighborhood."},
{w:"deteriorate",pos:"verb",ipa:"/dɪˈtɪriəreɪt/",def:"To become worse.",ex:"His health deteriorated rapidly."},
{w:"nonetheless",pos:"adverb",ipa:"/ˌnʌnðəˈles/",def:"Despite what was just said; however.",ex:"It was raining; nonetheless, we went hiking."},
{w:"reluctant",pos:"adjective",ipa:"/rɪˈlʌktənt/",def:"Unwilling; not wanting to do something.",ex:"He was reluctant to admit the mistake."},
{w:"coherent",pos:"adjective",ipa:"/koʊˈhɪrənt/",def:"Clear and logical.",ex:"Write a coherent paragraph with a clear main idea."},
{w:"paradox",pos:"noun",ipa:"/ˈpærədɑːks/",def:"A statement that seems contradictory but may be true.",ex:"It is a paradox that doing less can sometimes achieve more."},
{w:"indispensable",pos:"adjective",ipa:"/ˌɪndɪˈspensəbəl/",def:"Absolutely necessary.",ex:"Good communication is indispensable in any team."},
{w:"mitigate",pos:"verb",ipa:"/ˈmɪtɪɡeɪt/",def:"To make something less severe.",ex:"Planting trees helps mitigate air pollution."},
{w:"pragmatic",pos:"adjective",ipa:"/præɡˈmætɪk/",def:"Practical rather than idealistic.",ex:"Let's take a pragmatic approach to the budget."},
{w:"evoke",pos:"verb",ipa:"/ɪˈvoʊk/",def:"To bring a feeling or memory to mind.",ex:"The song evoked memories of her childhood."},
{w:"integrity",pos:"noun",ipa:"/ɪnˈteɡrəti/",def:"Honesty and strong moral principles.",ex:"Voters expect integrity from their leaders."},
{w:"compromise",pos:"noun",ipa:"/ˈkɑːmprəmaɪz/",def:"An agreement where both sides give up something.",ex:"They reached a compromise after hours of discussion."},
{w:"anticipate",pos:"verb",ipa:"/ænˈtɪsɪpeɪt/",def:"To expect that something will happen.",ex:"We anticipate heavy traffic on Friday."},
{w:"feasible",pos:"adjective",ipa:"/ˈfiːzəbəl/",def:"Possible and practical to do.",ex:"It is not feasible to finish by tomorrow."},
{w:"criteria",pos:"noun",ipa:"/kraɪˈtɪriə/",def:"Standards used to judge something. (plural of criterion)",ex:"Price is only one of our criteria."},
{w:"bias",pos:"noun",ipa:"/ˈbaɪəs/",def:"An unfair preference for or against something.",ex:"The hiring process must be free of bias."},
{w:"profound",pos:"adjective",ipa:"/proʊˈfaʊnd/",def:"Very deep; showing great insight.",ex:"The book had a profound effect on me."},
{w:"strive",pos:"verb",ipa:"/straɪv/",def:"To try very hard.",ex:"We strive to improve every day."},
{w:"diminish",pos:"verb",ipa:"/dɪˈmɪnɪʃ/",def:"To become or make smaller.",ex:"His influence diminished over time."},
{w:"encompass",pos:"verb",ipa:"/ɪnˈkʌmpəs/",def:"To include everything.",ex:"The course encompasses grammar, writing, and speaking."},
{w:"articulate",pos:"adjective",ipa:"/ɑːrˈtɪkjələt/",def:"Able to express ideas clearly.",ex:"She is an articulate speaker."},
{w:"apprehensive",pos:"adjective",ipa:"/ˌæprɪˈhensɪv/",def:"Worried about the future.",ex:"He felt apprehensive before the interview."},
{w:"complacent",pos:"adjective",ipa:"/kəmˈpleɪsənt/",def:"Too satisfied; not worried about improving.",ex:"Don't get complacent — keep practicing."},
{w:"disparity",pos:"noun",ipa:"/dɪˈspærəti/",def:"A noticeable difference.",ex:"There is a growing disparity between rich and poor."},
{w:"eloquent",pos:"adjective",ipa:"/ˈeləkwənt/",def:"Fluent and persuasive in speaking.",ex:"She gave an eloquent speech."},
{w:"fluctuate",pos:"verb",ipa:"/ˈflʌktʃueɪt/",def:"To rise and fall irregularly.",ex:"Prices fluctuate with the seasons."},
{w:"genuine",pos:"adjective",ipa:"/ˈdʒenjuɪn/",def:"Real; sincere.",ex:"He showed genuine interest in my story."},
{w:"hinder",pos:"verb",ipa:"/ˈhɪndər/",def:"To slow down or make difficult.",ex:"Poor lighting hindered our work."},
{w:"innovative",pos:"adjective",ipa:"/ˈɪnəveɪtɪv/",def:"Introducing new ideas.",ex:"The company is known for innovative designs."},
{w:"incentive",pos:"noun",ipa:"/ɪnˈsentɪv/",def:"Something that encourages action.",ex:"Bonuses are a strong incentive."},
{w:"jeopardize",pos:"verb",ipa:"/ˈdʒepərdaɪz/",def:"To put at risk.",ex:"Don't jeopardize your health by skipping sleep."},
{w:"lucrative",pos:"adjective",ipa:"/ˈluːkrətɪv/",def:"Producing a lot of profit.",ex:"Real estate can be a lucrative investment."},
{w:"mandatory",pos:"adjective",ipa:"/ˈmændətɔːri/",def:"Required by rule.",ex:"Attendance at orientation is mandatory."},
{w:"notion",pos:"noun",ipa:"/ˈnoʊʃən/",def:"An idea or belief.",ex:"He rejected the notion that money buys happiness."},
{w:"obsolete",pos:"adjective",ipa:"/ˌɑːbsəˈliːt/",def:"No longer used; out of date.",ex:"Fax machines are nearly obsolete."},
{w:"persist",pos:"verb",ipa:"/pərˈsɪst/",def:"To continue firmly.",ex:"If you persist, you will succeed."},
{w:"plausible",pos:"adjective",ipa:"/ˈplɔːzəbəl/",def:"Seeming reasonable or true.",ex:"She gave a plausible excuse."},
{w:"predominant",pos:"adjective",ipa:"/prɪˈdɑːmɪnənt/",def:"Most common or strongest.",ex:"English is the predominant language in the office."},
{w:"reimburse",pos:"verb",ipa:"/ˌriːɪmˈbɜːrs/",def:"To pay back money someone spent.",ex:"The company will reimburse your travel costs."},
{w:"scrutinize",pos:"verb",ipa:"/ˈskruːtənaɪz/",def:"To examine very carefully.",ex:"Investors scrutinized the report."},
{w:"spontaneous",pos:"adjective",ipa:"/spɑːnˈteɪniəs/",def:"Done naturally without planning.",ex:"We took a spontaneous road trip."},
{w:"substantial",pos:"adjective",ipa:"/səbˈstænʃəl/",def:"Large in size or importance.",ex:"He made a substantial donation."},
{w:"suppress",pos:"verb",ipa:"/səˈpres/",def:"To hold back or stop.",ex:"She tried to suppress her laughter."},
{w:"tangible",pos:"adjective",ipa:"/ˈtændʒəbəl/",def:"Clear enough to be real or measured.",ex:"We need tangible results, not promises."},
{w:"tedious",pos:"adjective",ipa:"/ˈtiːdiəs/",def:"Boring and long.",ex:"Data entry is tedious work."},
{w:"undermine",pos:"verb",ipa:"/ˌʌndərˈmaɪn/",def:"To gradually weaken.",ex:"Constant criticism undermines confidence."}
];
var SENTENCES = [
{s:"Would you mind clarifying that?",m:"A polite way to ask for an explanation."},
{s:"I wanted to follow up on our conversation.",m:"Use this when contacting someone again about a previous topic."},
{s:"Please don't hesitate to reach out.",m:"A formal way to say “contact me anytime.”"},
{s:"I appreciate your prompt response.",m:"Thank someone for replying quickly. (email-friendly)"},
{s:"Could you shed some light on this?",m:"Ask someone to explain something unclear."},
{s:"Let's touch base next week.",m:"Let's talk again next week to share updates."},
{s:"I'm swamped with work right now.",m:"I'm extremely busy. (informal)"},
{s:"The ball is in your court.",m:"It's your turn to act or decide."},
{s:"Don't beat around the bush.",m:"Say what you mean directly."},
{s:"Don't jump to conclusions.",m:"Don't decide before you know the facts."},
{s:"Let's play it by ear.",m:"Let's decide later depending on the situation."},
{s:"I'm torn between two options.",m:"I can't decide between two choices."},
{s:"That backfired on me.",m:"My plan produced the opposite result."},
{s:"Food for thought.",m:"Something worth thinking about."},
{s:"That's the elephant in the room.",m:"The obvious problem nobody mentions."},
{s:"You hit the nail on the head.",m:"You said exactly the right thing."},
{s:"I had to bite the bullet.",m:"I forced myself to do something unpleasant."},
{s:"I've been burning the midnight oil.",m:"I've been working late into the night."},
{s:"It cost an arm and a leg.",m:"It was extremely expensive."},
{s:"Don't cut corners on quality.",m:"Don't do things cheaply or carelessly."},
{s:"I'm getting the hang of it.",m:"I'm learning how to do it."},
{s:"Let's go the extra mile.",m:"Let's make more effort than expected."},
{s:"In the long run, it's worth it.",m:"Over a long time, it will pay off."},
{s:"Don't miss the boat on this.",m:"Don't miss this opportunity."},
{s:"We need to get on the same page.",m:"We need to agree and understand each other."},
{s:"He showed up out of the blue.",m:"He appeared unexpectedly."},
{s:"It's not rocket science.",m:"It's not that difficult."},
{s:"I'm feeling a bit under the weather.",m:"I'm feeling slightly sick. (polite)"},
{s:"That's easier said than done.",m:"Saying it is easier than doing it."},
{s:"Actions speak louder than words.",m:"What you do matters more than what you say."},
{s:"It's a win-win situation.",m:"Both sides benefit."},
{s:"I can't put my finger on it.",m:"I sense something but can't explain what."},
{s:"Let's get down to business.",m:"Let's start working seriously."},
{s:"Time is of the essence.",m:"We must act quickly. (formal)"},
{s:"I'll keep you in the loop.",m:"I'll keep you informed."},
{s:"That rings a bell.",m:"That sounds familiar."},
{s:"I'm all ears.",m:"I'm listening carefully."},
{s:"It's a blessing in disguise.",m:"Something bad that turned out well."},
{s:"Don't count your chickens before they hatch.",m:"Don't assume success too early."},
{s:"The early bird catches the worm.",m:"People who act early get the advantage."},
{s:"When in Rome, do as the Romans do.",m:"Follow local customs when visiting somewhere new."},
{s:"Better safe than sorry.",m:"It's wiser to be careful."},
{s:"Two heads are better than one.",m:"Working together produces better ideas."},
{s:"A picture is worth a thousand words.",m:"Images explain better than descriptions."},
{s:"No pain, no gain.",m:"You must work hard to succeed."},
{s:"Kill two birds with one stone.",m:"Do two things with one action."},
{s:"Where there's a will, there's a way.",m:"If you want something enough, you'll find a way."},
{s:"Don't put all your eggs in one basket.",m:"Don't risk everything on one plan."},
{s:"Every cloud has a silver lining.",m:"Something good comes from bad situations."},
{s:"You can't judge a book by its cover.",m:"Don't judge by appearance."},
{s:"The grass is always greener on the other side.",m:"Other people's situations look better than they really are."},
{s:"Beggars can't be choosers.",m:"Be grateful for what you get when you have no choice."},
{s:"A penny saved is a penny earned.",m:"Saving money is like earning it."},
{s:"Look before you leap.",m:"Think carefully before you act."},
{s:"Honesty is the best policy.",m:"Telling the truth is always wisest."},
{s:"Rome wasn't built in a day.",m:"Great things take time."},
{s:"Curiosity killed the cat.",m:"Being too nosy can cause trouble. (playful warning)"},
{s:"Don't bite off more than you can chew.",m:"Don't take on more than you can handle."},
{s:"Let sleeping dogs lie.",m:"Don't restart old conflicts."},
{s:"The best of both worlds.",m:"The advantages of two different situations at once."}
];
(function(){
  var wOff = 0, sOff = 0;
  function dayOfYear(d){var s=new Date(d.getFullYear(),0,0);return Math.floor((d-s)/864e5);}
  function idx(off,n){var i=(dayOfYear(new Date())+off)%n;return i<0?i+n:i;}
  function fmtDate(off){var d=new Date();d.setDate(d.getDate()+off);
    return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});}
  function speak(t){try{if('speechSynthesis' in window){speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(t));}}catch(e){}}
  function render(){
    var w=WORDS[idx(wOff,WORDS.length)];
    document.getElementById('dw-word').textContent=w.w;
    document.getElementById('dw-meta').textContent=w.pos+'  '+w.ipa;
    document.getElementById('dw-def').textContent=w.def;
    document.getElementById('dw-ex').textContent='“'+w.ex+'”';
    document.getElementById('dw-date').textContent=fmtDate(wOff);
    var s=SENTENCES[idx(sOff,SENTENCES.length)];
    document.getElementById('ds-text').textContent='“'+s.s+'”';
    document.getElementById('ds-meaning').textContent=s.m;
    document.getElementById('ds-date').textContent=fmtDate(sOff);
  }
  document.getElementById('dw-prev').addEventListener('click',function(){wOff--;render();});
  document.getElementById('dw-next').addEventListener('click',function(){wOff++;render();});
  document.getElementById('ds-prev').addEventListener('click',function(){sOff--;render();});
  document.getElementById('ds-next').addEventListener('click',function(){sOff++;render();});
  document.getElementById('dw-speak').addEventListener('click',function(){
    var w=WORDS[idx(wOff,WORDS.length)];speak(w.w+'. '+w.def+' '+w.ex);});
  document.getElementById('ds-speak').addEventListener('click',function(){
    var s=SENTENCES[idx(sOff,SENTENCES.length)];speak(s.s);});
  render();
})();
