(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{293:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("1b7833da",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";n(293)},303:function(t,e,n){var o=n(89)(!1);o.push([t.i,"*{box-sizing:border-box;margin:0;padding:0}.text-d-primary{font-size:calc(1rem + .1vw);font-size:calc(2.5rem + .1vw)}",""]),t.exports=o},311:function(t,e,n){"use strict";n.r(e);var o=n(26),l=(n(58),n(70)),r=n.n(l),c={name:"Index",data:function(){return{covid:{},santander:[],santander_muertos:[]}},computed:{covidStates:function(){return this.$store.state.covid.list}},methods:{fetchData:function(){return r.a.get("https://atlas.jifo.co/api/connectors/6ff7af44-3323-4e0a-b878-a4dd2853199e")},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData().then((function(e){return t.covid=e.data}));case 2:n=t.covid.data[1],t.santander=n[29],t.santander_muertos=t.covid.data[2][6];case 5:case"end":return e.stop()}}),e)})))()},isLogged:function(t){void 0===this.$cookies.get("userLogged")?this.$router.push("/signin"):window.location.href=t}}},d=(n(302),n(63)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row flex"},[n("div",{staticClass:"col-auto info-container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex justify-content-center align-items-center"},[n("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[n("b-button",{staticClass:"border-0 bg-transparent btn-outline-none shadow-none p-0",on:{click:function(e){return t.isLogged("schedule")}}},[n("figure",{staticClass:"rounded-sm",staticStyle:{border:"1px solid gray"}},[n("img",{staticClass:"img-fluid",attrs:{alt:"agendamiento",src:"/widgets/calender.svg"}})])])],1),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-12 p-3 p-sm-2 p-md-2 p-lg-1"},[n("b-button",{staticClass:"border-0 bg-transparent btn-outline-none shadow-none p-0",on:{click:function(e){return t.isLogged("routes")}}},[n("figure",{staticClass:"rounded-sm",staticStyle:{border:"1px solid gray"}},[n("img",{staticClass:"img-fluid",attrs:{alt:"rutas uis",src:"/widgets/pana.svg"}})])]),t._v(" "),n("nuxt-link",{attrs:{to:"/routes"}})],1),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-12"},[n("nuxt-link",{attrs:{to:"/weather"}},[n("figure",{staticClass:"rounded-sm",staticStyle:{border:"1px solid gray"}},[n("img",{staticClass:"img-fluid",attrs:{alt:"clima",src:"/widgets/routes.svg"}})])])],1)]),t._v(" "),n("b-container",{staticClass:"justify-content-center"},[n("b-row",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"covid-service"}},[n("b-col",{staticClass:"d-flex flex-column justify-content-center align-items-center position-relative",attrs:{sm:"12",md:"4"}},[n("img",{staticClass:"position-absolute",staticStyle:{top:"5px"},attrs:{src:"/states/people-fill.svg",width:"50",alt:"estado"}}),t._v(" "),n("p",{staticClass:"text-white text-center position-absolute font-weight-light px-2",staticStyle:{"font-size":"calc(1rem + 0.2vw)"}},[t._v("Casos\n                confirmados hoy "),n("br"),t._v(" en Santander")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t.getData()))]),t._v(" "),null!=t.getData()?n("div",{staticClass:"d-flex justify-content-center"},[n("p",{staticClass:"text-white text-center position-absolute font-weight-bolder px-2",staticStyle:{top:"135px","font-size":"2rem"}},[t._v("\n                  "+t._s(this.santander[1]))])]):t._e(),t._v(" "),n("svg",{staticClass:"rounded-lg mx-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"250",viewBox:"0 0 380 380",fill:"none"}},[n("rect",{attrs:{width:"380",height:"380",fill:"rgb(51, 102, 204)"}})])]),t._v(" "),n("b-col",{staticClass:"d-flex flex-column justify-content-center align-items-center position-relative my-3 mx-md-3 mx-lg-0",attrs:{sm:"12",md:"4"}},[n("img",{staticClass:"position-absolute",staticStyle:{top:"5px"},attrs:{src:"/states/people-fill.svg",width:"50",alt:"estado"}}),t._v(" "),n("p",{staticClass:"text-white text-center position-absolute font-weight-light px-2",staticStyle:{"font-size":"calc(1rem + 0.2vw)"}},[t._v("Casos totales en Santander")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t.getData()))]),t._v(" "),null!=t.getData()?n("div",{staticClass:"d-flex justify-content-center"},[n("p",{staticClass:"text-white text-center position-absolute font-weight-bolder px-2",staticStyle:{top:"120px","font-size":"1.5rem"}},[t._v("\n                  "+t._s(this.santander[5]))])]):t._e(),t._v(" "),n("svg",{staticClass:"rounded-lg mx-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"250",viewBox:"0 0 380 380",fill:"none"}},[n("rect",{attrs:{width:"380",height:"380",fill:"rgb(95, 183, 229)"}})])]),t._v(" "),n("b-col",{staticClass:"d-flex flex-column justify-content-center align-items-center position-relative",attrs:{sm:"12",md:"4"}},[n("img",{staticClass:"position-absolute",staticStyle:{top:"5px"},attrs:{src:"/states/death-fill.svg",width:"50",alt:"estado"}}),t._v(" "),n("p",{staticClass:"text-white text-center position-absolute font-weight-light px-2",staticStyle:{"font-size":"calc(1rem + 0.2vw)"}},[t._v("Fallecidos de hoy "),n("br"),t._v(" en Santander")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t.getData()))]),t._v(" "),null!=t.getData()?n("div",{staticClass:"d-flex justify-content-center"},[n("p",{staticClass:"text-white text-center position-absolute font-weight-bolder px-2",staticStyle:{top:"135px","font-size":"2rem"}},[t._v("\n                  "+t._s(this.santander_muertos[1]))])]):t._e(),t._v(" "),n("svg",{staticClass:"rounded-lg mx-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"250",viewBox:"0 0 380 380",fill:"none"}},[n("rect",{attrs:{width:"380",height:"380",fill:"rgb(237, 30, 121)"}})])])],1)],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);