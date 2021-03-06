import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const darkColour = '#312F44'
export const lightColour = '#FFFFFF'
export const accentColour = '#bf4d40'
const xsmlBP = '400px'
const smlBP = '600px'

export const darkBlockStyles = css`
  background-color: ${darkColour};
  color: ${lightColour};
`

export const lightBlockStyles = css`
  background-color: ${lightColour};
  color: ${darkColour};
`

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: "Domine", "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
        font-size: 14px;
        line-height: 1.6;

        ${darkBlockStyles}
      }

      h1, h2, h3, h4, h5 {
        font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
        font-weight: 800;
        line-height: normal;
      }

      ul, ol {
        margin-left: 0;
        padding-left: 0;
      }
    `}
  />
)

export const Logo = styled.header`

  &:before {
    content: " ";
    position: absolute;
    z-index: 0;
    top: 6rem;
    left: 0;
    right: 0;
    border-top: 4rem solid ${lightColour};
  }

  & h1 {
    ${lightBlockStyles}
    color: ${props => props.img ? lightColour : darkColour };
    z-index: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin: 3rem 2rem;
    padding: 1rem 1rem 0.5rem;
    height: 15rem;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;
    line-height: 0.9;
    letter-spacing: 1rem;

    background-image: ${props => props.img ? `url(${props.img})` : 'none'};
    background-size: cover;

    @media (min-width: ${xsmlBP}) {
      font-size: 4rem;
    }

    @media (min-width: ${smlBP}) {
      width: 23rem;
    }
  }
`

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${smlBP}) {
  }
`

export const Column = styled.div`
  flex: 1 1 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  

  @media (min-width: ${smlBP}) {
    max-width:  ${props => props.full ? '100%' : '38rem'};
    flex: 1 1 ${props => props.full ? '100%' : '45%'};
  }
`

const underlineVars = {
  width: '8px',
  blockWidth: '20px',
  color: 'hsla(6, 50%, 50%, 0.5)',
  colorHover: 'hsla(6, 50%, 50%, 1)',
  transition: '0.5s'
}

export const spotifyPlayerStyles = css`
  margin: 2rem 0
`

export const extLink = css`
 &:after {
    content: "???";
    font-size: 2rem;
    line-height: 0.5rem;
 }
`

export const TextLink = styled.a`
  color: ${lightColour};
  font-weight: 800;
  text-decoration: none;
  background-image: linear-gradient(90deg, ${darkColour}, ${darkColour}),
    linear-gradient(90deg, ${underlineVars.color}, ${underlineVars.color});
  background-size: ${underlineVars.blockWidth} ${underlineVars.width},
    100% ${underlineVars.width};
  background-repeat: no-repeat;
  background-position-x: calc(${underlineVars.blockWidth} * -1), 0;
  background-position-y: 100%;
  transition: background-position-x ${underlineVars.transition};

  &:hover {
    background-image: linear-gradient(90deg, ${darkColour}, ${darkColour}),
    linear-gradient(
      90deg,
      ${underlineVars.colorHover},
      ${underlineVars.colorHover}
    );
    background-position-x: calc(100% + ${underlineVars.blockWidth}), 0;
  } 
`

export const TitleAccent = styled.span`
  color: ${accentColour};
  font-family: "Domine", "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
  display: block;

`
