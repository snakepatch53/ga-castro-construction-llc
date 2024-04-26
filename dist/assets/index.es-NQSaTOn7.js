import{c as Jn,j,L as Zn,g as er,o as mn}from"./index-MzygAzOc.js";const yt="-";function tr(e){const t=rr(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function a(o){const s=o.split(yt);return s[0]===""&&s.length!==1&&s.shift(),pn(s,t)||nr(o)}function i(o,s){const l=n[o]||[];return s&&r[o]?[...l,...r[o]]:l}return{getClassGroupId:a,getConflictingClassGroupIds:i}}function pn(e,t){var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?pn(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(yt);return(o=t.validators.find(({validator:s})=>s(i)))==null?void 0:o.classGroupId}const jt=/^\[(.+)\]$/;function nr(e){if(jt.test(e)){const t=jt.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function rr(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return ir(Object.entries(e.classGroups),n).forEach(([i,o])=>{at(o,r,i,t)}),r}function at(e,t,n,r){e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:Ft(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(ar(a)){at(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,o])=>{at(o,Ft(t,i),n,r)})})}function Ft(e,t){let n=e;return t.split(yt).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function ar(e){return e.isThemeGetter}function ir(e,t){return t?e.map(([n,r])=>{const a=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,s])=>[t+o,s])):i);return[n,a]}):e}function or(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function a(i,o){n.set(i,o),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return a(i,o),o},set(i,o){n.has(i)?n.set(i,o):a(i,o)}}}const vn="!";function sr(e){const t=e.separator,n=t.length===1,r=t[0],a=t.length;return function(o){const s=[];let l=0,c=0,f;for(let h=0;h<o.length;h++){let y=o[h];if(l===0){if(y===r&&(n||o.slice(h,h+a)===t)){s.push(o.slice(c,h)),c=h+a;continue}if(y==="/"){f=h;continue}}y==="["?l++:y==="]"&&l--}const u=s.length===0?o:o.substring(c),p=u.startsWith(vn),v=p?u.substring(1):u,w=f&&f>c?f-c:void 0;return{modifiers:s,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:w}}}function lr(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function cr(e){return{cache:or(e.cacheSize),splitModifiers:sr(e),...tr(e)}}const fr=/\s+/;function ur(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:a}=t,i=new Set;return e.trim().split(fr).map(o=>{const{modifiers:s,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:f}=n(o);let u=r(f?c.substring(0,f):c),p=!!f;if(!u){if(!f)return{isTailwindClass:!1,originalClassName:o};if(u=r(c),!u)return{isTailwindClass:!1,originalClassName:o};p=!1}const v=lr(s).join(":");return{isTailwindClass:!0,modifierId:l?v+vn:v,classGroupId:u,originalClassName:o,hasPostfixModifier:p}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:s,classGroupId:l,hasPostfixModifier:c}=o,f=s+l;return i.has(f)?!1:(i.add(f),a(l,c).forEach(u=>i.add(s+u)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function dr(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=bn(t))&&(r&&(r+=" "),r+=n);return r}function bn(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=bn(e[r]))&&(n&&(n+=" "),n+=t);return n}function mr(e,...t){let n,r,a,i=o;function o(l){const c=t.reduce((f,u)=>u(f),e());return n=cr(c),r=n.cache.get,a=n.cache.set,i=s,s(l)}function s(l){const c=r(l);if(c)return c;const f=ur(l,n);return a(l,f),f}return function(){return i(dr.apply(null,arguments))}}function k(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const gn=/^\[(?:([a-z-]+):)?(.+)\]$/i,pr=/^\d+\/\d+$/,vr=new Set(["px","full","screen"]),br=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,yr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function H(e){return Q(e)||vr.has(e)||pr.test(e)}function V(e){return le(e,"length",zr)}function Q(e){return!!e&&!Number.isNaN(Number(e))}function Ee(e){return le(e,"number",Q)}function me(e){return!!e&&Number.isInteger(Number(e))}function wr(e){return e.endsWith("%")&&Q(e.slice(0,-1))}function b(e){return gn.test(e)}function U(e){return br.test(e)}const kr=new Set(["length","size","percentage"]);function Ar(e){return le(e,kr,hn)}function Sr(e){return le(e,"position",hn)}const Cr=new Set(["image","url"]);function Or(e){return le(e,Cr,Mr)}function Pr(e){return le(e,"",Er)}function pe(){return!0}function le(e,t,n){const r=gn.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function zr(e){return gr.test(e)&&!hr.test(e)}function hn(){return!1}function Er(e){return yr.test(e)}function Mr(e){return xr.test(e)}function Nr(){const e=k("colors"),t=k("spacing"),n=k("blur"),r=k("brightness"),a=k("borderColor"),i=k("borderRadius"),o=k("borderSpacing"),s=k("borderWidth"),l=k("contrast"),c=k("grayscale"),f=k("hueRotate"),u=k("invert"),p=k("gap"),v=k("gradientColorStops"),w=k("gradientColorStopPositions"),h=k("inset"),y=k("margin"),O=k("opacity"),x=k("padding"),P=k("saturate"),N=k("scale"),E=k("sepia"),L=k("skew"),R=k("space"),ne=k("translate"),T=()=>["auto","contain","none"],fe=()=>["auto","hidden","clip","visible","scroll"],Qe=()=>["auto",b,t],C=()=>[b,t],Tt=()=>["",H,V],Oe=()=>["auto",Q,b],_t=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Pe=()=>["solid","dashed","dotted","double","none"],Lt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Je=()=>["start","end","center","between","around","evenly","stretch"],ue=()=>["","0",b],Rt=()=>["auto","avoid","all","avoid-page","page","left","right","column"],de=()=>[Q,Ee],ze=()=>[Q,b];return{cacheSize:500,separator:":",theme:{colors:[pe],spacing:[H,V],blur:["none","",U,b],brightness:de(),borderColor:[e],borderRadius:["none","","full",U,b],borderSpacing:C(),borderWidth:Tt(),contrast:de(),grayscale:ue(),hueRotate:ze(),invert:ue(),gap:C(),gradientColorStops:[e],gradientColorStopPositions:[wr,V],inset:Qe(),margin:Qe(),opacity:de(),padding:C(),saturate:de(),scale:de(),sepia:ue(),skew:ze(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",b]}],container:["container"],columns:[{columns:[U]}],"break-after":[{"break-after":Rt()}],"break-before":[{"break-before":Rt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[..._t(),b]}],overflow:[{overflow:fe()}],"overflow-x":[{"overflow-x":fe()}],"overflow-y":[{"overflow-y":fe()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",me,b]}],basis:[{basis:Qe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",b]}],grow:[{grow:ue()}],shrink:[{shrink:ue()}],order:[{order:["first","last","none",me,b]}],"grid-cols":[{"grid-cols":[pe]}],"col-start-end":[{col:["auto",{span:["full",me,b]},b]}],"col-start":[{"col-start":Oe()}],"col-end":[{"col-end":Oe()}],"grid-rows":[{"grid-rows":[pe]}],"row-start-end":[{row:["auto",{span:[me,b]},b]}],"row-start":[{"row-start":Oe()}],"row-end":[{"row-end":Oe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",b]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",b]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Je()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Je(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Je(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",b,t]}],"min-w":[{"min-w":[b,t,"min","max","fit"]}],"max-w":[{"max-w":[b,t,"none","full","min","max","fit","prose",{screen:[U]},U]}],h:[{h:[b,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[b,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[b,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[b,t,"auto","min","max","fit"]}],"font-size":[{text:["base",U,V]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ee]}],"font-family":[{font:[pe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",b]}],"line-clamp":[{"line-clamp":["none",Q,Ee]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",H,b]}],"list-image":[{"list-image":["none",b]}],"list-style-type":[{list:["none","disc","decimal",b]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Pe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",H,V]}],"underline-offset":[{"underline-offset":["auto",H,b]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",b]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",b]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[..._t(),Sr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ar]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Or]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[...Pe(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:Pe()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...Pe()]}],"outline-offset":[{"outline-offset":[H,b]}],"outline-w":[{outline:[H,V]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Tt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[H,V]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",U,Pr]}],"shadow-color":[{shadow:[pe]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":Lt()}],"bg-blend":[{"bg-blend":Lt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",U,b]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[P]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",b]}],duration:[{duration:ze()}],ease:[{ease:["linear","in","out","in-out",b]}],delay:[{delay:ze()}],animate:[{animate:["none","spin","ping","pulse","bounce",b]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[me,b]}],"translate-x":[{"translate-x":[ne]}],"translate-y":[{"translate-y":[ne]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",b]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",b]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",b]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[H,V,Ee]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ir=mr(Nr);function Me(...e){return Ir(Jn(...e))}function Ti({children:e=!1,text:t="",style:n=1,type:r=1,_type:a=null,as:i,...o}){const s=o.className?" "+o.className:"";let l="";if(n==1?l="landing-button-component border-[var(--color2-bg)] border-solid border-2 text-[var(--color1-txt)] hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] transition-all duration-300 rounded-3xl px-4 py-2 font-bold font-link tracking-wide text-nowrap":n==2?l="landing-button-component py-3 px-6 font-bold  shadow-[0_3px_15px_2px_var(--color2-bg1)] text-[var(--color2-bg)]  rounded-full opacity-80 hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] hover:opacity-100 transition-all duration-300 ":n==3?l="flex justify-center items-center px-10 py-3 bg-[var(--color2-bg)] text-[var(--color2-txt)] text-md font-content font-bold tracking-widest rounded-full transition-all duration-300 gap-1 hover:gap-3 hover:scale-105":n==4?l="flex justify-center items-center px-10 py-3 bg-[var(--color3-bg)] text-[var(--color3-txt)] text-md font-content font-bold tracking-widest rounded-full transition-all duration-300 gap-1 hover:gap-3 hover:scale-105":n==5?l="landing-button-component px-5 py-1 font-bold  shadow-[0_3px_15px_2px_var(--color2-bg1)] text-[var(--color2-bg)]  rounded-md  hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] hover:opacity-100 transition-all duration-300 ":n==6&&(l="flex gap-2 justify-center items-center px-5 py-2 bg-[--color1-bg] text-[--color1-txt] rounded-full font-bold cursor-pointer opacity-90 transition-all duration-300  hover:opacity-100 hover:scale-105"),l+=" shadow-[0_2px_10px_3px_rgba(0,0,0,0.6)]",i){const c=i;return j.jsx(c,{...o,className:Me(l,s),children:e||t})}if(r==1)return j.jsx(j.Fragment,{children:j.jsx("button",{...o,type:a,className:Me(l,s),children:e||t})});if(r==2)return j.jsx(j.Fragment,{children:j.jsx(Zn,{...o,className:Me(l,s),children:e||t})});if(r==3)return j.jsx(j.Fragment,{children:j.jsx("a",{...o,className:Me(l,s),rel:"noreferrer",children:e||t})})}var _i={prefix:"fas",iconName:"trowel-bricks",icon:[512,512,[],"e58a","M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H376c-14.9 0-27.4-10.2-31-24H256v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V256zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32zm192 0H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32z"]},Li={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ri={prefix:"fas",iconName:"stopwatch",icon:[448,512,[9201],"f2f2","M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},ji={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Fi={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Hi={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},$i={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Di={prefix:"fas",iconName:"hand-pointer",icon:[448,512,[],"f25a","M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40V188.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v48 16 48c0 70.7-57.3 128-128 128l-16 0H240l-.1 0h-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7V40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"]},Yi={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},Wi={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Vi={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]},Ui={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Gi={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},Bi={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Xi={prefix:"fas",iconName:"right-long",icon:[512,512,["long-arrow-alt-right"],"f30b","M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"]},qi={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Tr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Ki=Tr,Qi={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ji={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Zi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},eo={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},_r={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},to=_r,no={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]},ro={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},ao={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},io={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},oo={prefix:"fas",iconName:"house-circle-check",icon:[640,512,[],"e509","M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64l.7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"]},so={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},lo={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-3.4c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};function Ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ht(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ye(e){"@babel/helpers - typeof";return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ye(e)}function Lr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Rr(e,t,n){return t&&$t(e.prototype,t),n&&$t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xt(e,t){return Fr(e)||$r(e,t)||yn(e,t)||Yr()}function Ae(e){return jr(e)||Hr(e)||yn(e)||Dr()}function jr(e){if(Array.isArray(e))return it(e)}function Fr(e){if(Array.isArray(e))return e}function Hr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $r(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function yn(e,t){if(e){if(typeof e=="string")return it(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return it(e,t)}}function it(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Dt=function(){},wt={},xn={},wn=null,kn={mark:Dt,measure:Dt};try{typeof window<"u"&&(wt=window),typeof document<"u"&&(xn=document),typeof MutationObserver<"u"&&(wn=MutationObserver),typeof performance<"u"&&(kn=performance)}catch{}var Wr=wt.navigator||{},Yt=Wr.userAgent,Wt=Yt===void 0?"":Yt,X=wt,S=xn,Vt=wn,Ne=kn;X.document;var W=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",An=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/"),Ie,Te,_e,Le,Re,$="___FONT_AWESOME___",ot=16,Sn="fa",Cn="svg-inline--fa",ee="data-fa-i2svg",st="data-fa-pseudo-element",Vr="data-fa-pseudo-element-pending",kt="data-prefix",At="data-icon",Ut="fontawesome-i2svg",Ur="async",Gr=["HTML","HEAD","STYLE","SCRIPT"],On=function(){try{return!0}catch{return!1}}(),A="classic",z="sharp",St=[A,z];function Se(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[A]}})}var he=Se((Ie={},M(Ie,A,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),M(Ie,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ie)),ye=Se((Te={},M(Te,A,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(Te,z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Te)),xe=Se((_e={},M(_e,A,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(_e,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_e)),Br=Se((Le={},M(Le,A,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(Le,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Le)),Xr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Pn="fa-layers-text",qr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Kr=Se((Re={},M(Re,A,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(Re,z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Re)),zn=[1,2,3,4,5,6,7,8,9,10],Qr=zn.concat([11,12,13,14,15,16,17,18,19,20]),Jr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},we=new Set;Object.keys(ye[A]).map(we.add.bind(we));Object.keys(ye[z]).map(we.add.bind(we));var Zr=[].concat(St,Ae(we),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(zn.map(function(e){return"".concat(e,"x")})).concat(Qr.map(function(e){return"w-".concat(e)})),be=X.FontAwesomeConfig||{};function ea(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ta(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(S&&typeof S.querySelector=="function"){var na=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];na.forEach(function(e){var t=xt(e,2),n=t[0],r=t[1],a=ta(ea(n));a!=null&&(be[r]=a)})}var En={styleDefault:"solid",familyDefault:"classic",cssPrefix:Sn,replacementClass:Cn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};be.familyPrefix&&(be.cssPrefix=be.familyPrefix);var se=d(d({},En),be);se.autoReplaceSvg||(se.observeMutations=!1);var m={};Object.keys(En).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){se[e]=n,ge.forEach(function(r){return r(m)})},get:function(){return se[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){se.cssPrefix=t,ge.forEach(function(n){return n(m)})},get:function(){return se.cssPrefix}});X.FontAwesomeConfig=m;var ge=[];function ra(e){return ge.push(e),function(){ge.splice(ge.indexOf(e),1)}}var G=ot,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(e){if(!(!e||!W)){var t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=S.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return S.head.insertBefore(t,r),e}}var ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ke(){for(var e=12,t="";e-- >0;)t+=ia[Math.random()*62|0];return t}function ce(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ct(e){return e.classList?ce(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mn(e[n]),'" ')},"").trim()}function Ge(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ot(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function sa(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function la(e){var t=e.transform,n=e.width,r=n===void 0?ot:n,a=e.height,i=a===void 0?ot:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&An?l+="translate(".concat(t.x/G-r/2,"em, ").concat(t.y/G-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "):l+="translate(".concat(t.x/G,"em, ").concat(t.y/G,"em) "),l+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ca=`:root, :host {
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
}`;function Nn(){var e=Sn,t=Cn,n=m.cssPrefix,r=m.replacementClass,a=ca;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Gt=!1;function Ze(){m.autoAddCss&&!Gt&&(aa(Nn()),Gt=!0)}var fa={mixout:function(){return{dom:{css:Nn,insertCss:Ze}}},hooks:function(){return{beforeDOMElementCreation:function(){Ze()},beforeI2svg:function(){Ze()}}}},D=X||{};D[$]||(D[$]={});D[$].styles||(D[$].styles={});D[$].hooks||(D[$].hooks={});D[$].shims||(D[$].shims=[]);var _=D[$],In=[],ua=function e(){S.removeEventListener("DOMContentLoaded",e),We=1,In.map(function(t){return t()})},We=!1;W&&(We=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),We||S.addEventListener("DOMContentLoaded",ua));function da(e){W&&(We?setTimeout(e,0):In.push(e))}function Ce(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mn(e):"<".concat(t," ").concat(oa(r),">").concat(i.map(Ce).join(""),"</").concat(t,">")}function Bt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ma=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},et=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ma(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function pa(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function lt(e){var t=pa(e);return t.length===1?t[0].toString(16):null}function va(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Xt(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ct(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Xt(t);typeof _.hooks.addPack=="function"&&!a?_.hooks.addPack(e,Xt(t)):_.styles[e]=d(d({},_.styles[e]||{}),i),e==="fas"&&ct("fa",t)}var je,Fe,He,re=_.styles,ba=_.shims,ga=(je={},M(je,A,Object.values(xe[A])),M(je,z,Object.values(xe[z])),je),Pt=null,Tn={},_n={},Ln={},Rn={},jn={},ha=(Fe={},M(Fe,A,Object.keys(he[A])),M(Fe,z,Object.keys(he[z])),Fe);function ya(e){return~Zr.indexOf(e)}function xa(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ya(a)?a:null}var Fn=function(){var t=function(i){return et(re,function(o,s,l){return o[l]=et(s,i,{}),o},{})};Tn=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),_n=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),jn=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in re||m.autoFetchSvg,r=et(ba,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ln=r.names,Rn=r.unicodes,Pt=Be(m.styleDefault,{family:m.familyDefault})};ra(function(e){Pt=Be(e.styleDefault,{family:m.familyDefault})});Fn();function zt(e,t){return(Tn[e]||{})[t]}function wa(e,t){return(_n[e]||{})[t]}function Z(e,t){return(jn[e]||{})[t]}function Hn(e){return Ln[e]||{prefix:null,iconName:null}}function ka(e){var t=Rn[e],n=zt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function q(){return Pt}var Et=function(){return{prefix:null,iconName:null,rest:[]}};function Be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?A:n,a=he[r][e],i=ye[r][e]||ye[r][a],o=e in _.styles?e:null;return i||o||null}var qt=(He={},M(He,A,Object.keys(xe[A])),M(He,z,Object.keys(xe[z])),He);function Xe(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},M(t,A,"".concat(m.cssPrefix,"-").concat(A)),M(t,z,"".concat(m.cssPrefix,"-").concat(z)),t),o=null,s=A;(e.includes(i[A])||e.some(function(c){return qt[A].includes(c)}))&&(s=A),(e.includes(i[z])||e.some(function(c){return qt[z].includes(c)}))&&(s=z);var l=e.reduce(function(c,f){var u=xa(m.cssPrefix,f);if(re[f]?(f=ga[s].includes(f)?Br[s][f]:f,o=f,c.prefix=f):ha[s].indexOf(f)>-1?(o=f,c.prefix=Be(f,{family:s})):u?c.iconName=u:f!==m.replacementClass&&f!==i[A]&&f!==i[z]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Hn(c.iconName):{},v=Z(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||v||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!re.far&&re.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},Et());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===z&&(re.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=Z(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=q()||"fas"),l}var Aa=function(){function e(){Lr(this,e),this.definitions={}}return Rr(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),ct(s,o[s]);var l=xe[A][s];l&&ct(l,o[s]),Fn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),e}(),Kt=[],ae={},oe={},Sa=Object.keys(oe);function Ca(e,t){var n=t.mixoutsTo;return Kt=e,ae={},Object.keys(oe).forEach(function(r){Sa.indexOf(r)===-1&&delete oe[r]}),Kt.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ye(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ae[o]||(ae[o]=[]),ae[o].push(i[o])})}r.provides&&r.provides(oe)}),n}function ft(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ae[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ae[e]||[];a.forEach(function(i){i.apply(null,n)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return oe[e]?oe[e].apply(null,t):void 0}function ut(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||q();if(t)return t=Z(n,t)||t,Bt($n.definitions,n,t)||Bt(_.styles,n,t)}var $n=new Aa,Oa=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,te("noAuto")},Pa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(te("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,da(function(){Ea({autoReplaceSvgRoot:n}),te("watch",t)})}},za={icon:function(t){if(t===null)return null;if(Ye(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Be(t[0]);return{prefix:r,iconName:Z(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Xr))){var a=Xe(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||q(),iconName:Z(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=q();return{prefix:i,iconName:Z(i,t)||t}}}},I={noAuto:Oa,config:m,dom:Pa,parse:za,library:$n,findIconDefinition:ut,toHtml:Ce},Ea=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?S:n;(Object.keys(_.styles).length>0||m.autoFetchSvg)&&W&&m.autoReplaceSvg&&I.dom.i2svg({node:r})};function qe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ce(r)})}}),Object.defineProperty(e,"node",{get:function(){if(W){var r=S.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ma(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ot(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Ge(d(d({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Na(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function Mt(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,p=e.watchable,v=p===void 0?!1:p,w=r.found?r:n,h=w.width,y=w.height,O=a==="fak",x=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(T){return u.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(u.classes).join(" "),P={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(y)})},N=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/y*16*.0625,"em")}:{};v&&(P.attributes[ee]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||ke())},children:[l]}),delete P.attributes.title);var E=d(d({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:d(d({},N),u.styles)}),L=r.found&&n.found?Y("generateAbstractMask",E)||{children:[],attributes:{}}:Y("generateAbstractIcon",E)||{children:[],attributes:{}},R=L.children,ne=L.attributes;return E.children=R,E.attributes=ne,s?Na(E):Ma(E)}function Qt(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ee]="");var f=d({},o.styles);Ot(a)&&(f.transform=la({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=Ge(f);u.length>0&&(c.style=u);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ia(e){var t=e.content,n=e.title,r=e.extra,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ge(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var tt=_.styles;function dt(e){var t=e[0],n=e[1],r=e.slice(4),a=xt(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ta={found:!1,width:512,height:512};function _a(e,t){!On&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function mt(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=q()),new Promise(function(r,a){if(Y("missingIconAbstract"),n==="fa"){var i=Hn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&tt[t]&&tt[t][e]){var o=tt[t][e];return r(dt(o))}_a(e,t),r(d(d({},Ta),{},{icon:m.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var Jt=function(){},pt=m.measurePerformance&&Ne&&Ne.mark&&Ne.measure?Ne:{mark:Jt,measure:Jt},ve='FA "6.5.1"',La=function(t){return pt.mark("".concat(ve," ").concat(t," begins")),function(){return Dn(t)}},Dn=function(t){pt.mark("".concat(ve," ").concat(t," ends")),pt.measure("".concat(ve," ").concat(t),"".concat(ve," ").concat(t," begins"),"".concat(ve," ").concat(t," ends"))},Nt={begin:La,end:Dn},$e=function(){};function Zt(e){var t=e.getAttribute?e.getAttribute(ee):null;return typeof t=="string"}function Ra(e){var t=e.getAttribute?e.getAttribute(kt):null,n=e.getAttribute?e.getAttribute(At):null;return t&&n}function ja(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Fa(){if(m.autoReplaceSvg===!0)return De.replace;var e=De[m.autoReplaceSvg];return e||De.replace}function Ha(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function $a(e){return S.createElement(e)}function Yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ha:$a:n;if(typeof e=="string")return S.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Yn(o,{ceFn:r}))}),a}function Da(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var De={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Yn(a),n)}),n.getAttribute(ee)===null&&m.keepOriginalSource){var r=S.createComment(Da(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ct(n).indexOf(m.replacementClass))return De.replace(t);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ce(s)}).join(`
`);n.setAttribute(ee,""),n.innerHTML=o}};function en(e){e()}function Wn(e,t){var n=typeof t=="function"?t:$e;if(e.length===0)n();else{var r=en;m.mutateApproach===Ur&&(r=X.requestAnimationFrame||en),r(function(){var a=Fa(),i=Nt.begin("mutate");e.map(a),i(),n()})}}var It=!1;function Vn(){It=!0}function vt(){It=!1}var Ve=null;function tn(e){if(Vt&&m.observeMutations){var t=e.treeCallback,n=t===void 0?$e:t,r=e.nodeCallback,a=r===void 0?$e:r,i=e.pseudoElementsCallback,o=i===void 0?$e:i,s=e.observeMutationsRoot,l=s===void 0?S:s;Ve=new Vt(function(c){if(!It){var f=q();ce(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Zt(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Zt(u.target)&&~Jr.indexOf(u.attributeName))if(u.attributeName==="class"&&Ra(u.target)){var p=Xe(Ct(u.target)),v=p.prefix,w=p.iconName;u.target.setAttribute(kt,v||f),w&&u.target.setAttribute(At,w)}else ja(u.target)&&a(u.target)})}}),W&&Ve.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ya(){Ve&&Ve.disconnect()}function Wa(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Va(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Xe(Ct(e));return a.prefix||(a.prefix=q()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=wa(a.prefix,e.innerText)||zt(a.prefix,lt(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ua(e){var t=ce(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||ke()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ga(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Va(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ua(e),s=ft("parseNodeAttributes",{},e),l=t.styleParser?Wa(e):[];return d({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ba=_.styles;function Un(e){var t=m.autoReplaceSvg==="nest"?nn(e,{styleParser:!1}):nn(e);return~t.extra.classes.indexOf(Pn)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}var K=new Set;St.map(function(e){K.add("fa-".concat(e))});Object.keys(he[A]).map(K.add.bind(K));Object.keys(he[z]).map(K.add.bind(K));K=Ae(K);function rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var n=S.documentElement.classList,r=function(u){return n.add("".concat(Ut,"-").concat(u))},a=function(u){return n.remove("".concat(Ut,"-").concat(u))},i=m.autoFetchSvg?K:St.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ba));i.includes("fa")||i.push("fa");var o=[".".concat(Pn,":not([").concat(ee,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(ee,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ce(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Nt.begin("onTree"),c=s.reduce(function(f,u){try{var p=Un(u);p&&f.push(p)}catch(v){On||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(p){Wn(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),u(p)})})}function Xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Un(e).then(function(n){n&&Wn([n],t)})}function qa(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ut(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ut(a||{})),e(r,d(d({},n),{},{mask:a}))}}var Ka=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?F:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,p=u===void 0?null:u,v=n.titleId,w=v===void 0?null:v,h=n.classes,y=h===void 0?[]:h,O=n.attributes,x=O===void 0?{}:O,P=n.styles,N=P===void 0?{}:P;if(t){var E=t.prefix,L=t.iconName,R=t.icon;return qe(d({type:"icon"},t),function(){return te("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(p?x["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(w||ke()):(x["aria-hidden"]="true",x.focusable="false")),Mt({icons:{main:dt(R),mask:l?dt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:L,transform:d(d({},F),a),symbol:o,title:p,maskId:f,titleId:w,extra:{attributes:x,styles:N,classes:y}})})}},Qa={mixout:function(){return{icon:qa(Ka)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rn,n.nodeCallback=Xa,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?S:r,i=n.callback,o=i===void 0?function(){}:i;return rn(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,p=r.extra;return new Promise(function(v,w){Promise.all([mt(a,s),f.iconName?mt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=xt(h,2),O=y[0],x=y[1];v([n,Mt({icons:{main:O,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ge(s);l.length>0&&(a.style=l);var c;return Ot(o)&&(c=Y("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ja={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qe({type:"layer"},function(){te("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(Ae(i)).join(" ")},children:o}]})}}}},Za={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return qe({type:"counter",content:n},function(){return te("beforeDOMElementCreation",{content:n,params:r}),Ia({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(Ae(s))}})})}}}},ei={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?F:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,p=r.styles,v=p===void 0?{}:p;return qe({type:"text",content:n},function(){return te("beforeDOMElementCreation",{content:n,params:r}),Qt({content:n,transform:d(d({},F),i),title:s,extra:{attributes:u,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(Ae(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(An){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qt({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ti=new RegExp('"',"ug"),an=[1105920,1112319];function ni(e){var t=e.replace(ti,""),n=va(t,0),r=n>=an[0]&&n<=an[1],a=t.length===2?t[0]===t[1]:!1;return{value:lt(a?t[0]:t),isSecondary:r||a}}function on(e,t){var n="".concat(Vr).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ce(e.children),o=i.filter(function(R){return R.getAttribute(st)===t})[0],s=X.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qr),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?z:A,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ye[p][l[2].toLowerCase()]:Kr[p][c],w=ni(u),h=w.value,y=w.isSecondary,O=l[0].startsWith("FontAwesome"),x=zt(v,h),P=x;if(O){var N=ka(h);N.iconName&&N.prefix&&(x=N.iconName,v=N.prefix)}if(x&&!y&&(!o||o.getAttribute(kt)!==v||o.getAttribute(At)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);var E=Ga(),L=E.extra;L.attributes[st]=t,mt(x,v).then(function(R){var ne=Mt(d(d({},E),{},{icons:{main:R,mask:Et()},prefix:v,iconName:P,extra:L,watchable:!0})),T=S.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=ne.map(function(fe){return Ce(fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ri(e){return Promise.all([on(e,"::before"),on(e,"::after")])}function ai(e){return e.parentNode!==document.head&&!~Gr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(st)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function sn(e){if(W)return new Promise(function(t,n){var r=ce(e.querySelectorAll("*")).filter(ai).map(ri),a=Nt.begin("searchPseudoElements");Vn(),Promise.all(r).then(function(){a(),vt(),t()}).catch(function(){a(),vt(),n()})})}var ii={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?S:r;m.searchPseudoElements&&sn(a)}}},ln=!1,oi={mixout:function(){return{dom:{unwatch:function(){Vn(),ln=!0}}}},hooks:function(){return{bootstrap:function(){tn(ft("mutationObserverCallbacks",{}))},noAuto:function(){Ya()},watch:function(n){var r=n.observeMutationsRoot;ln?vt():tn(ft("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},si={mixout:function(){return{parse:{transform:function(n){return cn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=cn(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:p};return{tag:"g",attributes:d({},v.outer),children:[{tag:"g",attributes:d({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),v.path)}]}]}}}},nt={x:0,y:0,width:"100%",height:"100%"};function fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function li(e){return e.tag==="g"?e.children:[e]}var ci={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xe(a.split(" ").map(function(o){return o.trim()})):Et();return i.prefix||(i.prefix=q()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,u=o.width,p=o.icon,v=sa({transform:l,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:d(d({},nt),{},{fill:"white"})},h=f.children?{children:f.children.map(fn)}:{},y={tag:"g",attributes:d({},v.inner),children:[fn(d({tag:f.tag,attributes:d(d({},f.attributes),v.path)},h))]},O={tag:"g",attributes:d({},v.outer),children:[y]},x="mask-".concat(s||ke()),P="clip-".concat(s||ke()),N={tag:"mask",attributes:d(d({},nt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,O]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:li(p)},N]};return r.push(E,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(x,")")},nt)}),{children:r,attributes:a}}}},fi={provides:function(t){var n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ui={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},di=[fa,Qa,Ja,Za,ei,ii,oi,si,ci,fi,ui];Ca(di,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var bt=I.parse;I.findIconDefinition;I.toHtml;var mi=I.icon;I.layer;I.text;I.counter;var Gn={exports:{}},pi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vi=pi,bi=vi;function Bn(){}function Xn(){}Xn.resetWarningCache=Bn;var gi=function(){function e(r,a,i,o,s,l){if(l!==bi){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xn,resetWarningCache:Bn};return n.PropTypes=n,n};Gn.exports=gi();var hi=Gn.exports;const g=er(hi);function un(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?un(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ue(e){"@babel/helpers - typeof";return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ue(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yi(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function xi(e,t){if(e==null)return{};var n=yi(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gt(e){return wi(e)||ki(e)||Ai(e)||Si()}function wi(e){if(Array.isArray(e))return ht(e)}function ki(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ai(e,t){if(e){if(typeof e=="string")return ht(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ht(e,t)}}function ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Si(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ci(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,p=e.fixedWidth,v=e.inverse,w=e.border,h=e.listItem,y=e.flip,O=e.size,x=e.rotation,P=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":v,"fa-border":w,"fa-li":h,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},ie(t,"fa-".concat(O),typeof O<"u"&&O!==null),ie(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),ie(t,"fa-pull-".concat(P),typeof P<"u"&&P!==null),ie(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(E){return N[E]?E:null}).filter(function(E){return E})}function Oi(e){return e=e-0,e===e}function qn(e){return Oi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Pi=["style"];function zi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ei(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qn(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[zi(a)]=i:t[a]=i,t},{})}function Kn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Kn(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Ei(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[qn(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=xi(n,Pi);return a.attrs.style=B(B({},a.attrs.style),o),e.apply(void 0,[t.tag,B(B({},a.attrs),s)].concat(gt(r)))}var Qn=!1;try{Qn=!0}catch{}function Mi(){if(!Qn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function dn(e){if(e&&Ue(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bt.icon)return bt.icon(e);if(e===null)return null;if(e&&Ue(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function rt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ie({},e,t):{}}var Ke=mn.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,c=dn(n),f=rt("classes",[].concat(gt(Ci(e)),gt(i.split(" ")))),u=rt("transform",typeof e.transform=="string"?bt.transform(e.transform):e.transform),p=rt("mask",dn(r)),v=mi(c,B(B(B(B({},f),u),p),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!v)return Mi("Could not find icon",c),null;var w=v.abstract,h={ref:t};return Object.keys(e).forEach(function(y){Ke.defaultProps.hasOwnProperty(y)||(h[y]=e[y])}),Ni(w[0],h)});Ke.displayName="FontAwesomeIcon";Ke.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};Ke.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ni=Kn.bind(null,mn.createElement);export{no as A,Ti as B,Vi as C,Hi as D,Fi as E,Ke as F,Ki as G,Li as a,qi as b,ro as c,to as d,Tr as e,io as f,Ui as g,Wi as h,Ji as i,Di as j,so as k,ao as l,ji as m,$i as n,oo as o,lo as p,_i as q,Ri as r,Xi as s,Yi as t,Gi as u,Zi as v,Bi as w,eo as x,Me as y,Qi as z};
