<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCkzHrPGQswcw5YFGffVcEIaP-BGHfnuNU",
    authDomain: "ramshackle-622af.firebaseapp.com",
    projectId: "ramshackle-622af",
    storageBucket: "ramshackle-622af.appspot.com",
    messagingSenderId: "384268954336",
    appId: "1:384268954336:web:6a482ff85bfa9961263e85",
    measurementId: "G-YE60764FHV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
