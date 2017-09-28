import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postData, getData, getDataId, editData, delData} from '../actions/DataActions'

import DataFormEdit from './DataFormEdit'

class ApiDataReader extends React.Component{


componentDidMount(){
  console.log(this.props)
  this.props.dispatch(getDataId(this.props.match.params.id))
}
deleteItem(item) {
  this.props.dispatch(delData(item.id))
  this.props.history.push('/')
}
editItem(item) {
  this.props.dispatch(editData(item))
}

  render(){
    return(
      <div>
        <ul>
          <h1>Item</h1>
            {this.props.data.map((item,key)=>{
                return <li key={key}>
                  ID: {item.id}<br/>
                Project: {item.Project}<br/>
              Task:{item.Task}<br/>
            Person:{item.Person}<br/>
          Priority:{item.Priority}<br/>
        Details:{item.Details}<br/>
      Colour:{item.Colour}
                  <a onClick={(evt)=> this.deleteItem(item)}>Del</a> {` `}
                  <a onClick={(evt)=> this.editItem(item)}>Edit</a>
                </li>
              })}
        </ul>
        <DataFormEdit/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {data: state.data}

}

export default connect(mapStateToProps)(ApiDataReader)
