(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e7edf7c"],{"1b81":function(e,t,n){e.exports=n.p+"img/dapps.0b88c1ea.svg"},"29f8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-message-container"},[n("signature-modal-modal",{ref:"signatureModal",attrs:{signature:e.signature}}),n("interface-container-title",{attrs:{title:e.$t("common.signMessage")}}),n("div",{staticClass:"content-container"},[n("div",{staticClass:"send-form"},[n("p",[e._v(e._s(e.$t("interface.signMessageDesc")))]),n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.txSideMenuMessage")))])])]),n("div",{staticClass:"the-form"},[n("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}]},[e._v("\n          "+e._s(e.errors.first("message"))+"\n        ")])])]),n("div",{staticClass:"submit-button-container"},[n("div",{staticClass:"buttons"},[n("button",{class:[e.message.length>0?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.signMessage}},[e._v("\n          "+e._s(e.$t("common.sign"))+"\n        ")])]),n("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("2f62"),c=n("ce96"),o=n("539d"),l=n("55c1"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{ref:"signatureModal",staticClass:"bootstrap-modal",attrs:{"hide-footer":"",centered:"",title:"Signature"}},[n("div",{staticClass:"modal-contents"},[n("div",[n("div",{staticClass:"copy-container"},[n("h4",[e._v("Signed Message:")]),n("div",{staticClass:"copy-buttons"},[n("span",{on:{click:e.copy}},[e._v(e._s(e.$t("common.copy")))])])]),n("textarea",{ref:"signedMess",staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.signature}}),n("div",{staticClass:"button-container"},[n("button",{staticClass:"submit-button large-round-button-green-filled clickable",on:{click:function(t){return e.copy("main")}}},[e._v("\n            Copy\n          ")])])])])])],1)},u=[],f={props:{signature:{type:String,default:""}},methods:{copy:function(e){this.$refs.signedMess.select(),document.execCommand("copy"),c["d"].responseHandler("Copied!",c["d"].INFO),"main"===e&&this.$refs.signatureModal.hide()}}},m=f,p=(n("dfb9"),n("2877")),g=Object(p["a"])(m,d,u,!1,null,"3bb632bd",null),v=g.exports;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={name:"SignMessage",components:{"interface-bottom-text":o["a"],"interface-container-title":l["a"],"signature-modal-modal":v},data:function(){return{message:"",signature:""}},computed:h({},Object(r["b"])(["account","web3"])),methods:{signMessage:function(){var e=this;this.web3.eth.sign(this.message,this.account.address).then(function(t){e.signature=JSON.stringify({address:e.account.address,msg:e.message,sig:t,version:"3",signer:e.account.isHardware?e.account.identifier:"MEW"},null,2),e.$refs.signatureModal.$refs.signatureModal.show()}).catch(function(e){c["d"].responseHandler(e,!1)})},copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),c["d"].responseHandler("Copied",c["d"].INFO)},deleteInputText:function(){this.signature="",this.message=""}}},O=y,_=(n("ce9a"),Object(p["a"])(O,a,i,!1,null,"4d5dae99",null)),w=_.exports;n.d(t,"default",function(){return w})},"2c51":function(e,t,n){"use strict";t["a"]={tabs:[{name:"dashboard",onlineOnly:!1,routes:["/interface/dashboard","/interface"],icons:{active:n("5416"),inactive:n("f85d")},titleKey:"interface.dashboard",children:[]},{name:"send-transaction",onlineOnly:!1,routes:["/interface/send-transaction","/interface/send-offline","/interface/send-offline/generate-info","/interface/send-offline/generate-tx","/interface/send-offline/send-tx","/interface/nft-manager"],icons:{active:n("e909"),inactive:n("534d")},titleKey:"interface.txSideMenuTitle",children:[{name:"send-transaction",routes:["/interface/send-transaction"],icons:{active:"",inactive:""},titleKey:"common.sendTx"},{name:"send-offline",routes:["/interface/send-offline","/interface/send-offline/generate-info","/interface/send-offline/generate-tx","/interface/send-offline/send-tx"],icons:{active:"",inactive:""},titleKey:"common.offline"},{name:"nft-manager",onlineOnly:!0,routes:["/interface/nft-manager"],icons:{active:"",inactive:""},titleKey:"common.ntfManager"}]},{name:"dapps",onlineOnly:!0,routes:["/interface/dapps","/interface/dapps/manage-ens","/interface/dapps/manage-ens/auction","/interface/dapps/manage-ens/bid","/interface/dapps/manage-ens/owned","/interface/dapps/manage-ens/reveal","/interface/dapps/manage-ens/forbidden","/interface/dapps/manage-ens/finalize","/interface/dapps/manage-ens/manage","/interface/dapps/manage-ens/fifs","/interface/dapps/manage-ens/claim","/interface/dapps/manage-ens/dns-error","/interface/dapps/manage-ens/no-txt-setup","/interface/dapps/manage-ens/transfer-registrar","/interface/dapps/manage-ens/create-commitment","/interface/dapps/manage-ens/permanent-registration","/interface/dapps/domain-sale","/interface/dapps/schedule-transaction","/interface/dapps/maker-dai"],icons:{active:n("9f99"),inactive:n("1b81")},titleKey:"common.dapps",children:[]},{name:"contracts",onlineOnly:!0,routes:["/interface/interact-with-contract","/interface/deploy-contract"],icons:{active:n("97e2"),inactive:n("d40c")},titleKey:"interface.txSideMenuContract",children:[{name:"interact-with-contract",routes:["/interface/interact-with-contract"],icons:{active:"",inactive:""},titleKey:"common.interactWcontract"},{name:"deploy-contract",routes:["/interface/deploy-contract"],icons:{active:"",inactive:""},titleKey:"common.depContract"}]},{name:"messages",onlineOnly:!1,routes:["/interface/sign-message","/interface/verify-message"],icons:{active:n("722d"),inactive:n("4561")},titleKey:"interface.txSideMenuMessage",children:[{name:"sign-message",routes:["/interface/sign-message"],icons:{active:"",inactive:""},titleKey:"common.signMessage"},{name:"verify-message",routes:["/interface/verify-message"],icons:{active:"",inactive:""},titleKey:"common.verifyMessage"}]}]}},4561:function(e,t,n){e.exports=n.p+"img/message.62d92682.svg"},"534d":function(e,t,n){e.exports=n.p+"img/send.5c17b4bb.svg"},5416:function(e,t,n){e.exports=n.p+"img/dashboard-active.2cf649ea.svg"},"55c1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-container-title"},[n("div",{staticClass:"desktop-title"},[n("h2",[e._v(e._s(e.title)+" "),e._t("default")],2),e._t("right"),n("div",{staticClass:"side-menu-button"},[n("round-button",{attrs:{title:e.$t("common.menu")},nativeOn:{click:function(t){return e.toggleSideMenu(t)}}})],1)],2),n("div",{staticClass:"mobile-title"},[n("mobile-menu",{attrs:{title:e.title}})],1)])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"round-button"},[n("button",[e._v(e._s(e.title))])])},r=[],c={props:{title:{type:String,default:function(){return{}}}},data:function(){return{}}},o=c,l=(n("5dc5"),n("2877")),d=Object(l["a"])(o,s,r,!1,null,"575ca241",null),u=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-mobile-menu"},[n("div",{staticClass:"mobile-menu-container"},[n("b-dropdown",{attrs:{text:e.title}},e._l(e.tabData,function(t,a){return n("div",{key:t.name+a,staticClass:"dropdown-menu-item",class:t.onlineOnly&&!e.online?"disabled-item":""},[n("div",{staticClass:"cat-title",class:e.isTabActive(t.routes)?"active":"",on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[n("p",[e._v(e._s(e.$t(t.titleKey)))]),t.children.length?n("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}):e._e()]),t.children.length?n("div",{staticClass:"sub-menu"},e._l(t.children,function(t,a){return n("b-dropdown-item",{key:t.name+a,class:e.isTabActive(t.routes)?"active":"",on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[e._v("\n            "+e._s(e.$t(t.titleKey))+"\n          ")])}),1):e._e()])}),0),e._m(0)],1)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"menu-small-title"},[e._v("\n      MENU "),n("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],p=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),g=n("2c51"),v=n("2f62");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(p["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={props:{title:{type:String,default:""}},data:function(){return{tabData:g["a"].tabs}},computed:h({},Object(v["b"])(["online"])),methods:{isTabActive:function(e){return e.includes(this.$route.path)},tabAction:function(e){e.hasOwnProperty("children")&&0!==e.children.length||this.$router.push({path:e.routes[0]})}}},O=y,_=(n("ad40"),Object(l["a"])(O,f,m,!1,null,null,null)),w=_.exports,x={components:{"round-button":u,"mobile-menu":w},props:{title:{type:String,default:""}},data:function(){return{}},methods:{toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")}}},C=x,j=(n("ffab"),Object(l["a"])(C,a,i,!1,null,"3a726a99",null)),M=j.exports;n.d(t,"a",function(){return M})},"5dc5":function(e,t,n){"use strict";var a=n("d3c8"),i=n.n(a);i.a},"722d":function(e,t,n){e.exports=n.p+"img/message-active.c96fee31.svg"},"97e2":function(e,t,n){e.exports=n.p+"img/contract-active.fb040b49.svg"},"988f":function(e,t,n){},"9f20":function(e,t,n){},"9f99":function(e,t,n){e.exports=n.p+"img/dapps-active.19387e9d.svg"},ad40:function(e,t,n){"use strict";var a=n("9f20"),i=n.n(a);i.a},c699:function(e,t,n){},ce9a:function(e,t,n){"use strict";var a=n("988f"),i=n.n(a);i.a},d3c8:function(e,t,n){},d40c:function(e,t,n){e.exports=n.p+"img/contract.e3d5f51a.svg"},da63:function(e,t,n){},dfb9:function(e,t,n){"use strict";var a=n("c699"),i=n.n(a);i.a},e909:function(e,t,n){e.exports=n.p+"img/send-active.9046d05b.svg"},f85d:function(e,t,n){e.exports=n.p+"img/dashboard.d841dabb.svg"},ffab:function(e,t,n){"use strict";var a=n("da63"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-5e7edf7c.d6bfeb84.js.map