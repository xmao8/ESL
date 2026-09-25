/* Daily word & sentence data for the ESLnote homepage. Rotates by day of year. */
var WORDS = [
{w:"reliable",pos:"adjective",ipa:"/rɪˈlaɪəbəl/",def:"Someone or something you can trust.",ex:"She is a reliable worker; she never misses a deadline."},
{w:"punctual",pos:"adjective",ipa:"/ˈpʌŋktʃuəl/",def:"Arriving on time.",ex:"He is always punctual for class."},
{w:"overwhelmed",pos:"adjective",ipa:"/ˌoʊvərˈwelmd/",def:"Feeling like there is too much to handle.",ex:"I felt overwhelmed by all the homework."},
{w:"deadline",pos:"noun",ipa:"/ˈdedlaɪn/",def:"The last date to finish something.",ex:"The deadline for the report is Friday."},
{w:"appointment",pos:"noun",ipa:"/əˈpɔɪntmənt/",def:"A planned meeting at a set time.",ex:"I have a dentist appointment at 3 p.m."},
{w:"negotiate",pos:"verb",ipa:"/nɪˈɡoʊʃieɪt/",def:"To discuss something to reach an agreement.",ex:"They negotiated a lower price for the car."},
{w:"refund",pos:"noun",ipa:"/ˈriːfʌnd/",def:"Money returned to you.",ex:"The store gave me a full refund."},
{w:"polite",pos:"adjective",ipa:"/pəˈlaɪt/",def:"Having good manners.",ex:"It is polite to say thank you."},
{w:"complaint",pos:"noun",ipa:"/kəmˈpleɪnt/",def:"A statement that something is wrong.",ex:"She filed a complaint about the noise."},
{w:"suggest",pos:"verb",ipa:"/səɡˈdʒest/",def:"To offer an idea.",ex:"I suggest we leave early to avoid traffic."},
{w:"borrow",pos:"verb",ipa:"/ˈbɑːroʊ/",def:"To take something and return it later.",ex:"Can I borrow your pen?"},
{w:"lend",pos:"verb",ipa:"/lend/",def:"To give something for a short time.",ex:"He lent me his umbrella."},
{w:"charge",pos:"verb",ipa:"/tʃɑːrdʒ/",def:"To ask for money as payment.",ex:"How much do you charge for parking?"},
{w:"afford",pos:"verb",ipa:"/əˈfɔːrd/",def:"To have enough money for something.",ex:"I can't afford a new car right now."},
{w:"efficient",pos:"adjective",ipa:"/ɪˈfɪʃənt/",def:"Working well without wasting time.",ex:"The new system is more efficient."},
{w:"delay",pos:"noun",ipa:"/dɪˈleɪ/",def:"When something starts later than planned.",ex:"Our flight had a two-hour delay."},
{w:"cancel",pos:"verb",ipa:"/ˈkænsəl/",def:"To stop something that was planned.",ex:"They canceled the meeting."},
{w:"reschedule",pos:"verb",ipa:"/ˌriːˈskedʒuːl/",def:"To change something to a new time.",ex:"I need to reschedule my appointment."},
{w:"notice",pos:"noun",ipa:"/ˈnoʊtɪs/",def:"Written information or a warning.",ex:"The landlord gave us a 30-day notice."},
{w:"landlord",pos:"noun",ipa:"/ˈlændlɔːrd/",def:"The owner of a rented home.",ex:"Our landlord fixed the heater."},
{w:"lease",pos:"noun",ipa:"/liːs/",def:"A rental contract.",ex:"We signed a one-year lease."},
{w:"repair",pos:"verb",ipa:"/rɪˈper/",def:"To fix something broken.",ex:"He repaired the washing machine."},
{w:"receipt",pos:"noun",ipa:"/rɪˈsiːt/",def:"Proof of payment.",ex:"Keep your receipt in case you need a refund."},
{w:"tip",pos:"noun",ipa:"/tɪp/",def:"Extra money given for good service.",ex:"We left a 15% tip at the restaurant."},
{w:"bill",pos:"noun",ipa:"/bɪl/",def:"A request for payment.",ex:"The electric bill arrived yesterday."},
{w:"reservation",pos:"noun",ipa:"/ˌrezərˈveɪʃən/",def:"A booked table or seat.",ex:"Do you have a reservation for tonight?"},
{w:"allergy",pos:"noun",ipa:"/ˈælərdʒi/",def:"A bad body reaction to something.",ex:"She has an allergy to peanuts."},
{w:"prescription",pos:"noun",ipa:"/prɪˈskrɪpʃən/",def:"Medicine ordered by a doctor.",ex:"The doctor gave me a prescription."},
{w:"symptom",pos:"noun",ipa:"/ˈsɪmptəm/",def:"A sign of illness.",ex:"Fever is a common symptom of the flu."},
{w:"dizzy",pos:"adjective",ipa:"/ˈdɪzi/",def:"Feeling like the room is spinning.",ex:"I felt dizzy and sat down."},
{w:"insurance",pos:"noun",ipa:"/ɪnˈʃʊrəns/",def:"Protection you pay for against loss or damage.",ex:"Car insurance is required in California."},
{w:"claim",pos:"noun",ipa:"/kleɪm/",def:"A request for an insurance payment.",ex:"She filed a claim after the accident."},
{w:"résumé",pos:"noun",ipa:"/ˈrezʊmeɪ/",def:"A summary of your work history.",ex:"Send your résumé before Friday."},
{w:"interview",pos:"noun",ipa:"/ˈɪntərvjuː/",def:"A meeting to get a job.",ex:"I have a job interview tomorrow."},
{w:"shift",pos:"noun",ipa:"/ʃɪft/",def:"A set period of work.",ex:"She works the night shift."},
{w:"overtime",pos:"noun",ipa:"/ˈoʊvərtaɪm/",def:"Extra work hours beyond the normal schedule.",ex:"He earned overtime pay this week."},
{w:"paycheck",pos:"noun",ipa:"/ˈpeɪtʃek/",def:"Money paid for work.",ex:"My paycheck arrives every two weeks."},
{w:"tax",pos:"noun",ipa:"/tæks/",def:"Money paid to the government.",ex:"We pay sales tax on most items."},
{w:"budget",pos:"noun",ipa:"/ˈbʌdʒɪt/",def:"A plan for spending money.",ex:"We made a monthly budget."},
{w:"savings",pos:"noun",ipa:"/ˈseɪvɪŋz/",def:"Money kept for later use.",ex:"She put $200 into savings."},
{w:"debt",pos:"noun",ipa:"/det/",def:"Money you owe.",ex:"He paid off his credit card debt."},
{w:"credit",pos:"noun",ipa:"/ˈkredɪt/",def:"Money you borrow and pay back later.",ex:"Do you want to pay with credit or cash?"},
{w:"transfer",pos:"verb",ipa:"/trænsˈfɜːr/",def:"To move money to another account or person.",ex:"I transferred $50 to my son."},
{w:"discount",pos:"noun",ipa:"/ˈdɪskaʊnt/",def:"A lower price.",ex:"Seniors get a 10% discount."},
{w:"coupon",pos:"noun",ipa:"/ˈkuːpɑːn/",def:"A ticket that gives you a discount.",ex:"I used a coupon at the grocery store."},
{w:"warranty",pos:"noun",ipa:"/ˈwɔːrənti/",def:"A promise to repair a product for a period of time.",ex:"The phone has a one-year warranty."},
{w:"durable",pos:"adjective",ipa:"/ˈdʊrəbəl/",def:"Strong and long-lasting.",ex:"These shoes are very durable."},
{w:"fragile",pos:"adjective",ipa:"/ˈfrædʒaɪl/",def:"Easily broken.",ex:"The box says fragile — handle with care."},
{w:"urgent",pos:"adjective",ipa:"/ˈɜːrdʒənt/",def:"Needing action right now.",ex:"This is urgent; please call back today."},
{w:"patient",pos:"adjective",ipa:"/ˈpeɪʃənt/",def:"Able to wait calmly.",ex:"The teacher was patient with us."},
{w:"generous",pos:"adjective",ipa:"/ˈdʒenərəs/",def:"Giving freely.",ex:"He made a generous donation."},
{w:"honest",pos:"adjective",ipa:"/ˈɑːnɪst/",def:"Truthful.",ex:"Be honest about the mistake."},
{w:"confuse",pos:"verb",ipa:"/kənˈfjuːz/",def:"To make something unclear.",ex:"The instructions confused me."},
{w:"remind",pos:"verb",ipa:"/rɪˈmaɪnd/",def:"To help someone remember.",ex:"Remind me to call the bank."},
{w:"convenient",pos:"adjective",ipa:"/kənˈviːniənt/",def:"Easy and useful.",ex:"The store is convenient; it's near my home."},
{w:"crowded",pos:"adjective",ipa:"/ˈkraʊdɪd/",def:"Full of people.",ex:"The bus was crowded this morning."},
{w:"exhausted",pos:"adjective",ipa:"/ɪɡˈzɔːstɪd/",def:"Very tired.",ex:"After the long day, I was exhausted."},
{w:"curious",pos:"adjective",ipa:"/ˈkjʊriəs/",def:"Wanting to learn more.",ex:"The children were curious about the new student."},
{w:"proud",pos:"adjective",ipa:"/praʊd/",def:"Feeling pleased about something.",ex:"She is proud of her English progress."},
{w:"familiar",pos:"adjective",ipa:"/fəˈmɪliər/",def:"Well known.",ex:"This street looks familiar to me."}
];
var SENTENCES = [
{s:"Could you speak more slowly, please?",m:"Use this when you can't follow someone's English."},
{s:"What does this word mean?",m:"A simple way to ask about new vocabulary."},
{s:"How much does this cost?",m:"Ask the price of anything."},
{s:"Where is the nearest bus stop?",m:"Replace “bus stop” with anything you need to find."},
{s:"I'd like to make an appointment.",m:"Use this at a clinic, salon, or office."},
{s:"Can I get a receipt, please?",m:"Always ask when you may need a refund later."},
{s:"I'm allergic to peanuts.",m:"Important to say at restaurants."},
{s:"Could you help me with this?",m:"A polite way to ask for help."},
{s:"What time does it open?",m:"Ask about stores, offices, or clinics."},
{s:"Is this seat taken?",m:"Ask before sitting down in a public place."},
{s:"I'll have the chicken, please.",m:"A polite way to order food."},
{s:"The check, please.",m:"Ask for the bill at a restaurant."},
{s:"Can I try this on?",m:"Ask in a clothing store before buying."},
{s:"Do you have this in a larger size?",m:"Useful when shopping for clothes."},
{s:"I'd like to return this.",m:"Start a return at a store."},
{s:"My flight is delayed.",m:"Tell someone when your travel plans change."},
{s:"I need to reschedule our meeting.",m:"A polite way to change plans."},
{s:"Sorry, I have to cancel.",m:"Use this when you cannot come."},
{s:"Let me check my calendar.",m:"Say this before agreeing to a time."},
{s:"I'll be ten minutes late.",m:"Tell people when you're running behind."},
{s:"Thanks for waiting.",m:"Say this when someone waited for you."},
{s:"Nice to meet you.",m:"Say this when meeting someone for the first time."},
{s:"How's it going?",m:"A friendly greeting. Answer: “Good, thanks!”"},
{s:"See you later!",m:"A casual goodbye."},
{s:"Have a good day!",m:"A warm way to end a conversation."},
{s:"Take care!",m:"Say this when saying goodbye to someone."},
{s:"I'm looking for a job.",m:"Tell people you're job hunting."},
{s:"I have an interview tomorrow.",m:"Share your good news."},
{s:"What time do I start?",m:"Ask this on your first day of work."},
{s:"Can I take a day off next Friday?",m:"Ask your boss politely."},
{s:"My car broke down.",m:"Explain car trouble."},
{s:"I need a ride to the airport.",m:"Ask a friend for help."},
{s:"Could you give me a hand?",m:"An informal way to ask for help. (“Give me a hand” = help me.)"},
{s:"It's on the tip of my tongue.",m:"You almost remember something but can't say it yet."},
{s:"It's raining cats and dogs.",m:"It's raining very heavily. (informal idiom)"},
{s:"Break a leg!",m:"It means “Good luck!” — said before a test or performance."},
{s:"It's a piece of cake.",m:"It's very easy."},
{s:"I'm feeling under the weather.",m:"I'm feeling sick."},
{s:"Let's call it a day.",m:"Let's stop working for today."},
{s:"That sounds great!",m:"Show you like an idea."},
{s:"I have no idea.",m:"I don't know."},
{s:"No worries!",m:"It's fine — don't worry about it."},
{s:"That makes sense.",m:"I understand your point."},
{s:"Could you repeat that?",m:"Ask someone to say it again."},
{s:"How do you spell that?",m:"Ask when you need the spelling."},
{s:"What do you do for work?",m:"Ask about someone's job."},
{s:"How long have you lived here?",m:"A good small-talk question."},
{s:"It's nice and cool today.",m:"Comment on the weather."},
{s:"I'm just looking, thanks.",m:"Tell a salesperson you don't need help."},
{s:"This is on sale.",m:"The price is reduced right now."},
{s:"Do you accept credit cards?",m:"Ask before you pay."},
{s:"Keep the change.",m:"Tell the driver or server to keep the extra money as a tip."},
{s:"I'm full.",m:"You've eaten enough."},
{s:"I'm starving!",m:"I'm very hungry. (informal)"},
{s:"I'm stuck in traffic.",m:"Explain why you're late."},
{s:"The Wi-Fi isn't working.",m:"Report a connection problem."},
{s:"My phone died.",m:"My phone's battery ran out."},
{s:"I locked myself out.",m:"I can't get into my house or car."},
{s:"Practice makes perfect.",m:"You improve by practicing regularly."},
{s:"Better late than never.",m:"It's better to do something late than not at all."}
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
