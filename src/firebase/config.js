import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyD5xuL3obyE0ehpH94Chd_ugbDSjqDcEgU',
    authDomain: 'todo-list-7fff3.firebaseapp.com',
    projectId: 'todo-list-7fff3'
  })
}

export default firebase