import { loginAsyncAction } from "../../../redux/asyncActions/userAsyncActions";


const _init = {
    initializeState: (dispatch) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                try {
                    const { username, password } = JSON.parse(localStorage.getItem('authorizedUser'));;
                    if (username, password) {
                        dispatch(loginAsyncAction(username, password));
                    }
                } catch {
                    localStorage.setItem('users', JSON.stringify([]))
                    localStorage.setItem('authorizedUser', JSON.stringify({
                        username: "", password: "",
                    }))
                }
                resolve({ statusMessage: 'localStorage загружен' })
                // reject({ statusMessage: 'Произошла проблема с загрузкой данных, попробуйте войти позже' });
            }, 1000)
        })
    }
};

export default _init;