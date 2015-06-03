$( document ).ready(function(){

	var count=1
	$('#display').text(count)
	 var interval = setInterval(countUp, 700);

    function clap(){
      return "CLAP!"
    }
    
	function countUp() {
		count++;
	$('#display').text(count)
		if (count===4){ 
	$('#display').text(clap()); 
		clearInterval(interval)
		} 
	} 
}) 

