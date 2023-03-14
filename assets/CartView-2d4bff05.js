import{_ as k,R as M,M as w,r as $,o as d,c as n,a as t,b as p,w as b,F as y,g as D,e as f,t as l,d as x}from"./index-971be370.js";import{S as m}from"./sweetalert2.all-281a79b7.js";const{VITE_URL:r,VITE_PATH:h}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={data(){return{cartData:[],dalModal:"",delData:{},delId:"",disabled:!1}},components:{RouterLink:M},methods:{getCartData(){this.$http.get(`${r}/v2/api/${h}/cart`).then(o=>{console.log(o),this.cartData=o.data.data}).catch(o=>{console.log(o)})},openDelModal(o){this.deldata={},this.delModal.show(),this.delId=o.id,this.delData=o.product,console.log(this.delData)},openDelAllModal(){this.delData={},this.delId="",this.delData.title="全部商品",this.delModal.show()},delCart(){this.delId?this.$http.delete(`${r}/v2/api/${h}/cart/${this.delId}`).then(o=>{console.log(o),this.delData={},this.delId="",this.delModal.hide(),this.getCartData(),m.fire(`${o.data.message}`)}).catch(o=>{console.log(o)}):this.$http.delete(`${r}/v2/api/${h}/carts`).then(o=>{console.log(o),this.delData={},this.delId="",this.delModal.hide(),this.getCartData(),m.fire(`${o.data.message}`)}).catch(o=>{console.log(o)})},changeQty(o,s){console.log(o,s),this.disabled=!0;const g={product_id:s,qty:o};this.$http.put(`${r}/v2/api/${h}/cart/${s}`,{data:g}).then(c=>{console.log(c),m.fire(`${c.data.message}`),this.disabled=!1,this.getCartData()}).catch(c=>{console.log(c)})}},mounted(){this.getCartData(),this.delModal=new w(this.$refs.delModal)}},V={class:"container p-0"},R={class:"row"},E={key:0,class:"text-center my-30"},T=t("div",{class:"d-flex justify-content-center"},[t("h2",{class:"mb-10 border-bottom border-3 border-primary"},"尚未收錄課程")],-1),L={key:1,class:"table align-middle"},B={class:"text-center"},S=t("th",{scope:"col"},"課程名稱",-1),A=t("th",{scope:"col"},"授課老師",-1),N=t("th",{scope:"col"},"總課程數",-1),q=t("th",{scope:"col"},"購買數量",-1),O=t("th",{scope:"col"},"價格",-1),P={scope:"col"},U={class:"fs-5"},F={class:"dropdown"},H=["disabled"],Q={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},j=["onClick"],z=["onClick"],G={class:"text-center"},J=t("td",null,null,-1),K=t("td",null,null,-1),W=t("td",null,null,-1),X=t("td",null,null,-1),Y={class:"align-bottom"},Z={class:"border-bottom border-primary border-3 mb-0"},tt={class:"ms-1"},ot=t("button",{type:"button",class:"btn btn-primary fs-3"},"結帳",-1),et={class:"modal",tabindex:"-1",ref:"delModal"},st={class:"modal-dialog"},lt={class:"modal-content"},at={class:"modal-header"},dt={key:0,class:"modal-title"},nt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ct=t("div",{class:"modal-body"},[t("p",null,"確定移出購物車?")],-1),it={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function ht(o,s,g,c,a,i){const _=$("RouterLink");return d(),n("div",V,[t("div",R,[a.cartData.total===0?(d(),n("div",E,[T,p(_,{to:"teachers",class:"btn btn-primary"},{default:b(()=>[f("立即前往課程列表")]),_:1})])):(d(),n("table",L,[t("thead",null,[t("tr",B,[S,A,N,q,O,t("th",P,[t("button",{type:"button",class:"btn btn-primary rounded-pill",onClick:s[0]||(s[0]=e=>i.openDelAllModal())},"清空購物車")])])]),t("tbody",null,[(d(!0),n(y,null,D(a.cartData.carts,(e,v)=>(d(),n("tr",{key:v,class:"text-center"},[t("td",null,[p(_,{to:`/class/${e.product.id}`},{default:b(()=>[t("h2",U,l(e.product.title),1)]),_:2},1032,["to"])]),t("td",null,l(e.product.unit),1),t("td",null,l(e.product.origin_price*e.qty)+"堂",1),t("td",null,[t("div",F,[t("button",{disabled:a.disabled,class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},l(e.qty),9,H),t("ul",Q,[(d(),n(y,null,D(20,(u,C)=>t("li",{key:C},[t("a",{onClick:_t=>i.changeQty(u,e.id),class:"dropdown-item"},l(u),9,j)])),64))])])]),t("td",null,l(e.total),1),t("td",null,[t("button",{type:"button",class:"btn btn-primary rounded-pill",onClick:u=>i.openDelModal(e)},"刪除",8,z)])]))),128)),t("tr",G,[J,K,W,X,t("td",Y,[t("h2",Z,[f("總金額:NT "),t("span",tt,l(a.cartData.total),1)])]),t("td",null,[p(_,{to:"/Order"},{default:b(()=>[ot]),_:1})])])])]))]),t("div",et,[t("div",st,[t("div",lt,[t("div",at,[a.delData.title?(d(),n("h5",dt,l(a.delData.title),1)):x("",!0),nt]),ct,t("div",it,[rt,t("button",{type:"button",class:"btn btn-primary",onClick:s[1]||(s[1]=e=>i.delCart(a.delData.id))},"確認移出")])])])],512)])}const bt=k(I,[["render",ht]]);export{bt as default};
