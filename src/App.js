import React ,{useState} from 'react';
import UploadForm from './components/uploadForm'
import ImageGrid from './components/imageGrid'
import Modal from './components/modal'

import './App.css'

function App() {
  const [selected,setSelected] = useState(null)
  return (
    <div className="container mx-auto">
     <nav className="container mx-auto">
        <a href='#' className="font-extrabold text-blue-300 text-xl">MET Gallery</a>
     </nav>
     <UploadForm />
     <ImageGrid  setSelected={setSelected} />
     { selected&& <Modal  setSelected ={setSelected} selected={selected} />}
    </div>
  );
}

export default App;
