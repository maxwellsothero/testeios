(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"862v":function(e,t,n){"use strict";n.r(t),n.d(t,"MapPageModule",(function(){return D}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),l=n("mrSG"),c=n("tBOM"),r=n("6HIw"),d=n("tmoB"),p=n("NV1z"),m=n("AytR"),u=n("pqyF"),h=n("fXoL"),v=n("h+qT"),g=n("X2iB"),b=n("ISvZ"),f=n("pjJl"),_=n("C6fG"),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.APP={USER_SELECT:"user_select",APPLE_MAPS:"apple_maps",GOOGLE_MAPS:"google_maps",WAZE:"waze",CITYMAPPER:"citymapper",NAVIGON:"navigon",TRANSIT_APP:"transit_app",YANDEX:"yandex",UBER:"uber",TOMTOM:"tomtom",BING_MAPS:"bing_maps",SYGIC:"sygic",HERE_MAPS:"here_maps",MOOVIT:"moovit"},t.TRANSPORT_MODE={DRIVING:"driving",WALKING:"walking",BICYCLING:"bicycling",TRANSIT:"transit"},t}Object(l.b)(t,e),t.prototype.navigate=function(e,t){return Object(_.cordova)(this,"navigate",{successIndex:2,errorIndex:3},arguments)},t.prototype.isAppAvailable=function(e){return Object(_.cordova)(this,"isAppAvailable",{},arguments)},t.prototype.availableApps=function(){return Object(_.cordova)(this,"availableApps",{},arguments)},t.prototype.getAppDisplayName=function(e){return Object(_.cordova)(this,"getAppDisplayName",{sync:!0},arguments)},t.prototype.getAppsForPlatform=function(e){return Object(_.cordova)(this,"getAppsForPlatform",{sync:!0},arguments)},t.prototype.supportsTransportMode=function(e,t){return Object(_.cordova)(this,"supportsTransportMode",{sync:!0},arguments)},t.prototype.getTransportModes=function(e,t){return Object(_.cordova)(this,"getTransportModes",{sync:!0},arguments)},t.prototype.supportsDestName=function(e,t){return Object(_.cordova)(this,"supportsDestName",{sync:!0},arguments)},t.prototype.supportsStart=function(e,t){return Object(_.cordova)(this,"supportsStart",{sync:!0},arguments)},t.prototype.supportsStartName=function(e,t){return Object(_.cordova)(this,"supportsStartName",{sync:!0},arguments)},t.prototype.supportsLaunchMode=function(e,t){return Object(_.cordova)(this,"supportsLaunchMode",{sync:!0},arguments)},t.prototype.userSelect=function(e,t){return Object(_.cordova)(this,"userSelect",{sync:!0},arguments)},Object.defineProperty(t.prototype,"appSelection",{get:function(){return Object(_.cordovaPropertyGet)(this,"appSelection")},set:function(e){Object(_.cordovaPropertySet)(this,"appSelection",e)},enumerable:!1,configurable:!0}),t.pluginName="LaunchNavigator",t.plugin="uk.co.workingedge.phonegap.plugin.launchnavigator",t.pluginRef="launchnavigator",t.repo="https://github.com/dpa99c/phonegap-launch-navigator",t.platforms=["Android","iOS","Windows","Windows Phone 8"],t.\u0275fac=function(e){return n(e||t)},t.\u0275prov=h["\u0275\u0275defineInjectable"]({token:t,factory:function(e){return t.\u0275fac(e)}});var n=h["\u0275\u0275getInheritedFactory"](t);return t}(_.IonicNativePlugin),y=n("lGQG"),S=n("3LUQ");function M(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div",48),h["\u0275\u0275elementStart"](1,"div",49),h["\u0275\u0275elementStart"](2,"ion-button",50),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](e);const t=h["\u0275\u0275nextContext"]();return t.cadeado(t.device)})),h["\u0275\u0275text"](3),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"a",51),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().closeModalCadeado()})),h["\u0275\u0275text"](5,"Fechar"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"](" ",e.device.geofence_lock_id?"Desl. Cadeado":"Ativar Cadeado"," ")}}function E(e,t){1&e&&h["\u0275\u0275element"](0,"ion-icon",52)}function O(e,t){1&e&&h["\u0275\u0275element"](0,"ion-icon",30)}function C(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div",53),h["\u0275\u0275elementStart"](1,"ion-list"),h["\u0275\u0275elementStart"](2,"ion-list-header"),h["\u0275\u0275elementStart"](3,"b"),h["\u0275\u0275text"](4,"Tipo Mapa"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"ion-item",54),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().setMapNormal()})),h["\u0275\u0275text"](6,"Normal"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"ion-item",54),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().setMapSatelite()})),h["\u0275\u0275text"](8,"S\xe1telite"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}}function I(e,t){1&e&&h["\u0275\u0275element"](0,"ion-icon",55)}function k(e,t){1&e&&h["\u0275\u0275element"](0,"ion-spinner",56)}function P(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",57),h["\u0275\u0275element"](1,"img",58),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("src","/assets/images/batery_on.png",h["\u0275\u0275sanitizeUrl"]))}function w(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",57),h["\u0275\u0275element"](1,"img",58),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("src","/assets/images/batery_off.png",h["\u0275\u0275sanitizeUrl"]))}function j(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",59),h["\u0275\u0275element"](1,"img",58),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("src","/assets/images/key_on.png",h["\u0275\u0275sanitizeUrl"]))}function A(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",59),h["\u0275\u0275element"](1,"img",58),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("src","/assets/images/key_off.png",h["\u0275\u0275sanitizeUrl"]))}const z=[{path:"",component:(()=>{class e extends p.a{constructor(e,t,n,o,i,a,s,l,c,r,p){super(e),this.nativeGeocoder=t,this.deviceService=n,this.cableService=o,this.locationiqService=i,this.actionSheetController=a,this.alertController=s,this.ln=l,this.authSrv=c,this.alertSrv=r,this.eventBusService=p,this.loadDevice=!1,this.typeMapBox=!1,this.hasMarker=!1,this.modalCadeadoOpen=!1,this.spinnerBackground=!1,this.circle=[],this.device=new d.a}enableMenuSwipe(){return!1}setupEventListeners(){console.log("MAP: setupEventListeners()"),this.pause=this.platform.pause.subscribe(()=>{console.info("Application is in running in the background..."),this.closeWebSocket()}),this.resume=this.platform.resume.subscribe(()=>Object(l.a)(this,void 0,void 0,(function*(){console.info("Application is in running in the foreground..."),this.spinnerBackground=!0,yield this.getDevice(),yield this.loadIcon(),yield this.map.clear(),yield this.loadGeofences(),yield this.openWebSocketDevice(),setTimeout(()=>{this.spinnerBackground=!1},500)})))}closeModalCadeado(){this.modalCadeadoOpen=!1}openModalCadeado(){this.modalCadeadoOpen=!0}ngOnInit(){return Object(l.a)(this,void 0,void 0,(function*(){console.log("============ ngOnInit"),this.loadMap(),this.myPane=new r.a(".cupertino-pane",{buttonClose:!1,breaks:{middle:{enabled:!0,height:240,bounce:!0},bottom:{enabled:!0,height:90}},onDrag:()=>{}}),this.myPane.present({animate:!0})}))}ionViewDidEnter(){return Object(l.a)(this,void 0,void 0,(function*(){console.log("============ ionViewDidEnter"),this.setupEventListeners(),yield this.getDevice(),yield this.loadIcon(),yield this.loadGeofences(),yield this.openWebSocketDevice()}))}cadeado(e){return Object(l.a)(this,void 0,void 0,(function*(){e.geofence_lock_id?yield this.showConfirm("Desativar Cadeado?","Voc\xea pode desativar para interromper o envio de notifica\xe7\xf5es. Para ativar o cadeado em outra localiza\xe7\xe3o, desative e ative novamente.",t=>Object(l.a)(this,void 0,void 0,(function*(){yield this.deviceService.open_lock(e.id);let t=this.circle.find(t=>t.id=e.geofence_lock_id);t&&t.circle.remove(),e.geofence_lock_id=null}))):yield this.showConfirm("Vai estacionar?","Deseja criar uma cerca virtual com um raio de 250 metros a partir da localiza\xe7\xe3o atual do seu ve\xedculo? Voc\xea ser\xe1 notificado quando o ve\xedculo sair da cerca.",t=>Object(l.a)(this,void 0,void 0,(function*(){yield this.deviceService.close_lock(e.id),e.geofence_lock_id=1,this.loadGeofences()}))),this.closeModalCadeado()}))}loadMap(){this.map=c.b.create("map_canvas",{camera:{target:{lat:-3.732594,lng:-38.526213},zoom:12,tilt:0},controls:{compass:!1,myLocationButton:!1,myLocation:!1,indoorPicker:!0,zoom:!0,mapToolbar:!0},gestures:{rotate:!1,scroll:!0,zoom:!0,tilt:!0}})}ngOnDestroy(){console.log("============ ngOnDestroy"),this.pause.unsubscribe(),this.resume.unsubscribe()}ionViewDidLeave(){this.pause.unsubscribe(),this.resume.unsubscribe(),this.eventBusService.emit(new u.a("Map:close")),this.detachMap(),this.closeWebSocket()}getMetaIcon(e,t){var n=new Image;n.src=e,n.onload=e=>t(e.currentTarget)}loadIcon(){return new Promise((e,t)=>{this.bateryOn=this.device.last_position.position.attributes.power>0,console.log("bateryIcon",this.bateryOn),this.icon=this.device.icon,this.icon.icon.url=`${m.a.apiUrl}/icons/render_no_rotate?device_id=${this.device.id}`,this.getMetaIcon(this.icon.icon.url,t=>{this.icon.width=t.width,this.icon.height=t.height,e(!0)})})}addMarker(){return Object(l.a)(this,void 0,void 0,(function*(){this.device.marker=this.map.addMarkerSync({title:this.device.license_plate,icon:{url:this.icon.icon.url,disableAutoPan:!1,size:{width:this.icon.width,height:this.icon.height},anchor:[this.icon.width/2,this.icon.height/2]},position:{lat:this.device.last_position.position.latitude,lng:this.device.last_position.position.longitude},rotation:this.device.last_position.position.course})}))}loadGeofences(){return Object(l.a)(this,void 0,void 0,(function*(){const{success:e,data:t}=yield this.deviceService.geofences(this.device.id);e&&t.forEach(e=>{if(e.area.includes("CIRCLE")){let t=e.id,n=parseFloat(e.area.split("(")[1].split(" ")[0]),o=parseFloat(e.area.split("(")[1].split(" ")[1].split(",")[0]),i=parseFloat(e.area.split("(")[1].split(" ")[2].split(")")[0]),a=this.map.addCircleSync({center:{lat:n,lng:o},radius:i,strokeColor:"rgba(0, 0, 255, 0.2)",strokeWidth:0,fillColor:"rgba(0, 0, 255, 0.2)",clickable:!0,id:t});a.on(c.c.CIRCLE_CLICK).subscribe(this.onCircleClick.bind(this)),this.circle=[],this.circle.push({id:t,circle:a})}})}))}onCircleClick(e){}positionCamera(){return Object(l.a)(this,void 0,void 0,(function*(){console.log("positionCamera"),this.map.animateCamera({target:{lat:this.device.last_position.position.latitude-4e-4,lng:this.device.last_position.position.longitude},zoom:18,duration:1e3})}))}detachMap(){this.map&&this.map.clear()}getDevice(){return Object(l.a)(this,void 0,void 0,(function*(){let e=this.getParams();if(e){this.id=e.id;const{success:t,data:n}=yield this.deviceService.GetById(String(this.id));t&&(this.device=n,this.loadDevice=!0)}}))}openWebSocketDevice(){return Object(l.a)(this,void 0,void 0,(function*(){if(this.loadDevice){void 0!==this.device.last_position.position&&(this.loadAddress(),yield this.addMarker(),yield this.positionCamera());let e=this.authSrv.userValue;e&&(this.channel=this.cableService.cable(`${m.a.ws}?access_token=${e.access_token}`).channel("PositionsChannel",{device_imei:this.device.imei}),this.subscription=this.channel.received().subscribe(e=>Object(l.a)(this,void 0,void 0,(function*(){this.fromLat=this.device.last_position.position.latitude,this.fromLong=this.device.last_position.position.longitude,this.device.last_position=e.data,this.device.last_date_position=e.data.device.lastUpdate,this.loadAddress();let t=this.device.last_position.position.attributes.power>0;t!==this.bateryOn&&(this.device.marker.setIcon({url:this.icon.icon.url}),this.bateryOn=t),this.device.marker.setPosition({lat:this.device.last_position.position.latitude,lng:this.device.last_position.position.longitude}),this.device.marker.setRotation(this.device.last_position.position.course),this.positionCamera()}))))}}))}closeWebSocket(){console.log("desconectar websocket"),this.cableService.disconnect(""+m.a.ws),this.subscription.unsubscribe()}isEmptyObject(e){return!("string"==typeof e)}loadAddress(){this.nativeGeocoder.reverseGeocode(this.device.last_position.position.latitude,this.device.last_position.position.longitude,{useLocale:!0,maxResults:5}).then(e=>{let t=e[0];this.device.address=`${t.thoroughfare}, ${t.subLocality}, ${t.subThoroughfare} - ${t.subAdministrativeArea}, ${t.administrativeArea}`}).catch(e=>Object(l.a)(this,void 0,void 0,(function*(){const{success:e,data:t}=yield this.locationiqService.geolocation(this.device.last_position.position.latitude,this.device.last_position.position.longitude);this.device.address=e?t.display_name:" - "})))}formatValueHours(e,t=!0){return null==e?"-":(t?(n=Math.floor(e/36e5),o=Math.floor(e%36e5/6e4)):(n=Math.floor(e),o=Math.floor(e%1*60)),n+" h "+o+" m");var n,o}formatDistance(e){return null==e?"-":""+(.001*e).toFixed(2)}formatSpeed(e){return null==e?"-":""+(1.852*e).toFixed(2)}setMapSatelite(){this.map.setMapTypeId("MAP_TYPE_SATELLITE"),this.openMapBox()}setMapNormal(){this.map.setMapTypeId("MAP_TYPE_NORMAL"),this.openMapBox()}openMapBox(){this.typeMapBox=!this.typeMapBox}openMapBoxMap(){this.typeMapBox=!1}goToHistory(){this.navigateTo("/history/"+this.device.id)}goToDevices(){this.goBack()}openInMaps(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:"Op\xe7\xf5es",cssClass:"my-custom-classs",buttons:[{text:"Abrir no Google Maps",icon:"location",handler:()=>{console.log("Google MAPS"),this.ln.navigate([this.device.last_position.position.latitude,this.device.last_position.position.longitude],{app:this.ln.APP.GOOGLE_MAPS}).then(e=>console.log("Launched navigator"),e=>{console.log("Error launching navigator",e),alert("Aplicativo n\xe3o encontrado")})}},{text:"Abrir no Waze",icon:"location",handler:()=>{console.log("Favorite clicked"),this.ln.navigate([this.device.last_position.position.latitude,this.device.last_position.position.longitude],{app:this.ln.APP.WAZE}).then(e=>console.log("Launched navigator"),e=>{console.log("Error launching navigator",e),alert("Aplicativo n\xe3o encontrado")})}},{text:"Abrir no Uber",icon:"location",handler:()=>{console.log("Favorite clicked"),this.ln.navigate([this.device.last_position.position.latitude,this.device.last_position.position.longitude],{app:this.ln.APP.UBER}).then(e=>console.log("Launched navigator"),e=>{console.log("Error launching navigator",e),alert("Aplicativo n\xe3o encontrado")})}},{text:"Abrir no Street View",icon:"location",handler:()=>{console.log("============Favorite clicked=="),window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${this.device.last_position.position.latitude},${this.device.last_position.position.longitude}`,"_system")}},{text:"Fechar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield e.present();const{role:t}=yield e.onDidDismiss();console.log("onDidDismiss resolved with role",t)}))}presentAlertMultipleButtons(){return Object(l.a)(this,void 0,void 0,(function*(){if(this.device.can_send_command_engine){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Comandos",message:"Selecione uma op\xe7\xe3o abaixo.",buttons:[{text:"Enviar comando de bloqueio",cssClass:"secondary",handler:e=>Object(l.a)(this,void 0,void 0,(function*(){const{success:e,data:t}=yield this.deviceService.bloqueio(this.device.id);e&&this.showToast(t.message)}))},{text:"Enviar comando de desbloqueio",cssClass:"secondary",handler:e=>Object(l.a)(this,void 0,void 0,(function*(){const{success:e,data:t}=yield this.deviceService.desbloqueio(this.device.id);e&&this.showToast(t.message)}))},{text:"Cancelar",cssClass:"secondary",role:"cancel",handler:e=>{console.log("Confirm Cancel: blah")}}]});yield e.present()}else this.alertSrv.alert("Recurso indispon\xedvel.","O bloqueio n\xe3o est\xe1 dispon\xedvel para o seu rastreador.")}))}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](h.Injector),h["\u0275\u0275directiveInject"](v.a),h["\u0275\u0275directiveInject"](g.a),h["\u0275\u0275directiveInject"](b.a),h["\u0275\u0275directiveInject"](f.a),h["\u0275\u0275directiveInject"](a.ActionSheetController),h["\u0275\u0275directiveInject"](a.AlertController),h["\u0275\u0275directiveInject"](x),h["\u0275\u0275directiveInject"](y.a),h["\u0275\u0275directiveInject"](S.a),h["\u0275\u0275directiveInject"](u.b))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-map"]],features:[h["\u0275\u0275InheritDefinitionFeature"]],decls:128,vars:31,consts:[["class","bg-modal-cadeado",4,"ngIf"],["size","small","color","medium-contrast",1,"map-back",3,"click"],["name","chevron-back"],["size","small","color","medium-contrast",1,"map-type",3,"click"],["name","layers"],["size","small","color","medium-contrast",1,"cadeado-button",3,"click"],["name","lock-open",4,"ngIf"],["name","lock-closed",4,"ngIf"],["class","map-type-box",4,"ngIf"],["id","map_canvas"],[1,"cupertino-pane"],[1,"header"],["fixed",""],["size","2"],[1,"ion-text-center"],["color","medium",2,"width","51px","height","51px"],["name","car",4,"ngIf"],["name","crescent","color","dark",4,"ngIf"],["id","batery-badge",4,"ngIf"],["id","key-badge",4,"ngIf"],["size","8"],[1,"ion-text-start","card-header-devices"],[3,"click"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-horizontal"],["overflow-y","",1,"content"],[1,"acoes"],[1,"scrollable"],["size","6"],["expand","full","color","dark","fill","outline","shape","round",3,"click"],["name","calendar"],["name","lock-closed"],["size","6",1,"ion-text-end"],["size","3"],["name","location",1,"location"],["size","9",1,"ion-text-end"],[1,"senssores"],["name","information-circle-outline"],[1,"ion-text-start",2,"margin-left","10px","margin-top","7px"],["name","speedometer-outline"],[1,"value"],["name","key-outline"],["name","lock-closed-outline"],["name","battery-charging-outline"],[2,"margin-top","10px"],["name","timer-outline"],["name","checkmark-circle-outline"],["name","walk-outline"],["name","time-outline"],[1,"bg-modal-cadeado"],[1,"modal-cadeado"],["expand","full","color","danger","fill","outline","shape","round",1,"cadeado",3,"click"],[3,"routerLink","click"],["name","lock-open"],[1,"map-type-box"],["button","",3,"click"],["name","car"],["name","crescent","color","dark"],["id","batery-badge"],[3,"src"],["id","key-badge"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-content"),h["\u0275\u0275template"](1,M,6,1,"div",0),h["\u0275\u0275elementStart"](2,"ion-fab-button",1),h["\u0275\u0275listener"]("click",(function(){return t.goToDevices()})),h["\u0275\u0275element"](3,"ion-icon",2),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-fab-button",3),h["\u0275\u0275listener"]("click",(function(){return t.openMapBox()})),h["\u0275\u0275element"](5,"ion-icon",4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-fab-button",5),h["\u0275\u0275listener"]("click",(function(){return t.openModalCadeado()})),h["\u0275\u0275template"](7,E,1,0,"ion-icon",6),h["\u0275\u0275template"](8,O,1,0,"ion-icon",7),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](9,C,9,0,"div",8),h["\u0275\u0275element"](10,"div",9),h["\u0275\u0275elementStart"](11,"div",10),h["\u0275\u0275elementStart"](12,"div",11),h["\u0275\u0275elementStart"](13,"ion-grid",12),h["\u0275\u0275elementStart"](14,"ion-row"),h["\u0275\u0275elementStart"](15,"ion-col",13),h["\u0275\u0275elementStart"](16,"div",14),h["\u0275\u0275elementStart"](17,"ion-fab-button",15),h["\u0275\u0275template"](18,I,1,0,"ion-icon",16),h["\u0275\u0275template"](19,k,1,0,"ion-spinner",17),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](20,P,2,1,"div",18),h["\u0275\u0275template"](21,w,2,1,"div",18),h["\u0275\u0275template"](22,j,2,1,"div",19),h["\u0275\u0275template"](23,A,2,1,"div",19),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](24,"ion-col",20),h["\u0275\u0275elementStart"](25,"div",21),h["\u0275\u0275elementStart"](26,"ion-card-title"),h["\u0275\u0275text"](27),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](28,"ion-card-subtitle"),h["\u0275\u0275text"](29),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](30,"ion-col",13),h["\u0275\u0275elementStart"](31,"ion-buttons"),h["\u0275\u0275elementStart"](32,"ion-button",22),h["\u0275\u0275listener"]("click",(function(){return t.openInMaps()})),h["\u0275\u0275element"](33,"ion-icon",23),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](34,"div",24),h["\u0275\u0275elementStart"](35,"div",25),h["\u0275\u0275elementStart"](36,"ion-row",26),h["\u0275\u0275elementStart"](37,"ion-col",27),h["\u0275\u0275elementStart"](38,"ion-button",28),h["\u0275\u0275listener"]("click",(function(){return t.goToHistory()})),h["\u0275\u0275element"](39,"ion-icon",29),h["\u0275\u0275text"](40," Hist\xf3rico "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](41,"ion-col",27),h["\u0275\u0275elementStart"](42,"ion-button",28),h["\u0275\u0275listener"]("click",(function(){return t.presentAlertMultipleButtons()})),h["\u0275\u0275element"](43,"ion-icon",30),h["\u0275\u0275text"](44," Bloqueio "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](45,"ion-grid"),h["\u0275\u0275elementStart"](46,"ion-row"),h["\u0275\u0275elementStart"](47,"ion-col",27),h["\u0275\u0275text"](48,"\xdaltima atualiza\xe7\xe3o:"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](49,"ion-col",31),h["\u0275\u0275text"](50),h["\u0275\u0275pipe"](51,"date"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](52,"ion-row"),h["\u0275\u0275elementStart"](53,"ion-col",32),h["\u0275\u0275element"](54,"ion-icon",33),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](55,"ion-col",34),h["\u0275\u0275text"](56),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](57,"ion-grid",35),h["\u0275\u0275elementStart"](58,"ion-row",11),h["\u0275\u0275elementStart"](59,"ion-col",13),h["\u0275\u0275elementStart"](60,"div",14),h["\u0275\u0275elementStart"](61,"ion-fab-button",15),h["\u0275\u0275element"](62,"ion-icon",36),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](63,"ion-col",20),h["\u0275\u0275elementStart"](64,"div",37),h["\u0275\u0275elementStart"](65,"ion-card-title"),h["\u0275\u0275text"](66,"Informa\xe7\xf5es Adicionais"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](67,"ion-card-subtitle"),h["\u0275\u0275text"](68),h["\u0275\u0275pipe"](69,"date"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](70,"ion-row"),h["\u0275\u0275elementStart"](71,"ion-col",32),h["\u0275\u0275elementStart"](72,"div",14),h["\u0275\u0275element"](73,"ion-icon",38),h["\u0275\u0275elementStart"](74,"span"),h["\u0275\u0275text"](75,"Velocidade"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](76,"span",39),h["\u0275\u0275text"](77),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](78,"ion-col",32),h["\u0275\u0275elementStart"](79,"div",14),h["\u0275\u0275element"](80,"ion-icon",40),h["\u0275\u0275elementStart"](81,"span"),h["\u0275\u0275text"](82,"Igni\xe7\xe3o"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](83,"span",39),h["\u0275\u0275text"](84),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](85,"ion-col",32),h["\u0275\u0275elementStart"](86,"div",14),h["\u0275\u0275element"](87,"ion-icon",41),h["\u0275\u0275elementStart"](88,"span"),h["\u0275\u0275text"](89,"Bloqueado"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](90,"span",39),h["\u0275\u0275text"](91),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](92,"ion-col",32),h["\u0275\u0275elementStart"](93,"div",14),h["\u0275\u0275element"](94,"ion-icon",42),h["\u0275\u0275elementStart"](95,"span"),h["\u0275\u0275text"](96,"Bateria"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](97,"span",39),h["\u0275\u0275text"](98),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](99,"ion-row",43),h["\u0275\u0275elementStart"](100,"ion-col",32),h["\u0275\u0275elementStart"](101,"div",14),h["\u0275\u0275element"](102,"ion-icon",44),h["\u0275\u0275elementStart"](103,"span"),h["\u0275\u0275text"](104,"Od\xf4metro"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](105,"span",39),h["\u0275\u0275text"](106),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](107,"ion-col",32),h["\u0275\u0275elementStart"](108,"div",14),h["\u0275\u0275element"](109,"ion-icon",45),h["\u0275\u0275elementStart"](110,"span"),h["\u0275\u0275text"](111,"V\xe1lido?"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](112,"span",39),h["\u0275\u0275text"](113),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](114,"ion-col",32),h["\u0275\u0275elementStart"](115,"div",14),h["\u0275\u0275element"](116,"ion-icon",46),h["\u0275\u0275elementStart"](117,"span"),h["\u0275\u0275text"](118,"Movimento"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](119,"span",39),h["\u0275\u0275text"](120),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](121,"ion-col",32),h["\u0275\u0275elementStart"](122,"div",14),h["\u0275\u0275element"](123,"ion-icon",47),h["\u0275\u0275elementStart"](124,"span"),h["\u0275\u0275text"](125,"Horas Motor"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](126,"span",39),h["\u0275\u0275text"](127),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.modalCadeadoOpen),h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("ngIf",t.device.geofence_lock_id),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",!t.device.geofence_lock_id),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.typeMapBox),h["\u0275\u0275advance"](9),h["\u0275\u0275property"]("ngIf",!t.spinnerBackground),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.spinnerBackground),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.isEmptyObject(t.device.last_position)&&(null==t.device.last_position?null:t.device.last_position.position.attributes.power)),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.isEmptyObject(t.device.last_position)&&!(null!=t.device.last_position&&t.device.last_position.position.attributes.power)),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.isEmptyObject(t.device.last_position)&&(null==t.device.last_position?null:t.device.last_position.position.attributes.ignition)),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.isEmptyObject(t.device.last_position)&&!(null!=t.device.last_position&&t.device.last_position.position.attributes.ignition)),h["\u0275\u0275advance"](4),h["\u0275\u0275textInterpolate"](t.device.license_plate),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate3"]("",t.device.brand," ",t.device.model," ",t.device.color,""),h["\u0275\u0275advance"](21),h["\u0275\u0275textInterpolate"](h["\u0275\u0275pipeBind2"](51,25,t.device.last_date_position,"dd/MM/yyyy HH:mm:ss")),h["\u0275\u0275advance"](6),h["\u0275\u0275textInterpolate"](t.device.address),h["\u0275\u0275advance"](12),h["\u0275\u0275textInterpolate1"]("Atualizada em: ",h["\u0275\u0275pipeBind2"](69,28,t.device.last_date_position,"dd/MM/yyyy HH:mm:ss")," "),h["\u0275\u0275advance"](9),h["\u0275\u0275textInterpolate1"]("",t.isEmptyObject(t.device.last_position)?t.formatSpeed(null==t.device.last_position||null==t.device.last_position.position?null:t.device.last_position.position.speed):"-"," km/h"),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate"](t.isEmptyObject(t.device.last_position)?null!=t.device.last_position&&null!=t.device.last_position.position.attributes&&t.device.last_position.position.attributes.ignition?"Ligada":"Desligada":"-"),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate"](t.isEmptyObject(t.device.last_position)?null!=t.device.last_position&&t.device.last_position.position.attributes.out1?"Sim":"N\xe3o":"-"),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate1"]("",t.isEmptyObject(t.device.last_position)?null==t.device.last_position?null:t.device.last_position.position.attributes.power:"-"," v"),h["\u0275\u0275advance"](8),h["\u0275\u0275textInterpolate1"]("",t.isEmptyObject(t.device.last_position)?t.formatDistance(null==t.device.last_position?null:t.device.last_position.position.attributes.odometer):"-"," km"),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate"](t.isEmptyObject(t.device.last_position)?null!=t.device.last_position&&t.device.last_position.position.valid?"Sim":"N\xe3o":"-"),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate"](t.isEmptyObject(t.device.last_position)?null!=t.device.last_position&&t.device.last_position.position.attributes.motion?"Sim":"N\xe3o":"-"),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate"](t.isEmptyObject(t.device.last_position)?t.formatValueHours(null==t.device.last_position?null:t.device.last_position.position.attributes.hours):"-"))},directives:[a.IonContent,o.NgIf,a.IonFabButton,a.IonIcon,a.IonGrid,a.IonRow,a.IonCol,a.IonCardTitle,a.IonCardSubtitle,a.IonButtons,a.IonButton,s.i,a.RouterLinkDelegate,a.IonList,a.IonListHeader,a.IonItem,a.IonSpinner],pipes:[o.DatePipe],styles:["ion-fab-button[_ngcontent-%COMP%]{--box-shadow:none;margin:0}#map_canvas[_ngcontent-%COMP%]{width:100%;height:100%}.card-header-devices[_ngcontent-%COMP%]{margin-left:10px;margin-top:4px}ion-icon[_ngcontent-%COMP%]{color:#aec8d2;font-size:38px}.acoes[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#393e46;font-size:24px;margin-right:10px}.location[_ngcontent-%COMP%]{font-size:30px;color:#00adb5}.map-back[_ngcontent-%COMP%]{position:absolute;border-radius:200px;background-color:#fff;top:45px;left:10px;padding:0;z-index:1000}.map-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.map-type[_ngcontent-%COMP%]{position:absolute;border-radius:200px;background-color:#fff;top:45px;right:10px;padding:0;z-index:1000}.map-type[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000;font-size:1.5em}.cadeado-button[_ngcontent-%COMP%]{position:absolute;border-radius:200px;background-color:#fff;bottom:250px;left:10px;padding:0;z-index:10}.cadeado-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000;font-size:1.5em}.map-type-box[_ngcontent-%COMP%]{width:140px;right:10px;top:50px;position:absolute;z-index:99;background-color:#fff}.map-type-box[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;margin:0}.senssores[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#6d6d6d;font-size:13px}.senssores[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--ionicon-stroke-width:16px;color:#222831;font-size:32px}.senssores[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:13px;font-weight:700}.senssores[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-bottom:15px}.senssores[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1em}.senssores[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#aec8d2}#street-view[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#fff;padding-left:10px;margin:0}.street-view-close[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;z-index:999999;top:10px;border-radius:200px;background-color:#fff}.street-view-icon[_ngcontent-%COMP%]{position:absolute;bottom:250px;width:48px;left:10px;height:50px;z-index:9}.cupertino-pane[_ngcontent-%COMP%]{z-index:9999999}ion-content[_ngcontent-%COMP%]   .ion-car-active[_ngcontent-%COMP%]{border-left:5px solid green}ion-content[_ngcontent-%COMP%]   .ion-car-inactive[_ngcontent-%COMP%]{border-left:5px solid red}ion-content[_ngcontent-%COMP%]   #car-circle[_ngcontent-%COMP%]{position:relative;overflow:visible!important}ion-content[_ngcontent-%COMP%]   #batery-badge[_ngcontent-%COMP%]{top:6px}ion-content[_ngcontent-%COMP%]   #batery-badge[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   #key-badge[_ngcontent-%COMP%]{position:absolute;left:45px;z-index:9999;width:20px;height:20px}ion-content[_ngcontent-%COMP%]   #key-badge[_ngcontent-%COMP%]{top:32px}.line[_ngcontent-%COMP%]{background-color:grey;width:90%;height:1px;margin:20px auto 0}ion-item[_ngcontent-%COMP%]{--background:#fff}ion-list[_ngcontent-%COMP%]{margin-top:0;padding-top:0;padding-bottom:0}.bg-modal-cadeado[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.3);width:100%;height:100%;z-index:99999;position:absolute}.modal-cadeado[_ngcontent-%COMP%]{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);position:absolute;z-index:9999;background-color:#fff;padding:40px;border-radius:10px;left:0;right:0;margin:auto;width:250px;top:30%}.modal-cadeado[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;display:block;padding-top:10px}"]}),e})()}];let B=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.j.forChild(z)],s.j]}),e})(),D=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[x],imports:[[o.CommonModule,i.FormsModule,a.IonicModule,B]]}),e})()}}]);