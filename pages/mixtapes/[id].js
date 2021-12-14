import { Amplify, API, withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import { useRouter } from 'next/router'
import awsExports from '../../src/aws-exports'
import { getMixtape, listMixtapes } from '../../src/graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })

export async function getStaticPaths() {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listMixtapes })
  const paths = data.listMixtapes.items.map((mixtape) => ({
    params: { id: mixtape.id },
  }))

  return {
    fallback: true,
    paths,
  }
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({
    query: getMixtape,
    variables: {
      id: params.id,
    },
  })

  return {
    props: {
      mixtape: data.getMixtape,
    },
  }
}

export default function Mixtape({ mixtape }) {
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
        <title>{mixtape.title} – Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Spotify: {mixtape.spotify_id}</h1>

      </main>
    </div>
  )
}
