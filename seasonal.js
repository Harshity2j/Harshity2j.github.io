(() => {
 const faqByPath={
  '/normal':[
   ['Who is Harshit Pandey?','Harshit Pandey is a performance marketing specialist based in Kolkata, India, with 6+ years of experience across paid media, brand campaigns and marketing operations.'],
   ['What marketing services does Harshit offer?','Google Ads management, Meta Ads management, conversion tracking, marketing reporting, campaign strategy, landing page reviews and AI automation.'],
   ['Which markets and businesses has Harshit worked with?','Harshit manages campaigns across the US, UK, Canada and Australia. Portfolio examples include escape room businesses and mini golf and entertainment businesses in India.'],
   ['How much do Harshit’s services cost?','Performance marketing services start from ₹25,000. Scope, deliverables, timeline and the final quote are agreed before work begins.'],
   ['How can I contact Harshit?','Call +91 9038545167 or email harshity5j@gmail.com. You can also use the enquiry form on this website.']
  ],
  '/google-ads-management':[
   ['Can you manage campaigns outside Kolkata?','Yes. My portfolio includes work across the US, UK, Canada, Australia and India. Scope and targeting depend on the business and market.'],
   ['Do you guarantee leads or ROAS?','No. Results depend on the offer, competition, budget, website, tracking and lead quality. We set expectations using your data.'],
   ['What do you need to review an account?','Your website, business goals, target locations and relevant account access. Please use platform access permissions; do not send passwords through the contact form.']
  ],
  '/meta-ads-management':[
   ['Do you run Facebook and Instagram ads?','Yes. Placements and creative formats are selected according to the campaign objective and the business.'],
   ['Will every creative produce sales?','No. Testing helps us learn, but no individual creative or campaign guarantees sales. The offer and website experience also matter.'],
   ['Can you work with my existing brand assets?','Yes. Share your brand kit, approved imagery, past creative and guidelines so the plan stays consistent with your brand.']
  ],
  '/website-design':[
   ['Can I see examples first?','Yes. The website concepts page includes ecommerce, B2B and local-business layouts to discuss before choosing a direction.'],
   ['Will SEO setup guarantee a ranking?','No. Technical setup makes the content easier to access and understand. Rankings also depend on relevance, competition, authority and time.'],
   ['Can the site support advertising?','We can plan relevant landing pages and measurement requirements alongside Google Ads or Meta Ads. The integrations included depend on the agreed scope.']
  ],
  '/escape-room-marketing':[
   ['Do I need a separate page for every room?','Separate pages can help when rooms differ meaningfully. Each page needs useful original information, not repeated text with a new room name.'],
   ['Should I advertise only at weekends?','Use booking patterns and capacity to decide. Weekdays may need different messaging or group offers, if the business genuinely provides them.'],
   ['What should I measure first?','Start with confirmed bookings, booking value, acquisition cost and availability. Traffic is supporting evidence, not the final outcome.']
  ],
  '/google-ads-clicks-no-leads':[
   ['Should I pause Google Ads if there are no leads?','If a form is broken or the business cannot handle enquiries, avoid paying for that broken journey while it is repaired. Otherwise, review tracking, relevance and the available evidence before making a broad pause decision.'],
   ['Will a bigger budget fix the problem?','Not by itself. More spend cannot repair an irrelevant offer, broken form or incorrect conversion setup.'],
   ['Does a high click-through rate mean the campaign is working?','It shows that a share of people who saw the ad clicked it. It does not establish lead quality, sales or profitability.']
  ]
 };
 function addFaqSchema(){
  const path=location.pathname.replace(/\/$/,'')||'/';
  const entries=faqByPath[path];
  if(!entries||document.getElementById('faq-structured-data'))return;
  const script=document.createElement('script');
  script.id='faq-structured-data';
  script.type='application/ld+json';
  script.textContent=JSON.stringify({
   '@context':'https://schema.org',
   '@type':'FAQPage',
   '@id':location.origin+path+'#faq',
   mainEntity:entries.map(([name,text])=>({
    '@type':'Question',name,
    acceptedAnswer:{'@type':'Answer',text}
   }))
  });
  document.head.append(script);
 }
 const dateKey = () => {
  const p = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const v = t => p.find(x=>x.type===t).value;
  return `${v('year')}-${v('month')}-${v('day')}`;
 };
 function update(){
  const day=dateKey();
  const theme=day>='2026-10-10'&&day<'2026-10-21'?'puja':day>='2026-10-21'&&day<'2026-11-01'?'halloween':'';
  document.documentElement.dataset.season=theme;
  if(!document.body)return;
  let decor=document.getElementById('halloween-decor');
  if(theme!=='halloween'){if(decor)decor.remove();}
  else if(!decor){
   decor=document.createElement('div');decor.id='halloween-decor';decor.setAttribute('aria-hidden','true');
   const pumpkin=document.createElement('span');pumpkin.className='halloween-pumpkin';pumpkin.textContent='🎃';
   const bats=document.createElement('span');bats.className='halloween-bats';
   bats.innerHTML='<svg viewBox="0 0 160 60" width="160" height="60" focusable="false"><path fill="currentColor" d="M12 30 Q15 8 30 17 L35 11 L38 20 Q53 9 62 29 Q48 22 46 34 Q36 28 32 40 Q29 29 21 34 Q21 24 12 30Z M87 17 Q93 1 104 10 L109 5 L112 12 Q126 1 139 19 Q126 13 125 23 Q112 18 108 30 Q105 21 98 24 Q99 16 87 17Z"/></svg>';
   decor.append(pumpkin,bats);document.body.append(decor);
  }
  let banner=document.getElementById('seasonal-greeting');
  if(!theme){if(banner)banner.remove();return;}
  if(!banner){banner=document.createElement('aside');banner.id='seasonal-greeting';banner.className='seasonal-greeting';banner.setAttribute('aria-label','Seasonal greeting');document.body.prepend(banner);}
  const label=theme==='puja'?'Shubho Sharodiya · Celebrating Durga Puja':'A little October magic · Happy Halloween';
  const href=theme==='puja'?'/durga-puja-google-ads':'/halloween-google-ads';
  if(banner.dataset.theme!==theme){banner.dataset.theme=theme;banner.replaceChildren();const icon=document.createElement('span');icon.className='seasonal-symbol';icon.setAttribute('aria-hidden','true');icon.textContent=theme==='puja'?'✺':'🎃';const text=document.createElement('span');text.textContent=label;const a=document.createElement('a');a.href=href;a.textContent='Seasonal Ads Guide →';banner.append(icon,text,a);}
 }
 addFaqSchema();update();document.addEventListener('DOMContentLoaded',update);document.addEventListener('visibilitychange',update);setInterval(update,60000);
})();
