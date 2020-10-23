(this["webpackJsonpfox-app"]=this["webpackJsonpfox-app"]||[]).push([[0],{13:function(e,t,r){},37:function(e,t,r){e.exports=r(65)},42:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(16),c=r.n(o),l=r(11),i=(r(42),r(13),r(10)),s=r(9),u=r(12),m=r.n(u),E=Object(s.b)((function(e){return{fox:e.fox,error:e.error}}),{getFoxImage:function(){return function(e){e({type:"FETCH_FOX_IMAGE_START"}),m.a.get("https://cors-anywhere.herokuapp.com/http://randomfox.ca/floof").then((function(t){console.log(t),e({type:"FETCH_FOX_IMAGE_SUCCESS",payload:t.data.image})})).catch((function(t){console.log(t),e({type:"FETCH_FOX_IMAGE_FAILURE",payload:"".concat(t.response)})}))}}})((function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Fox Image Generator"),n.a.createElement("div",null,n.a.createElement("img",{src:e.fox,alt:"fox"})),e.error&&n.a.createElement("p",{className:"error"},e.error),n.a.createElement("button",{onClick:function(t){t.preventDefault(),e.getFoxImage()}},"New Fox Image"))})),g=Object(s.b)((function(e){return{dog:e.dog,error:e.error}}),{getDogImage:function(){return function(e){e({type:"FETCH_DOG_IMAGE_START"}),m.a.get("https://random.dog/woof.json").then((function(t){console.log(t),e({type:"FETCH_DOG_IMAGE_SUCCESS",payload:t.data.url})})).catch((function(t){console.log(t),e({type:"FETCH_DOG_IMAGE_FAILURE",payload:"".concat(t.response)})}))}}})((function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Dog Image Generator"),n.a.createElement("div",null,n.a.createElement("img",{src:e.dog,alt:"dog"})),e.error&&n.a.createElement("p",{className:"error"},e.error),n.a.createElement("button",{onClick:function(t){t.preventDefault(),e.getDogImage()}},"New Dog Image"))})),p=Object(s.b)((function(e){return{cat:e.cat,error:e.error}}),{getCatImage:function(){return function(e){e({type:"FETCH_CAT_IMAGE_START"}),m.a.get("https://aws.random.cat/meow").then((function(t){console.log(t),e({type:"FETCH_CAT_IMAGE_SUCCESS",payload:t.data.file})})).catch((function(t){console.log(t),e({type:"FETCH_CAT_IMAGE_FAILURE",payload:"".concat(t.response)})}))}}})((function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Cat Image Generator"),n.a.createElement("div",null,n.a.createElement("img",{src:e.cat,alt:"cat"})),e.error&&n.a.createElement("p",{className:"error"},e.error),n.a.createElement("button",{onClick:function(t){t.preventDefault(),e.getCatImage()}},"New Cat Image"))})),f=function(){return n.a.createElement("div",{className:"nav-container"},n.a.createElement(l.b,{to:"/fox-image",className:"link"},"Fox"),n.a.createElement(l.b,{to:"/dog-image",className:"link"},"Dog"),n.a.createElement(l.b,{to:"/cat-image",className:"link"},"Cat"))},_=r(34);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(_.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={fox:"http://randomfox.ca/images/68.jpg",dog:"https://random.dog/aa8e5e24-5c58-4963-9809-10f4aa695cfc.jpg",cat:"https://purr.objects-us-east-1.dream.io/i/030_-_VNZ6Gt8.gif",error:"",isFetching:!1},C=r(35),A=r(36),I=r.n(A),y=r(15),T=Object(y.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FOX_IMAGE_START":return h({},e,{error:"",isFetching:!0});case"FETCH_FOX_IMAGE_SUCCESS":return h({},e,{fox:t.payload,error:"",isFetching:!1});case"FETCH_FOX_IMAGE_FAILURE":return h({},e,{error:t.payload,isFetching:!1});case"FETCH_DOG_IMAGE_START":return h({},e,{error:"",isFetching:!0});case"FETCH_DOG_IMAGE_SUCCESS":return h({},e,{dog:t.payload,error:"",isFetching:!1});case"FETCH_DOG_IMAGE_FAILURE":return h({},e,{error:t.payload,isFetching:!1});case"FETCH_CAT_IMAGE_START":return h({},e,{error:"",isFetching:!0});case"FETCH_CAT_IMAGE_SUCCESS":return h({},e,{cat:t.payload,error:"",isFetching:!1});case"FETCH_CAT_IMAGE_FAILURE":return h({},e,{error:t.payload,isFetching:!1});default:return e}}),Object(y.a)(C.a,I.a));var O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(f,null),n.a.createElement(i.a,{path:"/fox-image",component:E}),n.a.createElement(i.a,{path:"/dog-image",component:g}),n.a.createElement(i.a,{path:"/cat-image",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(s.a,{store:T},n.a.createElement(l.a,null,n.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.3fb58561.chunk.js.map