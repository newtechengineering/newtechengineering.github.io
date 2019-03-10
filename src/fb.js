let firebaseCache
const config = {
  apiKey: 'AIzaSyDAbCzfPN7WgBidmiHoU4oweLQk8J3a7bI',
  authDomain: 'new-tech-engineering.firebaseapp.com',
  databaseURL: 'https://new-tech-engineering.firebaseio.com',
  projectId: 'new-tech-engineering',
  storageBucket: 'new-tech-engineering.appspot.com',
  messagingSenderId: '866536837658',
}

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
// const databaseRef = firebase.database().ref()

// export const messagesRef = databaseRef.child('messages')
