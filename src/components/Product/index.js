import styled from 'styled-components';

const Product = styled.div`
  max-width: 250px;
  max-height: 360px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  flex-direction: row;
  align-items: row;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }
  & + a {
    margin-top: 16px;
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    align-content: center;
    width: 150px;
    height: 150px;
  }
  div {
    margin: 0 16px;
    flex: 1;
    align-items: row;
    flex-direction: row;

    strong {
      font-size: 20px;
      color: #3d3d4d;
      align-items: row;

      button {
        align-items: row;
        flex-direction: row;
      }
    }
    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export default Product;
