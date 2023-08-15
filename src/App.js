import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {NavBar,Feed,ChannelDeatil,SearchFeed,VideoDeatil} from './components'

const App = () => (
  <BrowserRouter>
  <Box sx={{backgroundColor:'#000'}}>
    <NavBar/>
    <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' exact element={<VideoDeatil/>}/>
        <Route path='/channel/:id' exact element={<ChannelDeatil/>}/>
        <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
    </Routes>
  </Box>
  </BrowserRouter>
)

export default App