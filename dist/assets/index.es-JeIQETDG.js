import{c as Kn,g as Qn,e as un}from"./index-qn56y2Qj.js";const gt="-";function Jn(e){const t=er(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function a(o){const s=o.split(gt);return s[0]===""&&s.length!==1&&s.shift(),dn(s,t)||Zn(o)}function i(o,s){const l=n[o]||[];return s&&r[o]?[...l,...r[o]]:l}return{getClassGroupId:a,getConflictingClassGroupIds:i}}function dn(e,t){var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?dn(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(gt);return(o=t.validators.find(({validator:s})=>s(i)))==null?void 0:o.classGroupId}const _t=/^\[(.+)\]$/;function Zn(e){if(_t.test(e)){const t=_t.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function er(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return nr(Object.entries(e.classGroups),n).forEach(([i,o])=>{nt(o,r,i,t)}),r}function nt(e,t,n,r){e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:Rt(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(tr(a)){nt(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,o])=>{nt(o,Rt(t,i),n,r)})})}function Rt(e,t){let n=e;return t.split(gt).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function tr(e){return e.isThemeGetter}function nr(e,t){return t?e.map(([n,r])=>{const a=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,s])=>[t+o,s])):i);return[n,a]}):e}function rr(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function a(i,o){n.set(i,o),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return a(i,o),o},set(i,o){n.has(i)?n.set(i,o):a(i,o)}}}const mn="!";function ar(e){const t=e.separator,n=t.length===1,r=t[0],a=t.length;return function(o){const s=[];let l=0,f=0,c;for(let h=0;h<o.length;h++){let y=o[h];if(l===0){if(y===r&&(n||o.slice(h,h+a)===t)){s.push(o.slice(f,h)),f=h+a;continue}if(y==="/"){c=h;continue}}y==="["?l++:y==="]"&&l--}const u=s.length===0?o:o.substring(f),p=u.startsWith(mn),v=p?u.substring(1):u,x=c&&c>f?c-f:void 0;return{modifiers:s,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:x}}}function ir(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function or(e){return{cache:rr(e.cacheSize),splitModifiers:ar(e),...Jn(e)}}const sr=/\s+/;function lr(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:a}=t,i=new Set;return e.trim().split(sr).map(o=>{const{modifiers:s,hasImportantModifier:l,baseClassName:f,maybePostfixModifierPosition:c}=n(o);let u=r(c?f.substring(0,c):f),p=!!c;if(!u){if(!c)return{isTailwindClass:!1,originalClassName:o};if(u=r(f),!u)return{isTailwindClass:!1,originalClassName:o};p=!1}const v=ir(s).join(":");return{isTailwindClass:!0,modifierId:l?v+mn:v,classGroupId:u,originalClassName:o,hasPostfixModifier:p}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:s,classGroupId:l,hasPostfixModifier:f}=o,c=s+l;return i.has(c)?!1:(i.add(c),a(l,f).forEach(u=>i.add(s+u)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function cr(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=pn(t))&&(r&&(r+=" "),r+=n);return r}function pn(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=pn(e[r]))&&(n&&(n+=" "),n+=t);return n}function fr(e,...t){let n,r,a,i=o;function o(l){const f=t.reduce((c,u)=>u(c),e());return n=or(f),r=n.cache.get,a=n.cache.set,i=s,s(l)}function s(l){const f=r(l);if(f)return f;const c=lr(l,n);return a(l,c),c}return function(){return i(cr.apply(null,arguments))}}function k(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const vn=/^\[(?:([a-z-]+):)?(.+)\]$/i,ur=/^\d+\/\d+$/,dr=new Set(["px","full","screen"]),mr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,br=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function F(e){return K(e)||dr.has(e)||ur.test(e)}function W(e){return se(e,"length",Cr)}function K(e){return!!e&&!Number.isNaN(Number(e))}function Ee(e){return se(e,"number",K)}function de(e){return!!e&&Number.isInteger(Number(e))}function hr(e){return e.endsWith("%")&&K(e.slice(0,-1))}function b(e){return vn.test(e)}function U(e){return mr.test(e)}const yr=new Set(["length","size","percentage"]);function wr(e){return se(e,yr,bn)}function xr(e){return se(e,"position",bn)}const kr=new Set(["image","url"]);function Ar(e){return se(e,kr,Pr)}function Sr(e){return se(e,"",Or)}function me(){return!0}function se(e,t,n){const r=vn.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function Cr(e){return pr.test(e)&&!vr.test(e)}function bn(){return!1}function Or(e){return br.test(e)}function Pr(e){return gr.test(e)}function Er(){const e=k("colors"),t=k("spacing"),n=k("blur"),r=k("brightness"),a=k("borderColor"),i=k("borderRadius"),o=k("borderSpacing"),s=k("borderWidth"),l=k("contrast"),f=k("grayscale"),c=k("hueRotate"),u=k("invert"),p=k("gap"),v=k("gradientColorStops"),x=k("gradientColorStopPositions"),h=k("inset"),y=k("margin"),O=k("opacity"),w=k("padding"),P=k("saturate"),I=k("scale"),z=k("sepia"),_=k("skew"),R=k("space"),te=k("translate"),T=()=>["auto","contain","none"],ce=()=>["auto","hidden","clip","visible","scroll"],qe=()=>["auto",b,t],C=()=>[b,t],It=()=>["",F,W],Ce=()=>["auto",K,b],Nt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Oe=()=>["solid","dashed","dotted","double","none"],Tt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Ke=()=>["start","end","center","between","around","evenly","stretch"],fe=()=>["","0",b],Lt=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ue=()=>[K,Ee],Pe=()=>[K,b];return{cacheSize:500,separator:":",theme:{colors:[me],spacing:[F,W],blur:["none","",U,b],brightness:ue(),borderColor:[e],borderRadius:["none","","full",U,b],borderSpacing:C(),borderWidth:It(),contrast:ue(),grayscale:fe(),hueRotate:Pe(),invert:fe(),gap:C(),gradientColorStops:[e],gradientColorStopPositions:[hr,W],inset:qe(),margin:qe(),opacity:ue(),padding:C(),saturate:ue(),scale:ue(),sepia:fe(),skew:Pe(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",b]}],container:["container"],columns:[{columns:[U]}],"break-after":[{"break-after":Lt()}],"break-before":[{"break-before":Lt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Nt(),b]}],overflow:[{overflow:ce()}],"overflow-x":[{"overflow-x":ce()}],"overflow-y":[{"overflow-y":ce()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",de,b]}],basis:[{basis:qe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",b]}],grow:[{grow:fe()}],shrink:[{shrink:fe()}],order:[{order:["first","last","none",de,b]}],"grid-cols":[{"grid-cols":[me]}],"col-start-end":[{col:["auto",{span:["full",de,b]},b]}],"col-start":[{"col-start":Ce()}],"col-end":[{"col-end":Ce()}],"grid-rows":[{"grid-rows":[me]}],"row-start-end":[{row:["auto",{span:[de,b]},b]}],"row-start":[{"row-start":Ce()}],"row-end":[{"row-end":Ce()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",b]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",b]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Ke()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Ke(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Ke(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",b,t]}],"min-w":[{"min-w":[b,t,"min","max","fit"]}],"max-w":[{"max-w":[b,t,"none","full","min","max","fit","prose",{screen:[U]},U]}],h:[{h:[b,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[b,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[b,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[b,t,"auto","min","max","fit"]}],"font-size":[{text:["base",U,W]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ee]}],"font-family":[{font:[me]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",b]}],"line-clamp":[{"line-clamp":["none",K,Ee]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",F,b]}],"list-image":[{"list-image":["none",b]}],"list-style-type":[{list:["none","disc","decimal",b]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Oe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",F,W]}],"underline-offset":[{"underline-offset":["auto",F,b]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",b]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",b]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Nt(),xr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",wr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ar]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[...Oe(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:Oe()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...Oe()]}],"outline-offset":[{"outline-offset":[F,b]}],"outline-w":[{outline:[F,W]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:It()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[F,W]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",U,Sr]}],"shadow-color":[{shadow:[me]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":Tt()}],"bg-blend":[{"bg-blend":Tt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",U,b]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[P]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",b]}],duration:[{duration:Pe()}],ease:[{ease:["linear","in","out","in-out",b]}],delay:[{delay:Pe()}],animate:[{animate:["none","spin","ping","pulse","bounce",b]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[I]}],"scale-x":[{"scale-x":[I]}],"scale-y":[{"scale-y":[I]}],rotate:[{rotate:[de,b]}],"translate-x":[{"translate-x":[te]}],"translate-y":[{"translate-y":[te]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",b]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",b]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",b]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[F,W,Ee]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const zr=fr(Er);function Mi(...e){return zr(Kn(...e))}var Ii={prefix:"fas",iconName:"trowel-bricks",icon:[512,512,[],"e58a","M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H376c-14.9 0-27.4-10.2-31-24H256v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V256zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32zm192 0H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32z"]},Ni={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ti={prefix:"fas",iconName:"stopwatch",icon:[448,512,[9201],"f2f2","M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},Li={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},_i={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Ri={prefix:"fas",iconName:"hand-pointer",icon:[448,512,[],"f25a","M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40V188.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v48 16 48c0 70.7-57.3 128-128 128l-16 0H240l-.1 0h-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7V40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"]},ji={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},Fi={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Hi={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]},$i={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Di={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},Yi={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Wi={prefix:"fas",iconName:"right-long",icon:[512,512,["long-arrow-alt-right"],"f30b","M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"]},Ui={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Mr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Vi=Mr,Gi={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Bi={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Xi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},qi={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},Ir={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ki=Ir,Qi={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]},Ji={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Zi={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},eo={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},to={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},no={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-3.4c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $e(e){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$e(e)}function Nr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ft(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tr(e,t,n){return t&&Ft(e.prototype,t),n&&Ft(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ht(e,t){return _r(e)||jr(e,t)||gn(e,t)||Hr()}function ke(e){return Lr(e)||Rr(e)||gn(e)||Fr()}function Lr(e){if(Array.isArray(e))return rt(e)}function _r(e){if(Array.isArray(e))return e}function Rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jr(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function gn(e,t){if(e){if(typeof e=="string")return rt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rt(e,t)}}function rt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ht=function(){},yt={},hn={},yn=null,wn={mark:Ht,measure:Ht};try{typeof window<"u"&&(yt=window),typeof document<"u"&&(hn=document),typeof MutationObserver<"u"&&(yn=MutationObserver),typeof performance<"u"&&(wn=performance)}catch{}var $r=yt.navigator||{},$t=$r.userAgent,Dt=$t===void 0?"":$t,B=yt,S=hn,Yt=yn,ze=wn;B.document;var Y=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",xn=~Dt.indexOf("MSIE")||~Dt.indexOf("Trident/"),Me,Ie,Ne,Te,Le,H="___FONT_AWESOME___",at=16,kn="fa",An="svg-inline--fa",Z="data-fa-i2svg",it="data-fa-pseudo-element",Dr="data-fa-pseudo-element-pending",wt="data-prefix",xt="data-icon",Wt="fontawesome-i2svg",Yr="async",Wr=["HTML","HEAD","STYLE","SCRIPT"],Sn=function(){try{return!0}catch{return!1}}(),A="classic",E="sharp",kt=[A,E];function Ae(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[A]}})}var ge=Ae((Me={},M(Me,A,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),M(Me,E,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Me)),he=Ae((Ie={},M(Ie,A,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(Ie,E,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ie)),ye=Ae((Ne={},M(Ne,A,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(Ne,E,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ne)),Ur=Ae((Te={},M(Te,A,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(Te,E,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Te)),Vr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cn="fa-layers-text",Gr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Br=Ae((Le={},M(Le,A,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(Le,E,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Le)),On=[1,2,3,4,5,6,7,8,9,10],Xr=On.concat([11,12,13,14,15,16,17,18,19,20]),qr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},we=new Set;Object.keys(he[A]).map(we.add.bind(we));Object.keys(he[E]).map(we.add.bind(we));var Kr=[].concat(kt,ke(we),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY]).concat(On.map(function(e){return"".concat(e,"x")})).concat(Xr.map(function(e){return"w-".concat(e)})),ve=B.FontAwesomeConfig||{};function Qr(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Jr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(S&&typeof S.querySelector=="function"){var Zr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zr.forEach(function(e){var t=ht(e,2),n=t[0],r=t[1],a=Jr(Qr(n));a!=null&&(ve[r]=a)})}var Pn={styleDefault:"solid",familyDefault:"classic",cssPrefix:kn,replacementClass:An,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ve.familyPrefix&&(ve.cssPrefix=ve.familyPrefix);var oe=d(d({},Pn),ve);oe.autoReplaceSvg||(oe.observeMutations=!1);var m={};Object.keys(Pn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){oe[e]=n,be.forEach(function(r){return r(m)})},get:function(){return oe[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){oe.cssPrefix=t,be.forEach(function(n){return n(m)})},get:function(){return oe.cssPrefix}});B.FontAwesomeConfig=m;var be=[];function ea(e){return be.push(e),function(){be.splice(be.indexOf(e),1)}}var V=at,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(e){if(!(!e||!Y)){var t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=S.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return S.head.insertBefore(t,r),e}}var na="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){for(var e=12,t="";e-- >0;)t+=na[Math.random()*62|0];return t}function le(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function At(e){return e.classList?le(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function En(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(En(e[n]),'" ')},"").trim()}function Ue(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function St(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function aa(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function ia(e){var t=e.transform,n=e.width,r=n===void 0?at:n,a=e.height,i=a===void 0?at:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&xn?l+="translate(".concat(t.x/V-r/2,"em, ").concat(t.y/V-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "):l+="translate(".concat(t.x/V,"em, ").concat(t.y/V,"em) "),l+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var oa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zn(){var e=kn,t=An,n=m.cssPrefix,r=m.replacementClass,a=oa;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ut=!1;function Qe(){m.autoAddCss&&!Ut&&(ta(zn()),Ut=!0)}var sa={mixout:function(){return{dom:{css:zn,insertCss:Qe}}},hooks:function(){return{beforeDOMElementCreation:function(){Qe()},beforeI2svg:function(){Qe()}}}},$=B||{};$[H]||($[H]={});$[H].styles||($[H].styles={});$[H].hooks||($[H].hooks={});$[H].shims||($[H].shims=[]);var L=$[H],Mn=[],la=function e(){S.removeEventListener("DOMContentLoaded",e),De=1,Mn.map(function(t){return t()})},De=!1;Y&&(De=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),De||S.addEventListener("DOMContentLoaded",la));function ca(e){Y&&(De?setTimeout(e,0):Mn.push(e))}function Se(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?En(e):"<".concat(t," ").concat(ra(r),">").concat(i.map(Se).join(""),"</").concat(t,">")}function Vt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fa=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Je=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?fa(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function ua(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ot(e){var t=ua(e);return t.length===1?t[0].toString(16):null}function da(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Gt(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function st(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Gt(t);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(e,Gt(t)):L.styles[e]=d(d({},L.styles[e]||{}),i),e==="fas"&&st("fa",t)}var _e,Re,je,ne=L.styles,ma=L.shims,pa=(_e={},M(_e,A,Object.values(ye[A])),M(_e,E,Object.values(ye[E])),_e),Ct=null,In={},Nn={},Tn={},Ln={},_n={},va=(Re={},M(Re,A,Object.keys(ge[A])),M(Re,E,Object.keys(ge[E])),Re);function ba(e){return~Kr.indexOf(e)}function ga(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ba(a)?a:null}var Rn=function(){var t=function(i){return Je(ne,function(o,s,l){return o[l]=Je(s,i,{}),o},{})};In=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Nn=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),_n=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ne||m.autoFetchSvg,r=Je(ma,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Tn=r.names,Ln=r.unicodes,Ct=Ve(m.styleDefault,{family:m.familyDefault})};ea(function(e){Ct=Ve(e.styleDefault,{family:m.familyDefault})});Rn();function Ot(e,t){return(In[e]||{})[t]}function ha(e,t){return(Nn[e]||{})[t]}function J(e,t){return(_n[e]||{})[t]}function jn(e){return Tn[e]||{prefix:null,iconName:null}}function ya(e){var t=Ln[e],n=Ot("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Ct}var Pt=function(){return{prefix:null,iconName:null,rest:[]}};function Ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?A:n,a=ge[r][e],i=he[r][e]||he[r][a],o=e in L.styles?e:null;return i||o||null}var Bt=(je={},M(je,A,Object.keys(ye[A])),M(je,E,Object.keys(ye[E])),je);function Ge(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},M(t,A,"".concat(m.cssPrefix,"-").concat(A)),M(t,E,"".concat(m.cssPrefix,"-").concat(E)),t),o=null,s=A;(e.includes(i[A])||e.some(function(f){return Bt[A].includes(f)}))&&(s=A),(e.includes(i[E])||e.some(function(f){return Bt[E].includes(f)}))&&(s=E);var l=e.reduce(function(f,c){var u=ga(m.cssPrefix,c);if(ne[c]?(c=pa[s].includes(c)?Ur[s][c]:c,o=c,f.prefix=c):va[s].indexOf(c)>-1?(o=c,f.prefix=Ve(c,{family:s})):u?f.iconName=u:c!==m.replacementClass&&c!==i[A]&&c!==i[E]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?jn(f.iconName):{},v=J(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||v||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!ne.far&&ne.fas&&!m.autoFetchSvg&&(f.prefix="fas")}return f},Pt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===E&&(ne.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=J(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=X()||"fas"),l}var wa=function(){function e(){Nr(this,e),this.definitions={}}return Tr(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),st(s,o[s]);var l=ye[A][s];l&&st(l,o[s]),Rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),Xt=[],re={},ie={},xa=Object.keys(ie);function ka(e,t){var n=t.mixoutsTo;return Xt=e,re={},Object.keys(ie).forEach(function(r){xa.indexOf(r)===-1&&delete ie[r]}),Xt.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$e(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){re[o]||(re[o]=[]),re[o].push(i[o])})}r.provides&&r.provides(ie)}),n}function lt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=re[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=re[e]||[];a.forEach(function(i){i.apply(null,n)})}function D(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ie[e]?ie[e].apply(null,t):void 0}function ct(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||X();if(t)return t=J(n,t)||t,Vt(Fn.definitions,n,t)||Vt(L.styles,n,t)}var Fn=new wa,Aa=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ee("noAuto")},Sa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ee("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ca(function(){Oa({autoReplaceSvgRoot:n}),ee("watch",t)})}},Ca={icon:function(t){if(t===null)return null;if($e(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:J(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ve(t[0]);return{prefix:r,iconName:J(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Vr))){var a=Ge(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||X(),iconName:J(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=X();return{prefix:i,iconName:J(i,t)||t}}}},N={noAuto:Aa,config:m,dom:Sa,parse:Ca,library:Fn,findIconDefinition:ct,toHtml:Se},Oa=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?S:n;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&Y&&m.autoReplaceSvg&&N.dom.i2svg({node:r})};function Be(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Se(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Y){var r=S.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pa(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(St(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Ue(d(d({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ea(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function Et(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,p=e.watchable,v=p===void 0?!1:p,x=r.found?r:n,h=x.width,y=x.height,O=a==="fak",w=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(T){return u.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(u.classes).join(" "),P={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(y)})},I=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/y*16*.0625,"em")}:{};v&&(P.attributes[Z]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(c||xe())},children:[l]}),delete P.attributes.title);var z=d(d({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:d(d({},I),u.styles)}),_=r.found&&n.found?D("generateAbstractMask",z)||{children:[],attributes:{}}:D("generateAbstractIcon",z)||{children:[],attributes:{}},R=_.children,te=_.attributes;return z.children=R,z.attributes=te,s?Ea(z):Pa(z)}function qt(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Z]="");var c=d({},o.styles);St(a)&&(c.transform=ia({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Ue(c);u.length>0&&(f.style=u);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function za(e){var t=e.content,n=e.title,r=e.extra,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ue(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ze=L.styles;function ft(e){var t=e[0],n=e[1],r=e.slice(4),a=ht(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ma={found:!1,width:512,height:512};function Ia(e,t){!Sn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ut(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=X()),new Promise(function(r,a){if(D("missingIconAbstract"),n==="fa"){var i=jn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ze[t]&&Ze[t][e]){var o=Ze[t][e];return r(ft(o))}Ia(e,t),r(d(d({},Ma),{},{icon:m.showMissingIcons&&e?D("missingIconAbstract")||{}:{}}))})}var Kt=function(){},dt=m.measurePerformance&&ze&&ze.mark&&ze.measure?ze:{mark:Kt,measure:Kt},pe='FA "6.5.1"',Na=function(t){return dt.mark("".concat(pe," ").concat(t," begins")),function(){return Hn(t)}},Hn=function(t){dt.mark("".concat(pe," ").concat(t," ends")),dt.measure("".concat(pe," ").concat(t),"".concat(pe," ").concat(t," begins"),"".concat(pe," ").concat(t," ends"))},zt={begin:Na,end:Hn},Fe=function(){};function Qt(e){var t=e.getAttribute?e.getAttribute(Z):null;return typeof t=="string"}function Ta(e){var t=e.getAttribute?e.getAttribute(wt):null,n=e.getAttribute?e.getAttribute(xt):null;return t&&n}function La(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function _a(){if(m.autoReplaceSvg===!0)return He.replace;var e=He[m.autoReplaceSvg];return e||He.replace}function Ra(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function ja(e){return S.createElement(e)}function $n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ra:ja:n;if(typeof e=="string")return S.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild($n(o,{ceFn:r}))}),a}function Fa(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var He={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore($n(a),n)}),n.getAttribute(Z)===null&&m.keepOriginalSource){var r=S.createComment(Fa(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~At(n).indexOf(m.replacementClass))return He.replace(t);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Se(s)}).join(`
`);n.setAttribute(Z,""),n.innerHTML=o}};function Jt(e){e()}function Dn(e,t){var n=typeof t=="function"?t:Fe;if(e.length===0)n();else{var r=Jt;m.mutateApproach===Yr&&(r=B.requestAnimationFrame||Jt),r(function(){var a=_a(),i=zt.begin("mutate");e.map(a),i(),n()})}}var Mt=!1;function Yn(){Mt=!0}function mt(){Mt=!1}var Ye=null;function Zt(e){if(Yt&&m.observeMutations){var t=e.treeCallback,n=t===void 0?Fe:t,r=e.nodeCallback,a=r===void 0?Fe:r,i=e.pseudoElementsCallback,o=i===void 0?Fe:i,s=e.observeMutationsRoot,l=s===void 0?S:s;Ye=new Yt(function(f){if(!Mt){var c=X();le(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Qt(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Qt(u.target)&&~qr.indexOf(u.attributeName))if(u.attributeName==="class"&&Ta(u.target)){var p=Ge(At(u.target)),v=p.prefix,x=p.iconName;u.target.setAttribute(wt,v||c),x&&u.target.setAttribute(xt,x)}else La(u.target)&&a(u.target)})}}),Y&&Ye.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ha(){Ye&&Ye.disconnect()}function $a(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Da(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ge(At(e));return a.prefix||(a.prefix=X()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ha(a.prefix,e.innerText)||Ot(a.prefix,ot(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ya(e){var t=le(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||xe()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function en(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Da(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ya(e),s=lt("parseNodeAttributes",{},e),l=t.styleParser?$a(e):[];return d({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ua=L.styles;function Wn(e){var t=m.autoReplaceSvg==="nest"?en(e,{styleParser:!1}):en(e);return~t.extra.classes.indexOf(Cn)?D("generateLayersText",e,t):D("generateSvgReplacementMutation",e,t)}var q=new Set;kt.map(function(e){q.add("fa-".concat(e))});Object.keys(ge[A]).map(q.add.bind(q));Object.keys(ge[E]).map(q.add.bind(q));q=ke(q);function tn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=S.documentElement.classList,r=function(u){return n.add("".concat(Wt,"-").concat(u))},a=function(u){return n.remove("".concat(Wt,"-").concat(u))},i=m.autoFetchSvg?q:kt.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ua));i.includes("fa")||i.push("fa");var o=[".".concat(Cn,":not([").concat(Z,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=le(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=zt.begin("onTree"),f=s.reduce(function(c,u){try{var p=Wn(u);p&&c.push(p)}catch(v){Sn||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(p){Dn(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),u(p)})})}function Va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wn(e).then(function(n){n&&Dn([n],t)})}function Ga(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ct(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ct(a||{})),e(r,d(d({},n),{},{mask:a}))}}var Ba=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?j:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,p=u===void 0?null:u,v=n.titleId,x=v===void 0?null:v,h=n.classes,y=h===void 0?[]:h,O=n.attributes,w=O===void 0?{}:O,P=n.styles,I=P===void 0?{}:P;if(t){var z=t.prefix,_=t.iconName,R=t.icon;return Be(d({type:"icon"},t),function(){return ee("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(p?w["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||xe()):(w["aria-hidden"]="true",w.focusable="false")),Et({icons:{main:ft(R),mask:l?ft(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:_,transform:d(d({},j),a),symbol:o,title:p,maskId:c,titleId:x,extra:{attributes:w,styles:I,classes:y}})})}},Xa={mixout:function(){return{icon:Ga(Ba)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=tn,n.nodeCallback=Va,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?S:r,i=n.callback,o=i===void 0?function(){}:i;return tn(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,p=r.extra;return new Promise(function(v,x){Promise.all([ut(a,s),c.iconName?ut(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=ht(h,2),O=y[0],w=y[1];v([n,Et({icons:{main:O,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ue(s);l.length>0&&(a.style=l);var f;return St(o)&&(f=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},qa={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Be({type:"layer"},function(){ee("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ke(i)).join(" ")},children:o}]})}}}},Ka={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return Be({type:"counter",content:n},function(){return ee("beforeDOMElementCreation",{content:n,params:r}),za({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ke(s))}})})}}}},Qa={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?j:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Be({type:"text",content:n},function(){return ee("beforeDOMElementCreation",{content:n,params:r}),qt({content:n,transform:d(d({},j),i),title:s,extra:{attributes:u,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ke(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(xn){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qt({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ja=new RegExp('"',"ug"),nn=[1105920,1112319];function Za(e){var t=e.replace(Ja,""),n=da(t,0),r=n>=nn[0]&&n<=nn[1],a=t.length===2?t[0]===t[1]:!1;return{value:ot(a?t[0]:t),isSecondary:r||a}}function rn(e,t){var n="".concat(Dr).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=le(e.children),o=i.filter(function(R){return R.getAttribute(it)===t})[0],s=B.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Gr),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?E:A,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?he[p][l[2].toLowerCase()]:Br[p][f],x=Za(u),h=x.value,y=x.isSecondary,O=l[0].startsWith("FontAwesome"),w=Ot(v,h),P=w;if(O){var I=ya(h);I.iconName&&I.prefix&&(w=I.iconName,v=I.prefix)}if(w&&!y&&(!o||o.getAttribute(wt)!==v||o.getAttribute(xt)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);var z=Wa(),_=z.extra;_.attributes[it]=t,ut(w,v).then(function(R){var te=Et(d(d({},z),{},{icons:{main:R,mask:Pt()},prefix:v,iconName:P,extra:_,watchable:!0})),T=S.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=te.map(function(ce){return Se(ce)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ei(e){return Promise.all([rn(e,"::before"),rn(e,"::after")])}function ti(e){return e.parentNode!==document.head&&!~Wr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(it)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function an(e){if(Y)return new Promise(function(t,n){var r=le(e.querySelectorAll("*")).filter(ti).map(ei),a=zt.begin("searchPseudoElements");Yn(),Promise.all(r).then(function(){a(),mt(),t()}).catch(function(){a(),mt(),n()})})}var ni={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=an,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?S:r;m.searchPseudoElements&&an(a)}}},on=!1,ri={mixout:function(){return{dom:{unwatch:function(){Yn(),on=!0}}}},hooks:function(){return{bootstrap:function(){Zt(lt("mutationObserverCallbacks",{}))},noAuto:function(){Ha()},watch:function(n){var r=n.observeMutationsRoot;on?mt():Zt(lt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},sn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ai={mixout:function(){return{parse:{transform:function(n){return sn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=sn(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:p};return{tag:"g",attributes:d({},v.outer),children:[{tag:"g",attributes:d({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),v.path)}]}]}}}},et={x:0,y:0,width:"100%",height:"100%"};function ln(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ii(e){return e.tag==="g"?e.children:[e]}var oi={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ge(a.split(" ").map(function(o){return o.trim()})):Pt();return i.prefix||(i.prefix=X()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,p=o.icon,v=aa({transform:l,containerWidth:u,iconWidth:f}),x={tag:"rect",attributes:d(d({},et),{},{fill:"white"})},h=c.children?{children:c.children.map(ln)}:{},y={tag:"g",attributes:d({},v.inner),children:[ln(d({tag:c.tag,attributes:d(d({},c.attributes),v.path)},h))]},O={tag:"g",attributes:d({},v.outer),children:[y]},w="mask-".concat(s||xe()),P="clip-".concat(s||xe()),I={tag:"mask",attributes:d(d({},et),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,O]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:ii(p)},I]};return r.push(z,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(w,")")},et)}),{children:r,attributes:a}}}},si={provides:function(t){var n=!1;B.matchMedia&&(n=B.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},li={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ci=[sa,Xa,qa,Ka,Qa,ni,ri,ai,oi,si,li];ka(ci,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var pt=N.parse;N.findIconDefinition;N.toHtml;var fi=N.icon;N.layer;N.text;N.counter;var Un={exports:{}},ui="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",di=ui,mi=di;function Vn(){}function Gn(){}Gn.resetWarningCache=Vn;var pi=function(){function e(r,a,i,o,s,l){if(l!==mi){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gn,resetWarningCache:Vn};return n.PropTypes=n,n};Un.exports=pi();var vi=Un.exports;const g=Qn(vi);function cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cn(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function We(e){"@babel/helpers - typeof";return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},We(e)}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bi(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function gi(e,t){if(e==null)return{};var n=bi(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vt(e){return hi(e)||yi(e)||wi(e)||xi()}function hi(e){if(Array.isArray(e))return bt(e)}function yi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wi(e,t){if(e){if(typeof e=="string")return bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bt(e,t)}}function bt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ki(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,u=e.pulse,p=e.fixedWidth,v=e.inverse,x=e.border,h=e.listItem,y=e.flip,O=e.size,w=e.rotation,P=e.pull,I=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":p,"fa-inverse":v,"fa-border":x,"fa-li":h,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},ae(t,"fa-".concat(O),typeof O<"u"&&O!==null),ae(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),ae(t,"fa-pull-".concat(P),typeof P<"u"&&P!==null),ae(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(I).map(function(z){return I[z]?z:null}).filter(function(z){return z})}function Ai(e){return e=e-0,e===e}function Bn(e){return Ai(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Si=["style"];function Ci(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Oi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Bn(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ci(a)]=i:t[a]=i,t},{})}function Xn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Xn(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Oi(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[Bn(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=gi(n,Si);return a.attrs.style=G(G({},a.attrs.style),o),e.apply(void 0,[t.tag,G(G({},a.attrs),s)].concat(vt(r)))}var qn=!1;try{qn=!0}catch{}function Pi(){if(!qn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fn(e){if(e&&We(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(pt.icon)return pt.icon(e);if(e===null)return null;if(e&&We(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function tt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ae({},e,t):{}}var Xe=un.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=fn(n),c=tt("classes",[].concat(vt(ki(e)),vt(i.split(" ")))),u=tt("transform",typeof e.transform=="string"?pt.transform(e.transform):e.transform),p=tt("mask",fn(r)),v=fi(f,G(G(G(G({},c),u),p),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!v)return Pi("Could not find icon",f),null;var x=v.abstract,h={ref:t};return Object.keys(e).forEach(function(y){Xe.defaultProps.hasOwnProperty(y)||(h[y]=e[y])}),Ei(x[0],h)});Xe.displayName="FontAwesomeIcon";Xe.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};Xe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ei=Xn.bind(null,un.createElement);export{Hi as A,_i as B,Xe as F,Ni as a,Ui as b,Ji as c,Ki as d,Mr as e,eo as f,$i as g,Fi as h,Bi as i,Ri as j,to as k,Zi as l,no as m,Ii as n,Ti as o,Wi as p,ji as q,Di as r,Xi as s,Yi as t,qi as u,Vi as v,Li as w,Mi as x,Gi as y,Qi as z};
