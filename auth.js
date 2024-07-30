
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCeLr7kC5bnNo7mjAfvYDqJgWRJVDb6F4s",
    authDomain: "first-project-af4c3.firebaseapp.com",
    projectId: "first-project-af4c3",
    storageBucket: "first-project-af4c3.appspot.com",
    messagingSenderId: "319772603861",
    appId: "1:319772603861:web:5e7dd3f950f9f0267a795c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)


  function SingUpUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth,email,password).then((userCredintail)=>{
        console.log(userCredintail.user.uid);
    })

  }


  const singUp = document.getElementById('singup')
  singUp.addEventListener('click',SingUpUser)


  function SinginUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth,email,password).then((userCredintail)=>{
        console.log(userCredintail.user.uid);
        console.log("loggin")
    })

  }

  const Singin = document.getElementById('singinuser')
  Singin.addEventListener('click',SinginUser)

