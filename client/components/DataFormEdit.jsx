import React from 'react'
import {connect} from 'react-redux'
import {postData,updateData,updateDataId} from '../actions/DataActions'




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
    this.props.dataToEdit.id
    console.log('editing')
    this.props.dispatch(updateDataId(this.state.data,this.props.dataToEdit.id))
    //dispatch your data to some kind of postData request
  }



  render() {
      const {Project, Task, Person, Priority, Details, Colour} = this.state.data
       return (
         <div className="DataForm">
         <h2>Edit an Item!</h2>
           <form onSubmit={this.submitData.bind(this)}>
             <input name="Project" placeholder="Project" value={Project} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Task" placeholder="Task" value={Task} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Person" placeholder="Person" value={Person} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Priority" placeholder="Priority" value={Priority} type="number" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Details" placeholder="Details" value={Details} type="text" onChange={(evt) => this.AddToData(evt)}/>
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
           </form>

        </div>
        )
      }
}


function mapStateToProps(state){
  return {dataToEdit:state.dataToEdit}
}


export default connect(mapStateToProps)(DataForm)
