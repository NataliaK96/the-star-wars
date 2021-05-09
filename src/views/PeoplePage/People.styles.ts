import styled from 'styled-components'
import { Colors } from 'constants/colors'
import backgroundPeople from 'assets/images/people.jpg'

export const Main = styled.div`
  display: flex;
  color: ${Colors.white};
  background-image: url(${backgroundPeople});
  background-color: ${Colors.black};
  background-position-y: top;
  background-position-x: right;
  flex: auto;
  flex-direction: column;
  background-repeat: no-repeat;
`

export const WrapperPeople = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px 20%;
`
export const WrapperGender = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const GenderTitle = styled.div`
  display: flex;
  min-width: 270px;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 1000px) {
    min-width: 150px;
    }
  }
`
export const GenderImage = styled.img`
  width: 70px;
`
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  width: -webkit-fill-available;
  margin: 0 60px 30px;
`
