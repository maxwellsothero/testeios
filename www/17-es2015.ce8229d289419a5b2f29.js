(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3LUQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("mrSG"),o=n("fXoL"),r=n("TEn/");let s=(()=>{class e{constructor(e,t){this.alertCtrl=e,this.toastCtrl=t}toast(e,t="top"){return Object(i.a)(this,void 0,void 0,(function*(){const n=yield this.toastCtrl.create({message:e,position:t,duration:3e3,color:"dark"});yield n.present()}))}alert(e,t){return Object(i.a)(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:e,message:t,buttons:["ok"],backdropDismiss:!1});yield n.present()}))}confirm(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const i=yield this.alertCtrl.create({header:e,message:t,mode:"md",cssClass:"custom-alert-message",buttons:[{text:"N\xe3o",role:"Cancel",handler:()=>{console.log("Confirm:Say:No")}},{text:"Sim",handler:()=>{n()}}]});yield i.present()}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.AlertController),o["\u0275\u0275inject"](r.ToastController))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"723k":function(e,t,n){"use strict";n.r(t),n.d(t,"ProfilePageModule",(function(){return v}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),a=n("mrSG"),c=n("pqyF"),l=n("NV1z"),d=n("Ik3T"),u=n("fXoL"),h=n("lGQG");function p(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-item",15),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().onLogout()})),u["\u0275\u0275elementStart"](1,"div",19),u["\u0275\u0275element"](2,"ion-icon",20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"ion-label"),u["\u0275\u0275text"](4,"Sair"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}}const m=[{path:"",component:(()=>{class e extends l.a{constructor(e,t,n){super(t),this.eventBusService=e,this.authService=n,this.user=this.authService.userValue,this.eventBusService.on("User:login",()=>{setTimeout(()=>{this.load()},100)}),this.eventBusService.on("User:update",()=>{setTimeout(()=>{this.load()},100)}),this.eventBusService.on("User:logout",()=>{this.user=null})}enableMenuSwipe(){return!1}ngOnInit(){this.load()}load(){return Object(a.a)(this,void 0,void 0,(function*(){try{yield this.showLoadingView({showOverlay:!0}),this.showContentView()}catch(e){console.log("ngOnInit",e),this.showContentView()}}))}onLogout(){return Object(a.a)(this,void 0,void 0,(function*(){this.eventBusService.emit(new c.a("User:logout")),this.showContentView(),this.authService.logout().subscribe()}))}openSignInModal(){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:d.a});yield e.present(),yield e.onWillDismiss()}))}politicas(){this.openSimpleUrl("http://agilizaclube.com.br/politica/privacidade.html")}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.b),u["\u0275\u0275directiveInject"](u.Injector),u["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-profile"]],features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:37,vars:3,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],[1,"heading"],[3,"src"],["color","light"],["lines","none","routerLink","/profile-edit","routerDirection","forward"],[1,"icon-circle",2,"background","#00a1e1"],["name","create-sharp","slot","start"],["lines","none"],["slot","start","size","small","color","success",2,"width","30px","height","30px"],["size","small","color","light","name","card-sharp"],["lines","none","routerLink","/help","routerDirection","forward"],["slot","start","size","small","color","tertiary",2,"width","30px","height","30px"],["size","small","color","light","name","help-sharp"],["lines","none",3,"click"],["slot","start","size","small",2,"width","30px","height","30px"],["size","small","color","light","name","hand-left-sharp"],["lines","none",3,"click",4,"ngIf"],[1,"icon-circle",2,"background","#e14d59"],["name","log-out","slot","start"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-header",0),u["\u0275\u0275elementStart"](1,"ion-toolbar",1),u["\u0275\u0275elementStart"](2,"ion-buttons",2),u["\u0275\u0275element"](3,"ion-back-button"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"ion-title"),u["\u0275\u0275text"](5,"Conta"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"ion-content"),u["\u0275\u0275elementStart"](7,"section",3),u["\u0275\u0275elementStart"](8,"ion-avatar"),u["\u0275\u0275element"](9,"img",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"ion-text",5),u["\u0275\u0275elementStart"](11,"h3"),u["\u0275\u0275text"](12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"ion-list"),u["\u0275\u0275elementStart"](14,"ion-item",6),u["\u0275\u0275elementStart"](15,"div",7),u["\u0275\u0275element"](16,"ion-icon",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"ion-label"),u["\u0275\u0275text"](18,"Informa\xe7\xe3o pessoal"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"ion-list"),u["\u0275\u0275elementStart"](20,"ion-item",9),u["\u0275\u0275elementStart"](21,"ion-fab-button",10),u["\u0275\u0275element"](22,"ion-icon",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](23,"ion-label"),u["\u0275\u0275text"](24,"M\xe9todos de Pagamento"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](25,"ion-list"),u["\u0275\u0275elementStart"](26,"ion-item",12),u["\u0275\u0275elementStart"](27,"ion-fab-button",13),u["\u0275\u0275element"](28,"ion-icon",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"ion-label"),u["\u0275\u0275text"](30,"Ajuda"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](31,"ion-item",15),u["\u0275\u0275listener"]("click",(function(){return t.politicas()})),u["\u0275\u0275elementStart"](32,"ion-fab-button",16),u["\u0275\u0275element"](33,"ion-icon",17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](34,"ion-label"),u["\u0275\u0275text"](35,"Pol\xedtica de Privacidade"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](36,p,5,0,"ion-item",18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](9),u["\u0275\u0275propertyInterpolate"]("src","/assets/images/avatar.png",u["\u0275\u0275sanitizeUrl"]),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate"](null==t.user?null:t.user.user.full_name),u["\u0275\u0275advance"](24),u["\u0275\u0275property"]("ngIf",t.user))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent,r.IonAvatar,r.IonText,r.IonList,r.IonItem,r.RouterLinkDelegate,s.h,r.IonIcon,r.IonLabel,r.IonFabButton,i.NgIf],styles:[".icon-circle[_ngcontent-%COMP%], .icon-circle-large[_ngcontent-%COMP%], .icon-circle-small[_ngcontent-%COMP%]{position:relative;display:inline-block;padding:6px 2px 7px 1px;width:30px;height:30px;font-size:20px;border-radius:50%;color:#fff;text-align:center;vertical-align:middle;margin-right:20px}ion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:#fff}.item-icon-circle[_ngcontent-%COMP%]{border-radius:50%;width:100px;height:100px;text-align:center;color:red}ion-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:12px}ion-avatar[_ngcontent-%COMP%]{width:80px;height:80px}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:var(--ion-color-light);display:inline-block;max-width:80px;max-height:80px;border-radius:50%}ion-item[_ngcontent-%COMP%]{--min-height:44px;--padding-top:5px;--padding-bottom:8px}.custom-line-height[_ngcontent-%COMP%]{line-height:1.6}.skeleton-item[_ngcontent-%COMP%]{width:auto;height:auto;margin:10px auto;padding:10px}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:inline-flex;width:100%;height:auto;flex:1}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:100px;height:90px}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;padding:10px;height:80px}.heading[_ngcontent-%COMP%]{background:#fff;display:flex;flex-direction:column;align-items:center;align-self:center;justify-content:center;padding-top:10px;padding-bottom:10px;margin-bottom:9px}.heading[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#272727}.hero-img[_ngcontent-%COMP%]{width:50%}ion-grid[_ngcontent-%COMP%]{padding:0}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.j.forChild(m)],s.j]}),e})(),v=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,g]]}),e})()},"N+K7":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("mrSG"),o=n("tk/3"),r=n("fXoL"),s=n("3LUQ"),a=n("TEn/");let c=(()=>{class e{constructor(e){this.loadingCtrl=e,this.spinner=null}Show(e){return Object(i.a)(this,void 0,void 0,(function*(){null===this.spinner&&(this.spinner=yield this.loadingCtrl.create({message:e||"Carregando...",mode:"md",spinner:"circles"}),yield this.spinner.present())}))}Hide(){null!=this.spinner&&(this.spinner.dismiss(),this.spinner=null)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](a.LoadingController))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("tyNb"),d=n("eAEk");let u=(()=>{class e{constructor(e,t,n,i,o){this.http=e,this.alertSrv=t,this.spinnerSrv=n,this.router=i,this.localStorage=o}createHeader(e){return Object(i.a)(this,void 0,void 0,(function*(){return e||(e=new o.e),e=(e=e.append("Content-Type","application/json")).append("Accept","application/json")}))}get(e,t=!0,n="json"){return Object(i.a)(this,void 0,void 0,(function*(){const o=yield this.createHeader();return new Promise(r=>Object(i.a)(this,void 0,void 0,(function*(){try{if(t&&(yield this.spinnerSrv.Show()),"json"===n){const t=yield this.http.get(e,{headers:o}).toPromise();r({success:!0,data:t,error:void 0,headers:{}})}else{const t=yield this.http.get(e,{headers:o,responseType:"blob"}).toPromise();r({success:!0,data:t,error:void 0,headers:{}})}t&&(yield this.spinnerSrv.Hide())}catch(i){401===i.status||0===i.status&&this.router.navigate(["/try-again"]),t&&(yield this.spinnerSrv.Hide()),r({success:!1,data:{},error:i,headers:{}})}})))}))}post(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const o=yield this.createHeader(n);return new Promise(n=>Object(i.a)(this,void 0,void 0,(function*(){try{yield this.spinnerSrv.Show();const i=yield this.http.post(e,t,{headers:o,observe:"response"}).toPromise();n({success:!0,data:i.body,error:void 0,headers:i.headers}),yield this.spinnerSrv.Hide()}catch(i){yield this.spinnerSrv.Hide(),n({success:!1,data:{},error:i,headers:{}})}})))}))}patch(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){const o=yield this.createHeader(n);return new Promise(n=>Object(i.a)(this,void 0,void 0,(function*(){try{yield this.spinnerSrv.Show();const i=yield this.http.patch(e,t,{headers:o,observe:"response"}).toPromise();n({success:!0,data:i.body,error:void 0,headers:i.headers}),yield this.spinnerSrv.Hide()}catch(i){yield this.spinnerSrv.Hide(),404===i.status&&(yield this.alertSrv.alert("Aten\xe7\xe3o",i.error)),n({success:!1,data:{},error:i,headers:{}})}})))}))}delete(e){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.createHeader();return new Promise(n=>Object(i.a)(this,void 0,void 0,(function*(){try{yield this.spinnerSrv.Show();const i=yield this.http.delete(e,{headers:t}).toPromise();n({success:!0,data:i,error:void 0,headers:{}}),yield this.spinnerSrv.Hide()}catch(i){yield this.spinnerSrv.Hide(),n({success:!1,data:{},error:i,headers:{}})}})))}))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.b),r["\u0275\u0275inject"](s.a),r["\u0275\u0275inject"](c),r["\u0275\u0275inject"](l.g),r["\u0275\u0275inject"](d.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},eAEk:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("mrSG"),o=n("fXoL"),r=n("e8h1"),s=n("pqyF");let a=(()=>{class e{constructor(e,t){this.storage=e,this.eventBusService=t}clear(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.storage.remove("User"),yield this.storage.remove("Tokens")}))}setTokens(e){return this.storage.set("Tokens",JSON.stringify(e))}getTokens(){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.storage.get("Tokens");return e?JSON.parse(e):null}))}setUser(e){return this.storage.set("User",JSON.stringify(e))}getUser(){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.storage.get("User");return e?JSON.parse(e):null}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.b),o["\u0275\u0275inject"](s.b))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},pqyF:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var i=n("XNiG"),o=n("pLZG"),r=n("lJxs"),s=n("fXoL");let a=(()=>{class e{constructor(){this.subject=new i.a}on(e,t){return this.subject.pipe(Object(o.a)(t=>t.name===e),Object(r.a)(e=>e.value)).subscribe(t)}emit(e){this.subject.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class c{constructor(e,t){this.name=e,this.value=t}}}}]);