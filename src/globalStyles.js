import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }
    :root {
        --brandBlue: #154C72;
        --brandRed: #9F1B19;
        --borderColor: #EBEBEB;
        --maxWidth: 1150px;
    }
    body {
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }
    main {
        margin-top: 70px;
    }
    button, svg, a {
        cursor: pointer;
    }
    ul {
        list-style-type: none;
    }
`

export default GlobalStyles
