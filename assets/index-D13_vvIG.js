(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="183",Cd=0,yl=1,Pd=2,Cs=1,Ld=2,Es=3,Kn=0,Yt=1,nn=2,Xn=0,Ki=1,Sl=2,Ml=3,bl=4,Dd=5,Si=100,Id=101,Nd=102,Ud=103,Fd=104,Od=200,kd=201,Bd=202,zd=203,Va=204,Ga=205,Vd=206,Gd=207,Hd=208,Wd=209,Xd=210,$d=211,qd=212,Kd=213,Yd=214,Ha=0,Wa=1,Xa=2,Zi=3,$a=4,qa=5,Ka=6,Ya=7,Th=0,jd=1,Zd=2,An=0,Eh=1,Ah=2,Rh=3,Ch=4,Ph=5,Lh=6,Dh=7,wl="attached",Jd="detached",Ih=300,Ei=301,Ji=302,Yr=303,jr=304,Br=306,wn=1e3,Tn=1001,Cr=1002,Ct=1003,Nh=1004,As=1005,Pt=1006,Mr=1007,Hn=1008,sn=1009,Uh=1010,Fh=1011,Ns=1012,Go=1013,Pn=1014,on=1015,Yn=1016,Ho=1017,Wo=1018,Us=1020,Oh=35902,kh=35899,Bh=1021,zh=1022,ln=1023,jn=1026,wi=1027,Xo=1028,$o=1029,Qi=1030,qo=1031,Ko=1033,br=33776,wr=33777,Tr=33778,Er=33779,ja=35840,Za=35841,Ja=35842,Qa=35843,eo=36196,to=37492,no=37496,io=37488,so=37489,ro=37490,ao=37491,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,vo=37818,xo=37819,yo=37820,So=37821,Mo=36492,bo=36494,wo=36495,To=36283,Eo=36284,Ao=36285,Ro=36286,Fs=2300,Os=2301,Zr=2302,Tl=2303,El=2400,Al=2401,Rl=2402,Qd=2500,eu=0,Vh=1,Co=2,tu=3200,Gh=0,nu=1,li="",Bt="srgb",Zt="srgb-linear",Pr="linear",at="srgb",Ci=7680,Cl=519,iu=512,su=513,ru=514,Yo=515,au=516,ou=517,jo=518,lu=519,Po=35044,Pl="300 es",En=2e3,ks=2001;function cu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function du(){const s=Bs("canvas");return s.style.display="block",s}const Ll={};function Lr(...s){const e="THREE."+s.shift();console.log(e,...s)}function Hh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=Hh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ne(...s){s=Hh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Dr(...s){const e=s.join(" ");e in Ll||(Ll[e]=!0,Pe(...s))}function uu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fu={[Ha]:Wa,[Xa]:Ka,[$a]:Ya,[Zi]:qa,[Wa]:Ha,[Ka]:Xa,[Ya]:$a,[qa]:Zi};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const Ps=Math.PI/180,es=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function Zo(s,e){return(s%e+e)%e}function pu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mu(s,e,t){return s!==e?(t-s)/(e-s):0}function Ls(s,e,t){return(1-t)*s+t*e}function gu(s,e,t,n){return Ls(s,e,1-Math.exp(-t*n))}function _u(s,e=1){return e-Math.abs(Zo(s,e*2)-e)}function vu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function yu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Su(s,e){return s+Math.random()*(e-s)}function Mu(s){return s*(.5-Math.random())}function bu(s){s!==void 0&&(Dl=s);let e=Dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wu(s){return s*Ps}function Tu(s){return s*es}function Eu(s){return(s&s-1)===0&&s!==0}function Au(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ru(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+n)/2),c=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*c,l*d,l*u,o*h);break;case"YZY":s.set(l*u,o*c,l*d,o*h);break;case"ZXZ":s.set(l*d,l*u,o*c,o*h);break;case"XZX":s.set(o*c,l*g,l*f,o*h);break;case"YXY":s.set(l*f,o*c,l*g,o*h);break;case"ZYZ":s.set(l*g,l*f,o*c,o*h);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ye={DEG2RAD:Ps,RAD2DEG:es,generateUUID:mn,clamp:Ke,euclideanModulo:Zo,mapLinear:pu,inverseLerp:mu,lerp:Ls,damp:gu,pingpong:_u,smoothstep:vu,smootherstep:xu,randInt:yu,randFloat:Su,randFloatSpread:Mu,seededRandom:bu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:Eu,ceilPowerOfTwo:Au,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Cu,normalize:ot,denormalize:fn};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],h=n[i+1],c=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||h!==f||c!==g){let m=l*u+h*f+c*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+u*o,h=h*p+f*o,c=c*p+g*o,d=d*p+_*o}else{l=l*p+u*o,h=h*p+f*o,c=c*p+g*o,d=d*p+_*o;const y=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=y,h*=y,c*=y,d*=y}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],h=n[i+2],c=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+c*d+l*f-h*u,e[t+1]=l*g+c*u+h*d-o*f,e[t+2]=h*g+c*f+o*u-l*d,e[t+3]=c*g-o*d-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=n*c+a*o+i*h-r*l,this._y=i*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-i*o,this._w=a*c-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*i-o*n),c=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*h+a*d-o*c,this.y=n+l*c+o*h-r*d,this.z=i+l*d+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new I,Il=new Zn;class Ve{constructor(e,t,n,i,r,a,o,l,h){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,h)}set(e,t,n,i,r,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],b=i[4],M=i[7],A=i[2],E=i[5],C=i[8];return r[0]=a*_+o*y+l*A,r[3]=a*m+o*b+l*E,r[6]=a*p+o*M+l*C,r[1]=h*_+c*y+d*A,r[4]=h*m+c*b+d*E,r[7]=h*p+c*M+d*C,r[2]=u*_+f*y+g*A,r[5]=u*m+f*b+g*E,r[8]=u*p+f*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-n*r*c+n*o*l+i*r*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*h-c*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(c*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-i*h,i*l,-i*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ve,Nl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){const s={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zt]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:Nl,fromXYZ:Ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Nl,fromXYZ:Ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}const Ze=Pu();function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pi;class Lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=Bs("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Du=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ea(i[a].image)):r.push(ea(i[a]))}else r=ea(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Iu=0;const ta=new I;class Lt extends as{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Tn,i=Tn,r=Pt,a=Hn,o=ln,l=sn,h=Lt.DEFAULT_ANISOTROPY,c=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=mn(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ih;Lt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,M=(f+1)/2,A=(p+1)/2,E=(c+u)/4,C=(d+_)/4,x=(g+m)/4;return b>M&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=C/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=x/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=x/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-c)/y,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends as{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Lt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wh extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uu extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class He{constructor(e,t,n,i,r,a,o,l,h,c,d,u,f,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,h,c,d,u,f,g,_,m)}set(e,t,n,i,r,a,o,l,h,c,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*c,f=a*d,g=o*c,_=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=f+g*h,t[5]=u-_*h,t[9]=-o*l,t[2]=_-u*h,t[6]=g+f*h,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,f=l*d,g=h*c,_=h*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,f=l*d,g=h*c,_=h*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*c,t[9]=_-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,f=a*d,g=o*c,_=o*d;t[0]=l*c,t[4]=g*h-f,t[8]=u*h+_,t[1]=l*d,t[5]=_*h+u,t[9]=f*h-g,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*h,g=o*l,_=o*h;t[0]=l*c,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*h,g=o*l,_=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+_,t[5]=a*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*c,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fu,e,Ou)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ei.crossVectors(n,en),ei.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ei.crossVectors(n,en)),ei.normalize(),Xs.crossVectors(en,ei),i[0]=ei.x,i[4]=Xs.x,i[8]=en.x,i[1]=ei.y,i[5]=Xs.y,i[9]=en.y,i[2]=ei.z,i[6]=Xs.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],M=n[11],A=n[15],E=i[0],C=i[4],x=i[8],w=i[12],H=i[1],R=i[5],F=i[9],O=i[13],B=i[2],k=i[6],z=i[10],W=i[14],ne=i[3],Q=i[7],me=i[11],he=i[15];return r[0]=a*E+o*H+l*B+h*ne,r[4]=a*C+o*R+l*k+h*Q,r[8]=a*x+o*F+l*z+h*me,r[12]=a*w+o*O+l*W+h*he,r[1]=c*E+d*H+u*B+f*ne,r[5]=c*C+d*R+u*k+f*Q,r[9]=c*x+d*F+u*z+f*me,r[13]=c*w+d*O+u*W+f*he,r[2]=g*E+_*H+m*B+p*ne,r[6]=g*C+_*R+m*k+p*Q,r[10]=g*x+_*F+m*z+p*me,r[14]=g*w+_*O+m*W+p*he,r[3]=y*E+b*H+M*B+A*ne,r[7]=y*C+b*R+M*k+A*Q,r[11]=y*x+b*F+M*z+A*me,r[15]=y*w+b*O+M*W+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-h*u,b=o*f-h*d,M=o*u-l*d,A=a*f-h*c,E=a*u-l*c,C=a*d-o*c;return t*(_*y-m*b+p*M)-n*(g*y-m*A+p*E)+i*(g*b-_*A+p*C)-r*(g*M-_*E+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*o-n*a,b=t*l-i*a,M=t*h-r*a,A=n*l-i*o,E=n*h-r*o,C=i*h-r*l,x=c*_-d*g,w=c*m-u*g,H=c*p-f*g,R=d*m-u*_,F=d*p-f*_,O=u*p-f*m,B=y*O-b*F+M*R+A*H-E*w+C*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=(o*O-l*F+h*R)*k,e[1]=(i*F-n*O-r*R)*k,e[2]=(_*C-m*E+p*A)*k,e[3]=(u*E-d*C-f*A)*k,e[4]=(l*H-a*O-h*w)*k,e[5]=(t*O-i*H+r*w)*k,e[6]=(m*M-g*C-p*b)*k,e[7]=(c*C-u*M+f*b)*k,e[8]=(a*F-o*H+h*x)*k,e[9]=(n*H-t*F-r*x)*k,e[10]=(g*E-_*M+p*y)*k,e[11]=(d*M-c*E-f*y)*k,e[12]=(o*w-a*R-l*x)*k,e[13]=(t*R-n*w+i*x)*k,e[14]=(_*b-g*A-m*y)*k,e[15]=(c*A-d*b+u*y)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,c*o+n,c*l-i*a,0,h*l-i*o,c*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,g=r*d,_=a*c,m=a*d,p=o*d,y=l*h,b=l*c,M=l*d,A=n.x,E=n.y,C=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+M)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(u+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+b)*C,i[9]=(m-y)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),l=Li.set(i[8],i[9],i[10]).length();r<0&&(a=-a),hn.copy(this);const h=1/a,c=1/o,d=1/l;return hn.elements[0]*=h,hn.elements[1]*=h,hn.elements[2]*=h,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=En,l=!1){const h=this.elements,c=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===En)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ks)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=En,l=!1){const h=this.elements,c=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===En)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ks)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new I,hn=new He,Fu=new I(0,0,0),Ou=new I(1,1,1),ei=new I,Xs=new I,en=new I,Fl=new He,Ol=new Zn;class gn{constructor(e=0,t=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],c=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ku=0;const kl=new I,Di=new Zn,Fn=new He,$s=new I,us=new I,Bu=new I,zu=new Zn,Bl=new I(1,0,0),zl=new I(0,1,0),Vl=new I(0,0,1),Gl={type:"added"},Vu={type:"removed"},Ii={type:"childadded",child:null},na={type:"childremoved",child:null};class xt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new I,t=new gn,n=new Zn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ve}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$s.copy(e):$s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(us,$s,this.up):Fn.lookAt($s,us,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Fn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vu),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new I(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gu={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},qs={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Zo(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sa(a,r,e+1/3),this.g=sa(a,r,e),this.b=sa(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ze.workingToColorSpace(Gt.copy(this),e),Math.round(Ke(Gt.r*255,0,255))*65536+Math.round(Ke(Gt.g*255,0,255))*256+Math.round(Ke(Gt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Bt){Ze.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(qs);const n=Ls(ti.h,qs.h,t),i=Ls(ti.s,qs.s,t),r=Ls(ti.l,qs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ue;Ue.NAMES=$h;class Qo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hu extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new I,On=new I,ra=new I,kn=new I,Ni=new I,Ui=new I,Hl=new I,aa=new I,oa=new I,la=new I,ca=new vt,ha=new vt,da=new vt;class pn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){dn.subVectors(i,t),On.subVectors(n,t),ra.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(On),l=dn.dot(ra),h=On.dot(On),c=On.dot(ra),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ca.setScalar(0),ha.setScalar(0),da.setScalar(0),ca.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,n),da.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ca,r.x),a.addScaledVector(ha,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),On.subVectors(e,t),dn.cross(On).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Ui.subVectors(r,n),aa.subVectors(e,n);const l=Ni.dot(aa),h=Ui.dot(aa);if(l<=0&&h<=0)return t.copy(n);oa.subVectors(e,i);const c=Ni.dot(oa),d=Ui.dot(oa);if(c>=0&&d<=c)return t.copy(i);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(Ni,a);la.subVectors(e,r);const f=Ni.dot(la),g=Ui.dot(la);if(g>=0&&f<=g)return t.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(n).addScaledVector(Ui,o);const m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return Hl.subVectors(r,i),o=(d-c)/(d-c+(f-g)),t.copy(i).addScaledVector(Hl,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Ys.subVectors(this.max,fs),Fi.subVectors(e.a,fs),Oi.subVectors(e.b,fs),ki.subVectors(e.c,fs),ni.subVectors(Oi,Fi),ii.subVectors(ki,Oi),ui.subVectors(Fi,ki);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-ui.z,ui.y,ni.z,0,-ni.x,ii.z,0,-ii.x,ui.z,0,-ui.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-ui.y,ui.x,0];return!ua(t,Fi,Oi,ki,Ys)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Fi,Oi,ki,Ys))?!1:(js.crossVectors(ni,ii),t=[js.x,js.y,js.z],ua(t,Fi,Oi,ki,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,Ks=new Wt,Fi=new I,Oi=new I,ki=new I,ni=new I,ii=new I,ui=new I,fs=new I,Ys=new I,js=new I,fi=new I;function ua(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fi.fromArray(s,r);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),h=t.dot(fi),c=n.dot(fi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Rt=new I,Zs=new je;let Wu=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Po,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}}class qh extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kh extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Xu=new Wt,ps=new I,fa=new I;class Dn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(fa)),this.expandByPoint(ps.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $u=0;const rn=new He,pa=new xt,Bi=new I,tn=new Wt,ms=new Wt,Ft=new I;class Xt extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?Kh:qh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(tn.min,ms.min),tn.expandByPoint(Ft),Ft.addVectors(tn.max,ms.max),tn.expandByPoint(Ft)):(tn.expandByPoint(ms.min),tn.expandByPoint(ms.max))}tn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ft.fromBufferAttribute(o,h),l&&(Bi.fromBufferAttribute(e,h),Ft.add(Bi)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;const h=new I,c=new I,d=new I,u=new je,f=new je,g=new je,_=new I,m=new I;function p(x,w,H){h.fromBufferAttribute(n,x),c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,H),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,H),c.sub(h),d.sub(h),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(R),o[x].add(_),o[w].add(_),o[H].add(_),l[x].add(m),l[w].add(m),l[H].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const H=y[x],R=H.start,F=H.count;for(let O=R,B=R+F;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new I,M=new I,A=new I,E=new I;function C(x){A.fromBufferAttribute(i,x),E.copy(A);const w=o[x];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(E,w);const R=M.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,R)}for(let x=0,w=y.length;x<w;++x){const H=y[x],R=H.start,F=H.count;for(let O=R,B=R+F;O<B;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,h=new I,c=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,r),d.subVectors(i,r),c.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,r),d.subVectors(i,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let p=0;p<c;p++)u[g++]=h[f++]}return new jt(u,c,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=e(l,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(i[l]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Po,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new I;class el{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new el(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ku=0;class Cn extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Ki,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zn=new I,ma=new I,Js=new I,si=new I,ga=new I,Qs=new I,_a=new I;class zr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=si.dot(this.direction),l=-si.dot(Js),h=si.lengthSq(),c=Math.abs(1-a*a);let d,u,f,g;if(c>0)if(d=a*l-o,u=a*o-l,g=r*c,d>=0)if(u>=-g)if(u<=g){const _=1/c;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ma).addScaledVector(Js,u),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){ga.subVectors(t,e),Qs.subVectors(n,e),_a.crossVectors(ga,Qs);let a=this.direction.dot(_a),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(Qs.crossVectors(si,Qs));if(l<0)return null;const h=o*this.direction.dot(ga.cross(si));if(h<0||l+h>a)return null;const c=-o*si.dot(_a);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wl=new He,pi=new zr,er=new Dn,Xl=new I,tr=new I,nr=new I,ir=new I,va=new I,sr=new I,$l=new I,rr=new I;class $ extends xt{constructor(e=new Xt,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],d=r[l];c!==0&&(va.fromBufferAttribute(d,e),a?sr.addScaledVector(va,c):sr.addScaledVector(va.sub(t),c))}t.add(sr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(er.containsPoint(pi.origin)===!1&&(pi.intersectSphere(er,Xl)===null||pi.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),pi.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,A=b;M<A;M+=3){const E=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);i=ar(this,p,e,n,h,c,d,E,C,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);i=ar(this,a,e,n,h,c,d,y,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,A=b;M<A;M+=3){const E=M,C=M+1,x=M+2;i=ar(this,p,e,n,h,c,d,E,C,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,M=m+2;i=ar(this,a,e,n,h,c,d,y,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Yu(s,e,t,n,i,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Kn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(rr);return h<t.near||h>t.far?null:{distance:h,point:rr.clone(),object:s}}function ar(s,e,t,n,i,r,a,o,l,h){s.getVertexPosition(o,tr),s.getVertexPosition(l,nr),s.getVertexPosition(h,ir);const c=Yu(s,e,t,n,tr,nr,ir,$l);if(c){const d=new I;pn.getBarycoord($l,tr,nr,ir,d),i&&(c.uv=pn.getInterpolatedAttribute(i,o,l,h,d,new je)),r&&(c.uv1=pn.getInterpolatedAttribute(r,o,l,h,d,new je)),a&&(c.normal=pn.getInterpolatedAttribute(a,o,l,h,d,new I),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new I,materialIndex:0};pn.getNormal(tr,nr,ir,u.normal),c.face=u,c.barycoord=d}return c}const ql=new I,Kl=new vt,Yl=new vt,ju=new I,jl=new He,or=new I,xa=new Dn,Zl=new He,ya=new zr;class Zu extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wl,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,or),this.boundingBox.expandByPoint(or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,or),this.boundingSphere.expandByPoint(or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1&&(Zl.copy(i).invert(),ya.copy(e.ray).applyMatrix4(Zl),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kl.fromBufferAttribute(i.attributes.skinIndex,e),Yl.fromBufferAttribute(i.attributes.skinWeight,e),ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Yl.getComponent(r);if(a!==0){const o=Kl.getComponent(r);jl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ju.copy(ql).applyMatrix4(jl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yh extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tl extends Lt{constructor(e=null,t=1,n=1,i,r,a,o,l,h=Ct,c=Ct,d,u){super(null,a,o,l,h,c,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new He,Ju=new He;class nl{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ju;Jl.multiplyMatrices(o,t[r]),Jl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tl(t,e,e,ln,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new Yh),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Lo extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zi=new He,Ql=new He,lr=[],ec=new Wt,Qu=new He,gs=new $,_s=new Dn;class ef extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),ec.copy(e.boundingBox).applyMatrix4(zi),this.boundingBox.union(ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),_s.copy(e.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zi),Ql.multiplyMatrices(n,zi),gs.matrixWorld=Ql,gs.raycast(e,lr);for(let a=0,o=lr.length;a<o;a++){const l=lr[a];l.instanceId=r,l.object=this,t.push(l)}lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tl(new Float32Array(i*this.count),i,this.count,Xo,on));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sa=new I,tf=new I,nf=new Ve;class yi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sa.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nf.getNormalMatrix(e),i=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Dn,sf=new je(.5,.5),cr=new I;class il{constructor(e=new yi,t=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],b=r[13],M=r[14],A=r[15];if(i[0].setComponents(h-a,f-c,p-g,A-y).normalize(),i[1].setComponents(h+a,f+c,p+g,A+y).normalize(),i[2].setComponents(h+o,f+d,p+_,A+b).normalize(),i[3].setComponents(h-o,f-d,p-_,A-b).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(h-l,f-u,p-m,A-M).normalize();else if(i[4].setComponents(h-l,f-u,p-m,A-M).normalize(),t===En)i[5].setComponents(h+l,f+u,p+m,A+M).normalize();else if(t===ks)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=sf.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cr.x=i.normal.x>0?e.max.x:e.min.x,cr.y=i.normal.y>0?e.max.y:e.min.y,cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jh extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ir=new I,Nr=new I,tc=new He,vs=new zr,hr=new Dn,Ma=new I,nc=new I;class sl extends xt{constructor(e=new Xt,t=new jh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ir.fromBufferAttribute(t,i-1),Nr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ir.distanceTo(Nr);e.setAttribute("lineDistance",new yt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;tc.copy(i).invert(),vs.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=h){const p=c.getX(_),y=c.getX(_+1),b=dr(this,e,vs,l,p,y,_);b&&t.push(b)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(f),p=dr(this,e,vs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=h){const p=dr(this,e,vs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=dr(this,e,vs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ir.fromBufferAttribute(o,i),Nr.fromBufferAttribute(o,r),t.distanceSqToSegment(Ir,Nr,Ma,nc)>n)return;Ma.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Ma);if(!(h<e.near||h>e.far))return{distance:h,point:nc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ic=new I,sc=new I;class rf extends sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ic.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ic.distanceTo(sc);e.setAttribute("lineDistance",new yt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class af extends sl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zh extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rc=new He,Do=new zr,ur=new Dn,fr=new I;class of extends xt{constructor(e=new Xt,t=new Zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;rc.copy(i).invert(),Do.copy(e.ray).applyMatrix4(rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=h.getX(g);fr.fromBufferAttribute(d,m),ac(fr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)fr.fromBufferAttribute(d,g),ac(fr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ac(s,e,t,n,i,r,a){const o=Do.distanceSqToPoint(s);if(o<t){const l=new I;Do.closestPointToPoint(s,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jh extends Lt{constructor(e=[],t=Ei,n,i,r,a,o,l,h,c){super(e,t,n,i,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xs extends Lt{constructor(e,t,n,i,r,a,o,l,h){super(e,t,n,i,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zs extends Lt{constructor(e,t,n=Pn,i,r,a,o=Ct,l=Ct,h,c=jn,d=1){if(c!==jn&&c!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lf extends zs{constructor(e,t=Pn,n=Ei,i,r,a=Ct,o=Ct,l,h=jn){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,n,i,r,a,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class de extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(d,2));function g(_,m,p,y,b,M,A,E,C,x,w){const H=M/C,R=A/x,F=M/2,O=A/2,B=E/2,k=C+1,z=x+1;let W=0,ne=0;const Q=new I;for(let me=0;me<z;me++){const he=me*R-O;for(let ae=0;ae<k;ae++){const ke=ae*H-F;Q[_]=ke*y,Q[m]=he*b,Q[p]=B,h.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=E>0?1:-1,c.push(Q.x,Q.y,Q.z),d.push(ae/C),d.push(1-me/x),W+=1}}for(let me=0;me<x;me++)for(let he=0;he<C;he++){const ae=u+he+k*me,ke=u+he+k*(me+1),nt=u+(he+1)+k*(me+1),gt=u+(he+1)+k*me;l.push(ae,ke,gt),l.push(ke,nt,gt),ne+=6}o.addGroup(f,ne,w),f+=ne,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rl extends Xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],h=new I,c=new je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tt extends Xt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;i=Math.floor(i),r=Math.floor(r);const c=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function y(){const M=new I,A=new I;let E=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const w=[],H=x/r,R=H*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,B=O*l+o,k=Math.sin(B),z=Math.cos(B);A.x=R*k,A.y=-H*n+m,A.z=R*z,d.push(A.x,A.y,A.z),M.set(k,C,z).normalize(),u.push(M.x,M.y,M.z),f.push(O,1-H),w.push(g++)}_.push(w)}for(let x=0;x<i;x++)for(let w=0;w<r;w++){const H=_[w][x],R=_[w+1][x],F=_[w+1][x+1],O=_[w][x+1];(e>0||w!==0)&&(c.push(H,R,O),E+=3),(t>0||w!==r-1)&&(c.push(R,F,O),E+=3)}h.addGroup(p,E,0),p+=E}function b(M){const A=g,E=new je,C=new I;let x=0;const w=M===!0?e:t,H=M===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*H,0),u.push(0,H,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=i;F++){const B=F/i*l+o,k=Math.cos(B),z=Math.sin(B);C.x=w*z,C.y=m*H,C.z=w*k,d.push(C.x,C.y,C.z),u.push(0,H,0),E.x=k*.5+.5,E.y=z*.5*H+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const O=A+F,B=R+F;M===!0?c.push(B,B+1,O):c.push(B+1,B,O),x+=3}h.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class al extends Tt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new al(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mt extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,c=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const y=p*u-a;for(let b=0;b<h;b++){const M=b*d-r;g.push(M,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+h*p,M=y+h*(p+1),A=y+1+h*(p+1),E=y+1+h*p;f.push(b,M,E),f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jt extends Xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const c=[],d=new I,u=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const E=A/t;d.x=-e*Math.cos(i+E*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(i+E*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+M,1-b),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=c[p][y+1],M=c[p][y],A=c[p+1][y],E=c[p+1][y+1];(p!==0||a>0)&&f.push(b,M,E),(p!==n-1||l<Math.PI)&&f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ur extends Xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],h=[],c=[],d=[],u=new I,f=new I,g=new I;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=i;p++){const y=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),h.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(f,u).normalize(),c.push(g.x,g.y,g.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const p=(i+1)*_+m-1,y=(i+1)*(_-1)+m-1,b=(i+1)*(_-1)+m,M=(i+1)*_+m;l.push(p,y,M),l.push(y,b,M)}this.setIndex(l),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ts(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=ts(s[t]);for(const i in n)e[i]=n[i]}return e}function cf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ed(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const hf={clone:ts,merge:qt};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ff extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends J{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pf extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mf extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function pr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function oc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function td(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class os{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _f extends os{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=e,o=2*t-n;break;case Rl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,l=2*n-t;break;case Rl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let A=0;A!==o;++A)r[A]=p*a[c+A]+y*a[h+A]+b*a[l+A]+M*a[d+A];return r}}class vf extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(n-t)/(i-t),d=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[l+u]*c;return r}}class xf extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yf extends os{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this.settings||this.DefaultSettings_,d=c.inTangents,u=c.outTangents;if(!d||!u){const _=(n-t)/(i-t),m=1-_;for(let p=0;p!==o;++p)r[p]=a[h+p]*m+a[l+p]*_;return r}const f=o*2,g=e-1;for(let _=0;_!==o;++_){const m=a[h+_],p=a[l+_],y=g*f+_*2,b=u[y],M=u[y+1],A=e*f+_*2,E=d[A],C=d[A+1];let x=(n-t)/(i-t),w,H,R,F,O;for(let B=0;B<8;B++){w=x*x,H=w*x,R=1-x,F=R*R,O=F*R;const z=O*t+3*F*x*b+3*R*w*E+H*i-n;if(Math.abs(z)<1e-10)break;const W=3*F*(b-t)+6*R*x*(E-b)+3*w*(i-E);if(Math.abs(W)<1e-10)break;x=x-z/W,x=Math.max(0,Math.min(1,x))}r[_]=O*m+3*F*x*M+3*R*w*C+H*p}return r}}class _n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pr(t,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pr(e.times,Array),values:pr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _f(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new yf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Zr:t=this.InterpolantFactoryMethodSmooth;break;case Tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Zr;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&hu(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){Ne("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const h=e[o],c=e[o+1];if(h!==c&&(o!==1||h!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Os;class ls extends _n{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fs;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class nd extends _n{constructor(e,t,n,i){super(e,t,n,i)}}nd.prototype.ValueTypeName="color";class ns extends _n{constructor(e,t,n,i){super(e,t,n,i)}}ns.prototype.ValueTypeName="number";class Sf extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let c=h+o;h!==c;h+=4)Zn.slerpFlat(r,0,a,h-o,a,h,l);return r}}class is extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sf(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends _n{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Fs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends _n{constructor(e,t,n,i){super(e,t,n,i)}}ss.prototype.ValueTypeName="vector";class Mf{constructor(e="",t=-1,n=[],i=Qd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const c=gf(l);l=oc(l,1,c),h=oc(h,1,c),!i&&l[0]===0&&(l.push(r),h.push(h[0])),a.push(new ns(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],c=h.name.match(r);if(c&&c.length>1){const d=c[1];let u=i[d];u||(i[d]=u=[]),u.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Pe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ne("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];td(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const u=h[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const b=u[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(ss,f+".position",u,"pos",i),n(is,f+".quaternion",u,"rot",i),n(ss,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function bf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return nd;case"quaternion":return is;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bf(s.type);if(s.times===void 0){const t=[],n=[];td(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Wn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(lc(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!lc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function lc(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Tf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){const d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){const f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ef=new Tf;class hs{constructor(e){this.manager=e!==void 0?e:Ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class Af extends Error{constructor(e,t){super(e),this.response=t}}class id extends hs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=Vn[e],d=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:b,value:M})=>{if(b)p.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,C=c.length;E<C;E++){const x=c[E];x.onProgress&&x.onProgress(A)}p.enqueue(M),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Af(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o==="")return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{Wn.add(`file:${e}`,h);const c=Vn[e];delete Vn[e];for(let d=0,u=c.length;d<u;d++){const f=c[d];f.onLoad&&f.onLoad(h)}}).catch(h=>{const c=Vn[e];if(c===void 0)throw this.manager.itemError(e),h;delete Vn[e];for(let d=0,u=c.length;d<u;d++){const f=c[d];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vi=new WeakMap;class Rf extends hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Vi.get(a);d===void 0&&(d=[],Vi.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Bs("img");function l(){c(),t&&t(this);const d=Vi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Vi.delete(this),r.manager.itemEnd(e)}function h(d){c(),i&&i(d),Wn.remove(`image:${e}`);const u=Vi.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Vi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Cf extends hs{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,a=new Rf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vr extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Pf extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ba=new He,cc=new I,hc=new I;class ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ks||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mr=new I,gr=new Zn,xn=new I;class sd extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mr,gr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mr,gr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(mr,gr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mr,gr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new I,dc=new je,uc=new je;class Kt extends sd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,dc,uc),t.subVectors(uc,dc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lf extends ol{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rd extends Vr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Df extends ol{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Io extends Vr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Df}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gr extends sd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class If extends ol{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ad extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new If}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ds{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wa=new WeakMap;class Nf extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(h=>{if(wa.has(a)===!0)i&&i(wa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(h),r.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Wn.add(`image-bitmap:${e}`,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),wa.set(l,h),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gi=-90,Hi=1;class Uf extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Gi,Hi,e,t);i.layers=this.layers,this.add(i);const r=new Kt(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const h=new Kt(Gi,Hi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ff extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ll="\\[\\]\\.:\\/",Of=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",kf="[^"+ll.replace("\\.","")+"]",Bf=/((?:WC+[\/:])*)/.source.replace("WC",cl),zf=/(WCOD+)?/.source.replace("WCOD",kf),Vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Gf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Hf=new RegExp("^"+Bf+zf+Vf+Gf+"$"),Wf=["material","materials","bones","map"];class Xf{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Of,"")}static parseTrackName(e){const t=Hf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Wf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Xf;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function fc(s,e,t,n){const i=$f(n);switch(t){case Bh:return s*e;case Xo:return s*e/i.components*i.byteLength;case $o:return s*e/i.components*i.byteLength;case Qi:return s*e*2/i.components*i.byteLength;case qo:return s*e*2/i.components*i.byteLength;case zh:return s*e*3/i.components*i.byteLength;case ln:return s*e*4/i.components*i.byteLength;case Ko:return s*e*4/i.components*i.byteLength;case br:case wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Za:case Qa:return Math.max(s,16)*Math.max(e,8)/4;case ja:case Ja:return Math.max(s,8)*Math.max(e,8)/2;case eo:case to:case io:case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case ro:case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mo:case bo:case wo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case To:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ao:case Ro:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $f(s){switch(s){case sn:case Uh:return{byteLength:1,components:1};case Ns:case Fh:case Yn:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case Pn:case Go:case on:return{byteLength:4,components:1};case Oh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function od(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qf(s){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=s.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,h){const c=l.array,d=l.updateRanges;if(s.bindBuffer(h,o),d.length===0)s.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:i,remove:r,update:a}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,$p=`uniform sampler2D dfgLUT;
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
}`,qp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,ng=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,yg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Kf,alphahash_pars_fragment:Yf,alphamap_fragment:jf,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:Qf,aomap_fragment:ep,aomap_pars_fragment:tp,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:up,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:xp,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:Mp,emissivemap_pars_fragment:bp,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ep,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:zp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Ip,fog_pars_fragment:Np,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Fp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:kp,lights_pars_begin:Bp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:$p,lights_fragment_begin:qp,lights_fragment_maps:Kp,lights_fragment_end:Yp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:dm,normal_fragment_maps:um,normal_pars_fragment:fm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:ym,opaque_fragment:Sm,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:wm,dithering_fragment:Tm,dithering_pars_fragment:Em,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Im,skinning_pars_vertex:Nm,skinning_vertex:Um,skinnormal_vertex:Fm,specularmap_fragment:Om,specularmap_pars_fragment:km,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:Vm,transmission_pars_fragment:Gm,uv_pars_fragment:Hm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:$m,background_vert:qm,background_frag:Km,backgroundCube_vert:Ym,backgroundCube_frag:jm,cube_vert:Zm,cube_frag:Jm,depth_vert:Qm,depth_frag:eg,distance_vert:tg,distance_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:dg,meshmatcap_frag:ug,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:_g,meshphysical_frag:vg,meshtoon_vert:xg,meshtoon_frag:yg,points_vert:Sg,points_frag:Mg,shadow_vert:bg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Eg},ue={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},bn={basic:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:qt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:qt([ue.lights,ue.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};bn.physical={uniforms:qt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const _r={r:0,b:0,g:0},gi=new gn,Ag=new He;function Rg(s,e,t,n,i,r){const a=new Ue(0);let o=i===!0?0:1,l,h,c=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1;const M=f(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,b){const M=f(b);M&&(M.isCubeTexture||M.mapping===Br)?(h===void 0&&(h=new $(new de(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ts(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),gi.copy(b.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(gi)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,(c!==M||d!==M.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,c=M,d=M.version,u=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $(new mt(2,2),new Ln({name:"BackgroundMaterial",uniforms:ts(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,c=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(_r,ed(s)),t.buffers.color.setClear(_r.r,_r.g,_r.b,b,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Cg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(R,F,O,B,k){let z=!1;const W=d(R,B,O,F);r!==W&&(r=W,h(r.object)),z=f(R,B,O,k),z&&g(R,B,O,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(R,F,O,B),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function h(R){return s.bindVertexArray(R)}function c(R){return s.deleteVertexArray(R)}function d(R,F,O,B){const k=B.wireframe===!0;let z=n[F.id];z===void 0&&(z={},n[F.id]=z);const W=R.isInstancedMesh===!0?R.id:0;let ne=z[W];ne===void 0&&(ne={},z[W]=ne);let Q=ne[O.id];Q===void 0&&(Q={},ne[O.id]=Q);let me=Q[k];return me===void 0&&(me=u(l()),Q[k]=me),me}function u(R){const F=[],O=[],B=[];for(let k=0;k<t;k++)F[k]=0,O[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:B,object:R,attributes:{},index:null}}function f(R,F,O,B){const k=r.attributes,z=F.attributes;let W=0;const ne=O.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const he=k[Q];let ae=z[Q];if(ae===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),he===void 0||he.attribute!==ae||ae&&he.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(R,F,O,B){const k={},z=F.attributes;let W=0;const ne=O.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let he=z[Q];he===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(he=R.instanceColor));const ae={};ae.attribute=he,he&&he.data&&(ae.data=he.data),k[Q]=ae,W++}r.attributes=k,r.attributesNum=W,r.index=B}function _(){const R=r.newAttributes;for(let F=0,O=R.length;F<O;F++)R[F]=0}function m(R){p(R,0)}function p(R,F){const O=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;O[R]=1,B[R]===0&&(s.enableVertexAttribArray(R),B[R]=1),k[R]!==F&&(s.vertexAttribDivisor(R,F),k[R]=F)}function y(){const R=r.newAttributes,F=r.enabledAttributes;for(let O=0,B=F.length;O<B;O++)F[O]!==R[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function b(R,F,O,B,k,z,W){W===!0?s.vertexAttribIPointer(R,F,O,k,z):s.vertexAttribPointer(R,F,O,B,k,z)}function M(R,F,O,B){_();const k=B.attributes,z=O.getAttributes(),W=F.defaultAttributeValues;for(const ne in z){const Q=z[ne];if(Q.location>=0){let me=k[ne];if(me===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(me=R.instanceColor)),me!==void 0){const he=me.normalized,ae=me.itemSize,ke=e.get(me);if(ke===void 0)continue;const nt=ke.buffer,gt=ke.type,j=ke.bytesPerElement,re=gt===s.INT||gt===s.UNSIGNED_INT||me.gpuType===Go;if(me.isInterleavedBufferAttribute){const ce=me.data,ze=ce.stride,De=me.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Q.locationSize;Fe++)p(Q.location+Fe,ce.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<Q.locationSize;Fe++)m(Q.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let Fe=0;Fe<Q.locationSize;Fe++)b(Q.location+Fe,ae/Q.locationSize,gt,he,ze*j,(De+ae/Q.locationSize*Fe)*j,re)}else{if(me.isInstancedBufferAttribute){for(let ce=0;ce<Q.locationSize;ce++)p(Q.location+ce,me.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<Q.locationSize;ce++)m(Q.location+ce);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let ce=0;ce<Q.locationSize;ce++)b(Q.location+ce,ae/Q.locationSize,gt,he,ae*j,ae/Q.locationSize*ce*j,re)}}else if(W!==void 0){const he=W[ne];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Q.location,he);break;case 3:s.vertexAttrib3fv(Q.location,he);break;case 4:s.vertexAttrib4fv(Q.location,he);break;default:s.vertexAttrib1fv(Q.location,he)}}}}y()}function A(){w();for(const R in n){const F=n[R];for(const O in F){const B=F[O];for(const k in B){const z=B[k];for(const W in z)c(z[W].object),delete z[W];delete B[k]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const O in F){const B=F[O];for(const k in B){const z=B[k];for(const W in z)c(z[W].object),delete z[W];delete B[k]}}delete n[R.id]}function C(R){for(const F in n){const O=n[F];for(const B in O){const k=O[B];if(k[R.id]===void 0)continue;const z=k[R.id];for(const W in z)c(z[W].object),delete z[W];delete k[R.id]}}}function x(R){for(const F in n){const O=n[F],B=R.isInstancedMesh===!0?R.id:0,k=O[B];if(k!==void 0){for(const z in k){const W=k[z];for(const ne in W)c(W[ne].object),delete W[ne];delete k[z]}delete O[B],Object.keys(O).length===0&&delete n[F]}}}function w(){H(),a=!0,r!==i&&(r=i,h(r.object))}function H(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Pg(s,e,t){let n;function i(h){n=h}function r(h,c){s.drawArrays(n,h,c),t.update(c,n,1)}function a(h,c,d){d!==0&&(s.drawArraysInstanced(n,h,c,d),t.update(c,n,d))}function o(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];t.update(f,n,1)}function l(h,c,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],c[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==ln&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==sn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==on&&!x)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(Pe("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:A,samples:E}}function Dg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new yi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?c(null):h();else{const y=r?0:n,b=y*4;let M=p.clippingState||null;l.value=M,M=c(g,u,b,f);for(let A=0;A!==b;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==_;++b,M+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const ci=4,pc=[.125,.215,.35,.446,.526,.582],Mi=20,Ig=256,ys=new Gr,mc=new Ue;let Ta=null,Ea=0,Aa=0,Ra=!1;const Ng=new I;class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Ng}=r;Ta=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Ea,Aa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Yn,format:ln,colorSpace:Zt,depthBuffer:!1},i=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Og(r,e,t),this._ggxMaterial=Fg(r,e,t)}return i}_compileMaterial(e){const t=new $(new Xt,e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,n,i,r){const l=new Kt(90,1,t,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(mc),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $(new de,new Ye({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(mc),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[b],r.y,r.z)):M===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[b]));const A=this._cubeSize;Wi(i,M*A,b>2?A:0,A,A),d.setRenderTarget(i),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,h=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=0+h*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ci?n-g+ci:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Wi(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,ys),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Wi(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,ys)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[i];d.material=h;const u=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Mi;m>Mi&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let y=0;for(let C=0;C<Mi;++C){const x=C/_,w=Math.exp(-x*x/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const M=this._sizeLods[i],A=3*M*(i>b-ci?i-b+ci:0),E=4*(this._cubeSize-M);Wi(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(d,ys)}}function Ug(s){const e=[],t=[],n=[];let i=s;const r=s-ci+1+pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ci?l=pc[a-s+ci-1]:a===0&&(l=0),t.push(l);const h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,x=E>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(w,_*g*E),b.set(u,m*g*E);const H=[E,E,E,E,E,E];M.set(H,p*g*E)}const A=new Xt;A.setAttribute("position",new jt(y,_)),A.setAttribute("uv",new jt(b,m)),A.setAttribute("faceIndex",new jt(M,p)),n.push(new $(A,null)),i>ci&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function _c(s,e,t){const n=new Rn(s,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fg(s,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Og(s,e,t){const n=new Float32Array(Mi),i=new I(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function xc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Hr(){return`

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
	`}class ld extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new de(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Xn});r.uniforms.tEquirect.value=t;const a=new $(i,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Pt),new Uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function kg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Yr||f===jr)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new ld(g.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Yr||f===jr,_=f===Ei||f===Ji;if(g||_){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new gc(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new gc(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,f){return f===Yr?u.mapping=Ei:f===jr&&(u.mapping=Ji),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Bg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Dr("WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function h(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let b=0,M=y.length;b<M;b+=3){const A=y[b+0],E=y[b+1],C=y[b+2];u.push(A,E,E,C,C,A)}}else{const y=g.array;_=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const A=b+0,E=b+1,C=b+2;u.push(A,E,E,C,C,A)}}const m=new(g.count>=65535?Kh:qh)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function c(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Vg(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function h(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function c(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Gg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hg(s,e,t){const n=new WeakMap,i=new vt;function r(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let M=o.attributes.position.count*b,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*A*4*d),C=new Wh(E,M,A,d);C.type=on,C.needsUpdate=!0;const x=b*4;for(let H=0;H<d;H++){const R=m[H],F=p[H],O=y[H],B=M*A*4*H;for(let k=0;k<R.count;k++){const z=k*x;f===!0&&(i.fromBufferAttribute(R,k),E[B+z+0]=i.x,E[B+z+1]=i.y,E[B+z+2]=i.z,E[B+z+3]=0),g===!0&&(i.fromBufferAttribute(F,k),E[B+z+4]=i.x,E[B+z+5]=i.y,E[B+z+6]=i.z,E[B+z+7]=0),_===!0&&(i.fromBufferAttribute(O,k),E[B+z+8]=i.x,E[B+z+9]=i.y,E[B+z+10]=i.z,E[B+z+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new je(M,A)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Wg(s,e,t,n,i){let r=new WeakMap;function a(h){const c=i.render.frame,d=h.geometry,u=e.get(h,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Xg={[Eh]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[Dh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function $g(s,e,t,n,i){const r=new Rn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Rn(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),o=new Xt;o.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new yt([0,2,0,0,2,0],2));const l=new ff({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new $(o,l),c=new Gr(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let A=0;A<m.length;A++){const E=m[A];E.setSize&&E.setSize(b,M)}},this.begin=function(y,b){if(f||y.toneMapping===An&&m.length===0)return!1;if(_=b,b!==null){const M=b.width,A=b.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=An,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=g,f=!0;let M=r,A=a;for(let E=0;E<m.length;E++){const C=m[E];if(C.enabled!==!1&&(C.render(y,A,M,b),C.needsSwap!==!1)){const x=M;M=A,A=x}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},Ze.getTransfer(d)===at&&(l.defines.SRGB_TRANSFER="");const E=Xg[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(_),y.render(h,c),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const cd=new Lt,No=new zs(1,1),hd=new Wh,dd=new Uu,ud=new Jh,yc=[],Sc=[],Mc=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function ds(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=yc[i];if(r===void 0&&(r=new Float32Array(i),yc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wr(s,e){let t=Sc[e];t===void 0&&(t=new Int32Array(e),Sc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function Zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;wc.set(n),s.uniformMatrix2fv(this.addr,!1,wc),It(t,n)}}function Jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;bc.set(n),s.uniformMatrix3fv(this.addr,!1,bc),It(t,n)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;Mc.set(n),s.uniformMatrix4fv(this.addr,!1,Mc),It(t,n)}}function e0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function s0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function r0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function a0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function o0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function l0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(No.compareFunction=t.isReversedDepthBuffer()?jo:Yo,r=No):r=cd,t.setTexture2D(e||r,i)}function c0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dd,i)}function h0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ud,i)}function d0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hd,i)}function u0(s){switch(s){case 5126:return qg;case 35664:return Kg;case 35665:return Yg;case 35666:return jg;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function f0(s,e){s.uniform1fv(this.addr,e)}function p0(s,e){const t=ds(e,this.size,2);s.uniform2fv(this.addr,t)}function m0(s,e){const t=ds(e,this.size,3);s.uniform3fv(this.addr,t)}function g0(s,e){const t=ds(e,this.size,4);s.uniform4fv(this.addr,t)}function _0(s,e){const t=ds(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function v0(s,e){const t=ds(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x0(s,e){const t=ds(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y0(s,e){s.uniform1iv(this.addr,e)}function S0(s,e){s.uniform2iv(this.addr,e)}function M0(s,e){s.uniform3iv(this.addr,e)}function b0(s,e){s.uniform4iv(this.addr,e)}function w0(s,e){s.uniform1uiv(this.addr,e)}function T0(s,e){s.uniform2uiv(this.addr,e)}function E0(s,e){s.uniform3uiv(this.addr,e)}function A0(s,e){s.uniform4uiv(this.addr,e)}function R0(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=No:a=cd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function C0(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||dd,r[a])}function P0(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ud,r[a])}function L0(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hd,r[a])}function D0(s){switch(s){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return S0;case 35668:case 35672:return M0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return T0;case 36295:return E0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}}class N0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D0(t.type)}}class U0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Tc(s,e){s.seq.push(e),s.map[e.id]=e}function F0(s,e,t){const n=s.name,i=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),a=Ca.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){Tc(t,h===void 0?new I0(o,s,e):new N0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new U0(o),Tc(t,d)),t=d}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);F0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ec(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const O0=37297;let k0=0;function B0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ac=new Ve;function z0(s){Ze._getMatrix(Ac,Ze.workingColorSpace,s);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Pr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+B0(s.getShaderSource(e),o)}else return r}function V0(s,e){const t=z0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const G0={[Eh]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[Ch]:"ACESFilmic",[Lh]:"AgX",[Dh]:"Neutral",[Ph]:"Custom"};function H0(s,e){const t=G0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new I;function W0(){Ze.getLuminanceCoefficients(vr);const s=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function $0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Rs(s){return s!==""}function Cc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(K0,j0)}const Y0=new Map;function j0(s,e){let t=Ge[e];if(t===void 0){const n=Y0.get(e);if(n!==void 0)t=Ge[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(s){return s.replace(Z0,J0)}function J0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Q0={[Cs]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function e_(s){return Q0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t_={[Ei]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function n_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":t_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const i_={[Ji]:"ENVMAP_MODE_REFRACTION"};function s_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const r_={[Th]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function a_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":r_[s.combine]||"ENVMAP_BLENDING_NONE"}function o_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function l_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=e_(t),h=n_(t),c=s_(t),d=a_(t),u=o_(t),f=X0(t),g=$0(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ge.tonemapping_pars_fragment:"",t.toneMapping!==An?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),W0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Uo(a),a=Cc(a,t),a=Pc(a,t),o=Uo(o),o=Cc(o,t),o=Pc(o,t),a=Lc(a),o=Lc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,M=y+p+o,A=Ec(i,i.VERTEX_SHADER,b),E=Ec(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(A)||"",B=i.getShaderInfoLog(E)||"",k=F.trim(),z=O.trim(),W=B.trim();let ne=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,E);else{const me=Rc(i,A,"vertex"),he=Rc(i,E,"fragment");Ne("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+me+`
`+he)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(z===""||W==="")&&(Q=!1);Q&&(R.diagnostics={runnable:ne,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(E),x=new Ar(i,_),w=q0(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(_,O0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let c_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}}function u_(s,e,t,n,i,r){const a=new Xh,o=new h_,l=new Set,h=[],c=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,H,R,F){const O=R.fog,B=F.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||k,z),ne=W&&W.mapping===Br?W.image.height:null,Q=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=me!==void 0?me.length:0;let ae=0;B.morphAttributes.position!==void 0&&(ae=1),B.morphAttributes.normal!==void 0&&(ae=2),B.morphAttributes.color!==void 0&&(ae=3);let ke,nt,gt,j;if(Q){const st=bn[Q];ke=st.vertexShader,nt=st.fragmentShader}else ke=x.vertexShader,nt=x.fragmentShader,o.update(x),gt=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const re=s.getRenderTarget(),ce=s.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,Fe=!!x.map,Nt=!!x.matcap,Je=!!W,it=!!x.aoMap,dt=!!x.lightMap,We=!!x.bumpMap,bt=!!x.normalMap,L=!!x.displacementMap,At=!!x.emissiveMap,tt=!!x.metalnessMap,ft=!!x.roughnessMap,Ee=x.anisotropy>0,T=x.clearcoat>0,v=x.dispersion>0,N=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,K=Ee&&!!x.anisotropyMap,Se=T&&!!x.clearcoatMap,oe=T&&!!x.clearcoatNormalMap,Le=T&&!!x.clearcoatRoughnessMap,Ie=N&&!!x.iridescenceMap,ee=N&&!!x.iridescenceThicknessMap,ie=Y&&!!x.sheenColorMap,Me=Y&&!!x.sheenRoughnessMap,we=!!x.specularMap,ge=!!x.specularColorMap,Xe=!!x.specularIntensityMap,D=Z&&!!x.transmissionMap,le=Z&&!!x.thicknessMap,se=!!x.gradientMap,xe=!!x.alphaMap,te=x.alphaTest>0,q=!!x.alphaHash,be=!!x.extensions;let Oe=An;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const pt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:nt,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Zt,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:Nt,envMap:Je,envMapMode:Je&&W.mapping,envMapCubeUVHeight:ne,aoMap:it,lightMap:dt,bumpMap:We,normalMap:bt,displacementMap:L,emissiveMap:At,normalMapObjectSpace:bt&&x.normalMapType===nu,normalMapTangentSpace:bt&&x.normalMapType===Gh,metalnessMap:tt,roughnessMap:ft,anisotropy:Ee,anisotropyMap:K,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Le,dispersion:v,iridescence:N,iridescenceMap:Ie,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:Me,specularMap:we,specularColorMap:ge,specularIntensityMap:Xe,transmission:Z,transmissionMap:D,thicknessMap:le,gradientMap:se,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:te,alphaHash:q,combine:x.combine,mapUv:Fe&&g(x.map.channel),aoMapUv:it&&g(x.aoMap.channel),lightMapUv:dt&&g(x.lightMap.channel),bumpMapUv:We&&g(x.bumpMap.channel),normalMapUv:bt&&g(x.normalMap.channel),displacementMapUv:L&&g(x.displacementMap.channel),emissiveMapUv:At&&g(x.emissiveMap.channel),metalnessMapUv:tt&&g(x.metalnessMap.channel),roughnessMapUv:ft&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:Se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:we&&g(x.specularMap.channel),specularColorMapUv:ge&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:le&&g(x.thicknessMap.channel),alphaMapUv:xe&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Fe||xe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:At&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)w.push(H),w.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const w=f[x.type];let H;if(w){const R=bn[w];H=hf.clone(R.uniforms)}else H=x.uniforms;return H}function M(x,w){let H=c.get(w);return H!==void 0?++H.usedTimes:(H=new l_(s,w,x,i),h.push(H),c.set(w,H)),H}function A(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:C}}function f_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function p_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ic(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let y=s[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,_,m,p){const y=o(u,f,g,_,m,p);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function h(u,f,g,_,m,p){const y=o(u,f,g,_,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function c(u,f){t.length>1&&t.sort(u||p_),n.length>1&&n.sort(f||Ic),i.length>1&&i.sort(f||Ic)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:h,finish:d,sort:c}}function m_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Nc,s.set(n,[a])):i>=r.length?(a=new Nc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function g_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function __(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let v_=0;function x_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function y_(s){const e=new g_,t=__(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const i=new I,r=new He,a=new He;function o(h){let c=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,b=0,M=0,A=0,E=0,C=0;h.sort(x_);for(let w=0,H=h.length;w<H;w++){const R=h[w],F=R.color,O=R.intensity,B=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Qi?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=F.r*O,d+=F.g*O,u+=F.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,ne=t.get(R);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=z,f++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(F).multiplyScalar(O),z.distance=B,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const W=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,W.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=W.matrix,R.castShadow){const ne=t.get(R);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=k,M++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(F).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const W=R.shadow,ne=t.get(R);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,ne.shadowCameraNear=W.camera.near,ne.shadowCameraFar=W.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=C,n.version=v_++)}function l(h,c){let d=0,u=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const b=h[p];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Uc(s){const e=new y_(s),t=[],n=[];function i(c){h.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function S_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Uc(s),e.set(i,[o])):r>=a.length?(o=new Uc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`,w_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],T_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Fc=new He,Ss=new I,Pa=new I;function E_(s,e,t){let n=new il;const i=new je,r=new je,a=new vt,o=new pf,l=new mf,h={},c=t.maxTextureSize,d={[Kn]:Yt,[Yt]:Kn,[nn]:nn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:M_,fragmentShader:b_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Ld&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cs);const w=s.getRenderTarget(),H=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Xn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==this.type;O&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(k=>k.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,k=E.length;B<k;B++){const z=E[B],W=z.shadow;if(W===void 0){Pe("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ne=W.getFrameExtents();i.multiply(ne),r.copy(W.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/ne.x),i.x=r.x*ne.x,W.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/ne.y),i.y=r.y*ne.y,W.mapSize.y=r.y));const Q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Es){if(z.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Rn(i.x,i.y,{format:Qi,type:Yn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new zs(i.x,i.y,on),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=jn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct}else z.isPointLight?(W.map=new ld(i.x),W.map.depthTexture=new lf(i.x,Pn)):(W.map=new Rn(i.x,i.y),W.map.depthTexture=new zs(i.x,i.y,Pn)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=jn,this.type===Cs?(W.map.depthTexture.compareFunction=Q?jo:Yo,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct);W.camera.updateProjectionMatrix()}const me=W.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<me;he++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,he),s.clear();else{he===0&&(s.setRenderTarget(W.map),s.clear());const ae=W.getViewport(he);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),F.viewport(a)}if(z.isPointLight){const ae=W.camera,ke=W.matrix,nt=z.distance||ae.far;nt!==ae.far&&(ae.far=nt,ae.updateProjectionMatrix()),Ss.setFromMatrixPosition(z.matrixWorld),ae.position.copy(Ss),Pa.copy(ae.position),Pa.add(w_[he]),ae.up.copy(T_[he]),ae.lookAt(Pa),ae.updateMatrixWorld(),ke.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Fc.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Fc,ae.coordinateSystem,ae.reversedDepth)}else W.updateMatrices(z);n=W.getFrustum(),M(C,x,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===Es&&y(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,H,R)};function y(E,C){const x=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(i.x,i.y,{format:Qi,type:Yn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,x,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,x,f,_,null)}function b(E,C,x,w){let H=null;const R=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)H=R;else if(H=x.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=H.uuid,O=C.uuid;let B=h[F];B===void 0&&(B={},h[F]=B);let k=B[O];k===void 0&&(k=H.clone(),B[O]=k,C.addEventListener("dispose",A)),H=k}if(H.visible=C.visible,H.wireframe=C.wireframe,w===Es?H.side=C.shadowSide!==null?C.shadowSide:C.side:H.side=C.shadowSide!==null?C.shadowSide:d[C.side],H.alphaMap=C.alphaMap,H.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,H.map=C.map,H.clipShadows=C.clipShadows,H.clippingPlanes=C.clippingPlanes,H.clipIntersection=C.clipIntersection,H.displacementMap=C.displacementMap,H.displacementScale=C.displacementScale,H.displacementBias=C.displacementBias,H.wireframeLinewidth=C.wireframeLinewidth,H.linewidth=C.linewidth,x.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const F=s.properties.get(H);F.light=x}return H}function M(E,C,x,w,H){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&H===Es)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const O=e.update(E),B=E.material;if(Array.isArray(B)){const k=O.groups;for(let z=0,W=k.length;z<W;z++){const ne=k[z],Q=B[ne.materialIndex];if(Q&&Q.visible){const me=b(E,Q,w,H);E.onBeforeShadow(s,E,C,x,O,me,ne),s.renderBufferDirect(x,null,O,me,E,ne),E.onAfterShadow(s,E,C,x,O,me,ne)}}}else if(B.visible){const k=b(E,B,w,H);E.onBeforeShadow(s,E,C,x,O,k,null),s.renderBufferDirect(x,null,O,k,E,null),E.onAfterShadow(s,E,C,x,O,k,null)}}const F=E.children;for(let O=0,B=F.length;O<B;O++)M(F[O],C,x,w,H)}function A(E){E.target.removeEventListener("dispose",A);for(const x in h){const w=h[x],H=E.target.uuid;H in w&&(w[H].dispose(),delete w[H])}}}function A_(s,e){function t(){let D=!1;const le=new vt;let se=null;const xe=new vt(0,0,0,0);return{setMask:function(te){se!==te&&!D&&(s.colorMask(te,te,te,te),se=te)},setLocked:function(te){D=te},setClear:function(te,q,be,Oe,pt){pt===!0&&(te*=Oe,q*=Oe,be*=Oe),le.set(te,q,be,Oe),xe.equals(le)===!1&&(s.clearColor(te,q,be,Oe),xe.copy(le))},reset:function(){D=!1,se=null,xe.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,se=null,xe=null,te=null;return{setReversed:function(q){if(le!==q){const be=e.get("EXT_clip_control");q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=q;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return le},setTest:function(q){q?re(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function(q){se!==q&&!D&&(s.depthMask(q),se=q)},setFunc:function(q){if(le&&(q=fu[q]),xe!==q){switch(q){case Ha:s.depthFunc(s.NEVER);break;case Wa:s.depthFunc(s.ALWAYS);break;case Xa:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case $a:s.depthFunc(s.EQUAL);break;case qa:s.depthFunc(s.GEQUAL);break;case Ka:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=q}},setLocked:function(q){D=q},setClear:function(q){te!==q&&(te=q,le&&(q=1-q),s.clearDepth(q))},reset:function(){D=!1,se=null,xe=null,te=null,le=!1}}}function i(){let D=!1,le=null,se=null,xe=null,te=null,q=null,be=null,Oe=null,pt=null;return{setTest:function(st){D||(st?re(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(st){le!==st&&!D&&(s.stencilMask(st),le=st)},setFunc:function(st,Nn,Un){(se!==st||xe!==Nn||te!==Un)&&(s.stencilFunc(st,Nn,Un),se=st,xe=Nn,te=Un)},setOp:function(st,Nn,Un){(q!==st||be!==Nn||Oe!==Un)&&(s.stencilOp(st,Nn,Un),q=st,be=Nn,Oe=Un)},setLocked:function(st){D=st},setClear:function(st){pt!==st&&(s.clearStencil(st),pt=st)},reset:function(){D=!1,le=null,se=null,xe=null,te=null,q=null,be=null,Oe=null,pt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,h=new WeakMap;let c={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,M=null,A=null,E=null,C=new Ue(0,0,0),x=0,w=!1,H=null,R=null,F=null,O=null,B=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),z=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),z=W>=2);let Q=null,me={};const he=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),ke=new vt().fromArray(he),nt=new vt().fromArray(ae);function gt(D,le,se,xe){const te=new Uint8Array(4),q=s.createTexture();s.bindTexture(D,q),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<se;be++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(le+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return q}const j={};j[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(s.DEPTH_TEST),a.setFunc(Zi),We(!1),bt(yl),re(s.CULL_FACE),it(Xn);function re(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function ze(D,le){return d[D]!==le?(s.bindFramebuffer(D,le),d[D]=le,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function De(D,le){let se=f,xe=!1;if(D){se=u.get(le),se===void 0&&(se=[],u.set(le,se));const te=D.textures;if(se.length!==te.length||se[0]!==s.COLOR_ATTACHMENT0){for(let q=0,be=te.length;q<be;q++)se[q]=s.COLOR_ATTACHMENT0+q;se.length=te.length,xe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,xe=!0);xe&&s.drawBuffers(se)}function Fe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Nt={[Si]:s.FUNC_ADD,[Id]:s.FUNC_SUBTRACT,[Nd]:s.FUNC_REVERSE_SUBTRACT};Nt[Ud]=s.MIN,Nt[Fd]=s.MAX;const Je={[Od]:s.ZERO,[kd]:s.ONE,[Bd]:s.SRC_COLOR,[Va]:s.SRC_ALPHA,[Xd]:s.SRC_ALPHA_SATURATE,[Hd]:s.DST_COLOR,[Vd]:s.DST_ALPHA,[zd]:s.ONE_MINUS_SRC_COLOR,[Ga]:s.ONE_MINUS_SRC_ALPHA,[Wd]:s.ONE_MINUS_DST_COLOR,[Gd]:s.ONE_MINUS_DST_ALPHA,[$d]:s.CONSTANT_COLOR,[qd]:s.ONE_MINUS_CONSTANT_COLOR,[Kd]:s.CONSTANT_ALPHA,[Yd]:s.ONE_MINUS_CONSTANT_ALPHA};function it(D,le,se,xe,te,q,be,Oe,pt,st){if(D===Xn){_===!0&&(ce(s.BLEND),_=!1);return}if(_===!1&&(re(s.BLEND),_=!0),D!==Dd){if(D!==m||st!==w){if((p!==Si||M!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,M=Si),st)switch(D){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sl:s.blendFunc(s.ONE,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ne("WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ml:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",D);break}y=null,b=null,A=null,E=null,C.set(0,0,0),x=0,m=D,w=st}return}te=te||le,q=q||se,be=be||xe,(le!==p||te!==M)&&(s.blendEquationSeparate(Nt[le],Nt[te]),p=le,M=te),(se!==y||xe!==b||q!==A||be!==E)&&(s.blendFuncSeparate(Je[se],Je[xe],Je[q],Je[be]),y=se,b=xe,A=q,E=be),(Oe.equals(C)===!1||pt!==x)&&(s.blendColor(Oe.r,Oe.g,Oe.b,pt),C.copy(Oe),x=pt),m=D,w=!1}function dt(D,le){D.side===nn?ce(s.CULL_FACE):re(s.CULL_FACE);let se=D.side===Yt;le&&(se=!se),We(se),D.blending===Ki&&D.transparent===!1?it(Xn):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const xe=D.stencilWrite;o.setTest(xe),xe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){H!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),H=D)}function bt(D){D!==Cd?(re(s.CULL_FACE),D!==R&&(D===yl?s.cullFace(s.BACK):D===Pd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),R=D}function L(D){D!==F&&(z&&s.lineWidth(D),F=D)}function At(D,le,se){D?(re(s.POLYGON_OFFSET_FILL),(O!==le||B!==se)&&(O=le,B=se,a.getReversed()&&(le=-le),s.polygonOffset(le,se))):ce(s.POLYGON_OFFSET_FILL)}function tt(D){D?re(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function ft(D){D===void 0&&(D=s.TEXTURE0+k-1),Q!==D&&(s.activeTexture(D),Q=D)}function Ee(D,le,se){se===void 0&&(Q===null?se=s.TEXTURE0+k-1:se=Q);let xe=me[se];xe===void 0&&(xe={type:void 0,texture:void 0},me[se]=xe),(xe.type!==D||xe.texture!==le)&&(Q!==se&&(s.activeTexture(se),Q=se),s.bindTexture(D,le||j[D]),xe.type=D,xe.texture=le)}function T(){const D=me[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Y(){try{s.texSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function oe(){try{s.texStorage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Le(){try{s.texStorage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Ie(){try{s.texImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function ee(){try{s.texImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function ie(D){ke.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ke.copy(D))}function Me(D){nt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),nt.copy(D))}function we(D,le){let se=h.get(le);se===void 0&&(se=new WeakMap,h.set(le,se));let xe=se.get(D);xe===void 0&&(xe=s.getUniformBlockIndex(le,D.name),se.set(D,xe))}function ge(D,le){const xe=h.get(le).get(D);l.get(le)!==xe&&(s.uniformBlockBinding(le,xe,D.__bindingPointIndex),l.set(le,xe))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Q=null,me={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,M=null,A=null,E=null,C=new Ue(0,0,0),x=0,w=!1,H=null,R=null,F=null,O=null,B=null,ke.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:ce,bindFramebuffer:ze,drawBuffers:De,useProgram:Fe,setBlending:it,setMaterial:dt,setFlipSided:We,setCullFace:bt,setLineWidth:L,setPolygonOffset:At,setScissorTest:tt,activeTexture:ft,bindTexture:Ee,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Ie,texImage3D:ee,updateUBOMapping:we,uniformBlockBinding:ge,texStorage2D:oe,texStorage3D:Le,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:Se,scissor:ie,viewport:Me,reset:Xe}}function R_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new je,c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Bs("canvas")}function _(T,v,N){let Y=1;const Z=Ee(T);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*Z.width),Se=Math.floor(Y*Z.height);d===void 0&&(d=g(K,Se));const oe=v?g(K,Se):d;return oe.width=K,oe.height=Se,oe.getContext("2d").drawImage(T,0,0,K,Se),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+Se+")."),oe}else return"data"in T&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,v,N,Y,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=v;if(v===s.RED&&(N===s.FLOAT&&(K=s.R32F),N===s.HALF_FLOAT&&(K=s.R16F),N===s.UNSIGNED_BYTE&&(K=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.R8UI),N===s.UNSIGNED_SHORT&&(K=s.R16UI),N===s.UNSIGNED_INT&&(K=s.R32UI),N===s.BYTE&&(K=s.R8I),N===s.SHORT&&(K=s.R16I),N===s.INT&&(K=s.R32I)),v===s.RG&&(N===s.FLOAT&&(K=s.RG32F),N===s.HALF_FLOAT&&(K=s.RG16F),N===s.UNSIGNED_BYTE&&(K=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RG8UI),N===s.UNSIGNED_SHORT&&(K=s.RG16UI),N===s.UNSIGNED_INT&&(K=s.RG32UI),N===s.BYTE&&(K=s.RG8I),N===s.SHORT&&(K=s.RG16I),N===s.INT&&(K=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGB8UI),N===s.UNSIGNED_SHORT&&(K=s.RGB16UI),N===s.UNSIGNED_INT&&(K=s.RGB32UI),N===s.BYTE&&(K=s.RGB8I),N===s.SHORT&&(K=s.RGB16I),N===s.INT&&(K=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),N===s.UNSIGNED_INT&&(K=s.RGBA32UI),N===s.BYTE&&(K=s.RGBA8I),N===s.SHORT&&(K=s.RGBA16I),N===s.INT&&(K=s.RGBA32I)),v===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),v===s.RGBA){const Se=Z?Pr:Ze.getTransfer(Y);N===s.FLOAT&&(K=s.RGBA32F),N===s.HALF_FLOAT&&(K=s.RGBA16F),N===s.UNSIGNED_BYTE&&(K=Se===at?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(T,v){let N;return T?v===null||v===Pn||v===Us?N=s.DEPTH24_STENCIL8:v===on?N=s.DEPTH32F_STENCIL8:v===Ns&&(N=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pn||v===Us?N=s.DEPTH_COMPONENT24:v===on?N=s.DEPTH_COMPONENT32F:v===Ns&&(N=s.DEPTH_COMPONENT16),N}function A(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){const v=T.target;v.removeEventListener("dispose",E),x(v),v.isVideoTexture&&c.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),H(v)}function x(T){const v=n.get(T);if(v.__webglInit===void 0)return;const N=T.source,Y=u.get(N);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(Y).length===0&&u.delete(N)}n.remove(T)}function w(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const N=T.source,Y=u.get(N);delete Y[v.__cacheKey],a.memory.textures--}function H(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const K=n.get(N[Y]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(T)}let R=0;function F(){R=0}function O(){const T=R;return T>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function k(T,v){const N=n.get(T);if(T.isVideoTexture&&tt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const Y=T.image;if(Y===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,T,v);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function z(T,v){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){j(N,T,v);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function W(T,v){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){j(N,T,v);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function ne(T,v){const N=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){re(N,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const Q={[wn]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[Cr]:s.MIRRORED_REPEAT},me={[Ct]:s.NEAREST,[Nh]:s.NEAREST_MIPMAP_NEAREST,[As]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[Mr]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},he={[iu]:s.NEVER,[lu]:s.ALWAYS,[su]:s.LESS,[Yo]:s.LEQUAL,[ru]:s.EQUAL,[jo]:s.GEQUAL,[au]:s.GREATER,[ou]:s.NOTEQUAL};function ae(T,v){if(v.type===on&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===Mr||v.magFilter===As||v.magFilter===Hn||v.minFilter===Pt||v.minFilter===Mr||v.minFilter===As||v.minFilter===Hn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Q[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Q[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Q[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,me[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==As&&v.minFilter!==Hn||v.type===on&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",E));const Y=v.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const K=B(v);if(K!==T.__cacheKey){Z[K]===void 0&&(Z[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[K].usedTimes++;const Se=Z[T.__cacheKey];Se!==void 0&&(Z[T.__cacheKey].usedTimes--,Se.usedTimes===0&&w(v)),T.__cacheKey=K,T.__webglTexture=Z[K].texture}return N}function nt(T,v,N){return Math.floor(Math.floor(T/N)/v)}function gt(T,v,N,Y){const K=T.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,N,Y,v.data);else{K.sort((ee,ie)=>ee.start-ie.start);let Se=0;for(let ee=1;ee<K.length;ee++){const ie=K[Se],Me=K[ee],we=ie.start+ie.count,ge=nt(Me.start,v.width,4),Xe=nt(ie.start,v.width,4);Me.start<=we+1&&ge===Xe&&nt(Me.start+Me.count-1,v.width,4)===ge?ie.count=Math.max(ie.count,Me.start+Me.count-ie.start):(++Se,K[Se]=Me)}K.length=Se+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Le=s.getParameter(s.UNPACK_SKIP_PIXELS),Ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ie=K.length;ee<ie;ee++){const Me=K[ee],we=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),Xe=we%v.width,D=Math.floor(we/v.width),le=ge,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Xe,D,le,se,N,Y,v.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function j(T,v,N){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=ke(T,v),K=v.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+N);const Se=n.get(K);if(K.version!==Se.__version||Z===!0){t.activeTexture(s.TEXTURE0+N);const oe=Ze.getPrimaries(Ze.workingColorSpace),Le=v.colorSpace===li?null:Ze.getPrimaries(v.colorSpace),Ie=v.colorSpace===li||oe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ee=_(v.image,!1,i.maxTextureSize);ee=ft(v,ee);const ie=r.convert(v.format,v.colorSpace),Me=r.convert(v.type);let we=b(v.internalFormat,ie,Me,v.colorSpace,v.isVideoTexture);ae(Y,v);let ge;const Xe=v.mipmaps,D=v.isVideoTexture!==!0,le=Se.__version===void 0||Z===!0,se=K.dataReady,xe=A(v,ee);if(v.isDepthTexture)we=M(v.format===wi,v.type),le&&(D?t.texStorage2D(s.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,ie,Me,null));else if(v.isDataTexture)if(Xe.length>0){D&&le&&t.texStorage2D(s.TEXTURE_2D,xe,we,Xe[0].width,Xe[0].height);for(let te=0,q=Xe.length;te<q;te++)ge=Xe[te],D?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,ie,Me,ge.data):t.texImage2D(s.TEXTURE_2D,te,we,ge.width,ge.height,0,ie,Me,ge.data);v.generateMipmaps=!1}else D?(le&&t.texStorage2D(s.TEXTURE_2D,xe,we,ee.width,ee.height),se&&gt(v,ee,ie,Me)):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,ie,Me,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,we,Xe[0].width,Xe[0].height,ee.depth);for(let te=0,q=Xe.length;te<q;te++)if(ge=Xe[te],v.format!==ln)if(ie!==null)if(D){if(se)if(v.layerUpdates.size>0){const be=fc(ge.width,ge.height,v.format,v.type);for(const Oe of v.layerUpdates){const pt=ge.data.subarray(Oe*be/ge.data.BYTES_PER_ELEMENT,(Oe+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Oe,ge.width,ge.height,1,ie,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ee.depth,ie,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,we,ge.width,ge.height,ee.depth,0,ge.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ee.depth,ie,Me,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,we,ge.width,ge.height,ee.depth,0,ie,Me,ge.data)}else{D&&le&&t.texStorage2D(s.TEXTURE_2D,xe,we,Xe[0].width,Xe[0].height);for(let te=0,q=Xe.length;te<q;te++)ge=Xe[te],v.format!==ln?ie!==null?D?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,ie,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,te,we,ge.width,ge.height,0,ge.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,ie,Me,ge.data):t.texImage2D(s.TEXTURE_2D,te,we,ge.width,ge.height,0,ie,Me,ge.data)}else if(v.isDataArrayTexture)if(D){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,we,ee.width,ee.height,ee.depth),se)if(v.layerUpdates.size>0){const te=fc(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const be=ee.data.subarray(q*te/ee.data.BYTES_PER_ELEMENT,(q+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ie,Me,be)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,Me,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,ie,Me,ee.data);else if(v.isData3DTexture)D?(le&&t.texStorage3D(s.TEXTURE_3D,xe,we,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,Me,ee.data)):t.texImage3D(s.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,ie,Me,ee.data);else if(v.isFramebufferTexture){if(le)if(D)t.texStorage2D(s.TEXTURE_2D,xe,we,ee.width,ee.height);else{let te=ee.width,q=ee.height;for(let be=0;be<xe;be++)t.texImage2D(s.TEXTURE_2D,be,we,te,q,0,ie,Me,null),te>>=1,q>>=1}}else if(Xe.length>0){if(D&&le){const te=Ee(Xe[0]);t.texStorage2D(s.TEXTURE_2D,xe,we,te.width,te.height)}for(let te=0,q=Xe.length;te<q;te++)ge=Xe[te],D?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,Me,ge):t.texImage2D(s.TEXTURE_2D,te,we,ie,Me,ge);v.generateMipmaps=!1}else if(D){if(le){const te=Ee(ee);t.texStorage2D(s.TEXTURE_2D,xe,we,te.width,te.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,Me,ee)}else t.texImage2D(s.TEXTURE_2D,0,we,ie,Me,ee);m(v)&&p(Y),Se.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function re(T,v,N){if(v.image.length!==6)return;const Y=ke(T,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);const K=n.get(Z);if(Z.version!==K.__version||Y===!0){t.activeTexture(s.TEXTURE0+N);const Se=Ze.getPrimaries(Ze.workingColorSpace),oe=v.colorSpace===li?null:Ze.getPrimaries(v.colorSpace),Le=v.colorSpace===li||Se===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!Ie&&!ee?ie[q]=_(v.image[q],!0,i.maxCubemapSize):ie[q]=ee?v.image[q].image:v.image[q],ie[q]=ft(v,ie[q]);const Me=ie[0],we=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),Xe=b(v.internalFormat,we,ge,v.colorSpace),D=v.isVideoTexture!==!0,le=K.__version===void 0||Y===!0,se=Z.dataReady;let xe=A(v,Me);ae(s.TEXTURE_CUBE_MAP,v);let te;if(Ie){D&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Xe,Me.width,Me.height);for(let q=0;q<6;q++){te=ie[q].mipmaps;for(let be=0;be<te.length;be++){const Oe=te[be];v.format!==ln?we!==null?D?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,0,0,Oe.width,Oe.height,we,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,Xe,Oe.width,Oe.height,0,Oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,0,0,Oe.width,Oe.height,we,ge,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,Xe,Oe.width,Oe.height,0,we,ge,Oe.data)}}}else{if(te=v.mipmaps,D&&le){te.length>0&&xe++;const q=Ee(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Xe,q.width,q.height)}for(let q=0;q<6;q++)if(ee){D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,we,ge,ie[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,ie[q].width,ie[q].height,0,we,ge,ie[q].data);for(let be=0;be<te.length;be++){const pt=te[be].image[q].image;D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,0,0,pt.width,pt.height,we,ge,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,Xe,pt.width,pt.height,0,we,ge,pt.data)}}else{D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,we,ge,ie[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,we,ge,ie[q]);for(let be=0;be<te.length;be++){const Oe=te[be];D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,0,0,we,ge,Oe.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,Xe,we,ge,Oe.image[q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),K.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ce(T,v,N,Y,Z,K){const Se=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),Le=b(N.internalFormat,Se,oe,N.colorSpace),Ie=n.get(v),ee=n.get(N);if(ee.__renderTarget=v,!Ie.__hasExternalTextures){const ie=Math.max(1,v.width>>K),Me=Math.max(1,v.height>>K);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,Le,ie,Me,v.depth,0,Se,oe,null):t.texImage2D(Z,K,Le,ie,Me,0,Se,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,L(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,ee.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(T,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,K=M(v.stencilBuffer,Z),Se=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;At(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(v),K,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(v),K,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,K,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const K=Y[Z],Se=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),Le=b(K.internalFormat,Se,oe,K.colorSpace);At(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(v),Le,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(v),Le,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Le,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(T,v,N){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(s.TEXTURE_CUBE_MAP,v.depthTexture);const Ie=r.convert(v.depthTexture.format),ee=r.convert(v.depthTexture.type);let ie;v.depthTexture.format===jn?ie=s.DEPTH_COMPONENT24:v.depthTexture.format===wi&&(ie=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,v.width,v.height,0,Ie,ee,null)}}else k(v.depthTexture,0);const K=Z.__webglTexture,Se=L(v),oe=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Le=v.depthTexture.format===wi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,oe,K,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Le,oe,K,0);else if(v.depthTexture.format===wi)At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,oe,K,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Le,oe,K,0);else throw new Error("Unknown depthTexture format")}function Fe(T){const v=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)De(v.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?De(v.__webglFramebuffer[0],T,0):De(v.__webglFramebuffer,T,0)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),ze(v.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ze(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(T,v,N){const Y=n.get(T);v!==void 0&&ce(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Fe(T)}function Je(T){const v=T.texture,N=n.get(T),Y=n.get(v);T.addEventListener("dispose",C);const Z=T.textures,K=T.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let Le=0;Le<v.mipmaps.length;Le++)N.__webglFramebuffer[oe][Le]=s.createFramebuffer()}else N.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)N.__webglFramebuffer[oe]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Se)for(let oe=0,Le=Z.length;oe<Le;oe++){const Ie=n.get(Z[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&At(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const Le=Z[oe];N.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Ie=r.convert(Le.format,Le.colorSpace),ee=r.convert(Le.type),ie=b(Le.internalFormat,Ie,ee,Le.colorSpace,T.isXRRenderTarget===!0),Me=L(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,ie,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ae(s.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)ce(N.__webglFramebuffer[oe][Le],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le);else ce(N.__webglFramebuffer[oe],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,Le=Z.length;oe<Le;oe++){const Ie=Z[oe],ee=n.get(Ie);let ie=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),ae(ie,Ie),ce(N.__webglFramebuffer,T,Ie,s.COLOR_ATTACHMENT0+oe,ie,0),m(Ie)&&p(ie)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),ae(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)ce(N.__webglFramebuffer[Le],T,v,s.COLOR_ATTACHMENT0,oe,Le);else ce(N.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,oe,0);m(v)&&p(oe),t.unbindTexture()}T.depthBuffer&&Fe(T)}function it(T){const v=T.textures;for(let N=0,Y=v.length;N<Y;N++){const Z=v[N];if(m(Z)){const K=y(T),Se=n.get(Z).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const dt=[],We=[];function bt(T){if(T.samples>0){if(At(T)===!1){const v=T.textures,N=T.width,Y=T.height;let Z=s.COLOR_BUFFER_BIT;const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),oe=v.length>1;if(oe)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Le=T.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ie]);const ee=n.get(v[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,s.NEAREST),l===!0&&(dt.length=0,We.length=0,dt.push(s.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(K),We.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ie]);const ee=n.get(v[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function L(T){return Math.min(i.maxSamples,T.samples)}function At(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function tt(T){const v=a.render.frame;c.get(T)!==v&&(c.set(T,v),T.update())}function ft(T,v){const N=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Zt&&N!==li&&(Ze.getTransfer(N)===at?(Y!==ln||Z!==sn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",N)),v}function Ee(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=Nt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function C_(s,e){function t(n,i=li){let r;const a=Ze.getTransfer(i);if(n===sn)return s.UNSIGNED_BYTE;if(n===Ho)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return s.BYTE;if(n===Fh)return s.SHORT;if(n===Ns)return s.UNSIGNED_SHORT;if(n===Go)return s.INT;if(n===Pn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Yn)return s.HALF_FLOAT;if(n===Bh)return s.ALPHA;if(n===zh)return s.RGB;if(n===ln)return s.RGBA;if(n===jn)return s.DEPTH_COMPONENT;if(n===wi)return s.DEPTH_STENCIL;if(n===Xo)return s.RED;if(n===$o)return s.RED_INTEGER;if(n===Qi)return s.RG;if(n===qo)return s.RG_INTEGER;if(n===Ko)return s.RGBA_INTEGER;if(n===br||n===wr||n===Tr||n===Er)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Za||n===Ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===to)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===io)return r.COMPRESSED_R11_EAC;if(n===so)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ro)return r.COMPRESSED_RG11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===So)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===bo||n===wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Eo||n===Ao||n===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`;class D_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $(new mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends as{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new D_,p={},y=t.getContextAttributes();let b=null,M=null;const A=[],E=[],C=new je;let x=null;const w=new Kt;w.viewport=new vt;const H=new Kt;H.viewport=new vt;const R=[w,H],F=new Ff;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=A[j];return re===void 0&&(re=new ia,A[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=A[j];return re===void 0&&(re=new ia,A[j]=re),re.getGripSpace()},this.getHand=function(j){let re=A[j];return re===void 0&&(re=new ia,A[j]=re),re.getHandSpace()};function k(j){const re=E.indexOf(j.inputSource);if(re===-1)return;const ce=A[re];ce!==void 0&&(ce.update(j.inputSource,j.frame,h||a),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",W);for(let j=0;j<A.length;j++){const re=E[j];re!==null&&(E[j]=null,A[j].disconnect(re))}O=null,B=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(b),f=null,u=null,d=null,i=null,M=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ze=null,De=null;y.depth&&(De=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?wi:jn,ze=y.stencil?Us:Pn);const Fe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Rn(u.textureWidth,u.textureHeight,{format:ln,type:sn,depthTexture:new zs(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Rn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(j){for(let re=0;re<j.removed.length;re++){const ce=j.removed[re],ze=E.indexOf(ce);ze>=0&&(E[ze]=null,A[ze].disconnect(ce))}for(let re=0;re<j.added.length;re++){const ce=j.added[re];let ze=E.indexOf(ce);if(ze===-1){for(let Fe=0;Fe<A.length;Fe++)if(Fe>=E.length){E.push(ce),ze=Fe;break}else if(E[Fe]===null){E[Fe]=ce,ze=Fe;break}if(ze===-1)break}const De=A[ze];De&&De.connect(ce)}}const ne=new I,Q=new I;function me(j,re,ce){ne.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const ze=ne.distanceTo(Q),De=re.projectionMatrix.elements,Fe=ce.projectionMatrix.elements,Nt=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),it=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],We=(De[8]-1)/De[0],bt=(Fe[8]+1)/Fe[0],L=Nt*We,At=Nt*bt,tt=ze/(-We+bt),ft=tt*-We;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ft),j.translateZ(tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ee=Nt+tt,T=Je+tt,v=L-ft,N=At+(ze-ft),Y=it*Je/T*Ee,Z=dt*Je/T*Ee;j.projectionMatrix.makePerspective(v,N,Y,Z,Ee,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let re=j.near,ce=j.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),F.near=H.near=w.near=re,F.far=H.far=w.far=ce,(O!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,B=F.far),F.layers.mask=j.layers.mask|6,w.layers.mask=F.layers.mask&-5,H.layers.mask=F.layers.mask&-3;const ze=j.parent,De=F.cameras;he(F,ze);for(let Fe=0;Fe<De.length;Fe++)he(De[Fe],ze);De.length===2?me(F,w,H):F.projectionMatrix.copy(w.projectionMatrix),ae(j,F,ze)};function ae(j,re,ce){ce===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=es*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let ke=null;function nt(j,re){if(c=re.getViewerPose(h||a),g=re,c!==null){const ce=c.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ze=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Je=0;Je<ce.length;Je++){const it=ce[Je];let dt=null;if(f!==null)dt=f.getViewport(it);else{const bt=d.getViewSubImage(u,it);dt=bt.viewport,Je===0&&(e.setRenderTargetTextures(M,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(M))}let We=R[Je];We===void 0&&(We=new Kt,We.layers.enable(Je),We.viewport=new vt,R[Je]=We),We.matrix.fromArray(it.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(it.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(dt.x,dt.y,dt.width,dt.height),Je===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(We)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Je=d.getDepthInformation(ce[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,i.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Je=0;Je<ce.length;Je++){const it=ce[Je].camera;if(it){let dt=p[it];dt||(dt=new Qh,p[it]=dt);const We=d.getCameraImage(it);dt.sourceTexture=We}}}}for(let ce=0;ce<A.length;ce++){const ze=E[ce],De=A[ce];ze!==null&&De!==void 0&&De.update(ze,re,h||a)}ke&&ke(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const gt=new od;gt.setAnimationLoop(nt),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const _i=new gn,N_=new He;function U_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ed(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(_i)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function F_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const M=b.program;n.uniformBlockBinding(y,M)}function h(y,b){let M=i[y.id];M===void 0&&(g(y),M=c(y),i[y.id]=M,y.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(y,A);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function c(y){const b=d();y.__bindingPointIndex=b;const M=s.createBuffer(),A=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=i[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,C=M.length;E<C;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let w=0,H=x.length;w<H;w++){const R=x[w];if(f(R,E,w,A)===!0){const F=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let k=0;k<O.length;k++){const z=O[k],W=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+B,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,B),B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,M,A){const E=y.value,C=b+"_"+M;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{const x=A[C];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[C]=E,!0}else if(x.equals(E)===!1)return x.copy(E),!0}return!1}function g(y){const b=y.uniforms;let M=0;const A=16;for(let C=0,x=b.length;C<x;C++){const w=Array.isArray(b[C])?b[C]:[b[C]];for(let H=0,R=w.length;H<R;H++){const F=w[H],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,k=O.length;B<k;B++){const z=O[B],W=_(z),ne=M%A,Q=ne%W.boundary,me=ne+Q;M+=Q,me!==0&&A-me<W.storage&&(M+=A-me),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=W.storage}}}const E=M%A;return E>0&&(M+=A-E),y.__size=M,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:h,dispose:p}}const O_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function k_(){return yn===null&&(yn=new tl(O_,16,16,Qi,Yn),yn.name="DFG_LUT",yn.minFilter=Pt,yn.magFilter=Pt,yn.wrapS=Tn,yn.wrapT=Tn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class B_{constructor(e={}){const{canvas:t=du(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Ko,qo,$o]),p=new Set([sn,Pn,Ns,Us,Ho,Wo]),y=new Uint32Array(4),b=new Int32Array(4);let M=null,A=null;const E=[],C=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=Bt;let R=0,F=0,O=null,B=-1,k=null;const z=new vt,W=new vt;let ne=null;const Q=new Ue(0);let me=0,he=t.width,ae=t.height,ke=1,nt=null,gt=null;const j=new vt(0,0,he,ae),re=new vt(0,0,he,ae);let ce=!1;const ze=new il;let De=!1,Fe=!1;const Nt=new He,Je=new I,it=new vt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function bt(){return O===null?ke:1}let L=n;function At(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",pt,!1),L===null){const U="webgl2";if(L=At(U,S),L===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Ne("WebGLRenderer: "+S.message),S}let tt,ft,Ee,T,v,N,Y,Z,K,Se,oe,Le,Ie,ee,ie,Me,we,ge,Xe,D,le,se,xe;function te(){tt=new Bg(L),tt.init(),le=new C_(L,tt),ft=new Lg(L,tt,e,le),Ee=new A_(L,tt),ft.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),T=new Gg(L),v=new f_,N=new R_(L,tt,Ee,v,ft,le,T),Y=new kg(w),Z=new qf(L),se=new Cg(L,Z),K=new zg(L,Z,T,se),Se=new Wg(L,K,Z,se,T),ge=new Hg(L,ft,N),ie=new Dg(v),oe=new u_(w,Y,tt,ft,se,ie),Le=new U_(w,v),Ie=new m_,ee=new S_(tt),we=new Rg(w,Y,Ee,Se,g,l),Me=new E_(w,Se,ft),xe=new F_(L,T,ft,Ee),Xe=new Pg(L,tt,T),D=new Vg(L,tt,T),T.programs=oe.programs,w.capabilities=ft,w.extensions=tt,w.properties=v,w.renderLists=Ie,w.shadowMap=Me,w.state=Ee,w.info=T}te(),_!==sn&&(x=new $g(_,t.width,t.height,i,r));const q=new I_(w,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(S){S!==void 0&&(ke=S,this.setSize(he,ae,!1))},this.getSize=function(S){return S.set(he,ae)},this.setSize=function(S,U,X=!0){if(q.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}he=S,ae=U,t.width=Math.floor(S*ke),t.height=Math.floor(U*ke),X===!0&&(t.style.width=S+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(he*ke,ae*ke).floor()},this.setDrawingBufferSize=function(S,U,X){he=S,ae=U,ke=X,t.width=Math.floor(S*X),t.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(z)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,U,X,G){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,U,X,G),Ee.viewport(z.copy(j).multiplyScalar(ke).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,U,X,G){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,U,X,G),Ee.scissor(W.copy(re).multiplyScalar(ke).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){Ee.setScissorTest(ce=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,X=!0){let G=0;if(S){let V=!1;if(O!==null){const fe=O.texture.format;V=m.has(fe)}if(V){const fe=O.texture.type,_e=p.has(fe),pe=we.getClearColor(),Te=we.getClearAlpha(),Re=pe.r,Be=pe.g,$e=pe.b;_e?(y[0]=Re,y[1]=Be,y[2]=$e,y[3]=Te,L.clearBufferuiv(L.COLOR,0,y)):(b[0]=Re,b[1]=Be,b[2]=$e,b[3]=Te,L.clearBufferiv(L.COLOR,0,b))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),X&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),we.dispose(),Ie.dispose(),ee.dispose(),v.dispose(),Y.dispose(),Se.dispose(),se.dispose(),xe.dispose(),oe.dispose(),q.dispose(),q.removeEventListener("sessionstart",ul),q.removeEventListener("sessionend",fl),hi.stop()};function be(S){S.preventDefault(),Lr("WebGLRenderer: Context Lost."),H=!0}function Oe(){Lr("WebGLRenderer: Context Restored."),H=!1;const S=T.autoReset,U=Me.enabled,X=Me.autoUpdate,G=Me.needsUpdate,V=Me.type;te(),T.autoReset=S,Me.enabled=U,Me.autoUpdate=X,Me.needsUpdate=G,Me.type=V}function pt(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function st(S){const U=S.target;U.removeEventListener("dispose",st),Nn(U)}function Nn(S){Un(S),v.remove(S)}function Un(S){const U=v.get(S).programs;U!==void 0&&(U.forEach(function(X){oe.releaseProgram(X)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,G,V,fe){U===null&&(U=dt);const _e=V.isMesh&&V.matrixWorld.determinant()<0,pe=bd(S,U,X,G,V);Ee.setMaterial(G,_e);let Te=X.index,Re=1;if(G.wireframe===!0){if(Te=K.getWireframeAttribute(X),Te===void 0)return;Re=2}const Be=X.drawRange,$e=X.attributes.position;let Ce=Be.start*Re,ct=(Be.start+Be.count)*Re;fe!==null&&(Ce=Math.max(Ce,fe.start*Re),ct=Math.min(ct,(fe.start+fe.count)*Re)),Te!==null?(Ce=Math.max(Ce,0),ct=Math.min(ct,Te.count)):$e!=null&&(Ce=Math.max(Ce,0),ct=Math.min(ct,$e.count));const wt=ct-Ce;if(wt<0||wt===1/0)return;se.setup(V,G,pe,X,Te);let St,ht=Xe;if(Te!==null&&(St=Z.get(Te),ht=D,ht.setIndex(St)),V.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*bt()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(V.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),Ee.setLineWidth(zt*bt()),V.isLineSegments?ht.setMode(L.LINES):V.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else V.isPoints?ht.setMode(L.POINTS):V.isSprite&&ht.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const zt=V._multiDrawStarts,Ae=V._multiDrawCounts,Qt=V._multiDrawCount,et=Te?Z.get(Te).bytesPerElement:1,cn=v.get(G).currentProgram.getUniforms();for(let vn=0;vn<Qt;vn++)cn.setValue(L,"_gl_DrawID",vn),ht.render(zt[vn]/et,Ae[vn])}else if(V.isInstancedMesh)ht.renderInstances(Ce,wt,V.count);else if(X.isInstancedBufferGeometry){const zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,zt);ht.renderInstances(Ce,wt,Ae)}else ht.render(Ce,wt)};function dl(S,U,X){S.transparent===!0&&S.side===nn&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,Ws(S,U,X),S.side=Kn,S.needsUpdate=!0,Ws(S,U,X),S.side=nn):Ws(S,U,X)}this.compile=function(S,U,X=null){X===null&&(X=S),A=ee.get(X),A.init(U),C.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const G=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const pe=fe[_e];dl(pe,X,V),G.add(pe)}else dl(fe,X,V),G.add(fe)}),A=C.pop(),G},this.compileAsync=function(S,U,X=null){const G=this.compile(S,U,X);return new Promise(V=>{function fe(){if(G.forEach(function(_e){v.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){V(S);return}setTimeout(fe,10)}tt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let qr=null;function Md(S){qr&&qr(S)}function ul(){hi.stop()}function fl(){hi.start()}const hi=new od;hi.setAnimationLoop(Md),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){qr=S,q.setAnimationLoop(S),S===null?hi.stop():hi.start()},q.addEventListener("sessionstart",ul),q.addEventListener("sessionend",fl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,G=x!==null&&(O===null||X)&&x.begin(w,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,U,O),A=ee.get(S,C.length),A.init(U),C.push(A),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(Nt,En,U.reversedDepth),Fe=this.localClippingEnabled,De=ie.init(this.clippingPlanes,Fe),M=Ie.get(S,E.length),M.init(),E.push(M),q.enabled===!0&&q.isPresenting===!0){const _e=w.xr.getDepthSensingMesh();_e!==null&&Kr(_e,U,-1/0,w.sortObjects)}Kr(S,U,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(nt,gt),We=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,We&&we.addToRenderList(M,S),this.info.render.frame++,De===!0&&ie.beginShadows();const V=A.state.shadowsArray;if(Me.render(V,S,U),De===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&x.hasRenderPass())===!1){const _e=M.opaque,pe=M.transmissive;if(A.setupLights(),U.isArrayCamera){const Te=U.cameras;if(pe.length>0)for(let Re=0,Be=Te.length;Re<Be;Re++){const $e=Te[Re];ml(_e,pe,S,$e)}We&&we.render(S);for(let Re=0,Be=Te.length;Re<Be;Re++){const $e=Te[Re];pl(M,S,$e,$e.viewport)}}else pe.length>0&&ml(_e,pe,S,U),We&&we.render(S),pl(M,S,U)}O!==null&&F===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),G&&x.end(w),S.isScene===!0&&S.onAfterRender(w,S,U),se.resetDefaultState(),B=-1,k=null,C.pop(),C.length>0?(A=C[C.length-1],De===!0&&ie.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function Kr(S,U,X,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ze.intersectsSprite(S)){G&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Nt);const _e=Se.update(S),pe=S.material;pe.visible&&M.push(S,_e,pe,X,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ze.intersectsObject(S))){const _e=Se.update(S),pe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),it.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),it.copy(_e.boundingSphere.center)),it.applyMatrix4(S.matrixWorld).applyMatrix4(Nt)),Array.isArray(pe)){const Te=_e.groups;for(let Re=0,Be=Te.length;Re<Be;Re++){const $e=Te[Re],Ce=pe[$e.materialIndex];Ce&&Ce.visible&&M.push(S,_e,Ce,X,it.z,$e)}}else pe.visible&&M.push(S,_e,pe,X,it.z,null)}}const fe=S.children;for(let _e=0,pe=fe.length;_e<pe;_e++)Kr(fe[_e],U,X,G)}function pl(S,U,X,G){const{opaque:V,transmissive:fe,transparent:_e}=S;A.setupLightsView(X),De===!0&&ie.setGlobalState(w.clippingPlanes,X),G&&Ee.viewport(z.copy(G)),V.length>0&&Hs(V,U,X),fe.length>0&&Hs(fe,U,X),_e.length>0&&Hs(_e,U,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ml(S,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const Ce=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Rn(1,1,{generateMipmaps:!0,type:Ce?Yn:sn,minFilter:Hn,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const fe=A.state.transmissionRenderTarget[G.id],_e=G.viewport||z;fe.setSize(_e.z*w.transmissionResolutionScale,_e.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),Te=w.getActiveCubeFace(),Re=w.getActiveMipmapLevel();w.setRenderTarget(fe),w.getClearColor(Q),me=w.getClearAlpha(),me<1&&w.setClearColor(16777215,.5),w.clear(),We&&we.render(X);const Be=w.toneMapping;w.toneMapping=An;const $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),De===!0&&ie.setGlobalState(w.clippingPlanes,G),Hs(S,X,G),N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ct=0,wt=U.length;ct<wt;ct++){const St=U[ct],{object:ht,geometry:zt,material:Ae,group:Qt}=St;if(Ae.side===nn&&ht.layers.test(G.layers)){const et=Ae.side;Ae.side=Yt,Ae.needsUpdate=!0,gl(ht,X,G,zt,Ae,Qt),Ae.side=et,Ae.needsUpdate=!0,Ce=!0}}Ce===!0&&(N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe))}w.setRenderTarget(pe,Te,Re),w.setClearColor(Q,me),$e!==void 0&&(G.viewport=$e),w.toneMapping=Be}function Hs(S,U,X){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,fe=S.length;V<fe;V++){const _e=S[V],{object:pe,geometry:Te,group:Re}=_e;let Be=_e.material;Be.allowOverride===!0&&G!==null&&(Be=G),pe.layers.test(X.layers)&&gl(pe,U,X,Te,Be,Re)}}function gl(S,U,X,G,V,fe){S.onBeforeRender(w,U,X,G,V,fe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(w,U,X,G,S,fe),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,w.renderBufferDirect(X,U,G,V,S,fe),V.side=Kn,V.needsUpdate=!0,w.renderBufferDirect(X,U,G,V,S,fe),V.side=nn):w.renderBufferDirect(X,U,G,V,S,fe),S.onAfterRender(w,U,X,G,V,fe)}function Ws(S,U,X){U.isScene!==!0&&(U=dt);const G=v.get(S),V=A.state.lights,fe=A.state.shadowsArray,_e=V.state.version,pe=oe.getParameters(S,V.state,fe,U,X),Te=oe.getProgramCacheKey(pe);let Re=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Be=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=Y.get(S.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",st),Re=new Map,G.programs=Re);let $e=Re.get(Te);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===_e)return vl(S,pe),$e}else pe.uniforms=oe.getUniforms(S),S.onBeforeCompile(pe,w),$e=oe.acquireProgram(pe,Te),Re.set(Te,$e),G.uniforms=pe.uniforms;const Ce=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),vl(S,pe),G.needsLights=Td(S),G.lightsStateVersion=_e,G.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=$e,G.uniformsList=null,$e}function _l(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function vl(S,U){const X=v.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function bd(S,U,X,G,V){U.isScene!==!0&&(U=dt),N.resetTextureUnits();const fe=U.fog,_e=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,pe=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Zt,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Re=Y.get(G.envMap||_e,Te),Be=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,wt=!!X.morphAttributes.color;let St=An;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(St=w.toneMapping);const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,zt=ht!==void 0?ht.length:0,Ae=v.get(G),Qt=A.state.lights;if(De===!0&&(Fe===!0||S!==k)){const Ut=S===k&&G.id===B;ie.setState(G,S,Ut)}let et=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Qt.state.version||Ae.outputColorSpace!==pe||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==Re||G.fog===!0&&Ae.fog!==fe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Be||Ae.vertexTangents!==$e||Ae.morphTargets!==Ce||Ae.morphNormals!==ct||Ae.morphColors!==wt||Ae.toneMapping!==St||Ae.morphTargetsCount!==zt)&&(et=!0):(et=!0,Ae.__version=G.version);let cn=Ae.currentProgram;et===!0&&(cn=Ws(G,U,V));let vn=!1,di=!1,Ai=!1;const ut=cn.getUniforms(),kt=Ae.uniforms;if(Ee.useProgram(cn.program)&&(vn=!0,di=!0,Ai=!0),G.id!==B&&(B=G.id,di=!0),vn||k!==S){Ee.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",S.projectionMatrix),ut.setValue(L,"viewMatrix",S.matrixWorldInverse);const Qn=ut.map.cameraPosition;Qn!==void 0&&Qn.setValue(L,Je.setFromMatrixPosition(S.matrixWorld)),ft.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,di=!0,Ai=!0)}if(Ae.needsLights&&(Qt.state.directionalShadowMap.length>0&&ut.setValue(L,"directionalShadowMap",Qt.state.directionalShadowMap,N),Qt.state.spotShadowMap.length>0&&ut.setValue(L,"spotShadowMap",Qt.state.spotShadowMap,N),Qt.state.pointShadowMap.length>0&&ut.setValue(L,"pointShadowMap",Qt.state.pointShadowMap,N)),V.isSkinnedMesh){ut.setOptional(L,V,"bindMatrix"),ut.setOptional(L,V,"bindMatrixInverse");const Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ut.setValue(L,"boneTexture",Ut.boneTexture,N))}V.isBatchedMesh&&(ut.setOptional(L,V,"batchingTexture"),ut.setValue(L,"batchingTexture",V._matricesTexture,N),ut.setOptional(L,V,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",V._indirectTexture,N),ut.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",V._colorsTexture,N));const Jn=X.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&ge.update(V,X,cn),(di||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,ut.setValue(L,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(kt.envMapIntensity.value=U.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=k_()),di&&(ut.setValue(L,"toneMappingExposure",w.toneMappingExposure),Ae.needsLights&&wd(kt,Ai),fe&&G.fog===!0&&Le.refreshFogUniforms(kt,fe),Le.refreshMaterialUniforms(kt,G,ke,ae,A.state.transmissionRenderTarget[S.id]),Ar.upload(L,_l(Ae),kt,N)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(L,_l(Ae),kt,N),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(L,"center",V.center),ut.setValue(L,"modelViewMatrix",V.modelViewMatrix),ut.setValue(L,"normalMatrix",V.normalMatrix),ut.setValue(L,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ut=G.uniformsGroups;for(let Qn=0,Ri=Ut.length;Qn<Ri;Qn++){const xl=Ut[Qn];xe.update(xl,cn),xe.bind(xl,cn)}}return cn}function wd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Td(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,U,X){const G=v.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=U,v.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const X=v.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const Ed=L.createFramebuffer();this.setRenderTarget=function(S,U=0,X=0){O=S,R=U,F=X;let G=null,V=!1,fe=!1;if(S){const pe=v.get(S);if(pe.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),z.copy(S.viewport),W.copy(S.scissor),ne=S.scissorTest,Ee.viewport(z),Ee.scissor(W),Ee.setScissorTest(ne),B=-1;return}else if(pe.__webglFramebuffer===void 0)N.setupRenderTarget(S);else if(pe.__hasExternalTextures)N.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&v.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(S)}}const Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Re=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?G=Re[U][X]:G=Re[U],V=!0):S.samples>0&&N.useMultisampledRTT(S)===!1?G=v.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[X]:G=Re,z.copy(S.viewport),W.copy(S.scissor),ne=S.scissorTest}else z.copy(j).multiplyScalar(ke).floor(),W.copy(re).multiplyScalar(ke).floor(),ne=ce;if(X!==0&&(G=Ed),Ee.bindFramebuffer(L.FRAMEBUFFER,G)&&Ee.drawBuffers(S,G),Ee.viewport(z),Ee.scissor(W),Ee.setScissorTest(ne),V){const pe=v.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(fe){const pe=U;for(let Te=0;Te<S.textures.length;Te++){const Re=v.get(S.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Re.__webglTexture,X,pe)}}else if(S!==null&&X!==0){const pe=v.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,X)}B=-1},this.readRenderTargetPixels=function(S,U,X,G,V,fe,_e,pe=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){Ee.bindFramebuffer(L.FRAMEBUFFER,Te);try{const Re=S.textures[pe],Be=Re.format,$e=Re.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!ft.textureFormatReadable(Be)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable($e)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&X>=0&&X<=S.height-V&&L.readPixels(U,X,G,V,le.convert(Be),le.convert($e),fe)}finally{const Re=O!==null?v.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,U,X,G,V,fe,_e,pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(U>=0&&U<=S.width-G&&X>=0&&X<=S.height-V){Ee.bindFramebuffer(L.FRAMEBUFFER,Te);const Re=S.textures[pe],Be=Re.format,$e=Re.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!ft.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(U,X,G,V,le.convert(Be),le.convert($e),0);const ct=O!==null?v.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ct);const wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uu(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(Ce),L.deleteSync(wt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,X=0){const G=Math.pow(2,-X),V=Math.floor(S.image.width*G),fe=Math.floor(S.image.height*G),_e=U!==null?U.x:0,pe=U!==null?U.y:0;N.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,_e,pe,V,fe),Ee.unbindTexture()};const Ad=L.createFramebuffer(),Rd=L.createFramebuffer();this.copyTextureToTexture=function(S,U,X=null,G=null,V=0,fe=0){let _e,pe,Te,Re,Be,$e,Ce,ct,wt;const St=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(X!==null)_e=X.max.x-X.min.x,pe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Be=X.min.y,$e=X.isBox3?X.min.z:0;else{const kt=Math.pow(2,-V);_e=Math.floor(St.width*kt),pe=Math.floor(St.height*kt),S.isDataArrayTexture?Te=St.depth:S.isData3DTexture?Te=Math.floor(St.depth*kt):Te=1,Re=0,Be=0,$e=0}G!==null?(Ce=G.x,ct=G.y,wt=G.z):(Ce=0,ct=0,wt=0);const ht=le.convert(U.format),zt=le.convert(U.type);let Ae;U.isData3DTexture?(N.setTexture3D(U,0),Ae=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),Ae=L.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),Ae=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),cn=L.getParameter(L.UNPACK_SKIP_PIXELS),vn=L.getParameter(L.UNPACK_SKIP_ROWS),di=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$e);const Ai=S.isDataArrayTexture||S.isData3DTexture,ut=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const kt=v.get(S),Jn=v.get(U),Ut=v.get(kt.__renderTarget),Qn=v.get(Jn.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Ri=0;Ri<Te;Ri++)Ai&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(S).__webglTexture,V,$e+Ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(U).__webglTexture,fe,wt+Ri)),L.blitFramebuffer(Re,Be,_e,pe,Ce,ct,_e,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||v.has(S)){const kt=v.get(S),Jn=v.get(U);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Ad),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rd);for(let Ut=0;Ut<Te;Ut++)Ai?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,V,$e+Ut):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,V),ut?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jn.__webglTexture,fe,wt+Ut):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jn.__webglTexture,fe),V!==0?L.blitFramebuffer(Re,Be,_e,pe,Ce,ct,_e,pe,L.COLOR_BUFFER_BIT,L.NEAREST):ut?L.copyTexSubImage3D(Ae,fe,Ce,ct,wt+Ut,Re,Be,_e,pe):L.copyTexSubImage2D(Ae,fe,Ce,ct,Re,Be,_e,pe);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ae,fe,Ce,ct,wt,_e,pe,Te,ht,zt,St.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,fe,Ce,ct,wt,_e,pe,Te,ht,St.data):L.texSubImage3D(Ae,fe,Ce,ct,wt,_e,pe,Te,ht,zt,St):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Ce,ct,_e,pe,ht,zt,St.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Ce,ct,St.width,St.height,ht,St.data):L.texSubImage2D(L.TEXTURE_2D,fe,Ce,ct,_e,pe,ht,zt,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,di),fe===0&&U.generateMipmaps&&L.generateMipmap(Ae),Ee.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&N.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?N.setTextureCube(S,0):S.isData3DTexture?N.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?N.setTexture2DArray(S,0):N.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){R=0,F=0,O=null,Ee.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Oc(s,e){if(e===eu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Co||e===Vh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Co)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function z_(s){const e=new Map,t=new Map,n=s.clone();return fd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function fd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)fd(s.children[n],e.children[n],t)}class V_ extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new kc(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new kc(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new rv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Ds.extractUrlBase(e);a=Ds.resolveURL(h,this.path)}else a=Ds.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new id(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,a,function(c){t(c),r.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pd){try{a[qe.KHR_BINARY_GLTF]=new av(e)}catch(d){i&&i(d);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new xv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const d=this.pluginCallbacks[c](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const d=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(d){case qe.KHR_MATERIALS_UNLIT:a[d]=new W_;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[d]=new ov(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[d]=new lv;break;case qe.KHR_MESH_QUANTIZATION:a[d]=new cv;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function G_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Et(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class H_{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const c=new Ue(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Zt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new ad(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Io(c),h.distance=d;break;case"spot":h=new rd(c),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),Mn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class W_{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ye}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}}class X_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(r,r)}return Promise.all(i)}}class q_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Y_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Zt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Z_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],Zt),Promise.all(i)}}class J_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],Zt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}}class ev{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class tv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class nv{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class iv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return n.loadTextureImage(e,a.source,l)}}class sv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return n.loadTextureImage(e,a.source,l)}}class kc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,h=i.byteLength||0,c=i.count,d=i.byteStride,u=new Uint8Array(o,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(c*d);return a.decodeGltfBuffer(new Uint8Array(f),c,d,u,i.mode,i.filter),f})})}else return null}}class rv{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==an.TRIANGLES&&h.mode!==an.TRIANGLE_STRIP&&h.mode!==an.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(c=>(l[h]=c,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const c=h.pop(),d=c.isGroup?c.children:[c],u=h[0].count,f=[];for(const g of d){const _=new He,m=new I,p=new Zn,y=new I(1,1,1),b=new ef(g.geometry,g.material,u);for(let M=0;M<u;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,_.compose(m,p,y));for(const M in l)if(M==="_COLOR_0"){const A=l[M];b.instanceColor=new Lo(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);xt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return c.isGroup?(c.clear(),c.add(...f),c):f[0]}))}}const pd="glTF",Ms=12,Bc={JSON:1313821514,BIN:5130562};class av{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ms,r=new DataView(e,Ms);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Bc.JSON){const h=new Uint8Array(e,Ms+a,o);this.content=n.decode(h)}else if(l===Bc.BIN){const h=Ms+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ov{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},h={};for(const c in a){const d=Fo[c]||c.toLowerCase();o[d]=a[c]}for(const c in e.attributes){const d=Fo[c]||c.toLowerCase();if(a[c]!==void 0){const u=n.accessors[e.attributes[c]],f=ji[u.componentType];h[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(d,u){i.decodeDracoFile(c,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},o,h,Zt,u)})})}}class lv{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cv{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class md extends os{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,c=i-t,d=(n-t)/c,u=d*d,f=u*d,g=e*h,_=g-h,m=-2*f+3*u,p=f-u,y=1-m,b=p-u+d;for(let M=0;M!==o;M++){const A=a[_+M+o],E=a[_+M+l]*c,C=a[g+M+o],x=a[g+M]*c;r[M]=y*A+b*E+m*C+p*x}return r}}const hv=new Zn;class dv extends md{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hv.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zc={9728:Ct,9729:Pt,9984:Nh,9985:Mr,9986:As,9987:Hn},Vc={33071:Tn,33648:Cr,10497:wn},La={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uv={CUBICSPLINE:void 0,LINEAR:Os,STEP:Fs},Da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new J({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),s.DefaultMaterial}function vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pv(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,c=e.length;h<c;h++){const d=e[h];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){const d=e[h];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){const c=h[0],d=h[1],u=h[2];return n&&(s.morphAttributes.position=c),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function mv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gv(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ia(t.attributes):e=s.indices+":"+Ia(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ia(s.targets[n]);return e}function Ia(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Oo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _v(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vv=new He;class xv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Cf(this.options.manager):this.textureLoader=new Nf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new id(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vi(r,o,i),Mn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,c]of a.children.entries())r(c,o.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ds.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=La[i.type],o=ji[i.componentType],l=i.normalized===!0,h=new o(i.count*a);return Promise.resolve(new jt(h,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=La[i.type],h=ji[i.componentType],c=h.BYTES_PER_ELEMENT,d=c*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(y);b||(_=new h(o,p*f,i.count*f/c),b=new qu(_,f/c),t.cache.add(y,b)),m=new el(b,l,u%f/c,g)}else o===null?_=new h(i.count*l):_=new h(o,u,i.count*l),m=new jt(_,l,g);if(i.sparse!==void 0){const p=La.SCALAR,y=ji[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new y(a[1],b,i.sparse.count*p),E=new h(a[2],M,i.sparse.count*l);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=A.length;C<x;C++){const w=A[C];if(m.setX(w,E[C*l]),l>=2&&m.setY(w,E[C*l+1]),l>=3&&m.setZ(w,E[C*l+2]),l>=4&&m.setW(w,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return c.magFilter=zc[u.magFilter]||Pt,c.minFilter=zc[u.minFilter]||Hn,c.wrapS=Vc[u.wrapS]||wn,c.wrapT=Vc[u.wrapT]||wn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Ct&&c.minFilter!==Pt,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){h=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Lt(_);m.needsUpdate=!0,u(m)}),t.load(Ds.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return h===!0&&o.revokeObjectURL(l),Mn(d,a),d.userData.mimeType=a.mimeType||_v(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=c,c}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zh,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new jh,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return J}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},h=[];if(l[qe.KHR_MATERIALS_UNLIT]){const d=i[qe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Zt),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",d.baseColorTexture,Bt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);const c=r.alphaMode||Da.OPAQUE;if(c===Da.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Da.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ye&&(h.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Ye&&(h.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ye){const d=r.emissiveFactor;o.emissive=new Ue().setRGB(d[0],d[1],d[2],Zt)}return r.emissiveTexture!==void 0&&a!==Ye&&h.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(h).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Mn(d,r),t.associations.set(d,{materials:e}),r.extensions&&vi(i,d,r),d})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],c=gv(h),d=i[c];if(d)a.push(d.promise);else{let u;h.extensions&&h.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?u=r(h):u=Gc(new Xt,h,t),i[c]={primitive:h,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const c=a[l].material===void 0?fv(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let f=0,g=c.length;f<g;f++){const _=c[f],m=a[f];let p;const y=h[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Zu(_,y):new $(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=Oc(p.geometry,Vh):m.mode===an.TRIANGLE_FAN&&(p.geometry=Oc(p.geometry,Co));else if(m.mode===an.LINES)p=new rf(_,y);else if(m.mode===an.LINE_STRIP)p=new sl(_,y);else if(m.mode===an.LINE_LOOP)p=new af(_,y);else if(m.mode===an.POINTS)p=new of(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mn(p,r),m.extensions&&vi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&vi(i,d[0],r),d[0];const u=new rt;r.extensions&&vi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(ye.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Gr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let h=0,c=a.length;h<c;h++){const d=a[h];if(d){o.push(d);const u=new He;r!==null&&u.fromArray(r.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new nl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],h=[],c=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),h.push(g),c.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let b=0,M=u.length;b<M;b++){const A=u[b],E=f[b],C=g[b],x=_[b],w=m[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const H=n._createAnimationTracks(A,E,C,x,w);if(H)for(let R=0;R<H.length;R++)p.push(H[R])}const y=new Mf(r,void 0,p);return Mn(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=i.weights.length;l<h;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let h=0,c=o.length;h<c;h++)a.push(n.getDependency("node",o[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(h){const c=h[0],d=h[1],u=h[2];u!==null&&c.traverse(function(f){f.isSkinnedMesh&&f.bind(u,vv)});for(let f=0,g=d.length;f<g;f++)c.add(d[f]);if(c.userData.pivot!==void 0&&d.length>0){const f=c.userData.pivot,g=d[0];c.pivot=new I().fromArray(f),c.position.x-=f[0],c.position.y-=f[1],c.position.z-=f[2],g.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let c;if(r.isBone===!0?c=new Yh:h.length>1?c=new rt:h.length===1?c=h[0]:c=new xt,c!==h[0])for(let d=0,u=h.length;d<u;d++)c.add(h[d]);if(r.name&&(c.userData.name=r.name,c.name=a),Mn(c,r),r.extensions&&vi(n,c,r),r.matrix!==void 0){const d=new He;d.fromArray(r.matrix),c.applyMatrix4(d)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);if(!i.associations.has(c))i.associations.set(c,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(c);i.associations.set(c,{...d})}return i.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new rt;n.name&&(r.name=i.createUniqueName(n.name)),Mn(r,n),n.extensions&&vi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,d=l.length;c<d;c++){const u=l[c];u.parent!==null?r.add(z_(u)):r.add(u)}const h=c=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof Cn||u instanceof Lt)&&d.set(u,f);return c.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ai[r.path]===ai.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let h;switch(ai[r.path]){case ai.weights:h=ns;break;case ai.rotation:h=is;break;case ai.translation:case ai.scale:h=ss;break;default:switch(n.itemSize){case 1:h=ns;break;case 2:case 3:default:h=ss;break}break}const c=i.interpolation!==void 0?uv[i.interpolation]:Os,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new h(l[u]+"."+ai[r.path],t.array,d,c);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Oo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?dv:md;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yv(s,e,t){const n=e.attributes,i=new Wt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(h[0],h[1],h[2])),o.normalized){const c=Oo(ji[o.componentType]);i.min.multiplyScalar(c),i.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let h=0,c=r.length;h<c;h++){const d=r[h];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=Oo(ji[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Dn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Gc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Fo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Mn(s,e),yv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pv(s,e.targets,t):s})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var rs;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(rs||(rs={}));class Na extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const Sv=s=>{var e,t;return s!=null&&s.androidBridge?"android":!((t=(e=s==null?void 0:s.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},Mv=s=>{const e=s.CapacitorCustomPlatform||null,t=s.Capacitor||{},n=t.Plugins=t.Plugins||{},i=()=>e!==null?e.name:Sv(s),r=()=>i()!=="web",a=d=>{const u=h.get(d);return!!(u!=null&&u.platforms.has(i())||o(d))},o=d=>{var u;return(u=t.PluginHeaders)===null||u===void 0?void 0:u.find(f=>f.name===d)},l=d=>s.console.error(d),h=new Map,c=(d,u={})=>{const f=h.get(d);if(f)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),f.proxy;const g=i(),_=o(d);let m;const p=async()=>(!m&&g in u?m=typeof u[g]=="function"?m=await u[g]():m=u[g]:e!==null&&!m&&"web"in u&&(m=typeof u.web=="function"?m=await u.web():m=u.web),m),y=(x,w)=>{var H,R;if(_){const F=_==null?void 0:_.methods.find(O=>w===O.name);if(F)return F.rtype==="promise"?O=>t.nativePromise(d,w.toString(),O):(O,B)=>t.nativeCallback(d,w.toString(),O,B);if(x)return(H=x[w])===null||H===void 0?void 0:H.bind(x)}else{if(x)return(R=x[w])===null||R===void 0?void 0:R.bind(x);throw new Na(`"${d}" plugin is not implemented on ${g}`,rs.Unimplemented)}},b=x=>{let w;const H=(...R)=>{const F=p().then(O=>{const B=y(O,x);if(B){const k=B(...R);return w=k==null?void 0:k.remove,k}else throw new Na(`"${d}.${x}()" is not implemented on ${g}`,rs.Unimplemented)});return x==="addListener"&&(F.remove=async()=>w()),F};return H.toString=()=>`${x.toString()}() { [capacitor code] }`,Object.defineProperty(H,"name",{value:x,writable:!1,configurable:!1}),H},M=b("addListener"),A=b("removeListener"),E=(x,w)=>{const H=M({eventName:x},w),R=async()=>{const O=await H;A({eventName:x,callbackId:O},w)},F=new Promise(O=>H.then(()=>O({remove:R})));return F.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},F},C=new Proxy({},{get(x,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return _?E:M;case"removeListener":return A;default:return b(w)}}});return n[d]=C,h.set(d,{name:d,proxy:C,platforms:new Set([...Object.keys(u),..._?[g]:[]])}),C};return t.convertFileSrc||(t.convertFileSrc=d=>d),t.getPlatform=i,t.handleError=l,t.isNativePlatform=r,t.isPluginAvailable=a,t.registerPlugin=c,t.Exception=Na,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},bv=s=>s.Capacitor=Mv(s),Fr=bv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Gs=Fr.registerPlugin;class hl{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const i=this.listeners[e];if(!i){if(n){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}i.forEach(r=>r(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new Fr.Exception(e,rs.Unimplemented)}unavailable(e="not available"){return new Fr.Exception(e,rs.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const i=n.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const Hc=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Wc=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class wv extends hl{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[i,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Wc(i).trim(),r=Wc(r).trim(),t[i]=r}),t}async setCookie(e){try{const t=Hc(e.key),n=Hc(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",r=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${i}; path=${r}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Gs("CapacitorCookies",{web:()=>new wv});const Tv=async s=>new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const i=n.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>t(i),n.readAsDataURL(s)}),Ev=(s={})=>{const e=Object.keys(s);return Object.keys(s).map(i=>i.toLocaleLowerCase()).reduce((i,r,a)=>(i[r]=s[e[a]],i),{})},Av=(s,e=!0)=>s?Object.entries(s).reduce((n,i)=>{const[r,a]=i;let o,l;return Array.isArray(a)?(l="",a.forEach(h=>{o=e?encodeURIComponent(h):h,l+=`${r}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(a):a,l=`${r}=${o}`),`${n}&${l}`},"").substr(1):null,Rv=(s,e={})=>{const t=Object.assign({method:s.method||"GET",headers:s.headers},e),i=Ev(s.headers)["content-type"]||"";if(typeof s.data=="string")t.body=s.data;else if(i.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[a,o]of Object.entries(s.data||{}))r.set(a,o);t.body=r.toString()}else if(i.includes("multipart/form-data")||s.data instanceof FormData){const r=new FormData;if(s.data instanceof FormData)s.data.forEach((o,l)=>{r.append(l,o)});else for(const o of Object.keys(s.data))r.append(o,s.data[o]);t.body=r;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof s.data=="object")&&(t.body=JSON.stringify(s.data));return t};class Cv extends hl{async request(e){const t=Rv(e,e.webFetchExtra),n=Av(e.params,e.shouldEncodeUrlParams),i=n?`${e.url}?${n}`:e.url,r=await fetch(i,t),a=r.headers.get("content-type")||"";let{responseType:o="text"}=r.ok?e:{};a.includes("application/json")&&(o="json");let l,h;switch(o){case"arraybuffer":case"blob":h=await r.blob(),l=await Tv(h);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const c={};return r.headers.forEach((d,u)=>{c[u]=d}),{data:l,headers:c,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Gs("CapacitorHttp",{web:()=>new Cv});var Xc;(function(s){s.Dark="DARK",s.Light="LIGHT",s.Default="DEFAULT"})(Xc||(Xc={}));var $c;(function(s){s.StatusBar="StatusBar",s.NavigationBar="NavigationBar"})($c||($c={}));class Pv extends hl{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Gs("SystemBars",{web:()=>new Pv});const Lv="modulepreload",Dv=function(s,e){return new URL(s,e).href},qc={},gd=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(h=>{if(h=Dv(h,n),h in qc)return;qc[h]=!0;const c=h.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===h&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Lv,c||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},oi=Gs("CapacitorInAppPurchase",{web:()=>gd(()=>import("./web-CCQQeXCP.js"),[],import.meta.url).then(s=>new s.CapacitorInAppPurchaseWeb)});var Kc;(function(s){s.General="General",s.ParentalGuidance="ParentalGuidance",s.Teen="Teen",s.MatureAudience="MatureAudience"})(Kc||(Kc={}));var Yc;(function(s){s.SizeChanged="bannerAdSizeChanged",s.Loaded="bannerAdLoaded",s.FailedToLoad="bannerAdFailedToLoad",s.Opened="bannerAdOpened",s.Closed="bannerAdClosed",s.AdImpression="bannerAdImpression"})(Yc||(Yc={}));var jc;(function(s){s.TOP_CENTER="TOP_CENTER",s.CENTER="CENTER",s.BOTTOM_CENTER="BOTTOM_CENTER"})(jc||(jc={}));var Zc;(function(s){s.BANNER="BANNER",s.FULL_BANNER="FULL_BANNER",s.LARGE_BANNER="LARGE_BANNER",s.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",s.LEADERBOARD="LEADERBOARD",s.ADAPTIVE_BANNER="ADAPTIVE_BANNER",s.SMART_BANNER="SMART_BANNER"})(Zc||(Zc={}));var $i;(function(s){s.Loaded="interstitialAdLoaded",s.FailedToLoad="interstitialAdFailedToLoad",s.Showed="interstitialAdShowed",s.FailedToShow="interstitialAdFailedToShow",s.Dismissed="interstitialAdDismissed"})($i||($i={}));var Jc;(function(s){s.Loaded="onRewardedInterstitialAdLoaded",s.FailedToLoad="onRewardedInterstitialAdFailedToLoad",s.Showed="onRewardedInterstitialAdShowed",s.FailedToShow="onRewardedInterstitialAdFailedToShow",s.Dismissed="onRewardedInterstitialAdDismissed",s.Rewarded="onRewardedInterstitialAdReward"})(Jc||(Jc={}));var bi;(function(s){s.Loaded="onRewardedVideoAdLoaded",s.FailedToLoad="onRewardedVideoAdFailedToLoad",s.Showed="onRewardedVideoAdShowed",s.FailedToShow="onRewardedVideoAdFailedToShow",s.Dismissed="onRewardedVideoAdDismissed",s.Rewarded="onRewardedVideoAdReward"})(bi||(bi={}));var Or;(function(s){s.NOT_REQUIRED="NOT_REQUIRED",s.OBTAINED="OBTAINED",s.REQUIRED="REQUIRED",s.UNKNOWN="UNKNOWN"})(Or||(Or={}));var Qc;(function(s){s[s.DISABLED=0]="DISABLED",s[s.EEA=1]="EEA",s[s.NOT_EEA=2]="NOT_EEA",s[s.US=3]="US",s[s.OTHER=4]="OTHER"})(Qc||(Qc={}));const Ot=Gs("AdMob",{web:()=>gd(()=>import("./web-DiDnHHCR.js"),[],import.meta.url).then(s=>new s.AdMobWeb)}),Iv=""+new URL("cover-art-CbKw3loD.svg",import.meta.url).href,kr="./",ve=s=>`${kr}${s.replace(/^\//,"")}`,Nv=s=>s.startsWith(kr)?`/${s.slice(kr.length)}`:s,ko=["localhost","127.0.0.1"];"serviceWorker"in navigator&&ko.includes(window.location.hostname)?window.addEventListener("load",()=>{navigator.serviceWorker.getRegistrations().then(s=>s.forEach(e=>e.unregister())).catch(()=>{})}):"serviceWorker"in navigator&&!ko.includes(window.location.hostname)&&window.addEventListener("load",()=>{navigator.serviceWorker.register(ve("/sw.js"),{scope:kr}).then(s=>{s.update().catch(()=>{})}).catch(()=>{})});const Is=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(hover: none)").matches||navigator.maxTouchPoints>0;document.body.classList.toggle("touch-device",Is);Is&&(document.addEventListener("contextmenu",s=>s.preventDefault()),document.addEventListener("selectstart",s=>s.preventDefault()));const xr=["CANAL ROAD","LIBERTY","GULBERG","MALL ROAD","RING ROAD","WALLED CITY","FOOD STREET","LAHORE"],Gn=[-6.5,0,6.5],xi=.19,bs=16,Uv=7,eh=52,th=10,nh=24.2,Fv=9,Vs=["real-hatchback-small","real-hatchback","real-sedan-basic","real-sedan-sport","real-suv"],Ov={"real-hatchback-small":"hatchback-small","real-hatchback":"hatchback","real-sedan-basic":"sedan-basic","real-sedan-sport":"sedan-sport","real-suv":"suv"},_d=50,ih=["sedan","hatchback","taxi","suv","bike","rickshaw","van","prado","delivery","garbage","sedan","tanker","firetruck","ambulance","pickup","truck","bike","bus"],Bo=Array.from({length:_d},(s,e)=>e%10===9?Vs[Math.floor(e/10)%Vs.length]:ih[e%ih.length]),sh=[...new Set(Bo)],Mt=Fr.getPlatform()==="android",kv="ca-app-pub-1797269464593835/8753822751",Bv="ca-app-pub-1797269464593835/5583756083",zv=3,Vv="ca-app-pub-3940256099942544/1033173712",Gv="ca-app-pub-3940256099942544/5224354917",Hv=4,Wv=4,Xv=100,$v=25,qv=7,rh=75,ah=[{type:"near_miss",label:"Near Miss Artist",desc:"Pull off {target} near misses in one run",targets:[5,10,20]},{type:"score",label:"High Scorer",desc:"Reach a score of {target}",targets:[2e3,5e3,1e4]},{type:"distance",label:"Distance Runner",desc:"Drive {target}m in one run",targets:[500,1e3,2e3]},{type:"combo_max",label:"Combo King",desc:"Hit x{target} combo multiplier",targets:[2,3,4]}],oh=420,lh=[{type:"boss_clear",label:"Boss Hunter",desc:"Clear {target} boss races this week",targets:[1,2,3]},{type:"drift",label:"Lahore Slider",desc:"Score {target} drift points this week",targets:[1200,2500,5e3]},{type:"score",label:"City Legend",desc:"Bank {target} score in one run",targets:[4e3,8e3,14e3]}],vd=[{key:"canal-run",label:"Canal",short:"CNL"},{key:"liberty-loop",label:"Liberty",short:"LIB"},{key:"mall-road-drift",label:"Mall Road",short:"MAL"},{key:"ring-road-blast",label:"Ring Road",short:"RNG"},{key:"old-city-chase",label:"Old City",short:"OLD"},{key:"airport-road-dash",label:"Airport Road",short:"AIR"},{key:"fortress-sprint",label:"Fortress",short:"FOR"},{key:"ravi-bridge-run",label:"Ravi Bridge",short:"RAV"}],ch=vd.map(s=>s.key),Ua=[{name:"Shahbaz Liberty",car:"Civic RS",taunt:"Liberty is my road. Try to keep my tail lights in view."},{name:"Malik Ring",car:"Prado V8",taunt:"Wide road, small nerves. I will box you before the toll."},{name:"Zara Mall Road",car:"Italian V12",taunt:"One clean overtake at the monument. No excuses."},{name:"Rana Ravi",car:"Hyper GT",taunt:"Cross the bridge behind me or do not cross at all."}],Kv=["chase","side-rammer","roadblock-unit","spike-strip-unit"],hh=9,Yv=20,jv=34,Zv=.42,Jv=.62,dh=.14,uh=.34,Qe={career:{key:"career",label:"Career Run",objective:"Clear the route and complete the stage mission."},policeChase:{key:"police-chase",label:"Police Chase",objective:"Start wanted, survive escalating pursuit, and reach the finish."},policeRace:{key:"police-race",label:"Police Race",objective:"Race the police interceptor and overtake it before the finish."}},Qv=[{key:"time-trial",label:"Time Trial",rule:"Beat the route clock for bonus XP."},{key:"pursuit-escape",label:"Police Chase",rule:"Start wanted and escape a full pursuit."},{key:"police-race",label:"Police Race",rule:"Beat a police interceptor to the finish."},{key:"drift-run",label:"Drift Run",rule:"Score drift points through technical turns."},{key:"near-miss-combo",label:"Near-Miss Combo",rule:"Chain close passes before the timer decays."},{key:"fuel-saver",label:"Fuel Saver",rule:"Finish with fuel in reserve."},{key:"clean-run",label:"No-Crash Clean Run",rule:"Any collision breaks mastery."}],qi=[{key:"classic",label:"Classic",color:null,unlock:"Owned"},{key:"taxi-stripe",label:"Taxi Stripe",color:16436245,unlock:"Stage 2",stage:2},{key:"sea-neon",label:"Sea Neon",color:2282478,unlock:"Stage 4",stage:4},{key:"midnight-racer",label:"Midnight Racer",color:11032055,unlock:"Score 5000",score:5e3},{key:"boss-flame",label:"Boss Flame",color:15680580,unlock:"Boss clear",bossClears:1},{key:"matte-police",label:"Police Style",color:15067115,unlock:"2 boss tokens",bossTokens:2},{key:"food-street-decal",label:"Food Street Decal",color:1483594,unlock:"Stage 5",stage:5},{key:"chrome-rims",label:"Chrome Rims",color:13358561,unlock:"Level 6",level:6},{key:"legend-gold",label:"Legend Gold",color:16498468,unlock:"7-day streak",loginStreak:7}],xd=typeof window<"u"&&ko.includes(window.location.hostname),fh=xd,yr=xd&&!Mt,ph=1.9,yd={engine:0,handling:0,tank:0,nitro:0,armor:0},ws=5;ve("/audio/music/lahore-night-drive.mp3"),ve("/audio/music/ring-road-chase.mp3"),ve("/audio/music/old-city-pursuit.mp3");ve("/audio/sfx/crash.mp3"),ve("/audio/sfx/horn.mp3"),ve("/audio/sfx/nitro-burst.mp3"),ve("/audio/sfx/police-siren.mp3"),ve("/audio/sfx/tire-drift.mp3");const ex=[],tx={},Xi={player:{"hatchback-small":ve("/models/player/player_hatchback.glb"),hatchback:ve("/models/player/player_hatchback.glb"),"sedan-basic":ve("/models/player/player_sedan.glb"),"sedan-sport":ve("/models/player/player_sedan.glb"),suv:ve("/models/player/player_suv.glb"),prado:ve("/models/player/player_suv.glb"),truck:ve("/models/player/player_truck.glb"),sports:ve("/models/premium/premium_red_exotic.glb"),supercar:ve("/models/premium/premium_hyper_gt.glb"),"premium-italian-v12":ve("/models/premium/premium_italian_v12.glb"),"premium-red-exotic":ve("/models/premium/premium_red_exotic.glb"),"premium-hyper-gt":ve("/models/premium/premium_hyper_gt.glb")},traffic:{hatchback:ve("/models/traffic/traffic_hatchback.glb"),sedan:ve("/models/traffic/traffic_sedan.glb"),suv:ve("/models/traffic/traffic_suv.glb"),prado:ve("/models/traffic/traffic_landcruiser.glb"),truck:ve("/models/traffic/traffic_truck.glb"),bike:ve("/models/traffic/traffic_bike_cd70.mobile.glb"),rickshaw:ve("/models/traffic/traffic_rickshaw.glb"),tanker:ve("/models/traffic/traffic_water_tanker.glb"),pickup:ve("/models/traffic/traffic_bolan_loader.glb"),taxi:ve("/models/traffic/traffic_taxi.glb"),van:ve("/models/traffic/traffic_van.glb"),delivery:ve("/models/traffic/traffic_delivery.glb"),garbage:ve("/models/traffic/traffic_garbage.glb"),firetruck:ve("/models/traffic/traffic_firetruck.glb"),ambulance:ve("/models/traffic/traffic_ambulance.glb"),bus:ve("/models/traffic/traffic_w11_bus.glb"),"real-hatchback-small":ve("/models/player/player_hatchback.glb"),"real-hatchback":ve("/models/player/player_hatchback.glb"),"real-sedan-basic":ve("/models/player/player_sedan.glb"),"real-sedan-sport":ve("/models/player/player_sedan.glb"),"real-suv":ve("/models/player/player_suv.glb")},police:ve("/models/traffic/traffic_police.glb")},Sn={bike:{width:1,length:2.2,height:2.1},rickshaw:{width:1.8,length:2.6,height:1.7},tanker:{width:2.8,length:9.4,height:3.5},pickup:{width:2.4,length:4.6,height:1.95},taxi:{width:2.1,length:4.5,height:1.55},van:{width:2.35,length:5.25,height:2.05},delivery:{width:2.45,length:5.6,height:2.25},garbage:{width:2.8,length:7.2,height:2.65},firetruck:{width:2.8,length:7.4,height:2.75},ambulance:{width:2.4,length:5.6,height:2.25},bus:{width:2.6,length:12,height:3},"real-hatchback-small":{width:2.85,length:5.05,height:1.22},"real-hatchback":{width:2.95,length:5.35,height:1.18},"real-sedan-basic":{width:3.25,length:6.05,height:1.04},"real-sedan-sport":{width:3.48,length:6.58,height:.98},"real-suv":{width:3.45,length:6.5,height:1.42}},nx={hatchback:15067115,sedan:9741240,suv:2042167,prado:16317180,truck:6583435,tanker:13751771,pickup:14427686,taxi:16436245,van:16382715,delivery:15680580,ambulance:16317180,garbage:1483594,firetruck:14427686,"real-hatchback-small":14212579,"real-hatchback":15987958,"real-sedan-basic":13972266,"real-sedan-sport":13056815,"real-suv":14477815},ix={"/models/player/player_hatchback.glb":0,"/models/player/player_sedan.glb":Math.PI,"/models/player/player_suv.glb":Math.PI,"/models/player/traffic_sedan.glb":Math.PI,"/models/player/police_car.glb":Math.PI,"/models/traffic/traffic_real_sedan.glb":Math.PI,"/models/traffic/traffic_real_suv.glb":Math.PI,"/models/premium/premium_italian_v12.glb":Math.PI,"/models/premium/premium_red_exotic.glb":Math.PI,"/models/premium/premium_hyper_gt.glb":Math.PI,"/models/player/player_mehran.glb":Math.PI,"/models/player/player_cultus.glb":Math.PI,"/models/player/player_city.glb":Math.PI,"/models/player/player_civic_rs.glb":Math.PI,"/models/player/player_brv.glb":Math.PI,"/models/player/player_landcruiser.glb":Math.PI,"/models/player/player_truck.glb":Math.PI,"/models/player/player_supra.glb":Math.PI,"/models/player/player_hyper.glb":Math.PI,"/models/traffic/traffic_hatchback.glb":Math.PI,"/models/traffic/traffic_sedan.glb":Math.PI,"/models/traffic/traffic_suv.glb":Math.PI,"/models/traffic/traffic_landcruiser.glb":Math.PI,"/models/traffic/traffic_truck.glb":Math.PI,"/models/traffic/traffic_police.glb":Math.PI,"/models/traffic/traffic_bike.glb":-Math.PI/2,"/models/traffic/traffic_rickshaw.glb":Math.PI,"/models/traffic/traffic_taxi.glb":Math.PI,"/models/traffic/traffic_van.glb":Math.PI,"/models/traffic/traffic_delivery.glb":Math.PI,"/models/traffic/traffic_garbage.glb":Math.PI,"/models/traffic/traffic_firetruck.glb":Math.PI,"/models/traffic/traffic_ambulance.glb":Math.PI,"/models/traffic/traffic_tanker.glb":Math.PI,"/models/traffic/traffic_bike_cd70.glb":-Math.PI/2,"/models/traffic/traffic_bike_cd70.mobile.glb":-Math.PI/2,"/models/traffic/traffic_rickshaw_green.glb":Math.PI,"/models/traffic/traffic_rickshaw_green.mobile.glb":Math.PI,"/models/traffic/traffic_water_tanker_real.glb":Math.PI,"/models/traffic/traffic_water_tanker_real.mobile.glb":Math.PI,"/models/traffic/traffic_water_tanker.glb":Math.PI,"/models/traffic/traffic_bolan_loader.glb":Math.PI,"/models/traffic/traffic_w11_bus.glb":Math.PI},mh={"canal-run":{palm:ve("/models/env/lahore/canal_tree.glb"),barrier:ve("/models/env/lahore/canal_barrier.glb")},"liberty-loop":{billboard:ve("/models/env/lahore/liberty_billboard.glb"),cellTower:ve("/models/env/lahore/cell_tower.glb")},"ring-road-blast":{dhaba:ve("/models/env/lahore/ring_dhaba.glb"),sign:ve("/models/env/lahore/ring_road_sign.glb"),jerseyWall:ve("/models/env/lahore/jersey_wall.glb")},"mall-road-drift":{towerA:ve("/models/env/lahore/glass_tower_a.glb"),towerB:ve("/models/env/lahore/glass_tower_b.glb")},"old-city-chase":{facade:ve("/models/env/lahore/colonial_facade.glb"),chaiCart:ve("/models/env/lahore/chai_cart.glb"),biryaniCart:ve("/models/env/lahore/biryani_cart.glb"),signboard:ve("/models/env/lahore/shop_signboard.glb"),oldGate:ve("/models/env/lahore/old_gate.glb")}},Fa={low:[ve("/models/env/city/building-a.glb"),ve("/models/env/city/building-c.glb"),ve("/models/env/city/building-e.glb"),ve("/models/env/city/building-h.glb"),ve("/models/env/city/low-detail-building-wide-b.glb")],high:[ve("/models/env/city/building-j.glb"),ve("/models/env/city/building-skyscraper-c.glb"),ve("/models/env/city/building-skyscraper-d.glb")]};function sx(s,e="",t=""){return e==="traffic"&&Vs.includes(t)?Math.PI:ix[Nv(s)]??Math.PI}function rx(s){const e=String((s==null?void 0:s.message)||s||"").toLowerCase();return e.includes("publisher misconfiguration")||e.includes("no form(s) configured")||e.includes("failed to read publisher")}function gh(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`n4sl-${Date.now()}-${Math.random().toString(16).slice(2)}`}const _h=[{key:"engine",label:"Engine",baseCost:140,stepCost:110},{key:"handling",label:"Handling",baseCost:120,stepCost:90},{key:"tank",label:"Fuel Tank",baseCost:110,stepCost:90},{key:"nitro",label:"Nitro",baseCost:130,stepCost:100},{key:"armor",label:"Armor",baseCost:125,stepCost:95}],Oa=[{key:"canal-run",name:"Canal Run",zone:"Canal Bank",difficulty:"Starter",vibe:"Golden hour boulevard",accent:"#34d399",sky:10146303,fog:10146303,ground:8956238,fogNear:86,fogFar:290,sunPosition:[-38,30,-140],route:"M 18 96 C 34 72, 46 62, 62 54 S 94 42, 108 26",turns:[{start:.18,end:.34,shift:-2.6},{start:.42,end:.6,shift:1.8}]},{key:"liberty-loop",name:"Liberty Loop",zone:"Gulberg",difficulty:"Sprint",vibe:"Dense neon traffic",accent:"#f59e0b",sky:11130623,fog:11130623,ground:9613145,fogNear:78,fogFar:250,sunPosition:[-30,24,-130],route:"M 18 98 C 28 74, 42 62, 54 62 C 72 62, 82 72, 92 58 C 102 44, 104 36, 108 20",turns:[{start:.14,end:.28,shift:3.2},{start:.34,end:.52,shift:-3.8},{start:.62,end:.82,shift:2.4}]},{key:"ring-road-blast",name:"Ring Road Blast",zone:"Outer Ring",difficulty:"Fast",vibe:"Wide high-speed arc",accent:"#60a5fa",sky:9356799,fog:9356799,ground:8365391,fogNear:92,fogFar:310,sunPosition:[-42,32,-150],route:"M 18 100 C 42 84, 58 78, 70 62 S 92 34, 108 18",turns:[{start:.2,end:.38,shift:4.2},{start:.48,end:.72,shift:-2.2}]},{key:"mall-road-drift",name:"Mall Road Drift",zone:"Central Lahore",difficulty:"Technical",vibe:"Tight city sweepers",accent:"#fb7185",sky:10472447,fog:10472447,ground:8693073,fogNear:72,fogFar:240,sunPosition:[-24,22,-120],route:"M 18 100 C 30 82, 42 74, 54 62 C 66 50, 76 54, 88 40 C 98 28, 102 26, 108 18",turns:[{start:.16,end:.28,shift:-2.8},{start:.34,end:.5,shift:2.6},{start:.58,end:.76,shift:-4.4}]},{key:"old-city-chase",name:"Old City Chase",zone:"Inner Streets",difficulty:"Dense",vibe:"Chaotic historic maze",accent:"#f97316",sky:10867711,fog:10867711,ground:9480538,fogNear:68,fogFar:226,sunPosition:[-22,20,-115],route:"M 18 98 C 26 90, 32 84, 40 78 C 52 68, 60 62, 64 50 C 68 38, 82 38, 90 28 C 98 18, 100 20, 108 16",turns:[{start:.1,end:.24,shift:2.1},{start:.28,end:.44,shift:-3.2},{start:.5,end:.66,shift:3.8},{start:.72,end:.9,shift:-2.6}]},{key:"airport-road-dash",name:"Airport Road Dash",zone:"Airport Road",difficulty:"High Speed",vibe:"Long express sweep with sudden slow traffic",accent:"#38bdf8",sky:9554431,fog:9554431,ground:8628314,fogNear:86,fogFar:300,sunPosition:[-34,25,-145],route:"M 18 100 C 34 84, 42 76, 58 66 C 74 54, 88 46, 108 18",turns:[{start:.18,end:.34,shift:2.8},{start:.54,end:.72,shift:-2.4}]},{key:"fortress-sprint",name:"Fortress Sprint",zone:"Fortress",difficulty:"Aggressive",vibe:"Crowded commercial lanes and hard merges",accent:"#a78bfa",sky:10932991,fog:10932991,ground:9153366,fogNear:70,fogFar:238,sunPosition:[-28,22,-125],route:"M 18 98 C 32 86, 30 70, 48 62 C 64 54, 64 40, 82 34 S 100 24, 108 16",turns:[{start:.12,end:.28,shift:-3.6},{start:.36,end:.5,shift:3.2},{start:.62,end:.82,shift:-2.8}]},{key:"ravi-bridge-run",name:"Ravi Bridge Run",zone:"Ravi Bridge",difficulty:"Boss",vibe:"Bridge approach with police air support",accent:"#22c55e",sky:8634367,fog:8634367,ground:7313233,fogNear:88,fogFar:320,sunPosition:[-44,28,-155],route:"M 18 100 C 40 92, 58 82, 64 64 C 70 44, 86 32, 108 18",turns:[{start:.2,end:.4,shift:4.8},{start:.48,end:.7,shift:-3.4}]}],_t=[{key:"hatchback-small",label:"Small Hatchback",body:14212579,roof:1054759,glow:16498468,trim:1120295,headlight:16708551,taillight:16557477,topSpeed:160,accel:42,grip:1.08,fuelDrain:.72,profile:{width:2.85,length:5.05,height:1.22,cabinWidth:2.18,cabinLength:2.36,cabinHeight:1.15}},{key:"hatchback",label:"Hatchback",body:15987958,roof:1450549,glow:3462041,trim:1450549,headlight:15398655,taillight:16557477,topSpeed:172,accel:48,grip:1.12,fuelDrain:.76,profile:{width:2.95,length:5.35,height:1.18,cabinWidth:2.28,cabinLength:2.55,cabinHeight:1.1}},{key:"sedan-basic",label:"Compact Sedan",body:13972266,roof:1450549,glow:16096779,trim:1582392,headlight:15398655,taillight:16557477,topSpeed:186,accel:58,grip:1.06,fuelDrain:.84,profile:{width:3.25,length:6.05,height:1.04,cabinWidth:2.18,cabinLength:2.92,cabinHeight:.9}},{key:"sedan-sport",label:"Sport Sedan",body:13056815,roof:1054759,glow:6333946,trim:724760,headlight:14677247,taillight:16478597,topSpeed:198,accel:68,grip:1.1,fuelDrain:.9,profile:{width:3.48,length:6.58,height:.98,cabinWidth:2.26,cabinLength:3.34,cabinHeight:.84,hoodLength:1.72,rearLength:1.5,cabinOffset:-.18,roofBias:.1,wheelRadius:.6,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"suv",label:"SUV",body:14477815,roof:2042167,glow:2278750,trim:2042167,headlight:15398655,taillight:16557477,topSpeed:190,accel:54,grip:.98,fuelDrain:.98,profile:{width:3.45,length:6.5,height:1.42,cabinWidth:2.6,cabinLength:3.2,cabinHeight:1.28,hoodLength:1.45,rearLength:1.4,cabinOffset:-.1,wheelRadius:.68,wheelInset:.45}},{key:"prado",label:"Prado 4x4",body:15857145,roof:1120295,glow:16096779,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:196,accel:52,grip:1,fuelDrain:1.04,profile:{width:3.6,length:6.8,height:1.5,cabinWidth:2.72,cabinLength:3.45,cabinHeight:1.34,hoodLength:1.5,rearLength:1.48,cabinOffset:-.06,wheelRadius:.72,wheelInset:.45}},{key:"truck",label:"Heavy Truck",body:2450411,roof:988970,glow:16498468,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:175,accel:38,grip:.92,fuelDrain:1.1,profile:{width:4.25,length:9.4,height:1.8,cabinWidth:2.8,cabinLength:2.7,cabinHeight:1.45,hoodLength:1.05,rearLength:3.8,cabinOffset:1.5,wheelRadius:.82,wheelInset:.44}},{key:"sports",label:"Sports Car",body:15680580,roof:329485,glow:16347926,trim:329485,headlight:14742270,taillight:16478597,topSpeed:228,accel:92,grip:1.16,fuelDrain:1.02,profile:{width:3.5,length:6.1,height:.84,cabinWidth:2.1,cabinLength:2.45,cabinHeight:.68,hoodLength:2,rearLength:1.35,cabinOffset:-.15,roofBias:.18,wheelRadius:.64,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"supercar",label:"Luxury Supercar",body:16096779,roof:132631,glow:16478597,trim:132631,headlight:14742270,taillight:16478597,topSpeed:248,accel:108,grip:1.22,fuelDrain:1.08,profile:{width:3.62,length:6.25,height:.78,cabinWidth:2.04,cabinLength:2.3,cabinHeight:.62,hoodLength:2.08,rearLength:1.42,cabinOffset:-.2,roofBias:.22,wheelRadius:.66,wheelInset:.47,splitter:!0,spoiler:!0}}],qn=[{key:"premium-italian-v12",label:"Italian V12",badge:"Top Speed",badgeTone:"gold",subtitle:"V12 top-speed specialist",trait:"Longest legs on Ring Road and Airport Road straights.",role:"Speed king",productId:"premium_italian_v12",body:16436245,roof:1120295,glow:16347926,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:326,accel:124,grip:1.22,fuelDrain:1.02,premium:!0,profile:{width:3.55,length:6.65,height:.92,cabinWidth:2.24,cabinLength:3.02,cabinHeight:.76,hoodLength:1.9,rearLength:1.2,cabinOffset:-.12,splitter:!0,spoiler:!0}},{key:"premium-red-exotic",label:"Red Exotic",badge:"Launch",badgeTone:"red",subtitle:"Mid-engine launch weapon",trait:"Hardest launch for police race starts and quick traffic gaps.",role:"Acceleration specialist",productId:"premium_red_exotic",body:15680580,roof:988970,glow:16007006,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:308,accel:146,grip:1.23,fuelDrain:.98,premium:!0,profile:{width:3.58,length:6.58,height:.9,cabinWidth:2.18,cabinLength:2.88,cabinHeight:.74,hoodLength:1.72,rearLength:1.34,cabinOffset:-.18,splitter:!0,spoiler:!0}},{key:"premium-hyper-gt",label:"Hyper GT",badge:"Grip GT",badgeTone:"blue",subtitle:"All-round grip flagship",trait:"Most stable premium car for boss routes, corner exits, and long survival runs.",role:"Balanced grip leader",productId:"premium_hyper_gt",body:6333946,roof:725536,glow:2282478,trim:988970,headlight:15398655,taillight:16557477,topSpeed:318,accel:136,grip:1.36,fuelDrain:1,premium:!0,profile:{width:3.62,length:6.82,height:.88,cabinWidth:2.16,cabinLength:2.96,cabinHeight:.72,hoodLength:1.84,rearLength:1.36,cabinOffset:-.08,splitter:!0,spoiler:!0}}],Xr=[{key:"ad-free",label:"Ad-Free Upgrade",badge:"Upgrade",subtitle:"Remove banner and interstitial ads",productId:"ad_free",kind:"ad_free"},{key:"credits-1000",label:"1000 Credits Pack",badge:"Booster",subtitle:"Instant garage credits bonus",productId:"credits_1000",kind:"credits",credits:1e3},{key:"credits-5000",label:"5000 Credits Pack",badge:"Best Value",subtitle:"Large one-time credits bonus",productId:"credits_5000",kind:"credits",credits:5e3}],ax=[{label:"Electric AWD",note:"Future instant-torque premium class"},{label:"Track Special",note:"Future corner-focused premium class"}],ka={topSpeed:Math.max(...qn.map(s=>s.topSpeed)),accel:Math.max(...qn.map(s=>s.accel)),grip:Math.max(...qn.map(s=>s.grip))};function vh(s){const e=[{label:"Top",value:Math.round(s.topSpeed),suffix:"",max:ka.topSpeed},{label:"Accel",value:Math.round(s.accel),suffix:"",max:ka.accel},{label:"Grip",value:s.grip.toFixed(2),suffix:"",max:ka.grip}];return`
    <div class="premium-stat-grid" aria-label="${s.label} premium stats">
      ${e.map(t=>{const n=Number(t.value),i=Math.max(14,Math.min(100,Math.round(n/t.max*100)));return`
          <div class="premium-stat-card">
            <span>${t.label}</span>
            <strong>${t.value}${t.suffix}</strong>
            <i style="width:${i}%"></i>
          </div>
        `}).join("")}
    </div>
  `}function Ba(s){return`#${Number(s||16777215).toString(16).padStart(6,"0")}`}function ox(s){return`
    <div class="premium-preview" aria-hidden="true">
      <span class="premium-preview-road"></span>
      <span
        class="premium-preview-car"
        style="--car-body:${Ba(s.body)};--car-roof:${Ba(s.roof)};--car-glow:${Ba(s.glow)}"
      >
        <i></i>
      </span>
    </div>
  `}const lx=[..._t,...qn],cx=Object.fromEntries(lx.map(s=>[s.key,s])),Rr=Object.fromEntries(qn.map(s=>[s.key,s])),Sd=Object.fromEntries(Xr.map(s=>[s.key,s])),hx=Object.fromEntries(Xr.map(s=>[s.productId,s])),Sr=[...qn.map(s=>s.productId),...Xr.map(s=>s.productId)],zo={"hatchback-small":0,hatchback:1,"sedan-basic":2,"sedan-sport":3,suv:4,prado:5,truck:6,sports:7,supercar:8},xh=["clean-finish","fuel-save","near-miss","score-target"];function dx(s){return cx[s]??_t[0]}function ux(s){const e=ch[s%ch.length];return Oa.find(t=>t.key===e)||Oa[s%Oa.length]}function yh(s,e=0){const t=ye.clamp(e,0,100),n=18+90*(t/100),i=100-78*(t/100);return`
    <svg viewBox="0 0 126 126" class="track-svg" aria-hidden="true">
      <defs>
        <linearGradient id="track-grad-${s.key}" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${s.accent}" stop-opacity="0.65" />
          <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="106" height="106" rx="22" fill="rgba(7,17,31,0.54)" />
      <path d="${s.route}" fill="none" stroke="rgba(148,163,184,0.35)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
      <path d="${s.route}" fill="none" stroke="url(#track-grad-${s.key})" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="18" cy="96" r="7" fill="#0f172a" stroke="#f8fafc" stroke-width="3" />
      <circle cx="108" cy="18" r="7" fill="${s.accent}" stroke="#fff7ed" stroke-width="3" />
      <circle cx="${n}" cy="${i}" r="5.2" fill="#fef3c7" stroke="${s.accent}" stroke-width="2.4" />
    </svg>
  `}function fx(s=1,e={}){return`
    <div class="career-map-grid">
      ${vd.map((t,n)=>{const i=n+1,r=s>=i,a=s===i,o=e[`stage_${i}`]||0;return`
          <div class="district-node${r?" unlocked":" locked"}${a?" active":""}">
            <span>${t.short}</span>
            <strong>${t.label}</strong>
            <em>${r?`${"★".repeat(o)}${"☆".repeat(3-o)}`:`Stage ${i}`}</em>
          </div>
        `}).join("")}
    </div>
  `}function Sh(s,e,t=1){const n=s.attributes.position;for(let i=0;i<n.count;i+=1){const r=n.getX(i),o=n.getY(i)-120,l=e(o);n.setX(i,r*t+l)}n.needsUpdate=!0,s.computeVertexNormals()}function Mh(s,e){return s.baseCost+s.stepCost*e}function Ti(s){return{...yd,...s||{}}}function bh(s,e=yd){const t=Ti(e),n=t.engine,i=t.handling,r=t.tank,a=t.nitro,o=t.armor;return{...s,id:s.key,topSpeed:s.topSpeed+n*8,accel:s.accel+n*6,grip:s.grip+i*.035,fuelDrain:Math.max(.52,s.fuelDrain-r*.05),maxFuel:100+r*12,maxNitro:100+a*14,nitroBoost:28+a*5,maxHealth:100+o*12,damageReduction:o*.07,upgradeLevels:t}}function px(s){if(s<=0)return _t[0];if(s===1)return _t[1];if(s===2)return _t[2];if(s===3)return _t[3];if(s===4)return _t[4];if(s===5)return _t[5];if(s===6)return _t[6];const e=[_t[7],_t[8]],t=e[(s-7)%e.length],n=s-7,i=n%5,r=[15680580,16096779,9133302,440020,2278750][i];return{...t,key:`${t.key}-${s+1}`,label:n%2===0?"Expensive Sports Car":"Exotic Hyper GT",body:r,topSpeed:Math.min(t.topSpeed+n*4,320),accel:Math.min(t.accel+n*3,150),grip:Math.min(t.grip+n*.02,1.35)}}const mx=["Canal Opening Run","Liberty Sprint","Mall Road Canyon","Ring Road Convoy","Old City Heat","Airport Road Dash","Fortress Market Sprint","Ravi Bridge Finale","Canal Night Return","Ring Road Storm"];function wh(s){const e=px(s),t=ux(s),n=s+1,i=n>1&&n%3===0,r=n+1,a=Math.min(150+s*20,e.topSpeed),o=a/1.6,l=s<=2?1:0,h=Math.max((l?2.2:1.75)-s*(l?.14:.1),.58),c=s===0?999:Math.max((l?108:94)-s*(l?5:7)-(i?12:0),22),d=s===0?99:Math.max((l?2.8:2.35)-s*(l?.1:.08)-(i?.38:0),.54),u=Math.min((l?4.2:5.1)+s*.42,9.2),f=1+s*.08,g=Math.min((l?.16:.2)+s*.085,.72),_=mx[s]??`Stage ${n}`,m=`${t.name} · ${i?"Boss Race":_}`,p=xh[s%xh.length],y=140+s*55,b=80+s*35;let M;p==="clean-finish"?M={type:p,label:"Finish with at least 50% health",target:50}:p==="fuel-save"?M={type:p,label:"Finish with at least 25% fuel",target:25}:p==="near-miss"?M={type:p,label:`Score ${1+Math.floor(s/3)} near misses`,target:1+Math.floor(s/3)}:M={type:p,label:`Reach score ${1100+s*180}`,target:1100+s*180};const A=i?`Boss Race ${n}: police escalation, roadblocks, and a rival heat target. Mission: ${M.label}.`:s===0?`Stage ${n}: moderate traffic, no police pressure, and a 2 KM opening run. Mission: ${M.label}.`:`Stage ${n}: ${r} KM route with a ${a} KM/H cap. Mission: ${M.label}.`;return{id:n,name:m,stageLabel:_,track:t,lengthKm:r,length:r*1e3,speedCapKmh:a,speedCap:o,trafficBias:h,policeHeatThreshold:c,policeSpawnScale:d,fuelSpawnEvery:u,fuelUseScale:g,scoreBonus:f,mission:M,missionReward:y,bonusReward:b,isBoss:i,tip:A}}const $r={settings:"need4speedlahore.settings",progress:"need4speedlahore.progress"};function gx(){try{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1,...JSON.parse(localStorage.getItem($r.settings)||"{}")}}catch{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1}}}function Ts(s){localStorage.setItem($r.settings,JSON.stringify(s))}function _x(){try{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},selectedLiveryKey:"classic",unlockedLiveries:["classic"],lastLoginDate:"",loginStreak:0,lifetimeStageClears:0,doubledStageRewards:[],weeklyChallenge:null,localLeaderboard:[],bossClears:0,xp:0,level:1,bossTokens:0,policeChaseWins:0,policeRaceWins:0,milestoneCrates:[],onboardingSeen:!1,...JSON.parse(localStorage.getItem($r.progress)||"{}")}}catch{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},selectedLiveryKey:"classic",unlockedLiveries:["classic"],lastLoginDate:"",loginStreak:0,lifetimeStageClears:0,doubledStageRewards:[],weeklyChallenge:null,localLeaderboard:[],bossClears:0,xp:0,level:1,bossTokens:0,policeChaseWins:0,policeRaceWins:0,milestoneCrates:[],onboardingSeen:!1}}}function Ht(s){localStorage.setItem($r.progress,JSON.stringify(s))}function za(s){const e={highestStage:Math.max(1,s.highestStage||1),bestScore:Math.max(0,s.bestScore||0),totalDistance:Math.max(0,s.totalDistance||0),credits:Math.max(0,s.credits??300),ownedVehicles:Array.isArray(s.ownedVehicles)?[...s.ownedVehicles]:["hatchback-small"],purchasedPremiumCars:Array.isArray(s.purchasedPremiumCars)?[...s.purchasedPremiumCars]:[],adFreePurchased:!!s.adFreePurchased,claimedShopProducts:Array.isArray(s.claimedShopProducts)?[...s.claimedShopProducts]:[],selectedVehicleKey:s.selectedVehicleKey||"hatchback-small",upgrades:typeof s.upgrades=="object"&&s.upgrades?{...s.upgrades}:{},stageStars:typeof s.stageStars=="object"&&s.stageStars?{...s.stageStars}:{},dailyChallenge:s.dailyChallenge||null,selectedLiveryKey:s.selectedLiveryKey||"classic",unlockedLiveries:Array.isArray(s.unlockedLiveries)?[...s.unlockedLiveries]:["classic"],lastLoginDate:typeof s.lastLoginDate=="string"?s.lastLoginDate:"",loginStreak:Math.max(0,s.loginStreak||0),lifetimeStageClears:Math.max(0,s.lifetimeStageClears||0),doubledStageRewards:Array.isArray(s.doubledStageRewards)?[...s.doubledStageRewards].slice(-25):[],weeklyChallenge:s.weeklyChallenge||null,localLeaderboard:Array.isArray(s.localLeaderboard)?[...s.localLeaderboard].slice(0,10):[],bossClears:Math.max(0,s.bossClears||0),xp:Math.max(0,s.xp||0),level:Math.max(1,s.level||1),bossTokens:Math.max(0,s.bossTokens||0),policeChaseWins:Math.max(0,s.policeChaseWins||0),policeRaceWins:Math.max(0,s.policeRaceWins||0),milestoneCrates:Array.isArray(s.milestoneCrates)?[...s.milestoneCrates].slice(-30):[],onboardingSeen:!!s.onboardingSeen},t=new Set(e.ownedVehicles);e.level=Math.max(e.level,1+Math.floor(e.xp/500)),t.add("hatchback-small"),Object.entries(zo).forEach(([i,r])=>{e.highestStage-1>=r&&t.add(i)}),e.ownedVehicles=[...t],e.purchasedPremiumCars=e.purchasedPremiumCars.filter(i=>Rr[i]),e.claimedShopProducts=e.claimedShopProducts.filter(i=>Sd[i]);const n=new Set(e.unlockedLiveries);return n.add("classic"),qi.forEach(i=>{i.stage&&e.highestStage>=i.stage&&n.add(i.key),i.score&&e.bestScore>=i.score&&n.add(i.key),i.bossClears&&e.bossClears>=i.bossClears&&n.add(i.key),i.bossTokens&&e.bossTokens>=i.bossTokens&&n.add(i.key),i.level&&e.level>=i.level&&n.add(i.key),i.loginStreak&&e.loginStreak>=i.loginStreak&&n.add(i.key)}),e.unlockedLiveries=[...n].filter(i=>qi.some(r=>r.key===i)),e.unlockedLiveries.includes(e.selectedLiveryKey)||(e.selectedLiveryKey="classic"),e.ownedVehicles.forEach(i=>{e.upgrades[i]=Ti(e.upgrades[i])}),e.purchasedPremiumCars.forEach(i=>{e.upgrades[i]=Ti(e.upgrades[i])}),!t.has(e.selectedVehicleKey)&&!e.purchasedPremiumCars.includes(e.selectedVehicleKey)&&(e.selectedVehicleKey=e.ownedVehicles[e.ownedVehicles.length-1]),e}class vx{constructor(e){this.settings=e,this.ctx=null,this.musicTimer=null,this.musicStep=0,this.musicPattern=[],this.musicTracks=ex.map(t=>this.createAudio(t,{loop:!1,volume:.28})),this.sfxTracks=Object.fromEntries(Object.entries(tx).map(([t,n])=>[t,this.createAudio(n,{loop:!1,volume:.62})])),this.currentMusic=null,this.currentMusicIndex=0,this.disabledAudioSources=new Set}createAudio(e,{loop:t=!1,volume:n=.5}={}){const i=document.createElement("audio");return i.preload="none",i.src=e,i.loop=t,i.volume=n,i.addEventListener("error",()=>{this.disabledAudioSources.add(i.src)}),i}playFile(e,{restart:t=!0}={}){if(!e||this.disabledAudioSources.has(e.src)||this.settings.mute)return!1;const n=Object.values(this.sfxTracks).includes(e);if(!this.settings.sfx&&n||!this.settings.music&&this.musicTracks.includes(e))return!1;try{t&&(e.currentTime=0);const i=e.play();return i&&i.catch(()=>{this.disabledAudioSources.add(e.src)}),!0}catch{return this.disabledAudioSources.add(e.src),!1}}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}setSettings(e){this.settings=e,(e.mute||!e.music)&&this.stopMusic(),Object.values(this.sfxTracks).forEach(t=>{t.muted=e.mute||!e.sfx}),this.musicTracks.forEach(t=>{t.muted=e.mute||!e.music})}suspend(){this.stopMusic(),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}tone(e,t,n="sine",i=.04){this.settings.mute||!this.settings.sfx||this.rawTone(e,t,n,i)}rawTone(e,t,n="sine",i=.04,r=0){const a=this.ensureContext();if(!a)return;const o=a.createOscillator(),l=a.createGain();o.type=n,o.frequency.value=e,o.detune.value=r,l.gain.setValueAtTime(i,a.currentTime),l.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+t),o.connect(l),l.connect(a.destination),o.start(),o.stop(a.currentTime+t)}noise(e=.12,t=.05,n=900){if(this.settings.mute||!this.settings.sfx)return;const i=this.ensureContext();if(!i)return;const r=i.createBuffer(1,Math.floor(i.sampleRate*e),i.sampleRate),a=r.getChannelData(0);for(let c=0;c<a.length;c+=1)a[c]=(Math.random()*2-1)*(1-c/a.length);const o=i.createBufferSource();o.buffer=r;const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const h=i.createGain();h.gain.setValueAtTime(t,i.currentTime),h.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+e),o.connect(l),l.connect(h),h.connect(i.destination),o.start(),o.stop(i.currentTime+e)}playCrash(){this.playFile(this.sfxTracks.crash)||(this.rawTone(74,.22,"sawtooth",.07,-600),this.rawTone(52,.3,"square",.05,200),this.noise(.16,.06,760))}playHorn(){this.playFile(this.sfxTracks.horn)||(this.tone(420,.12,"square",.035),window.setTimeout(()=>this.tone(360,.1,"square",.028),95))}playNitroBurst(){this.playFile(this.sfxTracks.nitro)||(this.rawTone(140,.22,"sawtooth",.055,-120),this.rawTone(420,.18,"triangle",.035,80),this.noise(.22,.045,1800))}playPoliceSiren(){this.playFile(this.sfxTracks.siren)||(this.tone(760,.11,"square",.035),window.setTimeout(()=>this.tone(520,.12,"square",.03),120))}playDrift(){this.playFile(this.sfxTracks.drift)||(this.noise(.12,.025,2400),this.rawTone(180,.1,"sawtooth",.018,-300))}playMusic(e=!1){if(this.stopMusic(),this.settings.mute||!this.settings.music||!this.musicTracks.length)return;e&&(this.currentMusicIndex=Math.floor(Math.random()*this.musicTracks.length));const t=this.musicTracks[this.currentMusicIndex%this.musicTracks.length];this.currentMusic=t,t.onended=()=>{this.currentMusicIndex=(this.currentMusicIndex+1)%this.musicTracks.length,this.playMusic()},this.playFile(t,{restart:!0})}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null),this.currentMusic&&(this.currentMusic.pause(),this.currentMusic.currentTime=0,this.currentMusic=null)}}document.querySelector("#app").innerHTML=`
  <div class="shell">
    <div class="layout layout-game-only">
        <main class="game-frame">
          <div id="game-view"></div>
          <div class="impact-flash hidden" id="impact-flash" aria-hidden="true"></div>
          <div class="speed-vignette" id="speed-vignette" aria-hidden="true"></div>
          <div class="combo-display hidden" id="combo-display" aria-live="polite"></div>
          <div class="daily-badge hidden" id="daily-badge" aria-live="polite"></div>
          <div class="race-banner hidden" id="race-banner">
            <p class="race-banner-kicker" id="race-banner-kicker">Featured Route</p>
            <strong id="race-banner-title">Canal Run</strong>
            <span id="race-banner-subtitle">Golden hour boulevard</span>
          </div>
          <div class="top-actions">
          <button id="pause-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Pause">
            <span class="icon-glyph">II</span>
            <span class="icon-label">Pause</span>
          </button>
          <button id="settings-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Settings">
            <span class="icon-glyph">[]</span>
            <span class="icon-label">Settings</span>
          </button>
          </div>
          <div class="hud">
            <div class="hud-top">
            <div class="stat-block">
              <span>Stage</span>
              <strong id="stage-value">Stage 1</strong>
            </div>
            <div class="stat-block">
              <span>Speed</span>
              <strong id="speed-value">0 KM/H</strong>
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
              <span>Pursuit</span>
              <strong id="pursuit-value">Level 0</strong>
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
            <div class="tip" id="tip-text">Press Space to start your first Lahore run.</div>
          </div>
          <div class="touch-controls" id="touch-controls">
            <div class="touch-cluster touch-left">
              <button type="button" class="touch-btn pedal brake-pedal" data-touch="brake" aria-label="Brake">
                <span class="pedal-icon">[]</span>
                <span class="pedal-label">Brake</span>
              </button>
            </div>
            <div class="touch-cluster touch-right">
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
              <span>Sound Effects</span>
              <input id="sfx-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>Tilt to Steer</span>
              <input id="tilt-toggle" type="checkbox" />
            </label>
            <div class="settings-meta">
              <p id="save-stage-text">Highest stage: Stage 1</p>
              <p id="save-score-text">Best score: 0</p>
              <p id="credits-text">Credits: 300 CR</p>
              <p id="ad-status-text">Ads: initializing...</p>
              <p id="progression-text">Level 1 | 0 XP | 0 boss tokens</p>
              <p>Touch: hold left/right side of the road to steer.</p>
            </div>
            <div class="garage-panel">
              <div class="garage-tabs" id="garage-tabs">
                <button type="button" class="garage-tab is-active" data-settings-tab="garage">Garage</button>
                <button type="button" class="garage-tab" data-settings-tab="store">Store</button>
                <button type="button" class="garage-tab" data-settings-tab="upgrades">Upgrades</button>
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
            </div>
            <div class="settings-actions">
              <button id="share-score-button" class="icon-button" type="button">Share Score Card</button>
              <a class="text-link" href="${ve("/privacy.html")}" target="_blank" rel="noreferrer">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div class="overlay" id="overlay">
          <img class="overlay-art" src="${Iv}" alt="" />
          <div class="overlay-card">
            <p class="overlay-kicker" id="overlay-kicker">Stylized 3D Chase Racer</p>
            <h2 id="overlay-title">Need 4 Speed Lahore</h2>
            <p id="overlay-body">Canal Road to Ring Road - survive Lahore traffic. Weave past rickshaws, buses, SUVs, and police interceptors while unlocking stronger cars stage by stage. Touch the left/right side of the road to steer, or enable tilt steering in Settings.</p>
            <div class="onboarding-guide hidden" id="onboarding-guide">
              <strong>Drive Basics</strong>
              <span>Steer: hold left or right side of the road on mobile, or use A/D and arrow keys.</span>
              <span>Brake: tap Brake on mobile, or press S / Down Arrow.</span>
              <span>Nitro: tap Nitro on mobile, or hold Shift when the nitro meter is charged.</span>
            </div>
            <div class="overlay-track">
              <div class="overlay-track-copy">
                <span>Featured Route</span>
                <strong id="overlay-track-name">Canal Run</strong>
                <em id="overlay-track-zone">Canal Bank · Starter</em>
              </div>
              <div class="overlay-track-map" id="overlay-track-map"></div>
            </div>
            <div class="overlay-career-map" id="overlay-career-map"></div>
            <button id="overlay-button" type="button">Start Run</button>
            <div class="overlay-mode-actions">
              <button id="police-chase-button" type="button">Police Chase</button>
              <button id="police-race-button" type="button">Police Race</button>
            </div>
            <button id="overlay-share-button" type="button" class="hidden revive-btn">Copy Score Card</button>
            <button id="double-reward-button" type="button" class="hidden revive-btn">Watch Ad to Double Credits</button>
            <button id="revive-button" type="button" class="hidden revive-btn">Watch Ad to Revive</button>
          </div>
        </div>
      </main>
    </div>
  </div>
`;const P={speed:document.querySelector("#speed-value"),score:document.querySelector("#score-value"),heat:document.querySelector("#heat-value"),pursuit:document.querySelector("#pursuit-value"),limit:document.querySelector("#limit-value"),distanceRemaining:document.querySelector("#distance-remaining-value"),stage:document.querySelector("#stage-value"),trackName:document.querySelector("#track-name"),trackZone:document.querySelector("#track-zone"),trackMap:document.querySelector("#track-map"),healthBar:document.querySelector("#health-bar"),fuelBar:document.querySelector("#fuel-bar"),nitroBar:document.querySelector("#nitro-bar"),progressBar:document.querySelector("#progress-bar"),driftBar:document.querySelector("#drift-bar"),healthText:document.querySelector("#health-text"),fuelText:document.querySelector("#fuel-text"),nitroText:document.querySelector("#nitro-text"),progressText:document.querySelector("#progress-text"),driftText:document.querySelector("#drift-text"),tip:document.querySelector("#tip-text"),overlay:document.querySelector("#overlay"),overlayKicker:document.querySelector("#overlay-kicker"),overlayTitle:document.querySelector("#overlay-title"),overlayBody:document.querySelector("#overlay-body"),onboardingGuide:document.querySelector("#onboarding-guide"),overlayTrackName:document.querySelector("#overlay-track-name"),overlayTrackZone:document.querySelector("#overlay-track-zone"),overlayTrackMap:document.querySelector("#overlay-track-map"),overlayCareerMap:document.querySelector("#overlay-career-map"),overlayButton:document.querySelector("#overlay-button"),policeChaseButton:document.querySelector("#police-chase-button"),policeRaceButton:document.querySelector("#police-race-button"),overlayShareButton:document.querySelector("#overlay-share-button"),doubleRewardButton:document.querySelector("#double-reward-button"),raceBanner:document.querySelector("#race-banner"),raceBannerKicker:document.querySelector("#race-banner-kicker"),raceBannerTitle:document.querySelector("#race-banner-title"),raceBannerSubtitle:document.querySelector("#race-banner-subtitle"),impactFlash:document.querySelector("#impact-flash"),pauseButton:document.querySelector("#pause-button"),settingsButton:document.querySelector("#settings-button"),settingsPanel:document.querySelector("#settings-panel"),resumeButton:document.querySelector("#resume-button"),muteToggle:document.querySelector("#mute-toggle"),musicToggle:document.querySelector("#music-toggle"),sfxToggle:document.querySelector("#sfx-toggle"),tiltToggle:document.querySelector("#tilt-toggle"),saveStageText:document.querySelector("#save-stage-text"),saveScoreText:document.querySelector("#save-score-text"),creditsText:document.querySelector("#credits-text"),adStatusText:document.querySelector("#ad-status-text"),progressionText:document.querySelector("#progression-text"),garageTabs:document.querySelector("#garage-tabs"),garageCurrentText:document.querySelector("#garage-current-text"),careerMap:document.querySelector("#career-map"),garageList:document.querySelector("#garage-list"),liveryList:document.querySelector("#livery-list"),storeList:document.querySelector("#store-list"),garageUpgrades:document.querySelector("#garage-upgrades"),touchControls:document.querySelector("#touch-controls"),comboDisplay:document.querySelector("#combo-display"),speedVignette:document.querySelector("#speed-vignette"),dailyBadge:document.querySelector("#daily-badge"),reviveButton:document.querySelector("#revive-button"),shareScoreButton:document.querySelector("#share-score-button")};class xx{constructor(e){this.container=e,this.settings=gx(),this.progress=za(_x()),this.audio=new vx(this.settings),this.gltfLoader=new V_,this.modelTemplates=new Map,this.loadedVehicleModels=!1,this.propTemplates=new Map,this.loadedStageProps=!1,this.proceduralTextures={},this.lastRenderTime=performance.now(),this.scene=new Hu,this.scene.background=new Ue(10146303),this.scene.fog=new Qo(10146303,80,280),fh&&(window.__need4SpeedLahore=this),this.camera=new Kt(eh,9/16,.1,500),this.camera.position.set(0,th,nh),this.renderer=new B_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cs,this.container.appendChild(this.renderer.domElement),this.autoPausedFromBackground=!1,this.settingsTab="garage",this.billingState={available:!1,loading:!1,products:{},ownedProductIds:[],pendingKind:"",pendingProductId:"",lastMessage:""},this.adState={initialized:!1,canRequestAds:!1,bannerVisible:!1,bannerLoaded:!1,interstitialReady:!1,interstitialLoading:!1,rewardedReady:!1,rewardedLoading:!1,rewardedPurpose:"",consentStatus:"unknown",lastError:""},this.keys=new Set,this.touchInput={steerZone:0,brake:!1,nitro:!1},this.motionSteer=0,this.steerPointerId=null,this.selectedCar=this.getSelectedGarageVehicle(),this.state=this.initialState(),this.progress.highestStage>1&&(this.state.stageIndex=this.progress.highestStage-1),this.traffic=[],this.police=[],this.roadblocks=[],this.fuelCans=[],this.healers=[],this.roadMarkers=[],this.roadside=[],this.scenicRoadside=[],this.buildings=[],this.lightPosts=[],this.roadGlows=[],this.finishLine=null,this.nearMisses=new WeakSet,this.cameraBaseFov=eh,this.lastFrameAt=performance.now(),this.frameFallback=null,this.forceRunningUntil=0,this.pendingDoubleReward=null,this.pendingRunMode=Qe.career.key,this.premiumRevealVehicleKey="",this.loginRewardMessage="",this.backgroundModelsStarted=!1,this.trafficModelsReady=!1,this.trafficModelLoadPromise=null,this.failedModelPaths=new Set,this.playerModelLoadPromise=null,this.playerModelLoadPath="",this.setupScene(),this.bindEvents(),this.resize(),this.initAds(),this.initBilling(),this.applyTrackTheme(),this.updateOverlay("Stylized 3D Chase Racer","Need 4 Speed Lahore",`Resume point: Stage ${this.state.stageIndex+1} with a ${this.selectedCar.label}. ${this.currentStage.tip} Press Space or tap Start Run.`,this.currentStage.track),this.syncSettingsUi(),this.loginRewardMessage=this.claimDailyLoginReward(),this.refreshProgressUi(),this.renderGarage(),this.updateHud(),this.loginRewardMessage&&(P.tip.textContent=this.loginRewardMessage),this.updateDailyChallengeUi(),this.startFrameFallback(),this.render(),this.loadCurrentPlayerModel().finally(()=>{this.ensureTrafficModelsLoaded().catch(t=>console.warn("Traffic model preload failed",t)),window.setTimeout(()=>this.startBackgroundModelLoading(),400)})}initialState(){return{running:!1,gameOver:!1,gameMode:Qe.career.key,paused:!1,stageCompleted:!1,countdown:0,countdownStarted:!1,stageIndex:0,speed:0,targetSpeed:0,maxSpeed:this.selectedCar.topSpeed,maxHealth:this.selectedCar.maxHealth??100,maxFuel:this.selectedCar.maxFuel??100,maxNitro:this.selectedCar.maxNitro??100,health:this.selectedCar.maxHealth??100,fuel:this.selectedCar.maxFuel??100,nitro:this.selectedCar.maxNitro??100,heat:0,score:0,distance:0,trafficSpawn:0,policeSpawn:0,roadblockSpawn:0,spikeSpawn:0,fuelSpawn:0,healerSpawn:0,stageProgress:0,steerVisual:0,bodyRoll:0,bodyPitch:0,cameraShake:0,roadDrift:0,bannerTimer:0,nearMissCount:0,cleanRun:!0,stageTime:0,combo:0,comboTimer:0,comboMultiplier:1,hasRevived:!1,pursuitLevel:0,driftScore:0,driftTimer:0,slowMoTimer:0,hornTimer:0,sirenTimer:0,nitroWasActive:!1,cinematicTimer:0,engineTimer:0,rivalGap:82,rivalOvertaken:!1,rivalCatchupShown:!1,policeRaceGap:72,policeRaceOvertaken:!1,policeRaceCatchupShown:!1}}get currentStage(){return wh(this.state.stageIndex)}getTrackProgress(e=this.state.stageProgress){return ye.clamp(e/this.currentStage.length,0,1)}getRoadCenterOffsetAtProgress(e){const t=this.currentStage.track.turns||[];let n=0;return t.forEach(i=>{const r=ye.smoothstep(e,i.start,i.end),a=e>i.end?1-ye.smoothstep(e,i.end,Math.min(1,i.end+.14)):1;n+=i.shift*r*a}),n}getStageMetersAtZ(e){var i,r;const n=(((r=(i=this.player)==null?void 0:i.position)==null?void 0:r.z)??10)-e;return this.state.stageProgress+Math.max(0,n/ph)}getRoadCenterOffsetAtZ(e){return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.getStageMetersAtZ(e)))}getLaneWorldX(e,t){return Gn[e]+this.getRoadCenterOffsetAtZ(t)}getSelectedGarageVehicle(){const e=dx(this.progress.selectedVehicleKey);return bh(e,this.progress.upgrades[e.key])}isVehicleOwned(e){return this.progress.ownedVehicles.includes(e)||this.progress.purchasedPremiumCars.includes(e)}getPremiumVehicleByProductId(e){return qn.find(t=>t.productId===e)??null}getShopProductByProductId(e){return hx[e]??null}parseBillingProductIds(e){const t=new Set,n=i=>{var r;if(i){if(typeof i=="string"){const a=i.trim();if(Sr.includes(a)){t.add(a);return}if((r=a.match(/[a-z0-9_]+/g))==null||r.forEach(o=>{Sr.includes(o)&&t.add(o)}),a.startsWith("{")&&a.endsWith("}")||a.startsWith("[")&&a.endsWith("]"))try{n(JSON.parse(a))}catch{}return}if(Array.isArray(i)){i.forEach(n);return}typeof i=="object"&&(["productId","productID","id"].forEach(a=>{Sr.includes(i[a])&&t.add(i[a])}),["products","productIds","productIDs"].forEach(a=>{Array.isArray(i[a])&&i[a].forEach(n)}),["transaction","purchase","data","receipt"].forEach(a=>n(i[a])))}};return n(e),[...t]}applyBillingProductIds(e=[],{fallbackProductId:t="",fromRestore:n=!1}={}){const i=e.length?e:t?[t]:[],r=[];return i.forEach(a=>{if(!a)return;this.billingState.ownedProductIds.includes(a)||this.billingState.ownedProductIds.push(a);const o=this.getPremiumVehicleByProductId(a);if(o){this.unlockPremiumVehicle(o.key,{reveal:!0}),r.push(o.label);return}const l=this.applyShopPurchaseByProductId(a,{fromRestore:n});(l!=null&&l.granted||l!=null&&l.message)&&r.push(l.message)}),r}getBillingStatusMessage(){const e=this.billingState.lastMessage||"",t=e.trim();return t?t.startsWith("{")||t.startsWith("[")?"Purchase received. Tap Restore Purchases if it is not unlocked yet.":`Billing: ${e}`:"Premium purchases unlock permanently."}restoreOwnedPremiumVehicles(e=[]){const t=[];return e.forEach(n=>{const i=this.getPremiumVehicleByProductId(n);i&&(this.progress.purchasedPremiumCars.includes(i.key)||(this.progress.purchasedPremiumCars.push(i.key),t.push(i.key)))}),t.length&&(Ht(this.progress),this.refreshProgressUi()),t}applyShopPurchaseByProductId(e,{fromRestore:t=!1}={}){const n=this.getShopProductByProductId(e);return n?n.kind==="ad_free"?(this.progress.adFreePurchased=!0,Ht(this.progress),this.refreshProgressUi(),this.hideTopBanner(),{product:n,granted:!0,message:"Ad-Free Upgrade unlocked."}):n.kind==="credits"?this.progress.claimedShopProducts.includes(n.key)?{product:n,granted:!1,message:t?"Credits pack already claimed.":"Credits already added."}:(this.progress.claimedShopProducts.push(n.key),this.progress.credits+=n.credits,Ht(this.progress),this.refreshProgressUi(),{product:n,granted:!0,message:`${n.credits} credits added.`}):null:null}async restorePremiumPurchases(){if(!Mt){P.tip.textContent="Restore is available in the Android app build.";return}if(!this.billingState.available||typeof oi.getOwnedProducts!="function"){P.tip.textContent=this.billingState.loading?"Loading Play Billing...":"Restore is unavailable right now.";return}try{this.billingState.loading=!0,this.renderGarage();const{products:e}=await oi.getOwnedProducts(),t=[];e.forEach(a=>{t.push(...this.parseBillingProductIds(a))}),this.billingState.ownedProductIds=[...new Set(t)];const n=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),i=this.billingState.ownedProductIds.map(a=>this.applyShopPurchaseByProductId(a,{fromRestore:!0})).filter(Boolean).filter(a=>a.granted),r=n.length+i.length;this.billingState.lastMessage=r?`Restored ${r} purchase${r>1?"s":""}`:"No premium purchases were found to restore",P.tip.textContent=this.billingState.lastMessage}catch(e){this.billingState.lastMessage=(e==null?void 0:e.message)||"Restore failed",P.tip.textContent=this.billingState.lastMessage}finally{this.billingState.loading=!1,this.renderGarage()}}async initBilling(){if(!Mt){this.billingState.lastMessage="Windows edition",this.renderGarage();return}try{this.billingState.loading=!0,await oi.addListener("transaction",t=>{const n=this.billingState.pendingProductId,i=this.parseBillingProductIds(t),r=this.applyBillingProductIds(i,{fallbackProductId:n});this.billingState.pendingKind="",this.billingState.pendingProductId="",r.length?(this.billingState.lastMessage=`${r.join(", ")} unlocked`,P.tip.textContent=this.billingState.lastMessage):t.type==="error"?(this.billingState.lastMessage=t.message||"Purchase failed",P.tip.textContent=t.message||"Purchase failed."):this.billingState.lastMessage=t.message||"Billing updated",this.renderGarage()});const{products:e}=await oi.getProducts({productIds:Sr});if(this.billingState.products=Object.fromEntries(e.map(t=>[t.id,t])),typeof oi.getOwnedProducts=="function")try{const{products:t}=await oi.getOwnedProducts(),n=[];t.forEach(a=>{n.push(...this.parseBillingProductIds(a))}),this.billingState.ownedProductIds=[...new Set(n)];const i=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),r=this.billingState.ownedProductIds.map(a=>this.applyShopPurchaseByProductId(a,{fromRestore:!0})).filter(Boolean).filter(a=>a.granted);i.length||r.length?this.billingState.lastMessage=`Restored ${i.length+r.length} purchase${i.length+r.length>1?"s":""}`:this.billingState.lastMessage="Play Billing ready"}catch(t){this.billingState.lastMessage="Play Billing ready",console.warn("Owned product restore failed",t)}else this.billingState.lastMessage="Play Billing ready";this.billingState.available=!0}catch(e){this.billingState.available=!1,this.billingState.lastMessage=(e==null?void 0:e.message)||"Billing unavailable",console.warn("Billing init failed",e)}finally{this.billingState.loading=!1,this.renderGarage()}}unlockPremiumVehicle(e,{reveal:t=!1}={}){if(!Rr[e])return;this.progress.purchasedPremiumCars.includes(e)||this.progress.purchasedPremiumCars.push(e),this.progress.selectedVehicleKey=e,t&&(this.premiumRevealVehicleKey=e),this.selectedCar=this.getSelectedGarageVehicle(),this.progress.upgrades[e]=Ti(this.progress.upgrades[e]),Ht(this.progress);const n=this.getModelPath("player",this.selectedCar.key);!n||this.modelTemplates.has(n)||this.failedModelPaths.has(n)?this.refreshVehicleVisuals():this.loadCurrentPlayerModel(),this.refreshProgressUi(),this.renderGarage()}async loadVehicleModels(){const e=new Set,t=this.getModelPath("player",this.selectedCar.key);t&&e.add(t),Xi.police&&e.add(Xi.police);const n=new Set;sh.map(i=>Xi.traffic[i]).forEach(i=>{i&&!e.has(i)&&n.add(i)}),await this.loadModelBatch([...e],!0),window.setTimeout(()=>{this.loadModelBatch([...n],!1).catch(i=>{console.warn("Traffic model loading failed",i)})},1200)}getTrafficModelPaths(){const e=new Set;return sh.map(t=>Xi.traffic[t]).forEach(t=>{t&&e.add(t)}),[...e]}async ensureTrafficModelsLoaded(){const e=this.getTrafficModelPaths().filter(t=>!this.modelTemplates.has(t)&&!this.failedModelPaths.has(t));if(!e.length){this.trafficModelsReady=!0;return}return this.trafficModelLoadPromise?this.trafficModelLoadPromise:(this.trafficModelLoadPromise=(async()=>{await this.loadModelBatch(e,!1,{allowDuringRun:!0}),this.trafficModelsReady=this.getTrafficModelPaths().some(t=>this.modelTemplates.has(t)),this.refreshTrafficPool()})().finally(()=>{this.trafficModelLoadPromise=null}),this.trafficModelLoadPromise)}async loadCurrentPlayerModel(){const e=this.getModelPath("player",this.selectedCar.key);if(!(!e||this.modelTemplates.has(e)||this.failedModelPaths.has(e)))return this.playerModelLoadPromise&&this.playerModelLoadPath===e?this.playerModelLoadPromise:(this.playerModelLoadPromise&&this.playerModelLoadPath!==e&&(this.playerModelLoadPromise=null),this.playerModelLoadPath=e,this.playerModelLoadPromise=(async()=>{await this.waitForIdle();try{const t=await this.loadGlb(e);this.modelTemplates.set(e,t.scene),this.loadedVehicleModels=!0,this.refreshVehicleVisuals()}catch(t){this.failedModelPaths.add(e),console.warn(`Failed to load model: ${e}`,t)}finally{this.playerModelLoadPromise=null,this.playerModelLoadPath=""}})(),this.playerModelLoadPromise)}startBackgroundModelLoading(){this.backgroundModelsStarted||this.state.running||this.state.paused||(this.backgroundModelsStarted=!0,window.setTimeout(()=>{this.loadVehicleModels().catch(e=>console.warn("Vehicle model loading failed",e))},800))}async loadModelBatch(e,t,{allowDuringRun:n=!1}={}){for(const i of e){if(!n&&(this.state.running||this.state.paused)){this.backgroundModelsStarted=!1;return}if(await this.waitForIdle(),!n&&(this.state.running||this.state.paused)){this.backgroundModelsStarted=!1;return}try{const r=await this.loadGlb(i);this.modelTemplates.set(i,r.scene),this.loadedVehicleModels=!0,t&&this.refreshVehicleVisuals()}catch(r){this.failedModelPaths.add(i),console.warn(`Failed to load model: ${i}`,r)}}this.modelTemplates.size>0&&(this.loadedVehicleModels=!0,this.refreshVehicleVisuals())}waitForIdle(){return new Promise(e=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:500}):window.setTimeout(e,80)})}loadGlb(e){return new Promise((t,n)=>{this.gltfLoader.load(e,t,void 0,n)})}async loadStageProps(){const e=new Set;Object.values(mh).forEach(t=>{Object.values(t).forEach(n=>n&&e.add(n))}),Object.values(Fa).forEach(t=>{t.forEach(n=>n&&e.add(n))});for(const t of e){await this.waitForIdle();try{const n=await this.loadGlb(t);this.propTemplates.set(t,n.scene)}catch{}}this.propTemplates.size>0&&(this.loadedStageProps=!0,this.scene&&this.currentStage&&this.buildSkyline())}getSeaTexture(){if(this.proceduralTextures.sea)return this.proceduralTextures.sea;const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#1a3a5e"),n.addColorStop(.5,"#2a5e8a"),n.addColorStop(1,"#4a8aae"),t.fillStyle=n,t.fillRect(0,0,256,512),t.strokeStyle="#a8d6e8",t.lineWidth=1.2;for(let r=0;r<80;r+=1){t.globalAlpha=.15+Math.random()*.35,t.beginPath();const a=Math.random()*512,o=Math.random()*256,l=o+30+Math.random()*80;t.moveTo(o,a),t.bezierCurveTo(o+20,a-4,l-20,a+4,l,a),t.stroke()}t.globalAlpha=1;const i=new xs(e);return i.wrapS=wn,i.wrapT=wn,i.repeat.set(2,8),this.proceduralTextures.sea=i,i}getAsphaltTexture(){if(this.proceduralTextures.asphalt)return this.proceduralTextures.asphalt;const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#26293a",t.fillRect(0,0,256,256);for(let i=0;i<800;i+=1){t.fillStyle=`rgba(${40+Math.random()*25},${40+Math.random()*25},${50+Math.random()*25},0.55)`;const r=Math.random()*256,a=Math.random()*256,o=.6+Math.random()*1.2;t.fillRect(r,a,o,o)}t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=.5;for(let i=0;i<6;i+=1)t.beginPath(),t.moveTo(Math.random()*256,Math.random()*256),t.bezierCurveTo(Math.random()*256,Math.random()*256,Math.random()*256,Math.random()*256,Math.random()*256,Math.random()*256),t.stroke();const n=new xs(e);return n.wrapS=wn,n.wrapT=wn,n.repeat.set(2,30),this.proceduralTextures.asphalt=n,n}getBillboardTexture(e,t="#0a1320",n="#fbbf24"){const i=`billboard_${e}_${t}`;if(this.proceduralTextures[i])return this.proceduralTextures[i];const r=document.createElement("canvas");r.width=512,r.height=256;const a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,512,256),a.strokeStyle=n,a.lineWidth=6,a.strokeRect(8,8,496,240),a.fillStyle=n,a.font="bold 56px Trebuchet MS, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(e,256,128);const o=new xs(r);return this.proceduralTextures[i]=o,o}createPropFromPath(e){if(!e)return null;const t=this.propTemplates.get(e);if(!t)return null;const n=t.clone(!0);return n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,Array.isArray(i.material)?i.material=i.material.map(r=>r.clone()):i.material&&(i.material=i.material.clone()))}),n}createStageProp(e,t){var n;return this.createPropFromPath((n=mh[e])==null?void 0:n[t])}getModelPath(e,t){var n;return e==="police"?Xi.police:((n=Xi[e])==null?void 0:n[t])??null}createModelVehicle(e,t,n,i=1120295){const r=this.getModelPath(e,t),a=r?this.modelTemplates.get(r):null;if(!a||!n)return null;const o=new rt,l=a.clone(!0);l.name="GltfVehicleScene",l.rotation.y=sx(r,e,t),o.userData.modelVehicle=!0,o.add(l),l.traverse(m=>{if(!m.isMesh)return;m.castShadow=!0,m.receiveShadow=!0,Array.isArray(m.material)?m.material=m.material.map(y=>y.clone()):m.material&&(m.material=m.material.clone()),(Array.isArray(m.material)?m.material:m.material?[m.material]:[]).forEach(y=>{if(!y||!("color"in y)||!y.color)return;const b=y.transparent||y.opacity<.98,M=y.color.getHex(),A=M===0||M===329485||M===988970||M===1120295;e==="player"&&(t==="hatchback-small"||t==="hatchback")&&!b&&!A&&(y.color.setHex(16777215),"metalness"in y&&(y.metalness=.16),"roughness"in y&&(y.roughness=.28)),e==="traffic"&&!b&&!A&&(y.color.setHex(nx[t]??i??15987958),"metalness"in y&&(y.metalness=.14),"roughness"in y&&(y.roughness=.42));const E=e==="player"?this.getSelectedLivery():null;E!=null&&E.color&&!b&&!A&&y.color.lerp(new Ue(E.color),.42)})});const h=new Wt().setFromObject(l),c=new I,d=new I;if(h.getSize(c),h.getCenter(d),c.x<=0||c.y<=0||c.z<=0)return null;const u=Math.min(n.width*1.08/c.x,n.height*1.14/c.y,n.length*1.08/c.z);l.scale.setScalar(u);const f=new Wt().setFromObject(l),g=new I;f.getCenter(g),l.position.set(-g.x,-f.min.y,-g.z),e==="player"&&o.scale.setScalar(1.12),e==="traffic"&&o.scale.setScalar(1.12),e==="police"&&o.scale.setScalar(1.16),o.userData.baseYaw=0,o.rotation.y=o.userData.baseYaw;const _=new $(new rl(.5,32),new Ye({color:329485,transparent:!0,opacity:.18}));return _.name="ground-shadow",_.rotation.x=-Math.PI/2,_.position.y=.02,_.scale.set(n.width*1.1,n.length*.82,1),o.add(_),o}refreshVehicleVisuals(){const e=this.player?this.player.position.clone():new I(0,.72,10),t=this.player?this.player.rotation.clone():new gn;this.player&&this.scene.remove(this.player),this.createPlayerCar(),this.player.position.copy(e),this.player.rotation.copy(t),this.traffic.forEach(n=>this.scene.remove(n)),this.traffic=[],this.createTrafficPool(),this.police.forEach(n=>this.scene.remove(n)),this.police=[],this.createPolicePool(),this.roadblocks.forEach(n=>this.scene.remove(n)),this.roadblocks=[],this.createRoadblockPool()}refreshTrafficPool(){var e;!this.scene||!((e=this.traffic)!=null&&e.length)||(this.traffic.forEach(t=>this.scene.remove(t)),this.traffic=[],this.createTrafficPool())}setSelectedVehicle(e){if(!this.isVehicleOwned(e))return;this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),Ht(this.progress);const t=this.getModelPath("player",this.selectedCar.key);!t||this.modelTemplates.has(t)||this.failedModelPaths.has(t)?this.refreshVehicleVisuals():this.loadCurrentPlayerModel(),this.renderGarage(),this.refreshProgressUi(),P.tip.textContent=`${this.selectedCar.label} equipped.`}purchasePremiumVehicle(e){const t=Rr[e];if(t){if(this.progress.purchasedPremiumCars.includes(e)){this.setSelectedVehicle(e);return}if(!Mt){this.unlockPremiumVehicle(e,{reveal:!0}),P.tip.textContent=`${t.label} unlocked in the Windows edition.`;return}if(!this.billingState.available){P.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind="premium",P.tip.textContent=`Opening Google Play purchase for ${t.label}...`,oi.purchaseProduct({productId:t.productId,referenceUUID:gh()}).then(n=>{this.applyBillingProductIds(this.parseBillingProductIds(n),{fallbackProductId:t.productId}).length&&(this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=`${t.label} unlocked`,P.tip.textContent=`${t.label} unlocked.`,this.renderGarage())}).catch(n=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(n==null?void 0:n.message)||"Purchase failed",P.tip.textContent=(n==null?void 0:n.message)||"Purchase failed.",this.renderGarage()})}}purchaseShopProduct(e){const t=Sd[e];if(t){if(t.kind==="ad_free"&&this.progress.adFreePurchased){P.tip.textContent="Ad-Free Upgrade already owned.";return}if(t.kind==="credits"&&this.progress.claimedShopProducts.includes(t.key)){P.tip.textContent=`${t.label} already claimed.`;return}if(!Mt){P.tip.textContent=`${t.label} purchases are available on the Android app build.`;return}if(!this.billingState.available){P.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind=t.kind,P.tip.textContent=`Opening Google Play purchase for ${t.label}...`,oi.purchaseProduct({productId:t.productId,referenceUUID:gh()}).then(n=>{const i=this.applyBillingProductIds(this.parseBillingProductIds(n),{fallbackProductId:t.productId});i.length&&(this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=i.join(", "),P.tip.textContent=this.billingState.lastMessage,this.renderGarage())}).catch(n=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(n==null?void 0:n.message)||"Purchase failed",P.tip.textContent=(n==null?void 0:n.message)||"Purchase failed.",this.renderGarage()})}}getUpgradeLevel(e,t){return Ti(this.progress.upgrades[e])[t]}buyUpgrade(e){const t=this.progress.selectedVehicleKey,n=_h.find(o=>o.key===e);if(!n)return;const i=Ti(this.progress.upgrades[t]),r=i[e];if(r>=ws){P.tip.textContent=`${n.label} is already maxed out.`;return}const a=Mh(n,r);if(this.progress.credits<a){P.tip.textContent=`You need ${a-this.progress.credits} more credits for ${n.label}.`;return}i[e]+=1,this.progress.credits-=a,this.progress.upgrades[t]=i,this.selectedCar=this.getSelectedGarageVehicle(),Ht(this.progress),this.refreshProgressUi(),this.renderGarage(),P.tip.textContent=`${n.label} upgraded for ${this.selectedCar.label}.`}setSettingsTab(e){var t,n,i;this.settingsTab=e,document.querySelectorAll("[data-settings-tab]").forEach(r=>{r.classList.toggle("is-active",r.dataset.settingsTab===e)}),(t=document.querySelector("#garage-panel-garage"))==null||t.classList.toggle("is-active",e==="garage"),(n=document.querySelector("#garage-panel-store"))==null||n.classList.toggle("is-active",e==="store"),(i=document.querySelector("#garage-panel-upgrades"))==null||i.classList.toggle("is-active",e==="upgrades")}getSelectedLivery(){return qi.find(e=>e.key===this.progress.selectedLiveryKey)||qi[0]}isLiveryUnlocked(e){return this.progress.unlockedLiveries.includes(e.key)}setSelectedLivery(e){const t=qi.find(n=>n.key===e);!t||!this.isLiveryUnlocked(t)||(this.progress.selectedLiveryKey=e,Ht(this.progress),this.refreshVehicleVisuals(),this.renderGarage(),P.tip.textContent=`${t.label} livery equipped.`)}renderGarage(){if(!P.garageList||!P.storeList||!P.garageUpgrades)return;P.garageCurrentText.textContent=`Current car: ${this.selectedCar.label}`;const e=_t.map(c=>{const d=this.isVehicleOwned(c.key),u=this.progress.selectedVehicleKey===c.key,f=zo[c.key]+1,g=bh(c,this.progress.upgrades[c.key]),_=Math.round(g.topSpeed-this.selectedCar.topSpeed),m=Math.round((g.grip-this.selectedCar.grip)*100);return`
        <button
          type="button"
          class="garage-car${u?" selected":""}${d?"":" locked"}"
          data-garage-car="${c.key}"
          ${d?"":"disabled"}
        >
          <span class="garage-badge">${d?u?"Equipped":"Owned":"Locked"}</span>
          <strong>${c.label}</strong>
          <span>${d?u?"Selected":"Tap to equip":`Unlock at Stage ${f}`}</span>
          <span>Top ${Math.round(g.topSpeed)} | Accel ${Math.round(g.accel)} | Grip ${g.grip.toFixed(2)}</span>
          <span>${u?"Current tune":`Compare: ${_>=0?"+":""}${_} KM/H, ${m>=0?"+":""}${m} grip`}</span>
        </button>
      `}).join(""),t=Qv.map(c=>`
      <div class="leaderboard-row">
        <strong>${c.label}</strong>
        <span>${c.rule}</span>
      </div>
    `).join(""),n=(this.progress.localLeaderboard||[]).slice(0,5).map((c,d)=>`
      <div class="leaderboard-row">
        <strong>#${d+1} ${c.score}</strong>
        <span>${c.track} · ${c.vehicle} · Drift ${c.drift}</span>
      </div>
    `).join("")||'<p class="garage-premium-note">No runs recorded yet.</p>',i=qn.map(c=>{const d=this.progress.purchasedPremiumCars.includes(c.key),u=this.progress.selectedVehicleKey===c.key,f=this.billingState.products[c.productId],g=this.billingState.ownedProductIds.includes(c.productId),_=(f==null?void 0:f.displayPrice)||(Mt?this.billingState.loading?"Loading price...":"Play price unavailable":"Included"),m=u?"Selected":d?"Owned":g?"Restore":"Exclusive",p=d?u?"Owned · Selected":"Owned · Tap to equip":g?"Owned on Play · Restoring...":Mt?this.billingState.loading?"Checking Play price...":`Buy on Play · ${_}`:"Included in Windows edition",y=this.billingState.pendingProductId===c.productId?"Opening...":this.billingState.loading?"Loading...":Mt?"Buy on Play":"Unlock";return`
          <div class="garage-car premium premium-card premium-${c.badgeTone||"gold"}${u?" selected":""}${d?"":" locked"}">
            <span class="premium-ribbon">${m}</span>
            <span class="garage-badge badge-${c.badgeTone||"gold"}">${c.badge||"Premium"}</span>
            <strong>${c.label}</strong>
            ${ox(c)}
            <span class="premium-role">${c.role}</span>
            <span>${c.subtitle}</span>
            <span class="premium-trait">${c.trait}</span>
            ${vh(c)}
            <span>${p}</span>
          ${!d&&Mt?`<span>${c.productId}</span>`:""}
          <div class="garage-car-actions">
            ${d?`<button type="button" class="icon-button primary" data-garage-car="${c.key}">${u?"Selected":"Equip"}</button>`:`<button type="button" class="icon-button primary" data-premium-buy="${c.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==c.productId?"disabled":""}>${y}</button>`}
          </div>
        </div>
      `}).join(""),r=Rr[this.premiumRevealVehicleKey],a=r?`
        <div class="premium-unlock-panel premium-${r.badgeTone||"gold"}">
          <span class="garage-badge badge-${r.badgeTone||"gold"}">Unlocked</span>
          <strong>${r.label} added to your garage</strong>
          <span>${r.role} - ${r.trait}</span>
          ${vh(r)}
          <div class="garage-car-actions">
            <button type="button" class="icon-button primary" data-garage-car="${r.key}">Equipped</button>
            <button type="button" class="icon-button" data-premium-reveal-dismiss>Close</button>
          </div>
        </div>
      `:"",o=ax.map(c=>`
      <div class="garage-car premium premium-card coming-soon-card locked">
        <span class="premium-ribbon">Future Update</span>
        <span class="garage-badge">Coming Soon</span>
        <strong>${c.label}</strong>
        <span>${c.note}</span>
        <span class="premium-trait">More premium cars are planned after v2 ships cleanly.</span>
      </div>
    `).join(""),l=Xr.map(c=>{const d=this.billingState.products[c.productId],u=(d==null?void 0:d.displayPrice)||(Mt?this.billingState.loading?"Loading price...":"Play price unavailable":"Android only"),f=c.kind==="ad_free"?this.progress.adFreePurchased:this.progress.claimedShopProducts.includes(c.key),g=f?c.kind==="ad_free"?"Owned | Ads disabled":"Claimed | Credits added":Mt?this.billingState.loading?"Checking Play price...":`Buy on Play | ${u}`:"Android purchase only",_=this.billingState.pendingProductId===c.productId?"Opening...":this.billingState.loading?"Loading...":Mt?"Buy on Play":"Unavailable";return`
        <div class="garage-car premium${f?" selected":""}">
          <span class="garage-badge">${c.badge}</span>
          <strong>${c.label}</strong>
          <span>${c.subtitle}</span>
          <span>${g}</span>
          ${f?"":`<span>${c.productId}</span>`}
          <div class="garage-car-actions">
            ${f?`<button type="button" class="icon-button" disabled>${c.kind==="ad_free"?"Owned":"Claimed"}</button>`:`<button type="button" class="icon-button primary" data-shop-buy="${c.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==c.productId?"disabled":""}>${_}</button>`}
          </div>
        </div>
      `}).join("");P.garageList.innerHTML=`
      <div class="garage-section">
        <h4>Career Cars</h4>
        <div class="garage-grid">${e}</div>
      </div>
      <div class="garage-section">
        <h4>Local Leaderboard</h4>
        <div class="leaderboard-list">${n}</div>
      </div>
      <div class="garage-section">
        <h4>Challenge Modes</h4>
        <div class="leaderboard-list">${t}</div>
      </div>
    `,P.liveryList&&(P.liveryList.innerHTML=qi.map(c=>{const d=this.isLiveryUnlocked(c),u=this.progress.selectedLiveryKey===c.key,f=c.color?`style="background:#${c.color.toString(16).padStart(6,"0")}"`:"";return`
          <button
            type="button"
            class="garage-car livery-card${u?" selected":""}${d?"":" locked"}"
            data-livery="${c.key}"
            ${d?"":"disabled"}
          >
            <span class="livery-swatch" ${f}></span>
            <strong>${c.label}</strong>
            <span>${d?u?"Equipped":"Tap to equip":`Unlock: ${c.unlock}`}</span>
          </button>
        `}).join(""),P.liveryList.querySelectorAll("[data-livery]").forEach(c=>{c.addEventListener("click",()=>this.setSelectedLivery(c.dataset.livery))})),P.storeList.innerHTML=`
      <div class="garage-section">
        <h4>Premium Collection</h4>
        <p class="garage-premium-note">${this.getBillingStatusMessage()}</p>
        ${Mt?`<div class="garage-car-actions"><button type="button" class="icon-button" data-restore-premium>${this.billingState.loading?"Checking...":"Restore Purchases"}</button></div>`:""}
        ${a}
        <div class="garage-grid premium-grid">${i}${o}</div>
      </div>
      <div class="garage-section">
        <h4>Store Upgrades</h4>
        <p class="garage-premium-note">Ad-Free is permanent. Credit packs are currently configured as one-time bonus unlocks.</p>
        <div class="garage-grid">${l}</div>
      </div>
    `;const h=Ti(this.progress.upgrades[this.progress.selectedVehicleKey]);P.garageUpgrades.innerHTML=_h.map(c=>{const d=h[c.key],u=d>=ws?"MAX":`${Mh(c,d)} CR`;return`
        <div class="upgrade-row">
          <div>
            <strong>${c.label}</strong>
            <span>Level ${d}/${ws}</span>
            <span>Preview: ${c.key==="engine"?"+8 KM/H, +6 accel":c.key==="handling"?"+0.04 grip":c.key==="tank"?"+12 fuel, lower drain":c.key==="nitro"?"+14 nitro, stronger burst":"+12 health, damage reduction"}</span>
          </div>
          <button
            type="button"
            class="icon-button${d>=ws?"":" primary"}"
            data-upgrade="${c.key}"
            ${d>=ws?"disabled":""}
          >
            ${u}
          </button>
        </div>
      `}).join(""),document.querySelectorAll("[data-garage-car]").forEach(c=>{c.addEventListener("click",()=>this.setSelectedVehicle(c.dataset.garageCar))}),P.storeList.querySelectorAll("[data-premium-buy]").forEach(c=>{c.addEventListener("click",()=>this.purchasePremiumVehicle(c.dataset.premiumBuy))}),P.storeList.querySelectorAll("[data-shop-buy]").forEach(c=>{c.addEventListener("click",()=>this.purchaseShopProduct(c.dataset.shopBuy))}),P.storeList.querySelectorAll("[data-restore-premium]").forEach(c=>{c.addEventListener("click",()=>this.restorePremiumPurchases())}),P.storeList.querySelectorAll("[data-premium-reveal-dismiss]").forEach(c=>{c.addEventListener("click",()=>{this.premiumRevealVehicleKey="",this.renderGarage()})}),P.garageUpgrades.querySelectorAll("[data-upgrade]").forEach(c=>{c.addEventListener("click",()=>this.buyUpgrade(c.dataset.upgrade))}),this.setSettingsTab(this.settingsTab)}applyTrackTheme(){const e=this.currentStage.track;if(this.scene.background.setHex(e.sky),this.scene.fog.color.setHex(e.fog),this.scene.fog.near=e.fogNear??80,this.scene.fog.far=e.fogFar??280,this.ground&&this.ground.material.color.setHex(e.ground),this.roadCenterGlow&&this.roadCenterGlow.material.color.set(e.accent),this.sunBall&&e.sunPosition){const[t,n,i]=e.sunPosition;this.sunBall.position.set(t*1.12,n+18,i-260),this.sunHalo&&this.sunHalo.position.set(...e.sunPosition),this.sunHalo&&this.sunHalo.position.copy(this.sunBall.position)}this.scene&&this.buildSkyline(),this.rebuildRoadGeometry(),this.renderTrackMaps()}rebuildRoadGeometry(){const e=t=>{const n=Math.max(0,(this.player.position.z-t)/ph);return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(n))};if(this.road){const t=new mt(24,520,16,80);Sh(t,e),this.road.geometry.dispose(),this.road.geometry=t,this.road.position.x=0,this.road.rotation.z=0}if(this.roadCenterGlow){const t=new mt(6.5,520,8,80);Sh(t,e),this.roadCenterGlow.geometry.dispose(),this.roadCenterGlow.geometry=t,this.roadCenterGlow.position.x=0,this.roadCenterGlow.rotation.z=0}}renderTrackMaps(){const e=this.currentStage.track,t=this.currentStage.length>0?this.state.stageProgress/this.currentStage.length*100:0,n=yh(e,t);P.trackMap&&(P.trackMap.innerHTML=n),P.trackName&&(P.trackName.textContent=e.name),P.trackZone&&(P.trackZone.textContent=`${e.zone} - ${e.difficulty}`),P.overlayTrackMap&&(P.overlayTrackMap.innerHTML=n),P.overlayTrackName&&(P.overlayTrackName.textContent=e.name),P.overlayTrackZone&&(P.overlayTrackZone.textContent=`${e.zone} - ${e.difficulty} - ${e.vibe}`);const i=fx(this.progress.highestStage,this.progress.stageStars);P.careerMap&&(P.careerMap.innerHTML=i),P.overlayCareerMap&&(P.overlayCareerMap.innerHTML=i)}showRaceBanner(e,t,n,i=2.2){P.raceBanner&&(P.raceBannerKicker.textContent=e,P.raceBannerTitle.textContent=t,P.raceBannerSubtitle.textContent=n,P.raceBanner.classList.remove("hidden"),this.state.bannerTimer=i)}triggerImpactFx(){this.audio.playCrash(),P.impactFlash&&(P.impactFlash.classList.remove("hidden"),P.impactFlash.classList.add("active"),window.clearTimeout(this.impactFlashTimer),this.impactFlashTimer=window.setTimeout(()=>{P.impactFlash.classList.remove("active"),P.impactFlash.classList.add("hidden")},170))}setupScene(){const e=new Pf(14412542,8165965,1.45);this.scene.add(e);const t=new ad(16773831,2.8);t.position.set(30,45,20),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.1,t.shadow.camera.far=140,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,this.scene.add(t);const n=new $(new Jt(8.5,24,24),new Ye({color:16765286,fog:!1}));n.position.set(-32,55,-420),n.renderOrder=-10,this.scene.add(n),this.sunBall=n;const i=new $(new Jt(18,18,18),new Ye({color:16757626,transparent:!0,opacity:.18,fog:!1}));i.position.copy(n.position),i.renderOrder=-11,this.scene.add(i),this.sunHalo=i;const r=new $(new Jt(170,32,32),new Ye({color:2573938,transparent:!0,opacity:.24,side:Yt}));r.position.set(0,28,-120),this.scene.add(r);const a=new $(new mt(180,60),new Ye({color:16761207,transparent:!0,opacity:.16}));a.position.set(0,16,-150),this.scene.add(a);const o=new $(new mt(220,520),new J({color:8956238}));o.rotation.x=-Math.PI/2,o.position.z=-120,o.receiveShadow=!0,this.scene.add(o),this.ground=o;const l=new $(new mt(24,520,16,80),new J({map:this.getAsphaltTexture(),color:4869466,roughness:.92,metalness:.03}));l.rotation.x=-Math.PI/2,l.position.y=.02,l.position.z=-120,l.receiveShadow=!0,this.scene.add(l),this.road=l;const h=new $(new mt(6.5,520,8,80),new Ye({color:5983016,transparent:!0,opacity:.08}));h.rotation.x=-Math.PI/2,h.position.set(0,.04,-120),h.visible=!1,this.roadCenterGlow=h;const c=new J({color:16773831}),d=new $(new de(.45,.12,520),c);d.position.set(-12.2,.08,-120),d.receiveShadow=!0,this.scene.add(d),this.shoulderLeft=d;const u=d.clone();u.position.x=12.2,this.scene.add(u),this.shoulderRight=u,this.skylineGroup=null,this.buildSkyline(),this.player=null,this.createPlayerCar(),this.applyTrackTheme(),this.createRoadMarkers(),this.createRoadGlowMarkers(),this.createFinishLine(),this.createRoadsidePool(),this.createLightPosts(),this.createTrafficPool(),this.createPolicePool(),this.createRoadblockPool(),this.createBossRival(),this.createPoliceRaceLeader(),this.createHelicopterSpotlight(),this.createFuelPool(),this.createHealerPool(),this.createNitroParticlePool(),this.createTrafficDustPool(),this.createCoinPool(),this.createDamageFxPool()}buildSkyline(){var n,i;this.skylineGroup&&(this.scene.remove(this.skylineGroup),this.skylineGroup.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(a=>a.dispose()):r.material.dispose())})),this.buildings=[],this.scenicRoadside=[];const e=new rt,t=((i=(n=this.currentStage)==null?void 0:n.track)==null?void 0:i.key)??"canal-run";t==="canal-run"?this.buildCanalSkyline(e):t==="liberty-loop"?(this.buildGenericSkyline(e),this.buildLibertyExtras(e)):t==="ring-road-blast"?this.buildRingRoadSkyline(e):t==="mall-road-drift"?(this.buildBankingCanyonSkyline(e),this.addRouteLandmark(e,"MALL ROAD",-1,-140,16478597)):t==="old-city-chase"?this.buildOldCitySkyline(e):this.buildGenericSkyline(e),this.skylineGroup=e,this.scene.add(e)}createCityBuildingModel({x:e,z:t,width:n,height:i,depth:r}){const a=i>20?Fa.high:Fa.low,o=a[Math.floor(Math.random()*a.length)],l=this.createPropFromPath(o);if(!l)return null;const h=new Wt().setFromObject(l),c=new I;if(h.getSize(c),c.x<=0||c.y<=0||c.z<=0)return null;const d=Math.min(n*1.15/c.x,i/c.y,r*1.15/c.z);l.scale.setScalar(d),l.rotation.y=Math.random()>.5?0:Math.PI;const u=new Wt().setFromObject(l),f=new I;return u.getCenter(f),l.position.set(e-f.x,-u.min.y,t-f.z),l.userData.isRealBuilding=!0,l}spawnBuilding(e,{x:t,z:n,width:i,height:r,depth:a,color:o,windowColor:l,windowOpacity:h=.32,emissiveWindows:c=!1}){const d=this.createCityBuildingModel({x:t,z:n,width:i,height:r,depth:a});if(d)return e.add(d),this.buildings.push(d),d;const u=new $(new de(i,r,a),new J({color:o,roughness:.78,metalness:.06}));u.position.set(t,r/2,n),u.castShadow=!0,u.receiveShadow=!0,e.add(u),this.buildings.push(u);const f=t>0,g=Math.max(3,Math.floor(r/3));for(let _=0;_<g;_+=1){const m=new $(new mt(i*.7,.5),new Ye({color:l,transparent:!0,opacity:h}));m.position.set(t+(f?-i/2-.02:i/2+.02),2+_*2.2,n),m.rotation.y=f?Math.PI/2:-Math.PI/2,e.add(m)}return u}buildGenericSkyline(e){for(let t=0;t<18;t+=1){const n=10+Math.random()*16,i=8+Math.random()*8,r=8+Math.random()*8;this.spawnBuilding(e,{x:t<9?-40-Math.random()*25:40+Math.random()*25,z:-45-t*18,width:i,height:n,depth:r,color:t%2===0?3494e3:4877708,windowColor:t%2===0?16306284:12969471})}}buildCanalSkyline(e){for(let i=0;i<8;i+=1){const r=8+Math.random()*7;this.spawnBuilding(e,{x:-36-Math.random()*20,z:-45-i*22,width:9+Math.random()*5,height:r,depth:8+Math.random()*4,color:i%2===0?15258532:13939849,windowColor:16498468,windowOpacity:.42})}for(let i=0;i<5;i+=1){const r=this.createStageProp("canal-run","palm")||this.createPalmTree();r.position.set(34+Math.random()*12,0,-55-i*38),e.add(r)}const t=new $(new mt(120,600),new J({map:this.getSeaTexture(),color:16777215,roughness:.45,metalness:.25,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(58,-.15,-120),e.add(t),this.seaPlane=t;const n=new $(new mt(6,110),new Ye({color:16498468,transparent:!0,opacity:.42}));n.rotation.x=-Math.PI/2,n.position.set(58,-.13,-160),e.add(n),this.addRouteLandmark(e,"CANAL BANK",-1,-95,3462041)}addCopilotDecorations(e,t,n){}createLandmarkSign(e,t=16498468){const n=new rt,i=new $(new Tt(.16,.18,5.5,10),new J({color:3359061}));i.position.set(-2.8,2.75,0),n.add(i);const r=i.clone();r.position.x=2.8,n.add(r);const a=new $(new de(6.8,1.9,.28),new J({map:this.getBillboardTexture(e,"#07111f",`#${t.toString(16).padStart(6,"0")}`),roughness:.55}));return a.position.y=5.2,n.add(a),n}addRouteLandmark(e,t,n=1,i=-120,r=16498468){const a=this.createLandmarkSign(t,r),o=18;a.position.set(this.getRoadCenterOffsetAtZ(i)+n*o,0,i),a.rotation.y=n>0?-Math.PI/2:Math.PI/2,this.registerScenicRoadside(a,n,o,i),e.add(a)}registerScenicRoadside(e,t,n,i){e.userData.side=t,e.userData.baseOffset=n,e.userData.baseZ=i,e.userData.anchoredX=this.getRoadCenterOffsetAtZ(i)+t*n,this.scenicRoadside.push(e)}buildLibertyExtras(e){const t=[["#dc2626","#ffffff"],["#1d4ed8","#fbbf24"],["#16a34a","#ffffff"],["#7c3aed","#fef3c7"],["#ea580c","#ffffff"]];for(let n=0;n<6;n+=1){const i=n%2===0?-1:1,r=xr[n%xr.length],[a,o]=t[n%t.length],l=new rt,h=new $(new de(.5,14,.5),new J({color:3814704}));h.position.set(-3.5,7,0),l.add(h);const c=h.clone();c.position.x=3.5,l.add(c);const d=new $(new de(9,5,.4),new J({map:this.getBillboardTexture(r,a,o),roughness:.7}));d.position.set(0,12,0),d.rotation.y=i<0?Math.PI/2:-Math.PI/2,l.add(d);const u=-40-n*70,f=18;l.position.set(this.getRoadCenterOffsetAtZ(u)+i*f,0,u),this.registerScenicRoadside(l,i,f,u),e.add(l)}}buildBankingCanyonSkyline(e){for(let t=0;t<22;t+=1){const n=t%2===0?"towerA":"towerB",i=this.createStageProp("mall-road-drift",n),r=t<11?-30-Math.random()*20:30+Math.random()*20,a=-40-t%11*24;if(i){const o=new Wt().setFromObject(i),l=new I;o.getSize(l);const h=(32+Math.random()*22)/Math.max(.001,l.y);i.scale.setScalar(h),i.position.set(r,0,a),i.rotation.y=Math.random()*Math.PI*2,e.add(i)}else{const o=32+Math.random()*28,l=10+Math.random()*6,h=10+Math.random()*6;this.spawnBuilding(e,{x:r,z:a,width:l,height:o,depth:h,color:t%3===0?2240833:t%3===1?2901600:3755628,windowColor:10340843,windowOpacity:.55})}}this.addRouteLandmark(e,"GPO MALL ROAD",1,-120,6333946)}buildKorangiExtras(e){}buildIndustrialSkyline(e){for(let t=0;t<14;t+=1){const n=Math.random()>.4,i=n?6+Math.random()*4:14+Math.random()*8,r=n?16+Math.random()*8:8+Math.random()*5,a=n?12+Math.random()*6:8+Math.random()*4,o=t<7?-34-Math.random()*18:34+Math.random()*18,l=-45-t*22;if(this.spawnBuilding(e,{x:o,z:l,width:r,height:i,depth:a,color:6968888,windowColor:16436245,windowOpacity:.25}),!n&&Math.random()>.55){const h=new $(new Tt(.5,.65,12,10),new J({color:4142376,roughness:.9}));h.position.set(o+(o>0?-r/4:r/4),i+6,l),h.castShadow=!0,e.add(h);const c=new $(new Jt(1.6,8,6),new Ye({color:7037783,transparent:!0,opacity:.45}));c.position.set(h.position.x,i+14,l),e.add(c)}}}buildOldCitySkyline(e){for(let n=0;n<24;n+=1){const i=6+Math.random()*4,r=6+Math.random()*4,a=8+Math.random()*4,o=[12095066,10908226,13212780,9398845,13935988];this.spawnBuilding(e,{x:n<12?-28-Math.random()*14:28+Math.random()*14,z:-40-n%12*16,width:r,height:i,depth:a,color:o[n%o.length],windowColor:16639626,windowOpacity:.35})}for(let n=0;n<6;n+=1){const i=n%2===0?"chaiCart":"biryaniCart",r=this.createStageProp("old-city-chase",i);r&&(r.position.set((n%2===0?-1:1)*(14+Math.random()*3),0,-25-n*22),r.rotation.y=Math.random()*.4-.2,e.add(r))}const t=this.createStageProp("old-city-chase","oldGate");if(t){const n=new Wt().setFromObject(t),i=new I;n.getSize(i),t.scale.setScalar(8/Math.max(.001,i.y)),t.position.set(0,0,-180),e.add(t)}else this.addRouteLandmark(e,"WALLED CITY",-1,-160,16347926)}buildDhaNightSkyline(e){for(let n=0;n<10;n+=1){const i=8+Math.random()*6;this.spawnBuilding(e,{x:n<5?-34-Math.random()*12:34+Math.random()*12,z:-45-n*22,width:12+Math.random()*6,height:i,depth:12+Math.random()*4,color:2765636,windowColor:3462041,windowOpacity:.62})}for(let n=0;n<14;n+=1){const i=n%2===0?-1:1,r=this.createStageProp("dha-boulevards","palm")||this.createPalmTree();r.position.set(i*(28+Math.random()*5),0,-30-n*18),e.add(r)}const t=this.createStageProp("dha-boulevards","sectorSign");if(t){const n=new Wt().setFromObject(t),i=new I;n.getSize(i),t.scale.setScalar(4/Math.max(.001,i.y)),t.position.set(-18,0,-80),e.add(t)}}buildLyariExtras(e){this.addCopilotDecorations(e,"lyari-expressway",["copilotA"])}buildLyariNeonSkyline(e){const t=new $(new mt(28,600),new J({color:1712691,roughness:.4,metalness:.3,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(-55,-.2,-120),e.add(t);for(let n=0;n<12;n+=1){const i=6+Math.random()*12;this.spawnBuilding(e,{x:-82-Math.random()*14,z:-40-n*24,width:8+Math.random()*5,height:i,depth:8+Math.random()*4,color:1843760,windowColor:[11032055,15485081,440020,16096779][n%4],windowOpacity:.7})}for(let n=0;n<8;n+=1){const i=12+Math.random()*18;this.spawnBuilding(e,{x:36+Math.random()*18,z:-42-n*28,width:10+Math.random()*6,height:i,depth:10+Math.random()*4,color:2304829,windowColor:11032055,windowOpacity:.55})}}buildM9Extras(e){this.addCopilotDecorations(e,"m9-northern-bypass",["copilotA"]);for(let t=0;t<4;t+=1){const n=this.createStageProp("m9-northern-bypass","jerseyWall");n&&(n.position.set((t%2===0?-1:1)*14,0,-50-t*60),n.rotation.y=t%2===0?0:Math.PI,e.add(n))}for(let t=0;t<3;t+=1){const n=this.createStageProp("m9-northern-bypass","sign");n&&(n.position.set(15,0,-60-t*80),e.add(n))}}buildRingRoadSkyline(e){this.buildHighwaySkyline(e),this.addRouteLandmark(e,"RING ROAD",-1,-180,6333946)}buildHighwaySkyline(e){for(let t=0;t<10;t+=1){const n=4+Math.random()*6;this.spawnBuilding(e,{x:t<5?-55-Math.random()*20:55+Math.random()*20,z:-60-t*36,width:14+Math.random()*6,height:n,depth:12+Math.random()*4,color:4865322,windowColor:16096779,windowOpacity:.18})}this.addRouteLandmark(e,"LAHORE RING ROAD",1,-120,6333946)}buildSeaViewNightSkyline(e){for(let i=0;i<6;i+=1){const r=6+Math.random()*5;this.spawnBuilding(e,{x:-34-Math.random()*16,z:-50-i*26,width:9+Math.random()*4,height:r,depth:8+Math.random()*4,color:1121326,windowColor:[2282478,15485081,11032055,16096779][i%4],windowOpacity:.78})}for(let i=0;i<8;i+=1){const r=this.createStageProp("sea-view-night","palm")||this.createPalmTree();r.position.set(28+Math.random()*12,0,-50-i*28),e.add(r)}const t=new $(new mt(120,600),new J({color:793134,roughness:.35,metalness:.4,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(85,-.15,-120),e.add(t);const n=new $(new mt(4,90),new Ye({color:15134975,transparent:!0,opacity:.4}));n.rotation.x=-Math.PI/2,n.position.set(72,-.13,-160),e.add(n),this.addCopilotDecorations(e,"sea-view-night",["copilotA"])}buildPortSkyline(e){const t=[12131356,1920728,366185,15381256,11032055,15357964];for(let n=0;n<28;n+=1){const i=2+Math.floor(Math.random()*3),r=12,a=n<14?-28-Math.random()*14:28+Math.random()*14,o=-30-n%14*18;for(let l=0;l<i;l+=1){const h=new $(new de(r,4,6),new J({color:t[(n+l)%t.length],roughness:.72,metalness:.18}));h.position.set(a,2+l*4.1,o),h.castShadow=!0,h.receiveShadow=!0,e.add(h),this.buildings.push(h)}}this.addRouteLandmark(e,"KARACHI PORT",-1,-150,16096779);for(let n=0;n<4;n+=1){const i=new $(new de(1.6,32,1.6),new J({color:3882820,metalness:.3,roughness:.6}));i.position.set((n%2===0?-1:1)*38,16,-90-n*70),i.castShadow=!0,e.add(i);const r=new $(new de(22,1.2,1),new J({color:5068128,metalness:.25,roughness:.55}));r.position.set(i.position.x+(n%2===0?8:-8),30,i.position.z),e.add(r)}for(let n=0;n<4;n+=1){const i=this.createStageProp("lahore-port-run","container");i&&(i.position.set((n%2===0?-1:1)*22,0,-40-n*60),i.rotation.y=n*.4,e.add(i))}this.addCopilotDecorations(e,"lahore-port-run",["copilotA"])}createPalmTree(){const e=new rt,t=7+Math.random()*3,n=new $(new Tt(.22,.34,t,8),new J({color:7031333,roughness:.9}));n.position.y=t/2,n.castShadow=!0,e.add(n);const i=new J({color:1870418,roughness:.6,side:nn});for(let r=0;r<5;r+=1){const a=r/5*Math.PI*2+Math.random()*.3,o=new $(new mt(.6,3.4),i);o.position.set(Math.cos(a)*1.5,t+.4,Math.sin(a)*1.5),o.rotation.set(-.5,a+Math.PI/2,0),o.castShadow=!0,e.add(o)}return e}createPlayerCar(){var n;this.player&&this.scene.remove(this.player);const e=this.getSelectedLivery(),t=(e==null?void 0:e.color)??this.selectedCar.body;this.player=this.createModelVehicle("player",this.selectedCar.key,this.selectedCar.profile,this.selectedCar.glow)||this.createCar({id:this.selectedCar.id,body:t,roof:this.selectedCar.roof,glow:this.selectedCar.glow,trim:this.selectedCar.trim,headlight:this.selectedCar.headlight,taillight:this.selectedCar.taillight,profile:this.selectedCar.profile}),(n=this.player.userData).baseYaw??(n.baseYaw=0),this.player.position.set(0,.72,10),this.scene.add(this.player),this.attachPlayerDamageVisuals()}attachPlayerDamageVisuals(){if(!this.player)return;const e=new $(new Jt(.55,8,6),new Ye({color:2236962,transparent:!0,opacity:0}));e.name="player-damage-smoke",e.position.set(.45,1.35,1.65),this.player.add(e);const t=new Ye({color:1120295,transparent:!0,opacity:0});[[-.65,.74,1.92,-.35],[.72,.48,-1.85,.28]].forEach(([n,i,r,a],o)=>{const l=new $(new de(.72,.05,.16),t.clone());l.name=`player-damage-crack-${o}`,l.position.set(n,i,r),l.rotation.z=a,this.player.add(l)})}createCar({id:e,body:t,roof:n,glow:i,trim:r=1054759,headlight:a=15398655,taillight:o=16557477,profile:l}){const h=new rt,c=l,d=c.hoodLength??c.length*.24,u=c.rearLength??c.length*.2,f=c.cabinOffset??0,g=c.wheelRadius??.55,_=c.wheelInset??.44,m=c.height*.62,p=new $(new de(c.width,m,c.length-.1),new J({color:t,metalness:.28,roughness:.42}));p.position.y=m*.1,p.castShadow=!0,p.receiveShadow=!0,h.add(p);const y=new $(new de(c.width*.96,c.height*.28,d),new J({color:t,metalness:.24,roughness:.38}));y.position.set(0,c.height*.28,c.length*.5-d*.55),y.rotation.x=-.08,y.castShadow=!0,h.add(y);const b=new $(new de(c.width*.94,c.height*.22,u),new J({color:t,metalness:.24,roughness:.4}));b.position.set(0,c.height*.24,-c.length*.5+u*.52),b.rotation.x=.06,b.castShadow=!0,h.add(b);const M=new $(new de(c.cabinWidth,c.cabinHeight,c.cabinLength),new J({color:n,metalness:.1,roughness:.32}));M.position.y=c.height*.72+c.cabinHeight*.12,M.position.z=f,M.rotation.x=c.roofBias?-c.roofBias*.04:0,M.castShadow=!0,h.add(M);const A=new $(new de(c.cabinWidth*.82,.08,c.cabinLength*.55),new J({color:r,metalness:.16,roughness:.3}));A.position.set(0,c.height+c.cabinHeight*.12,f-c.cabinLength*.02),h.add(A);const E=new $(new de(c.cabinWidth*.96,c.cabinHeight*.76,c.cabinLength*.22),new J({color:11065599,metalness:.05,roughness:.15,transparent:!0,opacity:.78}));E.position.set(0,c.height*.74+c.cabinHeight*.2,c.cabinLength*.18+f),E.rotation.x=-.42,h.add(E);const C=new $(new de(c.cabinWidth*.94,c.cabinHeight*.68,c.cabinLength*.18),new J({color:10013678,metalness:.05,roughness:.16,transparent:!0,opacity:.72}));C.position.set(0,c.height*.74+c.cabinHeight*.16,-c.cabinLength*.18+f),C.rotation.x=.34,h.add(C);const x=new J({color:10340843,metalness:.04,roughness:.14,transparent:!0,opacity:.7});[-1,1].forEach(he=>{const ae=new $(new mt(c.cabinLength*.52,c.cabinHeight*.48),x);ae.position.set(he*(c.cabinWidth/2+.02),c.height*.78,f-.04),ae.rotation.y=he<0?Math.PI/2:-Math.PI/2,h.add(ae)});const w=new $(new de(c.width*.6,c.height*.22,.18),new J({color:r,metalness:.15,roughness:.4}));w.position.set(0,c.height*.16,c.length*.5-.07),h.add(w);const H=new $(new de(c.width*.78,c.height*.16,.18),new J({color:329485,metalness:.12,roughness:.5}));H.position.set(0,.08,c.length*.5-.04),h.add(H);const R=new de(c.width*.2,.08,.22),F=new J({color:a,emissive:a,emissiveIntensity:e==="civic"?.75:.45});[-c.width*.29,c.width*.29].forEach(he=>{const ae=new $(R,F);ae.position.set(he,c.height*.23,c.length*.5-.08),ae.rotation.y=he<0?.14:-.14,h.add(ae)});const O=new $(new de(Math.max(1.6,c.width*.55),.15,.7),new J({color:i,emissive:i,emissiveIntensity:.25}));O.position.set(0,c.height*.58,c.length*.24),h.add(O);const B=new $(new mt(c.width*1.12,c.length*.76),new Ye({color:i,transparent:!0,opacity:e==="civic"?.13:.08}));B.rotation.x=-Math.PI/2,B.position.y=.04,h.add(B);const k=new $(new mt(c.width*1.25,c.length*.9),new Ye({color:0,transparent:!0,opacity:.18}));k.name="ground-shadow",k.rotation.x=-Math.PI/2,k.position.y=.01,h.add(k);const z=new $(new de(c.width*.98,.1,c.length*.74),new J({color:r,metalness:.14,roughness:.45}));if(z.position.y=-.02,h.add(z),c.splitter){const he=new $(new de(c.width*.9,.06,.45),new J({color:r}));he.position.set(0,-.02,c.length*.5-.18),h.add(he)}if(c.spoiler){const he=new $(new de(c.width*.54,.06,.48),new J({color:r,metalness:.15,roughness:.4}));he.position.set(0,c.height*.62,-c.length*.5+.38),h.add(he)}const W=new de(c.width*.18,.08,.2),ne=new J({color:o,emissive:o,emissiveIntensity:.55});[-c.width*.27,c.width*.27].forEach(he=>{const ae=new $(W,ne);ae.position.set(he,c.height*.18,-c.length*.5+.08),ae.rotation.y=he<0?-.14:.14,h.add(ae)});const Q=new Tt(g,g,.55,18),me=new J({color:1120295});return[[-c.width*_,g*.2,c.length*.31],[c.width*_,g*.2,c.length*.31],[-c.width*_,g*.2,-c.length*.31],[c.width*_,g*.2,-c.length*.31]].forEach(([he,ae,ke])=>{const nt=new $(Q,me);nt.rotation.z=Math.PI/2,nt.position.set(he,ae,ke),nt.castShadow=!0,h.add(nt)}),h.userData.baseYaw=0,h}createBus(){const e=new rt,t=new $(new de(4.4,2.3,11.8),new J({color:16436245,metalness:.18,roughness:.48}));t.position.y=1.25,t.castShadow=!0,e.add(t);const n=new $(new de(4.46,.26,11.9),new J({color:14427686}));n.position.y=1.15,e.add(n);const i=new $(new de(3.4,1.15,.18),new J({color:10344191,transparent:!0,opacity:.72}));i.position.set(0,1.65,5.75),e.add(i);for(let o=0;o<5;o+=1)for(const l of[-1,1]){const h=new $(new mt(1.2,.72),new J({color:10344191,transparent:!0,opacity:.68}));h.position.set(l*2.22,1.78,3.8-o*1.8),h.rotation.y=l<0?Math.PI/2:-Math.PI/2,e.add(h)}const r=new Tt(.8,.8,.75,18),a=new J({color:1120295});return[[-1.95,.42,3.9],[1.95,.42,3.9],[-1.95,.42,.25],[1.95,.42,.25],[-1.95,.42,-3.7],[1.95,.42,-3.7]].forEach(([o,l,h])=>{const c=new $(r,a);c.rotation.z=Math.PI/2,c.position.set(o,l,h),c.castShadow=!0,e.add(c)}),e}createRickshaw(){const e=new rt,t=new $(new de(3.2,1.35,4.1),new J({color:1483594,metalness:.12,roughness:.52}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new $(new de(2.8,.8,1.9),new J({color:16436245,metalness:.08,roughness:.44}));n.position.set(0,1.65,-.1),e.add(n);const i=new $(new de(1.7,1.05,1.4),new J({color:988970}));i.position.set(0,1.05,1.5),e.add(i);const r=new $(new de(1.35,.55,.12),new J({color:11065599,transparent:!0,opacity:.72}));r.position.set(0,1.35,2.08),e.add(r);const a=new Tt(.5,.5,.36,16),o=new J({color:1120295});return[[-1.08,.38,-1.1],[1.08,.38,-1.1],[0,.38,1.45]].forEach(([l,h,c])=>{const d=new $(a,o);d.rotation.z=Math.PI/2,d.position.set(l,h,c),d.castShadow=!0,e.add(d)}),e}createBike(){const e=new rt,t=[14427686,1120295,1920728,1467700,15381256],n=t[Math.floor(Math.random()*t.length)],i=new $(new de(.36,.34,1.55),new J({color:2042167,metalness:.55,roughness:.4}));i.position.y=.78,i.castShadow=!0,e.add(i);const r=new $(new de(.42,.32,.78),new J({color:n,metalness:.5,roughness:.32}));r.position.set(0,1.05,.18),r.castShadow=!0,e.add(r);const a=new $(new Jt(.18,12,8),new J({color:16708551,emissive:16708551,emissiveIntensity:.7}));a.position.set(0,1,.92),e.add(a);const o=new $(new de(.78,.06,.08),new J({color:1120295,metalness:.6,roughness:.3}));o.position.set(0,1.18,.78),e.add(o);const l=new $(new de(.34,.12,.78),new J({color:0,roughness:.8}));l.position.set(0,1,-.42),e.add(l);const h=new $(new de(.28,.08,.46),new J({color:3621201}));h.position.set(0,1.04,-.95),e.add(h);const c=new $(new de(.46,.62,.36),new J({color:1981066,roughness:.6}));c.position.set(0,1.55,-.28),c.castShadow=!0,e.add(c);const d=new $(new Jt(.22,12,10),new J({color:988970,metalness:.4,roughness:.32}));d.position.set(0,2,-.22),e.add(d);const u=new Tt(.42,.42,.18,18),f=new J({color:657930,roughness:.8});return[[0,.42,.78],[0,.42,-.86]].forEach(([g,_,m])=>{const p=new $(u,f);p.rotation.z=Math.PI/2,p.position.set(g,_,m),p.castShadow=!0,e.add(p)}),e}createWaterTanker(){const e=new rt,t=new $(new de(2.8,2.4,2.6),new J({color:1920728,metalness:.18,roughness:.5}));t.position.set(0,1.5,4.4),t.castShadow=!0,e.add(t);const n=new $(new de(2.86,.18,.6),new J({color:988970}));n.position.set(0,2.78,5.4),e.add(n);const i=new $(new de(2.2,1.3,.18),new J({color:10344191,transparent:!0,opacity:.72}));i.position.set(0,2.05,5.55),e.add(i);const r=new $(new de(2.4,.9,.2),new J({color:1120295,metalness:.3,roughness:.5}));r.position.set(0,.95,5.65),e.add(r),[-1,1].forEach(f=>{const g=new $(new de(.5,.32,.16),new J({color:16708551,emissive:16639626,emissiveIntensity:.6}));g.position.set(f*.95,.7,5.7),e.add(g)});const a=new $(new Tt(1.55,1.55,7.2,22),new J({color:15067115,metalness:.45,roughness:.32}));a.rotation.x=Math.PI/2,a.position.set(0,2.3,-.6),a.castShadow=!0,e.add(a),[-4,2.8].forEach(f=>{const g=new $(new Tt(1.55,1.55,.18,22),new J({color:12131356,metalness:.3,roughness:.5}));g.rotation.x=Math.PI/2,g.position.set(0,2.3,f),e.add(g)});const o=new $(new de(.08,2.6,.08),new J({color:3621201}));o.position.set(1.4,2.3,-3.6),e.add(o);const l=new $(new Tt(.36,.36,.16,14),new J({color:7041664,metalness:.5}));l.position.set(0,3.95,-.6),e.add(l);const h=new $(new de(2.4,.32,8.6),new J({color:1120295,roughness:.7}));h.position.set(0,.62,.4),e.add(h);const c=new Tt(.78,.78,.7,18),d=new J({color:657930,roughness:.85});[[-1.4,.62,4.2],[1.4,.62,4.2],[-1.4,.62,-1],[1.4,.62,-1],[-1.4,.62,-3.2],[1.4,.62,-3.2]].forEach(([f,g,_])=>{const m=new $(c,d);m.rotation.z=Math.PI/2,m.position.set(f,g,_),m.castShadow=!0,e.add(m)});const u=new $(new de(2.8,.5,.06),new J({color:2042167}));return u.position.set(0,.42,-3.95),e.add(u),e}createPickup(){const e=new rt,t=[14427686,366185,2450411,16436245][Math.floor(Math.random()*4)],n=new $(new de(2.4,1.6,1.8),new J({color:t,metalness:.2,roughness:.5}));n.position.set(0,1.05,1.5),n.castShadow=!0,e.add(n);const i=new $(new de(2.32,.16,1.7),new J({color:1120295}));i.position.set(0,1.93,1.5),e.add(i);const r=new $(new de(2,.85,.12),new J({color:11065599,transparent:!0,opacity:.72}));r.position.set(0,1.5,2.42),e.add(r);const a=new $(new de(2.4,.16,2.6),new J({color:4937059,roughness:.7}));a.position.set(0,.78,-.85),e.add(a);const o=Math.floor(Math.random()*3)+1;for(let c=0;c<o;c++){const d=new $(new de(2.1,.5,2.2),new J({color:10576391,roughness:.85}));d.position.set(0,1.05+c*.52,-.85),d.castShadow=!0,e.add(d)}const l=new Tt(.5,.5,.36,16),h=new J({color:657930,roughness:.8});return[[-1.1,.5,1.5],[1.1,.5,1.5],[-1.1,.5,-1.5],[1.1,.5,-1.5]].forEach(([c,d,u])=>{const f=new $(l,h);f.rotation.z=Math.PI/2,f.position.set(c,d,u),f.castShadow=!0,e.add(f)}),e}createRoadMarkers(){const e=new de(.38,.04,7),t=new J({color:16317180});for(let n=0;n<2;n+=1){const i=n===0?-4.1:4.1;for(let r=0;r<26;r+=1){const a=new $(e,t);a.position.set(i,.05,-r*20),a.userData.laneX=i,a.receiveShadow=!0,this.roadMarkers.push(a),this.scene.add(a)}}}createRoadGlowMarkers(){const e=new Ye({color:16753472,transparent:!0,opacity:.18});for(let t=0;t<2;t+=1){const n=t===0?-4.1:4.1;for(let i=0;i<18;i+=1){const r=new $(new mt(.9,9),e);r.rotation.x=-Math.PI/2,r.position.set(n,.03,-i*28),r.userData.laneX=n,r.visible=!1,this.roadGlows.push(r)}}}createFinishLine(){this.finishLine=new rt;const e=new Ye({color:16317180}),t=new Ye({color:1120295});for(let o=0;o<5;o+=1)for(let l=0;l<6;l+=1){const h=new $(new mt(4,2.4),(o+l)%2===0?e:t);h.rotation.x=-Math.PI/2,h.position.set(-10+l*4,.07,-o*2.45),this.finishLine.add(h)}const n=new J({color:15067115}),i=new $(new Tt(.14,.16,7.5,10),n);i.position.set(-10.8,3.8,-5),this.finishLine.add(i);const r=new $(new Tt(.14,.16,7.5,10),n);r.position.set(10.8,3.8,-5),this.finishLine.add(r);const a=new $(new de(22.4,1.5,.2),new J({color:16096779,emissive:10105874,emissiveIntensity:.3}));a.position.set(0,7.2,-5),this.finishLine.add(a),this.scene.add(this.finishLine),this.resetFinishLine()}resetFinishLine(){this.finishLine&&(this.finishLine.visible=!1,this.finishLine.position.set(0,0,-240))}createRoadsidePool(){for(let e=0;e<34;e+=1){const t=Math.random(),n=t>.62?this.createTree():t>.28?this.createSign():t>.14?this.createBusStop():this.createMedianBarrier(),i=Math.random()>.5?-1:1,r=18+Math.random()*18,a=-25-e*16,o=this.getRoadCenterOffsetAtZ(a)+i*r;n.position.set(o,0,a),n.userData.side=i,n.userData.baseOffset=r,n.userData.anchoredX=o,this.roadside.push(n),this.scene.add(n)}}createBusStop(){const e=new rt,t=new $(new de(4.4,.16,1.8),new J({color:1920728}));t.position.y=3.15,e.add(t);for(const i of[-1.8,1.8]){const r=new $(new Tt(.12,.12,3.1,8),new J({color:9741240}));r.position.set(i,1.55,0),e.add(r)}const n=new $(new de(2.2,.18,.55),new J({color:8138002}));return n.position.set(0,.95,0),e.add(n),e}createMedianBarrier(){const e=new rt,t=new $(new de(3.8,.7,.9),new J({color:15381256}));t.position.y=.35,e.add(t);const n=new $(new de(3.82,.16,.92),new J({color:2042167}));return n.position.y=.38,e.add(n),e}createLightPosts(){for(let e=0;e<18;e+=1){const t=e%2===0?-1:1,n=new rt,i=new $(new Tt(.1,.12,6.5,8),new J({color:7041664}));i.position.y=3.25,n.add(i);const r=new $(new de(1.4,.12,.12),new J({color:7041664}));r.position.set(t*-.6,6.2,0),n.add(r);const a=new $(new Jt(.24,10,10),new Ye({color:16769947}));a.position.set(t*-1.2,6.1,0),n.add(a);const o=-40-e*26,l=this.getRoadCenterOffsetAtZ(o)+t*15.8;n.position.set(l,0,o),n.userData.side=t,n.userData.baseOffset=15.8,n.userData.anchoredX=l,this.lightPosts.push(n),this.scene.add(n)}}resetRoadsideAnchors(){this.roadside.forEach((e,t)=>{const n=e.userData.side||(t%2===0?-1:1),i=e.userData.baseOffset||18+Math.random()*18,r=-25-t*16,a=this.getRoadCenterOffsetAtZ(r)+n*i;e.position.set(a,0,r),e.userData.side=n,e.userData.baseOffset=i,e.userData.anchoredX=a}),this.lightPosts.forEach((e,t)=>{const n=e.userData.side||(t%2===0?-1:1),i=e.userData.baseOffset||15.8,r=-40-t*26,a=this.getRoadCenterOffsetAtZ(r)+n*i;e.position.set(a,0,r),e.userData.side=n,e.userData.baseOffset=i,e.userData.anchoredX=a}),this.scenicRoadside.forEach(e=>{const t=e.userData.side||1,n=e.userData.baseOffset||18,i=e.userData.baseZ||-120,r=this.getRoadCenterOffsetAtZ(i)+t*n;e.position.set(r,0,i),e.userData.anchoredX=r})}createTree(){const e=new rt,t=new $(new Tt(.35,.45,2.8,10),new J({color:8145437}));t.position.y=1.3,t.castShadow=!0,e.add(t);const n=new J({color:1870418});return[[0,3.9,0,1.7],[-.9,3.25,.25,1.25],[.85,3.25,-.15,1.25]].forEach(([i,r,a,o])=>{const l=new $(new Jt(o,14,14),n);l.position.set(i,r,a),l.castShadow=!0,e.add(l)}),e}createSign(){const e=new rt,t=new $(new de(.35,3.5,.35),new J({color:10576391}));t.position.y=1.75,t.castShadow=!0,e.add(t);const n=new $(new de(3.2,2.1,.25),new J({color:16639626}));n.position.y=4.35,n.castShadow=!0,e.add(n);const i=this.makeTextTexture(xr[Math.floor(Math.random()*xr.length)]),r=new $(new mt(2.75,1),new Ye({map:i,transparent:!0}));return r.position.set(0,4.35,.15),e.add(r),e}makeTextTexture(e){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="#78350f",n.font="bold 36px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2);const i=new xs(t);return i.needsUpdate=!0,i}makePoliceDecalTexture(e="POLICE"){const t=document.createElement("canvas");t.width=512,t.height=192;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="rgba(255,255,255,0.94)",n.fillRect(0,0,t.width,t.height),n.fillStyle="#0f172a",n.font="900 78px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2),n.fillStyle="#2563eb",n.fillRect(28,28,88,24),n.fillStyle="#ef4444",n.fillRect(t.width-116,t.height-52,88,24);const i=new xs(t);return i.needsUpdate=!0,i}enhancePoliceVehicle(e,{raceLeader:t=!1}={}){const n=new $(new mt(2.2,.82),new Ye({map:this.makePoliceDecalTexture(t?"INTERCEPTOR":"POLICE"),transparent:!0,side:nn}));n.name="police-roof-decal",n.rotation.x=-Math.PI/2,n.position.set(0,1.58,-.12),e.add(n);const i=this.makePoliceDecalTexture("POLICE");for(const l of[-1,1]){const h=new $(new de(.06,.5,2.9),new Ye({color:988970}));h.name="police-side-stripe",h.position.set(l*1.82,.88,.05),e.add(h);const c=new $(new mt(1.65,.55),new Ye({map:i,transparent:!0,side:nn}));c.name="police-side-decal",c.rotation.y=l>0?Math.PI/2:-Math.PI/2,c.position.set(l*1.86,1.18,-.1),e.add(c)}const r=new rt;r.name="police-lightbar",r.position.set(0,1.74,-.25);const a=new $(new de(1.35,.1,.28),new Ye({color:988970}));r.add(a);const o=[new J({color:2450411,emissive:2450411,emissiveIntensity:1.9}),new J({color:15680580,emissive:15680580,emissiveIntensity:1.9})];for(const[l,h]of[-.35,.35].entries()){const c=new $(new de(.38,.18,.3),o[l]);c.position.x=h,r.add(c);const d=new Io(l===0?2450411:15680580,t?1.6:1.25,9);d.position.set(h,.35,0),r.add(d)}e.add(r)}createTrafficPool(){var e,t,n;for(let i=0;i<_d;i+=1){const r=Bo[i%Bo.length];let a;if(Vs.includes(r)){const c=Ov[r],d=_t.find(u=>u.key===c)||_t[2];a=this.createModelVehicle("traffic",r,Sn[r]||d.profile,d.glow)||this.createCar({id:d.key,body:d.body,roof:d.roof,glow:d.glow,trim:d.trim,headlight:d.headlight,taillight:d.taillight,profile:Sn[r]||d.profile})}else if(r==="bus")a=this.createModelVehicle("traffic","bus",Sn.bus,16436245)||this.createBus();else if(r==="rickshaw")a=this.createModelVehicle("traffic","rickshaw",Sn.rickshaw,1483594)||this.createRickshaw();else if(r==="bike")a=this.createModelVehicle("traffic","bike",Sn.bike,14427686)||this.createBike();else if(r==="tanker")a=this.createModelVehicle("traffic","tanker",Sn.tanker,15067115)||this.createWaterTanker();else if(r==="pickup")a=this.createModelVehicle("traffic","pickup",Sn.pickup,14427686)||this.createPickup();else if(["taxi","van","delivery","ambulance","garbage","firetruck"].includes(r)){const c=r==="taxi"?_t[2]:r==="ambulance"||r==="delivery"||r==="garbage"||r==="firetruck"?_t[6]:_t[4];a=this.createModelVehicle("traffic",r,Sn[r],c.glow)||this.createCar({id:c.key,body:r==="taxi"?16436245:r==="ambulance"?16317180:c.body,roof:c.roof,glow:c.glow,trim:c.trim,headlight:c.headlight,taillight:c.taillight,profile:Sn[r]||c.profile})}else if(r==="truck"){const c=_t[6];a=this.createModelVehicle("traffic","truck",c.profile,c.glow)||this.createCar({id:c.key,body:c.body,roof:c.roof,glow:c.glow,trim:c.trim,headlight:c.headlight,taillight:c.taillight,profile:c.profile})}else{const c=r==="hatchback"?_t[1]:r==="sedan"?_t[2]:r==="suv"?_t[4]:_t[5];a=this.createModelVehicle("traffic",r,c.profile,c.glow)||this.createCar({id:c.key,body:c.body,roof:c.roof,glow:c.glow,trim:c.trim,headlight:c.headlight,taillight:c.taillight,profile:c.profile})}this.hideGroundShadow(a),a.visible=!1;const o=r==="bike"?78:["tanker","truck","delivery","garbage","firetruck"].includes(r)?46:r==="van"||r==="ambulance"?58:60,l=!!a.userData.modelVehicle,h=Sn[r]||((e=_t.find(c=>c.key===r))==null?void 0:e.profile)||{width:3.2,length:6};a.userData={active:!1,speed:o,lane:0,laneTarget:0,changeCooldown:0,type:r,modelVehicle:l,collisionX:Math.max(1.35,(h.width||3.2)*.5+(((t=this.selectedCar.profile)==null?void 0:t.width)||3.2)*.38),collisionZ:Math.max(4.4,(h.length||6)*.52+(((n=this.selectedCar.profile)==null?void 0:n.length)||6)*.36)},this.traffic.push(a),this.scene.add(a)}}createPolicePool(){for(let e=0;e<4;e+=1){const t={width:3.4,length:6.2,height:1.08,cabinWidth:2.25,cabinLength:2.95,cabinHeight:.95},n=this.createModelVehicle("police","police",t,15680580)||this.createCar({id:"police",body:15068404,roof:988970,glow:15680580,trim:988970,headlight:15398655,taillight:16478597,profile:t});this.hideGroundShadow(n),n.visible=!1,this.enhancePoliceVehicle(n);const i=new $(new de(.45,.2,.45),new J({color:3900150,emissive:3900150,emissiveIntensity:.6}));i.position.set(-.35,1.45,-.2),n.add(i);const r=i.clone();r.material=i.material.clone(),r.material.color.setHex(15680580),r.material.emissive.setHex(15680580),r.position.x=.35,n.add(r),n.userData={active:!1,aggression:1,behavior:"chase"},this.police.push(n),this.scene.add(n)}}createRoadblockPool(){for(let e=0;e<4;e+=1){const t=new rt,n=new $(new de(5.6,.65,1),new J({color:16317180,roughness:.62}));n.position.y=.34,t.add(n);const i=new $(new de(5.65,.18,1.04),new Ye({color:15680580}));i.position.y=.56,t.add(i);for(const a of[-2.4,2.4]){const o=new $(new al(.42,1.25,12),new J({color:16347926,roughness:.7}));o.position.set(a,.72,-.95),t.add(o)}const r=new Io(15680580,1.4,10);r.position.set(0,1.4,0),t.add(r),t.visible=!1,t.userData={active:!1,lane:1,type:"roadblock",kind:"roadblock"},this.roadblocks.push(t),this.scene.add(t)}}createBossRival(){const e=Ua[0],t=qn[1]||_t[7];this.rivalBoss=this.createCar({id:"boss-rival",body:t.body,roof:t.roof,glow:t.glow,trim:t.trim,headlight:t.headlight,taillight:t.taillight,profile:t.profile}),this.rivalBoss.visible=!1,this.rivalBoss.userData={active:!1,name:e.name,car:e.car,taunt:e.taunt,lane:1},this.scene.add(this.rivalBoss)}createPoliceRaceLeader(){const e={width:3.4,length:6.2,height:1.08,cabinWidth:2.25,cabinLength:2.95,cabinHeight:.95};this.policeRaceLeader=this.createModelVehicle("police","police",e,3900150)||this.createCar({id:"police-race-leader",body:15068404,roof:988970,glow:3900150,trim:988970,headlight:15398655,taillight:16478597,profile:e}),this.hideGroundShadow(this.policeRaceLeader),this.policeRaceLeader.visible=!1,this.enhancePoliceVehicle(this.policeRaceLeader,{raceLeader:!0}),this.policeRaceLeader.userData={active:!1,lane:1,baseYaw:this.policeRaceLeader.userData.baseYaw??0},this.scene.add(this.policeRaceLeader)}createHelicopterSpotlight(){this.helicopterGroup=new rt;const e=new $(new de(3.6,.8,1.4),new J({color:1120295,roughness:.45}));this.helicopterGroup.add(e);const t=new $(new de(7.2,.08,.18),new Ye({color:15067115,transparent:!0,opacity:.68}));t.position.y=.68,t.name="helicopter-rotor",this.helicopterGroup.add(t);const n=new rd(16710083,4.2,95,.36,.65,1);n.position.set(0,0,0),n.target=this.player||new xt,this.helicopterGroup.add(n),this.helicopterSpotlight=n,this.helicopterGroup.position.set(0,28,-34),this.helicopterGroup.visible=!1,this.scene.add(this.helicopterGroup)}hideGroundShadow(e){e.traverse(t=>{t.name==="ground-shadow"&&(t.visible=!1)})}createFuelPool(){for(let e=0;e<5;e+=1){const t=new rt,n=new $(new de(1.55,1.65,.9),new J({color:16436245,emissive:16096779,emissiveIntensity:.45}));n.name="fuel-body",n.castShadow=!0,t.add(n);const i=new $(new de(.62,.32,.5),new J({color:16708551,emissive:16436245,emissiveIntensity:.35}));i.position.set(.25,.98,0),t.add(i);const r=new $(new Ur(.82,.08,8,28),new Ye({color:3718648,transparent:!0,opacity:.88}));r.name="fuel-beacon",r.rotation.x=Math.PI/2,r.position.y=1.25,t.add(r),t.visible=!1,t.userData={active:!1,lane:0},this.fuelCans.push(t),this.scene.add(t)}}createHealerPool(){for(let e=0;e<3;e+=1){const t=new rt,n=new $(new Ur(.72,.2,10,24),new J({color:2278750,emissive:1483594,emissiveIntensity:.45}));n.rotation.x=Math.PI/2,n.castShadow=!0,t.add(n);const i=new J({color:16317180,emissive:16777215,emissiveIntensity:.15}),r=new $(new de(.26,1,.26),i);r.castShadow=!0,t.add(r);const a=new $(new de(1,.26,.26),i);a.castShadow=!0,t.add(a),t.visible=!1,t.userData={active:!1,lane:0},this.healers.push(t),this.scene.add(t)}}createTrafficDustPool(){this.trafficDust=[];const e=new Jt(.6,6,5),t=[10913896,12888198,9204048,12097910];for(let n=0;n<36;n+=1){const i=new Ye({color:t[n%t.length],transparent:!0,opacity:0}),r=new $(e,i);r.visible=!1,r.userData={age:0,life:0,vx:0,vy:0,vz:0},this.trafficDust.push(r),this.scene.add(r)}this.trafficDustSpawnTimers=new WeakMap}updateTrafficDust(e){var n;if(!this.trafficDust||!this.traffic)return;const t=new Set(["tanker","truck","pickup","dumper"]);for(const i of this.traffic){if(!((n=i.userData)!=null&&n.active)||!t.has(i.userData.type)||i.position.z>20||i.position.z<-200)continue;let r=(this.trafficDustSpawnTimers.get(i)||0)+e;for(;r>=.2;){r-=.2;const a=this.trafficDust.find(h=>!h.visible);if(!a)break;const o=Math.random()>.5?-1:1,l=i.userData.type==="tanker"?5:i.userData.type==="truck"?4:2;a.position.set(i.position.x+o*1.2+(Math.random()-.5)*.5,.4+Math.random()*.5,i.position.z+l),a.userData.life=.9+Math.random()*.5,a.userData.age=0,a.userData.vx=(Math.random()-.5)*2.5,a.userData.vy=.4+Math.random()*.5,a.userData.vz=-2+Math.random()*1,a.scale.setScalar(.7+Math.random()*.5),a.material.opacity=.55,a.visible=!0}this.trafficDustSpawnTimers.set(i,r)}for(const i of this.trafficDust){if(!i.visible)continue;if(i.userData.age+=e,i.userData.age>=i.userData.life){i.visible=!1,i.material.opacity=0;continue}const r=i.userData.age/i.userData.life;i.position.x+=i.userData.vx*e,i.position.y+=i.userData.vy*e,i.position.z+=i.userData.vz*e,i.userData.vy*=.94,i.scale.setScalar((.7+Math.random()*.1)*(1+r*1.8)),i.material.opacity=.55*(1-r)}}createCoinPool(){this.coins=[];const e=new Tt(.55,.55,.12,18),t=new J({color:16498468,emissive:16096779,emissiveIntensity:.7,metalness:.6,roughness:.32});for(let n=0;n<8;n+=1){const i=new $(e,t.clone());i.rotation.x=Math.PI/2,i.visible=!1,i.userData={active:!1,value:50,spinPhase:Math.random()*Math.PI*2},this.coins.push(i),this.scene.add(i)}this.coinSpawnAcc=0}spawnCoin(){const e=this.coins.find(n=>!n.userData.active);if(!e)return;const t=Math.floor(Math.random()*3)-1;e.position.set(t*4.2,1.6,-260),e.userData.active=!0,e.userData.value=50+Math.floor(Math.random()*4)*25,e.visible=!0}updateCoins(e){if(this.coins){this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.coinSpawnAcc+=e,this.coinSpawnAcc>2.5+Math.random()*1.5&&(this.coinSpawnAcc=0,this.spawnCoin()));for(const t of this.coins){if(!t.userData.active)continue;if(t.userData.spinPhase+=e*4,t.rotation.y=t.userData.spinPhase,t.position.z+=this.state.speed*e*xi*16+.55,t.position.z>24){t.userData.active=!1,t.visible=!1;continue}const n=Math.abs(t.position.x-this.player.position.x),i=Math.abs(t.position.z-this.player.position.z);if(n<2.4&&i<2.8){t.userData.active=!1,t.visible=!1;const r=t.userData.value;this.state.score+=r,this.progress&&(this.progress.credits=(this.progress.credits||0)+Math.floor(r/5)),P.tip.textContent=`Coin grabbed! +${r} score`,this.audio.tone(1100,.08,"sine",.04),this.audio.tone(1500,.06,"sine",.03)}}}}createDamageFxPool(){this.damageFx=[];const e=new Jt(.16,6,5);for(let t=0;t<32;t+=1){const n=new $(e,new Ye({color:t%2?16347926:16708551,transparent:!0,opacity:0}));n.visible=!1,n.userData={active:!1,age:0,life:0,vx:0,vy:0,vz:0},this.damageFx.push(n),this.scene.add(n)}}spawnImpactSparks(e=1){if(!this.damageFx||!this.player)return;const t=Math.min(this.damageFx.length,Math.round(8+e*12));for(let n=0;n<t;n+=1){const i=this.damageFx.find(r=>!r.userData.active);if(!i)break;i.visible=!0,i.userData.active=!0,i.userData.age=0,i.userData.life=.35+Math.random()*.28,i.userData.vx=(Math.random()-.5)*(8+e*6),i.userData.vy=2+Math.random()*4,i.userData.vz=-2-Math.random()*(6+e*3),i.position.set(this.player.position.x+(Math.random()-.5)*2.2,this.player.position.y+.8+Math.random()*.5,this.player.position.z-.6+Math.random()*1.2),i.material.opacity=.95}}updateDamageFx(e){if(this.damageFx)for(const t of this.damageFx){if(!t.userData.active)continue;t.userData.age+=e;const n=t.userData.age/t.userData.life;if(n>=1){t.userData.active=!1,t.visible=!1,t.material.opacity=0;continue}t.position.x+=t.userData.vx*e,t.position.y+=t.userData.vy*e,t.position.z+=t.userData.vz*e,t.userData.vy-=e*8,t.material.opacity=1-n}}updatePlayerDamageVisuals(){if(!this.player)return;const e=1-ye.clamp(this.state.health/this.state.maxHealth,0,1),t=this.player.getObjectByName("player-damage-smoke");t&&(t.material.opacity=ye.clamp((e-.38)*1.7,0,.62),t.scale.setScalar(1+e*2.4+Math.sin(performance.now()*.006)*.12));for(let n=0;n<2;n+=1){const i=this.player.getObjectByName(`player-damage-crack-${n}`);i&&(i.material.opacity=e>(n?.48:.24)?.78:0)}}createNitroParticlePool(){this.nitroParticles=[];const e=new Jt(.34,6,6);for(let t=0;t<40;t+=1){const n=t%2===0?16486972:16638023,i=new Ye({color:n,transparent:!0,opacity:0}),r=new $(e,i);r.visible=!1,r.userData={age:0,life:0,vx:0,vy:0,vz:0},this.nitroParticles.push(r),this.scene.add(r)}this.nitroSpawnAcc=0}updateNitroParticles(e){if(!(!this.nitroParticles||!this.player)){if(this.state.nitroActive)for(this.nitroSpawnAcc+=e;this.nitroSpawnAcc>=.05;){this.nitroSpawnAcc-=.05;const t=this.nitroParticles.find(i=>!i.visible);if(!t)break;const n=Math.random()>.5?-1:1;t.position.set(this.player.position.x+n*.6+(Math.random()-.5)*.3,this.player.position.y+.5+Math.random()*.3,this.player.position.z+1.6+Math.random()*.3),t.userData.life=.45+Math.random()*.2,t.userData.age=0,t.userData.vx=(Math.random()-.5)*1.2,t.userData.vy=.6+Math.random()*.4,t.userData.vz=8+Math.random()*4,t.scale.setScalar(.6+Math.random()*.5),t.material.opacity=.9,t.visible=!0}else this.nitroSpawnAcc=0;for(const t of this.nitroParticles){if(!t.visible)continue;if(t.userData.age+=e,t.userData.age>=t.userData.life){t.visible=!1,t.material.opacity=0;continue}const n=t.userData.age/t.userData.life;t.position.x+=t.userData.vx*e,t.position.y+=t.userData.vy*e,t.position.z+=t.userData.vz*e,t.userData.vy*=.96,t.scale.setScalar((.6+Math.random()*.2)*(1+n*1.4)),t.material.opacity=.9*(1-n)}}}syncSettingsUi(){P.muteToggle.checked=this.settings.mute,P.musicToggle.checked=this.settings.music,P.sfxToggle.checked=this.settings.sfx,P.tiltToggle.checked=this.settings.tiltSteer}async initAds(){if(!Mt||this.adState.initialized||this.progress.adFreePurchased){this.progress.adFreePurchased&&(this.adState.lastError="Ad-Free Upgrade active",this.updateAdStatusUi());return}let e={status:Or.NOT_REQUIRED,canRequestAds:!0,isConsentFormAvailable:!1};try{await Ot.initialize();try{e=await Ot.requestConsentInfo(),this.adState.consentStatus=String(e.status),!e.canRequestAds&&e.isConsentFormAvailable&&(e=await Ot.showConsentForm(),this.adState.consentStatus=String(e.status)),this.adState.canRequestAds=!!e.canRequestAds}catch(t){if(this.adState.consentStatus="consent-error",rx(t))this.adState.canRequestAds=!0,this.adState.lastError="AdMob Privacy & messaging is not configured for this app ID yet. Using fallback ad requests.";else throw t}Ot.addListener($i.Loaded,()=>{this.adState.interstitialReady=!0,this.adState.interstitialLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),Ot.addListener($i.FailedToLoad,t=>{this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to load",this.updateAdStatusUi()}),Ot.addListener($i.Dismissed,()=>{this.adState.interstitialReady=!1,this.updateAdStatusUi(),this.prepareInterstitial()}),Ot.addListener($i.FailedToShow,t=>{this.adState.interstitialReady=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to show",this.updateAdStatusUi(),this.prepareInterstitial()}),Ot.addListener(bi.Loaded,()=>{this.adState.rewardedReady=!0,this.adState.rewardedLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),Ot.addListener(bi.FailedToLoad,t=>{this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to load",this.updateAdStatusUi()}),Ot.addListener(bi.Rewarded,()=>{this.adState.rewardedPurpose==="double-stage-reward"?this.claimDoubleStageReward():this.revivePlayer()}),Ot.addListener(bi.Dismissed,()=>{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.updateAdStatusUi(),this.prepareRewardedAd()}),Ot.addListener(bi.FailedToShow,t=>{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to show",this.updateAdStatusUi(),this.prepareRewardedAd()}),this.adState.initialized=!0,this.adState.canRequestAds?(await this.prepareInterstitial(),await this.prepareRewardedAd()):this.adState.lastError=e.status===Or.REQUIRED?"Consent required before ads can load":"Ad requests are blocked by consent status"}catch(t){this.adState.initialized=!1,this.adState.lastError=(t==null?void 0:t.message)||"AdMob initialization failed"}this.updateAdStatusUi()}async showTopBanner(){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi()}async hideTopBanner(){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi();try{await Ot.hideBanner(),await Ot.removeBanner()}catch{}}async prepareInterstitial(){if(!(!Mt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.interstitialReady||this.adState.interstitialLoading)){this.adState.interstitialLoading=!0,this.updateAdStatusUi();try{await Ot.prepareInterstitial({adId:yr?Vv:kv,immersiveMode:!0})}catch(e){this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Interstitial prepare failed",this.updateAdStatusUi()}}}async showStageInterstitial(){if(!(!Mt||this.progress.adFreePurchased||!this.adState.initialized))try{if(!this.adState.interstitialReady){await this.prepareInterstitial(),P.tip.textContent="Interstitial is still loading. It should appear after the next stage.";return}await Ot.showInterstitial()}catch{this.adState.interstitialReady=!1,this.adState.lastError="Interstitial show failed",this.prepareInterstitial()}}async prepareRewardedAd(){if(!(!Mt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.rewardedReady||this.adState.rewardedLoading)){this.adState.rewardedLoading=!0,this.updateAdStatusUi();try{await Ot.prepareRewardVideoAd({adId:yr?Gv:Bv,isTesting:yr})}catch(e){this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Rewarded ad prepare failed",this.updateAdStatusUi()}}}async showRewardedAd(e="revive"){if(!(!Mt||!this.adState.rewardedReady))try{this.adState.rewardedPurpose=e,await Ot.showRewardVideoAd()}catch{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.prepareRewardedAd()}}showDoubleRewardAd(){if(this.pendingDoubleReward){if(!Mt||!this.adState.rewardedReady||this.progress.adFreePurchased){this.claimDoubleStageReward();return}this.showRewardedAd("double-stage-reward")}}claimDoubleStageReward(){var i;if(!this.pendingDoubleReward)return;const{stageId:e,credits:t}=this.pendingDoubleReward,n=`${e}:${t}`;this.progress.doubledStageRewards.includes(n)||(this.progress.doubledStageRewards.push(n),this.progress.doubledStageRewards=this.progress.doubledStageRewards.slice(-25),this.progress.credits+=t,this.pendingDoubleReward=null,Ht(this.progress),this.refreshProgressUi(),this.renderGarage(),(i=P.doubleRewardButton)==null||i.classList.add("hidden"),P.tip.textContent=`Stage reward doubled. +${t} CR bonus.`,this.audio.tone(980,.15,"triangle",.045),this.audio.tone(1240,.18,"triangle",.035))}revivePlayer(){var e;this.state.hasRevived||(this.state.hasRevived=!0,this.state.gameOver=!1,this.state.running=!0,this.forceRunningUntil=performance.now()+8e3,this.state.health=Math.round(this.state.maxHealth*.4),this.state.fuel=Math.round(this.state.maxFuel*.5),this.state.cameraShake=0,P.overlay.classList.add("hidden"),(e=P.overlayShareButton)==null||e.classList.add("hidden"),P.reviveButton.classList.add("hidden"),this.audio.playMusic(),this.showTopBanner(),P.tip.textContent="You've been revived! Drive carefully.",this.audio.tone(880,.18,"triangle",.05),this.audio.tone(1100,.24,"triangle",.04))}updateComboDisplay(){P.comboDisplay&&(this.state.combo>1?(P.comboDisplay.textContent=`x${this.state.combo} COMBO`,P.comboDisplay.classList.remove("hidden"),P.comboDisplay.className=`combo-display combo-level-${this.state.combo}`):P.comboDisplay.classList.add("hidden"))}getDailyChallenge(){const e=new Date().toISOString().slice(0,10);if(this.progress.dailyChallenge&&this.progress.dailyChallenge.date===e)return this.progress.dailyChallenge;const t=e.split("-").reduce((o,l)=>o+parseInt(l,10),0),n=t%ah.length,i=ah[n],r=t%i.targets.length,a={date:e,type:i.type,label:i.label,desc:i.desc.replace("{target}",i.targets[r]),target:i.targets[r],progress:0,completed:!1,rewardClaimed:!1};return this.progress.dailyChallenge=a,Ht(this.progress),a}getWeeklyChallenge(){const e=new Date,t=new Date(e);t.setDate(e.getDate()-e.getDay());const n=t.toISOString().slice(0,10);if(this.progress.weeklyChallenge&&this.progress.weeklyChallenge.week===n)return this.progress.weeklyChallenge;const i=t.getFullYear()+t.getMonth()*7+t.getDate(),r=lh[i%lh.length],a=r.targets[i%r.targets.length],o={week:n,type:r.type,label:r.label,desc:r.desc.replace("{target}",a),target:a,progress:0,completed:!1,rewardClaimed:!1};return this.progress.weeklyChallenge=o,Ht(this.progress),o}claimDailyLoginReward(){const e=new Date().toISOString().slice(0,10);if(this.progress.lastLoginDate===e)return"";const t=new Date;t.setDate(t.getDate()-1);const n=t.toISOString().slice(0,10),i=this.progress.lastLoginDate===n?(this.progress.loginStreak||0)+1:1,r=Math.min(i,qv),a=Xv+r*$v;this.progress.lastLoginDate=e,this.progress.loginStreak=i,this.progress.credits+=a,this.progress=za(this.progress),Ht(this.progress);const o=i>=7&&this.progress.unlockedLiveries.includes("legend-gold")?" Legend Gold livery unlocked.":"";return`Daily login streak ${i}: +${a} CR.${o}`}updateWeeklyChallenge(e,t){const n=this.getWeeklyChallenge();!n||n.completed||n.type!==e||(n.progress=Math.max(n.progress||0,t),n.progress>=n.target&&(n.completed=!0,n.rewardClaimed||(n.rewardClaimed=!0,this.progress.credits+=oh,P.tip.textContent=`Weekly event complete! +${oh} CR bonus.`,this.audio.tone(980,.15,"triangle",.045)),Ht(this.progress),this.refreshProgressUi()),this.updateDailyChallengeUi())}updateDailyChallenge(e,t){const n=this.progress.dailyChallenge;!n||n.completed||n.type!==e||(t>=n.target?(n.completed=!0,n.rewardClaimed||(n.rewardClaimed=!0,this.progress.credits+=rh,Ht(this.progress),this.refreshProgressUi(),P.tip.textContent=`Daily challenge complete! +${rh} CR bonus.`,this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.14,"triangle",.03))):n.progress=t,this.updateDailyChallengeUi())}updateDailyChallengeUi(){if(!P.dailyBadge)return;const e=this.getDailyChallenge(),t=this.getWeeklyChallenge();if(!e){P.dailyBadge.classList.add("hidden");return}const n=Math.min(100,Math.round(e.progress/e.target*100)),i=t?Math.min(100,Math.round((t.progress||0)/t.target*100)):0;P.dailyBadge.classList.remove("hidden"),P.dailyBadge.innerHTML=e.completed?`<span class="daily-done">Daily: ${e.label} ✓</span>`:`<span>Daily: ${e.label} ${n}%</span>`;const r=t!=null&&t.completed?`<span class="daily-done">Weekly: ${t.label} done</span>`:`<span>Weekly: ${(t==null?void 0:t.label)||"Event"} ${i}%</span>`;P.dailyBadge.innerHTML+=r}refreshProgressUi(){P.saveStageText.textContent=`Highest stage: Stage ${this.progress.highestStage}`,P.saveScoreText.textContent=`Best score: ${Math.round(this.progress.bestScore)}`,P.creditsText.textContent=`Credits: ${Math.round(this.progress.credits)} CR`,this.progress.loginStreak>0&&(P.creditsText.textContent+=` | Streak ${this.progress.loginStreak}d`),P.progressionText&&(P.progressionText.textContent=`Level ${this.progress.level} | ${this.progress.xp} XP | ${this.progress.bossTokens} boss tokens | Chase ${this.progress.policeChaseWins} | Race ${this.progress.policeRaceWins}`),this.updateAdStatusUi()}updateAdStatusUi(){if(!P.adStatusText)return;if(!Mt){P.adStatusText.textContent="Ads: none on Windows";return}const e=yr?"test":"live",t=this.adState.canRequestAds?"requesting allowed":"request blocked",n="banner disabled",i=this.adState.interstitialReady?"interstitial ready":this.adState.interstitialLoading?"interstitial loading":"interstitial idle",r=this.adState.lastError?` | ${this.adState.lastError}`:"";P.adStatusText.textContent=`Ads: ${e}, ${t}, ${n}, ${i}${r}`}persistProgress(){const e=this.state.stageCompleted?this.state.stageIndex+2:this.state.stageIndex+1;this.progress.highestStage=Math.max(this.progress.highestStage,e),this.progress.bestScore=Math.max(this.progress.bestScore,Math.round(this.state.score)),this.progress.totalDistance+=Math.round(this.state.distance),this.progress=za(this.progress),Ht(this.progress),this.refreshProgressUi()}recordLeaderboardRun(e){const t={score:Math.round(this.state.score),stage:this.currentStage.id,track:this.currentStage.track.name,vehicle:this.selectedCar.label,drift:Math.round(this.state.driftScore),nearMisses:this.state.nearMissCount,outcome:e,date:new Date().toLocaleDateString()};return this.progress.localLeaderboard=[t,...this.progress.localLeaderboard||[]].sort((n,i)=>i.score-n.score).slice(0,10),Ht(this.progress),t}getScoreCardText(){var a;const e=(a=this.progress.localLeaderboard)==null?void 0:a[0],t=Math.round(this.state.score||(e==null?void 0:e.score)||this.progress.bestScore||0),n=(e==null?void 0:e.track)||this.currentStage.track.name,i=(e==null?void 0:e.vehicle)||this.selectedCar.label,r=Math.round(this.state.driftScore||(e==null?void 0:e.drift)||0);return`Need 4 Speed Lahore | ${n} | ${i} | Score ${t} | Drift ${r} | Near misses ${this.state.nearMissCount||(e==null?void 0:e.nearMisses)||0}`}shareScoreCard(){const e=this.getScoreCardText();navigator.share?navigator.share({title:"Need 4 Speed Lahore score",text:e}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(e).catch(()=>{}),P.tip.textContent="Score card copied for sharing."}isMissionComplete(e=this.currentStage){return e.mission.type==="clean-finish"?this.state.health>=e.mission.target:e.mission.type==="fuel-save"?this.state.fuel>=e.mission.target:e.mission.type==="near-miss"?this.state.nearMissCount>=e.mission.target:e.mission.type==="score-target"?this.state.score>=e.mission.target:!1}setPaused(e){this.state.gameOver||this.state.stageCompleted||(this.state.paused=e,document.body.classList.toggle("settings-open",e),this.clearTouchInput(),P.settingsPanel.classList.toggle("hidden",!e),P.pauseButton.innerHTML=`<span class="icon-glyph">${e?">":"II"}</span><span class="icon-label">${e?"Resume":"Pause"}</span>`,P.pauseButton.setAttribute("aria-label",e?"Resume":"Pause"),e?(P.tip.textContent="Paused. Adjust settings or resume.",this.audio.suspend(),this.showTopBanner()):this.state.running&&(this.audio.resume(),this.audio.playMusic(),this.showTopBanner(),P.tip.textContent=Is?`Hold left or right side of the road to steer. ${this.settings.tiltSteer?"Tilt steering is on.":"Enable tilt steering in Settings if you want."}`:`${this.currentStage.tip} Vehicle: ${this.selectedCar.label}.`))}clearTouchInput(){this.touchInput.steerZone=0,this.touchInput.brake=!1,this.touchInput.nitro=!1,this.steerPointerId=null,document.querySelectorAll("[data-touch]").forEach(e=>e.classList.remove("is-pressed"))}setSteerFromPointer(e){const t=this.container.getBoundingClientRect(),n=e-t.left;this.touchInput.steerZone=n<t.width*.5?-1:1}async configureTiltSteer(e){if(!e){this.motionSteer=0,this.settings.tiltSteer=!1,Ts(this.settings),this.syncSettingsUi();return}if(typeof window.DeviceOrientationEvent>"u"){this.settings.tiltSteer=!1,Ts(this.settings),this.syncSettingsUi(),P.tip.textContent="Tilt steering is not available on this device.";return}if(typeof window.DeviceOrientationEvent.requestPermission=="function")try{if(await window.DeviceOrientationEvent.requestPermission()!=="granted")throw new Error("denied")}catch{this.settings.tiltSteer=!1,Ts(this.settings),this.syncSettingsUi(),P.tip.textContent="Tilt steering permission was denied.";return}this.settings.tiltSteer=!0,Ts(this.settings),this.syncSettingsUi(),P.tip.textContent="Tilt steering enabled. Hold the phone like a steering wheel."}handleAppBackground(){this.clearTouchInput(),this.hideTopBanner(),this.audio.suspend(),this.state.running&&!this.state.paused&&!this.state.gameOver&&!this.state.stageCompleted&&(this.autoPausedFromBackground=!0,this.setPaused(!0),P.tip.textContent="Paused in background. Tap Resume when you return.")}updateSetting(e,t){this.settings[e]=t,Ts(this.settings),this.audio.setSettings(this.settings),this.syncSettingsUi(),!this.settings.mute&&this.settings.music&&this.state.running&&!this.state.paused&&this.audio.playMusic()}bindEvents(){var t,n,i,r,a;window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",o=>{this.keys.add(o.code),o.code==="Escape"&&(o.preventDefault(),this.setPaused(!this.state.paused)),o.code==="Space"&&(o.preventDefault(),(!this.state.running||this.state.gameOver)&&this.startRun()),o.code==="KeyP"&&fh&&(o.preventDefault(),this.debugSpawnPolice())}),window.addEventListener("keyup",o=>this.keys.delete(o.code)),window.addEventListener("blur",()=>{document.hidden&&this.handleAppBackground()}),document.addEventListener("visibilitychange",()=>{document.hidden?this.handleAppBackground():!this.adState.bannerVisible&&(this.state.running||this.state.paused)&&this.showTopBanner()});const e=o=>{o.preventDefault(),this.startRun()};if(P.overlayButton.addEventListener("click",e),(t=P.policeChaseButton)==null||t.addEventListener("click",o=>{o.preventDefault(),this.startRun(Qe.policeChase.key)}),(n=P.policeRaceButton)==null||n.addEventListener("click",o=>{o.preventDefault(),this.startRun(Qe.policeRace.key)}),(i=P.overlayShareButton)==null||i.addEventListener("click",o=>{o.preventDefault(),this.shareScoreCard()}),P.overlay.addEventListener("pointerup",o=>{o.target!==P.overlayButton&&(o.target===P.policeChaseButton||o.target===P.policeRaceButton||P.reviveButton&&!P.reviveButton.classList.contains("hidden")&&o.target===P.reviveButton||P.overlayShareButton&&!P.overlayShareButton.classList.contains("hidden")&&o.target===P.overlayShareButton||e(o))}),P.reviveButton.addEventListener("click",()=>this.showRewardedAd("revive")),(r=P.doubleRewardButton)==null||r.addEventListener("click",()=>this.showDoubleRewardAd()),(a=P.shareScoreButton)==null||a.addEventListener("click",()=>this.shareScoreCard()),P.pauseButton.addEventListener("click",()=>{this.state.paused?this.setPaused(!1):this.setPaused(!0)}),P.settingsButton.addEventListener("click",()=>this.setPaused(!0)),P.resumeButton.addEventListener("click",()=>this.setPaused(!1)),P.settingsPanel.addEventListener("pointerdown",o=>o.stopPropagation()),P.settingsPanel.addEventListener("pointermove",o=>o.stopPropagation()),P.settingsPanel.addEventListener("wheel",o=>o.stopPropagation(),{passive:!0}),P.settingsPanel.addEventListener("pointerdown",o=>o.stopPropagation()),P.settingsPanel.addEventListener("pointermove",o=>o.stopPropagation()),P.settingsPanel.addEventListener("wheel",o=>o.stopPropagation(),{passive:!0}),document.querySelectorAll("[data-settings-tab]").forEach(o=>{o.addEventListener("click",()=>this.setSettingsTab(o.dataset.settingsTab))}),P.muteToggle.addEventListener("change",o=>this.updateSetting("mute",o.target.checked)),P.musicToggle.addEventListener("change",o=>this.updateSetting("music",o.target.checked)),P.sfxToggle.addEventListener("change",o=>this.updateSetting("sfx",o.target.checked)),P.tiltToggle.addEventListener("change",o=>this.configureTiltSteer(o.target.checked)),document.querySelectorAll("[data-touch]").forEach(o=>{const l=o.dataset.touch,h=(c,d)=>{d.preventDefault(),this.touchInput[l]=c,o.classList.toggle("is-pressed",c)};o.addEventListener("pointerdown",c=>h(!0,c)),o.addEventListener("pointerup",c=>h(!1,c)),o.addEventListener("pointercancel",c=>h(!1,c)),o.addEventListener("pointerleave",c=>h(!1,c)),o.addEventListener("lostpointercapture",c=>h(!1,c))}),Is){this.container.addEventListener("pointerdown",l=>{l.pointerType==="touch"&&(l.target.closest(".touch-controls, .top-actions, .settings-panel, .overlay-card")||(this.steerPointerId=l.pointerId,this.setSteerFromPointer(l.clientX)))}),this.container.addEventListener("pointermove",l=>{l.pointerType!=="touch"||l.pointerId!==this.steerPointerId||this.setSteerFromPointer(l.clientX)});const o=l=>{l.pointerType==="touch"&&this.steerPointerId===l.pointerId&&(this.touchInput.steerZone=0,this.steerPointerId=null)};this.container.addEventListener("pointerup",o),this.container.addEventListener("pointercancel",o),this.container.addEventListener("pointerleave",o),window.addEventListener("deviceorientation",l=>{if(!this.settings.tiltSteer)return;const h=typeof l.gamma=="number"?l.gamma:0;this.motionSteer=ye.clamp(h/18,-1,1)})}}startRun(e=Qe.career.key){var n;if(!this.trafficModelsReady&&!this.trafficModelLoadPromise){P.tip.textContent="Loading realistic traffic cars...",this.ensureTrafficModelsLoaded().finally(()=>this.startRun(e));return}if(!this.trafficModelsReady&&this.trafficModelLoadPromise){P.tip.textContent="Loading realistic traffic cars...",this.trafficModelLoadPromise.finally(()=>this.startRun(e));return}const t=this.getModelPath("player",this.selectedCar.key);if(t&&!this.modelTemplates.has(t)&&!this.failedModelPaths.has(t)){P.tip.textContent=`Loading ${this.selectedCar.label} model...`,this.loadCurrentPlayerModel().finally(()=>this.startRun(e));return}if(this.progress.onboardingSeen||(this.progress.onboardingSeen=!0,Ht(this.progress)),this.state.stageCompleted){const i=this.state.stageIndex+1;this.state=this.initialState(),this.state.stageIndex=i}else if(!this.state.running&&!this.state.gameOver){const i=this.state.stageIndex;this.state=this.initialState(),this.state.stageIndex=i}else this.state=this.initialState();this.pendingRunMode=e,this.state.gameMode=e,this.selectedCar=this.getSelectedGarageVehicle(),this.state.maxSpeed=this.selectedCar.topSpeed,this.state.maxHealth=this.selectedCar.maxHealth??100,this.state.maxFuel=this.selectedCar.maxFuel??100,this.state.maxNitro=this.selectedCar.maxNitro??100,this.state.health=this.state.maxHealth,this.state.fuel=this.state.maxFuel,this.state.nitro=this.state.maxNitro,this.createPlayerCar(),this.applyTrackTheme(),this.state.running=!0,this.state.countdown=0,this.state.countdownStarted=!1,this.state.targetSpeed=Math.min(45,this.currentStage.speedCap*.35),this.state.speed=Math.min(22,this.state.targetSpeed),this.state.stageProgress=1,this.resetRoadsideAnchors(),this.player.position.set(0,.72,10),this.player.rotation.set(0,this.player.userData.baseYaw??0,0),this.traffic.forEach(i=>this.deactivate(i)),this.police.forEach(i=>this.deactivate(i)),this.roadblocks.forEach(i=>this.deactivate(i)),this.rivalBoss&&this.deactivate(this.rivalBoss),this.policeRaceLeader&&this.deactivate(this.policeRaceLeader),this.fuelCans.forEach(i=>this.deactivate(i)),this.healers.forEach(i=>this.deactivate(i)),this.resetFinishLine(),P.overlay.classList.add("hidden"),this.audio.resume(),(n=P.doubleRewardButton)==null||n.classList.add("hidden"),this.pendingDoubleReward=null,this.showTopBanner(),this.setPaused(!1),this.showRaceBanner("Go",Qe[e===Qe.policeChase.key?"policeChase":e===Qe.policeRace.key?"policeRace":"career"].label,this.currentStage.track.vibe,1.2),P.tip.textContent=Is?`${this.getRunModeLabel()}: ${this.getRunModeObjective()} Hold left or right side of the road to steer.${this.settings.tiltSteer?" Tilt steering is on.":""}`:`${this.getRunModeLabel()}: ${this.getRunModeObjective()} Vehicle: ${this.selectedCar.label}.`,P.overlayButton.textContent="Start Run",this.audio.playMusic(!0),this.audio.tone(440,.18,"square",.05),e===Qe.policeChase.key?this.startPoliceChaseMode():e===Qe.policeRace.key?this.startPoliceRaceMode():this.currentStage.isBoss?(this.state.heat=Math.max(this.state.heat,this.currentStage.policeHeatThreshold+8),this.spawnBossRival(),this.showRaceBanner("Boss Race",this.rivalBoss.userData.name,this.rivalBoss.userData.taunt,2.8),this.audio.playPoliceSiren()):this.selectedCar.premium&&(this.state.cinematicTimer=1.1,this.showRaceBanner("Premium Intro",this.selectedCar.label,"Launch sequence armed",1.6),this.audio.playNitroBurst()),this.updateHud()}getRunModeDefinition(){return this.state.gameMode===Qe.policeChase.key?Qe.policeChase:this.state.gameMode===Qe.policeRace.key?Qe.policeRace:Qe.career}getRunModeLabel(){return this.getRunModeDefinition().label}getRunModeObjective(){return this.getRunModeDefinition().objective}isSpecialPoliceMode(){return this.state.gameMode===Qe.policeChase.key||this.state.gameMode===Qe.policeRace.key}getEffectivePoliceThreshold(e=this.currentStage){return this.state.gameMode===Qe.policeChase.key?Math.min(e.policeHeatThreshold,42):this.state.gameMode===Qe.policeRace.key?Math.min(e.policeHeatThreshold,34):e.policeHeatThreshold}startPoliceChaseMode(){const e=this.currentStage;this.state.heat=Math.max(this.state.heat,Math.min(100,this.getEffectivePoliceThreshold(e)+Yv)),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,2),this.state.policeSpawn=0,this.state.roadblockSpawn=0,this.state.spikeSpawn=0,this.spawnPoliceCar(),this.showRaceBanner("Police Chase","Wanted Run","Escape Lahore Police before the finish",2.4),this.audio.playPoliceSiren()}startPoliceRaceMode(){const e=this.currentStage;this.policeRaceLeader||this.createPoliceRaceLeader(),this.state.heat=Math.max(this.state.heat,Math.min(100,this.getEffectivePoliceThreshold(e)+jv)),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,3),this.state.policeSpawn=0,this.state.roadblockSpawn=0,this.state.spikeSpawn=0,this.spawnPoliceRaceLeader(),this.spawnPoliceCar(),this.showRaceBanner("Police Race","Interceptor Ahead","Overtake the police leader before the finish",2.6),this.audio.playPoliceSiren()}debugSpawnPolice(){if(!this.state.running||this.state.paused||this.state.gameOver||this.state.stageCompleted){P.tip.textContent="Start a run, then press P to spawn police.";return}const e=this.currentStage;this.state.heat=Math.max(this.state.heat,e.policeHeatThreshold+32),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,3),this.state.policeSpawn=0,this.state.roadblockSpawn=0,this.spawnPoliceCar(),this.spawnPoliceCar(),this.spawnRoadblock(),this.showRaceBanner("Debug Pursuit",`Level ${this.state.pursuitLevel}`,"Police and roadblock spawned",1.8),this.audio.playPoliceSiren(),P.tip.textContent="Debug: police pursuit spawned.",this.updateHud()}deactivate(e){e.visible=!1,e.userData.active=!1,e.position.set(0,-50,0)}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}render(){requestAnimationFrame(()=>this.render());const e=performance.now(),t=Math.min((e-this.lastRenderTime)/1e3,.033);this.lastRenderTime=e,this.renderFrame(t)}startFrameFallback(){if(this.frameFallback)return;let e=performance.now();this.frameFallback=window.setInterval(()=>{const t=performance.now();if(t-this.lastFrameAt<250)return;const n=Math.min((t-e)/1e3,.033);e=t,this.renderFrame(n)},100)}renderFrame(e){this.lastFrameAt=performance.now(),this.forceRunningUntil>performance.now()&&!this.state.gameOver&&!this.state.stageCompleted&&(this.state.running=!0,this.state.paused=!1),this.state.bannerTimer>0&&(this.state.bannerTimer=Math.max(0,this.state.bannerTimer-e),P.raceBanner.classList.toggle("hidden",this.state.bannerTimer<=0));const t=this.state.slowMoTimer>0?e*.46:e;if(this.state.slowMoTimer>0&&(this.state.slowMoTimer=Math.max(0,this.state.slowMoTimer-e)),this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.updateState(t),this.updateWorld(t),this.updateHud()),this.updateNitroParticles(e),this.updateTrafficDust(e),this.updateCoins(e),this.updateDamageFx(e),this.updatePlayerDamageVisuals(),P.speedVignette){const l=ye.clamp((this.state.speed-100)/130,0,.72);P.speedVignette.style.opacity=l}const n=(Math.random()-.5)*this.state.cameraShake,i=(Math.random()-.5)*this.state.cameraShake*.5,a=this.getRoadCenterOffsetAtProgress(this.getTrackProgress())*.78+this.player.position.x*.28+this.state.roadDrift*.18;this.camera.position.x=ye.lerp(this.camera.position.x,a+n,.08),this.camera.position.y=ye.lerp(this.camera.position.y,th+this.state.speed*.009+i,.08),this.camera.position.z=ye.lerp(this.camera.position.z,nh-Math.min(1.8,this.state.speed*.007),.08),this.camera.fov=ye.lerp(this.camera.fov,this.cameraBaseFov+Math.min(Fv,this.state.speed*.032),.1),this.camera.updateProjectionMatrix();const o=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+130));this.camera.lookAt(o+this.player.position.x*.18,1.8+this.state.bodyPitch*.16,-10),this.renderer.render(this.scene,this.camera)}updateState(e){const t=this.keys.has("ArrowLeft")||this.keys.has("KeyA"),n=this.keys.has("ArrowRight")||this.keys.has("KeyD"),i=this.keys.has("ArrowDown")||this.keys.has("KeyS")||this.touchInput.brake,r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchInput.nitro,a=this.currentStage;if(this.state.stageTime+=e,this.state.cinematicTimer>0){this.state.cinematicTimer=Math.max(0,this.state.cinematicTimer-e),this.state.cameraShake=Math.min(.42,this.state.cameraShake+e*.35),this.player.rotation.y=ye.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+.18,.08),P.tip.textContent=`${this.selectedCar.label} rolling out.`;return}if(this.state.countdown>0){this.state.countdown-=e;const E=Math.ceil(this.state.countdown);if(E>0){(!this.state.countdownStarted||E!==Math.ceil(this.state.countdown+e))&&(this.audio.tone(520,.08,"triangle",.035),this.showRaceBanner("Countdown",String(E),`${a.track.name} - ${a.track.vibe}`,.22)),this.state.countdownStarted=!0,this.state.speed=ye.lerp(this.state.speed,0,.2),this.state.targetSpeed=0,P.tip.textContent=`Get ready. ${a.track.name} opens in ${E}. Mission: ${a.mission.label}.`;return}this.state.countdown=0,this.audio.tone(760,.14,"square",.045),this.showRaceBanner("Go",a.track.name,a.track.vibe,1.2),P.tip.textContent=`${a.name}: ${a.mission.label}.`}this.state.targetSpeed+=this.selectedCar.accel*e,i&&(this.state.targetSpeed-=(110+this.selectedCar.grip*18)*e),i||(this.state.targetSpeed-=Math.max(0,8-this.selectedCar.accel*.03)*e),this.state.targetSpeed=ye.clamp(this.state.targetSpeed,0,Math.min(this.state.maxSpeed,a.speedCap));let o=Math.min(this.state.maxSpeed,a.speedCap);this.state.nitroActive=!!(r&&this.state.nitro>2),this.state.nitroActive?(this.state.nitroWasActive||this.audio.playNitroBurst(),this.state.nitroWasActive=!0,o+=Math.min(this.selectedCar.nitroBoost??30,Math.max(12,a.speedCap*.12)),this.state.nitro=Math.max(0,this.state.nitro-34*e),this.state.cameraShake=Math.min(.34,this.state.cameraShake+e*.5),P.tip.textContent=`Nitro engaged. ${a.name} still enforces a speed cap.`):(this.state.nitroWasActive=!1,this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+12*e));const l=Math.abs(this.player.position.x)>7.2?.94:1,h=this.getRoadCenterOffsetAtProgress(this.getTrackProgress()),c=Math.abs(this.player.position.x-h),d=c>7.2?.88:c>5.3?.95:1;this.state.speed=ye.lerp(this.state.speed,Math.min(this.state.targetSpeed,o)*l*d,.06),this.state.engineTimer=0;const u=ye.clamp((t?-1:0)+(n?1:0)+this.touchInput.steerZone+this.motionSteer,-1,1),f=Math.max(5.6,8.8-this.state.speed*.014);this.player.position.x+=u*e*(f+this.state.speed*.026)*this.selectedCar.grip,this.player.position.x=ye.clamp(this.player.position.x,h-8.7,h+8.7),this.state.steerVisual=ye.lerp(this.state.steerVisual,u,.12),this.state.bodyRoll=ye.lerp(this.state.bodyRoll,-u*(.08+this.state.speed*7e-4),.12),this.state.bodyPitch=ye.lerp(this.state.bodyPitch,i?.16:-.05,.08),this.state.roadDrift=ye.lerp(this.state.roadDrift,u*Math.min(2.4,this.state.speed*.008),.06),this.state.cameraShake=ye.lerp(this.state.cameraShake,0,.08);const g=Math.abs(u)*ye.clamp((this.state.speed-70)/115,0,1)*ye.clamp((c-2.2)/5.2,0,1);if(g>.24){const E=g*e*110;this.state.driftScore+=E,this.state.score+=E*.8,this.state.driftTimer+=e,this.state.driftTimer>.45&&(this.state.driftTimer=0,this.audio.playDrift()),this.updateWeeklyChallenge("drift",this.state.driftScore)}else this.state.driftTimer=Math.max(0,this.state.driftTimer-e*2);this.player.rotation.z=ye.lerp(this.player.rotation.z,this.state.bodyRoll,.12),this.player.rotation.x=ye.lerp(this.player.rotation.x,this.state.bodyPitch,.1);const _=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+90)),m=ye.clamp((_-h)*.035,-.22,.22);this.player.rotation.y=ye.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+m-u*.1,.12),this.state.distance+=this.state.speed*e*1.6,this.state.stageProgress+=this.state.speed*e*1.6,this.state.score+=this.state.speed*e*.72*a.scoreBonus,this.state.comboTimer>0&&(this.state.comboTimer-=e,this.state.comboTimer<=0&&(this.state.combo=0,this.state.comboMultiplier=1,this.updateComboDisplay())),this.updateDailyChallenge("score",this.state.score),this.updateDailyChallenge("distance",this.state.distance),this.updateWeeklyChallenge("score",this.state.score),this.state.fuel=Math.max(0,this.state.fuel-e*(2+this.state.speed*.02)*this.selectedCar.fuelDrain*a.fuelUseScale);const p=this.getEffectivePoliceThreshold(a),y=this.state.gameMode===Qe.policeChase.key?Zv:this.state.gameMode===Qe.policeRace.key?Jv:-1.45,b=this.isSpecialPoliceMode()&&this.state.stageTime<hh;this.state.heat=ye.clamp(this.state.heat+Math.max(0,this.state.speed-135)*e*(a.isBoss?.12:.085)+e*y,0,100);const M=this.state.pursuitLevel;this.state.pursuitLevel=this.state.heat<p?0:Math.min(5,1+Math.floor((this.state.heat-p)/14)),this.state.pursuitLevel>M&&(this.showRaceBanner("Pursuit Escalated",`Level ${this.state.pursuitLevel}`,this.state.pursuitLevel>=4?"Spike teams and rammers inbound":this.state.pursuitLevel>=3?"Roadblocks authorized":"Interceptors closing in",1.5),this.audio.playPoliceSiren(),this.state.pursuitLevel>=4&&!b&&(this.spawnPoliceCar(),this.spawnPoliceCar())),this.updateFinishLine(e),this.state.fuel<this.state.maxFuel*.25&&(P.tip.textContent="Fuel is running low. Grab the next can."),this.state.health<35&&(P.tip.textContent="Heavy damage. Another hard impact could end the run."),this.state.heat>Math.max(72,p+8)&&(P.tip.textContent=this.state.gameMode===Qe.policeRace.key?"Police race pressure is high. Beat the interceptor.":"Police pressure is high. Expect interceptors."),this.state.trafficSpawn+=e,this.state.policeSpawn+=e,this.state.fuelSpawn+=e,this.state.healerSpawn+=e,this.state.roadblockSpawn+=e,this.state.spikeSpawn+=e,this.state.hornTimer+=e,this.state.sirenTimer+=e;const A=ye.lerp(1.3,.45,this.state.speed/225)*a.trafficBias;this.state.trafficSpawn>=A&&this.state.stageProgress>60&&(this.state.trafficSpawn=0,this.spawnTrafficCar()),!b&&this.state.heat>p&&this.state.policeSpawn>=ye.lerp(9,3.5,this.state.heat/100)*a.policeSpawnScale&&(this.state.policeSpawn=0,this.spawnPoliceCar(),this.state.pursuitLevel>=4&&Math.random()>.55&&this.spawnPoliceCar(),this.state.sirenTimer>2.2&&(this.state.sirenTimer=0,this.audio.playPoliceSiren())),this.state.pursuitLevel>=3&&!b&&this.getTrackProgress()>=dh&&this.state.roadblockSpawn>=ye.lerp(10,4.5,this.state.pursuitLevel/5)&&!this.roadblocks.some(E=>E.userData.active)&&(this.state.roadblockSpawn=0,this.spawnRoadblock()),this.state.pursuitLevel>=4&&!b&&this.getTrackProgress()>=uh&&this.state.spikeSpawn>=ye.lerp(13,6,this.state.pursuitLevel/5)&&!this.roadblocks.some(E=>E.userData.active&&E.userData.kind==="spike")&&(this.state.spikeSpawn=0,this.spawnRoadblock("spike")),this.state.fuelSpawn>=a.fuelSpawnEvery&&(this.state.fuelSpawn=0,this.spawnFuelCan()),this.state.health<this.state.maxHealth*.6&&this.state.healerSpawn>=8.5&&!this.healers.some(E=>E.userData.active)&&(this.state.healerSpawn=0,this.spawnHealer()),(this.state.health<=0||this.state.fuel<=0)&&this.endRun()}updateFinishLine(e){const t=this.currentStage;if(!this.finishLine||this.state.stageCompleted)return;const n=Math.max(0,t.length-this.state.stageProgress);this.finishLine.visible=n<=130,this.finishLine.position.z=ye.lerp(this.finishLine.position.z,-16-n*.16,Math.min(1,e*8)),this.finishLine.position.x=ye.lerp(this.finishLine.position.x,this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+n)),Math.min(1,e*6)),n<=120&&(P.tip.textContent=`Finish line ahead. Clear ${t.name}.`),n<=0&&this.completeStage()}completeStage(){var p,y;const e=this.currentStage,t=this.state.gameMode,n=t===Qe.policeChase.key&&this.state.pursuitLevel>=2,i=t===Qe.policeRace.key&&this.state.policeRaceOvertaken,r=t===Qe.policeRace.key?i:this.isMissionComplete(e)&&(!e.isBoss||this.state.rivalOvertaken),a=t===Qe.policeRace.key?i?260:90:t===Qe.policeChase.key?n?210:80:0,o=e.missionReward+(r?e.bonusReward:0)+a,l=_t.find(b=>zo[b.key]===this.state.stageIndex+1);let h="No new car unlock this stage.";const c=r&&this.state.health>this.state.maxHealth*.6?3:r?2:1,d=`stage_${e.id}`,u=this.progress.stageStars[d]||0;c>u&&(this.progress.stageStars[d]=c),this.state.running=!1,this.state.stageCompleted=!0,this.state.speed=0,this.state.targetSpeed=0,this.state.stageProgress=e.length,this.audio.stopMusic(),this.hideTopBanner(),this.audio.tone(523,.16,"triangle",.045),this.audio.tone(659,.2,"triangle",.045),this.progress.credits+=o,e.isBoss&&(this.progress.bossClears=Math.max(0,this.progress.bossClears||0)+1,this.progress.bossTokens=Math.max(0,this.progress.bossTokens||0)+1,this.updateWeeklyChallenge("boss_clear",this.progress.bossClears)),n&&(this.progress.policeChaseWins=Math.max(0,this.progress.policeChaseWins||0)+1),i&&(this.progress.policeRaceWins=Math.max(0,this.progress.policeRaceWins||0)+1);const f=90+e.id*18+c*35+Math.round(this.state.driftScore/40)+this.state.nearMissCount*12+(t===Qe.policeRace.key?90:t===Qe.policeChase.key?70:0),g=this.progress.level||1;if(this.progress.xp=Math.max(0,this.progress.xp||0)+f,this.progress.level=1+Math.floor(this.progress.xp/500),this.progress.level>g&&this.progress.level%3===0){const b=`level_${this.progress.level}_${Date.now()}`;this.progress.milestoneCrates=[...this.progress.milestoneCrates||[],b].slice(-30),this.progress.credits+=250}this.progress.lifetimeStageClears=Math.max(0,this.progress.lifetimeStageClears||0)+1,l&&!this.progress.ownedVehicles.includes(l.key)?(this.progress.ownedVehicles.push(l.key),this.progress.selectedVehicleKey=l.key,this.selectedCar=this.getSelectedGarageVehicle(),h=`Unlocked ${l.label}. It is now equipped in your garage.`):r&&(h="Mission bonus secured."),this.persistProgress(),this.recordLeaderboardRun("Stage clear"),this.pendingDoubleReward={stageId:e.id,credits:o},this.renderGarage(),this.renderTrackMaps(),this.finishLine&&(this.finishLine.visible=!0,this.finishLine.position.z=this.player.position.z-5,this.finishLine.position.x=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(e.length)));const _=wh(this.state.stageIndex+1),m="★".repeat(c)+"☆".repeat(3-c);this.updateOverlay(`Stage ${e.id} Complete ${m}`,e.name,`Finish line crossed. Earned ${o} CR and ${f} XP.${t===Qe.policeRace.key?i?" Police race won.":" Police race objective missed.":t===Qe.policeChase.key?n?" Police chase escaped.":" Chase survived with low heat.":r?` Mission cleared: ${e.mission.label}.`:` Mission missed: ${e.mission.label}.`} ${e.isBoss?"Boss token awarded. ":""}${h} Next up: ${_.name}, ${_.lengthKm} KM. Press Start Stage ${_.id} to continue.`,_.track),P.overlayButton.textContent=`Start Stage ${_.id}`,(p=P.overlayShareButton)==null||p.classList.remove("hidden"),(y=P.doubleRewardButton)==null||y.classList.toggle("hidden",Mt&&!this.progress.adFreePurchased?!this.adState.rewardedReady:!1),window.setTimeout(()=>this.startBackgroundModelLoading(),1200),e.id%zv===0&&this.showStageInterstitial()}updateWorld(e){var i;const t=this.state.speed*e*xi;this.roadMarkers.forEach(r=>{r.position.z+=t*bs,r.position.z>18&&(r.position.z-=520),r.position.x=r.userData.laneX+this.getRoadCenterOffsetAtZ(r.position.z)}),this.roadGlows.forEach(r=>{r.position.z+=t*bs,r.material.opacity=.1+Math.sin(performance.now()*.003+r.position.z*.04)*.03,r.position.z>18&&(r.position.z-=520),r.position.x=r.userData.laneX+this.getRoadCenterOffsetAtZ(r.position.z)});const n=this.getRoadCenterOffsetAtProgress(this.getTrackProgress());this.shoulderLeft&&this.shoulderRight&&(this.shoulderLeft.position.x=n-12.2,this.shoulderRight.position.x=n+12.2,this.shoulderLeft.rotation.z=0,this.shoulderRight.rotation.z=0),this.roadside.forEach(r=>{r.position.z+=t*bs,r.position.z>28&&(r.position.z=-380-Math.random()*120,r.userData.baseOffset=18+Math.random()*18,r.scale.setScalar(.9+Math.random()*.35),r.userData.anchoredX=this.getRoadCenterOffsetAtZ(r.position.z)+r.userData.side*r.userData.baseOffset),typeof r.userData.anchoredX!="number"&&(r.userData.anchoredX=this.getRoadCenterOffsetAtZ(r.position.z)+r.userData.side*r.userData.baseOffset),r.position.x=r.userData.anchoredX,r.rotation.y=r.userData.side<0?.18:-.18}),this.lightPosts.forEach((r,a)=>{r.position.z+=t*bs,r.position.z>28&&(r.position.z=-420-a*18,r.userData.anchoredX=this.getRoadCenterOffsetAtZ(r.position.z)+r.userData.side*r.userData.baseOffset),typeof r.userData.anchoredX!="number"&&(r.userData.anchoredX=this.getRoadCenterOffsetAtZ(r.position.z)+r.userData.side*r.userData.baseOffset),r.position.x=r.userData.anchoredX}),this.scenicRoadside.forEach(r=>{r.position.z+=t*bs,r.position.z>36&&(r.position.z=(r.userData.baseZ||-120)-360),r.userData.anchoredX=this.getRoadCenterOffsetAtZ(r.position.z)+r.userData.side*r.userData.baseOffset,r.position.x=r.userData.anchoredX}),this.buildings.forEach(r=>{r.material.emissive=new Ue(988970),r.material.emissiveIntensity=.08}),this.updateTrafficCars(e),this.updatePoliceCars(e),this.updateRoadblocks(e),this.updateBossRival(e),this.state.gameMode===Qe.policeRace.key&&!this.state.policeRaceOvertaken&&!this.state.stageCompleted&&!this.state.gameOver&&!((i=this.policeRaceLeader)!=null&&i.userData.active)&&(this.policeRaceLeader||this.createPoliceRaceLeader(),this.spawnPoliceRaceLeader()),this.updatePoliceRaceLeader(e),this.updateHelicopterSpotlight(e),this.updateFuelCans(e),this.updateHealers(e)}spawnBossRival(){if(!this.rivalBoss)return;const e=Ua[Math.floor(this.state.stageIndex/3)%Ua.length],t=Math.floor(Math.random()*Gn.length);this.rivalBoss.userData={...this.rivalBoss.userData,active:!0,name:e.name,car:e.car,taunt:e.taunt,lane:t},this.rivalBoss.visible=!0,this.state.rivalGap=86,this.state.rivalOvertaken=!1,this.rivalBoss.position.set(this.getLaneWorldX(t,-72),.72,-72),this.rivalBoss.rotation.set(0,this.rivalBoss.userData.baseYaw??0,0)}updateBossRival(e){var o;if(!((o=this.rivalBoss)!=null&&o.userData.active)||!this.currentStage.isBoss)return;const t=this.getTrackProgress(),n=t>.78?-6:ye.lerp(92,22,t);this.state.rivalGap=ye.lerp(this.state.rivalGap,n,e*.7),!this.state.rivalCatchupShown&&t>.42&&t<.5&&this.state.rivalGap>32&&(this.state.rivalCatchupShown=!0,this.showRaceBanner("Rival Catch-Up",this.rivalBoss.userData.name,"Slipstream window open",1.4));const i=t>.72?Math.round((this.player.position.x-this.getRoadCenterOffsetAtProgress(t))/6.5)+1:this.rivalBoss.userData.lane,r=ye.clamp(i,0,Gn.length-1),a=this.player.position.z-this.state.rivalGap;this.rivalBoss.position.z=ye.lerp(this.rivalBoss.position.z,a,e*1.4),this.rivalBoss.position.x=ye.lerp(this.rivalBoss.position.x,this.getLaneWorldX(r,this.rivalBoss.position.z),e*1.6),this.rivalBoss.rotation.z=ye.lerp(this.rivalBoss.rotation.z,(this.player.position.x-this.rivalBoss.position.x)*-.025,.08),!this.state.rivalOvertaken&&this.rivalBoss.position.z>this.player.position.z+1.5&&(this.state.rivalOvertaken=!0,this.state.score+=850,this.state.bossOvertakeBonus=!0,this.showRaceBanner("Final Overtake",this.rivalBoss.userData.name,"+850 boss score",1.8),this.audio.playNitroBurst()),(this.rivalBoss.position.z>28||this.state.stageCompleted||this.state.gameOver)&&this.deactivate(this.rivalBoss)}spawnPoliceRaceLeader(){if(!this.policeRaceLeader)return;const e=Math.floor(Math.random()*Gn.length);this.policeRaceLeader.userData.active=!0,this.policeRaceLeader.userData.lane=e,this.policeRaceLeader.visible=!0,this.state.policeRaceGap=70,this.state.policeRaceOvertaken=!1,this.state.policeRaceCatchupShown=!1,this.policeRaceLeader.position.set(this.getLaneWorldX(e,-64),.72,-64),this.policeRaceLeader.rotation.set(0,this.policeRaceLeader.userData.baseYaw??0,0)}updatePoliceRaceLeader(e){var o;if(!((o=this.policeRaceLeader)!=null&&o.userData.active)||this.state.gameMode!==Qe.policeRace.key)return;const t=this.getTrackProgress(),n=t>.72?-8:t>.5?ye.lerp(24,4,(t-.5)/.22):ye.lerp(70,24,t/.5);this.state.policeRaceGap=ye.lerp(this.state.policeRaceGap,n,e*.95),!this.state.policeRaceCatchupShown&&t>.45&&(this.state.policeRaceCatchupShown=!0,this.showRaceBanner("Police Race","Catch the interceptor","Final overtake window opening",1.6));const i=this.getRoadCenterOffsetAtProgress(t),r=t>.55?ye.clamp(Math.round((this.player.position.x-i)/6.5)+1,0,Gn.length-1):this.policeRaceLeader.userData.lane,a=this.player.position.z-this.state.policeRaceGap;this.policeRaceLeader.position.z=ye.lerp(this.policeRaceLeader.position.z,a,e*1.55),this.policeRaceLeader.position.x=ye.lerp(this.policeRaceLeader.position.x,this.getLaneWorldX(r,this.policeRaceLeader.position.z),e*1.8),this.policeRaceLeader.rotation.z=ye.lerp(this.policeRaceLeader.rotation.z,(this.player.position.x-this.policeRaceLeader.position.x)*-.03,.08),!this.state.policeRaceOvertaken&&this.policeRaceLeader.position.z>this.player.position.z+1.2&&(this.state.policeRaceOvertaken=!0,this.state.score+=1e3,this.showRaceBanner("Police Overtake","Interceptor beaten","+1000 race score",1.8),this.audio.playNitroBurst()),(this.policeRaceLeader.position.z>32||this.state.stageCompleted||this.state.gameOver)&&this.deactivate(this.policeRaceLeader)}updateHelicopterSpotlight(e){if(!this.helicopterGroup)return;const t=this.state.running&&!this.state.paused&&this.state.pursuitLevel>=5;if(this.helicopterGroup.visible=t,!t)return;this.helicopterSpotlight&&(this.helicopterSpotlight.target=this.player),this.helicopterGroup.position.x=ye.lerp(this.helicopterGroup.position.x,this.player.position.x+Math.sin(performance.now()*.0012)*8,e*.9),this.helicopterGroup.position.z=ye.lerp(this.helicopterGroup.position.z,this.player.position.z-34,e*1.1);const n=this.helicopterGroup.getObjectByName("helicopter-rotor");n&&(n.rotation.y+=e*24)}spawnTrafficCar(){const e=this.traffic.find(i=>!i.userData.active);if(!e)return;const t=Math.floor(Math.random()*Gn.length);e.userData.active=!0,e.userData.speed=e.userData.type==="bus"?48+Math.random()*28:e.userData.type==="bike"?42+Math.random()*32:Vs.includes(e.userData.type)?50+Math.random()*56:e.userData.type==="rickshaw"?34+Math.random()*18:e.userData.type==="truck"||e.userData.type==="tanker"||e.userData.type==="delivery"||e.userData.type==="garbage"||e.userData.type==="firetruck"?44+Math.random()*24:e.userData.type==="van"||e.userData.type==="pickup"||e.userData.type==="ambulance"?48+Math.random()*42:52+Math.random()*80,e.userData.lane=t,e.userData.laneTarget=t,e.userData.changeCooldown=.7+Math.random()*1.3,e.visible=!0;const n=-190-Math.random()*120;e.position.set(this.getLaneWorldX(t,n),.72,n),e.rotation.set(0,0,0)}spawnPoliceCar(){const e=this.police.find(c=>!c.userData.active);if(!e)return;const t=Math.max(1,this.state.pursuitLevel),n=t>=4?Kv:t>=3?["chase","side-rammer","roadblock-unit"]:["chase","side-rammer"],i=n[Math.floor(Math.random()*n.length)];e.userData.active=!0,e.userData.aggression=.85+Math.random()*.55,e.userData.behavior=i,e.visible=!0;const r=i==="side-rammer"?-80-Math.random()*50:-210-Math.random()*40,a=i==="side-rammer"?this.player.position.x>0?0:2:Math.random()>.5?0:2;e.position.set(this.getLaneWorldX(a,r),.72,r),e.rotation.set(0,0,0);const o=this.isSpecialPoliceMode()&&this.state.stageTime<hh,l=!o&&this.getTrackProgress()>=dh,h=!o&&this.getTrackProgress()>=uh;i==="roadblock-unit"&&this.state.pursuitLevel>=3&&l&&this.spawnRoadblock("roadblock"),i==="spike-strip-unit"&&this.state.pursuitLevel>=4&&h&&this.spawnRoadblock("spike")}spawnRoadblock(e="roadblock"){const t=this.roadblocks.find(r=>!r.userData.active);if(!t)return;const n=Math.floor(Math.random()*Gn.length),i=-175-Math.random()*80;t.userData.active=!0,t.userData.lane=n,t.userData.kind=e,t.scale.set(1,e==="spike"?.32:1,e==="spike"?.72:1),t.visible=!0,t.position.set(this.getLaneWorldX(n,i),0,i),t.rotation.set(0,0,0),this.showRaceBanner(e==="spike"?"Spike Strip":"Roadblock",`Lane ${n+1}`,e==="spike"?"Tires and handling at risk":"Break line or dodge wide",1.2),this.audio.playPoliceSiren()}spawnFuelCan(){if(this.fuelCans.some(i=>i.userData.active))return;const e=this.fuelCans.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-180-Math.random()*60,n=Math.floor(Math.random()*Gn.length);e.userData.lane=n,e.position.set(this.getLaneWorldX(n,t),1.2,t),e.rotation.set(0,0,0),e.visible=!1}spawnHealer(){const e=this.healers.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-190-Math.random()*70,n=Math.floor(Math.random()*Gn.length);e.userData.lane=n,e.position.set(this.getLaneWorldX(n,t),1.45,t),e.rotation.set(0,0,0),e.visible=!1}updateTrafficCars(e){this.state.countdown>0||this.traffic.forEach(t=>{if(!t.userData.active)return;if(t.userData.changeCooldown-=e,t.userData.changeCooldown<=0&&t.position.z<-20&&Math.random()>.76){const i=[0,1,2].filter(r=>r!==t.userData.lane);t.userData.laneTarget=i[Math.floor(Math.random()*i.length)],t.userData.changeCooldown=1.8+Math.random()*1.8}if(t.userData.laneTarget!==t.userData.lane){const i=this.getLaneWorldX(t.userData.laneTarget,t.position.z);t.position.x=ye.lerp(t.position.x,i,e*1.7),Math.abs(t.position.x-i)<.28&&(t.userData.lane=t.userData.laneTarget)}else t.position.x=ye.lerp(t.position.x,this.getLaneWorldX(t.userData.lane,t.position.z),e*2);t.userData.previousZ=t.position.z;const n=(this.state.speed-t.userData.speed)*e*xi*Uv;if(t.position.z+=n+.55,t.rotation.z=Math.sin((performance.now()*.001+t.position.z)*.7)*.025,t.rotation.y=ye.lerp(t.rotation.y,(t.userData.baseYaw??0)+(this.getLaneWorldX(t.userData.laneTarget,t.position.z)-t.position.x)*.03,.08),!this.nearMisses.has(t)){const i=Math.abs(t.position.x-this.player.position.x),r=Math.abs(t.position.z-this.player.position.z);r<18&&i<5.2&&this.state.hornTimer>2.6&&Math.random()>.65&&(this.state.hornTimer=0,this.audio.playHorn());const a=t.userData.type==="bike",o=a?1.4:2.2,l=a?3.2:4.2;if(r<6&&i<l&&i>o){this.nearMisses.add(t),this.state.nearMissCount+=1,this.state.combo=Math.min(Wv,this.state.combo+1),this.state.comboMultiplier=this.state.combo,this.state.comboTimer=Hv,this.state.slowMoTimer=Math.max(this.state.slowMoTimer,.28);const c=(a?300:150)*this.state.comboMultiplier;this.state.score+=c,a?(P.tip.textContent=this.state.combo>1?`Bike weave x${this.state.combo}! +${c} CR`:`Bike weave! +${c}`,this.audio.tone(880+this.state.combo*50,.14,"square",.035)):(P.tip.textContent=this.state.combo>1?`Near miss x${this.state.combo}! +${c} CR`:"Near miss! +150",this.audio.tone(660+this.state.combo*40,.12,"triangle",.03)),this.updateComboDisplay(),this.updateDailyChallenge("near_miss",this.state.nearMissCount),this.updateDailyChallenge("combo_max",this.state.comboMultiplier)}}this.isCollision(t,t.userData.collisionX||2.7,t.userData.collisionZ||5.1)?(this.applyDamage(14),this.state.speed=Math.max(0,this.state.speed-35),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-40),this.state.cameraShake=Math.min(.75,this.state.cameraShake+.42),this.state.combo=0,this.state.comboMultiplier=1,this.state.comboTimer=0,this.updateComboDisplay(),P.tip.textContent="Traffic impact.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>28&&(this.state.score+=20,this.state.heat=Math.min(100,this.state.heat+1.5),this.deactivate(t))})}updatePoliceCars(e){this.state.countdown>0||this.police.forEach(t=>{if(!t.userData.active)return;const n=1+this.state.pursuitLevel*.16,i=t.userData.behavior||"chase",r=t.position.x<this.player.position.x?-1:1,a=i==="side-rammer"?this.player.position.x+r*2.35:this.player.position.x+Math.sin(performance.now()*(.0015+this.state.pursuitLevel*18e-5))*(1.3+this.state.pursuitLevel*.18),o=i==="side-rammer"?2.35:1.3,l=i==="side-rammer"?14.5:18+this.state.pursuitLevel*.8;t.position.x=ye.lerp(t.position.x,a,e*o*t.userData.aggression*n),t.position.z+=this.state.speed*e*xi*l+.8+this.state.heat*.018,t.rotation.z=ye.clamp((this.player.position.x-t.position.x)*-.04,-.18,.18),t.rotation.y=ye.lerp(t.rotation.y,(t.userData.baseYaw??0)+(a-t.position.x)*.02,.08),this.isCollision(t,2.9,5.2)?(this.applyDamage(i==="side-rammer"?19:14,"police"),this.state.heat=Math.min(100,this.state.heat+10),this.state.cameraShake=Math.min(.85,this.state.cameraShake+.5),P.tip.textContent=i==="side-rammer"?"Side rammer hit.":"Police ram.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>30&&(this.state.score+=100+this.state.pursuitLevel*35,P.tip.textContent="Police evaded. Heat bonus banked.",this.deactivate(t))})}updateRoadblocks(e){this.roadblocks.forEach(t=>{if(t.userData.active)if(t.position.z+=this.state.speed*e*xi*16+.35,t.position.x=ye.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.rotation.z=Math.sin(performance.now()*.006)*.035,this.isCollision(t,3.2,4.4)){const n=t.userData.kind==="spike";this.applyDamage(n?18:24,n?"spike":"roadblock"),this.state.speed=Math.max(0,this.state.speed-(n?38:52)),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-(n?48:64)),this.state.heat=Math.min(100,this.state.heat+(n?10:14)),this.state.cameraShake=Math.min(1.1,this.state.cameraShake+(n?.56:.72)),P.tip.textContent=n?"Spike strip hit. Handling damaged.":"Roadblock hit. Pursuit level rising.",this.triggerImpactFx(),this.deactivate(t)}else t.position.z>28&&(this.state.score+=t.userData.kind==="spike"?220:180,this.state.heat=Math.min(100,this.state.heat+4),P.tip.textContent=t.userData.kind==="spike"?"Spike strip dodged. +220":"Roadblock dodged. +180",this.deactivate(t))})}updateFuelCans(e){this.fuelCans.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*xi*16+.45,t.position.x=ye.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2.4,t.rotation.x=0,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.4&&Math.abs(t.position.x-this.player.position.x)<2.2?(this.state.fuel=Math.min(this.state.maxFuel,this.state.fuel+38),this.state.score+=90,P.tip.textContent="Fuel collected.",this.audio.tone(740,.14,"triangle",.045),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}updateHealers(e){this.healers.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*xi*16+.4,t.position.x=ye.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2,t.rotation.z+=e*1.1,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.6&&Math.abs(t.position.x-this.player.position.x)<2.3?(this.state.health=Math.min(this.state.maxHealth,this.state.health+28),this.state.score+=110,P.tip.textContent="Health restored.",this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.16,"sine",.03),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}isCollision(e,t,n){var h;if(Math.abs(e.position.x-this.player.position.x)>=t)return!1;if(Math.abs(e.position.z-this.player.position.z)<n)return!0;if(typeof((h=e.userData)==null?void 0:h.previousZ)!="number")return!1;const a=e.userData.previousZ,o=Math.min(a,e.position.z)-n,l=Math.max(a,e.position.z)+n;return this.player.position.z>=o&&this.player.position.z<=l}applyDamage(e,t="impact"){const n=ye.clamp(this.state.speed/180,.65,1.55),i=t==="spike"?.82:t==="roadblock"?1.18:t==="police"?1.08:1,r=Math.max(.55,1-(this.selectedCar.damageReduction??0));this.state.cleanRun=!1;const a=e*r*n*i;this.state.health=Math.max(0,this.state.health-a),this.spawnImpactSparks(ye.clamp(a/25,.5,2)),this.updatePlayerDamageVisuals()}updateHud(){const e=Math.min(100,this.state.stageProgress/this.currentStage.length*100),t=this.state.health/this.state.maxHealth*100,n=this.state.fuel/this.state.maxFuel*100,i=this.state.nitro/this.state.maxNitro*100;P.stage.textContent=`Stage ${this.currentStage.id}`,P.speed.textContent=`${Math.round(this.state.speed*1.6)} KM/H`,P.score.textContent=`${Math.round(this.state.score)}`,P.heat.textContent=`${Math.round(this.state.heat)}%`,P.pursuit&&(P.pursuit.textContent=this.state.pursuitLevel>0?`Level ${this.state.pursuitLevel}`:"Clear"),P.limit.textContent=`${Math.round(this.currentStage.speedCapKmh)} KM/H`;const r=Math.max(0,this.currentStage.length-this.state.stageProgress),a=r/1e3;P.distanceRemaining.textContent=a>=1?`${a.toFixed(1)} KM`:`${Math.round(r)} M`,P.distanceRemaining.classList.toggle("finish-near",e>=95),P.distanceRemaining.classList.toggle("finish-mid",e>=70&&e<95),P.healthBar.style.width=`${t}%`,P.fuelBar.style.width=`${n}%`,P.nitroBar.style.width=`${i}%`,P.progressBar.style.width=`${e}%`,P.driftBar&&(P.driftBar.style.width=`${Math.min(100,this.state.driftScore/45)}%`),P.healthText.textContent=`${Math.round(t)}%`,P.fuelText.textContent=`${Math.round(n)}%`,P.nitroText.textContent=`${Math.round(i)}%`,P.progressText.textContent=`${Math.round(e)}%`,P.driftText&&(P.driftText.textContent=`${Math.round(this.state.driftScore)}`),this.renderTrackMaps()}updateOverlay(e,t,n,i=this.currentStage.track){var r;P.overlayKicker.textContent=e,P.overlayTitle.textContent=t,P.overlayBody.textContent=n,(r=P.onboardingGuide)==null||r.classList.toggle("hidden",this.progress.onboardingSeen||this.progress.highestStage>1),P.overlayTrackMap&&(P.overlayTrackMap.innerHTML=yh(i,0)),P.overlayTrackName&&(P.overlayTrackName.textContent=i.name),P.overlayTrackZone&&(P.overlayTrackZone.textContent=`${i.zone} · ${i.difficulty}`),P.overlay.classList.remove("hidden")}endRun(){var n;this.state.gameOver=!0,this.state.running=!1,this.state.stageCompleted=!1,this.hideTopBanner(),this.audio.stopMusic(),this.audio.tone(130,.35,"sawtooth",.06),this.persistProgress(),this.recordLeaderboardRun("Run over");const e=this.state.health<=0?"Wrecked Out":"Out of Fuel";P.overlayButton.textContent="Restart",this.updateOverlay(e,"Run Over",`${this.selectedCar.label} | Score ${Math.round(this.state.score)} | Distance ${Math.round(this.state.distance)} m | Heat ${Math.round(this.state.heat)}% | Mission progress ${Math.min(this.state.nearMissCount,this.currentStage.mission.target)}/${this.currentStage.mission.target}. Press Space to restart.`,this.currentStage.track),(n=P.overlayShareButton)==null||n.classList.remove("hidden");const t=!this.state.hasRevived&&Mt&&this.adState.rewardedReady&&!this.progress.adFreePurchased;P.reviveButton.classList.toggle("hidden",!t),window.setTimeout(()=>this.startBackgroundModelLoading(),1200)}}new xx(document.querySelector("#game-view"));export{Or as A,hl as W};
