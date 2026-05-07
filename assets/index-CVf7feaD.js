(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="183",Jh=0,rl=1,Qh=2,fr=1,jc=2,Ss=3,Hn=0,Xt=1,Sn=2,Vn=0,Hi=1,al=2,ol=3,ll=4,ed=5,pi=100,td=101,nd=102,id=103,sd=104,rd=200,ad=201,od=202,ld=203,Aa=204,Ra=205,cd=206,hd=207,dd=208,ud=209,fd=210,pd=211,md=212,gd=213,_d=214,Ca=0,Pa=1,La=2,Xi=3,Ia=4,Da=5,Na=6,Ua=7,Zc=0,xd=1,vd=2,bn=0,Jc=1,Qc=2,eh=3,th=4,nh=5,ih=6,sh=7,cl="attached",Sd="detached",rh=300,vi=301,qi=302,zr=303,Hr=304,Lr=306,$i=1e3,yn=1001,Sr=1002,Et=1003,ah=1004,ys=1005,wt=1006,pr=1007,Bn=1008,Zt=1009,oh=1010,lh=1011,As=1012,Ro=1013,wn=1014,en=1015,Gn=1016,Co=1017,Po=1018,Rs=1020,ch=35902,hh=35899,dh=1021,uh=1022,tn=1023,Wn=1026,_i=1027,Lo=1028,Io=1029,Ki=1030,Do=1031,No=1033,mr=33776,gr=33777,_r=33778,xr=33779,Fa=35840,Oa=35841,Ba=35842,ka=35843,Va=36196,za=37492,Ha=37496,Ga=37488,Wa=37489,Xa=37490,qa=37491,$a=37808,Ka=37809,Ya=37810,ja=37811,Za=37812,Ja=37813,Qa=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,oo=36492,lo=36494,co=36495,ho=36283,uo=36284,fo=36285,po=36286,Cs=2300,Ps=2301,Gr=2302,hl=2303,dl=2400,ul=2401,fl=2402,yd=2500,Md=0,fh=1,mo=2,bd=3200,ph=0,Td=1,ni="",Ot="srgb",$t="srgb-linear",yr="linear",nt="srgb",Mi=7680,pl=519,Ed=512,wd=513,Ad=514,Uo=515,Rd=516,Cd=517,Fo=518,Pd=519,go=35044,ml="300 es",Mn=2e3,Ls=2001;function Ld(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Id(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dd(){const s=Is("canvas");return s.style.display="block",s}const gl={};function Mr(...s){const e="THREE."+s.shift();console.log(e,...s)}function mh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ee(...s){s=mh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Le(...s){s=mh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function br(...s){const e=s.join(" ");e in gl||(gl[e]=!0,Ee(...s))}function Nd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ud={[Ca]:Pa,[La]:Na,[Ia]:Ua,[Xi]:Da,[Pa]:Ca,[Na]:La,[Ua]:Ia,[Da]:Xi};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const bs=Math.PI/180,Yi=180/Math.PI;function cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Oo(s,e){return(s%e+e)%e}function Fd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Od(s,e,t){return s!==e?(t-s)/(e-s):0}function Ts(s,e,t){return(1-t)*s+t*e}function Bd(s,e,t,n){return Ts(s,e,1-Math.exp(-t*n))}function kd(s,e=1){return e-Math.abs(Oo(s,e*2)-e)}function Vd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Hd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gd(s,e){return s+Math.random()*(e-s)}function Wd(s){return s*(.5-Math.random())}function Xd(s){s!==void 0&&(_l=s);let e=_l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qd(s){return s*bs}function $d(s){return s*Yi}function Kd(s){return(s&s-1)===0&&s!==0}function Yd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:bs,RAD2DEG:Yi,generateUUID:cn,clamp:$e,euclideanModulo:Oo,mapLinear:Fd,inverseLerp:Od,lerp:Ts,damp:Bd,pingpong:kd,smoothstep:Vd,smootherstep:zd,randInt:Hd,randFloat:Gd,randFloatSpread:Wd,seededRandom:Xd,degToRad:qd,radToDeg:$d,isPowerOfTwo:Kd,ceilPowerOfTwo:Yd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:Zd,normalize:it,denormalize:on};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new D,xl=new Xn;class ke{constructor(e,t,n,i,r,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],S=i[1],b=i[4],M=i[7],A=i[2],w=i[5],C=i[8];return r[0]=a*x+o*S+l*A,r[3]=a*m+o*b+l*w,r[6]=a*p+o*M+l*C,r[1]=c*x+h*S+u*A,r[4]=c*m+h*b+u*w,r[7]=c*p+h*M+u*C,r[2]=d*x+f*S+g*A,r[5]=d*m+f*b+g*w,r[8]=d*p+f*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new ke,vl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const s={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?yr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$t]:{primaries:e,whitePoint:n,transfer:yr,toXYZ:vl,fromXYZ:Sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:vl,fromXYZ:Sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),s}const Ye=Jd();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Is("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eu=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(qr(i[a].image)):r.push(qr(i[a]))}else r=qr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let tu=0;const $r=new D;class At extends ts{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=yn,i=yn,r=wt,a=Bn,o=tn,l=Zt,c=At.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=cn(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=rh;At.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,A=(p+1)/2,w=(h+d)/4,C=(u+x)/4,v=(g+m)/4;return b>M&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=C/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=v/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new At(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ze{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,x,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ru)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Kn.crossVectors(n,Yt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Kn.crossVectors(n,Yt)),Kn.normalize(),Bs.crossVectors(Yt,Kn),i[0]=Kn.x,i[4]=Bs.x,i[8]=Yt.x,i[1]=Kn.y,i[5]=Bs.y,i[9]=Yt.y,i[2]=Kn.z,i[6]=Bs.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],b=n[7],M=n[11],A=n[15],w=i[0],C=i[4],v=i[8],T=i[12],G=i[1],R=i[5],U=i[9],F=i[13],B=i[2],O=i[6],k=i[10],W=i[14],ee=i[3],Z=i[7],fe=i[11],le=i[15];return r[0]=a*w+o*G+l*B+c*ee,r[4]=a*C+o*R+l*O+c*Z,r[8]=a*v+o*U+l*k+c*fe,r[12]=a*T+o*F+l*W+c*le,r[1]=h*w+u*G+d*B+f*ee,r[5]=h*C+u*R+d*O+f*Z,r[9]=h*v+u*U+d*k+f*fe,r[13]=h*T+u*F+d*W+f*le,r[2]=g*w+x*G+m*B+p*ee,r[6]=g*C+x*R+m*O+p*Z,r[10]=g*v+x*U+m*k+p*fe,r[14]=g*T+x*F+m*W+p*le,r[3]=S*w+b*G+M*B+A*ee,r[7]=S*C+b*R+M*O+A*Z,r[11]=S*v+b*U+M*k+A*fe,r[15]=S*T+b*F+M*W+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=l*f-c*d,b=o*f-c*u,M=o*d-l*u,A=a*f-c*h,w=a*d-l*h,C=a*u-o*h;return t*(x*S-m*b+p*M)-n*(g*S-m*A+p*w)+i*(g*b-x*A+p*C)-r*(g*M-x*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*o-n*a,b=t*l-i*a,M=t*c-r*a,A=n*l-i*o,w=n*c-r*o,C=i*c-r*l,v=h*x-u*g,T=h*m-d*g,G=h*p-f*g,R=u*m-d*x,U=u*p-f*x,F=d*p-f*m,B=S*F-b*U+M*R+A*G-w*T+C*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=(o*F-l*U+c*R)*O,e[1]=(i*U-n*F-r*R)*O,e[2]=(x*C-m*w+p*A)*O,e[3]=(d*w-u*C-f*A)*O,e[4]=(l*G-a*F-c*T)*O,e[5]=(t*F-i*G+r*T)*O,e[6]=(m*M-g*C-p*b)*O,e[7]=(h*C-d*M+f*b)*O,e[8]=(a*U-o*G+c*v)*O,e[9]=(n*G-t*U-r*v)*O,e[10]=(g*w-x*M+p*S)*O,e[11]=(u*M-h*w-f*S)*O,e[12]=(o*T-a*R-l*v)*O,e[13]=(t*R-n*T+i*v)*O,e[14]=(x*b-g*A-m*S)*O,e[15]=(h*A-u*b+d*S)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,S=l*c,b=l*h,M=l*u,A=n.x,w=n.y,C=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+M)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(d+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+b)*C,i[9]=(m-S)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ti.set(i[0],i[1],i[2]).length();const o=Ti.set(i[4],i[5],i[6]).length(),l=Ti.set(i[8],i[9],i[10]).length();r<0&&(a=-a),sn.copy(this);const c=1/a,h=1/o,u=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ls)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Mn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ls)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new D,sn=new ze,su=new D(0,0,0),ru=new D(1,1,1),Kn=new D,Bs=new D,Yt=new D,yl=new ze,Ml=new Xn;class hn{constructor(e=0,t=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let au=0;const bl=new D,Ei=new Xn,In=new ze,ks=new D,os=new D,ou=new D,lu=new Xn,Tl=new D(1,0,0),El=new D(0,1,0),wl=new D(0,0,1),Al={type:"added"},cu={type:"removed"},wi={type:"childadded",child:null},Kr={type:"childremoved",child:null};class ft extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new D,t=new hn,n=new Xn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new ke}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(os,ks,this.up):In.lookAt(ks,os,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(In),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),wi.child=e,this.dispatchEvent(wi),wi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new D(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hu={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function jr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Oo(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jr(a,r,e+1/3),this.g=jr(a,r,e),this.b=jr(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ye.workingToColorSpace(Vt.copy(this),e),Math.round($e(Vt.r*255,0,255))*65536+Math.round($e(Vt.g*255,0,255))*256+Math.round($e(Vt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ot){Ye.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Vs);const n=Ts(Yn.h,Vs.h,t),i=Ts(Yn.s,Vs.s,t),r=Ts(Yn.l,Vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ie;Ie.NAMES=xh;class ko{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new ko(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class du extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rn=new D,Dn=new D,Zr=new D,Nn=new D,Ai=new D,Ri=new D,Rl=new D,Jr=new D,Qr=new D,ea=new D,ta=new ut,na=new ut,ia=new ut;class ln{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),Dn.subVectors(n,t),Zr.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Dn),l=rn.dot(Zr),c=Dn.dot(Dn),h=Dn.dot(Zr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Dn.subVectors(e,t),rn.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),rn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ai.subVectors(i,n),Ri.subVectors(r,n),Jr.subVectors(e,n);const l=Ai.dot(Jr),c=Ri.dot(Jr);if(l<=0&&c<=0)return t.copy(n);Qr.subVectors(e,i);const h=Ai.dot(Qr),u=Ri.dot(Qr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ai,a);ea.subVectors(e,r);const f=Ai.dot(ea),g=Ri.dot(ea);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ri,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rl.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Rl,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class dn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Hs.subVectors(this.max,ls),Ci.subVectors(e.a,ls),Pi.subVectors(e.b,ls),Li.subVectors(e.c,ls),jn.subVectors(Pi,Ci),Zn.subVectors(Li,Pi),ai.subVectors(Ci,Li);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-ai.z,ai.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,ai.z,0,-ai.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-ai.y,ai.x,0];return!sa(t,Ci,Pi,Li,Hs)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ci,Pi,Li,Hs))?!1:(Gs.crossVectors(jn,Zn),t=[Gs.x,Gs.y,Gs.z],sa(t,Ci,Pi,Li,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,zs=new dn,Ci=new D,Pi=new D,Li=new D,jn=new D,Zn=new D,ai=new D,ls=new D,Hs=new D,Gs=new D,oi=new D;function sa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){oi.fromArray(s,r);const o=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bt=new D,Ws=new Ke;let uu=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}}class vh extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sh extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const fu=new dn,cs=new D,ra=new D;class Rn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(ra)),this.expandByPoint(cs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pu=0;const Jt=new ze,aa=new ft,Ii=new D,jt=new dn,hs=new dn,It=new D;class zt extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Sh:vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(jt.min,hs.min),jt.expandByPoint(It),It.addVectors(jt.max,hs.max),jt.expandByPoint(It)):(jt.expandByPoint(hs.min),jt.expandByPoint(hs.max))}jt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),It.add(Ii)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new D,l[v]=new D;const c=new D,h=new D,u=new D,d=new Ke,f=new Ke,g=new Ke,x=new D,m=new D;function p(v,T,G){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,G),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,G),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[v].add(x),o[T].add(x),o[G].add(x),l[v].add(m),l[T].add(m),l[G].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,T=S.length;v<T;++v){const G=S[v],R=G.start,U=G.count;for(let F=R,B=R+U;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new D,M=new D,A=new D,w=new D;function C(v){A.fromBufferAttribute(i,v),w.copy(A);const T=o[v];b.copy(T),b.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(w,T);const R=M.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,R)}for(let v=0,T=S.length;v<T;++v){const G=S[v],R=G.start,U=G.count;for(let F=R,B=R+U;F<B;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new qt(d,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=go,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new D;class Vo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let gu=0;class En extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Hi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ra,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fn=new D,oa=new D,Xs=new D,Jn=new D,la=new D,qs=new D,ca=new D;class Ir{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oa.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xs),o=Jn.dot(this.direction),l=-Jn.dot(Xs),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oa).addScaledVector(Xs,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){la.subVectors(t,e),qs.subVectors(n,e),ca.crossVectors(la,qs);let a=this.direction.dot(ca),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(qs.crossVectors(Jn,qs));if(l<0)return null;const c=o*this.direction.dot(la.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(ca);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cl=new ze,li=new Ir,$s=new Rn,Pl=new D,Ks=new D,Ys=new D,js=new D,ha=new D,Zs=new D,Ll=new D,Js=new D;class ce extends ft{constructor(e=new zt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ha.fromBufferAttribute(u,e),a?Zs.addScaledVector(ha,h):Zs.addScaledVector(ha.sub(t),h))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),li.copy(e.ray).recast(e.near),!($s.containsPoint(li.origin)===!1&&(li.intersectSphere($s,Pl)===null||li.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),li.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,A=b;M<A;M+=3){const w=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);i=Qs(this,p,e,n,c,h,u,w,C,v),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);i=Qs(this,a,e,n,c,h,u,S,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,A=b;M<A;M+=3){const w=M,C=M+1,v=M+2;i=Qs(this,p,e,n,c,h,u,w,C,v),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,b=m+1,M=m+2;i=Qs(this,a,e,n,c,h,u,S,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _u(s,e,t,n,i,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Hn,o),l===null)return null;Js.copy(o),Js.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:s}}function Qs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ks),s.getVertexPosition(l,Ys),s.getVertexPosition(c,js);const h=_u(s,e,t,n,Ks,Ys,js,Ll);if(h){const u=new D;ln.getBarycoord(Ll,Ks,Ys,js,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new Ke)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,u,new Ke)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};ln.getNormal(Ks,Ys,js,d.normal),h.face=d,h.barycoord=u}return h}const Il=new D,Dl=new ut,Nl=new ut,xu=new D,Ul=new ze,er=new D,da=new Rn,Fl=new ze,ua=new Ir;class vu extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,er),this.boundingBox.expandByPoint(er)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,er),this.boundingSphere.expandByPoint(er)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1&&(Fl.copy(i).invert(),ua.copy(e.ray).applyMatrix4(Fl),!(this.boundingBox!==null&&ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dl.fromBufferAttribute(i.attributes.skinIndex,e),Nl.fromBufferAttribute(i.attributes.skinWeight,e),Il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Nl.getComponent(r);if(a!==0){const o=Dl.getComponent(r);Ul.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xu.copy(Il).applyMatrix4(Ul),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yh extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zo extends At{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Et,h=Et,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ol=new ze,Su=new ze;class Ho{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Su;Ol.multiplyMatrices(o,t[r]),Ol.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ho(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new zo(t,e,e,tn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ee("Skeleton: No bone found with UUID:",r),a=new yh),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class _o extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new ze,Bl=new ze,tr=[],kl=new dn,yu=new ze,ds=new ce,us=new Rn;class Mu extends ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),kl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),us.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),Bl.multiplyMatrices(n,Di),ds.matrixWorld=Bl,ds.raycast(e,tr);for(let a=0,o=tr.length;a<o;a++){const l=tr[a];l.instanceId=r,l.object=this,t.push(l)}tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zo(new Float32Array(i*this.count),i,this.count,Lo,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fa=new D,bu=new D,Tu=new ke;class fi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fa.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),i=this.coplanarPoint(fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Rn,Eu=new Ke(.5,.5),nr=new D;class Go{constructor(e=new fi,t=new fi,n=new fi,i=new fi,r=new fi,a=new fi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],b=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-a,f-h,p-g,A-S).normalize(),i[1].setComponents(c+a,f+h,p+g,A+S).normalize(),i[2].setComponents(c+o,f+u,p+x,A+b).normalize(),i[3].setComponents(c-o,f-u,p-x,A-b).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,A-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,A-M).normalize(),t===Mn)i[5].setComponents(c+l,f+d,p+m,A+M).normalize();else if(t===Ls)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=Eu.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(nr.x=i.normal.x>0?e.max.x:e.min.x,nr.y=i.normal.y>0?e.max.y:e.min.y,nr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mh extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tr=new D,Er=new D,Vl=new ze,fs=new Ir,ir=new Rn,pa=new D,zl=new D;class Wo extends ft{constructor(e=new zt,t=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Tr.fromBufferAttribute(t,i-1),Er.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tr.distanceTo(Er);e.setAttribute("lineDistance",new pt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;Vl.copy(i).invert(),fs.copy(e.ray).applyMatrix4(Vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),S=h.getX(x+1),b=sr(this,e,fs,l,p,S,x);b&&t.push(b)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=sr(this,e,fs,l,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=sr(this,e,fs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=sr(this,e,fs,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Tr.fromBufferAttribute(o,i),Er.fromBufferAttribute(o,r),t.distanceSqToSegment(Tr,Er,pa,zl)>n)return;pa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(pa);if(!(c<e.near||c>e.far))return{distance:c,point:zl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Hl=new D,Gl=new D;class wu extends Wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Hl.fromBufferAttribute(t,i),Gl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hl.distanceTo(Gl);e.setAttribute("lineDistance",new pt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Au extends Wo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bh extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wl=new ze,xo=new Ir,rr=new Rn,ar=new D;class Ru extends ft{constructor(e=new zt,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;Wl.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);ar.fromBufferAttribute(u,m),Xl(ar,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)ar.fromBufferAttribute(u,g),Xl(ar,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xl(s,e,t,n,i,r,a){const o=xo.distanceSqToPoint(s);if(o<t){const l=new D;xo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Th extends At{constructor(e=[],t=vi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cu extends At{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends At{constructor(e,t,n=wn,i,r,a,o=Et,l=Et,c,h=Wn,u=1){if(h!==Wn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pu extends Ds{constructor(e,t=wn,n=vi,i,r,a=Et,o=Et,l,c=Wn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eh extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ue extends zt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(x,m,p,S,b,M,A,w,C,v,T){const G=M/C,R=A/v,U=M/2,F=A/2,B=w/2,O=C+1,k=v+1;let W=0,ee=0;const Z=new D;for(let fe=0;fe<k;fe++){const le=fe*R-F;for(let se=0;se<O;se++){const Fe=se*G-U;Z[x]=Fe*S,Z[m]=le*b,Z[p]=B,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(se/C),u.push(1-fe/v),W+=1}}for(let fe=0;fe<v;fe++)for(let le=0;le<C;le++){const se=d+le+O*fe,Fe=d+le+O*(fe+1),Qe=d+(le+1)+O*(fe+1),dt=d+(le+1)+O*fe;l.push(se,Fe,dt),l.push(Fe,Qe,dt),ee+=6}o.addGroup(f,ee,T),f+=ee,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ue(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xo extends zt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,h=new Ke;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _n extends zt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function S(){const M=new D,A=new D;let w=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const T=[],G=v/r,R=G*(t-e)+e;for(let U=0;U<=i;U++){const F=U/i,B=F*l+o,O=Math.sin(B),k=Math.cos(B);A.x=R*O,A.y=-G*n+m,A.z=R*k,u.push(A.x,A.y,A.z),M.set(O,C,k).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-G),T.push(g++)}x.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){const G=x[T][v],R=x[T+1][v],U=x[T+1][v+1],F=x[T][v+1];(e>0||T!==0)&&(h.push(G,R,F),w+=3),(t>0||T!==r-1)&&(h.push(R,U,F),w+=3)}c.addGroup(p,w,0),p+=w}function b(M){const A=g,w=new Ke,C=new D;let v=0;const T=M===!0?e:t,G=M===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*G,0),d.push(0,G,0),f.push(.5,.5),g++;const R=g;for(let U=0;U<=i;U++){const B=U/i*l+o,O=Math.cos(B),k=Math.sin(B);C.x=T*k,C.y=m*G,C.z=T*O,u.push(C.x,C.y,C.z),d.push(0,G,0),w.x=O*.5+.5,w.y=k*.5*G+.5,f.push(w.x,w.y),g++}for(let U=0;U<i;U++){const F=A+U,B=R+U;M===!0?h.push(B,B+1,F):h.push(B+1,B,F),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nt extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let b=0;b<c;b++){const M=b*u-r;g.push(M,-S,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const b=S+c*p,M=S+c*(p+1),A=S+1+c*(p+1),w=S+1+c*p;f.push(b,M,w),f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vi extends zt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+M,1-b),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const b=h[p][S+1],M=h[p][S],A=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(b,M,w),(p!==n-1||l<Math.PI)&&f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wr extends zt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],u=[],d=new D,f=new D,g=new D;for(let x=0;x<=n;x++){const m=a+x/n*o;for(let p=0;p<=i;p++){const S=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const p=(i+1)*x+m-1,S=(i+1)*(x-1)+m-1,b=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(p,S,M),l.push(S,b,M)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=ji(s[t]);for(const i in n)e[i]=n[i]}return e}function Lu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Iu={clone:ji,merge:Gt};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uu extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Re extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends Re{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fu extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ou extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function or(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bu(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ql(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Ah(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ns{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ku extends ns{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dl,endingEnd:dl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ul:r=e,o=2*t-n;break;case fl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ul:a=e,l=2*n-t;break;case fl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+S*a[c+A]+b*a[l+A]+M*a[u+A];return r}}class Vu extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class zu extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hu extends ns{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const x=(n-t)/(i-t),m=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*x;return r}const f=o*2,g=e-1;for(let x=0;x!==o;++x){const m=a[c+x],p=a[l+x],S=g*f+x*2,b=d[S],M=d[S+1],A=e*f+x*2,w=u[A],C=u[A+1];let v=(n-t)/(i-t),T,G,R,U,F;for(let B=0;B<8;B++){T=v*v,G=T*v,R=1-v,U=R*R,F=U*R;const k=F*t+3*U*v*b+3*R*T*w+G*i-n;if(Math.abs(k)<1e-10)break;const W=3*U*(b-t)+6*R*v*(w-b)+3*T*(i-w);if(Math.abs(W)<1e-10)break;v=v-k/W,v=Math.max(0,Math.min(1,v))}r[x]=F*m+3*U*v*M+3*R*T*C+G*p}return r}}class un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Hu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Gr:t=this.InterpolantFactoryMethodSmooth;break;case hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Gr;case this.InterpolantFactoryMethodBezier:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Id(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Ps;class is extends un{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Cs;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class Rh extends un{constructor(e,t,n,i){super(e,t,n,i)}}Rh.prototype.ValueTypeName="color";class Zi extends un{constructor(e,t,n,i){super(e,t,n,i)}}Zi.prototype.ValueTypeName="number";class Gu extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ji extends un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends un{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Cs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends un{constructor(e,t,n,i){super(e,t,n,i)}}Qi.prototype.ValueTypeName="vector";class Wu{constructor(e="",t=-1,n=[],i=yd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qu(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Bu(l);l=ql(l,1,h),c=ql(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Le("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];Ah(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new Zi(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Qi,f+".position",d,"pos",i),n(Ji,f+".quaternion",d,"rot",i),n(Qi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Xu(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Rh;case"quaternion":return Ji;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qu(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xu(s.type);if(s.times===void 0){const t=[],n=[];Ah(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&($l(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!$l(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function $l(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $u{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ku=new $u;class rs{constructor(e){this.manager=e!==void 0?e:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class Yu extends Error{constructor(e,t){super(e),this.response=t}}class Ch extends rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=On[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{x+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,C=h.length;w<C;w++){const v=h[w];v.onProgress&&v.onProgress(A)}p.enqueue(M),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Yu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{kn.add(`file:${e}`,c);const h=On[e];delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=On[e];if(h===void 0)throw this.manager.itemError(e),c;delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ni=new WeakMap;class ju extends rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ni.get(a);u===void 0&&(u=[],Ni.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Is("img");function l(){h(),t&&t(this);const u=Ni.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ni.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),kn.remove(`image:${e}`);const d=Ni.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ni.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Zu extends rs{constructor(e){super(e)}load(e,t,n,i){const r=new At,a=new ju(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Dr extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ju extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ma=new ze,Kl=new D,Yl=new D;class qo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yl),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ls||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lr=new D,cr=new Xn,pn=new D;class Ph extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lr,cr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(lr,cr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new D,jl=new Ke,Zl=new Ke;class Wt extends Ph{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,jl,Zl),t.subVectors(Zl,jl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qu extends qo{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ef extends Dr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class tf extends qo{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class nf extends Dr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Nr extends Ph{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sf extends qo{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Es{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ga=new WeakMap;class rf extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(ga.has(a)===!0)i&&i(ga.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return kn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ga.set(l,c),kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ui=-90,Fi=1;class af extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Ui,Fi,e,t);i.layers=this.layers,this.add(i);const r=new Wt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Wt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Ui,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class of extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $o="\\[\\]\\.:\\/",lf=new RegExp("["+$o+"]","g"),Ko="[^"+$o+"]",cf="[^"+$o.replace("\\.","")+"]",hf=/((?:WC+[\/:])*)/.source.replace("WC",Ko),df=/(WCOD+)?/.source.replace("WCOD",cf),uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),pf=new RegExp("^"+hf+df+uf+ff+"$"),mf=["material","materials","bones","map"];class gf{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lf,"")}static parseTrackName(e){const t=pf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=gf;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _f{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ee("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jl(s,e,t,n){const i=xf(n);switch(t){case dh:return s*e;case Lo:return s*e/i.components*i.byteLength;case Io:return s*e/i.components*i.byteLength;case Ki:return s*e*2/i.components*i.byteLength;case Do:return s*e*2/i.components*i.byteLength;case uh:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case No:return s*e*4/i.components*i.byteLength;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _r:case xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:case ka:return Math.max(s,16)*Math.max(e,8)/4;case Fa:case Ba:return Math.max(s,8)*Math.max(e,8)/2;case Va:case za:case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case oo:case lo:case co:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ho:case uo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fo:case po:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xf(s){switch(s){case Zt:case oh:return{byteLength:1,components:1};case As:case lh:case Gn:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case wn:case Ro:case en:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ih(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,xp=`uniform sampler2D dfgLUT;
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
}`,vp=`
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Vm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,$m=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Sf,alphahash_pars_fragment:yf,alphamap_fragment:Mf,alphamap_pars_fragment:bf,alphatest_fragment:Tf,alphatest_pars_fragment:Ef,aomap_fragment:wf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:If,iridescence_fragment:Df,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:kf,color_pars_fragment:Vf,color_pars_vertex:zf,color_vertex:Hf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:$f,emissivemap_fragment:Kf,emissivemap_pars_fragment:Yf,colorspace_fragment:jf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:up,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:dp,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:xp,lights_fragment_begin:vp,lights_fragment_maps:Sp,lights_fragment_end:yp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ep,map_fragment:wp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Ip,morphcolor_vertex:Dp,morphnormal_vertex:Np,morphtarget_pars_vertex:Up,morphtarget_vertex:Fp,normal_fragment_begin:Op,normal_fragment_maps:Bp,normal_pars_fragment:kp,normal_pars_vertex:Vp,normal_vertex:zp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:$p,packing:Kp,premultiplied_alpha_fragment:Yp,project_vertex:jp,dithering_fragment:Zp,dithering_pars_fragment:Jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:dm,tonemapping_pars_fragment:um,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:xm,background_vert:vm,background_frag:Sm,backgroundCube_vert:ym,backgroundCube_frag:Mm,cube_vert:bm,cube_frag:Tm,depth_vert:Em,depth_frag:wm,distance_vert:Am,distance_frag:Rm,equirect_vert:Cm,equirect_frag:Pm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Nm,meshlambert_vert:Um,meshlambert_frag:Fm,meshmatcap_vert:Om,meshmatcap_frag:Bm,meshnormal_vert:km,meshnormal_frag:Vm,meshphong_vert:zm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:$m,points_frag:Km,shadow_vert:Ym,shadow_frag:jm,sprite_vert:Zm,sprite_frag:Jm},he={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},vn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};vn.physical={uniforms:Gt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const hr={r:0,b:0,g:0},hi=new hn,Qm=new ze;function eg(s,e,t,n,i,r){const a=new Ie(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const M=S.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(S){let b=!1;const M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,b){const M=f(b);M&&(M.isCubeTexture||M.mapping===Lr)?(c===void 0&&(c=new ce(new Ue(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ji(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),hi.copy(b.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(hi)),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==nt,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ce(new Nt(2,2),new An({name:"BackgroundMaterial",uniforms:ji(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(hr,wh(s)),t.buffers.color.setClear(hr.r,hr.g,hr.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function tg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(R,U,F,B,O){let k=!1;const W=u(R,B,F,U);r!==W&&(r=W,c(r.object)),k=f(R,B,F,O),k&&g(R,B,F,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(R,U,F,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,U,F,B){const O=B.wireframe===!0;let k=n[U.id];k===void 0&&(k={},n[U.id]=k);const W=R.isInstancedMesh===!0?R.id:0;let ee=k[W];ee===void 0&&(ee={},k[W]=ee);let Z=ee[F.id];Z===void 0&&(Z={},ee[F.id]=Z);let fe=Z[O];return fe===void 0&&(fe=d(l()),Z[O]=fe),fe}function d(R){const U=[],F=[],B=[];for(let O=0;O<t;O++)U[O]=0,F[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:B,object:R,attributes:{},index:null}}function f(R,U,F,B){const O=r.attributes,k=U.attributes;let W=0;const ee=F.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const le=O[Z];let se=k[Z];if(se===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),le===void 0||le.attribute!==se||se&&le.data!==se.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(R,U,F,B){const O={},k=U.attributes;let W=0;const ee=F.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let le=k[Z];le===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const se={};se.attribute=le,le&&le.data&&(se.data=le.data),O[Z]=se,W++}r.attributes=O,r.attributesNum=W,r.index=B}function x(){const R=r.newAttributes;for(let U=0,F=R.length;U<F;U++)R[U]=0}function m(R){p(R,0)}function p(R,U){const F=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;F[R]=1,B[R]===0&&(s.enableVertexAttribArray(R),B[R]=1),O[R]!==U&&(s.vertexAttribDivisor(R,U),O[R]=U)}function S(){const R=r.newAttributes,U=r.enabledAttributes;for(let F=0,B=U.length;F<B;F++)U[F]!==R[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function b(R,U,F,B,O,k,W){W===!0?s.vertexAttribIPointer(R,U,F,O,k):s.vertexAttribPointer(R,U,F,B,O,k)}function M(R,U,F,B){x();const O=B.attributes,k=F.getAttributes(),W=U.defaultAttributeValues;for(const ee in k){const Z=k[ee];if(Z.location>=0){let fe=O[ee];if(fe===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const le=fe.normalized,se=fe.itemSize,Fe=e.get(fe);if(Fe===void 0)continue;const Qe=Fe.buffer,dt=Fe.type,Y=Fe.bytesPerElement,ie=dt===s.INT||dt===s.UNSIGNED_INT||fe.gpuType===Ro;if(fe.isInterleavedBufferAttribute){const oe=fe.data,Be=oe.stride,Ce=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)p(Z.location+De,oe.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<Z.locationSize;De++)m(Z.location+De);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let De=0;De<Z.locationSize;De++)b(Z.location+De,se/Z.locationSize,dt,le,Be*Y,(Ce+se/Z.locationSize*De)*Y,ie)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)p(Z.location+oe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<Z.locationSize;oe++)m(Z.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let oe=0;oe<Z.locationSize;oe++)b(Z.location+oe,se/Z.locationSize,dt,le,se*Y,se/Z.locationSize*oe*Y,ie)}}else if(W!==void 0){const le=W[ee];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(Z.location,le);break;case 3:s.vertexAttrib3fv(Z.location,le);break;case 4:s.vertexAttrib4fv(Z.location,le);break;default:s.vertexAttrib1fv(Z.location,le)}}}}S()}function A(){T();for(const R in n){const U=n[R];for(const F in U){const B=U[F];for(const O in B){const k=B[O];for(const W in k)h(k[W].object),delete k[W];delete B[O]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const U=n[R.id];for(const F in U){const B=U[F];for(const O in B){const k=B[O];for(const W in k)h(k[W].object),delete k[W];delete B[O]}}delete n[R.id]}function C(R){for(const U in n){const F=n[U];for(const B in F){const O=F[B];if(O[R.id]===void 0)continue;const k=O[R.id];for(const W in k)h(k[W].object),delete k[W];delete O[R.id]}}}function v(R){for(const U in n){const F=n[U],B=R.isInstancedMesh===!0?R.id:0,O=F[B];if(O!==void 0){for(const k in O){const W=O[k];for(const ee in W)h(W[ee].object),delete W[ee];delete O[k]}delete F[B],Object.keys(F).length===0&&delete n[U]}}}function T(){G(),a=!0,r!==i&&(r=i,c(r.object))}function G(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:G,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function ng(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ig(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==tn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==en&&!v)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,maxSamples:A,samples:w}}function sg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new fi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,b=S*4;let M=p.clippingState||null;l.value=M,M=h(g,d,b,f);for(let A=0;A!==b;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const ii=4,Ql=[.125,.215,.35,.446,.526,.582],mi=20,rg=256,ps=new Nr,ec=new Ie;let _a=null,xa=0,va=0,Sa=!1;const ag=new D;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ag}=r;_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Gn,format:tn,colorSpace:$t,depthBuffer:!1},i=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=og(r)),this._blurMaterial=cg(r,e,t),this._ggxMaterial=lg(r,e,t)}return i}_compileMaterial(e){const t=new ce(new zt,e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,n,i,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ec),u.toneMapping=bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Ue,new St({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(ec),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;Oi(i,M*A,b>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vi||e.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Oi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ii?n-g+ii:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Oi(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(o,ps),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Oi(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(o,ps)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):mi;m>mi&&Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let S=0;for(let C=0;C<mi;++C){const v=C/x,T=Math.exp(-v*v/2);p.push(T),C===0?S+=T:C<m&&(S+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const M=this._sizeLods[i],A=3*M*(i>b-ii?i-b+ii:0),w=4*(this._cubeSize-M);Oi(t,A,w,3*M,2*M),l.setRenderTarget(t),l.render(u,ps)}}function og(s){const e=[],t=[],n=[];let i=s;const r=s-ii+1+Ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ii?l=Ql[a-s+ii-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,v=w>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(T,x*g*w),b.set(d,m*g*w);const G=[w,w,w,w,w,w];M.set(G,p*g*w)}const A=new zt;A.setAttribute("position",new qt(S,x)),A.setAttribute("uv",new qt(b,m)),A.setAttribute("faceIndex",new qt(M,p)),n.push(new ce(A,null)),i>ii&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nc(s,e,t){const n=new Tn(s,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lg(s,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function cg(s,e,t){const n=new Float32Array(mi),i=new D(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ic(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function sc(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ur(){return`

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
	`}class Dh extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Th(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ue(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Vn});r.uniforms.tEquirect.value=t;const a=new ce(i,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=wt),new af(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function hg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===zr||f===Hr)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Dh(g.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===zr||f===Hr,x=f===vi||f===qi;if(g||x){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new tc(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new tc(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===zr?d.mapping=vi:f===Hr&&(d.mapping=qi),d}function l(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function dg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&br("WebGLRenderer: "+n+" extension not supported."),i}}}function ug(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let b=0,M=S.length;b<M;b+=3){const A=S[b+0],w=S[b+1],C=S[b+2];d.push(A,w,w,C,C,A)}}else{const S=g.array;x=g.version;for(let b=0,M=S.length/3-1;b<M;b+=3){const A=b+0,w=b+1,C=b+2;d.push(A,w,w,C,C,A)}}const m=new(g.count>=65535?Sh:vh)(d,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mg(s,e,t){const n=new WeakMap,i=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*u),C=new gh(w,M,A,u);C.type=en,C.needsUpdate=!0;const v=b*4;for(let G=0;G<u;G++){const R=m[G],U=p[G],F=S[G],B=M*A*4*G;for(let O=0;O<R.count;O++){const k=O*v;f===!0&&(i.fromBufferAttribute(R,O),w[B+k+0]=i.x,w[B+k+1]=i.y,w[B+k+2]=i.z,w[B+k+3]=0),g===!0&&(i.fromBufferAttribute(U,O),w[B+k+4]=i.x,w[B+k+5]=i.y,w[B+k+6]=i.z,w[B+k+7]=0),x===!0&&(i.fromBufferAttribute(F,O),w[B+k+8]=i.x,w[B+k+9]=i.y,w[B+k+10]=i.z,w[B+k+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Ke(M,A)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gg(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const _g={[Jc]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[th]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function xg(s,e,t,n,i){const r=new Tn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Tn(e,t,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),o=new zt;o.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pt([0,2,0,0,2,0],2));const l=new Uu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ce(o,l),h=new Nr(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(b,M)}},this.begin=function(S,b){if(f||S.toneMapping===bn&&m.length===0)return!1;if(x=b,b!==null){const M=b.width,A=b.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,f=!0;let M=r,A=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(S,A,M,b),C.needsSwap!==!1)){const v=M;M=A,A=v}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,l.defines={},Ye.getTransfer(u)===nt&&(l.defines.SRGB_TRANSFER="");const w=_g[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(x),S.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Nh=new At,vo=new Ds(1,1),Uh=new gh,Fh=new iu,Oh=new Th,rc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function as(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=rc[i];if(r===void 0&&(r=new Float32Array(i),rc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fr(s,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function bg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;cc.set(n),s.uniformMatrix2fv(this.addr,!1,cc),Ct(t,n)}}function Tg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;lc.set(n),s.uniformMatrix3fv(this.addr,!1,lc),Ct(t,n)}}function Eg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;oc.set(n),s.uniformMatrix4fv(this.addr,!1,oc),Ct(t,n)}}function wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function Pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function Ng(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vo.compareFunction=t.isReversedDepthBuffer()?Fo:Uo,r=vo):r=Nh,t.setTexture2D(e||r,i)}function Ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fh,i)}function Fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uh,i)}function Bg(s){switch(s){case 5126:return vg;case 35664:return Sg;case 35665:return yg;case 35666:return Mg;case 35674:return bg;case 35675:return Tg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Ig;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function kg(s,e){s.uniform1fv(this.addr,e)}function Vg(s,e){const t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function zg(s,e){const t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function Hg(s,e){const t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function Gg(s,e){const t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wg(s,e){const t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xg(s,e){const t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qg(s,e){s.uniform1iv(this.addr,e)}function $g(s,e){s.uniform2iv(this.addr,e)}function Kg(s,e){s.uniform3iv(this.addr,e)}function Yg(s,e){s.uniform4iv(this.addr,e)}function jg(s,e){s.uniform1uiv(this.addr,e)}function Zg(s,e){s.uniform2uiv(this.addr,e)}function Jg(s,e){s.uniform3uiv(this.addr,e)}function Qg(s,e){s.uniform4uiv(this.addr,e)}function e0(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=vo:a=Nh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function t0(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fh,r[a])}function n0(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Oh,r[a])}function i0(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Uh,r[a])}function s0(s){switch(s){case 5126:return kg;case 35664:return Vg;case 35665:return zg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Yg;case 5125:return jg;case 36294:return Zg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class r0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class a0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}}class o0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function hc(s,e){s.seq.push(e),s.map[e.id]=e}function l0(s,e,t){const n=s.name,i=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),a=ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hc(t,c===void 0?new r0(o,s,e):new a0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new o0(o),hc(t,u)),t=u}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);l0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const c0=37297;let h0=0;function d0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uc=new ke;function u0(s){Ye._getMatrix(uc,Ye.workingColorSpace,s);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case yr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d0(s.getShaderSource(e),o)}else return r}function f0(s,e){const t=u0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const p0={[Jc]:"Linear",[Qc]:"Reinhard",[eh]:"Cineon",[th]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function m0(s,e){const t=p0[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new D;function g0(){Ye.getLuminanceCoefficients(dr);const s=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function x0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ms(s){return s!==""}function pc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(s){return s.replace(S0,M0)}const y0=new Map;function M0(s,e){let t=Ve[e];if(t===void 0){const n=y0.get(e);if(n!==void 0)t=Ve[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return So(t)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(s){return s.replace(b0,T0)}function T0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _c(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const E0={[fr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function w0(s){return E0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A0={[vi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function R0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":A0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const C0={[qi]:"ENVMAP_MODE_REFRACTION"};function P0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":C0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L0={[Zc]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function I0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":L0[s.combine]||"ENVMAP_BLENDING_NONE"}function D0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w0(t),c=R0(t),h=P0(t),u=I0(t),d=D0(t),f=_0(t),g=x0(r),x=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==bn?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),g0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=So(a),a=pc(a,t),a=mc(a,t),o=So(o),o=pc(o,t),o=mc(o,t),a=gc(a),o=gc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+a,M=S+p+o,A=dc(i,i.VERTEX_SHADER,b),w=dc(i,i.FRAGMENT_SHADER,M);i.attachShader(x,A),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(A)||"",B=i.getShaderInfoLog(w)||"",O=U.trim(),k=F.trim(),W=B.trim();let ee=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,w);else{const fe=fc(i,A,"vertex"),le=fc(i,w,"fragment");Le("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+fe+`
`+le)}else O!==""?Ee("WebGLProgram: Program Info Log:",O):(k===""||W==="")&&(Z=!1);Z&&(R.diagnostics={runnable:ee,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(w),v=new vr(i,x),T=v0(i,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(x,c0)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let U0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O0(e),t.set(e,n)),n}}class O0{constructor(e){this.id=U0++,this.code=e,this.usedTimes=0}}function B0(s,e,t,n,i,r){const a=new _h,o=new F0,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,G,R,U){const F=R.fog,B=U.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=e.get(v.envMap||O,k),ee=W&&W.mapping===Lr?W.image.height:null,Z=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ee("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=fe!==void 0?fe.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let Fe,Qe,dt,Y;if(Z){const tt=vn[Z];Fe=tt.vertexShader,Qe=tt.fragmentShader}else Fe=v.vertexShader,Qe=v.fragmentShader,o.update(v),dt=o.getVertexShaderID(v),Y=o.getFragmentShaderID(v);const ie=s.getRenderTarget(),oe=s.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,Ce=U.isBatchedMesh===!0,De=!!v.map,Pt=!!v.matcap,je=!!W,et=!!v.aoMap,ot=!!v.lightMap,He=!!v.bumpMap,_t=!!v.normalMap,P=!!v.displacementMap,Mt=!!v.emissiveMap,Je=!!v.metalnessMap,ct=!!v.roughnessMap,Me=v.anisotropy>0,E=v.clearcoat>0,_=v.dispersion>0,I=v.iridescence>0,K=v.sheen>0,j=v.transmission>0,$=Me&&!!v.anisotropyMap,_e=E&&!!v.clearcoatMap,re=E&&!!v.clearcoatNormalMap,Ae=E&&!!v.clearcoatRoughnessMap,Pe=I&&!!v.iridescenceMap,J=I&&!!v.iridescenceThicknessMap,te=K&&!!v.sheenColorMap,xe=K&&!!v.sheenRoughnessMap,Se=!!v.specularMap,pe=!!v.specularColorMap,Ge=!!v.specularIntensityMap,L=j&&!!v.transmissionMap,ae=j&&!!v.thicknessMap,ne=!!v.gradientMap,ge=!!v.alphaMap,Q=v.alphaTest>0,q=!!v.alphaHash,ve=!!v.extensions;let Ne=bn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const ht={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:Qe,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$t,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:Pt,envMap:je,envMapMode:je&&W.mapping,envMapCubeUVHeight:ee,aoMap:et,lightMap:ot,bumpMap:He,normalMap:_t,displacementMap:P,emissiveMap:Mt,normalMapObjectSpace:_t&&v.normalMapType===Td,normalMapTangentSpace:_t&&v.normalMapType===ph,metalnessMap:Je,roughnessMap:ct,anisotropy:Me,anisotropyMap:$,clearcoat:E,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:I,iridescenceMap:Pe,iridescenceThicknessMap:J,sheen:K,sheenColorMap:te,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:pe,specularIntensityMap:Ge,transmission:j,transmissionMap:L,thicknessMap:ae,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Hi&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:Q,alphaHash:q,combine:v.combine,mapUv:De&&g(v.map.channel),aoMapUv:et&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:He&&g(v.bumpMap.channel),normalMapUv:_t&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:Mt&&g(v.emissiveMap.channel),metalnessMapUv:Je&&g(v.metalnessMap.channel),roughnessMapUv:ct&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:_e&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(v.sheenRoughnessMap.channel),specularMapUv:Se&&g(v.specularMap.channel),specularColorMapUv:pe&&g(v.specularColorMap.channel),specularIntensityMapUv:Ge&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:ae&&g(v.thicknessMap.channel),alphaMapUv:ge&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_t||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(De||ge),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:Mt&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)T.push(G),T.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(p(T,v),S(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const T=f[v.type];let G;if(T){const R=vn[T];G=Iu.clone(R.uniforms)}else G=v.uniforms;return G}function M(v,T){let G=h.get(T);return G!==void 0?++G.usedTimes:(G=new N0(s,T,v,i),c.push(G),h.set(T,G)),G}function A(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function k0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function V0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let S=s[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},s[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function l(d,f,g,x,m,p){const S=o(d,f,g,x,m,p);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function c(d,f,g,x,m,p){const S=o(d,f,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function h(d,f){t.length>1&&t.sort(d||V0),n.length>1&&n.sort(f||xc),i.length>1&&i.sort(f||xc)}function u(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function z0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new vc,s.set(n,[a])):i>=r.length?(a=new vc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function H0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function G0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let W0=0;function X0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function q0(s){const e=new H0,t=G0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ze,a=new ze;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,b=0,M=0,A=0,w=0,C=0;c.sort(X0);for(let T=0,G=c.length;T<G;T++){const R=c[T],U=R.color,F=R.intensity,B=R.distance;let O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ki?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*F,u+=U.g*F,d+=U.b*F;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],F);C++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=R.shadow.matrix,S++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(U).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const W=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,W.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=W.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=O,M++}x++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(U).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const W=R.shadow,ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(F),k.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==b||v.numSpotShadows!==M||v.numSpotMaps!==A||v.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,v.directionalLength=f,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=b,v.numSpotShadows=M,v.numSpotMaps=A,v.numLightProbes=C,n.version=W0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Sc(s){const e=new q0(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Sc(s),e.set(i,[o])):r>=a.length?(o=new Sc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
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
}`,j0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Z0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],yc=new ze,ms=new D,Ma=new D;function J0(s,e,t){let n=new Go;const i=new Ke,r=new Ke,a=new ut,o=new Fu,l=new Ou,c={},h=t.maxTextureSize,u={[Hn]:Xt,[Xt]:Hn,[Sn]:Sn},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:K0,fragmentShader:Y0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let p=this.type;this.render=function(w,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===jc&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fr);const T=s.getRenderTarget(),G=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==this.type;F&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(O=>O.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,O=w.length;B<O;B++){const k=w[B],W=k.shadow;if(W===void 0){Ee("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ee=W.getFrameExtents();i.multiply(ee),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,W.mapSize.y=r.y));const Z=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Z,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ss){if(k.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Tn(i.x,i.y,{format:Ki,type:Gn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new Ds(i.x,i.y,en),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Wn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et}else k.isPointLight?(W.map=new Dh(i.x),W.map.depthTexture=new Pu(i.x,wn)):(W.map=new Tn(i.x,i.y),W.map.depthTexture=new Ds(i.x,i.y,wn)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Wn,this.type===fr?(W.map.depthTexture.compareFunction=Z?Fo:Uo,W.map.depthTexture.minFilter=wt,W.map.depthTexture.magFilter=wt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et);W.camera.updateProjectionMatrix()}const fe=W.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<fe;le++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,le),s.clear();else{le===0&&(s.setRenderTarget(W.map),s.clear());const se=W.getViewport(le);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),U.viewport(a)}if(k.isPointLight){const se=W.camera,Fe=W.matrix,Qe=k.distance||se.far;Qe!==se.far&&(se.far=Qe,se.updateProjectionMatrix()),ms.setFromMatrixPosition(k.matrixWorld),se.position.copy(ms),Ma.copy(se.position),Ma.add(j0[le]),se.up.copy(Z0[le]),se.lookAt(Ma),se.updateMatrixWorld(),Fe.makeTranslation(-ms.x,-ms.y,-ms.z),yc.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(yc,se.coordinateSystem,se.reversedDepth)}else W.updateMatrices(k);n=W.getFrustum(),M(C,v,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===Ss&&S(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,G,R)};function S(w,C){const v=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Tn(i.x,i.y,{format:Ki,type:Gn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,v,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,v,f,x,null)}function b(w,C,v,T){let G=null;const R=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)G=R;else if(G=v.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=G.uuid,F=C.uuid;let B=c[U];B===void 0&&(B={},c[U]=B);let O=B[F];O===void 0&&(O=G.clone(),B[F]=O,C.addEventListener("dispose",A)),G=O}if(G.visible=C.visible,G.wireframe=C.wireframe,T===Ss?G.side=C.shadowSide!==null?C.shadowSide:C.side:G.side=C.shadowSide!==null?C.shadowSide:u[C.side],G.alphaMap=C.alphaMap,G.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,G.map=C.map,G.clipShadows=C.clipShadows,G.clippingPlanes=C.clippingPlanes,G.clipIntersection=C.clipIntersection,G.displacementMap=C.displacementMap,G.displacementScale=C.displacementScale,G.displacementBias=C.displacementBias,G.wireframeLinewidth=C.wireframeLinewidth,G.linewidth=C.linewidth,v.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const U=s.properties.get(G);U.light=v}return G}function M(w,C,v,T,G){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&G===Ss)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const F=e.update(w),B=w.material;if(Array.isArray(B)){const O=F.groups;for(let k=0,W=O.length;k<W;k++){const ee=O[k],Z=B[ee.materialIndex];if(Z&&Z.visible){const fe=b(w,Z,T,G);w.onBeforeShadow(s,w,C,v,F,fe,ee),s.renderBufferDirect(v,null,F,fe,w,ee),w.onAfterShadow(s,w,C,v,F,fe,ee)}}}else if(B.visible){const O=b(w,B,T,G);w.onBeforeShadow(s,w,C,v,F,O,null),s.renderBufferDirect(v,null,F,O,w,null),w.onAfterShadow(s,w,C,v,F,O,null)}}const U=w.children;for(let F=0,B=U.length;F<B;F++)M(U[F],C,v,T,G)}function A(w){w.target.removeEventListener("dispose",A);for(const v in c){const T=c[v],G=w.target.uuid;G in T&&(T[G].dispose(),delete T[G])}}}function Q0(s,e){function t(){let L=!1;const ae=new ut;let ne=null;const ge=new ut(0,0,0,0);return{setMask:function(Q){ne!==Q&&!L&&(s.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){L=Q},setClear:function(Q,q,ve,Ne,ht){ht===!0&&(Q*=Ne,q*=Ne,ve*=Ne),ae.set(Q,q,ve,Ne),ge.equals(ae)===!1&&(s.clearColor(Q,q,ve,Ne),ge.copy(ae))},reset:function(){L=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,ae=!1,ne=null,ge=null,Q=null;return{setReversed:function(q){if(ae!==q){const ve=e.get("EXT_clip_control");q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ae=q;const Ne=Q;Q=null,this.setClear(Ne)}},getReversed:function(){return ae},setTest:function(q){q?ie(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(q){ne!==q&&!L&&(s.depthMask(q),ne=q)},setFunc:function(q){if(ae&&(q=Ud[q]),ge!==q){switch(q){case Ca:s.depthFunc(s.NEVER);break;case Pa:s.depthFunc(s.ALWAYS);break;case La:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case Ia:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case Na:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=q}},setLocked:function(q){L=q},setClear:function(q){Q!==q&&(Q=q,ae&&(q=1-q),s.clearDepth(q))},reset:function(){L=!1,ne=null,ge=null,Q=null,ae=!1}}}function i(){let L=!1,ae=null,ne=null,ge=null,Q=null,q=null,ve=null,Ne=null,ht=null;return{setTest:function(tt){L||(tt?ie(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!L&&(s.stencilMask(tt),ae=tt)},setFunc:function(tt,Pn,Ln){(ne!==tt||ge!==Pn||Q!==Ln)&&(s.stencilFunc(tt,Pn,Ln),ne=tt,ge=Pn,Q=Ln)},setOp:function(tt,Pn,Ln){(q!==tt||ve!==Pn||Ne!==Ln)&&(s.stencilOp(tt,Pn,Ln),q=tt,ve=Pn,Ne=Ln)},setLocked:function(tt){L=tt},setClear:function(tt){ht!==tt&&(s.clearStencil(tt),ht=tt)},reset:function(){L=!1,ae=null,ne=null,ge=null,Q=null,q=null,ve=null,Ne=null,ht=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,b=null,M=null,A=null,w=null,C=new Ie(0,0,0),v=0,T=!1,G=null,R=null,U=null,F=null,B=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=W>=1):ee.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=W>=2);let Z=null,fe={};const le=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Fe=new ut().fromArray(le),Qe=new ut().fromArray(se);function dt(L,ae,ne,ge){const Q=new Uint8Array(4),q=s.createTexture();s.bindTexture(L,q),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ne;ve++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(ae+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return q}const Y={};Y[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),a.setFunc(Xi),He(!1),_t(rl),ie(s.CULL_FACE),et(Vn);function ie(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function oe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Be(L,ae){return u[L]!==ae?(s.bindFramebuffer(L,ae),u[L]=ae,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ae),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(L,ae){let ne=f,ge=!1;if(L){ne=d.get(ae),ne===void 0&&(ne=[],d.set(ae,ne));const Q=L.textures;if(ne.length!==Q.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let q=0,ve=Q.length;q<ve;q++)ne[q]=s.COLOR_ATTACHMENT0+q;ne.length=Q.length,ge=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ne)}function De(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const Pt={[pi]:s.FUNC_ADD,[td]:s.FUNC_SUBTRACT,[nd]:s.FUNC_REVERSE_SUBTRACT};Pt[id]=s.MIN,Pt[sd]=s.MAX;const je={[rd]:s.ZERO,[ad]:s.ONE,[od]:s.SRC_COLOR,[Aa]:s.SRC_ALPHA,[fd]:s.SRC_ALPHA_SATURATE,[dd]:s.DST_COLOR,[cd]:s.DST_ALPHA,[ld]:s.ONE_MINUS_SRC_COLOR,[Ra]:s.ONE_MINUS_SRC_ALPHA,[ud]:s.ONE_MINUS_DST_COLOR,[hd]:s.ONE_MINUS_DST_ALPHA,[pd]:s.CONSTANT_COLOR,[md]:s.ONE_MINUS_CONSTANT_COLOR,[gd]:s.CONSTANT_ALPHA,[_d]:s.ONE_MINUS_CONSTANT_ALPHA};function et(L,ae,ne,ge,Q,q,ve,Ne,ht,tt){if(L===Vn){x===!0&&(oe(s.BLEND),x=!1);return}if(x===!1&&(ie(s.BLEND),x=!0),L!==ed){if(L!==m||tt!==T){if((p!==pi||M!==pi)&&(s.blendEquation(s.FUNC_ADD),p=pi,M=pi),tt)switch(L){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.ONE,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Le("WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ol:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",L);break}S=null,b=null,A=null,w=null,C.set(0,0,0),v=0,m=L,T=tt}return}Q=Q||ae,q=q||ne,ve=ve||ge,(ae!==p||Q!==M)&&(s.blendEquationSeparate(Pt[ae],Pt[Q]),p=ae,M=Q),(ne!==S||ge!==b||q!==A||ve!==w)&&(s.blendFuncSeparate(je[ne],je[ge],je[q],je[ve]),S=ne,b=ge,A=q,w=ve),(Ne.equals(C)===!1||ht!==v)&&(s.blendColor(Ne.r,Ne.g,Ne.b,ht),C.copy(Ne),v=ht),m=L,T=!1}function ot(L,ae){L.side===Sn?oe(s.CULL_FACE):ie(s.CULL_FACE);let ne=L.side===Xt;ae&&(ne=!ne),He(ne),L.blending===Hi&&L.transparent===!1?et(Vn):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function _t(L){L!==Jh?(ie(s.CULL_FACE),L!==R&&(L===rl?s.cullFace(s.BACK):L===Qh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),R=L}function P(L){L!==U&&(k&&s.lineWidth(L),U=L)}function Mt(L,ae,ne){L?(ie(s.POLYGON_OFFSET_FILL),(F!==ae||B!==ne)&&(F=ae,B=ne,a.getReversed()&&(ae=-ae),s.polygonOffset(ae,ne))):oe(s.POLYGON_OFFSET_FILL)}function Je(L){L?ie(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function ct(L){L===void 0&&(L=s.TEXTURE0+O-1),Z!==L&&(s.activeTexture(L),Z=L)}function Me(L,ae,ne){ne===void 0&&(Z===null?ne=s.TEXTURE0+O-1:ne=Z);let ge=fe[ne];ge===void 0&&(ge={type:void 0,texture:void 0},fe[ne]=ge),(ge.type!==L||ge.texture!==ae)&&(Z!==ne&&(s.activeTexture(ne),Z=ne),s.bindTexture(L,ae||Y[L]),ge.type=L,ge.texture=ae)}function E(){const L=fe[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function K(){try{s.texSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function j(){try{s.texSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function re(){try{s.texStorage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function Ae(){try{s.texStorage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function Pe(){try{s.texImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function J(){try{s.texImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function te(L){Fe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function xe(L){Qe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Qe.copy(L))}function Se(L,ae){let ne=c.get(ae);ne===void 0&&(ne=new WeakMap,c.set(ae,ne));let ge=ne.get(L);ge===void 0&&(ge=s.getUniformBlockIndex(ae,L.name),ne.set(L,ge))}function pe(L,ae){const ge=c.get(ae).get(L);l.get(ae)!==ge&&(s.uniformBlockBinding(ae,ge,L.__bindingPointIndex),l.set(ae,ge))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,fe={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,b=null,M=null,A=null,w=null,C=new Ie(0,0,0),v=0,T=!1,G=null,R=null,U=null,F=null,B=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:oe,bindFramebuffer:Be,drawBuffers:Ce,useProgram:De,setBlending:et,setMaterial:ot,setFlipSided:He,setCullFace:_t,setLineWidth:P,setPolygonOffset:Mt,setScissorTest:Je,activeTexture:ct,bindTexture:Me,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:Pe,texImage3D:J,updateUBOMapping:Se,uniformBlockBinding:pe,texStorage2D:re,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:_e,scissor:te,viewport:xe,reset:Ge}}function e_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):Is("canvas")}function x(E,_,I){let K=1;const j=Me(E);if((j.width>I||j.height>I)&&(K=I/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(K*j.width),_e=Math.floor(K*j.height);u===void 0&&(u=g($,_e));const re=_?g($,_e):u;return re.width=$,re.height=_e,re.getContext("2d").drawImage(E,0,0,$,_e),Ee("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+_e+")."),re}else return"data"in E&&Ee("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(E,_,I,K,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===s.RED&&(I===s.FLOAT&&($=s.R32F),I===s.HALF_FLOAT&&($=s.R16F),I===s.UNSIGNED_BYTE&&($=s.R8)),_===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&($=s.R8UI),I===s.UNSIGNED_SHORT&&($=s.R16UI),I===s.UNSIGNED_INT&&($=s.R32UI),I===s.BYTE&&($=s.R8I),I===s.SHORT&&($=s.R16I),I===s.INT&&($=s.R32I)),_===s.RG&&(I===s.FLOAT&&($=s.RG32F),I===s.HALF_FLOAT&&($=s.RG16F),I===s.UNSIGNED_BYTE&&($=s.RG8)),_===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&($=s.RG8UI),I===s.UNSIGNED_SHORT&&($=s.RG16UI),I===s.UNSIGNED_INT&&($=s.RG32UI),I===s.BYTE&&($=s.RG8I),I===s.SHORT&&($=s.RG16I),I===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&($=s.RGB8UI),I===s.UNSIGNED_SHORT&&($=s.RGB16UI),I===s.UNSIGNED_INT&&($=s.RGB32UI),I===s.BYTE&&($=s.RGB8I),I===s.SHORT&&($=s.RGB16I),I===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&($=s.RGBA8UI),I===s.UNSIGNED_SHORT&&($=s.RGBA16UI),I===s.UNSIGNED_INT&&($=s.RGBA32UI),I===s.BYTE&&($=s.RGBA8I),I===s.SHORT&&($=s.RGBA16I),I===s.INT&&($=s.RGBA32I)),_===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),_===s.RGBA){const _e=j?yr:Ye.getTransfer(K);I===s.FLOAT&&($=s.RGBA32F),I===s.HALF_FLOAT&&($=s.RGBA16F),I===s.UNSIGNED_BYTE&&($=_e===nt?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(E,_){let I;return E?_===null||_===wn||_===Rs?I=s.DEPTH24_STENCIL8:_===en?I=s.DEPTH32F_STENCIL8:_===As&&(I=s.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wn||_===Rs?I=s.DEPTH_COMPONENT24:_===en?I=s.DEPTH_COMPONENT32F:_===As&&(I=s.DEPTH_COMPONENT16),I}function A(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==wt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),v(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),G(_)}function v(E){const _=n.get(E);if(_.__webglInit===void 0)return;const I=E.source,K=d.get(I);if(K){const j=K[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(E),Object.keys(K).length===0&&d.delete(I)}n.remove(E)}function T(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const I=E.source,K=d.get(I);delete K[_.__cacheKey],a.memory.textures--}function G(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let j=0;j<_.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[K][j]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=E.textures;for(let K=0,j=I.length;K<j;K++){const $=n.get(I[K]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(I[K])}n.remove(E)}let R=0;function U(){R=0}function F(){const E=R;return E>=i.maxTextures&&Ee("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function B(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function O(E,_){const I=n.get(E);if(E.isVideoTexture&&Je(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const K=E.image;if(K===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,E,_);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+_)}function k(E,_){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){Y(I,E,_);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+_)}function W(E,_){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){Y(I,E,_);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+_)}function ee(E,_){const I=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){ie(I,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+_)}const Z={[$i]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},fe={[Et]:s.NEAREST,[ah]:s.NEAREST_MIPMAP_NEAREST,[ys]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[pr]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},le={[Ed]:s.NEVER,[Pd]:s.ALWAYS,[wd]:s.LESS,[Uo]:s.LEQUAL,[Ad]:s.EQUAL,[Fo]:s.GEQUAL,[Rd]:s.GREATER,[Cd]:s.NOTEQUAL};function se(E,_){if(_.type===en&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wt||_.magFilter===pr||_.magFilter===ys||_.magFilter===Bn||_.minFilter===wt||_.minFilter===pr||_.minFilter===ys||_.minFilter===Bn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Z[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Z[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Z[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,fe[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Et||_.minFilter!==ys&&_.minFilter!==Bn||_.type===en&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(E,_){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const K=_.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const $=B(_);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),j[$].usedTimes++;const _e=j[E.__cacheKey];_e!==void 0&&(j[E.__cacheKey].usedTimes--,_e.usedTimes===0&&T(_)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return I}function Qe(E,_,I){return Math.floor(Math.floor(E/I)/_)}function dt(E,_,I,K){const $=E.updateRanges;if($.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,I,K,_.data);else{$.sort((J,te)=>J.start-te.start);let _e=0;for(let J=1;J<$.length;J++){const te=$[_e],xe=$[J],Se=te.start+te.count,pe=Qe(xe.start,_.width,4),Ge=Qe(te.start,_.width,4);xe.start<=Se+1&&pe===Ge&&Qe(xe.start+xe.count-1,_.width,4)===pe?te.count=Math.max(te.count,xe.start+xe.count-te.start):(++_e,$[_e]=xe)}$.length=_e+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let J=0,te=$.length;J<te;J++){const xe=$[J],Se=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),Ge=Se%_.width,L=Math.floor(Se/_.width),ae=pe,ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ge,L,ae,ne,I,K,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Y(E,_,I){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const j=Fe(E,_),$=_.source;t.bindTexture(K,E.__webglTexture,s.TEXTURE0+I);const _e=n.get($);if($.version!==_e.__version||j===!0){t.activeTexture(s.TEXTURE0+I);const re=Ye.getPrimaries(Ye.workingColorSpace),Ae=_.colorSpace===ni?null:Ye.getPrimaries(_.colorSpace),Pe=_.colorSpace===ni||re===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let J=x(_.image,!1,i.maxTextureSize);J=ct(_,J);const te=r.convert(_.format,_.colorSpace),xe=r.convert(_.type);let Se=b(_.internalFormat,te,xe,_.colorSpace,_.isVideoTexture);se(K,_);let pe;const Ge=_.mipmaps,L=_.isVideoTexture!==!0,ae=_e.__version===void 0||j===!0,ne=$.dataReady,ge=A(_,J);if(_.isDepthTexture)Se=M(_.format===_i,_.type),ae&&(L?t.texStorage2D(s.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Se,J.width,J.height,0,te,xe,null));else if(_.isDataTexture)if(Ge.length>0){L&&ae&&t.texStorage2D(s.TEXTURE_2D,ge,Se,Ge[0].width,Ge[0].height);for(let Q=0,q=Ge.length;Q<q;Q++)pe=Ge[Q],L?ne&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,pe.width,pe.height,te,xe,pe.data):t.texImage2D(s.TEXTURE_2D,Q,Se,pe.width,pe.height,0,te,xe,pe.data);_.generateMipmaps=!1}else L?(ae&&t.texStorage2D(s.TEXTURE_2D,ge,Se,J.width,J.height),ne&&dt(_,J,te,xe)):t.texImage2D(s.TEXTURE_2D,0,Se,J.width,J.height,0,te,xe,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Se,Ge[0].width,Ge[0].height,J.depth);for(let Q=0,q=Ge.length;Q<q;Q++)if(pe=Ge[Q],_.format!==tn)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ve=Jl(pe.width,pe.height,_.format,_.type);for(const Ne of _.layerUpdates){const ht=pe.data.subarray(Ne*ve/pe.data.BYTES_PER_ELEMENT,(Ne+1)*ve/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Ne,pe.width,pe.height,1,te,ht)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,pe.width,pe.height,J.depth,te,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Se,pe.width,pe.height,J.depth,0,pe.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,pe.width,pe.height,J.depth,te,xe,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Se,pe.width,pe.height,J.depth,0,te,xe,pe.data)}else{L&&ae&&t.texStorage2D(s.TEXTURE_2D,ge,Se,Ge[0].width,Ge[0].height);for(let Q=0,q=Ge.length;Q<q;Q++)pe=Ge[Q],_.format!==tn?te!==null?L?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,pe.width,pe.height,te,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Se,pe.width,pe.height,0,pe.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,pe.width,pe.height,te,xe,pe.data):t.texImage2D(s.TEXTURE_2D,Q,Se,pe.width,pe.height,0,te,xe,pe.data)}else if(_.isDataArrayTexture)if(L){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Se,J.width,J.height,J.depth),ne)if(_.layerUpdates.size>0){const Q=Jl(J.width,J.height,_.format,_.type);for(const q of _.layerUpdates){const ve=J.data.subarray(q*Q/J.data.BYTES_PER_ELEMENT,(q+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,te,xe,ve)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isData3DTexture)L?(ae&&t.texStorage3D(s.TEXTURE_3D,ge,Se,J.width,J.height,J.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)):t.texImage3D(s.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isFramebufferTexture){if(ae)if(L)t.texStorage2D(s.TEXTURE_2D,ge,Se,J.width,J.height);else{let Q=J.width,q=J.height;for(let ve=0;ve<ge;ve++)t.texImage2D(s.TEXTURE_2D,ve,Se,Q,q,0,te,xe,null),Q>>=1,q>>=1}}else if(Ge.length>0){if(L&&ae){const Q=Me(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,Se,Q.width,Q.height)}for(let Q=0,q=Ge.length;Q<q;Q++)pe=Ge[Q],L?ne&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,te,xe,pe):t.texImage2D(s.TEXTURE_2D,Q,Se,te,xe,pe);_.generateMipmaps=!1}else if(L){if(ae){const Q=Me(J);t.texStorage2D(s.TEXTURE_2D,ge,Se,Q.width,Q.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te,xe,J)}else t.texImage2D(s.TEXTURE_2D,0,Se,te,xe,J);m(_)&&p(K),_e.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,I){if(_.image.length!==6)return;const K=Fe(E,_),j=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+I);const $=n.get(j);if(j.version!==$.__version||K===!0){t.activeTexture(s.TEXTURE0+I);const _e=Ye.getPrimaries(Ye.workingColorSpace),re=_.colorSpace===ni?null:Ye.getPrimaries(_.colorSpace),Ae=_.colorSpace===ni||_e===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!Pe&&!J?te[q]=x(_.image[q],!0,i.maxCubemapSize):te[q]=J?_.image[q].image:_.image[q],te[q]=ct(_,te[q]);const xe=te[0],Se=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),Ge=b(_.internalFormat,Se,pe,_.colorSpace),L=_.isVideoTexture!==!0,ae=$.__version===void 0||K===!0,ne=j.dataReady;let ge=A(_,xe);se(s.TEXTURE_CUBE_MAP,_);let Q;if(Pe){L&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,xe.width,xe.height);for(let q=0;q<6;q++){Q=te[q].mipmaps;for(let ve=0;ve<Q.length;ve++){const Ne=Q[ve];_.format!==tn?Se!==null?L?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Ne.width,Ne.height,Se,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,Ge,Ne.width,Ne.height,0,Ne.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Ne.width,Ne.height,Se,pe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,Ge,Ne.width,Ne.height,0,Se,pe,Ne.data)}}}else{if(Q=_.mipmaps,L&&ae){Q.length>0&&ge++;const q=Me(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,q.width,q.height)}for(let q=0;q<6;q++)if(J){L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,Se,pe,te[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,te[q].width,te[q].height,0,Se,pe,te[q].data);for(let ve=0;ve<Q.length;ve++){const ht=Q[ve].image[q].image;L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ht.width,ht.height,Se,pe,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,Ge,ht.width,ht.height,0,Se,pe,ht.data)}}else{L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Se,pe,te[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,Se,pe,te[q]);for(let ve=0;ve<Q.length;ve++){const Ne=Q[ve];L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,Se,pe,Ne.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,Ge,Se,pe,Ne.image[q])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),$.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function oe(E,_,I,K,j,$){const _e=r.convert(I.format,I.colorSpace),re=r.convert(I.type),Ae=b(I.internalFormat,_e,re,I.colorSpace),Pe=n.get(_),J=n.get(I);if(J.__renderTarget=_,!Pe.__hasExternalTextures){const te=Math.max(1,_.width>>$),xe=Math.max(1,_.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,$,Ae,te,xe,_.depth,0,_e,re,null):t.texImage2D(j,$,Ae,te,xe,0,_e,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Mt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,J.__webglTexture,0,P(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,J.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(E,_,I){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const K=_.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=M(_.stencilBuffer,j),_e=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Mt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(_),$,_.width,_.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(_),$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,E)}else{const K=_.textures;for(let j=0;j<K.length;j++){const $=K[j],_e=r.convert($.format,$.colorSpace),re=r.convert($.type),Ae=b($.internalFormat,_e,re,$.colorSpace);Mt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(_),Ae,_.width,_.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(_),Ae,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(E,_,I){const K=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),se(s.TEXTURE_CUBE_MAP,_.depthTexture);const Pe=r.convert(_.depthTexture.format),J=r.convert(_.depthTexture.type);let te;_.depthTexture.format===Wn?te=s.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(te=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,te,_.width,_.height,0,Pe,J,null)}}else O(_.depthTexture,0);const $=j.__webglTexture,_e=P(_),re=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,Ae=_.depthTexture.format===_i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wn)Mt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,re,$,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,re,$,0);else if(_.depthTexture.format===_i)Mt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,re,$,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,re,$,0);else throw new Error("Unknown depthTexture format")}function De(E){const _=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=K}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let K=0;K<6;K++)Ce(_.__webglFramebuffer[K],E,K);else{const K=E.texture.mipmaps;K&&K.length>0?Ce(_.__webglFramebuffer[0],E,0):Ce(_.__webglFramebuffer,E,0)}else if(I){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),Be(_.__webglDepthbuffer[K],E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else{const K=E.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Be(_.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(E,_,I){const K=n.get(E);_!==void 0&&oe(K.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&De(E)}function je(E){const _=E.texture,I=n.get(E),K=n.get(_);E.addEventListener("dispose",C);const j=E.textures,$=E.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,a.memory.textures++),$){I.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[re]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)I.__webglFramebuffer[re][Ae]=s.createFramebuffer()}else I.__webglFramebuffer[re]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)I.__webglFramebuffer[re]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(_e)for(let re=0,Ae=j.length;re<Ae;re++){const Pe=n.get(j[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Mt(E)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let re=0;re<j.length;re++){const Ae=j[re];I.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[re]);const Pe=r.convert(Ae.format,Ae.colorSpace),J=r.convert(Ae.type),te=b(Ae.internalFormat,Pe,J,Ae.colorSpace,E.isXRRenderTarget===!0),xe=P(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,I.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),se(s.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)oe(I.__webglFramebuffer[re][Ae],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae);else oe(I.__webglFramebuffer[re],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ae=j.length;re<Ae;re++){const Pe=j[re],J=n.get(Pe);let te=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),se(te,Pe),oe(I.__webglFramebuffer,E,Pe,s.COLOR_ATTACHMENT0+re,te,0),m(Pe)&&p(te)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,K.__webglTexture),se(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)oe(I.__webglFramebuffer[Ae],E,_,s.COLOR_ATTACHMENT0,re,Ae);else oe(I.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,re,0);m(_)&&p(re),t.unbindTexture()}E.depthBuffer&&De(E)}function et(E){const _=E.textures;for(let I=0,K=_.length;I<K;I++){const j=_[I];if(m(j)){const $=S(E),_e=n.get(j).__webglTexture;t.bindTexture($,_e),p($),t.unbindTexture()}}}const ot=[],He=[];function _t(E){if(E.samples>0){if(Mt(E)===!1){const _=E.textures,I=E.width,K=E.height;let j=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(E),re=_.length>1;if(re)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=E.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Pe]);const J=n.get(_[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,I,K,0,0,I,K,j,s.NEAREST),l===!0&&(ot.length=0,He.length=0,ot.push(s.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push($),He.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Pe]);const J=n.get(_[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function P(E){return Math.min(i.maxSamples,E.samples)}function Mt(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Je(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function ct(E,_){const I=E.colorSpace,K=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==$t&&I!==ni&&(Ye.getTransfer(I)===nt?(K!==tn||j!==Zt)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",I)),_}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=ee,this.rebindTextures=Pt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function t_(s,e){function t(n,i=ni){let r;const a=Ye.getTransfer(i);if(n===Zt)return s.UNSIGNED_BYTE;if(n===Co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===lh)return s.SHORT;if(n===As)return s.UNSIGNED_SHORT;if(n===Ro)return s.INT;if(n===wn)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===dh)return s.ALPHA;if(n===uh)return s.RGB;if(n===tn)return s.RGBA;if(n===Wn)return s.DEPTH_COMPONENT;if(n===_i)return s.DEPTH_STENCIL;if(n===Lo)return s.RED;if(n===Io)return s.RED_INTEGER;if(n===Ki)return s.RG;if(n===Do)return s.RG_INTEGER;if(n===No)return s.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===xr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===za||n===Ha||n===Ga||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===za)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return r.COMPRESSED_RG11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ka||n===Ya||n===ja||n===Za||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===lo||n===co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`;class s_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends ts{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new s_,p={},S=t.getContextAttributes();let b=null,M=null;const A=[],w=[],C=new Ke;let v=null;const T=new Wt;T.viewport=new ut;const G=new Wt;G.viewport=new ut;const R=[T,G],U=new of;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=A[Y];return ie===void 0&&(ie=new Yr,A[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=A[Y];return ie===void 0&&(ie=new Yr,A[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=A[Y];return ie===void 0&&(ie=new Yr,A[Y]=ie),ie.getHandSpace()};function O(Y){const ie=w.indexOf(Y.inputSource);if(ie===-1)return;const oe=A[ie];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,c||a),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<A.length;Y++){const ie=w[Y];ie!==null&&(w[Y]=null,A[Y].disconnect(ie))}F=null,B=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(b),f=null,d=null,u=null,i=null,M=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Be=null,Ce=null;S.depth&&(Ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=S.stencil?_i:Wn,Be=S.stencil?Rs:wn);const De={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Tn(d.textureWidth,d.textureHeight,{format:tn,type:Zt,depthTexture:new Ds(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Tn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Y){for(let ie=0;ie<Y.removed.length;ie++){const oe=Y.removed[ie],Be=w.indexOf(oe);Be>=0&&(w[Be]=null,A[Be].disconnect(oe))}for(let ie=0;ie<Y.added.length;ie++){const oe=Y.added[ie];let Be=w.indexOf(oe);if(Be===-1){for(let De=0;De<A.length;De++)if(De>=w.length){w.push(oe),Be=De;break}else if(w[De]===null){w[De]=oe,Be=De;break}if(Be===-1)break}const Ce=A[Be];Ce&&Ce.connect(oe)}}const ee=new D,Z=new D;function fe(Y,ie,oe){ee.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const Be=ee.distanceTo(Z),Ce=ie.projectionMatrix.elements,De=oe.projectionMatrix.elements,Pt=Ce[14]/(Ce[10]-1),je=Ce[14]/(Ce[10]+1),et=(Ce[9]+1)/Ce[5],ot=(Ce[9]-1)/Ce[5],He=(Ce[8]-1)/Ce[0],_t=(De[8]+1)/De[0],P=Pt*He,Mt=Pt*_t,Je=Be/(-He+_t),ct=Je*-He;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(Je),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=Pt+Je,E=je+Je,_=P-ct,I=Mt+(Be-ct),K=et*je/E*Me,j=ot*je/E*Me;Y.projectionMatrix.makePerspective(_,I,K,j,Me,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ie=Y.near,oe=Y.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=G.near=T.near=ie,U.far=G.far=T.far=oe,(F!==U.near||B!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,B=U.far),U.layers.mask=Y.layers.mask|6,T.layers.mask=U.layers.mask&-5,G.layers.mask=U.layers.mask&-3;const Be=Y.parent,Ce=U.cameras;le(U,Be);for(let De=0;De<Ce.length;De++)le(Ce[De],Be);Ce.length===2?fe(U,T,G):U.projectionMatrix.copy(T.projectionMatrix),se(Y,U,Be)};function se(Y,ie,oe){oe===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let Fe=null;function Qe(Y,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Be=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,Be=!0);for(let je=0;je<oe.length;je++){const et=oe[je];let ot=null;if(f!==null)ot=f.getViewport(et);else{const _t=u.getViewSubImage(d,et);ot=_t.viewport,je===0&&(e.setRenderTargetTextures(M,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(M))}let He=R[je];He===void 0&&(He=new Wt,He.layers.enable(je),He.viewport=new ut,R[je]=He),He.matrix.fromArray(et.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(et.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ot.x,ot.y,ot.width,ot.height),je===0&&(U.matrix.copy(He.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Be===!0&&U.cameras.push(He)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const je=u.getDepthInformation(oe[0]);je&&je.isValid&&je.texture&&m.init(je,i.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<oe.length;je++){const et=oe[je].camera;if(et){let ot=p[et];ot||(ot=new Eh,p[et]=ot);const He=u.getCameraImage(et);ot.sourceTexture=He}}}}for(let oe=0;oe<A.length;oe++){const Be=w[oe],Ce=A[oe];Be!==null&&Ce!==void 0&&Ce.update(Be,ie,c||a)}Fe&&Fe(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const dt=new Ih;dt.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}}const di=new hn,a_=new ze;function o_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,di.copy(M),di.x*=-1,di.y*=-1,di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(di)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const M=b.program;n.uniformBlockBinding(S,M)}function c(S,b){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(S,A);const w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){const b=u();S.__bindingPointIndex=b;const M=s.createBuffer(),A=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=i[S.id],M=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,C=M.length;w<C;w++){const v=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,G=v.length;T<G;T++){const R=v[T];if(f(R,w,T,A)===!0){const U=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let O=0;O<F.length;O++){const k=F[O],W=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,U+B,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,B),B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,b,M,A){const w=S.value,C=b+"_"+M;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const v=A[C];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return A[C]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function g(S){const b=S.uniforms;let M=0;const A=16;for(let C=0,v=b.length;C<v;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let G=0,R=T.length;G<R;G++){const U=T[G],F=Array.isArray(U.value)?U.value:[U.value];for(let B=0,O=F.length;B<O;B++){const k=F[B],W=x(k),ee=M%A,Z=ee%W.boundary,fe=ee+Z;M+=Z,fe!==0&&A-fe<W.storage&&(M+=A-fe),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=W.storage}}}const w=M%A;return w>0&&(M+=A-w),S.__size=M,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function h_(){return mn===null&&(mn=new zo(c_,16,16,Ki,Gn),mn.name="DFG_LUT",mn.minFilter=wt,mn.magFilter=wt,mn.wrapS=yn,mn.wrapT=yn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class d_{constructor(e={}){const{canvas:t=Dd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([No,Do,Io]),p=new Set([Zt,wn,As,Rs,Co,Po]),S=new Uint32Array(4),b=new Int32Array(4);let M=null,A=null;const w=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let G=!1;this._outputColorSpace=Ot;let R=0,U=0,F=null,B=-1,O=null;const k=new ut,W=new ut;let ee=null;const Z=new Ie(0);let fe=0,le=t.width,se=t.height,Fe=1,Qe=null,dt=null;const Y=new ut(0,0,le,se),ie=new ut(0,0,le,se);let oe=!1;const Be=new Go;let Ce=!1,De=!1;const Pt=new ze,je=new D,et=new ut,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function _t(){return F===null?Fe:1}let P=n;function Mt(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ht,!1),P===null){const N="webgl2";if(P=Mt(N,y),P===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Le("WebGLRenderer: "+y.message),y}let Je,ct,Me,E,_,I,K,j,$,_e,re,Ae,Pe,J,te,xe,Se,pe,Ge,L,ae,ne,ge;function Q(){Je=new dg(P),Je.init(),ae=new t_(P,Je),ct=new ig(P,Je,e,ae),Me=new Q0(P,Je),ct.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),E=new pg(P),_=new k0,I=new e_(P,Je,Me,_,ct,ae,E),K=new hg(T),j=new vf(P),ne=new tg(P,j),$=new ug(P,j,E,ne),_e=new gg(P,$,j,ne,E),pe=new mg(P,ct,I),te=new sg(_),re=new B0(T,K,Je,ct,ne,te),Ae=new o_(T,_),Pe=new z0,J=new $0(Je),Se=new eg(T,K,Me,_e,g,l),xe=new J0(T,_e,ct),ge=new l_(P,E,ct,Me),Ge=new ng(P,Je,E),L=new fg(P,Je,E),E.programs=re.programs,T.capabilities=ct,T.extensions=Je,T.properties=_,T.renderLists=Pe,T.shadowMap=xe,T.state=Me,T.info=E}Q(),x!==Zt&&(v=new xg(x,t.width,t.height,i,r));const q=new r_(T,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(y){y!==void 0&&(Fe=y,this.setSize(le,se,!1))},this.getSize=function(y){return y.set(le,se)},this.setSize=function(y,N,X=!0){if(q.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}le=y,se=N,t.width=Math.floor(y*Fe),t.height=Math.floor(N*Fe),X===!0&&(t.style.width=y+"px",t.style.height=N+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(le*Fe,se*Fe).floor()},this.setDrawingBufferSize=function(y,N,X){le=y,se=N,Fe=X,t.width=Math.floor(y*X),t.height=Math.floor(N*X),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(x===Zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(k)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,N,X,z){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,X,z),Me.viewport(k.copy(Y).multiplyScalar(Fe).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,N,X,z){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,N,X,z),Me.scissor(W.copy(ie).multiplyScalar(Fe).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(y){Me.setScissorTest(oe=y)},this.setOpaqueSort=function(y){Qe=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,X=!0){let z=0;if(y){let V=!1;if(F!==null){const de=F.texture.format;V=m.has(de)}if(V){const de=F.texture.type,me=p.has(de),ue=Se.getClearColor(),ye=Se.getClearAlpha(),Te=ue.r,Oe=ue.g,We=ue.b;me?(S[0]=Te,S[1]=Oe,S[2]=We,S[3]=ye,P.clearBufferuiv(P.COLOR,0,S)):(b[0]=Te,b[1]=Oe,b[2]=We,b[3]=ye,P.clearBufferiv(P.COLOR,0,b))}else z|=P.COLOR_BUFFER_BIT}N&&(z|=P.DEPTH_BUFFER_BIT),X&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Se.dispose(),Pe.dispose(),J.dispose(),_.dispose(),K.dispose(),_e.dispose(),ne.dispose(),ge.dispose(),re.dispose(),q.dispose(),q.removeEventListener("sessionstart",Zo),q.removeEventListener("sessionend",Jo),si.stop()};function ve(y){y.preventDefault(),Mr("WebGLRenderer: Context Lost."),G=!0}function Ne(){Mr("WebGLRenderer: Context Restored."),G=!1;const y=E.autoReset,N=xe.enabled,X=xe.autoUpdate,z=xe.needsUpdate,V=xe.type;Q(),E.autoReset=y,xe.enabled=N,xe.autoUpdate=X,xe.needsUpdate=z,xe.type=V}function ht(y){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function tt(y){const N=y.target;N.removeEventListener("dispose",tt),Pn(N)}function Pn(y){Ln(y),_.remove(y)}function Ln(y){const N=_.get(y).programs;N!==void 0&&(N.forEach(function(X){re.releaseProgram(X)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,X,z,V,de){N===null&&(N=ot);const me=V.isMesh&&V.matrixWorld.determinant()<0,ue=qh(y,N,X,z,V);Me.setMaterial(z,me);let ye=X.index,Te=1;if(z.wireframe===!0){if(ye=$.getWireframeAttribute(X),ye===void 0)return;Te=2}const Oe=X.drawRange,We=X.attributes.position;let we=Oe.start*Te,rt=(Oe.start+Oe.count)*Te;de!==null&&(we=Math.max(we,de.start*Te),rt=Math.min(rt,(de.start+de.count)*Te)),ye!==null?(we=Math.max(we,0),rt=Math.min(rt,ye.count)):We!=null&&(we=Math.max(we,0),rt=Math.min(rt,We.count));const xt=rt-we;if(xt<0||xt===1/0)return;ne.setup(V,z,ue,X,ye);let mt,at=Ge;if(ye!==null&&(mt=j.get(ye),at=L,at.setIndex(mt)),V.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*_t()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(V.isLine){let Bt=z.linewidth;Bt===void 0&&(Bt=1),Me.setLineWidth(Bt*_t()),V.isLineSegments?at.setMode(P.LINES):V.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else V.isPoints?at.setMode(P.POINTS):V.isSprite&&at.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)br("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,be=V._multiDrawCounts,Kt=V._multiDrawCount,Ze=ye?j.get(ye).bytesPerElement:1,nn=_.get(z).currentProgram.getUniforms();for(let fn=0;fn<Kt;fn++)nn.setValue(P,"_gl_DrawID",fn),at.render(Bt[fn]/Ze,be[fn])}else if(V.isInstancedMesh)at.renderInstances(we,xt,V.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,Bt);at.renderInstances(we,xt,be)}else at.render(we,xt)};function jo(y,N,X){y.transparent===!0&&y.side===Sn&&y.forceSinglePass===!1?(y.side=Xt,y.needsUpdate=!0,Os(y,N,X),y.side=Hn,y.needsUpdate=!0,Os(y,N,X),y.side=Sn):Os(y,N,X)}this.compile=function(y,N,X=null){X===null&&(X=y),A=J.get(X),A.init(N),C.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),y!==X&&y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const de=V.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const ue=de[me];jo(ue,X,V),z.add(ue)}else jo(de,X,V),z.add(de)}),A=C.pop(),z},this.compileAsync=function(y,N,X=null){const z=this.compile(y,N,X);return new Promise(V=>{function de(){if(z.forEach(function(me){_.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){V(y);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let kr=null;function Xh(y){kr&&kr(y)}function Zo(){si.stop()}function Jo(){si.start()}const si=new Ih;si.setAnimationLoop(Xh),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(y){kr=y,q.setAnimationLoop(y),y===null?si.stop():si.start()},q.addEventListener("sessionstart",Zo),q.addEventListener("sessionend",Jo),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,z=v!==null&&(F===null||X)&&v.begin(T,F);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,N,F),A=J.get(y,C.length),A.init(N),C.push(A),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Be.setFromProjectionMatrix(Pt,Mn,N.reversedDepth),De=this.localClippingEnabled,Ce=te.init(this.clippingPlanes,De),M=Pe.get(y,w.length),M.init(),w.push(M),q.enabled===!0&&q.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&Vr(me,N,-1/0,T.sortObjects)}Vr(y,N,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(Qe,dt),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&Se.addToRenderList(M,y),this.info.render.frame++,Ce===!0&&te.beginShadows();const V=A.state.shadowsArray;if(xe.render(V,y,N),Ce===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&v.hasRenderPass())===!1){const me=M.opaque,ue=M.transmissive;if(A.setupLights(),N.isArrayCamera){const ye=N.cameras;if(ue.length>0)for(let Te=0,Oe=ye.length;Te<Oe;Te++){const We=ye[Te];el(me,ue,y,We)}He&&Se.render(y);for(let Te=0,Oe=ye.length;Te<Oe;Te++){const We=ye[Te];Qo(M,y,We,We.viewport)}}else ue.length>0&&el(me,ue,y,N),He&&Se.render(y),Qo(M,y,N)}F!==null&&U===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),z&&v.end(T),y.isScene===!0&&y.onAfterRender(T,y,N),ne.resetDefaultState(),B=-1,O=null,C.pop(),C.length>0?(A=C[C.length-1],Ce===!0&&te.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Vr(y,N,X,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){z&&et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const me=_e.update(y),ue=y.material;ue.visible&&M.push(y,me,ue,X,et.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){const me=_e.update(y),ue=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),et.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),et.copy(me.boundingSphere.center)),et.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(ue)){const ye=me.groups;for(let Te=0,Oe=ye.length;Te<Oe;Te++){const We=ye[Te],we=ue[We.materialIndex];we&&we.visible&&M.push(y,me,we,X,et.z,We)}}else ue.visible&&M.push(y,me,ue,X,et.z,null)}}const de=y.children;for(let me=0,ue=de.length;me<ue;me++)Vr(de[me],N,X,z)}function Qo(y,N,X,z){const{opaque:V,transmissive:de,transparent:me}=y;A.setupLightsView(X),Ce===!0&&te.setGlobalState(T.clippingPlanes,X),z&&Me.viewport(k.copy(z)),V.length>0&&Fs(V,N,X),de.length>0&&Fs(de,N,X),me.length>0&&Fs(me,N,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function el(y,N,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const we=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Tn(1,1,{generateMipmaps:!0,type:we?Gn:Zt,minFilter:Bn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const de=A.state.transmissionRenderTarget[z.id],me=z.viewport||k;de.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const ue=T.getRenderTarget(),ye=T.getActiveCubeFace(),Te=T.getActiveMipmapLevel();T.setRenderTarget(de),T.getClearColor(Z),fe=T.getClearAlpha(),fe<1&&T.setClearColor(16777215,.5),T.clear(),He&&Se.render(X);const Oe=T.toneMapping;T.toneMapping=bn;const We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Ce===!0&&te.setGlobalState(T.clippingPlanes,z),Fs(y,X,z),I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let rt=0,xt=N.length;rt<xt;rt++){const mt=N[rt],{object:at,geometry:Bt,material:be,group:Kt}=mt;if(be.side===Sn&&at.layers.test(z.layers)){const Ze=be.side;be.side=Xt,be.needsUpdate=!0,tl(at,X,z,Bt,be,Kt),be.side=Ze,be.needsUpdate=!0,we=!0}}we===!0&&(I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de))}T.setRenderTarget(ue,ye,Te),T.setClearColor(Z,fe),We!==void 0&&(z.viewport=We),T.toneMapping=Oe}function Fs(y,N,X){const z=N.isScene===!0?N.overrideMaterial:null;for(let V=0,de=y.length;V<de;V++){const me=y[V],{object:ue,geometry:ye,group:Te}=me;let Oe=me.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ue.layers.test(X.layers)&&tl(ue,N,X,ye,Oe,Te)}}function tl(y,N,X,z,V,de){y.onBeforeRender(T,N,X,z,V,de),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(T,N,X,z,y,de),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=Xt,V.needsUpdate=!0,T.renderBufferDirect(X,N,z,V,y,de),V.side=Hn,V.needsUpdate=!0,T.renderBufferDirect(X,N,z,V,y,de),V.side=Sn):T.renderBufferDirect(X,N,z,V,y,de),y.onAfterRender(T,N,X,z,V,de)}function Os(y,N,X){N.isScene!==!0&&(N=ot);const z=_.get(y),V=A.state.lights,de=A.state.shadowsArray,me=V.state.version,ue=re.getParameters(y,V.state,de,N,X),ye=re.getProgramCacheKey(ue);let Te=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=K.get(y.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",tt),Te=new Map,z.programs=Te);let We=Te.get(ye);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===me)return il(y,ue),We}else ue.uniforms=re.getUniforms(y),y.onBeforeCompile(ue,T),We=re.acquireProgram(ue,ye),Te.set(ye,We),z.uniforms=ue.uniforms;const we=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=te.uniform),il(y,ue),z.needsLights=Kh(y),z.lightsStateVersion=me,z.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),z.currentProgram=We,z.uniformsList=null,We}function nl(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=vr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function il(y,N){const X=_.get(y);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function qh(y,N,X,z,V){N.isScene!==!0&&(N=ot),I.resetTextureUnits();const de=N.fog,me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ue=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:$t,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=K.get(z.envMap||me,ye),Oe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color;let mt=bn;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(mt=T.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=at!==void 0?at.length:0,be=_.get(z),Kt=A.state.lights;if(Ce===!0&&(De===!0||y!==O)){const Lt=y===O&&z.id===B;te.setState(z,y,Lt)}let Ze=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Kt.state.version||be.outputColorSpace!==ue||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Te||z.fog===!0&&be.fog!==de||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==We||be.morphTargets!==we||be.morphNormals!==rt||be.morphColors!==xt||be.toneMapping!==mt||be.morphTargetsCount!==Bt)&&(Ze=!0):(Ze=!0,be.__version=z.version);let nn=be.currentProgram;Ze===!0&&(nn=Os(z,N,V));let fn=!1,ri=!1,Si=!1;const lt=nn.getUniforms(),Ft=be.uniforms;if(Me.useProgram(nn.program)&&(fn=!0,ri=!0,Si=!0),z.id!==B&&(B=z.id,ri=!0),fn||O!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",y.projectionMatrix),lt.setValue(P,"viewMatrix",y.matrixWorldInverse);const $n=lt.map.cameraPosition;$n!==void 0&&$n.setValue(P,je.setFromMatrixPosition(y.matrixWorld)),ct.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),O!==y&&(O=y,ri=!0,Si=!0)}if(be.needsLights&&(Kt.state.directionalShadowMap.length>0&&lt.setValue(P,"directionalShadowMap",Kt.state.directionalShadowMap,I),Kt.state.spotShadowMap.length>0&&lt.setValue(P,"spotShadowMap",Kt.state.spotShadowMap,I),Kt.state.pointShadowMap.length>0&&lt.setValue(P,"pointShadowMap",Kt.state.pointShadowMap,I)),V.isSkinnedMesh){lt.setOptional(P,V,"bindMatrix"),lt.setOptional(P,V,"bindMatrixInverse");const Lt=V.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),lt.setValue(P,"boneTexture",Lt.boneTexture,I))}V.isBatchedMesh&&(lt.setOptional(P,V,"batchingTexture"),lt.setValue(P,"batchingTexture",V._matricesTexture,I),lt.setOptional(P,V,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",V._indirectTexture,I),lt.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",V._colorsTexture,I));const qn=X.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&pe.update(V,X,nn),(ri||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,lt.setValue(P,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Ft.envMapIntensity.value=N.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=h_()),ri&&(lt.setValue(P,"toneMappingExposure",T.toneMappingExposure),be.needsLights&&$h(Ft,Si),de&&z.fog===!0&&Ae.refreshFogUniforms(Ft,de),Ae.refreshMaterialUniforms(Ft,z,Fe,se,A.state.transmissionRenderTarget[y.id]),vr.upload(P,nl(be),Ft,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vr.upload(P,nl(be),Ft,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(P,"center",V.center),lt.setValue(P,"modelViewMatrix",V.modelViewMatrix),lt.setValue(P,"normalMatrix",V.normalMatrix),lt.setValue(P,"modelMatrix",V.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Lt=z.uniformsGroups;for(let $n=0,yi=Lt.length;$n<yi;$n++){const sl=Lt[$n];ge.update(sl,nn),ge.bind(sl,nn)}}return nn}function $h(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Kh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,N,X){const z=_.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=N,_.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const X=_.get(y);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Yh=P.createFramebuffer();this.setRenderTarget=function(y,N=0,X=0){F=y,R=N,U=X;let z=null,V=!1,de=!1;if(y){const ue=_.get(y);if(ue.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,ue.__webglFramebuffer),k.copy(y.viewport),W.copy(y.scissor),ee=y.scissorTest,Me.viewport(k),Me.scissor(W),Me.setScissorTest(ee),B=-1;return}else if(ue.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(ue.__hasExternalTextures)I.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Oe=y.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&_.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}const ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);const Te=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?z=Te[N][X]:z=Te[N],V=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?z=_.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[X]:z=Te,k.copy(y.viewport),W.copy(y.scissor),ee=y.scissorTest}else k.copy(Y).multiplyScalar(Fe).floor(),W.copy(ie).multiplyScalar(Fe).floor(),ee=oe;if(X!==0&&(z=Yh),Me.bindFramebuffer(P.FRAMEBUFFER,z)&&Me.drawBuffers(y,z),Me.viewport(k),Me.scissor(W),Me.setScissorTest(ee),V){const ue=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,X)}else if(de){const ue=N;for(let ye=0;ye<y.textures.length;ye++){const Te=_.get(y.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,Te.__webglTexture,X,ue)}}else if(y!==null&&X!==0){const ue=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,X)}B=-1},this.readRenderTargetPixels=function(y,N,X,z,V,de,me,ue=0){if(!(y&&y.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Me.bindFramebuffer(P.FRAMEBUFFER,ye);try{const Te=y.textures[ue],Oe=Te.format,We=Te.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),!ct.textureFormatReadable(Oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(We)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&X>=0&&X<=y.height-V&&P.readPixels(N,X,z,V,ae.convert(Oe),ae.convert(We),de)}finally{const Te=F!==null?_.get(F).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,N,X,z,V,de,me,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye)if(N>=0&&N<=y.width-z&&X>=0&&X<=y.height-V){Me.bindFramebuffer(P.FRAMEBUFFER,ye);const Te=y.textures[ue],Oe=Te.format,We=Te.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),!ct.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,de.byteLength,P.STREAM_READ),P.readPixels(N,X,z,V,ae.convert(Oe),ae.convert(We),0);const rt=F!==null?_.get(F).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,rt);const xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nd(P,xt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,de),P.deleteBuffer(we),P.deleteSync(xt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,X=0){const z=Math.pow(2,-X),V=Math.floor(y.image.width*z),de=Math.floor(y.image.height*z),me=N!==null?N.x:0,ue=N!==null?N.y:0;I.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,me,ue,V,de),Me.unbindTexture()};const jh=P.createFramebuffer(),Zh=P.createFramebuffer();this.copyTextureToTexture=function(y,N,X=null,z=null,V=0,de=0){let me,ue,ye,Te,Oe,We,we,rt,xt;const mt=y.isCompressedTexture?y.mipmaps[de]:y.image;if(X!==null)me=X.max.x-X.min.x,ue=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Oe=X.min.y,We=X.isBox3?X.min.z:0;else{const Ft=Math.pow(2,-V);me=Math.floor(mt.width*Ft),ue=Math.floor(mt.height*Ft),y.isDataArrayTexture?ye=mt.depth:y.isData3DTexture?ye=Math.floor(mt.depth*Ft):ye=1,Te=0,Oe=0,We=0}z!==null?(we=z.x,rt=z.y,xt=z.z):(we=0,rt=0,xt=0);const at=ae.convert(N.format),Bt=ae.convert(N.type);let be;N.isData3DTexture?(I.setTexture3D(N,0),be=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),be=P.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),nn=P.getParameter(P.UNPACK_SKIP_PIXELS),fn=P.getParameter(P.UNPACK_SKIP_ROWS),ri=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,We);const Si=y.isDataArrayTexture||y.isData3DTexture,lt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Ft=_.get(y),qn=_.get(N),Lt=_.get(Ft.__renderTarget),$n=_.get(qn.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let yi=0;yi<ye;yi++)Si&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(y).__webglTexture,V,We+yi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,de,xt+yi)),P.blitFramebuffer(Te,Oe,me,ue,we,rt,me,ue,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||_.has(y)){const Ft=_.get(y),qn=_.get(N);Me.bindFramebuffer(P.READ_FRAMEBUFFER,jh),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Zh);for(let Lt=0;Lt<ye;Lt++)Si?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,V,We+Lt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,V),lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qn.__webglTexture,de,xt+Lt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qn.__webglTexture,de),V!==0?P.blitFramebuffer(Te,Oe,me,ue,we,rt,me,ue,P.COLOR_BUFFER_BIT,P.NEAREST):lt?P.copyTexSubImage3D(be,de,we,rt,xt+Lt,Te,Oe,me,ue):P.copyTexSubImage2D(be,de,we,rt,Te,Oe,me,ue);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(be,de,we,rt,xt,me,ue,ye,at,Bt,mt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(be,de,we,rt,xt,me,ue,ye,at,mt.data):P.texSubImage3D(be,de,we,rt,xt,me,ue,ye,at,Bt,mt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,de,we,rt,me,ue,at,Bt,mt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,de,we,rt,mt.width,mt.height,at,mt.data):P.texSubImage2D(P.TEXTURE_2D,de,we,rt,me,ue,at,Bt,mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,nn),P.pixelStorei(P.UNPACK_SKIP_ROWS,fn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ri),de===0&&N.generateMipmaps&&P.generateMipmap(be),Me.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){R=0,U=0,F=null,Me.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function Mc(s,e){if(e===Md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===mo||e===fh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===mo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function u_(s){const e=new Map,t=new Map,n=s.clone();return Bh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Bh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Bh(s.children[n],e.children[n],t)}class f_ extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new x_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new bc(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bc(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new L_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Es.extractUrlBase(e);a=Es.resolveURL(c,this.path)}else a=Es.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ch(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kh){try{a[qe.KHR_BINARY_GLTF]=new I_(e)}catch(u){i&&i(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new X_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new g_;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new D_(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new N_;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new U_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function p_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function yt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class m_{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$t);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nf(h),c.distance=u;break;case"spot":c=new ef(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class g_{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}}class __{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class x_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(r,r)}return Promise.all(i)}}class v_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class S_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class y_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],$t)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class M_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class b_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],$t),Promise.all(i)}}class T_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class E_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],$t),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ot)),Promise.all(i)}}class w_{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class A_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return yt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class R_{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class C_{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class P_{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class bc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class L_{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Qt.TRIANGLES&&c.mode!==Qt.TRIANGLE_STRIP&&c.mode!==Qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new ze,m=new D,p=new Xn,S=new D(1,1,1),b=new Mu(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,x.compose(m,p,S));for(const M in l)if(M==="_COLOR_0"){const A=l[M];b.instanceColor=new _o(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const kh="glTF",gs=12,Tc={JSON:1313821514,BIN:5130562};class I_{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gs,r=new DataView(e,gs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Tc.JSON){const c=new Uint8Array(e,gs+a,o);this.content=n.decode(c)}else if(l===Tc.BIN){const c=gs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class D_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=yo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=yo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Wi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,$t,d)})})}}class N_{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class U_{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Vh extends ns{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,S=1-m,b=p-d+u;for(let M=0;M!==o;M++){const A=a[x+M+o],w=a[x+M+l]*h,C=a[g+M+o],v=a[g+M]*h;r[M]=S*A+b*w+m*C+p*v}return r}}const F_=new Xn;class O_ extends Vh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return F_.fromArray(r).normalize().toArray(r),r}}const Qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Wi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ec={9728:Et,9729:wt,9984:ah,9985:pr,9986:ys,9987:Bn},wc={33071:yn,33648:Sr,10497:$i},ba={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B_={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Cs},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Re({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),s.DefaultMaterial}function ui(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function z_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function H_(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ea(t.attributes):e=s.indices+":"+Ea(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ea(s.targets[n]);return e}function Ea(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function G_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const W_=new ze;class X_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new p_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Zu(this.options.manager):this.textureLoader=new rf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ch(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ui(r,o,i),xn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Es.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ba[i.type],o=Wi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new qt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ba[i.type],c=Wi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(S);b||(x=new c(o,p*f,i.count*f/h),b=new mu(x,f/h),t.cache.add(S,b)),m=new Vo(b,l,d%f/h,g)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),m=new qt(x,l,g);if(i.sparse!==void 0){const p=ba.SCALAR,S=Wi[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new S(a[1],b,i.sparse.count*p),w=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,v=A.length;C<v;C++){const T=A[C];if(m.setX(T,w[C*l]),l>=2&&m.setY(T,w[C*l+1]),l>=3&&m.setZ(T,w[C*l+2]),l>=4&&m.setW(T,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ec[d.magFilter]||wt,h.minFilter=Ec[d.minFilter]||Bn,h.wrapS=wc[d.wrapS]||$i,h.wrapT=wc[d.wrapT]||$i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Et&&h.minFilter!==wt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new At(x);m.needsUpdate=!0,d(m)}),t.load(Es.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),xn(u,a),u.userData.mimeType=a.mimeType||G_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bh,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Mh,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Re}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Sn);const h=r.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ta.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==St&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==St&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==St){const u=r.emissiveFactor;o.emissive=new Ie().setRGB(u[0],u[1],u[2],$t)}return r.emissiveTexture!==void 0&&a!==St&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),xn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ui(i,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ac(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=H_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ac(new zt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?k_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=a[f];let p;const S=c[f];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new vu(x,S):new ce(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?p.geometry=Mc(p.geometry,fh):m.mode===Qt.TRIANGLE_FAN&&(p.geometry=Mc(p.geometry,mo));else if(m.mode===Qt.LINES)p=new wu(x,S);else if(m.mode===Qt.LINE_STRIP)p=new Wo(x,S);else if(m.mode===Qt.LINE_LOOP)p=new Au(x,S);else if(m.mode===Qt.POINTS)p=new Ru(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&z_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),xn(p,r),m.extensions&&ui(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ui(i,u[0],r),u[0];const d=new Tt;r.extensions&&ui(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Xe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Nr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ho(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,M=d.length;b<M;b++){const A=d[b],w=f[b],C=g[b],v=x[b],T=m[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const G=n._createAnimationTracks(A,w,C,v,T);if(G)for(let R=0;R<G.length;R++)p.push(G[R])}const S=new Wu(r,void 0,p);return xn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,W_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new yh:c.length>1?h=new Tt:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),xn(h,r),r.extensions&&ui(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Tt;n.name&&(r.name=i.createUniqueName(n.name)),xn(r,n),n.extensions&&ui(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(u_(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof En||d instanceof At)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ei[r.path]===ei.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ei[r.path]){case ei.weights:c=Zi;break;case ei.rotation:c=Ji;break;case ei.translation:case ei.scale:c=Qi;break;default:switch(n.itemSize){case 1:c=Zi;break;case 2:case 3:default:c=Qi;break}break}const h=i.interpolation!==void 0?B_[i.interpolation]:Ps,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ei[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ji?O_:Vh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function q_(s,e,t){const n=e.attributes,i=new dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const h=Mo(Wi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Mo(Wi[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ac(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=yo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),xn(s,e),q_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?V_(s,e.targets,t):s})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var es;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(es||(es={}));class wa extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const $_=s=>{var e,t;return s!=null&&s.androidBridge?"android":!((t=(e=s==null?void 0:s.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},K_=s=>{const e=s.CapacitorCustomPlatform||null,t=s.Capacitor||{},n=t.Plugins=t.Plugins||{},i=()=>e!==null?e.name:$_(s),r=()=>i()!=="web",a=u=>{const d=c.get(u);return!!(d!=null&&d.platforms.has(i())||o(u))},o=u=>{var d;return(d=t.PluginHeaders)===null||d===void 0?void 0:d.find(f=>f.name===u)},l=u=>s.console.error(u),c=new Map,h=(u,d={})=>{const f=c.get(u);if(f)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),f.proxy;const g=i(),x=o(u);let m;const p=async()=>(!m&&g in d?m=typeof d[g]=="function"?m=await d[g]():m=d[g]:e!==null&&!m&&"web"in d&&(m=typeof d.web=="function"?m=await d.web():m=d.web),m),S=(v,T)=>{var G,R;if(x){const U=x==null?void 0:x.methods.find(F=>T===F.name);if(U)return U.rtype==="promise"?F=>t.nativePromise(u,T.toString(),F):(F,B)=>t.nativeCallback(u,T.toString(),F,B);if(v)return(G=v[T])===null||G===void 0?void 0:G.bind(v)}else{if(v)return(R=v[T])===null||R===void 0?void 0:R.bind(v);throw new wa(`"${u}" plugin is not implemented on ${g}`,es.Unimplemented)}},b=v=>{let T;const G=(...R)=>{const U=p().then(F=>{const B=S(F,v);if(B){const O=B(...R);return T=O==null?void 0:O.remove,O}else throw new wa(`"${u}.${v}()" is not implemented on ${g}`,es.Unimplemented)});return v==="addListener"&&(U.remove=async()=>T()),U};return G.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(G,"name",{value:v,writable:!1,configurable:!1}),G},M=b("addListener"),A=b("removeListener"),w=(v,T)=>{const G=M({eventName:v},T),R=async()=>{const F=await G;A({eventName:v,callbackId:F},T)},U=new Promise(F=>G.then(()=>F({remove:R})));return U.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},U},C=new Proxy({},{get(v,T){switch(T){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?w:M;case"removeListener":return A;default:return b(T)}}});return n[u]=C,c.set(u,{name:u,proxy:C,platforms:new Set([...Object.keys(d),...x?[g]:[]])}),C};return t.convertFileSrc||(t.convertFileSrc=u=>u),t.getPlatform=i,t.handleError=l,t.isNativePlatform=r,t.isPluginAvailable=a,t.registerPlugin=h,t.Exception=wa,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},Y_=s=>s.Capacitor=K_(s),Ar=Y_(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Us=Ar.registerPlugin;class Yo{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const i=this.listeners[e];if(!i){if(n){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}i.forEach(r=>r(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new Ar.Exception(e,es.Unimplemented)}unavailable(e="not available"){return new Ar.Exception(e,es.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const i=n.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const Rc=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Cc=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class j_ extends Yo{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[i,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Cc(i).trim(),r=Cc(r).trim(),t[i]=r}),t}async setCookie(e){try{const t=Rc(e.key),n=Rc(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",r=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${i}; path=${r}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Us("CapacitorCookies",{web:()=>new j_});const Z_=async s=>new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const i=n.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>t(i),n.readAsDataURL(s)}),J_=(s={})=>{const e=Object.keys(s);return Object.keys(s).map(i=>i.toLocaleLowerCase()).reduce((i,r,a)=>(i[r]=s[e[a]],i),{})},Q_=(s,e=!0)=>s?Object.entries(s).reduce((n,i)=>{const[r,a]=i;let o,l;return Array.isArray(a)?(l="",a.forEach(c=>{o=e?encodeURIComponent(c):c,l+=`${r}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(a):a,l=`${r}=${o}`),`${n}&${l}`},"").substr(1):null,ex=(s,e={})=>{const t=Object.assign({method:s.method||"GET",headers:s.headers},e),i=J_(s.headers)["content-type"]||"";if(typeof s.data=="string")t.body=s.data;else if(i.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[a,o]of Object.entries(s.data||{}))r.set(a,o);t.body=r.toString()}else if(i.includes("multipart/form-data")||s.data instanceof FormData){const r=new FormData;if(s.data instanceof FormData)s.data.forEach((o,l)=>{r.append(l,o)});else for(const o of Object.keys(s.data))r.append(o,s.data[o]);t.body=r;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof s.data=="object")&&(t.body=JSON.stringify(s.data));return t};class tx extends Yo{async request(e){const t=ex(e,e.webFetchExtra),n=Q_(e.params,e.shouldEncodeUrlParams),i=n?`${e.url}?${n}`:e.url,r=await fetch(i,t),a=r.headers.get("content-type")||"";let{responseType:o="text"}=r.ok?e:{};a.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await r.blob(),l=await Z_(c);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const h={};return r.headers.forEach((u,d)=>{h[d]=u}),{data:l,headers:h,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Us("CapacitorHttp",{web:()=>new tx});var Pc;(function(s){s.Dark="DARK",s.Light="LIGHT",s.Default="DEFAULT"})(Pc||(Pc={}));var Lc;(function(s){s.StatusBar="StatusBar",s.NavigationBar="NavigationBar"})(Lc||(Lc={}));class nx extends Yo{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Us("SystemBars",{web:()=>new nx});const ix="modulepreload",sx=function(s){return"/Need4SpeedLahore/"+s},Ic={},zh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=sx(l),l in Ic)return;Ic[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":ix,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},ti=Us("CapacitorInAppPurchase",{web:()=>zh(()=>import("./web-p7c-I_y4.js"),[]).then(s=>new s.CapacitorInAppPurchaseWeb)});var Dc;(function(s){s.General="General",s.ParentalGuidance="ParentalGuidance",s.Teen="Teen",s.MatureAudience="MatureAudience"})(Dc||(Dc={}));var Rr;(function(s){s.SizeChanged="bannerAdSizeChanged",s.Loaded="bannerAdLoaded",s.FailedToLoad="bannerAdFailedToLoad",s.Opened="bannerAdOpened",s.Closed="bannerAdClosed",s.AdImpression="bannerAdImpression"})(Rr||(Rr={}));var bo;(function(s){s.TOP_CENTER="TOP_CENTER",s.CENTER="CENTER",s.BOTTOM_CENTER="BOTTOM_CENTER"})(bo||(bo={}));var To;(function(s){s.BANNER="BANNER",s.FULL_BANNER="FULL_BANNER",s.LARGE_BANNER="LARGE_BANNER",s.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",s.LEADERBOARD="LEADERBOARD",s.ADAPTIVE_BANNER="ADAPTIVE_BANNER",s.SMART_BANNER="SMART_BANNER"})(To||(To={}));var zi;(function(s){s.Loaded="interstitialAdLoaded",s.FailedToLoad="interstitialAdFailedToLoad",s.Showed="interstitialAdShowed",s.FailedToShow="interstitialAdFailedToShow",s.Dismissed="interstitialAdDismissed"})(zi||(zi={}));var Nc;(function(s){s.Loaded="onRewardedInterstitialAdLoaded",s.FailedToLoad="onRewardedInterstitialAdFailedToLoad",s.Showed="onRewardedInterstitialAdShowed",s.FailedToShow="onRewardedInterstitialAdFailedToShow",s.Dismissed="onRewardedInterstitialAdDismissed",s.Rewarded="onRewardedInterstitialAdReward"})(Nc||(Nc={}));var gi;(function(s){s.Loaded="onRewardedVideoAdLoaded",s.FailedToLoad="onRewardedVideoAdFailedToLoad",s.Showed="onRewardedVideoAdShowed",s.FailedToShow="onRewardedVideoAdFailedToShow",s.Dismissed="onRewardedVideoAdDismissed",s.Rewarded="onRewardedVideoAdReward"})(gi||(gi={}));var Cr;(function(s){s.NOT_REQUIRED="NOT_REQUIRED",s.OBTAINED="OBTAINED",s.REQUIRED="REQUIRED",s.UNKNOWN="UNKNOWN"})(Cr||(Cr={}));var Uc;(function(s){s[s.DISABLED=0]="DISABLED",s[s.EEA=1]="EEA",s[s.NOT_EEA=2]="NOT_EEA",s[s.US=3]="US",s[s.OTHER=4]="OTHER"})(Uc||(Uc={}));const vt=Us("AdMob",{web:()=>zh(()=>import("./web-BA_pR6aj.js"),[]).then(s=>new s.AdMobWeb)}),rx="/Need4SpeedLahore/assets/cover-art-CbKw3loD.svg",Pr="/Need4SpeedLahore/",Dt=s=>`${Pr}${s.replace(/^\//,"")}`,ax=s=>s.startsWith(Pr)?`/${s.slice(Pr.length)}`:s;"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(Dt("/sw.js"),{scope:Pr}).then(s=>{s.update().catch(()=>{})}).catch(()=>{})});const ws=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(hover: none)").matches||navigator.maxTouchPoints>0;document.body.classList.toggle("touch-device",ws);ws&&(document.addEventListener("contextmenu",s=>s.preventDefault()),document.addEventListener("selectstart",s=>s.preventDefault()));const Fc=["LIBERTY","MM ALAM","CANAL","RING RD","ANARKALI","FOOD ST"],ur=[-6.5,0,6.5],_s=.19,Oc=["hatchback","sedan","suv","prado","bus","rickshaw","truck"],gt=Ar.getPlatform()==="android",ox="ca-app-pub-1797269464593835/2475488317",lx="ca-app-pub-1797269464593835/8753822751",cx="ca-app-pub-1797269464593835/5583756083",hx=1,dx="ca-app-pub-3940256099942544/6300978111",ux="ca-app-pub-3940256099942544/1033173712",fx="ca-app-pub-3940256099942544/5224354917",px=4,mx=4,Bc=75,kc=[{type:"near_miss",label:"Near Miss Artist",desc:"Pull off {target} near misses in one run",targets:[5,10,20]},{type:"score",label:"High Scorer",desc:"Reach a score of {target}",targets:[2e3,5e3,1e4]},{type:"distance",label:"Distance Runner",desc:"Drive {target}m in one run",targets:[500,1e3,2e3]},{type:"combo_max",label:"Combo King",desc:"Hit x{target} combo multiplier",targets:[2,3,4]}],Hh=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),Bi=Hh&&!gt,Vc=1.9,Gh={engine:0,handling:0,tank:0,nitro:0,armor:0},xs=5,ki={player:{"hatchback-small":Dt("/models/player/player_hatchback.glb"),hatchback:Dt("/models/player/player_hatchback.glb"),"sedan-basic":Dt("/models/player/player_sedan.glb"),"sedan-sport":Dt("/models/player/player_sedan.glb"),suv:Dt("/models/player/player_suv.glb"),prado:Dt("/models/player/player_suv.glb"),truck:null,sports:Dt("/models/player/player_sedan.glb"),supercar:Dt("/models/player/player_sedan.glb"),"premium-italian-v12":Dt("/models/premium/premium_italian_v12.glb"),"premium-red-exotic":Dt("/models/premium/premium_red_exotic.glb"),"premium-hyper-gt":Dt("/models/premium/premium_hyper_gt.glb")},traffic:{hatchback:Dt("/models/player/player_hatchback.glb"),sedan:Dt("/models/player/traffic_sedan.glb"),suv:Dt("/models/player/player_suv.glb"),prado:Dt("/models/player/player_suv.glb"),truck:null},police:Dt("/models/player/police_car.glb")},gx={"/models/player/player_hatchback.glb":0,"/models/player/player_sedan.glb":Math.PI,"/models/player/player_suv.glb":Math.PI,"/models/player/traffic_sedan.glb":Math.PI,"/models/player/police_car.glb":Math.PI,"/models/premium/premium_italian_v12.glb":Math.PI,"/models/premium/premium_red_exotic.glb":Math.PI,"/models/premium/premium_hyper_gt.glb":Math.PI};function _x(s){return gx[ax(s)]??Math.PI}function xx(s){const e=String((s==null?void 0:s.message)||s||"").toLowerCase();return e.includes("publisher misconfiguration")||e.includes("no form(s) configured")||e.includes("failed to read publisher")}function zc(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`n4sl-${Date.now()}-${Math.random().toString(16).slice(2)}`}const Hc=[{key:"engine",label:"Engine",baseCost:140,stepCost:110},{key:"handling",label:"Handling",baseCost:120,stepCost:90},{key:"tank",label:"Fuel Tank",baseCost:110,stepCost:90},{key:"nitro",label:"Nitro",baseCost:130,stepCost:100},{key:"armor",label:"Armor",baseCost:125,stepCost:95}],Gc=[{key:"canal-run",name:"Canal Run",zone:"Canal Bank",difficulty:"Starter",vibe:"Golden hour boulevard",accent:"#34d399",sky:10146303,fog:10146303,ground:8956238,fogNear:86,fogFar:290,sunPosition:[-38,30,-140],route:"M 18 96 C 34 72, 46 62, 62 54 S 94 42, 108 26",turns:[{start:.18,end:.34,shift:-2.6},{start:.42,end:.6,shift:1.8}]},{key:"liberty-loop",name:"Liberty Loop",zone:"Gulberg",difficulty:"Sprint",vibe:"Dense neon traffic",accent:"#f59e0b",sky:11130623,fog:11130623,ground:9613145,fogNear:78,fogFar:250,sunPosition:[-30,24,-130],route:"M 18 98 C 28 74, 42 62, 54 62 C 72 62, 82 72, 92 58 C 102 44, 104 36, 108 20",turns:[{start:.14,end:.28,shift:3.2},{start:.34,end:.52,shift:-3.8},{start:.62,end:.82,shift:2.4}]},{key:"ring-road-blast",name:"Ring Road Blast",zone:"Outer Ring",difficulty:"Fast",vibe:"Wide high-speed arc",accent:"#60a5fa",sky:9356799,fog:9356799,ground:8365391,fogNear:92,fogFar:310,sunPosition:[-42,32,-150],route:"M 18 100 C 42 84, 58 78, 70 62 S 92 34, 108 18",turns:[{start:.2,end:.38,shift:4.2},{start:.48,end:.72,shift:-2.2}]},{key:"mall-road-drift",name:"Mall Road Drift",zone:"Central Lahore",difficulty:"Technical",vibe:"Tight city sweepers",accent:"#fb7185",sky:10472447,fog:10472447,ground:8693073,fogNear:72,fogFar:240,sunPosition:[-24,22,-120],route:"M 18 100 C 30 82, 42 74, 54 62 C 66 50, 76 54, 88 40 C 98 28, 102 26, 108 18",turns:[{start:.16,end:.28,shift:-2.8},{start:.34,end:.5,shift:2.6},{start:.58,end:.76,shift:-4.4}]},{key:"old-city-chase",name:"Old City Chase",zone:"Inner Streets",difficulty:"Dense",vibe:"Chaotic historic maze",accent:"#f97316",sky:10867711,fog:10867711,ground:9480538,fogNear:68,fogFar:226,sunPosition:[-22,20,-115],route:"M 18 98 C 26 90, 32 84, 40 78 C 52 68, 60 62, 64 50 C 68 38, 82 38, 90 28 C 98 18, 100 20, 108 16",turns:[{start:.1,end:.24,shift:2.1},{start:.28,end:.44,shift:-3.2},{start:.5,end:.66,shift:3.8},{start:.72,end:.9,shift:-2.6}]}],Ut=[{key:"hatchback-small",label:"Small Hatchback",body:14212579,roof:1054759,glow:16498468,trim:1120295,headlight:16708551,taillight:16557477,topSpeed:160,accel:42,grip:1.08,fuelDrain:.72,profile:{width:2.85,length:5.05,height:1.22,cabinWidth:2.18,cabinLength:2.36,cabinHeight:1.15}},{key:"hatchback",label:"Hatchback",body:15987958,roof:1450549,glow:3462041,trim:1450549,headlight:15398655,taillight:16557477,topSpeed:172,accel:48,grip:1.12,fuelDrain:.76,profile:{width:2.95,length:5.35,height:1.18,cabinWidth:2.28,cabinLength:2.55,cabinHeight:1.1}},{key:"sedan-basic",label:"Compact Sedan",body:13972266,roof:1450549,glow:16096779,trim:1582392,headlight:15398655,taillight:16557477,topSpeed:186,accel:58,grip:1.06,fuelDrain:.84,profile:{width:3.25,length:6.05,height:1.04,cabinWidth:2.18,cabinLength:2.92,cabinHeight:.9}},{key:"sedan-sport",label:"Sport Sedan",body:13056815,roof:1054759,glow:6333946,trim:724760,headlight:14677247,taillight:16478597,topSpeed:198,accel:68,grip:1.1,fuelDrain:.9,profile:{width:3.48,length:6.58,height:.98,cabinWidth:2.26,cabinLength:3.34,cabinHeight:.84,hoodLength:1.72,rearLength:1.5,cabinOffset:-.18,roofBias:.1,wheelRadius:.6,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"suv",label:"SUV",body:14477815,roof:2042167,glow:2278750,trim:2042167,headlight:15398655,taillight:16557477,topSpeed:190,accel:54,grip:.98,fuelDrain:.98,profile:{width:3.45,length:6.5,height:1.42,cabinWidth:2.6,cabinLength:3.2,cabinHeight:1.28,hoodLength:1.45,rearLength:1.4,cabinOffset:-.1,wheelRadius:.68,wheelInset:.45}},{key:"prado",label:"Prado 4x4",body:15857145,roof:1120295,glow:16096779,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:196,accel:52,grip:1,fuelDrain:1.04,profile:{width:3.6,length:6.8,height:1.5,cabinWidth:2.72,cabinLength:3.45,cabinHeight:1.34,hoodLength:1.5,rearLength:1.48,cabinOffset:-.06,wheelRadius:.72,wheelInset:.45}},{key:"truck",label:"Heavy Truck",body:2450411,roof:988970,glow:16498468,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:175,accel:38,grip:.92,fuelDrain:1.1,profile:{width:4.25,length:9.4,height:1.8,cabinWidth:2.8,cabinLength:2.7,cabinHeight:1.45,hoodLength:1.05,rearLength:3.8,cabinOffset:1.5,wheelRadius:.82,wheelInset:.44}},{key:"sports",label:"Sports Car",body:15680580,roof:329485,glow:16347926,trim:329485,headlight:14742270,taillight:16478597,topSpeed:228,accel:92,grip:1.16,fuelDrain:1.02,profile:{width:3.5,length:6.1,height:.84,cabinWidth:2.1,cabinLength:2.45,cabinHeight:.68,hoodLength:2,rearLength:1.35,cabinOffset:-.15,roofBias:.18,wheelRadius:.64,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"supercar",label:"Luxury Supercar",body:16096779,roof:132631,glow:16478597,trim:132631,headlight:14742270,taillight:16478597,topSpeed:248,accel:108,grip:1.22,fuelDrain:1.08,profile:{width:3.62,length:6.25,height:.78,cabinWidth:2.04,cabinLength:2.3,cabinHeight:.62,hoodLength:2.08,rearLength:1.42,cabinOffset:-.2,roofBias:.22,wheelRadius:.66,wheelInset:.47,splitter:!0,spoiler:!0}}],Ns=[{key:"premium-italian-v12",label:"Italian V12",badge:"Premium",subtitle:"Premium Hyper Coupe",productId:"premium_italian_v12",body:16436245,roof:1120295,glow:16347926,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:294,accel:122,grip:1.24,fuelDrain:.96,premium:!0,profile:{width:3.55,length:6.65,height:.92,cabinWidth:2.24,cabinLength:3.02,cabinHeight:.76,hoodLength:1.9,rearLength:1.2,cabinOffset:-.12,splitter:!0,spoiler:!0}},{key:"premium-red-exotic",label:"Red Exotic",badge:"Featured",subtitle:"Premium Mid-Engine GT",productId:"premium_red_exotic",body:15680580,roof:988970,glow:16007006,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:302,accel:128,grip:1.26,fuelDrain:.98,premium:!0,profile:{width:3.58,length:6.58,height:.9,cabinWidth:2.18,cabinLength:2.88,cabinHeight:.74,hoodLength:1.72,rearLength:1.34,cabinOffset:-.18,splitter:!0,spoiler:!0}},{key:"premium-hyper-gt",label:"Hyper GT",badge:"Top Tier",subtitle:"Premium Ultimate Series",productId:"premium_hyper_gt",body:6333946,roof:725536,glow:2282478,trim:988970,headlight:15398655,taillight:16557477,topSpeed:316,accel:134,grip:1.3,fuelDrain:1,premium:!0,profile:{width:3.62,length:6.82,height:.88,cabinWidth:2.16,cabinLength:2.96,cabinHeight:.72,hoodLength:1.84,rearLength:1.36,cabinOffset:-.08,splitter:!0,spoiler:!0}}],Or=[{key:"ad-free",label:"Ad-Free Upgrade",badge:"Upgrade",subtitle:"Remove banner and interstitial ads",productId:"ad_free",kind:"ad_free"},{key:"credits-1000",label:"1000 Credits Pack",badge:"Booster",subtitle:"Instant garage credits bonus",productId:"credits_1000",kind:"credits",credits:1e3},{key:"credits-5000",label:"5000 Credits Pack",badge:"Best Value",subtitle:"Large one-time credits bonus",productId:"credits_5000",kind:"credits",credits:5e3}],vx=[...Ut,...Ns],Sx=Object.fromEntries(vx.map(s=>[s.key,s])),Eo=Object.fromEntries(Ns.map(s=>[s.key,s])),Wh=Object.fromEntries(Or.map(s=>[s.key,s])),yx=Object.fromEntries(Or.map(s=>[s.productId,s])),Mx=[...Ns.map(s=>s.productId),...Or.map(s=>s.productId)],wo={"hatchback-small":0,hatchback:1,"sedan-basic":2,"sedan-sport":3,suv:4,prado:5,truck:6,sports:7,supercar:8},Wc=["clean-finish","fuel-save","near-miss","score-target"];function bx(s){return Sx[s]??Ut[0]}function Tx(s){return Gc[s%Gc.length]}function Xc(s,e=0){const t=Xe.clamp(e,0,100),n=18+90*(t/100),i=100-78*(t/100);return`
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
  `}function qc(s,e,t=1){const n=s.attributes.position;for(let i=0;i<n.count;i+=1){const r=n.getX(i),o=n.getY(i)-120,l=e(o);n.setX(i,r*t+l)}n.needsUpdate=!0,s.computeVertexNormals()}function $c(s,e){return s.baseCost+s.stepCost*e}function xi(s){return{...Gh,...s||{}}}function Ex(s,e=Gh){const t=xi(e),n=t.engine,i=t.handling,r=t.tank,a=t.nitro,o=t.armor;return{...s,id:s.key,topSpeed:s.topSpeed+n*8,accel:s.accel+n*6,grip:s.grip+i*.035,fuelDrain:Math.max(.52,s.fuelDrain-r*.05),maxFuel:100+r*12,maxNitro:100+a*14,nitroBoost:28+a*5,maxHealth:100+o*12,damageReduction:o*.07,upgradeLevels:t}}function wx(s){if(s<=0)return Ut[0];if(s===1)return Ut[1];if(s===2)return Ut[2];if(s===3)return Ut[3];if(s===4)return Ut[4];if(s===5)return Ut[5];if(s===6)return Ut[6];const e=[Ut[7],Ut[8]],t=e[(s-7)%e.length],n=s-7,i=n%5,r=[15680580,16096779,9133302,440020,2278750][i];return{...t,key:`${t.key}-${s+1}`,label:n%2===0?"Expensive Sports Car":"Exotic Hyper GT",body:r,topSpeed:Math.min(t.topSpeed+n*4,320),accel:Math.min(t.accel+n*3,150),grip:Math.min(t.grip+n*.02,1.35)}}const Ax=["Training Run","City Flow","Canal Rush","Ring Road","Midnight Chase","Liberty Sprint","Mall Road Blur","Bypass Storm"];function Kc(s){const e=wx(s),t=Tx(s),n=s+1,i=n+1,r=Math.min(150+s*20,e.topSpeed),a=r/1.6,o=s<=2?1:0,l=Math.max((o?2.2:1.75)-s*(o?.14:.1),.58),c=s===0?999:Math.max((o?108:94)-s*(o?5:7),26),h=s===0?99:Math.max((o?2.8:2.35)-s*(o?.1:.08),.72),u=Math.min((o?4.2:5.1)+s*.42,9.2),d=1+s*.08,f=Math.min((o?.16:.2)+s*.085,.72),g=Ax[s]??`Stage ${n}`,x=`${t.name} · ${g}`,m=Wc[s%Wc.length],p=140+s*55,S=80+s*35;let b;m==="clean-finish"?b={type:m,label:"Finish with at least 50% health",target:50}:m==="fuel-save"?b={type:m,label:"Finish with at least 25% fuel",target:25}:m==="near-miss"?b={type:m,label:`Score ${1+Math.floor(s/3)} near misses`,target:1+Math.floor(s/3)}:b={type:m,label:`Reach score ${1100+s*180}`,target:1100+s*180};const M=s===0?`Stage ${n}: moderate traffic, no police pressure, and a 2 KM opening run. Mission: ${b.label}.`:`Stage ${n}: ${i} KM route with a ${r} KM/H cap. Mission: ${b.label}.`;return{id:n,name:x,stageLabel:g,track:t,lengthKm:i,length:i*1e3,speedCapKmh:r,speedCap:a,trafficBias:l,policeHeatThreshold:c,policeSpawnScale:h,fuelSpawnEvery:u,fuelUseScale:f,scoreBonus:d,mission:b,missionReward:p,bonusReward:S,tip:M}}const Br={settings:"need4speedlahore.settings",progress:"need4speedlahore.progress"};function Rx(){try{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1,...JSON.parse(localStorage.getItem(Br.settings)||"{}")}}catch{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1}}}function vs(s){localStorage.setItem(Br.settings,JSON.stringify(s))}function Cx(){try{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},...JSON.parse(localStorage.getItem(Br.progress)||"{}")}}catch{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{}}}}function gn(s){localStorage.setItem(Br.progress,JSON.stringify(s))}function Yc(s){const e={highestStage:Math.max(1,s.highestStage||1),bestScore:Math.max(0,s.bestScore||0),totalDistance:Math.max(0,s.totalDistance||0),credits:Math.max(0,s.credits??300),ownedVehicles:Array.isArray(s.ownedVehicles)?[...s.ownedVehicles]:["hatchback-small"],purchasedPremiumCars:Array.isArray(s.purchasedPremiumCars)?[...s.purchasedPremiumCars]:[],adFreePurchased:!!s.adFreePurchased,claimedShopProducts:Array.isArray(s.claimedShopProducts)?[...s.claimedShopProducts]:[],selectedVehicleKey:s.selectedVehicleKey||"hatchback-small",upgrades:typeof s.upgrades=="object"&&s.upgrades?{...s.upgrades}:{},stageStars:typeof s.stageStars=="object"&&s.stageStars?{...s.stageStars}:{},dailyChallenge:s.dailyChallenge||null},t=new Set(e.ownedVehicles);return t.add("hatchback-small"),Object.entries(wo).forEach(([n,i])=>{e.highestStage-1>=i&&t.add(n)}),e.ownedVehicles=[...t],e.purchasedPremiumCars=e.purchasedPremiumCars.filter(n=>Eo[n]),e.claimedShopProducts=e.claimedShopProducts.filter(n=>Wh[n]),e.ownedVehicles.forEach(n=>{e.upgrades[n]=xi(e.upgrades[n])}),e.purchasedPremiumCars.forEach(n=>{e.upgrades[n]=xi(e.upgrades[n])}),!t.has(e.selectedVehicleKey)&&!e.purchasedPremiumCars.includes(e.selectedVehicleKey)&&(e.selectedVehicleKey=e.ownedVehicles[e.ownedVehicles.length-1]),e}class Px{constructor(e){this.settings=e,this.ctx=null,this.musicTimer=null,this.musicStep=0,this.musicPattern=[]}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}setSettings(e){this.settings=e,(e.mute||!e.music)&&this.stopMusic()}suspend(){this.stopMusic(),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}tone(e,t,n="sine",i=.04){this.settings.mute||!this.settings.sfx||this.rawTone(e,t,n,i)}rawTone(e,t,n="sine",i=.04,r=0){const a=this.ensureContext();if(!a)return;const o=a.createOscillator(),l=a.createGain();o.type=n,o.frequency.value=e,o.detune.value=r,l.gain.setValueAtTime(i,a.currentTime),l.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+t),o.connect(l),l.connect(a.destination),o.start(),o.stop(a.currentTime+t)}noise(e=.12,t=.05,n=900){if(this.settings.mute||!this.settings.sfx)return;const i=this.ensureContext();if(!i)return;const r=i.createBuffer(1,Math.floor(i.sampleRate*e),i.sampleRate),a=r.getChannelData(0);for(let h=0;h<a.length;h+=1)a[h]=(Math.random()*2-1)*(1-h/a.length);const o=i.createBufferSource();o.buffer=r;const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const c=i.createGain();c.gain.setValueAtTime(t,i.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+e),o.connect(l),l.connect(c),c.connect(i.destination),o.start(),o.stop(i.currentTime+e)}playCrash(){this.rawTone(74,.22,"sawtooth",.07,-600),this.rawTone(52,.3,"square",.05,200),this.noise(.16,.06,760)}playMusic(e=!1){this.stopMusic()}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null)}}document.querySelector("#app").innerHTML=`
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
                <label>Stage Progress <em id="progress-text">0%</em></label>
                <div class="meter"><div id="progress-bar" class="fill progress"></div></div>
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
                <div class="garage-list" id="garage-list"></div>
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
              <a class="text-link" href="${Dt("/privacy.html")}" target="_blank" rel="noreferrer">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div class="overlay" id="overlay">
          <img class="overlay-art" src="${rx}" alt="" />
          <div class="overlay-card">
            <p class="overlay-kicker" id="overlay-kicker">Stylized 3D Chase Racer</p>
            <h2 id="overlay-title">Need 4 Speed Lahore</h2>
            <p id="overlay-body">Start with a small hatchback, clear stages, unlock stronger vehicles, and steer by touching the left or right side of the road. Tilt steering is also available in Settings.</p>
            <div class="overlay-track">
              <div class="overlay-track-copy">
                <span>Featured Route</span>
                <strong id="overlay-track-name">Canal Run</strong>
                <em id="overlay-track-zone">Canal Bank · Starter</em>
              </div>
              <div class="overlay-track-map" id="overlay-track-map"></div>
            </div>
            <button id="overlay-button" type="button">Start Run</button>
            <button id="revive-button" type="button" class="hidden revive-btn">Watch Ad to Revive</button>
          </div>
        </div>
      </main>
    </div>
  </div>
`;const H={speed:document.querySelector("#speed-value"),score:document.querySelector("#score-value"),heat:document.querySelector("#heat-value"),limit:document.querySelector("#limit-value"),distanceRemaining:document.querySelector("#distance-remaining-value"),stage:document.querySelector("#stage-value"),trackName:document.querySelector("#track-name"),trackZone:document.querySelector("#track-zone"),trackMap:document.querySelector("#track-map"),healthBar:document.querySelector("#health-bar"),fuelBar:document.querySelector("#fuel-bar"),nitroBar:document.querySelector("#nitro-bar"),progressBar:document.querySelector("#progress-bar"),healthText:document.querySelector("#health-text"),fuelText:document.querySelector("#fuel-text"),nitroText:document.querySelector("#nitro-text"),progressText:document.querySelector("#progress-text"),tip:document.querySelector("#tip-text"),overlay:document.querySelector("#overlay"),overlayKicker:document.querySelector("#overlay-kicker"),overlayTitle:document.querySelector("#overlay-title"),overlayBody:document.querySelector("#overlay-body"),overlayTrackName:document.querySelector("#overlay-track-name"),overlayTrackZone:document.querySelector("#overlay-track-zone"),overlayTrackMap:document.querySelector("#overlay-track-map"),overlayButton:document.querySelector("#overlay-button"),raceBanner:document.querySelector("#race-banner"),raceBannerKicker:document.querySelector("#race-banner-kicker"),raceBannerTitle:document.querySelector("#race-banner-title"),raceBannerSubtitle:document.querySelector("#race-banner-subtitle"),impactFlash:document.querySelector("#impact-flash"),pauseButton:document.querySelector("#pause-button"),settingsButton:document.querySelector("#settings-button"),settingsPanel:document.querySelector("#settings-panel"),resumeButton:document.querySelector("#resume-button"),muteToggle:document.querySelector("#mute-toggle"),musicToggle:document.querySelector("#music-toggle"),sfxToggle:document.querySelector("#sfx-toggle"),tiltToggle:document.querySelector("#tilt-toggle"),saveStageText:document.querySelector("#save-stage-text"),saveScoreText:document.querySelector("#save-score-text"),creditsText:document.querySelector("#credits-text"),adStatusText:document.querySelector("#ad-status-text"),garageTabs:document.querySelector("#garage-tabs"),garageCurrentText:document.querySelector("#garage-current-text"),garageList:document.querySelector("#garage-list"),storeList:document.querySelector("#store-list"),garageUpgrades:document.querySelector("#garage-upgrades"),touchControls:document.querySelector("#touch-controls"),comboDisplay:document.querySelector("#combo-display"),speedVignette:document.querySelector("#speed-vignette"),dailyBadge:document.querySelector("#daily-badge"),reviveButton:document.querySelector("#revive-button")};class Lx{constructor(e){this.container=e,this.settings=Rx(),this.progress=Yc(Cx()),this.audio=new Px(this.settings),this.gltfLoader=new f_,this.modelTemplates=new Map,this.loadedVehicleModels=!1,this.clock=new _f,this.scene=new du,this.scene.background=new Ie(10146303),this.scene.fog=new ko(10146303,80,280),Hh&&(window.__need4SpeedLahore=this),this.camera=new Wt(54,9/16,.1,500),this.camera.position.set(0,10.2,24),this.renderer=new d_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jc,this.container.appendChild(this.renderer.domElement),this.autoPausedFromBackground=!1,this.settingsTab="garage",this.billingState={available:!1,loading:!1,products:{},ownedProductIds:[],pendingKind:"",pendingProductId:"",lastMessage:""},this.adState={initialized:!1,canRequestAds:!1,bannerVisible:!1,bannerLoaded:!1,interstitialReady:!1,interstitialLoading:!1,rewardedReady:!1,rewardedLoading:!1,consentStatus:"unknown",lastError:""},this.keys=new Set,this.touchInput={steerZone:0,brake:!1,nitro:!1},this.motionSteer=0,this.steerPointerId=null,this.selectedCar=this.getSelectedGarageVehicle(),this.state=this.initialState(),this.progress.highestStage>1&&(this.state.stageIndex=this.progress.highestStage-1),this.traffic=[],this.police=[],this.fuelCans=[],this.healers=[],this.roadMarkers=[],this.roadside=[],this.buildings=[],this.lightPosts=[],this.roadGlows=[],this.finishLine=null,this.nearMisses=new WeakSet,this.cameraBaseFov=54,this.setupScene(),this.bindEvents(),this.resize(),this.initAds(),this.initBilling(),this.applyTrackTheme(),this.updateOverlay("Stylized 3D Chase Racer","Need 4 Speed Lahore",`Resume point: Stage ${this.state.stageIndex+1} with a ${this.selectedCar.label}. ${this.currentStage.tip} Press Space or tap Start Run.`,this.currentStage.track),this.syncSettingsUi(),this.refreshProgressUi(),this.renderGarage(),this.updateHud(),this.updateDailyChallengeUi(),this.render(),this.loadVehicleModels()}initialState(){return{running:!1,gameOver:!1,paused:!1,stageCompleted:!1,countdown:0,countdownStarted:!1,stageIndex:0,speed:0,targetSpeed:0,maxSpeed:this.selectedCar.topSpeed,maxHealth:this.selectedCar.maxHealth??100,maxFuel:this.selectedCar.maxFuel??100,maxNitro:this.selectedCar.maxNitro??100,health:this.selectedCar.maxHealth??100,fuel:this.selectedCar.maxFuel??100,nitro:this.selectedCar.maxNitro??100,heat:0,score:0,distance:0,trafficSpawn:0,policeSpawn:0,fuelSpawn:0,healerSpawn:0,stageProgress:0,steerVisual:0,bodyRoll:0,bodyPitch:0,cameraShake:0,roadDrift:0,bannerTimer:0,nearMissCount:0,cleanRun:!0,stageTime:0,combo:0,comboTimer:0,comboMultiplier:1,hasRevived:!1}}get currentStage(){return Kc(this.state.stageIndex)}getTrackProgress(e=this.state.stageProgress){return Xe.clamp(e/this.currentStage.length,0,1)}getRoadCenterOffsetAtProgress(e){const t=this.currentStage.track.turns||[];let n=0;return t.forEach(i=>{const r=Xe.smoothstep(e,i.start,i.end),a=e>i.end?1-Xe.smoothstep(e,i.end,Math.min(1,i.end+.14)):1;n+=i.shift*r*a}),n}getStageMetersAtZ(e){const t=this.player.position.z-e;return this.state.stageProgress+Math.max(0,t/Vc)}getRoadCenterOffsetAtZ(e){return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.getStageMetersAtZ(e)))}getLaneWorldX(e,t){return ur[e]+this.getRoadCenterOffsetAtZ(t)}getSelectedGarageVehicle(){const e=bx(this.progress.selectedVehicleKey);return Ex(e,this.progress.upgrades[e.key])}isVehicleOwned(e){return this.progress.ownedVehicles.includes(e)||this.progress.purchasedPremiumCars.includes(e)}getPremiumVehicleByProductId(e){return Ns.find(t=>t.productId===e)??null}getShopProductByProductId(e){return yx[e]??null}restoreOwnedPremiumVehicles(e=[]){const t=[];return e.forEach(n=>{const i=this.getPremiumVehicleByProductId(n);i&&(this.progress.purchasedPremiumCars.includes(i.key)||(this.progress.purchasedPremiumCars.push(i.key),t.push(i.key)))}),t.length&&(gn(this.progress),this.refreshProgressUi()),t}applyShopPurchaseByProductId(e,{fromRestore:t=!1}={}){const n=this.getShopProductByProductId(e);return n?n.kind==="ad_free"?(this.progress.adFreePurchased=!0,gn(this.progress),this.refreshProgressUi(),this.hideTopBanner(),{product:n,granted:!0,message:"Ad-Free Upgrade unlocked."}):n.kind==="credits"?this.progress.claimedShopProducts.includes(n.key)?{product:n,granted:!1,message:t?"Credits pack already claimed.":"Credits already added."}:(this.progress.claimedShopProducts.push(n.key),this.progress.credits+=n.credits,gn(this.progress),this.refreshProgressUi(),{product:n,granted:!0,message:`${n.credits} credits added.`}):null:null}async restorePremiumPurchases(){if(!gt){H.tip.textContent="Restore is available in the Android app build.";return}if(!this.billingState.available||typeof ti.getOwnedProducts!="function"){H.tip.textContent=this.billingState.loading?"Loading Play Billing...":"Restore is unavailable right now.";return}try{this.billingState.loading=!0,this.renderGarage();const{products:e}=await ti.getOwnedProducts(),t=[];e.forEach(a=>{try{const o=JSON.parse(a);Array.isArray(o.products)&&t.push(...o.products)}catch(o){console.warn("Failed to parse owned purchase during manual restore",o)}}),this.billingState.ownedProductIds=[...new Set(t)];const n=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),i=this.billingState.ownedProductIds.map(a=>this.applyShopPurchaseByProductId(a,{fromRestore:!0})).filter(Boolean).filter(a=>a.granted),r=n.length+i.length;this.billingState.lastMessage=r?`Restored ${r} purchase${r>1?"s":""}`:"No premium purchases were found to restore",H.tip.textContent=this.billingState.lastMessage}catch(e){this.billingState.lastMessage=(e==null?void 0:e.message)||"Restore failed",H.tip.textContent=this.billingState.lastMessage}finally{this.billingState.loading=!1,this.renderGarage()}}async initBilling(){if(!gt){this.billingState.lastMessage="Windows edition",this.renderGarage();return}try{this.billingState.loading=!0,await ti.addListener("transaction",t=>{const n=this.billingState.pendingProductId,i=n?this.getPremiumVehicleByProductId(n):null,r=n?this.getShopProductByProductId(n):null;if(n&&!this.billingState.ownedProductIds.includes(n)&&this.billingState.ownedProductIds.push(n),this.billingState.pendingKind="",this.billingState.pendingProductId="",t.type==="success"&&i)this.unlockPremiumVehicle(i.key),this.billingState.lastMessage=`${i.label} purchased`,H.tip.textContent=`${i.label} unlocked.`;else if(t.type==="success"&&r){const a=this.applyShopPurchaseByProductId(r.productId);this.billingState.lastMessage=(a==null?void 0:a.message)||`${r.label} purchased`,H.tip.textContent=this.billingState.lastMessage}else t.type==="error"?(this.billingState.lastMessage=t.message||"Purchase failed",H.tip.textContent=t.message||"Purchase failed."):this.billingState.lastMessage=t.message||t.transaction||"Billing updated";this.renderGarage()});const{products:e}=await ti.getProducts({productIds:Mx});if(this.billingState.products=Object.fromEntries(e.map(t=>[t.id,t])),typeof ti.getOwnedProducts=="function")try{const{products:t}=await ti.getOwnedProducts(),n=[];t.forEach(a=>{try{const o=JSON.parse(a);Array.isArray(o.products)&&n.push(...o.products)}catch(o){console.warn("Failed to parse owned purchase",o)}}),this.billingState.ownedProductIds=[...new Set(n)];const i=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),r=this.billingState.ownedProductIds.map(a=>this.applyShopPurchaseByProductId(a,{fromRestore:!0})).filter(Boolean).filter(a=>a.granted);i.length||r.length?this.billingState.lastMessage=`Restored ${i.length+r.length} purchase${i.length+r.length>1?"s":""}`:this.billingState.lastMessage="Play Billing ready"}catch(t){this.billingState.lastMessage="Play Billing ready",console.warn("Owned product restore failed",t)}else this.billingState.lastMessage="Play Billing ready";this.billingState.available=!0}catch(e){this.billingState.available=!1,this.billingState.lastMessage=(e==null?void 0:e.message)||"Billing unavailable",console.warn("Billing init failed",e)}finally{this.billingState.loading=!1,this.renderGarage()}}unlockPremiumVehicle(e){Eo[e]&&(this.progress.purchasedPremiumCars.includes(e)||this.progress.purchasedPremiumCars.push(e),this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),gn(this.progress),this.refreshProgressUi(),this.renderGarage())}async loadVehicleModels(){const e=new Set;Object.values(ki.player).forEach(t=>t&&e.add(t)),Object.values(ki.traffic).forEach(t=>t&&e.add(t)),ki.police&&e.add(ki.police),await Promise.all([...e].map(async t=>{try{const n=await this.loadGlb(t);this.modelTemplates.set(t,n.scene)}catch(n){console.warn(`Failed to load model: ${t}`,n)}})),this.loadedVehicleModels=this.modelTemplates.size>0,this.loadedVehicleModels&&this.refreshVehicleVisuals()}loadGlb(e){return new Promise((t,n)=>{this.gltfLoader.load(e,t,void 0,n)})}getModelPath(e,t){var n;return e==="police"?ki.police:((n=ki[e])==null?void 0:n[t])??null}createModelVehicle(e,t,n,i=1120295){const r=this.getModelPath(e,t),a=r?this.modelTemplates.get(r):null;if(!a||!n)return null;const o=new Tt,l=a.clone(!0);l.rotation.y=_x(r),o.add(l),l.traverse(m=>{if(!m.isMesh)return;m.castShadow=!0,m.receiveShadow=!0,Array.isArray(m.material)?m.material=m.material.map(S=>S.clone()):m.material&&(m.material=m.material.clone()),(Array.isArray(m.material)?m.material:m.material?[m.material]:[]).forEach(S=>{if(!S||!("color"in S)||!S.color)return;const b=S.transparent||S.opacity<.98,M=S.color.getHex(),A=M===0||M===329485||M===988970||M===1120295;e==="player"&&(t==="hatchback-small"||t==="hatchback")&&!b&&!A&&(S.color.setHex(16777215),"metalness"in S&&(S.metalness=.16),"roughness"in S&&(S.roughness=.28)),e==="traffic"&&!b&&!A&&(S.color.setHex(15987958),"metalness"in S&&(S.metalness=.14),"roughness"in S&&(S.roughness=.42))})});const c=new dn().setFromObject(l),h=new D,u=new D;if(c.getSize(h),c.getCenter(u),h.x<=0||h.y<=0||h.z<=0)return null;const d=Math.min(n.width*1.08/h.x,n.height*1.14/h.y,n.length*1.08/h.z);l.scale.setScalar(d);const f=new dn().setFromObject(l),g=new D;f.getCenter(g),l.position.set(-g.x,-f.min.y,-g.z),e==="player"&&o.scale.setScalar(1.12),e==="traffic"&&o.scale.setScalar(1.12),e==="police"&&o.scale.setScalar(1.16),o.userData.baseYaw=0,o.rotation.y=o.userData.baseYaw;const x=new ce(new Xo(.5,32),new St({color:329485,transparent:!0,opacity:.18}));return x.name="ground-shadow",x.rotation.x=-Math.PI/2,x.position.y=.02,x.scale.set(n.width*1.1,n.length*.82,1),o.add(x),o}refreshVehicleVisuals(){const e=this.player?this.player.position.clone():new D(0,.72,10),t=this.player?this.player.rotation.clone():new hn;this.player&&this.scene.remove(this.player),this.createPlayerCar(),this.player.position.copy(e),this.player.rotation.copy(t),this.traffic.forEach(n=>this.scene.remove(n)),this.traffic=[],this.createTrafficPool(),this.police.forEach(n=>this.scene.remove(n)),this.police=[],this.createPolicePool()}setSelectedVehicle(e){this.isVehicleOwned(e)&&(this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),gn(this.progress),this.renderGarage(),this.refreshProgressUi(),H.tip.textContent=`${this.selectedCar.label} selected for the next run.`)}purchasePremiumVehicle(e){const t=Eo[e];if(t){if(this.progress.purchasedPremiumCars.includes(e)){this.setSelectedVehicle(e);return}if(!gt){this.progress.purchasedPremiumCars.push(e),this.progress.upgrades[e]=xi(this.progress.upgrades[e]),this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),gn(this.progress),this.refreshVehicleVisuals(),this.refreshProgressUi(),this.renderGarage(),H.tip.textContent=`${t.label} unlocked in the Windows edition.`;return}if(!this.billingState.available){H.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind="premium",H.tip.textContent=`Opening Google Play purchase for ${t.label}...`,ti.purchaseProduct({productId:t.productId,referenceUUID:zc()}).catch(n=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(n==null?void 0:n.message)||"Purchase failed",H.tip.textContent=(n==null?void 0:n.message)||"Purchase failed.",this.renderGarage()})}}purchaseShopProduct(e){const t=Wh[e];if(t){if(t.kind==="ad_free"&&this.progress.adFreePurchased){H.tip.textContent="Ad-Free Upgrade already owned.";return}if(t.kind==="credits"&&this.progress.claimedShopProducts.includes(t.key)){H.tip.textContent=`${t.label} already claimed.`;return}if(!gt){H.tip.textContent=`${t.label} purchases are available on the Android app build.`;return}if(!this.billingState.available){H.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind=t.kind,H.tip.textContent=`Opening Google Play purchase for ${t.label}...`,ti.purchaseProduct({productId:t.productId,referenceUUID:zc()}).catch(n=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(n==null?void 0:n.message)||"Purchase failed",H.tip.textContent=(n==null?void 0:n.message)||"Purchase failed.",this.renderGarage()})}}getUpgradeLevel(e,t){return xi(this.progress.upgrades[e])[t]}buyUpgrade(e){const t=this.progress.selectedVehicleKey,n=Hc.find(o=>o.key===e);if(!n)return;const i=xi(this.progress.upgrades[t]),r=i[e];if(r>=xs){H.tip.textContent=`${n.label} is already maxed out.`;return}const a=$c(n,r);if(this.progress.credits<a){H.tip.textContent=`You need ${a-this.progress.credits} more credits for ${n.label}.`;return}i[e]+=1,this.progress.credits-=a,this.progress.upgrades[t]=i,this.selectedCar=this.getSelectedGarageVehicle(),gn(this.progress),this.refreshProgressUi(),this.renderGarage(),H.tip.textContent=`${n.label} upgraded for ${this.selectedCar.label}.`}setSettingsTab(e){var t,n,i;this.settingsTab=e,document.querySelectorAll("[data-settings-tab]").forEach(r=>{r.classList.toggle("is-active",r.dataset.settingsTab===e)}),(t=document.querySelector("#garage-panel-garage"))==null||t.classList.toggle("is-active",e==="garage"),(n=document.querySelector("#garage-panel-store"))==null||n.classList.toggle("is-active",e==="store"),(i=document.querySelector("#garage-panel-upgrades"))==null||i.classList.toggle("is-active",e==="upgrades")}renderGarage(){if(!H.garageList||!H.storeList||!H.garageUpgrades)return;H.garageCurrentText.textContent=`Current car: ${this.selectedCar.label}`;const e=Ut.map(r=>{const a=this.isVehicleOwned(r.key),o=this.progress.selectedVehicleKey===r.key,l=wo[r.key]+1;return`
        <button
          type="button"
          class="garage-car${o?" selected":""}${a?"":" locked"}"
          data-garage-car="${r.key}"
          ${a?"":"disabled"}
        >
          <strong>${r.label}</strong>
          <span>${a?o?"Selected":"Tap to equip":`Unlock at Stage ${l}`}</span>
        </button>
      `}).join(""),t=Ns.map(r=>{const a=this.progress.purchasedPremiumCars.includes(r.key),o=this.progress.selectedVehicleKey===r.key,l=this.billingState.products[r.productId],c=this.billingState.ownedProductIds.includes(r.productId),h=(l==null?void 0:l.displayPrice)||(gt?this.billingState.loading?"Loading price...":"Play price unavailable":"Included"),u=a?o?"Owned · Selected":"Owned · Tap to equip":c?"Owned on Play · Restoring...":gt?this.billingState.loading?"Checking Play price...":`Buy on Play · ${h}`:"Included in Windows edition",d=this.billingState.pendingProductId===r.productId?"Opening...":this.billingState.loading?"Loading...":gt?"Buy on Play":"Unlock";return`
          <div class="garage-car premium${o?" selected":""}${a?"":" locked"}">
            <span class="garage-badge">${r.badge||"Premium"}</span>
            <strong>${r.label}</strong>
            <span>${r.subtitle}</span>
            <span>${u}</span>
          ${!a&&gt?`<span>${r.productId}</span>`:""}
          <div class="garage-car-actions">
            ${a?`<button type="button" class="icon-button primary" data-garage-car="${r.key}">${o?"Selected":"Equip"}</button>`:`<button type="button" class="icon-button primary" data-premium-buy="${r.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==r.productId?"disabled":""}>${d}</button>`}
          </div>
        </div>
      `}).join(""),n=Or.map(r=>{const a=this.billingState.products[r.productId],o=(a==null?void 0:a.displayPrice)||(gt?this.billingState.loading?"Loading price...":"Play price unavailable":"Android only"),l=r.kind==="ad_free"?this.progress.adFreePurchased:this.progress.claimedShopProducts.includes(r.key),c=l?r.kind==="ad_free"?"Owned | Ads disabled":"Claimed | Credits added":gt?this.billingState.loading?"Checking Play price...":`Buy on Play | ${o}`:"Android purchase only",h=this.billingState.pendingProductId===r.productId?"Opening...":this.billingState.loading?"Loading...":gt?"Buy on Play":"Unavailable";return`
        <div class="garage-car premium${l?" selected":""}">
          <span class="garage-badge">${r.badge}</span>
          <strong>${r.label}</strong>
          <span>${r.subtitle}</span>
          <span>${c}</span>
          ${l?"":`<span>${r.productId}</span>`}
          <div class="garage-car-actions">
            ${l?`<button type="button" class="icon-button" disabled>${r.kind==="ad_free"?"Owned":"Claimed"}</button>`:`<button type="button" class="icon-button primary" data-shop-buy="${r.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==r.productId?"disabled":""}>${h}</button>`}
          </div>
        </div>
      `}).join("");H.garageList.innerHTML=`
      <div class="garage-section">
        <h4>Career Cars</h4>
        <div class="garage-grid">${e}</div>
      </div>
    `,H.storeList.innerHTML=`
      <div class="garage-section">
        <h4>Premium Collection</h4>
        <p class="garage-premium-note">${this.billingState.lastMessage?`Billing: ${this.billingState.lastMessage}`:"Premium purchases unlock permanently."}</p>
        ${gt?`<div class="garage-car-actions"><button type="button" class="icon-button" data-restore-premium>${this.billingState.loading?"Checking...":"Restore Purchases"}</button></div>`:""}
        <div class="garage-grid">${t}</div>
      </div>
      <div class="garage-section">
        <h4>Store Upgrades</h4>
        <p class="garage-premium-note">Ad-Free is permanent. Credit packs are currently configured as one-time bonus unlocks.</p>
        <div class="garage-grid">${n}</div>
      </div>
    `;const i=xi(this.progress.upgrades[this.progress.selectedVehicleKey]);H.garageUpgrades.innerHTML=Hc.map(r=>{const a=i[r.key],o=a>=xs?"MAX":`${$c(r,a)} CR`;return`
        <div class="upgrade-row">
          <div>
            <strong>${r.label}</strong>
            <span>Level ${a}/${xs}</span>
          </div>
          <button
            type="button"
            class="icon-button${a>=xs?"":" primary"}"
            data-upgrade="${r.key}"
            ${a>=xs?"disabled":""}
          >
            ${o}
          </button>
        </div>
      `}).join(""),H.garageList.querySelectorAll("[data-garage-car]").forEach(r=>{r.addEventListener("click",()=>this.setSelectedVehicle(r.dataset.garageCar))}),H.storeList.querySelectorAll("[data-premium-buy]").forEach(r=>{r.addEventListener("click",()=>this.purchasePremiumVehicle(r.dataset.premiumBuy))}),H.storeList.querySelectorAll("[data-shop-buy]").forEach(r=>{r.addEventListener("click",()=>this.purchaseShopProduct(r.dataset.shopBuy))}),H.storeList.querySelectorAll("[data-restore-premium]").forEach(r=>{r.addEventListener("click",()=>this.restorePremiumPurchases())}),H.garageUpgrades.querySelectorAll("[data-upgrade]").forEach(r=>{r.addEventListener("click",()=>this.buyUpgrade(r.dataset.upgrade))}),this.setSettingsTab(this.settingsTab)}applyTrackTheme(){const e=this.currentStage.track;this.scene.background.setHex(e.sky),this.scene.fog.color.setHex(e.fog),this.scene.fog.near=e.fogNear??80,this.scene.fog.far=e.fogFar??280,this.ground&&this.ground.material.color.setHex(e.ground),this.roadCenterGlow&&this.roadCenterGlow.material.color.set(e.accent),this.sunBall&&e.sunPosition&&this.sunBall.position.set(...e.sunPosition),this.rebuildRoadGeometry(),this.renderTrackMaps()}rebuildRoadGeometry(){const e=t=>{const n=Math.max(0,(this.player.position.z-t)/Vc);return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(n))};if(this.road){const t=new Nt(24,520,16,80);qc(t,e),this.road.geometry.dispose(),this.road.geometry=t,this.road.position.x=0,this.road.rotation.z=0}if(this.roadCenterGlow){const t=new Nt(6.5,520,8,80);qc(t,e),this.roadCenterGlow.geometry.dispose(),this.roadCenterGlow.geometry=t,this.roadCenterGlow.position.x=0,this.roadCenterGlow.rotation.z=0}}renderTrackMaps(){const e=this.currentStage.track,t=this.currentStage.length>0?this.state.stageProgress/this.currentStage.length*100:0,n=Xc(e,t);H.trackMap&&(H.trackMap.innerHTML=n),H.trackName&&(H.trackName.textContent=e.name),H.trackZone&&(H.trackZone.textContent=`${e.zone} · ${e.difficulty}`),H.overlayTrackMap&&(H.overlayTrackMap.innerHTML=n),H.overlayTrackName&&(H.overlayTrackName.textContent=e.name),H.overlayTrackZone&&(H.overlayTrackZone.textContent=`${e.zone} · ${e.difficulty} · ${e.vibe}`)}showRaceBanner(e,t,n,i=2.2){H.raceBanner&&(H.raceBannerKicker.textContent=e,H.raceBannerTitle.textContent=t,H.raceBannerSubtitle.textContent=n,H.raceBanner.classList.remove("hidden"),this.state.bannerTimer=i)}triggerImpactFx(){this.audio.playCrash(),H.impactFlash&&(H.impactFlash.classList.remove("hidden"),H.impactFlash.classList.add("active"),window.clearTimeout(this.impactFlashTimer),this.impactFlashTimer=window.setTimeout(()=>{H.impactFlash.classList.remove("active"),H.impactFlash.classList.add("hidden")},170))}setupScene(){const e=new Ju(14412542,8165965,1.45);this.scene.add(e);const t=new Lh(16773831,2.8);t.position.set(30,45,20),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.1,t.shadow.camera.far=140,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,this.scene.add(t);const n=new ce(new Vi(6,24,24),new St({color:16765286}));n.position.set(-38,30,-140),this.scene.add(n),this.sunBall=n;const i=new ce(new Vi(170,32,32),new St({color:2573938,transparent:!0,opacity:.24,side:Xt}));i.position.set(0,28,-120),this.scene.add(i);const r=new ce(new Nt(180,60),new St({color:16761207,transparent:!0,opacity:.16}));r.position.set(0,16,-150),this.scene.add(r);const a=new ce(new Nt(220,520),new Re({color:8956238}));a.rotation.x=-Math.PI/2,a.position.z=-120,a.receiveShadow=!0,this.scene.add(a),this.ground=a;const o=new ce(new Nt(24,520,16,80),new Re({color:2500922,roughness:.92,metalness:.03}));o.rotation.x=-Math.PI/2,o.position.y=.02,o.position.z=-120,o.receiveShadow=!0,this.scene.add(o),this.road=o;const l=new ce(new Nt(6.5,520,8,80),new St({color:5983016,transparent:!0,opacity:.08}));l.rotation.x=-Math.PI/2,l.position.set(0,.04,-120),l.visible=!1,this.roadCenterGlow=l;const c=new Re({color:16773831}),h=new ce(new Ue(.45,.12,520),c);h.position.set(-12.2,.08,-120),h.receiveShadow=!0,this.scene.add(h),this.shoulderLeft=h;const u=h.clone();u.position.x=12.2,this.scene.add(u),this.shoulderRight=u;const d=new Tt;for(let f=0;f<18;f+=1){const g=10+Math.random()*16,x=8+Math.random()*8,m=8+Math.random()*8,p=new ce(new Ue(x,g,m),new Re({color:f%2===0?3494e3:4877708}));p.position.set(f<9?-40-Math.random()*25:40+Math.random()*25,g/2,-45-f*18),p.castShadow=!0,p.receiveShadow=!0,d.add(p),this.buildings.push(p);const S=Math.max(3,Math.floor(g/3));for(let b=0;b<S;b+=1){const M=new ce(new Nt(x*.55,.45),new St({color:b%2===0?16306284:12969471,transparent:!0,opacity:.28}));M.position.set(p.position.x,2+b*2.2,p.position.z+m/2+.04),this.scene.add(M)}}this.scene.add(d),this.player=null,this.createPlayerCar(),this.applyTrackTheme(),this.createRoadMarkers(),this.createRoadGlowMarkers(),this.createFinishLine(),this.createRoadsidePool(),this.createLightPosts(),this.createTrafficPool(),this.createPolicePool(),this.createFuelPool(),this.createHealerPool()}createPlayerCar(){var e;this.player&&this.scene.remove(this.player),this.player=this.createModelVehicle("player",this.selectedCar.key,this.selectedCar.profile,this.selectedCar.glow)||this.createCar({id:this.selectedCar.id,body:this.selectedCar.body,roof:this.selectedCar.roof,glow:this.selectedCar.glow,trim:this.selectedCar.trim,headlight:this.selectedCar.headlight,taillight:this.selectedCar.taillight,profile:this.selectedCar.profile}),(e=this.player.userData).baseYaw??(e.baseYaw=0),this.player.position.set(0,.72,10),this.scene.add(this.player)}createCar({id:e,body:t,roof:n,glow:i,trim:r=1054759,headlight:a=15398655,taillight:o=16557477,profile:l}){const c=new Tt,h=l,u=h.hoodLength??h.length*.24,d=h.rearLength??h.length*.2,f=h.cabinOffset??0,g=h.wheelRadius??.55,x=h.wheelInset??.44,m=h.height*.62,p=new ce(new Ue(h.width,m,h.length-.1),new Re({color:t,metalness:.28,roughness:.42}));p.position.y=m*.1,p.castShadow=!0,p.receiveShadow=!0,c.add(p);const S=new ce(new Ue(h.width*.96,h.height*.28,u),new Re({color:t,metalness:.24,roughness:.38}));S.position.set(0,h.height*.28,h.length*.5-u*.55),S.rotation.x=-.08,S.castShadow=!0,c.add(S);const b=new ce(new Ue(h.width*.94,h.height*.22,d),new Re({color:t,metalness:.24,roughness:.4}));b.position.set(0,h.height*.24,-h.length*.5+d*.52),b.rotation.x=.06,b.castShadow=!0,c.add(b);const M=new ce(new Ue(h.cabinWidth,h.cabinHeight,h.cabinLength),new Re({color:n,metalness:.1,roughness:.32}));M.position.y=h.height*.72+h.cabinHeight*.12,M.position.z=f,M.rotation.x=h.roofBias?-h.roofBias*.04:0,M.castShadow=!0,c.add(M);const A=new ce(new Ue(h.cabinWidth*.82,.08,h.cabinLength*.55),new Re({color:r,metalness:.16,roughness:.3}));A.position.set(0,h.height+h.cabinHeight*.12,f-h.cabinLength*.02),c.add(A);const w=new ce(new Ue(h.cabinWidth*.96,h.cabinHeight*.76,h.cabinLength*.22),new Re({color:11065599,metalness:.05,roughness:.15,transparent:!0,opacity:.78}));w.position.set(0,h.height*.74+h.cabinHeight*.2,h.cabinLength*.18+f),w.rotation.x=-.42,c.add(w);const C=new ce(new Ue(h.cabinWidth*.94,h.cabinHeight*.68,h.cabinLength*.18),new Re({color:10013678,metalness:.05,roughness:.16,transparent:!0,opacity:.72}));C.position.set(0,h.height*.74+h.cabinHeight*.16,-h.cabinLength*.18+f),C.rotation.x=.34,c.add(C);const v=new Re({color:10340843,metalness:.04,roughness:.14,transparent:!0,opacity:.7});[-1,1].forEach(le=>{const se=new ce(new Nt(h.cabinLength*.52,h.cabinHeight*.48),v);se.position.set(le*(h.cabinWidth/2+.02),h.height*.78,f-.04),se.rotation.y=le<0?Math.PI/2:-Math.PI/2,c.add(se)});const T=new ce(new Ue(h.width*.6,h.height*.22,.18),new Re({color:r,metalness:.15,roughness:.4}));T.position.set(0,h.height*.16,h.length*.5-.07),c.add(T);const G=new ce(new Ue(h.width*.78,h.height*.16,.18),new Re({color:329485,metalness:.12,roughness:.5}));G.position.set(0,.08,h.length*.5-.04),c.add(G);const R=new Ue(h.width*.2,.08,.22),U=new Re({color:a,emissive:a,emissiveIntensity:e==="civic"?.75:.45});[-h.width*.29,h.width*.29].forEach(le=>{const se=new ce(R,U);se.position.set(le,h.height*.23,h.length*.5-.08),se.rotation.y=le<0?.14:-.14,c.add(se)});const F=new ce(new Ue(Math.max(1.6,h.width*.55),.15,.7),new Re({color:i,emissive:i,emissiveIntensity:.25}));F.position.set(0,h.height*.58,h.length*.24),c.add(F);const B=new ce(new Nt(h.width*1.12,h.length*.76),new St({color:i,transparent:!0,opacity:e==="civic"?.13:.08}));B.rotation.x=-Math.PI/2,B.position.y=.04,c.add(B);const O=new ce(new Nt(h.width*1.25,h.length*.9),new St({color:0,transparent:!0,opacity:.18}));O.name="ground-shadow",O.rotation.x=-Math.PI/2,O.position.y=.01,c.add(O);const k=new ce(new Ue(h.width*.98,.1,h.length*.74),new Re({color:r,metalness:.14,roughness:.45}));if(k.position.y=-.02,c.add(k),h.splitter){const le=new ce(new Ue(h.width*.9,.06,.45),new Re({color:r}));le.position.set(0,-.02,h.length*.5-.18),c.add(le)}if(h.spoiler){const le=new ce(new Ue(h.width*.54,.06,.48),new Re({color:r,metalness:.15,roughness:.4}));le.position.set(0,h.height*.62,-h.length*.5+.38),c.add(le)}const W=new Ue(h.width*.18,.08,.2),ee=new Re({color:o,emissive:o,emissiveIntensity:.55});[-h.width*.27,h.width*.27].forEach(le=>{const se=new ce(W,ee);se.position.set(le,h.height*.18,-h.length*.5+.08),se.rotation.y=le<0?-.14:.14,c.add(se)});const Z=new _n(g,g,.55,18),fe=new Re({color:1120295});return[[-h.width*x,g*.2,h.length*.31],[h.width*x,g*.2,h.length*.31],[-h.width*x,g*.2,-h.length*.31],[h.width*x,g*.2,-h.length*.31]].forEach(([le,se,Fe])=>{const Qe=new ce(Z,fe);Qe.rotation.z=Math.PI/2,Qe.position.set(le,se,Fe),Qe.castShadow=!0,c.add(Qe)}),c.userData.baseYaw=0,c}createBus(){const e=new Tt,t=new ce(new Ue(4.4,2.3,11.8),new Re({color:16436245,metalness:.18,roughness:.48}));t.position.y=1.25,t.castShadow=!0,e.add(t);const n=new ce(new Ue(4.46,.26,11.9),new Re({color:14427686}));n.position.y=1.15,e.add(n);const i=new ce(new Ue(3.4,1.15,.18),new Re({color:10344191,transparent:!0,opacity:.72}));i.position.set(0,1.65,5.75),e.add(i);for(let o=0;o<5;o+=1)for(const l of[-1,1]){const c=new ce(new Nt(1.2,.72),new Re({color:10344191,transparent:!0,opacity:.68}));c.position.set(l*2.22,1.78,3.8-o*1.8),c.rotation.y=l<0?Math.PI/2:-Math.PI/2,e.add(c)}const r=new _n(.8,.8,.75,18),a=new Re({color:1120295});return[[-1.95,.42,3.9],[1.95,.42,3.9],[-1.95,.42,.25],[1.95,.42,.25],[-1.95,.42,-3.7],[1.95,.42,-3.7]].forEach(([o,l,c])=>{const h=new ce(r,a);h.rotation.z=Math.PI/2,h.position.set(o,l,c),h.castShadow=!0,e.add(h)}),e}createRickshaw(){const e=new Tt,t=new ce(new Ue(3.2,1.35,4.1),new Re({color:1483594,metalness:.12,roughness:.52}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new ce(new Ue(2.8,.8,1.9),new Re({color:16436245,metalness:.08,roughness:.44}));n.position.set(0,1.65,-.1),e.add(n);const i=new ce(new Ue(1.7,1.05,1.4),new Re({color:988970}));i.position.set(0,1.05,1.5),e.add(i);const r=new ce(new Ue(1.35,.55,.12),new Re({color:11065599,transparent:!0,opacity:.72}));r.position.set(0,1.35,2.08),e.add(r);const a=new _n(.5,.5,.36,16),o=new Re({color:1120295});return[[-1.08,.38,-1.1],[1.08,.38,-1.1],[0,.38,1.45]].forEach(([l,c,h])=>{const u=new ce(a,o);u.rotation.z=Math.PI/2,u.position.set(l,c,h),u.castShadow=!0,e.add(u)}),e}createRoadMarkers(){const e=new Ue(.38,.04,7),t=new Re({color:16317180});for(let n=0;n<2;n+=1){const i=n===0?-4.1:4.1;for(let r=0;r<26;r+=1){const a=new ce(e,t);a.position.set(i,.05,-r*20),a.userData.laneX=i,a.receiveShadow=!0,this.roadMarkers.push(a),this.scene.add(a)}}}createRoadGlowMarkers(){const e=new St({color:16753472,transparent:!0,opacity:.18});for(let t=0;t<2;t+=1){const n=t===0?-4.1:4.1;for(let i=0;i<18;i+=1){const r=new ce(new Nt(.9,9),e);r.rotation.x=-Math.PI/2,r.position.set(n,.03,-i*28),r.userData.laneX=n,r.visible=!1,this.roadGlows.push(r)}}}createFinishLine(){this.finishLine=new Tt;const e=new St({color:16317180}),t=new St({color:1120295});for(let o=0;o<5;o+=1)for(let l=0;l<6;l+=1){const c=new ce(new Nt(4,2.4),(o+l)%2===0?e:t);c.rotation.x=-Math.PI/2,c.position.set(-10+l*4,.07,-o*2.45),this.finishLine.add(c)}const n=new Re({color:15067115}),i=new ce(new _n(.14,.16,7.5,10),n);i.position.set(-10.8,3.8,-5),this.finishLine.add(i);const r=new ce(new _n(.14,.16,7.5,10),n);r.position.set(10.8,3.8,-5),this.finishLine.add(r);const a=new ce(new Ue(22.4,1.5,.2),new Re({color:16096779,emissive:10105874,emissiveIntensity:.3}));a.position.set(0,7.2,-5),this.finishLine.add(a),this.scene.add(this.finishLine),this.resetFinishLine()}resetFinishLine(){this.finishLine&&(this.finishLine.visible=!1,this.finishLine.position.set(0,0,-240))}createRoadsidePool(){for(let e=0;e<34;e+=1){const t=Math.random(),n=t>.62?this.createTree():t>.28?this.createSign():t>.14?this.createBusStop():this.createMedianBarrier(),i=Math.random()>.5?-1:1,r=18+Math.random()*18;n.position.set(i*r,0,-25-e*16),n.userData.side=i,n.userData.baseOffset=r,this.roadside.push(n),this.scene.add(n)}}createBusStop(){const e=new Tt,t=new ce(new Ue(4.4,.16,1.8),new Re({color:1920728}));t.position.y=3.15,e.add(t);for(const i of[-1.8,1.8]){const r=new ce(new _n(.12,.12,3.1,8),new Re({color:9741240}));r.position.set(i,1.55,0),e.add(r)}const n=new ce(new Ue(2.2,.18,.55),new Re({color:8138002}));return n.position.set(0,.95,0),e.add(n),e}createMedianBarrier(){const e=new Tt,t=new ce(new Ue(3.8,.7,.9),new Re({color:15381256}));t.position.y=.35,e.add(t);const n=new ce(new Ue(3.82,.16,.92),new Re({color:2042167}));return n.position.y=.38,e.add(n),e}createLightPosts(){for(let e=0;e<18;e+=1){const t=e%2===0?-1:1,n=new Tt,i=new ce(new _n(.1,.12,6.5,8),new Re({color:7041664}));i.position.y=3.25,n.add(i);const r=new ce(new Ue(1.4,.12,.12),new Re({color:7041664}));r.position.set(t*-.6,6.2,0),n.add(r);const a=new ce(new Vi(.24,10,10),new St({color:16769947}));a.position.set(t*-1.2,6.1,0),n.add(a),n.position.set(t*15.8,0,-40-e*26),n.userData.side=t,n.userData.baseOffset=15.8,this.lightPosts.push(n),this.scene.add(n)}}createTree(){const e=new Tt,t=new ce(new _n(.35,.45,2.8,10),new Re({color:8145437}));t.position.y=1.3,t.castShadow=!0,e.add(t);const n=new Re({color:1870418});return[[0,3.9,0,1.7],[-.9,3.25,.25,1.25],[.85,3.25,-.15,1.25]].forEach(([i,r,a,o])=>{const l=new ce(new Vi(o,14,14),n);l.position.set(i,r,a),l.castShadow=!0,e.add(l)}),e}createSign(){const e=new Tt,t=new ce(new Ue(.35,3.5,.35),new Re({color:10576391}));t.position.y=1.75,t.castShadow=!0,e.add(t);const n=new ce(new Ue(3.2,2.1,.25),new Re({color:16639626}));n.position.y=4.35,n.castShadow=!0,e.add(n);const i=this.makeTextTexture(Fc[Math.floor(Math.random()*Fc.length)]),r=new ce(new Nt(2.75,1),new St({map:i,transparent:!0}));return r.position.set(0,4.35,.15),e.add(r),e}makeTextTexture(e){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="#78350f",n.font="bold 36px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2);const i=new Cu(t);return i.needsUpdate=!0,i}createTrafficPool(){for(let e=0;e<20;e+=1){const t=Oc[e%Oc.length];let n;if(t==="bus")n=this.createBus();else if(t==="rickshaw")n=this.createRickshaw();else if(t==="truck"){const i=Ut[6];n=this.createModelVehicle("traffic","truck",i.profile,i.glow)||this.createCar({id:i.key,body:i.body,roof:i.roof,glow:i.glow,trim:i.trim,headlight:i.headlight,taillight:i.taillight,profile:i.profile})}else{const i=t==="hatchback"?Ut[1]:t==="sedan"?Ut[2]:t==="suv"?Ut[4]:Ut[5];n=this.createModelVehicle("traffic",t,i.profile,i.glow)||this.createCar({id:i.key,body:i.body,roof:i.roof,glow:i.glow,trim:i.trim,headlight:i.headlight,taillight:i.taillight,profile:i.profile})}this.hideGroundShadow(n),n.visible=!1,n.userData={active:!1,speed:60,lane:0,laneTarget:0,changeCooldown:0,type:t},this.traffic.push(n),this.scene.add(n)}}createPolicePool(){for(let e=0;e<4;e+=1){const t={width:3.4,length:6.2,height:1.08,cabinWidth:2.25,cabinLength:2.95,cabinHeight:.95},n=this.createModelVehicle("police","police",t,15680580)||this.createCar({id:"police",body:15068404,roof:988970,glow:15680580,trim:988970,headlight:15398655,taillight:16478597,profile:t});this.hideGroundShadow(n),n.visible=!1;const i=new ce(new Ue(.45,.2,.45),new Re({color:3900150,emissive:3900150,emissiveIntensity:.6}));i.position.set(-.35,1.45,-.2),n.add(i);const r=i.clone();r.material=i.material.clone(),r.material.color.setHex(15680580),r.material.emissive.setHex(15680580),r.position.x=.35,n.add(r),n.userData={active:!1,aggression:1},this.police.push(n),this.scene.add(n)}}hideGroundShadow(e){e.traverse(t=>{t.name==="ground-shadow"&&(t.visible=!1)})}createFuelPool(){for(let e=0;e<5;e+=1){const t=new Tt,n=new ce(new Ue(1.55,1.65,.9),new Re({color:16436245,emissive:16096779,emissiveIntensity:.45}));n.name="fuel-body",n.castShadow=!0,t.add(n);const i=new ce(new Ue(.62,.32,.5),new Re({color:16708551,emissive:16436245,emissiveIntensity:.35}));i.position.set(.25,.98,0),t.add(i);const r=new ce(new wr(.82,.08,8,28),new St({color:3718648,transparent:!0,opacity:.88}));r.name="fuel-beacon",r.rotation.x=Math.PI/2,r.position.y=1.25,t.add(r),t.visible=!1,t.userData={active:!1,lane:0},this.fuelCans.push(t),this.scene.add(t)}}createHealerPool(){for(let e=0;e<3;e+=1){const t=new Tt,n=new ce(new wr(.72,.2,10,24),new Re({color:2278750,emissive:1483594,emissiveIntensity:.45}));n.rotation.x=Math.PI/2,n.castShadow=!0,t.add(n);const i=new Re({color:16317180,emissive:16777215,emissiveIntensity:.15}),r=new ce(new Ue(.26,1,.26),i);r.castShadow=!0,t.add(r);const a=new ce(new Ue(1,.26,.26),i);a.castShadow=!0,t.add(a),t.visible=!1,t.userData={active:!1,lane:0},this.healers.push(t),this.scene.add(t)}}syncSettingsUi(){H.muteToggle.checked=this.settings.mute,H.musicToggle.checked=this.settings.music,H.sfxToggle.checked=this.settings.sfx,H.tiltToggle.checked=this.settings.tiltSteer}async initAds(){if(!gt||this.adState.initialized||this.progress.adFreePurchased){this.progress.adFreePurchased&&(this.adState.lastError="Ad-Free Upgrade active",this.updateAdStatusUi());return}let e={status:Cr.NOT_REQUIRED,canRequestAds:!0,isConsentFormAvailable:!1};try{await vt.initialize();try{e=await vt.requestConsentInfo(),this.adState.consentStatus=String(e.status),!e.canRequestAds&&e.isConsentFormAvailable&&(e=await vt.showConsentForm(),this.adState.consentStatus=String(e.status)),this.adState.canRequestAds=!!e.canRequestAds}catch(t){if(this.adState.consentStatus="consent-error",xx(t))this.adState.canRequestAds=!0,this.adState.lastError="AdMob Privacy & messaging is not configured for this app ID yet. Using fallback ad requests.";else throw t}vt.addListener(Rr.Loaded,()=>{this.adState.bannerLoaded=!0,this.adState.lastError="",document.body.classList.add("banner-visible"),this.updateAdStatusUi()}),vt.addListener(Rr.FailedToLoad,t=>{this.adState.bannerLoaded=!1,this.adState.bannerVisible=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Banner ad failed to load",document.body.classList.remove("banner-visible"),this.updateAdStatusUi(),(this.state.running||this.state.paused)&&(H.tip.textContent=Bi?"Test banner failed to load.":"Banner ad is not available right now. The ad unit may still be propagating, have no fill, or need AdMob privacy messaging configured.")}),vt.addListener(zi.Loaded,()=>{this.adState.interstitialReady=!0,this.adState.interstitialLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),vt.addListener(zi.FailedToLoad,t=>{this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to load",this.updateAdStatusUi()}),vt.addListener(zi.Dismissed,()=>{this.adState.interstitialReady=!1,this.updateAdStatusUi(),this.prepareInterstitial()}),vt.addListener(zi.FailedToShow,t=>{this.adState.interstitialReady=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to show",this.updateAdStatusUi(),this.prepareInterstitial()}),vt.addListener(gi.Loaded,()=>{this.adState.rewardedReady=!0,this.adState.rewardedLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),vt.addListener(gi.FailedToLoad,t=>{this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to load",this.updateAdStatusUi()}),vt.addListener(gi.Rewarded,()=>{this.revivePlayer()}),vt.addListener(gi.Dismissed,()=>{this.adState.rewardedReady=!1,this.updateAdStatusUi(),this.prepareRewardedAd()}),vt.addListener(gi.FailedToShow,t=>{this.adState.rewardedReady=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to show",this.updateAdStatusUi(),this.prepareRewardedAd()}),this.adState.initialized=!0,this.adState.canRequestAds?(await this.prepareInterstitial(),await this.prepareRewardedAd(),await this.showTopBanner()):this.adState.lastError=e.status===Cr.REQUIRED?"Consent required before ads can load":"Ad requests are blocked by consent status"}catch(t){this.adState.initialized=!1,this.adState.lastError=(t==null?void 0:t.message)||"AdMob initialization failed"}this.updateAdStatusUi()}async showTopBanner(){if(!(!gt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.bannerVisible)){try{this.adState.bannerLoaded=!1,await vt.showBanner({adId:Bi?dx:ox,adSize:To.ADAPTIVE_BANNER,position:bo.TOP_CENTER,margin:0}),this.adState.bannerVisible=!0,this.adState.lastError="",document.body.classList.add("banner-visible")}catch(e){this.adState.bannerVisible=!1,this.adState.lastError=(e==null?void 0:e.message)||"Banner show request failed"}this.updateAdStatusUi()}}async hideTopBanner(){if(!(!gt||!this.adState.bannerVisible)){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi();try{await vt.hideBanner(),await vt.removeBanner()}catch{}}}async prepareInterstitial(){if(!(!gt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.interstitialReady||this.adState.interstitialLoading)){this.adState.interstitialLoading=!0,this.updateAdStatusUi();try{await vt.prepareInterstitial({adId:Bi?ux:lx,immersiveMode:!0})}catch(e){this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Interstitial prepare failed",this.updateAdStatusUi()}}}async showStageInterstitial(){if(!(!gt||this.progress.adFreePurchased||!this.adState.initialized))try{if(!this.adState.interstitialReady){await this.prepareInterstitial(),H.tip.textContent="Interstitial is still loading. It should appear after the next stage.";return}await vt.showInterstitial()}catch{this.adState.interstitialReady=!1,this.adState.lastError="Interstitial show failed",this.prepareInterstitial()}}async prepareRewardedAd(){if(!(!gt||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.rewardedReady||this.adState.rewardedLoading)){this.adState.rewardedLoading=!0,this.updateAdStatusUi();try{await vt.prepareRewardVideoAd({adId:Bi?fx:cx,isTesting:Bi})}catch(e){this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Rewarded ad prepare failed",this.updateAdStatusUi()}}}async showRewardedAd(){if(!(!gt||!this.adState.rewardedReady))try{await vt.showRewardVideoAd()}catch{this.adState.rewardedReady=!1,this.prepareRewardedAd()}}revivePlayer(){this.state.hasRevived||(this.state.hasRevived=!0,this.state.gameOver=!1,this.state.running=!0,this.state.health=Math.round(this.state.maxHealth*.4),this.state.fuel=Math.round(this.state.maxFuel*.5),this.state.cameraShake=0,H.overlay.classList.add("hidden"),H.reviveButton.classList.add("hidden"),this.audio.playMusic(),this.showTopBanner(),H.tip.textContent="You've been revived! Drive carefully.",this.audio.tone(880,.18,"triangle",.05),this.audio.tone(1100,.24,"triangle",.04))}updateComboDisplay(){H.comboDisplay&&(this.state.combo>1?(H.comboDisplay.textContent=`x${this.state.combo} COMBO`,H.comboDisplay.classList.remove("hidden"),H.comboDisplay.className=`combo-display combo-level-${this.state.combo}`):H.comboDisplay.classList.add("hidden"))}getDailyChallenge(){const e=new Date().toISOString().slice(0,10);if(this.progress.dailyChallenge&&this.progress.dailyChallenge.date===e)return this.progress.dailyChallenge;const t=e.split("-").reduce((o,l)=>o+parseInt(l,10),0),n=t%kc.length,i=kc[n],r=t%i.targets.length,a={date:e,type:i.type,label:i.label,desc:i.desc.replace("{target}",i.targets[r]),target:i.targets[r],progress:0,completed:!1,rewardClaimed:!1};return this.progress.dailyChallenge=a,gn(this.progress),a}updateDailyChallenge(e,t){const n=this.progress.dailyChallenge;!n||n.completed||n.type!==e||(t>=n.target?(n.completed=!0,n.rewardClaimed||(n.rewardClaimed=!0,this.progress.credits+=Bc,gn(this.progress),this.refreshProgressUi(),H.tip.textContent=`Daily challenge complete! +${Bc} CR bonus.`,this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.14,"triangle",.03))):n.progress=t,this.updateDailyChallengeUi())}updateDailyChallengeUi(){if(!H.dailyBadge)return;const e=this.getDailyChallenge();if(!e){H.dailyBadge.classList.add("hidden");return}const t=Math.min(100,Math.round(e.progress/e.target*100));H.dailyBadge.classList.remove("hidden"),H.dailyBadge.innerHTML=e.completed?`<span class="daily-done">Daily: ${e.label} ✓</span>`:`<span>Daily: ${e.label} ${t}%</span>`}refreshProgressUi(){H.saveStageText.textContent=`Highest stage: Stage ${this.progress.highestStage}`,H.saveScoreText.textContent=`Best score: ${Math.round(this.progress.bestScore)}`,H.creditsText.textContent=`Credits: ${Math.round(this.progress.credits)} CR`,this.updateAdStatusUi()}updateAdStatusUi(){if(!H.adStatusText)return;if(!gt){H.adStatusText.textContent="Ads: none on Windows";return}const e=Bi?"test":"live",t=this.adState.canRequestAds?"requesting allowed":"request blocked",n=this.adState.bannerLoaded?"banner loaded":this.adState.bannerVisible?"banner requested":"banner idle",i=this.adState.interstitialReady?"interstitial ready":this.adState.interstitialLoading?"interstitial loading":"interstitial idle",r=this.adState.lastError?` | ${this.adState.lastError}`:"";H.adStatusText.textContent=`Ads: ${e}, ${t}, ${n}, ${i}${r}`}persistProgress(){const e=this.state.stageCompleted?this.state.stageIndex+2:this.state.stageIndex+1;this.progress.highestStage=Math.max(this.progress.highestStage,e),this.progress.bestScore=Math.max(this.progress.bestScore,Math.round(this.state.score)),this.progress.totalDistance+=Math.round(this.state.distance),this.progress=Yc(this.progress),gn(this.progress),this.refreshProgressUi()}isMissionComplete(e=this.currentStage){return e.mission.type==="clean-finish"?this.state.health>=e.mission.target:e.mission.type==="fuel-save"?this.state.fuel>=e.mission.target:e.mission.type==="near-miss"?this.state.nearMissCount>=e.mission.target:e.mission.type==="score-target"?this.state.score>=e.mission.target:!1}setPaused(e){this.state.gameOver||this.state.stageCompleted||(this.state.paused=e,document.body.classList.toggle("settings-open",e),this.clearTouchInput(),H.settingsPanel.classList.toggle("hidden",!e),H.pauseButton.innerHTML=`<span class="icon-glyph">${e?">":"II"}</span><span class="icon-label">${e?"Resume":"Pause"}</span>`,H.pauseButton.setAttribute("aria-label",e?"Resume":"Pause"),e?(H.tip.textContent="Paused. Adjust settings or resume.",this.audio.suspend(),this.showTopBanner()):this.state.running&&(this.audio.resume(),this.audio.playMusic(),this.showTopBanner(),H.tip.textContent=ws?`Hold left or right side of the road to steer. ${this.settings.tiltSteer?"Tilt steering is on.":"Enable tilt steering in Settings if you want."}`:`${this.currentStage.tip} Vehicle: ${this.selectedCar.label}.`))}clearTouchInput(){this.touchInput.steerZone=0,this.touchInput.brake=!1,this.touchInput.nitro=!1,this.steerPointerId=null,document.querySelectorAll("[data-touch]").forEach(e=>e.classList.remove("is-pressed"))}setSteerFromPointer(e){const t=this.container.getBoundingClientRect(),n=e-t.left;this.touchInput.steerZone=n<t.width*.5?-1:1}async configureTiltSteer(e){if(!e){this.motionSteer=0,this.settings.tiltSteer=!1,vs(this.settings),this.syncSettingsUi();return}if(typeof window.DeviceOrientationEvent>"u"){this.settings.tiltSteer=!1,vs(this.settings),this.syncSettingsUi(),H.tip.textContent="Tilt steering is not available on this device.";return}if(typeof window.DeviceOrientationEvent.requestPermission=="function")try{if(await window.DeviceOrientationEvent.requestPermission()!=="granted")throw new Error("denied")}catch{this.settings.tiltSteer=!1,vs(this.settings),this.syncSettingsUi(),H.tip.textContent="Tilt steering permission was denied.";return}this.settings.tiltSteer=!0,vs(this.settings),this.syncSettingsUi(),H.tip.textContent="Tilt steering enabled. Hold the phone like a steering wheel."}handleAppBackground(){this.clearTouchInput(),this.hideTopBanner(),this.audio.suspend(),this.state.running&&!this.state.paused&&!this.state.gameOver&&!this.state.stageCompleted&&(this.autoPausedFromBackground=!0,this.setPaused(!0),H.tip.textContent="Paused in background. Tap Resume when you return.")}updateSetting(e,t){this.settings[e]=t,vs(this.settings),this.audio.setSettings(this.settings),this.syncSettingsUi(),!this.settings.mute&&this.settings.music&&this.state.running&&!this.state.paused&&this.audio.playMusic()}bindEvents(){if(window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>{this.keys.add(e.code),e.code==="Escape"&&(e.preventDefault(),this.setPaused(!this.state.paused)),e.code==="Space"&&(e.preventDefault(),(!this.state.running||this.state.gameOver)&&this.startRun())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.handleAppBackground()),document.addEventListener("visibilitychange",()=>{document.hidden?this.handleAppBackground():!this.adState.bannerVisible&&(this.state.running||this.state.paused)&&this.showTopBanner()}),H.overlayButton.addEventListener("click",()=>this.startRun()),H.reviveButton.addEventListener("click",()=>this.showRewardedAd()),H.pauseButton.addEventListener("click",()=>{this.state.paused?this.setPaused(!1):this.setPaused(!0)}),H.settingsButton.addEventListener("click",()=>this.setPaused(!0)),H.resumeButton.addEventListener("click",()=>this.setPaused(!1)),H.settingsPanel.addEventListener("pointerdown",e=>e.stopPropagation()),H.settingsPanel.addEventListener("pointermove",e=>e.stopPropagation()),H.settingsPanel.addEventListener("wheel",e=>e.stopPropagation(),{passive:!0}),H.settingsPanel.addEventListener("pointerdown",e=>e.stopPropagation()),H.settingsPanel.addEventListener("pointermove",e=>e.stopPropagation()),H.settingsPanel.addEventListener("wheel",e=>e.stopPropagation(),{passive:!0}),document.querySelectorAll("[data-settings-tab]").forEach(e=>{e.addEventListener("click",()=>this.setSettingsTab(e.dataset.settingsTab))}),H.muteToggle.addEventListener("change",e=>this.updateSetting("mute",e.target.checked)),H.musicToggle.addEventListener("change",e=>this.updateSetting("music",e.target.checked)),H.sfxToggle.addEventListener("change",e=>this.updateSetting("sfx",e.target.checked)),H.tiltToggle.addEventListener("change",e=>this.configureTiltSteer(e.target.checked)),document.querySelectorAll("[data-touch]").forEach(e=>{const t=e.dataset.touch,n=(i,r)=>{r.preventDefault(),this.touchInput[t]=i,e.classList.toggle("is-pressed",i)};e.addEventListener("pointerdown",i=>n(!0,i)),e.addEventListener("pointerup",i=>n(!1,i)),e.addEventListener("pointercancel",i=>n(!1,i)),e.addEventListener("pointerleave",i=>n(!1,i)),e.addEventListener("lostpointercapture",i=>n(!1,i))}),ws){this.container.addEventListener("pointerdown",t=>{t.pointerType==="touch"&&(t.target.closest(".touch-controls, .top-actions, .settings-panel, .overlay-card")||(this.steerPointerId=t.pointerId,this.setSteerFromPointer(t.clientX)))}),this.container.addEventListener("pointermove",t=>{t.pointerType!=="touch"||t.pointerId!==this.steerPointerId||this.setSteerFromPointer(t.clientX)});const e=t=>{t.pointerType==="touch"&&this.steerPointerId===t.pointerId&&(this.touchInput.steerZone=0,this.steerPointerId=null)};this.container.addEventListener("pointerup",e),this.container.addEventListener("pointercancel",e),this.container.addEventListener("pointerleave",e),window.addEventListener("deviceorientation",t=>{if(!this.settings.tiltSteer)return;const n=typeof t.gamma=="number"?t.gamma:0;this.motionSteer=Xe.clamp(n/18,-1,1)})}}startRun(){if(this.state.stageCompleted){const e=this.state.stageIndex+1;this.state=this.initialState(),this.state.stageIndex=e}else if(!this.state.running&&!this.state.gameOver){const e=this.state.stageIndex;this.state=this.initialState(),this.state.stageIndex=e}else this.state=this.initialState();this.selectedCar=this.getSelectedGarageVehicle(),this.state.maxSpeed=this.selectedCar.topSpeed,this.state.maxHealth=this.selectedCar.maxHealth??100,this.state.maxFuel=this.selectedCar.maxFuel??100,this.state.maxNitro=this.selectedCar.maxNitro??100,this.state.health=this.state.maxHealth,this.state.fuel=this.state.maxFuel,this.state.nitro=this.state.maxNitro,this.createPlayerCar(),this.applyTrackTheme(),this.state.running=!0,this.state.countdown=3.4,this.state.countdownStarted=!1,this.player.position.set(0,.72,10),this.player.rotation.set(0,this.player.userData.baseYaw??0,0),this.traffic.forEach(e=>this.deactivate(e)),this.police.forEach(e=>this.deactivate(e)),this.fuelCans.forEach(e=>this.deactivate(e)),this.healers.forEach(e=>this.deactivate(e)),this.resetFinishLine(),H.overlay.classList.add("hidden"),this.audio.resume(),this.showTopBanner(),this.setPaused(!1),this.showRaceBanner("Route Preview",this.currentStage.track.name,`${this.currentStage.track.zone} - ${this.currentStage.track.vibe}`,2.8),H.tip.textContent=ws?`${this.currentStage.name}: ${this.currentStage.mission.label}. Hold left or right side of the road to steer.${this.settings.tiltSteer?" Tilt steering is on.":""}`:`${this.currentStage.tip} Vehicle: ${this.selectedCar.label}.`,H.overlayButton.textContent="Start Run",this.audio.playMusic(!0),this.audio.tone(440,.18,"square",.05),this.updateHud()}deactivate(e){e.visible=!1,e.userData.active=!1,e.position.set(0,-50,0)}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}render(){requestAnimationFrame(()=>this.render());const e=Math.min(this.clock.getDelta(),.033);if(this.state.bannerTimer>0&&(this.state.bannerTimer=Math.max(0,this.state.bannerTimer-e),H.raceBanner.classList.toggle("hidden",this.state.bannerTimer<=0)),this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.updateState(e),this.updateWorld(e),this.updateHud()),H.speedVignette){const o=Xe.clamp((this.state.speed-100)/130,0,.72);H.speedVignette.style.opacity=o}const t=(Math.random()-.5)*this.state.cameraShake,n=(Math.random()-.5)*this.state.cameraShake*.5,r=this.getRoadCenterOffsetAtProgress(this.getTrackProgress())*.78+this.player.position.x*.28+this.state.roadDrift*.18;this.camera.position.x=Xe.lerp(this.camera.position.x,r+t,.08),this.camera.position.y=Xe.lerp(this.camera.position.y,10.2+this.state.speed*.01+n,.08),this.camera.position.z=Xe.lerp(this.camera.position.z,24-Math.min(2.2,this.state.speed*.009),.08),this.camera.fov=Xe.lerp(this.camera.fov,this.cameraBaseFov+Math.min(12,this.state.speed*.04),.1),this.camera.updateProjectionMatrix();const a=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+130));this.camera.lookAt(a+this.player.position.x*.18,1.8+this.state.bodyPitch*.16,-10),this.renderer.render(this.scene,this.camera)}updateState(e){const t=this.keys.has("ArrowLeft")||this.keys.has("KeyA"),n=this.keys.has("ArrowRight")||this.keys.has("KeyD"),i=this.keys.has("ArrowDown")||this.keys.has("KeyS")||this.touchInput.brake,r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchInput.nitro,a=this.currentStage;if(this.state.stageTime+=e,this.state.countdown>0){this.state.countdown-=e;const p=Math.ceil(this.state.countdown);if(p>0){(!this.state.countdownStarted||p!==Math.ceil(this.state.countdown+e))&&(this.audio.tone(520,.08,"triangle",.035),this.showRaceBanner("Countdown",String(p),`${a.track.name} - ${a.track.vibe}`,.22)),this.state.countdownStarted=!0,this.state.speed=Xe.lerp(this.state.speed,0,.2),this.state.targetSpeed=0,H.tip.textContent=`Get ready. ${a.track.name} opens in ${p}. Mission: ${a.mission.label}.`;return}this.state.countdown=0,this.audio.tone(760,.14,"square",.045),this.showRaceBanner("Go",a.track.name,a.track.vibe,1.2),H.tip.textContent=`${a.name}: ${a.mission.label}.`}this.state.targetSpeed+=this.selectedCar.accel*e,i&&(this.state.targetSpeed-=(110+this.selectedCar.grip*18)*e),i||(this.state.targetSpeed-=Math.max(0,8-this.selectedCar.accel*.03)*e),this.state.targetSpeed=Xe.clamp(this.state.targetSpeed,0,Math.min(this.state.maxSpeed,a.speedCap));let o=Math.min(this.state.maxSpeed,a.speedCap);r&&this.state.nitro>2?(o+=Math.min(this.selectedCar.nitroBoost??30,Math.max(12,a.speedCap*.12)),this.state.nitro=Math.max(0,this.state.nitro-34*e),this.state.cameraShake=Math.min(.34,this.state.cameraShake+e*.5),H.tip.textContent=`Nitro engaged. ${a.name} still enforces a speed cap.`):this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+12*e);const l=Math.abs(this.player.position.x)>7.2?.94:1,c=this.getRoadCenterOffsetAtProgress(this.getTrackProgress()),h=Math.abs(this.player.position.x-c),u=h>7.2?.88:h>5.3?.95:1;this.state.speed=Xe.lerp(this.state.speed,Math.min(this.state.targetSpeed,o)*l*u,.06);const d=Xe.clamp((t?-1:0)+(n?1:0)+this.touchInput.steerZone+this.motionSteer,-1,1),f=Math.max(5.6,8.8-this.state.speed*.014);this.player.position.x+=d*e*(f+this.state.speed*.026)*this.selectedCar.grip,this.player.position.x=Xe.clamp(this.player.position.x,c-8.7,c+8.7),this.state.steerVisual=Xe.lerp(this.state.steerVisual,d,.12),this.state.bodyRoll=Xe.lerp(this.state.bodyRoll,-d*(.08+this.state.speed*7e-4),.12),this.state.bodyPitch=Xe.lerp(this.state.bodyPitch,i?.16:-.05,.08),this.state.roadDrift=Xe.lerp(this.state.roadDrift,d*Math.min(2.4,this.state.speed*.008),.06),this.state.cameraShake=Xe.lerp(this.state.cameraShake,0,.08),this.player.rotation.z=Xe.lerp(this.player.rotation.z,this.state.bodyRoll,.12),this.player.rotation.x=Xe.lerp(this.player.rotation.x,this.state.bodyPitch,.1);const g=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+90)),x=Xe.clamp((g-c)*.035,-.22,.22);this.player.rotation.y=Xe.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+x-d*.1,.12),this.state.distance+=this.state.speed*e*1.6,this.state.stageProgress+=this.state.speed*e*1.6,this.state.score+=this.state.speed*e*.72*a.scoreBonus,this.state.comboTimer>0&&(this.state.comboTimer-=e,this.state.comboTimer<=0&&(this.state.combo=0,this.state.comboMultiplier=1,this.updateComboDisplay())),this.updateDailyChallenge("score",this.state.score),this.updateDailyChallenge("distance",this.state.distance),this.state.fuel=Math.max(0,this.state.fuel-e*(2+this.state.speed*.02)*this.selectedCar.fuelDrain*a.fuelUseScale),this.state.heat=Xe.clamp(this.state.heat+Math.max(0,this.state.speed-135)*e*.085-e*1.75,0,100),this.updateFinishLine(e),this.state.fuel<this.state.maxFuel*.25&&(H.tip.textContent="Fuel is running low. Grab the next can."),this.state.health<35&&(H.tip.textContent="Heavy damage. Another hard impact could end the run."),this.state.heat>Math.max(72,a.policeHeatThreshold+8)&&(H.tip.textContent="Police pressure is high. Expect interceptors."),this.state.trafficSpawn+=e,this.state.policeSpawn+=e,this.state.fuelSpawn+=e,this.state.healerSpawn+=e;const m=Xe.lerp(1.3,.45,this.state.speed/225)*a.trafficBias;this.state.trafficSpawn>=m&&this.state.stageProgress>60&&(this.state.trafficSpawn=0,this.spawnTrafficCar()),this.state.heat>a.policeHeatThreshold&&this.state.policeSpawn>=Xe.lerp(9,3.5,this.state.heat/100)*a.policeSpawnScale&&(this.state.policeSpawn=0,this.spawnPoliceCar()),this.state.fuelSpawn>=a.fuelSpawnEvery&&(this.state.fuelSpawn=0,this.spawnFuelCan()),this.state.health<this.state.maxHealth*.6&&this.state.healerSpawn>=8.5&&!this.healers.some(p=>p.userData.active)&&(this.state.healerSpawn=0,this.spawnHealer()),(this.state.health<=0||this.state.fuel<=0)&&this.endRun()}updateFinishLine(e){const t=this.currentStage;if(!this.finishLine||this.state.stageCompleted)return;const n=Math.max(0,t.length-this.state.stageProgress);this.finishLine.visible=n<=130,this.finishLine.position.z=Xe.lerp(this.finishLine.position.z,-16-n*.16,Math.min(1,e*8)),this.finishLine.position.x=Xe.lerp(this.finishLine.position.x,this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+n)),Math.min(1,e*6)),n<=120&&(H.tip.textContent=`Finish line ahead. Clear ${t.name}.`),n<=0&&this.completeStage()}completeStage(){const e=this.currentStage,t=this.isMissionComplete(e),n=e.missionReward+(t?e.bonusReward:0),i=Ut.find(u=>wo[u.key]===this.state.stageIndex+1);let r="No new car unlock this stage.";const a=t&&this.state.health>this.state.maxHealth*.6?3:t?2:1,o=`stage_${e.id}`,l=this.progress.stageStars[o]||0;a>l&&(this.progress.stageStars[o]=a),this.state.running=!1,this.state.stageCompleted=!0,this.state.speed=0,this.state.targetSpeed=0,this.state.stageProgress=e.length,this.audio.stopMusic(),this.hideTopBanner(),this.audio.tone(523,.16,"triangle",.045),this.audio.tone(659,.2,"triangle",.045),this.progress.credits+=n,i&&!this.progress.ownedVehicles.includes(i.key)?(this.progress.ownedVehicles.push(i.key),this.progress.selectedVehicleKey=i.key,this.selectedCar=this.getSelectedGarageVehicle(),r=`Unlocked ${i.label}. It is now equipped in your garage.`):t&&(r="Mission bonus secured."),this.persistProgress(),this.renderGarage(),this.renderTrackMaps(),this.finishLine&&(this.finishLine.visible=!0,this.finishLine.position.z=this.player.position.z-5,this.finishLine.position.x=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(e.length)));const c=Kc(this.state.stageIndex+1),h="★".repeat(a)+"☆".repeat(3-a);this.updateOverlay(`Stage ${e.id} Complete ${h}`,e.name,`Finish line crossed. Earned ${n} CR.${t?` Mission cleared: ${e.mission.label}.`:` Mission missed: ${e.mission.label}.`} ${r} Next up: ${c.name}, ${c.lengthKm} KM. Press the button to start Stage ${c.id}.`,c.track),H.overlayButton.textContent=`Stage ${c.id}`,e.id%hx===0&&this.showStageInterstitial()}updateWorld(e){const t=this.state.speed*e*_s;this.roadMarkers.forEach(i=>{i.position.z+=t*16,i.position.z>18&&(i.position.z-=520),i.position.x=i.userData.laneX+this.getRoadCenterOffsetAtZ(i.position.z)}),this.roadGlows.forEach(i=>{i.position.z+=t*16,i.material.opacity=.1+Math.sin(performance.now()*.003+i.position.z*.04)*.03,i.position.z>18&&(i.position.z-=520),i.position.x=i.userData.laneX+this.getRoadCenterOffsetAtZ(i.position.z)});const n=this.getRoadCenterOffsetAtProgress(this.getTrackProgress());this.shoulderLeft&&this.shoulderRight&&(this.shoulderLeft.position.x=n-12.2,this.shoulderRight.position.x=n+12.2,this.shoulderLeft.rotation.z=0,this.shoulderRight.rotation.z=0),this.roadside.forEach(i=>{i.position.z+=t*11,i.position.z>28&&(i.position.z=-380-Math.random()*120,i.userData.baseOffset=18+Math.random()*18,i.scale.setScalar(.9+Math.random()*.35)),i.position.x=this.getRoadCenterOffsetAtZ(i.position.z)+i.userData.side*i.userData.baseOffset,i.rotation.y=i.userData.side<0?.18:-.18}),this.lightPosts.forEach((i,r)=>{i.position.z+=t*10.5,i.position.z>28&&(i.position.z=-420-r*18),i.position.x=this.getRoadCenterOffsetAtZ(i.position.z)+i.userData.side*i.userData.baseOffset}),this.buildings.forEach(i=>{i.material.emissive=new Ie(988970),i.material.emissiveIntensity=.08}),this.updateTrafficCars(e),this.updatePoliceCars(e),this.updateFuelCans(e),this.updateHealers(e)}spawnTrafficCar(){const e=this.traffic.find(i=>!i.userData.active);if(!e)return;const t=Math.floor(Math.random()*ur.length);e.userData.active=!0,e.userData.speed=e.userData.type==="bus"?48+Math.random()*28:e.userData.type==="rickshaw"?34+Math.random()*18:e.userData.type==="truck"?44+Math.random()*24:52+Math.random()*80,e.userData.lane=t,e.userData.laneTarget=t,e.userData.changeCooldown=.7+Math.random()*1.3,e.visible=!0;const n=-220-Math.random()*140;e.position.set(this.getLaneWorldX(t,n),.72,n),e.rotation.set(0,0,0)}spawnPoliceCar(){const e=this.police.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.userData.aggression=.85+Math.random()*.55,e.visible=!0;const t=-210-Math.random()*40,n=Math.random()>.5?0:2;e.position.set(this.getLaneWorldX(n,t),.72,t),e.rotation.set(0,0,0)}spawnFuelCan(){if(this.fuelCans.some(i=>i.userData.active))return;const e=this.fuelCans.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-180-Math.random()*60,n=Math.floor(Math.random()*ur.length);e.userData.lane=n,e.position.set(this.getLaneWorldX(n,t),1.2,t),e.rotation.set(0,0,0),e.visible=!1}spawnHealer(){const e=this.healers.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-190-Math.random()*70,n=Math.floor(Math.random()*ur.length);e.userData.lane=n,e.position.set(this.getLaneWorldX(n,t),1.45,t),e.rotation.set(0,0,0),e.visible=!1}updateTrafficCars(e){this.state.countdown>0||this.traffic.forEach(t=>{if(!t.userData.active)return;if(t.userData.changeCooldown-=e,t.userData.changeCooldown<=0&&t.position.z<-20&&Math.random()>.76){const i=[0,1,2].filter(r=>r!==t.userData.lane);t.userData.laneTarget=i[Math.floor(Math.random()*i.length)],t.userData.changeCooldown=1.8+Math.random()*1.8}if(t.userData.laneTarget!==t.userData.lane){const i=this.getLaneWorldX(t.userData.laneTarget,t.position.z);t.position.x=Xe.lerp(t.position.x,i,e*1.7),Math.abs(t.position.x-i)<.28&&(t.userData.lane=t.userData.laneTarget)}else t.position.x=Xe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane,t.position.z),e*2);const n=(this.state.speed-t.userData.speed)*e*_s*16;if(t.position.z+=n+.55,t.rotation.z=Math.sin((performance.now()*.001+t.position.z)*.7)*.025,t.rotation.y=Xe.lerp(t.rotation.y,(t.userData.baseYaw??0)+(this.getLaneWorldX(t.userData.laneTarget,t.position.z)-t.position.x)*.03,.08),!this.nearMisses.has(t)){const i=Math.abs(t.position.x-this.player.position.x);if(Math.abs(t.position.z-this.player.position.z)<6&&i<4.2&&i>2.2){this.nearMisses.add(t),this.state.nearMissCount+=1,this.state.combo=Math.min(mx,this.state.combo+1),this.state.comboMultiplier=this.state.combo,this.state.comboTimer=px;const a=150*this.state.comboMultiplier;this.state.score+=a,H.tip.textContent=this.state.combo>1?`Near miss x${this.state.combo}! +${a} CR`:"Near miss! +150",this.audio.tone(660+this.state.combo*40,.12,"triangle",.03),this.updateComboDisplay(),this.updateDailyChallenge("near_miss",this.state.nearMissCount),this.updateDailyChallenge("combo_max",this.state.comboMultiplier)}}this.isCollision(t,2.7,5.1)?(this.applyDamage(14),this.state.speed=Math.max(0,this.state.speed-35),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-40),this.state.cameraShake=Math.min(.75,this.state.cameraShake+.42),this.state.combo=0,this.state.comboMultiplier=1,this.state.comboTimer=0,this.updateComboDisplay(),H.tip.textContent="Traffic impact.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>28&&(this.state.score+=20,this.state.heat=Math.min(100,this.state.heat+1.5),this.deactivate(t))})}updatePoliceCars(e){this.state.countdown>0||this.police.forEach(t=>{if(!t.userData.active)return;const n=this.player.position.x+Math.sin(performance.now()*.0015)*1.3;t.position.x=Xe.lerp(t.position.x,n,e*1.3*t.userData.aggression),t.position.z+=this.state.speed*e*_s*18+.8+this.state.heat*.015,t.rotation.z=Xe.clamp((this.player.position.x-t.position.x)*-.04,-.18,.18),t.rotation.y=Xe.lerp(t.rotation.y,(t.userData.baseYaw??0)+(n-t.position.x)*.02,.08),this.isCollision(t,2.9,5.2)?(this.applyDamage(20),this.state.heat=Math.min(100,this.state.heat+10),this.state.cameraShake=Math.min(.85,this.state.cameraShake+.5),H.tip.textContent="Police ram.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>30&&this.deactivate(t)})}updateFuelCans(e){this.fuelCans.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*_s*16+.45,t.position.x=Xe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2.4,t.rotation.x=0,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.4&&Math.abs(t.position.x-this.player.position.x)<2.2?(this.state.fuel=Math.min(this.state.maxFuel,this.state.fuel+38),this.state.score+=90,H.tip.textContent="Fuel collected.",this.audio.tone(740,.14,"triangle",.045),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}updateHealers(e){this.healers.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*_s*16+.4,t.position.x=Xe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2,t.rotation.z+=e*1.1,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.6&&Math.abs(t.position.x-this.player.position.x)<2.3?(this.state.health=Math.min(this.state.maxHealth,this.state.health+28),this.state.score+=110,H.tip.textContent="Health restored.",this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.16,"sine",.03),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}isCollision(e,t,n){return Math.abs(e.position.x-this.player.position.x)<t&&Math.abs(e.position.z-this.player.position.z)<n}applyDamage(e){const t=Math.max(.55,1-(this.selectedCar.damageReduction??0));this.state.cleanRun=!1,this.state.health=Math.max(0,this.state.health-e*t)}updateHud(){const e=Math.min(100,this.state.stageProgress/this.currentStage.length*100),t=this.state.health/this.state.maxHealth*100,n=this.state.fuel/this.state.maxFuel*100,i=this.state.nitro/this.state.maxNitro*100;H.stage.textContent=`Stage ${this.currentStage.id}`,H.speed.textContent=`${Math.round(this.state.speed*1.6)} KM/H`,H.score.textContent=`${Math.round(this.state.score)}`,H.heat.textContent=`${Math.round(this.state.heat)}%`,H.limit.textContent=`${Math.round(this.currentStage.speedCapKmh)} KM/H`;const r=Math.max(0,this.currentStage.length-this.state.stageProgress),a=r/1e3;H.distanceRemaining.textContent=a>=1?`${a.toFixed(1)} KM`:`${Math.round(r)} M`,H.distanceRemaining.classList.toggle("finish-near",e>=95),H.distanceRemaining.classList.toggle("finish-mid",e>=70&&e<95),H.healthBar.style.width=`${t}%`,H.fuelBar.style.width=`${n}%`,H.nitroBar.style.width=`${i}%`,H.progressBar.style.width=`${e}%`,H.healthText.textContent=`${Math.round(t)}%`,H.fuelText.textContent=`${Math.round(n)}%`,H.nitroText.textContent=`${Math.round(i)}%`,H.progressText.textContent=`${Math.round(e)}%`,this.renderTrackMaps()}updateOverlay(e,t,n,i=this.currentStage.track){H.overlayKicker.textContent=e,H.overlayTitle.textContent=t,H.overlayBody.textContent=n,H.overlayTrackMap&&(H.overlayTrackMap.innerHTML=Xc(i,0)),H.overlayTrackName&&(H.overlayTrackName.textContent=i.name),H.overlayTrackZone&&(H.overlayTrackZone.textContent=`${i.zone} · ${i.difficulty}`),H.overlay.classList.remove("hidden")}endRun(){this.state.gameOver=!0,this.state.running=!1,this.state.stageCompleted=!1,this.hideTopBanner(),this.audio.stopMusic(),this.audio.tone(130,.35,"sawtooth",.06),this.persistProgress();const e=this.state.health<=0?"Wrecked Out":"Out of Fuel";H.overlayButton.textContent="Restart",this.updateOverlay(e,"Run Over",`${this.selectedCar.label} | Score ${Math.round(this.state.score)} | Distance ${Math.round(this.state.distance)} m | Heat ${Math.round(this.state.heat)}% | Mission progress ${Math.min(this.state.nearMissCount,this.currentStage.mission.target)}/${this.currentStage.mission.target}. Press Space to restart.`,this.currentStage.track);const t=!this.state.hasRevived&&gt&&this.adState.rewardedReady&&!this.progress.adFreePurchased;H.reviveButton.classList.toggle("hidden",!t)}}new Lx(document.querySelector("#game-view"));export{Cr as A,Yo as W};
