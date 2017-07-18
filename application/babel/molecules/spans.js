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
  
})