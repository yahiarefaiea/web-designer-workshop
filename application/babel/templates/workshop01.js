$(document).ready(function() {
  
  parent = ['title1', 'title2', 'heading1', 'heading2', 'subtitle', 'normal1', 'normal2']
  
  $.each(parent, function(i, x) {
    children = $('.workshop #'+x).children()
    
    for (i = 0; i < children.length; i++) {
      child = $(children[i])
      words = child.text().split(' ')
      
      child.empty()
      
      $.each(words, function(i, y) {
        child.append($('<span>').text(y))
      })
    }
  })
  
  
  
  
  /////////////////////////////////////////////////////////////
  
  
  
  
  classes = [
    'slide-0',
    'slide-1-1', 'slide-1-2', 'slide-1-3', 'slide-1-4', 'slide-1-5', 'slide-1-6',
    'slide-2-1', 'slide-2-2', 'slide-2-3', 'slide-2-4', 'slide-2-5',
    'slide-2-6', 'slide-2-6-1', 'slide-2-6-2',
    'slide-2-7', 'slide-2-7-1', 'slide-2-7-2', 'slide-2-7-3', 'slide-2-7-4',
    
    'slide-3-1', 'slide-3-2', 'slide-3-3', 'slide-3-4', 'slide-3-5',
    'slide-4-1', 'slide-4-2', 'slide-4-3', 'slide-4-4',
    'slide-5-1', 'slide-5-2', 'slide-5-3', 'slide-5-4',
    
    'slide-6-1', 'slide-6-2', 'slide-6-3',
    
    'slide-7-1', 'slide-7-2', 'slide-7-3', 'slide-7-4', 'slide-7-5', 'slide-7-6', 'slide-7-7'
  ]
  
  
  
  
  function nextSlide() {
    
    active = $('#workshop01').attr('data-slide')
    $('.'+active).removeClass('active')
    
    index = classes.indexOf(active)
    
    newActive = classes[index+1]
    
    $('#workshop01').attr('data-slide', newActive)
    
    $('.'+newActive).addClass('active')
    
  }
  
  function previousSlide() {
    
    active = $('#workshop01').attr('data-slide')
    $('.'+active).removeClass('active')
    
    index = classes.indexOf(active)
    
    newActive = classes[index-1]
    
    $('#workshop01').attr('data-slide', newActive)
    
    $('.'+newActive).addClass('active')
  }
  
//  $(document).on('click', function() {
//    
//  })
  
  $(document).keydown(function(e) {
    next = 39, previous = 37
    
    switch (e.keyCode) {
      case previous:
        previousSlide();
        console.log('prev')
        e.preventDefault();
        break;
      
      case next:
        nextSlide();
        console.log('next')
        e.preventDefault();
        break;
    }
  });
  
})