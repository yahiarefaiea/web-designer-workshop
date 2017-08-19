//  SLIDES SYSTEM
function changeSlide(dir) {
  slide = $('.workshop').attr('data-slide')
  $('.'+slide).removeClass('active')
  
  index = slides.indexOf(slide)
  
  if(dir == 'next')
    active = slides[index+1]
  else if(dir == 'prev')
    active = slides[index-1]
  
  $('.workshop').attr('data-slide', active)
  $('.'+active).addClass('active')
  
  //  CHEERS SKIP
  function cheersSkip() {
    cheers = setTimeout(function() {
      $('.'+active).removeClass('active')
      if(dir == 'next') {
        $('.workshop').attr('data-slide', slides[index+2])
        $('.'+slides[index+2]).addClass('active')
      }
      else if(dir == 'prev') {
        $('.workshop').attr('data-slide', slides[index])
        $('.'+slides[index]).addClass('active')
      }
    }, 30000)
  }
  
  if (typeof cheers !== 'undefined') clearTimeout(cheers)
  if($('.workshop').is('#workshop01') && active == 'slide-7-6') cheersSkip()  //  Very Stupid!
  if($('.workshop').is('#workshop02') && active == 'slide-5-6') cheersSkip()  //  Very Stupid!
  if($('.workshop').is('#workshop03') && active == 'slide-4-6') cheersSkip()  //  Very Stupid!
  if($('.workshop').is('#workshop04') && active == 'slide-4-6') cheersSkip()  //  Very Stupid!
  if($('.workshop').is('#workshop05') && active == 'slide-4-6') cheersSkip()  //  Very Stupid!
}


//  ON DOCUMENT READY
$(document).ready(function() {
  
  //  STORE SLIDES
  slides = []
  if($('.workshop').is('#workshop01')) slides = workshop01  //  Very Stupid!
  if($('.workshop').is('#workshop02')) slides = workshop02  //  Very Stupid!
  if($('.workshop').is('#workshop03')) slides = workshop03  //  Very Stupid!
  if($('.workshop').is('#workshop04')) slides = workshop04  //  Very Stupid!
  if($('.workshop').is('#workshop05')) slides = workshop05  //  Very Stupid!
  
  
  //  SHIFT TO THE FIRST SLIDE ON PAGE LOAD
  setTimeout(function() { changeSlide('next') }, 1000)
  
  
  //  SHIFT TO THE NEXT SLIDE ON CLICK
  $(document).on('click', function() {
    changeSlide('next')
  })
  
  
  //  SHIFT TO THE NEXT SLIDE ON KEYDOWN
  $(document).keydown(function(e) {
    rightArrow = 39, leftArrow = 37
    e.preventDefault()
    
    switch (e.keyCode) {
      case rightArrow:
        changeSlide('next')
        break
      
      case leftArrow:
        changeSlide('prev')
        break
    }
  })
  
})