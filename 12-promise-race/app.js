"use strict";

async function request(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(JSON.stringify({ code: response.status, message }));
    }
    return response;
}

async function randomPromiseResult(user) {
    if (!(user?.username && user?.password)) {
        throw new Error("it's not user!");
    }
    const { username, password } = user;
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    };
    const response = await request('https://dummyjson.com/auth/login', options);
    return await response.json();
}

async function getData(length = 10) {
    try {
        const response = await request(`https://dummyjson.com/users`);
        const { users } = await response.json();
        return Array.from({ length }, (_, index) => randomPromiseResult(users[index]));
    } catch (e) {
        console.error(e);
    }
}

async function promiseRace(array) {
    return new Promise((resolve, reject) => {
        array.map((promise) =>
            Promise.resolve(promise).then(
                (value) => resolve(value),
                (error) => reject(error),
            ),
        );
    });
}

(async () => {
    const data = await getData();
    const res = await promiseRace(data);
    console.log(res);
    console.log(res.username);

})();



