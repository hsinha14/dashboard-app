        $(document).ready(function() {
    /* $('.edit').editable('http://www.example.com/save.php', {
         indicator : 'Saving...',
         tooltip   : 'Click to edit...'
     });
     $('.edit_area').editable('http://www.example.com/save.php', {
         type      : 'textarea',
         cancel    : 'Cancel',
         submit    : 'OK',
         indicator : '<img src="assets/wsr-automation/images/print-icon.png">',
         tooltip   : 'Click to edit...'
     });*/
       
        $('.edit_area').editable(function(value, settings) {
     console.log(value);
     console.log(settings);
     /******/
     /*require(['mongodb'], function (foo) {
    //foo is now loaded.
    console.log(foo);
    });*/
     var Mongoh=require('mongodb');
    var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;
console.log(MongoClient);
MongoClient.connect('mongodb://127.0.0.1:27017/wsr-data', function(err, db) {
if(err) throw err;

db.collection('jsonData').findAndModify(
  {hello: 'world'}, // query
  [['_id','asc']],  // sort order
  {$set: {hi: 'there'}}, // replacement, replaces only the field "hi"
  {}, // options
  function(err, object) {
      if (err){
          console.warn(err.message);  // returns error if no matching object found
      }else{
          console.dir(object);
      }
  });
});
     /****/
     return(value);
  }, {
     type    : 'textarea',
     submit  : 'OK',
    cancel    : 'Cancel',

     indicator : 'Saving...',
         tooltip   : 'Click to edit...'
 });
        });
