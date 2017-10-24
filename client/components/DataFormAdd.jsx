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
          <label className="Blue" for="switch_3_left"><span>One</span></label>
        <input type="radio" id="switch_3_center" name="switch_3" value="maybe" />
          <label className="Red" for="switch_3_center"><span>Two</span></label>
        <input type="radio" id="switch_3_right" name="switch_3" value="no" />
          <label className="Yellow" for="switch_3_right"><span>Three</span></label>
      </div>
  </form>







            <h2>Add a Task!</h2>
              <form className="form" onSubmit={this.submitData.bind(this)}>
                <div className="switch-field">
                 <input name="Project" placeholder="Project" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Task" placeholder="Task" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Person" placeholder="Person" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Priority" placeholder="Priority" type="number" value={numbers} onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Details" placeholder="Details" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <h4>Task Colour</h4>
                 <div className="radioButtons" onChange={(evt) => this.AddToData(evt)}>

                   <input type="radio" className="Blue" value="Blue" name="Colour"/> <label for="Blue">Blue</label>
                   <input type="radio" className="Red" value="Red" name="Colour"/> <label for="Red">Red</label>
                   <input type="radio" className="Yellow" value="Yellow" name="Colour"/><label for="Yellow">Yellow</label>
                   <input type="radio" className="Green" value="Green" name="Colour"/><label for="Green">Green</label>
                   <input type="radio" className="Orange" value="Orange" name="Colour"/><label for="Orange">Orange</label>
                   <input type="radio" className="Purple" value="Purple" name="Colour"/><label for="Purple">Purple</label>
                   <input type="radio" className="Teal" value="Teal" name="Colour"/><label for="Teal">Teal</label>
                </div>
                <br/>
               <input type="submit"/>
              </div>
            </form>
          </div>
        )
      }
}


function mapStateToProps(state){
  return {dataToEdit:state.dataToEdit}
}


export default connect(mapStateToProps)(DataForm)
