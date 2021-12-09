import Head from 'next/head'
import Image from 'next/image'
import { Container, TextLink, extLink } from '../shared/styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ad Taylor</title>
      </Head>

      <Container>
        <h2>A mildly narcasistic page about me.</h2>

        <p>I'm a Head of Developement, former JS lead and hobby collector.</p>
        <p>I've build this little site to house future projects and playgrounds.</p>

        <p><TextLink css={extLink} href="" title="A link to Ad Taylors LinkedIn profile">LinkedIn</TextLink></p>
        <p><TextLink css={extLink} href="https://github.com/adtaylor" title="A link to Ad Taylors Github profile">Github</TextLink></p>
      </Container>
    </>
  )
}
