import { Amplify, API, withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import { useRouter } from 'next/router'
import awsExports from '../../src/aws-exports'
import { getPost, listPosts } from '../../src/graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })

export async function getStaticPaths() {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listPosts })
  const paths = data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }))

  return {
    fallback: true,
    paths,
  }
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({
    query: getPost,
    variables: {
      id: params.id,
    },
  })

  return {
    props: {
      post: data.getPost,
    },
  }
}

export default function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip</h1>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{post.title} – Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{post.title}</h1>

        <p>{post.content}</p>
      </main>
    </div>
  )
}
