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
      <div>
        <ul>
          <h1>DataTable</h1>
          {uniqueProjects.map((ProjName,key)=>{
            return <li key={key}> <Link to={`/item/${ProjName}`} >{ProjName}</Link></li>
          })}
        </ul>
        <DataFormAdd/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {data: state.data}

}

export default connect(mapStateToProps)(ApiDataReader)
