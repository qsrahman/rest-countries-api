import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .dropdown-menu {
    display: block;
  }

  &:hover button {
    background-color: ${props => props.theme.hover};
  }

  button {
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.text};
    width: 200px;
    height: 60px;
    padding: 16px 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: left;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);

    i {
      margin-left: 50px;
    }

    &:hover,
    &:focus {
      background-color: ${props => props.theme.hover};
    }
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: ${props => props.theme.elements};
    min-width: 200px;
    margin-top: 2px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: black;
      padding: 10px 20px;
      text-decoration: none;
      display: block;
      color: var(--light-theme-text);

      &:hover {
        background-color: ${props => props.theme.hover};
      }
    }
  }
`

export default Wrapper
