!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));var r=function(e,t){return null!==t.closest(e)},o=function(e,t){return"string"==typeof e&&e.length>0?Object.assign((o=!0,(r="ion-color-"+e)in(n={"ion-color":!0})?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n),t):t;var n,r,o},i=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var e=s(regeneratorRuntime.mark((function e(t,n,r,o){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||a.test(t)){e.next=4;break}if(!(i=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),i.push(t,r,o)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()},Ik3T:function(t,o,a){"use strict";a.d(o,"a",(function(){return S}));var c=a("mrSG"),u=a("3Pt+"),s=a("NV1z"),l=a("pqyF"),f=a("PmGq"),m=a("SxV6"),d=a("fXoL"),p=a("eAEk"),v=a("qfBg"),g=a("q2IT"),h=a("lGQG"),b=a("TEn/"),w=a("ofXK");function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",13),d["\u0275\u0275element"](1,"img",14),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("src",n.logo,d["\u0275\u0275sanitizeUrl"])}}var S=function(){var t=function(t){r(a,t);var o=i(a);function a(t,n,r,i,c,u){var s;return e(this,a),(s=o.call(this,t)).localStorage=n,s.userService=r,s.eventBusService=i,s.oneSignalSrv=c,s.authSrv=u,s.loading=!1,s}return n(a,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.form=this.formBuilder.group({email_cpf:["",u.Validators.required],password:["",u.Validators.required]}),this.logo="./assets/images/logo.png";case 1:case"end":return e.stop()}}),e,this)})))}},{key:"enableMenuSwipe",value:function(){return!1}},{key:"signIn",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t={email:this.form.get("email_cpf").value,password:this.form.get("password").value},this.loading=!0,this.authSrv.login(t).pipe(Object(m.a)()).subscribe({next:function(e){n.oneSignalSrv.initialize(e.user),n.loading=!1,n.signByData(e)},error:function(e){n.loading=!1,n.showSweet("Oops",e.error.error_description,"warning")}})}catch(r){console.log("siginByEmailCpf",r),this.showSweet("Oops","Ocorreu um erro desconhecido, por favor tente novamente","error")}case 1:case"end":return e.stop()}}),e,this)})))}},{key:"signByData",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.user,this.eventBusService.emit(new l.a("User:login",n)),this.showToast("Seja bem vindo(a), "+n.full_name),this.setRoot("/tabs");case 2:case"end":return t.stop()}}),t,this)})))}},{key:"onPresentRecoverModal",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:f.a});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}}]),a}(s.a);return t.\u0275fac=function(e){return new(e||t)(d["\u0275\u0275directiveInject"](d.Injector),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](v.a),d["\u0275\u0275directiveInject"](l.b),d["\u0275\u0275directiveInject"](g.a),d["\u0275\u0275directiveInject"](h.a))},t.\u0275cmp=d["\u0275\u0275defineComponent"]({type:t,selectors:[["app-sign-in"]],features:[d["\u0275\u0275InheritDefinitionFeature"]],decls:25,vars:3,consts:[[1,"ion-padding"],["fixed",""],["class","logo",4,"ngIf"],[3,"formGroup","ngSubmit"],["position","floating"],[2,"font-size","0.795em"],["formControlName","email_cpf"],["type","password","formControlName","password"],[1,"ion-text-end"],["fill","clear","item-end","","size","small",1,"ion-no-margin","esqueci",3,"click"],["text-center","","lines","none"],[2,"text-align","center"],["expand","full","color","dark","type","submit","shape","round",3,"disabled"],[1,"logo"],[3,"src"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-content",0),d["\u0275\u0275elementStart"](1,"ion-grid",1),d["\u0275\u0275template"](2,y,2,1,"div",2),d["\u0275\u0275elementStart"](3,"h2"),d["\u0275\u0275text"](4,"Ol\xe1, seja muito bem vindo!"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"h4"),d["\u0275\u0275text"](6,"Fa\xe7a login para continuar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"form",3),d["\u0275\u0275listener"]("ngSubmit",(function(){return t.signIn()})),d["\u0275\u0275elementStart"](8,"ion-item"),d["\u0275\u0275elementStart"](9,"ion-label",4),d["\u0275\u0275elementStart"](10,"p",5),d["\u0275\u0275text"](11,"Digite seu e-mail ou usu\xe1rio"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](12,"ion-input",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"ion-item"),d["\u0275\u0275elementStart"](14,"ion-label",4),d["\u0275\u0275elementStart"](15,"p",5),d["\u0275\u0275text"](16,"Digite sua senha"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](17,"ion-input",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"div",8),d["\u0275\u0275elementStart"](19,"ion-button",9),d["\u0275\u0275listener"]("click",(function(){return t.onPresentRecoverModal()})),d["\u0275\u0275text"](20," Esqueci minha senha "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"ion-item",10),d["\u0275\u0275elementStart"](22,"ion-col",11),d["\u0275\u0275elementStart"](23,"ion-button",12),d["\u0275\u0275text"](24,"Entrar "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.logo),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("formGroup",t.form),d["\u0275\u0275advance"](16),d["\u0275\u0275property"]("disabled",t.form.invalid||t.loading))},directives:[b.IonContent,b.IonGrid,w.NgIf,u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.FormGroupDirective,b.IonItem,b.IonLabel,b.IonInput,b.TextValueAccessor,u.NgControlStatus,u.FormControlName,b.IonButton,b.IonCol],styles:[".logo[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;padding:0 39%}ion-grid[_ngcontent-%COMP%]{margin-top:80px!important}ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-content[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{--background:#fff}h2[_ngcontent-%COMP%]{font-size:1.3em;color:#2d2d2d;font-weight:800}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{text-align:center}h4[_ngcontent-%COMP%]{font-size:.9em;font-weight:600;color:#777}form[_ngcontent-%COMP%]{margin-top:25px}.entrar[_ngcontent-%COMP%]{--background:#ea7637;--background:linear-gradient(0deg,#ea7637,#e84f2d);width:50%}.registre[_ngcontent-%COMP%]{font-size:.7em;color:#777}.registre[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ea7637;margin-left:4px}.esqueci[_ngcontent-%COMP%]{text-align:right;height:30px}"]}),t}()},JbSX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("wEJo"),o=n("qULd"),i=n("iWo5"),a=function(e,t){var n,a,c=function(e,r,o){if("undefined"!=typeof document){var i=document.elementFromPoint(e,r);i&&t(i)?i!==n&&(s(),u(i,o)):s()}},u=function(e,t){n=e,a||(a=n);var o=n;Object(r.f)((function(){return o.classList.add("ion-activated")})),t()},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var t=n;Object(r.f)((function(){return t.classList.remove("ion-activated")})),e&&a!==n&&n.click(),n=void 0}};return Object(i.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:function(e){return c(e.currentX,e.currentY,o.a)},onMove:function(e){return c(e.currentX,e.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),a=void 0}})}},PmGq:function(t,o,a){"use strict";a.d(o,"a",(function(){return p}));var c=a("mrSG"),u=a("NV1z"),s=a("3Pt+"),l=a("fXoL"),f=a("qfBg"),m=a("eAEk"),d=a("TEn/"),p=function(){var t=function(t){r(a,t);var o=i(a);function a(t,n,r){var i;return e(this,a),(i=o.call(this,t)).userService=n,i.localStorage=r,i.openSwal=!1,i}return n(a,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.form=this.formBuilder.group({email:["",s.Validators.email]});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"enableMenuSwipe",value:function(){return!1}},{key:"onSubmit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===this.form.value.email){e.next=19;break}return e.prev=1,t={email:this.form.get("email").value},e.next=5,this.userService.recoverPassword(t);case 5:if(n=e.sent,r=n.success,o=n.data,!(i=n.error)||!1!==r){e.next=11;break}return e.abrupt("return",(this.showSweet("Oops",i.error.errors,"warning"),void this.showContentView()));case 11:this.showSweet("E-mail de recupera\xe7\xe3o enviado!",o.message,"success"),this.onDismiss(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("onSubmit",e.t0),this.showContentView(),this.showSweet("Oops","Ocorreu um erro desconhecido","warning");case 17:e.next=20;break;case 19:this.showSweet("Oops","Por favor preencha o campo e-mail.","warning");case 20:case"end":return e.stop()}}),e,this,[[1,14]])})))}},{key:"onDismiss",value:function(){return this.modalCtrl.dismiss()}}]),a}(u.a);return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275directiveInject"](l.Injector),l["\u0275\u0275directiveInject"](f.a),l["\u0275\u0275directiveInject"](m.a))},t.\u0275cmp=l["\u0275\u0275defineComponent"]({type:t,selectors:[["app-recover-password"]],features:[l["\u0275\u0275InheritDefinitionFeature"]],decls:20,vars:3,consts:[["slot","end"],["fill","clear",3,"click"],["name","close"],[1,"ion-padding"],["fixed",""],[3,"formGroup","ngSubmit"],["position","floating"],[2,"font-size","0.795em"],["formControlName","email",3,"disabled"],["type","submit","expand","full","color","dark",1,"ion-no-margin",3,"disabled"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ion-header"),l["\u0275\u0275elementStart"](1,"ion-toolbar"),l["\u0275\u0275elementStart"](2,"ion-buttons",0),l["\u0275\u0275elementStart"](3,"ion-button",1),l["\u0275\u0275listener"]("click",(function(){return t.onDismiss()})),l["\u0275\u0275element"](4,"ion-icon",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"ion-title"),l["\u0275\u0275text"](6," Recuperar senha "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"ion-content",3),l["\u0275\u0275elementStart"](8,"ion-grid",4),l["\u0275\u0275elementStart"](9,"form",5),l["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),l["\u0275\u0275elementStart"](10,"label"),l["\u0275\u0275text"](11,"Para recuperar sua senha, por favor preencha pelo menos um dos campos"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"ion-item"),l["\u0275\u0275elementStart"](13,"ion-label",6),l["\u0275\u0275elementStart"](14,"p",7),l["\u0275\u0275text"](15,"Meu email"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](16,"ion-input",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",3),l["\u0275\u0275elementStart"](18,"ion-button",9),l["\u0275\u0275text"](19,"Pesquisar"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("formGroup",t.form),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("disabled",t.openSwal),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("disabled",t.form.invalid||t.openSwal))},directives:[d.IonHeader,d.IonToolbar,d.IonButtons,d.IonButton,d.IonIcon,d.IonTitle,d.IonContent,d.IonGrid,s["\u0275angular_packages_forms_forms_y"],s.NgControlStatusGroup,s.FormGroupDirective,d.IonItem,d.IonLabel,d.IonInput,d.TextValueAccessor,s.NgControlStatus,s.FormControlName],styles:["ion-item[_ngcontent-%COMP%]{margin-top:10px}"]}),t}()},acej:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("1vRN"),o=function(){var e=s(regeneratorRuntime.mark((function e(t,n,o,i,a){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,o,a,i));case 2:if("string"==typeof o||o instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:return c="string"==typeof o?n.ownerDocument&&n.ownerDocument.createElement(o):o,i&&i.forEach((function(e){return c.classList.add(e)})),a&&Object.assign(c,a),n.appendChild(c),e.next=10,new Promise((function(e){return Object(r.c)(c,e)}));case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),i=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},d2mR:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var o=r("ofXK"),i=r("TEn/"),a=r("fXoL"),c=function(){var t=function t(){e(this,t)};return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.CommonModule,i.IonicModule],o.CommonModule,i.IonicModule]}),t}()},h3R7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var r=e*t/n-e+"ms",o=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var r=t/n,o=e*r-e+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}}}},pjJl:function(t,r,o){"use strict";o.d(r,"a",(function(){return u}));var i=o("AytR"),a=o("fXoL"),c=o("N+K7"),u=function(){var t=function(){function t(n){e(this,t),this.http=n}return n(t,[{key:"geolocation",value:function(e,t){return this.http.get("".concat(i.a.apiUrl,"/locationiq/geocoding?lat=").concat(e,"&lng=").concat(t),!1)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](c.a))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},qULd:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c}));var r={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})}},notification:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},o=function(){r.selection()},i=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},u=function(e){r.impact(e)}},qfBg:function(t,r,o){"use strict";o.d(r,"a",(function(){return s}));var i=o("mrSG"),a=o("AytR"),c=o("fXoL"),u=o("N+K7"),s=function(){var t=function(){function t(n){e(this,t),this.http=n}return n(t,[{key:"recoverPassword",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.post(a.a.apiUrl+"/../../public/recover_password",e));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"edit",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.patch(a.a.apiUrl+"/users",e));case 1:case"end":return t.stop()}}),t,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c["\u0275\u0275inject"](u.a))},t.\u0275prov=c["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();