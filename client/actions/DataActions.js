import request from 'superagent'

const hideForm = () => {
  return {
    type: 'HIDE_FORM'
  }
}

// Put

export const editData = (data) => {
  return {
    type:  'EDIT_DATA',
    data
  }
}


export function updateData(data, id){
  return(dispatch) => {
    request
    .put('/v1/api/'+id)
    .send(data)
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(getData())
    })
  }
}



// Put with Id

export const editDataId = (data) => {
  return {
    type:  'EDIT_DATA_ID',
    data
  }
}


export function updateDataId(data, id){
  return(dispatch) => {
    request
    .put('/v1/api/'+id)
    .send(data)
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(getDataId(id))
    })
  }
}





// Delete
export const deleteData = (data) => {
  return {
    type:  'DELETE_DATA',
    data
  }
}

export function delData(id){
  return(dispatch) => {
    request
    .del('/v1/api/'+id)
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(getData())
    })
  }
}


// Get id
export const receiveDataId = (data) => {
  return {
    type:  'RECEIVE_DATA_ID',
    data
  }
}

export function getDataId(id){
  return(dispatch) => {
    request
    .get('/v1/api/'+id)
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(receiveData(res.body))
    })
  }
}



// Get Project
export const receiveDataProj = (data) => {
  return {
    type:  'RECEIVE_DATA_PROJ',
    data
  }
}

export function getDataProj(Project){
  return(dispatch) => {
    request
    .get('/v1/api/'+Project)
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(receiveData(res.body))
    })
  }
}





// Get
export const receiveData = (data) => {
  return {
    type:  'RECEIVE_DATA',
    data
  }
}

export function getData(){
  return(dispatch) => {
    request
    .get('/v1/api')
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(receiveData(res.body))
    })
  }
}

// Post
export const addData = (data) => {
console.log('addData', data);
  return{
    type: "ADD_DATA",
    data
  }
}


export function postData(data){
  console.log("postData", data);
 return(dispatch) => {
   request
      .post('/v1/api')
      .send(data)
      .end((err, res)=>{
        if(err){
          console.log(err.message)
          return
        }
        data.id = res.body[0]
        dispatch(addData(data))
        // or it could be = dispatch(addData(res.body))
      })
    }
}
