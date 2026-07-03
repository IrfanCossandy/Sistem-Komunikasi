import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.getElementById("loginForm");
form.addEventListener("submit", loginUser);

async function loginUser(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const usersCol = collection(db, "users");
        const snapshot = await getDocs(usersCol);
        const users = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));

        const user = users.find(u =>
            u.username.toLowerCase() === username.toLowerCase() &&
            u.password === password
        );

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            alert("Login Berhasil");
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("error").innerHTML = "Username atau Password Salah";
        }

    } catch (err) {
        console.log(err);
        document.getElementById("error").innerHTML = "Tidak dapat terhubung ke database";
    }
}