// задержка задается только для показа иммитация запроса
const delayValue = 1000;


const user = {

    /**
     * login request addressed to local storage where located the full information of users
     * @param {string} login the value of login or email
     * @param {string} password the value of user's password
     * @returns Promise<Object>
     */
    login: (login, password) => new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));
            const currentUser = users.find(user =>
                user.username === login ||
                user.email === login
            );
            if (currentUser) {
                if (currentUser.password === password) {
                    resolve({ ...currentUser, statusMessage: "Вы успешно авторизовались" })
                }
                reject({ statusMessage: "Имя пользователя и/или пароль введены неверно" });
            }
            reject({ statusMessage: "Пользователя под таким именем или почтой не зарегистрировано" })
        }, delayValue)
    }),

    /**
     * 
     * @returns 
     */
    logout: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ statusMessage: "Вы вышли из аккаунта" })
            // reject({statusMessage: "Что-то пошло не так, пока вы пытались выйти из аккаунта"})
        }, delayValue)
    }),

    /**
     * func for signing up user into local storage
     * @param {string} username valid name that will use user
     * @param {string} email valid like an email
     * @param {string} password TODO: need to be reworked with hashing and other stuff
     * @returns Promise<Object>
     */
    register: (username, email, password) => new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));
            const existedUsername = users.find(user => user.username === username);
            const existedEmail = users.find(user => user.email === email);
            if (!existedUsername) {
                if (!existedEmail) {
                    users.push({
                        id: String(Date.now()),
                        username,
                        email,
                        password
                    });
                    localStorage.setItem('users', JSON.stringify(users));
                    resolve({ statusMessage: "Вы успешно зарегистрировались" });
                }
                reject({ statusMessage: "Такой адрес электронной почты уже зарегистрирован" })
            }
            reject({ statusMessage: "Такое имя пользователя уже занято, пожалуйста используйте другое" })
        }, delayValue)
    }),

    // TODO:
    deleteUser: (username, email, password) => new Promise((resolve, reject) => {
        setTimeout(() => {

        }, delayValue)
    })
};

export default user;