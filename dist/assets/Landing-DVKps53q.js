import{r as K,o as ie,j as l,A as Yt,L as Kt}from"./index-dHb1JtMz.js";import{F as q,E as se,y as Je,w as Ut,v as Xt}from"./index.es-PNSLi6sD.js";import{G as Qt}from"./GoogleItems-jElv85qQ.js";import{B as Vt}from"./Brands-fp74GVpy.js";import{O as Zt}from"./OurComponentSection--V5zussx.js";import{i as Jt}from"./gallery-b7xpudEi.js";import"./autoplay-X6fdvKDg.js";/* empty css               *//* empty css                   */import"./OurServices-urLsnuM4.js";function er({url:e}){K.useEffect(()=>{const t=document.querySelector("head"),r=document.createElement("script");return r.setAttribute("src",e),t.appendChild(r),()=>{t.removeChild(r)}},[e])}const tr=[{id:1,ask:"I'd just like a quote, can you provide an estimate without an in-home or virtual consultation?",answer:"Every home and project is different. We can’t recommend the best design and construction solutions until we truly understand your goals, budget, and timetable. Besides, purchasing remodeling and replacement services aren’t like buying a commodity product.  We both want to make sure we are a good fit."},{id:2,ask:"Does Home Worx offer financing for roof replacement?",answer:"Home Worx works with a number of major finance companies to offer its clients the best rates available. Take advantage of current financing offers like up to 60 months with no interest and no payments. Home Worx also allows homeowners to finance insurance claim projects, so you can keep the full amount of your claim and make monthly payments instead."},{id:3,ask:"If I have storm damage to my roof, siding, windows and gutters and deck, will it be readily apparent?",answer:"Home Worx’s storm specialists are trained to identify surface damage from severe weather that may not be apparent initially but will continue to deteriorate over time. These telltale signs of storm damage may not be visible from the ground. Homeowners expose themselves to unnecessary risks when they climb onto their roofs and attempt to photograph storm damage."},{id:4,ask:"Will you fix my roof leak?",answer:"Roofs can leak from storm damage, faulty details or age. And you don’t need to see indoor water spots to have a problem. Hidden leaks can rot wood sheathing and framing, degrade insulation and fill wall and ceiling cavities with dangerous mold. Let the pros at Home Worx find the source and fix it for good."},{id:5,ask:"What brands of roofing products does Home Worx sell and install?",answer:"Home Worx is a preferred installer for GAF, IKO, Certainteed, Malarky, Owens Corning, Tamko, Edco, Boral and DECRA brands of roofing.  These products range from architectural shingles, shakes, clay tile and slate and are available in many colors. We will help match you with the perfect product for your home with an unbiased and educational approach."},{id:6,ask:"How long should an asphalt shingle roof last on a Texas home?",answer:"Due to the harsh conditions of our weather, an average roof in Texas will last about 20 years. It's at the end of the roof's life when the problems begin. Moisture intrusion usually starts with the flashing on your roof."},{id:7,ask:"What could shorten the life of an asphalt shingle roof?",answer:"Inadequate attic ventilation or excess moisture can deteriorate roof sheathing and shingles from below. Overhanging trees that drop debris and slow drying can lead to moss and mold that can deteriorate roofing. Walking on a roof in extremely hot or cold weather can damage shingles."},{id:8,ask:"How does steel roofing compare to asphalt shingle, cedar shake and slate and tile roofing?",answer:"Steel roofing is more expensive than asphalt shingles but less expensive than slate or tile. Steel roofs last two to three times as long as other types of roofing. Transferable warranties can be 50 years to life and are not prorated."}];var E=function(){return E=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},E.apply(this,arguments)};function Se(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,o;n<s;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var w="-ms-",ae="-moz-",p="-webkit-",ht="comm",Ne="rule",qe="decl",rr="@import",mt="@keyframes",nr="@layer",gt=Math.abs,Ye=String.fromCharCode,We=Object.assign;function sr(e,t){return I(e,0)^45?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}function xt(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function u(e,t,r){return e.replace(t,r)}function xe(e,t,r){return e.indexOf(t,r)}function I(e,t){return e.charCodeAt(t)|0}function U(e,t,r){return e.slice(t,r)}function O(e){return e.length}function yt(e){return e.length}function oe(e,t){return t.push(e),e}function or(e,t){return e.map(t).join("")}function et(e,t){return e.filter(function(r){return!D(r,t)})}var Ce=1,X=1,wt=0,R=0,C=0,J="";function Ae(e,t,r,n,s,o,a,i){return{value:e,root:t,parent:r,type:n,props:s,children:o,line:Ce,column:X,length:a,return:"",siblings:i}}function F(e,t){return We(Ae("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=F(e.root,{children:[e]});oe(e,e.siblings)}function ar(){return C}function ir(){return C=R>0?I(J,--R):0,X--,C===10&&(X=1,Ce--),C}function $(){return C=R<wt?I(J,R++):0,X++,C===10&&(X=1,Ce++),C}function L(){return I(J,R)}function ye(){return R}function Ie(e,t){return U(J,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cr(e){return Ce=X=1,wt=O(J=e),R=0,[]}function lr(e){return J="",e}function Oe(e){return xt(Ie(R-1,Be(e===91?e+2:e===40?e+1:e)))}function ur(e){for(;(C=L())&&C<33;)$();return Fe(e)>2||Fe(C)>3?"":" "}function fr(e,t){for(;--t&&$()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return Ie(e,ye()+(t<6&&L()==32&&$()==32))}function Be(e){for(;$();)switch(C){case e:return R;case 34:case 39:e!==34&&e!==39&&Be(C);break;case 40:e===41&&Be(e);break;case 92:$();break}return R}function dr(e,t){for(;$()&&e+C!==57;)if(e+C===84&&L()===47)break;return"/*"+Ie(t,R-1)+"*"+Ye(e===47?e:$())}function pr(e){for(;!Fe(L());)$();return Ie(e,R)}function hr(e){return lr(we("",null,null,null,[""],e=cr(e),0,[0],e))}function we(e,t,r,n,s,o,a,i,c){for(var f=0,h=0,g=a,x=0,m=0,v=0,k=1,_=1,N=1,S=0,b="",j=s,A=o,y=n,d=b;_;)switch(v=S,S=$()){case 40:if(v!=108&&I(d,g-1)==58){xe(d+=u(Oe(S),"&","&\f"),"&\f",gt(f?i[f-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:d+=Oe(S);break;case 9:case 10:case 13:case 32:d+=ur(v);break;case 92:d+=fr(ye()-1,7);continue;case 47:switch(L()){case 42:case 47:oe(mr(dr($(),ye()),t,r,c),c);break;default:d+="/"}break;case 123*k:i[f++]=O(d)*N;case 125*k:case 59:case 0:switch(S){case 0:case 125:_=0;case 59+h:N==-1&&(d=u(d,/\f/g,"")),m>0&&O(d)-g&&oe(m>32?rt(d+";",n,r,g-1,c):rt(u(d," ","")+";",n,r,g-2,c),c);break;case 59:d+=";";default:if(oe(y=tt(d,t,r,f,h,s,i,b,j=[],A=[],g,o),o),S===123)if(h===0)we(d,t,y,y,j,o,g,i,A);else switch(x===99&&I(d,3)===110?100:x){case 100:case 108:case 109:case 115:we(e,y,y,n&&oe(tt(e,y,y,0,0,s,i,b,s,j=[],g,A),A),s,A,g,i,n?j:A);break;default:we(d,y,y,y,[""],A,0,i,A)}}f=h=m=0,k=N=1,b=d="",g=a;break;case 58:g=1+O(d),m=v;default:if(k<1){if(S==123)--k;else if(S==125&&k++==0&&ir()==125)continue}switch(d+=Ye(S),S*k){case 38:N=h>0?1:(d+="\f",-1);break;case 44:i[f++]=(O(d)-1)*N,N=1;break;case 64:L()===45&&(d+=Oe($())),x=L(),h=g=O(b=d+=pr(ye())),S++;break;case 45:v===45&&O(d)==2&&(k=0)}}return o}function tt(e,t,r,n,s,o,a,i,c,f,h,g){for(var x=s-1,m=s===0?o:[""],v=yt(m),k=0,_=0,N=0;k<n;++k)for(var S=0,b=U(e,x+1,x=gt(_=a[k])),j=e;S<v;++S)(j=xt(_>0?m[S]+" "+b:u(b,/&\f/g,m[S])))&&(c[N++]=j);return Ae(e,t,r,s===0?Ne:i,c,f,h,g)}function mr(e,t,r,n){return Ae(e,t,r,ht,Ye(ar()),U(e,2,-2),0,n)}function rt(e,t,r,n,s){return Ae(e,t,r,qe,U(e,0,n),U(e,n+1,-1),n,s)}function bt(e,t,r){switch(sr(e,t)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+e+e;case 4789:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+ae+e+w+e+e;case 5936:switch(I(e,t+11)){case 114:return p+e+w+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+w+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+w+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return p+e+w+e+e;case 6165:return p+e+w+"flex-"+e+e;case 5187:return p+e+u(e,/(\w+).+(:[^]+)/,p+"box-$1$2"+w+"flex-$1$2")+e;case 5443:return p+e+w+"flex-item-"+u(e,/flex-|-self/g,"")+(D(e,/flex-|baseline/)?"":w+"grid-row-"+u(e,/flex-|-self/g,""))+e;case 4675:return p+e+w+"flex-line-pack"+u(e,/align-content|flex-|-self/g,"")+e;case 5548:return p+e+w+u(e,"shrink","negative")+e;case 5292:return p+e+w+u(e,"basis","preferred-size")+e;case 6060:return p+"box-"+u(e,"-grow","")+p+e+w+u(e,"grow","positive")+e;case 4554:return p+u(e,/([^-])(transform)/g,"$1"+p+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,p+"box-pack:$3"+w+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+e+e;case 4200:if(!D(e,/flex-|baseline/))return w+"grid-column-align"+U(e,t)+e;break;case 2592:case 3360:return w+u(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,s){return t=s,D(n.props,/grid-\w+-end/)})?~xe(e+(r=r[t].value),"span",0)?e:w+u(e,"-start","")+e+w+"grid-row-span:"+(~xe(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(e,/\d+/))+";":w+u(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?e:w+u(u(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-t>6)switch(I(e,t+1)){case 109:if(I(e,t+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+p+"$2-$3$1"+ae+(I(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xe(e,"stretch",0)?bt(u(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return u(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,a,i,c,f){return w+s+":"+o+f+(a?w+s+"-span:"+(i?c:+c-+o)+f:"")+e});case 4949:if(I(e,t+6)===121)return u(e,":",":"+p)+e;break;case 6444:switch(I(e,I(e,14)===45?18:11)){case 120:return u(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(I(e,14)===45?"inline-":"")+"box$3$1"+p+"$2$3$1"+w+"$2box$3")+e;case 100:return u(e,":",":"+w)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(e,"scroll-","scroll-snap-")+e}return e}function je(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function gr(e,t,r,n){switch(e.type){case nr:if(e.children.length)break;case rr:case qe:return e.return=e.return||e.value;case ht:return"";case mt:return e.return=e.value+"{"+je(e.children,n)+"}";case Ne:if(!O(e.value=e.props.join(",")))return""}return O(r=je(e.children,n))?e.return=e.value+"{"+r+"}":""}function xr(e){var t=yt(e);return function(r,n,s,o){for(var a="",i=0;i<t;i++)a+=e[i](r,n,s,o)||"";return a}}function yr(e){return function(t){t.root||(t=t.return)&&e(t)}}function wr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case qe:e.return=bt(e.value,e.length,r);return;case mt:return je([F(e,{value:u(e.value,"@","@"+p)})],n);case Ne:if(e.length)return or(r=e.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(F(e,{props:[u(s,/:(read-\w+)/,":"+ae+"$1")]})),M(F(e,{props:[s]})),We(e,{props:et(r,n)});break;case"::placeholder":M(F(e,{props:[u(s,/:(plac\w+)/,":"+p+"input-$1")]})),M(F(e,{props:[u(s,/:(plac\w+)/,":"+ae+"$1")]})),M(F(e,{props:[u(s,/:(plac\w+)/,w+"input-$1")]})),M(F(e,{props:[s]})),We(e,{props:et(r,n)});break}return""})}}var br={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},Q=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",vt="active",St="data-styled-version",Ee="6.1.8",Ke=`/*!sc*/
`,Ue=typeof window<"u"&&"HTMLElement"in window,vr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),_e=Object.freeze([]),V=Object.freeze({});function Sr(e,t,r){return r===void 0&&(r=V),e.theme!==r.theme&&e.theme||t||r.theme}var jt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kr=/(^-|-$)/g;function nt(e){return e.replace(jr,"-").replace(kr,"")}var Nr=/(a)(d)/gi,me=52,st=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ge(e){var t,r="";for(t=Math.abs(e);t>me;t=t/me|0)r=st(t%me)+r;return(st(t%me)+r).replace(Nr,"$1-$2")}var Te,kt=5381,Y=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Nt=function(e){return Y(kt,e)};function Cr(e){return Ge(Nt(e)>>>0)}function Ar(e){return e.displayName||e.name||"Component"}function De(e){return typeof e=="string"&&!0}var Ct=typeof Symbol=="function"&&Symbol.for,At=Ct?Symbol.for("react.memo"):60115,Ir=Ct?Symbol.for("react.forward_ref"):60112,Er={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},It={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((Te={})[Ir]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Te[At]=It,Te);function ot(e){return("type"in(t=e)&&t.type.$$typeof)===At?It:"$$typeof"in e?Pr[e.$$typeof]:Er;var t}var Rr=Object.defineProperty,$r=Object.getOwnPropertyNames,at=Object.getOwnPropertySymbols,Or=Object.getOwnPropertyDescriptor,Tr=Object.getPrototypeOf,it=Object.prototype;function Et(e,t,r){if(typeof t!="string"){if(it){var n=Tr(t);n&&n!==it&&Et(e,n,r)}var s=$r(t);at&&(s=s.concat(at(t)));for(var o=ot(e),a=ot(t),i=0;i<s.length;++i){var c=s[i];if(!(c in _r||r&&r[c]||a&&c in a||o&&c in o)){var f=Or(t,c);try{Rr(e,c,f)}catch{}}}}return e}function Z(e){return typeof e=="function"}function Xe(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ct(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Le(e,t,r){if(r===void 0&&(r=!1),!r&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Le(e[n],t[n]);else if(ce(t))for(var n in t)e[n]=Le(e[n],t[n]);return e}function Qe(e,t){Object.defineProperty(e,"toString",{value:t})}function le(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;t>=o;)if((o<<=1)<0)throw le(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(i,r[a])&&(this.groupSizes[t]++,i++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r;this.groupSizes[t]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],s=this.indexOfGroup(t),o=s+n,a=s;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(Ke);return r},e}(),be=new Map,ke=new Map,ve=1,ge=function(e){if(be.has(e))return be.get(e);for(;ke.has(ve);)ve++;var t=ve++;return be.set(e,t),ke.set(t,e),t},zr=function(e,t){ve=t+1,be.set(e,t),ke.set(t,e)},Wr="style[".concat(Q,"][").concat(St,'="').concat(Ee,'"]'),Fr=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Br=function(e,t,r){for(var n,s=r.split(","),o=0,a=s.length;o<a;o++)(n=s[o])&&e.registerName(t,n)},Gr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ke),s=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var c=i.match(Fr);if(c){var f=0|parseInt(c[1],10),h=c[2];f!==0&&(zr(h,f),Br(e,h,c[3]),e.getTag().insertRules(f,s)),s.length=0}else s.push(i)}}};function Lr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _t=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(i){var c=Array.from(i.querySelectorAll("style[".concat(Q,"]")));return c[c.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(Q,vt),n.setAttribute(St,Ee);var a=Lr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Hr=function(){function e(t){this.element=_t(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var a=n[s];if(a.ownerNode===r)return a}throw le(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Mr=function(){function e(t){this.element=_t(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),lt=Ue,Yr={isServer:!Ue,useCSSOMInjection:!vr},Pt=function(){function e(t,r,n){t===void 0&&(t=V),r===void 0&&(r={});var s=this;this.options=E(E({},Yr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ue&&lt&&(lt=!1,function(o){for(var a=document.querySelectorAll(Wr),i=0,c=a.length;i<c;i++){var f=a[i];f&&f.getAttribute(Q)!==vt&&(Gr(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this)),Qe(this,function(){return function(o){for(var a=o.getTag(),i=a.length,c="",f=function(g){var x=function(N){return ke.get(N)}(g);if(x===void 0)return"continue";var m=o.names.get(x),v=a.getGroup(g);if(m===void 0||v.length===0)return"continue";var k="".concat(Q,".g").concat(g,'[id="').concat(x,'"]'),_="";m!==void 0&&m.forEach(function(N){N.length>0&&(_+="".concat(N,","))}),c+="".concat(v).concat(k,'{content:"').concat(_,'"}').concat(Ke)},h=0;h<i;h++)f(h);return c}(s)})}return e.registerId=function(t){return ge(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(E(E({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new qr(s):n?new Hr(s):new Mr(s)}(this.options),new Dr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ge(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ge(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ge(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Kr=/&/g,Ur=/^\s*\/\/.*$/gm;function Rt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Rt(r.children,t)),r})}function Xr(e){var t,r,n,s=e===void 0?V:e,o=s.options,a=o===void 0?V:o,i=s.plugins,c=i===void 0?_e:i,f=function(x,m,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):x},h=c.slice();h.push(function(x){x.type===Ne&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Kr,r).replace(n,f))}),a.prefix&&h.push(wr),h.push(gr);var g=function(x,m,v,k){m===void 0&&(m=""),v===void 0&&(v=""),k===void 0&&(k="&"),t=k,r=m,n=new RegExp("\\".concat(r,"\\b"),"g");var _=x.replace(Ur,""),N=hr(v||m?"".concat(v," ").concat(m," { ").concat(_," }"):_);a.namespace&&(N=Rt(N,a.namespace));var S=[];return je(N,xr(h.concat(yr(function(b){return S.push(b)})))),S};return g.hash=c.length?c.reduce(function(x,m){return m.name||le(15),Y(x,m.name)},kt).toString():"",g}var Qr=new Pt,He=Xr(),$t=ie.createContext({shouldForwardProp:void 0,styleSheet:Qr,stylis:He});$t.Consumer;ie.createContext(void 0);function ut(){return K.useContext($t)}var Vr=function(){function e(t,r){var n=this;this.inject=function(s,o){o===void 0&&(o=He);var a=n.name+o.hash;s.hasNameForId(n.id,a)||s.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Qe(this,function(){throw le(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=He),this.name+t.hash},e}(),Zr=function(e){return e>="A"&&e<="Z"};function ft(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Zr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ot=function(e){return e==null||e===!1||e===""},Tt=function(e){var t,r,n=[];for(var s in e){var o=e[s];e.hasOwnProperty(s)&&!Ot(o)&&(Array.isArray(o)&&o.isCss||Z(o)?n.push("".concat(ft(s),":"),o,";"):ce(o)?n.push.apply(n,Se(Se(["".concat(s," {")],Tt(o),!1),["}"],!1)):n.push("".concat(ft(s),": ").concat((t=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in br||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function H(e,t,r,n){if(Ot(e))return[];if(Xe(e))return[".".concat(e.styledComponentId)];if(Z(e)){if(!Z(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var s=e(t);return H(s,t,r,n)}var o;return e instanceof Vr?r?(e.inject(r,n),[e.getName(n)]):[e]:ce(e)?Tt(e):Array.isArray(e)?Array.prototype.concat.apply(_e,e.map(function(a){return H(a,t,r,n)})):[e.toString()]}function Jr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Z(r)&&!Xe(r))return!1}return!0}var en=Nt(Ee),tn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Jr(t),this.componentId=r,this.baseHash=Y(en,r),this.baseStyle=n,Pt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=G(s,this.staticRulesId);else{var o=ct(H(this.rules,t,r,n)),a=Ge(Y(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,i)}s=G(s,a),this.staticRulesId=a}else{for(var c=Y(this.baseHash,n.hash),f="",h=0;h<this.rules.length;h++){var g=this.rules[h];if(typeof g=="string")f+=g;else if(g){var x=ct(H(g,t,r,n));c=Y(c,x+h),f+=x}}if(f){var m=Ge(c>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,n(f,".".concat(m),void 0,this.componentId)),s=G(s,m)}}return s},e}(),Dt=ie.createContext(void 0);Dt.Consumer;var ze={};function rn(e,t,r){var n=Xe(e),s=e,o=!De(e),a=t.attrs,i=a===void 0?_e:a,c=t.componentId,f=c===void 0?function(j,A){var y=typeof j!="string"?"sc":nt(j);ze[y]=(ze[y]||0)+1;var d="".concat(y,"-").concat(Cr(Ee+y+ze[y]));return A?"".concat(A,"-").concat(d):d}(t.displayName,t.parentComponentId):c,h=t.displayName,g=h===void 0?function(j){return De(j)?"styled.".concat(j):"Styled(".concat(Ar(j),")")}(e):h,x=t.displayName&&t.componentId?"".concat(nt(t.displayName),"-").concat(t.componentId):t.componentId||f,m=n&&s.attrs?s.attrs.concat(i).filter(Boolean):i,v=t.shouldForwardProp;if(n&&s.shouldForwardProp){var k=s.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;v=function(j,A){return k(j,A)&&_(j,A)}}else v=k}var N=new tn(r,x,n?s.componentStyle:void 0);function S(j,A){return function(y,d,ee){var ue=y.attrs,Ft=y.componentStyle,Bt=y.defaultProps,Gt=y.foldedComponentIds,Lt=y.styledComponentId,Ht=y.target,Mt=ie.useContext(Dt),qt=ut(),Pe=y.shouldForwardProp||qt.shouldForwardProp,Ve=Sr(d,Mt,Bt)||V,T=function(de,re,pe){for(var ne,B=E(E({},re),{className:void 0,theme:pe}),$e=0;$e<de.length;$e+=1){var he=Z(ne=de[$e])?ne(B):ne;for(var W in he)B[W]=W==="className"?G(B[W],he[W]):W==="style"?E(E({},B[W]),he[W]):he[W]}return re.className&&(B.className=G(B.className,re.className)),B}(ue,d,Ve),fe=T.as||Ht,te={};for(var z in T)T[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&T.theme===Ve||(z==="forwardedAs"?te.as=T.forwardedAs:Pe&&!Pe(z,fe)||(te[z]=T[z]));var Ze=function(de,re){var pe=ut(),ne=de.generateAndInjectStyles(re,pe.styleSheet,pe.stylis);return ne}(Ft,T),Re=G(Gt,Lt);return Ze&&(Re+=" "+Ze),T.className&&(Re+=" "+T.className),te[De(fe)&&!jt.has(fe)?"class":"className"]=Re,te.ref=ee,K.createElement(fe,te)}(b,j,A)}S.displayName=g;var b=ie.forwardRef(S);return b.attrs=m,b.componentStyle=N,b.displayName=g,b.shouldForwardProp=v,b.foldedComponentIds=n?G(s.foldedComponentIds,s.styledComponentId):"",b.styledComponentId=x,b.target=n?s.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?function(A){for(var y=[],d=1;d<arguments.length;d++)y[d-1]=arguments[d];for(var ee=0,ue=y;ee<ue.length;ee++)Le(A,ue[ee],!0);return A}({},s.defaultProps,j):j}}),Qe(b,function(){return".".concat(b.styledComponentId)}),o&&Et(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function dt(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var pt=function(e){return Object.assign(e,{isCss:!0})};function nn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Z(e)||ce(e))return pt(H(dt(_e,Se([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?H(n):pt(H(dt(n,t)))}function Me(e,t,r){if(r===void 0&&(r=V),!t)throw le(1,t);var n=function(s){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,nn.apply(void 0,Se([s],o,!1)))};return n.attrs=function(s){return Me(e,t,E(E({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Me(e,t,E(E({},r),s))},n}var zt=function(e){return Me(rn,e)},Wt=zt;jt.forEach(function(e){Wt[e]=zt(e)});function sn(){const e=K.useRef(null),t=(o,a)=>{var i=o.target;r(i,a)},r=function(o,a){const i=o.dataset.pos;i&&a.forEach(c=>{var f=c.dataset.pos;c.dataset.pos=n(f,i,a)})},n=function(o,a,i){const c=o-a;return c>2?c-i.length+2:c<-2?i.length-2+c:c},s=()=>{const o=Array.from(document.querySelectorAll(".carousel__item")),i=o.find(c=>c.dataset.pos==0).nextElementSibling||e.current.firstElementChild;r(i,o)};return K.useEffect(()=>{const o=Array.from(document.querySelectorAll(".carousel__item"));e.current.addEventListener("click",i=>t(i,o));const a=setInterval(s,5e3);return()=>{e.current.removeEventListener("click",t),clearInterval(a)}},[]),l.jsx(on,{className:"w-full aspect-[4/2]",children:l.jsx("ul",{ref:e,className:"carousel__list",children:Jt.map((o,a)=>l.jsx("li",{className:"carousel__item","data-pos":a-2,children:l.jsx("img",{className:"w-full h-full object-cover rounded-lg select-none",src:o.src,alt:o.alt})},o.id))})})}const on=Wt.div`
    display: flex;
    align-items: center;

    & .carousel__list {
        display: flex;
        list-style: none;
        position: relative;
        width: 100%;
        height: 100%;
        justify-content: center;
        perspective: 100%;
    }

    & .carousel__item {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0px;
        width: calc(100% - (100px * 4));
        height: 100%;
        border-radius: 12px;
        box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
        position: absolute;
        transition: all 0.3s ease-in;
        opacity: 0;
        cursor: pointer;

        &:nth-child(1) {
            background: linear-gradient(45deg, #2d35eb 0%, #904ed4 100%);
        }
        &:nth-child(2) {
            background: linear-gradient(45deg, #2d35eb 0%, #fdbb2d 100%);
        }
        &:nth-child(3) {
            background: linear-gradient(45deg, #2d35eb 0%, #22c1c3 100%);
        }
        &:nth-child(4) {
            background: linear-gradient(45deg, #fdbb2d 0%, #904ed4 100%);
        }
        &:nth-child(5) {
            background: linear-gradient(45deg, #22c1c3 0%, #904ed4 100%);
        }

        &[data-pos="0"] {
            z-index: 5;
            opacity: 1;
            cursor: default;
        }

        &[data-pos="-1"],
        &[data-pos="1"] {
            opacity: 0.7;
            filter: blur(1px) grayscale(10%);
        }

        &[data-pos="-1"] {
            transform: translateX(-100px) scale(0.9);
            z-index: 4;
        }

        &[data-pos="1"] {
            transform: translateX(100px) scale(0.9);
            z-index: 4;
        }

        &[data-pos="-2"],
        &[data-pos="2"] {
            opacity: 0.4;
            filter: blur(3px) grayscale(20%);
        }

        &[data-pos="-2"] {
            transform: translateX(-200px) scale(0.8);
            z-index: 3;
        }

        &[data-pos="2"] {
            transform: translateX(200px) scale(0.8);
            z-index: 3;
        }
    }
`;function yn(){return er({url:"https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=B5rx9uOVdIreP2QIxCFJp"}),l.jsxs(Yt,{children:[l.jsxs("section",{className:"relative overflow-hidden px-[--padding]",children:[l.jsx("div",{className:"absolute inset-0 w-full h-full ",children:l.jsx("img",{src:"/img/22.png",className:"w-full h-full object-cover object-top"})}),l.jsxs("div",{className:"relative container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-5 pt-32 pb-16 w-full h-full",children:[l.jsxs("div",{className:"flex flex-col justify-center gap-5",children:[l.jsx("h3",{className:"font-title text-white text-3xl sm:text-5xl text-center sm:text-left text-balance max-w-[500px]",children:"Get a beautifull new roof that will last"}),l.jsx("p",{className:"max-w-[600px] font-content text-white text-pretty text-center sm:text-left text-lg",style:{textShadow:"1px 1px 1px black, -1px -1px 1px black"},children:"We are the roofing construction experts, providing expert workmanship and project management to ensure a quality roof and stress-free experience for you. We use only high-quality materials and provide a level of profesionalism that's a cut above our competitors."}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-5",children:[l.jsx("a",{className:"flex justify-center items-center bg-[--color1-bg] font-bold font-title uppercase text-center text-[--color1-txt] max-w-96 px-5 py-3 rounded-full transition hover:scale-105",href:"#section-instant-quote",children:"Instant online roof quote"}),l.jsx(Kt,{className:"flex justify-center items-center border-2 border-[--color1-bg] font-bold font-title uppercase text-center text-white max-w-96 px-5 py-3 rounded-full transition hover:scale-105",style:{textShadow:"1px 1px 1px black, -1px -1px 1px black"},to:"/roof-designer",children:"Visualize your new roof"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[l.jsxs("div",{className:"flex text-lg",children:[l.jsx(q,{icon:se,className:"text-yellow-400"}),l.jsx(q,{icon:se,className:"text-yellow-400"}),l.jsx(q,{icon:se,className:"text-yellow-400"}),l.jsx(q,{icon:se,className:"text-yellow-400"}),l.jsx(q,{icon:se,className:"text-yellow-400"})]}),l.jsx("p",{className:"font-content text-white text-center sm:text-left text-sm sm:text-base",style:{textShadow:"1px 1px 1px black, -1px -1px 1px black"},children:"300+ 5-star reviews (Google, Home, Advisor, BBB, Houz)"})]})]}),l.jsx("p",{className:"max-w-80 font-content text-center text-white text-balance text-sm sm:text-lg opacity-8",style:{textShadow:"1px 0 1px black, -1px 0 1px black, 0 1px 1px black, 0 -1px 1px black"},children:"Start Your Roofing Project Today! 🚀 Get Your Instant Roof Quote"})]})]}),l.jsx("section",{className:"relative overflow-hidden",id:"section-instant-quote",children:l.jsx("div",{className:"w-full h-full",id:"roof-quote-pro-embedded"})}),l.jsx("section",{className:"p-[--padding] ",children:l.jsx("div",{className:"container",children:l.jsx(sn,{})})}),l.jsx("section",{className:"px-[--padding] py-10",children:l.jsxs("div",{className:"container ",children:[l.jsxs("article",{className:"flex flex-col items-center gap-5",children:[l.jsx("h3",{className:"w-full font-title text-4xl text-center",children:"Customer Stories"}),l.jsx("p",{className:"font-title2 text-lg text-pretty text-center sm:px-20",children:"Home Worx is the local roofer that homeowners, homeowner associations, and busi- nesses trust. Weave already replaced thousands of roofs for homeowners in the Dallas area and across the United States, and we'd like the ooportunity to re-roof yours."})]}),l.jsx(Qt,{classNameWrapper:"mt-10"})]})}),l.jsx("section",{className:"px-[--padding]",children:l.jsx("div",{className:"container",children:l.jsx(Vt,{})})}),l.jsx("section",{className:"pt-14",children:l.jsx(Zt,{})}),l.jsx("section",{className:"px-[--padding] py-10 bg-[--color4-bg]",children:l.jsxs("div",{className:"container flex flex-col gap-10",children:[l.jsx("h3",{className:"font-title text-[--color4-txt2] text-center text-3xl sm:text-5xl",children:"FAQs"}),l.jsx("div",{className:"flex flex-col gap-5",children:tr.map(e=>l.jsx(an,{title:e.ask,text:e.answer},e.id))})]})})]})}function an({title:e,text:t}){const[r,n]=K.useState(!1);return l.jsxs("div",{className:"border-2 border-[--color4-txt2] rounded-3xl",children:[l.jsxs("button",{onClick:()=>n(!r),className:Je("flex justify-between items-center w-full px-5 py-3 opacity-90 border-b-2 border-[--color4-txt2] rounded-3xl transition-none",{"border-b-0 opacity-70":!r}),children:[l.jsx("span",{className:" font-title text-[--color4-txt] text-left text-lg sm:text-xl",children:e}),l.jsx(q,{icon:r?Ut:Xt,className:"text-[--color4-txt] text-xl"})]}),l.jsx("div",{className:Je("w-full max-h-96 overflow-hidden transition-all",{"max-h-0":!r}),children:l.jsx("p",{className:"p-5 font-content text-[--color4-txt] sm:text-lg opacity-70",children:t})})]})}export{yn as default};