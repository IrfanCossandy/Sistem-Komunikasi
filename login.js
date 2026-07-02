import { db } from "./firebase.js";
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

const daftarCollection = [
    "users",
    "Users 2",
    "Users 3",
    "Users 4",
    "Users 5",
    "Users 6",
    "Users 7",
    "Users 8",
    "Users 9",
    "Users 10",
    "Users 11",
    "Users 12",
    "Users 13",
    "Users 14"
];

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    error.textContent = "";

    try {

        let user = null;

        for (const namaCollection of daftarCollection) {

            console.log("Membaca Collection :", namaCollection);

            const snapshot = await getDocs(collection(db, namaCollection));
            console.log("Collection :", namaCollection);
console.log("Jumlah Document :", snapshot.size);

snapshot.forEach((doc) => {
    console.log(doc.id);
    console.log(doc.data());
});

            console.log("Jumlah Document :", snapshot.size);

            snapshot.forEach((doc) => {

                const data = doc.data();

                console.log(data);

                if (
                    data.username === username &&
                    data.password === password
                ) {

                    user = {
                        id: doc.id,
                        ...data
                    };

                }

            });

            if (user) break;

        }

        if (user) {

            localStorage.setItem("user", JSON.stringify(user));

            alert("Login Berhasil");

            window.location.href = "dashboard.html";

        } else {

            error.textContent = "Username atau Password Salah";

        }

    } catch (err) {

        console.error(err);

        error.textContent = "Gagal mengambil data dari Firestore";

    }

});