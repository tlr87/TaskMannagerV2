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
         <div className="Component DataForm">
            <h3>Add a Task!</h3>
              <form className="form" onSubmit={this.submitData.bind(this)}>
                <div className="switch-field">
                 <input name="Project" placeholder="Project" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Task" placeholder="Task" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Person" placeholder="Person" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Priority" placeholder="Priority" type="number" value={numbers} onChange={(evt) => this.AddToData(evt)}/>
                 <input name="Details" placeholder="Details" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
                 <h4>Task Colour</h4>
                 <div className="radioButtons" onChange={(evt) => this.AddToData(evt)}>
                   <input type="radio" value="Blue" name="Colour"/><label className="Blue" for="Blue"><span>Blue</span></label>
                   <input type="radio" value="Red" name="Colour"/><label className="Red"  for="Red"><span>Red</span></label>
                   <input type="radio" value="Yellow" name="Colour"/><label className="Yellow" for="Yellow"><span>Yellow</span></label>
                   <input type="radio" value="Orange" name="Colour"/><label className="Orange" for="Orange"><span>Orange</span></label>
                   <input type="radio" value="Green" name="Colour"/><label className="Green" for="Green"><span>Green</span></label>
                   <input type="radio" value="Purple" name="Colour"/><label className="Purple" for="Purple"><span>Purple</span></label>
                   <input type="radio" value="Teal" name="Colour"/><label className="Teal" for="Teal"><span>Teal</span></label>
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
