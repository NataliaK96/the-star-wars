import styled from 'styled-components'
import { Colors } from 'constants/colors'
import backgroundPlanets from 'assets/images/planets.jpg'

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundPlanets});
  background-color: ${Colors.black};
  background-position-y: top;
  background-position-x: right;
  flex: auto;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
`

export const WrapperPlanets = styled.div`
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

export const BackAndFilter = styled.div`
  display: flex;
  flex-direction: row;
`
