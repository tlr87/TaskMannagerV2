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

render() {
  return (
    <div>
      <div className="Component Item">
        <ul>
          <h2>Item</h2>
          {this.props.data.map((item, key) => {
            return <li key={key}>
              <span>ID: {item.id}</span><br/>
              <span>Project: {item.Project}</span><br/>
              <span>Task:{item.Task}</span><br/>
              <span>Person:{item.Person}</span><br/>
              <span>Priority:{item.Priority}</span><br/>
              <span>Details:{item.Details}</span><br/>
              <span>Colour:{item.Colour}</span><br/>
              <a onClick={(evt) => this.deleteItem(item)}>Delete</a>
              {` `}
              <a onClick={(evt) => this.editItem(item)}>Edit↴</a>
            </li>
          })}
        </ul>
      </div>
      <div>
        <DataFormEdit/>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {data: state.data}

}

export default connect(mapStateToProps)(ApiDataReader)
