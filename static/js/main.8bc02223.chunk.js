(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),l=(n(18),n(5)),s=n(2),i=n(1),u=n.n(i),p=n(6),f=n(7),h=n(8),m=n(10),d=n(9),v=n(11),S=(n(22),function(e){function t(){var e,n;Object(f.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={data:{},forTest:"APPLE",forTestPeach:"PEACH",Step1:!0,Step2:!1,step3:!1},n.asyncFetch=Object(p.a)(u.a.mark(function e(){var t,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:o=e.sent,n.setState({data:o}),console.log(o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("fetch failed",e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])})),n.try=function(e){return e+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:3)},n.setFunc=function(){var e=new Set;[2,3,5,4,5,2,2].forEach(function(t){return e.add(t)}),e.add(1).add(2).add(6),e.delete(2),e.has(2),console.log(e)},n.mapFunc=function(){var e=new Map;e.set("first",1),e.set(10,"ten"),e.set({sayHi:"Hi"},"obj"),console.log("map:",e);var t=new Map([["key1","value1"],["key2","value2"]]);console.log("myMap:",t)},n.foo=u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start"),e.next=3,"called";case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}},e,this)}),n.forOfLoop=function(){var e=u.a.mark(w),t=n.state.data;console.log(t);var o=!0,a=!1,r=void 0;try{for(var c,l="\ud83d\ude3a\ud83d\ude32"[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var s=c.value;console.log(s)}}catch(T){a=!0,r=T}finally{try{o||null==l.return||l.return()}finally{if(a)throw r}}var i=!0,p=!1,f=void 0;try{for(var h,m="\u3042\u3044\u3046\u3048\u304a\u304b\u304d\u304f\u3051\u3053"[Symbol.iterator]();!(i=(h=m.next()).done);i=!0){var d=h.value;console.log(d)}}catch(T){p=!0,f=T}finally{try{i||null==m.return||m.return()}finally{if(p)throw f}}var v=!0,S=!1,g=void 0;try{for(var y,b=t[Symbol.iterator]();!(v=(y=b.next()).done);v=!0){var E=y.value;console.log(E)}}catch(T){S=!0,g=T}finally{try{v||null==b.return||b.return()}finally{if(S)throw g}}function w(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,1;case 2:return e.next=4,2;case 4:return e.next=6,3;case 6:return e.next=8,4;case 8:return e.next=10,5;case 10:return e.abrupt("return",6);case 11:case"end":return e.stop()}},e,this)}var k=!0,A=!1,x=void 0;try{for(var P,C=w()[Symbol.iterator]();!(k=(P=C.next()).done);k=!0){var O=P.value;console.log(O)}}catch(T){A=!0,x=T}finally{try{k||null==C.return||C.return()}finally{if(A)throw x}}},n.SpreadAndRest=function(e,t,n){console.log("a",e),console.log("b",t),console.log("c",n);for(var o=arguments.length,a=new Array(o>3?o-3:0),r=3;r<o;r++)a[r-3]=arguments[r];console.log("d",a)},n.include=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];console.log(t.includes("pink"));var a=t.includes("black"),r=n.foo(),c=r.next();console.log(c),console.log(r.next("hello generator")),a?console.log("trueee"):console.log("falseeee")},n.symbol=function(){var e=Object(s.a)({name:"\u5a77\u5a77",age:24,job:"\u516c\u53f8\u524d\u53f0"},Symbol("description"),"\u5e73\u65f6\u559c\u6b22\u505a\u505a\u745c\u4f3d\uff0c\u4eba\u5bb6\u6709\u7537\u670b\u53cb\uff0c\u4f60\u522b\u6307\u671b\u4e86"),t=Object(s.a)({},Symbol("description"),"\u8fd9\u5c0f\u59d1\u5a18\u633a\u597d\u7684\uff0c\u633a\u70ed\u60c5\u7684");console.log(Object.assign({},e,t))},n.promiseTest=function(){var e=function(e){Math.random()>.2?e.success():e.error()};!function(t,n){var o=0,a=0;!function r(){t[o]?e({name:t[o],success:function(){a=0,console.log("\u6210\u529f\u62ff\u4e0b"+t[o]),o++,r()},error:function(){1!==a?(console.log("\u6c92\u80fd\u62ff\u4e0b"+t[o]+"\uff0c\u518d\u8a66\u4e00\u6b21"),a=1,r()):console.log("\u4f9d\u820a\u6c92\u80fd\u62ff\u4e0b"+t[o]+"\uff0c\u6c42\u5a5a\u5931\u6557")}}):n()}()}(["\u5cb3\u7236","\u5927\u4f2f","\u5927\u59d1"],function(){e({name:"\u5973\u795e",success:function(){console.log("\u5973\u795e\u540c\u610f\uff0c\u6c42\u5a5a\u6210\u529f\uff01")},error:function(){console.log("\u5973\u795e\u4e0d\u540c\u610f\uff0c\u6c42\u5a5a\u5931\u6557\uff01")}})})},n.iterableTest=function(){var e,t,n,o={name:"Bobo"},a=(e="shoeSize",t=400,n=o,Object(l.a)({},n,Object(s.a)({},e,t)));console.log({person:o,result:a})},n.getAirSpeed=function(){console.log("getAirSpeed func state forTest is APPLE")},n.getWaterSpeed=function(){console.log("getWaterSpeed func state forTest is BANANA")},n.hashMap=function(e){return{APPLE:n.getAirSpeed,BANANA:n.getWaterSpeed}[e]()},n.twoSum=function(){for(var e=[2,7,11,15],t=0;t<e.length;t++)for(var n=t+1;n<e.length;n++)e[t]+e[n]===9&&console.log([t,n])},n.becomesBanana=function(){n.setState({forTest:"BANANA"})},n.becomesApple=function(){n.setState({forTest:"APPLE"})},n.Step1=function(){n.setState({Step1:!0,Step2:!1,step3:!1})},n.Step2=function(){n.setState({Step1:!1,Step2:!0,Step3:!1})},n.Step3=function(){n.setState({Step1:!1,Step2:!1,Step3:!0})},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=["pinkkkk","whiteeee","yellowwww"],n=function(e){return{background:e?"darkseagreen":"burlywood",margin:"10px",display:"inline-block",padding:"20px"}};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"divv"},a.a.createElement("p",{onClick:this.asyncFetch},"Hello fetch func"),a.a.createElement("p",null,"b\u9810\u8a2d\u503c=3",a.a.createElement("br",null),"\u50b3\u5165a=1,b=5 ANS:",this.try(1,5),a.a.createElement("br",null),"\u53ea\u50b3\u5165a=1 ANS:",this.try(1)),a.a.createElement("p",{onClick:this.setFunc},"SetFunc"),a.a.createElement("p",{onClick:this.mapFunc},"MapFunc"),a.a.createElement("p",{onClick:this.forOfLoop},"forOfLoopFunc"),a.a.createElement("p",{onClick:function(){return e.SpreadAndRest.apply(e,t.concat([["\u3042\u304b","\u30d6\u30eb\u30fc","\u307f\u3069\u308a"]]))}},"Spread/Rest Operator"),a.a.createElement("p",{onClick:function(){return e.include.apply(e,t.concat([["\u3042\u304b","\u30d6\u30eb\u30fc","\u307f\u3069\u308a"]]))}},"include"),a.a.createElement("p",{onClick:this.symbol},"symbol"),a.a.createElement("p",{onClick:this.promiseTest},"promise"),a.a.createElement("p",{onClick:this.iterableTest},"iterable"),a.a.createElement("p",{onClick:this.becomesBanana},"becomesBanana"),a.a.createElement("p",{onClick:this.becomesApple},"becomesApple"),a.a.createElement("p",{onClick:function(){return e.hashMap(e.state.forTest)}},"hashMap"),a.a.createElement("p",{onClick:this.twoSum},"twoSum"),a.a.createElement("p",{onClick:this.Step1},"OPENSTEP1"),a.a.createElement("p",{onClick:this.Step2},"OPENSTEP2"),a.a.createElement("p",{onClick:this.Step3},"OPENSTEP3"),a.a.createElement("div",null,a.a.createElement("div",{style:n(this.state.Step1)},"STEP1"),a.a.createElement("div",{style:n(this.state.Step2)},"STEP2"),a.a.createElement("div",{style:n(this.state.Step3)},"STEP3")),a.a.createElement("p",null,"STEP4")))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.8bc02223.chunk.js.map