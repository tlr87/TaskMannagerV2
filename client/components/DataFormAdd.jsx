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
  <form className="form">
      <div className="switch-field">
        <div className="switch-title">Three fields? Sure.</div>
        <input type="radio" id="switch_3_left" name="switch_3" value="yes"  />
        <label for="switch_3_left">One</label>
        <input type="radio" id="switch_3_center" name="switch_3" value="maybe" />
        <label for="switch_3_center">Two</label>
              <input type="radio" id="switch_3_right" name="switch_3" value="no" />
        <label for="switch_3_right">Three</label>
      </div>
  </form>







            <h2>Add a Task!</h2>
              <form onSubmit={this.submitData.bind(this)}>
                 <input name="Project" placeholder="Project" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Task" placeholder="Task" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Person" placeholder="Person" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Priority" placeholder="Priority" type="number" value={numbers} onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Details" placeholder="Details" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <h4>Task Colour</h4>
                 <div className="radioButtons" onChange={(evt) => this.AddToData(evt)}>
                    <input type="radio" id="radio" value="Blue" name="Colour"/><label for="Blue">Blue</label>
                    <input type="radio" id="radio" value="Red" name="Colour"/><label for="Red">Red</label>
                </div>
                <br/>
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
