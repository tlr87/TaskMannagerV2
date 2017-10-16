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
    console.log(projParam);
    const person = this.props.data.map((task) => task.Person)
    const uniquePerson = Array.from(new Set(person))
    console.log(uniquePerson)
    return(
<div>
    <h2>People</h2>
      <ul>
        {this.props.data
        .filter((item)=>{return item.Project === projParam})
        .map((item,key)=>{
        return <li key={key}>{item.Person}</li>
        })}
      </ul>
    <h2>Tasks</h2>
      <ul>
        {this.props.data
         .filter((item)=>{return item.Project === projParam})
         .map((item,key)=>{
         return <li key={key}> <Link to={`/item/${item.id}`}>{item.Task}</Link></li>
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