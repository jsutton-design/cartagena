/* Cartagena trip app - offline cache */
/* build a4a6dbed3c - changing this string is what makes iOS fetch the new version */
const C='ctg-a4a6dbed3c';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
  const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res;
 }).catch(()=>caches.match('./index.html'))));
});