import "antd/dist/antd.css";
import "./index.css";
import Layout_Form from "./Layout_Form";
import Register_Form from "./Register_Form";
import Register_user from "./Components/Register_user"
import React from "react";


function App() {
  return (
    <Layout_Form>
      <Register_Form />
    </Layout_Form>
  );
}

export default App;
