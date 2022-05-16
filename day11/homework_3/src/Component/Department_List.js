import React from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import data from "../Data/data";

function Department_List() {

  //key Department
  const key = "department";

  // Map Value Department
  const department = [
    ...new Map(data.map((item) => [item[key], item])).values(),
  ];

  //Show department list
  console.log(department);


  let departmentData = [];

  //Filter
  data.map((x) => {
    !departmentData.find((y) => y === x.department) &&
    departmentData.push(x.department);
  });

  let navigate = useNavigate();



  // Path to Department Detail 
  const employeeListFunc = (e, department) => {
    e.preventDefault();
    navigate(`/employee/${department.department}`);
  };


  //Show columns department list
  const columns = [
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Department Detail",
      dataIndex: "departmentDetail",
      key: "departmentDetail",

      render: (t, r) => (
        <Button type="primary" onClick={(e) => employeeListFunc(e, r)}>
          Department Detail
        </Button>
      ),
    },
  ];


    return (

    <div style={{ margin: "50px" }}>

      <Table dataSource={department} columns={columns} pagination={false} />
      <br />
      
    </div>
    
    );
  }


export default Department_List;