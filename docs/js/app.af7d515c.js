(function(e){function t(t){for(var r,a,c=t[0],u=t[1],o=t[2],h=0,d=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,c=1;c<s.length;c++){var u=s[c];0!==i[u]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},i={app:0},n=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0a4b":function(e,t,s){"use strict";s("59e1")},"0b3a":function(e,t,s){},"0d93":function(e,t,s){"use strict";s("af1f")},"0dd1":function(e,t,s){},"0e7f":function(e,t,s){},"12ae":function(e,t,s){e.exports=s.p+"img/loading.c8d74389.gif"},"209a":function(e,t,s){"use strict";s("3cff")},"342e":function(e,t,s){"use strict";s("eda5")},"3cff":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Title"),this.buses&&"bus"==e.searchType?r("SearchBus",{attrs:{buses:this.buses},on:{applyFilterBus:function(t){return e.applyingFilterBus(t)}}}):e._e(),this.streets&&"street"==e.searchType?r("SearchByStreet",{attrs:{streets:this.streets},on:{applyFilterStreet:function(t){return e.applyingFilterStreet(t)},cleanSearchStreet:function(t){return e.cleanSearchStreet()}}}):e._e(),r("span",{staticClass:"changeSearch",on:{click:function(t){return e.changeSearch()}}},[e._v(e._s(e.labelSearch))]),this.loading?r("div",[r("img",{staticClass:"loading",attrs:{src:s("12ae")}})]):e._e(),r("div",{staticClass:"viewsInformations"},[this.filteredStreets&&"street"==e.searchType?r("CardStreet",{staticClass:"listsCards",attrs:{streets:this.filteredStreets},on:{setBusesByStreet:function(t){return e.showBusByStreet(t)}}}):e._e(),!this.filteredBuses||"bus"!=e.searchType&&1!=e.showBusesByStreet?e._e():r("CardBus",{staticClass:"listsCards",attrs:{buses:this.filteredBuses,numberBus:this.numberBus},on:{detailsBus:function(t){return e.detailsBus(t)}}})],1),this.numberBus?r("DetailsBus",{attrs:{showDetails:this.showDetailsBus,numberBus:this.numberBus,nameFullBus:this.nameBus},on:{closeDetails:function(t){return e.closeDetailsBus()}}}):e._e()],1)},n=[],a=s("1da1"),c=(s("b0c0"),s("96cf"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),u=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Ônibus de Fortaleza")]),s("span",[e._v("Horários e itinerário das linhas de ônibus da cidade de Fortaleza")])])}],o={name:"Title"},l=o,h=(s("cc9b"),s("2877")),d=Object(h["a"])(l,c,u,!1,null,"ab0cd97c",null),f=d.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchSection"},[s("div",{staticClass:"viewSearch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"searchBar",attrs:{type:"text",name:"",id:"searchBar",placeholder:"Pesquisar seu Ônibus."},domProps:{value:e.search},on:{keyup:e.debounce,input:function(t){t.target.composing||(e.search=t.target.value)}}}),e.search?s("span",{staticClass:"btn-clean",attrs:{for:"searchBar"},on:{click:e.cleanSearchBar}},[e._v("X")]):e._e()])])},m=[],b=(s("841c"),s("ac1f"),s("498a"),s("4de4"),{name:"SearchByBus",props:{buses:Array},data:function(){return{search:"",timeDelay:null}},methods:{debounce:function(){clearTimeout(this.timeDelay),this.timeDelay=this.applyFilter(this.search)},applyFilter:function(e){var t=this;this.timeDelay=setTimeout((function(){var s=""==e.trim()?t.buses:t.buses.filter((function(t){return-1!=t.numeroNome.toUpperCase().indexOf(e.toUpperCase())}));t.$emit("applyFilterBus",{filteredBuses:s})}),800)},cleanSearchBar:function(){this.search="",this.debounce()}}}),g=b,v=(s("cb04"),Object(h["a"])(g,p,m,!1,null,"695008fa",null)),B=v.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchSection"},[s("div",{staticClass:"viewSearch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"searchBar",attrs:{type:"text",name:"",id:"searchBar",placeholder:"Pesquisar por Logradouro."},domProps:{value:e.search},on:{keyup:e.debounce,input:function(t){t.target.composing||(e.search=t.target.value)}}}),e.search?s("span",{staticClass:"btn-clean",attrs:{for:"searchBar"},on:{click:e.cleanSearchBar}},[e._v("X")]):e._e()])])},y=[],w={name:"SearchByStreet",props:{streets:Array},data:function(){return{search:"",timeDelay:null}},methods:{debounce:function(){clearTimeout(this.timeDelay),this.timeDelay=this.applyFilter(this.search)},applyFilter:function(e){var t=this;this.timeDelay=setTimeout((function(){var s=""==e.trim()?t.streets:t.streets.filter((function(t){return-1!=t.nome.toUpperCase().indexOf(e.toUpperCase())}));t.$emit("applyFilterStreet",{filteredStreets:s})}),800)},cleanSearchBar:function(){this.search="",this.debounce(),this.$emit("cleanSearchStreet")}}},_=w,C=(s("342e"),Object(h["a"])(_,S,y,!1,null,"3487059b",null)),x=C.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"viewBus"},e._l(e.buses,(function(t){return s("div",{key:t.numero,staticClass:"cardBus",on:{click:function(s){return e.showDetails(t)}}},[s("span",{staticClass:"busNumber"},[e._v(e._s(e._f("formatNumber")(t.numero)))]),s("p",{staticClass:"busName"},[e._v(e._s(t.nome))])])})),0)},O=[],N=(s("4d90"),{name:"CardBus",props:{buses:Array},data:function(){return{numberBus:null}},methods:{showDetails:function(e){this.$emit("detailsBus",{numberBus:e.numero,name:e.numeroNome})}},filters:{formatNumber:function(e){return(""+e).padStart(3,"0")}}}),k=N,j=(s("0d93"),Object(h["a"])(k,D,O,!1,null,"51eedd9c",null)),R=j.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewStreet"},e._l(e.streets,(function(t){return r("div",{key:t.id,class:e.selectedStreet===t.id?"cardStreet selectedStreet":"cardStreet",on:{click:function(s){return e.showBusByStreet(t)}}},[r("span",{staticClass:"streetNumber"},[e._v(e._s(t.tipo))]),r("p",{staticClass:"streetName"},[e._v(e._s(t.nome))]),e.loadingStreet===t.id?r("img",{staticClass:"loading",attrs:{src:s("12ae")}}):e._e()])})),0)},F=[],I=(s("99af"),s("bc3a")),$=s.n(I),P="street_",L={name:"CardStreet",props:{streets:Array},data:function(){return{selectedStreet:0,buses:[],loadingStreet:0}},methods:{showBusByStreet:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.selectedStreet=t.id,this.loadingStreet=t.id,e.next=4,this.checkInLocalStorage(t.id);case 4:this.loadingStreet=0,this.$emit("setBusesByStreet",{buses:this.buses});case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getBusByStreet:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.a.get("".concat("http://gistapis.etufor.ce.gov.br:8081/api/LinhasDologradouro/").concat(t)).then((function(e){s.buses=e.data}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),checkInLocalStorage:function(e){if(localStorage[P+e]){var t=JSON.parse(localStorage[P+e]);this.buses=t.buses}return this.setInLocalStorage(e)},setInLocalStorage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBusByStreet(t);case 2:s={buses:this.buses},localStorage[P+t]=JSON.stringify(s);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},V=L,E=(s("209a"),Object(h["a"])(V,T,F,!1,null,"dc2bbd8a",null)),J=E.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showDetails?r("div",{staticClass:"viewDetails"},[r("div",[r("div",{staticClass:"headerDetails"},[r("h1",[e._v(e._s(e.nameFullBus))]),r("span",[e._v(e._s(this.dateNow+" "+this.timeNow))])]),r("span",{staticClass:"closeDetails",on:{click:function(t){return e.closeDetails()}}},[r("img",{attrs:{src:s("d991")}})])]),r("div",[r("Itinerary",{attrs:{itineraries:this.itinerary}}),r("Schedules",{attrs:{schedules:this.schedules,time:this.timeNow}})],1)]):e._e()},A=[],q=(s("a9e3"),s("fb6a"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.itineraries?s("div",{staticClass:"itineraryBus"},[e.itineraries.ida?s("div",{staticClass:"goingBus"},e._l(e.itineraries.ida.itinerarioIda,(function(t,r){return s("div",{key:"ig"+r,staticClass:"itineraryBusView"},[s("p",{staticClass:"itineraryView"},[e._v(e._s(t.nome))])])})),0):e._e(),e.itineraries.volta?s("div",{staticClass:"returnBus"},e._l(e.itineraries.volta.itinerarioVolta,(function(t,r){return s("div",{key:"ir"+r,staticClass:"itineraryBusView"},[s("p",{staticClass:"itineraryView"},[e._v(e._s(t.nome))])])})),0):e._e()]):e._e()}),H=[],U={name:"Itinerary",props:{itineraries:Object,sense:String}},z=U,X=(s("ec7d"),Object(h["a"])(z,q,H,!1,null,"1387690c",null)),Y=X.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.schedules?r("div",{staticClass:"schedulesBus"},[e.schedules[0]&&e.schedules[1]?r("div",{staticClass:"goingReturnBus"},[r("h1",[e._v(" "+e._s(e.schedules[0].postoControle)+" ")]),e._l(e.schedules[0].horarios,(function(t,i){return r("div",{key:"sg"+i,staticClass:"schedulesBusView"},[r("p",{class:e.diffHour(t.horario)?"scheduleView unavailable":"scheduleView"},[e._v(" "+e._s(t.horario)+" ")]),"sim"==t.acessivel?r("img",{staticClass:"accessibility",attrs:{src:s("9c60"),title:"Possui acessibilidade"}}):e._e()])}))],2):e._e(),e.schedules[0]&&e.schedules[1]?r("div",{staticClass:"goingReturnBus"},[r("h1",[e._v(" "+e._s(e.schedules[1].postoControle)+" ")]),e._l(e.schedules[1].horarios,(function(t,i){return r("div",{key:"sr"+i,staticClass:"schedulesBusView"},[r("p",{class:e.diffHour(t.horario)?"scheduleView unavailable":"scheduleView"},[e._v(" "+e._s(t.horario)+" ")]),"sim"==t.acessivel?r("img",{staticClass:"accessibility",attrs:{src:s("9c60"),title:"Possui acessibilidade"}}):e._e()])}))],2):e._e(),e.schedules[0]&&e.schedules[1]?e._e():r("div",[r("h1",[e._v("Não foi possível localizar os horários disponíveis.")]),r("img",{staticClass:"not-found-schedules",attrs:{src:s("a337")}})])]):e._e()},K=[],Q=(s("5319"),{name:"Schedules",props:{schedules:Array,time:String},methods:{diffHour:function(e){if("00:00"===e)return!1;var t=parseInt(this.time.replace(":","")),s=parseInt(e.replace(":",""));return s<t}}}),W=Q,Z=(s("0a4b"),Object(h["a"])(W,G,K,!1,null,"8582c2d8",null)),ee=Z.exports,te="bus_",se={name:"DetailsBus",components:{Itinerary:Y,Schedules:ee},props:{numberBus:Number,nameFullBus:String,showDetails:Boolean},data:function(){return{itinerary:{},schedules:[],dateNow:"",timeNow:""}},created:function(){this.getDataBus()},beforeUpdate:function(){this.getDataBus()},methods:{getDataBus:function(){if(localStorage[te+this.numberBus]){var e=JSON.parse(localStorage[te+this.numberBus]);e.dateCache!=this.getCurrentDate()?(localStorage.removeItem(te+this.numberBus),this.setInLocalStorage()):(this.schedules=e.schedules,this.itinerary=e.itinerary)}else this.setInLocalStorage();var t=new Date;this.getDateNow(t),this.getTimeNow(t)},closeDetails:function(){this.$emit("closeDetails")},getDateNow:function(e){return this.dateNow=("0"+e.getDate()).substr(-2)+"/"+("0"+(e.getMonth()+1)).substr(-2)+"/"+e.getFullYear(),this.dateNow},getTimeNow:function(e){return this.timeNow=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2),this.timeNow},getCurrentDate:function(){var e=new Date,t=("0"+e.getDate()).slice(-2),s=("0"+(e.getMonth()+1)).slice(-2),r=e.getFullYear();return"".concat(r).concat(s).concat(t)},getSchedules:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.get("".concat("http://gistapis.etufor.ce.gov.br:8081/api/horarios/").concat(this.numberBus,"?data=").concat(this.getCurrentDate())).then((function(e){t.schedules=e.data})).catch((function(e){e.response&&(this.schedules=[])}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),this.schedules=[];case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}(),getItinerary:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.get("".concat("http://gistapis.etufor.ce.gov.br:8081/api/itinerario/").concat(this.numberBus)).then((function(e){t.itinerary=e.data})).catch((function(e){e.response&&(this.itinerary={})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),this.itinerary={};case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}(),setInLocalStorage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getSchedules();case 2:return e.next=4,this.getItinerary();case 4:t={schedules:this.schedules,itinerary:this.itinerary,dateCache:this.getCurrentDate()},localStorage[te+this.numberBus]=JSON.stringify(t);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},re=se,ie=(s("f8c1"),Object(h["a"])(re,M,A,!1,null,"28d8e863",null)),ne=ie.exports,ae={name:"App",components:{Title:f,SearchBus:B,SearchByStreet:x,CardBus:R,CardStreet:J,DetailsBus:ne},data:function(){return{buses:[],filteredBuses:[],streets:[],filteredStreets:[],numberBus:null,searchType:"bus",labelSearch:"Pesquisar por via",showBusesByStreet:!1,nameBus:"",showDetailsBus:!1,loading:!0}},created:function(){if(localStorage.data){var e=JSON.parse(localStorage.data);this.buses=e.buses,this.filteredBuses=this.buses,this.streets=e.streets,this.filteredStreets=this.streets}else this.setInLocalStorage();this.loading=!1},methods:{getBuses:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.a.get("".concat("http://gistapis.etufor.ce.gov.br:8081/api/linhas/")).then((function(e){t.buses=e.data}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getStreets:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.a.get("".concat("http://gistapis.etufor.ce.gov.br:8081/api/logradouros/")).then((function(e){t.streets=e.data}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),closeDetailsBus:function(){this.showDetailsBus=!1},detailsBus:function(e){this.numberBus=e.numberBus,this.nameBus=e.name,this.showDetailsBus=!0},setInLocalStorage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBuses();case 2:return e.next=4,this.getStreets();case 4:t={buses:this.buses,streets:this.streets},this.filteredBuses=this.buses,this.filteredStreets=this.streets,localStorage.data=JSON.stringify(t);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),showBusByStreet:function(e){this.showBusesByStreet=!0,this.filteredBuses=e.buses},cleanSearchStreet:function(){this.showBusesByStreet=!1,this.filteredBuses=this.buses},applyingFilterBus:function(e){this.filteredBuses=e.filteredBuses},applyingFilterStreet:function(e){this.filteredStreets=e.filteredStreets},changeSearch:function(){this.searchType="bus"==this.searchType?"street":"bus",this.labelSearch="bus"==this.searchType?"Pesquisar por via":"Pesquisar por Ônibus",this.filteredBuses=this.buses,this.showBusesByStreet=!1}}},ce=ae,ue=(s("034f"),Object(h["a"])(ce,i,n,!1,null,null,null)),oe=ue.exports;s("dbc7");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(oe)}}).$mount("#app")},"59e1":function(e,t,s){},"85ec":function(e,t,s){},"9c60":function(e,t,s){e.exports=s.p+"img/acessibilidade.de3078e0.png"},a337:function(e,t,s){e.exports=s.p+"img/not-found.1db26645.png"},af1f:function(e,t,s){},cb04:function(e,t,s){"use strict";s("0b3a")},cc9b:function(e,t,s){"use strict";s("e682")},d991:function(e,t,s){e.exports=s.p+"img/close.41c7a8ec.png"},dbc7:function(e,t,s){},e682:function(e,t,s){},ec7d:function(e,t,s){"use strict";s("0dd1")},eda5:function(e,t,s){},f8c1:function(e,t,s){"use strict";s("0e7f")}});
//# sourceMappingURL=app.af7d515c.js.map