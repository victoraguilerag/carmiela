import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  uri: "https://carmiela-back-rsitbcpfwz.now.sh/graphql"
});

client.query({
  query: gql`
    {
      articulo (id: 1){
        titulo
        previa
      }
    }
  `
}).then(result => console.log('Bienvenido'))

// fetch('http://localhost:3001/graphql?query={articulos{ titulo previa}}')
//   .then(res =>res.json())
//   .then(res => console.log(res))

// const store = createStore(
//   reducerArticulos,
//   Api,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
//
// function reducerArticulos (state = Api ,action) {
//   switch (action.type) {
//     default:
//       return state
//   }
// }


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
  , document.getElementById('root'));
registerServiceWorker();
