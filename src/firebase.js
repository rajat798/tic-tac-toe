// const firebaseConfig = {
//     apiKey: "AIzaSyD1BUsv6RFadmR0emaIz377YQ8a2TZyj6Y",
//     authDomain: "tic-tac-toe-a7f05.firebaseapp.com",
//     projectId: "tic-tac-toe-a7f05",
//     storageBucket: "tic-tac-toe-a7f05.appspot.com",
//     messagingSenderId: "405458784243",
//     appId: "1:405458784243:web:2bf0d7578f5ceccb7e8c86"
//   };

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD1BUsv6RFadmR0emaIz377YQ8a2TZyj6Y",
        authDomain: "tic-tac-toe-a7f05.firebaseapp.com",
        projectId: "tic-tac-toe-a7f05",
        storageBucket: "tic-tac-toe-a7f05.appspot.com",
        messagingSenderId: "405458784243",
        appId: "1:405458784243:web:2bf0d7578f5ceccb7e8c86"
})


const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()

// export {db, auth, storage} 
export default db;