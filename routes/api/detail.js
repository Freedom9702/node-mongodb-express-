var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb')

router.get('/', function (req, res, next) {
  //1.必传参数
  // let {dataName,_id} = res.params;
  // if (!dataName || !_id) {
    // res.send({error:1,msg:'dataName和_id为必传参数'})
    
  


  //找到这条数据
  mgdb({
    collection: 'column'
  }, ({ collection, client }) => {
    collection.find({
      // _id: ObjectID(_id)
    }).toArray((err, result) => {
      
      if (!err && result.length>0) {
        // res.send({error:0,msg:'成功',page_data:result[0]});
        res.send(result)
      }else{
        res.send({error:1,msg:'查无数据'});
      }
    //  let data = {

    //  }
      client.close();
    })
  })



});


module.exports = router;
