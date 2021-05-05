import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundVehicles from 'assets/images/vehicles.png'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  color: ${Colors.white};
  background-image: url(${backgroundVehicles});
  background-color: ${Colors.black};
`;
