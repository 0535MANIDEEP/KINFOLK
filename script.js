

function openNav() {

  document.getElementById("my-menu-list").style.display="block";

}

function closeNav() {
  document.getElementById("my-menu-list").style.display="none";
}
const resizableDiv = document.getElementById('logo-kinfolk');
  let currentWidth = 50;
   
  window.addEventListener('scroll', (event) => {
    // Increase or decrease size based on scroll direction
    // currentSize += event.deltaY > 0 ? -10 : 10;

    // Ensure the size doesn't go below a certain limit
    // currentSize = Math.max(50, currentSize);

    // // Update the size of the div
    // resizableDiv.style.width = currentSize + 'px';
    // resizableDiv.style.height = currentSize + 'px';
    // currentWidth += event.deltaY > 0 ? 10 : -10; // Adjust the step as needed
    if(window.scrollY == 0 )
    {
      currentWidth = 50
      resizableDiv.style.top='19vh'

    }
    else if (window.scrollY > 0 && window.scrollY <= 100) {
      currentWidth = 50-(19*window.scrollY)/100;
      console.log("cw="+currentWidth) // Adjust the step as needed
      let a=19-(11*window.scrollY)/100;
      resizableDiv.style.top=a+'vh'
    }else if (window.scrollY > 100 && window.scrollY <= 200) {
      currentWidth = 31.5-(18.5*(window.scrollY-100))/100;
      console.log("cw="+currentWidth) // Adjust the step as needed
      let a=11-(8*(window.scrollY-100))/100;
      resizableDiv.style.top=a+'vh'
    }
     else{
      currentWidth = 13
      resizableDiv.style.top='3vh'

    }
    console.log(window.scrollY)
 // if (event.deltaY < 0)
    // {
    //   currentWidth +=-10
    // }
    // else if (event.deltaY === 1)
    // {
    //   resizableDiv.style.width =  '30%'
    // }
    // else if(event.deltaY === 2){
    //   resizableDiv.style.width =  '25%'
    // }
  // Ensure the width doesn't go below a certain limit
  currentWidth = Math.max(10, Math.min(50, currentWidth));

  // Update the width of the div
  resizableDiv.style.width = currentWidth + '%';
   
    
  });