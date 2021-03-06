import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import { listMixtapes } from '../src/graphql/queries'
import Head from 'next/head'
import { Logo, Container, Column, TextLink, extLink } from '../shared/styles'

Amplify.configure({ ...awsExports, ssr: true })

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req })
  const response = await SSR.API.graphql({ query: listMixtapes })

  return {
    props: {
      mixtapes: response.data.listMixtapes.items,
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Ad Taylor</title>
      </Head>
      <Logo>
        <h1>Ad Taylor</h1>
      </Logo>
      <Container>
        <Column>
          <h2>A mildly narcasistic page about me.</h2>

          <p>{"I'm a Head of Developement, former JS lead and hobby collector."}</p>
          <p>{"I've build this little site to house future projects and playgrounds."}</p>

          <p><TextLink css={extLink} href="https://www.linkedin.com/in/adam-taylor-0a2ab45b" title="A link to Ad Taylors LinkedIn profile">LinkedIn</TextLink></p>
          <p><TextLink css={extLink} href="https://github.com/adtaylor" title="A link to Ad Taylors Github profile">Github</TextLink></p>
        </Column>
      </Container>
    </>
  )
}
