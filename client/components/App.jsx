import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import DataFormAdd from './DataFormAdd'
import DataFormEdit from './DataFormEdit'
import DataReader from './dataApiReader'
import Item from './Item'
import Project from './Project'
import Help from './Help'
import Nav from './Nav'


const App = () => (
    <div className='app-container'>
      <Router>
        <div  className="container">
          <Nav/>
          <Route exact path='/Help' component={Help}/>
          <Route path='/item/:id' component={Item}/>
          <Route exact path='/:Project' component={Project}/>
          <Route exact path='/' component={DataReader}/>
      </div>
    </Router>
  </div>
)

export default App
