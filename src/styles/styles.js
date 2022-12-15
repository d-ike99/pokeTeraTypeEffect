import styled from "styled-components";

const StyledCard = styled.div`
  /* width: 200px; */
  margin: 1% 1%;
  box-shadow: 0px 1px 6px #000;
  border-radius: 10px;
  background-color: whitesmoke;
  width: 25%
`

const StyledCardName = styled.div`
  padding: 0;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 0px;
`

const cardInfo = styled.div`
  text-align: center;
`

const StyledButton = styled.button`
  margin-inline: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  /* POINT valueを関数にすることで、引数にpropsを受け取ることができる。
  { isSelected } の部分を変更することで受け取る名前を変更することができる。
   */
  background-color: ${({ isSelected }) => (isSelected ? "pink" : "darkcyan")};
  transition: all 0.3s ease-out;

  /* POINT 疑似クラスの追加 */
  :hover,
  :active {
    opacity: 0.7;
    transform: scale(1.1);
  }
  span {
    color: purple;
  }
  /* POINT メディアクエリ */
  @media (max-width: 600px) {
    border-radius: 0;
  }

  :global {
    background-color: black;
  }
`;

export { StyledCard, StyledCardName }