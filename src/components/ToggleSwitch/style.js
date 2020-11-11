import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 6px;
  }

  label {
    position: relative;
    display: inline-block;
    width: 64px;
    height: 32px;
    margin: 0 6px 0 0;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + span {
        background-color: ${props => props.theme.bgBody};
      }

      &:focus + span {
        box-shadow: 0 0 1px #333;
      }

      &:checked + span:before {
        transform: translateX(24px);
      }
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${props => props.theme.text};
      transition: 0.4s;

      &:before {
        position: absolute;
        content: '';
        height: 25px;
        width: 25px;
        left: 5px;
        bottom: 4px;
        background-color: #eee;
        transition: 0.4s;
      }

      &.round {
        border-radius: 34px;
      }

      &.round:before {
        border-radius: 50%;
      }
    }
  }
`

export default Wrapper
