(this.webpackJsonpstock_viewer=this.webpackJsonpstock_viewer||[]).push([[0],{179:function(e,t,a){e.exports=a(370)},184:function(e,t,a){},185:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(26),c=a.n(l),r=(a(184),a(134)),i=a(135),s=a(148),m=a(136),u=a(149),d=(a(185),function(e){var t=e.name;return o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement("h1",null,"Stock View")),o.a.createElement("div",{className:"stock-information"},o.a.createElement("h2",{className:"name"},"TICKER: ",t)))}),h=a(7),p=function(e){var t=e.active,a=e.payload;e.label;return t?o.a.createElement("div",{className:"custom-tooltip"},o.a.createElement("p",null,"date  : ".concat(a[0].payload.time)),o.a.createElement("p",null,"close : $".concat(a[0].payload.close)),o.a.createElement("p",null,"high  : $".concat(a[0].payload.high)),o.a.createElement("p",null,"low   : $".concat(a[0].payload.low)),o.a.createElement("p",null,"open  : $".concat(a[0].payload.open)),o.a.createElement("p",null,"volume: ".concat(a[0].payload.volume))):null},E=function(e){var t=e.data;return t?o.a.createElement(h.e,{width:700,height:"80%"},o.a.createElement(h.d,{width:"100%",height:"100%",data:t,margin:{top:20,left:20,right:20,bottom:20}},o.a.createElement(h.a,{strokeDashArray:"3 3"}),o.a.createElement(h.g,{dataKey:"time",tickCount:5}),o.a.createElement(h.h,{type:"number",domain:["auto","auto"]}),o.a.createElement(h.f,{content:o.a.createElement(p,null)}),o.a.createElement(h.b,null),o.a.createElement(h.c,{type:"monotone",dataKey:"close",stroke:"#8884d8",dot:!1}),o.a.createElement(h.c,{type:"monotone",dataKey:"high",stroke:"#34e5eb",dot:!1}),o.a.createElement(h.c,{type:"monotone",dataKey:"low",stroke:"#eb34a8",dot:!1}),o.a.createElement(h.c,{type:"monotone",dataKey:"open",stroke:"#59eb34",dot:!1}))):o.a.createElement(h.e,{width:700,height:"80%"},o.a.createElement(h.d,{width:"100%",height:"100%",data:t},o.a.createElement(h.a,{strokeDashArray:"3 3"}),o.a.createElement(h.g,{dataKey:"time",tickCount:5}),o.a.createElement(h.h,{type:"number",domain:["auto","auto"]}),o.a.createElement(h.f,null),o.a.createElement(h.b,null)))};function v(e){var t=new Date(1e3*e),a=t.getFullYear()%100;return t.getMonth()+1+"/"+t.getDate()+"/"+a}function f(e){for(var t=[],a=0;a<e.c.length;a++)t.push({close:e.c[a],high:e.h[a],low:e.l[a],open:e.o[a],time:v(e.t[a]),volume:e.v[a]});return t}var k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:null,stockName:null,resolution:null,isDataLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"stock-information",style:{paddingBottom:"50%",position:"relative",height:0}},o.a.createElement("div",{className:"stock-title",style:{position:"relative",top:"0",left:"100px",width:"100%",height:"50px"}},o.a.createElement(d,{name:this.state.stockName})),o.a.createElement("div",{className:"stock-chart",style:{position:"absolute",top:"150px",left:"0",width:"100%",height:"100%"}},o.a.createElement(E,{data:this.state.data})))}},{key:"storeCandleData",value:function(e,t,a){this.setState({data:f(e),stockName:t,resolution:a,isDataLoaded:!0})}},{key:"getStockCandle",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AAPL",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"D",o="https://finnhub-realtime-stock-price.p.rapidapi.com/stock/candle?count="+a+"&symbol="+t+"&resolution="+n;console.log(o),fetch(o,{method:"GET",headers:{"x-rapidapi-host":"finnhub-realtime-stock-price.p.rapidapi.com","x-rapidapi-key":"bfc0641820msh0bbab8db87079ebp145b2djsnc142f2e17a4d"}}).then((function(e){return e.json()})).then((function(a){return e.storeCandleData(a,t,n)})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getStockCandle("AAPL")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[179,1,2]]]);
//# sourceMappingURL=main.b941cf57.chunk.js.map