import{_ as u,l,r as c,o as i,c as _,b as t,w as s,e,F as h,a as r}from"./index-fc9697ab.js";const{VITE_URL:d}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p={data(){return{}},methods:{checkLogin(){this.$http.post(`${d}v2/api/user/check`).then(()=>{}).catch(()=>{alert("請重新登入"),this.$router.push("/login")})}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)ssozrToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=n,this.checkLogin()},components:{RouterView:l}},m=r("h1",null,"這是後台",-1),f=r("p",null,"點選要進行的業務",-1),k=r("hr",null,null,-1);function V(n,$,R,w,E,x){const o=c("router-link"),a=c("RouterView");return i(),_(h,null,[m,f,t(o,{to:"/userorders"},{default:s(()=>[e("訂單管理")]),_:1}),e(" | "),t(o,{to:"/userprodeuts"},{default:s(()=>[e("產品管理")]),_:1}),e(" | "),t(o,{to:"/voucher"},{default:s(()=>[e("優惠券管理")]),_:1}),e(" | "),t(o,{to:"/article"},{default:s(()=>[e("文章列表")]),_:1}),e(" | "),k,t(a)],64)}const v=u(p,[["render",V]]);export{v as default};
