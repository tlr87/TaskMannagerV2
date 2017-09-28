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
         <div>
         <h2>Edit an Item!</h2>
           <form onSubmit={this.submitData.bind(this)}>
             <input name="Project" placeholder="Project" value={Project} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Task" placeholder="Task" value={Task} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Person" placeholder="Person" value={Person} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Priority" placeholder="Priority" value={Priority} type="number" onChange={(evt) => this.AddToData(evt)}/>
             <input name="Details" placeholder="Details" value={Details} type="text" onChange={(evt) => this.AddToData(evt)}/>
             <select name="Colour" value={Colour} onChange={(evt)=> this.AddToData(evt)}>
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
