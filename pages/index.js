import Head from 'next/head'
import Image from 'next/image'

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
export default function Home() {
  return (

    <>
    <h1>
      Data Fetching Using getServerSideProps
      
    </h1>


    </>

  )
}
