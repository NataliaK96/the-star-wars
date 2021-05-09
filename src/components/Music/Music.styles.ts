import styled from 'styled-components'
import { Colors } from 'constants/colors'

export const SongWrapper = styled.div`
  &&& {
    .rhap_container {
      background-color: transparent;
    }
    .rhap_progress-section,
    .rhap_additional-controls,
    .rhap_rewind-button,
    .rhap_forward-button,
    .rhap_volume-controls {
      display: none;
    }
    .rhap_main-controls-button {
      color: ${Colors.yellow};
    }
  }
`
