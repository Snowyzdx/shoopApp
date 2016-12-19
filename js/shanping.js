$(function(){
	var flag=true;
	var h=4.2;
	var c1=$("#center1");
	var h=$("#center1").height();
	var img1=$("#cImg1");
	var img2=$("#cImg2");
	var img3=$("#cImg3");
	var img4=$("#cImg4");
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
        paginationClickable: true,
		autoplayDisableOnInteraction:false,
		freeModeMomentumBounce:false,
		bounce:false,
//		effect : 'fade',
		onTouchStart:function(swiper,e){
			var currentS=mySwiper.activeIndex
			if(currentS==0){
				img1.hide();
			}
		},
		onTouchMove:function(swiper,e){
			var currentS=mySwiper.activeIndex
			var hChange=mySwiper.touches.startX-mySwiper.touches.currentX;
			var newh;
			if(currentS==0){//从第一张到第二张
				if(hChange>0){
				newh=hChange+h;
					if(newh>300){
						newh=300;
					}
				}
				$("#center1").css({
					height:newh+"px"
				});
				img2.show();
				//img动画
					img2.css({
						transformOrigin:"0% 0%",
						transform:"scale(5,5)",
						transition:"transform ease 1s"
					});
			}
			if(currentS==1&hChange<0){//从第二张到第一张
				var h2=$("#center1").height();
				newh=hChange*0.5+h2;
					if(newh<180){
						newh=180;
					}
				$("#center1").css({
					height:newh+"px"
				});
				img2.hide();
				img1.show();
			}
			if(currentS==1&hChange>0){//从第二张到第三张
				c1.hide();
				img3.show();
				img3.css({
					transform:"scale(5,5)",
					transition:"transform ease 1s"
				})
			}
			if(currentS==2&hChange<0){//从第三张到第二张
				
			}
			if(currentS==2&hChange>0){//从第三张到第四张
				img3.hide();
				img4.show();
				img4.css({
					transform:"scale(5,5)",
					transition:"transform ease 1s"
				})
			}
		}
 	});
})
