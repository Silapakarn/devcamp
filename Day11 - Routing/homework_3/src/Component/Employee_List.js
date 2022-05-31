import React from "react";
import data from "../Data/data";
import { Button, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function Employee_List() {

    let navigate = useNavigate();
    let param = useParams();
   

    let result = [];


    //Filter Data department
    if (param.department) {
      result = data.filter((x) => x.department === param.department);
    } else {
      result = data;
    }

    //employee Detail Function path="employee-detail"
    const employeeDetailFunc = (e, i) => {
      e.preventDefault();

      navigate("/employee-detail", {
        replace: true,
        state: data[i],
      });
    };

    //Columns
    const columns = [
      {
        title: "First Name",
        dataIndex: "firstname",
        key: "firstname",
      },
      {
        title: "Last Name",
        dataIndex: "lastname",
        key: "lastname",
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position",
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
      },
      {
        title: "Employee Detail",
        dataIndex: "employeeDetail",
        key: "employeeDetail",

        render: (t, r) => (
          
          <Button
            type="primary"
            onClick={(e) => employeeDetailFunc(e, data.indexOf(r))}
            >
            Employee Detail
          </Button>
        ),
      },
    ];
  

    return (

    <div style={{ margin: "1rem"}}>

      <h2 style={{color: 'red'}}>Employee List</h2>

      {/* {Output data} */}
      <Table dataSource={result} columns={columns} pagination={false} />

      <br />
      
    </div>
    
    );
  }


export default Employee_List;

