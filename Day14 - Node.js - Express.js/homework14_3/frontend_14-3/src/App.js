
import './App.css';
import axios from 'axios';

function App() {

  //called post file
  const postFile = async(file) => {

  //providing form data
  const formdata = new FormData();

  //key is going to be file and file going to submit
  formdata.append('file', file);
  
    //check
    try{
      //tell where it is going to post it
      //'await' is a lightweight, dependency-free promises library that makes both serial and parallel logic easy by thinking in terms of sets. You await() a set of things

      const result = await axios.post("http://localhost:4000/file", formdata)
      console.log(result);

      //Error
    } catch(error){
      console.error(error);
    }
}

  return (
    <div style={{textAlign: 'center', margin: '3rem'}}>

      <input
      type="file"
      
      onChange={(event) =>{

        //will get the file on first one
        const file = event.target.files[0];
        postFile(file);
      }}></input>

    </div>
  );
}

export default App;
