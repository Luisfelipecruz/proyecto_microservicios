(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{304:function(t,e,n){"use strict";n.r(e);var r={name:"Profile",data:function(){return{}},computed:{getUser:function(){return this.$cookies.get("userLogged")}}},c=n(63),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"d-flex justify-content-center align-items-center"},[n("b-card",{staticClass:"shadow-lg p-3 w-50"},[n("b-card-body",{staticClass:"d-flex flex-column justify-content-center align-items-center position-relative"},[n("h1",{staticClass:"font-weight-light text-center",staticStyle:{"font-size":"calc(3rem + 0.1vw)"}},[t._v("\n        "+t._s(t.getUser.primNomUsr)+" "+t._s(t.getUser.segNomUsr)+" "+t._s(t.getUser.primApeUsr)+" "+t._s(t.getUser.SegmApeUsr)+"\n      ")]),t._v(" "),n("div",{staticClass:"text-center font-weight-normal",staticStyle:{"font-size":"calc(2rem + 0.3vw)"}},[t._v("\n        Codigo de estudiante\n        "),n("p",{staticClass:"font-weight-light",staticStyle:{"font-size":"2rem"}},[t._v(t._s(t.getUser.CodEst))])]),t._v(" "),n("div",{staticClass:"text-center font-weight-normal",staticStyle:{"font-size":"calc(2rem + 0.3vw)"}},[t._v("\n        Genero\n        "),n("p",{staticClass:"font-weight-light",staticStyle:{"font-size":"2rem"}},[t._v(t._s(t.getUser.generoUsr))])])])],1)],1)}),[],!1,null,"5449dbe2",null);e.default=component.exports}}]);