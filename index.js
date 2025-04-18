const links =document.querySelectorAll('a[href^="#"]');

link.forEach(
  link =>{
    link.addEventListener('click',(event)=>{
      event.preventDefault(); //default anchor link behavior

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo(
        {
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
    });
  });







$(document).ready(function(){
  $(".button").click(function(){
    var value =$(this).attr("data-filter");
    if(value=="all"){
      $(".filter").show("100");
    }
    else{
      $(".filter").not("."+value).hide("100")
      $(".filter").filter("."+value).hide("100")
    }
    $("ul.button").click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    })
  })
})

fetch('https://example.com/carousel-content')
.then(response => response.json())
.then(data => {
  // Populate the carousel with the retrieved content
  data.forEach(item => {
    // Create carousel item and append it to the carousel inner
    // Use the retrieved content to populate each carousel item
  });
})
.catch(error => console.error('Error fetching carousel content:', error));
