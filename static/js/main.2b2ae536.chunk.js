(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(0),i=a.n(r),o=a(50),c=a.n(o),s=(a(136),a(26)),l=a(27),h=a(17),u=a(31),d=a(28),v=(a(137),a(138),a(165)),j=a(164),p=a(163),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:"",warning:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.sendValueToParent=n.sendValueToParent.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"sendValueToParent",value:function(e){e.preventDefault(),""===this.state.value.trim()||null!==this.state.value.match(/\d+/g)?this.setState({warning:!0}):(this.props.callBackFromParent(this.state.value),this.setState({warning:!1}))}},{key:"render",value:function(){var e=Object(n.jsx)(v.a,{error:!0,header:"There was an error",content:this.props.error}),t=Object(n.jsx)(v.a,{warning:!0,header:"Please check that you've entered a valid city"});return Object(n.jsxs)("div",{className:"SearchBar",children:[this.props.error&&e,this.state.warning&&t,Object(n.jsx)(j.a,{onSubmit:this.sendValueToParent,children:Object(n.jsx)(p.a,{className:"SearchBar-input",placeholder:"Search the weather in...",action:{icon:"search"},onChange:this.handleChange,value:this.state.value,size:"huge",type:"text",autoFocus:!0})})]})}}]),a}(r.Component),g=(a(145),a(146),a(151)),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).saveDataToLocalStorage=n.saveDataToLocalStorage.bind(Object(h.a)(n)),n.deleteDataFromLocalStorage=n.deleteDataFromLocalStorage.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"deleteDataFromLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("cityList")),t=e.indexOf(this.props.weatherData.city);e.splice(t,1),localStorage.setItem("cityList",JSON.stringify(e)),this.props.callBackFromParent(e)}},{key:"saveDataToLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("cityList"))||[];e.push(this.props.weatherData.city),localStorage.setItem("cityList",JSON.stringify(e)),this.props.callBackFromParent(e)}},{key:"render",value:function(){var e=this.props.weatherData,t=e.city,a=e.weather,r=e.country,i=e.temp,o=Math.round(i-273.15),c=Object(n.jsx)(g.a,{positive:!0,size:"mini",onClick:this.saveDataToLocalStorage,content:"Save to favorites"}),s=Object(n.jsx)(g.a,{negative:!0,size:"mini",onClick:this.deleteDataFromLocalStorage,content:"Delete from favorites"}),l=this.props.savedCities;return Object(n.jsxs)("div",{className:"WeatherCard",children:[Object(n.jsxs)("h1",{className:"WeatherCard-degrees",children:[o,"\xb0"]}),Object(n.jsxs)("div",{className:"WeatherCard-icon-container",children:[Object(n.jsx)("i",{className:"wi wi-owm-".concat(a[0].id," WeatherCard-icon")}),Object(n.jsx)("p",{children:a[0].main})]}),Object(n.jsxs)("h2",{className:"WeatherCard-city",children:[t,", ",r]}),l.includes(t)?s:c]})}}]),a}(r.Component),m=(a(147),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getWeather=n.getWeather.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"getWeather",value:function(e){this.props.callBackFromParent(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.savedCities.map((function(t){return Object(n.jsx)(g.a,{className:"Favorites-btn",size:"tiny",value:t,onClick:e.getWeather,content:t},"".concat(t,"-button"))}));return Object(n.jsxs)("div",{className:"Favorites",children:[Object(n.jsx)("h3",{className:"Favorites-title",children:"My favorite cities"}),Object(n.jsx)("div",{className:"Favorites-button-container",children:t})]})}}]),a}(r.Component)),O=(a(148),a(149),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("footer",{className:"footer_style",children:Object(n.jsx)("div",{children:"\xa9 2020 Developed by Pratik Mehta. All Rights Reserved."})})}}]),a}(i.a.Component)),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={weatherData:{weather:"",city:"",country:"",temp:0},searchDone:!1,savedCities:[],hasSavedCities:!1,errorMessage:""},n.callWeatherData=n.callWeatherData.bind(Object(h.a)(n)),n.updateSavedCities=n.updateSavedCities.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"callWeatherData",value:function(e){var t=this,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat("429736441cf3572838aa10530929f7cd");fetch(a).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){var a={weather:e.weather,city:e.name,country:e.sys.country,temp:e.main.temp};t.setState({weatherData:a,searchDone:!0,errorMessage:""})})).catch((function(e){t.setState({errorMessage:e.message})}))}},{key:"updateSavedCities",value:function(e){var t=e.length>0;this.setState({savedCities:e,hasSavedCities:t})}},{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("cityList")||"[]");0!==e.length&&this.setState({hasSavedCities:!0,savedCities:e})}},{key:"render",value:function(){var e=this.state,t=e.searchDone,a=e.weatherData,r=e.hasSavedCities,i=e.savedCities,o=e.errorMessage;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{callBackFromParent:this.callWeatherData,error:o}),t&&Object(n.jsx)(b,{weatherData:a,savedCities:i,callBackFromParent:this.updateSavedCities}),r&&Object(n.jsx)(m,{savedCities:i,callBackFromParent:this.callWeatherData}),Object(n.jsx)(O,{})]})}}]),a}(r.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(n.jsx)(w,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/weather-app","/service-worker.js");y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()}},[[150,1,2]]]);
//# sourceMappingURL=main.2b2ae536.chunk.js.map