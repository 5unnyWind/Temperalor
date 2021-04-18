import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Setting from './pages/Setting/Setting'
import Encounter from './pages/Encounter/Encounter'
import Make from './pages/Make/Make'
import BG from './components/BG/BG'
import Save from './pages/Save/Save'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BG />

        {/* 单一匹配，提高路由效率 */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/setting" component={Setting} />
          <Route path="/encounter" component={Encounter} />
          <Route path="/make" component={Make} />
          <Route path="/save" component={Save} />
          {/* 重定向 */}
          <Redirect to="/login" />
        </Switch>

        {/* toast 设置*/}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    )
  }
}
