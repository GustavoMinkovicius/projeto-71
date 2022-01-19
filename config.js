import firebase from "firebase";
require("@firebase/firestore");

//Cole sua Configuração do Firebase aqui
const firebaseConfig = {
    apiKey: "AIzaSyDPhIQHBf-Wae1SwR-p84M-BsC2sTmDh0Y",
    authDomain: "projeto-71-c504c.firebaseapp.com",
    projectId: "projeto-71-c504c",
    storageBucket: "projeto-71-c504c.appspot.com",
    messagingSenderId: "615045153216",
    appId: "1:615045153216:web:8d87f090c5957758d28825"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


