import{r as d,e as h,a as zt,j as a,A as qt,m as Gt}from"./index-UvTf3KTY.js";import{F as st,t as Ut,u as Kt,b as $t,c as Jt,v as Qt,B as Zt}from"./index.es-ZfUNCZdG.js";import{S as en}from"./SectionContact-tO1ZaVG8.js";/* empty css                   */import"./social-Q9tc5MZF.js";import"./mail-tTDsGDZC.js";function _(){return _=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},_.apply(this,arguments)}function Nt(e,n){if(e==null)return{};var i,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n.indexOf(i=c[r])>=0||(o[i]=e[i]);return o}function Ve(e){var n=d.useRef({fn:e,curr:void 0}).current;if(n.fn=e,!n.curr){var i=Object.create(null);Object.keys(e).forEach(function(r){i[r]=function(){var o;return(o=n.fn[r]).call.apply(o,[n.fn].concat([].slice.call(arguments)))}}),n.curr=i}return n.curr}function kt(e){return d.useReducer(function(n,i){return _({},n,typeof i=="function"?i(n):i)},e)}var Ot=d.createContext(void 0),ge=typeof window<"u"&&"ontouchstart"in window,Pt=function(e,n,i){return Math.max(Math.min(e,i),n)},Ct=function(e,n,i){return n===void 0&&(n=0),i===void 0&&(i=0),Pt(e,1*(1-i),Math.max(6,n)*(1+i))},Yt=typeof window>"u"||/ServerSideRendering/.test(navigator&&navigator.userAgent)?d.useEffect:d.useLayoutEffect;function Je(e,n,i){var r=d.useRef(n);r.current=n,d.useEffect(function(){function o(c){r.current(c)}return e&&window.addEventListener(e,o,i),function(){e&&window.removeEventListener(e,o)}},[e])}var tn=["container"];function nn(e){var n=e.container,i=n===void 0?document.body:n,r=Nt(e,tn);return zt.createPortal(h.createElement("div",_({},r)),i)}function rn(e){return h.createElement("svg",_({width:"44",height:"44",viewBox:"0 0 768 768"},e),h.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function an(e){return h.createElement("svg",_({width:"44",height:"44",viewBox:"0 0 768 768"},e),h.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function on(e){return h.createElement("svg",_({width:"44",height:"44",viewBox:"0 0 768 768"},e),h.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function ln(){return d.useEffect(function(){var e=document.body.style,n=e.overflow;return e.overflow="hidden",function(){e.overflow=n}},[]),null}function It(e){var n=e.touches[0],i=n.clientX,r=n.clientY;if(e.touches.length>=2){var o=e.touches[1],c=o.clientX,l=o.clientY;return[(i+c)/2,(r+l)/2,Math.sqrt(Math.pow(c-i,2)+Math.pow(l-r,2))]}return[i,r,0]}var Ne=function(e,n,i,r){var o=i*n,c=(o-r)/2,l=void 0,u=e;return o<=r?(l=1,u=0):e>0&&c-e<=0?(l=2,u=c):e<0&&c+e<=0&&(l=3,u=-c),[l,u]};function Mt(e,n,i,r,o,c,l,u,g,v){l===void 0&&(l=innerWidth/2),u===void 0&&(u=innerHeight/2),g===void 0&&(g=0),v===void 0&&(v=0);var m=Ne(e,c,i,innerWidth)[0],x=Ne(n,c,r,innerHeight),M=innerWidth/2,N=innerHeight/2;return{x:l-c/o*(l-(M+e))-M+(r/i>=3&&i*c===innerWidth?0:m?g/2:g),y:u-c/o*(u-(N+n))-N+(x[0]?v/2:v),lastCX:l,lastCY:u}}function Xt(e,n,i){var r=e%180!=0;return r?[i,n,r]:[n,i,r]}function St(e,n,i){var r=Xt(i,innerWidth,innerHeight),o=r[0],c=r[1],l=0,u=o,g=c,v=e/n*c,m=n/e*o;return e<o&&n<c?(u=e,g=n):e<o&&n>=c?u=v:e>=o&&n<c||e/n>o/c?g=m:n/e>=3&&!r[2]?l=((g=m)-c)/2:u=v,{width:u,height:g,x:0,y:l,pause:!0}}function Et(e,n){var i=n.leading,r=i!==void 0&&i,o=n.maxWait,c=n.wait,l=c===void 0?o||0:c,u=d.useRef(e);u.current=e;var g=d.useRef(0),v=d.useRef(),m=function(){return v.current&&clearTimeout(v.current)},x=d.useCallback(function(){var M=[].slice.call(arguments),N=Date.now();function I(){g.current=N,m(),u.current.apply(null,M)}var E=g.current,j=N-E;if(E===0&&(r&&I(),g.current=N),o!==void 0){if(j>o)return void I()}else j<l&&(g.current=N);m(),v.current=setTimeout(function(){I(),g.current=0},l)},[l,o,r]);return x.cancel=m,x}var Vt=function(e,n,i){return Ie(e,n,i,100,function(r){return r},function(){return Ie(n,e,i)})},cn=function(e){return 1-Math.pow(1-e,4)};function Ie(e,n,i,r,o,c){r===void 0&&(r=400),o===void 0&&(o=cn);var l=n-e;if(l!==0){var u=Date.now(),g=0,v=function(){var x=Math.min(1,(Date.now()-u)/r);i(e+o(x)*l)&&x<1?m():(cancelAnimationFrame(g),x>=1&&c&&c())};m()}function m(){g=requestAnimationFrame(v)}}var sn={T:0,L:0,W:0,H:0,FIT:void 0},Bt=function(){var e=d.useRef(!1);return d.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e},un=["className"];function dn(e){var n=e.className,i=Nt(e,un);return h.createElement("div",_({className:"PhotoView__Spinner "+n},i),h.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},h.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),h.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var fn=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function hn(e){var n=e.src,i=e.loaded,r=e.broken,o=e.className,c=e.onPhotoLoad,l=e.loadingElement,u=e.brokenElement,g=Nt(e,fn),v=Bt();return n&&!r?h.createElement(h.Fragment,null,h.createElement("img",_({className:"PhotoView__Photo"+(o?" "+o:""),src:n,onLoad:function(m){var x=m.target;v.current&&c({loaded:!0,naturalWidth:x.naturalWidth,naturalHeight:x.naturalHeight})},onError:function(){v.current&&c({broken:!0})},alt:""},g)),!i&&(h.createElement("span",{className:"PhotoView__icon"},l)||h.createElement(dn,{className:"PhotoView__icon"}))):u?h.createElement("span",{className:"PhotoView__icon"},typeof u=="function"?u({src:n}):u):null}var vn={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function mn(e){var n=e.item,i=n.src,r=n.render,o=n.width,c=o===void 0?0:o,l=n.height,u=l===void 0?0:l,g=n.originRef,v=e.visible,m=e.speed,x=e.easing,M=e.wrapClassName,N=e.className,I=e.style,E=e.loadingElement,j=e.brokenElement,S=e.onPhotoTap,z=e.onMaskTap,Qe=e.onReachMove,Le=e.onReachUp,Rt=e.onPhotoResize,H=e.isActive,pe=e.expose,ut=kt(vn),w=ut[0],C=ut[1],He=d.useRef(0),Fe=Bt(),dt=w.naturalWidth,ae=dt===void 0?c:dt,X=w.naturalHeight,W=X===void 0?u:X,Ze=w.width,q=Ze===void 0?c:Ze,ft=w.height,xe=ft===void 0?u:ft,et=w.loaded,tt=et===void 0?!i:et,Re=w.broken,F=w.x,oe=w.y,G=w.touched,_t=w.stopRaf,we=w.maskTouched,U=w.rotate,P=w.scale,ht=w.CX,Oe=w.CY,_e=w.lastX,nt=w.lastY,b=w.lastCX,vt=w.lastCY,ee=w.lastScale,Me=w.touchTime,mt=w.touchLength,K=w.pause,Se=w.reach,rt=Ve({onScale:function(t){return le(Ct(t))},onRotate:function(t){U!==t&&(pe({rotate:t}),C(_({rotate:t},St(ae,W,t))))}});function le(t,s,p){P!==t&&(pe({scale:t}),C(_({scale:t},Mt(F,oe,q,xe,P,t,s,p),t<=1&&{x:0,y:0})))}var gt=Et(function(t,s,p){if(p===void 0&&(p=0),(G||we)&&H){var Pe=Xt(U,q,xe),ce=Pe[0],$=Pe[1];if(p===0&&He.current===0){var Y=Math.abs(t-ht)<=20,L=Math.abs(s-Oe)<=20;if(Y&&L)return void C({lastCX:t,lastCY:s});He.current=Y?s>Oe?3:2:1}var Ye=t-b,Xe=s-vt,J=void 0;if(p===0){var We=Ne(Ye+_e,P,ce,innerWidth)[0],ze=Ne(Xe+nt,P,$,innerHeight);J=function(je,ue,de,re){return ue&&je===1||re==="x"?"x":de&&je>1||re==="y"?"y":void 0}(He.current,We,ze[0],Se),J!==void 0&&Qe(J,t,s,P)}if(J==="x"||we)return void C({reach:"x"});var se=Ct(P+(p-mt)/100/2*P,ae/q,.2);pe({scale:se}),C(_({touchLength:p,reach:J,scale:se},Mt(F,oe,q,xe,P,se,t,s,Ye,Xe)))}},{maxWait:8});function it(t){return!_t&&!G&&(Fe.current&&C(_({},t,{pause:v})),Fe.current)}var ye,te,be,at,pt,xt,wt,V,yt=(pt=function(t){return it({x:t})},xt=function(t){return it({y:t})},wt=function(t){return Fe.current&&(pe({scale:t}),C({scale:t})),!G&&Fe.current},V=Ve({X:function(t){return pt(t)},Y:function(t){return xt(t)},S:function(t){return wt(t)}}),function(t,s,p,Pe,ce,$,Y,L,Ye,Xe,J){var We=Xt(Xe,ce,$),ze=We[0],se=We[1],je=Ne(t,L,ze,innerWidth),ue=je[0],de=je[1],re=Ne(s,L,se,innerHeight),qe=re[0],jt=re[1],Ge=Date.now()-J;if(Ge>=200||L!=Y||Math.abs(Ye-Y)>1){var Ce=Mt(t,s,ce,$,Y,L),fe=Ce.x,Ae=Ce.y,O=ue?de:fe!==t?fe:null,Ue=qe?jt:Ae!==s?Ae:null;return O!==null&&Ie(t,O,V.X),Ue!==null&&Ie(s,Ue,V.Y),void(L!=Y&&Ie(Y,L,V.S))}var Te=(t-p)/Ge,Ee=(s-Pe)/Ge,ke=Math.sqrt(Math.pow(Te,2)+Math.pow(Ee,2)),he=!1,ve=!1;(function(Q,A){var T=Q,me=0,Z=void 0,B=0,Ke=function(lt){Z||(Z=lt);var ct=lt-Z,Wt=Math.sign(Q),At=-.001*Wt,Tt=Math.sign(-T)*Math.pow(T,2)*2e-4,Dt=T*ct+(At+Tt)*Math.pow(ct,2)/2;me+=Dt,Z=lt,Wt*(T+=(At+Tt)*ct)<=0?D():A(me)?ie():D()};function ie(){B=requestAnimationFrame(Ke)}function D(){cancelAnimationFrame(B)}ie()})(ke,function(Q){var A=t+Q*(Te/ke),T=s+Q*(Ee/ke),me=Ne(A,Y,ze,innerWidth),Z=me[0],B=me[1],Ke=Ne(T,Y,se,innerHeight),ie=Ke[0],D=Ke[1];if(Z&&!he&&(he=!0,ue?Ie(A,B,V.X):Vt(B,A+(A-B),V.X)),ie&&!ve&&(ve=!0,qe?Ie(T,D,V.Y):Vt(D,T+(T-D),V.Y)),he&&ve)return!1;var lt=he||V.X(B),ct=ve||V.Y(D);return lt&&ct})}),Be=(ye=S,te=function(t,s){Se||le(P!==1?1:Math.max(2,ae/q),t,s)},be=d.useRef(0),at=Et(function(){be.current=0,ye.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var t=[].slice.call(arguments);be.current+=1,at.apply(void 0,t),be.current>=2&&(at.cancel(),be.current=0,te.apply(void 0,t))});function De(t,s){if(He.current=0,(G||we)&&H){C({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var p=Ct(P,ae/q);if(yt(F,oe,_e,nt,q,xe,P,p,ee,U,Me),Le(t,s),ht===t&&Oe===s){if(G)return void Be(t,s);we&&z(t,s)}}}function ot(t,s,p){p===void 0&&(p=0),C({touched:!0,CX:t,CY:s,lastCX:t,lastCY:s,lastX:F,lastY:oe,lastScale:P,touchLength:p,touchTime:Date.now()})}function bt(t){C({maskTouched:!0,CX:t.clientX,CY:t.clientY,lastX:F,lastY:oe})}Je(ge?void 0:"mousemove",function(t){t.preventDefault(),gt(t.clientX,t.clientY)}),Je(ge?void 0:"mouseup",function(t){De(t.clientX,t.clientY)}),Je(ge?"touchmove":void 0,function(t){t.preventDefault();var s=It(t);gt.apply(void 0,s)},{passive:!1}),Je(ge?"touchend":void 0,function(t){var s=t.changedTouches[0];De(s.clientX,s.clientY)},{passive:!1}),Je("resize",Et(function(){tt&&!G&&(C(St(ae,W,U)),Rt())},{maxWait:8})),Yt(function(){H&&pe(_({scale:P,rotate:U},rt))},[H]);var ne=function(t,s,p,Pe,ce,$,Y,L,Ye,Xe){var J=function(fe,Ae,O,Ue,Te){var Ee=d.useRef(!1),ke=kt({lead:!0,scale:O}),he=ke[0],ve=he.lead,Q=he.scale,A=ke[1],T=Et(function(me){try{return Te(!0),A({lead:!1,scale:me}),Promise.resolve()}catch(Z){return Promise.reject(Z)}},{wait:Ue});return Yt(function(){Ee.current?(Te(!1),A({lead:!0}),T(O)):Ee.current=!0},[O]),ve?[fe*Q,Ae*Q,O/Q]:[fe*O,Ae*O,1]}($,Y,L,Ye,Xe),We=J[0],ze=J[1],se=J[2],je=function(fe,Ae,O,Ue,Te){var Ee=d.useState(sn),ke=Ee[0],he=Ee[1],ve=d.useState(0),Q=ve[0],A=ve[1],T=d.useRef(),me=Ve({OK:function(){return fe&&A(4)}});function Z(B){Te(!1),A(B)}return d.useEffect(function(){if(T.current||(T.current=Date.now()),O){if(function(B,Ke){var ie=B&&B.current;if(ie&&ie.nodeType===1){var D=ie.getBoundingClientRect();Ke({T:D.top,L:D.left,W:D.width,H:D.height,FIT:ie.tagName==="IMG"?getComputedStyle(ie).objectFit:void 0})}}(Ae,he),fe)return Date.now()-T.current<250?(A(1),requestAnimationFrame(function(){A(2),requestAnimationFrame(function(){return Z(3)})}),void setTimeout(me.OK,Ue)):void A(4);Z(5)}},[fe,O]),[Q,ke]}(t,s,p,Ye,Xe),ue=je[0],de=je[1],re=de.W,qe=de.FIT,jt=innerWidth/2,Ge=innerHeight/2,Ce=ue<3||ue>4;return[Ce?re?de.L:jt:Pe+(jt-$*L/2),Ce?re?de.T:Ge:ce+(Ge-Y*L/2),We,Ce&&qe?We*(de.H/re):ze,ue===0?se:Ce?re/($*L)||.01:se,Ce?qe?1:0:1,ue,qe]}(v,g,tt,F,oe,q,xe,P,m,function(t){return C({pause:t})}),f=ne[4],y=ne[6],R="transform "+m+"ms "+x,k={className:N,onMouseDown:ge?void 0:function(t){t.stopPropagation(),t.button===0&&ot(t.clientX,t.clientY,0)},onTouchStart:ge?function(t){t.stopPropagation(),ot.apply(void 0,It(t))}:void 0,onWheel:function(t){if(!Se){var s=Ct(P-t.deltaY/100/2,ae/q);C({stopRaf:!0}),le(s,t.clientX,t.clientY)}},style:{width:ne[2],height:ne[3],opacity:ne[5],objectFit:y===4?void 0:ne[7],transform:U?"rotate("+U+"deg)":void 0,transition:y>2?R+", opacity "+m+"ms ease, height "+(y<4?m/2:y>4?m:0)+"ms "+x:void 0}};return h.createElement("div",{className:"PhotoView__PhotoWrap"+(M?" "+M:""),style:I,onMouseDown:!ge&&H?bt:void 0,onTouchStart:ge&&H?function(t){return bt(t.touches[0])}:void 0},h.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+f+", 0, 0, "+f+", "+ne[0]+", "+ne[1]+")",transition:G||K?void 0:R,willChange:H?"transform":void 0}},i?h.createElement(hn,_({src:i,loaded:tt,broken:Re},k,{onPhotoLoad:function(t){C(_({},t,t.loaded&&St(t.naturalWidth||0,t.naturalHeight||0,U)))},loadingElement:E,brokenElement:j})):r&&r({attrs:k,scale:f,rotate:U})))}var Lt={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function gn(e){var n=e.loop,i=n===void 0?3:n,r=e.speed,o=e.easing,c=e.photoClosable,l=e.maskClosable,u=l===void 0||l,g=e.maskOpacity,v=g===void 0?1:g,m=e.pullClosable,x=m===void 0||m,M=e.bannerVisible,N=M===void 0||M,I=e.overlayRender,E=e.toolbarRender,j=e.className,S=e.maskClassName,z=e.photoClassName,Qe=e.photoWrapClassName,Le=e.loadingElement,Rt=e.brokenElement,H=e.images,pe=e.index,ut=pe===void 0?0:pe,w=e.onIndexChange,C=e.visible,He=e.onClose,Fe=e.afterClose,dt=e.portalContainer,ae=kt(Lt),X=ae[0],W=ae[1],Ze=d.useState(0),q=Ze[0],ft=Ze[1],xe=X.x,et=X.touched,tt=X.pause,Re=X.lastCX,F=X.lastCY,oe=X.bg,G=oe===void 0?v:oe,_t=X.lastBg,we=X.overlay,U=X.minimal,P=X.scale,ht=X.rotate,Oe=X.onScale,_e=X.onRotate,nt=e.hasOwnProperty("index"),b=nt?ut:q,vt=nt?w:ft,ee=d.useRef(b),Me=H.length,mt=H[b],K=typeof i=="boolean"?i:Me>i,Se=function(f,y){var R=d.useReducer(function(p){return!p},!1)[1],k=d.useRef(0),t=function(p,Pe){var ce=d.useRef(p);function $(Y){ce.current=Y}return d.useMemo(function(){(function(Y){f?(Y(f),k.current=1):k.current=2})($)},[p]),[ce.current,$]}(f),s=t[1];return[t[0],k.current,function(){R(),k.current===2&&(s(!1),y&&y()),k.current=0}]}(C,Fe),rt=Se[0],le=Se[1],gt=Se[2];Yt(function(){if(rt)return W({pause:!0,x:b*-(innerWidth+20)}),void(ee.current=b);W(Lt)},[rt]);var it=Ve({close:function(f){_e&&_e(0),W({overlay:!0,lastBg:G}),He(f)},changeIndex:function(f,y){y===void 0&&(y=!1);var R=K?ee.current+(f-b):f,k=Me-1,t=Pt(R,0,k),s=K?R:t,p=innerWidth+20;W({touched:!1,lastCX:void 0,lastCY:void 0,x:-p*s,pause:y}),ee.current=s,vt&&vt(K?f<0?k:f>k?0:f:t)}}),ye=it.close,te=it.changeIndex;function be(f){return f?ye():W({overlay:!we})}function at(){W({x:-(innerWidth+20)*b,lastCX:void 0,lastCY:void 0,pause:!0}),ee.current=b}function pt(f,y,R,k){f==="x"?function(t){if(Re!==void 0){var s=t-Re,p=s;!K&&(b===0&&s>0||b===Me-1&&s<0)&&(p=s/2),W({touched:!0,lastCX:Re,x:-(innerWidth+20)*ee.current+p,pause:!1})}else W({touched:!0,lastCX:t,x:xe,pause:!1})}(y):f==="y"&&function(t,s){if(F!==void 0){var p=v===null?null:Pt(v,.01,v-Math.abs(t-F)/100/4);W({touched:!0,lastCY:F,bg:s===1?p:v,minimal:s===1})}else W({touched:!0,lastCY:t,bg:G,minimal:!0})}(R,k)}function xt(f,y){var R=f-(Re??f),k=y-(F??y),t=!1;if(R<-40)te(b+1);else if(R>40)te(b-1);else{var s=-(innerWidth+20)*ee.current;Math.abs(k)>100&&U&&x&&(t=!0,ye()),W({touched:!1,x:s,lastCX:void 0,lastCY:void 0,bg:v,overlay:!!t||we})}}Je("keydown",function(f){if(C)switch(f.key){case"ArrowLeft":te(b-1,!0);break;case"ArrowRight":te(b+1,!0);break;case"Escape":ye()}});var wt=function(f,y,R){return d.useMemo(function(){var k=f.length;return R?f.concat(f).concat(f).slice(k+y-1,k+y+2):f.slice(Math.max(y-1,0),Math.min(y+2,k+1))},[f,y,R])}(H,b,K);if(!rt)return null;var V=we&&!le,yt=C?G:_t,Be=Oe&&_e&&{images:H,index:b,visible:C,onClose:ye,onIndexChange:te,overlayVisible:V,overlay:mt&&mt.overlay,scale:P,rotate:ht,onScale:Oe,onRotate:_e},De=r?r(le):400,ot=o?o(le):"cubic-bezier(0.25, 0.8, 0.25, 1)",bt=r?r(3):600,ne=o?o(3):"cubic-bezier(0.25, 0.8, 0.25, 1)";return h.createElement(nn,{className:"PhotoView-Portal"+(V?"":" PhotoView-Slider__clean")+(C?"":" PhotoView-Slider__willClose")+(j?" "+j:""),role:"dialog",onClick:function(f){return f.stopPropagation()},container:dt},C&&h.createElement(ln,null),h.createElement("div",{className:"PhotoView-Slider__Backdrop"+(S?" "+S:"")+(le===1?" PhotoView-Slider__fadeIn":le===2?" PhotoView-Slider__fadeOut":""),style:{background:yt?"rgba(0, 0, 0, "+yt+")":void 0,transitionTimingFunction:ot,transitionDuration:(et?0:De)+"ms",animationDuration:De+"ms"},onAnimationEnd:gt}),N&&h.createElement("div",{className:"PhotoView-Slider__BannerWrap"},h.createElement("div",{className:"PhotoView-Slider__Counter"},b+1," / ",Me),h.createElement("div",{className:"PhotoView-Slider__BannerRight"},E&&Be&&E(Be),h.createElement(rn,{className:"PhotoView-Slider__toolbarIcon",onClick:ye}))),wt.map(function(f,y){var R=K||b!==0?ee.current-1+y:b+y;return h.createElement(mn,{key:K?f.key+"/"+f.src+"/"+R:f.key,item:f,speed:De,easing:ot,visible:C,onReachMove:pt,onReachUp:xt,onPhotoTap:function(){return be(c)},onMaskTap:function(){return be(u)},wrapClassName:Qe,className:z,style:{left:(innerWidth+20)*R+"px",transform:"translate3d("+xe+"px, 0px, 0)",transition:et||tt?void 0:"transform "+bt+"ms "+ne},loadingElement:Le,brokenElement:Rt,onPhotoResize:at,isActive:ee.current===R,expose:W})}),!ge&&N&&h.createElement(h.Fragment,null,(K||b!==0)&&h.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return te(b-1,!0)}},h.createElement(an,null)),(K||b+1<Me)&&h.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return te(b+1,!0)}},h.createElement(on,null))),I&&Be&&h.createElement("div",{className:"PhotoView-Slider__Overlay"},I(Be)))}var pn=["children","onIndexChange","onVisibleChange"],xn={images:[],visible:!1,index:0};function wn(e){var n=e.children,i=e.onIndexChange,r=e.onVisibleChange,o=Nt(e,pn),c=kt(xn),l=c[0],u=c[1],g=d.useRef(0),v=l.images,m=l.visible,x=l.index,M=Ve({nextId:function(){return g.current+=1},update:function(E){var j=v.findIndex(function(z){return z.key===E.key});if(j>-1){var S=v.slice();return S.splice(j,1,E),void u({images:S})}u(function(z){return{images:z.images.concat(E)}})},remove:function(E){u(function(j){var S=j.images.filter(function(z){return z.key!==E});return{images:S,index:Math.min(S.length-1,x)}})},show:function(E){var j=v.findIndex(function(S){return S.key===E});u({visible:!0,index:j}),r&&r(!0,j,l)}}),N=Ve({close:function(){u({visible:!1}),r&&r(!1,x,l)},changeIndex:function(E){u({index:E}),i&&i(E,l)}}),I=d.useMemo(function(){return _({},l,M)},[l,M]);return h.createElement(Ot.Provider,{value:I},n,h.createElement(gn,_({images:v,visible:m,index:x,onIndexChange:N.changeIndex,onClose:N.close},o)))}var yn=function(e){var n,i,r=e.src,o=e.render,c=e.overlay,l=e.width,u=e.height,g=e.triggers,v=g===void 0?["onClick"]:g,m=e.children,x=d.useContext(Ot),M=(n=function(){return x.nextId()},(i=d.useRef({sign:!1,fn:void 0}).current).sign||(i.sign=!0,i.fn=n()),i.fn),N=d.useRef(null);d.useImperativeHandle(m==null?void 0:m.ref,function(){return N.current}),d.useEffect(function(){return function(){x.remove(M)}},[]);var I=Ve({render:function(j){return o&&o(j)},show:function(j,S){x.show(M),function(z,Qe){if(m){var Le=m.props[z];Le&&Le(Qe)}}(j,S)}}),E=d.useMemo(function(){var j={};return v.forEach(function(S){j[S]=I.show.bind(null,S)}),j},[]);return d.useEffect(function(){x.update({key:M,src:r,originRef:N,render:I.render,overlay:c,width:l,height:u})},[r]),m?d.Children.only(d.cloneElement(m,_({},E,{ref:N}))):null};function bn({images:e=[]}){const[n,i]=d.useState([]);return d.useMemo(()=>{const r=[];for(let o=0;o<e.length;o+=2)r.push({img1:{...e[o],index:o},img2:{...e[o+1],index:o+1}});i(r)},[e]),a.jsx(a.Fragment,{children:a.jsx(wn,{speed:()=>500,easing:r=>r===2?"cubic-bezier(0.36, 0, 0.66, -0.56)":"cubic-bezier(0.34, 1.56, 0.64, 1)",toolbarRender:({onScale:r,scale:o,rotate:c,onRotate:l})=>a.jsxs("div",{className:"flex gap-4 mr-5",children:[a.jsx("button",{onClick:()=>l(c+90),children:a.jsx(st,{icon:Ut})}),a.jsx("button",{onClick:()=>l(c-90),children:a.jsx(st,{icon:Kt})}),a.jsx("button",{onClick:()=>r(o+1),children:a.jsx(st,{icon:$t})}),a.jsx("button",{onClick:()=>r(o-1),children:a.jsx(st,{icon:Jt})}),a.jsx("button",{onClick:()=>r(0),children:a.jsx(st,{icon:Qt})})]}),children:a.jsx("div",{className:"foo grid md:grid-cols-3 gap-5 rounded-md overflow-hidden",children:n.map(r=>{var o,c,l,u,g,v,m,x;return a.jsxs("div",{className:"grid gap-5 w-full ",children:[((o=r.img1)==null?void 0:o.id)&&a.jsx(Ht,{src:(c=r.img1)==null?void 0:c.src,alt:(l=r.img1)==null?void 0:l.alt}),((u=r.img2)==null?void 0:u.id)&&a.jsx(Ht,{src:(g=r.img2)==null?void 0:g.src,alt:(v=r.img2)==null?void 0:v.alt})]},((m=r.img1)==null?void 0:m.id)+"-"+((x=r.img2)==null?void 0:x.id))})})})})}function Ht({src:e,alt:n="Image of 'GA Castro Constructions LLC' gallery"}){const i=window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth;return a.jsx(yn,{width:i,height:i,render:({attrs:r})=>a.jsx("div",{...r,children:a.jsx("img",{className:"h-full w-full object-contain select-none",src:e,alt:n})}),children:a.jsx("button",{className:"w-full h-full max-w-full cursor-pointer rounded-xl overflow-hidden",children:a.jsx("img",{className:"h-full w-full object-cover select-none",src:e,alt:n})})})}const Ft=[{id:1,src:"./gallery/1.jpg",alt:"",tags:["gutter","roofing","carpentry","paint"]},{id:2,src:"./gallery/2.jpg",alt:"",tags:["siding","gutter"]},{id:3,src:"./gallery/3.jpg",alt:"",tags:["siding"]},{id:4,src:"./gallery/4.jpg",alt:"",tags:["roofing"]},{id:5,src:"./gallery/5.jpg",alt:"",tags:["roofing","carpentry"]},{id:6,src:"./gallery/6.jpg",alt:"",tags:["roofing","carpentry","gutter"]},{id:7,src:"./gallery/7.jpg",alt:"",tags:["carpentry","paint"]},{id:8,src:"./gallery/8.jpg",alt:"",tags:["siding"]},{id:9,src:"./gallery/9.jpg",alt:"",tags:["roofing","carpentry","paint"]},{id:10,src:"./gallery/10.jpg",alt:"",tags:[]},{id:11,src:"./gallery/11.jpg",alt:"",tags:[]},{id:12,src:"./gallery/12.jpg",alt:"",tags:[]},{id:13,src:"./new/1.jpg",alt:"",tags:["carpentry"]},{id:14,src:"./new/2.jpg",alt:"",tags:["carpentry"]},{id:15,src:"./new/3.jpg",alt:"",tags:["carpentry"]},{id:16,src:"./new/4.jpg",alt:"",tags:["carpentry"]},{id:17,src:"./new/5.jpg",alt:"",tags:["carpentry"]}],jn=[{id:1,title:"Roofing",address:"Stanford, CT",src:"/works/1.jpg"},{id:2,title:"Roofing",address:"Guilford, CT",src:"/works/2.jpg"},{id:3,title:"Roofing",address:"Stanford, CT",src:"/works/3.jpg"}];function Pn({info:e}){const{gallery:n}=e,[i,r]=d.useState("all"),[o,c]=d.useState([]);return d.useEffect(()=>{c(i==="all"?null:Ft.filter(l=>l.tags.includes(i)))},[i]),a.jsxs(qt,{children:[a.jsxs("section",{className:"relative overflow-hidden p-[--padding]",id:"header",children:[a.jsx("div",{className:"absolute inset-0 w-full h-full ",children:a.jsx("img",{src:"/image/ciudad.jpg",className:"w-full h-full object-cover"})}),a.jsx("div",{className:"absolute inset-0 bg-black/10 backdrop-blur-sm"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"}),a.jsxs("div",{className:"relative z-10 container flex flex-col w-full  py-40 items-center gap-20",children:[a.jsx("div",{className:"flex",children:n.title.map((l,u)=>a.jsx(Cn,{src:l.src,letter:l.letter,delay:u/3},l.id))}),a.jsx("div",{className:"flex  w-full justify-center ",children:a.jsxs(Zt,{href:"#photos",style:"2",type:"3",className:"sm:gap-3 px-5 items-center bg-white",children:[a.jsx("span",{className:"sm:text-xl font-title",children:"SEE MORE"})," "]})})]})]}),a.jsx("section",{className:" p-[--padding]",children:a.jsxs("div",{className:"container ",children:[a.jsxs("div",{className:"grid grid-cols-3 place-items-center sm:flex sm:flex-row w-full justify-center gap-2 lg:gap-10 bg-white py-4",children:[a.jsx($e,{text:"All",value:"all",valueSelected:i,onClick:r}),a.jsx($e,{text:"Roofing",value:"roofing",valueSelected:i,onClick:r}),a.jsx($e,{text:"Siding",value:"siding",valueSelected:i,onClick:r}),a.jsx($e,{text:"Gutter",value:"gutter",valueSelected:i,onClick:r}),a.jsx($e,{text:"Carpentry",value:"carpentry",valueSelected:i,onClick:r}),a.jsx($e,{text:"Paint",value:"paint",valueSelected:i,onClick:r})]}),a.jsx("div",{className:"flex flex-col py-9",id:"photos",children:a.jsx(bn,{images:o||Ft})})]})}),a.jsx("section",{className:"p-[--padding]",children:a.jsxs("div",{className:"container flex flex-col items-center",children:[a.jsxs("div",{className:"flex flex-col items-center gap-10",children:[a.jsxs("h1",{className:"font-title text-3xl sm:text-6xl max-w-[600px] text-center",children:["LEARN MORE ABOUT",a.jsx("span",{className:"text-[--color1-bg]",children:" OUR PROJECTS"})]}),a.jsx("p",{className:"font-title text-2xl sm:text-4xl  text-center md:px-32 ",children:"Select one of the projects we have worked on to have more information and see the process."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full py-20 gap-5 lg:gap-10",children:jn.map(l=>a.jsx(En,{title:l.title,subtitle:l.address,alt:"work done in "+l.address,src:l.src},l.id))})]})}),a.jsx("section",{children:a.jsx("div",{className:"container w-full",children:a.jsx(en,{})})})]})}function Cn({letter:e,src:n="",delay:i=.5}){return a.jsx(a.Fragment,{children:a.jsx(Gt.b,{initial:{opacity:0,y:window.innerHeight/2*-1},animate:{opacity:1,y:0},transition:{delay:i,duration:1,type:"spring",stiffness:100,damping:10},className:"font-title3 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] bg-clip-text text-transparent bg-cover bg-center mx-0 sm:mx-2",style:{backgroundImage:`url(${n})`},children:e})})}function $e({text:e,value:n,valueSelected:i,onClick:r}){const o=()=>{r(n)},c=i===n;return a.jsx("button",{onClick:o,className:`
                flex justify-center max-w-32 w-full  p-1 font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] bg-[--color1-bg] rounded-full  transition-all duration-300 
                hover:text-[--color2-txt] hover:opacity-100 
                ${c?"text-[--color2-txt]":"text-[var(--color2-bg)]"} 
                ${c?"opacity-100":"opacity-70"} 
            `,children:a.jsx("span",{className:" sm:text-xl font-title",children:e})})}function En({title:e,subtitle:n,src:i,alt:r}){return a.jsxs("div",{className:"group/item relative flex justify-center w-full px-10 pb-20 pt-36 rounded-2xl overflow-hidden font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] hover:scale-105 transition-all duration-300",children:[a.jsx("img",{src:i,alt:r,className:"absolute inset-0 w-full h-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-black/10 group-hover/item:backdrop-blur-sm"}),a.jsxs("div",{className:"opacity-0 relative z-10 flex flex-col items-center py-2 px-5 gap-5 rounded-lg text-[--color1-txt1] bg-[#ff9500]/70 group-hover/item:opacity-100 transition-all duration-300",children:[a.jsx("h3",{className:" sm:text-3xl font-title opacity-80",children:e}),a.jsx("span",{className:"text-center  sm:text-xl font-title opacity-80",children:n})]})]})}export{Pn as default};
