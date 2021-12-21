"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1492],{9613:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>v});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),v=o,m=u["".concat(p,".").concat(v)]||u[v]||s[v]||i;return n?t.createElement(m,l(l({ref:r},d),{},{components:n})):t.createElement(m,l({ref:r},d))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9535:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var t=n(5900),o=n(4750),i=(n(9496),n(9613)),l=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/id/cli/remove",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/id/cli/update"},next:{title:"pnpm link",permalink:"/id/cli/link"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:d};function u(e){var r=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: rm, uninstall, un"),(0,i.kt)("p",null,"Removes packages from ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"When used inside a ",(0,i.kt)("a",{parentName:"p",href:"/id/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),(0,i.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Remove a global package."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);