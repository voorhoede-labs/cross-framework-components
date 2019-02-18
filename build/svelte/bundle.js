!function(){"use strict";function t(){}function e(t,e){for(var s in e)t[s]=e[s];return t}function s(t,e){for(var s in e)t[s]=1;return t}function i(t,e){t.appendChild(e)}function n(t){return document.createElement(t)}function o(t){return document.createTextNode(t)}function r(t,e,s,i){t.addEventListener(e,s,i)}function a(t,e,s,i){t.removeEventListener(e,s,i)}function c(t,e,s){t.classList[s?"add":"remove"](e)}function l(){return Object.create(null)}function h(t){t._lock=!0,f(t._beforecreate),f(t._oncreate),f(t._aftercreate),t._lock=!1}function f(t){for(;t&&t.length;)t.shift()()}var u={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var s=t in this._handlers&&this._handlers[t].slice();if(s)for(var i=0;i<s.length;i+=1){var n=s[i];if(!n.__calling)try{n.__calling=!0,n.call(this,e)}finally{n.__calling=!1}}},on:function(t,e){var s=this._handlers[t]||(this._handlers[t]=[]);return s.push(e),{cancel:function(){var t=s.indexOf(e);~t&&s.splice(t,1)}}},set:function(t){this._set(e({},t)),this.root._lock||h(this.root)},_recompute:t,_set:function(t){var s=this._state,i={},n=!1;for(var o in t=e(this._staged,t),this._staged={},t)this._differs(t[o],s[o])&&(i[o]=n=!0);n&&(this._state=e(e({},s),t),this._recompute(i,this._state),this._bind&&this._bind(i,this._state),this._fragment&&(this.fire("state",{changed:i,current:this._state,previous:s}),this._fragment.p(i,this._state),this.fire("update",{changed:i,current:this._state,previous:s})))},_stage:function(t){e(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}};var p={choosePlatform(t){this.dispatchEvent(new CustomEvent("share-to",{detail:t,bubbles:!0})),this.set({show:!1})}};class m extends HTMLElement{constructor(h={}){super(),function(t,e){t._handlers=l(),t._slots=l(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}(this,h),this.refs={},this._state=e({show:!1},h.data),this._intro=!0,this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="<style>.wrapper{position:relative}.platform{position:absolute;left:50%;transform:translate(-50%, -100%)}img{width:50%;height:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}button{width:3rem;height:3rem;border-radius:50%;background-color:teal;border:none;position:relative;cursor:pointer;outline:none}button:hover{background-color:blue}button>*{pointer-events:none}ul{list-style:none;padding:0;margin:0;position:absolute;top:0}li{position:absolute;top:0}.list-item{opacity:1;transition:opacity 0.25s ease-in-out, transform 0.25s ease-in-out}.wrapper:not(.wrapper--show) .list-item{transform:translate(0) !important;opacity:0}.toggle{z-index:1}.wrapper--show .toggle{background-color:blue}</style>",this._fragment=function(e,s){var l,h,f,u,p,m,d,_,g,w,b,v,k,y,L,N,E;function T(t){e.set({show:!s.show})}function C(t){e.choosePlatform("facebook")}function H(t){e.choosePlatform("twitter")}function M(t){e.choosePlatform("linkedin")}function x(t){e.choosePlatform("whatsapp")}return{c(){l=n("div"),(h=n("strong")).textContent="Svelte",f=o("\n\t"),(u=n("button")).innerHTML='<img src="/images/share.svg" alt="share">',p=o("\n\t"),m=n("ul"),d=n("li"),(_=n("button")).innerHTML='<img src="/images/facebook.svg" alt="facebook">',g=o("\n\t\t"),w=n("li"),(b=n("button")).innerHTML='<img src="/images/twitter.svg" alt="twitter">',v=o("\n\t\t"),k=n("li"),(y=n("button")).innerHTML='<img src="/images/linkedin.svg" alt="linkedin">',L=o("\n\t\t"),N=n("li"),(E=n("button")).innerHTML='<img src="/images/whatsapp.svg" alt="whatsapp">',this.c=t,h.className="platform",r(u,"click",T),u.className="toggle",r(_,"click",C),_.dataset.platform="facebook",d.className="list-item",r(b,"click",H),b.dataset.platform="twitter",w.className="list-item",r(y,"click",M),y.dataset.platform="linkedin",k.className="list-item",r(E,"click",x),E.dataset.platform="whatsapp",N.className="list-item",m.className="list",l.className="wrapper",c(l,"wrapper--show",s.show)},m(t,s){!function(t,e,s){t.insertBefore(e,s)}(t,l,s),i(l,h),i(l,f),i(l,u),i(l,p),i(l,m),i(m,d),i(d,_),i(m,g),i(m,w),i(w,b),i(m,v),i(m,k),i(k,y),i(m,L),i(m,N),i(N,E),e.refs.wrapper=l},p(t,e){s=e,t.show&&c(l,"wrapper--show",s.show)},d(t){var s;t&&(s=l).parentNode.removeChild(s),a(u,"click",T),a(_,"click",C),a(b,"click",H),a(y,"click",M),a(E,"click",x),e.refs.wrapper===l&&(e.refs.wrapper=null)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Array.from(this.refs.wrapper.querySelectorAll(".list-item")).forEach((t,e)=>{t.style.transform=`translateY(${3.25*(e+1)}em)`,t.style.zIndex=`-${e+1}`})}).call(this),this.fire("update",{changed:s({},this._state),current:this._state})}),this._fragment.c(),this._fragment.m(this.shadowRoot,null),h.target&&this._mount(h.target,h.anchor)}static get observedAttributes(){return["show"]}get show(){return this.get().show}set show(t){this.set({show:t})}attributeChangedCallback(t,e,s){this.set({[t]:s})}connectedCallback(){h(this)}}e(m.prototype,u),e(m.prototype,p),e(m.prototype,{_mount(t,e){t.insertBefore(this,e)}}),customElements.define("social-share-svelte",m)}();
//# sourceMappingURL=bundle.js.map
