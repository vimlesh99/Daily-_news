
import React, { Component } from 'react'
import Nav from './component/Nav'
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className=' my-3'>
      <Router>
    <Nav/>
      {/* <News pageSize={3} country = {"us"} category={"sports"} /> */}
    
    <Routes>
   <Route exact  path="/business" Component={<News key="business" pageSize={6} country = {"in"} category="business"/> }/>
   <Route exact  path="/entertainment" element={<News key="entertainment" pageSize={6} country = {"in"} category="entertainment"/> }/>
   <Route exact path="/" element={<News key="general" pageSize={6} country = {"in"} category="general"/>}/>
   <Route exact path="/health" element={<News key="health" pageSize={6} country = {"in"} category="health"/> }/>
   <Route exact path="/science" element={<News key="science" pageSize={6} country = {"in"} category="science"/>} />
   <Route exact  path="/sports" element={<News key="sports" pageSize={6} country = {"in"} category="sports"/> }/>
   <Route exact  path="/technology" element={<News key="technology" pageSize={6} country = {"in"} category="technology"/>}/>
    </Routes>
    </Router>  
      </div>
    )
  }
}
