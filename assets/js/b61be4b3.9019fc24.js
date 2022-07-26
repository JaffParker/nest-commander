"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[425],{7942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(2081),r=n(4604),o=(n(959),n(7942)),s=["components"],i={title:"Usage",sidebar_label:"Usage"},c=void 0,l={unversionedId:"schematics/usage",id:"schematics/usage",title:"Usage",description:"We'll show how to use the nest-commander-schematics with @nestjs/cli, but it works with @angular/cli and nx as well, as all of them use Angular's schematics under the hood.",source:"@site/docs/schematics/usage.md",sourceDirName:"schematics",slug:"/schematics/usage",permalink:"/docs/schematics/usage",draft:!1,editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/schematics/usage.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1658792986,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{title:"Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/schematics/installation"},next:{title:"Execution and Publishing",permalink:"/docs/executing/local"}},m={},u=[{value:"Generating Commands",id:"generating-commands",level:2},{value:"Generating Commands with Questions",id:"generating-commands-with-questions",level:3},{value:"Generating Questions",id:"generating-questions",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We'll show how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"nest-commander-schematics")," with ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nestjs/cli"},(0,o.kt)("inlineCode",{parentName:"a"},"@nestjs/cli")),", but it works with ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/cli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nx")," as well, as all of them use Angular's schematics under the hood.")),(0,o.kt)("h2",{id:"generating-commands"},"Generating Commands"),(0,o.kt)("p",null,"To generate a simple command you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," schematic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nest g -c nest-commander-schematics command\n")),(0,o.kt)("p",null,"from there the wizard will ask what the name of the command is and if you would like to add questions. You can choose ",(0,o.kt)("em",{parentName:"p"},"no")," or provide a question set name at this point."),(0,o.kt)("p",null,"The available options for this command are the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--name=<name>         Command name.\n--path=<name>         The path to create the service.\n--sourceRoot=<name>   NestJS service source root directory.\n--flat                Whether or not a directory is created. (default: fale)\n--spec                Whether or not a spec file is generated. (default: true)\n--default             Whether or not the command is the default command for the CLI. (default: false)\n--question=<name>     The name of the related question set.\n")),(0,o.kt)("h3",{id:"generating-commands-with-questions"},"Generating Commands with Questions"),(0,o.kt)("p",null,"As mentioned above, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," schematic and provide a question set name. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"--question=<name>")," to provide a name for the question set without waiting to answer the prompt."),(0,o.kt)("h2",{id:"generating-questions"},"Generating Questions"),(0,o.kt)("p",null,"You can also generate a question set using the ",(0,o.kt)("inlineCode",{parentName:"p"},"question")," schematic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nest g -c nest-commander-schematics question\n")),(0,o.kt)("p",null,"from there you can provide a name for the question set as mentioned by the wizard."),(0,o.kt)("p",null,"The available options for this command are the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--name=<name>         Questions set name.\n--path=<name>         The path to create the service.\n--sourceRoot=<name>   NestJS service source root directory.\n--flat                Whether or not a directory is created. (default: fale)\n--spec                Whether or not a spec file is generated. (default: true)\n")))}d.isMDXComponent=!0}}]);