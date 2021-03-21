import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4OnuZA8QA-VaWuiHKdt4RFDOkwEDbykI",
    authDomain: "chatty-9112c.firebaseapp.com",
    projectId: "chatty-9112c",
    storageBucket: "chatty-9112c.appspot.com",
    messagingSenderId: "397512256672",
    appId: "1:397512256672:web:a1e9c70d5f92ccddd2edc5"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text });
};
