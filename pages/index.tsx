import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing'},
  { title: 'React Testing', excerpt: 'Learn React Testing'},
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Letterway Blog</title>
        <link rel="icon" href="" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {posts.map((posts, index) => (
          <div>
            {posts.title}
            {posts.excerpt}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
