(()=>{
'use strict';

const CONFIG=window.__BS_CONFIG__;

const APP={

 init(){

  this.images();

  this.links();

  this.performance();

 },

 images(){

  document.querySelectorAll('img').forEach(img=>{

   img.loading='lazy';

   img.decoding='async';

   if(img.src.includes('raw.githubusercontent.com')){

    img.src=img.src.replace(
     'raw.githubusercontent.com',
     'cdn.jsdelivr.net/gh'
    );

   }

  });

 },

 links(){

  document.querySelectorAll('a').forEach(link=>{

   if(link.hostname!==location.hostname){

    link.rel='noopener noreferrer';

    link.target='_blank';

   }

  });

 },

 performance(){

  if('requestIdleCallback' in window){

   requestIdleCallback(()=>{

    console.log('Advanced Blogger System Loaded');

   });

  }

 },

 async loadPost(id){

  try{

   const response=await fetch(
    `${CONFIG.API}/api/post?id=${id}`
   );

   if(!response.ok) return null;

   return await response.json();

  }catch(e){

   return null;

  }

 }

};

window.loadPost=APP.loadPost;

APP.init();

})();
