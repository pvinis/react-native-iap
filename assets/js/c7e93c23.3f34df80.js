"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),d=n(1980),s=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,s]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=d??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:d,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==o&&(p(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},5429:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{className:t="adfit",style:n,unit:r,height:i,width:l}=e;return(0,a.useEffect)((()=>{let e=document.createElement("ins"),n=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",n.async="true",n.type="text/javascript",n.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",l.toString()),e.setAttribute("data-ad-height",i.toString()),e.setAttribute("data-ad-unit",r.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(n)}),[]),a.createElement("div",{style:n},a.createElement("div",{className:t}))}},2448:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(5429);function i(){return a.createElement(r.Z,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162),o=n(2448);const d={sidebar_position:1,title:"Get Started",sidebar_label:"Get Started"},s=void 0,u={unversionedId:"get-started",id:"get-started",title:"Get Started",description:"react-native-iap will help you access the In-App purchases capabilities of your device on iOS, and Android (Play Store and Amazon).",source:"@site/docs/get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/get-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Get Started",sidebar_label:"Get Started"},sidebar:"tutorialSidebar",next:{title:"Purchases",permalink:"/docs/guides/purchases"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"<code>iOS</code>",id:"ios",level:3},{value:"<code>Android</code>",id:"android",level:3},{value:"With Android Support",id:"with-android-support",level:4},{value:"With AndroidX",id:"with-androidx",level:4},{value:"Configure the payment provider",id:"configure-the-payment-provider",level:4},{value:"Manual installation",id:"manual-installation",level:2},{value:"<code>iOS</code>",id:"ios-1",level:3},{value:"<code>Android</code>",id:"android-1",level:3}],m={toc:c},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"AdFitTopFixed"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-native-iap")," will help you access the In-App purchases capabilities of your device on ",(0,r.kt)("inlineCode",{parentName:"p"},"iOS"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Android")," (Play Store and Amazon)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This library will provide the basic features to consume In-App purchases on the client-side, however you'll have to implement the server-side to validate your receipts (which is probably the most time consuming part to do it correctly).")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react")," >= 16.13.1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-native")," >= 0.65.1")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Start with installing the package:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-iap\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-iap\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-native-iap\n")))),(0,r.kt)("h3",{id:"ios"},(0,r.kt)("inlineCode",{parentName:"h3"},"iOS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios; pod install; cd -\n")),(0,r.kt)("p",null,"You can now get started hacking!"),(0,r.kt)("h3",{id:"android"},(0,r.kt)("inlineCode",{parentName:"h3"},"Android")),(0,r.kt)("h4",{id:"with-android-support"},"With Android Support"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," and modify the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'buildscript {\n  ext {\n    ...\n+   supportLibVersion = "28.0.0"\n  }\n}\n')),(0,r.kt)("h4",{id:"with-androidx"},"With AndroidX"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," and modify the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'buildscript {\n  ext {\n    ...\n+    androidXAnnotation = "1.1.0"\n+    androidXBrowser = "1.0.0"\n+    minSdkVersion = 24\n+    kotlinVersion = "1.8.0"\n  }\n  dependencies {\n    ...\n+   classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"\n  }\n}\n')),(0,r.kt)("h4",{id:"configure-the-payment-provider"},"Configure the payment provider"),(0,r.kt)("p",null,"You can support either ",(0,r.kt)("inlineCode",{parentName:"p"},"Play Store"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Amazon")," or both."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To only support ",(0,r.kt)("inlineCode",{parentName:"li"},"Play Store"),", go to ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'defaultConfig {\n  ...\n+ missingDimensionStrategy "store", "play"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To support both:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'android {\n  ...\n+ flavorDimensions "appstore"\n+\n+ productFlavors {\n+   googlePlay {\n+     dimension "appstore"\n+     missingDimensionStrategy "store", "play"\n+   }\n+\n+   amazon {\n+     dimension "appstore"\n+     missingDimensionStrategy "store", "amazon"\n+   }\n+ }\n}\n')),(0,r.kt)("p",null,"And your are now good to go!"),(0,r.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,r.kt)("h3",{id:"ios-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"iOS")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up ",(0,r.kt)("inlineCode",{parentName:"li"},"ios/Podfile")),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"pod 'RNIap', :path => '../node_modules/react-native-iap'")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pod install"))),(0,r.kt)("h3",{id:"android-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"Android")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open up ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/src/main/java/[...]/MainApplication.java"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"import com.dooboolab.rniap.RNIapPackage;")," at the top of the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"new RNIapPackage()")," to the list returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPackages()")," method")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Append the following lines to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/settings.gradle"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ include ':react-native-iap'\n+ project(':react-native-iap').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-iap/android')\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Insert the following lines inside the dependencies block in ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ implementation project(':react-native-iap')\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Finally ",(0,r.kt)("a",{parentName:"li",href:"#configure-the-payment-provider"},"configure the payment provider")," described above.")))}h.isMDXComponent=!0}}]);