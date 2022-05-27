import next from 'next'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../componets/Navbar'
import { redirect } from 'next/dist/server/api-utils'

function post({data}) {
  return (

    <>
    <Navbar/>
    <div className='continer'>
    <h1>
        Post
      </h1>
      <div className='all_post'>
        {data&&data.map((post,key)=>{
          return (
            <>
            <div className='post' id={key}>
              <h2>
                {post.title}
              </h2>
              <p>
              {post.body}

              </p>
              <Link href='/'>Back</Link>
            </div>
            </>
          )
        })}
      </div>

    </div>

    </>

  )}


export  async function getServerSideProps(context,res){
   
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.post}`)
  console.log(rest.statusCode)
  const errorCode = rest.ok ? false : 404;

if (errorCode) {
  console.log(errorCode)
  return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }
}
  const dataJs = await rest.json()
  const data =[dataJs]
  return { props: {'data':data} }
}

export default post