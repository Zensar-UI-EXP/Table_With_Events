(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),c=(a(16),a(1)),l=a(2),s=a(4),u=a(3),d=a(5),m=(a(17),a(6));var h=function(e){return i.a.createElement("div",{className:"options"},i.a.createElement("input",{className:"searchField",type:"text",placeholder:"Search",onChange:e.search}),i.a.createElement("label",null,"Record Per Page:",i.a.createElement("select",{onChange:e.pageination,value:e.selectValue},i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"4"},"4"))))},p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).searchList=void 0,a.pageNum=void 0,a.pageLimit=void 0,a.asc=void 0,a.compareBy=function(e){return function(t,n){if(a.asc){if(t[e]<n[e])return-1}else if(t[e]>n[e])return-1;return 0}},a.sortBy=function(e){var t=Object(m.a)(a.state.body);t.sort(a.compareBy(e)),a.asc=!a.asc,a.setState({body:t})},a.findArrayElementByTitle=function(e){""!=e.target.value?isNaN(e.target.value)?a.filterSearch("name",e.target.value):a.filterSearch("id",e.target.value):(a.setPageLimit(a.pageLimit),a.removeClassFn(),a.addClassFn(1))},a.filterSearch=function(e,t){a.searchList=a.props.table.body.filter(function(a){return a[e].toLowerCase().includes(t.trim().toLowerCase())}),a.pageNum=Math.ceil(a.searchList.length/Number(a.pageLimit)),a.setState({body:a.searchList.slice(0,a.pageLimit)})},a.PageLim=function(e){a.pageLimit=e.target.value,a.setPageLimit(e.target.value)},a.setPageLimit=function(e){a.removeClassFn(),a.addClassFn(1),null!=document.querySelector(".searchField")&&document.querySelector(".searchField").value?(a.pageNum=Math.ceil(a.searchList.length/e),a.setState({body:a.searchList.slice(0,e)})):(a.pageNum=Math.ceil(a.props.table.body.length/e),a.setState({body:a.props.table.body.slice(0,e)}))},a.removeClassFn=function(){for(var e=document.querySelectorAll(".pagination"),t=0;t<e.length;t++)for(var a=0;a<e[t].children.length;a++)e[t].children[a].classList.remove("active")},a.addClassFn=function(e){for(var t=document.querySelectorAll(".pagination"),a=0;a<t.length;a++)for(var n=0;n<t[a].children.length;n++)t[a].children[Number(e)-1].classList.add("active")},a.changePageination=function(e,t,n){a.removeClassFn(),a.addClassFn(n.target.textContent),null!=document.querySelector(".searchField")&&""!=document.querySelector(".searchField").value?a.setState({body:a.searchList.slice(e,t)}):a.setState({body:a.props.table.body.slice(e,t)})},a.checkFn=function(){a.setState({showCheck:!a.state.showCheck})},a.state={body:a.props.table.body,showCheck:!1},a.pageNum=0,a.searchList=[],a.pageLimit=2,a.asc=!0,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setPageLimit(this.pageLimit)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"table"},i.a.createElement("div",{className:"table__head"},i.a.createElement("label",null," ","Show Options",i.a.createElement("input",{type:"checkbox",className:"showOptions",onClick:this.checkFn})," "),this.state.showCheck?i.a.createElement(h,{selectValue:this.pageLimit,search:this.findArrayElementByTitle.bind(this),pageination:this.PageLim.bind(this)}):"",i.a.createElement("div",{className:"pagination"},Object(m.a)(Array(this.pageNum)).map(function(t,a){return i.a.createElement("button",{className:0==a?"active":"",onClick:e.changePageination.bind(e,a*Number(e.pageLimit),a*Number(e.pageLimit)+Number(e.pageLimit)),key:a},a+1)})),i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,this.props.table.head.map(function(t){return i.a.createElement("th",{onClick:function(){return e.sortBy(t)},key:t},t)}))),i.a.createElement("tbody",null,this.state.body.map(function(e,t){return i.a.createElement("tr",{key:e[t]},Object.keys(e).map(function(t,a){return i.a.createElement("td",{key:t},e[t]," ")}))}))),i.a.createElement("div",{className:"pagination"},Object(m.a)(Array(this.pageNum)).map(function(t,a){return i.a.createElement("button",{className:0==a?"active":"",onClick:e.changePageination.bind(e,a*Number(e.pageLimit),a*Number(e.pageLimit)+Number(e.pageLimit)),key:a},a+1)}))))}}]),t}(i.a.Component),g=a(9),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hello:"Mohamed Asheik P"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p,this.props.tableData))}}]),t}(i.a.Component);f.defaultProps={country:"Hello everyone!",tableData:g};var b=f,v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");v?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()},9:function(e){e.exports={table:{head:["id","name"],body:[{id:"53161",name:"Mathan"},{id:"012",name:"aasaddas"},{id:"132",name:"kjhjkjh"},{id:"123",name:"Mohamed"},{id:"8422",name:"Garrett Winters"},{id:"7580",name:"Michelle House"},{id:"5384",name:"Thor Walton"},{id:"4226",name:"Donna Snider"},{id:"5433",name:"Vizz Snider"}]}}}},[[10,1,2]]]);
//# sourceMappingURL=main.39d26bc2.chunk.js.map