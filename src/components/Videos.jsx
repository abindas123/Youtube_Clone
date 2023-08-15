import React from 'react'
import{Stack,Box} from '@mui/material'
import VideoCard from './VideoCard'
import channelCard from './channelCard'


const Videos = ({videos}) => {
    if(!videos?.length) return "Loading";
  return (
  
   <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
    {videos.map((item,idx)=>(
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <channelCard channelDetail={item}/>}
        </Box>

    ))

    }
   </Stack>
  )
}

export default Videos