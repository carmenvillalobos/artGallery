import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Gallery from './Components/Gallery';
import ButtonBar from './Components/ButtonBar';

function App() {
  let [artId, setArtId] = useState(5980)
  let [data, setData] = useState({})

useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
    }, [artId])

    const handleIterate = e => {
      setArtId(artId + Number(e.target.value))
    }

  return (
    <div className="App">
      <Gallery data = {data}/>
      <ButtonBar handleIterate={handleIterate} />    
    </div>
  );
}

export default App;
