import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundSpecies from 'assets/images/species.jpg'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  color: ${Colors.white};
  background-image: url(${backgroundSpecies});
  background-color: ${Colors.black};
`;
