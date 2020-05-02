// import firebase from 'firebase';

// class Fire {

//     constructor(){
//         this.init()
//         this.checkAuth()
//     }

//  init= ()=>{
//     if (!firebase.apps.length) {
//       //avoid re-initializing
//       firebase.initializeApp({
//         apiKey: 'AIzaSyAzclOJusoyXpvyB9GHpk4_3ddwtOm-36w',
//         authDomain: 'spotafinder-c42a6.firebaseapp.com',
//         databaseURL: 'https://spotafinder-c42a6.firebaseio.com',
//         projectId: 'spotafinder-c42a6',
//         storageBucket: 'spotafinder-c42a6.appspot.com',
//         messagingSenderId: '655792265694'
//       });
//     }
//   };
//   checkAuth = () => {
//       firebase.auth().onAuthStateChanged(user => {
//           if(!user){
//               firebase.auth().signInAnonymously();
//           }
//       });
//   };
//     send = messages =>{
//         messages.forEach(item=>{
//             const message ={
//                 text: item.text,
//                 timestamp: firebase.database.ServerValue.TIMESTAMP,
//                 user:item.user
//             }
//             this.db.push(message);
//         });
//     };

//     parse = message =>{
//         const {user,text,timestamp} = message.val()
//         const {key:_id} = message
//         const createdAt = new Date(timestamp);

//         return{
//             _id,
//             createdAt,
//             text,
//             user
//         };
//     };
//     get = callback =>{
//         this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
//     };
//     off(){
//         this.db.off()
//     }
//     get db(){
//         return firebase.database().ref("messages");
//     };
//     get vid(){
//         return(firebase.auth().currentUser ||{}).vid;
//     }
// }

// export default new Fire();