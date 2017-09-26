var express = require('express')
var router = express.Router()

var Gate = require('../db/dbGate')

// get

router.get('/', (req,res) =>{
  var db = req.app.get('db')
  Gate.getData(db)
  .then(dataRows => {
    res.json(dataRows)
  })
})

// get with id
router.get('/:id', (req,res) =>{
  var db = req.app.get('db')
  var id = req.params.id
  console.log(id);
  Gate.getData(db)
  .where('id', id )
  .then(dataRows => {
    res.json(dataRows)
  })
})

// Post
router.post('/', (req,res) =>{
  var db = req.app.get('db')
  var data = req.body
  console.log("Api hit here is your data =>", data )
  db("DataTable").insert(data)
  .then(response =>{
    console.log("then Api",response);
    res.json(response)
  })
})

// Delete
router.delete('/:id', (req, res) => {
  var db = req.app.get('db')
    db("DataTable")
    .where("id",req.params.id)
    .delete()
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      res.sendStatus(500).send(err + ' SERVER ERROR')
    })
})

//Put
router.put('/:id', (req, res) => {
  var db = req.app.get('db')
    db("DataTable")
    .where("id",req.params.id)
    .update(req.body)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      res.sendStatus(500).send(err + ' SERVER ERROR')
    })
})




module.exports = router
