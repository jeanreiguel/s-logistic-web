import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
      width: 160px;
      background: #ff9000;
      padding: 4px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;

      color: #312e38;
      opacity: 0;
      transition: opcaity 0.4s;
      visibility: hidden;

      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);
  
      &:before {
        content: '';
        border-style: solid;
        border-color: #ff9000 transparent;
        border-width: 6px 6px 0 6px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

  &:hover span {
      opacity: 1;
      visibility: visible;
  }
`;