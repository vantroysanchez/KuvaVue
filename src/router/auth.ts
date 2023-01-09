import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const isAuthenticated = async (to, from, next) => {

    console.log(cookies.get("token"))
    if(cookies.get("token") === null || cookies.get("token") === "401"){
        await next('/login')
    }
    else{
        await next()
    }   
    
}

export default isAuthenticated