!function(){"use strict";function e(){dataLayer.push(arguments)}var t,i,n,a,s,o,r,c,d,u,l,m,p;window.PAD={},PAD.Data={},PAD.Options={bgColor:4676730,skyColor:16563053,hotspotColor:15714648,fog:!0,minDistance:30,maxDistance:80,minPolarAngle:25,maxPolarAngle:55,showLights:!1},PAD.Data.Global={geometry:[{name:"WorldFloor",geometry:new THREE.PlaneBufferGeometry(256,256,1,1),position:[0,0,0],rotation:[-90,0,0]}],sceneLights:[{type:"Ambient",intensity:.5},{type:"Hemisphere",sky:PAD.Options.skyColor,ground:PAD.Options.bgColor,intensity:.5},{type:"Point",color:14644633,position:[1.9,7.5,-5],shadow:!0,intensity:.2},{type:"Point",color:11725047,position:[1.9,20,5.1],shadow:!0,intensity:.3},{type:"Point",color:14644633,position:[1.9,7.5,20],shadow:!0,intensity:.2},{type:"Point",color:14644633,position:[1.9,7.5,-15],shadow:!0,intensity:.2}]},PAD.Data.Site3={models:[{name:"floor",path:"assets/models/site3/site3-floor.json",castShadow:!1},{name:"layout",path:"assets/models/site3/site3-layout.json"}],hotspots:[{name:"handwash",position:[8.24,3,21.6],data:{type:"image",url:"images/site3/hand-wash.jpg",title:"Hand Washing",description:"<p>All patients are encouraged to wash their hands as they enter into the clinic.</p>"}},{name:"touchscreen",position:[6.5,3,14.34],data:{type:"video",id:"87651855",title:"Touch Screen",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"waiting-cafe",position:[13.92,3,13.74],data:{type:"image",url:"https://placekitten.com/1920/1080",title:"Waiting Area (Cafe)",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"waiting-bench",position:[11.48,3,2.66],data:{type:"image",url:"https://placekitten.com/1920/1080",title:"Wating Area (Benches)",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"waiting-corner",position:[9.78,3,1.24],data:{type:"video",id:"87651855",title:"Waiting Area (Corner)",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"toilets",position:[22.38,6,3.18],data:{type:"video",id:"87651855",comments:!0,title:"Toilets",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"spiro",position:[-.32,3,23.06],data:{type:"text",title:"Pulmonary Function",description:"So in spirometry you will blow into the machine and they will put a new mouthpiece on so that it’s completely hygienic…you’re touching equipment and you’re going to touch things, naturally door handles, so they squirt some hand sanitizer in your hand and you rub that in…"}},{name:"monday",position:[-8.58,6,6.96],data:{type:"text",title:"Monday Clinic",description:"Different days of the week and different spaces for different bacterial ‘cohorts’",floor:"assets/textures/site3/site3-floor.mp4"}}]},PAD.Data.Pavilion={models:[{name:"floor",path:"assets/models/pavilion/pavilion-floor.json",scale:[.65,.65,.65]},{name:"beds",path:"assets/models/pavilion/pavilion-beds.json",scale:[.65,.65,.65]},{name:"layout",path:"assets/models/pavilion/pavilion-layout.json",scale:[.65,.65,.65]}],hotspots:[{name:"ward",position:[-.1,7,4.36],data:{type:"image",url:"https://placekitten.com/1920/1080",title:"Main Ward",description:"The main ward."}},{name:"vestible",position:[-.1,5,-8.44],comments:!0,data:{type:"text",title:"Vestibles",description:"<p>Everyone was infested with head and body lice. But never fear, they had an amazing cure for this: mercury! 18th century Europe had a love affair with mercury. They ate it, they rubbed it on their skin, and then they went batshit crazy and died. On the positive side – at least it killed the lice first!</p>"}},{name:"surgery",position:[-14.5,5,-13.8],data:{type:"video",id:"108018156",title:"Surgery",description:"<p>Another description</p>"}},{name:"kitchen",position:[5.14,5,-15.06],data:{type:"image",url:"https://placekitten.com/1280/960/",title:"Kitchens",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"baths",position:[16.16,6.28,-11.06],comments:!0,data:{type:"text",title:"18th Century Bathrooms",description:"<p>Everyone was infested with head and body lice. But never fear, they had an amazing cure for this: mercury! 18th century Europe had a love affair with mercury. They ate it, they rubbed it on their skin, and then they went batshit crazy and died. On the positive side – at least it killed the lice first!</p>"}},{name:"porch",position:[-.1,7.48,17.06],data:{type:"video",id:"87651855",title:"Southern Porch",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}},{name:"surgery2",position:[-12.4,3.44,-11.32],data:{type:"video",id:"87651855",title:"Surgery (Corner)",description:"<p>Etiam sodales sagittis risus. Mauris aliquet ultricies erat, id venenatis libero laoreet sit amet. Ut quis viverra enim, vitae molestie massa. Sed sed arcu nec magna vulputate accumsan. Donec tincidunt efficitur ex non tincidunt. Maecenas ac sapien augue. Praesent vulputate sem ac elit condimentum tincidunt. Suspendisse ultricies est nec varius fermentum. In hac habitasse platea dictumst.</p>"}}]},PAD.Helpers={degRad:function e(t){return t*Math.PI/180},loadModels:function e(t,i){var n=new THREE.ObjectLoader;i.forEach(function(e){n.load(e.path,function(i){i.children.forEach(function(i){var n=new THREE.MeshPhongMaterial({color:16777215,flatShading:!0,side:THREE.DoubleSide});i.material=e.material||n,i.name=e.name,i.castShadow=e.castShadow||!0,i.receiveShadow=e.receiveShadow||!1,e.scale&&i.scale.set(e.scale[0],e.scale[1],e.scale[2]),t.add(i)})})})},loadGeometry:function e(t,i){i.forEach(function(e){var i=new THREE.MeshPhongMaterial({color:16777215,flatShading:!0,side:THREE.DoubleSide}),n=new THREE.Mesh(e.geometry,e.material||i);n.position.set(e.position[0],e.position[1],e.position[2]),n.rotation.set(PAD.Helpers.degRad(e.rotation[0]),PAD.Helpers.degRad(e.rotation[1]),PAD.Helpers.degRad(e.rotation[2])),n.name=e.name,n.receiveShadow=e.receiveShadow||!0,n.castShadow=e.castShadow||!1,t.add(n)})}},PAD.Events=function(){function e(e,t){n[e]=n[e]||[],n[e].push(t)}function t(e,t){if(n[e])for(var i=0;i<n[e].length;i++)if(n[e][i]===t){n[e].splice(i,1);break}}function i(e,t){n[e]&&n[e].forEach(function(e){e(t)})}var n={};return{on:e,off:t,emit:i}}(),PAD.Canvas=(t=document.getElementById("stage"),i=t.offsetWidth,n=t.offsetHeight,a=new THREE.Scene,s=new THREE.PerspectiveCamera(45,i/n,.01,1e3),o=new THREE.Color(PAD.Options.bgColor),r=new THREE.Color(PAD.Options.bgColor),c=new THREE.WebGLRenderer,d=new THREE.OrbitControls(s,t),u=function e(){i=t.offsetWidth,n=t.offsetHeight,s.aspect=i/n,s.updateProjectionMatrix(),c.setSize(i,n),PAD.Events.emit("windowResize")},l=function e(){PAD.Events.emit("sceneUpdate")},m=function e(){c.render(a,s),PAD.Events.emit("sceneRender")},p=function e(){requestAnimationFrame(e),l(),m()},a.background=o,a.name="Scene",PAD.Options.fog&&(a.fog=new THREE.Fog(r,0,2*PAD.Options.maxDistance)),s.position.set(0,0,50),s.name="Camera",d.minDistance=PAD.Options.minDistance,d.maxDistance=PAD.Options.maxDistance,d.maxPolarAngle=PAD.Helpers.degRad(PAD.Options.maxPolarAngle),d.minPolarAngle=PAD.Helpers.degRad(PAD.Options.minPolarAngle),d.enableKeys=!0,d.update(),c.setSize(i,n),c.shadowMap.enabled=!0,c.shadowMapSoft=!0,t.appendChild(c.domElement),window.addEventListener("resize",u),p(),window.scene=a,{scene:a,camera:s,controls:d,renderer:c,stage:t}),PAD.SceneLights=function(e,t){var i=PAD.Options.showLights,n=new THREE.Group,a;n.name="SceneLights";var s=function e(t){var i=new THREE.DirectionalLight(t.color);i.position.set(t.position[0],t.position[1],t.position[2]),i.castShadow=t.shadow,i.name=t.name||null,n.add(i)},o=function e(t){var i=new THREE.AmbientLight(t.color||4210752,t.intensity||1);i.name=t.name||"Ambient",n.add(i)},r=function e(t){var s=new THREE.PointLight(t.color,t.intensity,t.distance||0,t.decay||2);s.position.set(t.position[0],t.position[1],t.position[2]),i&&s.add(new THREE.Mesh(a,new THREE.MeshBasicMaterial({color:t.color}))),s.castShadow=t.shadow,s.name=t.name||"Point"+t.color,n.add(s)},c=function e(t){var i=new THREE.HemisphereLight(t.sky,t.ground,t.intensity||1);i.name=t.name||"Sky",n.add(i)};i&&(a=new THREE.SphereBufferGeometry(.25,16,8)),t.forEach(function(e){switch(e.type){case"Directional":s(e);break;case"Ambient":o(e);break;case"Point":r(e);break;case"Hemisphere":c(e);break;default:break}}),e.add(n)},PAD.Hotspots=function(e,t){var i=PAD.Options.hotspotColor,n=new THREE.ConeBufferGeometry(.4,1.2,16),a=new THREE.Group,s=document.querySelector(".counter span"),o=0,r=function e(t){s.innerHTML=parseInt(s.innerHTML)+t},c=function e(t){r(t)},d=function e(t){r(-t)},u=function e(t){0==t.clicked&&(d(1),t.clicked=!0)},l=function t(){e.rotation.y+=PAD.Helpers.degRad(.07)},m=function e(t){PAD.Media(t),PAD.Events.off("sceneUpdate",l),t.material.emissiveIntensity=0},p=function e(t){u(t.userData)},h=function e(t){PAD.Events.on("sceneUpdate",l),u(t.userData)};t.forEach(function(t){var s=0,r=.01+.005*o,c=new THREE.MeshLambertMaterial({color:i,emissive:i,emissiveIntensity:.6}),d=new THREE.Mesh(n,c);d.rotation.x=PAD.Helpers.degRad(180),d.position.set(t.position[0],t.position[1],t.position[2]),d.name="hotspot-"+t.name,d.userData=t.data,d.userData.clicked=!1,t.comments&&(d.userData.comments=!0,d.userData.commentID=(e.name+"-"+t.name).toLowerCase()),PAD.Events.on("sceneUpdate",function(){s+=r,d.position.y=t.position[1]+Math.sin(s)}),a.add(d),o++}),a.name="hotspots",c(o),e.add(a),PAD.Raycaster(a,e.name),PAD.Events.on("sceneUpdate",l),PAD.Events.on(e.name+"_prevItem",p),PAD.Events.on(e.name+"_newItem",m),PAD.Events.on(e.name+"_noItem",h)},PAD.Raycaster=function(e,t){function i(t){var i=new THREE.Raycaster,n={x:0,y:0},a=new THREE.Vector3,s=PAD.Canvas.camera,o=PAD.Canvas.stage,r=o.getBoundingClientRect(),c=r.top+document.body.scrollTop,d=r.left+document.body.scrollLeft,u=a.clone().unproject(s);return n.x=(t.clientX-d)/o.offsetWidth*2-1,n.y=-((t.clientY-c)/o.offsetHeight*2-1),u.set(n.x,n.y,.5),u.unproject(s),i.set(s.position,u.sub(s.position).normalize()),i.intersectObjects(e.children,!0)}function n(e){e.preventDefault();var n=i(e);if(n.length>0){var s=n[0].object;a==s?PAD.Events.emit(t+"_currentItem",s):a!=s&&(a&&PAD.Events.emit(t+"_prevItem",a),a=s,PAD.Events.emit(t+"_newItem",s))}else a&&PAD.Events.emit(t+"_noItem",a),a=null}var a,s=PAD.Canvas.renderer;PAD.Events.on("sceneRender",function(){s.domElement.addEventListener("click",n),s.domElement.addEventListener("touchend",n)})},PAD.Comments=function(e){var t=window.location.origin+"/#!demo"+e;DISQUS.reset({reload:!0,config:function i(){this.page.identifier="demo"+e,this.page.url=t}})},PAD.Texture=function(e){function t(){4===n.readyState?(i.material.map=a,i.material.needsUpdate=!0):setTimeout(t,100)}var i=PAD.Canvas.scene.getObjectByName("floor");if(null==e||""==e)return i.material.map=null,void(i.material.needsUpdate=!0);var n=document.getElementById("texture"),a=new THREE.VideoTexture(n,THREE.UVMapping);a.minFilter=THREE.LinearFilter,a.magFilter=THREE.LinearFilter,a.format=THREE.RGBFormat,n.src=e,n.play(),t()},PAD.Media=function(e){function t(){var e=document.getElementById("videoStage"),t=document.querySelectorAll("#player");t[0].setAttribute("data-plyr-embed-id",s.id),c=Plyr.setup(t,{title:"Example Title",autoplay:!0}),e.classList.add("open"),a()}function i(){var e=document.getElementById("imageStage");e.style.backgroundImage="url( ".concat(s.url," )"),e.classList.add("open"),a()}function n(){var e="<h1>Pathways, Practices and Architectures</h1><p>The PARC Project is exploring antimicrobial resistance and how cross infection is managed in cystic fibrosis clinics, using qualitative methods, including creative visual approaches. It is a multidisciplinary project involving sociologists of medicine and science, an academic architect, micro-biologists and a graphic artist. The research compares the way three outpatient lung infection clinics attempt to control AMR and cross-infection through the design, practices and architectural layout of their built environments. For further information contact Nik Brown (nik.brown@york.ac.uk) or Chrissy Buse (christina.buse@york.ac.uk).</p>";o.innerHTML=e}function a(){o.innerHTML="<h1>".concat(s.title,"</h1> ").concat(s.description),s.comments&&(o.innerHTML+="<div id='disqus_thread'></div>",PAD.Comments(s.commentID)),setTimeout(function(){PAD.Canvas.renderer.domElement.click()},2e3)}var s=e.userData,o=document.querySelector(".content"),r,c;switch(document.querySelectorAll(".close").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),this.parentElement.classList.remove("open"),PAD.Canvas.renderer.domElement.click(),n(),c&&c[0].destroy()})}),s.type){case"video":t();break;case"image":i();break;case"text":a();break;default:break}PAD.Texture(s.floor)},PAD.Clinics=function(){var e={};for(var t in PAD.Data){var i=PAD.Data[t],n=new THREE.Group;n.name=t,i.models&&PAD.Helpers.loadModels(n,i.models),i.geometry&&PAD.Helpers.loadGeometry(n,i.geometry),i.sceneLights&&PAD.SceneLights(n,i.sceneLights),i.hotspots&&PAD.Hotspots(n,i.hotspots),e[t]=n}return delete PAD.Data,e}(),function(){function e(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}var t=document.querySelectorAll(".clinic"),i=PAD.Canvas.scene,n,a,s;PAD.Clinics.Global&&i.add(PAD.Clinics.Global),t.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var a=e.dataset.clinic,s=PAD.Clinics[a],o=i.getObjectByName(n);o!==s&&(o&&i.remove(o),s&&i.add(s),n=a)})}),t[1].click(),document.getElementById("gf-feedback").addEventListener("click",function(e){var t=document.getElementById("surveyStage"),i=t.querySelector(".close");t.classList.add("open"),i.addEventListener("click",function(e){t.classList.remove("open"),PAD.Canvas.renderer.domElement.click(),e.preventDefault()}),e.preventDefault()}),document.getElementById("fullscreen").addEventListener("click",e);var o=document.createElement("script");o.src="https://pad-1.disqus.com/embed.js",o.setAttribute("data-timestamp",+new Date),document.body.appendChild(o)}();var h=document.createElement("script");h.src="https://www.googletagmanager.com/gtag/js?id=UA-138062674-1",document.body.appendChild(h),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-138062674-1",{site_speed_sample_rate:100})}();
//# sourceMappingURL=main.js.map