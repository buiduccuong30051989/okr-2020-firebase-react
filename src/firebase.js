import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA1cBe_tgEzmOiouUZhZ93HhmXUSioMWE4',
  authDomain: 'speedy-crane-293504.firebaseapp.com',
  projectId: 'speedy-crane-293504',
  storageBucket: 'speedy-crane-293504.appspot.com',
  messagingSenderId: '619828609915',
  appId: '1:619828609915:web:260559863239e4768af3de',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
