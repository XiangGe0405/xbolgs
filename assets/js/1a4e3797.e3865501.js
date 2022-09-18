"use strict";(self.webpackChunkxbolgs=self.webpackChunkxbolgs||[]).push([[7920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(7294),l=n(2263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(7294),l=n(2263),r=n(8762),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902),i=n(8824),h=n(143),p=n(6775),g=n(412);const d=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:n}}=(0,l.Z)();return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var f=n(22),E=n(8202),y=n(2539),S=n(726),w=n(1073),b=n(311),I=n(3926),F=n(1029);const P="searchQueryInput_CFBF",R="searchResultItem_U687",v="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function C(){const{siteConfig:{baseUrl:e}}=(0,l.Z)(),t=(0,h.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)((null==t?void 0:t.pluginId)??F.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(C){if(F.l9&&!(C instanceof m.i6))throw C}const{selectMessage:r}=(0,i.c)(),{searchValue:c,updateSearchPath:p}=d(),[g,y]=(0,a.useState)(c),[S,w]=(0,a.useState)(),[I,R]=(0,a.useState)(),v=(0,a.useMemo)((()=>g?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:g}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[g]);(0,a.useEffect)((()=>{p(g),S&&(g?S(g,(e=>{R(e)})):R(void 0))}),[g,S]);const k=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==g&&y(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(n);w((()=>(0,E.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,v)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,v),a.createElement("input",{type:"search",name:"q",className:P,"aria-label":"Search",onChange:k,value:g,autoComplete:"off",autoFocus:!0}),!S&&g&&a.createElement("div",null,a.createElement(b.Z,null)),I&&(I.length>0?a.createElement("p",null,r(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,I&&I.map((e=>a.createElement(x,{key:e.document.i,searchResult:e}))))))}function x(e){let{searchResult:{document:t,type:n,page:l,tokens:r,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:l.b).slice(),i=u?t.s:t.t;return o||m.push(l.t),a.createElement("article",{className:R},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,y.C)(i,r):(0,S.o)(i,(0,w.m)(s,"t"),r,100)}})),m.length>0&&a.createElement("p",{className:v},(0,I.e)(m)),u&&a.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,w.m)(s,"t"),r,100)}}))}const _=function(){return a.createElement(r.Z,null,a.createElement(C,null))}}}]);