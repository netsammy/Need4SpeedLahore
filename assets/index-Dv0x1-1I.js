(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="183",Gd=0,Il=1,Hd=2,Us=1,Wd=2,ks=3,Qi=0,ei=1,Tt=2,ji=0,ns=1,ni=2,kl=3,Nl=4,qd=5,Pn=100,Xd=101,$d=102,Kd=103,Yd=104,jd=200,Zd=201,Jd=202,Qd=203,eo=204,to=205,eu=206,tu=207,iu=208,nu=209,su=210,au=211,ru=212,ou=213,lu=214,io=0,no=1,so=2,rs=3,ao=4,ro=5,oo=6,lo=7,Vh=0,cu=1,hu=2,Pi=0,zh=1,Gh=2,Hh=3,Wh=4,qh=5,Xh=6,$h=7,Ol="attached",du="detached",Kh=300,Nn=301,os=302,rr=303,or=304,Za=306,qt=1e3,Ri=1001,Fa=1002,Ot=1003,Yh=1004,Ns=1005,Ut=1006,Pa=1007,Ki=1008,oi=1009,jh=1010,Zh=1011,Hs=1012,tl=1013,Ii=1014,hi=1015,en=1016,il=1017,nl=1018,Ws=1020,Jh=35902,Qh=35899,ed=1021,td=1022,di=1023,tn=1026,In=1027,sl=1028,al=1029,ls=1030,rl=1031,ol=1033,La=33776,Da=33777,Ia=33778,ka=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,vo=37488,yo=37489,_o=37490,xo=37491,So=37808,bo=37809,Mo=37810,wo=37811,To=37812,Eo=37813,Ao=37814,Ro=37815,Co=37816,Po=37817,Lo=37818,Do=37819,Io=37820,ko=37821,No=36492,Oo=36494,Uo=36495,Fo=36283,Bo=36284,Vo=36285,zo=36286,qs=2300,Xs=2301,lr=2302,Ul=2303,Fl=2400,Bl=2401,Vl=2402,uu=2500,fu=0,id=1,Go=2,pu=3200,nd=0,mu=1,vn="",ft="srgb",ti="srgb-linear",Ba="linear",lt="srgb",Fn=7680,zl=519,gu=512,vu=513,yu=514,ll=515,_u=516,xu=517,cl=518,Su=519,Ho=35044,Gl="300 es",Ci=2e3,$s=2001;function bu(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Mu(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Ks(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function wu(){const a=Ks("canvas");return a.style.display="block",a}const Hl={};function Va(...a){const e="THREE."+a.shift();console.log(e,...a)}function sd(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Pe(...a){a=sd(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Oe(...a){a=sd(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function za(...a){const e=a.join(" ");e in Hl||(Hl[e]=!0,Pe(...a))}function Tu(a,e,t){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Eu={[io]:no,[so]:oo,[ao]:lo,[rs]:ro,[no]:io,[oo]:so,[lo]:ao,[ro]:rs};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wl=1234567;const Fs=Math.PI/180,cs=180/Math.PI;function yi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[a&255]+Yt[a>>8&255]+Yt[a>>16&255]+Yt[a>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ze(a,e,t){return Math.max(e,Math.min(t,a))}function hl(a,e){return(a%e+e)%e}function Au(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function Ru(a,e,t){return a!==e?(t-a)/(e-a):0}function Bs(a,e,t){return(1-t)*a+t*e}function Cu(a,e,t,i){return Bs(a,e,1-Math.exp(-t*i))}function Pu(a,e=1){return e-Math.abs(hl(a,e*2)-e)}function Lu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Du(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Iu(a,e){return a+Math.floor(Math.random()*(e-a+1))}function ku(a,e){return a+Math.random()*(e-a)}function Nu(a){return a*(.5-Math.random())}function Ou(a){a!==void 0&&(Wl=a);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uu(a){return a*Fs}function Fu(a){return a*cs}function Bu(a){return(a&a-1)===0&&a!==0}function Vu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function zu(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Gu(a,e,t,i,n){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),d=s((e-i)/2),u=r((e-i)/2),f=s((i-e)/2),p=r((i-e)/2);switch(n){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*p,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*p,o*c);break;case"ZYZ":a.set(l*p,l*f,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ct(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const oe={DEG2RAD:Fs,RAD2DEG:cs,generateUUID:yi,clamp:Ze,euclideanModulo:hl,mapLinear:Au,inverseLerp:Ru,lerp:Bs,damp:Cu,pingpong:Pu,smoothstep:Lu,smootherstep:Du,randInt:Iu,randFloat:ku,randFloatSpread:Nu,seededRandom:Ou,degToRad:Uu,radToDeg:Fu,isPowerOfTwo:Bu,ceilPowerOfTwo:Vu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:Gu,normalize:ct,denormalize:gi};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[r+0],f=s[r+1],p=s[r+2],v=s[r+3];if(d!==v||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*v;g<0&&(u=-u,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const _=Math.acos(g),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+v*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+v*o;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[r],u=s[r+1],f=s[r+2],p=s[r+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-s*l,this._y=n*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*n-o*i),h=2*(o*t-s*n),d=2*(s*i-r*t);return this.x=t+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new I,ql=new nn;class ze{constructor(e,t,i,n,s,r,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c)}set(e,t,i,n,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],v=n[0],g=n[3],m=n[6],_=n[1],M=n[4],b=n[7],E=n[2],A=n[5],P=n[8];return s[0]=r*v+o*_+l*E,s[3]=r*g+o*M+l*A,s[6]=r*m+o*b+l*P,s[1]=c*v+h*_+d*E,s[4]=c*g+h*M+d*A,s[7]=c*m+h*b+d*P,s[2]=u*v+f*_+p*E,s[5]=u*g+f*M+p*A,s[8]=u*m+f*b+p*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*s,f=c*s-r*l,p=t*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*r)*v,e[3]=u*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hr.makeScale(e,t)),this}rotate(e){return this.premultiply(hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new ze,Xl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hu(){const a={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(n.r=ss(n.r),n.g=ss(n.g),n.b=ss(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vn?Ba:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return za("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return za("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[ti]:{primaries:e,whitePoint:i,transfer:Ba,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),a}const Qe=Hu();function Zi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ss(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Bn;class Wu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bn===void 0&&(Bn=Ks("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Bn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qu=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(dr(n[r].image)):s.push(dr(n[r]))}else s=dr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function dr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Wu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Xu=0;const ur=new I;class Ft extends gs{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Ri,n=Ri,s=Ut,r=Ki,o=di,l=oi,c=Ft.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=yi(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ur).x}get height(){return this.source.getSize(ur).y}get depth(){return this.source.getSize(ur).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Kh;Ft.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,n=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(f+1)/2,E=(m+1)/2,A=(h+u)/4,P=(d+v)/4,x=(p+g)/4;return M>b&&M>E?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=A/i,s=P/i):b>E?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=A/n,s=x/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=P/s,n=x/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},s=new Ft(n),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new dl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends $u{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ad extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(e,t,i,n,s,r,o,l,c,h,d,u,f,p,v,g){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c,h,d,u,f,p,v,g)}set(e,t,i,n,s,r,o,l,c,h,d,u,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,n=1/Vn.setFromMatrixColumn(e,0).length(),s=1/Vn.setFromMatrixColumn(e,1).length(),r=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,f=r*d,p=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=p+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u+v*o,t[4]=p*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=f*o-p,t[6]=v+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u-v*o,t[4]=-r*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=r*h,t[9]=v-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,p=o*h,v=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=p*d+f,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-v*d}else if(e.order==="XZY"){const u=r*l,f=r*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=r*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,ju)}lookAt(e,t,i){const n=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),rn.crossVectors(i,ai),rn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),rn.crossVectors(i,ai)),rn.normalize(),Qs.crossVectors(ai,rn),n[0]=rn.x,n[4]=Qs.x,n[8]=ai.x,n[1]=rn.y,n[5]=Qs.y,n[9]=ai.y,n[2]=rn.z,n[6]=Qs.z,n[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],M=i[7],b=i[11],E=i[15],A=n[0],P=n[4],x=n[8],w=n[12],F=n[1],C=n[5],N=n[9],L=n[13],V=n[2],z=n[6],G=n[10],W=n[14],se=n[3],J=n[7],le=n[11],xe=n[15];return s[0]=r*A+o*F+l*V+c*se,s[4]=r*P+o*C+l*z+c*J,s[8]=r*x+o*N+l*G+c*le,s[12]=r*w+o*L+l*W+c*xe,s[1]=h*A+d*F+u*V+f*se,s[5]=h*P+d*C+u*z+f*J,s[9]=h*x+d*N+u*G+f*le,s[13]=h*w+d*L+u*W+f*xe,s[2]=p*A+v*F+g*V+m*se,s[6]=p*P+v*C+g*z+m*J,s[10]=p*x+v*N+g*G+m*le,s[14]=p*w+v*L+g*W+m*xe,s[3]=_*A+M*F+b*V+E*se,s[7]=_*P+M*C+b*z+E*J,s[11]=_*x+M*N+b*G+E*le,s[15]=_*w+M*L+b*W+E*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*f-c*u,M=o*f-c*d,b=o*u-l*d,E=r*f-c*h,A=r*u-l*h,P=r*d-o*h;return t*(v*_-g*M+m*b)-i*(p*_-g*E+m*A)+n*(p*M-v*E+m*P)-s*(p*b-v*A+g*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*o-i*r,M=t*l-n*r,b=t*c-s*r,E=i*l-n*o,A=i*c-s*o,P=n*c-s*l,x=h*v-d*p,w=h*g-u*p,F=h*m-f*p,C=d*g-u*v,N=d*m-f*v,L=u*m-f*g,V=_*L-M*N+b*C+E*F-A*w+P*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=(o*L-l*N+c*C)*z,e[1]=(n*N-i*L-s*C)*z,e[2]=(v*P-g*A+m*E)*z,e[3]=(u*A-d*P-f*E)*z,e[4]=(l*F-r*L-c*w)*z,e[5]=(t*L-n*F+s*w)*z,e[6]=(g*b-p*P-m*M)*z,e[7]=(h*P-u*b+f*M)*z,e[8]=(r*N-o*F+c*x)*z,e[9]=(i*F-t*N-s*x)*z,e[10]=(p*A-v*b+m*_)*z,e[11]=(d*b-h*A-f*_)*z,e[12]=(o*w-r*C-l*x)*z,e[13]=(t*C-i*w+n*x)*z,e[14]=(v*M-p*E-g*_)*z,e[15]=(h*E-d*M+u*_)*z,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,d=o+o,u=s*c,f=s*h,p=s*d,v=r*h,g=r*d,m=o*d,_=l*c,M=l*h,b=l*d,E=i.x,A=i.y,P=i.z;return n[0]=(1-(v+m))*E,n[1]=(f+b)*E,n[2]=(p-M)*E,n[3]=0,n[4]=(f-b)*A,n[5]=(1-(u+m))*A,n[6]=(g+_)*A,n[7]=0,n[8]=(p+M)*P,n[9]=(g-_)*P,n[10]=(1-(u+v))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let r=Vn.set(n[0],n[1],n[2]).length();const o=Vn.set(n[4],n[5],n[6]).length(),l=Vn.set(n[8],n[9],n[10]).length();s<0&&(r=-r),fi.copy(this);const c=1/r,h=1/o,d=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,r,o=Ci,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n);let p,v;if(l)p=s/(r-s),v=r*s/(r-s);else if(o===Ci)p=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===$s)p=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,r,o=Ci,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n);let p,v;if(l)p=1/(r-s),v=r/(r-s);else if(o===Ci)p=-2/(r-s),v=-(r+s)/(r-s);else if(o===$s)p=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vn=new I,fi=new qe,Yu=new I(0,0,0),ju=new I(1,1,1),rn=new I,Qs=new I,ai=new I,Kl=new qe,Yl=new nn;class _i{constructor(e=0,t=0,i=0,n=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zu=0;const jl=new I,zn=new nn,Bi=new qe,ea=new I,bs=new I,Ju=new I,Qu=new nn,Zl=new I(1,0,0),Jl=new I(0,1,0),Ql=new I(0,0,1),ec={type:"added"},ef={type:"removed"},Gn={type:"childadded",child:null},fr={type:"childremoved",child:null};class bt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new _i,i=new nn,n=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new ze}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(bs,ea,this.up):Bi.lookAt(ea,bs,this.up),this.quaternion.setFromRotationMatrix(Bi),n&&(Bi.extractRotation(n.matrixWorld),zn.setFromRotationMatrix(Bi),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),p=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class We extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tf={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},ta={h:0,s:0,l:0};function mr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Qe.workingColorSpace){if(e=hl(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=mr(r,s,e+1/3),this.g=mr(r,s,e),this.b=mr(r,s,e-1/3)}return Qe.colorSpaceToWorking(this,n),this}setStyle(e,t=ft){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const i=od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Qe.workingToColorSpace(jt.copy(this),e),Math.round(Ze(jt.r*255,0,255))*65536+Math.round(Ze(jt.g*255,0,255))*256+Math.round(Ze(jt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(jt.copy(this),t);const i=jt.r,n=jt.g,s=jt.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ft){Qe.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,n=jt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(ta);const i=Bs(on.h,ta.h,t),n=Bs(on.s,ta.s,t),s=Bs(on.l,ta.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new ke;ke.NAMES=od;class ul{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nf extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new I,Vi=new I,gr=new I,zi=new I,Hn=new I,Wn=new I,tc=new I,vr=new I,yr=new I,_r=new I,xr=new St,Sr=new St,br=new St;class vi{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),pi.subVectors(e,t),n.cross(pi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){pi.subVectors(n,t),Vi.subVectors(i,t),gr.subVectors(e,t);const r=pi.dot(pi),o=pi.dot(Vi),l=pi.dot(gr),c=Vi.dot(Vi),h=Vi.dot(gr),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(r*h-o*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,n,s,r,o,l){return this.getBarycoord(e,t,i,n,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(r,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return xr.setScalar(0),Sr.setScalar(0),br.setScalar(0),xr.fromBufferAttribute(e,t),Sr.fromBufferAttribute(e,i),br.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(xr,s.x),r.addScaledVector(Sr,s.y),r.addScaledVector(br,s.z),r}static isFrontFacing(e,t,i,n){return pi.subVectors(i,t),Vi.subVectors(e,t),pi.cross(Vi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),pi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,o;Hn.subVectors(n,i),Wn.subVectors(s,i),vr.subVectors(e,i);const l=Hn.dot(vr),c=Wn.dot(vr);if(l<=0&&c<=0)return t.copy(i);yr.subVectors(e,n);const h=Hn.dot(yr),d=Wn.dot(yr);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(Hn,r);_r.subVectors(e,s);const f=Hn.dot(_r),p=Wn.dot(_r);if(p>=0&&f<=p)return t.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Wn,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return tc.subVectors(s,n),o=(d-h)/(d-h+(f-p)),t.copy(n).addScaledVector(tc,o);const m=1/(g+v+u);return r=v*m,o=u*m,t.copy(i).addScaledVector(Hn,r).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,mi):mi.fromBufferAttribute(s,r),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),na.subVectors(this.max,Ms),qn.subVectors(e.a,Ms),Xn.subVectors(e.b,Ms),$n.subVectors(e.c,Ms),ln.subVectors(Xn,qn),cn.subVectors($n,Xn),Sn.subVectors(qn,$n);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Sn.z,Sn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Sn.z,0,-Sn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Sn.y,Sn.x,0];return!Mr(t,qn,Xn,$n,na)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,qn,Xn,$n,na))?!1:(sa.crossVectors(ln,cn),t=[sa.x,sa.y,sa.z],Mr(t,qn,Xn,$n,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new I,new I,new I,new I,new I,new I,new I,new I],mi=new I,ia=new Nt,qn=new I,Xn=new I,$n=new I,ln=new I,cn=new I,Sn=new I,Ms=new I,na=new I,sa=new I,bn=new I;function Mr(a,e,t,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){bn.fromArray(a,s);const o=n.x*Math.abs(bn.x)+n.y*Math.abs(bn.y)+n.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),h=i.dot(bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const It=new I,aa=new Ye;let sf=0;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ho,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}}class ld extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cd extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const af=new Nt,ws=new I,wr=new I;class Ni{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):af.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ws,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(wr)),this.expandByPoint(ws.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rf=0;const li=new qe,Tr=new bt,Kn=new I,ri=new Nt,Ts=new Nt,Ht=new I;class Rt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?cd:ld)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(ri.min,Ts.min),ri.expandByPoint(Ht),Ht.addVectors(ri.max,Ts.max),ri.expandByPoint(Ht)):(ri.expandByPoint(Ts.min),ri.expandByPoint(Ts.max))}ri.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)Ht.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ht));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Kn.fromBufferAttribute(e,c),Ht.add(Kn)),n=Math.max(n,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new I,l[x]=new I;const c=new I,h=new I,d=new I,u=new Ye,f=new Ye,p=new Ye,v=new I,g=new I;function m(x,w,F){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,F),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,F),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[x].add(v),o[w].add(v),o[F].add(v),l[x].add(g),l[w].add(g),l[F].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,w=_.length;x<w;++x){const F=_[x],C=F.start,N=F.count;for(let L=C,V=C+N;L<V;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new I,b=new I,E=new I,A=new I;function P(x){E.fromBufferAttribute(n,x),A.copy(E);const w=o[x];M.copy(w),M.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(A,w);const C=b.dot(l[x])<0?-1:1;r.setXYZW(x,M.x,M.y,M.z,C)}for(let x=0,w=_.length;x<w;++x){const F=_[x],C=F.start,N=F.count;for(let L=C,V=C+N;L<V;L+=3)P(e.getX(L+0)),P(e.getX(L+1)),P(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new I,s=new I,r=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),h.subVectors(r,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new kt(u,h,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class of{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ho,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new I;class fl{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lf=0;class Di extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ns,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eo&&(i.blendSrc=this.blendSrc),this.blendDst!==to&&(i.blendDst=this.blendDst),this.blendEquation!==Pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new I,Er=new I,ra=new I,hn=new I,Ar=new I,oa=new I,Rr=new I;class Ja{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Er.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Er);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ra),o=hn.dot(this.direction),l=-hn.dot(ra),c=hn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,p;if(h>0)if(d=r*l-o,u=r*o-l,p=s*h,d>=0)if(u>=-p)if(u<=p){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Er).addScaledVector(ra,u),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),n=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,n,s){Ar.subVectors(t,e),oa.subVectors(i,e),Rr.crossVectors(Ar,oa);let r=this.direction.dot(Rr),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;hn.subVectors(this.origin,e);const l=o*this.direction.dot(oa.crossVectors(hn,oa));if(l<0)return null;const c=o*this.direction.dot(Ar.cross(hn));if(c<0||l+c>r)return null;const h=-o*hn.dot(Rr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ic=new qe,Mn=new Ja,la=new Ni,nc=new I,ca=new I,ha=new I,da=new I,Cr=new I,ua=new I,sc=new I,fa=new I;class O extends bt{constructor(e=new Rt,t=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Cr.fromBufferAttribute(d,e),r?ua.addScaledVector(Cr,h):ua.addScaledVector(Cr.sub(t),h))}t.add(ua)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),Mn.copy(e.ray).recast(e.near),!(la.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(la,nc)===null||Mn.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(ic.copy(s).invert(),Mn.copy(e.ray).applyMatrix4(ic),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,v=u.length;p<v;p++){const g=u[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=_,E=M;b<E;b+=3){const A=o.getX(b),P=o.getX(b+1),x=o.getX(b+2);n=pa(this,m,e,i,c,h,d,A,P,x),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=o.getX(g),M=o.getX(g+1),b=o.getX(g+2);n=pa(this,r,e,i,c,h,d,_,M,b),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=u.length;p<v;p++){const g=u[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=_,E=M;b<E;b+=3){const A=b,P=b+1,x=b+2;n=pa(this,m,e,i,c,h,d,A,P,x),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,M=g+1,b=g+2;n=pa(this,r,e,i,c,h,d,_,M,b),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function cf(a,e,t,i,n,s,r,o){let l;if(e.side===ei?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,e.side===Qi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:a}}function pa(a,e,t,i,n,s,r,o,l,c){a.getVertexPosition(o,ca),a.getVertexPosition(l,ha),a.getVertexPosition(c,da);const h=cf(a,e,t,i,ca,ha,da,sc);if(h){const d=new I;vi.getBarycoord(sc,ca,ha,da,d),n&&(h.uv=vi.getInterpolatedAttribute(n,o,l,c,d,new Ye)),s&&(h.uv1=vi.getInterpolatedAttribute(s,o,l,c,d,new Ye)),r&&(h.normal=vi.getInterpolatedAttribute(r,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};vi.getNormal(ca,ha,da,u.normal),h.face=u,h.barycoord=d}return h}const ac=new I,rc=new St,oc=new St,hf=new I,lc=new qe,ma=new I,Pr=new Ni,cc=new qe,Lr=new Ja;class df extends O{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ol,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ma),this.boundingBox.expandByPoint(ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ma),this.boundingSphere.expandByPoint(ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1&&(cc.copy(n).invert(),Lr.copy(e.ray).applyMatrix4(cc),!(this.boundingBox!==null&&Lr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===du?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;rc.fromBufferAttribute(n.attributes.skinIndex,e),oc.fromBufferAttribute(n.attributes.skinWeight,e),ac.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=oc.getComponent(s);if(r!==0){const o=rc.getComponent(s);lc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(hf.copy(ac).applyMatrix4(lc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hd extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pl extends Ft{constructor(e=null,t=1,i=1,n,s,r,o,l,c=Ot,h=Ot,d,u){super(null,r,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hc=new qe,uf=new qe;class ml{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:uf;hc.multiplyMatrices(o,t[s]),hc.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new ml(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new pl(t,e,e,di,hi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let r=t[s];r===void 0&&(Pe("Skeleton: No bone found with UUID:",s),r=new hd),this.bones.push(r),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const r=t[n];e.bones.push(r.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Wo extends kt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yn=new qe,dc=new qe,ga=[],uc=new Nt,ff=new qe,Es=new O,As=new Ni;class pf extends O{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ff)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yn),uc.copy(e.boundingBox).applyMatrix4(Yn),this.boundingBox.union(uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yn),As.copy(e.boundingSphere).applyMatrix4(Yn),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),e.ray.intersectsSphere(As)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Yn),dc.multiplyMatrices(i,Yn),Es.matrixWorld=dc,Es.raycast(e,ga);for(let r=0,o=ga.length;r<o;r++){const l=ga[r];l.instanceId=s,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new pl(new Float32Array(n*this.count),n,this.count,sl,hi));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dr=new I,mf=new I,gf=new ze;class Cn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Dr.subVectors(i,t).cross(mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gf.getNormalMatrix(e),n=this.coplanarPoint(Dr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Ni,vf=new Ye(.5,.5),va=new I;class gl{constructor(e=new Cn,t=new Cn,i=new Cn,n=new Cn,s=new Cn,r=new Cn){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){const n=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],_=s[12],M=s[13],b=s[14],E=s[15];if(n[0].setComponents(c-r,f-h,m-p,E-_).normalize(),n[1].setComponents(c+r,f+h,m+p,E+_).normalize(),n[2].setComponents(c+o,f+d,m+v,E+M).normalize(),n[3].setComponents(c-o,f-d,m-v,E-M).normalize(),i)n[4].setComponents(l,u,g,b).normalize(),n[5].setComponents(c-l,f-u,m-g,E-b).normalize();else if(n[4].setComponents(c-l,f-u,m-g,E-b).normalize(),t===Ci)n[5].setComponents(c+l,f+u,m+g,E+b).normalize();else if(t===$s)n[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){wn.center.set(0,0,0);const t=vf.distanceTo(e.center);return wn.radius=.7071067811865476+t,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(va.x=n.normal.x>0?e.max.x:e.min.x,va.y=n.normal.y>0?e.max.y:e.min.y,va.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ga extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new I,Wa=new I,fc=new qe,Rs=new Ja,ya=new Ni,Ir=new I,pc=new I;class vl extends bt{constructor(e=new Rt,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Ha.fromBufferAttribute(t,n-1),Wa.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ha.distanceTo(Wa);e.setAttribute("lineDistance",new _t(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(n),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;fc.copy(n).invert(),Rs.copy(e.ray).applyMatrix4(fc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let v=f,g=p-1;v<g;v+=c){const m=h.getX(v),_=h.getX(v+1),M=_a(this,e,Rs,l,m,_,v);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=_a(this,e,Rs,l,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let v=f,g=p-1;v<g;v+=c){const m=_a(this,e,Rs,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=_a(this,e,Rs,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _a(a,e,t,i,n,s,r){const o=a.geometry.attributes.position;if(Ha.fromBufferAttribute(o,n),Wa.fromBufferAttribute(o,s),t.distanceSqToSegment(Ha,Wa,Ir,pc)>i)return;Ir.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Ir);if(!(c<e.near||c>e.far))return{distance:c,point:pc.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const mc=new I,gc=new I;class qo extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+mc.distanceTo(gc);e.setAttribute("lineDistance",new _t(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yf extends vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vs extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vc=new qe,Xo=new Ja,xa=new Ni,Sa=new I;class Na extends bt{constructor(e=new Rt,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(n),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;vc.copy(n).invert(),Xo.copy(e.ray).applyMatrix4(vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=u,v=f;p<v;p++){const g=c.getX(p);Sa.fromBufferAttribute(d,g),yc(Sa,g,l,n,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let p=u,v=f;p<v;p++)Sa.fromBufferAttribute(d,p),yc(Sa,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yc(a,e,t,i,n,s,r){const o=Xo.distanceSqToPoint(a);if(o<t){const l=new I;Xo.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class dd extends Ft{constructor(e=[],t=Nn,i,n,s,r,o,l,c,h){super(e,t,i,n,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wi extends Ft{constructor(e,t,i,n,s,r,o,l,c){super(e,t,i,n,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ys extends Ft{constructor(e,t,i=Ii,n,s,r,o=Ot,l=Ot,c,h=tn,d=1){if(h!==tn&&h!==In)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,n,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _f extends Ys{constructor(e,t=Ii,i=Nn,n,s,r=Ot,o=Ot,l,c=tn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ud extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ee extends Rt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,i,t,e,r,s,0),p("z","y","x",1,-1,i,t,-e,r,s,1),p("x","z","y",1,1,e,i,t,n,r,2),p("x","z","y",1,-1,e,i,-t,n,r,3),p("x","y","z",1,-1,e,t,i,n,s,4),p("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function p(v,g,m,_,M,b,E,A,P,x,w){const F=b/P,C=E/x,N=b/2,L=E/2,V=A/2,z=P+1,G=x+1;let W=0,se=0;const J=new I;for(let le=0;le<G;le++){const xe=le*C-L;for(let ge=0;ge<z;ge++){const Ge=ge*F-N;J[v]=Ge*_,J[g]=xe*M,J[m]=V,c.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[m]=A>0?1:-1,h.push(J.x,J.y,J.z),d.push(ge/P),d.push(1-le/x),W+=1}}for(let le=0;le<x;le++)for(let xe=0;xe<P;xe++){const ge=u+xe+z*le,Ge=u+xe+z*(le+1),Mt=u+(xe+1)+z*(le+1),xt=u+(xe+1)+z*le;l.push(ge,Ge,xt),l.push(Ge,Mt,xt),se+=6}o.addGroup(f,se,w),f+=se,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ee(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class st extends Rt{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],f=[];let p=0;const v=[],g=i/2;let m=0;_(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function _(){const b=new I,E=new I;let A=0;const P=(t-e)/i;for(let x=0;x<=s;x++){const w=[],F=x/s,C=F*(t-e)+e;for(let N=0;N<=n;N++){const L=N/n,V=L*l+o,z=Math.sin(V),G=Math.cos(V);E.x=C*z,E.y=-F*i+g,E.z=C*G,d.push(E.x,E.y,E.z),b.set(z,P,G).normalize(),u.push(b.x,b.y,b.z),f.push(L,1-F),w.push(p++)}v.push(w)}for(let x=0;x<n;x++)for(let w=0;w<s;w++){const F=v[w][x],C=v[w+1][x],N=v[w+1][x+1],L=v[w][x+1];(e>0||w!==0)&&(h.push(F,C,L),A+=3),(t>0||w!==s-1)&&(h.push(C,N,L),A+=3)}c.addGroup(m,A,0),m+=A}function M(b){const E=p,A=new Ye,P=new I;let x=0;const w=b===!0?e:t,F=b===!0?1:-1;for(let N=1;N<=n;N++)d.push(0,g*F,0),u.push(0,F,0),f.push(.5,.5),p++;const C=p;for(let N=0;N<=n;N++){const V=N/n*l+o,z=Math.cos(V),G=Math.sin(V);P.x=w*G,P.y=g*F,P.z=w*z,d.push(P.x,P.y,P.z),u.push(0,F,0),A.x=z*.5+.5,A.y=G*.5*F+.5,f.push(A.x,A.y),p++}for(let N=0;N<n;N++){const L=E+N,V=C+N;b===!0?h.push(V,V+1,L):h.push(V+1,V,L),x+=3}c.addGroup(m,x,b===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends st{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends Rt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],r=[];o(n),c(i),h(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new I,b=new I,E=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],M),f(t[A+1],b),f(t[A+2],E),l(M,b,E,_)}function l(_,M,b,E){const A=E+1,P=[];for(let x=0;x<=A;x++){P[x]=[];const w=_.clone().lerp(b,x/A),F=M.clone().lerp(b,x/A),C=A-x;for(let N=0;N<=C;N++)N===0&&x===A?P[x][N]=w:P[x][N]=w.clone().lerp(F,N/C)}for(let x=0;x<A;x++)for(let w=0;w<2*(A-x)-1;w++){const F=Math.floor(w/2);w%2===0?(u(P[x][F+1]),u(P[x+1][F]),u(P[x][F])):(u(P[x][F+1]),u(P[x+1][F+1]),u(P[x+1][F]))}}function c(_){const M=new I;for(let b=0;b<s.length;b+=3)M.x=s[b+0],M.y=s[b+1],M.z=s[b+2],M.normalize().multiplyScalar(_),s[b+0]=M.x,s[b+1]=M.y,s[b+2]=M.z}function h(){const _=new I;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];const b=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;r.push(b,1-E)}p(),d()}function d(){for(let _=0;_<r.length;_+=6){const M=r[_+0],b=r[_+2],E=r[_+4],A=Math.max(M,b,E),P=Math.min(M,b,E);A>.9&&P<.1&&(M<.2&&(r[_+0]+=1),b<.2&&(r[_+2]+=1),E<.2&&(r[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function f(_,M){const b=_*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function p(){const _=new I,M=new I,b=new I,E=new I,A=new Ye,P=new Ye,x=new Ye;for(let w=0,F=0;w<s.length;w+=9,F+=6){_.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),b.set(s[w+6],s[w+7],s[w+8]),A.set(r[F+0],r[F+1]),P.set(r[F+2],r[F+3]),x.set(r[F+4],r[F+5]),E.copy(_).add(M).add(b).divideScalar(3);const C=g(E);v(A,F+0,_,C),v(P,F+2,M,C),v(x,F+4,b,C)}}function v(_,M,b,E){E<0&&_.x===1&&(r[M]=_.x-1),b.x===0&&b.z===0&&(r[M]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.vertices,e.indices,e.radius,e.detail)}}class _l extends yl{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _l(e.radius,e.detail)}}class et extends Rt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const _=m*u-r;for(let M=0;M<c;M++){const b=M*d-s;p.push(b,-_,0),v.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const M=_+c*m,b=_+c*(m+1),E=_+1+c*(m+1),A=_+1+c*m;f.push(M,b,A),f.push(b,E,A)}this.setIndex(f),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.widthSegments,e.heightSegments)}}class qa extends Rt{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,f=new I,p=new Ye;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){const m=s+g/i*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let v=0;v<n;v++){const g=v*(i+1);for(let m=0;m<i;m++){const _=m+g,M=_,b=_+i+1,E=_+i+2,A=_+1;o.push(M,b,A),o.push(b,E,A)}}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $t extends Rt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new I,u=new I,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const _=[],M=m/i;let b=0;m===0&&r===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const A=E/t;d.x=-e*Math.cos(n+A*s)*Math.sin(r+M*o),d.y=e*Math.cos(r+M*o),d.z=e*Math.sin(n+A*s)*Math.sin(r+M*o),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(A+b,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){const M=h[m][_+1],b=h[m][_],E=h[m+1][_],A=h[m+1][_+1];(m!==0||r>0)&&f.push(M,b,A),(m!==i-1||l<Math.PI)&&f.push(b,E,A)}this.setIndex(f),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xa extends Rt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new I,f=new I,p=new I;for(let v=0;v<=i;v++){const g=r+v/i*o;for(let m=0;m<=n;m++){const _=m/n*s;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/n),d.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=n;g++){const m=(n+1)*v+g-1,_=(n+1)*(v-1)+g-1,M=(n+1)*(v-1)+g,b=(n+1)*v+g;l.push(m,_,b),l.push(_,M,b)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function hs(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Jt(a){const e={};for(let t=0;t<a.length;t++){const i=hs(a[t]);for(const n in i)e[n]=i[n]}return e}function xf(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function fd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Sf={clone:hs,merge:Jt};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wf extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Y extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oi extends Y{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tf extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ba(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Af(a){function e(n,s){return a[n]-a[s]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function _c(a,e,t){const i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[r++]=a[o+l]}return n}function pd(a,e,t,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=a[n++];while(s!==void 0)}class vs{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let r;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}r=i,i=0;break t}break i}for(;i<r;){const o=i+r>>>1;e<t[o]?r=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rf extends vs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,o=n[s],l=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:s=e,o=2*t-i;break;case Vl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:r=e,l=2*i-t;break;case Vl:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),v=p*p,g=v*p,m=-u*g+2*u*v-u*p,_=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*p+1,M=(-1-f)*g+(1.5+f)*v+.5*p,b=f*g-f*v;for(let E=0;E!==o;++E)s[E]=m*r[h+E]+_*r[c+E]+M*r[l+E]+b*r[d+E];return s}}class Cf extends vs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}}class Pf extends vs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Lf extends vs{interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const v=(i-t)/(n-t),g=1-v;for(let m=0;m!==o;++m)s[m]=r[c+m]*g+r[l+m]*v;return s}const f=o*2,p=e-1;for(let v=0;v!==o;++v){const g=r[c+v],m=r[l+v],_=p*f+v*2,M=u[_],b=u[_+1],E=e*f+v*2,A=d[E],P=d[E+1];let x=(i-t)/(n-t),w,F,C,N,L;for(let V=0;V<8;V++){w=x*x,F=w*x,C=1-x,N=C*C,L=N*C;const G=L*t+3*N*x*M+3*C*w*A+F*n-i;if(Math.abs(G)<1e-10)break;const W=3*N*(M-t)+6*C*x*(A-M)+3*w*(n-A);if(Math.abs(W)<1e-10)break;x=x-G/W,x=Math.max(0,Math.min(1,x))}s[v]=L*g+3*N*x*b+3*C*w*P+F*m}return s}}class xi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Lf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case lr:t=this.InterpolantFactoryMethodSmooth;break;case Ul:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return lr;case this.InterpolantFactoryMethodBezier:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(n!==void 0&&Mu(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===lr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const d=o*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){const v=t[d+p];if(v!==t[u+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const d=o*i,u=r*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Xs;class ys extends xi{constructor(e,t,i){super(e,t,i)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=qs;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class md extends xi{constructor(e,t,i,n){super(e,t,i,n)}}md.prototype.ValueTypeName="color";class ds extends xi{constructor(e,t,i,n){super(e,t,i,n)}}ds.prototype.ValueTypeName="number";class Df extends vs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(s,0,r,c-o,r,c,l);return s}}class us extends xi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Df(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends xi{constructor(e,t,i){super(e,t,i)}}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=qs;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends xi{constructor(e,t,i,n){super(e,t,i,n)}}fs.prototype.ValueTypeName="vector";class If{constructor(e="",t=-1,i=[],n=uu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)t.push(Nf(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=i.length;s!==r;++s)t.push(xi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Af(l);l=_c(l,1,h),c=_c(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(c)}}const r=[];for(const o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return r}static parseAnimation(e,t){if(Pe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Oe("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,u,f,p,v){if(f.length!==0){const g=[],m=[];pd(f,g,m,p),g.length!==0&&v.push(new d(u,g,m))}},n=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let v=0;v<u[p].morphTargets.length;v++)f[u[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let _=0;_!==u[p].morphTargets.length;++_){const M=u[p];g.push(M.time),m.push(M.morphTarget===v?1:0)}n.push(new ds(".morphTargetInfluence["+v+"]",g,m))}l=f.length*r}else{const f=".bones["+t[d].name+"]";i(fs,f+".position",u,"pos",n),i(us,f+".quaternion",u,"rot",n),i(fs,f+".scale",u,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function kf(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return md;case"quaternion":return us;case"bool":case"boolean":return ys;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Nf(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kf(a.type);if(a.times===void 0){const t=[],i=[];pd(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Yi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(xc(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!xc(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function xc(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Of{constructor(e,t,i){const n=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Uf=new Of;class xs{constructor(e){this.manager=e!==void 0?e:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class Ff extends Error{constructor(e,t){super(e),this.response=t}}class gd extends xs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:i,onError:n});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:n});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){_();function _(){d.read().then(({done:M,value:b})=>{if(M)m.close();else{v+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let A=0,P=h.length;A<P;A++){const x=h[A];x.onProgress&&x.onProgress(E)}m.enqueue(b),_()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Ff(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Yi.add(`file:${e}`,c);const h=qi[e];delete qi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=qi[e];if(h===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const jn=new WeakMap;class Bf extends xs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Yi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=jn.get(r);d===void 0&&(d=[],jn.set(r,d)),d.push({onLoad:t,onError:n})}return r}const o=Ks("img");function l(){h(),t&&t(this);const d=jn.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}jn.delete(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),Yi.remove(`image:${e}`);const u=jn.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}jn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class es extends xs{constructor(e){super(e)}load(e,t,i,n){const s=new Ft,r=new Bf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class Qa extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vf extends Qa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kr=new qe,Sc=new I,bc=new I;class xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$s||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ma=new I,wa=new nn,bi=new I;class vd extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,wa,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,wa,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ma,wa,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,wa,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dn=new I,Mc=new Ye,wc=new Ye;class Qt extends vd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dn.x,dn.y).multiplyScalar(-e/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-e/dn.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,wc),t.subVectors(wc,Mc)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zf extends xl{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=cs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yd extends Qa{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new zf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Gf extends xl{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class gn extends Qa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Gf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class er extends vd{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hf extends xl{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _d extends Qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Hf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Nr=new WeakMap;class Wf extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Yi.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{if(Nr.has(r)===!0)n&&n(Nr.get(r)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Nr.set(l,c),Yi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Yi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zn=-90,Jn=1;class qf extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qt(Zn,Jn,e,t);n.layers=this.layers,this.add(n);const s=new Qt(Zn,Jn,e,t);s.layers=this.layers,this.add(s);const r=new Qt(Zn,Jn,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Zn,Jn,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Zn,Jn,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Zn,Jn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Xf extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sl="\\[\\]\\.:\\/",$f=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",Kf="[^"+Sl.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",bl),jf=/(WCOD+)?/.source.replace("WCOD",Kf),Zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Jf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),Qf=new RegExp("^"+Yf+jf+Zf+Jf+"$"),ep=["material","materials","bones","map"];class tp{constructor(e,t,i){const n=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){const t=Qf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);ep.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=tp;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Tc(a,e,t,i){const n=ip(i);switch(t){case ed:return a*e;case sl:return a*e/n.components*n.byteLength;case al:return a*e/n.components*n.byteLength;case ls:return a*e*2/n.components*n.byteLength;case rl:return a*e*2/n.components*n.byteLength;case td:return a*e*3/n.components*n.byteLength;case di:return a*e*4/n.components*n.byteLength;case ol:return a*e*4/n.components*n.byteLength;case La:case Da:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ia:case ka:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ho:case fo:return Math.max(a,16)*Math.max(e,8)/4;case co:case uo:return Math.max(a,8)*Math.max(e,8)/2;case po:case mo:case vo:case yo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:case xo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Co:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Po:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Io:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case No:case Oo:case Uo:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Fo:case Bo:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Vo:case zo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ip(a){switch(a){case oi:case jh:return{byteLength:1,components:1};case Hs:case Zh:case en:return{byteLength:2,components:1};case il:case nl:return{byteLength:2,components:4};case Ii:case tl:case hi:return{byteLength:4,components:1};case Jh:case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xd(){let a=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function np(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(a.bindBuffer(c,o),d.length===0)a.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];a.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:r}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,im=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:sp,alphahash_pars_fragment:ap,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:dp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:Mp,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ep,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Ip,colorspace_fragment:kp,colorspace_pars_fragment:Np,envmap_fragment:Op,envmap_common_pars_fragment:Up,envmap_pars_fragment:Fp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:zp,fog_pars_vertex:Gp,fog_fragment:Hp,fog_pars_fragment:Wp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Xp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:Yp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:im,lights_fragment_begin:nm,lights_fragment_maps:sm,lights_fragment_end:am,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:um,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:Mm,normal_pars_vertex:wm,normal_vertex:Tm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Dm,premultiplied_alpha_fragment:Im,project_vertex:km,dithering_fragment:Nm,dithering_pars_fragment:Om,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:Vm,shadowmap_vertex:zm,shadowmask_pars_fragment:Gm,skinbase_vertex:Hm,skinning_pars_vertex:Wm,skinning_vertex:qm,skinnormal_vertex:Xm,specularmap_fragment:$m,specularmap_pars_fragment:Km,tonemapping_fragment:Ym,tonemapping_pars_fragment:jm,transmission_fragment:Zm,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ig,background_vert:ng,background_frag:sg,backgroundCube_vert:ag,backgroundCube_frag:rg,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distance_vert:dg,distance_frag:ug,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:vg,meshbasic_frag:yg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:Sg,meshmatcap_frag:bg,meshnormal_vert:Mg,meshnormal_frag:wg,meshphong_vert:Tg,meshphong_frag:Eg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ig,shadow_frag:kg,sprite_vert:Ng,sprite_frag:Og},fe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Ei={basic:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Jt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Jt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Jt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Jt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Jt([fe.lights,fe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Ei.physical={uniforms:Jt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ta={r:0,b:0,g:0},Tn=new _i,Ug=new qe;function Fg(a,e,t,i,n,s){const r=new ke(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const b=_.backgroundBlurriness>0;M=e.get(M,b)}return M}function p(_){let M=!1;const b=f(_);b===null?g(r,o):b&&b.isColor&&(g(b,1),M=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(_,M){const b=f(M);b&&(b.isCubeTexture||b.mapping===Za)?(c===void 0&&(c=new O(new ee(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:hs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Tn.copy(M.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(Tn)),c.material.toneMapped=Qe.getTransfer(b.colorSpace)!==lt,(h!==b||d!==b.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=a.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new O(new et(2,2),new ki({name:"BackgroundMaterial",uniforms:hs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=a.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(Ta,fd(a)),t.buffers.color.setClear(Ta.r,Ta.g,Ta.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(r,o)},render:p,addToRenderList:v,dispose:m}}function Bg(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,r=!1;function o(C,N,L,V,z){let G=!1;const W=d(C,V,L,N);s!==W&&(s=W,c(s.object)),G=f(C,V,L,z),G&&p(C,V,L,z),z!==null&&e.update(z,a.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,b(C,N,L,V),z!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return a.createVertexArray()}function c(C){return a.bindVertexArray(C)}function h(C){return a.deleteVertexArray(C)}function d(C,N,L,V){const z=V.wireframe===!0;let G=i[N.id];G===void 0&&(G={},i[N.id]=G);const W=C.isInstancedMesh===!0?C.id:0;let se=G[W];se===void 0&&(se={},G[W]=se);let J=se[L.id];J===void 0&&(J={},se[L.id]=J);let le=J[z];return le===void 0&&(le=u(l()),J[z]=le),le}function u(C){const N=[],L=[],V=[];for(let z=0;z<t;z++)N[z]=0,L[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:V,object:C,attributes:{},index:null}}function f(C,N,L,V){const z=s.attributes,G=N.attributes;let W=0;const se=L.getAttributes();for(const J in se)if(se[J].location>=0){const xe=z[J];let ge=G[J];if(ge===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),xe===void 0||xe.attribute!==ge||ge&&xe.data!==ge.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function p(C,N,L,V){const z={},G=N.attributes;let W=0;const se=L.getAttributes();for(const J in se)if(se[J].location>=0){let xe=G[J];xe===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const ge={};ge.attribute=xe,xe&&xe.data&&(ge.data=xe.data),z[J]=ge,W++}s.attributes=z,s.attributesNum=W,s.index=V}function v(){const C=s.newAttributes;for(let N=0,L=C.length;N<L;N++)C[N]=0}function g(C){m(C,0)}function m(C,N){const L=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;L[C]=1,V[C]===0&&(a.enableVertexAttribArray(C),V[C]=1),z[C]!==N&&(a.vertexAttribDivisor(C,N),z[C]=N)}function _(){const C=s.newAttributes,N=s.enabledAttributes;for(let L=0,V=N.length;L<V;L++)N[L]!==C[L]&&(a.disableVertexAttribArray(L),N[L]=0)}function M(C,N,L,V,z,G,W){W===!0?a.vertexAttribIPointer(C,N,L,z,G):a.vertexAttribPointer(C,N,L,V,z,G)}function b(C,N,L,V){v();const z=V.attributes,G=L.getAttributes(),W=N.defaultAttributeValues;for(const se in G){const J=G[se];if(J.location>=0){let le=z[se];if(le===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const xe=le.normalized,ge=le.itemSize,Ge=e.get(le);if(Ge===void 0)continue;const Mt=Ge.buffer,xt=Ge.type,Z=Ge.bytesPerElement,ce=xt===a.INT||xt===a.UNSIGNED_INT||le.gpuType===tl;if(le.isInterleavedBufferAttribute){const ue=le.data,Ve=ue.stride,Ie=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Ue=0;Ue<J.locationSize;Ue++)m(J.location+Ue,ue.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ue=0;Ue<J.locationSize;Ue++)g(J.location+Ue);a.bindBuffer(a.ARRAY_BUFFER,Mt);for(let Ue=0;Ue<J.locationSize;Ue++)M(J.location+Ue,ge/J.locationSize,xt,xe,Ve*Z,(Ie+ge/J.locationSize*Ue)*Z,ce)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)m(J.location+ue,le.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<J.locationSize;ue++)g(J.location+ue);a.bindBuffer(a.ARRAY_BUFFER,Mt);for(let ue=0;ue<J.locationSize;ue++)M(J.location+ue,ge/J.locationSize,xt,xe,ge*Z,ge/J.locationSize*ue*Z,ce)}}else if(W!==void 0){const xe=W[se];if(xe!==void 0)switch(xe.length){case 2:a.vertexAttrib2fv(J.location,xe);break;case 3:a.vertexAttrib3fv(J.location,xe);break;case 4:a.vertexAttrib4fv(J.location,xe);break;default:a.vertexAttrib1fv(J.location,xe)}}}}_()}function E(){w();for(const C in i){const N=i[C];for(const L in N){const V=N[L];for(const z in V){const G=V[z];for(const W in G)h(G[W].object),delete G[W];delete V[z]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const L in N){const V=N[L];for(const z in V){const G=V[z];for(const W in G)h(G[W].object),delete G[W];delete V[z]}}delete i[C.id]}function P(C){for(const N in i){const L=i[N];for(const V in L){const z=L[V];if(z[C.id]===void 0)continue;const G=z[C.id];for(const W in G)h(G[W].object),delete G[W];delete z[C.id]}}}function x(C){for(const N in i){const L=i[N],V=C.isInstancedMesh===!0?C.id:0,z=L[V];if(z!==void 0){for(const G in z){const W=z[G];for(const se in W)h(W[se].object),delete W[se];delete z[G]}delete L[V],Object.keys(L).length===0&&delete i[N]}}}function w(){F(),r=!0,s!==n&&(s=n,c(s.object))}function F(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Vg(a,e,t){let i;function n(c){i=c}function s(c,h){a.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,d){d!==0&&(a.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)r(c[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v]*u[v];t.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zg(a,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){return!(P!==di&&i.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==oi&&i.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hi&&!x)}function l(P){if(P==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),_=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),b=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:E,samples:A}}function Gg(a){const e=this;let t=null,i=0,n=!1,s=!1;const r=new Cn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=a.get(d);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,M=_*4;let b=m.clippingState||null;l.value=b,b=h(p,u,M,f);for(let E=0;E!==M;++E)b[E]=t[E];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,b=f;M!==v;++M,b+=4)r.copy(d[M]).applyMatrix4(_,o),r.normal.toArray(g,b),g[b+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const yn=4,Ec=[.125,.215,.35,.446,.526,.582],Ln=20,Hg=256,Cs=new er,Ac=new ke;let Or=null,Ur=0,Fr=0,Br=!1;const Wg=new I;class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:r=256,position:o=Wg}=s;Or=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Or,Ur,Fr),this._renderer.xr.enabled=Br,e.scissorTest=!1,Qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nn||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Or=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:en,format:di,colorSpace:ti,depthBuffer:!1},n=Cc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qg(s)),this._blurMaterial=$g(s,e,t),this._ggxMaterial=Xg(s,e,t)}return n}_compileMaterial(e){const t=new O(new Rt,e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,i,n,s){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ac),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new O(new ee,new De({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(Ac),m=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const E=this._cubeSize;Qn(n,b*E,M>2?E:0,E,E),d.setRenderTarget(n),m&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Nn||e.mapping===os;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Cs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,v=this._sizeLods[i],g=3*v*(i>p-yn?i-p+yn:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Qn(s,g,m,3*v,2*v),n.setRenderTarget(s),n.render(o,Cs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Qn(e,g,m,3*v,2*v),n.setRenderTarget(e),n.render(o,Cs)}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[n];d.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ln-1),v=s/p,g=isFinite(s)?1+Math.floor(h*v):Ln;g>Ln&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ln}`);const m=[];let _=0;for(let P=0;P<Ln;++P){const x=P/v,w=Math.exp(-x*x/2);m.push(w),P===0?_+=w:P<g&&(_+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=p,u.mipInt.value=M-i;const b=this._sizeLods[n],E=3*b*(n>M-yn?n-M+yn:0),A=4*(this._cubeSize-b);Qn(t,E,A,3*b,2*b),l.setRenderTarget(t),l.render(d,Cs)}}function qg(a){const e=[],t=[],i=[];let n=a;const s=a-yn+1+Ec.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>a-yn?l=Ec[r-a+yn-1]:r===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),M=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,x=A>2?0:-1,w=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];_.set(w,v*p*A),M.set(u,g*p*A);const F=[A,A,A,A,A,A];b.set(F,m*p*A)}const E=new Rt;E.setAttribute("position",new kt(_,v)),E.setAttribute("uv",new kt(M,g)),E.setAttribute("faceIndex",new kt(b,m)),i.push(new O(E,null)),n>yn&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Cc(a,e,t){const i=new Li(a,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qn(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function Xg(a,e,t){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $g(a,e,t){const i=new Float32Array(Ln),n=new I(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Pc(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Lc(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sd extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new dd(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ee(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:ji});s.uniforms.tEquirect.value=t;const r=new O(n,s),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Ut),new qf(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}function Kg(a){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?r(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===rr||f===or)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const v=new Sd(p.height);return v.fromEquirectangularTexture(a,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const f=u.mapping,p=f===rr||f===or,v=f===Nn||f===os;if(p||v){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Rc(a)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const _=u.image;return p&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new Rc(a)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===rr?u.mapping=Nn:f===or&&(u.mapping=os),u}function l(u){let f=0;const p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Yg(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=a.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&za("WebGLRenderer: "+i+" extension not supported."),n}}}function jg(a,e,t,i){const n={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],a.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let M=0,b=_.length;M<b;M+=3){const E=_[M+0],A=_[M+1],P=_[M+2];u.push(E,A,A,P,P,E)}}else{const _=p.array;v=p.version;for(let M=0,b=_.length/3-1;M<b;M+=3){const E=M+0,A=M+1,P=M+2;u.push(E,A,A,P,P,E)}}const g=new(p.count>=65535?cd:ld)(u,1);g.version=v;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Zg(a,e,t){let i;function n(u){i=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function l(u,f){a.drawElements(i,f,s,u*r),t.update(f,i,1)}function c(u,f,p){p!==0&&(a.drawElementsInstanced(i,f,s,u*r,p),t.update(f,i,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function d(u,f,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/r,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,v,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*v[_];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Jg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Qg(a,e,t){const i=new WeakMap,n=new St;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*E*4*d),P=new ad(A,b,E,d);P.type=hi,P.needsUpdate=!0;const x=M*4;for(let F=0;F<d;F++){const C=g[F],N=m[F],L=_[F],V=b*E*4*F;for(let z=0;z<C.count;z++){const G=z*x;f===!0&&(n.fromBufferAttribute(C,z),A[V+G+0]=n.x,A[V+G+1]=n.y,A[V+G+2]=n.z,A[V+G+3]=0),p===!0&&(n.fromBufferAttribute(N,z),A[V+G+4]=n.x,A[V+G+5]=n.y,A[V+G+6]=n.z,A[V+G+7]=0),v===!0&&(n.fromBufferAttribute(L,z),A[V+G+8]=n.x,A[V+G+9]=n.y,A[V+G+10]=n.z,A[V+G+11]=L.itemSize===4?n.w:1)}}u={count:d,texture:P,size:new Ye(b,E)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",p),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function e0(a,e,t,i,n){let s=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const t0={[zh]:"LINEAR_TONE_MAPPING",[Gh]:"REINHARD_TONE_MAPPING",[Hh]:"CINEON_TONE_MAPPING",[Wh]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function i0(a,e,t,i,n){const s=new Li(e,t,{type:a,depthBuffer:i,stencilBuffer:n}),r=new Li(e,t,{type:en,depthBuffer:!1,stencilBuffer:!1}),o=new Rt;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));const l=new wf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new O(o,l),h=new er(-1,1,1,-1,0,1);let d=null,u=null,f=!1,p,v=null,g=[],m=!1;this.setSize=function(_,M){s.setSize(_,M),r.setSize(_,M);for(let b=0;b<g.length;b++){const E=g[b];E.setSize&&E.setSize(_,M)}},this.setEffects=function(_){g=_,m=g.length>0&&g[0].isRenderPass===!0;const M=s.width,b=s.height;for(let E=0;E<g.length;E++){const A=g[E];A.setSize&&A.setSize(M,b)}},this.begin=function(_,M){if(f||_.toneMapping===Pi&&g.length===0)return!1;if(v=M,M!==null){const b=M.width,E=M.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return m===!1&&_.setRenderTarget(s),p=_.toneMapping,_.toneMapping=Pi,!0},this.hasRenderPass=function(){return m},this.end=function(_,M){_.toneMapping=p,f=!0;let b=s,E=r;for(let A=0;A<g.length;A++){const P=g[A];if(P.enabled!==!1&&(P.render(_,E,b,M),P.needsSwap!==!1)){const x=b;b=E,E=x}}if(d!==_.outputColorSpace||u!==_.toneMapping){d=_.outputColorSpace,u=_.toneMapping,l.defines={},Qe.getTransfer(d)===lt&&(l.defines.SRGB_TRANSFER="");const A=t0[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(v),_.render(c,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const bd=new Ft,$o=new Ys(1,1),Md=new ad,wd=new Ku,Td=new dd,Dc=[],Ic=[],kc=new Float32Array(16),Nc=new Float32Array(9),Oc=new Float32Array(4);function Ss(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let s=Dc[n];if(s===void 0&&(s=new Float32Array(n),Dc[n]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Bt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Vt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function ir(a,e){let t=Ic[e];t===void 0&&(t=new Int32Array(e),Ic[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function n0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function s0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;a.uniform2fv(this.addr,e),Vt(t,e)}}function a0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;a.uniform3fv(this.addr,e),Vt(t,e)}}function r0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;a.uniform4fv(this.addr,e),Vt(t,e)}}function o0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;Oc.set(i),a.uniformMatrix2fv(this.addr,!1,Oc),Vt(t,i)}}function l0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;Nc.set(i),a.uniformMatrix3fv(this.addr,!1,Nc),Vt(t,i)}}function c0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;kc.set(i),a.uniformMatrix4fv(this.addr,!1,kc),Vt(t,i)}}function h0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function d0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;a.uniform2iv(this.addr,e),Vt(t,e)}}function u0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;a.uniform3iv(this.addr,e),Vt(t,e)}}function f0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;a.uniform4iv(this.addr,e),Vt(t,e)}}function p0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function m0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;a.uniform2uiv(this.addr,e),Vt(t,e)}}function g0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;a.uniform3uiv(this.addr,e),Vt(t,e)}}function v0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;a.uniform4uiv(this.addr,e),Vt(t,e)}}function y0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?($o.compareFunction=t.isReversedDepthBuffer()?cl:ll,s=$o):s=bd,t.setTexture2D(e||s,n)}function _0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||wd,n)}function x0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Td,n)}function S0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Md,n)}function b0(a){switch(a){case 5126:return n0;case 35664:return s0;case 35665:return a0;case 35666:return r0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return u0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return S0}}function M0(a,e){a.uniform1fv(this.addr,e)}function w0(a,e){const t=Ss(e,this.size,2);a.uniform2fv(this.addr,t)}function T0(a,e){const t=Ss(e,this.size,3);a.uniform3fv(this.addr,t)}function E0(a,e){const t=Ss(e,this.size,4);a.uniform4fv(this.addr,t)}function A0(a,e){const t=Ss(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function R0(a,e){const t=Ss(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function C0(a,e){const t=Ss(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function P0(a,e){a.uniform1iv(this.addr,e)}function L0(a,e){a.uniform2iv(this.addr,e)}function D0(a,e){a.uniform3iv(this.addr,e)}function I0(a,e){a.uniform4iv(this.addr,e)}function k0(a,e){a.uniform1uiv(this.addr,e)}function N0(a,e){a.uniform2uiv(this.addr,e)}function O0(a,e){a.uniform3uiv(this.addr,e)}function U0(a,e){a.uniform4uiv(this.addr,e)}function F0(a,e,t){const i=this.cache,n=e.length,s=ir(t,n);Bt(i,s)||(a.uniform1iv(this.addr,s),Vt(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=$o:r=bd;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||r,s[o])}function B0(a,e,t){const i=this.cache,n=e.length,s=ir(t,n);Bt(i,s)||(a.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||wd,s[r])}function V0(a,e,t){const i=this.cache,n=e.length,s=ir(t,n);Bt(i,s)||(a.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Td,s[r])}function z0(a,e,t){const i=this.cache,n=e.length,s=ir(t,n);Bt(i,s)||(a.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Md,s[r])}function G0(a){switch(a){case 5126:return M0;case 35664:return w0;case 35665:return T0;case 35666:return E0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return k0;case 36294:return N0;case 36295:return O0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return z0}}class H0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}}class W0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}}class q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Uc(a,e){a.seq.push(e),a.map[e.id]=e}function X0(a,e,t){const i=a.name,n=i.length;for(Vr.lastIndex=0;;){const s=Vr.exec(i),r=Vr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){Uc(t,c===void 0?new H0(o,a,e):new W0(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new q0(o),Uc(t,d)),t=d}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);X0(o,l,this)}const n=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Fc(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const $0=37297;let K0=0;function Y0(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Bc=new ze;function j0(a){Qe._getMatrix(Bc,Qe.workingColorSpace,a);const e=`mat3( ${Bc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(a)){case Ba:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Vc(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Y0(a.getShaderSource(e),o)}else return s}function Z0(a,e){const t=j0(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const J0={[zh]:"Linear",[Gh]:"Reinhard",[Hh]:"Cineon",[Wh]:"ACESFilmic",[Xh]:"AgX",[$h]:"Neutral",[qh]:"Custom"};function Q0(a,e){const t=J0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ea=new I;function ev(){Qe.getLuminanceCoefficients(Ea);const a=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tv(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function iv(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nv(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(e,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Os(a){return a!==""}function zc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(a){return a.replace(sv,rv)}const av=new Map;function rv(a,e){let t=He[e];if(t===void 0){const i=av.get(e);if(i!==void 0)t=He[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(a){return a.replace(ov,lv)}function lv(a,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Wc(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cv={[Us]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function hv(a){return cv[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dv={[Nn]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function uv(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":dv[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const fv={[os]:"ENVMAP_MODE_REFRACTION"};function pv(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":fv[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mv={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[cu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function gv(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":mv[a.combine]||"ENVMAP_BLENDING_NONE"}function vv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yv(a,e,t,i){const n=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=hv(t),c=uv(t),h=pv(t),d=gv(t),u=vv(t),f=tv(t),p=iv(s),v=n.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Os).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Os).join(`
`),m.length>0&&(m+=`
`)):(g=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),m=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?He.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),r=Ko(r),r=zc(r,t),r=Gc(r,t),o=Ko(o),o=zc(o,t),o=Gc(o,t),r=Hc(r),o=Hc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=_+g+r,b=_+m+o,E=Fc(n,n.VERTEX_SHADER,M),A=Fc(n,n.FRAGMENT_SHADER,b);n.attachShader(v,E),n.attachShader(v,A),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function P(C){if(a.debug.checkShaderErrors){const N=n.getProgramInfoLog(v)||"",L=n.getShaderInfoLog(E)||"",V=n.getShaderInfoLog(A)||"",z=N.trim(),G=L.trim(),W=V.trim();let se=!0,J=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(se=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,v,E,A);else{const le=Vc(n,E,"vertex"),xe=Vc(n,A,"fragment");Oe("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+le+`
`+xe)}else z!==""?Pe("WebGLProgram: Program Info Log:",z):(G===""||W==="")&&(J=!1);J&&(C.diagnostics={runnable:se,programLog:z,vertexShader:{log:G,prefix:g},fragmentShader:{log:W,prefix:m}})}n.deleteShader(E),n.deleteShader(A),x=new Oa(n,v),w=nv(n,v)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(v,$0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let _v=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sv(e),t.set(e,i)),i}}class Sv{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}}function bv(a,e,t,i,n,s){const r=new rd,o=new xv,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,F,C,N){const L=C.fog,V=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||z,G),se=W&&W.mapping===Za?W.image.height:null,J=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=le!==void 0?le.length:0;let ge=0;V.morphAttributes.position!==void 0&&(ge=1),V.morphAttributes.normal!==void 0&&(ge=2),V.morphAttributes.color!==void 0&&(ge=3);let Ge,Mt,xt,Z;if(J){const ot=Ei[J];Ge=ot.vertexShader,Mt=ot.fragmentShader}else Ge=x.vertexShader,Mt=x.fragmentShader,o.update(x),xt=o.getVertexShaderID(x),Z=o.getFragmentShaderID(x);const ce=a.getRenderTarget(),ue=a.state.buffers.depth.getReversed(),Ve=N.isInstancedMesh===!0,Ie=N.isBatchedMesh===!0,Ue=!!x.map,zt=!!x.matcap,tt=!!W,rt=!!x.aoMap,pt=!!x.lightMap,Xe=!!x.bumpMap,Ct=!!x.normalMap,D=!!x.displacementMap,Dt=!!x.emissiveMap,at=!!x.metalnessMap,vt=!!x.roughnessMap,Ee=x.anisotropy>0,R=x.clearcoat>0,S=x.dispersion>0,U=x.iridescence>0,j=x.sheen>0,Q=x.transmission>0,K=Ee&&!!x.anisotropyMap,Se=R&&!!x.clearcoatMap,he=R&&!!x.clearcoatNormalMap,Le=R&&!!x.clearcoatRoughnessMap,Ne=U&&!!x.iridescenceMap,te=U&&!!x.iridescenceThicknessMap,ae=j&&!!x.sheenColorMap,be=j&&!!x.sheenRoughnessMap,we=!!x.specularMap,ve=!!x.specularColorMap,$e=!!x.specularIntensityMap,k=Q&&!!x.transmissionMap,de=Q&&!!x.thicknessMap,re=!!x.gradientMap,_e=!!x.alphaMap,ie=x.alphaTest>0,$=!!x.alphaHash,Me=!!x.extensions;let Fe=Pi;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Fe=a.toneMapping);const yt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:Mt,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&N._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&N.instanceColor!==null,instancingMorph:Ve&&N.morphTexture!==null,outputColorSpace:ce===null?a.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ti,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:zt,envMap:tt,envMapMode:tt&&W.mapping,envMapCubeUVHeight:se,aoMap:rt,lightMap:pt,bumpMap:Xe,normalMap:Ct,displacementMap:D,emissiveMap:Dt,normalMapObjectSpace:Ct&&x.normalMapType===mu,normalMapTangentSpace:Ct&&x.normalMapType===nd,metalnessMap:at,roughnessMap:vt,anisotropy:Ee,anisotropyMap:K,clearcoat:R,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:Le,dispersion:S,iridescence:U,iridescenceMap:Ne,iridescenceThicknessMap:te,sheen:j,sheenColorMap:ae,sheenRoughnessMap:be,specularMap:we,specularColorMap:ve,specularIntensityMap:$e,transmission:Q,transmissionMap:k,thicknessMap:de,gradientMap:re,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ie,alphaHash:$,combine:x.combine,mapUv:Ue&&p(x.map.channel),aoMapUv:rt&&p(x.aoMap.channel),lightMapUv:pt&&p(x.lightMap.channel),bumpMapUv:Xe&&p(x.bumpMap.channel),normalMapUv:Ct&&p(x.normalMap.channel),displacementMapUv:D&&p(x.displacementMap.channel),emissiveMapUv:Dt&&p(x.emissiveMap.channel),metalnessMapUv:at&&p(x.metalnessMap.channel),roughnessMapUv:vt&&p(x.roughnessMap.channel),anisotropyMapUv:K&&p(x.anisotropyMap.channel),clearcoatMapUv:Se&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(x.sheenRoughnessMap.channel),specularMapUv:we&&p(x.specularMap.channel),specularColorMapUv:ve&&p(x.specularColorMap.channel),specularIntensityMapUv:$e&&p(x.specularIntensityMap.channel),transmissionMapUv:k&&p(x.transmissionMap.channel),thicknessMapUv:de&&p(x.thicknessMap.channel),alphaMapUv:_e&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ct||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ue||_e),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tt,flipSided:x.side===ei,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function g(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(m(w,x),_(w,x),w.push(a.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),x.push(r.mask)}function M(x){const w=f[x.type];let F;if(w){const C=Ei[w];F=Sf.clone(C.uniforms)}else F=x.uniforms;return F}function b(x,w){let F=h.get(w);return F!==void 0?++F.usedTimes:(F=new yv(a,w,x,n),c.push(F),h.set(w,F)),F}function E(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:P}}function Mv(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function wv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function qc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Xc(){const a=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,v,g,m){let _=a[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:r(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},a[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=r(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=g,_.group=m),e++,_}function l(u,f,p,v,g,m){const _=o(u,f,p,v,g,m);p.transmission>0?i.push(_):p.transparent===!0?n.push(_):t.push(_)}function c(u,f,p,v,g,m){const _=o(u,f,p,v,g,m);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||wv),i.length>1&&i.sort(f||qc),n.length>1&&n.sort(f||qc)}function d(){for(let u=e,f=a.length;u<f;u++){const p=a[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function Tv(){let a=new WeakMap;function e(i,n){const s=a.get(i);let r;return s===void 0?(r=new Xc,a.set(i,[r])):n>=s.length?(r=new Xc,s.push(r)):r=s[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ev(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function Av(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Rv=0;function Cv(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Pv(a){const e=new Ev,t=Av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const n=new I,s=new qe,r=new qe;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,M=0,b=0,E=0,A=0,P=0;c.sort(Cv);for(let w=0,F=c.length;w<F;w++){const C=c[w],N=C.color,L=C.intensity,V=C.distance;let z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ls?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=N.r*L,d+=N.g*L,u+=N.b*L;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],L);P++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,se=t.get(C);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.directionalShadow[f]=se,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=C.shadow.matrix,_++}i.directional[f]=G,f++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(N).multiplyScalar(L),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[v]=G;const W=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,W.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[v]=W.matrix,C.castShadow){const se=t.get(C);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=z,b++}v++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(N).multiplyScalar(L),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=G,g++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const W=C.shadow,se=t.get(C);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,se.shadowCameraNear=W.camera.near,se.shadowCameraFar=W.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=C.shadow.matrix,M++}i.point[p]=G,p++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(L),G.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[m]=G,m++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==_||x.numPointShadows!==M||x.numSpotShadows!==b||x.numSpotMaps!==E||x.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,x.directionalLength=f,x.pointLength=p,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=_,x.numPointShadows=M,x.numSpotShadows=b,x.numSpotMaps=E,x.numLightProbes=P,i.version=Rv++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const M=c[m];if(M.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),d++}else if(M.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),r.identity(),s.copy(M.matrixWorld),s.premultiply(g),r.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),p++}else if(M.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function $c(a){const e=new Pv(a),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function Lv(a){let e=new WeakMap;function t(n,s=0){const r=e.get(n);let o;return r===void 0?(o=new $c(a),e.set(n,[o])):s>=r.length?(o=new $c(a),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Nv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Kc=new qe,Ps=new I,zr=new I;function Ov(a,e,t){let i=new gl;const n=new Ye,s=new Ye,r=new St,o=new Tf,l=new Ef,c={},h=t.maxTextureSize,d={[Qi]:ei,[ei]:Qi,[Tt]:Tt},u=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Dv,fragmentShader:Iv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Rt;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new O(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let m=this.type;this.render=function(A,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Wd&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Us);const w=a.getRenderTarget(),F=a.getActiveCubeFace(),C=a.getActiveMipmapLevel(),N=a.state;N.setBlending(ji),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=m!==this.type;L&&P.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(z=>z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,z=A.length;V<z;V++){const G=A[V],W=G.shadow;if(W===void 0){Pe("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const se=W.getFrameExtents();n.multiply(se),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/se.x),n.x=s.x*se.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/se.y),n.y=s.y*se.y,W.mapSize.y=s.y));const J=a.state.buffers.depth.getReversed();if(W.camera._reversedDepth=J,W.map===null||L===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ks){if(G.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Li(n.x,n.y,{format:ls,type:en,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new Ys(n.x,n.y,hi),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=tn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot}else G.isPointLight?(W.map=new Sd(n.x),W.map.depthTexture=new _f(n.x,Ii)):(W.map=new Li(n.x,n.y),W.map.depthTexture=new Ys(n.x,n.y,Ii)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=tn,this.type===Us?(W.map.depthTexture.compareFunction=J?cl:ll,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot);W.camera.updateProjectionMatrix()}const le=W.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<le;xe++){if(W.map.isWebGLCubeRenderTarget)a.setRenderTarget(W.map,xe),a.clear();else{xe===0&&(a.setRenderTarget(W.map),a.clear());const ge=W.getViewport(xe);r.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(r)}if(G.isPointLight){const ge=W.camera,Ge=W.matrix,Mt=G.distance||ge.far;Mt!==ge.far&&(ge.far=Mt,ge.updateProjectionMatrix()),Ps.setFromMatrixPosition(G.matrixWorld),ge.position.copy(Ps),zr.copy(ge.position),zr.add(kv[xe]),ge.up.copy(Nv[xe]),ge.lookAt(zr),ge.updateMatrixWorld(),Ge.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Kc.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Kc,ge.coordinateSystem,ge.reversedDepth)}else W.updateMatrices(G);i=W.getFrustum(),b(P,x,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===ks&&_(W,x),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,a.setRenderTarget(w,F,C)};function _(A,P){const x=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(n.x,n.y,{format:ls,type:en})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(P,null,x,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(P,null,x,f,v,null)}function M(A,P,x,w){let F=null;const C=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)F=C;else if(F=x.isPointLight===!0?l:o,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=F.uuid,L=P.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let z=V[L];z===void 0&&(z=F.clone(),V[L]=z,P.addEventListener("dispose",E)),F=z}if(F.visible=P.visible,F.wireframe=P.wireframe,w===ks?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:d[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const N=a.properties.get(F);N.light=x}return F}function b(A,P,x,w,F){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===ks)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const L=e.update(A),V=A.material;if(Array.isArray(V)){const z=L.groups;for(let G=0,W=z.length;G<W;G++){const se=z[G],J=V[se.materialIndex];if(J&&J.visible){const le=M(A,J,w,F);A.onBeforeShadow(a,A,P,x,L,le,se),a.renderBufferDirect(x,null,L,le,A,se),A.onAfterShadow(a,A,P,x,L,le,se)}}}else if(V.visible){const z=M(A,V,w,F);A.onBeforeShadow(a,A,P,x,L,z,null),a.renderBufferDirect(x,null,L,z,A,null),A.onAfterShadow(a,A,P,x,L,z,null)}}const N=A.children;for(let L=0,V=N.length;L<V;L++)b(N[L],P,x,w,F)}function E(A){A.target.removeEventListener("dispose",E);for(const x in c){const w=c[x],F=A.target.uuid;F in w&&(w[F].dispose(),delete w[F])}}}function Uv(a,e){function t(){let k=!1;const de=new St;let re=null;const _e=new St(0,0,0,0);return{setMask:function(ie){re!==ie&&!k&&(a.colorMask(ie,ie,ie,ie),re=ie)},setLocked:function(ie){k=ie},setClear:function(ie,$,Me,Fe,yt){yt===!0&&(ie*=Fe,$*=Fe,Me*=Fe),de.set(ie,$,Me,Fe),_e.equals(de)===!1&&(a.clearColor(ie,$,Me,Fe),_e.copy(de))},reset:function(){k=!1,re=null,_e.set(-1,0,0,0)}}}function i(){let k=!1,de=!1,re=null,_e=null,ie=null;return{setReversed:function($){if(de!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),de=$;const Fe=ie;ie=null,this.setClear(Fe)}},getReversed:function(){return de},setTest:function($){$?ce(a.DEPTH_TEST):ue(a.DEPTH_TEST)},setMask:function($){re!==$&&!k&&(a.depthMask($),re=$)},setFunc:function($){if(de&&($=Eu[$]),_e!==$){switch($){case io:a.depthFunc(a.NEVER);break;case no:a.depthFunc(a.ALWAYS);break;case so:a.depthFunc(a.LESS);break;case rs:a.depthFunc(a.LEQUAL);break;case ao:a.depthFunc(a.EQUAL);break;case ro:a.depthFunc(a.GEQUAL);break;case oo:a.depthFunc(a.GREATER);break;case lo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}_e=$}},setLocked:function($){k=$},setClear:function($){ie!==$&&(ie=$,de&&($=1-$),a.clearDepth($))},reset:function(){k=!1,re=null,_e=null,ie=null,de=!1}}}function n(){let k=!1,de=null,re=null,_e=null,ie=null,$=null,Me=null,Fe=null,yt=null;return{setTest:function(ot){k||(ot?ce(a.STENCIL_TEST):ue(a.STENCIL_TEST))},setMask:function(ot){de!==ot&&!k&&(a.stencilMask(ot),de=ot)},setFunc:function(ot,Ui,Fi){(re!==ot||_e!==Ui||ie!==Fi)&&(a.stencilFunc(ot,Ui,Fi),re=ot,_e=Ui,ie=Fi)},setOp:function(ot,Ui,Fi){($!==ot||Me!==Ui||Fe!==Fi)&&(a.stencilOp(ot,Ui,Fi),$=ot,Me=Ui,Fe=Fi)},setLocked:function(ot){k=ot},setClear:function(ot){yt!==ot&&(a.clearStencil(ot),yt=ot)},reset:function(){k=!1,de=null,re=null,_e=null,ie=null,$=null,Me=null,Fe=null,yt=null}}}const s=new t,r=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,M=null,b=null,E=null,A=null,P=new ke(0,0,0),x=0,w=!1,F=null,C=null,N=null,L=null,V=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const se=a.getParameter(a.VERSION);se.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(se)[1]),G=W>=1):se.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),G=W>=2);let J=null,le={};const xe=a.getParameter(a.SCISSOR_BOX),ge=a.getParameter(a.VIEWPORT),Ge=new St().fromArray(xe),Mt=new St().fromArray(ge);function xt(k,de,re,_e){const ie=new Uint8Array(4),$=a.createTexture();a.bindTexture(k,$),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Me=0;Me<re;Me++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(de,0,a.RGBA,1,1,_e,0,a.RGBA,a.UNSIGNED_BYTE,ie):a.texImage2D(de+Me,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ie);return $}const Z={};Z[a.TEXTURE_2D]=xt(a.TEXTURE_2D,a.TEXTURE_2D,1),Z[a.TEXTURE_CUBE_MAP]=xt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[a.TEXTURE_2D_ARRAY]=xt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Z[a.TEXTURE_3D]=xt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ce(a.DEPTH_TEST),r.setFunc(rs),Xe(!1),Ct(Il),ce(a.CULL_FACE),rt(ji);function ce(k){h[k]!==!0&&(a.enable(k),h[k]=!0)}function ue(k){h[k]!==!1&&(a.disable(k),h[k]=!1)}function Ve(k,de){return d[k]!==de?(a.bindFramebuffer(k,de),d[k]=de,k===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=de),k===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=de),!0):!1}function Ie(k,de){let re=f,_e=!1;if(k){re=u.get(de),re===void 0&&(re=[],u.set(de,re));const ie=k.textures;if(re.length!==ie.length||re[0]!==a.COLOR_ATTACHMENT0){for(let $=0,Me=ie.length;$<Me;$++)re[$]=a.COLOR_ATTACHMENT0+$;re.length=ie.length,_e=!0}}else re[0]!==a.BACK&&(re[0]=a.BACK,_e=!0);_e&&a.drawBuffers(re)}function Ue(k){return p!==k?(a.useProgram(k),p=k,!0):!1}const zt={[Pn]:a.FUNC_ADD,[Xd]:a.FUNC_SUBTRACT,[$d]:a.FUNC_REVERSE_SUBTRACT};zt[Kd]=a.MIN,zt[Yd]=a.MAX;const tt={[jd]:a.ZERO,[Zd]:a.ONE,[Jd]:a.SRC_COLOR,[eo]:a.SRC_ALPHA,[su]:a.SRC_ALPHA_SATURATE,[iu]:a.DST_COLOR,[eu]:a.DST_ALPHA,[Qd]:a.ONE_MINUS_SRC_COLOR,[to]:a.ONE_MINUS_SRC_ALPHA,[nu]:a.ONE_MINUS_DST_COLOR,[tu]:a.ONE_MINUS_DST_ALPHA,[au]:a.CONSTANT_COLOR,[ru]:a.ONE_MINUS_CONSTANT_COLOR,[ou]:a.CONSTANT_ALPHA,[lu]:a.ONE_MINUS_CONSTANT_ALPHA};function rt(k,de,re,_e,ie,$,Me,Fe,yt,ot){if(k===ji){v===!0&&(ue(a.BLEND),v=!1);return}if(v===!1&&(ce(a.BLEND),v=!0),k!==qd){if(k!==g||ot!==w){if((m!==Pn||b!==Pn)&&(a.blendEquation(a.FUNC_ADD),m=Pn,b=Pn),ot)switch(k){case ns:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ni:a.blendFunc(a.ONE,a.ONE);break;case kl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Nl:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Oe("WebGLState: Invalid blending: ",k);break}else switch(k){case ns:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ni:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case kl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",k);break}_=null,M=null,E=null,A=null,P.set(0,0,0),x=0,g=k,w=ot}return}ie=ie||de,$=$||re,Me=Me||_e,(de!==m||ie!==b)&&(a.blendEquationSeparate(zt[de],zt[ie]),m=de,b=ie),(re!==_||_e!==M||$!==E||Me!==A)&&(a.blendFuncSeparate(tt[re],tt[_e],tt[$],tt[Me]),_=re,M=_e,E=$,A=Me),(Fe.equals(P)===!1||yt!==x)&&(a.blendColor(Fe.r,Fe.g,Fe.b,yt),P.copy(Fe),x=yt),g=k,w=!1}function pt(k,de){k.side===Tt?ue(a.CULL_FACE):ce(a.CULL_FACE);let re=k.side===ei;de&&(re=!re),Xe(re),k.blending===ns&&k.transparent===!1?rt(ji):rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const _e=k.stencilWrite;o.setTest(_e),_e&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(a.SAMPLE_ALPHA_TO_COVERAGE):ue(a.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(k){F!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),F=k)}function Ct(k){k!==Gd?(ce(a.CULL_FACE),k!==C&&(k===Il?a.cullFace(a.BACK):k===Hd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ue(a.CULL_FACE),C=k}function D(k){k!==N&&(G&&a.lineWidth(k),N=k)}function Dt(k,de,re){k?(ce(a.POLYGON_OFFSET_FILL),(L!==de||V!==re)&&(L=de,V=re,r.getReversed()&&(de=-de),a.polygonOffset(de,re))):ue(a.POLYGON_OFFSET_FILL)}function at(k){k?ce(a.SCISSOR_TEST):ue(a.SCISSOR_TEST)}function vt(k){k===void 0&&(k=a.TEXTURE0+z-1),J!==k&&(a.activeTexture(k),J=k)}function Ee(k,de,re){re===void 0&&(J===null?re=a.TEXTURE0+z-1:re=J);let _e=le[re];_e===void 0&&(_e={type:void 0,texture:void 0},le[re]=_e),(_e.type!==k||_e.texture!==de)&&(J!==re&&(a.activeTexture(re),J=re),a.bindTexture(k,de||Z[k]),_e.type=k,_e.texture=de)}function R(){const k=le[J];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{a.compressedTexImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function j(){try{a.texSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Q(){try{a.texSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function K(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Se(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function he(){try{a.texStorage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Le(){try{a.texStorage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Ne(){try{a.texImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function te(){try{a.texImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ae(k){Ge.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Ge.copy(k))}function be(k){Mt.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),Mt.copy(k))}function we(k,de){let re=c.get(de);re===void 0&&(re=new WeakMap,c.set(de,re));let _e=re.get(k);_e===void 0&&(_e=a.getUniformBlockIndex(de,k.name),re.set(k,_e))}function ve(k,de){const _e=c.get(de).get(k);l.get(de)!==_e&&(a.uniformBlockBinding(de,_e,k.__bindingPointIndex),l.set(de,_e))}function $e(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},J=null,le={},d={},u=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,M=null,b=null,E=null,A=null,P=new ke(0,0,0),x=0,w=!1,F=null,C=null,N=null,L=null,V=null,Ge.set(0,0,a.canvas.width,a.canvas.height),Mt.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ce,disable:ue,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:Ue,setBlending:rt,setMaterial:pt,setFlipSided:Xe,setCullFace:Ct,setLineWidth:D,setPolygonOffset:Dt,setScissorTest:at,activeTexture:vt,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Ne,texImage3D:te,updateUBOMapping:we,uniformBlockBinding:ve,texStorage2D:he,texStorage3D:Le,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:Se,scissor:ae,viewport:be,reset:$e}}function Fv(a,e,t,i,n,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return f?new OffscreenCanvas(R,S):Ks("canvas")}function v(R,S,U){let j=1;const Q=Ee(R);if((Q.width>U||Q.height>U)&&(j=U/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(j*Q.width),Se=Math.floor(j*Q.height);d===void 0&&(d=p(K,Se));const he=S?p(K,Se):d;return he.width=K,he.height=Se,he.getContext("2d").drawImage(R,0,0,K,Se),Pe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Se+")."),he}else return"data"in R&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){a.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(R,S,U,j,Q=!1){if(R!==null){if(a[R]!==void 0)return a[R];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===a.RED&&(U===a.FLOAT&&(K=a.R32F),U===a.HALF_FLOAT&&(K=a.R16F),U===a.UNSIGNED_BYTE&&(K=a.R8)),S===a.RED_INTEGER&&(U===a.UNSIGNED_BYTE&&(K=a.R8UI),U===a.UNSIGNED_SHORT&&(K=a.R16UI),U===a.UNSIGNED_INT&&(K=a.R32UI),U===a.BYTE&&(K=a.R8I),U===a.SHORT&&(K=a.R16I),U===a.INT&&(K=a.R32I)),S===a.RG&&(U===a.FLOAT&&(K=a.RG32F),U===a.HALF_FLOAT&&(K=a.RG16F),U===a.UNSIGNED_BYTE&&(K=a.RG8)),S===a.RG_INTEGER&&(U===a.UNSIGNED_BYTE&&(K=a.RG8UI),U===a.UNSIGNED_SHORT&&(K=a.RG16UI),U===a.UNSIGNED_INT&&(K=a.RG32UI),U===a.BYTE&&(K=a.RG8I),U===a.SHORT&&(K=a.RG16I),U===a.INT&&(K=a.RG32I)),S===a.RGB_INTEGER&&(U===a.UNSIGNED_BYTE&&(K=a.RGB8UI),U===a.UNSIGNED_SHORT&&(K=a.RGB16UI),U===a.UNSIGNED_INT&&(K=a.RGB32UI),U===a.BYTE&&(K=a.RGB8I),U===a.SHORT&&(K=a.RGB16I),U===a.INT&&(K=a.RGB32I)),S===a.RGBA_INTEGER&&(U===a.UNSIGNED_BYTE&&(K=a.RGBA8UI),U===a.UNSIGNED_SHORT&&(K=a.RGBA16UI),U===a.UNSIGNED_INT&&(K=a.RGBA32UI),U===a.BYTE&&(K=a.RGBA8I),U===a.SHORT&&(K=a.RGBA16I),U===a.INT&&(K=a.RGBA32I)),S===a.RGB&&(U===a.UNSIGNED_INT_5_9_9_9_REV&&(K=a.RGB9_E5),U===a.UNSIGNED_INT_10F_11F_11F_REV&&(K=a.R11F_G11F_B10F)),S===a.RGBA){const Se=Q?Ba:Qe.getTransfer(j);U===a.FLOAT&&(K=a.RGBA32F),U===a.HALF_FLOAT&&(K=a.RGBA16F),U===a.UNSIGNED_BYTE&&(K=Se===lt?a.SRGB8_ALPHA8:a.RGBA8),U===a.UNSIGNED_SHORT_4_4_4_4&&(K=a.RGBA4),U===a.UNSIGNED_SHORT_5_5_5_1&&(K=a.RGB5_A1)}return(K===a.R16F||K===a.R32F||K===a.RG16F||K===a.RG32F||K===a.RGBA16F||K===a.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(R,S){let U;return R?S===null||S===Ii||S===Ws?U=a.DEPTH24_STENCIL8:S===hi?U=a.DEPTH32F_STENCIL8:S===Hs&&(U=a.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ii||S===Ws?U=a.DEPTH_COMPONENT24:S===hi?U=a.DEPTH_COMPONENT32F:S===Hs&&(U=a.DEPTH_COMPONENT16),U}function E(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),x(S),S.isVideoTexture&&h.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),F(S)}function x(R){const S=i.get(R);if(S.__webglInit===void 0)return;const U=R.source,j=u.get(U);if(j){const Q=j[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(R),Object.keys(j).length===0&&u.delete(U)}i.remove(R)}function w(R){const S=i.get(R);a.deleteTexture(S.__webglTexture);const U=R.source,j=u.get(U);delete j[S.__cacheKey],r.memory.textures--}function F(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Q=0;Q<S.__webglFramebuffer[j].length;Q++)a.deleteFramebuffer(S.__webglFramebuffer[j][Q]);else a.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)a.deleteFramebuffer(S.__webglFramebuffer[j]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=R.textures;for(let j=0,Q=U.length;j<Q;j++){const K=i.get(U[j]);K.__webglTexture&&(a.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(U[j])}i.remove(R)}let C=0;function N(){C=0}function L(){const R=C;return R>=n.maxTextures&&Pe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),C+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const U=i.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const j=R.image;if(j===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,R,S);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,U.__webglTexture,a.TEXTURE0+S)}function G(R,S){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Z(U,R,S);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,U.__webglTexture,a.TEXTURE0+S)}function W(R,S){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Z(U,R,S);return}t.bindTexture(a.TEXTURE_3D,U.__webglTexture,a.TEXTURE0+S)}function se(R,S){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){ce(U,R,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+S)}const J={[qt]:a.REPEAT,[Ri]:a.CLAMP_TO_EDGE,[Fa]:a.MIRRORED_REPEAT},le={[Ot]:a.NEAREST,[Yh]:a.NEAREST_MIPMAP_NEAREST,[Ns]:a.NEAREST_MIPMAP_LINEAR,[Ut]:a.LINEAR,[Pa]:a.LINEAR_MIPMAP_NEAREST,[Ki]:a.LINEAR_MIPMAP_LINEAR},xe={[gu]:a.NEVER,[Su]:a.ALWAYS,[vu]:a.LESS,[ll]:a.LEQUAL,[yu]:a.EQUAL,[cl]:a.GEQUAL,[_u]:a.GREATER,[xu]:a.NOTEQUAL};function ge(R,S){if(S.type===hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ut||S.magFilter===Pa||S.magFilter===Ns||S.magFilter===Ki||S.minFilter===Ut||S.minFilter===Pa||S.minFilter===Ns||S.minFilter===Ki)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,J[S.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,J[S.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,J[S.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,le[S.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==Ns&&S.minFilter!==Ki||S.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ge(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const j=S.source;let Q=u.get(j);Q===void 0&&(Q={},u.set(j,Q));const K=V(S);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,U=!0),Q[K].usedTimes++;const Se=Q[R.__cacheKey];Se!==void 0&&(Q[R.__cacheKey].usedTimes--,Se.usedTimes===0&&w(S)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return U}function Mt(R,S,U){return Math.floor(Math.floor(R/U)/S)}function xt(R,S,U,j){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,U,j,S.data);else{K.sort((te,ae)=>te.start-ae.start);let Se=0;for(let te=1;te<K.length;te++){const ae=K[Se],be=K[te],we=ae.start+ae.count,ve=Mt(be.start,S.width,4),$e=Mt(ae.start,S.width,4);be.start<=we+1&&ve===$e&&Mt(be.start+be.count-1,S.width,4)===ve?ae.count=Math.max(ae.count,be.start+be.count-ae.start):(++Se,K[Se]=be)}K.length=Se+1;const he=a.getParameter(a.UNPACK_ROW_LENGTH),Le=a.getParameter(a.UNPACK_SKIP_PIXELS),Ne=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let te=0,ae=K.length;te<ae;te++){const be=K[te],we=Math.floor(be.start/4),ve=Math.ceil(be.count/4),$e=we%S.width,k=Math.floor(we/S.width),de=ve,re=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,$e),a.pixelStorei(a.UNPACK_SKIP_ROWS,k),t.texSubImage2D(a.TEXTURE_2D,0,$e,k,de,re,U,j,S.data)}R.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,he),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Le),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ne)}}function Z(R,S,U){let j=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=a.TEXTURE_3D);const Q=Ge(R,S),K=S.source;t.bindTexture(j,R.__webglTexture,a.TEXTURE0+U);const Se=i.get(K);if(K.version!==Se.__version||Q===!0){t.activeTexture(a.TEXTURE0+U);const he=Qe.getPrimaries(Qe.workingColorSpace),Le=S.colorSpace===vn?null:Qe.getPrimaries(S.colorSpace),Ne=S.colorSpace===vn||he===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let te=v(S.image,!1,n.maxTextureSize);te=vt(S,te);const ae=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let we=M(S.internalFormat,ae,be,S.colorSpace,S.isVideoTexture);ge(j,S);let ve;const $e=S.mipmaps,k=S.isVideoTexture!==!0,de=Se.__version===void 0||Q===!0,re=K.dataReady,_e=E(S,te);if(S.isDepthTexture)we=b(S.format===In,S.type),de&&(k?t.texStorage2D(a.TEXTURE_2D,1,we,te.width,te.height):t.texImage2D(a.TEXTURE_2D,0,we,te.width,te.height,0,ae,be,null));else if(S.isDataTexture)if($e.length>0){k&&de&&t.texStorage2D(a.TEXTURE_2D,_e,we,$e[0].width,$e[0].height);for(let ie=0,$=$e.length;ie<$;ie++)ve=$e[ie],k?re&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,ve.width,ve.height,ae,be,ve.data):t.texImage2D(a.TEXTURE_2D,ie,we,ve.width,ve.height,0,ae,be,ve.data);S.generateMipmaps=!1}else k?(de&&t.texStorage2D(a.TEXTURE_2D,_e,we,te.width,te.height),re&&xt(S,te,ae,be)):t.texImage2D(a.TEXTURE_2D,0,we,te.width,te.height,0,ae,be,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&de&&t.texStorage3D(a.TEXTURE_2D_ARRAY,_e,we,$e[0].width,$e[0].height,te.depth);for(let ie=0,$=$e.length;ie<$;ie++)if(ve=$e[ie],S.format!==di)if(ae!==null)if(k){if(re)if(S.layerUpdates.size>0){const Me=Tc(ve.width,ve.height,S.format,S.type);for(const Fe of S.layerUpdates){const yt=ve.data.subarray(Fe*Me/ve.data.BYTES_PER_ELEMENT,(Fe+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,Fe,ve.width,ve.height,1,ae,yt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,te.depth,ae,ve.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,we,ve.width,ve.height,te.depth,0,ve.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?re&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,te.depth,ae,be,ve.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ie,we,ve.width,ve.height,te.depth,0,ae,be,ve.data)}else{k&&de&&t.texStorage2D(a.TEXTURE_2D,_e,we,$e[0].width,$e[0].height);for(let ie=0,$=$e.length;ie<$;ie++)ve=$e[ie],S.format!==di?ae!==null?k?re&&t.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,ve.width,ve.height,ae,ve.data):t.compressedTexImage2D(a.TEXTURE_2D,ie,we,ve.width,ve.height,0,ve.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?re&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,ve.width,ve.height,ae,be,ve.data):t.texImage2D(a.TEXTURE_2D,ie,we,ve.width,ve.height,0,ae,be,ve.data)}else if(S.isDataArrayTexture)if(k){if(de&&t.texStorage3D(a.TEXTURE_2D_ARRAY,_e,we,te.width,te.height,te.depth),re)if(S.layerUpdates.size>0){const ie=Tc(te.width,te.height,S.format,S.type);for(const $ of S.layerUpdates){const Me=te.data.subarray($*ie/te.data.BYTES_PER_ELEMENT,($+1)*ie/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ae,be,Me)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,be,te.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,we,te.width,te.height,te.depth,0,ae,be,te.data);else if(S.isData3DTexture)k?(de&&t.texStorage3D(a.TEXTURE_3D,_e,we,te.width,te.height,te.depth),re&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,be,te.data)):t.texImage3D(a.TEXTURE_3D,0,we,te.width,te.height,te.depth,0,ae,be,te.data);else if(S.isFramebufferTexture){if(de)if(k)t.texStorage2D(a.TEXTURE_2D,_e,we,te.width,te.height);else{let ie=te.width,$=te.height;for(let Me=0;Me<_e;Me++)t.texImage2D(a.TEXTURE_2D,Me,we,ie,$,0,ae,be,null),ie>>=1,$>>=1}}else if($e.length>0){if(k&&de){const ie=Ee($e[0]);t.texStorage2D(a.TEXTURE_2D,_e,we,ie.width,ie.height)}for(let ie=0,$=$e.length;ie<$;ie++)ve=$e[ie],k?re&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,ae,be,ve):t.texImage2D(a.TEXTURE_2D,ie,we,ae,be,ve);S.generateMipmaps=!1}else if(k){if(de){const ie=Ee(te);t.texStorage2D(a.TEXTURE_2D,_e,we,ie.width,ie.height)}re&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ae,be,te)}else t.texImage2D(a.TEXTURE_2D,0,we,ae,be,te);g(S)&&m(j),Se.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ce(R,S,U){if(S.image.length!==6)return;const j=Ge(R,S),Q=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+U);const K=i.get(Q);if(Q.version!==K.__version||j===!0){t.activeTexture(a.TEXTURE0+U);const Se=Qe.getPrimaries(Qe.workingColorSpace),he=S.colorSpace===vn?null:Qe.getPrimaries(S.colorSpace),Le=S.colorSpace===vn||Se===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let $=0;$<6;$++)!Ne&&!te?ae[$]=v(S.image[$],!0,n.maxCubemapSize):ae[$]=te?S.image[$].image:S.image[$],ae[$]=vt(S,ae[$]);const be=ae[0],we=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),$e=M(S.internalFormat,we,ve,S.colorSpace),k=S.isVideoTexture!==!0,de=K.__version===void 0||j===!0,re=Q.dataReady;let _e=E(S,be);ge(a.TEXTURE_CUBE_MAP,S);let ie;if(Ne){k&&de&&t.texStorage2D(a.TEXTURE_CUBE_MAP,_e,$e,be.width,be.height);for(let $=0;$<6;$++){ie=ae[$].mipmaps;for(let Me=0;Me<ie.length;Me++){const Fe=ie[Me];S.format!==di?we!==null?k?re&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,$e,Fe.width,Fe.height,0,Fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?re&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Fe.width,Fe.height,we,ve,Fe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,$e,Fe.width,Fe.height,0,we,ve,Fe.data)}}}else{if(ie=S.mipmaps,k&&de){ie.length>0&&_e++;const $=Ee(ae[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,_e,$e,$.width,$.height)}for(let $=0;$<6;$++)if(te){k?re&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ae[$].width,ae[$].height,we,ve,ae[$].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$e,ae[$].width,ae[$].height,0,we,ve,ae[$].data);for(let Me=0;Me<ie.length;Me++){const yt=ie[Me].image[$].image;k?re&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,yt.width,yt.height,we,ve,yt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,$e,yt.width,yt.height,0,we,ve,yt.data)}}else{k?re&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,ve,ae[$]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$e,we,ve,ae[$]);for(let Me=0;Me<ie.length;Me++){const Fe=ie[Me];k?re&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,we,ve,Fe.image[$]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,$e,we,ve,Fe.image[$])}}}g(S)&&m(a.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ue(R,S,U,j,Q,K){const Se=s.convert(U.format,U.colorSpace),he=s.convert(U.type),Le=M(U.internalFormat,Se,he,U.colorSpace),Ne=i.get(S),te=i.get(U);if(te.__renderTarget=S,!Ne.__hasExternalTextures){const ae=Math.max(1,S.width>>K),be=Math.max(1,S.height>>K);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,Le,ae,be,S.depth,0,Se,he,null):t.texImage2D(Q,K,Le,ae,be,0,Se,he,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),Dt(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,Q,te.__webglTexture,0,D(S)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,Q,te.__webglTexture,K),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ve(R,S,U){if(a.bindRenderbuffer(a.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=b(S.stencilBuffer,Q),Se=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Dt(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,D(S),K,S.width,S.height):U?a.renderbufferStorageMultisample(a.RENDERBUFFER,D(S),K,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,K,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,R)}else{const j=S.textures;for(let Q=0;Q<j.length;Q++){const K=j[Q],Se=s.convert(K.format,K.colorSpace),he=s.convert(K.type),Le=M(K.internalFormat,Se,he,K.colorSpace);Dt(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,D(S),Le,S.width,S.height):U?a.renderbufferStorageMultisample(a.RENDERBUFFER,D(S),Le,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Le,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ie(R,S,U){const j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),ge(a.TEXTURE_CUBE_MAP,S.depthTexture);const Ne=s.convert(S.depthTexture.format),te=s.convert(S.depthTexture.type);let ae;S.depthTexture.format===tn?ae=a.DEPTH_COMPONENT24:S.depthTexture.format===In&&(ae=a.DEPTH24_STENCIL8);for(let be=0;be<6;be++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ae,S.width,S.height,0,Ne,te,null)}}else z(S.depthTexture,0);const K=Q.__webglTexture,Se=D(S),he=j?a.TEXTURE_CUBE_MAP_POSITIVE_X+U:a.TEXTURE_2D,Le=S.depthTexture.format===In?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(S.depthTexture.format===tn)Dt(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Le,he,K,0,Se):a.framebufferTexture2D(a.FRAMEBUFFER,Le,he,K,0);else if(S.depthTexture.format===In)Dt(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Le,he,K,0,Se):a.framebufferTexture2D(a.FRAMEBUFFER,Le,he,K,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const S=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)Ie(S.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Ie(S.__webglFramebuffer[0],R,0):Ie(S.__webglFramebuffer,R,0)}else if(U){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=a.createRenderbuffer(),Ve(S.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[j];a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,K)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),Ve(S.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,K)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function zt(R,S,U){const j=i.get(R);S!==void 0&&ue(j.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),U!==void 0&&Ue(R)}function tt(R){const S=R.texture,U=i.get(R),j=i.get(S);R.addEventListener("dispose",P);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=S.version,r.memory.textures++),K){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let Le=0;Le<S.mipmaps.length;Le++)U.__webglFramebuffer[he][Le]=a.createFramebuffer()}else U.__webglFramebuffer[he]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)U.__webglFramebuffer[he]=a.createFramebuffer()}else U.__webglFramebuffer=a.createFramebuffer();if(Se)for(let he=0,Le=Q.length;he<Le;he++){const Ne=i.get(Q[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),r.memory.textures++)}if(R.samples>0&&Dt(R)===!1){U.__webglMultisampledFramebuffer=a.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const Le=Q[he];U.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,U.__webglColorRenderbuffer[he]);const Ne=s.convert(Le.format,Le.colorSpace),te=s.convert(Le.type),ae=M(Le.internalFormat,Ne,te,Le.colorSpace,R.isXRRenderTarget===!0),be=D(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,be,ae,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,U.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=a.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(K){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),ge(a.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ue(U.__webglFramebuffer[he][Le],R,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le);else ue(U.__webglFramebuffer[he],R,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(S)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,Le=Q.length;he<Le;he++){const Ne=Q[he],te=i.get(Ne);let ae=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),ge(ae,Ne),ue(U.__webglFramebuffer,R,Ne,a.COLOR_ATTACHMENT0+he,ae,0),g(Ne)&&m(ae)}t.unbindTexture()}else{let he=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),ge(he,S),S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ue(U.__webglFramebuffer[Le],R,S,a.COLOR_ATTACHMENT0,he,Le);else ue(U.__webglFramebuffer,R,S,a.COLOR_ATTACHMENT0,he,0);g(S)&&m(he),t.unbindTexture()}R.depthBuffer&&Ue(R)}function rt(R){const S=R.textures;for(let U=0,j=S.length;U<j;U++){const Q=S[U];if(g(Q)){const K=_(R),Se=i.get(Q).__webglTexture;t.bindTexture(K,Se),m(K),t.unbindTexture()}}}const pt=[],Xe=[];function Ct(R){if(R.samples>0){if(Dt(R)===!1){const S=R.textures,U=R.width,j=R.height;let Q=a.COLOR_BUFFER_BIT;const K=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=i.get(R),he=S.length>1;if(he)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Se.__webglColorRenderbuffer[Ne]);const te=i.get(S[Ne]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,te,0)}a.blitFramebuffer(0,0,U,j,0,0,U,j,Q,a.NEAREST),l===!0&&(pt.length=0,Xe.length=0,pt.push(a.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pt.push(K),Xe.push(K),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Xe)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Se.__webglColorRenderbuffer[Ne]);const te=i.get(S[Ne]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,te,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function D(R){return Math.min(n.maxSamples,R.samples)}function Dt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(R){const S=r.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function vt(R,S){const U=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==ti&&U!==vn&&(Qe.getTransfer(U)===lt?(j!==di||Q!==oi)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",U)),S}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=se,this.rebindTextures=zt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bv(a,e){function t(i,n=vn){let s;const r=Qe.getTransfer(n);if(i===oi)return a.UNSIGNED_BYTE;if(i===il)return a.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Jh)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===jh)return a.BYTE;if(i===Zh)return a.SHORT;if(i===Hs)return a.UNSIGNED_SHORT;if(i===tl)return a.INT;if(i===Ii)return a.UNSIGNED_INT;if(i===hi)return a.FLOAT;if(i===en)return a.HALF_FLOAT;if(i===ed)return a.ALPHA;if(i===td)return a.RGB;if(i===di)return a.RGBA;if(i===tn)return a.DEPTH_COMPONENT;if(i===In)return a.DEPTH_STENCIL;if(i===sl)return a.RED;if(i===al)return a.RED_INTEGER;if(i===ls)return a.RG;if(i===rl)return a.RG_INTEGER;if(i===ol)return a.RGBA_INTEGER;if(i===La||i===Da||i===Ia||i===ka)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===co||i===ho||i===uo||i===fo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===po||i===mo||i===go||i===vo||i===yo||i===_o||i===xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===po||i===mo)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===go)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vo)return s.COMPRESSED_R11_EAC;if(i===yo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===_o)return s.COMPRESSED_RG11_EAC;if(i===xo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===So||i===bo||i===Mo||i===wo||i===To||i===Eo||i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===So)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===To)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ao)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ro)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Co)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Po)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lo)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Do)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Io)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===Oo||i===Uo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===No)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fo||i===Bo||i===Vo||i===zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ki({vertexShader:Vv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new O(new et(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hv extends gs{constructor(e,t){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new Gv,m={},_=t.getContextAttributes();let M=null,b=null;const E=[],A=[],P=new Ye;let x=null;const w=new Qt;w.viewport=new St;const F=new Qt;F.viewport=new St;const C=[w,F],N=new Xf;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=E[Z];return ce===void 0&&(ce=new pr,E[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=E[Z];return ce===void 0&&(ce=new pr,E[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=E[Z];return ce===void 0&&(ce=new pr,E[Z]=ce),ce.getHandSpace()};function z(Z){const ce=A.indexOf(Z.inputSource);if(ce===-1)return;const ue=E[ce];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,c||r),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){const ce=A[Z];ce!==null&&(A[Z]=null,E[Z].disconnect(ce))}L=null,V=null,g.reset();for(const Z in m)delete m[Z];e.setRenderTarget(M),f=null,u=null,d=null,n=null,b=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",G),n.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ve=null,Ie=null;_.depth&&(Ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?In:tn,Ve=_.stencil?Ws:Ii);const Ue={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ue),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Li(u.textureWidth,u.textureHeight,{format:di,type:oi,depthTexture:new Ys(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ue),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Li(f.framebufferWidth,f.framebufferHeight,{format:di,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),xt.setContext(n),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Z){for(let ce=0;ce<Z.removed.length;ce++){const ue=Z.removed[ce],Ve=A.indexOf(ue);Ve>=0&&(A[Ve]=null,E[Ve].disconnect(ue))}for(let ce=0;ce<Z.added.length;ce++){const ue=Z.added[ce];let Ve=A.indexOf(ue);if(Ve===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=A.length){A.push(ue),Ve=Ue;break}else if(A[Ue]===null){A[Ue]=ue,Ve=Ue;break}if(Ve===-1)break}const Ie=E[Ve];Ie&&Ie.connect(ue)}}const se=new I,J=new I;function le(Z,ce,ue){se.setFromMatrixPosition(ce.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const Ve=se.distanceTo(J),Ie=ce.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,zt=Ie[14]/(Ie[10]-1),tt=Ie[14]/(Ie[10]+1),rt=(Ie[9]+1)/Ie[5],pt=(Ie[9]-1)/Ie[5],Xe=(Ie[8]-1)/Ie[0],Ct=(Ue[8]+1)/Ue[0],D=zt*Xe,Dt=zt*Ct,at=Ve/(-Xe+Ct),vt=at*-Xe;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ee=zt+at,R=tt+at,S=D-vt,U=Dt+(Ve-vt),j=rt*tt/R*Ee,Q=pt*tt/R*Ee;Z.projectionMatrix.makePerspective(S,U,j,Q,Ee,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xe(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let ce=Z.near,ue=Z.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),N.near=F.near=w.near=ce,N.far=F.far=w.far=ue,(L!==N.near||V!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,V=N.far),N.layers.mask=Z.layers.mask|6,w.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;const Ve=Z.parent,Ie=N.cameras;xe(N,Ve);for(let Ue=0;Ue<Ie.length;Ue++)xe(Ie[Ue],Ve);Ie.length===2?le(N,w,F):N.projectionMatrix.copy(w.projectionMatrix),ge(Z,N,Ve)};function ge(Z,ce,ue){ue===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return m[Z]};let Ge=null;function Mt(Z,ce){if(h=ce.getViewerPose(c||r),p=ce,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ve=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,Ve=!0);for(let tt=0;tt<ue.length;tt++){const rt=ue[tt];let pt=null;if(f!==null)pt=f.getViewport(rt);else{const Ct=d.getViewSubImage(u,rt);pt=Ct.viewport,tt===0&&(e.setRenderTargetTextures(b,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(b))}let Xe=C[tt];Xe===void 0&&(Xe=new Qt,Xe.layers.enable(tt),Xe.viewport=new St,C[tt]=Xe),Xe.matrix.fromArray(rt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(rt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(pt.x,pt.y,pt.width,pt.height),tt===0&&(N.matrix.copy(Xe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ve===!0&&N.cameras.push(Xe)}const Ie=n.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const tt=d.getDepthInformation(ue[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,n.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let tt=0;tt<ue.length;tt++){const rt=ue[tt].camera;if(rt){let pt=m[rt];pt||(pt=new ud,m[rt]=pt);const Xe=d.getCameraImage(rt);pt.sourceTexture=Xe}}}}for(let ue=0;ue<E.length;ue++){const Ve=A[ue],Ie=E[ue];Ve!==null&&Ie!==void 0&&Ie.update(Ve,ce,c||r)}Ge&&Ge(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}const xt=new xd;xt.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}}const En=new _i,Wv=new qe;function qv(a,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,fd(a)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,M,b){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ei&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ei&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),M=_.envMap,b=_.envMapRotation;M&&(g.envMap.value=M,En.copy(b),En.x*=-1,En.y*=-1,En.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),g.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(En)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ei&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Xv(a,e,t,i){let n={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const b=M.program;i.uniformBlockBinding(_,b)}function c(_,M){let b=n[_.id];b===void 0&&(p(_),b=h(_),n[_.id]=b,_.addEventListener("dispose",g));const E=M.program;i.updateUBOMapping(_,E);const A=e.render.frame;s[_.id]!==A&&(u(_),s[_.id]=A)}function h(_){const M=d();_.__bindingPointIndex=M;const b=a.createBuffer(),E=_.__size,A=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,b),a.bufferData(a.UNIFORM_BUFFER,E,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,M,b),b}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=n[_.id],b=_.uniforms,E=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let A=0,P=b.length;A<P;A++){const x=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,F=x.length;w<F;w++){const C=x[w];if(f(C,A,w,E)===!0){const N=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let z=0;z<L.length;z++){const G=L[z],W=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,N+V,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,N,C.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,M,b,E){const A=_.value,P=M+"_"+b;if(E[P]===void 0)return typeof A=="number"||typeof A=="boolean"?E[P]=A:E[P]=A.clone(),!0;{const x=E[P];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return E[P]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function p(_){const M=_.uniforms;let b=0;const E=16;for(let P=0,x=M.length;P<x;P++){const w=Array.isArray(M[P])?M[P]:[M[P]];for(let F=0,C=w.length;F<C;F++){const N=w[F],L=Array.isArray(N.value)?N.value:[N.value];for(let V=0,z=L.length;V<z;V++){const G=L[V],W=v(G),se=b%E,J=se%W.boundary,le=se+J;b+=J,le!==0&&E-le<W.storage&&(b+=E-le),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=W.storage}}}const A=b%E;return A>0&&(b+=E-A),_.__size=b,_.__cache={},this}function v(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){const M=_.target;M.removeEventListener("dispose",g);const b=r.indexOf(M.__bindingPointIndex);r.splice(b,1),a.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function m(){for(const _ in n)a.deleteBuffer(n[_]);r=[],n={},s={}}return{bind:l,update:c,dispose:m}}const $v=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function Kv(){return Mi===null&&(Mi=new pl($v,16,16,ls,en),Mi.name="DFG_LUT",Mi.minFilter=Ut,Mi.magFilter=Ut,Mi.wrapS=Ri,Mi.wrapT=Ri,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class Yv{constructor(e={}){const{canvas:t=wu(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const v=f,g=new Set([ol,rl,al]),m=new Set([oi,Ii,Hs,Ws,il,nl]),_=new Uint32Array(4),M=new Int32Array(4);let b=null,E=null;const A=[],P=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=ft;let C=0,N=0,L=null,V=-1,z=null;const G=new St,W=new St;let se=null;const J=new ke(0);let le=0,xe=t.width,ge=t.height,Ge=1,Mt=null,xt=null;const Z=new St(0,0,xe,ge),ce=new St(0,0,xe,ge);let ue=!1;const Ve=new gl;let Ie=!1,Ue=!1;const zt=new qe,tt=new I,rt=new St,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Ct(){return L===null?Ge:1}let D=i;function Dt(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",yt,!1),D===null){const B="webgl2";if(D=Dt(B,T),D===null)throw Dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Oe("WebGLRenderer: "+T.message),T}let at,vt,Ee,R,S,U,j,Q,K,Se,he,Le,Ne,te,ae,be,we,ve,$e,k,de,re,_e;function ie(){at=new Yg(D),at.init(),de=new Bv(D,at),vt=new zg(D,at,e,de),Ee=new Uv(D,at),vt.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),R=new Jg(D),S=new Mv,U=new Fv(D,at,Ee,S,vt,de,R),j=new Kg(w),Q=new np(D),re=new Bg(D,Q),K=new jg(D,Q,R,re),Se=new e0(D,K,Q,re,R),ve=new Qg(D,vt,U),ae=new Gg(S),he=new bv(w,j,at,vt,re,ae),Le=new qv(w,S),Ne=new Tv,te=new Lv(at),we=new Fg(w,j,Ee,Se,p,l),be=new Ov(w,Se,vt),_e=new Xv(D,R,vt,Ee),$e=new Vg(D,at,R),k=new Zg(D,at,R),R.programs=he.programs,w.capabilities=vt,w.extensions=at,w.properties=S,w.renderLists=Ne,w.shadowMap=be,w.state=Ee,w.info=R}ie(),v!==oi&&(x=new i0(v,t.width,t.height,n,s));const $=new Hv(w,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(T){T!==void 0&&(Ge=T,this.setSize(xe,ge,!1))},this.getSize=function(T){return T.set(xe,ge)},this.setSize=function(T,B,X=!0){if($.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=T,ge=B,t.width=Math.floor(T*Ge),t.height=Math.floor(B*Ge),X===!0&&(t.style.width=T+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(xe*Ge,ge*Ge).floor()},this.setDrawingBufferSize=function(T,B,X){xe=T,ge=B,Ge=X,t.width=Math.floor(T*X),t.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(v===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,X,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,X,q),Ee.viewport(G.copy(Z).multiplyScalar(Ge).round())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,B,X,q){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,B,X,q),Ee.scissor(W.copy(ce).multiplyScalar(Ge).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){Ee.setScissorTest(ue=T)},this.setOpaqueSort=function(T){Mt=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,X=!0){let q=0;if(T){let H=!1;if(L!==null){const pe=L.texture.format;H=g.has(pe)}if(H){const pe=L.texture.type,ye=m.has(pe),me=we.getClearColor(),Te=we.getClearAlpha(),Re=me.r,Be=me.g,Ke=me.b;ye?(_[0]=Re,_[1]=Be,_[2]=Ke,_[3]=Te,D.clearBufferuiv(D.COLOR,0,_)):(M[0]=Re,M[1]=Be,M[2]=Ke,M[3]=Te,D.clearBufferiv(D.COLOR,0,M))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),we.dispose(),Ne.dispose(),te.dispose(),S.dispose(),j.dispose(),Se.dispose(),re.dispose(),_e.dispose(),he.dispose(),$.dispose(),$.removeEventListener("sessionstart",Tl),$.removeEventListener("sessionend",El),_n.stop()};function Me(T){T.preventDefault(),Va("WebGLRenderer: Context Lost."),F=!0}function Fe(){Va("WebGLRenderer: Context Restored."),F=!1;const T=R.autoReset,B=be.enabled,X=be.autoUpdate,q=be.needsUpdate,H=be.type;ie(),R.autoReset=T,be.enabled=B,be.autoUpdate=X,be.needsUpdate=q,be.type=H}function yt(T){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){const B=T.target;B.removeEventListener("dispose",ot),Ui(B)}function Ui(T){Fi(T),S.remove(T)}function Fi(T){const B=S.get(T).programs;B!==void 0&&(B.forEach(function(X){he.releaseProgram(X)}),T.isShaderMaterial&&he.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,q,H,pe){B===null&&(B=pt);const ye=H.isMesh&&H.matrixWorld.determinant()<0,me=Od(T,B,X,q,H);Ee.setMaterial(q,ye);let Te=X.index,Re=1;if(q.wireframe===!0){if(Te=K.getWireframeAttribute(X),Te===void 0)return;Re=2}const Be=X.drawRange,Ke=X.attributes.position;let Ce=Be.start*Re,dt=(Be.start+Be.count)*Re;pe!==null&&(Ce=Math.max(Ce,pe.start*Re),dt=Math.min(dt,(pe.start+pe.count)*Re)),Te!==null?(Ce=Math.max(Ce,0),dt=Math.min(dt,Te.count)):Ke!=null&&(Ce=Math.max(Ce,0),dt=Math.min(dt,Ke.count));const Pt=dt-Ce;if(Pt<0||Pt===1/0)return;re.setup(H,q,me,X,Te);let Et,ut=$e;if(Te!==null&&(Et=Q.get(Te),ut=k,ut.setIndex(Et)),H.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Ct()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(H.isLine){let Kt=q.linewidth;Kt===void 0&&(Kt=1),Ee.setLineWidth(Kt*Ct()),H.isLineSegments?ut.setMode(D.LINES):H.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else H.isPoints?ut.setMode(D.POINTS):H.isSprite&&ut.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)za("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Kt=H._multiDrawStarts,Ae=H._multiDrawCounts,si=H._multiDrawCount,it=Te?Q.get(Te).bytesPerElement:1,ui=S.get(q).currentProgram.getUniforms();for(let Si=0;Si<si;Si++)ui.setValue(D,"_gl_DrawID",Si),ut.render(Kt[Si]/it,Ae[Si])}else if(H.isInstancedMesh)ut.renderInstances(Ce,Pt,H.count);else if(X.isInstancedBufferGeometry){const Kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,Kt);ut.renderInstances(Ce,Pt,Ae)}else ut.render(Ce,Pt)};function wl(T,B,X){T.transparent===!0&&T.side===Tt&&T.forceSinglePass===!1?(T.side=ei,T.needsUpdate=!0,Js(T,B,X),T.side=Qi,T.needsUpdate=!0,Js(T,B,X),T.side=Tt):Js(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),E=te.get(X),E.init(B),P.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const me=pe[ye];wl(me,X,H),q.add(me)}else wl(pe,X,H),q.add(pe)}),E=P.pop(),q},this.compileAsync=function(T,B,X=null){const q=this.compile(T,B,X);return new Promise(H=>{function pe(){if(q.forEach(function(ye){S.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){H(T);return}setTimeout(pe,10)}at.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let sr=null;function Nd(T){sr&&sr(T)}function Tl(){_n.stop()}function El(){_n.start()}const _n=new xd;_n.setAnimationLoop(Nd),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(T){sr=T,$.setAnimationLoop(T),T===null?_n.stop():_n.start()},$.addEventListener("sessionstart",Tl),$.addEventListener("sessionend",El),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,q=x!==null&&(L===null||X)&&x.begin(w,L);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,B,L),E=te.get(T,P.length),E.init(B),P.push(E),zt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ve.setFromProjectionMatrix(zt,Ci,B.reversedDepth),Ue=this.localClippingEnabled,Ie=ae.init(this.clippingPlanes,Ue),b=Ne.get(T,A.length),b.init(),A.push(b),$.enabled===!0&&$.isPresenting===!0){const ye=w.xr.getDepthSensingMesh();ye!==null&&ar(ye,B,-1/0,w.sortObjects)}ar(T,B,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(Mt,xt),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&we.addToRenderList(b,T),this.info.render.frame++,Ie===!0&&ae.beginShadows();const H=E.state.shadowsArray;if(be.render(H,T,B),Ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&x.hasRenderPass())===!1){const ye=b.opaque,me=b.transmissive;if(E.setupLights(),B.isArrayCamera){const Te=B.cameras;if(me.length>0)for(let Re=0,Be=Te.length;Re<Be;Re++){const Ke=Te[Re];Rl(ye,me,T,Ke)}Xe&&we.render(T);for(let Re=0,Be=Te.length;Re<Be;Re++){const Ke=Te[Re];Al(b,T,Ke,Ke.viewport)}}else me.length>0&&Rl(ye,me,T,B),Xe&&we.render(T),Al(b,T,B)}L!==null&&N===0&&(U.updateMultisampleRenderTarget(L),U.updateRenderTargetMipmap(L)),q&&x.end(w),T.isScene===!0&&T.onAfterRender(w,T,B),re.resetDefaultState(),V=-1,z=null,P.pop(),P.length>0?(E=P[P.length-1],Ie===!0&&ae.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function ar(T,B,X,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){q&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(zt);const ye=Se.update(T),me=T.material;me.visible&&b.push(T,ye,me,X,rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const ye=Se.update(T),me=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),rt.copy(ye.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(zt)),Array.isArray(me)){const Te=ye.groups;for(let Re=0,Be=Te.length;Re<Be;Re++){const Ke=Te[Re],Ce=me[Ke.materialIndex];Ce&&Ce.visible&&b.push(T,ye,Ce,X,rt.z,Ke)}}else me.visible&&b.push(T,ye,me,X,rt.z,null)}}const pe=T.children;for(let ye=0,me=pe.length;ye<me;ye++)ar(pe[ye],B,X,q)}function Al(T,B,X,q){const{opaque:H,transmissive:pe,transparent:ye}=T;E.setupLightsView(X),Ie===!0&&ae.setGlobalState(w.clippingPlanes,X),q&&Ee.viewport(G.copy(q)),H.length>0&&Zs(H,B,X),pe.length>0&&Zs(pe,B,X),ye.length>0&&Zs(ye,B,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Rl(T,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){const Ce=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new Li(1,1,{generateMipmaps:!0,type:Ce?en:oi,minFilter:Ki,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const pe=E.state.transmissionRenderTarget[q.id],ye=q.viewport||G;pe.setSize(ye.z*w.transmissionResolutionScale,ye.w*w.transmissionResolutionScale);const me=w.getRenderTarget(),Te=w.getActiveCubeFace(),Re=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(J),le=w.getClearAlpha(),le<1&&w.setClearColor(16777215,.5),w.clear(),Xe&&we.render(X);const Be=w.toneMapping;w.toneMapping=Pi;const Ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Ie===!0&&ae.setGlobalState(w.clippingPlanes,q),Zs(T,X,q),U.updateMultisampleRenderTarget(pe),U.updateRenderTargetMipmap(pe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let dt=0,Pt=B.length;dt<Pt;dt++){const Et=B[dt],{object:ut,geometry:Kt,material:Ae,group:si}=Et;if(Ae.side===Tt&&ut.layers.test(q.layers)){const it=Ae.side;Ae.side=ei,Ae.needsUpdate=!0,Cl(ut,X,q,Kt,Ae,si),Ae.side=it,Ae.needsUpdate=!0,Ce=!0}}Ce===!0&&(U.updateMultisampleRenderTarget(pe),U.updateRenderTargetMipmap(pe))}w.setRenderTarget(me,Te,Re),w.setClearColor(J,le),Ke!==void 0&&(q.viewport=Ke),w.toneMapping=Be}function Zs(T,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,pe=T.length;H<pe;H++){const ye=T[H],{object:me,geometry:Te,group:Re}=ye;let Be=ye.material;Be.allowOverride===!0&&q!==null&&(Be=q),me.layers.test(X.layers)&&Cl(me,B,X,Te,Be,Re)}}function Cl(T,B,X,q,H,pe){T.onBeforeRender(w,B,X,q,H,pe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(w,B,X,q,T,pe),H.transparent===!0&&H.side===Tt&&H.forceSinglePass===!1?(H.side=ei,H.needsUpdate=!0,w.renderBufferDirect(X,B,q,H,T,pe),H.side=Qi,H.needsUpdate=!0,w.renderBufferDirect(X,B,q,H,T,pe),H.side=Tt):w.renderBufferDirect(X,B,q,H,T,pe),T.onAfterRender(w,B,X,q,H,pe)}function Js(T,B,X){B.isScene!==!0&&(B=pt);const q=S.get(T),H=E.state.lights,pe=E.state.shadowsArray,ye=H.state.version,me=he.getParameters(T,H.state,pe,B,X),Te=he.getProgramCacheKey(me);let Re=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;const Be=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=j.get(T.envMap||q.environment,Be),q.envMapRotation=q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",ot),Re=new Map,q.programs=Re);let Ke=Re.get(Te);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===ye)return Ll(T,me),Ke}else me.uniforms=he.getUniforms(T),T.onBeforeCompile(me,w),Ke=he.acquireProgram(me,Te),Re.set(Te,Ke),q.uniforms=me.uniforms;const Ce=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),Ll(T,me),q.needsLights=Fd(T),q.lightsStateVersion=ye,q.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ke,q.uniformsList=null,Ke}function Pl(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Oa.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ll(T,B){const X=S.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Od(T,B,X,q,H){B.isScene!==!0&&(B=pt),U.resetTextureUnits();const pe=B.fog,ye=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,me=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ti,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Re=j.get(q.envMap||ye,Te),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color;let Et=Pi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=w.toneMapping);const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Kt=ut!==void 0?ut.length:0,Ae=S.get(q),si=E.state.lights;if(Ie===!0&&(Ue===!0||T!==z)){const Gt=T===z&&q.id===V;ae.setState(q,T,Gt)}let it=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==si.state.version||Ae.outputColorSpace!==me||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Re||q.fog===!0&&Ae.fog!==pe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==Be||Ae.vertexTangents!==Ke||Ae.morphTargets!==Ce||Ae.morphNormals!==dt||Ae.morphColors!==Pt||Ae.toneMapping!==Et||Ae.morphTargetsCount!==Kt)&&(it=!0):(it=!0,Ae.__version=q.version);let ui=Ae.currentProgram;it===!0&&(ui=Js(q,B,H));let Si=!1,xn=!1,On=!1;const mt=ui.getUniforms(),Xt=Ae.uniforms;if(Ee.useProgram(ui.program)&&(Si=!0,xn=!0,On=!0),q.id!==V&&(V=q.id,xn=!0),Si||z!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",T.projectionMatrix),mt.setValue(D,"viewMatrix",T.matrixWorldInverse);const an=mt.map.cameraPosition;an!==void 0&&an.setValue(D,tt.setFromMatrixPosition(T.matrixWorld)),vt.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,xn=!0,On=!0)}if(Ae.needsLights&&(si.state.directionalShadowMap.length>0&&mt.setValue(D,"directionalShadowMap",si.state.directionalShadowMap,U),si.state.spotShadowMap.length>0&&mt.setValue(D,"spotShadowMap",si.state.spotShadowMap,U),si.state.pointShadowMap.length>0&&mt.setValue(D,"pointShadowMap",si.state.pointShadowMap,U)),H.isSkinnedMesh){mt.setOptional(D,H,"bindMatrix"),mt.setOptional(D,H,"bindMatrixInverse");const Gt=H.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(D,"boneTexture",Gt.boneTexture,U))}H.isBatchedMesh&&(mt.setOptional(D,H,"batchingTexture"),mt.setValue(D,"batchingTexture",H._matricesTexture,U),mt.setOptional(D,H,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",H._indirectTexture,U),mt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",H._colorsTexture,U));const sn=X.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ve.update(H,X,ui),(xn||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,mt.setValue(D,"receiveShadow",H.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(Xt.envMapIntensity.value=B.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Kv()),xn&&(mt.setValue(D,"toneMappingExposure",w.toneMappingExposure),Ae.needsLights&&Ud(Xt,On),pe&&q.fog===!0&&Le.refreshFogUniforms(Xt,pe),Le.refreshMaterialUniforms(Xt,q,Ge,ge,E.state.transmissionRenderTarget[T.id]),Oa.upload(D,Pl(Ae),Xt,U)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Oa.upload(D,Pl(Ae),Xt,U),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(D,"center",H.center),mt.setValue(D,"modelViewMatrix",H.modelViewMatrix),mt.setValue(D,"normalMatrix",H.normalMatrix),mt.setValue(D,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Gt=q.uniformsGroups;for(let an=0,Un=Gt.length;an<Un;an++){const Dl=Gt[an];_e.update(Dl,ui),_e.bind(Dl,ui)}}return ui}function Ud(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Fd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,X){const q=S.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),S.get(T.texture).__webglTexture=B,S.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const X=S.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Bd=D.createFramebuffer();this.setRenderTarget=function(T,B=0,X=0){L=T,C=B,N=X;let q=null,H=!1,pe=!1;if(T){const me=S.get(T);if(me.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),G.copy(T.viewport),W.copy(T.scissor),se=T.scissorTest,Ee.viewport(G),Ee.scissor(W),Ee.setScissorTest(se),V=-1;return}else if(me.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(me.__hasExternalTextures)U.rebindTextures(T,S.get(T.texture).__webglTexture,S.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&S.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(pe=!0);const Re=S.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?q=Re[B][X]:q=Re[B],H=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?q=S.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?q=Re[X]:q=Re,G.copy(T.viewport),W.copy(T.scissor),se=T.scissorTest}else G.copy(Z).multiplyScalar(Ge).floor(),W.copy(ce).multiplyScalar(Ge).floor(),se=ue;if(X!==0&&(q=Bd),Ee.bindFramebuffer(D.FRAMEBUFFER,q)&&Ee.drawBuffers(T,q),Ee.viewport(G),Ee.scissor(W),Ee.setScissorTest(se),H){const me=S.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,X)}else if(pe){const me=B;for(let Te=0;Te<T.textures.length;Te++){const Re=S.get(T.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,Re.__webglTexture,X,me)}}else if(T!==null&&X!==0){const me=S.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,X)}V=-1},this.readRenderTargetPixels=function(T,B,X,q,H,pe,ye,me=0){if(!(T&&T.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Ee.bindFramebuffer(D.FRAMEBUFFER,Te);try{const Re=T.textures[me],Be=Re.format,Ke=Re.type;if(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!vt.textureFormatReadable(Be)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ke)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&X>=0&&X<=T.height-H&&D.readPixels(B,X,q,H,de.convert(Be),de.convert(Ke),pe)}finally{const Re=L!==null?S.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,q,H,pe,ye,me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(B>=0&&B<=T.width-q&&X>=0&&X<=T.height-H){Ee.bindFramebuffer(D.FRAMEBUFFER,Te);const Re=T.textures[me],Be=Re.format,Ke=Re.type;if(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!vt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(B,X,q,H,de.convert(Be),de.convert(Ke),0);const dt=L!==null?S.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,dt);const Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Tu(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(Ce),D.deleteSync(Pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,X=0){const q=Math.pow(2,-X),H=Math.floor(T.image.width*q),pe=Math.floor(T.image.height*q),ye=B!==null?B.x:0,me=B!==null?B.y:0;U.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,ye,me,H,pe),Ee.unbindTexture()};const Vd=D.createFramebuffer(),zd=D.createFramebuffer();this.copyTextureToTexture=function(T,B,X=null,q=null,H=0,pe=0){let ye,me,Te,Re,Be,Ke,Ce,dt,Pt;const Et=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(X!==null)ye=X.max.x-X.min.x,me=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Be=X.min.y,Ke=X.isBox3?X.min.z:0;else{const Xt=Math.pow(2,-H);ye=Math.floor(Et.width*Xt),me=Math.floor(Et.height*Xt),T.isDataArrayTexture?Te=Et.depth:T.isData3DTexture?Te=Math.floor(Et.depth*Xt):Te=1,Re=0,Be=0,Ke=0}q!==null?(Ce=q.x,dt=q.y,Pt=q.z):(Ce=0,dt=0,Pt=0);const ut=de.convert(B.format),Kt=de.convert(B.type);let Ae;B.isData3DTexture?(U.setTexture3D(B,0),Ae=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Ae=D.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const si=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ui=D.getParameter(D.UNPACK_SKIP_PIXELS),Si=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const On=T.isDataArrayTexture||T.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Xt=S.get(T),sn=S.get(B),Gt=S.get(Xt.__renderTarget),an=S.get(sn.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let Un=0;Un<Te;Un++)On&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(T).__webglTexture,H,Ke+Un),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(B).__webglTexture,pe,Pt+Un)),D.blitFramebuffer(Re,Be,ye,me,Ce,dt,ye,me,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||S.has(T)){const Xt=S.get(T),sn=S.get(B);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Vd),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,zd);for(let Gt=0;Gt<Te;Gt++)On?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,H,Ke+Gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,H),mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,pe,Pt+Gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,pe),H!==0?D.blitFramebuffer(Re,Be,ye,me,Ce,dt,ye,me,D.COLOR_BUFFER_BIT,D.NEAREST):mt?D.copyTexSubImage3D(Ae,pe,Ce,dt,Pt+Gt,Re,Be,ye,me):D.copyTexSubImage2D(Ae,pe,Ce,dt,Re,Be,ye,me);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ae,pe,Ce,dt,Pt,ye,me,Te,ut,Kt,Et.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,pe,Ce,dt,Pt,ye,me,Te,ut,Et.data):D.texSubImage3D(Ae,pe,Ce,dt,Pt,ye,me,Te,ut,Kt,Et):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,Ce,dt,ye,me,ut,Kt,Et.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,Ce,dt,Et.width,Et.height,ut,Et.data):D.texSubImage2D(D.TEXTURE_2D,pe,Ce,dt,ye,me,ut,Kt,Et);D.pixelStorei(D.UNPACK_ROW_LENGTH,si),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ui),D.pixelStorei(D.UNPACK_SKIP_ROWS,Si),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),pe===0&&B.generateMipmaps&&D.generateMipmap(Ae),Ee.unbindTexture()},this.initRenderTarget=function(T){S.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){C=0,N=0,L=null,Ee.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Yc(a,e){if(e===fu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Go||e===id){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,n=[];if(e===Go)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function jv(a){const e=new Map,t=new Map,i=a.clone();return Ed(a,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,r=e.get(n),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Ed(a,e,t){t(a,e);for(let i=0;i<a.children.length;i++)Ed(a.children[i],e.children[i],t)}class Zv extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iy(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new jc(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new jc(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new my(t)})}load(e,t,i,n){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=zs.extractUrlBase(e);r=zs.resolveURL(c,this.path)}else r=zs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new gd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ad){try{r[je.KHR_BINARY_GLTF]=new gy(e)}catch(d){n&&n(d);return}s=JSON.parse(r[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:r[d]=new ey;break;case je.KHR_DRACO_MESH_COMPRESSION:r[d]=new vy(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:r[d]=new yy;break;case je.KHR_MESH_QUANTIZATION:r[d]=new _y;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function Jv(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function Lt(a,e,t){const i=a.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qv{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ti);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _d(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gn(h),c.distance=d;break;case"spot":c=new yd(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class ey{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return De}extendParams(e,t,i){const n=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],ti),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,ft))}return Promise.all(n)}}class ty{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class iy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(s,s)}return Promise.all(n)}}class ny{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class sy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}}class ay{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ti)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,ft)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}}class ry{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}}class oy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],ti),Promise.all(n)}}class ly{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class cy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],ti),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,ft)),Promise.all(n)}}class hy{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}}class dy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=Lt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}}class uy{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class fy{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=n.images[r.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}}class py{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=n.images[r.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}}class jc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(f),h,d,u,n.mode,n.filter),f})})}else return null}}class my{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=i.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const p of d){const v=new qe,g=new I,m=new nn,_=new I(1,1,1),M=new pf(p.geometry,p.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,v.compose(g,m,_));for(const b in l)if(b==="_COLOR_0"){const E=l[b];M.instanceColor=new Wo(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&p.geometry.setAttribute(b,l[b]);bt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ad="glTF",Ls=12,Zc={JSON:1313821514,BIN:5130562};class gy{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ls),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ls,s=new DataView(e,Ls);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Zc.JSON){const c=new Uint8Array(e,Ls+r,o);this.content=i.decode(c)}else if(l===Zc.BIN){const c=Ls+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const d=Yo[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=Yo[h]||h.toLowerCase();if(r[h]!==void 0){const u=i.accessors[e.attributes[h]],f=as[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(f){for(const p in f.attributes){const v=f.attributes[p],g=l[p];g!==void 0&&(v.normalized=g)}d(f)},o,c,ti,u)})})}}class yy{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _y{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Rd extends vs{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,f=u*d,p=e*c,v=p-c,g=-2*f+3*u,m=f-u,_=1-g,M=m-u+d;for(let b=0;b!==o;b++){const E=r[v+b+o],A=r[v+b+l]*h,P=r[p+b+o],x=r[p+b]*h;s[b]=_*E+M*A+g*P+m*x}return s}}const xy=new nn;class Sy extends Rd{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return xy.fromArray(s).normalize().toArray(s),s}}const ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jc={9728:Ot,9729:Ut,9984:Yh,9985:Pa,9986:Ns,9987:Ki},Qc={33071:Ri,33648:Fa,10497:qt},Gr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},by={CUBICSPLINE:void 0,LINEAR:Xs,STEP:qs},Hr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function My(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Y({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),a.DefaultMaterial}function An(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ti(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wy(a,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;r.push(u)}if(n){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(a.morphAttributes.position=h),n&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=u),a.morphTargetsRelative=!0,a})}function Ty(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ey(a){let e;const t=a.extensions&&a.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wr(t.attributes):e=a.indices+":"+Wr(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+Wr(a.targets[i]);return e}function Wr(a){let e="";const t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function jo(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ay(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ry=new qe;class Cy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?this.textureLoader=new es(this.options.manager):this.textureLoader=new Wf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return An(s,o,n),Ti(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load(zs.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const r=Gr[n.type],o=as[n.componentType],l=n.normalized===!0,c=new o(n.count*r);return Promise.resolve(new kt(c,r,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Gr[n.type],c=as[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0;let v,g;if(f&&f!==d){const m=Math.floor(u/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let M=t.cache.get(_);M||(v=new c(o,m*f,n.count*f/h),M=new of(v,f/h),t.cache.add(_,M)),g=new fl(M,l,u%f/h,p)}else o===null?v=new c(n.count*l):v=new c(o,u,n.count*l),g=new kt(v,l,p);if(n.sparse!==void 0){const m=Gr.SCALAR,_=as[n.sparse.indices.componentType],M=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,E=new _(r[1],M,n.sparse.count*m),A=new c(r[2],b,n.sparse.count*l);o!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,x=E.length;P<x;P++){const w=E[P];if(g.setX(w,A[P*l]),l>=2&&g.setY(w,A[P*l+1]),l>=3&&g.setZ(w,A[P*l+2]),l>=4&&g.setW(w,A[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=Jc[u.magFilter]||Ut,h.minFilter=Jc[u.minFilter]||Ki,h.wrapS=Qc[u.wrapS]||qt,h.wrapT=Qc[u.wrapT]||qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ot&&h.minFilter!==Ut,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=n.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(v){const g=new Ft(v);g.needsUpdate=!0,u(g)}),t.load(zs.resolveURL(d,s.path),p,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Ti(d,r),d.userData.mimeType=r.mimeType||Ay(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Vs,Di.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ga,Di.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Y}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const d=n[je.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],ti),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,ft)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Tt);const h=s.alphaMode||Hr.OPAQUE;if(h===Hr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Hr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==De&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ye(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==De&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==De){const d=s.emissiveFactor;o.emissive=new ke().setRGB(d[0],d[1],d[2],ti)}return s.emissiveTexture!==void 0&&r!==De&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ft)),Promise.all(c).then(function(){const d=new r(o);return s.name&&(d.name=s.name),Ti(d,s),t.associations.set(d,{materials:e}),s.extensions&&An(n,d,s),d})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return eh(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ey(c),d=n[h];if(d)r.push(d.promise);else{let u;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=eh(new Rt,c,t),n[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?My(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){const v=h[f],g=r[f];let m;const _=c[f];if(g.mode===ci.TRIANGLES||g.mode===ci.TRIANGLE_STRIP||g.mode===ci.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new df(v,_):new O(v,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ci.TRIANGLE_STRIP?m.geometry=Yc(m.geometry,id):g.mode===ci.TRIANGLE_FAN&&(m.geometry=Yc(m.geometry,Go));else if(g.mode===ci.LINES)m=new qo(v,_);else if(g.mode===ci.LINE_STRIP)m=new vl(v,_);else if(g.mode===ci.LINE_LOOP)m=new yf(v,_);else if(g.mode===ci.POINTS)m=new Na(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ty(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ti(m,s),g.extensions&&An(n,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&An(n,d[0],s),d[0];const u=new We;s.extensions&&An(n,u,s),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Qt(oe.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new er(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),r=n,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d){o.push(d);const u=new qe;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ml(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){const f=n.channels[d],p=n.samplers[f.sampler],v=f.target,g=v.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,_=n.parameters!==void 0?n.parameters[p.output]:p.output;v.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(v))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],p=d[2],v=d[3],g=d[4],m=[];for(let M=0,b=u.length;M<b;M++){const E=u[M],A=f[M],P=p[M],x=v[M],w=g[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const F=i._createAnimationTracks(E,A,P,x,w);if(F)for(let C=0;C<F.length;C++)m.push(F[C])}const _=new If(s,void 0,m);return Ti(_,n),_})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),r=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)r.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Ry)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,p=d[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new hd:c.length>1?h=new We:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=r),Ti(h,s),s.extensions&&An(i,h,s),s.matrix!==void 0){const d=new qe;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new We;i.name&&(s.name=n.createUniqueName(i.name)),Ti(s,i),i.extensions&&An(t,s,i);const r=i.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(n.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?s.add(jv(u)):s.add(u)}const c=h=>{const d=new Map;for(const[u,f]of n.associations)(u instanceof Di||u instanceof Ft)&&d.set(u,f);return h.traverse(u=>{const f=n.associations.get(u);f!=null&&d.set(u,f)}),d};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const r=[],o=e.name?e.name:e.uuid,l=[];un[s.path]===un.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(un[s.path]){case un.weights:c=ds;break;case un.rotation:c=us;break;case un.translation:case un.scale:c=fs;break;default:switch(i.itemSize){case 1:c=ds;break;case 2:case 3:default:c=fs;break}break}const h=n.interpolation!==void 0?by[n.interpolation]:Xs,d=this._getArrayFromAccessor(i);for(let u=0,f=l.length;u<f;u++){const p=new c(l[u]+"."+un[s.path],t.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=jo(t.constructor),n=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof us?Sy:Rd;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Py(a,e,t){const i=e.attributes,n=new Nt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=jo(as[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){const v=jo(as[u.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;const r=new Ni;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function eh(a,e,t){const i=e.attributes,n=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in i){const o=Yo[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(r)}return Qe.workingColorSpace!==ti&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Ti(a,e),Py(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?wy(a,e.targets,t):a})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var ps;(function(a){a.Unimplemented="UNIMPLEMENTED",a.Unavailable="UNAVAILABLE"})(ps||(ps={}));class qr extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const Ly=a=>{var e,t;return a!=null&&a.androidBridge?"android":!((t=(e=a==null?void 0:a.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},Dy=a=>{const e=a.CapacitorCustomPlatform||null,t=a.Capacitor||{},i=t.Plugins=t.Plugins||{},n=()=>e!==null?e.name:Ly(a),s=()=>n()!=="web",r=d=>{const u=c.get(d);return!!(u!=null&&u.platforms.has(n())||o(d))},o=d=>{var u;return(u=t.PluginHeaders)===null||u===void 0?void 0:u.find(f=>f.name===d)},l=d=>a.console.error(d),c=new Map,h=(d,u={})=>{const f=c.get(d);if(f)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),f.proxy;const p=n(),v=o(d);let g;const m=async()=>(!g&&p in u?g=typeof u[p]=="function"?g=await u[p]():g=u[p]:e!==null&&!g&&"web"in u&&(g=typeof u.web=="function"?g=await u.web():g=u.web),g),_=(x,w)=>{var F,C;if(v){const N=v==null?void 0:v.methods.find(L=>w===L.name);if(N)return N.rtype==="promise"?L=>t.nativePromise(d,w.toString(),L):(L,V)=>t.nativeCallback(d,w.toString(),L,V);if(x)return(F=x[w])===null||F===void 0?void 0:F.bind(x)}else{if(x)return(C=x[w])===null||C===void 0?void 0:C.bind(x);throw new qr(`"${d}" plugin is not implemented on ${p}`,ps.Unimplemented)}},M=x=>{let w;const F=(...C)=>{const N=m().then(L=>{const V=_(L,x);if(V){const z=V(...C);return w=z==null?void 0:z.remove,z}else throw new qr(`"${d}.${x}()" is not implemented on ${p}`,ps.Unimplemented)});return x==="addListener"&&(N.remove=async()=>w()),N};return F.toString=()=>`${x.toString()}() { [capacitor code] }`,Object.defineProperty(F,"name",{value:x,writable:!1,configurable:!1}),F},b=M("addListener"),E=M("removeListener"),A=(x,w)=>{const F=b({eventName:x},w),C=async()=>{const L=await F;E({eventName:x,callbackId:L},w)},N=new Promise(L=>F.then(()=>L({remove:C})));return N.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await C()},N},P=new Proxy({},{get(x,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return v?A:b;case"removeListener":return E;default:return M(w)}}});return i[d]=P,c.set(d,{name:d,proxy:P,platforms:new Set([...Object.keys(u),...v?[p]:[]])}),P};return t.convertFileSrc||(t.convertFileSrc=d=>d),t.getPlatform=n,t.handleError=l,t.isNativePlatform=s,t.isPluginAvailable=r,t.registerPlugin=h,t.Exception=qr,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},Iy=a=>a.Capacitor=Dy(a),$a=Iy(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),js=$a.registerPlugin;class Ml{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(e);const r=async()=>this.removeListener(e,t);return Promise.resolve({remove:r})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){const n=this.listeners[e];if(!n){if(i){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}n.forEach(s=>s(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new $a.Exception(e,ps.Unimplemented)}unavailable(e="not available"){return new $a.Exception(e,ps.Unavailable)}async removeListener(e,t){const i=this.listeners[e];if(!i)return;const n=i.indexOf(t);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const th=a=>encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ih=a=>a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ky extends Ml{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[n,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=ih(n).trim(),s=ih(s).trim(),t[n]=s}),t}async setCookie(e){try{const t=th(e.key),i=th(e.value),n=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),r=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${n}; path=${s}; ${r};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}js("CapacitorCookies",{web:()=>new ky});const Ny=async a=>new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const n=i.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},i.onerror=n=>t(n),i.readAsDataURL(a)}),Oy=(a={})=>{const e=Object.keys(a);return Object.keys(a).map(n=>n.toLocaleLowerCase()).reduce((n,s,r)=>(n[s]=a[e[r]],n),{})},Uy=(a,e=!0)=>a?Object.entries(a).reduce((i,n)=>{const[s,r]=n;let o,l;return Array.isArray(r)?(l="",r.forEach(c=>{o=e?encodeURIComponent(c):c,l+=`${s}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(r):r,l=`${s}=${o}`),`${i}&${l}`},"").substr(1):null,Fy=(a,e={})=>{const t=Object.assign({method:a.method||"GET",headers:a.headers},e),n=Oy(a.headers)["content-type"]||"";if(typeof a.data=="string")t.body=a.data;else if(n.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[r,o]of Object.entries(a.data||{}))s.set(r,o);t.body=s.toString()}else if(n.includes("multipart/form-data")||a.data instanceof FormData){const s=new FormData;if(a.data instanceof FormData)a.data.forEach((o,l)=>{s.append(l,o)});else for(const o of Object.keys(a.data))s.append(o,a.data[o]);t.body=s;const r=new Headers(t.headers);r.delete("content-type"),t.headers=r}else(n.includes("application/json")||typeof a.data=="object")&&(t.body=JSON.stringify(a.data));return t};class By extends Ml{async request(e){const t=Fy(e,e.webFetchExtra),i=Uy(e.params,e.shouldEncodeUrlParams),n=i?`${e.url}?${i}`:e.url,s=await fetch(n,t),r=s.headers.get("content-type")||"";let{responseType:o="text"}=s.ok?e:{};r.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await s.blob(),l=await Ny(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const h={};return s.headers.forEach((d,u)=>{h[u]=d}),{data:l,headers:h,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}js("CapacitorHttp",{web:()=>new By});var nh;(function(a){a.Dark="DARK",a.Light="LIGHT",a.Default="DEFAULT"})(nh||(nh={}));var sh;(function(a){a.StatusBar="StatusBar",a.NavigationBar="NavigationBar"})(sh||(sh={}));class Vy extends Ml{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}js("SystemBars",{web:()=>new Vy});const zy="modulepreload",Gy=function(a,e){return new URL(a,e).href},ah={},Cd=function(e,t,i){let n=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(t.map(c=>{if(c=Gy(c,i),c in ah)return;ah[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!i)for(let p=r.length-1;p>=0;p--){const v=r[p];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":zy,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((p,v)=>{f.addEventListener("load",p),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return n.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},fn=js("CapacitorInAppPurchase",{web:()=>Cd(()=>import("./web-Pf7S1Ete.js"),[],import.meta.url).then(a=>new a.CapacitorInAppPurchaseWeb)});var rh;(function(a){a.General="General",a.ParentalGuidance="ParentalGuidance",a.Teen="Teen",a.MatureAudience="MatureAudience"})(rh||(rh={}));var oh;(function(a){a.SizeChanged="bannerAdSizeChanged",a.Loaded="bannerAdLoaded",a.FailedToLoad="bannerAdFailedToLoad",a.Opened="bannerAdOpened",a.Closed="bannerAdClosed",a.AdImpression="bannerAdImpression"})(oh||(oh={}));var lh;(function(a){a.TOP_CENTER="TOP_CENTER",a.CENTER="CENTER",a.BOTTOM_CENTER="BOTTOM_CENTER"})(lh||(lh={}));var ch;(function(a){a.BANNER="BANNER",a.FULL_BANNER="FULL_BANNER",a.LARGE_BANNER="LARGE_BANNER",a.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",a.LEADERBOARD="LEADERBOARD",a.ADAPTIVE_BANNER="ADAPTIVE_BANNER",a.SMART_BANNER="SMART_BANNER"})(ch||(ch={}));var ts;(function(a){a.Loaded="interstitialAdLoaded",a.FailedToLoad="interstitialAdFailedToLoad",a.Showed="interstitialAdShowed",a.FailedToShow="interstitialAdFailedToShow",a.Dismissed="interstitialAdDismissed"})(ts||(ts={}));var hh;(function(a){a.Loaded="onRewardedInterstitialAdLoaded",a.FailedToLoad="onRewardedInterstitialAdFailedToLoad",a.Showed="onRewardedInterstitialAdShowed",a.FailedToShow="onRewardedInterstitialAdFailedToShow",a.Dismissed="onRewardedInterstitialAdDismissed",a.Rewarded="onRewardedInterstitialAdReward"})(hh||(hh={}));var Dn;(function(a){a.Loaded="onRewardedVideoAdLoaded",a.FailedToLoad="onRewardedVideoAdFailedToLoad",a.Showed="onRewardedVideoAdShowed",a.FailedToShow="onRewardedVideoAdFailedToShow",a.Dismissed="onRewardedVideoAdDismissed",a.Rewarded="onRewardedVideoAdReward"})(Dn||(Dn={}));var Ka;(function(a){a.NOT_REQUIRED="NOT_REQUIRED",a.OBTAINED="OBTAINED",a.REQUIRED="REQUIRED",a.UNKNOWN="UNKNOWN"})(Ka||(Ka={}));var dh;(function(a){a[a.DISABLED=0]="DISABLED",a[a.EEA=1]="EEA",a[a.NOT_EEA=2]="NOT_EEA",a[a.US=3]="US",a[a.OTHER=4]="OTHER"})(dh||(dh={}));const Wt=js("AdMob",{web:()=>Cd(()=>import("./web-DxbkJYZV.js"),[],import.meta.url).then(a=>new a.AdMobWeb)}),Hy=""+new URL("cover-art-CbKw3loD.svg",import.meta.url).href,Ya="./",ne=a=>`${Ya}${a.replace(/^\//,"")}`,Wy=a=>a.startsWith(Ya)?`/${a.slice(Ya.length)}`:a,Zo=["localhost","127.0.0.1"];window.addEventListener("error",a=>{try{const e=JSON.parse(localStorage.getItem("n4sl_crash_log")||"[]");e.push({message:a.message,source:a.filename,lineno:a.lineno,colno:a.colno,time:new Date().toISOString()}),localStorage.setItem("n4sl_crash_log",JSON.stringify(e.slice(-10)))}catch{}});window.addEventListener("unhandledrejection",a=>{try{const e=JSON.parse(localStorage.getItem("n4sl_crash_log")||"[]");e.push({type:"unhandledrejection",reason:String(a.reason),time:new Date().toISOString()}),localStorage.setItem("n4sl_crash_log",JSON.stringify(e.slice(-10)))}catch{}});"caches"in window&&caches.keys().then(a=>{a.forEach(e=>{e!=="need4speedlahore-v3-sunset"&&caches.delete(e)})}).catch(()=>{});"serviceWorker"in navigator&&Zo.includes(window.location.hostname)?navigator.serviceWorker.getRegistrations().then(a=>a.forEach(e=>e.unregister())).catch(()=>{}):"serviceWorker"in navigator&&!Zo.includes(window.location.hostname)&&window.addEventListener("load",()=>{navigator.serviceWorker.register(ne("/sw.js"),{scope:Ya}).then(a=>{a.update().catch(()=>{})}).catch(()=>{})});const Gs=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(hover: none)").matches||navigator.maxTouchPoints>0;document.body.classList.toggle("touch-device",Gs);Gs&&(document.addEventListener("contextmenu",a=>a.preventDefault()),document.addEventListener("selectstart",a=>a.preventDefault()));const uh=["CANAL ROAD","LIBERTY","GULBERG","MALL ROAD","RING ROAD","WALLED CITY","FOOD STREET","LAHORE"],Xi=[-6.5,0,6.5],Rn=.155,Ds=15,Xr=10.8,qy=7.5,fh=18,pn=[{key:"chase",name:"Behind Car",y:4.6,z:17.5,fov:66,lookY:1.15,lookZ:-36},{key:"near",name:"Close Chase",y:3.2,z:14.6,fov:70,lookY:1.15,lookZ:-30},{key:"hood",name:"Hood Cam",y:2.3,z:8.2,fov:76,lookY:1.1,lookZ:-32}],ja=["real-hatchback-small","real-hatchback","real-sedan-basic","real-sedan-sport"],Xy={"real-hatchback-small":"hatchback-small","real-hatchback":"hatchback","real-sedan-basic":"sedan-basic","real-sedan-sport":"sedan-sport"},Pd=50,ph=["sedan","hatchback","suv","rickshaw","bus","truck","pickup","metrobus","bike","sedan","prado","rickshaw"],Jo=Array.from({length:Pd},(a,e)=>e%8===7?ja[Math.floor(e/8)%ja.length]:ph[e%ph.length]),mh=[...new Set(Jo)],wt=$a.getPlatform()==="android",$y="ca-app-pub-1797269464593835/8753822751",Ky="ca-app-pub-1797269464593835/5583756083",Yy=3,jy="ca-app-pub-3940256099942544/1033173712",Zy="ca-app-pub-3940256099942544/5224354917",gh=4,vh=4,Jy=100,Qy=25,e_=7,$r=[{day:1,cr:100,perk:"Starter Cash",icon:"💰"},{day:2,cr:180,perk:"Free Nitro",icon:"⚡"},{day:3,cr:300,perk:"Double Score",icon:"🔥"},{day:4,cr:450,perk:"Armor Shield",icon:"🛡️"},{day:5,cr:650,perk:"Cyan Underglow",icon:"✨"},{day:6,cr:900,perk:"Drift Boost",icon:"🏎️"},{day:7,cr:1500,perk:"Legend Gold Livery",icon:"👑"}],t_=[{name:"Pearl White",hex:16777215},{name:"Gulberg Crimson",hex:14427686},{name:"Canal Sapphire",hex:2450411},{name:"Shalimar Emerald",hex:366185},{name:"Badshahi Gold",hex:16096779},{name:"Mall Road Violet",hex:9647082},{name:"Shadow Black",hex:988970},{name:"Matte Silver",hex:6583435}],i_=[{name:"None",hex:null},{name:"Cyber Cyan",hex:440020},{name:"Toxic Green",hex:2278750},{name:"Blazing Red",hex:15680580},{name:"Golden Amber",hex:16096779},{name:"Ultra Violet",hex:11032055},{name:"Neon Pink",hex:15485081}],n_=[{id:"stock",label:"🛞 Steelies"},{id:"alloy",label:"⭐ Sport Alloys"},{id:"chrome",label:"🔘 Chrome Dish"},{id:"gold",label:"👑 JDM Gold"},{id:"carbon",label:"🏎️ Track Carbon"}],yh=75,_h=[{type:"near_miss",label:"Near Miss Artist",desc:"Pull off {target} near misses in one run",targets:[5,10,20]},{type:"score",label:"High Scorer",desc:"Reach a score of {target}",targets:[2e3,5e3,1e4]},{type:"distance",label:"Distance Runner",desc:"Drive {target}m in one run",targets:[500,1e3,2e3]},{type:"combo_max",label:"Combo King",desc:"Hit x{target} combo multiplier",targets:[2,3,4]}],xh=420,Sh=[{type:"boss_clear",label:"Boss Hunter",desc:"Clear {target} boss races this week",targets:[1,2,3]},{type:"drift",label:"Lahore Slider",desc:"Score {target} drift points this week",targets:[1200,2500,5e3]},{type:"score",label:"City Legend",desc:"Bank {target} score in one run",targets:[4e3,8e3,14e3]}],Ld=[{key:"canal-run",label:"Canal",short:"CNL"},{key:"liberty-loop",label:"Liberty",short:"LIB"},{key:"mall-road-drift",label:"Mall Road",short:"MAL"},{key:"ring-road-blast",label:"Ring Road",short:"RNG"},{key:"old-city-chase",label:"Old City",short:"OLD"},{key:"airport-road-dash",label:"Airport Road",short:"AIR"},{key:"fortress-sprint",label:"Fortress",short:"FOR"},{key:"ravi-bridge-run",label:"Ravi Bridge",short:"RAV"}],bh=Ld.map(a=>a.key),Kr=[{name:"Shahbaz Liberty",car:"Civic RS",taunt:"Liberty is my road. Try to keep my tail lights in view."},{name:"Malik Ring",car:"Prado V8",taunt:"Wide road, small nerves. I will box you before the toll."},{name:"Zara Mall Road",car:"Italian V12",taunt:"One clean overtake at the monument. No excuses."},{name:"Rana Ravi",car:"Hyper GT",taunt:"Cross the bridge behind me or do not cross at all."}],s_=["chase","side-rammer","roadblock-unit","spike-strip-unit"],Mh=9,a_=20,r_=34,o_=.42,l_=.62,wh=.14,Th=.34,Je={career:{key:"career",label:"Career Run",objective:"Clear the route and complete the stage mission."},policeChase:{key:"police-chase",label:"Police Chase",objective:"Start wanted, survive escalating pursuit, and reach the finish."},policeRace:{key:"police-race",label:"Police Race",objective:"Race the police interceptor and overtake it before the finish."}},c_=[{key:"time-trial",label:"Time Trial",rule:"Beat the route clock for bonus XP."},{key:"pursuit-escape",label:"Police Chase",rule:"Start wanted and escape a full pursuit."},{key:"police-race",label:"Police Race",rule:"Beat a police interceptor to the finish."},{key:"drift-run",label:"Drift Run",rule:"Score drift points through technical turns."},{key:"near-miss-combo",label:"Near-Miss Combo",rule:"Chain close passes before the timer decays."},{key:"fuel-saver",label:"Fuel Saver",rule:"Finish with fuel in reserve."},{key:"clean-run",label:"No-Crash Clean Run",rule:"Any collision breaks mastery."}],is=[{key:"classic",label:"Classic",color:null,unlock:"Owned"},{key:"taxi-stripe",label:"Taxi Stripe",color:16436245,unlock:"Stage 2",stage:2},{key:"sea-neon",label:"Sea Neon",color:2282478,unlock:"Stage 4",stage:4},{key:"midnight-racer",label:"Midnight Racer",color:11032055,unlock:"Score 5000",score:5e3},{key:"boss-flame",label:"Boss Flame",color:15680580,unlock:"Boss clear",bossClears:1},{key:"matte-police",label:"Police Style",color:15067115,unlock:"2 boss tokens",bossTokens:2},{key:"food-street-decal",label:"Food Street Decal",color:1483594,unlock:"Stage 5",stage:5},{key:"chrome-rims",label:"Chrome Rims",color:13358561,unlock:"Level 6",level:6},{key:"legend-gold",label:"Legend Gold",color:16498468,unlock:"7-day streak",loginStreak:7},{key:"king-of-lahore",label:"King of Lahore",color:16766720,unlock:"Beat Stage 5",stage:5}],Dd=typeof window<"u"&&Zo.includes(window.location.hostname),Aa=Dd,Ra=Dd&&!wt,Eh=1.9,Id={engine:0,handling:0,tank:0,nitro:0,armor:0},Is=5;ne("/audio/music/lahore-night-drive.mp3"),ne("/audio/music/ring-road-chase.mp3"),ne("/audio/music/old-city-pursuit.mp3");ne("/audio/sfx/crash.mp3"),ne("/audio/sfx/horn.mp3"),ne("/audio/sfx/nitro-burst.mp3"),ne("/audio/sfx/police-siren.mp3"),ne("/audio/sfx/tire-drift.mp3");const h_=[],d_={},u_=ne("/textures/road/asphalt_diffuse.jpg"),f_=ne("/textures/skyline/lahore_skyline_panorama.jpg"),p_=ne("/textures/buildings/facade_glass_tower.jpg"),m_=ne("/textures/buildings/facade_lahore_brick.jpg"),g_=ne("/textures/billboards/billboard_highway_lahore.jpg"),Ah=[ne("/textures/billboards/billboard_gourmet.jpg"),ne("/textures/billboards/billboard_jazz4g.jpg"),ne("/textures/billboards/billboard_tapal.jpg"),ne("/textures/billboards/billboard_metrobus.jpg"),ne("/textures/billboards/billboard_shezan.jpg"),ne("/textures/billboards/billboard_pakola.jpg")],nt={player:{"hatchback-small":ne("/models/player/player_hatchback.glb"),hatchback:ne("/models/traffic/traffic_bolan_loader.glb"),"sedan-basic":ne("/models/traffic/traffic_pickup.glb"),"sedan-sport":ne("/models/player/player_sedan.glb"),suv:ne("/models/traffic/traffic_landcruiser.glb"),prado:ne("/models/traffic/traffic_prado.glb"),truck:ne("/models/player/player_truck.glb"),sports:ne("/models/premium/premium_supra.glb"),supercar:ne("/models/premium/premium_hyper_gt.glb"),"premium-italian-v12":ne("/models/premium/premium_italian_v12.glb"),"premium-red-exotic":ne("/models/premium/premium_red_exotic.glb"),"premium-hyper-gt":ne("/models/premium/premium_hyper_gt.glb")},traffic:{hatchback:ne("/models/traffic/traffic_hatchback.glb"),sedan:ne("/models/traffic/traffic_sedan.glb"),suv:ne("/models/traffic/traffic_suv.glb"),prado:ne("/models/traffic/traffic_prado.glb"),truck:ne("/models/traffic/traffic_truck.glb"),bike:ne("/models/traffic/traffic_bike_cd70.mobile.glb"),rickshaw:ne("/models/traffic/traffic_rickshaw.glb"),tanker:ne("/models/traffic/traffic_truck.glb"),pickup:ne("/models/traffic/traffic_pickup.glb"),taxi:ne("/models/traffic/traffic_sedan.glb"),van:ne("/models/traffic/traffic_bolan_loader.glb"),delivery:ne("/models/traffic/traffic_pickup.glb"),garbage:ne("/models/traffic/traffic_truck.glb"),firetruck:ne("/models/traffic/traffic_w11_bus.glb"),ambulance:ne("/models/traffic/traffic_sedan.glb"),bus:ne("/models/traffic/traffic_w11_bus.glb"),metrobus:ne("/models/traffic/traffic_metrobus.glb"),sports:ne("/models/premium/premium_supra.glb"),supercar:ne("/models/premium/premium_hyper_gt.glb"),"real-hatchback-small":ne("/models/player/player_hatchback.glb"),"real-hatchback":ne("/models/traffic/traffic_bolan_loader.glb"),"real-sedan-basic":ne("/models/traffic/traffic_pickup.glb"),"real-sedan-sport":ne("/models/player/player_sedan.glb"),"real-suv":ne("/models/traffic/traffic_suv.glb")},police:ne("/models/traffic/traffic_police.glb")},ii={bike:{width:1,length:2.2,height:2.1},rickshaw:{width:1.8,length:2.6,height:1.7},tanker:{width:2.8,length:9.4,height:3.5},truck:{width:2.7,length:7.2,height:3.2},pickup:{width:2.4,length:4.6,height:1.95},taxi:{width:2.1,length:4.5,height:1.55},van:{width:2.35,length:5.25,height:2.05},delivery:{width:2.45,length:5.6,height:2.25},garbage:{width:2.8,length:7.2,height:2.65},firetruck:{width:2.8,length:7.4,height:2.75},ambulance:{width:2.4,length:5.6,height:2.25},bus:{width:2.6,length:12,height:3},metrobus:{width:2.7,length:17.5,height:3.2},suv:{width:2.4,length:5,height:1.95},prado:{width:2.4,length:5,height:1.95},police:{width:2.2,length:4.8,height:1.65},"real-hatchback-small":{width:2.85,length:5.05,height:1.22},"real-hatchback":{width:2.95,length:5.35,height:1.18},"real-sedan-basic":{width:3.25,length:6.05,height:1.04},"real-sedan-sport":{width:3.48,length:6.58,height:.98},"real-suv":{width:3.45,length:6.5,height:1.42}},v_={hatchback:15067115,sedan:9741240,suv:2042167,prado:16317180,truck:6583435,tanker:13751771,pickup:14427686,taxi:16436245,van:16382715,delivery:15680580,ambulance:16317180,garbage:1483594,firetruck:14427686,"real-hatchback-small":14212579,"real-hatchback":15987958,"real-sedan-basic":13972266,"real-sedan-sport":13056815,"real-suv":14477815},y_={"/models/player/player_hatchback.glb":-Math.PI/2,"/models/player/player_sedan.glb":-Math.PI/2,"/models/player/player_suv.glb":-Math.PI/2,"/models/player/traffic_sedan.glb":-Math.PI/2,"/models/player/police_car.glb":-Math.PI/2,"/models/traffic/traffic_real_sedan.glb":-Math.PI/2,"/models/traffic/traffic_real_suv.glb":-Math.PI/2,"/models/premium/premium_italian_v12.glb":Math.PI,"/models/premium/premium_red_exotic.glb":-Math.PI/2,"/models/premium/premium_supra.glb":-Math.PI/2,"/models/premium/premium_hyper_gt.glb":Math.PI,"/models/player/player_mehran.glb":-Math.PI/2,"/models/player/player_cultus.glb":Math.PI,"/models/player/player_city.glb":Math.PI,"/models/player/player_civic_rs.glb":-Math.PI/2,"/models/player/player_brv.glb":Math.PI,"/models/player/player_landcruiser.glb":-Math.PI/2,"/models/player/player_truck.glb":-Math.PI/2,"/models/player/player_supra.glb":-Math.PI/2,"/models/player/player_hyper.glb":Math.PI,"/models/traffic/traffic_hatchback.glb":-Math.PI/2,"/models/traffic/traffic_sedan.glb":-Math.PI/2,"/models/traffic/traffic_suv.glb":-Math.PI/2,"/models/traffic/traffic_prado.glb":-Math.PI/2,"/models/traffic/traffic_landcruiser.glb":-Math.PI/2,"/models/traffic/traffic_pickup.glb":-Math.PI/2,"/models/traffic/traffic_truck.glb":-Math.PI/2,"/models/traffic/traffic_police.glb":-Math.PI/2,"/models/traffic/traffic_bike.glb":-Math.PI/2,"/models/traffic/traffic_rickshaw.glb":-Math.PI/2,"/models/traffic/traffic_taxi.glb":-Math.PI/2,"/models/traffic/traffic_van.glb":-Math.PI/2,"/models/traffic/traffic_delivery.glb":-Math.PI/2,"/models/traffic/traffic_garbage.glb":-Math.PI/2,"/models/traffic/traffic_firetruck.glb":-Math.PI/2,"/models/traffic/traffic_ambulance.glb":-Math.PI/2,"/models/traffic/traffic_tanker.glb":Math.PI,"/models/traffic/traffic_bike_cd70.glb":-Math.PI/2,"/models/traffic/traffic_bike_cd70.mobile.glb":-Math.PI/2,"/models/traffic/traffic_rickshaw_green.glb":-Math.PI/2,"/models/traffic/traffic_rickshaw_green.mobile.glb":-Math.PI/2,"/models/traffic/traffic_water_tanker_real.glb":Math.PI,"/models/traffic/traffic_water_tanker_real.mobile.glb":Math.PI,"/models/traffic/traffic_water_tanker.glb":Math.PI,"/models/traffic/traffic_bolan_loader.glb":-Math.PI/2,"/models/traffic/traffic_w11_bus.glb":-Math.PI/2,"/models/traffic/traffic_metrobus.glb":-Math.PI/2},Rh={"canal-run":{palm:ne("/models/env/lahore/canal_tree.glb"),barrier:ne("/models/env/lahore/canal_barrier.glb")},"liberty-loop":{billboard:ne("/models/env/lahore/liberty_billboard.glb"),cellTower:ne("/models/env/lahore/cell_tower.glb")},"ring-road-blast":{dhaba:ne("/models/env/lahore/ring_dhaba.glb"),jerseyWall:ne("/models/env/lahore/jersey_wall.glb"),viaduct:ne("/models/env/lahore/metro_viaduct_track.glb"),train:ne("/models/env/lahore/orange_line_train.glb")},"mall-road-drift":{towerA:ne("/models/env/lahore/glass_tower_a.glb"),towerB:ne("/models/env/lahore/glass_tower_b.glb")},"old-city-chase":{facade:ne("/models/env/lahore/colonial_facade.glb"),chaiCart:ne("/models/env/lahore/chai_cart.glb"),biryaniCart:ne("/models/env/lahore/biryani_cart.glb"),signboard:ne("/models/env/lahore/shop_signboard.glb"),oldGate:ne("/models/env/lahore/old_gate.glb")}},Yr={low:[ne("/models/env/city/building-a.glb"),ne("/models/env/city/building-c.glb"),ne("/models/env/city/building-e.glb"),ne("/models/env/city/building-h.glb"),ne("/models/env/city/low-detail-building-wide-b.glb")],high:[ne("/models/env/city/building-j.glb"),ne("/models/env/city/building-skyscraper-c.glb"),ne("/models/env/city/building-skyscraper-d.glb")]};function __(a,e="",t=""){return e==="traffic"&&ja.includes(t)?Math.PI:y_[Wy(a)]??Math.PI}function x_(a){const e=String((a==null?void 0:a.message)||a||"").toLowerCase();return e.includes("publisher misconfiguration")||e.includes("no form(s) configured")||e.includes("failed to read publisher")}function Ch(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`n4sl-${Date.now()}-${Math.random().toString(16).slice(2)}`}const Ph=[{key:"engine",label:"Engine",baseCost:140,stepCost:110},{key:"handling",label:"Handling",baseCost:120,stepCost:90},{key:"tank",label:"Fuel Tank",baseCost:110,stepCost:90},{key:"nitro",label:"Nitro",baseCost:130,stepCost:100},{key:"armor",label:"Armor",baseCost:125,stepCost:95}],jr=[{key:"canal-run",name:"Canal Run",zone:"Canal Bank",difficulty:"Starter",vibe:"Golden hour boulevard",accent:"#34d399",sky:2364462,fog:5909820,ground:3357484,fogNear:120,fogFar:460,sunPosition:[-38,30,-140],route:"M 18 96 C 34 72, 46 62, 62 54 S 94 42, 108 26",turns:[{start:.18,end:.34,shift:-2.6},{start:.42,end:.6,shift:1.8}]},{key:"liberty-loop",name:"Liberty Loop",zone:"Gulberg",difficulty:"Sprint",vibe:"Dense neon traffic",accent:"#f59e0b",sky:2365494,fog:4730188,ground:2566958,fogNear:120,fogFar:450,sunPosition:[-30,24,-130],route:"M 18 98 C 28 74, 42 62, 54 62 C 72 62, 82 72, 92 58 C 102 44, 104 36, 108 20",turns:[{start:.14,end:.28,shift:3.2},{start:.34,end:.52,shift:-3.8},{start:.62,end:.82,shift:2.4}]},{key:"ring-road-blast",name:"Ring Road Blast",zone:"Outer Ring",difficulty:"Fast",vibe:"Wide high-speed arc",accent:"#60a5fa",sky:1449264,fog:3029076,ground:2369579,fogNear:130,fogFar:480,sunPosition:[-42,32,-150],route:"M 18 100 C 42 84, 58 78, 70 62 S 92 34, 108 18",turns:[{start:.2,end:.38,shift:4.2},{start:.48,end:.72,shift:-2.2}]},{key:"mall-road-drift",name:"Mall Road Drift",zone:"Central Lahore",difficulty:"Technical",vibe:"Tight city sweepers",accent:"#fb7185",sky:2297892,fog:5906994,ground:3551015,fogNear:130,fogFar:480,sunPosition:[-24,22,-120],route:"M 18 100 C 30 82, 42 74, 54 62 C 66 50, 76 54, 88 40 C 98 28, 102 26, 108 18",turns:[{start:.16,end:.28,shift:-2.8},{start:.34,end:.5,shift:2.6},{start:.58,end:.76,shift:-4.4}]},{key:"old-city-chase",name:"Old City Chase",zone:"Inner Streets",difficulty:"Dense",vibe:"Chaotic historic maze",accent:"#f97316",sky:2955040,fog:5778474,ground:3681572,fogNear:110,fogFar:420,sunPosition:[-22,20,-115],route:"M 18 98 C 26 90, 32 84, 40 78 C 52 68, 60 62, 64 50 C 68 38, 82 38, 90 28 C 98 18, 100 20, 108 16",turns:[{start:.1,end:.24,shift:2.1},{start:.28,end:.44,shift:-3.2},{start:.5,end:.66,shift:3.8},{start:.72,end:.9,shift:-2.6}]},{key:"airport-road-dash",name:"Airport Road Dash",zone:"Airport Road",difficulty:"High Speed",vibe:"Long express sweep with sudden slow traffic",accent:"#38bdf8",sky:1449006,fog:2634312,ground:2633008,fogNear:130,fogFar:480,sunPosition:[-34,25,-145],route:"M 18 100 C 34 84, 42 76, 58 66 C 74 54, 88 46, 108 18",turns:[{start:.18,end:.34,shift:2.8},{start:.54,end:.72,shift:-2.4}]},{key:"fortress-sprint",name:"Fortress Sprint",zone:"Fortress",difficulty:"Aggressive",vibe:"Crowded commercial lanes and hard merges",accent:"#a78bfa",sky:2298926,fog:5120840,ground:2830891,fogNear:120,fogFar:450,sunPosition:[-28,22,-125],route:"M 18 98 C 32 86, 30 70, 48 62 C 64 54, 64 40, 82 34 S 100 24, 108 16",turns:[{start:.12,end:.28,shift:-3.6},{start:.36,end:.5,shift:3.2},{start:.62,end:.82,shift:-2.8}]},{key:"ravi-bridge-run",name:"Ravi Bridge Run",zone:"Ravi Bridge",difficulty:"Boss",vibe:"Bridge approach with police air support",accent:"#22c55e",sky:2759211,fog:4991804,ground:3419686,fogNear:130,fogFar:480,sunPosition:[-44,28,-155],route:"M 18 100 C 40 92, 58 82, 64 64 C 70 44, 86 32, 108 18",turns:[{start:.2,end:.4,shift:4.8},{start:.48,end:.7,shift:-3.4}]}],gt=[{key:"hatchback-small",label:"Suzuki Mehran (The Boss)",body:14212579,roof:1054759,glow:16498468,trim:1120295,headlight:16708551,taillight:16557477,topSpeed:160,accel:42,grip:1.08,fuelDrain:.72,profile:{width:2.85,length:5.05,height:1.22,cabinWidth:2.18,cabinLength:2.36,cabinHeight:1.15}},{key:"hatchback",label:"Suzuki Bolan (Carry Daba)",body:16317180,roof:1976635,glow:3718648,trim:988970,headlight:16708551,taillight:16557477,topSpeed:168,accel:46,grip:1.04,fuelDrain:.76,profile:{width:2.75,length:5.25,height:1.65,cabinWidth:2.3,cabinLength:3.2,cabinHeight:1.5}},{key:"sedan-basic",label:"Toyota Hilux (Dala Pickup)",body:14427686,roof:1976635,glow:16096779,trim:1120295,headlight:15398655,taillight:16557477,topSpeed:182,accel:54,grip:1.02,fuelDrain:.88,profile:{width:3.2,length:6,height:1.45,cabinWidth:2.4,cabinLength:2.6,cabinHeight:1.25}},{key:"sedan-sport",label:"Honda Civic RS Turbo",body:13056815,roof:1054759,glow:6333946,trim:724760,headlight:14677247,taillight:16478597,topSpeed:198,accel:68,grip:1.1,fuelDrain:.9,profile:{width:3.48,length:6.58,height:.98,cabinWidth:2.26,cabinLength:3.34,cabinHeight:.84,hoodLength:1.72,rearLength:1.5,cabinOffset:-.18,roofBias:.1,wheelRadius:.6,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"suv",label:"Toyota Land Cruiser V8",body:1976635,roof:988970,glow:2278750,trim:1120295,headlight:15398655,taillight:16557477,topSpeed:192,accel:56,grip:1,fuelDrain:.98,profile:{width:3.45,length:6.5,height:1.42,cabinWidth:2.6,cabinLength:3.2,cabinHeight:1.28,hoodLength:1.45,rearLength:1.4,cabinOffset:-.1,wheelRadius:.68,wheelInset:.45}},{key:"prado",label:"Toyota Prado TX 4x4",body:16317180,roof:1120295,glow:16096779,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:196,accel:52,grip:1.02,fuelDrain:1.04,profile:{width:3.6,length:6.8,height:1.5,cabinWidth:2.72,cabinLength:3.45,cabinHeight:1.34,hoodLength:1.5,rearLength:1.48,cabinOffset:-.06,wheelRadius:.72,wheelInset:.45}},{key:"truck",label:"Bedford Art Truck",body:2450411,roof:988970,glow:16498468,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:175,accel:38,grip:.92,fuelDrain:1.1,profile:{width:4.25,length:9.4,height:1.8,cabinWidth:2.8,cabinLength:2.7,cabinHeight:1.45,hoodLength:1.05,rearLength:3.8,cabinOffset:1.5,wheelRadius:.82,wheelInset:.44}},{key:"sports",label:"Toyota Supra MK4 Turbo",body:15680580,roof:329485,glow:16347926,trim:329485,headlight:14742270,taillight:16478597,topSpeed:232,accel:94,grip:1.18,fuelDrain:1.02,profile:{width:3.5,length:6.1,height:.84,cabinWidth:2.1,cabinLength:2.45,cabinHeight:.68,hoodLength:2,rearLength:1.35,cabinOffset:-.15,roofBias:.18,wheelRadius:.64,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"supercar",label:"Bugatti Hyper GT",body:165063,roof:132631,glow:3718648,trim:132631,headlight:14742270,taillight:16478597,topSpeed:258,accel:112,grip:1.24,fuelDrain:1.08,profile:{width:3.62,length:6.25,height:.78,cabinWidth:2.04,cabinLength:2.3,cabinHeight:.62,hoodLength:2.08,rearLength:1.42,cabinOffset:-.2,roofBias:.22,wheelRadius:.66,wheelInset:.47,splitter:!0,spoiler:!0}}],Ji=[{key:"premium-italian-v12",label:"Italian V12",badge:"Top Speed",badgeTone:"gold",subtitle:"V12 top-speed specialist",trait:"Longest legs on Ring Road and Airport Road straights.",role:"Speed king",productId:"premium_italian_v12",body:16436245,roof:1120295,glow:16347926,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:326,accel:124,grip:1.22,fuelDrain:1.02,premium:!0,profile:{width:3.55,length:6.65,height:.92,cabinWidth:2.24,cabinLength:3.02,cabinHeight:.76,hoodLength:1.9,rearLength:1.2,cabinOffset:-.12,splitter:!0,spoiler:!0}},{key:"premium-red-exotic",label:"Red Exotic",badge:"Launch",badgeTone:"red",subtitle:"Mid-engine launch weapon",trait:"Hardest launch for police race starts and quick traffic gaps.",role:"Acceleration specialist",productId:"premium_red_exotic",body:15680580,roof:988970,glow:16007006,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:308,accel:146,grip:1.23,fuelDrain:.98,premium:!0,profile:{width:3.58,length:6.58,height:.9,cabinWidth:2.18,cabinLength:2.88,cabinHeight:.74,hoodLength:1.72,rearLength:1.34,cabinOffset:-.18,splitter:!0,spoiler:!0}},{key:"premium-hyper-gt",label:"Hyper GT",badge:"Grip GT",badgeTone:"blue",subtitle:"All-round grip flagship",trait:"Most stable premium car for boss routes, corner exits, and long survival runs.",role:"Balanced grip leader",productId:"premium_hyper_gt",body:6333946,roof:725536,glow:2282478,trim:988970,headlight:15398655,taillight:16557477,topSpeed:318,accel:136,grip:1.36,fuelDrain:1,premium:!0,profile:{width:3.62,length:6.82,height:.88,cabinWidth:2.16,cabinLength:2.96,cabinHeight:.72,hoodLength:1.84,rearLength:1.36,cabinOffset:-.08,splitter:!0,spoiler:!0}}],nr=[{key:"ad-free",label:"Ad-Free Upgrade",badge:"Upgrade",subtitle:"Remove banner and interstitial ads",productId:"ad_free",kind:"ad_free"},{key:"credits-1000",label:"1000 Credits Pack",badge:"Booster",subtitle:"Instant garage credits bonus",productId:"credits_1000",kind:"credits",credits:1e3},{key:"credits-5000",label:"5000 Credits Pack",badge:"Best Value",subtitle:"Large one-time credits bonus",productId:"credits_5000",kind:"credits",credits:5e3}],S_=[{label:"Electric AWD",note:"Future instant-torque premium class"},{label:"Track Special",note:"Future corner-focused premium class"}],Zr={topSpeed:Math.max(...Ji.map(a=>a.topSpeed)),accel:Math.max(...Ji.map(a=>a.accel)),grip:Math.max(...Ji.map(a=>a.grip))};function Lh(a){const e=[{label:"Top",value:Math.round(a.topSpeed),suffix:"",max:Zr.topSpeed},{label:"Accel",value:Math.round(a.accel),suffix:"",max:Zr.accel},{label:"Grip",value:a.grip.toFixed(2),suffix:"",max:Zr.grip}];return`
    <div class="premium-stat-grid" aria-label="${a.label} premium stats">
      ${e.map(t=>{const i=Number(t.value),n=Math.max(14,Math.min(100,Math.round(i/t.max*100)));return`
          <div class="premium-stat-card">
            <span>${t.label}</span>
            <strong>${t.value}${t.suffix}</strong>
            <i style="width:${n}%"></i>
          </div>
        `}).join("")}
    </div>
  `}function Jr(a){return`#${Number(a||16777215).toString(16).padStart(6,"0")}`}function b_(a){return`
    <div class="premium-preview" aria-hidden="true">
      <span class="premium-preview-road"></span>
      <span
        class="premium-preview-car"
        style="--car-body:${Jr(a.body)};--car-roof:${Jr(a.roof)};--car-glow:${Jr(a.glow)}"
      >
        <i></i>
      </span>
    </div>
  `}const M_=[...gt,...Ji],w_=Object.fromEntries(M_.map(a=>[a.key,a])),Ua=Object.fromEntries(Ji.map(a=>[a.key,a])),kd=Object.fromEntries(nr.map(a=>[a.key,a])),T_=Object.fromEntries(nr.map(a=>[a.productId,a])),Ca=[...Ji.map(a=>a.productId),...nr.map(a=>a.productId)],Qo={"hatchback-small":0,hatchback:1,"sedan-basic":2,"sedan-sport":3,suv:4,prado:5,truck:6,sports:7,supercar:8},Dh=["clean-finish","fuel-save","near-miss","score-target"];function E_(a){return w_[a]??gt[0]}function A_(a){const e=bh[a%bh.length];return jr.find(t=>t.key===e)||jr[a%jr.length]}function Ih(a,e=0){const t=oe.clamp(e,0,100),i=18+90*(t/100),n=100-78*(t/100);return`
    <svg viewBox="0 0 126 126" class="track-svg" aria-hidden="true">
      <defs>
        <linearGradient id="track-grad-${a.key}" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${a.accent}" stop-opacity="0.65" />
          <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="106" height="106" rx="22" fill="rgba(7,17,31,0.54)" />
      <path d="${a.route}" fill="none" stroke="rgba(148,163,184,0.35)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
      <path d="${a.route}" fill="none" stroke="url(#track-grad-${a.key})" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="18" cy="96" r="7" fill="#0f172a" stroke="#f8fafc" stroke-width="3" />
      <circle cx="108" cy="18" r="7" fill="${a.accent}" stroke="#fff7ed" stroke-width="3" />
      <circle cx="${i}" cy="${n}" r="5.2" fill="#fef3c7" stroke="${a.accent}" stroke-width="2.4" />
    </svg>
  `}function R_(a=1,e={}){return`
    <div class="career-map-grid">
      ${Ld.map((t,i)=>{const n=i+1,s=a>=n,r=a===n,o=e[`stage_${n}`]||0;return`
          <div class="district-node${s?" unlocked":" locked"}${r?" active":""}">
            <span>${t.short}</span>
            <strong>${t.label}</strong>
            <em>${s?`${"★".repeat(o)}${"☆".repeat(3-o)}`:`Stage ${n}`}</em>
          </div>
        `}).join("")}
    </div>
  `}function kh(a,e,t=1){const i=a.attributes.position;for(let n=0;n<i.count;n+=1){const s=i.getX(n),o=i.getY(n)-120,l=e(o);i.setX(n,s*t+l)}i.needsUpdate=!0,a.computeVertexNormals()}function Nh(a,e){return a.baseCost+a.stepCost*e}function kn(a){return{...Id,...a||{}}}function Oh(a,e=Id){const t=kn(e),i=t.engine,n=t.handling,s=t.tank,r=t.nitro,o=t.armor;return{...a,id:a.key,topSpeed:a.topSpeed+i*8,accel:a.accel+i*6,grip:a.grip+n*.035,fuelDrain:Math.max(.52,a.fuelDrain-s*.05),maxFuel:100+s*12,maxNitro:100+r*14,nitroBoost:28+r*5,maxHealth:100+o*12,damageReduction:o*.07,upgradeLevels:t}}function C_(a){if(a<=0)return gt[0];if(a===1)return gt[1];if(a===2)return gt[2];if(a===3)return gt[3];if(a===4)return gt[4];if(a===5)return gt[5];if(a===6)return gt[6];const e=[gt[7],gt[8]],t=e[(a-7)%e.length],i=a-7,n=i%5,s=[15680580,16096779,9133302,440020,2278750][n];return{...t,key:`${t.key}-${a+1}`,label:i%2===0?"Expensive Sports Car":"Exotic Hyper GT",body:s,topSpeed:Math.min(t.topSpeed+i*4,320),accel:Math.min(t.accel+i*3,150),grip:Math.min(t.grip+i*.02,1.35)}}const P_=["Canal Opening Run","Liberty Sprint","Mall Road Canyon","Ring Road Convoy","Old City Heat","Airport Road Dash","Fortress Market Sprint","Ravi Bridge Finale","Canal Night Return","Ring Road Storm"];function Uh(a){const e=C_(a),t=A_(a),i=a+1,n=i>1&&i%3===0,s=i+1,r=Math.min(150+a*20,e.topSpeed),o=r/1.6,l=a<=2?1:0,c=Math.max((l?2.2:1.75)-a*(l?.14:.1),.58),h=a===0?999:Math.max((l?108:94)-a*(l?5:7)-(n?12:0),22),d=a===0?99:Math.max((l?2.8:2.35)-a*(l?.1:.08)-(n?.38:0),.54),u=Math.min((l?4.2:5.1)+a*.42,9.2),f=1+a*.08,p=Math.min((l?.16:.2)+a*.085,.72),v=P_[a]??`Stage ${i}`,g=`${t.name} · ${n?"Boss Race":v}`,m=Dh[a%Dh.length],_=140+a*55,M=80+a*35;let b;m==="clean-finish"?b={type:m,label:"Finish with at least 50% health",target:50}:m==="fuel-save"?b={type:m,label:"Finish with at least 25% fuel",target:25}:m==="near-miss"?b={type:m,label:`Score ${1+Math.floor(a/3)} near misses`,target:1+Math.floor(a/3)}:b={type:m,label:`Reach score ${1100+a*180}`,target:1100+a*180};const E=n?`Boss Race ${i}: police escalation, roadblocks, and a rival heat target. Mission: ${b.label}.`:a===0?`Stage ${i}: moderate traffic, no police pressure, and a 2 KM opening run. Mission: ${b.label}.`:`Stage ${i}: ${s} KM route with a ${r} KM/H cap. Mission: ${b.label}.`;return{id:i,name:g,stageLabel:v,track:t,lengthKm:s,length:s*1e3,speedCapKmh:r,speedCap:o,trafficBias:c,policeHeatThreshold:h,policeSpawnScale:d,fuelSpawnEvery:u,fuelUseScale:p,scoreBonus:f,mission:b,missionReward:_,bonusReward:M,isBoss:n,tip:E}}const ms={settings:"need4speedlahore.settings",progress:"need4speedlahore.progress"};function L_(){try{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1,radioStation:0,weatherMode:"auto",musicVolume:.82,sfxVolume:.88,haptics:!0,...JSON.parse(localStorage.getItem(ms.settings)||"{}")}}catch{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1,radioStation:0,weatherMode:"auto",musicVolume:.82,sfxVolume:.88,haptics:!0}}}function wi(a){localStorage.setItem(ms.settings,JSON.stringify(a))}function D_(){try{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},selectedLiveryKey:"classic",unlockedLiveries:["classic"],lastLoginDate:"",lastStreakClaimDate:"",loginStreak:0,lifetimeStageClears:0,doubledStageRewards:[],weeklyChallenge:null,localLeaderboard:[],bossClears:0,xp:0,level:1,bossTokens:0,policeChaseWins:0,policeRaceWins:0,milestoneCrates:[],onboardingSeen:!1,customization:{},...JSON.parse(localStorage.getItem(ms.progress)||localStorage.getItem(`${ms.progress}_backup`)||"{}")}}catch{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},selectedLiveryKey:"classic",unlockedLiveries:["classic"],lastLoginDate:"",lastStreakClaimDate:"",loginStreak:0,lifetimeStageClears:0,doubledStageRewards:[],weeklyChallenge:null,localLeaderboard:[],bossClears:0,xp:0,level:1,bossTokens:0,policeChaseWins:0,policeRaceWins:0,milestoneCrates:[],onboardingSeen:!1,customization:{}}}}function At(a){try{const e=JSON.stringify(a);localStorage.setItem(ms.progress,e),localStorage.setItem(`${ms.progress}_backup`,e)}catch{}}function Qr(a){const e={highestStage:Math.max(1,a.highestStage||1),bestScore:Math.max(0,a.bestScore||0),totalDistance:Math.max(0,a.totalDistance||0),credits:Math.max(0,a.credits??300),ownedVehicles:Array.isArray(a.ownedVehicles)?[...a.ownedVehicles]:["hatchback-small"],purchasedPremiumCars:Array.isArray(a.purchasedPremiumCars)?[...a.purchasedPremiumCars]:[],adFreePurchased:!!a.adFreePurchased,claimedShopProducts:Array.isArray(a.claimedShopProducts)?[...a.claimedShopProducts]:[],selectedVehicleKey:a.selectedVehicleKey||"hatchback-small",upgrades:typeof a.upgrades=="object"&&a.upgrades?{...a.upgrades}:{},stageStars:typeof a.stageStars=="object"&&a.stageStars?{...a.stageStars}:{},dailyChallenge:a.dailyChallenge||null,selectedLiveryKey:a.selectedLiveryKey||"classic",unlockedLiveries:Array.isArray(a.unlockedLiveries)?[...a.unlockedLiveries]:["classic"],lastLoginDate:typeof a.lastLoginDate=="string"?a.lastLoginDate:"",lastStreakClaimDate:typeof a.lastStreakClaimDate=="string"?a.lastStreakClaimDate:"",loginStreak:Math.max(0,a.loginStreak||0),lifetimeStageClears:Math.max(0,a.lifetimeStageClears||0),doubledStageRewards:Array.isArray(a.doubledStageRewards)?[...a.doubledStageRewards].slice(-25):[],weeklyChallenge:a.weeklyChallenge||null,localLeaderboard:Array.isArray(a.localLeaderboard)?[...a.localLeaderboard].slice(0,10):[],bossClears:Math.max(0,a.bossClears||0),xp:Math.max(0,a.xp||0),level:Math.max(1,a.level||1),bossTokens:Math.max(0,a.bossTokens||0),policeChaseWins:Math.max(0,a.policeChaseWins||0),policeRaceWins:Math.max(0,a.policeRaceWins||0),milestoneCrates:Array.isArray(a.milestoneCrates)?[...a.milestoneCrates].slice(-30):[],onboardingSeen:!!a.onboardingSeen,customization:typeof a.customization=="object"&&a.customization?{...a.customization}:{}},t=new Set(e.ownedVehicles);e.level=Math.max(e.level,1+Math.floor(e.xp/500)),t.add("hatchback-small"),Object.entries(Qo).forEach(([n,s])=>{e.highestStage-1>=s&&t.add(n)}),e.ownedVehicles=[...t],e.purchasedPremiumCars=e.purchasedPremiumCars.filter(n=>Ua[n]),e.claimedShopProducts=e.claimedShopProducts.filter(n=>kd[n]);const i=new Set(e.unlockedLiveries);return i.add("classic"),is.forEach(n=>{n.stage&&e.highestStage>=n.stage&&i.add(n.key),n.score&&e.bestScore>=n.score&&i.add(n.key),n.bossClears&&e.bossClears>=n.bossClears&&i.add(n.key),n.bossTokens&&e.bossTokens>=n.bossTokens&&i.add(n.key),n.level&&e.level>=n.level&&i.add(n.key),n.loginStreak&&e.loginStreak>=n.loginStreak&&i.add(n.key)}),e.unlockedLiveries=[...i].filter(n=>is.some(s=>s.key===n)),e.unlockedLiveries.includes(e.selectedLiveryKey)||(e.selectedLiveryKey="classic"),e.ownedVehicles.forEach(n=>{e.upgrades[n]=kn(e.upgrades[n])}),e.purchasedPremiumCars.forEach(n=>{e.upgrades[n]=kn(e.upgrades[n])}),!t.has(e.selectedVehicleKey)&&!e.purchasedPremiumCars.includes(e.selectedVehicleKey)&&(e.selectedVehicleKey=e.ownedVehicles[e.ownedVehicles.length-1]),e}const Ai=[{id:"lahore-beats",dial:"FM 106.2",name:"Lahore Beats FM",genre:"Punjabi Bass & Electro Dhol",bpm:128},{id:"sufi-rock",dial:"FM 95.0",name:"Highway Sufi Rock",genre:"Overdrive Guitar Riffs & Groove",bpm:134},{id:"neon-boulevard",dial:"FM 101.0",name:"Neon Boulevard",genre:"80s Outrun & Midnight Synthwave",bpm:118},{id:"rawal-express",dial:"FM 88.5",name:"Rawal Express Cyber-Techno",genre:"High-Pursuit Acid Bass & Techno",bpm:142},{id:"radio-off",dial:"RADIO OFF",name:"Radio Muted",genre:"Pure Engine & Highway Sounds",bpm:0}],Fh={pursuit:["15 Control: Suspect spotted speeding on Canal Road! All units close in!","Eagle Squad: Visual on suspect crossing 160 KM/H near Kalma Chowk! Intercept!","Dolphin Patrol: Heavy pursuit in progress! Requesting immediate roadblock authorization!","Punjab Highway Patrol: Target breaking traffic flow towards Mall Road! Stand by for PIT maneuver!"],roadblock:["15 Control: Heavy barricades deployed ahead across all lanes! Box them in!","Interceptor Command: Roadblock established on flyover approach! Do not let them pass!"],spike:["15 Control: Spike strips deployed on roadway! Watch your tires, all units!","Dolphin 4: Spikes active on right lane! Force the vehicle onto the shoulder!"],warning:["Punjab Police Megaphone: Gari bayein taraf roko! Pull over immediately!","Traffic Warden: Clear the lanes! High-speed pursuit inbound!"]},mn={clear:{key:"clear",label:"Clear Sky",icon:"☀️",badge:"CLEAR SKY",subtitle:"Golden hour boulevard · dry asphalt",isRain:!1,isSmog:!1,isWet:!1,roadRoughness:.28,roadMetalness:.32,curbRoughness:.65,fogNearMult:1,fogFarMult:1,rainStreakCount:0,ambientLightMult:1,sunIntensityMult:1},monsoon:{key:"monsoon",label:"Lahore Monsoon",icon:"🌧️",badge:"MONSOON RAIN",subtitle:"Wet mirror asphalt & tire water spray",isRain:!0,isSmog:!1,isWet:!0,sky:923430,fog:1582136,fogNear:45,fogFar:220,roadRoughness:.08,roadMetalness:.68,curbRoughness:.35,rainStreakCount:320,hasLightning:!0,ambientLightMult:.72,sunIntensityMult:.45},smog:{key:"smog",label:"Winter Midnight Smog",icon:"🌫️",badge:"LAHORE SMOG",subtitle:"Dense cyber haze & headlight shafts",isRain:!1,isSmog:!0,isWet:!1,sky:2366486,fog:4010020,fogNear:22,fogFar:145,roadRoughness:.22,roadMetalness:.48,curbRoughness:.55,rainStreakCount:0,hasLightning:!1,ambientLightMult:.85,sunIntensityMult:.6},thunderstorm:{key:"thunderstorm",label:"Severe Monsoon Storm",icon:"⛈️",badge:"THUNDERSTORM",subtitle:"Heavy rain, lightning & thunder strikes",isRain:!0,isSmog:!1,isWet:!0,sky:527896,fog:1186600,fogNear:30,fogFar:175,roadRoughness:.06,roadMetalness:.74,curbRoughness:.28,rainStreakCount:380,hasLightning:!0,frequentLightning:!0,ambientLightMult:.62,sunIntensityMult:.3}},Bh={1:"clear",2:"monsoon",3:"smog",4:"thunderstorm",5:"smog",6:"monsoon",7:"smog",8:"thunderstorm"};class I_{constructor(e){this.settings=e,this.ctx=null,this.musicGain=null,this.radioTimer=null,this.radioStep=0,this.nextStepTime=0,this.noiseBuffer=null,this.radioStationIndex=typeof(e==null?void 0:e.radioStation)=="number"?e.radioStation:0,this.musicTracks=h_.map(t=>this.createAudio(t,{loop:!1,volume:.28})),this.sfxTracks=Object.fromEntries(Object.entries(d_).map(([t,i])=>[t,this.createAudio(i,{loop:!1,volume:.62})])),this.currentMusic=null,this.currentMusicIndex=0,this.disabledAudioSources=new Set,this.rainSource=null,this.rainGain=null,this.rainFilter=null,this.lastVocalTime=0,this.vocalBannerTimer=null}createAudio(e,{loop:t=!1,volume:i=.5}={}){const n=document.createElement("audio");return n.preload="none",n.src=e,n.loop=t,n.volume=i,n.addEventListener("error",()=>{this.disabledAudioSources.add(n.src)}),n}playFile(e,{restart:t=!0}={}){if(!e||this.disabledAudioSources.has(e.src)||this.settings.mute)return!1;const i=Object.values(this.sfxTracks).includes(e);if(!this.settings.sfx&&i||!this.settings.music&&this.musicTracks.includes(e))return!1;try{t&&(e.currentTime=0);const n=e.play();return n&&n.catch(()=>{this.disabledAudioSources.add(e.src)}),!0}catch{return this.disabledAudioSources.add(e.src),!1}}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.musicGain=this.ctx.createGain();const t=this.settings.mute||!this.settings.music?0:this.settings.musicVolume??.82;this.musicGain.gain.value=t,this.musicGain.connect(this.ctx.destination)}if(this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.musicGain){const e=this.settings.mute||!this.settings.music?0:this.settings.musicVolume??.82;this.musicGain.gain.setValueAtTime(e,this.ctx.currentTime)}return this.ctx}getNoiseBuffer(){if(!this.noiseBuffer&&this.ctx){const e=this.ctx.sampleRate,t=e*2;this.noiseBuffer=this.ctx.createBuffer(1,t,e);const i=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)i[n]=Math.random()*2-1}return this.noiseBuffer}setSettings(e){if(this.settings=e,this.ctx&&this.musicGain){const i=e.mute||!e.music?0:e.musicVolume??.82;this.musicGain.gain.setValueAtTime(i,this.ctx.currentTime)}e.mute||!e.music?this.stopMusic():!this.radioTimer&&this.radioStationIndex!==4&&this.startProceduralRadio(),(e.mute||!e.sfx)&&this.stopRainSound();const t=e.mute||!e.sfx?0:e.sfxVolume??.88;Object.values(this.sfxTracks).forEach(i=>{i.muted=e.mute||!e.sfx,i.volume=.62*t}),this.musicTracks.forEach(i=>{i.muted=e.mute||!e.music,i.volume=.28*(e.musicVolume??.82)})}suspend(){this.stopMusic(),this.stopRainSound(),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}duckAudio(e=.1){if(this.ctx&&this.musicGain){const t=this.musicGain.gain.value;this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime),this.musicGain.gain.setValueAtTime(t,this.ctx.currentTime),this.musicGain.gain.linearRampToValueAtTime(t*e,this.ctx.currentTime+.3)}Object.values(this.sfxTracks).forEach(t=>{t&&!t.paused&&(t.datasetOrigVol=t.datasetOrigVol||t.volume,t.volume=Number(t.datasetOrigVol)*e)})}restoreAudio(){if(this.ctx&&this.musicGain){const t=this.settings.mute||!this.settings.music?0:this.settings.musicVolume??.82;this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime),this.musicGain.gain.setValueAtTime(this.musicGain.gain.value,this.ctx.currentTime),this.musicGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.4)}const e=this.settings.mute||!this.settings.sfx?0:this.settings.sfxVolume??.88;Object.values(this.sfxTracks).forEach(t=>{t&&(t.volume=.62*e,delete t.datasetOrigVol)})}playCameraShutter(){if(this.settings.mute||!this.settings.sfx)return;const e=this.ensureContext();e&&(e.currentTime,this.rawTone(1850,.03,"sine",.05,-300),this.noise(.045,.055,3400),window.setTimeout(()=>{this.settings.mute||!this.settings.sfx||(this.rawTone(1420,.04,"sine",.045,-200),this.noise(.05,.045,2800))},70))}tone(e,t,i="sine",n=.04){this.settings.mute||!this.settings.sfx||this.rawTone(e,t,i,n)}rawTone(e,t,i="sine",n=.04,s=0){const r=this.ensureContext();if(!r)return;const o=n*(this.settings.sfxVolume??.88),l=r.createOscillator(),c=r.createGain();l.type=i,l.frequency.value=e,l.detune.value=s,c.gain.setValueAtTime(o,r.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+t),l.connect(c),c.connect(r.destination),l.start(),l.stop(r.currentTime+t)}noise(e=.12,t=.05,i=900){if(this.settings.mute||!this.settings.sfx)return;const n=this.ensureContext();if(!n)return;const s=n.createBuffer(1,Math.floor(n.sampleRate*e),n.sampleRate),r=s.getChannelData(0);for(let h=0;h<r.length;h+=1)r[h]=(Math.random()*2-1)*(1-h/r.length);const o=n.createBufferSource();o.buffer=s;const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=i;const c=n.createGain();c.gain.setValueAtTime(t,n.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+e),o.connect(l),l.connect(c),c.connect(n.destination),o.start(),o.stop(n.currentTime+e)}playCrash(){this.playFile(this.sfxTracks.crash)||(this.rawTone(74,.22,"sawtooth",.07,-600),this.rawTone(52,.3,"square",.05,200),this.noise(.16,.06,760))}playHorn(e="car"){this.playFile(this.sfxTracks.horn)||(e==="truck"||e==="bus"?(this.tone(440,.12,"sawtooth",.055),this.tone(554,.12,"sawtooth",.045),window.setTimeout(()=>{this.tone(554,.11,"sawtooth",.055),this.tone(659,.11,"sawtooth",.045)},110),window.setTimeout(()=>{this.tone(659,.22,"sawtooth",.065),this.tone(880,.22,"sawtooth",.035)},210)):e==="rickshaw"?(this.tone(840,.08,"triangle",.045),window.setTimeout(()=>this.tone(980,.1,"triangle",.04),65)):e==="metrobus"?(this.tone(260,.26,"sawtooth",.065),this.tone(330,.26,"sawtooth",.055)):(this.tone(420,.12,"square",.035),window.setTimeout(()=>this.tone(360,.1,"square",.028),95)))}playNitroBurst(){this.playFile(this.sfxTracks.nitro)||(this.rawTone(140,.22,"sawtooth",.055,-120),this.rawTone(420,.18,"triangle",.035,80),this.noise(.22,.045,1800))}playBackfirePop(e=1){if(this.settings.mute||!this.settings.sfx)return;const t=80+Math.random()*45;this.rawTone(t,.08,"sawtooth",.07*e,-350),this.rawTone(t*.5,.12,"square",.05*e,-200),this.noise(.06,.065*e,1700+Math.random()*800),e>.75&&window.setTimeout(()=>{this.settings.mute||!this.settings.sfx||(this.rawTone(t*.7,.05,"sawtooth",.04*e,-250),this.noise(.04,.045*e,2200))},45+Math.random()*35)}playTurboFlutter(){if(this.settings.mute||!this.settings.sfx)return;[{delay:0,freq:620,dur:.045,vol:.038,noiseFreq:2400},{delay:55,freq:540,dur:.04,vol:.032,noiseFreq:2100},{delay:110,freq:470,dur:.035,vol:.025,noiseFreq:1800},{delay:160,freq:410,dur:.03,vol:.018,noiseFreq:1500}].forEach(({delay:t,freq:i,dur:n,vol:s,noiseFreq:r})=>{window.setTimeout(()=>{this.settings.mute||!this.settings.sfx||(this.rawTone(i,n,"triangle",s,-180),this.noise(n,s*.85,r))},t)})}playGearShift(){this.settings.mute||!this.settings.sfx||(this.rawTone(75,.06,"sawtooth",.035,-200),this.noise(.03,.025,2800))}playPoliceSiren(){this.playFile(this.sfxTracks.siren)||(this.tone(760,.11,"square",.035),window.setTimeout(()=>this.tone(520,.12,"square",.03),120))}playDrift(){this.playFile(this.sfxTracks.drift)||(this.noise(.12,.025,2400),this.rawTone(180,.1,"sawtooth",.018,-300))}playRadioTuning(){if(this.settings.mute||!this.settings.sfx)return;const e=this.ensureContext();if(!e)return;const t=e.currentTime,i=this.getNoiseBuffer();if(i){const r=e.createBufferSource();r.buffer=i;const o=e.createBiquadFilter();o.type="bandpass",o.Q.value=4,o.frequency.setValueAtTime(1800,t),o.frequency.exponentialRampToValueAtTime(550,t+.07),o.frequency.exponentialRampToValueAtTime(1300,t+.15);const l=e.createGain();l.gain.setValueAtTime(.045,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.16),r.connect(o),o.connect(l),l.connect(e.destination),r.start(t),r.stop(t+.16)}const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(460,t),n.frequency.exponentialRampToValueAtTime(880,t+.06),n.frequency.exponentialRampToValueAtTime(420,t+.14),s.gain.setValueAtTime(.032,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.15),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.15)}playPoliceDispatch(){if(this.settings.mute||!this.settings.sfx)return;const e=this.ensureContext();if(!e)return;const t=e.currentTime,i=this.getNoiseBuffer();if(i){const l=e.createBufferSource();l.buffer=i;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=1750,c.Q.value=2.2;const h=e.createGain();h.gain.setValueAtTime(.05,t),h.gain.exponentialRampToValueAtTime(1e-4,t+.06),l.connect(c),c.connect(h),h.connect(e.destination),l.start(t),l.stop(t+.06)}const n=e.createOscillator(),s=e.createGain();n.type="square",n.frequency.value=960,s.gain.setValueAtTime(.035,t+.05),s.gain.exponentialRampToValueAtTime(1e-4,t+.11),n.connect(s),s.connect(e.destination),n.start(t+.05),n.stop(t+.11);const r=e.createOscillator(),o=e.createGain();if(r.type="square",r.frequency.value=1440,o.gain.setValueAtTime(.032,t+.12),o.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o),o.connect(e.destination),r.start(t+.12),r.stop(t+.18),i){const l=e.createBufferSource();l.buffer=i;const c=e.createBiquadFilter();c.type="highpass",c.frequency.value=2200;const h=e.createGain();h.gain.setValueAtTime(.03,t+.22),h.gain.exponentialRampToValueAtTime(1e-4,t+.26),l.connect(c),c.connect(h),h.connect(e.destination),l.start(t+.22),l.stop(t+.26)}}playNearMissWhoosh(){if(this.settings.mute||!this.settings.sfx)return;const e=this.ensureContext();if(!e)return;const t=e.currentTime,i=this.getNoiseBuffer();if(i){const r=e.createBufferSource();r.buffer=i;const o=e.createBiquadFilter();o.type="bandpass",o.Q.value=1.8,o.frequency.setValueAtTime(3400,t),o.frequency.exponentialRampToValueAtTime(420,t+.26);const l=e.createGain();l.gain.setValueAtTime(.068,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.28),r.connect(o),o.connect(l),l.connect(e.destination),r.start(t),r.stop(t+.28)}const n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.setValueAtTime(240,t),n.frequency.exponentialRampToValueAtTime(55,t+.24),s.gain.setValueAtTime(.045,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.25),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.25)}playSnatcherRev(){this.rawTone(360,.14,"sawtooth",.048,120),this.noise(.12,.03,1400),window.setTimeout(()=>this.tone(1320,.06,"sine",.036),60),window.setTimeout(()=>this.tone(1760,.08,"sine",.04),130)}stopVocal(){if(this.activeVocalAudio){try{this.activeVocalAudio.pause(),this.activeVocalAudio.currentTime=0}catch{}this.activeVocalAudio=null}if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}speakVocal(e="echallan_ambush",t=!1){if(this.settings.mute||!this.settings.sfx)return null;const i=performance.now();if(!t&&this.lastVocalTime&&i-this.lastVocalTime<3400)return null;this.lastVocalTime=i;const n={echallan_ambush:[{speaker:"📸 PSCA Safe City ANPR",text:"Safe City Alert! Number plate scan ho gayi!",urdu:"سیف سٹی الرٹ! نمبر پلیٹ اسکین ہو گئی!",pitch:.9,rate:1.05,file:"snatcher_ambush_1.mp3"},{speaker:"🏍️ Dolphin Force Squad",text:"Gaari side pe lagao paijaan!",urdu:"گاڑی سائیڈ پہ لگاؤ پائی جان!",pitch:.92,rate:1.08,file:"snatcher_ambush_2.mp3"}],snatcher_ambush:[{speaker:"📸 PSCA Safe City ANPR",text:"Safe City Alert! Number plate scan ho gayi!",urdu:"سیف سٹی الرٹ! نمبر پلیٹ اسکین ہو گئی!",pitch:.9,rate:1.05,file:"snatcher_ambush_1.mp3"},{speaker:"🏍️ Dolphin Force Squad",text:"Gaari side pe lagao paijaan!",urdu:"گاڑی سائیڈ پہ لگاؤ پائی جان!",pitch:.92,rate:1.08,file:"snatcher_ambush_2.mp3"}],echallan_stop:[{speaker:"📸 PSCA Safe City Alert",text:"Safe City Alert! Number plate scan ho gayi... Gaari side pe lagao paijaan!",urdu:"سیف سٹی الرٹ! نمبر پلیٹ اسکین ہو گئی... گاڑی سائیڈ پہ لگاؤ پائی جان!",pitch:.88,rate:1.04,file:"snatcher_stop_1.mp3"}],snatcher_stop:[{speaker:"📸 PSCA Safe City Alert",text:"Safe City Alert! Number plate scan ho gayi... Gaari side pe lagao paijaan!",urdu:"سیف سٹی الرٹ! نمبر پلیٹ اسکین ہو گئی... گاڑی سائیڈ پہ لگاؤ پائی جان!",pitch:.88,rate:1.04,file:"snatcher_stop_1.mp3"}],echallan_escape:[{speaker:"🏍️ Dolphin Squad Control",text:"Oye hoye! Number plate flip kar ke Nitro maar gaya! Dolphin Squad peechay lago!",urdu:"اوئے ہوئے! نمبر پلیٹ فلپ کر کے نائٹرو مار گیا! ڈولفن اسکواڈ پیچھے لگو!",pitch:1.12,rate:1.18,file:"snatcher_smash_1.mp3"}],snatcher_smash:[{speaker:"🏍️ Dolphin Squad Control",text:"Oye hoye! Number plate flip kar ke Nitro maar gaya! Dolphin Squad peechay lago!",urdu:"اوئے ہوئے! نمبر پلیٹ فلپ کر کے نائٹرو مار گیا! ڈولفن اسکواڈ پیچھے لگو!",pitch:1.12,rate:1.18,file:"snatcher_smash_1.mp3"}],echallan_paid:[{speaker:"💳 PSCA Safe City Portal",text:"Shukriya paijaan! E-Challan jama ho gaya. Aainda speed limit mein chalana!",urdu:"شکریہ پائی جان! ای چالان جمع ہو گیا۔ آئندہ اسپیڈ لمٹ میں چلانا!",pitch:.88,rate:1.02,file:"echallan_paid_1.mp3"}],police_approach:[{speaker:"🚓 Punjab Police Naka",text:"Punjab Police! Gaari foran side pe roko! Naka cross mat karna!",urdu:"پنجاب پولیس! گاڑی فوراً سائیڈ پہ روکو! ناکہ کراس مت کرنا!",pitch:.78,rate:1.02,file:"police_approach_1.mp3"}],police_stop:[{speaker:"🚓 Punjab Police Officer",text:"Haan ji paijaan, 180 di speed te jahaz banaya ae? License te kaaghzaat kaddo!",urdu:"ہاں جی پائی جان، 180 دی اسپیڈ تے جہاز بنایا اے؟ لائسنس تے کاغذات کڈو!",pitch:.8,rate:.98,file:"police_stop_1.mp3"}],police_paid:[{speaker:"🚓 Punjab Police Officer",text:"Chalo theek hai, challan clear. Rasta kholo! Jaan deyo!",urdu:"چلو ٹھیک ہے، چالان کلیئر۔ راستہ کھولو! جان دیو!",pitch:.84,rate:1.02,file:"police_paid_1.mp3"}],police_breakout:[{speaker:"🚓 15 Control Radio",text:"15 Control! Mulzim naka tor ke bhaag gaya hai! Tamam Dolphin te Vigo units gherao karo!",urdu:"15 کنٹرول! ملزم ناکہ توڑ کے بھاگ گیا ہے! تمام ڈولفن تے ویگو یونٹس گھیراؤ کرو!",pitch:.95,rate:1.16,file:"police_breakout_1.mp3"}],near_miss:[{speaker:"🚗 Lahori Ustad",text:"Oye paijaan vekh ke! Ustad Lahori cut te vekho, baal baal bacha!",urdu:"اوئے پائی جان ویکھ کے! استاد لاہوری کٹ تے ویکھو، بال بال بچا!",pitch:1.06,rate:1.14,file:"near_miss_1.mp3"},{speaker:"🛺 Lahori Cut",text:"Ustad Lahori cut te vekho! Baal baal bacha!",urdu:"استاد لاہوری کٹ تے ویکھو! بال بال بچا!",pitch:1.12,rate:1.16,file:"near_miss_2.mp3"}],crash:[{speaker:"🚕 Lahore Driver",text:"Inna Lillahi! Oye bumper tor ditta yaar, indicator te de denda!",urdu:"انا للہ! اوئے بمپر توڑ دتا یار، انڈیکیٹر تے دے دیندا!",pitch:1.08,rate:1.12,file:"crash_1.mp3"},{speaker:"🚗 Corolla Driver",text:"Inna Lillahi! Tor ditta yaar! Oye bumper tor ditta yaar!",urdu:"انا للہ! توڑ دتا یار! اوئے بمپر توڑ دتا یار!",pitch:1.05,rate:1.12,file:"crash_2.mp3"}],nitro_boost:[{speaker:"🛺 Zinda Dilan-e-Lahore",text:"Zinda Dilan-e-Lahore! Meter down, full tez! Ab pakar ke dikhao!",urdu:"زندہ دلانِ لاہور! میٹر ڈاؤن، فل تیز! اب پکڑ کے دکھاؤ!",pitch:.96,rate:1.15,file:"nitro_boost_1.mp3"}]},s=n[e]||n.echallan_ambush,r=s[Math.floor(Math.random()*s.length)];e.startsWith("police")?this.playPoliceDispatch():(e.startsWith("snatcher")||e.startsWith("echallan"))&&this.playSnatcherRev();const o=document.querySelector("#vocal-callout-banner"),l=document.querySelector("#vocal-callout-speaker"),c=document.querySelector("#vocal-callout-text"),h=document.querySelector("#vocal-callout-urdu");o&&l&&c&&(l.textContent=`🔊 ${r.speaker}`,c.textContent=`"${r.text}"`,h&&(h.textContent=r.urdu||""),o.classList.remove("hidden"),o.classList.toggle("police-vocal",e.startsWith("police")),o.classList.toggle("snatcher-vocal",e.startsWith("snatcher")||e.startsWith("echallan")),clearTimeout(this.vocalBannerTimer),this.vocalBannerTimer=setTimeout(()=>{o.classList.add("hidden")},4200)),this.stopVocal();const d=ne(`/audio/voices/${r.file}`),u=()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel();const f=new SpeechSynthesisUtterance(r.text),p=window.speechSynthesis.getVoices()||[],v=p.find(g=>/ur[-_]|urdu/i.test(g.lang||g.name))||p.find(g=>/hi[-_]|hindi|en[-_]in|india|pakistan/i.test(g.lang||g.name))||p.find(g=>/male|david|mark|daniel/i.test(g.name))||p[0];v&&(f.voice=v),f.pitch=r.pitch??1,f.rate=r.rate??1.08,f.volume=Math.min(1,(this.settings.sfxVolume??.88)*1.05),window.speechSynthesis.speak(f)}catch{}};try{const f=new Audio(d);this.activeVocalAudio=f,f.volume=Math.min(1,(this.settings.sfxVolume??.92)*1.08),f.onerror=()=>u(),f.play().catch(()=>u())}catch{u()}return r}startRainSound(){if(this.rainSource||this.settings.mute||!this.settings.sfx)return;const e=this.ensureContext();if(!e)return;const t=this.getNoiseBuffer();if(!t)return;const i=e.createBufferSource();i.buffer=t,i.loop=!0;const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1400,n.Q.value=.8;const s=e.createGain();s.gain.value=.022,i.connect(n),n.connect(s),s.connect(e.destination),i.start(),this.rainSource=i,this.rainGain=s,this.rainFilter=n}stopRainSound(){if(this.rainSource){try{this.rainSource.stop()}catch{}this.rainSource.disconnect(),this.rainSource=null,this.rainGain=null,this.rainFilter=null}}setRainIntensity(e=1,t=0){if(!this.rainSource&&e>0&&!this.settings.mute&&this.settings.sfx&&this.startRainSound(),this.rainGain&&this.ctx){const i=this.settings.mute||!this.settings.sfx?0:(.015+Math.min(.025,t*18e-5))*e;this.rainGain.gain.setValueAtTime(i,this.ctx.currentTime)}this.rainFilter&&this.ctx&&this.rainFilter.frequency.setValueAtTime(1200+Math.min(1800,t*12),this.ctx.currentTime)}playThunder(){if(this.settings.mute||!this.settings.sfx)return;const e=this.ensureContext();if(!e)return;const t=e.currentTime,i=this.getNoiseBuffer();if(i){const o=e.createBufferSource();o.buffer=i;const l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(2400,t),l.frequency.exponentialRampToValueAtTime(380,t+.32);const c=e.createGain();c.gain.setValueAtTime(.075,t),c.gain.exponentialRampToValueAtTime(1e-4,t+.38),o.connect(l),l.connect(c),c.connect(e.destination),o.start(t),o.stop(t+.38)}const n=e.createOscillator(),s=e.createBiquadFilter(),r=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(68,t+.06),n.frequency.exponentialRampToValueAtTime(24,t+1.6),s.type="lowpass",s.frequency.setValueAtTime(180,t+.06),s.frequency.exponentialRampToValueAtTime(55,t+1.6),r.gain.setValueAtTime(.08,t+.06),r.gain.exponentialRampToValueAtTime(1e-4,t+1.8),n.connect(s),s.connect(r),r.connect(e.destination),n.start(t+.06),n.stop(t+1.8)}playKick(e,t=.068){if(!this.ctx||!this.musicGain)return;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(150,e),i.frequency.exponentialRampToValueAtTime(36,e+.09),n.gain.setValueAtTime(t,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.11),i.connect(n),n.connect(this.musicGain),i.start(e),i.stop(e+.11)}playSnare(e,t=.042){if(!this.ctx||!this.musicGain)return;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(220,e),i.frequency.exponentialRampToValueAtTime(75,e+.06),n.gain.setValueAtTime(t*.6,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.07),i.connect(n),n.connect(this.musicGain),i.start(e),i.stop(e+.07);const s=this.getNoiseBuffer();if(s){const r=this.ctx.createBufferSource();r.buffer=s;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=2400,o.Q.value=1.4;const l=this.ctx.createGain();l.gain.setValueAtTime(t*.85,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.12),r.connect(o),o.connect(l),l.connect(this.musicGain),r.start(e),r.stop(e+.12)}}playHiHat(e,t=.024,i=!1){if(!this.ctx||!this.musicGain)return;const n=this.getNoiseBuffer();if(!n)return;const s=i?.14:.035,r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=7500;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(1e-4,e+s),r.connect(o),o.connect(l),l.connect(this.musicGain),r.start(e),r.stop(e+s)}playDhol(e,t=.075,i=!1){if(!(!this.ctx||!this.musicGain))if(i){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(420,e),n.frequency.exponentialRampToValueAtTime(260,e+.045),s.gain.setValueAtTime(t*.45,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.05),n.connect(s),s.connect(this.musicGain),n.start(e),n.stop(e+.05)}else{const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(130,e),n.frequency.exponentialRampToValueAtTime(48,e+.16),s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.18),n.connect(s),s.connect(this.musicGain),n.start(e),n.stop(e+.18)}}playBassNote(e,t,i=.14,n="sawtooth",s=580,r=.054){if(!this.ctx||!this.musicGain||!t)return;const o=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();o.type=n,o.frequency.value=t,l.type="lowpass",l.frequency.setValueAtTime(s*1.5,e),l.frequency.exponentialRampToValueAtTime(s,e+i),l.Q.value=3,c.gain.setValueAtTime(r,e),c.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(l),l.connect(c),c.connect(this.musicGain),o.start(e),o.stop(e+i)}playLeadNote(e,t,i=.2,n="sawtooth",s=.038,r=1700){if(!this.ctx||!this.musicGain||!t)return;const o=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();o.type=n,o.frequency.value=t,l.type="bandpass",l.frequency.value=r,l.Q.value=2.2,c.gain.setValueAtTime(s*.2,e),c.gain.linearRampToValueAtTime(s,e+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(l),l.connect(c),c.connect(this.musicGain),o.start(e),o.stop(e+i)}playAcidNote(e,t,i=.11,n=1800,s=!1){if(!this.ctx||!this.musicGain||!t)return;const r=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),l=this.ctx.createGain();r.type="sawtooth",r.frequency.value=t,o.type="lowpass",o.Q.value=9,o.frequency.setValueAtTime(n,e),o.frequency.exponentialRampToValueAtTime(n*.24,e+i);const c=s?.054:.036;l.gain.setValueAtTime(c,e),l.gain.exponentialRampToValueAtTime(1e-4,e+i),r.connect(o),o.connect(l),l.connect(this.musicGain),r.start(e),r.stop(e+i)}getRadioStation(){return Ai[this.radioStationIndex]||Ai[0]}setRadioStationIndex(e){this.radioStationIndex=oe.clamp(e,0,Ai.length-1),this.stopRadio(),this.radioStationIndex!==4&&!this.settings.mute&&this.settings.music&&this.startProceduralRadio()}cycleRadioStation(){const e=(this.radioStationIndex+1)%Ai.length;return this.setRadioStationIndex(e),this.getRadioStation()}startProceduralRadio(){if(this.stopRadio(),this.settings.mute||!this.settings.music||this.radioStationIndex===4)return;const e=this.ensureContext();e&&(this.radioStep=0,this.nextStepTime=e.currentTime+.04,this.radioTimer=setInterval(()=>this.scheduleRadio(),25))}stopRadio(){this.radioTimer&&(clearInterval(this.radioTimer),this.radioTimer=null)}playMusic(e=!1){this.stopMusic(),!(this.settings.mute||!this.settings.music)&&this.radioStationIndex!==4&&this.startProceduralRadio()}stopMusic(){this.stopRadio(),this.stopRainSound(),this.currentMusic&&(this.currentMusic.pause(),this.currentMusic.currentTime=0,this.currentMusic=null)}scheduleRadio(){if(!this.ctx||this.radioStationIndex===4||this.settings.mute||!this.settings.music)return;const e=Ai[this.radioStationIndex];if(!e||e.bpm<=0)return;const t=60/(e.bpm*4);for(;this.nextStepTime<this.ctx.currentTime+.12;)this.playStationStep(this.radioStationIndex,this.radioStep,this.nextStepTime),this.nextStepTime+=t,this.radioStep=(this.radioStep+1)%32}playStationStep(e,t,i){switch(e){case 0:{[0,6,8,14,16,22,24,30].includes(t)&&this.playKick(i,.068),[0,3,6,8,11,14,16,19,22,24,27,30].includes(t)&&this.playDhol(i,.076,!1),[2,4,7,10,12,15,18,20,23,26,28,31].includes(t)&&this.playDhol(i,.038,!0),[4,12,20,28].includes(t)&&this.playSnare(i,.042),this.playHiHat(i,t%2===0?.024:.016,t===14||t===30);const s=[73.42,0,73.42,77.78,73.42,0,92.5,0,73.42,0,98,0,92.5,0,77.78,0,73.42,0,73.42,77.78,73.42,0,110,0,98,0,92.5,0,77.78,0,73.42,0][t];s&&this.playBassNote(i,s,.12,"sawtooth",620,.056);const o=[293.66,0,369.99,0,440,0,440,0,466.16,0,440,0,392,0,369.99,0,392,0,440,0,369.99,0,311.13,0,293.66,0,0,0,311.13,0,293.66,0][t];o&&this.playLeadNote(i,o,.2,"sawtooth",.038,1900);break}case 1:{t%4===0&&this.playKick(i,.068),[4,12,20,28].includes(t)&&this.playSnare(i,.046),t%2===0&&this.playHiHat(i,.024,[2,6,10,14,18,22,26,30].includes(t));const s=[82.41,0,82.41,82.41,82.41,0,82.41,82.41,98,0,98,0,110,0,110,0,82.41,0,82.41,82.41,82.41,0,82.41,82.41,73.42,0,73.42,0,61.74,0,61.74,0][t];s&&this.playBassNote(i,s,.11,"triangle",520,.054);const o=[329.63,0,0,392,329.63,0,493.88,0,440,0,0,392,440,0,493.88,0,587.33,0,493.88,0,440,0,392,0,329.63,0,0,392,293.66,0,329.63,0][t];o&&this.playLeadNote(i,o,.19,"sawtooth",.042,2200);break}case 2:{[0,6,8,14,16,22,24,30].includes(t)&&this.playKick(i,.065),[4,12,20,28].includes(t)&&this.playSnare(i,.044),this.playHiHat(i,t%2===0?.022:.015,!1);let n=55;t<16?n=t%2===0?55:110:t<24?n=t%2===0?43.65:87.31:n=t%2===0?49:98,this.playBassNote(i,n,.09,"sawtooth",420,.048);const s=[329.63,440,523.25,659.25,523.25,440,329.63,261.63];this.playLeadNote(i,s[t%8],.11,"triangle",.026,1300);break}case 3:{t%4===0&&this.playKick(i,.072),[4,12,20,28].includes(t)&&this.playSnare(i,.046),t%2===0&&this.playHiHat(i,.026,[2,6,10,14,18,22,26,30].includes(t));const s=[46.25,46.25,92.5,46.25,55,55,110,46.25,61.74,61.74,123.47,61.74,69.3,82.41,92.5,46.25,46.25,46.25,92.5,46.25,55,55,110,55,82.41,82.41,164.81,82.41,69.3,61.74,55,46.25][t],r=750+Math.sin(t*.45)*1150+(t%4===2?650:0);s&&this.playAcidNote(i,s,.1,r,t%4===0),(t===0||t===16)&&this.rawTone(880,.07,"sawtooth",.028,-120);break}}}}document.querySelector("#app").innerHTML=`
  <div class="shell">
    <div class="layout layout-game-only">
        <main class="game-frame">
          <div id="game-view"></div>
          <canvas id="weather-canvas" class="weather-canvas" aria-hidden="true"></canvas>
          <div class="impact-flash hidden" id="impact-flash" aria-hidden="true"></div>
          <div class="speed-vignette" id="speed-vignette" aria-hidden="true"></div>
          <div class="combo-display hidden" id="combo-display" aria-live="polite"></div>
          <div class="daily-badge hidden" id="daily-badge" aria-live="polite"></div>
          <div class="race-banner hidden" id="race-banner">
            <p class="race-banner-kicker" id="race-banner-kicker">Featured Route</p>
            <strong id="race-banner-title">Canal Run</strong>
            <span id="race-banner-subtitle">Golden hour boulevard</span>
          </div>
          <div class="radio-banner hidden" id="radio-banner" aria-live="polite">
            <div class="radio-banner-dial">
              <span class="radio-signal-icon">📡</span>
              <strong id="radio-banner-dial">FM 106.2</strong>
              <span class="radio-live-badge">ON AIR</span>
            </div>
            <div class="radio-banner-info">
              <strong id="radio-banner-name">Lahore Beats FM</strong>
              <span id="radio-banner-genre">Punjabi Bass & Electro Dhol</span>
            </div>
          </div>
          <div class="police-dispatch-banner hidden" id="police-dispatch-banner" aria-live="assertive">
            <div class="dispatch-header">
              <span class="police-badge-icon">🚨</span>
              <strong>PUNJAB POLICE 15 DISPATCH</strong>
              <span class="dispatch-tag">CH 15</span>
            </div>
            <p id="police-dispatch-message">15 Control: Suspect spotted speeding on Canal Road! All units close in!</p>
          </div>
          <div class="weather-banner hidden" id="weather-banner" aria-live="polite">
            <div class="weather-banner-header">
              <span class="weather-banner-icon" id="weather-banner-icon">🌧️</span>
              <strong id="weather-banner-badge">LAHORE MONSOON</strong>
            </div>
            <span id="weather-banner-desc">Wet mirror asphalt & tire spray active</span>
          </div>
          <div class="vocal-callout-banner hidden" id="vocal-callout-banner" aria-live="polite">
            <span class="vocal-speaker-badge" id="vocal-callout-speaker">🔊 🏍️ Dolphin Force / PSCA Safe City</span>
            <strong class="vocal-line-text" id="vocal-callout-text">"PSCA Safe City Alert! 180 ki speed te E-Challan kat gaya, gaari side pe lagao!"</strong>
            <span class="vocal-line-urdu" id="vocal-callout-urdu">سیف سٹی الرٹ! 180 کی اسپیڈ تے ای چالان کٹ گیا، گاڑی سائیڈ پہ لگاؤ!</span>
          </div>
          <div class="top-actions">
          <button id="weather-button" class="icon-button icon-pill icon-stack weather-pill" type="button" aria-label="Weather Atmosphere" title="Weather Atmosphere (V)">
            <span class="icon-glyph" id="weather-button-icon">🌦️</span>
            <span class="icon-label" id="weather-button-label">Auto</span>
          </button>
          <button id="rewards-button" class="icon-button icon-pill icon-stack rewards-pill" type="button" aria-label="Free Rewards & Community" title="Free Rewards & Community">
            <span class="icon-glyph">🎁</span>
            <span class="icon-label">Rewards</span>
          </button>
          <button id="streak-button" class="icon-button icon-pill icon-stack streak-pill" type="button" aria-label="Daily Streak" title="Daily Login Streak">
            <span class="icon-glyph">🔥</span>
            <span class="icon-label" id="streak-button-label">Streak</span>
          </button>
          <button id="radio-button" class="icon-button icon-pill icon-stack radio-pill" type="button" aria-label="FM Radio" title="Pakistani FM Radio (R)">
            <span class="icon-glyph">📻</span>
            <span class="icon-label" id="radio-button-label">FM 106.2</span>
          </button>
          <button id="camera-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Camera View" title="Camera View (C)">
            <span class="icon-glyph">🎥</span>
            <span class="icon-label">Cam</span>
          </button>
          <button id="pause-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Pause">
            <span class="icon-glyph">II</span>
            <span class="icon-label">Pause</span>
          </button>
          <button id="settings-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Settings">
            <span class="icon-glyph">⚙️</span>
            <span class="icon-label">Settings</span>
          </button>
          </div>
          <div class="ghost-split-indicator hidden" id="ghost-split-indicator">
            <span class="icon-glyph">👻</span>
            <span id="ghost-split-text">GHOST PB: +0.0s</span>
          </div>
          <div class="slingshot-indicator hidden" id="slingshot-indicator">
            ⚡ SLIPSTREAM DRAFT: 0%
          </div>
          <div class="hud">
            <div class="hud-top">
            <div class="stat-block">
              <span>Stage</span>
              <strong id="stage-value">Stage 1</strong>
            </div>
            <div class="stat-block stat-speed">
              <span>Speed</span>
              <div class="speed-readout">
                <strong id="speed-value">0 KM/H</strong>
                <span id="gear-value" class="gear-badge">1ST</span>
              </div>
            </div>
            <div class="stat-block">
              <span>Score</span>
              <strong id="score-value">0</strong>
            </div>
            <div class="stat-block">
              <span>Heat</span>
              <strong id="heat-value">0%</strong>
            </div>
            <div class="stat-block">
              <span>Safe City</span>
              <strong id="pursuit-value">Clear 📸</strong>
            </div>
            <div class="stat-block">
              <span>Limit</span>
              <strong id="limit-value">150 KM/H</strong>
            </div>
            <div class="stat-block">
              <span>Finish</span>
              <strong id="distance-remaining-value">1.2 KM</strong>
            </div>
            </div>
            <div class="track-card">
              <div class="track-card-copy">
                <span>Track</span>
                <strong id="track-name">Canal Run</strong>
                <em id="track-zone">Canal Bank</em>
              </div>
              <div class="track-map" id="track-map"></div>
            </div>
            <div class="meters">
              <div class="meter-card">
                <label>Health <em id="health-text">100%</em></label>
                <div class="meter"><div id="health-bar" class="fill health"></div></div>
              </div>
              <div class="meter-card">
                <label>Fuel <em id="fuel-text">100%</em></label>
                <div class="meter"><div id="fuel-bar" class="fill fuel"></div></div>
              </div>
              <div class="meter-card">
                <label>Nitro <em id="nitro-text">100%</em></label>
                <div class="meter"><div id="nitro-bar" class="fill nitro"></div></div>
              </div>
              <div class="meter-card">
                <label>Progress <em id="progress-text">0%</em></label>
                <div class="meter"><div id="progress-bar" class="fill progress"></div></div>
              </div>
              <div class="meter-card">
                <label>Drift <em id="drift-text">0</em></label>
                <div class="meter"><div id="drift-bar" class="fill drift"></div></div>
              </div>
            </div>
            <div class="tip" id="tip-text">Press Space to start your first Lahore run. Hold W / Up Arrow for High-Torque Throttle!</div>
          </div>
          <div class="touch-controls" id="touch-controls">
            <div class="touch-cluster touch-left">
              <button type="button" class="touch-btn pedal brake-pedal" data-touch="brake" aria-label="Brake">
                <span class="pedal-icon">[]</span>
                <span class="pedal-label">Brake</span>
              </button>
            </div>
            <div class="touch-cluster touch-right">
              <button type="button" class="touch-btn pedal throttle" data-touch="throttle" aria-label="Throttle Gas">
                <span class="pedal-icon">⚡</span>
                <span class="pedal-label">Gas</span>
              </button>
              <button type="button" class="touch-btn pedal nitro" data-touch="nitro" aria-label="Nitro">
                <span class="pedal-icon">N</span>
                <span class="pedal-label">Nitro</span>
              </button>
            </div>
          </div>
        <div class="settings-panel hidden" id="settings-panel">
          <div class="settings-card">
            <div class="settings-header">
              <h2>Pause & Settings</h2>
              <button id="resume-button" class="icon-button primary settings-resume-button" type="button">Resume</button>
            </div>
            <label class="settings-row">
              <span>Mute All</span>
              <input id="mute-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>Music</span>
              <input id="music-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>FM Radio Station</span>
              <select id="radio-station-select" class="settings-select">
                <option value="0">FM 106.2 - Lahore Beats FM</option>
                <option value="1">FM 95.0 - Highway Sufi Rock</option>
                <option value="2">FM 101.0 - Neon Boulevard</option>
                <option value="3">FM 88.5 - Rawal Express Cyber-Techno</option>
                <option value="4">Radio Off</option>
              </select>
            </label>
            <label class="settings-row settings-slider-row">
              <span>Radio Volume</span>
              <div class="slider-control">
                <input id="music-volume" type="range" min="0" max="100" value="82" class="settings-range" />
                <span id="music-volume-label" class="slider-val">82%</span>
              </div>
            </label>
            <label class="settings-row">
              <span>Weather Atmosphere</span>
              <select id="weather-select" class="settings-select">
                <option value="auto">Auto (Stage Vibe)</option>
                <option value="clear">Clear Sky (Golden Hour)</option>
                <option value="monsoon">Lahore Monsoon (Rain & Wet Road)</option>
                <option value="smog">Winter Midnight Smog</option>
                <option value="thunderstorm">Severe Monsoon Storm</option>
              </select>
            </label>
            <label class="settings-row">
              <span>Sound Effects</span>
              <input id="sfx-toggle" type="checkbox" />
            </label>
            <label class="settings-row settings-slider-row">
              <span>SFX & Engine Volume</span>
              <div class="slider-control">
                <input id="sfx-volume" type="range" min="0" max="100" value="88" class="settings-range" />
                <span id="sfx-volume-label" class="slider-val">88%</span>
              </div>
            </label>
            <label class="settings-row">
              <span>Haptic Feedback (Vibration)</span>
              <input id="haptics-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>Tilt to Steer</span>
              <input id="tilt-toggle" type="checkbox" />
            </label>
            <div class="settings-row snatcher-test-row">
              <span>Lahore Encounters & Videos</span>
              <div class="encounter-test-btn-group">
                <button id="test-snatcher-button" type="button" class="snatcher-action-btn">📸 E-Challan Stop + Video (Key: S)</button>
                <button id="test-police-button" type="button" class="police-action-btn">🚓 Police Naka Stop (Key: B)</button>
                <button id="test-trailer-button" type="button" class="snatcher-action-btn">🎬 Watch NFS Lahore Trailer</button>
              </div>
            </div>
            <div class="settings-row video-upload-row hidden">
              <span>Custom Cutscene MP4</span>
              <div class="video-upload-actions">
                <label class="video-upload-label">
                  📂 Load E-Challan .MP4
                  <input id="upload-snatcher-video-input" type="file" accept="video/mp4,video/webm" hidden />
                </label>
                <label class="video-upload-label police-upload">
                  📂 Load Police .MP4
                  <input id="upload-police-video-input" type="file" accept="video/mp4,video/webm" hidden />
                </label>
              </div>
            </div>
            <div class="settings-meta">
              <p id="save-stage-text">Highest stage: Stage 1</p>
              <p id="save-score-text">Best score: 0</p>
              <p id="credits-text">Credits: 300 CR</p>
              <p id="ad-status-text">Ads: initializing...</p>
              <p id="progression-text">Level 1 | 0 XP | 0 boss tokens</p>
              <p>Touch: hold left/right side of the road to steer. Hold Gas (W / Up) to surge!</p>
            </div>
            <div class="garage-panel">
              <div class="garage-tabs" id="garage-tabs">
                <button type="button" class="garage-tab is-active" data-settings-tab="garage">Garage</button>
                <button type="button" class="garage-tab" data-settings-tab="store">Store</button>
                <button type="button" class="garage-tab" data-settings-tab="upgrades">Upgrades</button>
                <button type="button" class="garage-tab" data-settings-tab="tuning">Tuning</button>
              </div>
              <div class="garage-tab-panel is-active" id="garage-panel-garage">
                <div class="garage-summary">
                  <h3>Garage</h3>
                  <p id="garage-current-text">Current car: Small Hatchback</p>
                </div>
                <div class="career-map" id="career-map"></div>
                <div class="garage-list" id="garage-list"></div>
                <div class="garage-section">
                  <h4>Liveries</h4>
                  <div class="garage-grid livery-grid" id="livery-list"></div>
                </div>
              </div>
              <div class="garage-tab-panel" id="garage-panel-store">
                <div class="garage-list" id="store-list"></div>
              </div>
              <div class="garage-tab-panel" id="garage-panel-upgrades">
                <div class="garage-upgrades">
                  <h3>Upgrades</h3>
                  <div id="garage-upgrades"></div>
                </div>
              </div>
              <div class="garage-tab-panel" id="garage-panel-tuning">
                <div class="garage-summary">
                  <h3>Vehicle Customization</h3>
                  <p id="tuning-car-name">Personalize paint, rims, and neon underglow</p>
                </div>
                <div class="tuning-section">
                  <h4 class="tuning-title">🎨 Body Paint Color</h4>
                  <div class="swatch-grid" id="paint-swatch-grid"></div>
                </div>
                <div class="tuning-section">
                  <h4 class="tuning-title">✨ Neon Underglow</h4>
                  <div class="swatch-grid" id="underglow-swatch-grid"></div>
                </div>
                <div class="tuning-section">
                  <h4 class="tuning-title">🛞 Rim / Wheel Styling</h4>
                  <div class="tuning-option-grid" id="rims-option-grid"></div>
                </div>
              </div>
            </div>
            <div class="settings-actions">
              <button id="bottom-resume-button" class="icon-button primary" type="button">Resume</button>
              <button id="share-score-button" class="icon-button" type="button">Share Score Card</button>
              <a class="text-link" href="${ne("/privacy.html")}" target="_blank" rel="noreferrer">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div class="daily-streak-modal hidden" id="daily-streak-modal" role="dialog" aria-modal="true" aria-labelledby="streak-title">
          <div class="daily-streak-card">
            <button id="streak-close-button" class="streak-close-btn" type="button" aria-label="Close">✕</button>
            <div class="streak-header">
              <span class="streak-kicker">🔥 DAILY LOGIN REWARDS</span>
              <h2 id="streak-title">Lahore Street Streak</h2>
              <p id="streak-subtitle">Login daily to unlock escalating CR, free refills, and the exclusive Legend Gold ride!</p>
            </div>
            <div class="streak-grid" id="streak-grid"></div>
            <div class="streak-footer">
              <button id="streak-claim-button" class="streak-claim-btn" type="button">🎁 CLAIM TODAY'S REWARD</button>
            </div>
          </div>
        </div>
        <div class="daily-streak-modal hidden" id="community-rewards-modal" role="dialog" aria-modal="true" aria-labelledby="community-rewards-title">
          <div class="daily-streak-card community-rewards-card">
            <button id="community-close-button" class="streak-close-btn" type="button" aria-label="Close">✕</button>
            <div class="streak-header">
              <span class="streak-kicker">🎁 COMMUNITY & BONUS STAGE UNLOCKS</span>
              <h2 id="community-rewards-title">Free Rewards & Next Stages</h2>
              <p id="streak-subtitle">Support our studio to instantly claim bonus Credits, fuel refills, and skip straight to locked stages!</p>
            </div>
            <div class="community-rewards-list" id="community-rewards-list">
              <div class="community-reward-item">
                <div class="community-item-info">
                  <span class="community-item-icon">📺</span>
                  <div>
                    <strong>Subscribe to Official YouTube Channel</strong>
                    <p>Watch trailers, gameplay tips & upcoming Lahore routes.</p>
                    <span class="reward-tag">+1,000 Credits · Instant Stage 2 Pass</span>
                  </div>
                </div>
                <button type="button" class="icon-button primary" data-community-action="youtube">Visit Channel & Claim</button>
              </div>
              <div class="community-reward-item">
                <div class="community-item-info">
                  <span class="community-item-icon">📱</span>
                  <div>
                    <strong>Install Official Studio Apps & Games</strong>
                    <p>Play our Pakistani arcade games & mobile editions.</p>
                    <span class="reward-tag">+1,500 Credits · Unlock Stage 3 Early</span>
                  </div>
                </div>
                <button type="button" class="icon-button primary" data-community-action="install-apps">View Apps & Claim</button>
              </div>
              <div class="community-reward-item">
                <div class="community-item-info">
                  <span class="community-item-icon">⭐</span>
                  <div>
                    <strong>Rate & Review on Store</strong>
                    <p>Leave a 5-star rating on Google Play / Microsoft Store.</p>
                    <span class="reward-tag">+800 Credits · Free Nitro Refill</span>
                  </div>
                </div>
                <button type="button" class="icon-button" data-community-action="rate-game">Rate Game</button>
              </div>
            </div>
          </div>
        </div>
        <div class="encounter-video-modal hidden" id="encounter-video-modal" role="dialog" aria-modal="true" aria-labelledby="encounter-video-title">
          <div class="encounter-video-card" id="encounter-video-card">
            <div class="encounter-video-header">
              <div class="encounter-rec-pill">
                <span class="rec-dot">● REC</span>
                <span class="encounter-kicker" id="encounter-video-kicker">PSCA SAFE CITY · LIVE ANPR INTERCEPTION</span>
                <span class="encounter-source-badge" id="encounter-source-badge">HD 9:16 PORTRAIT VIDEO</span>
              </div>
              <h2 id="encounter-video-title">📸 STOPPED BY DOLPHIN FORCE & E-CHALLAN!</h2>
              <p id="encounter-video-subtitle">PSCA Safe City ANPR cameras flagged your car at 185 KM/H and Dolphin Force intercepted your lane!</p>
            </div>
            <div class="encounter-video-viewport" id="encounter-video-viewport">
              <video id="encounter-cutscene-video" class="encounter-video-el hidden" playsinline preload="auto"></video>
              <canvas id="encounter-cutscene-canvas" class="encounter-canvas-el" width="540" height="960"></canvas>
              <div class="encounter-hud-overlay">
                <span class="encounter-cam-tag" id="encounter-cam-tag">CAM-01 · PSCA SAFE CITY ANPR</span>
                <label class="encounter-quick-upload hidden">
                  📂 Swap .MP4
                  <input id="encounter-quick-upload-input" type="file" accept="video/mp4,video/webm" hidden />
                </label>
              </div>
              <div class="encounter-subtitle-bar" id="encounter-subtitle-bar">
                "PSCA Safe City Alert! 180 ki speed te E-Challan kat gaya, gaari side pe lagao!"
              </div>
            </div>
            <div class="encounter-video-actions">
              <button id="encounter-action-primary" type="button" class="encounter-btn primary">
                🔥 FLIP NUMBER PLATE & SLAM NITRO! (+400 Score)
              </button>
              <button id="encounter-action-secondary" type="button" class="encounter-btn secondary">
                💳 PAY PSCA E-CHALLAN ONLINE (-150 CR · Clear Heat)
              </button>
              <button id="encounter-action-replay" type="button" class="encounter-btn ghost">
                🎬 Replay Cutscene
              </button>
              <button id="encounter-action-end" type="button" class="encounter-btn danger">
                🏁 End Run
              </button>
            </div>
          </div>
        </div>
        <div class="overlay" id="overlay">
          <img class="overlay-art" src="${Hy}" alt="" />
          <div class="overlay-card">
            <button id="overlay-corner-settings-button" class="overlay-corner-settings" type="button" aria-label="Garage & Settings" title="Garage & Settings">⚙️</button>
            <div class="overlay-grid-layout">
              <div class="overlay-column-info">
                <p class="overlay-kicker" id="overlay-kicker">3D Arcade Street Racer · 2026 Edition</p>
                <h2 id="overlay-title">Need 4 Speed Lahore 2026</h2>
                <p id="overlay-body">Canal Road to Ring Road - survive Lahore traffic. Cruise smoothly or hold Throttle (W / Up / Gas) for explosive acceleration, pull off Lahori Cuts, dodge Safe City E-Challan & Punjab Police Naka checkpoints, and unlock stronger cars stage by stage.</p>
                <div class="onboarding-guide hidden" id="onboarding-guide">
                  <strong>Drive Basics</strong>
                  <span>Steer: hold left or right side of the road on mobile, or use A/D and Left/Right arrows.</span>
                  <span>Throttle: hold W / Up Arrow or tap Gas on mobile for 2.3x high-torque acceleration!</span>
                  <span>Nitro: tap Nitro on mobile, or press Shift / N for a 2.0x hyper-speed surge!</span>
                </div>
                <div class="overlay-track" id="overlay-track-panel">
                  <div class="overlay-track-copy">
                    <span>Featured Route</span>
                    <strong id="overlay-track-name">Canal Run</strong>
                    <em id="overlay-track-zone">Canal Bank · Starter</em>
                  </div>
                  <div class="overlay-track-map" id="overlay-track-map"></div>
                </div>
                <div class="overlay-weather-teaser" id="overlay-weather-teaser">
                  <span class="teaser-icon" id="teaser-weather-icon">☀️</span>
                  <div class="teaser-info">
                    <strong id="teaser-weather-title">Route Forecast: Clear Sky</strong>
                    <span id="teaser-weather-desc">Golden hour boulevard · dry asphalt</span>
                  </div>
                </div>
                <div class="overlay-career-map" id="overlay-career-map"></div>
              </div>
              <div class="overlay-column-actions">
                <button id="overlay-button" type="button">Start Run</button>
                <div class="overlay-mode-actions">
                  <button id="police-chase-button" type="button">Police Chase</button>
                  <button id="police-race-button" type="button">Police Race</button>
                </div>
                <button id="overlay-trailer-button" class="overlay-settings-btn icon-button" type="button">🎬 Watch NFS Lahore Trailer</button>
                <button id="overlay-settings-button" type="button" class="overlay-settings-btn">⚙️ Garage & Settings</button>
                <button id="overlay-share-button" type="button" class="hidden revive-btn">Copy Score Card</button>
                <button id="double-reward-button" type="button" class="hidden revive-btn">Watch Ad to Double Credits</button>
                <button id="revive-button" type="button" class="hidden revive-btn">Watch Ad to Revive</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
`;const y={speed:document.querySelector("#speed-value"),gear:document.querySelector("#gear-value"),score:document.querySelector("#score-value"),heat:document.querySelector("#heat-value"),pursuit:document.querySelector("#pursuit-value"),limit:document.querySelector("#limit-value"),distanceRemaining:document.querySelector("#distance-remaining-value"),stage:document.querySelector("#stage-value"),trackName:document.querySelector("#track-name"),trackZone:document.querySelector("#track-zone"),trackMap:document.querySelector("#track-map"),healthBar:document.querySelector("#health-bar"),fuelBar:document.querySelector("#fuel-bar"),nitroBar:document.querySelector("#nitro-bar"),progressBar:document.querySelector("#progress-bar"),driftBar:document.querySelector("#drift-bar"),healthText:document.querySelector("#health-text"),fuelText:document.querySelector("#fuel-text"),nitroText:document.querySelector("#nitro-text"),progressText:document.querySelector("#progress-text"),driftText:document.querySelector("#drift-text"),tip:document.querySelector("#tip-text"),overlay:document.querySelector("#overlay"),overlayKicker:document.querySelector("#overlay-kicker"),overlayTitle:document.querySelector("#overlay-title"),overlayBody:document.querySelector("#overlay-body"),onboardingGuide:document.querySelector("#onboarding-guide"),overlayTrackName:document.querySelector("#overlay-track-name"),overlayTrackZone:document.querySelector("#overlay-track-zone"),overlayTrackMap:document.querySelector("#overlay-track-map"),overlayCareerMap:document.querySelector("#overlay-career-map"),overlayButton:document.querySelector("#overlay-button"),overlayTrailerButton:document.querySelector("#overlay-trailer-button"),policeChaseButton:document.querySelector("#police-chase-button"),policeRaceButton:document.querySelector("#police-race-button"),overlaySettingsButton:document.querySelector("#overlay-settings-button"),overlayCornerSettingsButton:document.querySelector("#overlay-corner-settings-button"),overlayShareButton:document.querySelector("#overlay-share-button"),doubleRewardButton:document.querySelector("#double-reward-button"),raceBanner:document.querySelector("#race-banner"),raceBannerKicker:document.querySelector("#race-banner-kicker"),raceBannerTitle:document.querySelector("#race-banner-title"),raceBannerSubtitle:document.querySelector("#race-banner-subtitle"),impactFlash:document.querySelector("#impact-flash"),cameraButton:document.querySelector("#camera-button"),pauseButton:document.querySelector("#pause-button"),settingsButton:document.querySelector("#settings-button"),settingsPanel:document.querySelector("#settings-panel"),resumeButton:document.querySelector("#resume-button"),bottomResumeButton:document.querySelector("#bottom-resume-button"),muteToggle:document.querySelector("#mute-toggle"),musicToggle:document.querySelector("#music-toggle"),sfxToggle:document.querySelector("#sfx-toggle"),tiltToggle:document.querySelector("#tilt-toggle"),testSnatcherButton:document.querySelector("#test-snatcher-button"),testPoliceButton:document.querySelector("#test-police-button"),testTrailerButton:document.querySelector("#test-trailer-button"),uploadSnatcherVideoInput:document.querySelector("#upload-snatcher-video-input"),uploadPoliceVideoInput:document.querySelector("#upload-police-video-input"),encounterVideoModal:document.querySelector("#encounter-video-modal"),encounterVideoCard:document.querySelector("#encounter-video-card"),encounterVideoKicker:document.querySelector("#encounter-video-kicker"),encounterSourceBadge:document.querySelector("#encounter-source-badge"),encounterVideoTitle:document.querySelector("#encounter-video-title"),encounterVideoSubtitle:document.querySelector("#encounter-video-subtitle"),encounterCutsceneVideo:document.querySelector("#encounter-cutscene-video"),encounterCutsceneCanvas:document.querySelector("#encounter-cutscene-canvas"),encounterCamTag:document.querySelector("#encounter-cam-tag"),encounterQuickUploadInput:document.querySelector("#encounter-quick-upload-input"),encounterSubtitleBar:document.querySelector("#encounter-subtitle-bar"),encounterActionPrimary:document.querySelector("#encounter-action-primary"),encounterActionSecondary:document.querySelector("#encounter-action-secondary"),encounterActionReplay:document.querySelector("#encounter-action-replay"),encounterActionEnd:document.querySelector("#encounter-action-end"),saveStageText:document.querySelector("#save-stage-text"),saveScoreText:document.querySelector("#save-score-text"),creditsText:document.querySelector("#credits-text"),adStatusText:document.querySelector("#ad-status-text"),progressionText:document.querySelector("#progression-text"),garageTabs:document.querySelector("#garage-tabs"),garageCurrentText:document.querySelector("#garage-current-text"),careerMap:document.querySelector("#career-map"),garageList:document.querySelector("#garage-list"),liveryList:document.querySelector("#livery-list"),storeList:document.querySelector("#store-list"),garageUpgrades:document.querySelector("#garage-upgrades"),touchControls:document.querySelector("#touch-controls"),comboDisplay:document.querySelector("#combo-display"),speedVignette:document.querySelector("#speed-vignette"),dailyBadge:document.querySelector("#daily-badge"),reviveButton:document.querySelector("#revive-button"),shareScoreButton:document.querySelector("#share-score-button"),radioButton:document.querySelector("#radio-button"),radioButtonLabel:document.querySelector("#radio-button-label"),radioBanner:document.querySelector("#radio-banner"),radioBannerDial:document.querySelector("#radio-banner-dial"),radioBannerName:document.querySelector("#radio-banner-name"),radioBannerGenre:document.querySelector("#radio-banner-genre"),radioStationSelect:document.querySelector("#radio-station-select"),policeDispatchBanner:document.querySelector("#police-dispatch-banner"),policeDispatchMessage:document.querySelector("#police-dispatch-message"),weatherCanvas:document.querySelector("#weather-canvas"),weatherButton:document.querySelector("#weather-button"),weatherButtonIcon:document.querySelector("#weather-button-icon"),weatherButtonLabel:document.querySelector("#weather-button-label"),weatherBanner:document.querySelector("#weather-banner"),weatherBannerIcon:document.querySelector("#weather-banner-icon"),weatherBannerBadge:document.querySelector("#weather-banner-badge"),weatherBannerDesc:document.querySelector("#weather-banner-desc"),weatherSelect:document.querySelector("#weather-select"),musicVolume:document.querySelector("#music-volume"),musicVolumeLabel:document.querySelector("#music-volume-label"),sfxVolume:document.querySelector("#sfx-volume"),sfxVolumeLabel:document.querySelector("#sfx-volume-label"),hapticsToggle:document.querySelector("#haptics-toggle"),teaserWeatherIcon:document.querySelector("#teaser-weather-icon"),teaserWeatherTitle:document.querySelector("#teaser-weather-title"),teaserWeatherDesc:document.querySelector("#teaser-weather-desc"),streakButton:document.querySelector("#streak-button"),streakButtonLabel:document.querySelector("#streak-button-label"),streakModal:document.querySelector("#daily-streak-modal"),streakGrid:document.querySelector("#streak-grid"),streakClaimButton:document.querySelector("#streak-claim-button"),streakCloseButton:document.querySelector("#streak-close-button"),rewardsButton:document.querySelector("#rewards-button"),communityRewardsModal:document.querySelector("#community-rewards-modal"),communityCloseButton:document.querySelector("#community-close-button"),ghostSplitIndicator:document.querySelector("#ghost-split-indicator"),ghostSplitText:document.querySelector("#ghost-split-text"),slingshotIndicator:document.querySelector("#slingshot-indicator"),paintSwatchGrid:document.querySelector("#paint-swatch-grid"),underglowSwatchGrid:document.querySelector("#underglow-swatch-grid"),rimsOptionGrid:document.querySelector("#rims-option-grid"),tuningCarName:document.querySelector("#tuning-car-name")};class k_{constructor(e){this.container=e,this.settings=L_(),this.progress=Qr(D_()),this.audio=new I_(this.settings),this.gltfLoader=new Zv,this.modelTemplates=new Map,this.loadedVehicleModels=!1,this.propTemplates=new Map,this.loadedStageProps=!1,this.proceduralTextures={},this.realBillboardTextures=new Map,this.buildingFacadeTextures=new Map,this.lastRenderTime=performance.now(),this.scene=new nf,this.scene.background=new ke(10146303),this.scene.fog=new ul(10146303,80,280),Aa&&(window.__need4SpeedLahore=this);let t=0;try{const n=localStorage.getItem("n4s_camera_view"),s=pn.findIndex(r=>r.key===n);s>=0&&(t=s)}catch{}this.cameraViewIndex=t;const i=pn[this.cameraViewIndex]||pn[0];this.camera=new Qt(i.fov,9/16,.1,500),this.camera.position.set(0,i.y,i.z),this.renderer=new Yv({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Us,this.container.appendChild(this.renderer.domElement),this.autoPausedFromBackground=!1,this.settingsTab="garage",this.billingState={available:!1,loading:!1,products:{},ownedProductIds:[],pendingKind:"",pendingProductId:"",lastMessage:""},this.adState={initialized:!1,canRequestAds:!1,bannerVisible:!1,bannerLoaded:!1,interstitialReady:!1,interstitialLoading:!1,rewardedReady:!1,rewardedLoading:!1,rewardedPurpose:"",consentStatus:"unknown",lastError:""},this.keys=new Set,this.touchInput={steerZone:0,throttle:!1,brake:!1,nitro:!1},this.motionSteer=0,this.steerPointerId=null,this.selectedCar=this.getSelectedGarageVehicle(),this.state=this.initialState(),this.progress.highestStage>1&&(this.state.stageIndex=this.progress.highestStage-1),this.traffic=[],this.police=[],this.roadblocks=[],this.fuelCans=[],this.healers=[],this.roadMarkers=[],this.roadside=[],this.scenicRoadside=[],this.buildings=[],this.lightPosts=[],this.roadGlows=[],this.finishLine=null,this.nearMisses=new WeakSet,this.lahoriCutPairs=new Set,this.radioBannerTimer=null,this.policeDispatchTimer=null,this.weatherBannerTimer=null,this.lightningTimer=0,this.nextLightningTime=14+Math.random()*12,this.isLightningFlashing=!1,this.rainStreaks=null,this.rainStreakData=null,this.tireSprayParticles=null,this.tireSprayData=null,this.screenDroplets=[],this.weatherCanvasCtx=null,this.isWetRoad=!1,this.activeWeatherPreset=mn.clear,this.cameraBaseFov=i.fov,this.lastFrameAt=performance.now(),this.frameFallback=null,this.forceRunningUntil=0,this.pendingDoubleReward=null,this.pendingRunMode=Je.career.key,this.premiumRevealVehicleKey="",this.loginRewardMessage="",this.backgroundModelsStarted=!1,this.trafficModelsReady=!1,this.trafficModelLoadPromise=null,this.failedModelPaths=new Set,this.playerModelLoadPromise=null,this.playerModelLoadPath="",this.ghostRecorder=[],this.ghostRecordTimer=0,this.ghostActive=!1,this.ghostData=null,this.ghostCar=null,this.ghostPlaybackTime=0,this.isEncounterModalOpen=!1,this.encounterCanvasRaf=null,this.customEncounterVideos={},this.activeEncounterType="echallan",this.setupScene(),this.initWeatherCanvas(),this.bindEvents(),this.resize(),this.initAds(),this.initBilling(),this.applyTrackTheme(),this.updateOverlay("3D Arcade Street Racer · 2026 Edition","Need 4 Speed Lahore 2026",`Resume point: Stage ${this.state.stageIndex+1} with a ${this.selectedCar.label}. ${this.currentStage.tip} Press Space or tap Start Run.`,this.currentStage.track),this.syncSettingsUi(),this.loginRewardMessage=this.claimDailyLoginReward(),this.updateStreakButtonLabel(),this.refreshProgressUi(),this.renderGarage(),this.updateHud(),this.loginRewardMessage&&(y.tip.textContent=this.loginRewardMessage),this.updateDailyChallengeUi(),this.startFrameFallback(),this.render(),this.preloadPoliceModel(),this.loadCurrentPlayerModel().finally(()=>{this.ensureTrafficModelsLoaded().catch(n=>console.warn("Traffic model preload failed",n)),this.startBackgroundModelLoading()})}initialState(){return{running:!1,gameOver:!1,gameMode:Je.career.key,paused:!1,stageCompleted:!1,countdown:0,countdownStarted:!1,stageIndex:0,speed:0,targetSpeed:0,maxSpeed:this.selectedCar.topSpeed,maxHealth:this.selectedCar.maxHealth??100,maxFuel:this.selectedCar.maxFuel??100,maxNitro:this.selectedCar.maxNitro??100,health:this.selectedCar.maxHealth??100,fuel:this.selectedCar.maxFuel??100,nitro:this.selectedCar.maxNitro??100,heat:0,score:0,distance:0,trafficSpawn:0,policeSpawn:0,roadblockSpawn:0,spikeSpawn:0,fuelSpawn:0,healerSpawn:0,stageProgress:0,steerVisual:0,bodyRoll:0,bodyPitch:0,cameraShake:0,roadDrift:0,bannerTimer:0,nearMissCount:0,cleanRun:!0,stageTime:0,combo:0,comboTimer:0,comboMultiplier:1,hasRevived:!1,pursuitLevel:0,driftScore:0,driftTimer:0,slowMoTimer:0,hornTimer:0,sirenTimer:0,nitroWasActive:!1,cinematicTimer:0,engineTimer:0,rivalGap:82,rivalOvertaken:!1,rivalCatchupShown:!1,policeRaceGap:72,policeRaceOvertaken:!1,policeRaceCatchupShown:!1,gear:1,rpm:1200,shiftCooldown:0,backfireTimer:0,backfirePopsRemaining:0,lastSpeed:0,nearMissPunch:0}}get currentStage(){return Uh(this.state.stageIndex)}getTrackProgress(e=this.state.stageProgress){return oe.clamp(e/this.currentStage.length,0,1)}getRoadCenterOffsetAtProgress(e){const t=this.currentStage.track.turns||[];let i=0;return t.forEach(n=>{const s=oe.smoothstep(e,n.start,n.end),r=e>n.end?1-oe.smoothstep(e,n.end,Math.min(1,n.end+.14)):1;i+=n.shift*s*r}),i}getStageMetersAtZ(e){var n,s;const i=(((s=(n=this.player)==null?void 0:n.position)==null?void 0:s.z)??10)-e;return this.state.stageProgress+Math.max(0,i/Eh)}getRoadCenterOffsetAtZ(e){return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.getStageMetersAtZ(e)))}getLaneWorldX(e,t){return Xi[e]+this.getRoadCenterOffsetAtZ(t)}getSelectedGarageVehicle(){const e=E_(this.progress.selectedVehicleKey);return Oh(e,this.progress.upgrades[e.key])}isVehicleOwned(e){return this.progress.ownedVehicles.includes(e)||this.progress.purchasedPremiumCars.includes(e)}getPremiumVehicleByProductId(e){return Ji.find(t=>t.productId===e)??null}getShopProductByProductId(e){return T_[e]??null}parseBillingProductIds(e){const t=new Set,i=n=>{var s;if(n){if(typeof n=="string"){const r=n.trim();if(Ca.includes(r)){t.add(r);return}if((s=r.match(/[a-z0-9_]+/g))==null||s.forEach(o=>{Ca.includes(o)&&t.add(o)}),r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{i(JSON.parse(r))}catch{}return}if(Array.isArray(n)){n.forEach(i);return}typeof n=="object"&&(["productId","productID","id"].forEach(r=>{Ca.includes(n[r])&&t.add(n[r])}),["products","productIds","productIDs"].forEach(r=>{Array.isArray(n[r])&&n[r].forEach(i)}),["transaction","purchase","data","receipt"].forEach(r=>i(n[r])))}};return i(e),[...t]}applyBillingProductIds(e=[],{fallbackProductId:t="",fromRestore:i=!1}={}){const n=e.length?e:t?[t]:[],s=[];return n.forEach(r=>{if(!r)return;this.billingState.ownedProductIds.includes(r)||this.billingState.ownedProductIds.push(r);const o=this.getPremiumVehicleByProductId(r);if(o){this.unlockPremiumVehicle(o.key,{reveal:!0}),s.push(o.label);return}const l=this.applyShopPurchaseByProductId(r,{fromRestore:i});(l!=null&&l.granted||l!=null&&l.message)&&s.push(l.message)}),s}getBillingStatusMessage(){const e=this.billingState.lastMessage||"",t=e.trim();return t?t.startsWith("{")||t.startsWith("[")?"Purchase received. Tap Restore Purchases if it is not unlocked yet.":`Billing: ${e}`:"Premium purchases unlock permanently."}restoreOwnedPremiumVehicles(e=[]){const t=[];return e.forEach(i=>{const n=this.getPremiumVehicleByProductId(i);n&&(this.progress.purchasedPremiumCars.includes(n.key)||(this.progress.purchasedPremiumCars.push(n.key),t.push(n.key)))}),t.length&&(At(this.progress),this.refreshProgressUi()),t}applyShopPurchaseByProductId(e,{fromRestore:t=!1}={}){const i=this.getShopProductByProductId(e);return i?i.kind==="ad_free"?(this.progress.adFreePurchased=!0,At(this.progress),this.refreshProgressUi(),this.hideTopBanner(),{product:i,granted:!0,message:"Ad-Free Upgrade unlocked."}):i.kind==="credits"?this.progress.claimedShopProducts.includes(i.key)?{product:i,granted:!1,message:t?"Credits pack already claimed.":"Credits already added."}:(this.progress.claimedShopProducts.push(i.key),this.progress.credits+=i.credits,At(this.progress),this.refreshProgressUi(),{product:i,granted:!0,message:`${i.credits} credits added.`}):null:null}async restorePremiumPurchases(){if(!wt){y.tip.textContent="Restore is available in the Android app build.";return}if(!this.billingState.available||typeof fn.getOwnedProducts!="function"){y.tip.textContent=this.billingState.loading?"Loading Play Billing...":"Restore is unavailable right now.";return}try{this.billingState.loading=!0,this.renderGarage();const{products:e}=await fn.getOwnedProducts(),t=[];e.forEach(r=>{t.push(...this.parseBillingProductIds(r))}),this.billingState.ownedProductIds=[...new Set(t)];const i=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),n=this.billingState.ownedProductIds.map(r=>this.applyShopPurchaseByProductId(r,{fromRestore:!0})).filter(Boolean).filter(r=>r.granted),s=i.length+n.length;this.billingState.lastMessage=s?`Restored ${s} purchase${s>1?"s":""}`:"No premium purchases were found to restore",y.tip.textContent=this.billingState.lastMessage}catch(e){this.billingState.lastMessage=(e==null?void 0:e.message)||"Restore failed",y.tip.textContent=this.billingState.lastMessage}finally{this.billingState.loading=!1,this.renderGarage()}}async initBilling(){if(!wt){this.billingState.lastMessage="Windows edition",this.renderGarage();return}try{this.billingState.loading=!0,await fn.addListener("transaction",t=>{const i=this.billingState.pendingProductId,n=this.parseBillingProductIds(t),s=this.applyBillingProductIds(n,{fallbackProductId:i});this.billingState.pendingKind="",this.billingState.pendingProductId="",s.length?(this.billingState.lastMessage=`${s.join(", ")} unlocked`,y.tip.textContent=this.billingState.lastMessage):t.type==="error"?(this.billingState.lastMessage=t.message||"Purchase failed",y.tip.textContent=t.message||"Purchase failed."):this.billingState.lastMessage=t.message||"Billing updated",this.renderGarage()});const{products:e}=await fn.getProducts({productIds:Ca});if(this.billingState.products=Object.fromEntries(e.map(t=>[t.id,t])),typeof fn.getOwnedProducts=="function")try{const{products:t}=await fn.getOwnedProducts(),i=[];t.forEach(r=>{i.push(...this.parseBillingProductIds(r))}),this.billingState.ownedProductIds=[...new Set(i)];const n=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),s=this.billingState.ownedProductIds.map(r=>this.applyShopPurchaseByProductId(r,{fromRestore:!0})).filter(Boolean).filter(r=>r.granted);n.length||s.length?this.billingState.lastMessage=`Restored ${n.length+s.length} purchase${n.length+s.length>1?"s":""}`:this.billingState.lastMessage="Play Billing ready"}catch(t){this.billingState.lastMessage="Play Billing ready",console.warn("Owned product restore failed",t)}else this.billingState.lastMessage="Play Billing ready";this.billingState.available=!0}catch(e){this.billingState.available=!1,this.billingState.lastMessage=(e==null?void 0:e.message)||"Billing unavailable",console.warn("Billing init failed",e)}finally{this.billingState.loading=!1,this.renderGarage()}}unlockPremiumVehicle(e,{reveal:t=!1}={}){if(!Ua[e])return;this.progress.purchasedPremiumCars.includes(e)||this.progress.purchasedPremiumCars.push(e),this.progress.selectedVehicleKey=e,t&&(this.premiumRevealVehicleKey=e),this.selectedCar=this.getSelectedGarageVehicle(),this.progress.upgrades[e]=kn(this.progress.upgrades[e]),At(this.progress);const i=this.getModelPath("player",this.selectedCar.key);!i||this.modelTemplates.has(i)||this.failedModelPaths.has(i)?this.refreshVehicleVisuals():this.loadCurrentPlayerModel(),this.refreshProgressUi(),this.renderGarage()}async loadVehicleModels(){const e=new Set,t=this.getModelPath("player",this.selectedCar.key);t&&e.add(t),Object.values(nt.player).forEach(n=>{n&&e.add(n)}),nt.police&&e.add(nt.police),nt.player.sports&&e.add(nt.player.sports),nt.traffic.hatchback&&e.add(nt.traffic.hatchback),nt.traffic.sedan&&e.add(nt.traffic.sedan),nt.traffic.suv&&e.add(nt.traffic.suv),nt.traffic.prado&&e.add(nt.traffic.prado),nt.traffic.pickup&&e.add(nt.traffic.pickup),nt.traffic.bike&&e.add(nt.traffic.bike),nt.traffic.rickshaw&&e.add(nt.traffic.rickshaw),nt.traffic.bus&&e.add(nt.traffic.bus),nt.traffic.truck&&e.add(nt.traffic.truck),nt.traffic.metrobus&&e.add(nt.traffic.metrobus);const i=new Set;mh.map(n=>nt.traffic[n]).forEach(n=>{n&&!e.has(n)&&i.add(n)}),await this.loadModelBatch([...e],!0,{allowDuringRun:!0}),i.size>0&&await this.loadModelBatch([...i],!0,{allowDuringRun:!0}).catch(n=>{console.warn("Traffic model loading failed",n)}),this.refreshTrafficPool(),this.refreshPoliceVehicles()}getTrafficModelPaths(){const e=new Set;return mh.map(t=>nt.traffic[t]).forEach(t=>{t&&e.add(t)}),[...e]}async ensureTrafficModelsLoaded(){const e=this.getTrafficModelPaths().filter(t=>!this.modelTemplates.has(t)&&!this.failedModelPaths.has(t));if(!e.length){this.trafficModelsReady=!0;return}return this.trafficModelLoadPromise?this.trafficModelLoadPromise:(this.trafficModelLoadPromise=(async()=>{await this.loadModelBatch(e,!0,{allowDuringRun:!0}),this.trafficModelsReady=this.getTrafficModelPaths().some(t=>this.modelTemplates.has(t)),this.refreshTrafficPool()})().finally(()=>{this.trafficModelLoadPromise=null}),this.trafficModelLoadPromise)}async loadCurrentPlayerModel(){const e=this.getModelPath("player",this.selectedCar.key);if(!(!e||this.modelTemplates.has(e)||this.failedModelPaths.has(e)))return this.playerModelLoadPromise&&this.playerModelLoadPath===e?this.playerModelLoadPromise:(this.playerModelLoadPromise&&this.playerModelLoadPath!==e&&(this.playerModelLoadPromise=null),this.playerModelLoadPath=e,this.playerModelLoadPromise=(async()=>{await this.waitForIdle();try{const t=await this.loadGlb(e);this.modelTemplates.set(e,t.scene),this.loadedVehicleModels=!0,this.refreshVehicleVisuals()}catch(t){this.failedModelPaths.add(e),console.warn(`Failed to load model: ${e}`,t)}finally{this.playerModelLoadPromise=null,this.playerModelLoadPath=""}})(),this.playerModelLoadPromise)}startBackgroundModelLoading(){this.backgroundModelsStarted||(this.backgroundModelsStarted=!0,this.loadVehicleModels().catch(e=>console.warn("Vehicle model loading failed",e)))}async loadModelBatch(e,t,{allowDuringRun:i=!0}={}){for(const n of e){if(!i&&(this.state.running||this.state.paused)){this.backgroundModelsStarted=!1;return}if(await this.waitForIdle(),!i&&(this.state.running||this.state.paused)){this.backgroundModelsStarted=!1;return}try{const s=await this.loadGlb(n);this.modelTemplates.set(n,s.scene),this.loadedVehicleModels=!0,n===nt.police&&this.refreshPoliceVehicles(),t&&this.refreshVehicleVisuals()}catch(s){this.failedModelPaths.add(n),console.warn(`Failed to load model: ${n}`,s)}}this.modelTemplates.size>0&&(this.loadedVehicleModels=!0,this.refreshVehicleVisuals())}waitForIdle(){return new Promise(e=>{window.setTimeout(e,16)})}loadGlb(e){return new Promise((t,i)=>{this.gltfLoader.load(e,t,void 0,i)})}async loadStageProps(){const e=new Set;Object.values(Rh).forEach(t=>{Object.values(t).forEach(i=>i&&e.add(i))}),Object.values(Yr).forEach(t=>{t.forEach(i=>i&&e.add(i))});for(const t of e){await this.waitForIdle();try{const i=await this.loadGlb(t);this.propTemplates.set(t,i.scene)}catch{}}this.propTemplates.size>0&&(this.loadedStageProps=!0,this.scene&&this.currentStage&&this.buildSkyline())}getSeaTexture(){if(this.proceduralTextures.sea)return this.proceduralTextures.sea;const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#1a3a5e"),i.addColorStop(.5,"#2a5e8a"),i.addColorStop(1,"#4a8aae"),t.fillStyle=i,t.fillRect(0,0,256,512),t.strokeStyle="#a8d6e8",t.lineWidth=1.2;for(let s=0;s<80;s+=1){t.globalAlpha=.15+Math.random()*.35,t.beginPath();const r=Math.random()*512,o=Math.random()*256,l=o+30+Math.random()*80;t.moveTo(o,r),t.bezierCurveTo(o+20,r-4,l-20,r+4,l,r),t.stroke()}t.globalAlpha=1;const n=new Wi(e);return n.wrapS=qt,n.wrapT=qt,n.repeat.set(2,8),this.proceduralTextures.sea=n,n}getCurbTexture(){if(this.proceduralTextures.curb)return this.proceduralTextures.curb;const e=document.createElement("canvas");e.width=64,e.height=256;const t=e.getContext("2d");t.fillStyle="#f8fafc",t.fillRect(0,0,64,256),t.fillStyle="#dc2626",t.fillRect(0,0,64,128);const i=new Wi(e);return i.wrapS=qt,i.wrapT=qt,i.repeat.set(1,52),i.needsUpdate=!0,this.proceduralTextures.curb=i,i}getAsphaltTexture(){if(this.proceduralTextures.asphalt)return this.proceduralTextures.asphalt;const t=new es().load(u_,i=>{i.wrapS=qt,i.wrapT=qt,i.repeat.set(3,16),i.colorSpace=ft,i.needsUpdate=!0},void 0,i=>{console.warn("Real asphalt texture not loaded, procedural fallback active",i)});return t.wrapS=qt,t.wrapT=qt,t.repeat.set(3,16),t.colorSpace=ft,this.proceduralTextures.asphalt=t,t}getRealBillboardTexture(e=0){this.realBillboardTextures||(this.realBillboardTextures=new Map);const t=Ah[Math.abs(e)%Ah.length];if(this.realBillboardTextures.has(t))return this.realBillboardTextures.get(t);const i=[{name:"GOURMET BAKERS",sub:"Fresh & Pure Confectioners",bg:"#831843",fg:"#fef08a"},{name:"JAZZ 4G",sub:"Dunya Ko Bata Do",bg:"#dc2626",fg:"#ffffff"},{name:"TAPAL TEA",sub:"Danedar - Har Ghont Mein Mazza",bg:"#047857",fg:"#ffffff"},{name:"LAHORE METROBUS",sub:"Gajju Matta to Shahdara Corridor",bg:"#1d4ed8",fg:"#fef08a"},{name:"SHEZAN",sub:"Original Lahore Taste",bg:"#ca8a04",fg:"#ffffff"},{name:"PAKOLA",sub:"Dil Bola Pakola - Refreshing Taste",bg:"#15803d",fg:"#ffffff"}],n=i[Math.abs(e)%i.length],s=document.createElement("canvas");s.width=512,s.height=288;const r=s.getContext("2d");r.fillStyle=n.bg,r.fillRect(0,0,512,288),r.strokeStyle=n.fg,r.lineWidth=10,r.strokeRect(10,10,492,268),r.fillStyle=n.fg,r.font='900 44px "Trebuchet MS", "Arial Black", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(n.name,256,115),r.font='700 22px "Trebuchet MS", sans-serif',r.fillText(n.sub,256,175);const o=new Wi(s);return o.colorSpace=ft,this.realBillboardTextures.set(t,o),new es().load(t,c=>{o.image=c.image,o.colorSpace=ft,o.needsUpdate=!0},void 0,c=>{console.warn(`Billboard fallback kept for ${t}:`,c)}),o}getHighwaySignTexture(e="mall-road-drift"){var c,h;this._highwaySignTextures||(this._highwaySignTextures=new Map);const t=e||((h=(c=this.currentStage)==null?void 0:c.track)==null?void 0:h.key)||"mall-road-drift";if(this._highwaySignTextures.has(t))return this._highwaySignTextures.get(t);const i={"mall-road-drift":{title:"THE MALL ROAD",dest1:"SHAHRAH-E-QUAID-I-AZAM | AIRPORT",dest2:"GULBERG 3 KM"},"canal-run":{title:"CANAL BANK ROAD",dest1:"MUSLIM TOWN | DHARAMPURA | THOKAR",dest2:"DOCTORS HOSPITAL 4 KM"},"ring-road-blast":{title:"LAHORE RING ROAD (L-20)",dest1:"AIRPORT | DHA PHASE 5 | M-2 MOTORWAY",dest2:"ALLAMA IQBAL INTL 2 KM"},"liberty-loop":{title:"MAIN BOULEVARD GULBERG",dest1:"LIBERTY ROUNDABOUT | MM ALAM ROAD",dest2:"GADDAFI STADIUM 1 KM"},"old-city-chase":{title:"WALLED CITY LAHORE",dest1:"DELHI GATE | BADSHAHI MOSQUE | FORT",dest2:"CIRCULAR ROAD 500 M"},"airport-road-dash":{title:"AIRPORT ROAD EXPRESSWAY",dest1:"CANTT | DHA LAHORE | RING ROAD",dest2:"DEPARTURES TERMINAL"},"fortress-sprint":{title:"FORTRESS STADIUM CORRIDOR",dest1:"BRIDGE ROAD | CANTONMENT | MALL",dest2:"JOYLAND / SADDAR 1 KM"},"ravi-bridge-run":{title:"RIVER RAVI TOLLWAY",dest1:"SHAHDARA | GUJRANWALA | GT ROAD",dest2:"BARADARI TOLL PLAZA"}},n=i[t]||i["mall-road-drift"],s=document.createElement("canvas");s.width=1024,s.height=512;const r=s.getContext("2d");r.fillStyle="#004a27",r.fillRect(0,0,1024,512),r.strokeStyle="#ffffff",r.lineWidth=14,r.strokeRect(16,16,992,480),r.strokeStyle="rgba(255, 255, 255, 0.45)",r.lineWidth=3,r.strokeRect(32,32,960,448),r.fillStyle="#ffffff",r.font='900 62px "Trebuchet MS", "Arial Black", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(n.title,512,95),r.fillStyle="#ffffff",r.fillRect(40,155,944,8),r.font='800 42px "Trebuchet MS", sans-serif',r.textAlign="left",r.fillText(`⮤  ${n.dest1}`,60,225),r.fillStyle="#fef08a",r.font='800 38px "Trebuchet MS", sans-serif',r.fillText(`⮥  ${n.dest2}`,60,295),r.fillStyle="rgba(255, 255, 255, 0.7)",r.fillRect(40,350,944,4),r.fillStyle="#facc15",r.font='900 38px "Trebuchet MS", "Arial Black", sans-serif',r.textAlign="center",r.fillText("🇵🇰  NEED FOR SPEED : LAHORE  |  PAKISTAN HIGHWAY  🇵🇰",512,420);const o=new Wi(s);o.colorSpace=ft,o.needsUpdate=!0,this._highwaySignTextures.set(t,o);const l=t==="canal-run"||t==="mall-road-drift"?g_:null;return l&&new es().load(l,u=>{o.image=u.image,o.colorSpace=ft,o.needsUpdate=!0},void 0,u=>{console.warn("Highway sign photo load fallback kept:",u)}),o}createLicensePlateMesh(e="LEA 2026"){const t=document.createElement("canvas");t.width=512,t.height=256;const i=t.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,512,256),i.strokeStyle="#00502c",i.lineWidth=14,i.strokeRect(8,8,496,240),i.fillStyle="#00502c",i.fillRect(16,16,100,224),i.fillStyle="#ffffff",i.font="bold 54px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("🇵🇰",66,128),i.fillStyle="#00502c",i.font='900 38px "Trebuchet MS", sans-serif',i.textAlign="center",i.fillText("PUNJAB · PAKISTAN",306,68),i.fillStyle="#0f172a",i.font='900 78px "Arial Black", "Trebuchet MS", sans-serif',i.fillText(e,306,155),i.fillStyle="#64748b",i.font='bold 28px "Trebuchet MS", sans-serif',i.fillText("2026",306,215);const n=new Wi(t);n.colorSpace=ft,n.needsUpdate=!0;const s=new We;s.name="PakistaniLicensePlate";const r=new O(new ee(.94,.48,.04),new Y({color:988970,roughness:.6,metalness:.8}));r.position.z=-.02,s.add(r);const o=new O(new et(.9,.44),new Y({map:n,roughness:.35,metalness:.15}));return o.position.z=.01,s.add(o),s}getBuildingFacadeTexture(e="glass"){this.buildingFacadeTextures||(this.buildingFacadeTextures=new Map);const t=e==="brick"?m_:p_;if(this.buildingFacadeTextures.has(t))return this.buildingFacadeTextures.get(t);const n=new es().load(t,s=>{s.wrapS=qt,s.wrapT=qt,s.repeat.set(2,3),s.colorSpace=ft,s.needsUpdate=!0});return n.wrapS=qt,n.wrapT=qt,n.repeat.set(2,3),n.colorSpace=ft,this.buildingFacadeTextures.set(t,n),n}getBillboardTexture(e,t="#0a1320",i="#fbbf24"){const n=`billboard_${e}_${t}`;if(this.proceduralTextures[n])return this.proceduralTextures[n];const s=document.createElement("canvas");s.width=512,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,512,256),r.strokeStyle=i,r.lineWidth=6,r.strokeRect(8,8,496,240),r.fillStyle=i,r.font="bold 56px Trebuchet MS, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(e,256,128);const o=new Wi(s);return this.proceduralTextures[n]=o,o}createPropFromPath(e){if(!e)return null;const t=this.propTemplates.get(e);if(!t)return null;const i=t.clone(!0);return i.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,Array.isArray(n.material)?n.material=n.material.map(s=>s.clone()):n.material&&(n.material=n.material.clone()))}),i}createStageProp(e,t){var i;return this.createPropFromPath((i=Rh[e])==null?void 0:i[t])}getModelPath(e,t){var i;return e==="police"?nt.police:((i=nt[e])==null?void 0:i[t])??null}createModelVehicle(e,t,i,n=1120295){let s=this.getModelPath(e,t),r=s?this.modelTemplates.get(s):null;if(!r){const v=[this.getModelPath("player","sedan-sport"),this.getModelPath("player","hatchback"),this.getModelPath("traffic","sedan"),this.getModelPath("traffic","hatchback"),this.getModelPath("traffic","truck")];for(const g of v)if(g&&this.modelTemplates.has(g)){r=this.modelTemplates.get(g),s=g;break}!r&&this.modelTemplates.size>0&&(r=this.modelTemplates.values().next().value)}if(!r||!i)return null;const o=new We,l=r.clone(!0);l.name="GltfVehicleScene",l.rotation.y=__(s,e,t),o.userData.modelVehicle=!0,o.add(l),l.traverse(v=>{if(!v.isMesh)return;v.castShadow=!0,v.receiveShadow=!1,Array.isArray(v.material)?v.material=v.material.map(m=>m.clone()):v.material&&(v.material=v.material.clone()),(Array.isArray(v.material)?v.material:v.material?[v.material]:[]).forEach(m=>{if(!m||!("color"in m)||!m.color)return;const _=m.transparent||m.opacity<.98,M=m.color.getHex(),b=M===0||M===329485||M===988970||M===1120295;if(m.map){m.color.setHex(16777215);return}e==="player"&&(t==="hatchback-small"||t==="hatchback")&&!_&&!b&&(m.color.setHex(16777215),"metalness"in m&&(m.metalness=.16),"roughness"in m&&(m.roughness=.28)),e==="traffic"&&!_&&!b&&(m.color.setHex(v_[t]??n??15987958),"metalness"in m&&(m.metalness=.14),"roughness"in m&&(m.roughness=.42));const E=e==="player"?this.getSelectedLivery():null;E!=null&&E.color&&!_&&!b&&m.color.lerp(new ke(E.color),.42)})});const c=new Nt().setFromObject(l),h=new I,d=new I;if(c.getSize(h),c.getCenter(d),h.x<=0||h.y<=0||h.z<=0)return null;const u=e==="police"?(i.length||5)*1.05/h.z:Math.min(i.width*1.08/h.x,i.height*1.14/h.y,i.length*1.08/h.z);l.scale.setScalar(u);const f=new Nt().setFromObject(l),p=new I;return f.getCenter(p),l.position.set(-p.x,-f.min.y-.72,-p.z),e==="player"&&o.scale.setScalar(1.12),e==="traffic"&&o.scale.setScalar(1.12),e==="police"&&o.scale.setScalar(1),o.userData.baseYaw=0,o.rotation.y=o.userData.baseYaw,this.groundVehicleToRoad(o),e==="traffic"&&t==="bike"&&this.attachRiderToBike(o,!1),o}groundVehicleToRoad(e,t=.72){if(!e)return e;e.position.set(0,t,0),e.updateMatrixWorld(!0);const i=new Nt().setFromObject(e);if(!isFinite(i.min.y))return e;const n=-i.min.y,s=e.scale.y||1,r=n/s;return e.children.forEach(o=>{o.position.y+=r}),e.updateMatrixWorld(!0),e}attachRiderToBike(e,t=!1){let i=!1;if(e.traverse(p=>{var v,g,m;p.isMesh&&((v=p.name)!=null&&v.toLowerCase().includes("rider")||(g=p.name)!=null&&g.toLowerCase().includes("person")||(m=p.name)!=null&&m.toLowerCase().includes("character"))&&(i=!0)}),i)return;const n=new We;n.name="biker-rider";const s=[1981066,988970,1409085,8138002,3621201,12131356],r=t?592139:s[Math.floor(Math.random()*s.length)],o=[988970,15680580,16096779,2450411,16777215],l=t?14427686:o[Math.floor(Math.random()*o.length)],c=new O(new ee(.48,.65,.38),new Y({color:r,roughness:.65}));c.position.set(0,1.48,-.1),c.rotation.x=.18,c.castShadow=!0,n.add(c);const h=new ee(.18,.55,.28),d=new Y({color:2042167,roughness:.8});[-.22,.22].forEach(p=>{const v=new O(h,d);v.position.set(p,1,-.05),v.rotation.x=-.2,n.add(v)});const u=new st(.065,.08,.52,8);[-.26,.26].forEach(p=>{const v=new O(u,new Y({color:r,roughness:.65}));v.position.set(p,1.36,.18),v.rotation.x=-.7,v.rotation.z=p<0?.25:-.25,n.add(v)});const f=new O(new $t(.22,14,12),new Y({color:l,metalness:.35,roughness:.3}));if(f.position.set(0,1.95,.02),f.castShadow=!0,n.add(f),Math.random()>.6){const p=s[(s.indexOf(r)+2)%s.length],v=new O(new ee(.42,.58,.34),new Y({color:p,roughness:.7}));v.position.set(0,1.5,-.55),v.castShadow=!0,n.add(v);const g=new O(new $t(.2,12,10),new Y({color:1579035,roughness:.6}));g.position.set(0,1.9,-.55),n.add(g)}e.add(n)}refreshVehicleVisuals(){var i;const e=this.player?this.player.position.clone():new I(0,.72,10),t=this.player?this.player.rotation.clone():new _i;if(this.player&&this.scene.remove(this.player),this.createPlayerCar(),this.player.position.copy(e),this.player.rotation.copy(t),this.traffic.forEach(n=>this.scene.remove(n)),this.traffic=[],this.createTrafficPool(),this.refreshPoliceVehicles(),this.roadblocks.forEach(n=>this.scene.remove(n)),this.roadblocks=[],this.createRoadblockPool(),this.rivalBoss){const n=(i=this.rivalBoss.userData)==null?void 0:i.active,s=this.rivalBoss.position.clone(),r={...this.rivalBoss.userData};this.scene.remove(this.rivalBoss),this.createBossRival(),n&&(this.rivalBoss.position.copy(s),this.rivalBoss.userData=r,this.rivalBoss.visible=!0)}}refreshPoliceVehicles(){var t;if(!this.scene)return;if(this.policeRaceLeader){const i=(t=this.policeRaceLeader.userData)==null?void 0:t.active,n=this.policeRaceLeader.position.clone(),s={...this.policeRaceLeader.userData};this.scene.remove(this.policeRaceLeader),this.policeRaceLeader=null,this.createPoliceRaceLeader(),i&&this.policeRaceLeader&&(this.policeRaceLeader.position.copy(n),this.policeRaceLeader.userData=s,this.policeRaceLeader.visible=!0)}else this.createPoliceRaceLeader();const e=(this.police||[]).map(i=>{var n;return{active:(n=i.userData)==null?void 0:n.active,pos:i.position.clone(),userData:{...i.userData}}});this.police.forEach(i=>this.scene.remove(i)),this.police=[],this.createPolicePool(),e.forEach((i,n)=>{i.active&&this.police[n]&&(this.police[n].position.copy(i.pos),this.police[n].userData=i.userData,this.police[n].visible=!0)})}preloadPoliceModel(){const e=nt.police;return!e||this.modelTemplates.has(e)?Promise.resolve():this.loadGlb(e).then(t=>{this.modelTemplates.set(e,t.scene),this.loadedVehicleModels=!0,this.refreshPoliceVehicles()}).catch(t=>{console.warn("Failed to preload police model:",t)})}refreshTrafficPool(){var e;!this.scene||!((e=this.traffic)!=null&&e.length)||(this.traffic.forEach(t=>this.scene.remove(t)),this.traffic=[],this.createTrafficPool())}setSelectedVehicle(e){if(!this.isVehicleOwned(e))return;this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),At(this.progress);const t=this.getModelPath("player",this.selectedCar.key);!t||this.modelTemplates.has(t)||this.failedModelPaths.has(t)?this.refreshVehicleVisuals():this.loadCurrentPlayerModel(),this.renderGarage(),this.refreshProgressUi(),y.tip.textContent=`${this.selectedCar.label} equipped.`}purchasePremiumVehicle(e){const t=Ua[e];if(t){if(this.progress.purchasedPremiumCars.includes(e)){this.setSelectedVehicle(e);return}if(!wt){this.unlockPremiumVehicle(e,{reveal:!0}),y.tip.textContent=`${t.label} unlocked in the Windows edition.`;return}if(!this.billingState.available){y.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind="premium",y.tip.textContent=`Opening Google Play purchase for ${t.label}...`,fn.purchaseProduct({productId:t.productId,referenceUUID:Ch()}).then(i=>{this.applyBillingProductIds(this.parseBillingProductIds(i),{fallbackProductId:t.productId}).length&&(this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=`${t.label} unlocked`,y.tip.textContent=`${t.label} unlocked.`,this.renderGarage())}).catch(i=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(i==null?void 0:i.message)||"Purchase failed",y.tip.textContent=(i==null?void 0:i.message)||"Purchase failed.",this.renderGarage()})}}purchaseShopProduct(e){const t=kd[e];if(t){if(t.kind==="ad_free"&&this.progress.adFreePurchased){y.tip.textContent="Ad-Free Upgrade already owned.";return}if(t.kind==="credits"&&this.progress.claimedShopProducts.includes(t.key)){y.tip.textContent=`${t.label} already claimed.`;return}if(!wt){y.tip.textContent=`${t.label} purchases are available on the Android app build.`;return}if(!this.billingState.available){y.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind=t.kind,y.tip.textContent=`Opening Google Play purchase for ${t.label}...`,fn.purchaseProduct({productId:t.productId,referenceUUID:Ch()}).then(i=>{const n=this.applyBillingProductIds(this.parseBillingProductIds(i),{fallbackProductId:t.productId});n.length&&(this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=n.join(", "),y.tip.textContent=this.billingState.lastMessage,this.renderGarage())}).catch(i=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(i==null?void 0:i.message)||"Purchase failed",y.tip.textContent=(i==null?void 0:i.message)||"Purchase failed.",this.renderGarage()})}}getUpgradeLevel(e,t){return kn(this.progress.upgrades[e])[t]}buyUpgrade(e){const t=this.progress.selectedVehicleKey,i=Ph.find(o=>o.key===e);if(!i)return;const n=kn(this.progress.upgrades[t]),s=n[e];if(s>=Is){y.tip.textContent=`${i.label} is already maxed out.`;return}const r=Nh(i,s);if(this.progress.credits<r){y.tip.textContent=`You need ${r-this.progress.credits} more credits for ${i.label}.`;return}n[e]+=1,this.progress.credits-=r,this.progress.upgrades[t]=n,this.selectedCar=this.getSelectedGarageVehicle(),At(this.progress),this.refreshProgressUi(),this.renderGarage(),y.tip.textContent=`${i.label} upgraded for ${this.selectedCar.label}.`}setSettingsTab(e){var t,i,n,s;this.settingsTab=e,document.querySelectorAll("[data-settings-tab]").forEach(r=>{r.classList.toggle("is-active",r.dataset.settingsTab===e)}),(t=document.querySelector("#garage-panel-garage"))==null||t.classList.toggle("is-active",e==="garage"),(i=document.querySelector("#garage-panel-store"))==null||i.classList.toggle("is-active",e==="store"),(n=document.querySelector("#garage-panel-upgrades"))==null||n.classList.toggle("is-active",e==="upgrades"),(s=document.querySelector("#garage-panel-tuning"))==null||s.classList.toggle("is-active",e==="tuning"),e==="tuning"&&this.renderTuningPanel()}getSelectedLivery(){return is.find(e=>e.key===this.progress.selectedLiveryKey)||is[0]}isLiveryUnlocked(e){return this.progress.unlockedLiveries.includes(e.key)}setSelectedLivery(e){const t=is.find(i=>i.key===e);!t||!this.isLiveryUnlocked(t)||(this.progress.selectedLiveryKey=e,At(this.progress),this.refreshVehicleVisuals(),this.renderGarage(),y.tip.textContent=`${t.label} livery equipped.`)}selectCustomPaint(e){const t=this.selectedCar.key;this.progress.customization=this.progress.customization||{},this.progress.customization[t]=this.progress.customization[t]||{},this.progress.customization[t].paint=e,At(this.progress),this.applyCustomizationToCar(this.player,t),this.renderTuningPanel(),this.audio.tone(700,.08,"triangle",.03)}selectCustomUnderglow(e){const t=this.selectedCar.key;this.progress.customization=this.progress.customization||{},this.progress.customization[t]=this.progress.customization[t]||{},this.progress.customization[t].underglow=e,At(this.progress),this.applyCustomizationToCar(this.player,t),this.renderTuningPanel(),this.audio.tone(850,.1,"sine",.035)}selectCustomRims(e){const t=this.selectedCar.key;this.progress.customization=this.progress.customization||{},this.progress.customization[t]=this.progress.customization[t]||{},this.progress.customization[t].rims=e,At(this.progress),this.applyCustomizationToCar(this.player,t),this.renderTuningPanel(),this.audio.tone(600,.08,"square",.03)}renderTuningPanel(){var i;if(!y.tuningCarName)return;const e=this.selectedCar.key,t=((i=this.progress.customization)==null?void 0:i[e])||{};if(y.tuningCarName.textContent=`${this.selectedCar.label} Custom Tuning`,y.paintSwatchGrid&&(y.paintSwatchGrid.innerHTML="",t_.forEach(n=>{const s=document.createElement("button");s.type="button",s.className="color-swatch swatch-button",s.title=n.name,s.style.backgroundColor=`#${n.hex.toString(16).padStart(6,"0")}`,(t.paint!==void 0?t.paint===n.hex:this.selectedCar.body===n.hex)&&s.classList.add("active"),s.addEventListener("click",()=>this.selectCustomPaint(n.hex)),y.paintSwatchGrid.appendChild(s)})),y.underglowSwatchGrid&&(y.underglowSwatchGrid.innerHTML="",i_.forEach(n=>{const s=document.createElement("button");if(s.type="button",s.className="color-swatch swatch-button",s.title=n.name,n.hex===null)s.style.backgroundColor="#1f2937",s.style.border="2px dashed #9ca3af",s.innerHTML='<span style="font-size:12px;color:#9ca3af;display:grid;place-items:center;line-height:1">✕</span>';else{const o=`#${n.hex.toString(16).padStart(6,"0")}`;s.style.backgroundColor=o,s.style.boxShadow=`0 0 10px ${o}88`}(t.underglow!==void 0?t.underglow===n.hex:n.hex===null)&&s.classList.add("active"),s.addEventListener("click",()=>this.selectCustomUnderglow(n.hex)),y.underglowSwatchGrid.appendChild(s)})),y.rimsOptionGrid){y.rimsOptionGrid.innerHTML="";const n=t.rims||"stock";n_.forEach(s=>{const r=document.createElement("div");r.className=`tuning-option-card${n===s.id?" active":""}`,r.textContent=s.label,r.addEventListener("click",()=>this.selectCustomRims(s.id)),y.rimsOptionGrid.appendChild(r)})}}applyCustomizationToCar(e,t=(i=>(i=this.selectedCar)==null?void 0:i.key)()){var d,u,f;if(!e)return;const n=t||((d=this.selectedCar)==null?void 0:d.key)||"hatchback-small",s=((u=this.progress.customization)==null?void 0:u[n])||{},r=((f=this.selectedCar)==null?void 0:f.profile)||{width:3.2,length:7.2};if(s.paint!==void 0&&s.paint!==null){const p=new ke(s.paint);e.traverse(v=>{if(!v.isMesh||v.name==="ground-shadow"||v.name==="underglow")return;(Array.isArray(v.material)?v.material:[v.material]).forEach(m=>{if(!m||!m.color||m.transparent&&m.opacity<.95)return;const _=m.color.getHex();_===0||_===329485||_===1054759||_===1120295||m.emissive&&m.emissive.getHex()>0||(m.color.copy(p),"metalness"in m&&(m.metalness=oe.clamp(m.metalness+.1,.25,.8)),"roughness"in m&&(m.roughness=oe.clamp(m.roughness-.05,.2,.5)))})})}let o=e.getObjectByName("underglow");if(s.underglow!==null&&s.underglow!==void 0)if(o)o.material.color.setHex(s.underglow),o.material.opacity=.55,o.visible=!0;else{const p=new et(r.width*1.35,r.length*.82),v=new De({color:s.underglow,transparent:!0,opacity:.55,side:Tt});o=new O(p,v),o.name="underglow",o.rotation.x=-Math.PI/2,o.position.y=.06,e.add(o)}else o&&(o.visible=!1);const l=s.rims||"stock",c={stock:{color:1120295,metalness:.15,roughness:.7},alloy:{color:14870768,metalness:.85,roughness:.18},chrome:{color:16777215,metalness:.98,roughness:.04},gold:{color:16096779,metalness:.88,roughness:.22},carbon:{color:1579035,metalness:.45,roughness:.38}},h=c[l]||c.stock;e.traverse(p=>{if(p.isMesh&&(p.geometry instanceof st||p.name&&(p.name.toLowerCase().includes("wheel")||p.name.toLowerCase().includes("rim")))){const v=p.material;v&&v.color&&(v.color.setHex(h.color),"metalness"in v&&(v.metalness=h.metalness),"roughness"in v&&(v.roughness=h.roughness))}})}renderGarage(){if(!y.garageList||!y.storeList||!y.garageUpgrades)return;y.garageCurrentText.textContent=`Current car: ${this.selectedCar.label}`;const e=gt.map(h=>{const d=this.isVehicleOwned(h.key),u=this.progress.selectedVehicleKey===h.key,f=Qo[h.key]+1,p=Oh(h,this.progress.upgrades[h.key]),v=Math.round(p.topSpeed-this.selectedCar.topSpeed),g=Math.round((p.grip-this.selectedCar.grip)*100);return`
        <button
          type="button"
          class="garage-car${u?" selected":""}${d?"":" locked"}"
          data-garage-car="${h.key}"
          ${d?"":"disabled"}
        >
          <span class="garage-badge">${d?u?"Equipped":"Owned":"Locked"}</span>
          <strong>${h.label}</strong>
          <span>${d?u?"Selected":"Tap to equip":`Unlock at Stage ${f}`}</span>
          <span>Top ${Math.round(p.topSpeed)} | Accel ${Math.round(p.accel)} | Grip ${p.grip.toFixed(2)}</span>
          <span>${u?"Current tune":`Compare: ${v>=0?"+":""}${v} KM/H, ${g>=0?"+":""}${g} grip`}</span>
        </button>
      `}).join(""),t=c_.map(h=>`
      <div class="leaderboard-row">
        <strong>${h.label}</strong>
        <span>${h.rule}</span>
      </div>
    `).join(""),i=(this.progress.localLeaderboard||[]).slice(0,5).map((h,d)=>`
      <div class="leaderboard-row">
        <strong>#${d+1} ${h.score}</strong>
        <span>${h.track} · ${h.vehicle} · Drift ${h.drift}</span>
      </div>
    `).join("")||'<p class="garage-premium-note">No runs recorded yet.</p>',n=Ji.map(h=>{const d=this.progress.purchasedPremiumCars.includes(h.key),u=this.progress.selectedVehicleKey===h.key,f=this.billingState.products[h.productId],p=this.billingState.ownedProductIds.includes(h.productId),v=(f==null?void 0:f.displayPrice)||(wt?this.billingState.loading?"Loading price...":"Play price unavailable":"Included"),g=u?"Selected":d?"Owned":p?"Restore":"Exclusive",m=d?u?"Owned · Selected":"Owned · Tap to equip":p?"Owned on Play · Restoring...":wt?this.billingState.loading?"Checking Play price...":`Buy on Play · ${v}`:"Included in Windows edition",_=this.billingState.pendingProductId===h.productId?"Opening...":this.billingState.loading?"Loading...":wt?"Buy on Play":"Unlock";return`
          <div class="garage-car premium premium-card premium-${h.badgeTone||"gold"}${u?" selected":""}${d?"":" locked"}">
            <span class="premium-ribbon">${g}</span>
            <span class="garage-badge badge-${h.badgeTone||"gold"}">${h.badge||"Premium"}</span>
            <strong>${h.label}</strong>
            ${b_(h)}
            <span class="premium-role">${h.role}</span>
            <span>${h.subtitle}</span>
            <span class="premium-trait">${h.trait}</span>
            ${Lh(h)}
            <span>${m}</span>
          ${!d&&wt?`<span>${h.productId}</span>`:""}
          <div class="garage-car-actions">
            ${d?`<button type="button" class="icon-button primary" data-garage-car="${h.key}">${u?"Selected":"Equip"}</button>`:`<button type="button" class="icon-button primary" data-premium-buy="${h.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==h.productId?"disabled":""}>${_}</button>`}
          </div>
        </div>
      `}).join(""),s=Ua[this.premiumRevealVehicleKey],r=s?`
        <div class="premium-unlock-panel premium-${s.badgeTone||"gold"}">
          <span class="garage-badge badge-${s.badgeTone||"gold"}">Unlocked</span>
          <strong>${s.label} added to your garage</strong>
          <span>${s.role} - ${s.trait}</span>
          ${Lh(s)}
          <div class="garage-car-actions">
            <button type="button" class="icon-button primary" data-garage-car="${s.key}">Equipped</button>
            <button type="button" class="icon-button" data-premium-reveal-dismiss>Close</button>
          </div>
        </div>
      `:"",o=S_.map(h=>`
      <div class="garage-car premium premium-card coming-soon-card locked">
        <span class="premium-ribbon">Future Update</span>
        <span class="garage-badge">Coming Soon</span>
        <strong>${h.label}</strong>
        <span>${h.note}</span>
        <span class="premium-trait">More premium cars are planned after v2 ships cleanly.</span>
      </div>
    `).join(""),l=nr.map(h=>{const d=this.billingState.products[h.productId],u=(d==null?void 0:d.displayPrice)||(wt?this.billingState.loading?"Loading price...":"Play price unavailable":"Android only"),f=h.kind==="ad_free"?this.progress.adFreePurchased:this.progress.claimedShopProducts.includes(h.key),p=f?h.kind==="ad_free"?"Owned | Ads disabled":"Claimed | Credits added":wt?this.billingState.loading?"Checking Play price...":`Buy on Play | ${u}`:"Android purchase only",v=this.billingState.pendingProductId===h.productId?"Opening...":this.billingState.loading?"Loading...":wt?"Buy on Play":"Unavailable";return`
        <div class="garage-car premium${f?" selected":""}">
          <span class="garage-badge">${h.badge}</span>
          <strong>${h.label}</strong>
          <span>${h.subtitle}</span>
          <span>${p}</span>
          ${f?"":`<span>${h.productId}</span>`}
          <div class="garage-car-actions">
            ${f?`<button type="button" class="icon-button" disabled>${h.kind==="ad_free"?"Owned":"Claimed"}</button>`:`<button type="button" class="icon-button primary" data-shop-buy="${h.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==h.productId?"disabled":""}>${v}</button>`}
          </div>
        </div>
      `}).join("");y.garageList.innerHTML=`
      <div class="garage-section">
        <h4>Career Cars</h4>
        <div class="garage-grid">${e}</div>
      </div>
      <div class="garage-section">
        <h4>Local Leaderboard</h4>
        <div class="leaderboard-list">${i}</div>
      </div>
      <div class="garage-section">
        <h4>Challenge Modes</h4>
        <div class="leaderboard-list">${t}</div>
      </div>
    `,y.liveryList&&(y.liveryList.innerHTML=is.map(h=>{const d=this.isLiveryUnlocked(h),u=this.progress.selectedLiveryKey===h.key,f=h.color?`style="background:#${h.color.toString(16).padStart(6,"0")}"`:"";return`
          <button
            type="button"
            class="garage-car livery-card${u?" selected":""}${d?"":" locked"}"
            data-livery="${h.key}"
            ${d?"":"disabled"}
          >
            <span class="livery-swatch" ${f}></span>
            <strong>${h.label}</strong>
            <span>${d?u?"Equipped":"Tap to equip":`Unlock: ${h.unlock}`}</span>
          </button>
        `}).join(""),y.liveryList.querySelectorAll("[data-livery]").forEach(h=>{h.addEventListener("click",()=>this.setSelectedLivery(h.dataset.livery))})),y.storeList.innerHTML=`
      <div class="garage-section">
        <h4>Premium Collection</h4>
        <p class="garage-premium-note">${this.getBillingStatusMessage()}</p>
        ${wt?`<div class="garage-car-actions"><button type="button" class="icon-button" data-restore-premium>${this.billingState.loading?"Checking...":"Restore Purchases"}</button></div>`:""}
        ${r}
        <div class="garage-grid premium-grid">${n}${o}</div>
      </div>
      <div class="garage-section">
        <h4>Store Upgrades</h4>
        <p class="garage-premium-note">Ad-Free is permanent. Credit packs are currently configured as one-time bonus unlocks.</p>
        <div class="garage-grid">${l}</div>
      </div>
    `;const c=kn(this.progress.upgrades[this.progress.selectedVehicleKey]);y.garageUpgrades.innerHTML=Ph.map(h=>{const d=c[h.key],u=d>=Is?"MAX":`${Nh(h,d)} CR`;return`
        <div class="upgrade-row">
          <div>
            <strong>${h.label}</strong>
            <span>Level ${d}/${Is}</span>
            <span>Preview: ${h.key==="engine"?"+8 KM/H, +6 accel":h.key==="handling"?"+0.04 grip":h.key==="tank"?"+12 fuel, lower drain":h.key==="nitro"?"+14 nitro, stronger burst":"+12 health, damage reduction"}</span>
          </div>
          <button
            type="button"
            class="icon-button${d>=Is?"":" primary"}"
            data-upgrade="${h.key}"
            ${d>=Is?"disabled":""}
          >
            ${u}
          </button>
        </div>
      `}).join(""),document.querySelectorAll("[data-garage-car]").forEach(h=>{h.addEventListener("click",()=>this.setSelectedVehicle(h.dataset.garageCar))}),y.storeList.querySelectorAll("[data-premium-buy]").forEach(h=>{h.addEventListener("click",()=>this.purchasePremiumVehicle(h.dataset.premiumBuy))}),y.storeList.querySelectorAll("[data-shop-buy]").forEach(h=>{h.addEventListener("click",()=>this.purchaseShopProduct(h.dataset.shopBuy))}),y.storeList.querySelectorAll("[data-restore-premium]").forEach(h=>{h.addEventListener("click",()=>this.restorePremiumPurchases())}),y.storeList.querySelectorAll("[data-premium-reveal-dismiss]").forEach(h=>{h.addEventListener("click",()=>{this.premiumRevealVehicleKey="",this.renderGarage()})}),y.garageUpgrades.querySelectorAll("[data-upgrade]").forEach(h=>{h.addEventListener("click",()=>this.buyUpgrade(h.dataset.upgrade))}),this.setSettingsTab(this.settingsTab),this.renderTuningPanel()}triggerHaptic(e=20){if(!(this.settings.mute||this.settings.haptics===!1))try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(e)}catch{}}applyTrackTheme(){const e=this.currentStage.track;if(this.scene.background.setHex(e.sky),this.scene.fog.color.setHex(e.fog),this.scene.fog.near=e.fogNear??80,this.scene.fog.far=e.fogFar??280,this.ground&&this.ground.material.color.setHex(e.ground),this.roadCenterGlow&&this.roadCenterGlow.material.color.set(e.accent),this.sunBall&&e.sunPosition){const[t,i,n]=e.sunPosition;this.sunBall.position.set(t*1.12,i+18,n-260),this.sunHalo&&this.sunHalo.position.set(...e.sunPosition),this.sunHalo&&this.sunHalo.position.copy(this.sunBall.position)}this.scene&&this.buildSkyline(),this.rebuildRoadGeometry(),this.renderTrackMaps(),this.applyWeatherTheme()}getActiveWeatherPreset(){let e=this.settings.weatherMode||"auto";if(e==="auto"){const t=(this.state.stageIndex??0)+1;e=Bh[t]||"clear"}return mn[e]||mn.clear}applyWeatherTheme(){const e=this.getActiveWeatherPreset();this.activeWeatherPreset=e,this.isWetRoad=e.isWet,e.sky!==void 0&&this.scene.background.setHex(e.sky),e.fog!==void 0&&this.scene.fog.color.setHex(e.fog),e.fogNear!==void 0&&(this.scene.fog.near=e.fogNear),e.fogFar!==void 0&&(this.scene.fog.far=e.fogFar),this.road&&this.road.material&&(this.road.material.roughness=e.roadRoughness,this.road.material.metalness=e.roadMetalness,this.road.material.needsUpdate=!0),this.sunBall&&(this.sunBall.visible=!e.isRain&&!e.isSmog),this.sunHalo&&(this.sunHalo.visible=!e.isRain&&!e.isSmog),this.rainStreaks&&(this.rainStreaks.visible=e.isRain),e.isRain&&this.state.running&&!this.state.paused?this.audio.startRainSound():this.audio.stopRainSound(),y.weatherButtonLabel&&(y.weatherButtonLabel.textContent=this.settings.weatherMode==="auto"?"Auto":e.badge.split(" ")[0]),y.weatherButtonIcon&&(y.weatherButtonIcon.textContent=e.icon),y.weatherSelect&&(y.weatherSelect.value=this.settings.weatherMode||"auto")}cycleWeather(){const e=["auto","clear","monsoon","smog","thunderstorm"],t=this.settings.weatherMode||"auto",i=e[(e.indexOf(t)+1)%e.length];this.setWeatherMode(i)}setWeatherMode(e){this.settings.weatherMode=e,wi(this.settings),this.applyWeatherTheme(),this.syncSettingsUi(),this.showWeatherBanner(this.activeWeatherPreset),this.audio.playRadioTuning()}showWeatherBanner(e){this.weatherBannerTimer&&(clearTimeout(this.weatherBannerTimer),this.weatherBannerTimer=null),y.weatherBanner&&(y.weatherBannerIcon&&(y.weatherBannerIcon.textContent=e.icon),y.weatherBannerBadge&&(y.weatherBannerBadge.textContent=e.badge),y.weatherBannerDesc&&(y.weatherBannerDesc.textContent=e.subtitle),y.weatherBanner.classList.remove("hidden"),requestAnimationFrame(()=>{var t;(t=y.weatherBanner)==null||t.classList.add("is-active")}),this.weatherBannerTimer=setTimeout(()=>{var t;(t=y.weatherBanner)==null||t.classList.remove("is-active"),setTimeout(()=>{var i;return(i=y.weatherBanner)==null?void 0:i.classList.add("hidden")},350),this.weatherBannerTimer=null},2800))}rebuildRoadGeometry(){const e=t=>{const i=Math.max(0,(this.player.position.z-t)/Eh);return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(i))};if(this.road){const t=new et(24,520,16,80);kh(t,e),this.road.geometry.dispose(),this.road.geometry=t,this.road.position.x=0,this.road.rotation.z=0}if(this.roadCenterGlow){const t=new et(6.5,520,8,80);kh(t,e),this.roadCenterGlow.geometry.dispose(),this.roadCenterGlow.geometry=t,this.roadCenterGlow.position.x=0,this.roadCenterGlow.rotation.z=0}}renderTrackMaps(){const e=this.currentStage.track,t=this.currentStage.length>0?this.state.stageProgress/this.currentStage.length*100:0,i=Ih(e,t);y.trackMap&&(y.trackMap.innerHTML=i),y.trackName&&(y.trackName.textContent=e.name),y.trackZone&&(y.trackZone.textContent=`${e.zone} - ${e.difficulty}`),y.overlayTrackMap&&(y.overlayTrackMap.innerHTML=i),y.overlayTrackName&&(y.overlayTrackName.textContent=e.name),y.overlayTrackZone&&(y.overlayTrackZone.textContent=`${e.zone} - ${e.difficulty} - ${e.vibe}`);const n=R_(this.progress.highestStage,this.progress.stageStars);y.careerMap&&(y.careerMap.innerHTML=n),y.overlayCareerMap&&(y.overlayCareerMap.innerHTML=n)}showRaceBanner(e,t,i,n=2.2){y.raceBanner&&(y.raceBannerKicker.textContent=e,y.raceBannerTitle.textContent=t,y.raceBannerSubtitle.textContent=i,y.raceBanner.classList.remove("hidden"),this.state.bannerTimer=n)}triggerImpactFx(){this.audio.playCrash(),y.impactFlash&&(y.impactFlash.classList.remove("hidden"),y.impactFlash.classList.add("active"),window.clearTimeout(this.impactFlashTimer),this.impactFlashTimer=window.setTimeout(()=>{y.impactFlash.classList.remove("active"),y.impactFlash.classList.add("hidden")},170))}setupScene(){const e=new Vf(16772565,6961176,2.2);this.scene.add(e);const t=new _d(16760440,2.6);t.position.set(24,48,16),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=150,t.shadow.camera.left=-38,t.shadow.camera.right=38,t.shadow.camera.top=38,t.shadow.camera.bottom=-38,t.shadow.bias=-4e-4,t.shadow.normalBias=.05,t.shadow.radius=2.5,this.scene.add(t);const i=new O(new $t(9.5,24,24),new De({color:16754740,fog:!1}));i.position.set(-32,55,-420),i.renderOrder=-10,this.scene.add(i),this.sunBall=i;const n=new O(new $t(22,18,18),new De({color:16742195,transparent:!0,opacity:.22,fog:!1}));n.position.copy(i.position),n.renderOrder=-11,this.scene.add(n),this.sunHalo=n;const s=new es().load(f_);s.colorSpace=ft;const r=320,o=Math.PI*.6,l=Math.PI*.8,c=new st(r,r,140,48,1,!0,o,l),h=new O(c,new De({map:s,side:ei,fog:!1,depthWrite:!1}));h.position.set(0,46,-30),h.renderOrder=-20,this.scene.add(h),this.skylineBackdrop=h;const d=new O(new et(360,520),new Y({color:2567717,roughness:.96,metalness:.02}));d.rotation.x=-Math.PI/2,d.position.z=-120,d.receiveShadow=!0,this.scene.add(d),this.ground=d;const u=new O(new et(24,520,16,80),new Y({map:this.getAsphaltTexture(),color:16777215,roughness:.28,metalness:.32}));u.rotation.x=-Math.PI/2,u.position.y=.02,u.position.z=-120,u.receiveShadow=!0,this.scene.add(u),this.road=u;const f=new O(new et(6.5,520,8,80),new De({color:5983016,transparent:!0,opacity:.08}));f.rotation.x=-Math.PI/2,f.position.set(0,.04,-120),f.visible=!1,this.roadCenterGlow=f;const p=new Y({map:this.getCurbTexture(),roughness:.65,metalness:.05}),v=new O(new ee(.75,.22,520),p);v.position.set(-12.35,.11,-120),v.receiveShadow=!0,this.scene.add(v),this.shoulderLeft=v;const g=new O(new ee(.75,.22,520),p);g.position.set(12.35,.11,-120),g.receiveShadow=!0,this.scene.add(g),this.shoulderRight=g,this.skylineGroup=null,this.buildSkyline(),this.player=null,this.createPlayerCar(),this.applyTrackTheme(),this.createRoadMarkers(),this.createRoadGlowMarkers(),this.createFinishLine(),this.createRoadsidePool(),this.createLightPosts(),this.createTrafficPool(),this.createPolicePool(),this.createRoadblockPool(),this.createBossRival(),this.createPoliceRaceLeader(),this.createHelicopterSpotlight(),this.createFuelPool(),this.createHealerPool(),this.createNitroParticlePool(),this.createBackfireSparkPool(),this.createSpeedStreaksPool(),this.createTrafficDustPool(),this.createCoinPool(),this.createDamageFxPool(),this.createRainPool(),this.createTireSprayPool()}buildSkyline(){var i,n;this.skylineGroup&&(this.scene.remove(this.skylineGroup),this.skylineGroup.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(r=>r.dispose()):s.material.dispose())})),this.buildings=[],this.scenicRoadside=[];const e=new We,t=((n=(i=this.currentStage)==null?void 0:i.track)==null?void 0:n.key)??"canal-run";t==="canal-run"?this.buildCanalSkyline(e):t==="liberty-loop"?(this.buildGenericSkyline(e),this.buildLibertyExtras(e)):t==="ring-road-blast"?this.buildRingRoadSkyline(e):t==="mall-road-drift"?(this.buildBankingCanyonSkyline(e),this.addRouteLandmark(e,"MALL ROAD",-1,-140,16478597)):t==="old-city-chase"?this.buildOldCitySkyline(e):t==="fortress-sprint"?this.buildFortressSkyline(e):t==="airport-road-dash"?this.buildAirportSkyline(e):t==="ravi-bridge-run"?this.buildRaviBridgeSkyline(e):(this.buildGenericSkyline(e),this.buildLibertyExtras(e)),this.skylineGroup=e,this.scene.add(e)}createCityBuildingModel({x:e,z:t,width:i,height:n,depth:s}){const r=n>20?Yr.high:Yr.low,o=r[Math.floor(Math.random()*r.length)],l=this.createPropFromPath(o);if(!l)return null;const c=new Nt().setFromObject(l),h=new I;if(c.getSize(h),h.x<=0||h.y<=0||h.z<=0)return null;const d=Math.min(i*1.15/h.x,n/h.y,s*1.15/h.z);l.scale.setScalar(d),l.rotation.y=Math.random()>.5?0:Math.PI;const u=new Nt().setFromObject(l),f=new I;return u.getCenter(f),l.position.set(e-f.x,-u.min.y,t-f.z),l.userData.isRealBuilding=!0,l}spawnBuilding(e,{x:t,z:i,width:n,height:s,depth:r,color:o,windowColor:l,windowOpacity:c=.32,emissiveWindows:h=!1,isHistoric:d=!1}){var M,b;const u=this.createCityBuildingModel({x:t,z:i,width:n,height:s,depth:r});if(u)return e.add(u),this.buildings.push(u),u;const f=((b=(M=this.currentStage)==null?void 0:M.track)==null?void 0:b.key)??"",p=d||f==="old-city-chase"||f==="canal-run"&&Math.random()>.4,g=this.getBuildingFacadeTexture(p?"brick":"glass").clone();g.needsUpdate=!0,g.repeat.set(Math.max(1,Math.round(n/7)),Math.max(1,Math.round(s/5.5)));const m=new Y({map:g,color:16777215,roughness:p?.78:.38,metalness:p?.04:.26}),_=new O(new ee(n,s,r),m);return _.position.set(t,s/2,i),_.castShadow=!0,_.receiveShadow=!0,e.add(_),this.buildings.push(_),_}buildGenericSkyline(e){this.spawnHighwayGantry(e,-65),this.spawnHighwayGantry(e,-210);for(let t=0;t<16;t+=1){const i=10+Math.random()*16,n=10+Math.random()*8,s=10+Math.random()*8;this.spawnBuilding(e,{x:t<8?-38-Math.random()*20:38+Math.random()*20,z:-45-t*20,width:n,height:i,depth:s,color:t%2===0?3494e3:4877708,windowColor:t%2===0?16306284:12969471})}for(let t=0;t<2;t+=1){const i=t%2===0?-1:1,n=-85-t*125,s=22,r=this.createRealBillboard(i,n,t);r.position.set(this.getRoadCenterOffsetAtZ(n)+i*s,0,n),this.registerScenicRoadside(r,i,s,n),e.add(r)}}buildFortressSkyline(e){this.spawnHighwayGantry(e,-55),this.spawnHighwayGantry(e,-195);for(let t=0;t<14;t+=1){const i=12+Math.random()*14,n=t%2===0?-1:1,s=14+Math.random()*8,r=12+Math.random()*6;this.spawnBuilding(e,{x:n*(34+Math.random()*16),z:-40-t*24,width:s,height:i,depth:r,isHistoric:!1})}for(let t=0;t<2;t+=1){const i=t%2===0?-1:1,n=-85-t*125,s=22,r=this.createRealBillboard(i,n,t);r.position.set(this.getRoadCenterOffsetAtZ(n)+i*s,0,n),this.registerScenicRoadside(r,i,s,n),e.add(r)}}buildAirportSkyline(e){this.spawnHighwayGantry(e,-50),this.spawnHighwayGantry(e,-190);for(let t=0;t<10;t+=1){const i=8+Math.random()*10,n=t%2===0?-1:1;this.spawnBuilding(e,{x:n*(38+Math.random()*18),z:-45-t*28,width:18+Math.random()*8,height:i,depth:14+Math.random()*6,isHistoric:!1})}for(let t=0;t<2;t+=1){const i=t%2===0?-1:1,n=-85-t*125,s=22,r=this.createRealBillboard(i,n,t+2);r.position.set(this.getRoadCenterOffsetAtZ(n)+i*s,0,n),this.registerScenicRoadside(r,i,s,n),e.add(r)}}buildRaviBridgeSkyline(e){this.spawnHighwayGantry(e,-70),this.spawnHighwayGantry(e,-220);for(let t=0;t<8;t+=1){const i=10+Math.random()*8,n=t%2===0?-1:1;this.spawnBuilding(e,{x:n*(42+Math.random()*14),z:-50-t*32,width:12+Math.random()*6,height:i,depth:10+Math.random()*6,isHistoric:!0})}for(let t=0;t<2;t+=1){const i=t%2===0?-1:1,n=-85-t*125,s=22,r=this.createRealBillboard(i,n,t+4);r.position.set(this.getRoadCenterOffsetAtZ(n)+i*s,0,n),this.registerScenicRoadside(r,i,s,n),e.add(r)}}buildCanalSkyline(e){for(let n=0;n<8;n+=1){const s=8+Math.random()*7;this.spawnBuilding(e,{x:-36-Math.random()*20,z:-45-n*22,width:9+Math.random()*5,height:s,depth:8+Math.random()*4,color:n%2===0?15258532:13939849,windowColor:16498468,windowOpacity:.42})}for(let n=0;n<5;n+=1){const s=this.createStageProp("canal-run","palm")||this.createPalmTree();s.position.set(34+Math.random()*12,0,-55-n*38),e.add(s)}const t=new O(new et(120,600),new Y({map:this.getSeaTexture(),color:16777215,roughness:.45,metalness:.25,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(58,-.15,-120),e.add(t),this.seaPlane=t;const i=new O(new et(6,110),new De({color:16498468,transparent:!0,opacity:.42}));i.rotation.x=-Math.PI/2,i.position.set(58,-.13,-160),e.add(i),this.addRouteLandmark(e,"CANAL BANK",-1,-95,3462041),this.spawnHighwayGantry(e,-55),this.spawnHighwayGantry(e,-205);for(let n=0;n<2;n+=1){const s=n%2===0?-1:1,r=-85-n*125,o=22,l=this.createRealBillboard(s,r,n);l.position.set(this.getRoadCenterOffsetAtZ(r)+s*o,0,r),this.registerScenicRoadside(l,s,o,r),e.add(l)}}addCopilotDecorations(e,t,i){}createLandmarkSign(e,t=16498468){const i=new We,n=new O(new st(.16,.18,5.5,10),new Y({color:3359061,metalness:.8,roughness:.3}));n.position.set(-2.8,2.75,0),i.add(n);const s=n.clone();s.position.x=2.8,i.add(s);const r=new O(new ee(6.8,1.9,.24),new Y({color:1976635,metalness:.8,roughness:.3}));r.position.y=5.2,i.add(r);const o=new De({map:this.getBillboardTexture(e,"#004a27","#ffffff"),side:Tt}),l=new O(new et(6.6,1.7),o);l.position.set(0,5.2,.14),i.add(l);const c=new O(new et(6.6,1.7),o);return c.position.set(0,5.2,-.14),c.rotation.y=Math.PI,i.add(c),i}addRouteLandmark(e,t,i=1,n=-120,s=16498468){const r=this.createLandmarkSign(t,s),o=18;r.position.set(this.getRoadCenterOffsetAtZ(n)+i*o,0,n),r.rotation.y=i>0?-.25:.25,this.registerScenicRoadside(r,i,o,n),e.add(r)}registerScenicRoadside(e,t,i,n){e.userData.side=t,e.userData.baseOffset=i,e.userData.baseZ=n,e.userData.baseY=e.position.y,e.userData.anchoredX=this.getRoadCenterOffsetAtZ(n)+t*i,this.scenicRoadside.push(e)}createRealBillboard(e,t,i=0){const n=new We,s=new Y({color:3359061,metalness:.85,roughness:.35}),r=new O(new st(.32,.44,15,10),s);r.position.set(-4.5,7.5,0),n.add(r);const o=r.clone();o.position.x=4.5,n.add(o);const l=new O(new ee(12.3,7.1,.24),new Y({color:1976635,metalness:.7,roughness:.4}));l.position.set(0,12.5,0),n.add(l);const c=this.getRealBillboardTexture(i),h=new De({map:c,side:Tt}),d=new O(new et(12,6.75),h);d.position.set(0,12.5,.22),n.add(d);const u=new O(new et(12,6.75),h);u.position.set(0,12.5,-.22),u.rotation.y=Math.PI,n.add(u);for(let f=-4.2;f<=4.2;f+=4.2){const p=new O(new ee(.12,.12,1.4),s);p.position.set(f,16.2,.65),n.add(p);const v=new O(new ee(.5,.25,.35),new De({color:16707722}));v.position.set(f,16.2,1.3),n.add(v)}return n.rotation.y=e<0?.25:-.25,n}spawnHighwayGantry(e,t){var g,m;const i=new We,n=26,s=11.5,r=new Y({color:4674921,metalness:.85,roughness:.28}),o=new O(new st(.36,.46,s,10),r);o.position.set(-n/2,s/2,0),i.add(o);const l=new O(new st(.36,.46,s,10),r);l.position.set(n/2,s/2,0),i.add(l);const c=new O(new ee(n+1.2,.65,.65),r);c.position.set(0,s+.8,0),i.add(c);const h=new O(new ee(n+1.2,.65,.65),r);h.position.set(0,s-3.8,0),i.add(h);const d=new O(new ee(16.4,9.4,.22),new Y({color:1976635,roughness:.8,metalness:.4}));d.position.set(0,s-1.2,0),i.add(d);const u=((m=(g=this.currentStage)==null?void 0:g.track)==null?void 0:m.key)||"mall-road-drift",f=new De({map:this.getHighwaySignTexture(u),side:Tt}),p=new O(new et(16,9),f);p.position.set(0,s-1.2,.2),i.add(p);const v=new O(new et(16,9),f);v.position.set(0,s-1.2,-.2),v.rotation.y=Math.PI,i.add(v);for(const _ of[-6,-2,2,6]){const M=new O(new ee(.12,.12,1.4),r);M.position.set(_,s+1.4,.6),i.add(M);const b=new O(new ee(.7,.3,.45),new De({color:16707722}));b.position.set(_,s+1.4,1.1),i.add(b)}return i.position.set(this.getRoadCenterOffsetAtZ(t),0,t),this.registerScenicRoadside(i,0,0,t),e.add(i),i}buildLibertyExtras(e){this.spawnHighwayGantry(e,-55),this.spawnHighwayGantry(e,-210);for(let t=0;t<2;t+=1){const i=t%2===0?-1:1,n=-85-t*125,s=22,r=this.createRealBillboard(i,n,t);r.position.set(this.getRoadCenterOffsetAtZ(n)+i*s,0,n),this.registerScenicRoadside(r,i,s,n),e.add(r)}}buildBankingCanyonSkyline(e){this.spawnHighwayGantry(e,-55),this.spawnHighwayGantry(e,-200);for(let t=0;t<2;t+=1){const i=t%2===0?-1:1,n=-85-t*125,s=22,r=this.createRealBillboard(i,n,t);r.position.set(this.getRoadCenterOffsetAtZ(n)+i*s,0,n),this.registerScenicRoadside(r,i,s,n),e.add(r)}for(let t=0;t<22;t+=1){const i=t%2===0?"towerA":"towerB",n=this.createStageProp("mall-road-drift",i),s=t<11?-30-Math.random()*20:30+Math.random()*20,r=-40-t%11*24;if(n){const o=new Nt().setFromObject(n),l=new I;o.getSize(l);const c=(32+Math.random()*22)/Math.max(.001,l.y);n.scale.setScalar(c),n.position.set(s,0,r),n.rotation.y=Math.random()*Math.PI*2,e.add(n)}else{const o=32+Math.random()*28,l=10+Math.random()*6,c=10+Math.random()*6;this.spawnBuilding(e,{x:s,z:r,width:l,height:o,depth:c,color:t%3===0?2240833:t%3===1?2901600:3755628,windowColor:10340843,windowOpacity:.55})}}this.addRouteLandmark(e,"GPO MALL ROAD",1,-120,6333946)}buildKorangiExtras(e){}buildIndustrialSkyline(e){for(let t=0;t<14;t+=1){const i=Math.random()>.4,n=i?6+Math.random()*4:14+Math.random()*8,s=i?16+Math.random()*8:8+Math.random()*5,r=i?12+Math.random()*6:8+Math.random()*4,o=t<7?-34-Math.random()*18:34+Math.random()*18,l=-45-t*22;if(this.spawnBuilding(e,{x:o,z:l,width:s,height:n,depth:r,color:6968888,windowColor:16436245,windowOpacity:.25}),!i&&Math.random()>.55){const c=new O(new st(.5,.65,12,10),new Y({color:4142376,roughness:.9}));c.position.set(o+(o>0?-s/4:s/4),n+6,l),c.castShadow=!0,e.add(c);const h=new O(new $t(1.6,8,6),new De({color:7037783,transparent:!0,opacity:.45}));h.position.set(c.position.x,n+14,l),e.add(h)}}}buildOldCitySkyline(e){for(let i=0;i<24;i+=1){const n=6+Math.random()*4,s=6+Math.random()*4,r=8+Math.random()*4,o=[12095066,10908226,13212780,9398845,13935988];this.spawnBuilding(e,{x:i<12?-28-Math.random()*14:28+Math.random()*14,z:-40-i%12*16,width:s,height:n,depth:r,color:o[i%o.length],windowColor:16639626,windowOpacity:.35})}for(let i=0;i<6;i+=1){const n=i%2===0?"chaiCart":"biryaniCart",s=this.createStageProp("old-city-chase",n);s&&(s.position.set((i%2===0?-1:1)*(14+Math.random()*3),0,-25-i*22),s.rotation.y=Math.random()*.4-.2,e.add(s))}const t=this.createStageProp("old-city-chase","oldGate");if(t){const i=new Nt().setFromObject(t),n=new I;i.getSize(n),t.scale.setScalar(8/Math.max(.001,n.y)),t.position.set(0,0,-180),e.add(t)}else this.addRouteLandmark(e,"WALLED CITY",-1,-160,16347926)}buildDhaNightSkyline(e){for(let i=0;i<10;i+=1){const n=8+Math.random()*6;this.spawnBuilding(e,{x:i<5?-34-Math.random()*12:34+Math.random()*12,z:-45-i*22,width:12+Math.random()*6,height:n,depth:12+Math.random()*4,color:2765636,windowColor:3462041,windowOpacity:.62})}for(let i=0;i<14;i+=1){const n=i%2===0?-1:1,s=this.createStageProp("dha-boulevards","palm")||this.createPalmTree();s.position.set(n*(28+Math.random()*5),0,-30-i*18),e.add(s)}const t=this.createStageProp("dha-boulevards","sectorSign");if(t){const i=new Nt().setFromObject(t),n=new I;i.getSize(n),t.scale.setScalar(4/Math.max(.001,n.y)),t.position.set(-18,0,-80),e.add(t)}}buildLyariExtras(e){this.addCopilotDecorations(e,"lyari-expressway",["copilotA"])}buildLyariNeonSkyline(e){const t=new O(new et(28,600),new Y({color:1712691,roughness:.4,metalness:.3,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(-55,-.2,-120),e.add(t);for(let i=0;i<12;i+=1){const n=6+Math.random()*12;this.spawnBuilding(e,{x:-82-Math.random()*14,z:-40-i*24,width:8+Math.random()*5,height:n,depth:8+Math.random()*4,color:1843760,windowColor:[11032055,15485081,440020,16096779][i%4],windowOpacity:.7})}for(let i=0;i<8;i+=1){const n=12+Math.random()*18;this.spawnBuilding(e,{x:36+Math.random()*18,z:-42-i*28,width:10+Math.random()*6,height:n,depth:10+Math.random()*4,color:2304829,windowColor:11032055,windowOpacity:.55})}}buildM9Extras(e){this.addCopilotDecorations(e,"m9-northern-bypass",["copilotA"]);for(let t=0;t<4;t+=1){const i=this.createStageProp("m9-northern-bypass","jerseyWall");i&&(i.position.set((t%2===0?-1:1)*14,0,-50-t*60),i.rotation.y=t%2===0?0:Math.PI,e.add(i))}for(let t=0;t<3;t+=1){const i=this.createStageProp("m9-northern-bypass","sign");i&&(i.position.set(15,0,-60-t*80),e.add(i))}}buildRingRoadSkyline(e){this.buildHighwaySkyline(e),this.addRouteLandmark(e,"RING ROAD",-1,-180,6333946);for(let i=0;i<8;i+=1){const n=-30-i*36,s=13.5,r=this.createStageProp("ring-road-blast","jerseyWall");r&&(r.position.set(this.getRoadCenterOffsetAtZ(n)-s,0,n),this.registerScenicRoadside(r,-1,s,n),e.add(r));const o=this.createStageProp("ring-road-blast","jerseyWall");o&&(o.position.set(this.getRoadCenterOffsetAtZ(n)+s,0,n),o.rotation.y=Math.PI,this.registerScenicRoadside(o,1,s,n),e.add(o))}for(let i=0;i<3;i+=1){const n=-65-i*110;this.spawnHighwayGantry(e,n)}for(let i=0;i<2;i+=1){const n=i%2===0?1:-1,s=-85-i*125,r=22,o=this.createRealBillboard(n,s,i+2);o.position.set(this.getRoadCenterOffsetAtZ(s)+n*r,0,s),this.registerScenicRoadside(o,n,r,s),e.add(o)}for(let i=0;i<2;i+=1){const n=this.createStageProp("ring-road-blast","dhaba");if(n){const s=i%2===0?-1:1,r=-110-i*120,o=22;n.position.set(this.getRoadCenterOffsetAtZ(r)+s*o,0,r),n.rotation.y=s<0?Math.PI*.5:-Math.PI*.5,this.registerScenicRoadside(n,s,o,r),e.add(n)}}for(let i=0;i<6;i+=1){const n=this.createStageProp("ring-road-blast","viaduct");if(n){const s=-25-i*50,r=20;n.position.set(this.getRoadCenterOffsetAtZ(s)+r,4.5,s),this.registerScenicRoadside(n,1,r,s),e.add(n)}}const t=this.createStageProp("ring-road-blast","train");t&&(t.scale.set(12,12,12),t.position.set(this.getRoadCenterOffsetAtZ(-130)+20,7.2,-130),t.rotation.y=-Math.PI/2,this.registerScenicRoadside(t,1,20,-130),e.add(t))}buildHighwaySkyline(e){for(let t=0;t<10;t+=1){const i=4+Math.random()*6;this.spawnBuilding(e,{x:t<5?-55-Math.random()*20:55+Math.random()*20,z:-60-t*36,width:14+Math.random()*6,height:i,depth:12+Math.random()*4,color:4865322,windowColor:16096779,windowOpacity:.18})}this.addRouteLandmark(e,"LAHORE RING ROAD",1,-120,6333946)}buildSeaViewNightSkyline(e){for(let n=0;n<6;n+=1){const s=6+Math.random()*5;this.spawnBuilding(e,{x:-34-Math.random()*16,z:-50-n*26,width:9+Math.random()*4,height:s,depth:8+Math.random()*4,color:1121326,windowColor:[2282478,15485081,11032055,16096779][n%4],windowOpacity:.78})}for(let n=0;n<8;n+=1){const s=this.createStageProp("sea-view-night","palm")||this.createPalmTree();s.position.set(28+Math.random()*12,0,-50-n*28),e.add(s)}const t=new O(new et(120,600),new Y({color:793134,roughness:.35,metalness:.4,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(85,-.15,-120),e.add(t);const i=new O(new et(4,90),new De({color:15134975,transparent:!0,opacity:.4}));i.rotation.x=-Math.PI/2,i.position.set(72,-.13,-160),e.add(i),this.addCopilotDecorations(e,"sea-view-night",["copilotA"])}buildPortSkyline(e){const t=[12131356,1920728,366185,15381256,11032055,15357964];for(let i=0;i<28;i+=1){const n=2+Math.floor(Math.random()*3),s=12,r=i<14?-28-Math.random()*14:28+Math.random()*14,o=-30-i%14*18;for(let l=0;l<n;l+=1){const c=new O(new ee(s,4,6),new Y({color:t[(i+l)%t.length],roughness:.72,metalness:.18}));c.position.set(r,2+l*4.1,o),c.castShadow=!0,c.receiveShadow=!0,e.add(c),this.buildings.push(c)}}this.addRouteLandmark(e,"KARACHI PORT",-1,-150,16096779);for(let i=0;i<4;i+=1){const n=new O(new ee(1.6,32,1.6),new Y({color:3882820,metalness:.3,roughness:.6}));n.position.set((i%2===0?-1:1)*38,16,-90-i*70),n.castShadow=!0,e.add(n);const s=new O(new ee(22,1.2,1),new Y({color:5068128,metalness:.25,roughness:.55}));s.position.set(n.position.x+(i%2===0?8:-8),30,n.position.z),e.add(s)}for(let i=0;i<4;i+=1){const n=this.createStageProp("lahore-port-run","container");n&&(n.position.set((i%2===0?-1:1)*22,0,-40-i*60),n.rotation.y=i*.4,e.add(n))}this.addCopilotDecorations(e,"lahore-port-run",["copilotA"])}createPalmTree(){const e=new We,t=7+Math.random()*3,i=new O(new st(.22,.34,t,8),new Y({color:7031333,roughness:.9}));i.position.y=t/2,i.castShadow=!0,e.add(i);const n=new Y({color:1870418,roughness:.6,side:Tt});for(let s=0;s<5;s+=1){const r=s/5*Math.PI*2+Math.random()*.3,o=new O(new et(.6,3.4),n);o.position.set(Math.cos(r)*1.5,t+.4,Math.sin(r)*1.5),o.rotation.set(-.5,r+Math.PI/2,0),o.castShadow=!0,e.add(o)}return e}createPlayerCar(){var i;this.player&&this.scene.remove(this.player);const e=this.getSelectedLivery(),t=(e==null?void 0:e.color)??this.selectedCar.body;this.player=this.createModelVehicle("player",this.selectedCar.key,this.selectedCar.profile,this.selectedCar.glow)||this.createCar({id:this.selectedCar.id,body:t,roof:this.selectedCar.roof,glow:this.selectedCar.glow,trim:this.selectedCar.trim,headlight:this.selectedCar.headlight,taillight:this.selectedCar.taillight,profile:this.selectedCar.profile}),(i=this.player.userData).baseYaw??(i.baseYaw=0),this.player.position.set(0,.72,10),this.applyCustomizationToCar(this.player,this.selectedCar.key),this.scene.add(this.player),this.attachPlayerDamageVisuals(),this.attachPlayerNitroRig(),this.attachPlayerBackfireRig()}loadGhostData(e){try{const t=localStorage.getItem(`n4s_lahore_ghost_${e}`);return t?JSON.parse(t):null}catch{return null}}createGhostCar(e="hatchback-small"){this.ghostCar&&(this.scene.remove(this.ghostCar),this.ghostCar=null);const t=gt.find(f=>f.key===e)||this.selectedCar,i=this.createCar({id:"ghost",body:3718648,roof:165063,glow:440020,profile:t.profile}),n=new Y({color:3718648,emissive:165063,emissiveIntensity:.65,transparent:!0,opacity:.45,roughness:.2,metalness:.85});i.traverse(f=>{f.isMesh&&f.name!=="ground-shadow"&&(f.material=n)});const s=t.profile||{width:3.2,length:7.2,height:2.2},r=new O(new et(s.width*1.3,s.length*.85),new De({color:440020,transparent:!0,opacity:.6,side:Tt}));r.rotation.x=-Math.PI/2,r.position.y=.05,i.add(r);const o=document.createElement("canvas");o.width=256,o.height=64;const l=o.getContext("2d");l.fillStyle="#0284c7",typeof l.roundRect=="function"?l.roundRect(4,4,248,56,12):l.rect(4,4,248,56),l.fill(),l.strokeStyle="#38bdf8",l.lineWidth=4,l.stroke(),l.fillStyle="#ffffff",l.font="bold 26px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("⚡ GHOST PB",128,34);const c=new Wi(o),h=new et(2.2,.55),d=new De({map:c,transparent:!0,opacity:.92,side:Tt}),u=new O(h,d);return u.position.set(0,(s.height||2.2)+.9,0),i.add(u),i.userData.baseYaw=0,i.position.set(0,.72,10),i}setupGhostForStage(e){if(this.ghostCar&&(this.scene.remove(this.ghostCar),this.ghostCar=null),this.ghostActive=!1,this.ghostData=null,this.ghostPlaybackTime=0,this.progress.ghostEnabled===!1){y.ghostSplitIndicator&&y.ghostSplitIndicator.classList.add("hidden");return}const t=this.loadGhostData(e);t&&Array.isArray(t.trail)&&t.trail.length>5?(this.ghostData=t,this.ghostCar=this.createGhostCar(t.carKey),this.scene.add(this.ghostCar),this.ghostActive=!0,y.ghostSplitIndicator&&(y.ghostSplitIndicator.classList.remove("hidden"),y.ghostSplitText.textContent=`GHOST PB (${t.totalTime}s)`)):y.ghostSplitIndicator&&y.ghostSplitIndicator.classList.add("hidden")}updateGhostPlayback(e){if(!this.ghostActive||!this.ghostCar||!this.ghostData)return;this.ghostPlaybackTime+=e;const t=this.ghostData.trail;if(!t||t.length===0)return;let i=0;for(;i<t.length-1&&t[i+1].t<this.ghostPlaybackTime;)i++;if(i>=t.length-1){const f=t[t.length-1];this.ghostCar.position.x=f.x,this.ghostCar.position.z=f.z,this.ghostCar.rotation.y=f.yaw||0;return}const n=t[i],s=t[i+1],r=s.t-n.t,o=r>0?(this.ghostPlaybackTime-n.t)/r:0,l=oe.clamp(o,0,1),c=oe.lerp(n.x,s.x,l),h=oe.lerp(n.z,s.z,l),d=oe.lerp(n.yaw||0,s.yaw||0,l),u=oe.lerp(n.progress||0,s.progress||0,l);if(this.ghostCar.position.x=c,this.ghostCar.position.z=h,this.ghostCar.rotation.y=d,y.ghostSplitIndicator&&y.ghostSplitText){const f=this.state.stageProgress-u,p=Math.max(10,this.state.speed*.44),v=f/p;v>=0?(y.ghostSplitIndicator.className="ghost-split-indicator ghost-split-ahead",y.ghostSplitText.textContent=`GHOST PB: -${Math.abs(v).toFixed(1)}s (AHEAD)`):(y.ghostSplitIndicator.className="ghost-split-indicator ghost-split-behind",y.ghostSplitText.textContent=`GHOST PB: +${Math.abs(v).toFixed(1)}s (BEHIND)`)}}attachPlayerDamageVisuals(){}createCar({id:e,body:t,roof:i,glow:n,trim:s=1054759,headlight:r=15398655,taillight:o=16557477,profile:l}){const c=new We,h=l,d=h.hoodLength??h.length*.24,u=h.rearLength??h.length*.2,f=h.cabinOffset??0,p=h.wheelRadius??.55,v=h.wheelInset??.44,g=h.height*.62,m=new O(new ee(h.width,g,h.length-.1),new Y({color:t,metalness:.28,roughness:.42}));m.position.y=g*.1,m.castShadow=!0,m.receiveShadow=!0,c.add(m);const _=new O(new ee(h.width*.96,h.height*.28,d),new Y({color:t,metalness:.24,roughness:.38}));_.position.set(0,h.height*.28,h.length*.5-d*.55),_.rotation.x=-.08,_.castShadow=!0,c.add(_);const M=new O(new ee(h.width*.94,h.height*.22,u),new Y({color:t,metalness:.24,roughness:.4}));M.position.set(0,h.height*.24,-h.length*.5+u*.52),M.rotation.x=.06,M.castShadow=!0,c.add(M);const b=new O(new ee(h.cabinWidth,h.cabinHeight,h.cabinLength),new Y({color:i,metalness:.1,roughness:.32}));b.position.y=h.height*.72+h.cabinHeight*.12,b.position.z=f,b.rotation.x=h.roofBias?-h.roofBias*.04:0,b.castShadow=!0,c.add(b);const E=new O(new ee(h.cabinWidth*.82,.08,h.cabinLength*.55),new Y({color:s,metalness:.16,roughness:.3}));E.position.set(0,h.height+h.cabinHeight*.12,f-h.cabinLength*.02),c.add(E);const A=new O(new ee(h.cabinWidth*.96,h.cabinHeight*.76,h.cabinLength*.22),new Y({color:11065599,metalness:.05,roughness:.15,transparent:!0,opacity:.78}));A.position.set(0,h.height*.74+h.cabinHeight*.2,h.cabinLength*.18+f),A.rotation.x=-.42,c.add(A);const P=new O(new ee(h.cabinWidth*.94,h.cabinHeight*.68,h.cabinLength*.18),new Y({color:10013678,metalness:.05,roughness:.16,transparent:!0,opacity:.72}));P.position.set(0,h.height*.74+h.cabinHeight*.16,-h.cabinLength*.18+f),P.rotation.x=.34,c.add(P);const x=new Y({color:10340843,metalness:.04,roughness:.14,transparent:!0,opacity:.7});[-1,1].forEach(J=>{const le=new O(new et(h.cabinLength*.52,h.cabinHeight*.48),x);le.position.set(J*(h.cabinWidth/2+.02),h.height*.78,f-.04),le.rotation.y=J<0?Math.PI/2:-Math.PI/2,c.add(le)});const w=new O(new ee(h.width*.6,h.height*.22,.18),new Y({color:s,metalness:.15,roughness:.4}));w.position.set(0,h.height*.16,h.length*.5-.07),c.add(w);const F=new O(new ee(h.width*.78,h.height*.16,.18),new Y({color:329485,metalness:.12,roughness:.5}));F.position.set(0,.08,h.length*.5-.04),c.add(F);const C=new ee(h.width*.2,.08,.22),N=new Y({color:r,emissive:r,emissiveIntensity:e==="civic"?.75:.45});[-h.width*.29,h.width*.29].forEach(J=>{const le=new O(C,N);le.position.set(J,h.height*.23,h.length*.5-.08),le.rotation.y=J<0?.14:-.14,c.add(le)});const L=new O(new ee(Math.max(1.6,h.width*.55),.15,.7),new Y({color:n,emissive:n,emissiveIntensity:.25}));L.position.set(0,h.height*.58,h.length*.24),c.add(L);const V=new O(new ee(h.width*.98,.1,h.length*.74),new Y({color:s,metalness:.14,roughness:.45}));if(V.position.y=-.02,c.add(V),h.splitter){const J=new O(new ee(h.width*.9,.06,.45),new Y({color:s}));J.position.set(0,-.02,h.length*.5-.18),c.add(J)}if(h.spoiler){const J=new O(new ee(h.width*.54,.06,.48),new Y({color:s,metalness:.15,roughness:.4}));J.position.set(0,h.height*.62,-h.length*.5+.38),c.add(J)}const z=new ee(h.width*.18,.08,.2),G=new Y({color:o,emissive:o,emissiveIntensity:.55});[-h.width*.27,h.width*.27].forEach(J=>{const le=new O(z,G);le.position.set(J,h.height*.18,-h.length*.5+.08),le.rotation.y=J<0?-.14:.14,c.add(le)});const W=new st(p,p,.55,18),se=new Y({color:1120295});return[[-h.width*v,p*.2,h.length*.31],[h.width*v,p*.2,h.length*.31],[-h.width*v,p*.2,-h.length*.31],[h.width*v,p*.2,-h.length*.31]].forEach(([J,le,xe])=>{const ge=new O(W,se);ge.rotation.z=Math.PI/2,ge.position.set(J,le,xe),ge.castShadow=!0,c.add(ge)}),c.userData.baseYaw=0,this.groundVehicleToRoad(c)}createBus(){const e=new We,t=new O(new ee(4.4,2.3,11.8),new Y({color:16436245,metalness:.18,roughness:.48}));t.position.y=1.25,t.castShadow=!0,e.add(t);const i=new O(new ee(4.46,.26,11.9),new Y({color:14427686}));i.position.y=1.15,e.add(i);const n=new O(new ee(3.4,1.15,.18),new Y({color:10344191,transparent:!0,opacity:.72}));n.position.set(0,1.65,5.75),e.add(n);for(let o=0;o<5;o+=1)for(const l of[-1,1]){const c=new O(new et(1.2,.72),new Y({color:10344191,transparent:!0,opacity:.68}));c.position.set(l*2.22,1.78,3.8-o*1.8),c.rotation.y=l<0?Math.PI/2:-Math.PI/2,e.add(c)}const s=new st(.8,.8,.75,18),r=new Y({color:1120295});return[[-1.95,.42,3.9],[1.95,.42,3.9],[-1.95,.42,.25],[1.95,.42,.25],[-1.95,.42,-3.7],[1.95,.42,-3.7]].forEach(([o,l,c])=>{const h=new O(s,r);h.rotation.z=Math.PI/2,h.position.set(o,l,c),h.castShadow=!0,e.add(h)}),this.groundVehicleToRoad(e)}createRickshaw(){const e=new We,t=new O(new ee(3.2,1.35,4.1),new Y({color:1483594,metalness:.12,roughness:.52}));t.position.y=.8,t.castShadow=!0,e.add(t);const i=new O(new ee(2.8,.8,1.9),new Y({color:16436245,metalness:.08,roughness:.44}));i.position.set(0,1.65,-.1),e.add(i);const n=new O(new ee(1.7,1.05,1.4),new Y({color:988970}));n.position.set(0,1.05,1.5),e.add(n);const s=new O(new ee(1.35,.55,.12),new Y({color:11065599,transparent:!0,opacity:.72}));s.position.set(0,1.35,2.08),e.add(s);const r=new st(.5,.5,.36,16),o=new Y({color:1120295});return[[-1.08,.38,-1.1],[1.08,.38,-1.1],[0,.38,1.45]].forEach(([l,c,h])=>{const d=new O(r,o);d.rotation.z=Math.PI/2,d.position.set(l,c,h),d.castShadow=!0,e.add(d)}),this.groundVehicleToRoad(e)}createBike(){const e=new We,t=[14427686,1120295,1920728,1467700,15381256],i=t[Math.floor(Math.random()*t.length)],n=new O(new ee(.36,.34,1.55),new Y({color:2042167,metalness:.55,roughness:.4}));n.position.y=.78,n.castShadow=!0,e.add(n);const s=new O(new ee(.42,.32,.78),new Y({color:i,metalness:.5,roughness:.32}));s.position.set(0,1.05,.18),s.castShadow=!0,e.add(s);const r=new O(new $t(.18,12,8),new Y({color:16708551,emissive:16708551,emissiveIntensity:.7}));r.position.set(0,1,.92),e.add(r);const o=new O(new ee(.78,.06,.08),new Y({color:1120295,metalness:.6,roughness:.3}));o.position.set(0,1.18,.78),e.add(o);const l=new O(new ee(.34,.12,.78),new Y({color:0,roughness:.8}));l.position.set(0,1,-.42),e.add(l);const c=new O(new ee(.28,.08,.46),new Y({color:3621201}));c.position.set(0,1.04,-.95),e.add(c);const h=new O(new ee(.46,.62,.36),new Y({color:1981066,roughness:.6}));h.position.set(0,1.55,-.28),h.castShadow=!0,e.add(h);const d=new O(new $t(.22,12,10),new Y({color:988970,metalness:.4,roughness:.32}));d.position.set(0,2,-.22),e.add(d);const u=new st(.42,.42,.18,18),f=new Y({color:657930,roughness:.8});return[[0,.42,.78],[0,.42,-.86]].forEach(([p,v,g])=>{const m=new O(u,f);m.rotation.z=Math.PI/2,m.position.set(p,v,g),m.castShadow=!0,e.add(m)}),this.groundVehicleToRoad(e)}createWaterTanker(){const e=new We,t=new O(new ee(2.8,2.4,2.6),new Y({color:1920728,metalness:.18,roughness:.5}));t.position.set(0,1.5,4.4),t.castShadow=!0,e.add(t);const i=new O(new ee(2.86,.18,.6),new Y({color:988970}));i.position.set(0,2.78,5.4),e.add(i);const n=new O(new ee(2.2,1.3,.18),new Y({color:10344191,transparent:!0,opacity:.72}));n.position.set(0,2.05,5.55),e.add(n);const s=new O(new ee(2.4,.9,.2),new Y({color:1120295,metalness:.3,roughness:.5}));s.position.set(0,.95,5.65),e.add(s),[-1,1].forEach(f=>{const p=new O(new ee(.5,.32,.16),new Y({color:16708551,emissive:16639626,emissiveIntensity:.6}));p.position.set(f*.95,.7,5.7),e.add(p)});const r=new O(new st(1.55,1.55,7.2,22),new Y({color:15067115,metalness:.45,roughness:.32}));r.rotation.x=Math.PI/2,r.position.set(0,2.3,-.6),r.castShadow=!0,e.add(r),[-4,2.8].forEach(f=>{const p=new O(new st(1.55,1.55,.18,22),new Y({color:12131356,metalness:.3,roughness:.5}));p.rotation.x=Math.PI/2,p.position.set(0,2.3,f),e.add(p)});const o=new O(new ee(.08,2.6,.08),new Y({color:3621201}));o.position.set(1.4,2.3,-3.6),e.add(o);const l=new O(new st(.36,.36,.16,14),new Y({color:7041664,metalness:.5}));l.position.set(0,3.95,-.6),e.add(l);const c=new O(new ee(2.4,.32,8.6),new Y({color:1120295,roughness:.7}));c.position.set(0,.62,.4),e.add(c);const h=new st(.78,.78,.7,18),d=new Y({color:657930,roughness:.85});[[-1.4,.62,4.2],[1.4,.62,4.2],[-1.4,.62,-1],[1.4,.62,-1],[-1.4,.62,-3.2],[1.4,.62,-3.2]].forEach(([f,p,v])=>{const g=new O(h,d);g.rotation.z=Math.PI/2,g.position.set(f,p,v),g.castShadow=!0,e.add(g)});const u=new O(new ee(2.8,.5,.06),new Y({color:2042167}));return u.position.set(0,.42,-3.95),e.add(u),this.groundVehicleToRoad(e)}createPickup(){const e=new We,t=[14427686,366185,2450411,16436245][Math.floor(Math.random()*4)],i=new O(new ee(2.4,1.6,1.8),new Y({color:t,metalness:.2,roughness:.5}));i.position.set(0,1.05,1.5),i.castShadow=!0,e.add(i);const n=new O(new ee(2.32,.16,1.7),new Y({color:1120295}));n.position.set(0,1.93,1.5),e.add(n);const s=new O(new ee(2,.85,.12),new Y({color:11065599,transparent:!0,opacity:.72}));s.position.set(0,1.5,2.42),e.add(s);const r=new O(new ee(2.4,.16,2.6),new Y({color:4937059,roughness:.7}));r.position.set(0,.78,-.85),e.add(r);const o=Math.floor(Math.random()*3)+1;for(let h=0;h<o;h++){const d=new O(new ee(2.1,.5,2.2),new Y({color:10576391,roughness:.85}));d.position.set(0,1.05+h*.52,-.85),d.castShadow=!0,e.add(d)}const l=new st(.5,.5,.36,16),c=new Y({color:657930,roughness:.8});return[[-1.1,.5,1.5],[1.1,.5,1.5],[-1.1,.5,-1.5],[1.1,.5,-1.5]].forEach(([h,d,u])=>{const f=new O(l,c);f.rotation.z=Math.PI/2,f.position.set(h,d,u),f.castShadow=!0,e.add(f)}),this.groundVehicleToRoad(e)}createRoadMarkers(){const e=new ee(.38,.04,7),t=new Y({color:16317180});for(let i=0;i<2;i+=1){const n=i===0?-4.1:4.1;for(let s=0;s<26;s+=1){const r=new O(e,t);r.position.set(n,.05,-s*20),r.userData.laneX=n,r.receiveShadow=!0,this.roadMarkers.push(r),this.scene.add(r)}}}createRoadGlowMarkers(){const e=new De({color:16753472,transparent:!0,opacity:.18});for(let t=0;t<2;t+=1){const i=t===0?-4.1:4.1;for(let n=0;n<18;n+=1){const s=new O(new et(.9,9),e);s.rotation.x=-Math.PI/2,s.position.set(i,.03,-n*28),s.userData.laneX=i,s.visible=!1,this.roadGlows.push(s)}}}createFinishLine(){this.finishLine=new We;const e=new De({color:16317180}),t=new De({color:1120295});for(let o=0;o<5;o+=1)for(let l=0;l<6;l+=1){const c=new O(new et(4,2.4),(o+l)%2===0?e:t);c.rotation.x=-Math.PI/2,c.position.set(-10+l*4,.07,-o*2.45),this.finishLine.add(c)}const i=new Y({color:15067115}),n=new O(new st(.14,.16,7.5,10),i);n.position.set(-10.8,3.8,-5),this.finishLine.add(n);const s=new O(new st(.14,.16,7.5,10),i);s.position.set(10.8,3.8,-5),this.finishLine.add(s);const r=new O(new ee(22.4,1.5,.2),new Y({color:16096779,emissive:10105874,emissiveIntensity:.3}));r.position.set(0,7.2,-5),this.finishLine.add(r),this.scene.add(this.finishLine),this.resetFinishLine()}resetFinishLine(){this.finishLine&&(this.finishLine.visible=!1,this.finishLine.position.set(0,0,-240))}createRoadsidePool(){for(let e=0;e<34;e+=1){const t=Math.random(),i=t>.45?this.createTree():t>.22?this.createMedianBarrier():t>.08?this.createBusStop():this.createSign(),n=Math.random()>.5?-1:1,s=18+Math.random()*18,r=-25-e*16,o=this.getRoadCenterOffsetAtZ(r)+n*s;i.position.set(o,0,r),i.userData.side=n,i.userData.baseOffset=s,i.userData.anchoredX=o,this.roadside.push(i),this.scene.add(i)}}createBusStop(){const e=new We,t=new O(new ee(4.4,.16,1.8),new Y({color:1920728}));t.position.y=3.15,e.add(t);for(const n of[-1.8,1.8]){const s=new O(new st(.12,.12,3.1,8),new Y({color:9741240}));s.position.set(n,1.55,0),e.add(s)}const i=new O(new ee(2.2,.18,.55),new Y({color:8138002}));return i.position.set(0,.95,0),e.add(i),e}createMedianBarrier(){const e=new We,t=new O(new ee(3.8,.7,.9),new Y({color:15381256}));t.position.y=.35,e.add(t);const i=new O(new ee(3.82,.16,.92),new Y({color:2042167}));return i.position.y=.38,e.add(i),e}createLightPosts(){for(let e=0;e<18;e+=1){const t=e%2===0?-1:1,i=new We,n=new O(new st(.1,.12,6.5,8),new Y({color:7041664}));n.position.y=3.25,i.add(n);const s=new O(new ee(1.4,.12,.12),new Y({color:7041664}));s.position.set(t*-.6,6.2,0),i.add(s);const r=new O(new $t(.24,10,10),new De({color:16769947}));r.position.set(t*-1.2,6.1,0),i.add(r);const o=-40-e*26,l=this.getRoadCenterOffsetAtZ(o)+t*15.8;i.position.set(l,0,o),i.userData.side=t,i.userData.baseOffset=15.8,i.userData.anchoredX=l,this.lightPosts.push(i),this.scene.add(i)}}resetRoadsideAnchors(){this.roadside.forEach((e,t)=>{const i=e.userData.side||(t%2===0?-1:1),n=e.userData.baseOffset||18+Math.random()*18,s=-25-t*16,r=this.getRoadCenterOffsetAtZ(s)+i*n;e.position.set(r,0,s),e.userData.side=i,e.userData.baseOffset=n,e.userData.anchoredX=r}),this.lightPosts.forEach((e,t)=>{const i=e.userData.side||(t%2===0?-1:1),n=e.userData.baseOffset||15.8,s=-40-t*26,r=this.getRoadCenterOffsetAtZ(s)+i*n;e.position.set(r,0,s),e.userData.side=i,e.userData.baseOffset=n,e.userData.anchoredX=r}),this.scenicRoadside.forEach(e=>{const t=e.userData.side||1,i=e.userData.baseOffset||18,n=e.userData.baseZ||-120,s=this.getRoadCenterOffsetAtZ(n)+t*i,r=e.userData.baseY??e.position.y??0;e.position.set(s,r,n),e.userData.anchoredX=s})}createTree(){const e=new We,t=new O(new st(.35,.45,2.8,10),new Y({color:8145437}));t.position.y=1.3,t.castShadow=!0,e.add(t);const i=new Y({color:1870418});return[[0,3.9,0,1.7],[-.9,3.25,.25,1.25],[.85,3.25,-.15,1.25]].forEach(([n,s,r,o])=>{const l=new O(new $t(o,14,14),i);l.position.set(n,s,r),l.castShadow=!0,e.add(l)}),e}createSign(){const e=new We,t=new Y({color:4674921,metalness:.82,roughness:.3}),i=new O(new st(.14,.16,6.5,10),t);i.position.y=3.25,i.castShadow=!0,e.add(i);const n=new O(new ee(3.6,2.2,.16),new De({color:18983}));n.position.y=5.2,n.castShadow=!0,e.add(n);const s=this.makeTextTexture(uh[Math.floor(Math.random()*uh.length)]),r=new De({map:s,side:Tt}),o=new O(new et(3.4,2),r);o.position.set(0,5.2,.1),e.add(o);const l=new O(new et(3.4,2),r);return l.position.set(0,5.2,-.1),l.rotation.y=Math.PI,e.add(l),e}makeTextTexture(e){const t=document.createElement("canvas");t.width=512,t.height=256;const i=t.getContext("2d");i.fillStyle="#004a27",i.fillRect(0,0,512,256),i.strokeStyle="#ffffff",i.lineWidth=10,i.strokeRect(12,12,488,232),i.strokeStyle="rgba(255, 255, 255, 0.4)",i.lineWidth=2,i.strokeRect(22,22,468,212),i.fillStyle="#ffffff",i.font='bold 50px "Trebuchet MS", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(e,256,95);const n={"CANAL ROAD":"کینال روڈ لاہور",LIBERTY:"لبرٹی گول چکر",GULBERG:"مین بلیوارڈ گلبرگ","MALL ROAD":"شاہراہِ قائد اعظم","RING ROAD":"لاہور رنگ روڈ","WALLED CITY":"اندرونِ لاہور","FOOD STREET":"فورٹ روڈ فوڈ سٹریٹ",LAHORE:"زندہ دلانِ لاہور"};i.fillStyle="#fde047",i.font='bold 36px "Trebuchet MS", sans-serif',i.fillText(n[e]||"نیشنل ہائی وے",256,172);const s=new Wi(t);return s.colorSpace=ft,s.needsUpdate=!0,s}makePoliceDecalTexture(e="POLICE"){const t=document.createElement("canvas");t.width=512,t.height=192;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle="rgba(255,255,255,0.94)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#0f172a",i.font="900 78px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e,t.width/2,t.height/2),i.fillStyle="#2563eb",i.fillRect(28,28,88,24),i.fillStyle="#ef4444",i.fillRect(t.width-116,t.height-52,88,24);const n=new Wi(t);return n.needsUpdate=!0,n}enhancePoliceVehicle(e,{raceLeader:t=!1}={}){const i=!!e.userData.modelVehicle;if(!i){const s=new O(new et(2.2,.82),new De({map:this.makePoliceDecalTexture(t?"INTERCEPTOR":"POLICE"),transparent:!0,side:Tt}));s.name="police-roof-decal",s.rotation.x=-Math.PI/2,s.position.set(0,1.58,-.12),e.add(s);const r=this.makePoliceDecalTexture("POLICE");for(const o of[-1,1]){const l=new O(new ee(.06,.5,2.9),new De({color:988970}));l.name="police-side-stripe",l.position.set(o*1.82,.88,.05),e.add(l);const c=new O(new et(1.65,.55),new De({map:r,transparent:!0,side:Tt}));c.name="police-side-decal",c.rotation.y=o>0?Math.PI/2:-Math.PI/2,c.position.set(o*1.86,1.18,-.1),e.add(c)}}const n=new We;if(n.name="police-lightbar",n.position.set(0,i?1.55:1.74,i?-.1:-.25),!i){const s=new O(new ee(1.35,.1,.28),new De({color:988970}));n.add(s);const r=[new Y({color:2450411,emissive:2450411,emissiveIntensity:1.9}),new Y({color:15680580,emissive:15680580,emissiveIntensity:1.9})];for(const[o,l]of[-.35,.35].entries()){const c=new O(new ee(.38,.18,.3),r[o]);c.position.x=l,n.add(c)}}for(const[s,r]of[-.35,.35].entries()){const o=new gn(s===0?2450411:15680580,t?2:1.5,12);o.position.set(r,.35,0),n.add(o)}e.add(n)}createTrafficPool(){var e,t,i;for(let n=0;n<Pd;n+=1){const s=Jo[n%Jo.length];let r;if(ja.includes(s)){const h=Xy[s],d=gt.find(u=>u.key===h)||gt[2];r=this.createModelVehicle("traffic",s,ii[s]||d.profile,d.glow)||this.createCar({id:d.key,body:d.body,roof:d.roof,glow:d.glow,trim:d.trim,headlight:d.headlight,taillight:d.taillight,profile:ii[s]||d.profile})}else if(s==="bus")r=this.createModelVehicle("traffic","bus",ii.bus,16436245)||this.createBus();else if(s==="metrobus")r=this.createModelVehicle("traffic","metrobus",ii.metrobus,14427686)||this.createBus();else if(s==="rickshaw")r=this.createModelVehicle("traffic","rickshaw",ii.rickshaw,1483594)||this.createRickshaw();else if(s==="bike")r=this.createModelVehicle("traffic","bike",ii.bike,14427686)||this.createBike();else if(s==="tanker")r=this.createModelVehicle("traffic","tanker",ii.tanker,15067115)||this.createWaterTanker();else if(s==="pickup")r=this.createModelVehicle("traffic","pickup",ii.pickup,14427686)||this.createPickup();else if(["taxi","van","delivery","ambulance","garbage","firetruck"].includes(s)){const h=s==="taxi"?gt[2]:s==="ambulance"||s==="delivery"||s==="garbage"||s==="firetruck"?gt[6]:gt[4];r=this.createModelVehicle("traffic",s,ii[s],h.glow)||this.createCar({id:h.key,body:s==="taxi"?16436245:s==="ambulance"?16317180:h.body,roof:h.roof,glow:h.glow,trim:h.trim,headlight:h.headlight,taillight:h.taillight,profile:ii[s]||h.profile})}else if(s==="truck"){const h=gt[6];r=this.createModelVehicle("traffic","truck",h.profile,h.glow)||this.createCar({id:h.key,body:h.body,roof:h.roof,glow:h.glow,trim:h.trim,headlight:h.headlight,taillight:h.taillight,profile:h.profile})}else{const h=s==="hatchback"?gt[1]:s==="sedan"?gt[2]:s==="suv"?gt[4]:gt[5];r=this.createModelVehicle("traffic",s,h.profile,h.glow)||this.createCar({id:h.key,body:h.body,roof:h.roof,glow:h.glow,trim:h.trim,headlight:h.headlight,taillight:h.taillight,profile:h.profile})}this.hideGroundShadow(r),r.visible=!1;const o=s==="bike"?78:["tanker","truck","delivery","garbage","firetruck"].includes(s)?46:s==="van"||s==="ambulance"?58:60,l=!!r.userData.modelVehicle,c=ii[s]||((e=gt.find(h=>h.key===s))==null?void 0:e.profile)||{width:3.2,length:6};r.userData={active:!1,speed:o,lane:0,laneTarget:0,changeCooldown:0,type:s,modelVehicle:l,collisionX:Math.max(1.35,(c.width||3.2)*.5+(((t=this.selectedCar.profile)==null?void 0:t.width)||3.2)*.38),collisionZ:Math.max(4.4,(c.length||6)*.52+(((i=this.selectedCar.profile)==null?void 0:i.length)||6)*.36)},this.traffic.push(r),this.scene.add(r)}}createDolphinForceBike(){const e=new We,t=new O(new ee(.42,.38,1.75),new Y({color:592139,metalness:.72,roughness:.28}));t.position.y=.78,t.castShadow=!0,e.add(t);const i=new O(new st(.065,.085,1.25,8),new Y({color:13948120,metalness:.9,roughness:.1}));i.rotation.x=Math.PI/2,i.position.set(.24,.42,-.4),e.add(i);const n=new O(new ee(.48,.38,.86),new Y({color:16317180,metalness:.45,roughness:.28}));n.position.set(0,1.06,.22),n.castShadow=!0,e.add(n);const s=new O(new ee(.5,.12,.88),new Y({color:14427686,emissive:10033947,emissiveIntensity:.35}));s.position.set(0,1.08,.22),e.add(s);const r=new O(new $t(.22,12,8),new Y({color:3718648,emissive:3718648,emissiveIntensity:1.3}));r.position.set(0,1.02,.98),e.add(r);const o=new $i(1.8,14,16,1,!0),l=new De({color:3718648,transparent:!0,opacity:.22,side:Tt,depthWrite:!1}),c=new O(o,l);c.rotation.x=-Math.PI/2,c.position.set(0,.95,7.8),e.add(c),e.userData.headlightBeam=c;const h=new O(new ee(.88,.06,.08),new Y({color:2565930,metalness:.8,roughness:.2}));h.position.set(0,1.22,.8),e.add(h);const d=new O(new ee(.38,.14,1.15),new Y({color:592139,roughness:.9}));d.position.set(0,1.02,-.32),e.add(d);const u=new O(new ee(.46,.64,.38),new Y({color:592139,roughness:.65}));u.position.set(0,1.55,-.05),u.rotation.x=.24,u.castShadow=!0,e.add(u);const f=new O(new $t(.22,12,10),new Y({color:14427686,metalness:.35,roughness:.3}));f.position.set(0,1.95,.08),e.add(f);const p=new O(new ee(.24,.06,.12),new De({color:3718648}));p.position.set(0,1.98,.26),e.add(p);const v=new O(new ee(.44,.62,.36),new Y({color:1579035,roughness:.6}));v.position.set(0,1.58,-.62),v.rotation.y=.22,v.castShadow=!0,e.add(v);const g=new O(new $t(.21,12,10),new Y({color:14427686,roughness:.35}));g.position.set(0,1.98,-.62),e.add(g);const m=new We;m.position.set(-.25,1.62,-.55);const _=new O(new st(.06,.08,.85,8),new Y({color:1579035,roughness:.6}));_.rotation.z=-Math.PI/2.6,_.position.set(-.35,0,.12),m.add(_);const M=new O(new ee(.18,.18,.18),new Y({color:15680580,emissive:15680580,emissiveIntensity:.7}));M.position.set(-.8,.08,.18),m.add(M);const b=new O(new ee(.16,.28,.03),new De({color:3718648}));b.position.set(-.85,.26,.18),m.add(b),e.add(m),e.userData.armPivot=m,e.userData.snatcherArm=m,e.userData.targetPhone=b;const E=new We,A=new De({color:3359061,transparent:!0,opacity:.36,depthWrite:!1}),P=[];for(let z=0;z<4;z++){const G=new O(new $t(.15+z*.09,6,5),A);G.position.set(.24+(Math.random()-.5)*.1,.42+z*.14,-.9-z*.6),E.add(G),P.push(G)}e.add(E),e.userData.smokePuffs=P;const x=new st(.48,.48,.2,16),w=new Y({color:592139,roughness:.9}),F=new O(x,w);F.rotation.z=Math.PI/2,F.position.set(0,.48,.9),F.castShadow=!0,e.add(F);const C=new O(x,w);C.rotation.z=Math.PI/2,C.position.set(0,.48,-.75),C.castShadow=!0,e.add(C);const N=new gn(15680580,2.6,13);N.position.set(0,1.45,0),e.add(N);const L=new O(new et(1.25,2.65),new De({color:3718648,transparent:!0,opacity:.34}));L.rotation.x=-Math.PI/2,L.position.y=.05,e.add(L);const V=new O(new _l(.42),new De({color:3718648,wireframe:!0}));return V.position.set(0,2.75,-.3),e.add(V),e.userData={...e.userData,isSnatcherBike:!0,isSnatcher:!0,isDolphin:!0,unitType:"snatcher",behavior:"chase",baseYaw:0},e}createPoliceVigoCruiser(){var c;const e=ii.police||{width:2.2,length:5,height:1.8};let t=this.createModelVehicle("police","police",e,15680580)||this.createCar({id:"police",body:15068404,roof:988970,glow:15680580,trim:988970,headlight:15398655,taillight:16478597,profile:e});const i=!!((c=t.userData)!=null&&c.modelVehicle);this.enhancePoliceVehicle(t);const n=new We;n.position.set(0,1.95,.1);const s=new O(new ee(.65,.18,.28),new De({color:15680580}));s.position.x=-.38,n.add(s);const r=new O(new ee(.65,.18,.28),new De({color:3900150}));r.position.x=.38,n.add(r);const o=new gn(15680580,3,15);o.position.set(-.55,.28,0),n.add(o);const l=new gn(3900150,3,15);return l.position.set(.55,.28,0),n.add(l),t.add(n),t.userData={...t.userData,isPoliceVigo:!0,isSnatcher:!1,unitType:"police",behavior:"chase",modelVehicle:i,baseYaw:Math.PI,redPod:s,bluePod:r,redStrobe:o,blueStrobe:l},t}createPolicePool(){for(let e=0;e<3;e+=1){const t=this.createDolphinForceBike();this.hideGroundShadow(t),t.visible=!1,Object.assign(t.userData,{active:!1,aggression:1.05,behavior:"chase",isSnatcher:!0,isDolphin:!0,unitType:"snatcher"}),this.police.push(t),this.scene.add(t)}for(let e=0;e<3;e+=1){const t=this.createPoliceVigoCruiser();this.hideGroundShadow(t),t.visible=!1,Object.assign(t.userData,{active:!1,aggression:1.15,behavior:"chase",isSnatcher:!1,isPoliceVigo:!0,unitType:"police"}),this.police.push(t),this.scene.add(t)}}createRoadblockPool(){for(let e=0;e<4;e+=1){const t=new We,i=new O(new ee(5.6,.65,1),new Y({color:16317180,roughness:.62}));i.position.y=.34,t.add(i);const n=new O(new ee(5.65,.18,1.04),new De({color:15680580}));n.position.y=.56,t.add(n);for(const r of[-2.4,2.4]){const o=new O(new $i(.42,1.25,12),new Y({color:16347926,roughness:.7}));o.position.set(r,.72,-.95),t.add(o)}const s=new gn(15680580,1.4,10);s.position.set(0,1.4,0),t.add(s),t.visible=!1,t.userData={active:!1,lane:1,type:"roadblock",kind:"roadblock"},this.roadblocks.push(t),this.scene.add(t)}}createBossRival(){const e=Kr[0],i=(Ji[1]||gt[3]).profile||{width:3.48,length:6.58,height:1.05};this.rivalBoss=this.createModelVehicle("player","sports",i,15680580)||this.createModelVehicle("player","sedan-sport",i,15680580)||this.createModelVehicle("traffic","sedan",i,15680580)||this.createCar({id:"rival-boss",body:15680580,roof:1579035,glow:15680580,trim:1120295,headlight:16772565,taillight:16007006,profile:i}),this.rivalBoss&&(this.hideGroundShadow(this.rivalBoss),this.rivalBoss.visible=!1,this.rivalBoss.userData={active:!1,name:e.name,car:e.car,taunt:e.taunt,lane:1},this.scene.add(this.rivalBoss))}createPoliceRaceLeader(){var t;const e=ii.police||{width:2.2,length:5,height:1.8};this.policeRaceLeader=this.createModelVehicle("police","police",e,3900150)||this.createCar({id:"police-race-leader",body:15068404,roof:988970,glow:3900150,trim:988970,headlight:15398655,taillight:16478597,profile:e}),this.hideGroundShadow(this.policeRaceLeader),this.policeRaceLeader.visible=!1,this.policeRaceLeader.userData={...this.policeRaceLeader.userData,active:!1,lane:1,baseYaw:0,modelVehicle:!!((t=this.policeRaceLeader.userData)!=null&&t.modelVehicle)},this.enhancePoliceVehicle(this.policeRaceLeader,{raceLeader:!0}),this.scene.add(this.policeRaceLeader)}createHelicopterSpotlight(){this.helicopterGroup=new We;const e=new O(new ee(3.6,.8,1.4),new Y({color:1120295,roughness:.45}));this.helicopterGroup.add(e);const t=new O(new ee(7.2,.08,.18),new De({color:15067115,transparent:!0,opacity:.68}));t.position.y=.68,t.name="helicopter-rotor",this.helicopterGroup.add(t);const i=new yd(16710083,4.2,95,.36,.65,1);i.position.set(0,0,0),i.target=this.player||new bt,this.helicopterGroup.add(i),this.helicopterSpotlight=i,this.helicopterGroup.position.set(0,28,-34),this.helicopterGroup.visible=!1,this.scene.add(this.helicopterGroup)}hideGroundShadow(e){e!=null&&e.traverse&&e.traverse(t=>{t.name==="ground-shadow"&&(t.visible=!1)})}createFuelPool(){for(let e=0;e<5;e+=1){const t=new We,i=new O(new ee(1.55,1.65,.9),new Y({color:16436245,emissive:16096779,emissiveIntensity:.45}));i.name="fuel-body",i.castShadow=!0,t.add(i);const n=new O(new ee(.62,.32,.5),new Y({color:16708551,emissive:16436245,emissiveIntensity:.35}));n.position.set(.25,.98,0),t.add(n);const s=new O(new Xa(.82,.08,8,28),new De({color:3718648,transparent:!0,opacity:.88}));s.name="fuel-beacon",s.rotation.x=Math.PI/2,s.position.y=1.25,t.add(s),t.visible=!1,t.userData={active:!1,lane:0},this.fuelCans.push(t),this.scene.add(t)}}createHealerPool(){for(let e=0;e<3;e+=1){const t=new We,i=new O(new Xa(.72,.2,10,24),new Y({color:2278750,emissive:1483594,emissiveIntensity:.45}));i.rotation.x=Math.PI/2,i.castShadow=!0,t.add(i);const n=new Y({color:16317180,emissive:16777215,emissiveIntensity:.15}),s=new O(new ee(.26,1,.26),n);s.castShadow=!0,t.add(s);const r=new O(new ee(1,.26,.26),n);r.castShadow=!0,t.add(r),t.visible=!1,t.userData={active:!1,lane:0},this.healers.push(t),this.scene.add(t)}}createTrafficDustPool(){this.trafficDust=[];const e=new $t(.6,6,5),t=[10913896,12888198,9204048,12097910];for(let i=0;i<36;i+=1){const n=new De({color:t[i%t.length],transparent:!0,opacity:0}),s=new O(e,n);s.visible=!1,s.userData={age:0,life:0,vx:0,vy:0,vz:0},this.trafficDust.push(s),this.scene.add(s)}this.trafficDustSpawnTimers=new WeakMap}updateTrafficDust(e){var i;if(!this.trafficDust||!this.traffic)return;const t=new Set(["tanker","truck","pickup","dumper"]);for(const n of this.traffic){if(!((i=n.userData)!=null&&i.active)||!t.has(n.userData.type)||n.position.z>20||n.position.z<-200)continue;let s=(this.trafficDustSpawnTimers.get(n)||0)+e;for(;s>=.2;){s-=.2;const r=this.trafficDust.find(c=>!c.visible);if(!r)break;const o=Math.random()>.5?-1:1,l=n.userData.type==="tanker"?5:n.userData.type==="truck"?4:2;r.position.set(n.position.x+o*1.2+(Math.random()-.5)*.5,.4+Math.random()*.5,n.position.z+l),r.userData.life=.9+Math.random()*.5,r.userData.age=0,r.userData.vx=(Math.random()-.5)*2.5,r.userData.vy=.4+Math.random()*.5,r.userData.vz=-2+Math.random()*1,r.scale.setScalar(.7+Math.random()*.5),r.material.opacity=.55,r.visible=!0}this.trafficDustSpawnTimers.set(n,s)}for(const n of this.trafficDust){if(!n.visible)continue;if(n.userData.age+=e,n.userData.age>=n.userData.life){n.visible=!1,n.material.opacity=0;continue}const s=n.userData.age/n.userData.life;n.position.x+=n.userData.vx*e,n.position.y+=n.userData.vy*e,n.position.z+=n.userData.vz*e,n.userData.vy*=.94,n.scale.setScalar((.7+Math.random()*.1)*(1+s*1.8)),n.material.opacity=.55*(1-s)}}createCoinPool(){this.coins=[];const e=new st(.55,.55,.12,18),t=new Y({color:16498468,emissive:16096779,emissiveIntensity:.7,metalness:.6,roughness:.32});for(let i=0;i<8;i+=1){const n=new O(e,t.clone());n.rotation.x=Math.PI/2,n.visible=!1,n.userData={active:!1,value:50,spinPhase:Math.random()*Math.PI*2},this.coins.push(n),this.scene.add(n)}this.coinSpawnAcc=0}spawnCoin(){const e=this.coins.find(i=>!i.userData.active);if(!e)return;const t=Math.floor(Math.random()*3)-1;e.position.set(t*4.2,1.6,-260),e.userData.active=!0,e.userData.value=50+Math.floor(Math.random()*4)*25,e.visible=!0}updateCoins(e){if(this.coins){this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.coinSpawnAcc+=e,this.coinSpawnAcc>2.5+Math.random()*1.5&&(this.coinSpawnAcc=0,this.spawnCoin()));for(const t of this.coins){if(!t.userData.active)continue;if(t.userData.spinPhase+=e*4,t.rotation.y=t.userData.spinPhase,t.position.z+=this.state.speed*e*Rn*16+.55,t.position.z>24){t.userData.active=!1,t.visible=!1;continue}const i=Math.abs(t.position.x-this.player.position.x),n=Math.abs(t.position.z-this.player.position.z);if(i<2.4&&n<2.8){t.userData.active=!1,t.visible=!1;const s=t.userData.value;this.state.score+=s,this.progress&&(this.progress.credits=(this.progress.credits||0)+Math.floor(s/5)),y.tip.textContent=`Coin grabbed! +${s} score`,this.audio.tone(1100,.08,"sine",.04),this.audio.tone(1500,.06,"sine",.03)}}}}createDamageFxPool(){this.damageFx=[];const e=new $t(.16,6,5);for(let t=0;t<32;t+=1){const i=new O(e,new De({color:t%2?16347926:16708551,transparent:!0,opacity:0}));i.visible=!1,i.userData={active:!1,age:0,life:0,vx:0,vy:0,vz:0},this.damageFx.push(i),this.scene.add(i)}}spawnImpactSparks(e=1){if(!this.damageFx||!this.player)return;const t=Math.min(this.damageFx.length,Math.round(8+e*12));for(let i=0;i<t;i+=1){const n=this.damageFx.find(s=>!s.userData.active);if(!n)break;n.visible=!0,n.userData.active=!0,n.userData.age=0,n.userData.life=.35+Math.random()*.28,n.userData.vx=(Math.random()-.5)*(8+e*6),n.userData.vy=2+Math.random()*4,n.userData.vz=-2-Math.random()*(6+e*3),n.position.set(this.player.position.x+(Math.random()-.5)*2.2,this.player.position.y+.8+Math.random()*.5,this.player.position.z-.6+Math.random()*1.2),n.material.opacity=.95}}updateDamageFx(e){if(this.damageFx)for(const t of this.damageFx){if(!t.userData.active)continue;t.userData.age+=e;const i=t.userData.age/t.userData.life;if(i>=1){t.userData.active=!1,t.visible=!1,t.material.opacity=0;continue}t.position.x+=t.userData.vx*e,t.position.y+=t.userData.vy*e,t.position.z+=t.userData.vz*e,t.userData.vy-=e*8,t.material.opacity=1-i}}updatePlayerDamageVisuals(){}attachPlayerNitroRig(){var u,f;if(!this.player)return;const e=this.player.getObjectByName("player-nitro-rig");e&&this.player.remove(e);const t=new We;t.name="player-nitro-rig";const i=new Nt().setFromObject(this.player),n=i.max.z>.5?i.max.z-this.player.position.z:2.45,s=(((f=(u=this.selectedCar)==null?void 0:u.profile)==null?void 0:f.width)||2.4)*.24;this.nitroFlames=[];const r=new $i(.08,1.35,12);r.translate(0,.675,0),r.rotateX(-Math.PI/2);const o=new $i(.19,2.4,14);o.translate(0,1.2,0),o.rotateX(-Math.PI/2);const l=new $i(.32,3.4,14);l.translate(0,1.7,0),l.rotateX(-Math.PI/2);const c=new qa(.08,.16,16);[-Math.max(.46,s),Math.max(.46,s)].forEach(p=>{const v=new We;v.position.set(p,-.32,n);const g=new De({color:165063,transparent:!0,opacity:.38,blending:ni,depthWrite:!1}),m=new O(l,g);v.add(m);const _=new De({color:3718648,transparent:!0,opacity:.78,blending:ni,depthWrite:!1}),M=new O(o,_);v.add(M);const b=new De({color:16777215,transparent:!0,opacity:.96,blending:ni,depthWrite:!1}),E=new O(r,b);v.add(E);const A=new De({color:6809849,transparent:!0,opacity:.85,blending:ni,side:Tt,depthWrite:!1}),P=new O(c,A);P.position.z=.02,v.add(P),t.add(v),this.nitroFlames.push({jetGroup:v,core:E,outer:M,plume:m,ring:P})});const d=new gn(61695,0,14,1.8);d.position.set(0,-.15,n+.8),t.add(d),this.nitroLight=d,t.visible=!1,this.nitroRig=t,this.player.add(t)}createNitroParticlePool(){this.nitroParticles=[];const e=new Rt,t=new Float32Array(48*3);for(let n=0;n<48*3;n+=3)t[n]=0,t[n+1]=-100,t[n+2]=0;e.setAttribute("position",new kt(t,3));const i=new Vs({color:3718648,size:.16,transparent:!0,opacity:.85,blending:ni,depthWrite:!1});this.nitroSparks=new Na(e,i),this.nitroSparks.visible=!1,this.scene.add(this.nitroSparks),this.sparkData=Array.from({length:48},()=>({active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:.12})),this.nitroSpawnAcc=0}updateNitroParticles(e){var i,n,s;if(!this.player)return;(!this.nitroRig||!this.player.getObjectByName("player-nitro-rig"))&&this.attachPlayerNitroRig();const t=!!this.state.nitroActive;if(this.nitroRig&&(this.nitroRig.visible=t),t&&this.nitroFlames){const r=performance.now();if(this.nitroFlames.forEach((o,l)=>{const c=Math.sin(r*.055+l*2.5)*.22+(Math.random()-.5)*.16,h=.95+c,d=.88+Math.cos(r*.045+l*1.8)*.16;o.outer.scale.set(d,d,h),o.core.scale.set(1+c*.45,1+c*.45,h*1.08),o.plume.scale.set(d*1.12,d*1.12,h*.92),o.outer.rotation.z=(Math.random()-.5)*.08,o.ring.scale.setScalar(.9+(Math.random()-.5)*.2)}),this.nitroLight&&(this.nitroLight.intensity=3.6+Math.sin(r*.065)*1.2+(Math.random()-.5)*.6),this.sparkData&&this.nitroSparks){this.nitroSparks.visible=!0;const o=this.nitroSparks.geometry.attributes.position,l=o.array,c=this.player.position.z+2.35;for(let h=0;h<3;h++){const d=this.sparkData.find(f=>!f.active);if(!d)break;const u=Math.random()>.5?.52:-.52;d.active=!0,d.life=0,d.maxLife=.07+Math.random()*.07,d.x=this.player.position.x+u+(Math.random()-.5)*.14,d.y=this.player.position.y+.32+(Math.random()-.5)*.1,d.z=c+.2,d.vx=(Math.random()-.5)*2.8,d.vy=(Math.random()-.5)*1.6,d.vz=26+Math.random()*12}for(let h=0;h<this.sparkData.length;h++){const d=this.sparkData[h];if(!d.active){l[h*3+1]=-100;continue}if(d.life+=e,d.life>=d.maxLife){d.active=!1,l[h*3+1]=-100;continue}d.x+=d.vx*e,d.y+=d.vy*e,d.z+=d.vz*e,l[h*3]=d.x,l[h*3+1]=d.y,l[h*3+2]=d.z}o.needsUpdate=!0}}else if(this.nitroLight&&(this.nitroLight.intensity=0),this.nitroSparks&&(this.nitroSparks.visible=!1),this.sparkData){const r=(s=(n=(i=this.nitroSparks)==null?void 0:i.geometry)==null?void 0:n.attributes)==null?void 0:s.position;if(r){for(let o=0;o<this.sparkData.length;o++)this.sparkData[o].active=!1,r.array[o*3+1]=-100;r.needsUpdate=!0}}}attachPlayerBackfireRig(){var d,u;if(!this.player)return;const e=this.player.getObjectByName("player-backfire-rig");e&&this.player.remove(e);const t=new We;t.name="player-backfire-rig";const i=new Nt().setFromObject(this.player),n=i.max.z>.5?i.max.z-this.player.position.z:2.45,s=(((u=(d=this.selectedCar)==null?void 0:d.profile)==null?void 0:u.width)||2.4)*.24,r=[-Math.max(.46,s),Math.max(.46,s)];this.backfireFlames=[];const o=new $i(.18,1.8,10);o.translate(0,.9,0),o.rotateX(-Math.PI/2);const l=new $i(.09,1.1,10);l.translate(0,.55,0),l.rotateX(-Math.PI/2);const c=new qa(.07,.22,14);r.forEach(f=>{const p=new We;p.position.set(f,-.32,n);const v=new De({color:16729344,transparent:!0,opacity:.92,blending:ni,depthWrite:!1}),g=new O(o,v);p.add(g);const m=new De({color:16773290,transparent:!0,opacity:.98,blending:ni,depthWrite:!1}),_=new O(l,m);p.add(_);const M=new De({color:16742144,transparent:!0,opacity:.88,blending:ni,side:Tt,depthWrite:!1}),b=new O(c,M);b.position.z=.02,p.add(b),t.add(p),this.backfireFlames.push({flameGroup:p,flame:g,core:_,ring:b})});const h=new gn(16733440,0,14,2);h.position.set(0,-.15,n+.6),t.add(h),this.backfireLight=h,t.visible=!1,this.backfireRig=t,this.player.add(t)}createBackfireSparkPool(){this.backfireSparks=[];const e=new Rt,t=new Float32Array(48*3);for(let n=0;n<48*3;n+=3)t[n]=0,t[n+1]=-100,t[n+2]=0;e.setAttribute("position",new kt(t,3));const i=new Vs({color:16746496,size:.18,transparent:!0,opacity:.9,blending:ni,depthWrite:!1});this.backfireSparksMesh=new Na(e,i),this.backfireSparksMesh.visible=!1,this.scene.add(this.backfireSparksMesh),this.backfireSparkData=Array.from({length:48},()=>({active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:.14}))}spawnBackfireSparks(e=1){if(!this.player||!this.backfireSparkData||!this.backfireSparksMesh)return;const t=this.player.position.z+2.4,i=Math.min(16,Math.floor(6+e*8));for(let n=0;n<i;n++){const s=this.backfireSparkData.find(o=>!o.active);if(!s)break;const r=Math.random()>.5?.52:-.52;s.active=!0,s.life=0,s.maxLife=.08+Math.random()*.08,s.x=this.player.position.x+r+(Math.random()-.5)*.2,s.y=this.player.position.y+.3+(Math.random()-.5)*.16,s.z=t+.1,s.vx=(Math.random()-.5)*4.2,s.vy=(Math.random()-.5)*2.8,s.vz=22+Math.random()*16}this.backfireSparksMesh.visible=!0}triggerBackfire(e=1,t=1){this.player&&((!this.backfireRig||!this.player.getObjectByName("player-backfire-rig"))&&this.attachPlayerBackfireRig(),this.state.backfireTimer=.12,this.state.backfirePopsRemaining=Math.max(0,t-1),this.backfireRig&&(this.backfireRig.visible=!0),this.backfireLight&&(this.backfireLight.intensity=4.2*e),this.audio.playBackfirePop(e),this.state.cameraShake=Math.min(.36,this.state.cameraShake+.07*e),this.spawnBackfireSparks(e),y.gear&&(y.gear.classList.add("shift-pop"),window.setTimeout(()=>{var i;return(i=y.gear)==null?void 0:i.classList.remove("shift-pop")},140)))}updateBackfire(e){if(this.player&&((!this.backfireRig||!this.player.getObjectByName("player-backfire-rig"))&&this.attachPlayerBackfireRig(),this.state.backfireTimer>0?(this.state.backfireTimer-=e,this.backfireRig&&(this.backfireRig.visible=!0),this.backfireFlames&&this.backfireFlames.forEach(t=>{const i=.75+Math.random()*.6;t.flame.scale.set(i,i,.9+Math.random()*.8),t.core.scale.set(i*.9,i*.9,.85+Math.random()*.7),t.ring.scale.setScalar(.85+Math.random()*.4)}),this.backfireLight&&(this.backfireLight.intensity=3.2+Math.random()*2.2),this.state.backfireTimer<=0&&(this.state.backfirePopsRemaining>0?(this.state.backfirePopsRemaining-=1,this.state.backfireTimer=.08+Math.random()*.04,this.audio.playBackfirePop(.85),this.spawnBackfireSparks(.8)):(this.backfireRig&&(this.backfireRig.visible=!1),this.backfireLight&&(this.backfireLight.intensity=0)))):(this.backfireRig&&this.backfireRig.visible&&(this.backfireRig.visible=!1),this.backfireLight&&(this.backfireLight.intensity=0)),this.backfireSparkData&&this.backfireSparksMesh)){const t=this.backfireSparksMesh.geometry.attributes.position,i=t.array;let n=!1;for(let s=0;s<this.backfireSparkData.length;s++){const r=this.backfireSparkData[s];if(!r.active){i[s*3+1]=-100;continue}if(n=!0,r.life+=e,r.life>=r.maxLife){r.active=!1,i[s*3+1]=-100;continue}r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,i[s*3]=r.x,i[s*3+1]=r.y,i[s*3+2]=r.z}t.needsUpdate=!0,this.backfireSparksMesh.visible=n}}createSpeedStreaksPool(){const t=new Float32Array(480);for(let s=0;s<80*6;s+=6)t[s]=0,t[s+1]=-100,t[s+2]=0,t[s+3]=0,t[s+4]=-100,t[s+5]=0;const i=new Rt;i.setAttribute("position",new kt(t,3));const n=new Ga({color:9684477,transparent:!0,opacity:0,blending:ni,depthWrite:!1});this.speedStreaks=new qo(i,n),this.speedStreaks.visible=!1,this.scene.add(this.speedStreaks),this.speedStreakData=Array.from({length:80},()=>{const s=Math.random()*Math.PI*2,r=3.6+Math.random()*12;return{x:Math.cos(s)*r*1.35,y:Math.max(.6,Math.sin(s)*r+2.4),z:-140+Math.random()*150,baseLength:4.5+Math.random()*6.5,speedMult:.85+Math.random()*.35}})}updateSpeedStreaks(e){if(!this.speedStreaks||!this.speedStreakData)return;const t=this.state.speed*1.6;if(!(t>=120||!!this.state.nitroActive)){this.speedStreaks.visible&&(this.speedStreaks.material.opacity=oe.lerp(this.speedStreaks.material.opacity,0,e*10),this.speedStreaks.material.opacity<=.01&&(this.speedStreaks.visible=!1));return}this.speedStreaks.visible=!0;const n=this.state.nitroActive?.82:oe.clamp((t-120)/75,0,.7);this.speedStreaks.material.opacity=oe.lerp(this.speedStreaks.material.opacity,n,e*8);const s=this.speedStreaks.geometry.attributes.position,r=s.array,o=this.state.speed*2.4+(this.state.nitroActive?140:0),l=1+t/140*1.4;for(let c=0;c<this.speedStreakData.length;c++){const h=this.speedStreakData[c];if(h.z+=o*h.speedMult*e,h.z>14){h.z=-130-Math.random()*35;const f=Math.random()*Math.PI*2,p=3.6+Math.random()*12;h.x=Math.cos(f)*p*1.35+(this.player?this.player.position.x*.4:0),h.y=Math.max(.6,Math.sin(f)*p+2.4)}const d=h.baseLength*l,u=c*6;r[u]=h.x,r[u+1]=h.y,r[u+2]=h.z,r[u+3]=h.x,r[u+4]=h.y,r[u+5]=h.z+d}s.needsUpdate=!0}createRainPool(){const t=new Float32Array(2280);for(let s=0;s<380*6;s+=6)t[s]=0,t[s+1]=-100,t[s+2]=0,t[s+3]=0,t[s+4]=-100,t[s+5]=0;const i=new Rt;i.setAttribute("position",new kt(t,3));const n=new Ga({color:12507903,transparent:!0,opacity:.65,blending:ni,depthWrite:!1});this.rainStreaks=new qo(i,n),this.rainStreaks.visible=!1,this.scene.add(this.rainStreaks),this.rainStreakData=Array.from({length:380},()=>({x:(Math.random()-.5)*44,y:1.5+Math.random()*28,z:-80+Math.random()*95,len:2+Math.random()*2.5,speedY:58+Math.random()*28,slantX:(Math.random()-.5)*.9}))}updateRain(e){var o;if(!this.rainStreaks||!this.rainStreakData)return;if(!!!((o=this.activeWeatherPreset)!=null&&o.isRain)){this.rainStreaks.visible&&(this.rainStreaks.visible=!1);return}this.rainStreaks.visible=!0;const i=this.rainStreaks.geometry.attributes.position,n=i.array,s=this.player?this.player.position.x:0,r=this.state.speed*1.8;for(let l=0;l<this.rainStreakData.length;l++){const c=this.rainStreakData[l];c.y-=c.speedY*e,c.z+=r*e,c.x+=c.slantX*e,(c.y<.2||c.z>22)&&(c.y=24+Math.random()*8,c.z=-80+Math.random()*32,c.x=s+(Math.random()-.5)*44);const h=-.55-this.state.speed*.028,d=l*6;n[d]=c.x,n[d+1]=c.y,n[d+2]=c.z,n[d+3]=c.x-c.slantX*.25,n[d+4]=c.y+c.len,n[d+5]=c.z+h*c.len}i.needsUpdate=!0}createTireSprayPool(){const t=new Float32Array(360);for(let s=0;s<120*3;s+=3)t[s]=0,t[s+1]=-100,t[s+2]=0;const i=new Rt;i.setAttribute("position",new kt(t,3));const n=new Vs({color:13625087,size:.65,transparent:!0,opacity:.55,blending:ni,depthWrite:!1});this.tireSprayParticles=new Na(i,n),this.tireSprayParticles.visible=!1,this.scene.add(this.tireSprayParticles),this.tireSprayData=Array.from({length:120},()=>({active:!1,x:0,y:-100,z:0,vx:0,vy:0,vz:0,life:0,maxLife:.4})),this.tireSprayNextIdx=0}updateTireSpray(e){if(!this.tireSprayParticles||!this.tireSprayData)return;const t=!!this.isWetRoad,i=this.state.speed*1.6;if(t&&i>35&&this.player){this.tireSprayParticles.visible=!0;const o=Math.min(4,Math.floor(i/38));for(let l=0;l<o;l++){const c=this.tireSprayNextIdx;this.tireSprayNextIdx=(this.tireSprayNextIdx+1)%this.tireSprayData.length;const h=this.tireSprayData[c],d=Math.random()<.5?-1.05:1.05;h.active=!0,h.x=this.player.position.x+d+(Math.random()-.5)*.3,h.y=.25+Math.random()*.2,h.z=this.player.position.z+1.75+Math.random()*.4,h.vx=(d*.8+(Math.random()-.5)*1.4)*(i/100),h.vy=1.8+Math.random()*2.6*(i/120),h.vz=4.2+Math.random()*4.2,h.life=0,h.maxLife=.32+Math.random()*.25}}const n=this.tireSprayParticles.geometry.attributes.position,s=n.array;let r=!1;for(let o=0;o<this.tireSprayData.length;o++){const l=this.tireSprayData[o];if(!l.active){s[o*3+1]=-100;continue}if(l.life+=e,l.life>=l.maxLife){l.active=!1,s[o*3+1]=-100;continue}r=!0,l.x+=l.vx*e,l.y+=l.vy*e,l.z+=l.vz*e,l.vy-=4.2*e,s[o*3]=l.x,s[o*3+1]=l.y,s[o*3+2]=l.z}n.needsUpdate=!0,!r&&!t&&(this.tireSprayParticles.visible=!1)}initWeatherCanvas(){const e=y.weatherCanvas;e&&(this.weatherCanvasCtx=e.getContext("2d"),this.resizeWeatherCanvas(),this.initScreenDroplets())}resizeWeatherCanvas(){const e=y.weatherCanvas;if(!e)return;const t=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(t*n),e.height=Math.floor(i*n),e.style.width=`${t}px`,e.style.height=`${i}px`,this.weatherCanvasCtx&&(this.weatherCanvasCtx.setTransform(1,0,0,1,0,0),this.weatherCanvasCtx.scale(n,n))}initScreenDroplets(){const t=window.innerWidth,i=window.innerHeight;this.screenDroplets=Array.from({length:48},()=>({x:Math.random()*t,y:Math.random()*i,r:2+Math.random()*3.5,speedY:12+Math.random()*32,alpha:.28+Math.random()*.44,trail:0,life:Math.random()*8,maxLife:6+Math.random()*8}))}triggerLightning(){var i,n,s,r,o,l,c;if(this.isLightningFlashing)return;this.isLightningFlashing=!0,this.audio.playThunder(),this.triggerHaptic([30,20,55]);const e=((s=(n=(i=this.scene)==null?void 0:i.fog)==null?void 0:n.color)==null?void 0:s.getHex())??1582136,t=((o=(r=this.scene)==null?void 0:r.background)==null?void 0:o.getHex())??923430;(l=this.scene)!=null&&l.fog&&this.scene.fog.color.setHex(13691135),(c=this.scene)!=null&&c.background&&this.scene.background.setHex(10537215),setTimeout(()=>{var h,d;(h=this.scene)!=null&&h.fog&&this.scene.fog.color.setHex(e),(d=this.scene)!=null&&d.background&&this.scene.background.setHex(t),setTimeout(()=>{var u,f;(u=this.scene)!=null&&u.fog&&this.scene.fog.color.setHex(12639743),(f=this.scene)!=null&&f.background&&this.scene.background.setHex(9484543),setTimeout(()=>{var p,v;(p=this.scene)!=null&&p.fog&&this.scene.fog.color.setHex(e),(v=this.scene)!=null&&v.background&&this.scene.background.setHex(t),this.isLightningFlashing=!1},55)},70)},85)}renderRainDroplets(e){var c;const t=this.weatherCanvasCtx;if(!t)return;const i=window.innerWidth,n=window.innerHeight;if(t.clearRect(0,0,i,n),this.isLightningFlashing&&(t.fillStyle="rgba(230, 242, 255, 0.42)",t.fillRect(0,0,i,n)),!!!((c=this.activeWeatherPreset)!=null&&c.isRain)&&!this.isLightningFlashing)return;const r=this.state.speed*1.6,o=Math.max(0,(r-80)/100),l=(this.state.roadDrift||0)*18;t.save();for(let h=0;h<this.screenDroplets.length;h++){const d=this.screenDroplets[h];d.life+=e,d.y+=(d.speedY+o*85)*e,d.x+=(l*1.2+(Math.random()-.5)*.4)*e,(d.y>n+20||d.life>=d.maxLife)&&(d.x=Math.random()*i,d.y=-10-Math.random()*20,d.life=0,d.maxLife=6+Math.random()*8,d.r=2+Math.random()*3.5,d.alpha=.28+Math.random()*.44);const u=Math.min(22,o*18+(d.speedY>26?6:2)),f=t.createRadialGradient(d.x-d.r*.3,d.y-d.r*.3,.5,d.x,d.y,d.r);f.addColorStop(0,`rgba(255, 255, 255, ${Math.min(.85,d.alpha+.25)})`),f.addColorStop(.65,`rgba(200, 225, 255, ${d.alpha})`),f.addColorStop(1,"rgba(170, 205, 255, 0)"),t.fillStyle=f,t.beginPath(),t.arc(d.x,d.y,d.r,0,Math.PI*2),t.fill(),u>3&&(t.strokeStyle=`rgba(215, 235, 255, ${d.alpha*.5})`,t.lineWidth=d.r*.65,t.beginPath(),t.moveTo(d.x,d.y),t.lineTo(d.x-l*.1,d.y-u),t.stroke())}t.restore()}updateWeather(e){this.updateRain(e),this.updateTireSpray(e);const t=this.activeWeatherPreset||mn.clear,i=!!t.isRain;if(this.state.running&&!this.state.paused&&i){const n=t.key==="thunderstorm"?1.4:1;this.audio.setRainIntensity(n,this.state.speed)}if(t.hasLightning&&this.state.running&&!this.state.paused&&(this.lightningTimer=(this.lightningTimer||0)+e,this.lightningTimer>=(this.nextLightningTime||14))){this.triggerLightning(),this.lightningTimer=0;const n=t.frequentLightning;this.nextLightningTime=(n?6:12)+Math.random()*(n?8:14)}this.renderRainDroplets(e)}updateTransmission(e,t,i){const n=this.state.speed*1.6;this.state.shiftCooldown=Math.max(0,(this.state.shiftCooldown||0)-e);const s=[{gear:1,minKmh:0,maxKmh:46,minRpm:1200,maxRpm:7800},{gear:2,minKmh:38,maxKmh:82,minRpm:3800,maxRpm:8e3},{gear:3,minKmh:74,maxKmh:122,minRpm:4200,maxRpm:8100},{gear:4,minKmh:114,maxKmh:168,minRpm:4600,maxRpm:8200},{gear:5,minKmh:158,maxKmh:215,minRpm:5e3,maxRpm:8300},{gear:6,minKmh:205,maxKmh:320,minRpm:5400,maxRpm:8500}];let r=1;for(let d=s.length-1;d>=0;d--)if(n>=s[d].minKmh){r=s[d].gear;break}const o=this.state.gear||1;r!==o&&this.state.shiftCooldown<=0&&(this.state.gear=r,this.state.shiftCooldown=.42,r>o?(this.audio.playGearShift(),this.triggerHaptic(18),this.state.bodyPitch=Math.min(.22,this.state.bodyPitch+.04),n>70&&Math.random()>.25&&this.triggerBackfire(.9+r/6*.4,Math.random()>.5?2:1)):i&&n>85&&(this.audio.playGearShift(),this.triggerHaptic(14),this.triggerBackfire(1.1,2)));const l=s[(this.state.gear||1)-1]||s[0],c=oe.clamp((n-l.minKmh)/Math.max(1,l.maxKmh-l.minKmh),0,1);let h=oe.lerp(l.minRpm,l.maxRpm,c);this.state.nitroActive&&(h=Math.min(8500,h+450+Math.sin(performance.now()*.04)*150)),this.state.rpm=oe.lerp(this.state.rpm||1200,h,e*14),this.state.rpm>8100&&t&&Math.random()>.94&&this.triggerBackfire(.85,1),this.state.lastSpeed!==void 0&&(this.state.lastSpeed-this.state.speed)/Math.max(.001,e)>35&&this.state.rpm>6600&&Math.random()>.7&&(this.audio.playTurboFlutter(),this.triggerBackfire(1.15,2)),this.state.lastSpeed=this.state.speed}syncSettingsUi(){y.muteToggle.checked=this.settings.mute,y.musicToggle.checked=this.settings.music,y.sfxToggle.checked=this.settings.sfx,y.tiltToggle.checked=this.settings.tiltSteer,y.radioStationSelect&&(y.radioStationSelect.value=String(this.settings.radioStation??0));const e=Ai[this.settings.radioStation??0]||Ai[0];y.radioButtonLabel&&(y.radioButtonLabel.textContent=e.dial),y.weatherSelect&&(y.weatherSelect.value=this.settings.weatherMode||"auto");const t=this.activeWeatherPreset||this.getActiveWeatherPreset();if(y.weatherButtonLabel&&(y.weatherButtonLabel.textContent=this.settings.weatherMode==="auto"?"Auto":t.badge.split(" ")[0]),y.weatherButtonIcon&&(y.weatherButtonIcon.textContent=t.icon),y.musicVolume){const i=Math.round((this.settings.musicVolume??.82)*100);y.musicVolume.value=i,y.musicVolumeLabel&&(y.musicVolumeLabel.textContent=`${i}%`)}if(y.sfxVolume){const i=Math.round((this.settings.sfxVolume??.88)*100);y.sfxVolume.value=i,y.sfxVolumeLabel&&(y.sfxVolumeLabel.textContent=`${i}%`)}y.hapticsToggle&&(y.hapticsToggle.checked=this.settings.haptics!==!1)}cycleRadioStation(){const e=((this.settings.radioStation??0)+1)%Ai.length;this.setRadioStation(e)}setRadioStation(e){this.settings.radioStation=oe.clamp(e,0,Ai.length-1),wi(this.settings),this.audio.playRadioTuning(),this.audio.setRadioStationIndex(this.settings.radioStation),this.syncSettingsUi();const t=Ai[this.settings.radioStation];this.showRadioBanner(t)}showRadioBanner(e){this.radioBannerTimer&&(clearTimeout(this.radioBannerTimer),this.radioBannerTimer=null),y.radioBanner&&(y.radioBannerDial&&(y.radioBannerDial.textContent=e.dial),y.radioBannerName&&(y.radioBannerName.textContent=e.name),y.radioBannerGenre&&(y.radioBannerGenre.textContent=e.genre),y.radioBanner.classList.remove("hidden"),requestAnimationFrame(()=>{var t;(t=y.radioBanner)==null||t.classList.add("is-active")}),this.radioBannerTimer=setTimeout(()=>{var t;(t=y.radioBanner)==null||t.classList.remove("is-active"),setTimeout(()=>{var i;return(i=y.radioBanner)==null?void 0:i.classList.add("hidden")},350),this.radioBannerTimer=null},2800))}triggerPoliceDispatch(e="pursuit"){this.policeDispatchTimer&&(clearTimeout(this.policeDispatchTimer),this.policeDispatchTimer=null);const t=Fh[e]||Fh.pursuit,i=t[Math.floor(Math.random()*t.length)];y.policeDispatchMessage&&(y.policeDispatchMessage.textContent=i),y.policeDispatchBanner&&(y.policeDispatchBanner.classList.remove("hidden"),requestAnimationFrame(()=>{var n;(n=y.policeDispatchBanner)==null||n.classList.add("is-active")}),this.audio.playPoliceDispatch(),this.policeDispatchTimer=setTimeout(()=>{var n;(n=y.policeDispatchBanner)==null||n.classList.remove("is-active"),setTimeout(()=>{var s;return(s=y.policeDispatchBanner)==null?void 0:s.classList.add("hidden")},350),this.policeDispatchTimer=null},4200))}async initAds(){if(!wt||this.adState.initialized||this.progress.adFreePurchased){this.progress.adFreePurchased&&(this.adState.lastError="Ad-Free Upgrade active",this.updateAdStatusUi());return}let e={status:Ka.NOT_REQUIRED,canRequestAds:!0,isConsentFormAvailable:!1};try{await Wt.initialize();try{e=await Wt.requestConsentInfo(),this.adState.consentStatus=String(e.status),!e.canRequestAds&&e.isConsentFormAvailable&&(e=await Wt.showConsentForm(),this.adState.consentStatus=String(e.status)),this.adState.canRequestAds=!!e.canRequestAds}catch(t){if(this.adState.consentStatus="consent-error",x_(t))this.adState.canRequestAds=!0,this.adState.lastError="AdMob Privacy & messaging is not configured for this app ID yet. Using fallback ad requests.";else throw t}Wt.addListener(ts.Loaded,()=>{this.adState.interstitialReady=!0,this.adState.interstitialLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),Wt.addListener(ts.FailedToLoad,t=>{this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to load",this.updateAdStatusUi()}),Wt.addListener(ts.Dismissed,()=>{this.adState.interstitialReady=!1,this.updateAdStatusUi(),this.prepareInterstitial()}),Wt.addListener(ts.FailedToShow,t=>{this.adState.interstitialReady=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to show",this.updateAdStatusUi(),this.prepareInterstitial()}),Wt.addListener(Dn.Loaded,()=>{this.adState.rewardedReady=!0,this.adState.rewardedLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),Wt.addListener(Dn.FailedToLoad,t=>{this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to load",this.updateAdStatusUi()}),Wt.addListener(Dn.Rewarded,()=>{this.adState.rewardedPurpose==="double-stage-reward"?this.claimDoubleStageReward():this.revivePlayer()}),Wt.addListener(Dn.Dismissed,()=>{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.updateAdStatusUi(),this.prepareRewardedAd()}),Wt.addListener(Dn.FailedToShow,t=>{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to show",this.updateAdStatusUi(),this.prepareRewardedAd()}),this.adState.initialized=!0,this.adState.canRequestAds?(await this.prepareInterstitial(),await this.prepareRewardedAd()):this.adState.lastError=e.status===Ka.REQUIRED?"Consent required before ads can load":"Ad requests are blocked by consent status"}catch(t){this.adState.initialized=!1,this.adState.lastError=(t==null?void 0:t.message)||"AdMob initialization failed"}this.updateAdStatusUi()}async showTopBanner(){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi()}async hideTopBanner(){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi();try{await Wt.hideBanner(),await Wt.removeBanner()}catch{}}async prepareInterstitial(){if(!(!wt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.interstitialReady||this.adState.interstitialLoading)){this.adState.interstitialLoading=!0,this.updateAdStatusUi();try{await Wt.prepareInterstitial({adId:Ra?jy:$y,immersiveMode:!0})}catch(e){this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Interstitial prepare failed",this.updateAdStatusUi()}}}async showStageInterstitial(){if(!(!wt||this.progress.adFreePurchased||!this.adState.initialized))try{if(!this.adState.interstitialReady){await this.prepareInterstitial(),y.tip.textContent="Interstitial is still loading. It should appear after the next stage.";return}await Wt.showInterstitial()}catch{this.adState.interstitialReady=!1,this.adState.lastError="Interstitial show failed",this.prepareInterstitial()}}async prepareRewardedAd(){if(!(!wt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.rewardedReady||this.adState.rewardedLoading)){this.adState.rewardedLoading=!0,this.updateAdStatusUi();try{await Wt.prepareRewardVideoAd({adId:Ra?Zy:Ky,isTesting:Ra})}catch(e){this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Rewarded ad prepare failed",this.updateAdStatusUi()}}}async showRewardedAd(e="revive"){if(!(!wt||!this.adState.rewardedReady))try{this.adState.rewardedPurpose=e,await Wt.showRewardVideoAd()}catch{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.prepareRewardedAd()}}showDoubleRewardAd(){if(this.pendingDoubleReward){if(!wt||!this.adState.rewardedReady||this.progress.adFreePurchased){this.claimDoubleStageReward();return}this.showRewardedAd("double-stage-reward")}}claimDoubleStageReward(){var n;if(!this.pendingDoubleReward)return;const{stageId:e,credits:t}=this.pendingDoubleReward,i=`${e}:${t}`;this.progress.doubledStageRewards.includes(i)||(this.progress.doubledStageRewards.push(i),this.progress.doubledStageRewards=this.progress.doubledStageRewards.slice(-25),this.progress.credits+=t,this.pendingDoubleReward=null,At(this.progress),this.refreshProgressUi(),this.renderGarage(),(n=y.doubleRewardButton)==null||n.classList.add("hidden"),y.tip.textContent=`Stage reward doubled. +${t} CR bonus.`,this.audio.tone(980,.15,"triangle",.045),this.audio.tone(1240,.18,"triangle",.035))}revivePlayer(){var e;this.state.hasRevived||(this.state.hasRevived=!0,this.state.gameOver=!1,this.state.running=!0,this.forceRunningUntil=performance.now()+8e3,this.state.health=Math.round(this.state.maxHealth*.4),this.state.fuel=Math.round(this.state.maxFuel*.5),this.state.cameraShake=0,y.overlay.classList.add("hidden"),document.body.classList.remove("overlay-active"),(e=y.overlayShareButton)==null||e.classList.add("hidden"),y.reviveButton.classList.add("hidden"),this.audio.playMusic(),this.showTopBanner(),y.tip.textContent="You've been revived! Drive carefully.",this.audio.tone(880,.18,"triangle",.05),this.audio.tone(1100,.24,"triangle",.04))}updateComboDisplay(){y.comboDisplay&&(this.state.combo>1?(y.comboDisplay.textContent=`x${this.state.combo} COMBO`,y.comboDisplay.className=`combo-display combo-level-${this.state.combo}`,y.comboDisplay.classList.remove("hidden")):(y.comboDisplay.textContent="",y.comboDisplay.className="combo-display hidden"))}getDailyChallenge(){const e=new Date().toISOString().slice(0,10);if(this.progress.dailyChallenge&&this.progress.dailyChallenge.date===e)return this.progress.dailyChallenge;const t=e.split("-").reduce((o,l)=>o+parseInt(l,10),0),i=t%_h.length,n=_h[i],s=t%n.targets.length,r={date:e,type:n.type,label:n.label,desc:n.desc.replace("{target}",n.targets[s]),target:n.targets[s],progress:0,completed:!1,rewardClaimed:!1};return this.progress.dailyChallenge=r,At(this.progress),r}getWeeklyChallenge(){const e=new Date,t=new Date(e);t.setDate(e.getDate()-e.getDay());const i=t.toISOString().slice(0,10);if(this.progress.weeklyChallenge&&this.progress.weeklyChallenge.week===i)return this.progress.weeklyChallenge;const n=t.getFullYear()+t.getMonth()*7+t.getDate(),s=Sh[n%Sh.length],r=s.targets[n%s.targets.length],o={week:i,type:s.type,label:s.label,desc:s.desc.replace("{target}",r),target:r,progress:0,completed:!1,rewardClaimed:!1};return this.progress.weeklyChallenge=o,At(this.progress),o}claimDailyLoginReward(){const e=new Date().toISOString().slice(0,10);if(this.progress.lastLoginDate===e)return"";const t=new Date;t.setDate(t.getDate()-1);const i=t.toISOString().slice(0,10),n=this.progress.lastLoginDate===i?(this.progress.loginStreak||0)+1:1,s=Math.min(n,e_),r=Jy+s*Qy;this.progress.lastLoginDate=e,this.progress.loginStreak=n,this.progress.credits+=r,this.progress=Qr(this.progress),At(this.progress);const o=n>=7&&this.progress.unlockedLiveries.includes("legend-gold")?" Legend Gold livery unlocked.":"";return`Daily login streak ${n}: +${r} CR.${o}`}updateWeeklyChallenge(e,t){const i=this.getWeeklyChallenge();!i||i.completed||i.type!==e||(i.progress=Math.max(i.progress||0,t),i.progress>=i.target&&(i.completed=!0,i.rewardClaimed||(i.rewardClaimed=!0,this.progress.credits+=xh,y.tip.textContent=`Weekly event complete! +${xh} CR bonus.`,this.audio.tone(980,.15,"triangle",.045)),At(this.progress),this.refreshProgressUi()),this.updateDailyChallengeUi())}updateDailyChallenge(e,t){const i=this.progress.dailyChallenge;!i||i.completed||i.type!==e||(t>=i.target?(i.completed=!0,i.rewardClaimed||(i.rewardClaimed=!0,this.progress.credits+=yh,At(this.progress),this.refreshProgressUi(),y.tip.textContent=`Daily challenge complete! +${yh} CR bonus.`,this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.14,"triangle",.03))):i.progress=t,this.updateDailyChallengeUi())}updateDailyChallengeUi(){if(!y.dailyBadge)return;const e=this.getDailyChallenge(),t=this.getWeeklyChallenge();if(!e){y.dailyBadge.classList.add("hidden");return}const i=Math.min(100,Math.round(e.progress/e.target*100)),n=t?Math.min(100,Math.round((t.progress||0)/t.target*100)):0;y.dailyBadge.classList.remove("hidden"),y.dailyBadge.innerHTML=e.completed?`<span class="daily-done">Daily: ${e.label} ✓</span>`:`<span>Daily: ${e.label} ${i}%</span>`;const s=t!=null&&t.completed?`<span class="daily-done">Weekly: ${t.label} done</span>`:`<span>Weekly: ${(t==null?void 0:t.label)||"Event"} ${n}%</span>`;y.dailyBadge.innerHTML+=s}updateStreakButtonLabel(){if(y.streakButtonLabel){const e=this.progress.loginStreak||0;y.streakButtonLabel.textContent=e>0?`Streak ${e}d`:"Daily Streak"}}openDailyStreakModal(){var e;this.renderDailyStreakModal(),(e=y.streakModal)==null||e.classList.remove("hidden"),this.audio.tone(550,.1,"sine",.04)}closeDailyStreakModal(){var e;(e=y.streakModal)==null||e.classList.add("hidden")}openCommunityRewardsModal(){var e;(e=y.communityRewardsModal)==null||e.classList.remove("hidden"),this.audio.tone(600,.1,"triangle",.04)}closeCommunityRewardsModal(){var e;(e=y.communityRewardsModal)==null||e.classList.add("hidden")}handleCommunityRewardAction(e){e==="youtube"?(window.open("https://www.youtube.com/@Netsammy","_blank"),this.progress.claimedYoutubeReward?y.tip.textContent="📺 Channel opened! Thanks for being an official subscriber.":(this.progress.claimedYoutubeReward=!0,this.progress.credits=(this.progress.credits||0)+1e3,this.progress.highestStage=Math.max(this.progress.highestStage,2),this.persistProgress(),this.refreshProgressUi(),this.showRaceBanner("🎁 YOUTUBE REWARD CLAIMED!","+1,000 CR · STAGE 2 UNLOCKED!","Thanks for subscribing to our official channel!",2.5),y.tip.textContent="🎁 Claimed +1,000 Credits and unlocked Stage 2!",this.audio.tone(523,.15,"triangle",.05),this.audio.tone(659,.2,"triangle",.05))):e==="install-apps"?(window.open("https://play.google.com/store/apps/dev?id=5066497330777977464","_blank"),this.progress.claimedAppInstallReward?y.tip.textContent="📱 Studio catalog opened! Thank you for playing our apps.":(this.progress.claimedAppInstallReward=!0,this.progress.credits=(this.progress.credits||0)+1500,this.progress.highestStage=Math.max(this.progress.highestStage,3),this.persistProgress(),this.refreshProgressUi(),this.showRaceBanner("🎁 STUDIO APPS REWARD!","+1,500 CR · STAGE 3 UNLOCKED!","Thanks for exploring our games catalog!",2.5),y.tip.textContent="🎁 Claimed +1,500 Credits and unlocked Stage 3!",this.audio.tone(523,.15,"triangle",.05),this.audio.tone(784,.25,"triangle",.06))):e==="rate-game"&&(window.open(wt?"market://details?id=com.need4speedlahore.game":"https://play.google.com/store/apps/details?id=com.need4speedlahore.game","_blank"),this.progress.claimedRatingReward||(this.progress.claimedRatingReward=!0,this.progress.credits=(this.progress.credits||0)+800,this.state.nitro=this.state.maxNitro,this.persistProgress(),this.refreshProgressUi(),this.showRaceBanner("⭐ STORE RATING REWARD!","+800 CR · FULL NITRO REFILL!","Thank you for supporting Need for Speed Lahore!",2.2),y.tip.textContent="⭐ Claimed +800 Credits and filled Nitro tank!"))}renderDailyStreakModal(){if(!y.streakGrid)return;const e=new Date().toISOString().slice(0,10),t=new Date;t.setDate(t.getDate()-1);const i=t.toISOString().slice(0,10),n=this.progress.lastStreakClaimDate===e;let s=this.progress.loginStreak||0;!n&&this.progress.lastStreakClaimDate!==i&&this.progress.lastStreakClaimDate&&(s=0);const r=n?(s-1)%7+1:s%7+1;if(y.streakGrid.innerHTML="",$r.forEach(o=>{const l=document.createElement("div");l.className="streak-day-card";let c="";o.day<r||o.day===r&&n?(l.classList.add("claimed"),c='<span class="streak-status-badge claimed">CLAIMED ✓</span>'):o.day===r&&!n?(l.classList.add("active"),c=`<span class="streak-status-badge today">TODAY'S REWARD!</span>`):(l.classList.add("future"),c=`<span class="streak-status-badge">DAY ${o.day}</span>`),l.innerHTML=`
        <div class="streak-day-num">DAY ${o.day}</div>
        <div class="streak-day-icon">${o.icon}</div>
        <div class="streak-day-reward">+${o.cr} CR</div>
        <div class="streak-day-perk">${o.perk}</div>
        ${c}
      `,y.streakGrid.appendChild(l)}),y.streakClaimButton)if(n)y.streakClaimButton.disabled=!0,y.streakClaimButton.textContent="✓ TODAY'S REWARD CLAIMED (COME BACK TOMORROW)";else{y.streakClaimButton.disabled=!1;const o=$r[r-1];y.streakClaimButton.textContent=`🎁 CLAIM DAY ${r}: +${o.cr} CR & ${o.perk}`}}claimDailyStreakReward(){const e=new Date().toISOString().slice(0,10);if(this.progress.lastStreakClaimDate===e)return;const t=new Date;t.setDate(t.getDate()-1);const i=t.toISOString().slice(0,10),n=this.progress.lastStreakClaimDate===i?(this.progress.loginStreak||0)+1:1,s=(n-1)%7+1,r=$r[s-1];this.progress.lastStreakClaimDate=e,this.progress.lastLoginDate=e,this.progress.loginStreak=n,this.progress.credits=(this.progress.credits||0)+r.cr,s===7&&!this.progress.unlockedLiveries.includes("legend-gold")&&this.progress.unlockedLiveries.push("legend-gold"),At(this.progress),this.refreshProgressUi(),this.updateStreakButtonLabel(),this.renderDailyStreakModal(),y.tip.textContent=`Daily Streak Day ${n} claimed! +${r.cr} CR (${r.perk})`,this.audio.tone(523,.15,"triangle",.05),this.audio.tone(659,.15,"triangle",.05),this.audio.tone(784,.25,"sine",.06)}refreshProgressUi(){y.saveStageText.textContent=`Highest stage: Stage ${this.progress.highestStage}`,y.saveScoreText.textContent=`Best score: ${Math.round(this.progress.bestScore)}`,y.creditsText.textContent=`Credits: ${Math.round(this.progress.credits)} CR`,this.progress.loginStreak>0&&(y.creditsText.textContent+=` | Streak ${this.progress.loginStreak}d`),y.progressionText&&(y.progressionText.textContent=`Level ${this.progress.level} | ${this.progress.xp} XP | ${this.progress.bossTokens} boss tokens | Chase ${this.progress.policeChaseWins} | Race ${this.progress.policeRaceWins}`),this.updateStreakButtonLabel(),this.updateAdStatusUi()}updateAdStatusUi(){if(!y.adStatusText)return;if(!wt){y.adStatusText.textContent="Ads: none on Windows";return}const e=Ra?"test":"live",t=this.adState.canRequestAds?"requesting allowed":"request blocked",i="banner disabled",n=this.adState.interstitialReady?"interstitial ready":this.adState.interstitialLoading?"interstitial loading":"interstitial idle",s=this.adState.lastError?` | ${this.adState.lastError}`:"";y.adStatusText.textContent=`Ads: ${e}, ${t}, ${i}, ${n}${s}`}persistProgress(){const e=this.state.stageCompleted?this.state.stageIndex+2:this.state.stageIndex+1;this.progress.highestStage=Math.max(this.progress.highestStage,e),this.progress.bestScore=Math.max(this.progress.bestScore,Math.round(this.state.score)),this.progress.totalDistance+=Math.round(this.state.distance),this.progress=Qr(this.progress),At(this.progress),this.refreshProgressUi()}recordLeaderboardRun(e){const t={score:Math.round(this.state.score),stage:this.currentStage.id,track:this.currentStage.track.name,vehicle:this.selectedCar.label,drift:Math.round(this.state.driftScore),nearMisses:this.state.nearMissCount,outcome:e,date:new Date().toLocaleDateString()};return this.progress.localLeaderboard=[t,...this.progress.localLeaderboard||[]].sort((i,n)=>n.score-i.score).slice(0,10),At(this.progress),t}getScoreCardText(){var r;const e=(r=this.progress.localLeaderboard)==null?void 0:r[0],t=Math.round(this.state.score||(e==null?void 0:e.score)||this.progress.bestScore||0),i=(e==null?void 0:e.track)||this.currentStage.track.name,n=(e==null?void 0:e.vehicle)||this.selectedCar.label,s=Math.round(this.state.driftScore||(e==null?void 0:e.drift)||0);return`Need 4 Speed Lahore | ${i} | ${n} | Score ${t} | Drift ${s} | Near misses ${this.state.nearMissCount||(e==null?void 0:e.nearMisses)||0}`}shareScoreCard(){const e=this.getScoreCardText();navigator.share?navigator.share({title:"Need 4 Speed Lahore score",text:e}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(e).catch(()=>{}),y.tip.textContent="Score card copied for sharing."}isMissionComplete(e=this.currentStage){return e.mission.type==="clean-finish"?this.state.health>=e.mission.target:e.mission.type==="fuel-save"?this.state.fuel>=e.mission.target:e.mission.type==="near-miss"?this.state.nearMissCount>=e.mission.target:e.mission.type==="score-target"?this.state.score>=e.mission.target:!1}cycleCameraView(){var t,i;this.cameraViewIndex=(this.cameraViewIndex+1)%pn.length;const e=pn[this.cameraViewIndex]||pn[0];try{localStorage.setItem("n4s_camera_view",e.key)}catch{}(i=(t=this.audio)==null?void 0:t.tone)==null||i.call(t,560,.08,"triangle",.04),y.tip&&(y.tip.textContent=`🎥 Camera: ${e.name}`)}setPaused(e){var t,i,n,s,r,o,l,c,h,d,u;if(e&&(this.settingsOpenedAt=performance.now(),(i=(t=this.audio).stopVocal)==null||i.call(t)),this.state.gameOver||this.state.stageCompleted||!this.state.running)if(e){this.settingsOpenedFromOverlay=!0,document.body.classList.add("settings-open"),(n=y.overlay)==null||n.classList.add("hidden"),y.settingsPanel.classList.remove("hidden"),this.renderGarage(),y.resumeButton&&(y.resumeButton.textContent="Back to Menu"),y.bottomResumeButton&&(y.bottomResumeButton.textContent="Back to Menu"),(r=(s=this.audio)==null?void 0:s.playClick)==null||r.call(s);return}else{document.body.classList.remove("settings-open"),y.settingsPanel.classList.add("hidden"),this.settingsOpenedFromOverlay&&((o=y.overlay)==null||o.classList.remove("hidden"),this.settingsOpenedFromOverlay=!1),(c=(l=this.audio)==null?void 0:l.playClick)==null||c.call(l);return}this.state.paused=e,document.body.classList.toggle("settings-open",e),this.clearTouchInput(),y.settingsPanel.classList.toggle("hidden",!e),y.pauseButton.innerHTML=`<span class="icon-glyph">${e?">":"II"}</span><span class="icon-label">${e?"Resume":"Pause"}</span>`,y.pauseButton.setAttribute("aria-label",e?"Resume":"Pause"),y.resumeButton&&(y.resumeButton.textContent="Resume"),y.bottomResumeButton&&(y.bottomResumeButton.textContent="Resume"),e?(y.tip.textContent="Paused. Adjust settings or resume.",(d=(h=this.audio).stopVocal)==null||d.call(h),this.audio.suspend(),this.showTopBanner(),this.renderGarage()):this.state.running&&(this.settingsOpenedFromOverlay&&((u=y.overlay)==null||u.classList.remove("hidden"),this.settingsOpenedFromOverlay=!1),this.audio.resume(),this.audio.playMusic(),this.showTopBanner(),y.tip.textContent=Gs?"Hold GAS for high-torque acceleration. Hold left/right to steer.":`${this.currentStage.tip} Hold W / Up Arrow for high-torque throttle!`)}clearTouchInput(){this.touchInput.steerZone=0,this.touchInput.throttle=!1,this.touchInput.brake=!1,this.touchInput.nitro=!1,this.steerPointerId=null,document.querySelectorAll("[data-touch]").forEach(e=>e.classList.remove("is-pressed"))}setSteerFromPointer(e){const t=this.container.getBoundingClientRect(),i=e-t.left;this.touchInput.steerZone=i<t.width*.5?-1:1}async configureTiltSteer(e){if(!e){this.motionSteer=0,this.settings.tiltSteer=!1,wi(this.settings),this.syncSettingsUi();return}if(typeof window.DeviceOrientationEvent>"u"){this.settings.tiltSteer=!1,wi(this.settings),this.syncSettingsUi(),y.tip.textContent="Tilt steering is not available on this device.";return}if(typeof window.DeviceOrientationEvent.requestPermission=="function")try{if(await window.DeviceOrientationEvent.requestPermission()!=="granted")throw new Error("denied")}catch{this.settings.tiltSteer=!1,wi(this.settings),this.syncSettingsUi(),y.tip.textContent="Tilt steering permission was denied.";return}this.settings.tiltSteer=!0,wi(this.settings),this.syncSettingsUi(),y.tip.textContent="Tilt steering enabled. Hold the phone like a steering wheel."}handleAppBackground(){this.clearTouchInput(),this.hideTopBanner(),this.audio.suspend(),this.state.running&&!this.state.paused&&!this.state.gameOver&&!this.state.stageCompleted&&(this.autoPausedFromBackground=!0,this.setPaused(!0),y.tip.textContent="Paused in background. Tap Resume when you return.")}updateSetting(e,t){this.settings[e]=t,wi(this.settings),this.audio.setSettings(this.settings),this.syncSettingsUi(),!this.settings.mute&&this.settings.music&&this.state.running&&!this.state.paused&&this.audio.playMusic()}bindEvents(){var n,s,r,o,l,c,h,d,u,f;window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",p=>{this.keys.add(p.code),p.code==="Escape"&&(p.preventDefault(),this.setPaused(!this.state.paused)),p.code==="Space"&&(p.preventDefault(),(!this.state.running||this.state.gameOver)&&this.startRun()),p.code==="KeyC"&&(p.preventDefault(),this.cycleCameraView()),p.code==="KeyR"&&(p.preventDefault(),this.cycleRadioStation()),p.code==="KeyV"&&(p.preventDefault(),this.cycleWeather()),p.code==="KeyE"&&Aa&&(p.preventDefault(),this.debugSpawnSnatcher(!0)),p.code==="KeyB"&&Aa&&(p.preventDefault(),this.debugSpawnPolice(!0)),p.code==="KeyP"&&Aa&&(p.preventDefault(),this.debugSpawnPolice(!1))}),window.addEventListener("keyup",p=>this.keys.delete(p.code)),window.addEventListener("blur",()=>{document.hidden&&this.handleAppBackground()}),document.addEventListener("visibilitychange",()=>{document.hidden?this.handleAppBackground():!this.adState.bannerVisible&&(this.state.running||this.state.paused)&&this.showTopBanner()});const e=(p,v)=>{if(!p)return;let g=0;const m=_=>{const M=performance.now();M-g<300||(g=M,_&&(_.preventDefault(),_.stopPropagation()),v(_))};p.addEventListener("click",m),p.addEventListener("touchend",_=>{_.preventDefault(),_.stopPropagation(),m(_)},{passive:!1})};e(y.overlayButton,()=>this.startRun()),y.overlayTrailerButton&&e(y.overlayTrailerButton,()=>this.openEncounterVideoModal("trailer")),e(y.policeChaseButton,()=>this.startRun(Je.policeChase.key)),e(y.policeRaceButton,()=>this.startRun(Je.policeRace.key)),e(y.overlaySettingsButton,()=>this.setPaused(!0)),e(y.overlayCornerSettingsButton,()=>this.setPaused(!0)),e(y.overlayShareButton,()=>this.shareScoreCard()),e(y.reviveButton,()=>this.showRewardedAd("revive")),e(y.doubleRewardButton,()=>this.showDoubleRewardAd()),e(y.shareScoreButton,()=>this.shareScoreCard()),y.testSnatcherButton&&e(y.testSnatcherButton,()=>{this.debugSpawnSnatcher(!0)}),y.testPoliceButton&&e(y.testPoliceButton,()=>{this.debugSpawnPolice(!0)}),y.testTrailerButton&&e(y.testTrailerButton,()=>{var p;(p=y.settingsPanel)==null||p.classList.add("hidden"),this.openEncounterVideoModal("trailer")}),this.customEncounterVideos={snatcher:null,police:null,trailer:null},y.uploadSnatcherVideoInput&&y.uploadSnatcherVideoInput.addEventListener("change",p=>{var g;const v=(g=p.target.files)==null?void 0:g[0];v&&(this.customEncounterVideos.snatcher&&URL.revokeObjectURL(this.customEncounterVideos.snatcher),this.customEncounterVideos.snatcher=URL.createObjectURL(v),y.tip.textContent=`🎬 Loaded custom E-Challan video: ${v.name}`)}),y.uploadPoliceVideoInput&&y.uploadPoliceVideoInput.addEventListener("change",p=>{var g;const v=(g=p.target.files)==null?void 0:g[0];v&&(this.customEncounterVideos.police&&URL.revokeObjectURL(this.customEncounterVideos.police),this.customEncounterVideos.police=URL.createObjectURL(v),y.tip.textContent=`🎬 Loaded custom Police Stop video: ${v.name}`)}),y.encounterQuickUploadInput&&y.encounterQuickUploadInput.addEventListener("change",p=>{var m;const v=(m=p.target.files)==null?void 0:m[0];if(!v)return;const g=this.activeEncounterType||"snatcher";this.customEncounterVideos[g]&&URL.revokeObjectURL(this.customEncounterVideos[g]),this.customEncounterVideos[g]=URL.createObjectURL(v),this.openEncounterVideoModal(g)}),y.encounterActionPrimary&&e(y.encounterActionPrimary,()=>this.resolveEncounterCutscene("primary")),y.encounterActionSecondary&&e(y.encounterActionSecondary,()=>this.resolveEncounterCutscene("secondary")),y.encounterActionReplay&&e(y.encounterActionReplay,()=>{this.openEncounterVideoModal(this.activeEncounterType||"snatcher",!0)}),y.encounterActionEnd&&e(y.encounterActionEnd,()=>this.resolveEncounterCutscene("end")),y.streakButton&&e(y.streakButton,()=>this.openDailyStreakModal()),y.streakCloseButton&&e(y.streakCloseButton,()=>this.closeDailyStreakModal()),y.streakClaimButton&&e(y.streakClaimButton,()=>this.claimDailyStreakReward()),y.streakModal&&y.streakModal.addEventListener("click",p=>{p.target===y.streakModal&&this.closeDailyStreakModal()}),y.rewardsButton&&e(y.rewardsButton,()=>this.openCommunityRewardsModal()),y.communityCloseButton&&e(y.communityCloseButton,()=>this.closeCommunityRewardsModal()),y.communityRewardsModal&&(y.communityRewardsModal.addEventListener("click",p=>{p.target===y.communityRewardsModal&&this.closeCommunityRewardsModal()}),y.communityRewardsModal.querySelectorAll("[data-community-action]").forEach(p=>{e(p,()=>{this.handleCommunityRewardAction(p.dataset.communityAction)})}));const t=new Date().toISOString().slice(0,10);this.progress.lastStreakClaimDate!==t&&window.setTimeout(()=>{!this.state.running&&y.overlay&&!y.overlay.classList.contains("hidden")&&this.openDailyStreakModal()},800),y.overlay.addEventListener("pointerup",p=>{p.target.closest(".overlay-card, button, a, input, select")||this.startRun()}),y.reviveButton.addEventListener("click",()=>this.showRewardedAd("revive")),(n=y.doubleRewardButton)==null||n.addEventListener("click",()=>this.showDoubleRewardAd()),(s=y.shareScoreButton)==null||s.addEventListener("click",()=>this.shareScoreCard()),(r=y.radioButton)==null||r.addEventListener("click",p=>{p.preventDefault(),this.cycleRadioStation()}),(o=y.radioStationSelect)==null||o.addEventListener("change",p=>{this.setRadioStation(parseInt(p.target.value,10))}),(l=y.weatherButton)==null||l.addEventListener("click",p=>{p.preventDefault(),this.cycleWeather()}),(c=y.weatherSelect)==null||c.addEventListener("change",p=>{this.setWeatherMode(p.target.value)}),(h=y.cameraButton)==null||h.addEventListener("click",p=>{p.preventDefault(),this.cycleCameraView()}),e(y.pauseButton,()=>{this.state.paused?this.setPaused(!1):this.setPaused(!0)}),e(y.settingsButton,()=>this.setPaused(!0)),e(y.resumeButton,()=>this.setPaused(!1)),e(y.bottomResumeButton,()=>this.setPaused(!1));let i=!1;if(y.settingsPanel.addEventListener("pointerdown",p=>{i=p.target===y.settingsPanel,p.stopPropagation()}),y.settingsPanel.addEventListener("pointermove",p=>p.stopPropagation()),y.settingsPanel.addEventListener("wheel",p=>p.stopPropagation(),{passive:!0}),y.settingsPanel.addEventListener("pointerup",p=>{p.stopPropagation(),!(performance.now()-(this.settingsOpenedAt||0)<600)&&(i&&p.target===y.settingsPanel&&this.setPaused(!1),i=!1)}),y.settingsPanel.addEventListener("click",p=>{p.stopPropagation(),!(performance.now()-(this.settingsOpenedAt||0)<600)&&(i&&p.target===y.settingsPanel&&(p.preventDefault(),this.setPaused(!1)),i=!1)}),document.querySelectorAll("[data-settings-tab]").forEach(p=>{p.addEventListener("click",()=>this.setSettingsTab(p.dataset.settingsTab))}),y.muteToggle.addEventListener("change",p=>this.updateSetting("mute",p.target.checked)),y.musicToggle.addEventListener("change",p=>this.updateSetting("music",p.target.checked)),y.sfxToggle.addEventListener("change",p=>this.updateSetting("sfx",p.target.checked)),(d=y.musicVolume)==null||d.addEventListener("input",p=>{const v=parseInt(p.target.value,10)/100;this.settings.musicVolume=v,wi(this.settings),this.audio.setSettings(this.settings),y.musicVolumeLabel&&(y.musicVolumeLabel.textContent=`${Math.round(v*100)}%`)}),(u=y.sfxVolume)==null||u.addEventListener("input",p=>{const v=parseInt(p.target.value,10)/100;this.settings.sfxVolume=v,wi(this.settings),this.audio.setSettings(this.settings),y.sfxVolumeLabel&&(y.sfxVolumeLabel.textContent=`${Math.round(v*100)}%`)}),(f=y.hapticsToggle)==null||f.addEventListener("change",p=>{this.settings.haptics=p.target.checked,wi(this.settings),p.target.checked&&this.triggerHaptic(25)}),y.tiltToggle.addEventListener("change",p=>this.configureTiltSteer(p.target.checked)),document.querySelectorAll("[data-touch]").forEach(p=>{const v=p.dataset.touch,g=(m,_)=>{_.preventDefault(),this.touchInput[v]=m,p.classList.toggle("is-pressed",m)};p.addEventListener("pointerdown",m=>g(!0,m)),p.addEventListener("pointerup",m=>g(!1,m)),p.addEventListener("pointercancel",m=>g(!1,m)),p.addEventListener("pointerleave",m=>g(!1,m)),p.addEventListener("lostpointercapture",m=>g(!1,m))}),Gs){this.container.addEventListener("pointerdown",v=>{v.pointerType==="touch"&&(!this.state.running||this.state.paused||v.target.closest(".touch-controls, .top-actions, .settings-panel, .overlay, .overlay-card")||(this.steerPointerId=v.pointerId,this.setSteerFromPointer(v.clientX)))}),this.container.addEventListener("pointermove",v=>{v.pointerType!=="touch"||v.pointerId!==this.steerPointerId||this.setSteerFromPointer(v.clientX)});const p=v=>{v.pointerType==="touch"&&this.steerPointerId===v.pointerId&&(this.touchInput.steerZone=0,this.steerPointerId=null)};this.container.addEventListener("pointerup",p),this.container.addEventListener("pointercancel",p),this.container.addEventListener("pointerleave",p),window.addEventListener("deviceorientation",v=>{if(!this.settings.tiltSteer)return;const g=typeof v.gamma=="number"?v.gamma:0;this.motionSteer=oe.clamp(g/18,-1,1)})}}startRun(e=Je.career.key){var i,n;this.closeDailyStreakModal(),this.closeEncounterVideoModal(),!this.trafficModelsReady&&!this.trafficModelLoadPromise&&this.ensureTrafficModelsLoaded().catch(s=>console.warn("Traffic preload failed",s));const t=this.getModelPath("player",this.selectedCar.key);if(t&&!this.modelTemplates.has(t)&&!this.failedModelPaths.has(t)&&this.loadCurrentPlayerModel().catch(s=>console.warn("Player model preload failed",s)),this.progress.onboardingSeen||(this.progress.onboardingSeen=!0,At(this.progress)),this.state.stageCompleted){const s=this.state.stageIndex+1;this.state=this.initialState(),this.state.stageIndex=s}else if(!this.state.running&&!this.state.gameOver){const s=this.state.stageIndex;this.state=this.initialState(),this.state.stageIndex=s}else this.state=this.initialState();this.pendingRunMode=e,this.state.gameMode=e,this.selectedCar=this.getSelectedGarageVehicle(),this.state.maxSpeed=this.selectedCar.topSpeed,this.state.maxHealth=this.selectedCar.maxHealth??100,this.state.maxFuel=this.selectedCar.maxFuel??100,this.state.maxNitro=this.selectedCar.maxNitro??100,this.state.health=this.state.maxHealth,this.state.fuel=this.state.maxFuel,this.state.nitro=this.state.maxNitro,this.state.stoppingSequence=null,this.state.nitroTimer=0,this.state.slingshotCharge=0,this.state.slingshotBoostTimer=0,(i=this.lahoriCutPairs)==null||i.clear(),this.createPlayerCar(),this.applyTrackTheme(),this.state.running=!0,this.state.countdown=0,this.state.countdownStarted=!1,this.state.targetSpeed=Math.min(48,this.currentStage.speedCap*.45),this.state.speed=Math.min(24,this.state.targetSpeed),this.state.stageProgress=1,this.resetRoadsideAnchors(),this.player.position.set(0,.72,10),this.player.rotation.set(0,this.player.userData.baseYaw??0,0),this.traffic.forEach(s=>this.deactivate(s)),this.police.forEach(s=>this.deactivate(s)),this.roadblocks.forEach(s=>this.deactivate(s)),this.rivalBoss&&this.deactivate(this.rivalBoss),this.policeRaceLeader&&this.deactivate(this.policeRaceLeader),this.fuelCans.forEach(s=>this.deactivate(s)),this.healers.forEach(s=>this.deactivate(s)),this.resetFinishLine(),this.ghostActive=!1,this.ghostRecorder=null,y.ghostSplitIndicator&&y.ghostSplitIndicator.classList.add("hidden"),y.overlay.classList.add("hidden"),document.body.classList.remove("overlay-active"),this.audio.resume(),(n=y.doubleRewardButton)==null||n.classList.add("hidden"),this.pendingDoubleReward=null,this.showTopBanner(),this.setPaused(!1),this.showRaceBanner("Go",Je[e===Je.policeChase.key?"policeChase":e===Je.policeRace.key?"policeRace":"career"].label,this.currentStage.track.vibe,1.2),this.activeWeatherPreset&&this.activeWeatherPreset.key!=="clear"&&setTimeout(()=>this.showWeatherBanner(this.activeWeatherPreset),1500),y.tip.textContent=Gs?`${this.getRunModeLabel()}: Hold GAS for high-torque acceleration, or release to cruise.`:`${this.getRunModeLabel()}: Hold W / Up Arrow for high-torque acceleration, or release to cruise.`,y.overlayButton.textContent="Start Run",this.audio.playMusic(!0),this.audio.tone(440,.18,"square",.05),e===Je.policeChase.key?this.startPoliceChaseMode():e===Je.policeRace.key?this.startPoliceRaceMode():this.currentStage.isBoss?(this.state.heat=Math.max(this.state.heat,this.currentStage.policeHeatThreshold+8),this.spawnBossRival(),this.showRaceBanner("Boss Race",this.rivalBoss.userData.name,this.rivalBoss.userData.taunt,2.8),this.audio.playPoliceSiren()):this.selectedCar.premium&&(this.state.cinematicTimer=1.1,this.showRaceBanner("Premium Intro",this.selectedCar.label,"Launch sequence armed",1.6),this.audio.playNitroBurst()),this.updateHud()}getRunModeDefinition(){return this.state.gameMode===Je.policeChase.key?Je.policeChase:this.state.gameMode===Je.policeRace.key?Je.policeRace:Je.career}getRunModeLabel(){return this.getRunModeDefinition().label}getRunModeObjective(){return this.getRunModeDefinition().objective}isSpecialPoliceMode(){return this.state.gameMode===Je.policeChase.key||this.state.gameMode===Je.policeRace.key}getEffectivePoliceThreshold(e=this.currentStage){return this.state.gameMode===Je.policeChase.key?Math.min(e.policeHeatThreshold,42):this.state.gameMode===Je.policeRace.key?Math.min(e.policeHeatThreshold,34):e.policeHeatThreshold}startPoliceChaseMode(){const e=this.currentStage;this.state.heat=Math.max(this.state.heat,Math.min(100,this.getEffectivePoliceThreshold(e)+a_)),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,2),this.state.policeSpawn=0,this.state.roadblockSpawn=0,this.state.spikeSpawn=0,this.spawnPoliceCar(),this.showRaceBanner("Police Chase","Wanted Run","Escape Lahore Police before the finish",2.4),this.audio.playPoliceSiren(),this.triggerPoliceDispatch("pursuit")}startPoliceRaceMode(){const e=this.currentStage;this.policeRaceLeader||this.createPoliceRaceLeader(),this.state.heat=Math.max(this.state.heat,Math.min(100,this.getEffectivePoliceThreshold(e)+r_)),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,3),this.state.policeSpawn=0,this.state.roadblockSpawn=0,this.state.spikeSpawn=0,this.spawnPoliceRaceLeader(),this.spawnPoliceCar(),this.showRaceBanner("Police Race","Interceptor Ahead","Overtake the police leader before the finish",2.6),this.audio.playPoliceSiren(),this.triggerPoliceDispatch("pursuit")}debugSpawnSnatcher(e=!1){(!this.state.running||this.state.gameOver||this.state.stageCompleted)&&this.startRun(this.state.gameMode||Je.career.key),this.state.paused&&this.setPaused(!1),this.state.heat=Math.max(this.state.heat,88),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,3),this.state.policeSpawn=0;let t=this.police.find(i=>i.userData.unitType==="snatcher"&&!i.userData.active);if(t||(t=this.police.find(i=>i.userData.unitType==="snatcher")||this.police[0],t&&this.deactivate(t)),t){t.userData.active=!0,t.userData.aggression=1.4,t.userData.behavior="chase",t.visible=!0;const i=e?this.player.position.z-6:this.player.position.z-26;t.position.set(this.player.position.x+-1.65,.72,i),t.rotation.set(0,0,0)}e&&t?this.triggerCarStopEncounter("snatcher",t):(this.showRaceBanner("📸 PSCA SAFE CITY E-CHALLAN!","Dolphin Force Heavy Bike!","Flanking window! Hit 2.0x Nitro to blind ANPR radar!",2.2),this.audio.playPoliceSiren(),this.audio.playSnatcherRev(),y.tip.textContent="📸 Dolphin Force E-Challan unit flanking! Hit Nitro to blind ANPR cameras!"),this.updateHud()}debugSpawnPolice(e=!1){(!this.state.running||this.state.gameOver||this.state.stageCompleted)&&this.startRun(this.state.gameMode||Je.career.key),this.state.paused&&this.setPaused(!1);const t=this.currentStage;this.state.heat=Math.max(this.state.heat,(t.policeHeatThreshold||40)+35),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,4),this.state.policeSpawn=0,this.state.roadblockSpawn=0;let i=this.police.find(n=>n.userData.unitType==="police"&&!n.userData.active);i||(i=this.police.find(n=>n.userData.unitType==="police")||this.police[this.police.length-1],i&&this.deactivate(i)),i&&(i.userData.active=!0,i.userData.aggression=1.45,i.userData.behavior="chase",i.visible=!0,i.position.set(this.player.position.x+1.85,.72,this.player.position.z-8),i.rotation.set(0,i.userData.baseYaw??Math.PI,0)),e&&i?this.triggerCarStopEncounter("police",i):(this.spawnRoadblock(),this.showRaceBanner("🚓 PUNJAB POLICE NAKA PURSUIT!",`Heat Level ${this.state.pursuitLevel}`,"Gaari side pe lagao! Naka roadblock ahead!",2),this.audio.playPoliceSiren(),y.tip.textContent="🚓 Punjab Police Cruiser in pursuit! Outrun or get pulled over at the Naka!"),this.updateHud()}triggerCarStopEncounter(e="snatcher",t=null){var i;(i=this.state.stoppingSequence)!=null&&i.active||this.isEncounterModalOpen||(this.activeEncounterType=e,this.state.stoppingSequence={active:!0,type:e,timer:1.35,duration:1.35,unit:t,initialSpeed:Math.max(45,this.state.speed)},this.audio.playPoliceSiren(),this.audio.playDrift(),e==="snatcher"?(this.triggerImpactFx(),this.audio.playCameraShutter(),this.audio.playSnatcherRev(),this.audio.speakVocal("echallan_ambush",!0),this.showRaceBanner("📸 PSCA SAFE CITY E-CHALLAN STOP!","DOLPHIN FORCE INTERCEPT! 🏍️🚨","ANPR Camera locked your plate! Braking to 0 KM/H...",1.5),y.tip.textContent="📸 Dolphin Squad Heavy Bike intercepted your car for a PSCA E-Challan!"):(this.audio.speakVocal("police_approach",!0),this.showRaceBanner("🚓 PULLED OVER AT PUNJAB POLICE NAKA!","GAARI SIDE PE LAGAO! 🚨","Punjab Police Cruiser boxed your lane! Braking to 0 KM/H...",1.5),y.tip.textContent="🚓 Punjab Police Naka forced your car to pull over!"))}openEncounterVideoModal(e="snatcher"){var c,h,d,u;this.activeEncounterType=e,this.isEncounterModalOpen=!0,this.playingEncounterOutcomeClip=!1,this.pendingEncounterChoice=null,this.state.paused=!0,this.state.speed=0,this.state.targetSpeed=0,this.audio.duckAudio(.12),this.audio.stopMusic();const t=e==="police",i=e==="trailer",n=e==="victory",s={path:ne("/videos/echallan_stop.mp4"),label:"PSCA SAFE CITY ANPR CAM · LIVE AUDIO",camTag:"PSCA-CAM-09 · CANAL ROAD ANPR GANTRY [LIVE]",subtitle:'📸 "Safe City Alert! Number plate scan ho gayi... Gaari side pe lagao paijaan!"'};if(!i&&!n?this.audio.playPoliceSiren():n&&(this.audio.tone(523,.2,"triangle",.05),this.audio.tone(659,.25,"triangle",.05),this.audio.tone(784,.35,"triangle",.06)),!y.encounterVideoModal)return;y.encounterVideoModal.classList.remove("hidden"),(c=y.encounterVideoCard)==null||c.classList.toggle("police-theme",t||i),y.encounterVideoKicker&&(y.encounterVideoKicker.textContent=n?"🏆 GRAND CHAMPION · KING OF LAHORE VICTORY":i?"🎬 NEED FOR SPEED LAHORE · OFFICIAL 9:16 TRAILER":t?"🚓 PUNJAB POLICE NAKA INTERCEPT · BODYCAM REC":`📸 PSCA SAFE CITY E-CHALLAN · ${s.label}`),y.encounterVideoTitle&&(y.encounterVideoTitle.textContent=n?"👑 YOU ARE THE KING OF LAHORE!":i?"🏎️ NEED FOR SPEED: LAHORE EDITION":t?"🚓 CAR STOPPED AT PUNJAB POLICE NAKA!":"📸 STOPPED BY DOLPHIN FORCE E-CHALLAN!"),y.encounterVideoSubtitle&&(y.encounterVideoSubtitle.textContent=n?"Mubarak ho! You conquered all 5 stages from Canal Road to Minar-e-Pakistan! +2,500 Champion CR & King of Lahore Gold Livery unlocked!":i?"High-speed midnight street racing through Lahore — weave past Canal Road, Liberty Chowk, Mall Road & Ring Road with 2.0x Nitro Surge!":t?`Punjab Police Patrol boxed in your ${this.selectedCar.label} at Heat ${Math.round(this.state.heat)}%! Officer is approaching your window.`:`PSCA Safe City ANPR cameras clocked your ${this.selectedCar.label} over the speed limit and a Dolphin Squad heavy bike pulled you over!`),y.encounterCamTag&&(y.encounterCamTag.textContent=n?"LAHORE CITY · CHAMPIONSHIP CELEBRATION [LIVE]":i?"NFS LAHORE · CINEMATIC TRAILER":t?"CAM-04 · PUNJAB POLICE NAKA DASHCAM [LIVE]":s.camTag),y.encounterSubtitleBar&&(y.encounterSubtitleBar.textContent=n?'🏆 "FM 106.2 BREAKING: Canal Road se Minar-e-Pakistan tak naye Champion ne record bana diya! King of Lahore is crowned!"':i?'🔥 "Welcome to Need for Speed Lahore — Hit 2.0x Nitro & Rule the Streets!"':t?'🚓 "Punjab Police! Gaari foran side pe roko! Naka cross mat karna! 180 di speed te jahaz banaya ae? License te kaaghzaat kaddo!"':s.subtitle),y.encounterActionPrimary&&(y.encounterActionPrimary.textContent=n?"👑 CLAIM 2,500 CR & ENTER GARAGE":i?"🏁 START RACE NOW!":t?"💸 PAY ON-SPOT CHALLAN (-200 CR · Clear Heat & Drive)":"🔥 FLIP NUMBER PLATE & SLAM NITRO! (+400 Score · Escape!)"),y.encounterActionSecondary&&(y.encounterActionSecondary.classList.toggle("hidden",i||n),!i&&!n&&(y.encounterActionSecondary.textContent=t?"⚡ FULL THROTTLE NAKA BREAKOUT! (Keep CR · 100% Max Heat!)":"💳 PAY ONLINE E-CHALLAN (-150 CR · Clear Radar & Drive)")),y.encounterActionReplay&&(y.encounterActionReplay.textContent=n?"🔁 Replay Celebration":i?"🔁 Replay Trailer":"🎬 Replay Cutscene"),y.encounterActionEnd&&(y.encounterActionEnd.textContent=n?"✕ Close":i?"✕ Close Trailer":"🏁 End Run");const r=n?ne("/videos/victory_champion.mp4"):i?ne("/videos/nfs_lahore_intro.mp4"):t?ne("/videos/police_stop.mp4"):s.path,o=(h=this.customEncounterVideos)==null?void 0:h[e],l=o||r;if(this.stopEncounterCanvasMovie(),y.encounterCutsceneVideo){const f=y.encounterCutsceneVideo,p=o?l:`${l}${l.includes("?")?"&":"?"}v=5`;(d=y.encounterCutsceneCanvas)==null||d.classList.add("hidden"),f.classList.remove("hidden"),f.loop=!1,f.onended=()=>{f.pause()},(u=y.encounterVideoModal)==null||u.classList.remove("is-portrait-video"),y.encounterSourceBadge&&(y.encounterSourceBadge.textContent=n?"🏆 HD VICTORY CELEBRATION (victory_champion.mp4)":i?"🎬 HD TRAILER (nfs_lahore_intro.mp4)":t?"🎬 HD PUNJAB POLICE NAKA (police_stop.mp4)":`🎬 HD · ${s.label}`),this.audio.stopVocal();const v=()=>{var m,_;if(!this.isEncounterModalOpen)return;f.muted=!!((m=this.settings)!=null&&m.mute),f.volume=(_=this.settings)!=null&&_.mute?0:1;const g=f.play();g&&typeof g.catch=="function"&&g.catch(()=>{f.muted=!0,f.play().catch(()=>{}),i||this.audio.speakVocal(t?"police_stop":"echallan_stop",!0)})};f.onloadedmetadata=()=>{var m;const g=(f.videoHeight||1080)>(f.videoWidth||1920);(m=y.encounterVideoModal)==null||m.classList.toggle("is-portrait-video",g),v()},f.oncanplay=()=>{v()},f.onerror=()=>{var g;f.classList.add("hidden"),(g=y.encounterCutsceneCanvas)==null||g.classList.remove("hidden"),i||this.audio.speakVocal(t?"police_stop":"echallan_stop",!0),this.startEncounterCanvasMovie(t?"police":"snatcher")},f.pause(),f.src=p,f.currentTime=0,f.load(),v()}}stopEncounterCanvasMovie(){this.encounterCanvasRaf&&(cancelAnimationFrame(this.encounterCanvasRaf),this.encounterCanvasRaf=null)}startEncounterCanvasMovie(e="snatcher"){this.stopEncounterCanvasMovie();const t=y.encounterCutsceneCanvas;if(!t)return;const i=t.getContext("2d"),n=performance.now(),s=e==="police",r=['00:01 · [PSCA ANPR] "Over-speeding detected on Canal Road — Dolphin Squad dispatched!"','00:03 · "180 ki speed pe urra rahe ho?! License aur gaari ke kaaghzaat nikalo!"','00:05 · "Dolphin Force officer scanning your number plate for PSCA E-Challan..."'],o=['00:01 · [MEGAPHONE] "Punjab Police Naka! Gaari foran side pe lagao!"','00:03 · "180 KM/H pe urra rahe ho?! License aur gaari ke kaghazat nikalo!"','00:05 · "Officer writing Naka Challan — Pay fine or floor the gas to break out!"'],l=c=>{if(!this.isEncounterModalOpen)return;const h=(c-n)/1e3,d=t.width,u=t.height,f=s?o:r,p=Math.min(f.length-1,Math.floor(h/2.2));y.encounterSubtitleBar&&y.encounterSubtitleBar.textContent!==f[p]&&(y.encounterSubtitleBar.textContent=f[p]);const v=i.createLinearGradient(0,0,0,u*.58);s?(v.addColorStop(0,"#060d1f"),v.addColorStop(1,"#152642")):(v.addColorStop(0,"#07131f"),v.addColorStop(1,"#0f2942")),i.fillStyle=v,i.fillRect(0,0,d,u*.58),i.fillStyle="#090d16";for(let m=0;m<12;m++){const _=m*74-h*6%74,M=65+m*37%85;i.fillRect(_,u*.58-M,66,M)}for(let m=0;m<7;m++){const _=60+m*125,M=i.createRadialGradient(_,u*.42,2,_,u*.42,48);M.addColorStop(0,"rgba(251, 191, 36, 0.85)"),M.addColorStop(1,"rgba(251, 191, 36, 0)"),i.fillStyle=M,i.beginPath(),i.arc(_,u*.42,48,0,Math.PI*2),i.fill()}const g=i.createLinearGradient(0,u*.58,0,u);if(g.addColorStop(0,"#1e293b"),g.addColorStop(1,"#090d16"),i.fillStyle=g,i.fillRect(0,u*.58,d,u*.42),i.save(),i.translate(d*.62,u*.68),i.fillStyle="#334155",i.beginPath(),i.roundRect(-140,-38,250,56,12),i.fill(),i.fillStyle="#1e293b",i.beginPath(),i.roundRect(-95,-82,165,48,10),i.fill(),i.fillStyle="#0f172a",i.fillRect(-78,-76,72,38),Math.floor(c/260)%2===0&&(i.fillStyle="#f59e0b",i.shadowColor="#f59e0b",i.shadowBlur=18,i.fillRect(-142,-22,14,16),i.shadowBlur=0),i.restore(),s){const _=85+Math.min(1,h/.85)*165,M=u*.71,b=Math.floor(c/140)%2;i.fillStyle=b===0?"rgba(239, 68, 68, 0.14)":"rgba(59, 130, 246, 0.14)",i.fillRect(0,0,d,u),i.save(),i.translate(_,M),i.fillStyle="#0f172a",i.beginPath(),i.roundRect(-135,-36,255,52,8),i.fill(),i.fillStyle="#1e3a8a",i.beginPath(),i.roundRect(-65,-76,135,42,6),i.fill(),i.strokeStyle="#94a3b8",i.lineWidth=3,i.strokeRect(-130,-74,62,38),i.fillStyle="#f8fafc",i.font="bold 13px Segoe UI, sans-serif",i.fillText("PUNJAB POLICE · LAHORE",-62,-8),i.fillStyle=b===0?"#ef4444":"#3b82f6",i.shadowColor=i.fillStyle,i.shadowBlur=24,i.fillRect(-18,-88,48,11),i.shadowBlur=0,[-82,74].forEach(A=>{i.fillStyle="#09090b",i.beginPath(),i.arc(A,18,25,0,Math.PI*2),i.fill()});const E=115+Math.min(55,h*22);i.fillStyle="#1e293b",i.fillRect(E,-58,24,52),i.fillStyle="#fde68a",i.beginPath(),i.arc(E+12,-70,12,0,Math.PI*2),i.fill(),i.fillStyle="#1e3a8a",i.fillRect(E-2,-84,28,8),i.fillStyle="rgba(254, 243, 199, 0.32)",i.beginPath(),i.moveTo(E+24,-42),i.lineTo(E+135,-82),i.lineTo(E+135,-18),i.closePath(),i.fill(),i.fillStyle="rgba(30, 58, 138, 0.95)",i.beginPath(),i.roundRect(-85,-138,265,34,8),i.fill(),i.fillStyle="#ffffff",i.font="bold 13px Segoe UI, sans-serif",i.fillText('🚓 "KAGHAZAT DIKHAO! CHALLAN HOGA!"',-75,-116),i.restore()}else{const _=110+Math.min(1,h/.9)*195+Math.sin(h*18)*1.5,M=u*.73;i.save(),i.translate(_,M),i.strokeStyle="#94a3b8",i.lineWidth=5,[-52,54].forEach(x=>{i.fillStyle="#09090b",i.beginPath(),i.arc(x,14,24,0,Math.PI*2),i.fill(),i.stroke()}),i.fillStyle="#f8fafc",i.beginPath(),i.roundRect(-48,-26,96,24,6),i.fill(),i.fillStyle="#dc2626",i.fillRect(-46,-18,92,8),i.fillStyle="#0f172a",i.font="bold 10px sans-serif",i.fillText("DOLPHIN",-22,-8),i.fillStyle="#09090b",i.fillRect(-8,-72,28,48),i.fillStyle="#dc2626",i.beginPath(),i.arc(8,-82,15,0,Math.PI*2),i.fill(),i.fillStyle="#18181b",i.fillRect(-44,-74,28,50),i.fillStyle="#dc2626",i.beginPath(),i.arc(-30,-86,14,0,Math.PI*2),i.fill();const E=55+(Math.sin(h*3.2)*.5+.5)*55;i.strokeStyle="#18181b",i.lineWidth=10,i.lineCap="round",i.beginPath(),i.moveTo(-20,-56),i.lineTo(-20+E,-64),i.stroke();const A=-16+E,P=-74;i.fillStyle="#38bdf8",i.shadowColor="#38bdf8",i.shadowBlur=18,i.fillRect(A,P,18,28),i.shadowBlur=0,i.fillStyle="rgba(2, 132, 199, 0.94)",i.beginPath(),i.roundRect(-115,-138,265,34,8),i.fill(),i.fillStyle="#ffffff",i.font="bold 13px Segoe UI, sans-serif",i.fillText('📸 "PSCA SAFE CITY E-CHALLAN ISSUED!"',-105,-116),i.restore()}i.fillStyle="rgba(255, 255, 255, 0.03)";for(let m=0;m<u;m+=4)i.fillRect(0,m,d,1);this.encounterCanvasRaf=requestAnimationFrame(l)};this.encounterCanvasRaf=requestAnimationFrame(l)}closeEncounterVideoModal(){this.isEncounterModalOpen=!1,this.playingEncounterOutcomeClip=!1,this.pendingEncounterChoice=null,this.stopEncounterCanvasMovie(),this.audio.stopVocal(),y.encounterCutsceneVideo&&(y.encounterCutsceneVideo.onended=null,y.encounterCutsceneVideo.pause()),y.encounterVideoModal&&y.encounterVideoModal.classList.add("hidden"),this.audio.restoreAudio()}resolveEncounterCutscene(e="primary"){var o,l,c,h;const t=this.activeEncounterType||"snatcher",i=t==="police",n=t==="trailer",s=t==="victory";if(n||s){this.closeEncounterVideoModal(),s?(this.setPaused(!0),this.renderGarage()):e==="primary"?this.startRun():this.state.running&&!this.state.gameOver&&(this.state.paused=!1,this.audio.playMusic());return}if(e==="end"){this.police.forEach(d=>{Math.abs(d.position.z-this.player.position.z)<28&&this.deactivate(d)}),this.state.stoppingSequence&&(this.state.stoppingSequence.active=!1),this.closeEncounterVideoModal(),this.endRun(i?"police_busted":"echallan_impounded");return}const r=this.playingEncounterOutcomeClip&&this.pendingEncounterChoice||e;if(!this.playingEncounterOutcomeClip&&!((o=this.customEncounterVideos)!=null&&o[t])&&y.encounterCutsceneVideo&&!y.encounterCutsceneVideo.classList.contains("hidden")){this.playingEncounterOutcomeClip=!0,this.pendingEncounterChoice=e;const d=y.encounterCutsceneVideo,u=ne(i?e==="primary"?"/videos/police_paid.mp4":"/videos/police_escape.mp4":e==="primary"?"/videos/echallan_escape.mp4":"/videos/echallan_paid.mp4");y.encounterVideoTitle&&(y.encounterVideoTitle.textContent=i?e==="primary"?"✅ PUNJAB POLICE CHALLAN CLEARED!":"⚡ NAKA BARRICADE SMASHED · 15 CONTROL ALERT!":e==="primary"?"🔥 NUMBER PLATE FLIPPED · 2.0x NITRO ESCAPE!":"💳 PSCA SAFE CITY E-CHALLAN CLEARED!"),y.encounterSubtitleBar&&(y.encounterSubtitleBar.textContent=i?e==="primary"?'🚓 "Chalo theek hai, challan clear. Rasta kholo! Jaan deyo!"':'🚓 "15 Control! Mulzim naka tor ke bhaag gaya hai! Tamam Dolphin te Vigo units gherao karo!"':e==="primary"?'🏍️ "Oye hoye! Number plate flip kar ke Nitro maar gaya! Dolphin Squad peechay lago!"':'📸 "Shukriya paijaan! E-Challan jama ho gaya. Aainda speed limit mein chalana!"'),y.encounterActionPrimary&&(y.encounterActionPrimary.textContent="⏭ CONTINUE TO RACE NOW!"),(l=y.encounterActionSecondary)==null||l.classList.add("hidden"),this.audio.stopVocal(),d.pause(),d.loop=!1,d.src=`${u}?v=5`,d.currentTime=0,d.muted=!!((c=this.settings)!=null&&c.mute),d.volume=(h=this.settings)!=null&&h.mute?0:1,d.onended=()=>{this.isEncounterModalOpen&&this.playingEncounterOutcomeClip&&this.resolveEncounterCutscene(r)},d.onerror=()=>{this.isEncounterModalOpen&&this.playingEncounterOutcomeClip&&this.resolveEncounterCutscene(r)},d.load();const f=d.play();f&&typeof f.catch=="function"&&f.catch(()=>{this.resolveEncounterCutscene(r)});return}this.police.forEach(d=>{Math.abs(d.position.z-this.player.position.z)<28&&this.deactivate(d)}),this.state.stoppingSequence&&(this.state.stoppingSequence.active=!1),this.closeEncounterVideoModal(),this.state.paused=!1,this.state.running=!0,this.audio.playMusic(),i?r==="primary"?(this.progress.credits=Math.max(0,(this.progress.credits||0)-200),At(this.progress),this.refreshProgressUi(),this.state.heat=0,this.state.pursuitLevel=0,this.state.speed=55,this.state.targetSpeed=80,this.audio.speakVocal("police_paid",!0),this.showRaceBanner("CHALLAN CLEARED ✅","-200 CR · Heat Reset to 0%","Punjab Police cleared your lane — drive safe!",1.8),y.tip.textContent="💸 Paid 200 CR Challan at the Punjab Police Naka! Heat reset to 0%."):(this.state.heat=100,this.state.pursuitLevel=5,this.state.nitroTimer=2,this.state.nitroActive=!0,this.state.speed=Math.min(this.state.maxSpeed*1.6,130),this.state.targetSpeed=Math.min(this.state.maxSpeed*1.9,165),this.state.cameraShake=.8,this.triggerImpactFx(),this.triggerBackfire(1.4,3),this.audio.playNitroBurst(),this.audio.playPoliceSiren(),this.audio.speakVocal("police_breakout",!0),this.showRaceBanner("⚡ NAKA BREAKOUT! 🚨","HEAT 100% · LEVEL 5 PURSUIT!","You burned rubber away from Punjab Police!",2),y.tip.textContent="⚡ Broke out of the Punjab Police Naka! Maximum Heat Level 5!"):r==="primary"?(this.state.nitro=Math.max(25,this.state.nitro),this.state.nitroTimer=2.4,this.state.nitroActive=!0,this.state.speed=Math.min(this.state.maxSpeed*1.6,130),this.state.targetSpeed=Math.min(this.state.maxSpeed*1.9,165),this.state.score+=400,this.state.heat=Math.min(100,this.state.heat+18),this.state.cameraShake=.65,this.audio.playNitroBurst(),this.audio.speakVocal("echallan_escape",!0),this.showRaceBanner("📸 ANPR CAMERA BLINDED! 💥","+400 Score · 2.0x Nitro!","Flipped plate & blasted past Dolphin Force!",2),y.tip.textContent="🔥 You flipped your number plate, slammed 2.0x Nitro, and escaped the PSCA E-Challan!"):(this.progress.credits=Math.max(0,(this.progress.credits||0)-150),At(this.progress),this.refreshProgressUi(),this.state.speed=55,this.state.targetSpeed=80,this.state.heat=Math.max(0,this.state.heat-35),this.audio.speakVocal("echallan_paid",!0),this.showRaceBanner("💳 PSCA E-CHALLAN PAID ✅","-150 CR · Radar Cleared!","Dolphin Force cleared your lane — drive safe!",1.8),y.tip.textContent="💳 Paid 150 CR online E-Challan via PSCA app and resumed your run!"),this.updateHud()}deactivate(e){e.visible=!1,e.userData.active=!1,e.position.set(0,-50,0)}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.resizeWeatherCanvas()}render(){requestAnimationFrame(()=>this.render());const e=performance.now(),t=Math.min((e-this.lastRenderTime)/1e3,.033);this.lastRenderTime=e,this.renderFrame(t)}startFrameFallback(){if(this.frameFallback)return;let e=performance.now();this.frameFallback=window.setInterval(()=>{const t=performance.now();if(t-this.lastFrameAt<250)return;const i=Math.min((t-e)/1e3,.033);e=t,this.renderFrame(i)},100)}renderFrame(e){var V,z,G;const t=performance.now();this.lastFrameAt=t,this.forceRunningUntil>t&&!this.state.gameOver&&!this.state.stageCompleted&&(this.state.running=!0,this.state.paused=!1),this.state.bannerTimer>0&&(this.state.bannerTimer=Math.max(0,this.state.bannerTimer-e),y.raceBanner.classList.toggle("hidden",this.state.bannerTimer<=0));const i=this.state.slowMoTimer>0?e*.46:e;if(this.state.slowMoTimer>0&&(this.state.slowMoTimer=Math.max(0,this.state.slowMoTimer-e)),this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.updateState(i),this.updateWorld(i),this.updateHud()),this.updateNitroParticles(e),this.updateBackfire(e),this.updateSpeedStreaks(e),this.updateTrafficDust(e),this.updateCoins(e),this.updateDamageFx(e),this.updatePlayerDamageVisuals(),this.updateWeather(e),y.speedVignette){const W=oe.clamp((this.state.speed-100)/130,0,.72);y.speedVignette.style.opacity=W}const n=pn[this.cameraViewIndex]||pn[0],s=(this.state.speed||0)*1.6,r=Math.max(0,(s-150)/110)*.09,o=(Math.sin(t*.055)+(Math.random()-.5)*.6)*r,l=(Math.cos(t*.065)+(Math.random()-.5)*.6)*r*.7,c=(Math.random()-.5)*(this.state.cameraShake||0)+o,h=(Math.random()-.5)*(this.state.cameraShake||0)*.5+l,d=this.getRoadCenterOffsetAtProgress(this.getTrackProgress())||0,u=((z=(V=this.player)==null?void 0:V.position)==null?void 0:z.x)||0,f=d*.72+u*.52+(this.state.roadDrift||0)*.2,p=-(this.state.roadDrift||0)*.035;this.camera.rotation.z=oe.lerp(this.camera.rotation.z||0,p,.1);const v=!!((G=this.state.stoppingSequence)!=null&&G.active),g=v?-4.2:0,m=v?-.65:0,_=f+c,M=n.y+m+Math.min(.55,(this.state.speed||0)*.0025)+h,b=v?0:(this.state.nitroActive?1.85:0)+Math.min(2,(this.state.speed||0)*.008),E=n.z+g+b;this.camera.position.x=oe.lerp(isFinite(this.camera.position.x)?this.camera.position.x:_,_,.12),this.camera.position.y=oe.lerp(isFinite(this.camera.position.y)?this.camera.position.y:M,M,.1),this.camera.position.z=oe.lerp(isFinite(this.camera.position.z)?this.camera.position.z:E,E,.1),isFinite(this.camera.position.x)||(this.camera.position.x=_),isFinite(this.camera.position.y)||(this.camera.position.y=M),isFinite(this.camera.position.z)||(this.camera.position.z=E);const A=Math.min(1,(this.state.speed||0)/200);this.state.nearMissPunch=oe.lerp(this.state.nearMissPunch||0,0,e*6);const x=(v?n.fov-12:n.fov)+(this.state.nitroActive?fh*1.25:A*fh*.8)+(this.state.nearMissPunch||0)*12,w=isFinite(this.camera.fov)?this.camera.fov:n.fov;this.camera.fov=oe.lerp(w,x,.12),isFinite(this.camera.fov)||(this.camera.fov=n.fov),this.camera.updateProjectionMatrix();const F=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+95))||0,C=isFinite(F)?F+u*.3:0,N=n.lookY+(this.state.bodyPitch||0)*.16,L=n.lookZ;this.camera.lookAt(C,N,L),this.renderer.render(this.scene,this.camera)}updateState(e){var N;if((N=this.state.stoppingSequence)!=null&&N.active){const L=this.state.stoppingSequence;L.timer-=e;const V=1-Math.max(0,L.timer/L.duration);if(this.state.speed=oe.lerp(L.initialSpeed,0,Math.min(1,V*1.35)),this.state.targetSpeed=0,this.state.bodyPitch=oe.lerp(this.state.bodyPitch,.19*(1-V*.5),.18),this.state.cameraShake=.28*(1-V),this.player.rotation.x=this.state.bodyPitch,L.unit&&L.unit.visible){const z=this.player.position.x+(L.type==="police"?.95:-1.45),G=this.player.position.z-(L.type==="police"?4.4:1.6);L.unit.position.x=oe.lerp(L.unit.position.x,z,.22),L.unit.position.z=oe.lerp(L.unit.position.z,G,.22),L.unit.rotation.y=oe.lerp(L.unit.rotation.y,(L.unit.userData.baseYaw??0)+(L.type==="police"?-.48:.55),.2)}L.timer<=0&&(L.active=!1,this.state.speed=0,this.openEncounterVideoModal(L.type));return}const t=this.keys.has("ArrowLeft")||this.keys.has("KeyA"),i=this.keys.has("ArrowRight")||this.keys.has("KeyD"),n=this.keys.has("ArrowUp")||this.keys.has("KeyW")||!!this.touchInput.throttle,s=this.keys.has("ArrowDown")||this.keys.has("KeyS")||!!this.touchInput.brake,r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.keys.has("KeyN")||!!this.touchInput.nitro,o=this.currentStage;if(this.state.stageTime+=e,this.state.cinematicTimer>0){this.state.cinematicTimer=Math.max(0,this.state.cinematicTimer-e),this.state.cameraShake=Math.min(.42,this.state.cameraShake+e*.35),this.player.rotation.y=oe.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+.18,.08),y.tip.textContent=`${this.selectedCar.label} rolling out.`;return}if(this.state.countdown>0){this.state.countdown-=e;const L=Math.ceil(this.state.countdown);if(L>0){(!this.state.countdownStarted||L!==Math.ceil(this.state.countdown+e))&&(this.audio.tone(520,.08,"triangle",.035),this.showRaceBanner("Countdown",String(L),`${o.track.name} - ${o.track.vibe}`,.22)),this.state.countdownStarted=!0,this.state.speed=oe.lerp(this.state.speed,0,.2),this.state.targetSpeed=0,y.tip.textContent=`Get ready. ${o.track.name} opens in ${L}. Mission: ${o.mission.label}.`;return}this.state.countdown=0,this.audio.tone(760,.14,"square",.045),this.showRaceBanner("Go",o.track.name,o.track.vibe,1.2),y.tip.textContent=`${o.name}: ${o.mission.label}.`}const l=Math.min(this.state.maxSpeed,o.speedCap),c=Math.max(48,l*.58),h=Math.min(this.state.maxSpeed*1.06,l*1.05);s?(this.state.targetSpeed-=(120+this.selectedCar.grip*22)*e,this.state.targetSpeed=Math.max(0,this.state.targetSpeed)):n?(this.state.targetSpeed+=this.selectedCar.accel*2.35*e,!this.state.nitroActive&&(this.state.slingshotBoostTimer||0)<=0&&(this.state.targetSpeed=Math.min(this.state.targetSpeed,h))):this.state.targetSpeed<c?this.state.targetSpeed=Math.min(c,this.state.targetSpeed+this.selectedCar.accel*.55*e):!this.state.nitroActive&&(this.state.slingshotBoostTimer||0)<=0&&(this.state.targetSpeed=Math.max(c,this.state.targetSpeed-24*e));let d=n?h:Math.max(c,this.state.targetSpeed);(this.state.slingshotBoostTimer||0)>0&&(this.state.slingshotBoostTimer=Math.max(0,this.state.slingshotBoostTimer-e),d=Math.max(d,l*1.35),this.state.targetSpeed=Math.max(this.state.targetSpeed+160*e,d)),r&&(this.state.nitroTimer||0)<=0&&this.state.nitro>=8&&(this.state.nitroTimer=2.5,this.audio.playNitroBurst(),this.audio.speakVocal("nitro_boost"),this.state.nitroWasActive=!0),(this.state.nitroTimer||0)>0?(this.state.nitroTimer=Math.max(0,this.state.nitroTimer-e),this.state.nitroActive=!0,d=oe.clamp(l*1.92+(this.selectedCar.nitroBoost??28),0,340),this.state.targetSpeed=Math.max(this.state.targetSpeed+260*e,d),this.state.nitro=Math.max(0,this.state.nitro-this.state.maxNitro/2.5*e),this.state.cameraShake=Math.min(.44,this.state.cameraShake+e*.75),y.tip.textContent=`🚀 2.0x NITRO BOOST ENGAGED (${this.state.nitroTimer.toFixed(1)}s)! Top Speed: ${Math.round(d*1.6)} KM/H`,this.state.nitro<=0&&(this.state.nitroTimer=0)):(this.state.nitroActive=!1,this.state.nitroWasActive&&(this.state.speed*1.6>125&&(this.audio.playTurboFlutter(),this.triggerBackfire(1.15,2)),this.state.nitroWasActive=!1),this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+12*e));const u=Math.abs(this.player.position.x)>7.2?.94:1,f=this.getRoadCenterOffsetAtProgress(this.getTrackProgress()),p=Math.abs(this.player.position.x-f),v=p>7.2?.88:p>5.3?.95:1,g=this.state.nitroActive?.22:(this.state.slingshotBoostTimer||0)>0?.18:n?.16:.065;this.state.speed=oe.lerp(this.state.speed,Math.min(this.state.targetSpeed,d)*u*v,g),this.state.engineTimer=0,this.updateTransmission(e,n||this.state.nitroActive,s);const m=oe.clamp((t?-1:0)+(i?1:0)+this.touchInput.steerZone+this.motionSteer,-1,1),_=Math.max(5.6,8.8-this.state.speed*.014);this.player.position.x+=m*e*(_+this.state.speed*.026)*this.selectedCar.grip,this.player.position.x=oe.clamp(this.player.position.x,f-8.7,f+8.7),this.state.steerVisual=oe.lerp(this.state.steerVisual,m,.12),this.state.bodyRoll=oe.lerp(this.state.bodyRoll,-m*(.08+this.state.speed*7e-4),.12);const M=s?.16:this.state.nitroActive?-.11:n?-.08:-.03;this.state.bodyPitch=oe.lerp(this.state.bodyPitch,M,.1),this.state.roadDrift=oe.lerp(this.state.roadDrift,m*Math.min(2.4,this.state.speed*.008),.06),this.state.cameraShake=oe.lerp(this.state.cameraShake,0,.08);const b=Math.abs(m)*oe.clamp((this.state.speed-70)/115,0,1)*oe.clamp((p-2.2)/5.2,0,1);if(b>.24){const L=b*e*110;this.state.driftScore+=L,this.state.score+=L*.8,this.state.driftTimer+=e,this.state.driftTimer>.45&&(this.state.driftTimer=0,this.audio.playDrift()),this.updateWeeklyChallenge("drift",this.state.driftScore)}else this.state.driftTimer=Math.max(0,this.state.driftTimer-e*2);this.player.rotation.z=oe.lerp(this.player.rotation.z,this.state.bodyRoll,.12),this.player.rotation.x=oe.lerp(this.player.rotation.x,this.state.bodyPitch,.1);const E=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+90)),A=oe.clamp((E-f)*.035,-.22,.22);this.player.rotation.y=oe.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+A-m*.1,.12),this.state.distance+=this.state.speed*e*1.6,this.state.stageProgress+=this.state.speed*e*1.6,this.state.score+=this.state.speed*e*.72*o.scoreBonus,this.state.comboTimer>0&&(this.state.comboTimer-=e,this.state.comboTimer<=0&&(this.state.combo=0,this.state.comboMultiplier=1,this.updateComboDisplay())),this.updateDailyChallenge("score",this.state.score),this.updateDailyChallenge("distance",this.state.distance),this.updateWeeklyChallenge("score",this.state.score),this.state.fuel=Math.max(0,this.state.fuel-e*(2+this.state.speed*.02)*this.selectedCar.fuelDrain*o.fuelUseScale);const P=this.getEffectivePoliceThreshold(o),x=this.state.gameMode===Je.policeChase.key?o_:this.state.gameMode===Je.policeRace.key?l_:-1.45,w=this.isSpecialPoliceMode()&&this.state.stageTime<Mh;this.state.heat=oe.clamp(this.state.heat+Math.max(0,this.state.speed-115)*e*(o.isBoss?.13:.095)+e*x,0,100);const F=this.state.pursuitLevel;this.state.pursuitLevel=this.state.heat<P?0:Math.min(5,1+Math.floor((this.state.heat-P)/14)),this.state.pursuitLevel>F&&(this.showRaceBanner("PSCA E-CHALLAN & POLICE PURSUIT! 🚨",`Threat Level ${this.state.pursuitLevel}`,this.state.pursuitLevel>=3?"Punjab Police Naka & Dolphin Squad active!":"Dolphin Force E-Challan interceptors closing in!",1.6),this.audio.playPoliceSiren(),this.triggerPoliceDispatch("pursuit"),this.state.pursuitLevel>=3&&!w?this.spawnPoliceCar("police"):w||this.spawnPoliceCar("snatcher")),this.updateFinishLine(e),this.state.fuel<this.state.maxFuel*.25&&(y.tip.textContent="Fuel is running low. Grab the next can."),this.state.health<35&&(y.tip.textContent="Heavy damage. Another hard impact could end the run."),this.state.heat>Math.max(72,P+8)&&(y.tip.textContent=this.state.gameMode===Je.policeRace.key?"Police race pressure is high. Beat the interceptor.":"⚠️ Dolphin Force & Punjab Police flanking! Hit 2.0x Nitro to blind ANPR radar!"),this.state.trafficSpawn+=e,this.state.policeSpawn+=e,this.state.fuelSpawn+=e,this.state.healerSpawn+=e,this.state.roadblockSpawn+=e,this.state.spikeSpawn+=e,this.state.hornTimer+=e,this.state.sirenTimer+=e;const C=oe.lerp(1.3,.45,this.state.speed/225)*o.trafficBias;this.state.trafficSpawn>=C&&this.state.stageProgress>60&&(this.state.trafficSpawn=0,this.spawnTrafficCar()),!w&&this.state.heat>P&&this.state.policeSpawn>=oe.lerp(9,3.5,this.state.heat/100)*o.policeSpawnScale&&(this.state.policeSpawn=0,this.spawnPoliceCar(this.state.pursuitLevel>=3&&Math.random()>.45?"police":"snatcher"),this.state.pursuitLevel>=4&&Math.random()>.55&&this.spawnPoliceCar("police"),this.state.sirenTimer>2.2&&(this.state.sirenTimer=0,this.audio.playPoliceSiren())),this.state.pursuitLevel>=3&&!w&&this.getTrackProgress()>=wh&&this.state.roadblockSpawn>=oe.lerp(10,4.5,this.state.pursuitLevel/5)&&!this.roadblocks.some(L=>L.userData.active)&&(this.state.roadblockSpawn=0,this.spawnRoadblock()),this.state.pursuitLevel>=4&&!w&&this.getTrackProgress()>=Th&&this.state.spikeSpawn>=oe.lerp(13,6,this.state.pursuitLevel/5)&&!this.roadblocks.some(L=>L.userData.active&&L.userData.kind==="spike")&&(this.state.spikeSpawn=0,this.spawnRoadblock("spike")),this.state.fuelSpawn>=o.fuelSpawnEvery&&(this.state.fuelSpawn=0,this.spawnFuelCan()),this.state.health<this.state.maxHealth*.6&&this.state.healerSpawn>=8.5&&!this.healers.some(L=>L.userData.active)&&(this.state.healerSpawn=0,this.spawnHealer()),(this.state.health<=0||this.state.fuel<=0)&&this.endRun()}updateFinishLine(e){const t=this.currentStage;if(!this.finishLine||this.state.stageCompleted)return;const i=Math.max(0,t.length-this.state.stageProgress);this.finishLine.visible=i<=130,this.finishLine.position.z=oe.lerp(this.finishLine.position.z,-16-i*.16,Math.min(1,e*8)),this.finishLine.position.x=oe.lerp(this.finishLine.position.x,this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+i)),Math.min(1,e*6)),i<=120&&(y.tip.textContent=`Finish line ahead. Clear ${t.name}.`),i<=0&&this.completeStage()}completeStage(){var _,M;const e=this.currentStage,t=this.state.gameMode,i=t===Je.policeChase.key&&this.state.pursuitLevel>=2,n=t===Je.policeRace.key&&this.state.policeRaceOvertaken,s=t===Je.policeRace.key?n:this.isMissionComplete(e)&&(!e.isBoss||this.state.rivalOvertaken),r=t===Je.policeRace.key?n?260:90:t===Je.policeChase.key?i?210:80:0,o=e.missionReward+(s?e.bonusReward:0)+r,l=gt.find(b=>Qo[b.key]===this.state.stageIndex+1);let c="No new car unlock this stage.";const h=s&&this.state.health>this.state.maxHealth*.6?3:s?2:1,d=`stage_${e.id}`,u=this.progress.stageStars[d]||0;h>u&&(this.progress.stageStars[d]=h),this.state.running=!1,this.state.stageCompleted=!0,this.state.speed=0,this.state.targetSpeed=0,this.state.stageProgress=e.length,this.audio.stopMusic(),this.hideTopBanner(),this.audio.tone(523,.16,"triangle",.045),this.audio.tone(659,.2,"triangle",.045),this.progress.credits+=o,e.isBoss&&(this.progress.bossClears=Math.max(0,this.progress.bossClears||0)+1,this.progress.bossTokens=Math.max(0,this.progress.bossTokens||0)+1,this.updateWeeklyChallenge("boss_clear",this.progress.bossClears)),i&&(this.progress.policeChaseWins=Math.max(0,this.progress.policeChaseWins||0)+1),n&&(this.progress.policeRaceWins=Math.max(0,this.progress.policeRaceWins||0)+1);const f=90+e.id*18+h*35+Math.round(this.state.driftScore/40)+this.state.nearMissCount*12+(t===Je.policeRace.key?90:t===Je.policeChase.key?70:0),p=this.progress.level||1;if(this.progress.xp=Math.max(0,this.progress.xp||0)+f,this.progress.level=1+Math.floor(this.progress.xp/500),this.progress.level>p&&this.progress.level%3===0){const b=`level_${this.progress.level}_${Date.now()}`;this.progress.milestoneCrates=[...this.progress.milestoneCrates||[],b].slice(-30),this.progress.credits+=250}this.progress.lifetimeStageClears=Math.max(0,this.progress.lifetimeStageClears||0)+1,l&&!this.progress.ownedVehicles.includes(l.key)?(this.progress.ownedVehicles.push(l.key),this.progress.selectedVehicleKey=l.key,this.selectedCar=this.getSelectedGarageVehicle(),c=`Unlocked ${l.label}. It is now equipped in your garage.`):s&&(c="Mission bonus secured."),this.persistProgress(),this.recordLeaderboardRun("Stage clear"),this.pendingDoubleReward={stageId:e.id,credits:o},this.renderGarage(),this.renderTrackMaps(),this.finishLine&&(this.finishLine.visible=!0,this.finishLine.position.z=this.player.position.z-5,this.finishLine.position.x=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(e.length))),(e.id===5||this.state.stageIndex===4)&&!this.progress.championRewardClaimed&&(this.progress.championRewardClaimed=!0,this.progress.credits=(this.progress.credits||0)+2500,this.progress.unlockedLiveries.includes("king-of-lahore")||this.progress.unlockedLiveries.push("king-of-lahore"),this.persistProgress(),this.refreshProgressUi(),window.setTimeout(()=>{this.openEncounterVideoModal("victory")},700));const g=Uh(this.state.stageIndex+1),m="★".repeat(h)+"☆".repeat(3-h);this.updateOverlay(`Stage ${e.id} Complete ${m}`,e.name,`Finish line crossed. Earned ${o} CR and ${f} XP.${t===Je.policeRace.key?n?" Police race won.":" Police race objective missed.":t===Je.policeChase.key?i?" Police chase escaped.":" Chase survived with low heat.":s?` Mission cleared: ${e.mission.label}.`:` Mission missed: ${e.mission.label}.`} ${e.isBoss?"Boss token awarded. ":""}${c} Next up: ${g.name}, ${g.lengthKm} KM. Press Start Stage ${g.id} to continue.`,g.track),y.overlayButton.textContent=`Start Stage ${g.id}`,(_=y.overlayShareButton)==null||_.classList.remove("hidden"),(M=y.doubleRewardButton)==null||M.classList.toggle("hidden",wt&&!this.progress.adFreePurchased?!this.adState.rewardedReady:!1),window.setTimeout(()=>this.startBackgroundModelLoading(),1200),e.id%Yy===0&&this.showStageInterstitial()}updateWorld(e){var n,s,r;const t=this.state.speed*e*Rn;(s=(n=this.road)==null?void 0:n.material)!=null&&s.map&&(this.road.material.map.offset.y-=t*.08),this.roadMarkers.forEach(o=>{o.position.z+=t*Ds,o.position.z>18&&(o.position.z-=520),o.position.x=o.userData.laneX+this.getRoadCenterOffsetAtZ(o.position.z)}),this.roadGlows.forEach(o=>{o.position.z+=t*Ds,o.material.opacity=.1+Math.sin(performance.now()*.003+o.position.z*.04)*.03,o.position.z>18&&(o.position.z-=520),o.position.x=o.userData.laneX+this.getRoadCenterOffsetAtZ(o.position.z)});const i=this.getRoadCenterOffsetAtProgress(this.getTrackProgress());this.shoulderLeft&&this.shoulderRight&&(this.shoulderLeft.position.x=i-12.2,this.shoulderRight.position.x=i+12.2,this.shoulderLeft.rotation.z=0,this.shoulderRight.rotation.z=0),this.roadside.forEach(o=>{o.position.z+=t*Xr,o.position.z>28&&(o.position.z=-380-Math.random()*120,o.userData.baseOffset=18+Math.random()*18,o.scale.setScalar(.9+Math.random()*.35),o.userData.anchoredX=this.getRoadCenterOffsetAtZ(o.position.z)+o.userData.side*o.userData.baseOffset),typeof o.userData.anchoredX!="number"&&(o.userData.anchoredX=this.getRoadCenterOffsetAtZ(o.position.z)+o.userData.side*o.userData.baseOffset),o.position.x=o.userData.anchoredX,o.rotation.y=o.userData.side<0?.18:-.18}),this.lightPosts.forEach((o,l)=>{o.position.z+=t*(Xr-.3),o.position.z>28&&(o.position.z=-420-l*18,o.userData.anchoredX=this.getRoadCenterOffsetAtZ(o.position.z)+o.userData.side*o.userData.baseOffset),typeof o.userData.anchoredX!="number"&&(o.userData.anchoredX=this.getRoadCenterOffsetAtZ(o.position.z)+o.userData.side*o.userData.baseOffset),o.position.x=o.userData.anchoredX}),this.scenicRoadside.forEach(o=>{o.position.z+=t*Xr,o.position.z>36&&(o.position.z=(o.userData.baseZ||-120)-360),o.userData.anchoredX=this.getRoadCenterOffsetAtZ(o.position.z)+o.userData.side*o.userData.baseOffset,o.position.x=o.userData.anchoredX}),this.buildings.forEach(o=>{o.material.emissive=new ke(988970),o.material.emissiveIntensity=.08}),this.updateTrafficCars(e),this.updatePoliceCars(e),this.updateRoadblocks(e),this.updateBossRival(e),this.state.gameMode===Je.policeRace.key&&!this.state.policeRaceOvertaken&&!this.state.stageCompleted&&!this.state.gameOver&&!((r=this.policeRaceLeader)!=null&&r.userData.active)&&(this.policeRaceLeader||this.createPoliceRaceLeader(),this.spawnPoliceRaceLeader()),this.updatePoliceRaceLeader(e),this.updateHelicopterSpotlight(e),this.updateFuelCans(e),this.updateHealers(e)}spawnBossRival(){if(!this.rivalBoss)return;const e=Kr[Math.floor(this.state.stageIndex/3)%Kr.length],t=Math.floor(Math.random()*Xi.length);this.rivalBoss.userData={...this.rivalBoss.userData,active:!0,name:e.name,car:e.car,taunt:e.taunt,lane:t},this.rivalBoss.visible=!0,this.state.rivalGap=86,this.state.rivalOvertaken=!1,this.rivalBoss.position.set(this.getLaneWorldX(t,-72),.72,-72),this.rivalBoss.rotation.set(0,this.rivalBoss.userData.baseYaw??0,0)}updateBossRival(e){var o;if(!((o=this.rivalBoss)!=null&&o.userData.active)||!this.currentStage.isBoss)return;const t=this.getTrackProgress(),i=t>.78?-6:oe.lerp(92,22,t);this.state.rivalGap=oe.lerp(this.state.rivalGap,i,e*.7),!this.state.rivalCatchupShown&&t>.42&&t<.5&&this.state.rivalGap>32&&(this.state.rivalCatchupShown=!0,this.showRaceBanner("Rival Catch-Up",this.rivalBoss.userData.name,"Slipstream window open",1.4));const n=t>.72?Math.round((this.player.position.x-this.getRoadCenterOffsetAtProgress(t))/6.5)+1:this.rivalBoss.userData.lane,s=oe.clamp(n,0,Xi.length-1),r=this.player.position.z-this.state.rivalGap;this.rivalBoss.position.z=oe.lerp(this.rivalBoss.position.z,r,e*1.4),this.rivalBoss.position.x=oe.lerp(this.rivalBoss.position.x,this.getLaneWorldX(s,this.rivalBoss.position.z),e*1.6),this.rivalBoss.rotation.z=oe.lerp(this.rivalBoss.rotation.z,(this.player.position.x-this.rivalBoss.position.x)*-.025,.08),!this.state.rivalOvertaken&&this.rivalBoss.position.z>this.player.position.z+1.5&&(this.state.rivalOvertaken=!0,this.state.score+=850,this.state.bossOvertakeBonus=!0,this.showRaceBanner("Final Overtake",this.rivalBoss.userData.name,"+850 boss score",1.8),this.audio.playNitroBurst()),(this.rivalBoss.position.z>28||this.state.stageCompleted||this.state.gameOver)&&this.deactivate(this.rivalBoss)}spawnPoliceRaceLeader(){var t;if((!this.policeRaceLeader||!((t=this.policeRaceLeader.userData)!=null&&t.modelVehicle))&&(this.policeRaceLeader&&this.scene.remove(this.policeRaceLeader),this.policeRaceLeader=null,this.createPoliceRaceLeader()),!this.policeRaceLeader)return;const e=Math.floor(Math.random()*Xi.length);this.policeRaceLeader.userData.active=!0,this.policeRaceLeader.userData.lane=e,this.policeRaceLeader.visible=!0,this.state.policeRaceGap=70,this.state.policeRaceOvertaken=!1,this.state.policeRaceCatchupShown=!1,this.policeRaceLeader.position.set(this.getLaneWorldX(e,-64),.72,-64),this.policeRaceLeader.rotation.set(0,this.policeRaceLeader.userData.baseYaw??Math.PI,0)}updatePoliceRaceLeader(e){var o;if(!((o=this.policeRaceLeader)!=null&&o.userData.active)||this.state.gameMode!==Je.policeRace.key)return;const t=this.getTrackProgress(),i=t>.72?-8:t>.5?oe.lerp(24,4,(t-.5)/.22):oe.lerp(70,24,t/.5);this.state.policeRaceGap=oe.lerp(this.state.policeRaceGap,i,e*.95),!this.state.policeRaceCatchupShown&&t>.45&&(this.state.policeRaceCatchupShown=!0,this.showRaceBanner("Police Race","Catch the interceptor","Final overtake window opening",1.6));const n=this.getRoadCenterOffsetAtProgress(t),s=t>.55?oe.clamp(Math.round((this.player.position.x-n)/6.5)+1,0,Xi.length-1):this.policeRaceLeader.userData.lane,r=this.player.position.z-this.state.policeRaceGap;this.policeRaceLeader.position.z=oe.lerp(this.policeRaceLeader.position.z,r,e*1.55),this.policeRaceLeader.position.x=oe.lerp(this.policeRaceLeader.position.x,this.getLaneWorldX(s,this.policeRaceLeader.position.z),e*1.8),this.policeRaceLeader.rotation.z=oe.lerp(this.policeRaceLeader.rotation.z,(this.player.position.x-this.policeRaceLeader.position.x)*-.03,.08),!this.state.policeRaceOvertaken&&this.policeRaceLeader.position.z>this.player.position.z+1.2&&(this.state.policeRaceOvertaken=!0,this.state.score+=1e3,this.showRaceBanner("Police Overtake","Interceptor beaten","+1000 race score",1.8),this.audio.playNitroBurst()),(this.policeRaceLeader.position.z>32||this.state.stageCompleted||this.state.gameOver)&&this.deactivate(this.policeRaceLeader)}updateHelicopterSpotlight(e){if(!this.helicopterGroup)return;const t=this.state.running&&!this.state.paused&&this.state.pursuitLevel>=5;if(this.helicopterGroup.visible=t,!t)return;this.helicopterGroup.position.x=oe.lerp(this.helicopterGroup.position.x,this.player.position.x,e*2.2),this.helicopterGroup.position.z=oe.lerp(this.helicopterGroup.position.z,this.player.position.z-34,e*1.1);const i=this.helicopterGroup.getObjectByName("helicopter-rotor");i&&(i.rotation.y+=e*38),this.helicopterSpotlight&&(this.helicopterSpotlight.target.position.set(this.player.position.x,.5,this.player.position.z-1.2),this.helicopterSpotlight.target.updateMatrixWorld())}spawnTrafficCar(){var s;let e=this.traffic.find(r=>!r.userData.active);if(!e)return;if(!((s=e.userData)!=null&&s.modelVehicle)&&this.modelTemplates.size>0){const r=e.userData.type||"sedan",o=ii[r]||gt[2].profile,l=this.createModelVehicle("traffic",r,o);if(l){const c=this.traffic.indexOf(e);this.scene.remove(e),l.userData={...e.userData,modelVehicle:!0,baseYaw:0},this.traffic[c]=l,this.scene.add(l),e=l}}const t=Math.floor(Math.random()*Xi.length),i=e.userData.type||"sedan";e.userData.active=!0,e.userData.lane=t,e.userData.laneTarget=t,e.userData.changeCooldown=1.2+Math.random()*2,e.userData.speed=i==="rickshaw"?32+Math.random()*12:["tanker","truck","metrobus","bus","delivery","garbage","firetruck"].includes(i)?42+Math.random()*12:i==="bike"?64+Math.random()*14:54+Math.random()*16,e.visible=!0;const n=-190-Math.random()*120;e.position.set(this.getLaneWorldX(t,n),.72,n),e.rotation.set(0,e.userData.baseYaw??0,0)}spawnPoliceCar(e=null){let t=null;if(e&&(t=this.police.find(u=>!u.userData.active&&u.userData.unitType===e)),t||(t=this.police.find(u=>!u.userData.active)),!t)return;const i=Math.max(1,this.state.pursuitLevel),n=i>=4?s_:i>=3?["chase","side-rammer","roadblock-unit"]:["chase","side-rammer"],s=n[Math.floor(Math.random()*n.length)];t.userData.active=!0,t.userData.aggression=.85+Math.random()*.55,t.userData.behavior=s,t.visible=!0;const r=s==="side-rammer"?-80-Math.random()*50:-210-Math.random()*40,o=s==="side-rammer"?this.player.position.x>0?0:2:Math.random()>.5?0:2;t.position.set(this.getLaneWorldX(o,r),.72,r);const l=t.userData.isPoliceVigo?t.userData.baseYaw??Math.PI:0;t.rotation.set(0,l,0);const c=this.isSpecialPoliceMode()&&this.state.stageTime<Mh,h=!c&&this.getTrackProgress()>=wh,d=!c&&this.getTrackProgress()>=Th;s==="roadblock-unit"&&this.state.pursuitLevel>=3&&h&&this.spawnRoadblock("roadblock"),s==="spike-strip-unit"&&this.state.pursuitLevel>=4&&d&&this.spawnRoadblock("spike")}spawnRoadblock(e="roadblock"){const t=this.roadblocks.find(s=>!s.userData.active);if(!t)return;const i=Math.floor(Math.random()*Xi.length),n=-175-Math.random()*80;t.userData.active=!0,t.userData.lane=i,t.userData.kind=e,t.scale.set(1,e==="spike"?.32:1,e==="spike"?.72:1),t.visible=!0,t.position.set(this.getLaneWorldX(i,n),0,n),t.rotation.set(0,0,0),this.showRaceBanner(e==="spike"?"Spike Strip":"🚓 PUNJAB POLICE NAKA!",`Lane ${i+1} Barricaded`,e==="spike"?"Tires and handling at risk":"Dodge wide or Police will stop your car!",1.3),this.audio.playPoliceSiren(),this.policeDispatchTimer||this.triggerPoliceDispatch(e==="spike"?"spike":"roadblock")}spawnFuelCan(){if(this.fuelCans.some(n=>n.userData.active))return;const e=this.fuelCans.find(n=>!n.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-180-Math.random()*60,i=Math.floor(Math.random()*Xi.length);e.userData.lane=i,e.position.set(this.getLaneWorldX(i,t),1.2,t),e.rotation.set(0,0,0),e.visible=!1}spawnHealer(){const e=this.healers.find(n=>!n.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-190-Math.random()*70,i=Math.floor(Math.random()*Xi.length);e.userData.lane=i,e.position.set(this.getLaneWorldX(i,t),1.45,t),e.rotation.set(0,0,0),e.visible=!1}updateTrafficCars(e){var n;if(this.state.countdown>0||(n=this.state.stoppingSequence)!=null&&n.active)return;let t=null;this.traffic.forEach(s=>{if(!s.userData.active)return;if(s.userData.changeCooldown-=e,s.userData.changeCooldown<=0&&s.position.z<-20&&Math.random()>.76){const c=[0,1,2].filter(h=>h!==s.userData.lane);s.userData.laneTarget=c[Math.floor(Math.random()*c.length)],s.userData.changeCooldown=1.8+Math.random()*1.8}if(s.userData.laneTarget!==s.userData.lane){const c=this.getLaneWorldX(s.userData.laneTarget,s.position.z);s.position.x=oe.lerp(s.position.x,c,e*1.7),Math.abs(s.position.x-c)<.28&&(s.userData.lane=s.userData.laneTarget)}else s.position.x=oe.lerp(s.position.x,this.getLaneWorldX(s.userData.lane,s.position.z),e*2);s.userData.previousZ=s.position.z;const r=(this.state.speed-s.userData.speed)*e*Rn*qy;s.position.z+=r+.42,s.rotation.z=Math.sin((performance.now()*.001+s.position.z)*.7)*.025,s.rotation.y=oe.lerp(s.rotation.y,(s.userData.baseYaw??0)+(this.getLaneWorldX(s.userData.laneTarget,s.position.z)-s.position.x)*.03,.08);const o=this.player.position.z-s.position.z,l=Math.abs(s.position.x-this.player.position.x);if(o>4.5&&o<22&&l<2.15&&this.state.speed>50&&(t=s),!this.nearMisses.has(s)){const c=Math.abs(s.position.x-this.player.position.x),h=Math.abs(s.position.z-this.player.position.z);h<18&&c<5.2&&this.state.hornTimer>2.6&&Math.random()>.65&&(this.state.hornTimer=0,this.audio.playHorn(s.userData.type));const d=s.userData.type==="bike",u=d?1.4:2.2,f=d?3.2:4.2;if(h<6&&c<f&&c>u){this.nearMisses.add(s),this.state.nearMissCount+=1,this.state.combo=Math.min(vh,this.state.combo+1),this.state.comboMultiplier=this.state.combo,this.state.comboTimer=gh,this.state.slowMoTimer=Math.max(this.state.slowMoTimer,.28),this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+22),this.state.cameraShake=Math.min(.38,this.state.cameraShake+.16),this.state.nearMissPunch=.35,this.audio.playNearMissWhoosh(),this.triggerHaptic(30);const v=(d?300:150)*this.state.comboMultiplier;this.state.score+=v,d?(y.tip.textContent=this.state.combo>1?`⚡ BIKE WEAVE x${this.state.combo}! +${v} CR +NOS`:`⚡ BIKE WEAVE! +${v} +NOS`,this.audio.tone(880+this.state.combo*50,.14,"square",.035)):(y.tip.textContent=this.state.combo>1?`🔥 NEAR MISS x${this.state.combo}! +${v} CR +NOS`:"🔥 NEAR MISS! +22% NITRO",this.audio.tone(660+this.state.combo*40,.12,"triangle",.03)),this.state.nearMissCount%4===0&&this.audio.speakVocal("near_miss"),this.updateComboDisplay(),this.updateDailyChallenge("near_miss",this.state.nearMissCount),this.updateDailyChallenge("combo_max",this.state.comboMultiplier)}}this.isCollision(s,s.userData.collisionX||2.7,s.userData.collisionZ||5.1)?(this.applyDamage(14),this.state.speed=Math.max(0,this.state.speed-35),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-40),this.state.cameraShake=Math.min(.75,this.state.cameraShake+.42),this.state.combo=0,this.state.comboMultiplier=1,this.state.comboTimer=0,this.state.slingshotCharge=0,this.updateComboDisplay(),y.tip.textContent="Traffic impact.",this.state.crashCount=(this.state.crashCount||0)+1,this.state.crashCount%4===0&&this.audio.speakVocal("crash"),this.triggerImpactFx(),this.deactivate(s)):s.position.z>28&&(this.state.score+=20,this.state.heat=Math.min(100,this.state.heat+1.5),this.deactivate(s))});const i=this.traffic.filter(s=>s.userData.active&&Math.abs(s.position.z-this.player.position.z)<5.2);if(i.length>=2)for(let s=0;s<i.length;s++)for(let r=s+1;r<i.length;r++){const o=i[s],l=i[r];if(Math.abs(o.position.z-l.position.z)>6.5)continue;const c=o.position.x<l.position.x?o:l,h=o.position.x<l.position.x?l:o;if(this.player.position.x>c.position.x+1.2&&this.player.position.x<h.position.x-1.2&&h.position.x-c.position.x<9.2){const d=`${this.traffic.indexOf(c)}_${this.traffic.indexOf(h)}`;this.lahoriCutPairs.has(d)||(this.lahoriCutPairs.add(d),this.state.combo=Math.min(vh,this.state.combo+2),this.state.comboMultiplier=this.state.combo,this.state.comboTimer=gh,this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+35),this.state.score+=500*this.state.comboMultiplier,this.state.slowMoTimer=Math.max(this.state.slowMoTimer,.34),this.state.nearMissPunch=.52,this.state.cameraShake=Math.min(.48,this.state.cameraShake+.24),this.audio.playNearMissWhoosh(),this.audio.tone(980,.16,"triangle",.05),this.audio.speakVocal("near_miss"),this.showRaceBanner("⚡ LAHORI CUT! THREADED!",`+${500*this.state.comboMultiplier} Score · +35% Nitro!`,"Razor-sharp split between two vehicles!",1.5),y.tip.textContent=`⚡ LAHORI CUT x${this.state.combo}! +${500*this.state.comboMultiplier} Score & +35% Nitro!`,this.updateComboDisplay())}}if(t){if(this.state.slingshotCharge=Math.min(1.2,(this.state.slingshotCharge||0)+e*.85),y.slingshotIndicator&&y.slingshotText){y.slingshotIndicator.classList.remove("hidden");const s=Math.min(100,Math.round(this.state.slingshotCharge/.95*100));y.slingshotText.textContent=s>=100?"⚡ SLINGSHOT READY — SWERVE!":`⚡ SLIPSTREAMING... ${s}%`}}else(this.state.slingshotCharge||0)>=.95?(this.state.slingshotCharge=0,this.state.slingshotBoostTimer=1.4,this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+20),this.state.score+=250,this.state.nearMissPunch=.42,this.audio.playNitroBurst(),this.showRaceBanner("⚡ SLINGSHOT OVERTAKE!","+250 Score · +20% Nitro!","Drafting slingshot surge engaged!",1.3),y.tip.textContent="⚡ SLINGSHOT BOOST! +250 Score & +20% Nitro!"):this.state.slingshotCharge=Math.max(0,(this.state.slingshotCharge||0)-e*1.2),y.slingshotIndicator&&(this.state.slingshotCharge||0)<=.05&&(this.state.slingshotBoostTimer||0)<=0&&y.slingshotIndicator.classList.add("hidden")}updatePoliceCars(e){var i;if(this.state.countdown>0||(i=this.state.stoppingSequence)!=null&&i.active)return;const t=performance.now();this.police.forEach(n=>{if(!n.userData.active)return;const s=!!(n.userData.isPoliceVigo||n.userData.unitType==="police"),r=1+this.state.pursuitLevel*.16,o=n.userData.behavior||"chase",l=n.position.x<this.player.position.x?-1:1,c=(Math.sin(t*.003)>0?1:-1)*(s?2.1:1.6),h=o==="side-rammer"?this.player.position.x+l*2.35:this.player.position.x+c+Math.sin(t*(.0018+this.state.pursuitLevel*2e-4))*(.9+this.state.pursuitLevel*.16),d=o==="side-rammer"?2.35:1.5,u=o==="side-rammer"?14.5:18+this.state.pursuitLevel*.85;if(n.position.x=oe.lerp(n.position.x,h,e*d*n.userData.aggression*r),n.position.z+=this.state.speed*e*Rn*u+.82+this.state.heat*.018,n.rotation.z=oe.clamp((this.player.position.x-n.position.x)*-.05,-.22,.22),n.rotation.y=oe.lerp(n.rotation.y,(n.userData.baseYaw??0)+(h-n.position.x)*.03,.09),n.userData.redStrobe&&n.userData.blueStrobe){const v=Math.floor(t/130)%2===0;n.userData.redStrobe.intensity=v?4.2:.2,n.userData.blueStrobe.intensity=v?.2:4.2}if(n.userData.smokePuffs&&n.userData.smokePuffs.forEach((v,g)=>{const m=.8+Math.sin(t*.015+g*1.5)*.35;v.scale.setScalar(m),v.position.z=-.9-g*.6+Math.sin(t*.008+g)*.1}),n.userData.armPivot){const g=Math.abs(n.position.z-this.player.position.z)<10,m=g?Math.sin(t*.016)*.45+.3:Math.sin(t*.005)*.1;n.userData.armPivot.rotation.y=m,n.userData.armPivot.rotation.z=Math.sin(t*.01)*.12,n.userData.targetPhone&&(n.userData.targetPhone.rotation.y+=e*6,n.userData.targetPhone.scale.setScalar(1+Math.sin(t*.02)*.3),n.userData.targetPhone.visible=g||Math.floor(t*.006)%2===0)}n.userData.headlightBeam&&(n.userData.headlightBeam.material.opacity=.18+Math.sin(t*.014)*.1);const f=s?2.8:2.3,p=s?4.8:3.9;if(this.isCollision(n,f,p)){if(!s&&(this.state.nitroActive||this.state.speed>115)){this.state.score+=350+this.state.pursuitLevel*50,this.state.cameraShake=Math.min(.65,this.state.cameraShake+.35),this.showRaceBanner("📸 ANPR RADAR BLINDED! 💥","+350 CR Bonus","Escaped PSCA E-Challan at 2.0x Nitro!",1.5),y.tip.textContent="📸 Blasted past Dolphin Force at 2.0x Nitro — ANPR camera blinded!",this.audio.playCrash(),this.audio.speakVocal("echallan_escape",!0),this.triggerImpactFx(),this.deactivate(n);return}this.applyDamage(s?16:14,"police"),this.state.lastDamageFrom=s?"police":"snatcher",this.triggerImpactFx(),this.triggerCarStopEncounter(s?"police":"snatcher",n);return}else n.position.z>30&&(this.state.score+=180+this.state.pursuitLevel*45,this.showRaceBanner(s?"PUNJAB POLICE OUTRUN! 🚓":"DOLPHIN FORCE OUTRUN! 📸","+180 Score Bonus","Clean getaway!",1.3),y.tip.textContent=s?"🚓 Outran Punjab Police Cruiser! +180 Score":"📸 Outran Dolphin Force E-Challan unit! +180 Score",this.deactivate(n))})}updateRoadblocks(e){var t;(t=this.state.stoppingSequence)!=null&&t.active||this.roadblocks.forEach(i=>{if(i.userData.active)if(i.position.z+=this.state.speed*e*Rn*Ds+.35,i.position.x=oe.lerp(i.position.x,this.getLaneWorldX(i.userData.lane??1,i.position.z),e*2),i.rotation.z=Math.sin(performance.now()*.006)*.035,this.isCollision(i,3.2,4.4)){const n=i.userData.kind==="spike";if(this.applyDamage(n?18:22,n?"spike":"roadblock"),this.state.heat=Math.min(100,this.state.heat+(n?10:14)),this.state.cameraShake=Math.min(1.1,this.state.cameraShake+(n?.56:.72)),this.triggerImpactFx(),!n){this.deactivate(i),this.triggerCarStopEncounter("police",null);return}this.state.speed=Math.max(0,this.state.speed-38),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-48),y.tip.textContent="Spike strip hit. Handling damaged.",this.deactivate(i)}else i.position.z>28&&(this.state.score+=i.userData.kind==="spike"?220:180,this.state.heat=Math.min(100,this.state.heat+4),y.tip.textContent=i.userData.kind==="spike"?"Spike strip dodged. +220":"Punjab Police Naka dodged. +180",this.deactivate(i))})}updateFuelCans(e){this.fuelCans.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*Rn*Ds+.45,t.position.x=oe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2.4,t.rotation.x=0,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.4&&Math.abs(t.position.x-this.player.position.x)<2.2?(this.state.fuel=Math.min(this.state.maxFuel,this.state.fuel+38),this.state.score+=90,y.tip.textContent="Fuel collected.",this.audio.tone(740,.14,"triangle",.045),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}updateHealers(e){this.healers.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*Rn*Ds+.4,t.position.x=oe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2,t.rotation.z+=e*1.1,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.6&&Math.abs(t.position.x-this.player.position.x)<2.3?(this.state.health=Math.min(this.state.maxHealth,this.state.health+28),this.state.score+=110,y.tip.textContent="Health restored.",this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.16,"sine",.03),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}isCollision(e,t,i){var c;if(Math.abs(e.position.x-this.player.position.x)>=t)return!1;if(Math.abs(e.position.z-this.player.position.z)<i)return!0;if(typeof((c=e.userData)==null?void 0:c.previousZ)!="number")return!1;const r=e.userData.previousZ,o=Math.min(r,e.position.z)-i,l=Math.max(r,e.position.z)+i;return this.player.position.z>=o&&this.player.position.z<=l}applyDamage(e,t="impact"){const i=oe.clamp(this.state.speed/180,.65,1.55),n=t==="spike"?.82:t==="roadblock"?1.18:t==="police"?1.08:1,s=Math.max(.55,1-(this.selectedCar.damageReduction??0));this.state.cleanRun=!1;const r=e*s*i*n;this.state.health=Math.max(0,this.state.health-r),this.spawnImpactSparks(oe.clamp(r/25,.5,2)),this.triggerHaptic([45,30,70]),this.updatePlayerDamageVisuals()}updateHud(){const e=Math.min(100,this.state.stageProgress/this.currentStage.length*100),t=this.state.health/this.state.maxHealth*100,i=this.state.fuel/this.state.maxFuel*100,n=this.state.nitro/this.state.maxNitro*100;if(y.stage.textContent=`Stage ${this.currentStage.id}`,y.speed.textContent=`${Math.round(this.state.speed*1.6)} KM/H`,y.gear){const o=["N","1ST","2ND","3RD","4TH","5TH","6TH"],l=this.state.speed<1?"N":o[this.state.gear||1]||"1ST";y.gear.textContent=l;const c=(this.state.rpm||1200)>7700;y.gear.classList.toggle("redline",c)}y.score.textContent=`${Math.round(this.state.score)}`,y.heat.textContent=`${Math.round(this.state.heat)}%`,y.pursuit&&(y.pursuit.textContent=this.state.pursuitLevel>0?`🏍️ Lvl ${this.state.pursuitLevel}`:"Clear 📸"),y.limit.textContent=`${Math.round(this.currentStage.speedCapKmh)} KM/H`;const s=Math.max(0,this.currentStage.length-this.state.stageProgress),r=s/1e3;y.distanceRemaining.textContent=r>=1?`${r.toFixed(1)} KM`:`${Math.round(s)} M`,y.distanceRemaining.classList.toggle("finish-near",e>=95),y.distanceRemaining.classList.toggle("finish-mid",e>=70&&e<95),y.healthBar.style.width=`${t}%`,y.fuelBar.style.width=`${i}%`,y.nitroBar.style.width=`${n}%`,y.progressBar.style.width=`${e}%`,y.driftBar&&(y.driftBar.style.width=`${Math.min(100,this.state.driftScore/45)}%`),y.healthText.textContent=`${Math.round(t)}%`,y.fuelText.textContent=`${Math.round(i)}%`,y.nitroText.textContent=`${Math.round(n)}%`,y.progressText.textContent=`${Math.round(e)}%`,y.driftText&&(y.driftText.textContent=`${Math.round(this.state.driftScore)}`),this.renderTrackMaps()}updateOverlay(e,t,i,n=this.currentStage.track){var l;y.overlayKicker.textContent=e,y.overlayTitle.textContent=t,y.overlayBody.textContent=i,(l=y.onboardingGuide)==null||l.classList.toggle("hidden",this.progress.onboardingSeen||this.progress.highestStage>1),y.overlayTrackMap&&(y.overlayTrackMap.innerHTML=Ih(n,0)),y.overlayTrackName&&(y.overlayTrackName.textContent=n.name),y.overlayTrackZone&&(y.overlayTrackZone.textContent=`${n.zone} · ${n.difficulty}`);const s=(this.state.stageIndex??0)+1,r=Bh[s]||"clear",o=this.settings.weatherMode==="auto"||!this.settings.weatherMode?mn[r]||mn.clear:mn[this.settings.weatherMode]||mn.clear;y.teaserWeatherIcon&&(y.teaserWeatherIcon.textContent=o.icon),y.teaserWeatherTitle&&(y.teaserWeatherTitle.textContent=`Forecast: ${o.label}`),y.teaserWeatherDesc&&(y.teaserWeatherDesc.textContent=o.subtitle),y.overlay.classList.remove("hidden"),document.body.classList.add("overlay-active")}endRun(e=""){var l;this.state.gameOver=!0,this.state.running=!1,this.state.stageCompleted=!1,this.hideTopBanner(),this.audio.stopMusic(),this.audio.tone(130,.35,"sawtooth",.06),this.persistProgress(),this.recordLeaderboardRun("Run over");const t=e==="police_busted"||this.state.lastDamageFrom==="police"&&e!=="echallan_impounded",i=!t&&(e==="echallan_impounded"||this.state.lastDamageFrom==="snatcher");let n="Run Over",s="Run Over",r="";if(t)n="🚓 PUNJAB POLICE NAKA INTERCEPT",s="🚓 CAR IMPOUNDED AT NAKA!",r=`Punjab Police Patrol boxed your car in and impounded your vehicle at the Naka! 🚓📋 Next time, pay the on-spot Challan or trigger a Full-Throttle Breakout!

Score: ${Math.round(this.state.score)} | Distance: ${Math.round(this.state.distance)} m | Heat: ${Math.round(this.state.heat)}%`;else if(i)n="📸 PSCA SAFE CITY E-CHALLAN",s="📸 IMPOUNDED FOR UNPAID E-CHALLAN!",r=`Dolphin Force intercepted your car after PSCA Safe City ANPR cameras flagged your speed! 📸🏍️ Next time, flip your plate with 2.0x Nitro or pay the online E-Challan!

Score: ${Math.round(this.state.score)} | Distance: ${Math.round(this.state.distance)} m | Heat: ${Math.round(this.state.heat)}%`;else{const c=this.state.health<=0?"Wrecked Out":"Out of Fuel";n=c,s=c==="Out of Fuel"?"Out of Fuel ⛽":"Car Wrecked 💥",r=`${this.selectedCar.label} | Score ${Math.round(this.state.score)} | Distance ${Math.round(this.state.distance)} m | Heat ${Math.round(this.state.heat)}% | Mission progress ${Math.min(this.state.nearMissCount,this.currentStage.mission.target)}/${this.currentStage.mission.target}. Press Space to restart.`}y.overlayButton.textContent="Restart",this.updateOverlay(n,s,r,this.currentStage.track),(l=y.overlayShareButton)==null||l.classList.remove("hidden");const o=!this.state.hasRevived&&wt&&this.adState.rewardedReady&&!this.progress.adFreePurchased;y.reviveButton.classList.toggle("hidden",!o),window.setTimeout(()=>this.startBackgroundModelLoading(),1200)}}window.game=new k_(document.querySelector("#game-view"));export{Ka as A,Ml as W};
