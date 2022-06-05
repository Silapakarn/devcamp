import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import { Router, Route, Link } from 'react-router-dom';

import Create_Student from './components/create-student'
import Edit_Student from './components/edit-student'
import Student_List from './components/student-list'

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">

            <Navbar bg='dark' variant='dark'>
              <Container>

                  <Navbar.Brand>
                      <Link to={'/create-student'} className="nav-link">
                          React MERN Stack CRUD
                      </Link>
                  </Navbar.Brand>

                  <Nav className="justify-content-end">
                      <Nav>
                        <Link to={'/create-student'} className="nav-link"></Link>
                      </Nav>
                      <Nav>
                        <Link to={'/student-list'} className="nav-link"></Link>
                      </Nav>
                  </Nav>
              </Container>
            </Navbar>

          </header>

          <Container>
              <Row>
                  <Col md='12'>
                    <div className="wrapper">
                        <Route exact path='/' components={<Create_Student/>} />
                        <Route path='/create-student' components={<Create_Student/>} />
                        <Route path='/edit-student/:id' components={<Edit_Student/>} />
                        <Route path='/student-list' components={<Student_List/>} />
                    </div>
                  </Col>
              </Row>
          </Container>

        </div>
    </Router>
  );
}

export default App;
