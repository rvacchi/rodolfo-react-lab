import { gql } from '@apollo/client';
import {useQuery} from '@apollo/client';
import { useEffect, useState } from 'react';
import { client } from './lib/apollo';


//npm i tailwindcss postcss autoprefixer -D
//npx tailwindcss init -p

//https://rseat.in/lab-graphcms

//https://app.graphcms.com/clone/1d7442bf5a434389904c44d54a041b01?name=Ignite%20Lab%2002

// graphQL - query/mutation
//npm i @apollo/client graphql


const GET_LESSONS_QUERY = gql`
  query {
  lessons {
    id
    title
    teacher{
      name
    }  
  }
}
`

interface Lesson{
  id:string;
  title:string;
}

function App1() {
  
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data);
  //   })
  // }, [])

  //const { data} = useQuery(GET_LESSONS_QUERY)

  const { data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  console.log(data);

  return (
    <div>
      <h1>Hello </h1>
      <ul>
        {
          data?.lessons.map(lesson => {
              return <li key={lesson.id}>{lesson.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
