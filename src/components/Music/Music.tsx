import React from 'react'
import { SongWrapper } from './Music.styles'
import { SoundOutlined, NotificationOutlined } from '@ant-design/icons'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import music from 'assets/music/John_Williams-Main_Title_and_Escape.mp3'

export const Music = () => {
  return (
    <SongWrapper>
      <AudioPlayer
        src={music}
        customIcons={{
          play: <NotificationOutlined />,
          pause: <SoundOutlined />,
        }}
      />
    </SongWrapper>
  )
}
