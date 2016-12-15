 var area1;
  $(document).on('click','.edit-button',function(e){
    var areaDiv=$(e.target).parent().siblings('.edit-div').attr('id');
    if(!area1) {
            area1 = new nicEditor({fullPanel : true}).panelInstance(areaDiv,{hasPanel : true});
        } else {
            area1.removeInstance(areaDiv);
            area1 = null;
        }
  });
