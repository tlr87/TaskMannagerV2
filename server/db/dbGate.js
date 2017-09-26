const getData = (db) =>{
  return db('DataTable')
  .select('*')
}

module.exports ={
  getData
}
