import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.4rem;
  background-color: ${props => props.theme.bgBody};
  color: ${props => props.theme.text};
}
`
export const lightTheme = {
  bgBody: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
  elements: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 52%)',
  hover: '#f4f4f4',
}

export const darkTheme = {
  bgBody: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  elements: 'hsl(209, 23%, 22%)',
  input: 'hsl(209, 23%, 22%)',
  hover: 'rgb(102, 102, 102)',
}
