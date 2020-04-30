import styled from 'styled-components';

const Product = styled.div`
  max-width: 250px;
  max-height: 360px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  flex-direction: center;
  align-items: center;
  transition: transform 0.2s;
  justify-content: center;
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
  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
  }
  div {
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    align-content: space-between;
    strong {
      font-size: 33px;
      color: #3d3d4d;
      display: flex;
      align-content: row;
    }
    button {
      flex: 1;
      display: flex;
    }
  }
`;

export default Product;
