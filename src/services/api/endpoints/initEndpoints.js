const _init = {
    initializeState: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const authorizedUser = JSON.parse(localStorage.getItem('authorizedUser'));
                    if (authorizedUser.username, authorizedUser.password) {
                        resolve({ statusMessage: 'localStorage загружен', authorizedUser })
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
    },
};

export default _init;