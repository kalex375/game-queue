import routers from "@/router/router";

export async function useLoginUser(email, password) {
    if (email === 'admin@tv.tv' && password === 'admin1') {
        routers.push({name: 'dashboard'})
    } else {
        alert('Неверный пароль или логин!')
    }
}