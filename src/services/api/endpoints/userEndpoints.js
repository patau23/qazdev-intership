// задержка задается только для показа иммитация запроса
const delayValue = 1000;

const user = {

    login: (login, password) => new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));
            const currentUser = users.find(user =>
                user.username === login ||
                user.email === login
            );
            if (currentUser) {
                if (currentUser.password === password) {
                    resolve({ ...currentUser, statusMessage: "You have successfully logged in" })
                }
                reject({ statusMessage: "Username and/or password entered incorrectly" });
            }
            reject({ statusMessage: "User under this name or email is not registered" })
        }, delayValue)
    }),

    logout: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ statusMessage: "You are logged out" })
            // reject({statusMessage: "Что-то пошло не так, пока вы пытались выйти из аккаунта"})
        }, delayValue)
    }),

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
                        password,
                        cities: ['New York', 'Moscow', 'Beijing', 'Paris', 'London'],
                    })
                    localStorage.setItem('users', JSON.stringify(users))
                    resolve({ statusMessage: "You have successfully registered" })
                }
                reject({ statusMessage: "This email address is already registered" })
            }
            reject({ statusMessage: "This username is already taken, please use another one" })
        }, delayValue)
    }),

    // обращение к localStorage чтобы внести новый список городов
    saveUserCitiesArray: (userID, city) => new Promise((resolve, reject) => {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user =>
            user.id === userID
        );
        console.log(users, currentUser);
        currentUser.cities = [...currentUser.cities, city];
        console.log(currentUser);
        localStorage.setItem('users', JSON.stringify(users))

        resolve({ statusMessage: "cities are saved for current user", city })
    })

};

export default user;