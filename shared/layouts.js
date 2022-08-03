import { Logo, Container, Column, TextLink, TitleAccent} from './styles'

export const ArticleLayout = ({name, children}) => {
  return (
      <>
        <Logo>
          <h1>Ad Taylor</h1>
        </Logo>
        <Container>
          <Column full>
            <h2><TitleAccent>Article:</TitleAccent> {name}</h2>
          </Column>
          <Column>
            {children}
          </Column>
        </Container>
     </>
  )
}
