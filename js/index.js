






setTimeout(function(){
  let moving = false;
  $(window).scroll(function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop)
    if(!moving){
      return
    }

    
    if(scrollTop<500){
      let num =  (500-scrollTop)*3.24
        $(".imgBgc1-5").css('right',-num)
    }
  
  
    if(scrollTop<300){
      $(".imgBgc2-4").css('bottom',620)
    }
    if(scrollTop>600 && scrollTop<1400){
     let num =  (1400-scrollTop)*0.61
     $(".imgBgc2-4").css('bottom',num+120)
    }
  
    if(scrollTop>1371 && scrollTop<1560){
     let num =  (1771-scrollTop)*1.63
     $(".imgBgc3-1").css('top',-num/2)
    }
  
  
    if(scrollTop>1500 && scrollTop<2400 ){
  
      let num =  (2400-scrollTop)
      $(".imgBgc3-3").css('top',num*0.4+280)
      $(".imgBgc3-4").css('top',num*0.8+280)
      $(".imgBgc3-5").css('top',num*1.3+280)
  
    }else if(scrollTop>2400){
  
      $(".imgBgc3-3").css('top',280)
      $(".imgBgc3-4").css('top',280)
      $(".imgBgc3-5").css('top',280)
  
    }
  
  
    if(scrollTop>2800 && scrollTop<3600 ){
      let num =  (3600-scrollTop)
      $(".imgBgc4-2").css('top',num*1.2)
      $(".imgBgc4-3").css('top',num*4.2)
      $(".imgBgc4-4").css('top',num*6.2)
      $(".imgBgc4-5").css('top',num*8.2+360)
    }else if(scrollTop>3600){
      $(".imgBgc4-2").css('top',0)
      $(".imgBgc4-3").css('top',0)
      $(".imgBgc4-4").css('top',0)
      $(".imgBgc4-5").css('top',360)
    }
  
  
    if(scrollTop>3400 && scrollTop<4200){
      let num =  (4200-scrollTop)
      $(".imgBgc5-1").css('top',num*1 + 70 )
      $(".imgBgc5-2").css('top',num*3  + 232)
      $(".imgBgc5-3").css('top',num*6  + 770)
    }else if(scrollTop>4200){
      $(".imgBgc5-1").css('top',70)
      $(".imgBgc5-2").css('top',232)
      $(".imgBgc5-3").css('top',770)
    }
  
    if(scrollTop>5000 && scrollTop<5400){
      let num =  (5400-scrollTop)
      $(".imgBgc6-1").css('top',num*0.61)
    }else if(scrollTop>5400){
      $(".imgBgc6-1").css('top',0)
    }
  
  
    if(scrollTop>5200 && scrollTop<5600){
      let num =  (5600-scrollTop)
      $(".imgBgc6-2").css('top',num*0.61+75)
    }else if(scrollTop>5600){
      $(".imgBgc6-2").css('top',75)
    }
  
  
    if(scrollTop>5400 && scrollTop<5800){
      let num =  (5800-scrollTop)
      $(".imgBgc6-3").css('top',num*0.61+283)
    }else if(scrollTop>5800){
      $(".imgBgc6-3").css('top',283)
    }
  
    if(scrollTop>4800 && scrollTop<6050){
      let num =  (6050-scrollTop)
      $(".imgBgc6-4").css('top',num*0.6+200)
    }else if(scrollTop>6050){
      $(".imgBgc6-4").css('top',200)
    }
  
    if(scrollTop>6600 && scrollTop<7300){
      let num =  (7300-scrollTop)
  
      $(".imgBgc7-3").css('top',num*0.7  + 260)
    }else if(scrollTop>7300){
  
      $(".imgBgc7-3").css('top',260)
    }
  
  
    if(scrollTop>6600 && scrollTop<7000){
      let num =  (7000-scrollTop)
      $(".imgBgc7-1").css('top',num*0.6 + 83 )
  
    }else if(scrollTop>7000){
      $(".imgBgc7-1").css('top',83)
  
    }
  
    if(scrollTop>6400 && scrollTop<6900){
      let num =  (6900-scrollTop)
      $(".imgBgc7-2").css('top',num*0.6 + 314 )
   
  
    }else if(scrollTop>6900){
      $(".imgBgc7-2").css('top',314)
  
    }
  
  
    if(scrollTop>6900 && scrollTop<7400){
      let num =  (7400-scrollTop)
  
   
      $(".imgBgc7-4").css('top',num*0.6  + 760)
    }else if(scrollTop>7400){
  
   
      $(".imgBgc7-4").css('top',760)
    }
  
  
  
    if(scrollTop>6200 && scrollTop<7200){
      let num =  (7200-scrollTop)
  
  
  
    }else if(scrollTop>7200){
  
    }
  
  })





  document.body.scrollIntoView()

  var video=document.getElementById("video"); 

  video.controls=false;

  new Vue({
    el: '#app',
    data: {
      bannerIndex: 0,
      bannerList:['./img/1/2.png','./img/1/2-1.png']
    },
    mounted(){
      let that=this
      this.$nextTick(function(){
        $(".boxCotainer").show()
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          on: {
            slideChange: function(swiper,event){
              let index=this.activeIndex;
              that.bannerIndex=index
              
              console.log(that.bannerIndex);

            },
          },
        })
      })
    }
  })


  $('#yegucheng').on('mousewheel', function (event) {
    console.log(123123)
    mv();
  });


  function mv() {
      if (moving) return;
      moving = true;
      var top = $('#header0').position().top;
      $('html,body').animate({scrollTop: top}, 700, function () {
          $('#yegucheng').remove();
          $('html,body').animate({scrollTop: 0}, 200);
      });
  }

},200)