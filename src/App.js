import logo from './logo.svg';
import './App.css';

import NavBar from './component/Navbar/Navbar';
import { useState, useEffect } from 'react';

import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";

import RootLayout from './layout/rootlayout';
import HomePage from './view/homepage/home';
import User from './view/users/user';
import TaskAssignTo from './view/taskAssignedTo/blogs';
import AllTask from './view/allTaskList/allTaskList';
import MyTask from './view/myTask/customers';
import AddNewUser from './view/users/addNewUser';
import AddNewTask from './view/taskAssignedTo/addNewTask';
import MeetView from './view/meet/meetview';
import RolesView from './view/roles/roles';
import AddNewRole from './view/roles/addNewRole';

import axios from 'axios';
import { api_end_point } from './api/api';
import modulesList from './constants/constants';


axios.defaults.withCredentials = false;


function App() {

  // let auth = {'token' : false}

  const [token, setToken] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const tokenSession = sessionStorage.getItem("access-token");


    if (tokenSession) {
      setToken(tokenSession)
    }
  }, [])

  const loginHandler = (e) => {

    e.preventDefault();

    axios.post(`${api_end_point}/userAuth/login`, { email, password },
    {
      headers: {
          'ngrok-skip-browser-warning': 'skip-browser-warning',
      }
  }
    ).then((res) => {
      console.log(res, 'RESPONSE')
      setToken(res.data.token)
      sessionStorage.setItem("access-token", res.data.token);
      sessionStorage.setItem("role", res.data.role)
      sessionStorage.setItem("email", res.data.email)

      console.log(    sessionStorage.getItem("email"), "USER EMAIL")

      sessionStorage.getItem("email") && axios.post(`${api_end_point}/userAuth/getmodules`, { email: sessionStorage.getItem("email") }).then((res) => {


        let obj = {}
        console.log(res.data.modules, "APP JS FILE ADMIN")

        let module_user = res.data.modules

        console.log(modulesList, "APP JS FILE")
        

        for (let i = 0; i < modulesList.length; i++) {
          for (let j = 0; j < module_user.length; j++) {
            if (modulesList[i].title === module_user[j]) {
              obj[`${modulesList[i].title}`] = true
            }
          }
        }

        setViews(obj)


      })




    }).catch(err=>console.log(err.response.data.message ,"HI i am breaking"))

  }


  const [views, setViews] = useState({});

  useEffect(() => {
    sessionStorage.getItem("email") && axios.post(`${api_end_point}/userAuth/getmodules`, { email: sessionStorage.getItem("email") },{
      headers:{
        'Session-Value' : sessionStorage.getItem('access-token')
      }
    }).then((res) => {


      let obj = {}
      console.log(res.data.modules, "APP JS FILE ADMIN")

      let module_user = res.data.modules

      console.log(modulesList, "APP JS FILE")

      for (let i = 0; i < modulesList.length; i++) {
        for (let j = 0; j < module_user.length; j++) {
          if (modulesList[i].title === module_user[j]) {
            obj[`${modulesList[i].title}`] = true
          }
        }
      }

      setViews(obj)


    }).catch(err=> {console.log(err)
    alert(err)
    })
  }, [setViews])



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout loginHandler={loginHandler} setEmail={setEmail} token={token} setPassword={setPassword} />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={views.Users ? <User /> : <Navigate to="/" />} />
        <Route path='task-assigned-to' element={views.TaskAssignTo ? <TaskAssignTo /> : <Navigate to="/" />} />
        <Route path='all-task-list' element={views.AllTask ? <AllTask /> : <Navigate to="/" />} />
        <Route path='my-task' element={<MyTask />} />
        <Route path='add-new' element={views.Users ? <AddNewUser /> : <Navigate to="/" />} />
        <Route path='add-task' element={<AddNewTask />} />
        <Route path='roles' element={views.Roles ? <RolesView /> : <Navigate to="/" />} />
        <Route path='add-new-role' element={views.Roles ? <AddNewRole /> : <Navigate to="/" />} />


      </Route>

    )
  );


  console.log(views, "VIEWS")

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
