import{_ as f,o as i,c as n,a as t,r as p,n as g,g as _,v,h as b,i as w,b as m,w as l,T as y,F as k,j as I,k as S,t as o}from"./entry.4b493ba2.js";const D={data(){return{isOpen:!1}},methods:{toggleAccordion(){this.isOpen=!this.isOpen}}},j=["aria-expanded","aria-controls"],T=t("path",{d:"M15 1.2l-7 7-7-7","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A=[T],M=["id"];function N(s,c,u,x,e,r){return i(),n("div",null,[t("button",{onClick:c[0]||(c[0]=d=>r.toggleAccordion()),class:"flex items-center space-x-3 w-full","aria-expanded":e.isOpen,"aria-controls":`collapse${s._uid}`},[p(s.$slots,"title"),(i(),n("svg",{class:g(["w-3 transition-all duration-200 transform",{"rotate-180":e.isOpen,"rotate-0":!e.isOpen}]),fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 10","aria-hidden":"true"},A,2))],8,j),_(t("div",{id:`collapse${s._uid}`},[p(s.$slots,"content")],8,M),[[v,e.isOpen]])])}const h=f(D,[["render",N]]),F=""+new URL("profile.5e825af2.png",import.meta.url).href,P=[{id:0,comp:"Self Employed",time:"Now",pos:"Frontend Developer",stack:"VueJS, NuxtJS, Tailwind, Vuetify",desc:"I had the privilege of contributing to diverse projects spanning a wide range of client backgrounds. My portfolio includes crafting engaging company profiles, building dynamic online-shop sites, and designing captivating landing pages. Eager to learn the new things."},{id:1,comp:"PT. Cahaya Fortuna Sejati",time:"Aug 17 - Nov 18",pos:"IT Support",stack:"",desc:"In this time, I had responsibility to install, manage, and maintaining all of the IT equipments like CCTV, LAN, WAN, Mail Server, and Personal Computer"},{id:2,comp:"PT. Telkom Akses",time:"Feb 21 - Mar 21",pos:"Internship",stack:"",desc:"I have learned the technology of Optical Fiber connection, the FTTH technology, and Digitalisasi SPBU projects."},{id:3,comp:"PSIS Semarang",time:"Sep 23 - Now",pos:"Technical & IT Engineer",stack:"",desc:"With the vendor, I'm doing some project in this company. Automatic gate for the Jatidiri Stadium, PSIS Apps for club information, ticketing service, and e-commerce, and LED Perimeter Board for displaying ads on the stadium's pitch side."}];const C={components:{Accordion:h},data(){return{ProfileImg:F,expData:P}},computed:{cutExpData(){return this.expData.filter(s=>s.id>0)},isDarkTheme:()=>b().darkTheme}},E=t("div",{class:"md:mb-24"},[t("div",null,[t("div",{class:"font-roboto text-4xl md:text-[9rem] leading-none md:leading-tight uppercase"}," Hello World. ")]),t("div",{class:"flex font-roboto text-xl md:text-3xl md:ml-2"}," My name is Dzakwan. Frontend Developer born in Sleman based in Semarang, Indonesia. I build functional, responsive, and accessible websites which will be the face of your company. ")],-1),B={id:"about-me",class:"md:flex py-10"},O=t("div",{class:"flex-col mb-6 md:mb-0 md:w-5/12 md:sticky md:top-20 h-max"},[t("div",{class:"font-roboto font-regular text-xl"},"About Me"),t("div",{class:"text-sm text-gray-700 dark:text-gray-400"}," Get to know about Me. ")],-1),V={class:"flex-col md:w-6/12"},$={class:"h-min mb-10"},z={key:0,class:"font-roboto font-light text-3xl md:text-4xl text-[#1a202c]"},L={key:1,class:"font-roboto font-light text-3xl md:text-4xl text-[#f6f6f6]"},J=t("div",{class:"font-roboto font-light text-base mb-4"},` Haven't too long in the Frontend Development, I begin my journey at the Q4 of 2022 with my Bachelor's final project with Vue.js 2 and Vuetify stack. After that, I'm trying to do more project for My portofolio which you could find in My "Project" section. Now I'm focused with Frontend Development with Vue.js and Nuxt.js, still learning with "learning by doing" method. But if expected, I'm open to learn another stack to fullfil your requirements. `,-1),q=t("div",{class:"font-roboto font-light text-base mb-4"}," I have done some paid project that bring some challenge to me. From that experience, I have learn a lot about teamwork, effective works, and creativity which I will never stop just only with them. ",-1),H=t("div",{class:"font-roboto font-light text-base"},` Spent almost my free time for gaming like MOBA, Racing Sim, Strategies, etc. My motto "Experience from Experiments" means you will never know if you haven't tried yet. It's okay to fail, keep failing until no more fail comes to you. `,-1),R={id:"experience",class:"md:flex py-10"},W=t("div",{class:"flex-col mb-6 md:mb-0 md:w-5/12 md:top-20 h-max"},[t("div",{class:"font-roboto font-regular text-xl"},"Experience"),t("div",{class:"text-sm text-gray-700 dark:text-gray-400"}," Just My little work experience. ")],-1),G={class:"md:w-6/12 font-roboto"},U={class:"flex w-full text-start justify-between"},Q={class:"w-2/4 font-light text-xs md:text-base"},K={class:"w-1/4 font-light text-xs md:text-base"},X={class:"w-1/4 font-light text-xs md:text-base"},Y={class:"font-roboto pt-4 font-light"},Z=t("p",{class:"font-roboto pt-4 font-light text-emerald-600"}," I'm actively seeking opportunities to collaborate within a team environment, where I can contribute my expertise and continue to learn and grow. ",-1),tt={class:"flex mt-4 items-center"},et=t("div",{class:"mr-4"},"Stacks:",-1),ot={class:"rounded-lg dark:bg-[#f6f6f6] bg-[#1a202c] text-[#f6f6f6] dark:text-[#1a202c] p-2 text-sm"},st=t("div",{class:"bg-current h-px w-full mb-4"},null,-1),it={class:"flex w-full text-start justify-between"},nt={class:"w-2/4 font-light text-xs md:text-base"},at={class:"w-1/4 font-light text-xs md:text-base"},lt={class:"w-1/4 font-light text-xs md:text-base"},rt={class:"font-roboto pt-4 font-light"},ct=t("div",{class:"bg-current h-px w-full mb-4"},null,-1),dt=S('<div class="hidden md:flex bg-current h-px w-full mb-4"></div><div id="email" class="md:flex py-10"><div class="flex-col mb-6 md:mb-0 md:w-5/12"><div class="text-sm text-gray-700 dark:text-gray-400"> Ready to start a project? </div><div class="font-roboto font-regular text-xl">Let&#39;s collaborate!</div></div><div class="flex-col md:w-6/12"><div class="font-roboto font-light text-l">Contact me at:</div><div class="flex justify-start w-full"><a href="mailto:diegodzakwan@gmail.com" class="font-roboto text-xl group transition duration-300"> diegodzakwan@gmail.com <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-current"></span></a></div></div></div>',2);function mt(s,c,u,x,e,r){const d=h;return i(),n("div",null,[E,t("div",B,[O,t("div",V,[t("div",{class:"w-1/2 md:w-1/4 rounded-xl group aspect-square relative overflow-hidden bg-gray-400 mb-4",style:w([{backgroundImage:`url(${e.ProfileImg})`},{"background-size":"cover","background-position":"center center",opacity:"1",transform:"none"}])},null,4),t("div",$,[m(y,{name:"text"},{default:l(()=>[r.isDarkTheme?(i(),n("div",L," Night Gamer. ")):(i(),n("div",z," Day Coder, "))]),_:1})]),J,q,H])]),t("div",R,[W,t("div",G,[m(d,{class:"mb-2 w-full"},{title:l(()=>[t("div",U,[t("div",Q,o(e.expData[0].comp),1),t("div",K,o(e.expData[0].time),1),t("div",X,o(e.expData[0].pos),1)])]),content:l(()=>[t("p",Y,o(e.expData[0].desc),1),Z,t("div",tt,[et,t("div",ot,o(e.expData[0].stack),1)])]),_:1}),st,(i(!0),n(k,null,I(r.cutExpData,a=>(i(),n("div",{key:a.id},[m(d,{class:"mb-2 w-full"},{title:l(()=>[t("div",it,[t("div",nt,o(a.comp),1),t("div",at,o(a.time),1),t("div",lt,o(a.pos),1)])]),content:l(()=>[t("p",rt,o(a.desc),1)]),_:2},1024),ct]))),128))])]),dt])}const ft=f(C,[["render",mt]]);export{ft as default};
