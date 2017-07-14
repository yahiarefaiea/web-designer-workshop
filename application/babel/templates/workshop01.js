$(document).ready(function() {
  
  //  WRAP EACH WORD WITH A SPAN
  parents = ['title1', 'title2', 'heading1', 'heading2', 'subtitle', 'normal1', 'normal2']
  
  $.each(parents, function(i, parent) {
    children = $('.workshop #'+parent).children()
    
    for (i = 0; i < children.length; i++) {
      child = $(children[i])
      words = child.text().split(' ')
      child.empty()
      
      $.each(words, function(i, word) {
        child.append($('<span>').text(word))
      })
    }
  })
  
  
  
  //  SLIDES SYSTEM
  slides = [
    'slide-first',
    'slide-greeting',
    
    'slide-1-1', 'slide-1-2', 'slide-1-3', 'slide-1-4', 'slide-1-5', 'slide-1-6',
    'slide-2-1', 'slide-2-2', 'slide-2-3', 'slide-2-4', 'slide-2-5',
    'slide-2-6--1', 'slide-2-6-1', 'slide-2-6--2', 'slide-2-6-2','slide-2-6--3',
    'slide-2-7', 'slide-2-7-1', 'slide-2-7-2', 'slide-2-7-3', 'slide-2-7-4',
    
    'slide-3-1', 'slide-3-2', 'slide-3-3', 'slide-3-4', 'slide-3-5',
    
    'slide-break',
    
    'slide-4-1', 'slide-4-2', 'slide-4-3', 'slide-4-4',
    'slide-5-1', 'slide-5-2', 'slide-5-3', 'slide-5-4',
    
    'slide-6-1', 'slide-6-2', 'slide-6-3',
    
    'slide-assignment',
    
    'slide-7-1', 'slide-7-2', 'slide-7-3', 'slide-7-4', 'slide-7-5', 'slide-7-6', 'slide-7-7',
    'slide-last'
  ]
  
  function changeSlide() {
    slide = $('#workshop01').attr('data-slide')
    $('.'+slide).removeClass('active')
    
    index = slides.indexOf(slide)
    if(dir == 'next')
      active = slides[index+1]
    else if(dir == 'prev')
      active = slides[index-1]
    
    $('#workshop01').attr('data-slide', active)
    $('.'+active).addClass('active')
    
    if (typeof cheers !== "undefined") clearTimeout(cheers)
    if(active == 'slide-7-6') {
      cheers = setTimeout( function() {
        $('.slide-7-6').removeClass('active')
        
        $('#workshop01').attr('data-slide', 'slide-7-7')
        $('.slide-7-7').addClass('active')
      }, 30000)
    }
  }
  
  $(document).on('click', function() {
    dir = 'next'
    changeSlide()
  })
  
  $(document).keydown(function(e) {
    rightArrow = 39, leftArrow = 37
    
    switch (e.keyCode) {
      case rightArrow:
        dir = 'next'
        changeSlide()
        e.preventDefault()
        break
      
      case leftArrow:
        dir = 'prev'
        changeSlide()
        e.preventDefault()
        break
    }
  })
  
})