"use strict";(self.webpackChunk_brownfi_interface=self.webpackChunk_brownfi_interface||[]).push([[171],{67171:(e,t,n)=>{n.d(t,{WalletConnectModal:()=>c});var s=n(12150),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;class c{constructor(e){this.openModal=s.D8.open,this.closeModal=s.D8.close,this.subscribeModal=s.D8.subscribe,this.setTheme=s.lH.setThemeConfig,s.lH.setThemeConfig(e),s.mb.setConfig(((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))r.call(t,n)&&l(e,n,t[n]);return e})({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await n.e(526).then(n.bind(n,55526));const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),s.IN.setIsUiLoaded(!0)}}}},12150:(e,t,n)=>{n.d(t,{t6:()=>O,pb:()=>b,mb:()=>L,Ao:()=>y,vZ:()=>C,pV:()=>T,D8:()=>H,IN:()=>W,jL:()=>v,lH:()=>Z,dC:()=>X,gA:()=>B});Symbol();const s=Symbol();const a=Object.getPrototypeOf,o=new WeakMap,i=e=>e&&(o.has(e)?o.get(e):a(e)===Object.prototype||a(e)===Array.prototype),r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];o.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;const s=o.get(e);if((null==s?void 0:s[0])===t)return s[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(i,!0),o.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const s=Reflect.get(e,t),a={value:s,enumerable:!0,configurable:!0};if(d.has(s))r(s,!1);else if(s instanceof Promise)delete a.value,a.get=()=>n(s);else if(c.has(s)){const[e,t]=c.get(s);a.value=u(e,t(),n)}Object.defineProperty(i,t,a)})),i},p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:a=>{if(!l(a))throw new Error("object required");const o=p.get(a);if(o)return o;let r=h[0];const f=new Set,w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++h[0];r!==t&&(r=t,f.forEach((n=>n(e,t))))};let b=h[1];const m=e=>(t,n)=>{const s=[...t];s[1]=[e,...s[1]],w(s,n)},v=new Map,y=e=>{var t;const n=v.get(e);n&&(v.delete(e),null==(t=n[1])||t.call(n))},I=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),C={deleteProperty(e,t){const n=Reflect.get(e,t);y(t);const s=Reflect.deleteProperty(e,t);return s&&w(["delete",[t],n]),s},set(t,a,o,r){const u=Reflect.has(t,a),h=Reflect.get(t,a,r);if(u&&(e(h,o)||p.has(o)&&e(h,p.get(o))))return!0;y(a),l(o)&&(o=(e=>i(e)&&e[s]||null)(o)||o);let b=o;if(o instanceof Promise)o.then((e=>{o.status="fulfilled",o.value=e,w(["resolve",[a],e])})).catch((e=>{o.status="rejected",o.reason=e,w(["reject",[a],e])}));else{!c.has(o)&&n(o)&&(b=g(o));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(f.size){const n=t[3](m(e));v.set(e,[t,n])}else v.set(e,[t])})(a,e)}return Reflect.set(t,a,b,r),w(["set",[a],o,h]),!0}},E=t(I,C);p.set(a,E);const W=[I,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++h[1];return b===e||f.size||(b=e,v.forEach((t=>{let[n]=t;const s=n[1](e);s>r&&(r=s)}))),r},u,e=>{f.add(e),1===f.size&&v.forEach(((e,t)=>{let[n,s]=e;if(s)throw new Error("remove already exists");const a=n[3](m(t));v.set(t,[n,a])}));return()=>{f.delete(e),0===f.size&&v.forEach(((e,t)=>{let[n,s]=e;s&&(s(),v.set(t,[n]))}))}}];return c.set(E,W),Reflect.ownKeys(a).forEach((e=>{const t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(E[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),E};return[g,c,d,e,t,n,a,o,u,p,h]},[p]=u();function h(){return p(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function g(e,t,n){const s=c.get(e);let a;s||console.warn("Please use proxy object");const o=[],i=s[3];let r=!1;const l=i((e=>{o.push(e),n?t(o.splice(0)):a||(a=Promise.resolve().then((()=>{a=void 0,r&&t(o.splice(0))})))}));return r=!0,()=>{r=!1,l()}}var f=n(26382);let w;const b={ethereumClient:void 0,setEthereumClient(e){w=e},client(){if(w)return w;throw new Error("ClientCtrl has no client set")}},m=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),v={state:m,subscribe:e=>g(m,(()=>e(m))),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();const[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},y={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>y.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return y.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,n){if(y.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let s=e;s.includes("://")||(s=e.replaceAll("/","").replaceAll(":",""),s=`${s}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);return`${s}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,n){if(!y.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let s=e;s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);return`${s}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(y.W3M_VERSION,"2.4.7")},getWalletRouterData(){var e;const t=null==(e=v.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=null==(e=v.state.data)?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag:()=>typeof location<"u"&&new URLSearchParams(location.search).has(y.W3M_PREFER_INJECTED_URL_FLAG)},I=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),C={state:I,subscribe:e=>g(I.events,(()=>e(function(e,t){const n=c.get(e);n||console.warn("Please use proxy object");const[s,a,o]=n;return o(s,a(),t)}(I.events[I.events.length-1])))),initialize(){I.enabled&&typeof crypto<"u"&&(I.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){I.connectedWalletId=e},click(e){if(I.enabled){const t={type:"CLICK",name:e.name,userSessionId:I.userSessionId,timestamp:Date.now(),data:e};I.events.push(t)}},track(e){if(I.enabled){const t={type:"TRACK",name:e.name,userSessionId:I.userSessionId,timestamp:Date.now(),data:e};I.events.push(t)}},view(e){if(I.enabled){const t={type:"VIEW",name:e.name,userSessionId:I.userSessionId,timestamp:Date.now(),data:e};I.events.push(t)}}},E=h({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),W={state:E,subscribe:e=>g(E,(()=>e(E))),setChains(e){E.chains=e},setStandaloneChains(e){E.standaloneChains=e},setStandaloneUri(e){E.standaloneUri=e},getSelectedChain(){const e=b.client().getNetwork().chain;return e&&(E.selectedChain=e),E.selectedChain},setSelectedChain(e){E.selectedChain=e},setIsStandalone(e){E.isStandalone=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setWalletConnectVersion(e){E.walletConnectVersion=e},setIsPreferInjected(e){E.isPreferInjected=e},setIsAuth(e){E.isAuth=e}},j=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),L={state:j,subscribe:e=>g(j,(()=>e(j))),setConfig(e){var t,n,s,a;C.initialize(),W.setStandaloneChains(e.standaloneChains),W.setIsStandalone(Boolean(null==(t=e.standaloneChains)?void 0:t.length)||Boolean(e.enableStandaloneMode)),W.setIsAuth(Boolean(e.enableAuthMode)),W.setIsCustomMobile(Boolean(null==(n=e.mobileWallets)?void 0:n.length)),W.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),W.setWalletConnectVersion(null!=(a=e.walletConnectVersion)?a:1),W.state.isStandalone||(W.setChains(b.client().chains),W.setIsPreferInjected(b.client().isInjectedProviderInstalled()&&y.isPreferInjectedFlag())),e.defaultChain&&W.setSelectedChain(e.defaultChain),y.setWeb3ModalVersionInStorage(),Object.assign(j,e)}},A=h({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),O={state:A,subscribe:e=>g(A,(()=>e(A))),getAccount(){const e=b.client().getAccount();A.address=e.address,A.isConnected=e.isConnected},async fetchProfile(e,t){var n;try{A.profileLoading=!0;const s=t??A.address,a=null==(n=W.state.chains)?void 0:n.find((e=>1===e.id));if(s&&a){const t=await b.client().fetchEnsName({address:s,chainId:1});if(t){const n=await b.client().fetchEnsAvatar({name:t,chainId:1});n&&await e(n),A.profileAvatar=n}A.profileName=t}}finally{A.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=b.client().getNetwork(),{tokenContracts:n}=L.state;let s;t&&n&&(s=n[t.id]),A.balanceLoading=!0;const a=e??A.address;if(a){const e=await b.client().fetchBalance({address:a,token:s});A.balance={amount:e.formatted,symbol:e.symbol}}}finally{A.balanceLoading=!1}},setAddress(e){A.address=e},setIsConnected(e){A.isConnected=e},resetBalance(){A.balance=void 0},resetAccount(){A.address=void 0,A.isConnected=!1,A.profileName=void 0,A.profileAvatar=void 0,A.balance=void 0}},S="https://explorer-api.walletconnect.com";async function P(e,t){const n=new URL(e,S);return n.searchParams.append("projectId",L.state.projectId),Object.entries(t).forEach((e=>{let[t,s]=e;s&&n.searchParams.append(t,String(s))})),(await fetch(n)).json()}const M={getDesktopListings:async e=>P("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>P("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>P("/w3m/v1/getInjectedListings",e),getAllListings:async e=>P("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${S}/w3m/v1/getWalletImage/${e}?projectId=${L.state.projectId}`,getAssetImageUrl:e=>`${S}/w3m/v1/getAssetImage/${e}?projectId=${L.state.projectId}`};var k=Object.defineProperty,N=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const _=y.isMobile(),x=h({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),T={state:x,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=L.state;if("NONE"===e||"ALL"===t&&!e)return x.recomendedWallets;if(y.isArray(e)){const t={recommendedIds:e.join(",")},{listings:n}=await M.getAllListings(t),s=Object.values(n);s.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id))),x.recomendedWallets=s}else{const{standaloneChains:e,walletConnectVersion:n,isAuth:s}=W.state,a=e?.join(","),o=y.isArray(t),i={page:1,sdks:s?"auth_v1":void 0,entries:y.RECOMMENDED_WALLET_AMOUNT,chains:a,version:n,excludedIds:o?t.join(","):void 0},{listings:r}=_?await M.getMobileListings(i):await M.getDesktopListings(i);x.recomendedWallets=Object.values(r)}return x.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var n in t||(t={}))U.call(t,n)&&R(e,n,t[n]);if(N)for(var n of N(t))D.call(t,n)&&R(e,n,t[n]);return e})({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:s}=L.state,{recomendedWallets:a}=x;if("ALL"===s)return x.wallets;t.search||(a.length?t.excludedIds=a.map((e=>e.id)).join(","):y.isArray(n)&&(t.excludedIds=n.join(","))),y.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),W.state.isAuth&&(t.sdks="auth_v1");const{page:o,search:i}=e,{listings:r,total:l}=_?await M.getMobileListings(t):await M.getDesktopListings(t),c=Object.values(r),d=i?"search":"wallets";return x[d]={listings:[...x[d].listings,...c],total:l,page:o??1},{listings:c,total:l}},async getInjectedWallets(){const{listings:e}=await M.getInjectedListings({}),t=Object.values(e);return x.injectedWallets=t,x.injectedWallets},getWalletImageUrl:e=>M.getWalletImageUrl(e),getAssetImageUrl:e=>M.getAssetImageUrl(e),resetSearch(){x.search={listings:[],total:0,page:1}}},V=h({pairingEnabled:!1,pairingUri:"",pairingError:!1}),B={state:V,subscribe:e=>g(V,(()=>e(V))),setPairingUri(e){V.pairingUri=e},setPairingError(e){V.pairingError=e},setPairingEnabled(e){V.pairingEnabled=e}},$=h({open:!1}),H={state:$,subscribe:e=>g($,(()=>e($))),open:async e=>new Promise((t=>{const{isStandalone:n,isUiLoaded:s,isDataLoaded:a,isPreferInjected:o,selectedChain:i}=W.state,{isConnected:r}=O.state,{enableNetworkView:l}=L.state;if(n||B.setPairingEnabled(!0),n)W.setStandaloneUri(e?.uri),W.setStandaloneChains(e?.standaloneChains),v.reset("ConnectWallet");else if(null!=e&&e.route)v.reset(e.route);else if(r)v.reset("Account");else if(l)v.reset("SelectNetwork");else{if(o)return b.client().connectConnector("injected",i?.id).catch((e=>console.error(e))),void t();v.reset("ConnectWallet")}const{pairingUri:c}=B.state;if(s&&a&&(n||c||r))$.open=!0,t();else{const e=setInterval((()=>{const n=W.state,s=B.state;n.isUiLoaded&&n.isDataLoaded&&(n.isStandalone||s.pairingUri||r)&&(clearInterval(e),$.open=!0,t())}),200)}})),close(){$.open=!1}};var K=Object.defineProperty,z=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const q=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Z={state:q,subscribe:e=>g(q,(()=>e(q))),setThemeConfig(e){const{themeMode:t,themeVariables:n}=e;t&&(q.themeMode=t),n&&(q.themeVariables=((e,t)=>{for(var n in t||(t={}))F.call(t,n)&&G(e,n,t[n]);if(z)for(var n of z(t))J.call(t,n)&&G(e,n,t[n]);return e})({},n))}},Q=h({open:!1,message:"",variant:"success"}),X={state:Q,subscribe:e=>g(Q,(()=>e(Q))),openToast(e,t){Q.open=!0,Q.message=e,Q.variant=t},closeToast(){Q.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=f.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))}}]);
//# sourceMappingURL=171.f355cd77.chunk.js.map