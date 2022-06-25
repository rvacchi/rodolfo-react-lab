import { ApolloProvider, gql } from '@apollo/client';
import {useQuery} from '@apollo/client';
import { useEffect, useState } from 'react';
import { Router } from './Router';
import { client } from './lib/apollo';
import { Events } from './pages/Events';
import { BrowserRouter } from 'react-router-dom';


//npm i tailwindcss postcss autoprefixer -D
//npx tailwindcss init -p

//https://rseat.in/lab-graphcms

//https://app.graphcms.com/clone/1d7442bf5a434389904c44d54a041b01?name=Ignite%20Lab%2002

// graphQL - query/mutation
//npm i @apollo/client graphql

//https://www.graphql-code-generator.com/docs/guides/react


//npm install @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D

// npm install graphql
// npm install @graphql-codegen/cli -D

//https://www.graphql-code-generator.com/docs/guides/react#apollo-and-urql

//npm run codegen (esse e comando que gera as classes tipadas)

function App() {
  
  return (
    <div>
       <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>       
      </ApolloProvider>      
    </div>
  )
}

export default App
