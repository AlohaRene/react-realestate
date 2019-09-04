(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId])resolves.push(installedChunks[chunkId][0]);installedChunks[chunkId]=0}for(moduleId in moreModules)if(Object.prototype.hasOwnProperty.call(moreModules,moduleId))modules[moduleId]=moreModules[moduleId];if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length)resolves.shift()();deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(0!==installedChunks[depId])fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={0:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{enumerable:true,get:getter})};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([8,2]);return checkDeferredModules()})({8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var react_dom=__webpack_require__(3);var react_dom_default=__webpack_require__.n(react_dom);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done)resolve(value);else Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}class Header_Header extends react["Component"]{constructor(){super();this.clickedBtn=(()=>{});this.state={name:"Joe"}}test(){return _asyncToGenerator(function*(){})()}render(){return react_default.a.createElement("header",null,react_default.a.createElement("div",{className:"logo"}," Logo"),react_default.a.createElement("nav",null,react_default.a.createElement("a",{href:"#"},"Create Ads"),react_default.a.createElement("a",{href:"#"},"About Us"),react_default.a.createElement("a",{href:"#"},"Log In"),react_default.a.createElement("a",{href:"#",className:"register-btn"},"Register")))}}function Filter_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done)resolve(value);else Promise.resolve(value).then(_next,_throw)}function Filter_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){Filter_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){Filter_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}class Filter_Filter extends react["Component"]{constructor(){super();this.clickedBtn=(()=>{});this.state={name:"Joe"};this.cities=this.cities.bind(this);this.homeTypes=this.homeTypes.bind(this);this.bedrooms=this.bedrooms.bind(this)}test(){return Filter_asyncToGenerator(function*(){})()}componentDidMount(){this.props.populateAction()}cities(){if(void 0!=this.props.globalState.populateFormsData.cities){var{cities:cities}=this.props.globalState.populateFormsData;console.log(cities);return cities.map(item=>{return react_default.a.createElement("option",{key:item,value:item},item)})}}homeTypes(){if(void 0!=this.props.globalState.populateFormsData.homeTypes){var{homeTypes:homeTypes}=this.props.globalState.populateFormsData;console.log(homeTypes);return homeTypes.map(item=>{return react_default.a.createElement("option",{key:item,value:item},item)})}}bedrooms(){if(void 0!=this.props.globalState.populateFormsData.bedrooms){var{bedrooms:bedrooms}=this.props.globalState.populateFormsData;console.log(bedrooms);return bedrooms.map(item=>{return react_default.a.createElement("option",{key:item,value:item},item,"+ BR")})}}render(){return react_default.a.createElement("section",{id:"filter"},react_default.a.createElement("div",{className:"inside"},react_default.a.createElement("h4",null,"Filter"),react_default.a.createElement("label",{htmlFor:"city"},"City"),react_default.a.createElement("select",{name:"city",className:"filters city",onChange:this.props.change},react_default.a.createElement("option",{value:"All"},"All"),this.cities()),react_default.a.createElement("label",{htmlFor:"city"},"Home Type"),react_default.a.createElement("select",{name:"homeType",className:"filters homeType",onChange:this.props.change},react_default.a.createElement("option",{value:"All"},"All Homes"),this.homeTypes()),react_default.a.createElement("label",{htmlFor:"city"},"Bedrooms"),react_default.a.createElement("select",{name:"bedrooms",className:"filters bedrooms",onChange:this.props.change},this.bedrooms()),react_default.a.createElement("div",{className:"filters price"},react_default.a.createElement("span",{className:"title"},"Price"),react_default.a.createElement("input",{type:"text",name:"min_price",className:"min-price",onChange:this.props.change,value:this.props.globalState.min_price}),react_default.a.createElement("input",{type:"text",name:"max_price",className:"max-price",onChange:this.props.change,value:this.props.globalState.max_price})),react_default.a.createElement("div",{className:"filters floor-space"},react_default.a.createElement("span",{className:"title"},"Floor Space"),react_default.a.createElement("input",{type:"text",name:"min_floor_space",className:"min-floor-space",onChange:this.props.change,value:this.props.globalState.min_floor_space}),react_default.a.createElement("input",{type:"text",name:"max_floor_space",className:"max-floor-space",onChange:this.props.change,value:this.props.globalState.max_floor_space})),react_default.a.createElement("div",{className:"filters extras"},react_default.a.createElement("span",{className:"title"},"Extras"),react_default.a.createElement("label",{htmlFor:"extras"},react_default.a.createElement("span",null,"Elevators"),react_default.a.createElement("input",{name:"elevator",value:"elevator",type:"checkbox",onChange:this.props.change})),react_default.a.createElement("label",{htmlFor:"extras"},react_default.a.createElement("span",null,"Swimming Pool"),react_default.a.createElement("input",{name:"swimming_pool",value:"swimming_pool",type:"checkbox",onChange:this.props.change})),react_default.a.createElement("label",{htmlFor:"extras"},react_default.a.createElement("span",null,"Finished Basement"),react_default.a.createElement("input",{name:"finished_basement",value:"finished_basement",type:"checkbox",onChange:this.props.change})),react_default.a.createElement("label",{htmlFor:"extras"},react_default.a.createElement("span",null,"Gym"),react_default.a.createElement("input",{name:"gym",value:"gym",type:"checkbox",onChange:this.props.change})))))}}class Listings_Header extends react["Component"]{constructor(){super();this.state={name:"Joe"};this.loopListings=this.loopListings.bind(this)}loopListings(){var{listingsData:listingsData}=this.props;if(void 0==listingsData||0==listingsData.length)return"Sorry your filter did not match any listing";return listingsData.map((listing,index)=>{if("box"==this.props.globalState.view)return react_default.a.createElement("div",{className:"col-md-3",key:index},react_default.a.createElement("div",{className:"listing"},react_default.a.createElement("div",{className:"listing-img",style:{background:'url("'.concat(listing.image,'") no-repeat center center')}},react_default.a.createElement("span",{className:"address"},listing.address),react_default.a.createElement("div",{className:"details"},react_default.a.createElement("div",{className:"col-md-3"},react_default.a.createElement("div",{className:"user-img"}," ")),react_default.a.createElement("div",{className:"col-md-9"},react_default.a.createElement("div",{className:"user-details"},react_default.a.createElement("span",{className:"user-name"},"Nina Smith"),react_default.a.createElement("span",{className:"post-date"},"05/05/2017")),react_default.a.createElement("div",{className:"listing-details"},react_default.a.createElement("div",{className:"floor-space"},react_default.a.createElement("i",{className:"fa fa-square-o","aria-hidden":"true"}),react_default.a.createElement("span",null,listing.floorSpace," ft²")),react_default.a.createElement("div",{className:"bedrooms"},react_default.a.createElement("i",{className:"fa fa-bed","aria-hidden":"true"}),react_default.a.createElement("span",null,listing.rooms," bedrooms"))),react_default.a.createElement("div",{className:"view-btn"},"View Listing")))),react_default.a.createElement("div",{className:"bottom-info"},react_default.a.createElement("span",{className:"price"},"$",listing.price),react_default.a.createElement("span",{className:"location"},react_default.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",listing.city,", ",listing.state," "))));else return react_default.a.createElement("div",{className:"col-md-12 col-lg-6",key:index},react_default.a.createElement("div",{className:"listing"},react_default.a.createElement("div",{className:"listing-img longview",style:{background:'url("'.concat(listing.image,'") no-repeat center center')}},react_default.a.createElement("span",{className:"address"},listing.address),react_default.a.createElement("div",{className:"details"},react_default.a.createElement("div",{className:"col-md-3"},react_default.a.createElement("div",{className:"user-img",style:{height:"80px",width:"80px"}}," ")),react_default.a.createElement("div",{className:"col-md-9"},react_default.a.createElement("div",{className:"user-details"},react_default.a.createElement("span",{className:"user-name"},"Nina Smith"),react_default.a.createElement("span",{className:"post-date"},"05/05/2017")),react_default.a.createElement("div",{className:"listing-details"},react_default.a.createElement("div",{className:"floor-space"},react_default.a.createElement("i",{className:"fa fa-square-o","aria-hidden":"true"}),react_default.a.createElement("span",null,listing.floorSpace," ft²")),react_default.a.createElement("div",{className:"bedrooms"},react_default.a.createElement("i",{className:"fa fa-bed","aria-hidden":"true"}),react_default.a.createElement("span",null,listing.rooms," bedrooms"))),react_default.a.createElement("div",{className:"view-btn"},"View Listing")))),react_default.a.createElement("div",{className:"bottom-info"},react_default.a.createElement("span",{className:"price"},"$",listing.price),react_default.a.createElement("span",{className:"location"},react_default.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",listing.city,", ",listing.state," "))))})}render(){return react_default.a.createElement("section",{id:"listings"},react_default.a.createElement("section",{className:"search-area"},react_default.a.createElement("input",{type:"text",name:"search",onChange:this.props.change})),react_default.a.createElement("section",{className:"sortby-area"},react_default.a.createElement("div",{className:"results"},this.props.globalState.filteredData.length," results found"),react_default.a.createElement("div",{className:"sort-options"},react_default.a.createElement("select",{name:"sortby",className:"sortby",onChange:this.props.change},react_default.a.createElement("option",{value:"price-dsc"},"Lowest Price"),react_default.a.createElement("option",{value:"price-asc"},"Highest Price")),react_default.a.createElement("div",{className:"view"},react_default.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true",onClick:this.props.changeView.bind(null,"long")}),react_default.a.createElement("i",{className:"fa fa-th","aria-hidden":"true",onClick:this.props.changeView.bind(null,"box")})))),react_default.a.createElement("section",{className:"listings-results"},react_default.a.createElement("div",{className:"row"},this.loopListings())),react_default.a.createElement("section",{id:"pagination"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("ul",{className:"pages"},react_default.a.createElement("li",null,"Prev"),react_default.a.createElement("li",{className:"active"},"1"),react_default.a.createElement("li",null,"2"),react_default.a.createElement("li",null,"3"),react_default.a.createElement("li",null,"4"),react_default.a.createElement("li",null,"5"),react_default.a.createElement("li",null,"Next")))))}}var data=[{address:"20-34 grand ave",city:"Ridgewood",state:"NY",rooms:3,price:22e4,floorSpace:2e3,extras:["elevator","gym"],homeType:"Apartment",image:"https://c1.staticflickr.com/3/2073/2102740345_b2e6ee63c3_z.jpg?zz=1"},{address:"20-24 smith ave",city:"Bronx",state:"NY",rooms:2,price:52e4,floorSpace:1800,extras:["elevator","pool"],homeType:"Multi Home",image:"https://assets3.thrillist.com/v1/image/1891766/size/tmg-article_default_mobile.jpg"},{address:"8392 cool ave",city:"Warren",state:"NJ",rooms:5,price:62e4,floorSpace:7e3,extras:["elevator","gym"],homeType:"Studio",image:"https://www.selecthousing.com/sites/default/files/imagecache/property_primary/sites/default/files/properties/Greensboro%20NC%20Furnished%20Apartments%20Legacy%20at%20Friendly%20Manor%20Temporary%20Housing%201.JPG"},{address:"1400 5th street",city:"Union",state:"MA",rooms:5,price:21e4,floorSpace:4e3,extras:["elevator","pool"],homeType:"Single Home",image:"https://i.ytimg.com/vi/SSKPOv0J6x0/hqdefault.jpg"},{address:"5591 Blvd East",city:"Wayne",state:"CA",rooms:6,price:62e4,floorSpace:9e3,extras:["elevator","gym"],homeType:"Apartment",image:"https://images1.apartments.com/i2/iAG3fyF1bKYk-KLk8Rfrz8j8wawH4V9ptENoiLKjy5w/117/image.jpg"},{address:"1600 Penn Ave",city:"Orion",state:"NV",rooms:2,price:12e4,floorSpace:4e3,extras:["elevator","pool"],homeType:"House",image:"http://images1.aptcdn.com/i2/-OSZABcrfk1eur6iGRxPOoZ2_Gs70w8je59tKLFkBoU/117/image.jpg"},{address:"5 Greg St",city:"LittleNeck",state:"NY",rooms:0,price:2e4,floorSpace:1100,extras:["elevator","gym"],homeType:"Condo",image:"https://luxport.s3.amazonaws.com/91095/616987_1-EXT.jpg"}];var data_listingsData=data;function FirstComp_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done)resolve(value);else Promise.resolve(value).then(_next,_throw)}function FirstComp_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){FirstComp_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){FirstComp_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}class FirstComp_App extends react["Component"]{constructor(){super();this.clickedBtn=(()=>{});this.state={name:"Joe",listingsData:data_listingsData,city:"All",homeType:"All",bedrooms:"0",min_price:0,max_price:1e7,min_floor_space:0,max_floor_space:5e4,elevator:false,finished_basement:false,gym:false,swimming_pool:false,filteredData:data_listingsData,populateFormsData:"",sortby:"price-dsc",view:"box",search:""};this.change=this.change.bind(this);this.filteredData=this.filteredData.bind(this);this.populateForms=this.populateForms.bind(this);this.changeView=this.changeView.bind(this)}componentDidMount(){var listingsData=this.state.listingsData.sort((a,b)=>{return a.price-b.price});this.setState({listingsData:listingsData})}change(event){var name=event.target.name;var value="checkbox"===event.target.type?event.target.checked:event.target.value;this.setState({[name]:value},()=>{console.log(this.state);this.filteredData()})}changeView(viewName){this.setState({view:viewName})}filteredData(){var newData=this.state.listingsData.filter(item=>{return item.price>=this.state.min_price&&item.price<=this.state.max_price&&item.floorSpace>=this.state.min_floor_space&&item.floorSpace<=this.state.max_floor_space&&item.rooms>=this.state.bedrooms});if("All"!=this.state.city)newData=newData.filter(item=>{return item.city==this.state.city});if("All"!=this.state.homeType)newData=newData.filter(item=>{return item.homeType==this.state.homeType});if("price-dsc"==this.state.sortby)newData=newData.sort((a,b)=>{return a.price-b.price});if("price-asc"==this.state.sortby)newData=newData.sort((a,b)=>{return b.price-a.price});if(""!=this.state.search)newData=newData.filter(item=>{var city=item.city.toLowerCase();var searchText=this.state.search.toLowerCase();var n=city.match(searchText);if(null!=n)return true});this.setState({filteredData:newData})}populateForms(){var cities=this.state.listingsData.map(item=>{return item.city});cities=new Set(cities);cities=[...cities];cities=cities.sort();var homeTypes=this.state.listingsData.map(item=>{return item.homeType});homeTypes=new Set(homeTypes);homeTypes=[...homeTypes];homeTypes=homeTypes.sort();var bedrooms=this.state.listingsData.map(item=>{return item.rooms});bedrooms=new Set(bedrooms);bedrooms=[...bedrooms];bedrooms=bedrooms.sort();this.setState({populateFormsData:{homeTypes:homeTypes,bedrooms:bedrooms,cities:cities}}),()=>{console.log(this.state)}}test(){return FirstComp_asyncToGenerator(function*(){})()}render(){return react_default.a.createElement("div",null,react_default.a.createElement(Header_Header,null),react_default.a.createElement("section",{id:"content-area"},react_default.a.createElement(Filter_Filter,{change:this.change,globalState:this.state,populateAction:this.populateForms}),react_default.a.createElement(Listings_Header,{listingsData:this.state.filteredData,change:this.change,globalState:this.state,changeView:this.changeView})))}}const app=document.getElementById("app");react_dom_default.a.render(react_default.a.createElement(FirstComp_App,null),app)}});