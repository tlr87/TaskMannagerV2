import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import DataFormAdd from './DataFormAdd'
import DataFormEdit from './DataFormEdit'
import DataReader from './dataApiReader'
import Item from './Item'




const App = () => (
  <Router>
    <div className='app-container'>
      <Router>
        <div>
          <Route path='/item/:id' component={Item}/>
          <Route exact path='/' component={DataReader}/>
      </div>
    </Router>
    </div>
  </Router>
)

export default App
