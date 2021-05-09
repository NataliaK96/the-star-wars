import styled from 'styled-components'
import { Colors } from 'constants/colors'
import backgroundStarship from 'assets/images/starship.jpg'

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundStarship});
  background-color: ${Colors.black};
  background-position-y: top;
  background-position-x: right;
  flex: auto;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
`

export const WrapperStarship = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 30px 20%;
`
export const WrapperButtons = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
position: absolute;
width: -webkit-fill-available;
margin: 0 60px 30px;
`
