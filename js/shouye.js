$(function(){
	var wrapCon1=$("#wrapCon1");
	var header=$("header");
	var message=$("#message");
	touch.on("body","drag",$("#wrapper1"),function(e){
		var top=wrapCon1.offset().top;
		top=top/100;
		if(top<-1){
			header.css({
				background:"#D60024",
				transitions:"background 1s ease 1s",
				color:"#fff"
			})
			
			message.css({
				color:"#C4C4C4"
			})
		}else{
			header.css({
				background:"none"
			})
		}
	})
})
