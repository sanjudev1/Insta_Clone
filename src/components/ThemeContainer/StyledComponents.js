import styled from 'styled-components'

const ThemeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  -webkit-transition: background-color 2s;
  transition: background-color 2s;
  * {
    color: ${props => props.dark && '#ffffff'};
    -webkit-transition: background-color 2s;
    transition: background-color 2s;
  }
`
export default ThemeContainer
