import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navbar from '../componets/Navbar'
export default function Home({data}) {
//   const [data,setData] = useState()
//   const som=[{
//     "userId": 1,
//     "id": 2,
//     "title": "dolorem dolore est ipsam",
//     "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 23,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 83,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },{
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// }]
// useEffect(()=>{
//   const se= async()=>{
//     await setData(som)
//     await console.log(data)
//   }
//   se()
// },[])
  return (

    <>
    <Navbar/>
    <div className='continer'>
    <h1>
        All Posts 
      </h1>
      <div className='all_post'>
        {data&&data.slice(0,5).map((post,key)=>{
          return (
            <>
            <div className='post' id={key}>
              <h2>
                {post.title}
              </h2>
              <p>
              {/* {post.body} */}

              </p>
              <Link href={`/post/${post.id}`}>Read More</Link>
            </div>
            </>
          )
        })}
      </div>

    </div>

    </>

  )}


export async function getServerSideProps(context){

const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
 const data=await res.json()
 
 return {props:{data}}
}