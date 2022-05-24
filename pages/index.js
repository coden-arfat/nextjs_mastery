import Head from 'next/head'
import Image from 'next/image'


function showData({data}){
  console.log(data)
}
export default function Home({data}) {
  console.log(data) 
  return (

    <>
    <h1>
      Data Fetching Using getServerSideProps
      
    </h1>
<p>
You should use getServerSideProps only if you need to render a page whose data must be fetched at request time. This could be due to the nature of the data or properties of the request (such as authorization headers or geo location). Pages using getServerSideProps will be server side rendered at request time and only be cached if cache-control headers are configured.
If you do not need to render the data during the request,then you should consider fetching data on the client side or getStaticProps.
</p>

    </>

  )}


export async function getServerSideProps(context){

const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 const data=await res.json()
 
 return {props:{data}}
}
// showData()