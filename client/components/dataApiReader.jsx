import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postData, getData, getDataId, editData, delData} from '../actions/DataActions'

import DataFormAdd from './DataFormAdd'

class ApiDataReader extends React.Component{


componentDidMount(){
  this.props.dispatch(getData())

}
deleteItem(item) {
  this.props.dispatch(delData(item.id))
}
editItem(item) {
  this.props.dispatch(editData(item))
  this.props.dispatch(getData())
}

  render(){
    const projects = this.props.data.map((task) => task.Project)
    const uniqueProjects = Array.from(new Set(projects))
    console.log(uniqueProjects)
    return(

      <div className="Reader">
        <div className=" Component Projects">
        <h3>Projects</h3>
            <ul>
              {uniqueProjects.map((ProjName,key,item)=>{
              return <li key={key}><Link to={`${ProjName}`} >{ProjName}</Link></li>
              })}
            </ul>
          </div>
          <div className="Component Task">
        <h3>Tasks</h3>
            <ul>
              {this.props.data.map((item,key)=>{
              return <li key={key}> <Link to={`/item/${item.id}`} >{item.Task}</Link></li>
              })}
            </ul>
          </div>
        <DataFormAdd/>
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {data: state.data}

}

export default connect(mapStateToProps)(ApiDataReader)
