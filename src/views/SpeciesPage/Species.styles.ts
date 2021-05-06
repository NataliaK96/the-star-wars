import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundSpecies from 'assets/images/species.jpg'

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundSpecies});
  background-color: ${Colors.black};
  width: 100%;
`;

export const WrapperSpecies = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
`;

