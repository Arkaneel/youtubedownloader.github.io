 $(".download").click(function(){
      var url = $(".url-entry").val();
      var res = $(".format").children("option:selected").val();
    var src =""+url+"="+res+"";
    downloadVideo(url,res);
  });
  function downloadVideo(url,res) {
      $('.download-video').html('<iframe style="width:200px;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url='+url+'&f='+res+'"></iframe>');
  }

console.log("api fetched from node//Arkaneel//loader successfully");
