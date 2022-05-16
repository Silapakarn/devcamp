import './App.css';
import React from "react";
import { Outlet, Link, Routes, Route, } from "react-router-dom";
import Employee_List_Detail from './Component/Employee_List_Detail'
import Employee_List from './Component/Employee_List';
import Department_List from './Component/Department_List';






function App() {
  return <Routing />;
}


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="employee" element={<Employee_List />} />
        <Route
          path="employee-detail"
          element={<Employee_List_Detail />}
        />
        <Route path="department" element={<Department_List />} />
        <Route path="employee/:department" element={<Employee_List />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}




function Layout() {
  return (
    <ContainerComp>
      <HeaderComp></HeaderComp>
      <MenuComp></MenuComp>
      <ContentComp></ContentComp>
      <FooterComp></FooterComp>
    </ContainerComp>
  );
}


function ContainerComp(props) {
  return props.children;
}


function HeaderComp() {
  return (
    <>
      <h1>Header</h1>
      <hr />
    </>
  );
}

function MenuComp() {
  return (
    <>
      <h1>Menu</h1>
      <nav className="layout-navigationut">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employee">Employee List</Link>
          </li>
          <li>
            <Link to="/department">Department List</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}

function ContentComp() {
  return (
    <>
      <Outlet />
      <hr />
    </>
  );
}

function FooterComp() {
  return (
    <>
      <h1>Footer</h1>
      <hr />
    </>
  );
}

function Home() {
  return (
    <div style={{ margin: '1rem'}}>
      <h2 style={{color: 'red'}}>Welcome to Website</h2>
       <p>What is Lorem Ipsum?
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}

function NotMatch() {
  return <h2>Not Match</h2>;
}




export default App;
