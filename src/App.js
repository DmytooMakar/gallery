import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CloseIcon from '@mui/icons-material/Close';
import RenderPhoto from './components/renderPhoto';

import './App.scss'

function App() {
  const [ model, setModel ] = useState(false);
  const [ tempImgSrc, setTempImgSrc ] = useState('');
  const [ photos, setPhoto ] = useState([]);

  useEffect(() => {
    axios.get(`https://api.slingacademy.com/v1/sample-data/photos`)
    .then( data =>  {setPhoto(data.data.photos.map(el => ({
      id : el.id,
      url : el.url,
    })))})
  }, [])

  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (<>
    <div className={ model ? "model open" : "model"}>
      <CloseIcon onClick={() => setModel(false)} />
      <img src={tempImgSrc} />
    </div>
    <div className='gallery'>
        { photos.map(photo => <RenderPhoto key={photo.id} photo={photo} getImg={getImg} />) }
      </div>
  </>);
}

export default App;
