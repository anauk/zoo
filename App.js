import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigation/AppNavigator";
import ApolloClient from 'apollo-boost';
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { ApolloProvider } from 'react-apollo';
// const client = new ApolloClient({
//     uri: "https://graphql.contentful.com/content/v1/spaces/7o9f50hic007",
//     credentials: "same-origin",
//     headers: {
//         Authorization: `Bearer 3BaMIAZpkUlog1l_lZCP7OjS7RcxJDDNqUAue7OpUDk`
//     }
//     /*link: createHttpLink({ uri: 'https://api.github.com/graphql' }),
//     cache: new InMemoryCache()*/
// });


const firebaseConfig = {
    apiKey: "AIzaSyBez85i-Lo2fmeFRMDWjL7vjFZ8Y6D-ZHM",
    authDomain: "zoo1-deccb.firebaseapp.com",
    databaseURL: "https://zoo1-deccb.firebaseio.com",
    projectId: "zoo1-deccb",
    storageBucket: "",
    messagingSenderId: "905890822555",
    appId: "1:905890822555:web:4c0bcdfdc1bbc0f1"
};
firebase.initializeApp(firebaseConfig);
console.log('firebase=======', firebase);
firebase.database().ref('cards').once('value', (data)=>{
    console.log(data.toJSON(), '=========data')
});
// firebase.database().ref('/cards/3').set(
//   {
//       title: "My works",
//       image: require('https://cdn.serif.com/affinity/img/photo/home/0619/og-affinity-photo-200520190824.jpg'),
//       logo: require('https://cdn.serif.com/affinity/img/photo/home/0619/og-affinity-photo-200520190824.jpg'),
//       caption: "Tttttt",
//       subtitle: "nhmjmmm"
//   }
// ).then(()=>{
//     console.log('-------INSERTED!')
// }).catch((e) => {
//     console.log(e)
// });
const initialState = {
    action: "",
    name: "",
    cards: ""
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "OPEN_MENU": return {action:"openMenu"};
        case "CLOSE_MENU": return {action:"closeMenu"};
        case "UPDATE_NAME": return {name: action.name};
        case "GET_ALL_CARDS": return {cards: action.cards};
        default: return state;
    }
};
const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <AppNavigator/>
    </Provider>
);

export default App;
