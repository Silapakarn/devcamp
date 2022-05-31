import { useLocation } from "react-router-dom";

function Employee_Detail() {

    const location = useLocation();
    let employee_Detail = location.state;

    return (
      <div style={{ margin: "1rem" }}>

        <h2 style={{color: 'red'}}>Employee Detail</h2>
  
        <p>ID: {employee_Detail.id}</p>
        <p>First Name: {employee_Detail.firstname}</p>
        <p>Last Name: {employee_Detail.lastname}</p>
        <p>Age: {employee_Detail.age}</p>
        <p>Gender: {employee_Detail.gender}</p>
        <p>Phone Number: {employee_Detail.phoneNumber}</p>
        <p>Position: {employee_Detail.position}</p>
        <p>Department: {employee_Detail.department}</p>
        <p>salary: {employee_Detail.salary}</p>

      </div>
    );
  }

  export default Employee_Detail;