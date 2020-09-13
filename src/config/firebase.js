import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAl0qGxzd8yBF6OPO42u6y4pSgWp8GRcUU",
    authDomain: "ebooks-9d630.firebaseapp.com",
    databaseURL: "https://ebooks-9d630.firebaseio.com",
    projectId: "ebooks-9d630",
    storageBucket: "ebooks-9d630.appspot.com",
    messagingSenderId: "952274376619",
    appId: "1:952274376619:web:98e4db9847961077a1a4ee",
    measurementId: "G-7W4JLNMZ88"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;