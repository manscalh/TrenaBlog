import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useIndex from '../data/hooks/pages/useIndex.page'
import PostList from '../ui/components/PostList/PostList'
import styles from '../ui/styles/Home.module.css'

export default function Home(){

  const { posts } = useIndex();

  return (
    <div>
      <Head>
        <title>TreinaBlog</title>
        <meta
          name='description'
          content='Genereated by create next app'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostList posts={posts}/>
      </main>
    </div>
  )
}

