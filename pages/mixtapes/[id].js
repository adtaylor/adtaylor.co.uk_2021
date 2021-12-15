import { Amplify, API, withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import { useRouter } from 'next/router'
import awsExports from '../../src/aws-exports'
import { getMixtape, listMixtapes } from '../../src/graphql/queries'

import { Logo, Container, Column, TextLink, TitleAccent, extLink, spotifyPlayerStyles } from '../../shared/styles'


Amplify.configure({ ...awsExports, ssr: true })

export async function getStaticPaths() {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listMixtapes })
  const paths = data.listMixtapes.items.map((mixtape) => ({
    params: { id: mixtape.id },
  }))

  console.log('staticPaths')
  console.log(data, paths)

  return {
    fallback: true,
    paths,
  }
}

export async function getStaticProps({ params }) {
  console.log('staticProps', params)

  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({
    query: getMixtape,
    variables: {
      id: params.id
    },
  })

  console.log(data)
  return {
    props: {
      mixtape: data.getMixtape,
    },
  }
}

function renderTracks(tracks) { 
  return tracks.map((track) =>
    <li key={track.name}>
      <TextLink css={extLink} href={track.url} title={`A link to spotify song {track.name} - {track.artist}`}>{track.name} - {track.artist}</TextLink>
    </li>
  );
}


export default function MixtapeComponent({ mixtape }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip</h1>
      </div>
    )
  }

  const {name, description, images, tracks} = mixtape.playlist
  console.log( images[0].url )
  return (
      <>
        <Logo img={images[0].url}>
          <h1>Ad Taylor</h1>
        </Logo>
        <Container>
          <Column full>
            <h2><TitleAccent>Mixtape:</TitleAccent> {name}</h2>
          </Column>
          <Column>
          
          <p>{description}</p>

          <iframe src={`https://open.spotify.com/embed/playlist/${mixtape.spotify_id}`}
              width="100%" height="380" frameBorder="0" allowFullScreen css={spotifyPlayerStyles}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </Column>
          <Column>
            <h3><TitleAccent>Tracks</TitleAccent></h3>
            <ul>
              {renderTracks(tracks)}
            </ul>
          </Column>
        </Container>
     </>
  )
}
