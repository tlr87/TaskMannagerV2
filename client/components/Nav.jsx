import React from "react"
import {Link} from "react-router-dom"
import {HashRouter as Router, Route} from "react-router-dom"
import Help from './Help'

const Nav = (props) => (
    <div className='Help Component'>
        <h2>Nav Bar</h2>
          <ul>
            <li>
              <Link to='/' className='link'>Home</Link>
            </li>
            <li>
              <Link to='/Help' className='link'>Help</Link>
            </li>
            <li>
              Task Mannager!
            </li>
          </ul>
    </div>
  )

export default Nav
