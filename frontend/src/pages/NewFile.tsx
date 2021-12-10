import { useState } from 'react';
import axios from 'axios';

const NewFile = () => {
  const [file, setFile] = useState<any>(null);
  const changeFile = (e: any) => {
    setFile(e.target.files[0]);
  }
  const submitFile = () => {
    const data = new FormData();
    data.append('file', file)

    return axios.post('http://localhost:8000/new', data, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((res) => console.log(res.data))
      .catch((err) => console.log('error from server'))
  }

  return(
    <div>
      <input type="file" name="file" onChange={changeFile} />
      <button onClick={submitFile}>Submit</button>
    </div>
  )
}

export default NewFile;