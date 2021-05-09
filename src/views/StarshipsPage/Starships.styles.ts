import styled from 'styled-components'
import { Colors } from 'constants/colors'
import backgroundStarship from 'assets/images/starship.jpg'

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundStarship});
  background-color: ${Colors.black};
  flex: auto;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
`

export const WrapperStarship = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
`
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 5% 0 5%;
  position: absolute;
  width: 90%;
`
