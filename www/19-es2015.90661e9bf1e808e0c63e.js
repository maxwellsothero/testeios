(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3LUQ":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("mrSG"),s=r("fXoL"),i=r("TEn/");let o=(()=>{class e{constructor(e,t){this.alertCtrl=e,this.toastCtrl=t}toast(e,t="top"){return Object(n.a)(this,void 0,void 0,(function*(){const r=yield this.toastCtrl.create({message:e,position:t,duration:3e3,color:"dark"});yield r.present()}))}alert(e,t){return Object(n.a)(this,void 0,void 0,(function*(){const r=yield this.alertCtrl.create({header:e,message:t,buttons:["ok"],backdropDismiss:!1});yield r.present()}))}confirm(e,t,r){return Object(n.a)(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:e,message:t,mode:"md",cssClass:"custom-alert-message",buttons:[{text:"N\xe3o",role:"Cancel",handler:()=>{console.log("Confirm:Say:No")}},{text:"Sim",handler:()=>{r()}}]});yield n.present()}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](i.AlertController),s["\u0275\u0275inject"](i.ToastController))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"N+K7":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("mrSG"),s=r("tk/3"),i=r("fXoL"),o=r("3LUQ"),c=r("TEn/");let a=(()=>{class e{constructor(e){this.loadingCtrl=e,this.spinner=null}Show(e){return Object(n.a)(this,void 0,void 0,(function*(){null===this.spinner&&(this.spinner=yield this.loadingCtrl.create({message:e||"Carregando...",mode:"md",spinner:"circles"}),yield this.spinner.present())}))}Hide(){null!=this.spinner&&(this.spinner.dismiss(),this.spinner=null)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](c.LoadingController))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=r("tyNb"),u=r("eAEk");let l=(()=>{class e{constructor(e,t,r,n,s){this.http=e,this.alertSrv=t,this.spinnerSrv=r,this.router=n,this.localStorage=s}createHeader(e){return Object(n.a)(this,void 0,void 0,(function*(){return e||(e=new s.e),e=(e=e.append("Content-Type","application/json")).append("Accept","application/json")}))}get(e,t=!0,r="json"){return Object(n.a)(this,void 0,void 0,(function*(){const s=yield this.createHeader();return new Promise(i=>Object(n.a)(this,void 0,void 0,(function*(){try{if(t&&(yield this.spinnerSrv.Show()),"json"===r){const t=yield this.http.get(e,{headers:s}).toPromise();i({success:!0,data:t,error:void 0,headers:{}})}else{const t=yield this.http.get(e,{headers:s,responseType:"blob"}).toPromise();i({success:!0,data:t,error:void 0,headers:{}})}t&&(yield this.spinnerSrv.Hide())}catch(n){401===n.status||0===n.status&&this.router.navigate(["/try-again"]),t&&(yield this.spinnerSrv.Hide()),i({success:!1,data:{},error:n,headers:{}})}})))}))}post(e,t,r){return Object(n.a)(this,void 0,void 0,(function*(){const s=yield this.createHeader(r);return new Promise(r=>Object(n.a)(this,void 0,void 0,(function*(){try{yield this.spinnerSrv.Show();const n=yield this.http.post(e,t,{headers:s,observe:"response"}).toPromise();r({success:!0,data:n.body,error:void 0,headers:n.headers}),yield this.spinnerSrv.Hide()}catch(n){yield this.spinnerSrv.Hide(),r({success:!1,data:{},error:n,headers:{}})}})))}))}patch(e,t,r){return Object(n.a)(this,void 0,void 0,(function*(){const s=yield this.createHeader(r);return new Promise(r=>Object(n.a)(this,void 0,void 0,(function*(){try{yield this.spinnerSrv.Show();const n=yield this.http.patch(e,t,{headers:s,observe:"response"}).toPromise();r({success:!0,data:n.body,error:void 0,headers:n.headers}),yield this.spinnerSrv.Hide()}catch(n){yield this.spinnerSrv.Hide(),404===n.status&&(yield this.alertSrv.alert("Aten\xe7\xe3o",n.error)),r({success:!1,data:{},error:n,headers:{}})}})))}))}delete(e){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield this.createHeader();return new Promise(r=>Object(n.a)(this,void 0,void 0,(function*(){try{yield this.spinnerSrv.Show();const n=yield this.http.delete(e,{headers:t}).toPromise();r({success:!0,data:n,error:void 0,headers:{}}),yield this.spinnerSrv.Hide()}catch(n){yield this.spinnerSrv.Hide(),r({success:!1,data:{},error:n,headers:{}})}})))}))}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](s.b),i["\u0275\u0275inject"](o.a),i["\u0275\u0275inject"](a),i["\u0275\u0275inject"](d.g),i["\u0275\u0275inject"](u.a))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},b8Qw:function(e,t,r){"use strict";r.r(t),r.d(t,"SignInPageModule",(function(){return h}));var n=r("ofXK"),s=r("3Pt+"),i=r("TEn/"),o=r("tyNb"),c=r("Ik3T"),a=r("fXoL");const d=[{path:"",component:c.a}];let u=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.j.forChild(d)],o.j]}),e})();var l=r("d2mR");let h=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.CommonModule,s.FormsModule,i.IonicModule,u,l.a,s.FormsModule,s.ReactiveFormsModule]]}),e})()},eAEk:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("mrSG"),s=r("fXoL"),i=r("e8h1"),o=r("pqyF");let c=(()=>{class e{constructor(e,t){this.storage=e,this.eventBusService=t}clear(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.storage.remove("User"),yield this.storage.remove("Tokens")}))}setTokens(e){return this.storage.set("Tokens",JSON.stringify(e))}getTokens(){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.storage.get("Tokens");return e?JSON.parse(e):null}))}setUser(e){return this.storage.set("User",JSON.stringify(e))}getUser(){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.storage.get("User");return e?JSON.parse(e):null}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](i.b),s["\u0275\u0275inject"](o.b))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},pqyF:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return a}));var n=r("XNiG"),s=r("pLZG"),i=r("lJxs"),o=r("fXoL");let c=(()=>{class e{constructor(){this.subject=new n.a}on(e,t){return this.subject.pipe(Object(s.a)(t=>t.name===e),Object(i.a)(e=>e.value)).subscribe(t)}emit(e){this.subject.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class a{constructor(e,t){this.name=e,this.value=t}}}}]);