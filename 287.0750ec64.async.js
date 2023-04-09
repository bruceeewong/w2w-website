"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[287],{91033:function(ie,Qn,yn){yn.d(Qn,{Z:function(){return Wr}});var W=yn(50959),pt=yn(40507),H=yn.n(pt),Vn=yn(84875),zn=yn.n(Vn),mn=["top","left","transform","className","children","innerRef"];function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},Z.apply(this,arguments)}function Q(n,t){if(n==null)return{};var r={},e=Object.keys(n),i,o;for(o=0;o<e.length;o++)i=e[o],!(t.indexOf(i)>=0)&&(r[i]=n[i]);return r}function en(n){var t=n.top,r=t===void 0?0:t,e=n.left,i=e===void 0?0:e,o=n.transform,l=n.className,s=n.children,p=n.innerRef,g=Q(n,mn);return W.createElement("g",Z({ref:p,className:zn()("visx-group",l),transform:o||"translate("+i+", "+r+")"},g),s)}en.propTypes={top:H().number,left:H().number,transform:H().string,className:H().string,children:H().node,innerRef:H().oneOfType([H().string,H().func,H().object])};var P=1e-6,$=1e-12,F=Math.PI,V=F/2,gn=F/4,D=F*2,J=180/F,L=F/180,N=Math.abs,b=Math.atan,cn=Math.atan2,Y=Math.cos,ln=Math.ceil,oe=Math.exp,ue=Math.floor,ae=Math.log,be=Math.pow,C=Math.sin,bn=Math.sign||function(n){return n>0?1:n<0?-1:0},hn=Math.sqrt,Un=Math.tan;function ht(n){return n>1?0:n<-1?F:Math.acos(n)}function sn(n){return n>1?V:n<-1?-V:Math.asin(n)}function gt(n){return(n=C(n/2))*n}function It(n){return function(t,r){var e=cos(t),i=cos(r),o=n(e*i);return[o*i*sin(t),o*sin(r)]}}function Tt(n){return function(t,r){var e=hn(t*t+r*r),i=n(e),o=C(i),l=Y(i);return[cn(t*o,e*l),sn(e&&r*o/e)]}}function un(){}function qn(){var n=[],t;return{point:function(r,e,i){t.push([r,e,i])},lineStart:function(){n.push(t=[])},lineEnd:un,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var r=n;return n=[],t=null,r}}}function wn(n,t){return N(n[0]-t[0])<P&&N(n[1]-t[1])<P}function Pn(n,t,r,e){this.x=n,this.z=t,this.o=r,this.e=e,this.v=!1,this.n=this.p=null}function Cn(n,t,r,e,i){var o=[],l=[],s,p;if(n.forEach(function(h){if(!((E=h.length-1)<=0)){var E,S=h[0],w=h[E],O;if(wn(S,w)){if(!S[2]&&!w[2]){for(i.lineStart(),s=0;s<E;++s)i.point((S=h[s])[0],S[1]);i.lineEnd();return}w[0]+=2*P}o.push(O=new Pn(S,h,null,!0)),l.push(O.o=new Pn(S,null,O,!1)),o.push(O=new Pn(w,h,null,!1)),l.push(O.o=new Pn(w,null,O,!0))}}),!!o.length){for(l.sort(t),Gn(o),Gn(l),s=0,p=l.length;s<p;++s)l[s].e=r=!r;for(var g=o[0],u,c;;){for(var a=g,f=!0;a.v;)if((a=a.n)===g)return;u=a.z,i.lineStart();do{if(a.v=a.o.v=!0,a.e){if(f)for(s=0,p=u.length;s<p;++s)i.point((c=u[s])[0],c[1]);else e(a.x,a.n.x,1,i);a=a.n}else{if(f)for(u=a.p.z,s=u.length-1;s>=0;--s)i.point((c=u[s])[0],c[1]);else e(a.x,a.p.x,-1,i);a=a.p}a=a.o,u=a.z,f=!f}while(!a.v);i.lineEnd()}}}function Gn(n){if(t=n.length){for(var t,r=0,e=n[0],i;++r<t;)e.n=i=n[r],i.p=e,e=i;e.n=i=n[0],i.p=e}}function Rn(){return new xn}function xn(){this.reset()}xn.prototype={constructor:xn,reset:function(){this.s=this.t=0},add:function(n){_n(Fn,n,this.t),_n(this,Fn.s,this.s),this.s?this.t+=Fn.t:this.s=Fn.t},valueOf:function(){return this.s}};var Fn=new xn;function _n(n,t,r){var e=n.s=t+r,i=e-t,o=e-i;n.t=t-o+(r-i)}function kn(n){return[cn(n[1],n[0]),sn(n[2])]}function Nn(n){var t=n[0],r=n[1],e=Y(r);return[e*Y(t),e*C(t),C(r)]}function Xn(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function nn(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function rn(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function tn(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function fn(n){var t=hn(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var Yn=Rn();function An(n){return N(n[0])<=F?n[0]:bn(n[0])*((N(n[0])+F)%D-F)}function vt(n,t){var r=An(t),e=t[1],i=C(e),o=[C(r),-Y(r),0],l=0,s=0;Yn.reset(),i===1?e=V+P:i===-1&&(e=-V-P);for(var p=0,g=n.length;p<g;++p)if(c=(u=n[p]).length)for(var u,c,a=u[c-1],f=An(a),h=a[1]/2+gn,E=C(h),S=Y(h),w=0;w<c;++w,f=m,E=T,S=q,a=O){var O=u[w],m=An(O),A=O[1]/2+gn,T=C(A),q=Y(A),k=m-f,j=k>=0?1:-1,I=j*k,_=I>F,x=E*T;if(Yn.add(cn(x*j*C(I),S*q+x*Y(I))),l+=_?k+j*D:k,_^f>=r^m>=r){var X=nn(Nn(a),Nn(O));fn(X);var on=nn(o,X);fn(on);var B=(_^k>=0?-1:1)*sn(on[2]);(e>B||e===B&&(X[0]||X[1]))&&(s+=_^k>=0?1:-1)}}return(l<-P||l<P&&Yn<-P)^s&1}function dt(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function qt(n){return n.length===1&&(n=yt(n)),{left:function(t,r,e,i){for(e==null&&(e=0),i==null&&(i=t.length);e<i;){var o=e+i>>>1;n(t[o],r)<0?e=o+1:i=o}return e},right:function(t,r,e,i){for(e==null&&(e=0),i==null&&(i=t.length);e<i;){var o=e+i>>>1;n(t[o],r)>0?i=o:e=o+1}return e}}}function yt(n){return function(t,r){return dt(n(t),r)}}var mt=qt(dt),le=mt.right,ce=mt.left,Ct=null,Et=Array.prototype,v=Et.slice,y=Et.map,M=Math.sqrt(50),R=Math.sqrt(10),z=Math.sqrt(2);function K(n,t,r){var e,i=-1,o,l,s;if(t=+t,n=+n,r=+r,n===t&&r>0)return[n];if((e=t<n)&&(o=n,n=t,t=o),(s=U(n,t,r))===0||!isFinite(s))return[];if(s>0)for(n=Math.ceil(n/s),t=Math.floor(t/s),l=new Array(o=Math.ceil(t-n+1));++i<o;)l[i]=(n+i)*s;else for(n=Math.floor(n*s),t=Math.ceil(t*s),l=new Array(o=Math.ceil(n-t+1));++i<o;)l[i]=(n-i)/s;return e&&l.reverse(),l}function U(n,t,r){var e=(t-n)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,i);return i>=0?(o>=M?10:o>=R?5:o>=z?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=M?10:o>=R?5:o>=z?2:1)}function Hn(n,t,r){var e=Math.abs(t-n)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/i;return o>=M?i*=10:o>=R?i*=5:o>=z&&(i*=2),t<n?-i:i}function Gt(){var n=identity,t=extent,r=sturges;function e(i){var o,l=i.length,s,p=new Array(l);for(o=0;o<l;++o)p[o]=n(i[o],o,i);var g=t(p),u=g[0],c=g[1],a=r(p,u,c);Array.isArray(a)||(a=tickStep(u,c,a),a=range(Math.ceil(u/a)*a,c,a));for(var f=a.length;a[0]<=u;)a.shift(),--f;for(;a[f-1]>c;)a.pop(),--f;var h=new Array(f+1),E;for(o=0;o<=f;++o)E=h[o]=[],E.x0=o>0?a[o-1]:u,E.x1=o<f?a[o]:c;for(o=0;o<l;++o)s=p[o],u<=s&&s<=c&&h[bisect(a,s,0,f)].push(i[o]);return h}return e.value=function(i){return arguments.length?(n=typeof i=="function"?i:constant(i),e):n},e.domain=function(i){return arguments.length?(t=typeof i=="function"?i:constant([i[0],i[1]]),e):t},e.thresholds=function(i){return arguments.length?(r=typeof i=="function"?i:Array.isArray(i)?constant(slice.call(i)):constant(i),e):r},e}function St(n,t,r){return n=map.call(n,number).sort(ascending),Math.ceil((r-t)/(2*(quantile(n,.75)-quantile(n,.25))*Math.pow(n.length,-1/3)))}function In(n){for(var t=n.length,r,e=-1,i=0,o,l;++e<t;)i+=n[e].length;for(o=new Array(i);--t>=0;)for(l=n[t],r=l.length;--r>=0;)o[--i]=l[r];return o}function En(n,t,r){n=+n,t=+t,r=(i=arguments.length)<2?(t=n,n=0,1):i<3?1:+r;for(var e=-1,i=Math.max(0,Math.ceil((t-n)/r))|0,o=new Array(i);++e<i;)o[e]=n+e*r;return o}function fe(n,t,r,e){return function(i){var o=t(i),l=qn(),s=t(l),p=!1,g,u,c,a={point:f,lineStart:E,lineEnd:S,polygonStart:function(){a.point=w,a.lineStart=O,a.lineEnd=m,u=[],g=[]},polygonEnd:function(){a.point=f,a.lineStart=E,a.lineEnd=S,u=In(u);var A=vt(g,e);u.length?(p||(i.polygonStart(),p=!0),Cn(u,tr,A,r,i)):A&&(p||(i.polygonStart(),p=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),p&&(i.polygonEnd(),p=!1),u=g=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function f(A,T){n(A,T)&&i.point(A,T)}function h(A,T){o.point(A,T)}function E(){a.point=h,o.lineStart()}function S(){a.point=f,o.lineEnd()}function w(A,T){c.push([A,T]),s.point(A,T)}function O(){s.lineStart(),c=[]}function m(){w(c[0][0],c[0][1]),s.lineEnd();var A=s.clean(),T=l.result(),q,k=T.length,j,I,_;if(c.pop(),g.push(c),c=null,!!k){if(A&1){if(I=T[0],(j=I.length-1)>0){for(p||(i.polygonStart(),p=!0),i.lineStart(),q=0;q<j;++q)i.point((_=I[q])[0],_[1]);i.lineEnd()}return}k>1&&A&2&&T.push(T.pop().concat(T.shift())),u.push(T.filter(nr))}}return a}}function nr(n){return n.length>1}function tr(n,t){return((n=n.x)[0]<0?n[1]-V-P:V-n[1])-((t=t.x)[0]<0?t[1]-V-P:V-t[1])}var se=fe(function(){return!0},er,ir,[-F,-V]);function er(n){var t=NaN,r=NaN,e=NaN,i;return{lineStart:function(){n.lineStart(),i=1},point:function(o,l){var s=o>0?F:-F,p=N(o-t);N(p-F)<P?(n.point(t,r=(r+l)/2>0?V:-V),n.point(e,r),n.lineEnd(),n.lineStart(),n.point(s,r),n.point(o,r),i=0):e!==s&&p>=F&&(N(t-e)<P&&(t-=e*P),N(o-s)<P&&(o-=s*P),r=rr(t,r,o,l),n.point(e,r),n.lineEnd(),n.lineStart(),n.point(s,r),i=0),n.point(t=o,r=l),e=s},lineEnd:function(){n.lineEnd(),t=r=NaN},clean:function(){return 2-i}}}function rr(n,t,r,e){var i,o,l=C(n-r);return N(l)>P?b((C(t)*(o=Y(e))*C(r)-C(e)*(i=Y(t))*C(n))/(i*o*l)):(t+e)/2}function ir(n,t,r,e){var i;if(n==null)i=r*V,e.point(-F,i),e.point(0,i),e.point(F,i),e.point(F,0),e.point(F,-i),e.point(0,-i),e.point(-F,-i),e.point(-F,0),e.point(-F,i);else if(N(n[0]-t[0])>P){var o=n[0]<t[0]?F:-F;i=r*o/2,e.point(-o,i),e.point(0,i),e.point(o,i)}else e.point(t[0],t[1])}function pe(n,t,r,e,i,o){if(r){var l=Y(t),s=C(t),p=e*r;i==null?(i=t+e*D,o=t-p/2):(i=he(l,i),o=he(l,o),(e>0?i<o:i>o)&&(i+=e*D));for(var g,u=i;e>0?u>o:u<o;u-=p)g=kn([l,-s*Y(u),-s*C(u)]),n.point(g[0],g[1])}}function he(n,t){t=Nn(t),t[0]-=n,fn(t);var r=ht(-t[1]);return((-t[2]<0?-r:r)+D-P)%D}function Ur(){var n=constant([0,0]),t=constant(90),r=constant(6),e,i,o={point:l};function l(p,g){e.push(p=i(p,g)),p[0]*=degrees,p[1]*=degrees}function s(){var p=n.apply(this,arguments),g=t.apply(this,arguments)*radians,u=r.apply(this,arguments)*radians;return e=[],i=rotateRadians(-p[0]*radians,-p[1]*radians,0).invert,pe(o,g,u,1),p={type:"Polygon",coordinates:[e]},e=i=null,p}return s.center=function(p){return arguments.length?(n=typeof p=="function"?p:constant([+p[0],+p[1]]),s):n},s.radius=function(p){return arguments.length?(t=typeof p=="function"?p:constant(+p),s):t},s.precision=function(p){return arguments.length?(r=typeof p=="function"?p:constant(+p),s):r},s}function or(n){var t=Y(n),r=6*L,e=t>0,i=N(t)>P;function o(u,c,a,f){pe(f,n,r,a,u,c)}function l(u,c){return Y(u)*Y(c)>t}function s(u){var c,a,f,h,E;return{lineStart:function(){h=f=!1,E=1},point:function(S,w){var O=[S,w],m,A=l(S,w),T=e?A?0:g(S,w):A?g(S+(S<0?F:-F),w):0;if(!c&&(h=f=A)&&u.lineStart(),A!==f&&(m=p(c,O),(!m||wn(c,m)||wn(O,m))&&(O[2]=1)),A!==f)E=0,A?(u.lineStart(),m=p(O,c),u.point(m[0],m[1])):(m=p(c,O),u.point(m[0],m[1],2),u.lineEnd()),c=m;else if(i&&c&&e^A){var q;!(T&a)&&(q=p(O,c,!0))&&(E=0,e?(u.lineStart(),u.point(q[0][0],q[0][1]),u.point(q[1][0],q[1][1]),u.lineEnd()):(u.point(q[1][0],q[1][1]),u.lineEnd(),u.lineStart(),u.point(q[0][0],q[0][1],3)))}A&&(!c||!wn(c,O))&&u.point(O[0],O[1]),c=O,f=A,a=T},lineEnd:function(){f&&u.lineEnd(),c=null},clean:function(){return E|(h&&f)<<1}}}function p(u,c,a){var f=Nn(u),h=Nn(c),E=[1,0,0],S=nn(f,h),w=Xn(S,S),O=S[0],m=w-O*O;if(!m)return!a&&u;var A=t*w/m,T=-t*O/m,q=nn(E,S),k=tn(E,A),j=tn(S,T);rn(k,j);var I=q,_=Xn(k,I),x=Xn(I,I),X=_*_-x*(Xn(k,k)-1);if(!(X<0)){var on=hn(X),B=tn(I,(-_-on)/x);if(rn(B,k),B=kn(B),!a)return B;var d=u[0],G=c[0],an=u[1],pn=c[1],vn;G<d&&(vn=d,d=G,G=vn);var st=G-d,On=N(st-F)<P,Wn=On||st<P;if(!On&&pn<an&&(vn=an,an=pn,pn=vn),Wn?On?an+pn>0^B[1]<(N(B[0]-d)<P?an:pn):an<=B[1]&&B[1]<=pn:st>F^(d<=B[0]&&B[0]<=G)){var Ln=tn(I,(-_+on)/x);return rn(Ln,k),[B,kn(Ln)]}}}function g(u,c){var a=e?n:F-n,f=0;return u<-a?f|=1:u>a&&(f|=2),c<-a?f|=4:c>a&&(f|=8),f}return fe(l,s,o,e?[0,-n]:[-F,n-F])}function ur(n,t,r,e,i,o){var l=n[0],s=n[1],p=t[0],g=t[1],u=0,c=1,a=p-l,f=g-s,h;if(h=r-l,!(!a&&h>0)){if(h/=a,a<0){if(h<u)return;h<c&&(c=h)}else if(a>0){if(h>c)return;h>u&&(u=h)}if(h=i-l,!(!a&&h<0)){if(h/=a,a<0){if(h>c)return;h>u&&(u=h)}else if(a>0){if(h<u)return;h<c&&(c=h)}if(h=e-s,!(!f&&h>0)){if(h/=f,f<0){if(h<u)return;h<c&&(c=h)}else if(f>0){if(h>c)return;h>u&&(u=h)}if(h=o-s,!(!f&&h<0)){if(h/=f,f<0){if(h>c)return;h>u&&(u=h)}else if(f>0){if(h<u)return;h<c&&(c=h)}return u>0&&(n[0]=l+u*a,n[1]=s+u*f),c<1&&(t[0]=l+c*a,t[1]=s+c*f),!0}}}}}var nt=1e9,Mt=-nt;function ar(n,t,r,e){function i(g,u){return n<=g&&g<=r&&t<=u&&u<=e}function o(g,u,c,a){var f=0,h=0;if(g==null||(f=l(g,c))!==(h=l(u,c))||p(g,u)<0^c>0)do a.point(f===0||f===3?n:r,f>1?e:t);while((f=(f+c+4)%4)!==h);else a.point(u[0],u[1])}function l(g,u){return N(g[0]-n)<P?u>0?0:3:N(g[0]-r)<P?u>0?2:1:N(g[1]-t)<P?u>0?1:0:u>0?3:2}function s(g,u){return p(g.x,u.x)}function p(g,u){var c=l(g,1),a=l(u,1);return c!==a?c-a:c===0?u[1]-g[1]:c===1?g[0]-u[0]:c===2?g[1]-u[1]:u[0]-g[0]}return function(g){var u=g,c=qn(),a,f,h,E,S,w,O,m,A,T,q,k={point:j,lineStart:X,lineEnd:on,polygonStart:_,polygonEnd:x};function j(d,G){i(d,G)&&u.point(d,G)}function I(){for(var d=0,G=0,an=f.length;G<an;++G)for(var pn=f[G],vn=1,st=pn.length,On=pn[0],Wn,Ln,Ft=On[0],Jn=On[1];vn<st;++vn)Wn=Ft,Ln=Jn,On=pn[vn],Ft=On[0],Jn=On[1],Ln<=e?Jn>e&&(Ft-Wn)*(e-Ln)>(Jn-Ln)*(n-Wn)&&++d:Jn<=e&&(Ft-Wn)*(e-Ln)<(Jn-Ln)*(n-Wn)&&--d;return d}function _(){u=c,a=[],f=[],q=!0}function x(){var d=I(),G=q&&d,an=(a=In(a)).length;(G||an)&&(g.polygonStart(),G&&(g.lineStart(),o(null,null,1,g),g.lineEnd()),an&&Cn(a,s,d,o,g),g.polygonEnd()),u=g,a=f=h=null}function X(){k.point=B,f&&f.push(h=[]),T=!0,A=!1,O=m=NaN}function on(){a&&(B(E,S),w&&A&&c.rejoin(),a.push(c.result())),k.point=j,A&&u.lineEnd()}function B(d,G){var an=i(d,G);if(f&&h.push([d,G]),T)E=d,S=G,w=an,T=!1,an&&(u.lineStart(),u.point(d,G));else if(an&&A)u.point(d,G);else{var pn=[O=Math.max(Mt,Math.min(nt,O)),m=Math.max(Mt,Math.min(nt,m))],vn=[d=Math.max(Mt,Math.min(nt,d)),G=Math.max(Mt,Math.min(nt,G))];ur(pn,vn,n,t,r,e)?(A||(u.lineStart(),u.point(pn[0],pn[1])),u.point(vn[0],vn[1]),an||u.lineEnd(),q=!1):an&&(u.lineStart(),u.point(d,G),q=!1)}O=d,m=G,A=an}return k}}function kt(n,t){function r(e,i){return e=n(e,i),t(e[0],e[1])}return n.invert&&t.invert&&(r.invert=function(e,i){return e=t.invert(e,i),e&&n.invert(e[0],e[1])}),r}function Xt(n){return n}function Yt(n,t){return[N(n)>F?n+Math.round(-n/D)*D:n,t]}Yt.invert=Yt;function ge(n,t,r){return(n%=D)?t||r?kt(de(n),ye(t,r)):de(n):t||r?ye(t,r):Yt}function ve(n){return function(t,r){return t+=n,[t>F?t-D:t<-F?t+D:t,r]}}function de(n){var t=ve(n);return t.invert=ve(-n),t}function ye(n,t){var r=Y(n),e=C(n),i=Y(t),o=C(t);function l(s,p){var g=Y(p),u=Y(s)*g,c=C(s)*g,a=C(p),f=a*r+u*e;return[cn(c*i-f*o,u*r-a*e),sn(f*i+c*o)]}return l.invert=function(s,p){var g=Y(p),u=Y(s)*g,c=C(s)*g,a=C(p),f=a*i-c*o;return[cn(c*i+a*o,u*r+f*e),sn(f*r-u*e)]},l}function lr(n){n=ge(n[0]*L,n[1]*L,n.length>2?n[2]*L:0);function t(r){return r=n(r[0]*L,r[1]*L),r[0]*=J,r[1]*=J,r}return t.invert=function(r){return r=n.invert(r[0]*L,r[1]*L),r[0]*=J,r[1]*=J,r},t}function _r(n){return{stream:wt(n)}}function wt(n){return function(t){var r=new Zt;for(var e in n)r[e]=n[e];return r.stream=t,r}}function Zt(){}Zt.prototype={constructor:Zt,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Pt(n,t){n&&Ee.hasOwnProperty(n.type)&&Ee[n.type](n,t)}var me={Feature:function(n,t){Pt(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,i=r.length;++e<i;)Pt(r[e].geometry,t)}},Ee={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)n=r[e],t.point(n[0],n[1],n[2])},LineString:function(n,t){Dt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)Dt(r[e],t,0)},Polygon:function(n,t){Se(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)Se(r[e],t)},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,i=r.length;++e<i;)Pt(r[e],t)}};function Dt(n,t,r){var e=-1,i=n.length-r,o;for(t.lineStart();++e<i;)o=n[e],t.point(o[0],o[1],o[2]);t.lineEnd()}function Se(n,t){var r=-1,e=n.length;for(t.polygonStart();++r<e;)Dt(n[r],t,1);t.polygonEnd()}function Bn(n,t){n&&me.hasOwnProperty(n.type)?me[n.type](n,t):Pt(n,t)}var Kn=1/0,Rt=Kn,tt=-Kn,xt=tt,cr={point:fr,lineStart:un,lineEnd:un,polygonStart:un,polygonEnd:un,result:function(){var n=[[Kn,Rt],[tt,xt]];return tt=xt=-(Rt=Kn=1/0),n}};function fr(n,t){n<Kn&&(Kn=n),n>tt&&(tt=n),t<Rt&&(Rt=t),t>xt&&(xt=t)}var Nt=cr;function Wt(n,t,r){var e=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),e!=null&&n.clipExtent(null),Bn(r,n.stream(Nt)),t(Nt.result()),e!=null&&n.clipExtent(e),n}function Ut(n,t,r){return Wt(n,function(e){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],l=Math.min(i/(e[1][0]-e[0][0]),o/(e[1][1]-e[0][1])),s=+t[0][0]+(i-l*(e[1][0]+e[0][0]))/2,p=+t[0][1]+(o-l*(e[1][1]+e[0][1]))/2;n.scale(150*l).translate([s,p])},r)}function Me(n,t,r){return Ut(n,[[0,0],t],r)}function we(n,t,r){return Wt(n,function(e){var i=+t,o=i/(e[1][0]-e[0][0]),l=(i-o*(e[1][0]+e[0][0]))/2,s=-o*e[0][1];n.scale(150*o).translate([l,s])},r)}function Pe(n,t,r){return Wt(n,function(e){var i=+t,o=i/(e[1][1]-e[0][1]),l=-o*e[0][0],s=(i-o*(e[1][1]+e[0][1]))/2;n.scale(150*o).translate([l,s])},r)}var Re=16,sr=Y(30*L);function xe(n,t){return+t?hr(n,t):pr(n)}function pr(n){return wt({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}function hr(n,t){function r(e,i,o,l,s,p,g,u,c,a,f,h,E,S){var w=g-e,O=u-i,m=w*w+O*O;if(m>4*t&&E--){var A=l+a,T=s+f,q=p+h,k=hn(A*A+T*T+q*q),j=sn(q/=k),I=N(N(q)-1)<P||N(o-c)<P?(o+c)/2:cn(T,A),_=n(I,j),x=_[0],X=_[1],on=x-e,B=X-i,d=O*on-w*B;(d*d/m>t||N((w*on+O*B)/m-.5)>.3||l*a+s*f+p*h<sr)&&(r(e,i,o,l,s,p,x,X,I,A/=k,T/=k,q,E,S),S.point(x,X),r(x,X,I,A,T,q,g,u,c,a,f,h,E,S))}}return function(e){var i,o,l,s,p,g,u,c,a,f,h,E,S={point:w,lineStart:O,lineEnd:A,polygonStart:function(){e.polygonStart(),S.lineStart=T},polygonEnd:function(){e.polygonEnd(),S.lineStart=O}};function w(j,I){j=n(j,I),e.point(j[0],j[1])}function O(){c=NaN,S.point=m,e.lineStart()}function m(j,I){var _=Nn([j,I]),x=n(j,I);r(c,a,u,f,h,E,c=x[0],a=x[1],u=j,f=_[0],h=_[1],E=_[2],Re,e),e.point(c,a)}function A(){S.point=w,e.lineEnd()}function T(){O(),S.point=q,S.lineEnd=k}function q(j,I){m(i=j,I),o=c,l=a,s=f,p=h,g=E,S.point=m}function k(){r(c,a,u,f,h,E,o,l,i,s,p,g,Re,e),S.lineEnd=A,A()}return S}}var gr=wt({point:function(n,t){this.stream.point(n*L,t*L)}});function vr(n){return wt({point:function(t,r){var e=n(t,r);return this.stream.point(e[0],e[1])}})}function dr(n,t,r,e,i){function o(l,s){return l*=e,s*=i,[t+n*l,r-n*s]}return o.invert=function(l,s){return[(l-t)/n*e,(r-s)/n*i]},o}function Ne(n,t,r,e,i,o){var l=Y(o),s=C(o),p=l*n,g=s*n,u=l/n,c=s/n,a=(s*r-l*t)/n,f=(s*t+l*r)/n;function h(E,S){return E*=e,S*=i,[p*E-g*S+t,r-g*E-p*S]}return h.invert=function(E,S){return[e*(u*E-c*S+a),i*(f-c*E-u*S)]},h}function At(n){return Ae(function(){return n})()}function Ae(n){var t,r=150,e=480,i=250,o=0,l=0,s=0,p=0,g=0,u,c=0,a=1,f=1,h=null,E=se,S=null,w,O,m,A=Xt,T=.5,q,k,j,I,_;function x(d){return j(d[0]*L,d[1]*L)}function X(d){return d=j.invert(d[0],d[1]),d&&[d[0]*J,d[1]*J]}x.stream=function(d){return I&&_===d?I:I=gr(vr(u)(E(q(A(_=d)))))},x.preclip=function(d){return arguments.length?(E=d,h=void 0,B()):E},x.postclip=function(d){return arguments.length?(A=d,S=w=O=m=null,B()):A},x.clipAngle=function(d){return arguments.length?(E=+d?or(h=d*L):(h=null,se),B()):h*J},x.clipExtent=function(d){return arguments.length?(A=d==null?(S=w=O=m=null,Xt):ar(S=+d[0][0],w=+d[0][1],O=+d[1][0],m=+d[1][1]),B()):S==null?null:[[S,w],[O,m]]},x.scale=function(d){return arguments.length?(r=+d,on()):r},x.translate=function(d){return arguments.length?(e=+d[0],i=+d[1],on()):[e,i]},x.center=function(d){return arguments.length?(o=d[0]%360*L,l=d[1]%360*L,on()):[o*J,l*J]},x.rotate=function(d){return arguments.length?(s=d[0]%360*L,p=d[1]%360*L,g=d.length>2?d[2]%360*L:0,on()):[s*J,p*J,g*J]},x.angle=function(d){return arguments.length?(c=d%360*L,on()):c*J},x.reflectX=function(d){return arguments.length?(a=d?-1:1,on()):a<0},x.reflectY=function(d){return arguments.length?(f=d?-1:1,on()):f<0},x.precision=function(d){return arguments.length?(q=xe(k,T=d*d),B()):hn(T)},x.fitExtent=function(d,G){return Ut(x,d,G)},x.fitSize=function(d,G){return Me(x,d,G)},x.fitWidth=function(d,G){return we(x,d,G)},x.fitHeight=function(d,G){return Pe(x,d,G)};function on(){var d=Ne(r,0,0,a,f,c).apply(null,t(o,l)),G=(c?Ne:dr)(r,e-d[0],i-d[1],a,f,c);return u=ge(s,p,g),k=kt(t,G),j=kt(u,k),q=xe(k,T),B()}function B(){return I=_=null,x}return function(){return t=n.apply(this,arguments),x.invert=t.invert&&X,on()}}function je(n,t){return[Y(t)*C(n),C(t)]}je.invert=Tt(sn);function yr(){return At(je).scale(249.5).clipAngle(90+P)}function mr(n){var t=0,r=F/3,e=Ae(n),i=e(t,r);return i.parallels=function(o){return arguments.length?e(t=o[0]*L,r=o[1]*L):[t*J,r*J]},i}function Er(n){var t=Y(n);function r(e,i){return[e*t,C(i)/t]}return r.invert=function(e,i){return[e/t,sn(i*t)]},r}function Sr(n,t){var r=C(n),e=(r+C(t))/2;if(N(e)<P)return Er(n);var i=1+r*(2*e-r),o=hn(i)/e;function l(s,p){var g=hn(i-2*e*C(p))/e;return[g*C(s*=e),o-g*Y(s)]}return l.invert=function(s,p){var g=o-p,u=cn(s,N(g))*bn(g);return g*e<0&&(u-=F*bn(s)*bn(g)),[u/e,sn((i-(s*s+g*g)*e*e)/(2*e))]},l}function _t(){return mr(Sr).scale(155.424).center([0,33.6442])}function Oe(){return _t().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Mr(n){var t=n.length;return{point:function(r,e){for(var i=-1;++i<t;)n[i].point(r,e)},sphere:function(){for(var r=-1;++r<t;)n[r].sphere()},lineStart:function(){for(var r=-1;++r<t;)n[r].lineStart()},lineEnd:function(){for(var r=-1;++r<t;)n[r].lineEnd()},polygonStart:function(){for(var r=-1;++r<t;)n[r].polygonStart()},polygonEnd:function(){for(var r=-1;++r<t;)n[r].polygonEnd()}}}function wr(){var n,t,r=Oe(),e,i=_t().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o,l=_t().rotate([157,0]).center([-3,19.9]).parallels([8,18]),s,p,g={point:function(a,f){p=[a,f]}};function u(a){var f=a[0],h=a[1];return p=null,e.point(f,h),p||(o.point(f,h),p)||(s.point(f,h),p)}u.invert=function(a){var f=r.scale(),h=r.translate(),E=(a[0]-h[0])/f,S=(a[1]-h[1])/f;return(S>=.12&&S<.234&&E>=-.425&&E<-.214?i:S>=.166&&S<.234&&E>=-.214&&E<-.115?l:r).invert(a)},u.stream=function(a){return n&&t===a?n:n=Mr([r.stream(t=a),i.stream(a),l.stream(a)])},u.precision=function(a){return arguments.length?(r.precision(a),i.precision(a),l.precision(a),c()):r.precision()},u.scale=function(a){return arguments.length?(r.scale(a),i.scale(a*.35),l.scale(a),u.translate(r.translate())):r.scale()},u.translate=function(a){if(!arguments.length)return r.translate();var f=r.scale(),h=+a[0],E=+a[1];return e=r.translate(a).clipExtent([[h-.455*f,E-.238*f],[h+.455*f,E+.238*f]]).stream(g),o=i.translate([h-.307*f,E+.201*f]).clipExtent([[h-.425*f+P,E+.12*f+P],[h-.214*f-P,E+.234*f-P]]).stream(g),s=l.translate([h-.205*f,E+.212*f]).clipExtent([[h-.214*f+P,E+.166*f+P],[h-.115*f-P,E+.234*f-P]]).stream(g),c()},u.fitExtent=function(a,f){return Ut(u,a,f)},u.fitSize=function(a,f){return Me(u,a,f)},u.fitWidth=function(a,f){return we(u,a,f)},u.fitHeight=function(a,f){return Pe(u,a,f)};function c(){return n=t=null,u}return u.scale(1070)}function Ht(n,t){return[n,ae(Un((V+t)/2))]}Ht.invert=function(n,t){return[n,2*b(oe(t))-V]};function Pr(){return Rr(Ht).scale(961/D)}function Rr(n){var t=At(n),r=t.center,e=t.scale,i=t.translate,o=t.clipExtent,l=null,s,p,g;t.scale=function(c){return arguments.length?(e(c),u()):e()},t.translate=function(c){return arguments.length?(i(c),u()):i()},t.center=function(c){return arguments.length?(r(c),u()):r()},t.clipExtent=function(c){return arguments.length?(c==null?l=s=p=g=null:(l=+c[0][0],s=+c[0][1],p=+c[1][0],g=+c[1][1]),u()):l==null?null:[[l,s],[p,g]]};function u(){var c=F*e(),a=t(lr(t.rotate()).invert([0,0]));return o(l==null?[[a[0]-c,a[1]-c],[a[0]+c,a[1]+c]]:n===Ht?[[Math.max(a[0]-c,l),s],[Math.min(a[0]+c,p),g]]:[[l,Math.max(a[1]-c,s)],[p,Math.min(a[1]+c,g)]])}return u()}function Le(n,t){var r=t*t,e=r*r;return[n*(.8707-.131979*r+e*(-.013791+e*(.003971*r-.001529*e))),t*(1.007226+r*(.015085+e*(-.044475+.028874*r-.005916*e)))]}Le.invert=function(n,t){var r=t,e=25,i;do{var o=r*r,l=o*o;r-=i=(r*(1.007226+o*(.015085+l*(-.044475+.028874*o-.005916*l)))-t)/(1.007226+o*(.015085*3+l*(-.044475*7+.028874*9*o-.005916*11*l)))}while(N(i)>P&&--e>0);return[n/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]};function xr(){return At(Le).scale(175.295)}var et=1.340264,rt=-.081106,it=893e-6,ot=.003796,jt=hn(3)/2,Nr=12;function ze(n,t){var r=sn(jt*C(t)),e=r*r,i=e*e*e;return[n*Y(r)/(jt*(et+3*rt*e+i*(7*it+9*ot*e))),r*(et+rt*e+i*(it+ot*e))]}ze.invert=function(n,t){for(var r=t,e=r*r,i=e*e*e,o=0,l,s,p;o<Nr&&(s=r*(et+rt*e+i*(it+ot*e))-t,p=et+3*rt*e+i*(7*it+9*ot*e),r-=l=s/p,e=r*r,i=e*e*e,!(N(l)<$));++o);return[jt*n*(et+3*rt*e+i*(7*it+9*ot*e))/Y(r),sn(C(r)/jt)]};function Ar(){return At(ze).scale(177.158)}var Bt=Rn(),Kt=Rn(),Fe,Ie,$t,Jt,Tn={point:un,lineStart:un,lineEnd:un,polygonStart:function(){Tn.lineStart=jr,Tn.lineEnd=Lr},polygonEnd:function(){Tn.lineStart=Tn.lineEnd=Tn.point=un,Bt.add(N(Kt)),Kt.reset()},result:function(){var n=Bt/2;return Bt.reset(),n}};function jr(){Tn.point=Or}function Or(n,t){Tn.point=Te,Fe=$t=n,Ie=Jt=t}function Te(n,t){Kt.add(Jt*n-$t*t),$t=n,Jt=t}function Lr(){Te(Fe,Ie)}var qe=Tn,Qt=0,Vt=0,ut=0,Ot=0,Lt=0,$n=0,bt=0,ne=0,at=0,Ce,Ge,Sn,Mn,dn={point:Zn,lineStart:ke,lineEnd:Xe,polygonStart:function(){dn.lineStart=Ir,dn.lineEnd=Tr},polygonEnd:function(){dn.point=Zn,dn.lineStart=ke,dn.lineEnd=Xe},result:function(){var n=at?[bt/at,ne/at]:$n?[Ot/$n,Lt/$n]:ut?[Qt/ut,Vt/ut]:[NaN,NaN];return Qt=Vt=ut=Ot=Lt=$n=bt=ne=at=0,n}};function Zn(n,t){Qt+=n,Vt+=t,++ut}function ke(){dn.point=zr}function zr(n,t){dn.point=Fr,Zn(Sn=n,Mn=t)}function Fr(n,t){var r=n-Sn,e=t-Mn,i=hn(r*r+e*e);Ot+=i*(Sn+n)/2,Lt+=i*(Mn+t)/2,$n+=i,Zn(Sn=n,Mn=t)}function Xe(){dn.point=Zn}function Ir(){dn.point=qr}function Tr(){Ye(Ce,Ge)}function qr(n,t){dn.point=Ye,Zn(Ce=Sn=n,Ge=Mn=t)}function Ye(n,t){var r=n-Sn,e=t-Mn,i=hn(r*r+e*e);Ot+=i*(Sn+n)/2,Lt+=i*(Mn+t)/2,$n+=i,i=Mn*n-Sn*t,bt+=i*(Sn+n),ne+=i*(Mn+t),at+=i*3,Zn(Sn=n,Mn=t)}var Ze=dn;function De(n){this._context=n}De.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,D);break}}},result:un};var te=Rn(),ee,We,Ue,lt,ct,zt={point:un,lineStart:function(){zt.point=Cr},lineEnd:function(){ee&&_e(We,Ue),zt.point=un},polygonStart:function(){ee=!0},polygonEnd:function(){ee=null},result:function(){var n=+te;return te.reset(),n}};function Cr(n,t){zt.point=_e,We=lt=n,Ue=ct=t}function _e(n,t){lt-=n,ct-=t,te.add(hn(lt*lt+ct*ct)),lt=n,ct=t}var He=zt;function Be(){this._string=[]}Be.prototype={_radius:4.5,_circle:Ke(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._string.push("M",n,",",t),this._point=1;break}case 1:{this._string.push("L",n,",",t);break}default:{this._circle==null&&(this._circle=Ke(this._radius)),this._string.push("M",n,",",t,this._circle);break}}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}else return null}};function Ke(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gr(n,t){var r=4.5,e,i;function o(l){return l&&(typeof r=="function"&&i.pointRadius(+r.apply(this,arguments)),Bn(l,e(i))),i.result()}return o.area=function(l){return Bn(l,e(qe)),qe.result()},o.measure=function(l){return Bn(l,e(He)),He.result()},o.bounds=function(l){return Bn(l,e(Nt)),Nt.result()},o.centroid=function(l){return Bn(l,e(Ze)),Ze.result()},o.projection=function(l){return arguments.length?(e=l==null?(n=null,Xt):(n=l).stream,o):n},o.context=function(l){return arguments.length?(i=l==null?(t=null,new Be):new De(t=l),typeof r!="function"&&i.pointRadius(r),o):t},o.pointRadius=function(l){return arguments.length?(r=typeof l=="function"?l:(i.pointRadius(+l),+l),o):r},o.projection(n).context(t)}function $e(n,t,r){var e=En(n,t-P,r).concat(t);return function(i){return e.map(function(o){return[i,o]})}}function Je(n,t,r){var e=En(n,t-P,r).concat(t);return function(i){return e.map(function(o){return[o,i]})}}function Qe(){var n,t,r,e,i,o,l,s,p=10,g=p,u=90,c=360,a,f,h,E,S=2.5;function w(){return{type:"MultiLineString",coordinates:O()}}function O(){return En(ln(e/u)*u,r,u).map(h).concat(En(ln(s/c)*c,l,c).map(E)).concat(En(ln(t/p)*p,n,p).filter(function(m){return N(m%u)>P}).map(a)).concat(En(ln(o/g)*g,i,g).filter(function(m){return N(m%c)>P}).map(f))}return w.lines=function(){return O().map(function(m){return{type:"LineString",coordinates:m}})},w.outline=function(){return{type:"Polygon",coordinates:[h(e).concat(E(l).slice(1),h(r).reverse().slice(1),E(s).reverse().slice(1))]}},w.extent=function(m){return arguments.length?w.extentMajor(m).extentMinor(m):w.extentMinor()},w.extentMajor=function(m){return arguments.length?(e=+m[0][0],r=+m[1][0],s=+m[0][1],l=+m[1][1],e>r&&(m=e,e=r,r=m),s>l&&(m=s,s=l,l=m),w.precision(S)):[[e,s],[r,l]]},w.extentMinor=function(m){return arguments.length?(t=+m[0][0],n=+m[1][0],o=+m[0][1],i=+m[1][1],t>n&&(m=t,t=n,n=m),o>i&&(m=o,o=i,i=m),w.precision(S)):[[t,o],[n,i]]},w.step=function(m){return arguments.length?w.stepMajor(m).stepMinor(m):w.stepMinor()},w.stepMajor=function(m){return arguments.length?(u=+m[0],c=+m[1],w):[u,c]},w.stepMinor=function(m){return arguments.length?(p=+m[0],g=+m[1],w):[p,g]},w.precision=function(m){return arguments.length?(S=+m,a=$e(o,i,90),f=Je(t,n,S),h=$e(s,l,90),E=Je(e,r,S),w):S},w.extentMajor([[-180,-90+P],[180,90-P]]).extentMinor([[-180,-80-P],[180,80+P]])}function Hr(){return Qe()()}var kr=["graticule","lines","outline","extent","extentMajor","extentMinor","step","stepMajor","stepMinor","precision","children"];function ft(){return ft=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},ft.apply(this,arguments)}function Xr(n,t){if(n==null)return{};var r={},e=Object.keys(n),i,o;for(o=0;o<e.length;o++)i=e[o],!(t.indexOf(i)>=0)&&(r[i]=n[i]);return r}function Dn(n){var t=n.graticule,r=n.lines,e=n.outline,i=n.extent,o=n.extentMajor,l=n.extentMinor,s=n.step,p=n.stepMajor,g=n.stepMinor,u=n.precision,c=n.children,a=Xr(n,kr),f=Qe();return i&&f.extent(i),o&&f.extentMajor(o),l&&f.extentMinor(l),s&&f.step(s),p&&f.stepMajor(p),g&&f.stepMinor(g),u&&f.precision(u),c?W.createElement(W.Fragment,null,c({graticule:f})):W.createElement(en,{className:"visx-geo-graticule"},t&&W.createElement("path",ft({d:t(f()),fill:"none",stroke:"black"},a)),r&&f.lines().map(function(h,E){return W.createElement("g",{key:E},W.createElement("path",ft({d:r(h),fill:"none",stroke:"black"},a)))}),e&&W.createElement("path",ft({d:e(f.outline()),fill:"none",stroke:"black"},a)))}Dn.propTypes={graticule:H().func,lines:H().func,outline:H().func,children:H().func,precision:H().number};var Yr=["data","projection","projectionFunc","clipAngle","clipExtent","scale","translate","center","rotate","precision","fitExtent","fitSize","centroid","graticule","graticuleLines","graticuleOutline","className","innerRef","pointRadius","children"];function jn(){return jn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},jn.apply(this,arguments)}function Zr(n,t){if(n==null)return{};var r={},e=Object.keys(n),i,o;for(o=0;o<e.length;o++)i=e[o],!(t.indexOf(i)>=0)&&(r[i]=n[i]);return r}var Dr={orthographic:function(){return yr()},albers:function(){return Oe()},albersUsa:function(){return wr()},mercator:function(){return Pr()},naturalEarth:function(){return xr()},equalEarth:function(){return Ar()}};function Ve(n){var t=n.data,r=n.projection,e=r===void 0?"mercator":r,i=n.projectionFunc,o=n.clipAngle,l=n.clipExtent,s=n.scale,p=n.translate,g=n.center,u=n.rotate,c=n.precision,a=n.fitExtent,f=n.fitSize,h=n.centroid,E=n.graticule,S=n.graticuleLines,w=n.graticuleOutline,O=n.className,m=n.innerRef,A=n.pointRadius,T=n.children,q=Zr(n,Yr),k=typeof e=="string"?Dr[e]:e,j=k();o&&j.clipAngle&&j.clipAngle(o),l&&j.clipExtent&&j.clipExtent(l),s&&j.scale&&j.scale(s),p&&j.translate&&j.translate(p),g&&j.center&&j.center(g),u&&j.rotate&&j.rotate(u),c&&j.precision&&j.precision(c),a&&j.fitExtent&&j.fitExtent.apply(j,a),f&&j.fitSize&&j.fitSize.apply(j,f);var I=Gr().projection(j);A&&I.pointRadius(A);var _=t.map(function(x,X){return{feature:x,type:e,projection:j,index:X,centroid:I.centroid(x),path:I(x)}});return T?W.createElement(W.Fragment,null,T({path:I,features:_,projection:j})):W.createElement(en,{className:"visx-geo"},E&&!E.foreground&&W.createElement(Dn,jn({graticule:function(X){return I(X)||""}},E)),S&&!S.foreground&&W.createElement(Dn,jn({lines:function(X){return I(X)||""}},S)),w&&!w.foreground&&W.createElement(Dn,jn({outline:function(X){return I(X)||""}},w)),_.map(function(x,X){return W.createElement("g",{key:e+"-"+X},W.createElement("path",jn({className:zn()("visx-geo-"+e,O),d:x.path||"",ref:m==null?void 0:m(x,X)},q)),h==null?void 0:h(x.centroid,x))}),i==null?void 0:i(j),(E==null?void 0:E.foreground)&&W.createElement(Dn,jn({graticule:function(X){return I(X)||""}},E)),(S==null?void 0:S.foreground)&&W.createElement(Dn,jn({lines:function(X){return I(X)||""}},S)),(w==null?void 0:w.foreground)&&W.createElement(Dn,jn({outline:function(X){return I(X)||""}},w)))}Ve.propTypes={data:H().array.isRequired,projectionFunc:H().func,clipAngle:H().number,scale:H().number,precision:H().number,centroid:H().func,className:H().string,children:H().func,innerRef:H().func,pointRadius:H().number};function re(){return re=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},re.apply(this,arguments)}function Wr(n){return W.createElement(Ve,re({projection:"albersUsa"},n))}},7286:function(ie,Qn,yn){yn.d(Qn,{Z:function(){return Vn}});function W(Z,Q){for(var en,P=Z.length,$=P-Q;$<--P;)en=Z[$],Z[$++]=Z[P],Z[P]=en}function pt(Z){return Z}function H(Z){if(Z==null)return pt;var Q,en,P=Z.scale[0],$=Z.scale[1],F=Z.translate[0],V=Z.translate[1];return function(gn,D){D||(Q=en=0);var J=2,L=gn.length,N=new Array(L);for(N[0]=(Q+=gn[0])*P+F,N[1]=(en+=gn[1])*$+V;J<L;)N[J]=gn[J],++J;return N}}function Vn(Z,Q){return typeof Q=="string"&&(Q=Z.objects[Q]),Q.type==="GeometryCollection"?{type:"FeatureCollection",features:Q.geometries.map(function(en){return zn(Z,en)})}:zn(Z,Q)}function zn(Z,Q){var en=Q.id,P=Q.bbox,$=Q.properties==null?{}:Q.properties,F=mn(Z,Q);return en==null&&P==null?{type:"Feature",properties:$,geometry:F}:P==null?{type:"Feature",id:en,properties:$,geometry:F}:{type:"Feature",id:en,bbox:P,properties:$,geometry:F}}function mn(Z,Q){var en=H(Z.transform),P=Z.arcs;function $(L,N){N.length&&N.pop();for(var b=P[L<0?~L:L],cn=0,Y=b.length;cn<Y;++cn)N.push(en(b[cn],cn));L<0&&W(N,Y)}function F(L){return en(L)}function V(L){for(var N=[],b=0,cn=L.length;b<cn;++b)$(L[b],N);return N.length<2&&N.push(N[0]),N}function gn(L){for(var N=V(L);N.length<4;)N.push(N[0]);return N}function D(L){return L.map(gn)}function J(L){var N=L.type,b;switch(N){case"GeometryCollection":return{type:N,geometries:L.geometries.map(J)};case"Point":b=F(L.coordinates);break;case"MultiPoint":b=L.coordinates.map(F);break;case"LineString":b=V(L.arcs);break;case"MultiLineString":b=L.arcs.map(V);break;case"Polygon":b=D(L.arcs);break;case"MultiPolygon":b=L.arcs.map(D);break;default:return null}return{type:N,coordinates:b}}return J(Q)}},87845:function(ie,Qn,yn){yn.d(Qn,{Z:function(){return Et}});class W{constructor(){this._partials=new Float64Array(32),this._n=0}add(y){const M=this._partials;let R=0;for(let z=0;z<this._n&&z<32;z++){const K=M[z],U=y+K,Hn=Math.abs(y)<Math.abs(K)?y-(U-K):K-(U-y);Hn&&(M[R++]=Hn),y=U}return M[R]=y,this._n=R+1,this}valueOf(){const y=this._partials;let M=this._n,R,z,K,U=0;if(M>0){for(U=y[--M];M>0&&(R=U,z=y[--M],U=R+z,K=z-(U-R),!K););M>0&&(K<0&&y[M-1]<0||K>0&&y[M-1]>0)&&(z=K*2,R=U+z,z==R-U&&(U=R))}return U}}function pt(v,y){const M=new W;if(y===void 0)for(let R of v)(R=+R)&&M.add(R);else{let R=-1;for(let z of v)(z=+y(z,++R,v))&&M.add(z)}return+M}function H(v,y){const M=new W;let R=-1;return Float64Array.from(v,y===void 0?z=>M.add(+z||0):z=>M.add(+y(z,++R,v)||0))}var Vn=1e-6,zn=1e-12,mn=Math.PI,Z=mn/2,Q=mn/4,en=mn*2,P=180/mn,$=mn/180,F=Math.abs,V=Math.atan,gn=Math.atan2,D=Math.cos,J=Math.ceil,L=Math.exp,N=Math.floor,b=Math.hypot,cn=Math.log,Y=Math.pow,ln=Math.sin,oe=Math.sign||function(v){return v>0?1:v<0?-1:0},ue=Math.sqrt,ae=Math.tan;function be(v){return v>1?0:v<-1?mn:Math.acos(v)}function C(v){return v>1?Z:v<-1?-Z:Math.asin(v)}function bn(v){return(v=ln(v/2))*v}function hn(){}function Un(v,y){v&&sn.hasOwnProperty(v.type)&&sn[v.type](v,y)}var ht={Feature:function(v,y){Un(v.geometry,y)},FeatureCollection:function(v,y){for(var M=v.features,R=-1,z=M.length;++R<z;)Un(M[R].geometry,y)}},sn={Sphere:function(v,y){y.sphere()},Point:function(v,y){v=v.coordinates,y.point(v[0],v[1],v[2])},MultiPoint:function(v,y){for(var M=v.coordinates,R=-1,z=M.length;++R<z;)v=M[R],y.point(v[0],v[1],v[2])},LineString:function(v,y){gt(v.coordinates,y,0)},MultiLineString:function(v,y){for(var M=v.coordinates,R=-1,z=M.length;++R<z;)gt(M[R],y,0)},Polygon:function(v,y){It(v.coordinates,y)},MultiPolygon:function(v,y){for(var M=v.coordinates,R=-1,z=M.length;++R<z;)It(M[R],y)},GeometryCollection:function(v,y){for(var M=v.geometries,R=-1,z=M.length;++R<z;)Un(M[R],y)}};function gt(v,y,M){var R=-1,z=v.length-M,K;for(y.lineStart();++R<z;)K=v[R],y.point(K[0],K[1],K[2]);y.lineEnd()}function It(v,y){var M=-1,R=v.length;for(y.polygonStart();++M<R;)gt(v[M],y,1);y.polygonEnd()}function Tt(v,y){v&&ht.hasOwnProperty(v.type)?ht[v.type](v,y):Un(v,y)}var un,qn,wn,Pn,Cn,Gn,Rn,xn,Fn,_n,kn,Nn,Xn,nn,rn,tn,fn={sphere:hn,point:Yn,lineStart:vt,lineEnd:yt,polygonStart:function(){fn.lineStart=mt,fn.lineEnd=le},polygonEnd:function(){fn.lineStart=vt,fn.lineEnd=yt}};function Yn(v,y){v*=$,y*=$;var M=D(y);An(M*D(v),M*ln(v),ln(y))}function An(v,y,M){++un,wn+=(v-wn)/un,Pn+=(y-Pn)/un,Cn+=(M-Cn)/un}function vt(){fn.point=dt}function dt(v,y){v*=$,y*=$;var M=D(y);nn=M*D(v),rn=M*ln(v),tn=ln(y),fn.point=qt,An(nn,rn,tn)}function qt(v,y){v*=$,y*=$;var M=D(y),R=M*D(v),z=M*ln(v),K=ln(y),U=gn(ue((U=rn*K-tn*z)*U+(U=tn*R-nn*K)*U+(U=nn*z-rn*R)*U),nn*R+rn*z+tn*K);qn+=U,Gn+=U*(nn+(nn=R)),Rn+=U*(rn+(rn=z)),xn+=U*(tn+(tn=K)),An(nn,rn,tn)}function yt(){fn.point=Yn}function mt(){fn.point=ce}function le(){Ct(Nn,Xn),fn.point=Yn}function ce(v,y){Nn=v,Xn=y,v*=$,y*=$,fn.point=Ct;var M=D(y);nn=M*D(v),rn=M*ln(v),tn=ln(y),An(nn,rn,tn)}function Ct(v,y){v*=$,y*=$;var M=D(y),R=M*D(v),z=M*ln(v),K=ln(y),U=rn*K-tn*z,Hn=tn*R-nn*K,Gt=nn*z-rn*R,St=b(U,Hn,Gt),In=C(St),En=St&&-In/St;Fn.add(En*U),_n.add(En*Hn),kn.add(En*Gt),qn+=In,Gn+=In*(nn+(nn=R)),Rn+=In*(rn+(rn=z)),xn+=In*(tn+(tn=K)),An(nn,rn,tn)}function Et(v){un=qn=wn=Pn=Cn=Gn=Rn=xn=0,Fn=new W,_n=new W,kn=new W,Tt(v,fn);var y=+Fn,M=+_n,R=+kn,z=b(y,M,R);return z<zn&&(y=Gn,M=Rn,R=xn,qn<Vn&&(y=wn,M=Pn,R=Cn),z=b(y,M,R),z<zn)?[NaN,NaN]:[gn(M,y)*P,C(R/z)*P]}}}]);
