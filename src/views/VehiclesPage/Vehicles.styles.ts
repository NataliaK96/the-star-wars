import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundVehicles from 'assets/images/vehicles.jpg'

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundVehicles});
  background-color: ${Colors.black};
  width: 100%;
`;

export const WrapperVehicles = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
`;