class a{static Api_set_uidAndToken(t,e){localStorage.setItem("uid",t),localStorage.setItem("token",e)}static Api_clear_uidAndToken(){localStorage.removeItem("uid"),localStorage.removeItem("token")}static Api_find_uidAndToken(){return{uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}}static Api_find_uid(){return localStorage.getItem("uid")}static Api_is_login(){return localStorage.getItem("uid")!=null&&localStorage.getItem("token")!=null}}export{a};
