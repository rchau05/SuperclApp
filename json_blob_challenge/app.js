$(document).ready(function(){

 $.get('http://www.reddit.com/r/funny.json', render)
 });

function render(responseData){
  var children = responseData.data.children;
  children.forEach(function(item,i){
    var thumb = item.data.thumbnail;
    $("body").append("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
  })  
}

$(function(){
	var firstImage = $('#firstImage');
	firstImage.attr('src', mockData.data.children[0].data.thumbnail)
})

$('#intro').append("hi")

fullmovie4me.appspot.com