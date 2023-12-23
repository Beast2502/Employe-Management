import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './component/Navbar/Navabar';
import SideBar from './component/Sidebar/Sidebar';
import HomeView from './views/home';
import AddNewEmployee from './views/newEmployeeView';

import RootLayout from './component/Layout/RootLayout';

import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomeView />} />
      <Route exact path="/addnew" element={<AddNewEmployee />} />
    </Route>

  )
);

function App() {


  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />

      </Provider>

    </div>
  );
}

export default App;
