import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyC3AUP5u5iQq6LPdDf68xM82hMFeC0vM3A",
    authDomain: "gold-design-db-6479f.firebaseapp.com",
    databaseURL: "https://gold-design-db-6479f-default-rtdb.firebaseio.com",
    projectId: "gold-design-db-6479f",
    storageBucket: "gold-design-db-6479f.appspot.com",
    messagingSenderId: "411521916559",
    appId: "1:411521916559:web:285c12fb66b196d323dafa"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function submitForm(e) {
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;
    set(ref(db, 'messages/' + Date.now()), {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(() => {
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
        alert("Good!");
    }).catch((error) => {
        console.error("Error: ", error);
    });
};
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#submit").addEventListener("click", submitForm);
});
