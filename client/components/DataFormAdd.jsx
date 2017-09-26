import React from 'react'
import {connect} from 'react-redux'
import {postData,updateData } from '../actions/DataActions'




class DataForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

componentWillUpdate(nextProps){
  if(nextProps.dataToEdit.id != this.props.dataToEdit.id){
    this.setState({
      data: nextProps.dataToEdit
    })
  }
}


  AddToData(evt) {
    var data = this.state.data
    data[evt.target.name] = evt.target.value
    this.setState({data: data})
  }

  submitData(evt) {
    evt.preventDefault()
    this.props.dispatch(postData(this.state.data))

    //dispatch your data to some kind of postData request
  }



  render() {
      const {text, numbers} = this.state.data
       return (
         <div>
         <h2>Add a Task!</h2>
          <form onSubmit={this.submitData.bind(this)}>
            <input name="Project" placeholder="Project" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
            <input name="Task" placeholder="Task" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
            <input name="Priority" placeholder="Priority" type="number" value={numbers} onChange={(evt) => this.AddToData(evt)}/>
            <input name="Details" placeholder="Details" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
            <select name="Colour" onChange={(evt)=> this.AddToData(evt)}>
              <option value={"blue"}>Blue</option>
              <option value={"yellow"}>Yellow</option>
            </select>
            <input type="submit"/>
          </form>
        </div>
        )
      }
}


function mapStateToProps(state){
  return {dataToEdit:state.dataToEdit}
}


export default connect(mapStateToProps)(DataForm)
