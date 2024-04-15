import{c as Jn,j,L as Zn,g as tr,e as mn}from"./index-UmEeAza3.js";const ye="-";function er(t){const e=rr(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;function a(o){const s=o.split(ye);return s[0]===""&&s.length!==1&&s.shift(),pn(s,e)||nr(o)}function i(o,s){const l=n[o]||[];return s&&r[o]?[...l,...r[o]]:l}return{getClassGroupId:a,getConflictingClassGroupIds:i}}function pn(t,e){var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),a=r?pn(t.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const i=t.join(ye);return(o=e.validators.find(({validator:s})=>s(i)))==null?void 0:o.classGroupId}const je=/^\[(.+)\]$/;function nr(t){if(je.test(t)){const e=je.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function rr(t){const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return ir(Object.entries(t.classGroups),n).forEach(([i,o])=>{ae(o,r,i,e)}),r}function ae(t,e,n,r){t.forEach(a=>{if(typeof a=="string"){const i=a===""?e:Fe(e,a);i.classGroupId=n;return}if(typeof a=="function"){if(ar(a)){ae(a(r),e,n,r);return}e.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,o])=>{ae(o,Fe(e,i),n,r)})})}function Fe(t,e){let n=t;return e.split(ye).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function ar(t){return t.isThemeGetter}function ir(t,e){return e?t.map(([n,r])=>{const a=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,s])=>[e+o,s])):i);return[n,a]}):t}function or(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;function a(i,o){n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)}return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return a(i,o),o},set(i,o){n.has(i)?n.set(i,o):a(i,o)}}}const vn="!";function sr(t){const e=t.separator,n=e.length===1,r=e[0],a=e.length;return function(o){const s=[];let l=0,c=0,f;for(let h=0;h<o.length;h++){let y=o[h];if(l===0){if(y===r&&(n||o.slice(h,h+a)===e)){s.push(o.slice(c,h)),c=h+a;continue}if(y==="/"){f=h;continue}}y==="["?l++:y==="]"&&l--}const u=s.length===0?o:o.substring(c),p=u.startsWith(vn),v=p?u.substring(1):u,w=f&&f>c?f-c:void 0;return{modifiers:s,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:w}}}function lr(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e}function cr(t){return{cache:or(t.cacheSize),splitModifiers:sr(t),...er(t)}}const fr=/\s+/;function ur(t,e){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:a}=e,i=new Set;return t.trim().split(fr).map(o=>{const{modifiers:s,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:f}=n(o);let u=r(f?c.substring(0,f):c),p=!!f;if(!u){if(!f)return{isTailwindClass:!1,originalClassName:o};if(u=r(c),!u)return{isTailwindClass:!1,originalClassName:o};p=!1}const v=lr(s).join(":");return{isTailwindClass:!0,modifierId:l?v+vn:v,classGroupId:u,originalClassName:o,hasPostfixModifier:p}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:s,classGroupId:l,hasPostfixModifier:c}=o,f=s+l;return i.has(f)?!1:(i.add(f),a(l,c).forEach(u=>i.add(s+u)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function dr(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=bn(e))&&(r&&(r+=" "),r+=n);return r}function bn(t){if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=bn(t[r]))&&(n&&(n+=" "),n+=e);return n}function mr(t,...e){let n,r,a,i=o;function o(l){const c=e.reduce((f,u)=>u(f),t());return n=cr(c),r=n.cache.get,a=n.cache.set,i=s,s(l)}function s(l){const c=r(l);if(c)return c;const f=ur(l,n);return a(l,f),f}return function(){return i(dr.apply(null,arguments))}}function k(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const gn=/^\[(?:([a-z-]+):)?(.+)\]$/i,pr=/^\d+\/\d+$/,vr=new Set(["px","full","screen"]),br=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,yr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function H(t){return Q(t)||vr.has(t)||pr.test(t)}function U(t){return lt(t,"length",Er)}function Q(t){return!!t&&!Number.isNaN(Number(t))}function zt(t){return lt(t,"number",Q)}function mt(t){return!!t&&Number.isInteger(Number(t))}function wr(t){return t.endsWith("%")&&Q(t.slice(0,-1))}function b(t){return gn.test(t)}function V(t){return br.test(t)}const kr=new Set(["length","size","percentage"]);function Ar(t){return lt(t,kr,hn)}function Sr(t){return lt(t,"position",hn)}const Cr=new Set(["image","url"]);function Or(t){return lt(t,Cr,Mr)}function Pr(t){return lt(t,"",zr)}function pt(){return!0}function lt(t,e,n){const r=gn.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1}function Er(t){return gr.test(t)&&!hr.test(t)}function hn(){return!1}function zr(t){return yr.test(t)}function Mr(t){return xr.test(t)}function Nr(){const t=k("colors"),e=k("spacing"),n=k("blur"),r=k("brightness"),a=k("borderColor"),i=k("borderRadius"),o=k("borderSpacing"),s=k("borderWidth"),l=k("contrast"),c=k("grayscale"),f=k("hueRotate"),u=k("invert"),p=k("gap"),v=k("gradientColorStops"),w=k("gradientColorStopPositions"),h=k("inset"),y=k("margin"),O=k("opacity"),x=k("padding"),P=k("saturate"),N=k("scale"),z=k("sepia"),L=k("skew"),R=k("space"),nt=k("translate"),T=()=>["auto","contain","none"],ft=()=>["auto","hidden","clip","visible","scroll"],Qt=()=>["auto",b,e],C=()=>[b,e],Te=()=>["",H,U],Ot=()=>["auto",Q,b],_e=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Pt=()=>["solid","dashed","dotted","double","none"],Le=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Jt=()=>["start","end","center","between","around","evenly","stretch"],ut=()=>["","0",b],Re=()=>["auto","avoid","all","avoid-page","page","left","right","column"],dt=()=>[Q,zt],Et=()=>[Q,b];return{cacheSize:500,separator:":",theme:{colors:[pt],spacing:[H,U],blur:["none","",V,b],brightness:dt(),borderColor:[t],borderRadius:["none","","full",V,b],borderSpacing:C(),borderWidth:Te(),contrast:dt(),grayscale:ut(),hueRotate:Et(),invert:ut(),gap:C(),gradientColorStops:[t],gradientColorStopPositions:[wr,U],inset:Qt(),margin:Qt(),opacity:dt(),padding:C(),saturate:dt(),scale:dt(),sepia:ut(),skew:Et(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",b]}],container:["container"],columns:[{columns:[V]}],"break-after":[{"break-after":Re()}],"break-before":[{"break-before":Re()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[..._e(),b]}],overflow:[{overflow:ft()}],"overflow-x":[{"overflow-x":ft()}],"overflow-y":[{"overflow-y":ft()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",mt,b]}],basis:[{basis:Qt()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",b]}],grow:[{grow:ut()}],shrink:[{shrink:ut()}],order:[{order:["first","last","none",mt,b]}],"grid-cols":[{"grid-cols":[pt]}],"col-start-end":[{col:["auto",{span:["full",mt,b]},b]}],"col-start":[{"col-start":Ot()}],"col-end":[{"col-end":Ot()}],"grid-rows":[{"grid-rows":[pt]}],"row-start-end":[{row:["auto",{span:[mt,b]},b]}],"row-start":[{"row-start":Ot()}],"row-end":[{"row-end":Ot()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",b]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",b]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Jt()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Jt(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Jt(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",b,e]}],"min-w":[{"min-w":[b,e,"min","max","fit"]}],"max-w":[{"max-w":[b,e,"none","full","min","max","fit","prose",{screen:[V]},V]}],h:[{h:[b,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[b,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[b,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[b,e,"auto","min","max","fit"]}],"font-size":[{text:["base",V,U]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",zt]}],"font-family":[{font:[pt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",b]}],"line-clamp":[{"line-clamp":["none",Q,zt]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",H,b]}],"list-image":[{"list-image":["none",b]}],"list-style-type":[{list:["none","disc","decimal",b]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Pt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",H,U]}],"underline-offset":[{"underline-offset":["auto",H,b]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",b]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",b]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[..._e(),Sr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ar]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Or]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[...Pt(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:Pt()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...Pt()]}],"outline-offset":[{"outline-offset":[H,b]}],"outline-w":[{outline:[H,U]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:Te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[H,U]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",V,Pr]}],"shadow-color":[{shadow:[pt]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":Le()}],"bg-blend":[{"bg-blend":Le()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",V,b]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[P]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",b]}],duration:[{duration:Et()}],ease:[{ease:["linear","in","out","in-out",b]}],delay:[{delay:Et()}],animate:[{animate:["none","spin","ping","pulse","bounce",b]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[mt,b]}],"translate-x":[{"translate-x":[nt]}],"translate-y":[{"translate-y":[nt]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",b]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",b]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",b]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[H,U,zt]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ir=mr(Nr);function Mt(...t){return Ir(Jn(...t))}function Ti({children:t=!1,text:e="",style:n=1,type:r=1,_type:a=null,as:i,...o}){const s=o.className?" "+o.className:"";let l="";if(n==1?l="landing-button-component border-[var(--color2-bg)] border-solid border-2 text-[var(--color1-txt)] hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] transition-all duration-300 rounded-3xl px-4 py-2 font-bold font-link tracking-wide text-nowrap":n==2?l="landing-button-component py-3 px-6 font-bold  shadow-[0_3px_15px_2px_var(--color2-bg1)] text-[var(--color2-bg)]  rounded-full opacity-80 hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] hover:opacity-100 transition-all duration-300 ":n==3?l="flex justify-center items-center px-10 py-3 bg-[var(--color2-bg)] text-[var(--color2-txt)] text-md font-content font-bold tracking-widest rounded-full transition-all duration-300 gap-1 hover:gap-3 hover:scale-105":n==4?l="flex justify-center items-center px-10 py-3 bg-[var(--color3-bg)] text-[var(--color3-txt)] text-md font-content font-bold tracking-widest rounded-full transition-all duration-300 gap-1 hover:gap-3 hover:scale-105":n==5?l="landing-button-component px-5 py-1 font-bold  shadow-[0_3px_15px_2px_var(--color2-bg1)] text-[var(--color2-bg)]  rounded-md  hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] hover:opacity-100 transition-all duration-300 ":n==6&&(l="flex gap-2 justify-center items-center px-5 py-2 bg-[--color1-bg] text-[--color1-txt] rounded-full font-bold cursor-pointer opacity-90 transition-all duration-300  hover:opacity-100 hover:scale-105"),l+=" shadow-[0_2px_10px_3px_rgba(0,0,0,0.6)]",i){const c=i;return j.jsx(c,{...o,className:Mt(l,s),children:t||e})}if(r==1)return j.jsx(j.Fragment,{children:j.jsx("button",{...o,type:a,className:Mt(l,s),children:t||e})});if(r==2)return j.jsx(j.Fragment,{children:j.jsx(Zn,{...o,className:Mt(l,s),children:t||e})});if(r==3)return j.jsx(j.Fragment,{children:j.jsx("a",{...o,className:Mt(l,s),rel:"noreferrer",children:t||e})})}var _i={prefix:"fas",iconName:"trowel-bricks",icon:[512,512,[],"e58a","M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H376c-14.9 0-27.4-10.2-31-24H256v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V256zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32zm192 0H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32z"]},Li={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ri={prefix:"fas",iconName:"stopwatch",icon:[448,512,[9201],"f2f2","M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},ji={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Fi={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Hi={prefix:"fas",iconName:"hand-pointer",icon:[448,512,[],"f25a","M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40V188.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v48 16 48c0 70.7-57.3 128-128 128l-16 0H240l-.1 0h-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7V40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"]},$i={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},Di={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Yi={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]},Wi={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ui={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},Vi={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Gi={prefix:"fas",iconName:"right-long",icon:[512,512,["long-arrow-alt-right"],"f30b","M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"]},Bi={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Tr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Xi=Tr,qi={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ki={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Qi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Ji={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},_r={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Zi=_r,to={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]},eo={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},no={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},ro={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},ao={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},io={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-3.4c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(r){M(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yt(t){"@babel/helpers - typeof";return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt(t)}function Lr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Rr(t,e,n){return e&&$e(t.prototype,e),n&&$e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xe(t,e){return Fr(t)||$r(t,e)||yn(t,e)||Yr()}function At(t){return jr(t)||Hr(t)||yn(t)||Dr()}function jr(t){if(Array.isArray(t))return ie(t)}function Fr(t){if(Array.isArray(t))return t}function Hr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $r(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function yn(t,e){if(t){if(typeof t=="string")return ie(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(t,e)}}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var De=function(){},we={},xn={},wn=null,kn={mark:De,measure:De};try{typeof window<"u"&&(we=window),typeof document<"u"&&(xn=document),typeof MutationObserver<"u"&&(wn=MutationObserver),typeof performance<"u"&&(kn=performance)}catch{}var Wr=we.navigator||{},Ye=Wr.userAgent,We=Ye===void 0?"":Ye,X=we,S=xn,Ue=wn,Nt=kn;X.document;var W=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",An=~We.indexOf("MSIE")||~We.indexOf("Trident/"),It,Tt,_t,Lt,Rt,$="___FONT_AWESOME___",oe=16,Sn="fa",Cn="svg-inline--fa",tt="data-fa-i2svg",se="data-fa-pseudo-element",Ur="data-fa-pseudo-element-pending",ke="data-prefix",Ae="data-icon",Ve="fontawesome-i2svg",Vr="async",Gr=["HTML","HEAD","STYLE","SCRIPT"],On=function(){try{return!0}catch{return!1}}(),A="classic",E="sharp",Se=[A,E];function St(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[A]}})}var ht=St((It={},M(It,A,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),M(It,E,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),It)),yt=St((Tt={},M(Tt,A,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(Tt,E,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Tt)),xt=St((_t={},M(_t,A,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(_t,E,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_t)),Br=St((Lt={},M(Lt,A,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(Lt,E,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Lt)),Xr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Pn="fa-layers-text",qr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Kr=St((Rt={},M(Rt,A,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(Rt,E,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Rt)),En=[1,2,3,4,5,6,7,8,9,10],Qr=En.concat([11,12,13,14,15,16,17,18,19,20]),Jr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wt=new Set;Object.keys(yt[A]).map(wt.add.bind(wt));Object.keys(yt[E]).map(wt.add.bind(wt));var Zr=[].concat(Se,At(wt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(En.map(function(t){return"".concat(t,"x")})).concat(Qr.map(function(t){return"w-".concat(t)})),bt=X.FontAwesomeConfig||{};function ta(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(S&&typeof S.querySelector=="function"){var na=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];na.forEach(function(t){var e=xe(t,2),n=e[0],r=e[1],a=ea(ta(n));a!=null&&(bt[r]=a)})}var zn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Sn,replacementClass:Cn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bt.familyPrefix&&(bt.cssPrefix=bt.familyPrefix);var st=d(d({},zn),bt);st.autoReplaceSvg||(st.observeMutations=!1);var m={};Object.keys(zn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){st[t]=n,gt.forEach(function(r){return r(m)})},get:function(){return st[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){st.cssPrefix=e,gt.forEach(function(n){return n(m)})},get:function(){return st.cssPrefix}});X.FontAwesomeConfig=m;var gt=[];function ra(t){return gt.push(t),function(){gt.splice(gt.indexOf(t),1)}}var G=oe,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(t){if(!(!t||!W)){var e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=S.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return S.head.insertBefore(e,r),t}}var ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var t=12,e="";t-- >0;)e+=ia[Math.random()*62|0];return e}function ct(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ce(t){return t.classList?ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Mn(t[n]),'" ')},"").trim()}function Gt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oe(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function sa(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function la(t){var e=t.transform,n=t.width,r=n===void 0?oe:n,a=t.height,i=a===void 0?oe:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&An?l+="translate(".concat(e.x/G-r/2,"em, ").concat(e.y/G-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/G,"em), calc(-50% + ").concat(e.y/G,"em)) "):l+="translate(".concat(e.x/G,"em, ").concat(e.y/G,"em) "),l+="scale(".concat(e.size/G*(e.flipX?-1:1),", ").concat(e.size/G*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ca=`:root, :host {
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
}`;function Nn(){var t=Sn,e=Cn,n=m.cssPrefix,r=m.replacementClass,a=ca;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ge=!1;function Zt(){m.autoAddCss&&!Ge&&(aa(Nn()),Ge=!0)}var fa={mixout:function(){return{dom:{css:Nn,insertCss:Zt}}},hooks:function(){return{beforeDOMElementCreation:function(){Zt()},beforeI2svg:function(){Zt()}}}},D=X||{};D[$]||(D[$]={});D[$].styles||(D[$].styles={});D[$].hooks||(D[$].hooks={});D[$].shims||(D[$].shims=[]);var _=D[$],In=[],ua=function t(){S.removeEventListener("DOMContentLoaded",t),Wt=1,In.map(function(e){return e()})},Wt=!1;W&&(Wt=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),Wt||S.addEventListener("DOMContentLoaded",ua));function da(t){W&&(Wt?setTimeout(t,0):In.push(t))}function Ct(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Mn(t):"<".concat(e," ").concat(oa(r),">").concat(i.map(Ct).join(""),"</").concat(e,">")}function Be(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ma=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},te=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?ma(n,a):n,l,c,f;for(r===void 0?(l=1,f=e[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,e[c],c,e);return f};function pa(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function le(t){var e=pa(t);return e.length===1?e[0].toString(16):null}function va(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Xe(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function ce(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Xe(e);typeof _.hooks.addPack=="function"&&!a?_.hooks.addPack(t,Xe(e)):_.styles[t]=d(d({},_.styles[t]||{}),i),t==="fas"&&ce("fa",e)}var jt,Ft,Ht,rt=_.styles,ba=_.shims,ga=(jt={},M(jt,A,Object.values(xt[A])),M(jt,E,Object.values(xt[E])),jt),Pe=null,Tn={},_n={},Ln={},Rn={},jn={},ha=(Ft={},M(Ft,A,Object.keys(ht[A])),M(Ft,E,Object.keys(ht[E])),Ft);function ya(t){return~Zr.indexOf(t)}function xa(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!ya(a)?a:null}var Fn=function(){var e=function(i){return te(rt,function(o,s,l){return o[l]=te(s,i,{}),o},{})};Tn=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),_n=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),jn=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in rt||m.autoFetchSvg,r=te(ba,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ln=r.names,Rn=r.unicodes,Pe=Bt(m.styleDefault,{family:m.familyDefault})};ra(function(t){Pe=Bt(t.styleDefault,{family:m.familyDefault})});Fn();function Ee(t,e){return(Tn[t]||{})[e]}function wa(t,e){return(_n[t]||{})[e]}function Z(t,e){return(jn[t]||{})[e]}function Hn(t){return Ln[t]||{prefix:null,iconName:null}}function ka(t){var e=Rn[t],n=Ee("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function q(){return Pe}var ze=function(){return{prefix:null,iconName:null,rest:[]}};function Bt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?A:n,a=ht[r][t],i=yt[r][t]||yt[r][a],o=t in _.styles?t:null;return i||o||null}var qe=(Ht={},M(Ht,A,Object.keys(xt[A])),M(Ht,E,Object.keys(xt[E])),Ht);function Xt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},M(e,A,"".concat(m.cssPrefix,"-").concat(A)),M(e,E,"".concat(m.cssPrefix,"-").concat(E)),e),o=null,s=A;(t.includes(i[A])||t.some(function(c){return qe[A].includes(c)}))&&(s=A),(t.includes(i[E])||t.some(function(c){return qe[E].includes(c)}))&&(s=E);var l=t.reduce(function(c,f){var u=xa(m.cssPrefix,f);if(rt[f]?(f=ga[s].includes(f)?Br[s][f]:f,o=f,c.prefix=f):ha[s].indexOf(f)>-1?(o=f,c.prefix=Bt(f,{family:s})):u?c.iconName=u:f!==m.replacementClass&&f!==i[A]&&f!==i[E]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Hn(c.iconName):{},v=Z(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||v||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!rt.far&&rt.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},ze());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===E&&(rt.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=Z(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=q()||"fas"),l}var Aa=function(){function t(){Lr(this,t),this.definitions={}}return Rr(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),ce(s,o[s]);var l=xt[A][s];l&&ce(l,o[s]),Fn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),t}(),Ke=[],at={},ot={},Sa=Object.keys(ot);function Ca(t,e){var n=e.mixoutsTo;return Ke=t,at={},Object.keys(ot).forEach(function(r){Sa.indexOf(r)===-1&&delete ot[r]}),Ke.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Yt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){at[o]||(at[o]=[]),at[o].push(i[o])})}r.provides&&r.provides(ot)}),n}function fe(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=at[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=at[t]||[];a.forEach(function(i){i.apply(null,n)})}function Y(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ot[t]?ot[t].apply(null,e):void 0}function ue(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||q();if(e)return e=Z(n,e)||e,Be($n.definitions,n,e)||Be(_.styles,n,e)}var $n=new Aa,Oa=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,et("noAuto")},Pa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(et("beforeI2svg",e),Y("pseudoElements2svg",e),Y("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,da(function(){za({autoReplaceSvgRoot:n}),et("watch",e)})}},Ea={icon:function(e){if(e===null)return null;if(Yt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Bt(e[0]);return{prefix:r,iconName:Z(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Xr))){var a=Xt(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||q(),iconName:Z(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=q();return{prefix:i,iconName:Z(i,e)||e}}}},I={noAuto:Oa,config:m,dom:Pa,parse:Ea,library:$n,findIconDefinition:ue,toHtml:Ct},za=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?S:n;(Object.keys(_.styles).length>0||m.autoFetchSvg)&&W&&m.autoReplaceSvg&&I.dom.i2svg({node:r})};function qt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ct(r)})}}),Object.defineProperty(t,"node",{get:function(){if(W){var r=S.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ma(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Oe(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Gt(d(d({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Na(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function Me(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,p=t.watchable,v=p===void 0?!1:p,w=r.found?r:n,h=w.width,y=w.height,O=a==="fak",x=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(T){return u.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(u.classes).join(" "),P={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(y)})},N=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/y*16*.0625,"em")}:{};v&&(P.attributes[tt]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||kt())},children:[l]}),delete P.attributes.title);var z=d(d({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:d(d({},N),u.styles)}),L=r.found&&n.found?Y("generateAbstractMask",z)||{children:[],attributes:{}}:Y("generateAbstractIcon",z)||{children:[],attributes:{}},R=L.children,nt=L.attributes;return z.children=R,z.attributes=nt,s?Na(z):Ma(z)}function Qe(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[tt]="");var f=d({},o.styles);Oe(a)&&(f.transform=la({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=Gt(f);u.length>0&&(c.style=u);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ia(t){var e=t.content,n=t.title,r=t.extra,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ee=_.styles;function de(t){var e=t[0],n=t[1],r=t.slice(4),a=xe(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ta={found:!1,width:512,height:512};function _a(t,e){!On&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function me(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=q()),new Promise(function(r,a){if(Y("missingIconAbstract"),n==="fa"){var i=Hn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ee[e]&&ee[e][t]){var o=ee[e][t];return r(de(o))}_a(t,e),r(d(d({},Ta),{},{icon:m.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}var Je=function(){},pe=m.measurePerformance&&Nt&&Nt.mark&&Nt.measure?Nt:{mark:Je,measure:Je},vt='FA "6.5.1"',La=function(e){return pe.mark("".concat(vt," ").concat(e," begins")),function(){return Dn(e)}},Dn=function(e){pe.mark("".concat(vt," ").concat(e," ends")),pe.measure("".concat(vt," ").concat(e),"".concat(vt," ").concat(e," begins"),"".concat(vt," ").concat(e," ends"))},Ne={begin:La,end:Dn},$t=function(){};function Ze(t){var e=t.getAttribute?t.getAttribute(tt):null;return typeof e=="string"}function Ra(t){var e=t.getAttribute?t.getAttribute(ke):null,n=t.getAttribute?t.getAttribute(Ae):null;return e&&n}function ja(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Fa(){if(m.autoReplaceSvg===!0)return Dt.replace;var t=Dt[m.autoReplaceSvg];return t||Dt.replace}function Ha(t){return S.createElementNS("http://www.w3.org/2000/svg",t)}function $a(t){return S.createElement(t)}function Yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Ha:$a:n;if(typeof t=="string")return S.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Yn(o,{ceFn:r}))}),a}function Da(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Dt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Yn(a),n)}),n.getAttribute(tt)===null&&m.keepOriginalSource){var r=S.createComment(Da(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ce(n).indexOf(m.replacementClass))return Dt.replace(e);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ct(s)}).join(`
`);n.setAttribute(tt,""),n.innerHTML=o}};function tn(t){t()}function Wn(t,e){var n=typeof e=="function"?e:$t;if(t.length===0)n();else{var r=tn;m.mutateApproach===Vr&&(r=X.requestAnimationFrame||tn),r(function(){var a=Fa(),i=Ne.begin("mutate");t.map(a),i(),n()})}}var Ie=!1;function Un(){Ie=!0}function ve(){Ie=!1}var Ut=null;function en(t){if(Ue&&m.observeMutations){var e=t.treeCallback,n=e===void 0?$t:e,r=t.nodeCallback,a=r===void 0?$t:r,i=t.pseudoElementsCallback,o=i===void 0?$t:i,s=t.observeMutationsRoot,l=s===void 0?S:s;Ut=new Ue(function(c){if(!Ie){var f=q();ct(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Ze(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Ze(u.target)&&~Jr.indexOf(u.attributeName))if(u.attributeName==="class"&&Ra(u.target)){var p=Xt(Ce(u.target)),v=p.prefix,w=p.iconName;u.target.setAttribute(ke,v||f),w&&u.target.setAttribute(Ae,w)}else ja(u.target)&&a(u.target)})}}),W&&Ut.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ya(){Ut&&Ut.disconnect()}function Wa(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ua(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Xt(Ce(t));return a.prefix||(a.prefix=q()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=wa(a.prefix,t.innerText)||Ee(a.prefix,le(t.innerText))),!a.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Va(t){var e=ct(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||kt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ga(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ua(t),r=n.iconName,a=n.prefix,i=n.rest,o=Va(t),s=fe("parseNodeAttributes",{},t),l=e.styleParser?Wa(t):[];return d({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ba=_.styles;function Vn(t){var e=m.autoReplaceSvg==="nest"?nn(t,{styleParser:!1}):nn(t);return~e.extra.classes.indexOf(Pn)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}var K=new Set;Se.map(function(t){K.add("fa-".concat(t))});Object.keys(ht[A]).map(K.add.bind(K));Object.keys(ht[E]).map(K.add.bind(K));K=At(K);function rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var n=S.documentElement.classList,r=function(u){return n.add("".concat(Ve,"-").concat(u))},a=function(u){return n.remove("".concat(Ve,"-").concat(u))},i=m.autoFetchSvg?K:Se.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ba));i.includes("fa")||i.push("fa");var o=[".".concat(Pn,":not([").concat(tt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ct(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ne.begin("onTree"),c=s.reduce(function(f,u){try{var p=Vn(u);p&&f.push(p)}catch(v){On||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(p){Wn(p,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(p){l(),u(p)})})}function Xa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vn(t).then(function(n){n&&Wn([n],e)})}function qa(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ue(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ue(a||{})),t(r,d(d({},n),{},{mask:a}))}}var Ka=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?F:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,p=u===void 0?null:u,v=n.titleId,w=v===void 0?null:v,h=n.classes,y=h===void 0?[]:h,O=n.attributes,x=O===void 0?{}:O,P=n.styles,N=P===void 0?{}:P;if(e){var z=e.prefix,L=e.iconName,R=e.icon;return qt(d({type:"icon"},e),function(){return et("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(p?x["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(w||kt()):(x["aria-hidden"]="true",x.focusable="false")),Me({icons:{main:de(R),mask:l?de(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:L,transform:d(d({},F),a),symbol:o,title:p,maskId:f,titleId:w,extra:{attributes:x,styles:N,classes:y}})})}},Qa={mixout:function(){return{icon:qa(Ka)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rn,n.nodeCallback=Xa,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?S:r,i=n.callback,o=i===void 0?function(){}:i;return rn(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,p=r.extra;return new Promise(function(v,w){Promise.all([me(a,s),f.iconName?me(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=xe(h,2),O=y[0],x=y[1];v([n,Me({icons:{main:O,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:p,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Gt(s);l.length>0&&(a.style=l);var c;return Oe(o)&&(c=Y("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ja={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qt({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(At(i)).join(" ")},children:o}]})}}}},Za={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return qt({type:"counter",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:r}),Ia({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(At(s))}})})}}}},ti={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?F:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,p=r.styles,v=p===void 0?{}:p;return qt({type:"text",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:r}),Qe({content:n,transform:d(d({},F),i),title:s,extra:{attributes:u,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(At(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(An){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qe({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ei=new RegExp('"',"ug"),an=[1105920,1112319];function ni(t){var e=t.replace(ei,""),n=va(e,0),r=n>=an[0]&&n<=an[1],a=e.length===2?e[0]===e[1]:!1;return{value:le(a?e[0]:e),isSecondary:r||a}}function on(t,e){var n="".concat(Ur).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=ct(t.children),o=i.filter(function(R){return R.getAttribute(se)===e})[0],s=X.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(qr),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?E:A,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yt[p][l[2].toLowerCase()]:Kr[p][c],w=ni(u),h=w.value,y=w.isSecondary,O=l[0].startsWith("FontAwesome"),x=Ee(v,h),P=x;if(O){var N=ka(h);N.iconName&&N.prefix&&(x=N.iconName,v=N.prefix)}if(x&&!y&&(!o||o.getAttribute(ke)!==v||o.getAttribute(Ae)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var z=Ga(),L=z.extra;L.attributes[se]=e,me(x,v).then(function(R){var nt=Me(d(d({},z),{},{icons:{main:R,mask:ze()},prefix:v,iconName:P,extra:L,watchable:!0})),T=S.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=nt.map(function(ft){return Ct(ft)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ri(t){return Promise.all([on(t,"::before"),on(t,"::after")])}function ai(t){return t.parentNode!==document.head&&!~Gr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(se)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sn(t){if(W)return new Promise(function(e,n){var r=ct(t.querySelectorAll("*")).filter(ai).map(ri),a=Ne.begin("searchPseudoElements");Un(),Promise.all(r).then(function(){a(),ve(),e()}).catch(function(){a(),ve(),n()})})}var ii={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?S:r;m.searchPseudoElements&&sn(a)}}},ln=!1,oi={mixout:function(){return{dom:{unwatch:function(){Un(),ln=!0}}}},hooks:function(){return{bootstrap:function(){en(fe("mutationObserverCallbacks",{}))},noAuto:function(){Ya()},watch:function(n){var r=n.observeMutationsRoot;ln?ve():en(fe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},si={mixout:function(){return{parse:{transform:function(n){return cn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=cn(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:p};return{tag:"g",attributes:d({},v.outer),children:[{tag:"g",attributes:d({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),v.path)}]}]}}}},ne={x:0,y:0,width:"100%",height:"100%"};function fn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function li(t){return t.tag==="g"?t.children:[t]}var ci={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xt(a.split(" ").map(function(o){return o.trim()})):ze();return i.prefix||(i.prefix=q()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,u=o.width,p=o.icon,v=sa({transform:l,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:d(d({},ne),{},{fill:"white"})},h=f.children?{children:f.children.map(fn)}:{},y={tag:"g",attributes:d({},v.inner),children:[fn(d({tag:f.tag,attributes:d(d({},f.attributes),v.path)},h))]},O={tag:"g",attributes:d({},v.outer),children:[y]},x="mask-".concat(s||kt()),P="clip-".concat(s||kt()),N={tag:"mask",attributes:d(d({},ne),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,O]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:li(p)},N]};return r.push(z,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(x,")")},ne)}),{children:r,attributes:a}}}},fi={provides:function(e){var n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ui={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},di=[fa,Qa,Ja,Za,ti,ii,oi,si,ci,fi,ui];Ca(di,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var be=I.parse;I.findIconDefinition;I.toHtml;var mi=I.icon;I.layer;I.text;I.counter;var Gn={exports:{}},pi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vi=pi,bi=vi;function Bn(){}function Xn(){}Xn.resetWarningCache=Bn;var gi=function(){function t(r,a,i,o,s,l){if(l!==bi){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Xn,resetWarningCache:Bn};return n.PropTypes=n,n};Gn.exports=gi();var hi=Gn.exports;const g=tr(hi);function un(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?un(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vt(t){"@babel/helpers - typeof";return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vt(t)}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yi(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function xi(t,e){if(t==null)return{};var n=yi(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ge(t){return wi(t)||ki(t)||Ai(t)||Si()}function wi(t){if(Array.isArray(t))return he(t)}function ki(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ai(t,e){if(t){if(typeof t=="string")return he(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(t,e)}}function he(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Si(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ci(t){var e,n=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,u=t.pulse,p=t.fixedWidth,v=t.inverse,w=t.border,h=t.listItem,y=t.flip,O=t.size,x=t.rotation,P=t.pull,N=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":v,"fa-border":w,"fa-li":h,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},it(e,"fa-".concat(O),typeof O<"u"&&O!==null),it(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),it(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),it(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(z){return N[z]?z:null}).filter(function(z){return z})}function Oi(t){return t=t-0,t===t}function qn(t){return Oi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Pi=["style"];function Ei(t){return t.charAt(0).toUpperCase()+t.slice(1)}function zi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=qn(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?e[Ei(a)]=i:e[a]=i,e},{})}function Kn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Kn(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=zi(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[qn(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=xi(n,Pi);return a.attrs.style=B(B({},a.attrs.style),o),t.apply(void 0,[e.tag,B(B({},a.attrs),s)].concat(ge(r)))}var Qn=!1;try{Qn=!0}catch{}function Mi(){if(!Qn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dn(t){if(t&&Vt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(be.icon)return be.icon(t);if(t===null)return null;if(t&&Vt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function re(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?it({},t,e):{}}var Kt=mn.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,i=t.className,o=t.title,s=t.titleId,l=t.maskId,c=dn(n),f=re("classes",[].concat(ge(Ci(t)),ge(i.split(" ")))),u=re("transform",typeof t.transform=="string"?be.transform(t.transform):t.transform),p=re("mask",dn(r)),v=mi(c,B(B(B(B({},f),u),p),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!v)return Mi("Could not find icon",c),null;var w=v.abstract,h={ref:e};return Object.keys(t).forEach(function(y){Kt.defaultProps.hasOwnProperty(y)||(h[y]=t[y])}),Ni(w[0],h)});Kt.displayName="FontAwesomeIcon";Kt.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};Kt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ni=Kn.bind(null,mn.createElement);export{ji as A,Ti as B,Xi as C,Kt as F,Li as a,Bi as b,eo as c,Zi as d,Tr as e,ro as f,Wi as g,Di as h,Ki as i,Hi as j,ao as k,no as l,io as m,_i as n,Ri as o,Gi as p,$i as q,Ui as r,Qi as s,Vi as t,Ji as u,Mt as v,qi as w,to as x,Yi as y,Fi as z};
