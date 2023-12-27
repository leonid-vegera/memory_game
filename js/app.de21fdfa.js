(function(){"use strict";var e={2804:function(e,t,n){var a=n(9963),l=n(6252),r=n(3577),i=n.p+"img/homer-simpson.2fee946a.gif";const s=e=>((0,l.dD)("data-v-47cc270c"),e=e(),(0,l.Cn)(),e),c={class:"app"},o=s((()=>(0,l._)("img",{class:"app__logo",alt:"homer logo",src:i},null,-1))),u={class:"app__title"},d={class:"app__section"},f={class:"app__description"},g={class:"app__toggler"};function p(e,t,n,a,i,s){const p=(0,l.up)("ToggleContainer"),v=(0,l.up)("BoardPanel");return(0,l.wg)(),(0,l.iD)("div",c,[o,(0,l._)("h1",u,(0,r.zw)(a.state.text.title),1),(0,l._)("section",d,[(0,l._)("p",f,(0,r.zw)(a.state.text.description),1),(0,l._)("div",g,[(0,l.Wm)(p)])]),(0,l.Wm)(v,(0,r.vs)((0,l.F4)(a.state.text)),null,16)])}const v={class:"board"},m={class:"board__description"},_={class:"board__description"},h=["disabled"];function b(e,t,n,a,i,s){const c=(0,l.up)("board-cell");return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",{class:(0,r.C_)(["board__field",a.getBoardClasses])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.cells,(e=>((0,l.wg)(),(0,l.j4)(c,{key:`item-${e.id}`,cell:e,"game-status":a.gameStatus,onSelectCell:t[0]||(t[0]=e=>a.selectCell(e))},null,8,["cell","game-status"])))),128))],2),(0,l._)("div",m,[(0,l.Uk)((0,r.zw)(n.difficultText)+" ",1),(0,l._)("strong",null,(0,r.zw)(a.difficult),1)]),(0,l._)("div",_,[(0,l.Uk)((0,r.zw)(n.winsText)+" ",1),(0,l._)("strong",null,(0,r.zw)(a.wins),1)]),(0,l._)("button",{class:"board__start",onClick:t[1]||(t[1]=(...e)=>a.startGame&&a.startGame(...e)),disabled:a.toDisableStartButton},(0,r.zw)(n.startText),9,h)])}function T(e,t,n,a,i,s){return(0,l.wg)(),(0,l.iD)("div",{class:(0,r.C_)(["cell",a.getBoardCellClasses]),onClick:t[0]||(t[0]=e=>s.select(n.cell.id))},null,2)}const w={EMPTY:0,FILLED:1},C=3,k=15,I=2e3,x={NONE:0,PREVIEW:1,STARTED:2,WIN:3,FAIL:4};var S={name:"BoardCell",props:{cell:{type:Object,required:!0},gameStatus:{type:Number,required:!1,default:x.NONE}},setup(e){const t=(0,l.Fl)((()=>{let t="";return e.cell.value!==w.FILLED||e.gameStatus!==x.PREVIEW&&!e.cell.clicked?!0===e.cell.clicked&&e.gameStatus===x.FAIL?t+"error":t:t+"active"}));return{getBoardCellClasses:t}},methods:{select(e){this.gameStatus===x.STARTED&&this.$emit("selectCell",e)}}},E=n(3744);const y=(0,E.Z)(S,[["render",T],["__scopeId","data-v-a20f7ff6"]]);var D=y,O=(n(7658),n(2262));function F(e){const t=(0,O.iH)(C),n=(0,O.iH)([]),a=(0,O.iH)(0),r=function(){n.value=[];for(let t=0;t<e;t++)n.value.push({id:t,clicked:!1,value:w.EMPTY})};return(0,l.YP)(t,(e=>{e>k&&(t.value=k),e<C&&(t.value=C)})),(0,l.wF)(r),{difficult:t,cells:n,initField:r,wins:a}}function L(e,t,n,a,r){function i(e,t){return~~(Math.random()*(t-e))}function s(){r.value=x.PREVIEW;for(let a=0;a<e.value;a++){const e=i(0,t);n.value[e].value!==w.FILLED?n.value[e].value=w.FILLED:a--}setTimeout((()=>{r.value=x.STARTED}),I)}const c=(0,l.Fl)((()=>r.value===x.PREVIEW||r.value===x.WIN));function o(){a(),s()}return{startGame:o,toDisableStartButton:c}}function N(e,t,n,a,r){const i=()=>{t.value=x.FAIL,n.value-=1,setTimeout((()=>{a()}),I)},s=()=>{t.value=x.WIN,setTimeout((async()=>{n.value+=1,r.value+=1,await(0,l.Y3)(),a()}),I)},c=()=>{const t=e.value.findIndex((e=>e.clicked&&e.value===w.EMPTY));if(t>-1)return void i();const n=e.value.findIndex((e=>!e.clicked&&e.value===w.FILLED));-1===n&&s()},o=t=>{const n=e.value.findIndex((e=>e.id===t));n>-1&&!e.value[n].clicked&&(e.value[n].clicked=!0),c()};return{selectCell:o}}var B={name:"Board-panel",components:{BoardCell:D},props:{difficultText:{type:String},winsText:{type:String},startText:{type:String}},setup(){const e=36,t=(0,O.iH)(x.NONE),{difficult:n,cells:a,initField:r,wins:i}=F(e),{startGame:s,toDisableStartButton:c}=L(n,e,a,r,t),{selectCell:o}=N(a,t,n,s,i),u=(0,l.Fl)((()=>{let e="board__field";return t.value===x.WIN?e+"--success":t.value===x.FAIL?e+"--error":e}));return{difficult:n,cells:a,cellsNumber:e,initField:r,startGame:s,gameStatus:t,GAME_STATUS:x,toDisableStartButton:c,selectCell:o,wins:i,getBoardClasses:u}}};const P=(0,E.Z)(B,[["render",b],["__scopeId","data-v-96a7cdfe"]]);var W=P;const A={title:"Гра на пам'ять",description:"Запам'ятай всі клітинки з Гомером і спробуй їх знайти",difficultText:"Важкість",winsText:"Перемоги",startText:"Почати"};var j=A;const R={title:"Memory game",description:"Remember all the cells with Homer and try to find them",difficultText:"Difficulty",winsText:"Wins",startText:"Start"};var z=R;let Y=JSON.parse(localStorage.getItem("checked"))?"ua":"en";const G=()=>{const e=(e=Y)=>{let t;switch(e){case"en":t=z;break;case"ua":t=j;break;default:t=z}return t};return{translate:e}},H=e=>((0,l.dD)("data-v-db53fb36"),e=e(),(0,l.Cn)(),e),J={class:"toggle-container"},M={class:"toggle-container__switch"},V=["checked"],Z=H((()=>(0,l._)("span",{class:"toggle-container__slider round"},null,-1)));function q(e,t,n,a,r,i){return(0,l.wg)(),(0,l.iD)("div",J,[(0,l._)("label",M,[(0,l._)("input",{class:"toggle-container__input",type:"checkbox",checked:a.isChecked,onChange:t[0]||(t[0]=(...e)=>a.changeLanguage&&a.changeLanguage(...e))},null,40,V),Z])])}var U={name:"ToggleContainer",setup(){const e=(0,l.f3)("langChanger"),t=JSON.parse(localStorage.getItem("checked"))||!1;return{changeLanguage:e,isChecked:t}}};const $=(0,E.Z)(U,[["render",q],["__scopeId","data-v-db53fb36"]]);var K=$,Q={name:"App",components:{ToggleContainer:K,BoardPanel:W},setup(){const{translate:e}=G(),t=(0,O.qj)({lang:JSON.parse(localStorage.getItem("checked"))?"ua":"en",isInputChecked:!1,text:{title:e().title,description:e().description,difficultText:e().difficultText,winsText:e().winsText,startText:e().startText}});function n(){localStorage.setItem("checked",JSON.stringify(!t.isInputChecked)),t.lang=t.isInputChecked?"en":"ua",t.isInputChecked=!t.isInputChecked}return(0,l.JJ)("langChanger",n),(0,l.YP)((()=>t.lang),(n=>{const a=e(n);for(const e in t.text)t.text[e]=a[e]}),{deep:!0}),{state:t}}};const X=(0,E.Z)(Q,[["render",p],["__scopeId","data-v-47cc270c"]]);var ee=X;(0,a.ri)(ee).mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],l=e[u][1],r=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var o=l();void 0!==o&&(t=o)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,l,r]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/memory_game/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,r,i=a[0],s=a[1],c=a[2],o=0;if(i.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(c)var u=c(n)}for(t&&t(a);o<i.length;o++)r=i[o],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunkmemory_game"]=self["webpackChunkmemory_game"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2804)}));a=n.O(a)})();
//# sourceMappingURL=app.de21fdfa.js.map