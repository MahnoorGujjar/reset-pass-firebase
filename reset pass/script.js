 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-lFuR1JkxV-gT8TZZmx-SMLXQELIKnR8",
    authDomain: "sign-up-log-in-form-2771e.firebaseapp.com",
    projectId: "sign-up-log-in-form-2771e",
    storageBucket: "sign-up-log-in-form-2771e.firebasestorage.app",
    messagingSenderId: "462822975889",
    appId: "1:462822975889:web:d6f9d6d6acd3afdca35230",
    measurementId: "G-K9WFK7SQ7K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth =getAuth(app)
  const provider = new GoogleAuthProvider();


  //signup 

  document.getElementById('signup-btn')?.addEventListener('click' , (e)=>{
  e.preventDefault();

  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth , email , password)
  .then(()=>{
    alert('signup successfully!');
    window.location.href = 'welcome.html'
  })
  .catch((error)=>{
    alert(error.message);
  });
  });


 //login

 document.getElementById("login-btn")?.addEventListener('click' , (e)=>{
    e.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth , email , password)
    .then(()=>{
        alert('logoin succcessfully')
        window.location.href = "welcome.html"
    })
    .catch((error)=>{
        alert('error.message')
    });
 });


 //continue with google

 document.getElementById('google-btn')?.addEventListener('click' , (e)=>{
    e.preventDefault();

    signInWithPopup(auth , provider)
    .then(()=>{
        alert('login successfully!')
        window.location.href = "welcome.html"
    })
    .catch((error)=>{
        alert(error.message)
    });
 });

 //logout

 document.getElementById('logout-btn')?.addEventListener('click' , (e)=>{
    e.preventDefault();

    signOut(auth)
    .then(()=>{
        alert('logout successfully!')
        window.location.href = "index.html"
    })
    .catch((error)=>{
        alert(error.message)
    });
 });


 // show user's email on welcome page

 onAuthStateChanged(auth , (user) => {
    if(user && window.location.pathname.includes('welcome.html')){
        document.getElementById('user-email').textContent = user.email;
    }else if (!user && window.location.pathname.includes('welcome.html')){
        window.location.href = 'index.html';
    }
 });

