import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 540px) {
    margin-bottom: 40px;
  }

  .fa-search {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 60px;
    opacity: 0.5;
  }

  .search {
    width: 420px;
    height: 60px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 2px 23px 2px 65px;
    background-color: ${props => props.theme.elements};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);

    &:hover,
    &:focus {
      background-color: ${props => props.theme.hover};
    }

    @media (max-width: 1024px) {
      width: 300px;
    }

    @media (max-width: 540px) {
      width: 100%;
    }
  }
`

export default Wrapper
