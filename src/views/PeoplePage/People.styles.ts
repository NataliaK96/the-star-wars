import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundPeople from 'assets/images/people.jpg';

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundPeople});
  background-color: ${Colors.black};
  flex: auto;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
`;

export const WrapperPeople = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
`;
export const WrapperGender = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GenderTitle = styled.div`
  display: flex;
  min-width: 270px;
  font-weight: 500;
  font-size: 18px;
`;
export const GenderImage = styled.img`
  width: 70px;
`;
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 5% 0 5%;
  position: absolute;
  width: 90%;
`;
