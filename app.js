'use strict';

const services = {
  "software": {
    "title": "Software & mobile applications",
    "intro": "Build software around the way your organisation works. Our services cover custom web and mobile applications, operational systems, and digital platforms.",
    "items": [
      "Custom web and mobile application development",
      "Student Management Information Systems (SMIS)",
      "Learning Management Systems (LMS)",
      "Inventory, point-of-sale, e-commerce, and database systems"
    ],
    "summary": "Custom web and mobile applications that simplify operations, support learning, and connect you with your customers.",
    "icon": "code",
    "tag": "BUILT AROUND YOUR WORK"
  },
  "ai": {
    "title": "AI, data science & analytics",
    "intro": "Turn information into useful insight. We provide artificial intelligence, data science, and analytics services alongside support for emerging technology adoption.",
    "items": [
      "Artificial intelligence solutions",
      "Machine learning applications",
      "Data science and analytics",
      "Business intelligence and digital innovation"
    ],
    "summary": "Use artificial intelligence, machine learning, and data analytics to support decisions and develop useful digital solutions.",
    "icon": "ai",
    "tag": "PUT YOUR INFORMATION TO WORK"
  },
  "networks": {
    "title": "ICT infrastructure & cloud",
    "intro": "Create the foundations for a connected organisation. Our services bring networking, cloud infrastructure, and technical support together.",
    "items": [
      "LAN and WAN installation and configuration",
      "Fibre, wireless, LTE, and VoIP solutions",
      "Cloud and digital infrastructure",
      "Server, desktop, and application support"
    ],
    "summary": "Connect your teams and systems with network installation, cloud infrastructure, and practical technical support.",
    "icon": "network",
    "tag": "A STRONGER DIGITAL FOUNDATION"
  },
  "web": {
    "title": "Web & digital presence",
    "intro": "Give your organisation a purposeful online presence. We combine website development with the domains, hosting, and email services that support it.",
    "items": [
      "Corporate and service websites",
      "E-commerce platforms",
      "Domain registration and website hosting",
      "Business email and website maintenance"
    ],
    "summary": "Professional websites, e-commerce platforms, domains, hosting, and email services that help people find and engage with you.",
    "icon": "globe",
    "tag": "MAKE EVERY CONNECTION COUNT"
  },
  "security": {
    "title": "Cybersecurity & surveillance",
    "intro": "Address your organisation’s digital and physical security needs with appropriate technology and technical guidance.",
    "items": [
      "Cybersecurity solutions and consultancy",
      "CCTV installation and maintenance",
      "Access control systems",
      "Security infrastructure solutions"
    ],
    "summary": "Cybersecurity consultancy, CCTV, access control, and security infrastructure for your organisation’s needs.",
    "icon": "shield",
    "tag": "SECURITY WITH A PRACTICAL FOCUS"
  },
  "procurement": {
    "title": "Procurement & technical support",
    "intro": "Select, deploy, and maintain the right technology for your organisation, from everyday devices to specialist IT equipment.",
    "items": [
      "Computer hardware and software supply",
      "Installation, upgrades, repairs, and maintenance",
      "Server, desktop, and application support",
      "Dedicated on-site engineering support"
    ],
    "summary": "Hardware and software supply, installation, upgrades, repairs, and support to keep your technology working.",
    "icon": "hardware",
    "tag": "THE RIGHT TOOLS AND SUPPORT"
  },
  "training": {
    "title": "Training & capacity development",
    "intro": "Build practical technology skills through training, workshops, bootcamps, mentorship, and capacity-building programmes.",
    "items": [
      "Software development and web programming",
      "AI, cybersecurity, blockchain, and data science",
      "Technical workshops and bootcamps",
      "Mentorship and workforce capacity building"
    ],
    "summary": "Practical training, workshops, bootcamps, and mentorship in digital skills and emerging technologies.",
    "icon": "learn",
    "tag": "BUILD CONFIDENCE AND CAPABILITY"
  },
  "consultancy": {
    "title": "ICT consultancy & transformation",
    "intro": "Connect technology decisions with your organisation’s priorities. We support planning, digital transformation, and project implementation.",
    "items": [
      "ICT consultancy and digital transformation advisory",
      "Project management and IT management services",
      "Blockchain solutions and consultancy",
      "Technical facilitation and workshop management"
    ],
    "summary": "Technology advice, digital transformation planning, blockchain guidance, and support for project implementation.",
    "icon": "strategy",
    "tag": "A CLEAR WAY FORWARD"
  },
  "research": {
    "title": "Research, innovation & M&E",
    "intro": "Bring research and technical knowledge into project design, delivery, and assessment. We support innovation and Monitoring and Evaluation activities.",
    "items": [
      "Research and innovation support",
      "Monitoring and Evaluation (M&E) technical support",
      "Emerging technology research",
      "Technical support for development programmes"
    ],
    "summary": "Research and innovation services, with technical support for Monitoring and Evaluation and development programmes.",
    "icon": "research",
    "tag": "INFORMED DESIGN AND DELIVERY"
  }
};
const projects = {
  "annahda": {
    "label": "EDUCATION · SOFTWARE & INFRASTRUCTURE",
    "title": "Connected campus solutions",
    "client": "Annahda College of Science and Islamic Studies",
    "body": "Supply and installation of computers, internet routers, network infrastructure, and ICT equipment, together with development and deployment of a Student Management Information System (SMIS).",
    "items": [
      "ICT equipment supply and installation",
      "Network infrastructure",
      "Student Management Information System"
    ],
    "note": "The interface artwork is illustrative.",
    "service": "software"
  },
  "almado": {
    "label": "HOSPITALITY · WEB & MOBILE APPLICATIONS",
    "title": "Restaurant services, connected",
    "client": "Almado Arabian Cuisine",
    "body": "An e-commerce website for restaurant operations and online services, supported by hosting and domain registration, with development of a restaurant mobile application solution.",
    "items": [
      "Restaurant e-commerce website",
      "Mobile application development",
      "Domain registration and hosting"
    ],
    "note": "The artwork illustrates the service area.",
    "service": "software"
  },
  "lms": {
    "label": "EDUCATION · ONLINE LEARNING",
    "title": "Learning beyond the classroom",
    "client": "Fathi-Tech Academic",
    "body": "Design and deployment of an Online Learning Management System (LMS) to support distance teaching and learning, with hosting and domain registration services.",
    "items": [
      "Online Learning Management System",
      "Distance teaching and learning",
      "Hosting and domain registration"
    ],
    "note": "The artwork illustrates the service area.",
    "service": "software"
  },
  "training": {
    "label": "CAPACITY DEVELOPMENT · 3MTT",
    "title": "Developing the next wave of tech talent",
    "client": "3 Million Technical Talent (3MTT) Programme",
    "body": "ICT training, mentorship, and capacity development for fellows under the Federal Government of Nigeria’s 3 Million Technical Talent initiative. Fathi-Tech’s company profile records participation as an approved Training Provider.",
    "items": [
      "Training in digital skills and emerging technologies",
      "Mentorship and technical guidance",
      "Fellowship capacity development"
    ],
    "note": "The displayed announcement is from the 2024 orientation programme.",
    "service": "training"
  },
  "web": {
    "label": "DIGITAL PRESENCE · WEB SERVICES",
    "title": "A digital platform for public engagement",
    "client": "Personal and campaign website for Sen. Kashim Shettima",
    "body": "Domain registration, hosting, website design, development, and maintenance for a personal and political campaign website.",
    "items": [
      "Domain registration and hosting",
      "Website design and development",
      "Website maintenance"
    ],
    "note": "The website artwork is illustrative.",
    "service": "web"
  },
  "nitda": {
    "label": "PROPOSAL · SYSTEM CONCEPT",
    "title": "Rethinking electronic waste management",
    "client": "A system proposal for NITDA",
    "body": "Development and submission of a proposed Electronic Waste Management System for the National Information Technology Development Agency (NITDA), aimed at supporting digital environmental sustainability initiatives.",
    "items": [
      "Electronic waste management system concept",
      "Proposal development and submission"
    ],
    "note": "Project status: proposal.",
    "service": "research"
  },
  "gowgil": {
    "label": "TRAVEL & TOURISM · WEB DEVELOPMENT",
    "title": "A platform for travel planning",
    "client": "Gowgil Travel & Tours Ltd.",
    "body": "Design and development of a travel and tourism website with integrated flight booking and hotel reservation functionality, supported by hosting and domain registration.",
    "items": [
      "Travel and tourism website",
      "Flight booking and hotel reservation functionality",
      "Hosting and domain registration"
    ],
    "note": "Experience documented in the company profile.",
    "service": "web"
  },
  "bluesea": {
    "label": "CORPORATE WEBSITE · CONSTRUCTION",
    "title": "Showcasing construction expertise",
    "client": "Blue Sea Services Ltd.",
    "body": "A corporate website for construction and building maintenance operations, including project showcase functionality, hosting, and domain registration.",
    "items": [
      "Corporate website development",
      "Project showcase functionality",
      "Hosting and domain registration"
    ],
    "note": "Experience documented in the company profile.",
    "service": "web"
  }
};
const people = {
  "saleh": {
    "name": "Dr. Abulfathi Ibrahim Saleh",
    "image": "assets/abulfathi-saleh-profile.webp",
    "specialism": "Information systems, AI & blockchain",
    "areas": [
      "Information systems",
      "Big data",
      "Artificial intelligence",
      "Blockchain"
    ],
    "body": "Dr. Abulfathi Ibrahim Saleh specialises in information systems management, big data, and artificial intelligence. He holds a PhD in Information Technology with a specialisation in blockchain and cryptocurrency.",
    "linkedin": "https://www.linkedin.com/in/alhussainiabulfathi/"
  },
  "adamu": {
    "name": "Prof. Adamu Abubakar Ibrahim",
    "image": "assets/adamu-ibrahim-profile.webp",
    "specialism": "Computer networks, cybersecurity & AI",
    "areas": [
      "Computer networks",
      "Network security",
      "Artificial intelligence",
      "Blockchain",
      "3D graphics"
    ],
    "body": "Prof. Adamu Abubakar Ibrahim’s areas of expertise include computer applications, computer networks and network security, artificial intelligence, blockchain, and 3D graphics. His profile includes academic work at the International Islamic University Malaysia (IIUM).",
    "linkedin": "https://www.linkedin.com/in/dr-adamu-abubakar-ibrahim-874b0243/"
  },
  "mahfooz": {
    "name": "Dr. Mahfooz Ahmed",
    "image": "assets/mahfooz-ahmed-profile.webp",
    "specialism": "Data science, hardware & networking",
    "areas": [
      "Data science",
      "Systems programming",
      "Hardware",
      "Computer networking"
    ],
    "body": "Dr. Mahfooz Ahmed’s expertise covers systems programming, hardware, and computer networking and management systems. His background includes professional certifications and postgraduate study in Data Science.",
    "linkedin": "https://www.linkedin.com/in/mahfooz-ahmed/"
  },
  "bala": {
    "name": "Engr. Bala Mairiga Abduljalil",
    "image": "assets/bala-abduljalil-profile.webp",
    "specialism": "Machine learning, data analysis & NLP",
    "areas": [
      "Machine learning",
      "Data analysis",
      "Natural language processing",
      "Sentiment analysis"
    ],
    "body": "Engr. Bala Mairiga Abduljalil is a data analyst and machine learning engineer with expertise in natural language processing, particularly sentiment analysis. His training includes a Udacity Nanodegree in Programming for Data Science with Python and the Arewa Data Science Academy Fellowship.",
    "linkedin": "https://www.linkedin.com/in/balaabduljalil/"
  }
};
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const arrow = '<svg class="icon" aria-hidden="true"><use href="#arrow-up"/></svg>';
const dialog = document.querySelector('#detail-dialog');
const dialogBody = document.querySelector('#dialog-body');
let lastFocusedElement;
let focusAfterClose;
function showDialog(html){
 lastFocusedElement=document.activeElement;
 dialogBody.innerHTML=html;
 dialog.showModal();
 document.body.classList.add('no-scroll');
}
function closeDialog(){dialog.close();}
dialog.querySelector('.dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('close',()=>{document.body.classList.remove('no-scroll');(focusAfterClose||lastFocusedElement)?.focus({preventScroll:true});focusAfterClose=null;});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
function serviceCta(key,label='Discuss this service'){return '<button class="button button-dark" type="button" data-enquire="'+key+'">'+label+' '+arrow+'</button>';}
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.service,s=services[key];
 showDialog('<p class="eyebrow">OUR SERVICES</p><h2 id="dialog-title">'+s.title+'</h2><p>'+s.intro+'</p><ul>'+s.items.map(item=>'<li>'+item+'</li>').join('')+'</ul>'+serviceCta(key));
}));
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const p=projects[button.dataset.project];
 showDialog('<p class="eyebrow">'+p.label+'</p><h2 id="dialog-title">'+p.title+'</h2><p><strong>'+p.client+'</strong></p><p>'+p.body+'</p><ul>'+p.items.map(item=>'<li>'+item+'</li>').join('')+'</ul><p class="modal-note">'+p.note+'</p>'+serviceCta(p.service,'Discuss a similar project'));
}));
document.querySelectorAll('[data-person]').forEach(button=>button.addEventListener('click',()=>{
 const p=people[button.dataset.person];
 showDialog('<img class="modal-portrait" src="'+p.image+'" alt="'+p.name+'"><p class="eyebrow">MANAGEMENT & TECHNICAL EXPERTISE</p><h2 id="dialog-title">'+p.name+'</h2><p>'+p.body+'</p><div class="modal-tags">'+p.areas.map(area=>'<span>'+area+'</span>').join('')+'</div><a class="profile-link" target="_blank" rel="noopener noreferrer" href="'+p.linkedin+'">View LinkedIn profile ↗</a><button class="button button-dark" type="button" data-enquire="other">Talk to our team '+arrow+'</button>');
}));
dialogBody.addEventListener('click',event=>{
 const button=event.target.closest('[data-enquire]');
 if(!button)return;
 document.querySelector('#service').value=button.dataset.enquire;
 focusAfterClose=document.querySelector('#name');
 closeDialog();
 location.hash='contact';
 document.querySelector('#name').focus({preventScroll:true});
});

const menuToggle=document.querySelector('.menu-toggle'), mobileNav=document.querySelector('#mobile-nav');
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;}
menuToggle.addEventListener('click',()=>{const expanded=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!expanded));menuToggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');mobileNav.hidden=expanded;});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobileNav.hidden){closeMenu();menuToggle.focus();}});
window.matchMedia('(min-width:1051px)').addEventListener('change',event=>{if(event.matches)closeMenu();});

const filters=document.querySelectorAll('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.filter;
 filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
 let count=0;
 document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=selected!=='all'&&card.dataset.category!==selected;if(!card.hidden)count++;});
 document.querySelector('#filter-status').textContent='Showing '+count+' '+(count===1?'project':'projects')+(selected==='all'?'':' in '+button.textContent.trim());
}));

document.querySelectorAll('.faq-list details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==detail)other.open=false;});}));

document.querySelector('#enquiry-form').addEventListener('submit',event=>{
 event.preventDefault();
 const form=event.currentTarget;
 const fields=['name','email','message'];
 for(const id of fields){const field=form.elements[id];field.value=field.value.trim();if(!field.value){field.reportValidity();field.focus();return;}}
 if(!form.reportValidity())return;
 const data=new FormData(form);
 const name=data.get('name').trim(), email=data.get('email').trim(), organisation=data.get('organisation').trim();
 const selected=form.elements.service.options[form.elements.service.selectedIndex].text;
 const subject='Project enquiry: '+selected;
 const body='Hello Fathi-Tech,\n\nI would like to discuss '+selected.toLowerCase()+'.\n\n'+data.get('message').trim()+'\n\nName: '+name+'\nEmail: '+email+(organisation?'\nOrganisation: '+organisation:'')+'\n\nThank you.';
 const href='mailto:info@fathitech.com.ng?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 showDialog('<p class="eyebrow">READY FOR YOUR REVIEW</p><h2 id="dialog-title">Your enquiry is prepared.</h2><p>Open your email app to review and send this message to <strong>info@fathitech.com.ng</strong>. Nothing has been sent yet.</p><pre class="draft-text">'+escapeHtml('Subject: '+subject+'\n\n'+body)+'</pre><div class="draft-actions"><a class="button button-dark" href="'+escapeHtml(href)+'">Open email app '+arrow+'</a><button class="button copy-button" type="button" id="copy-enquiry">Copy enquiry</button></div><p class="copy-status" id="copy-status" role="status" aria-live="polite">No email app? Copy the enquiry and paste it into your email service.</p>');
 document.querySelector('#copy-enquiry').addEventListener('click',async()=>{
  const status=document.querySelector('#copy-status');
  try{await navigator.clipboard.writeText('To: info@fathitech.com.ng\nSubject: '+subject+'\n\n'+body);status.textContent='Copied. Paste the enquiry into your email service and send it to info@fathitech.com.ng.';document.querySelector('#copy-enquiry').textContent='Copied ✓';}
  catch{const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(document.querySelector('.draft-text'));selection.removeAllRanges();selection.addRange(range);status.textContent='The enquiry is selected. Use your device’s Copy command, then paste it into your email service.';}
 });
});

document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}});},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
