(()=>{var t={996:t=>{var r=function(t){null==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};r.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++)t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30,this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0},r.prototype.init_by_array=function(t,r){var n,e,i;for(this.init_seed(19650218),n=1,e=0,i=this.N>r?this.N:r;i;i--){var o=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(1664525*((4294901760&o)>>>16)<<16)+1664525*(65535&o))+t[e]+e,this.mt[n]>>>=0,e++,++n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1),e>=r&&(e=0)}for(i=this.N-1;i;i--)o=this.mt[n-1]^this.mt[n-1]>>>30,this.mt[n]=(this.mt[n]^(1566083941*((4294901760&o)>>>16)<<16)+1566083941*(65535&o))-n,this.mt[n]>>>=0,++n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1);this.mt[0]=2147483648},r.prototype.random_int=function(){var t,r=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var n;for(this.mti==this.N+1&&this.init_seed(5489),n=0;n<this.N-this.M;n++)t=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+this.M]^t>>>1^r[1&t];for(;n<this.N-1;n++)t=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+(this.M-this.N)]^t>>>1^r[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^r[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0},r.prototype.random_int31=function(){return this.random_int()>>>1},r.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},r.prototype.random=function(){return this.random_int()*(1/4294967296)},r.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},r.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},t.exports=r},147:(t,r,n)=>{var e=new(n(996))(Math.random()*Number.MAX_SAFE_INTEGER);t.exports=function(t){for(var r=t.length;r--;)t[r]=Math.floor(256*e.random());return t}},22:(t,r,n)=>{"use strict";n.r(r),n.d(r,{NIL:()=>C,parse:()=>v,stringify:()=>c,v1:()=>l,v3:()=>U,v4:()=>I,v5:()=>E,validate:()=>a,version:()=>P});var e=n(147),i=new Uint8Array(16);function o(){if(console.log("------------",e),!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(i)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(t){return"string"==typeof t&&s.test(t)};for(var h=[],u=0;u<256;++u)h.push((u+256).toString(16).substr(1));const c=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(h[t[r+0]]+h[t[r+1]]+h[t[r+2]]+h[t[r+3]]+"-"+h[t[r+4]]+h[t[r+5]]+"-"+h[t[r+6]]+h[t[r+7]]+"-"+h[t[r+8]]+h[t[r+9]]+"-"+h[t[r+10]]+h[t[r+11]]+h[t[r+12]]+h[t[r+13]]+h[t[r+14]]+h[t[r+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var f,m,p=0,d=0;const l=function(t,r,n){var e=r&&n||0,i=r||new Array(16),s=(t=t||{}).node||f,a=void 0!==t.clockseq?t.clockseq:m;if(null==s||null==a){var h=t.random||(t.rng||o)();null==s&&(s=f=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==a&&(a=m=16383&(h[6]<<8|h[7]))}var u=void 0!==t.msecs?t.msecs:Date.now(),l=void 0!==t.nsecs?t.nsecs:d+1,v=u-p+(l-d)/1e4;if(v<0&&void 0===t.clockseq&&(a=a+1&16383),(v<0||u>p)&&void 0===t.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=u,d=l,m=a;var y=(1e4*(268435455&(u+=122192928e5))+l)%4294967296;i[e++]=y>>>24&255,i[e++]=y>>>16&255,i[e++]=y>>>8&255,i[e++]=255&y;var g=u/4294967296*1e4&268435455;i[e++]=g>>>8&255,i[e++]=255&g,i[e++]=g>>>24&15|16,i[e++]=g>>>16&255,i[e++]=a>>>8|128,i[e++]=255&a;for(var A=0;A<6;++A)i[e+A]=s[A];return r||c(i)},v=function(t){if(!a(t))throw TypeError("Invalid UUID");var r,n=new Uint8Array(16);return n[0]=(r=parseInt(t.slice(0,8),16))>>>24,n[1]=r>>>16&255,n[2]=r>>>8&255,n[3]=255&r,n[4]=(r=parseInt(t.slice(9,13),16))>>>8,n[5]=255&r,n[6]=(r=parseInt(t.slice(14,18),16))>>>8,n[7]=255&r,n[8]=(r=parseInt(t.slice(19,23),16))>>>8,n[9]=255&r,n[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=r/4294967296&255,n[12]=r>>>24&255,n[13]=r>>>16&255,n[14]=r>>>8&255,n[15]=255&r,n};function y(t,r,n){function e(t,e,i,o){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var r=[],n=0;n<t.length;++n)r.push(t.charCodeAt(n));return r}(t)),"string"==typeof e&&(e=v(e)),16!==e.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+t.length);if(s.set(e),s.set(t,e.length),(s=n(s))[6]=15&s[6]|r,s[8]=63&s[8]|128,i){o=o||0;for(var a=0;a<16;++a)i[o+a]=s[a];return i}return c(s)}try{e.name=t}catch(t){}return e.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",e.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",e}function g(t){return 14+(t+64>>>9<<4)+1}function A(t,r){var n=(65535&t)+(65535&r);return(t>>16)+(r>>16)+(n>>16)<<16|65535&n}function _(t,r,n,e,i,o){return A((s=A(A(r,t),A(e,o)))<<(a=i)|s>>>32-a,n);var s,a}function b(t,r,n,e,i,o,s){return _(r&n|~r&e,t,r,i,o,s)}function w(t,r,n,e,i,o,s){return _(r&e|n&~e,t,r,i,o,s)}function M(t,r,n,e,i,o,s){return _(r^n^e,t,r,i,o,s)}function N(t,r,n,e,i,o,s){return _(n^(r|~e),t,r,i,o,s)}const U=y("v3",48,(function(t){if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=new Uint8Array(r.length);for(var n=0;n<r.length;++n)t[n]=r.charCodeAt(n)}return function(t){for(var r=[],n=32*t.length,e="0123456789abcdef",i=0;i<n;i+=8){var o=t[i>>5]>>>i%32&255,s=parseInt(e.charAt(o>>>4&15)+e.charAt(15&o),16);r.push(s)}return r}(function(t,r){t[r>>5]|=128<<r%32,t[g(r)-1]=r;for(var n=1732584193,e=-271733879,i=-1732584194,o=271733878,s=0;s<t.length;s+=16){var a=n,h=e,u=i,c=o;n=b(n,e,i,o,t[s],7,-680876936),o=b(o,n,e,i,t[s+1],12,-389564586),i=b(i,o,n,e,t[s+2],17,606105819),e=b(e,i,o,n,t[s+3],22,-1044525330),n=b(n,e,i,o,t[s+4],7,-176418897),o=b(o,n,e,i,t[s+5],12,1200080426),i=b(i,o,n,e,t[s+6],17,-1473231341),e=b(e,i,o,n,t[s+7],22,-45705983),n=b(n,e,i,o,t[s+8],7,1770035416),o=b(o,n,e,i,t[s+9],12,-1958414417),i=b(i,o,n,e,t[s+10],17,-42063),e=b(e,i,o,n,t[s+11],22,-1990404162),n=b(n,e,i,o,t[s+12],7,1804603682),o=b(o,n,e,i,t[s+13],12,-40341101),i=b(i,o,n,e,t[s+14],17,-1502002290),n=w(n,e=b(e,i,o,n,t[s+15],22,1236535329),i,o,t[s+1],5,-165796510),o=w(o,n,e,i,t[s+6],9,-1069501632),i=w(i,o,n,e,t[s+11],14,643717713),e=w(e,i,o,n,t[s],20,-373897302),n=w(n,e,i,o,t[s+5],5,-701558691),o=w(o,n,e,i,t[s+10],9,38016083),i=w(i,o,n,e,t[s+15],14,-660478335),e=w(e,i,o,n,t[s+4],20,-405537848),n=w(n,e,i,o,t[s+9],5,568446438),o=w(o,n,e,i,t[s+14],9,-1019803690),i=w(i,o,n,e,t[s+3],14,-187363961),e=w(e,i,o,n,t[s+8],20,1163531501),n=w(n,e,i,o,t[s+13],5,-1444681467),o=w(o,n,e,i,t[s+2],9,-51403784),i=w(i,o,n,e,t[s+7],14,1735328473),n=M(n,e=w(e,i,o,n,t[s+12],20,-1926607734),i,o,t[s+5],4,-378558),o=M(o,n,e,i,t[s+8],11,-2022574463),i=M(i,o,n,e,t[s+11],16,1839030562),e=M(e,i,o,n,t[s+14],23,-35309556),n=M(n,e,i,o,t[s+1],4,-1530992060),o=M(o,n,e,i,t[s+4],11,1272893353),i=M(i,o,n,e,t[s+7],16,-155497632),e=M(e,i,o,n,t[s+10],23,-1094730640),n=M(n,e,i,o,t[s+13],4,681279174),o=M(o,n,e,i,t[s],11,-358537222),i=M(i,o,n,e,t[s+3],16,-722521979),e=M(e,i,o,n,t[s+6],23,76029189),n=M(n,e,i,o,t[s+9],4,-640364487),o=M(o,n,e,i,t[s+12],11,-421815835),i=M(i,o,n,e,t[s+15],16,530742520),n=N(n,e=M(e,i,o,n,t[s+2],23,-995338651),i,o,t[s],6,-198630844),o=N(o,n,e,i,t[s+7],10,1126891415),i=N(i,o,n,e,t[s+14],15,-1416354905),e=N(e,i,o,n,t[s+5],21,-57434055),n=N(n,e,i,o,t[s+12],6,1700485571),o=N(o,n,e,i,t[s+3],10,-1894986606),i=N(i,o,n,e,t[s+10],15,-1051523),e=N(e,i,o,n,t[s+1],21,-2054922799),n=N(n,e,i,o,t[s+8],6,1873313359),o=N(o,n,e,i,t[s+15],10,-30611744),i=N(i,o,n,e,t[s+6],15,-1560198380),e=N(e,i,o,n,t[s+13],21,1309151649),n=N(n,e,i,o,t[s+4],6,-145523070),o=N(o,n,e,i,t[s+11],10,-1120210379),i=N(i,o,n,e,t[s+2],15,718787259),e=N(e,i,o,n,t[s+9],21,-343485551),n=A(n,a),e=A(e,h),i=A(i,u),o=A(o,c)}return[n,e,i,o]}(function(t){if(0===t.length)return[];for(var r=8*t.length,n=new Uint32Array(g(r)),e=0;e<r;e+=8)n[e>>5]|=(255&t[e/8])<<e%32;return n}(t),8*t.length))})),I=function(t,r,n){var e=(t=t||{}).random||(t.rng||o)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){n=n||0;for(var i=0;i<16;++i)r[n+i]=e[i];return r}return c(e)};function R(t,r,n,e){switch(t){case 0:return r&n^~r&e;case 1:case 3:return r^n^e;case 2:return r&n^r&e^n&e}}function S(t,r){return t<<r|t>>>32-r}const E=y("v5",80,(function(t){var r=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=[];for(var i=0;i<e.length;++i)t.push(e.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,s=Math.ceil(o/16),a=new Array(s),h=0;h<s;++h){for(var u=new Uint32Array(16),c=0;c<16;++c)u[c]=t[64*h+4*c]<<24|t[64*h+4*c+1]<<16|t[64*h+4*c+2]<<8|t[64*h+4*c+3];a[h]=u}a[s-1][14]=8*(t.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<s;++f){for(var m=new Uint32Array(80),p=0;p<16;++p)m[p]=a[f][p];for(var d=16;d<80;++d)m[d]=S(m[d-3]^m[d-8]^m[d-14]^m[d-16],1);for(var l=n[0],v=n[1],y=n[2],g=n[3],A=n[4],_=0;_<80;++_){var b=Math.floor(_/20),w=S(l,5)+R(b,v,y,g)+A+r[b]+m[_]>>>0;A=g,g=y,y=S(v,30)>>>0,v=l,l=w}n[0]=n[0]+l>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+A>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),C="00000000-0000-0000-0000-000000000000",P=function(t){if(!a(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};(()=>{"use strict";n.r(e),n.d(e,{getUUID:()=>r});const t=n(22);function r(){return t.v4()}})(),module.exports=e})();