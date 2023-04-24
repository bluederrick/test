const signup = document.querySelector('#btn2');
const password = document.querySelector('#psswd');
const email = document.querySelector('#email');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const submitBtn = document.querySelector('#submit');



const postData = async (url, payload) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                mode: "no-cors",
            },

            body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log(error)
    }

}


submitBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    if (username.value == "") {
        console.log("enter the fields")
    }
    const payLoad = {
        password: password.value,
        fullname: fullname.value,
        username: username.value,
        email: email.value
    }

    console.log(payLoad);
    let url = 'http://localhost:5100/user-Signup'

    const user = await postData(url, payLoad)
    console.log({ user })
})
















