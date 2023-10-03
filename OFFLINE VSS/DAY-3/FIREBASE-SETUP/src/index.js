import {initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js';
import { getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';

const firebaseApp = initializeApp({
    // const firebaseConfig = {
        apiKey: "AIzaSyAoKWX-P8_u-c_Z4BYWtAw238vjMKAn-Bs",
        authDomain: "pm-752cd.firebaseapp.com",
        projectId: "pm-752cd",
        storageBucket: "pm-752cd.appspot.com",
        messagingSenderId: "173888593051",
        appId: "1:173888593051:web:f09ba2f40a44dcd8953a3e"
    //   };
});
const auth = getAuth(firebaseApp);



//Detect auth state


onAuthStateChanged(auth,user =>{
    if(user != null){
        console.log('logged in!');
    }else{
        console.log('No user');
    }
});