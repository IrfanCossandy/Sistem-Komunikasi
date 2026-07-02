const form = document.getElementById("loginForm");

form.addEventListener("submit", loginUser);

async function loginUser(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    try{

        const response = await fetch("http://localhost:3001/users");

        const users = await response.json();

        const user = users.find(
            u =>
                u.username.toLowerCase() === username.toLowerCase() &&
                u.password === password
        );

        if(user){

            localStorage.setItem("user", JSON.stringify(user));

            alert("Login Berhasil");

            window.location.href = "index.html";

        }else{

            document.getElementById("error").innerHTML =
            "Username atau Password Salah";

        }

    }

    catch(error){

        console.log(error);

        document.getElementById("error").innerHTML =
        "Tidak dapat terhubung ke database";

    }

}