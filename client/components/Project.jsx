import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postData, getData, getDataId, editData, delData} from '../actions/DataActions'

import DataFormAdd from './DataFormAdd'

class Project extends React.Component{


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
    const projParam = this.props.match.params.Project
    const projPerson = this.props.match.params.Project
    console.log(projParam);
    return(
    <div className="Component">
        <h2>Tasks</h2>
          <ul>
            {this.props.data
             .filter((item)=>{return item.Project === projParam})
             .map((item,key)=>{
             return <li key={item.Task}> <Link to={`/item/${item.id}`} className={item.Colour}>{item.Task} assigned to {item.Person}</Link></li>
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

export default connect(mapStateToProps)(Project)
