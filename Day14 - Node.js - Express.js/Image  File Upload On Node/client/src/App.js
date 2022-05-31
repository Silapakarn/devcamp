import React,{useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });

  }


  const [isSucces, setSuccess] = useState(null);

  const submit = async () =>{
    const formdata = new FormData(); 
    formdata.append('avatar', userInfo.file);

    axios.post("http://localhost:8080/imageupload", formdata,{   
            headers: { "Content-Type": "multipart/form-data" } 
    })
    .then(res => { // then print response status
      console.warn(res);
      if(res.data.success === 1){
        setSuccess("Image upload successfully");
      }

    })
  }



  return (
    <div className="container mr-60">
      <h3 className="mt-4">React Image Upload And Preview Using Node.Js</h3>

      <div className="formdesign">

      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-row">
          <label className="text-white">Select Image :</label>
          <input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
        </div>

        <div className="form-row">
          <button type="submit" className="btn btn-primary mt-2 mb-2" onClick={()=>submit()} > Save </button>
        </div>

      </div>

      <div className="text-center">
        {userInfo.filepreview !== null ? 
          <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
        : null}
      </div>
        

    </div>
  );
}

export default App;
