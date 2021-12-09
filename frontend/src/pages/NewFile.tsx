import { useState } from 'react';
import axios from 'axios';

const NewFile = () => {
  const [file, setFile] = useState<any>(null);
  const changeFile = (e: any) => {
    setFile(e.target.files[0]);
  } 
  const submitFile = () => {
    const fd = new FormData();
    fd.append('image', file, file.name);

    axios.post('http://localhost:8000/photos/new', fd)
    console.log(fd)
  }
  
  return(
    <div>
      <input type="file" onChange={changeFile} />
      <button onClick={submitFile}>Submit</button>
    </div>
  )
}

export default NewFile;