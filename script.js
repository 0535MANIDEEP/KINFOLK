

function openNav() {

  document.getElementById("my-menu-list").style.display = "block";

}

function closeNav() {
  document.getElementById("my-menu-list").style.display = "none";
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
  if (window.scrollY == 0) {
    currentWidth = 50
    resizableDiv.style.top = '19vh'

  }
  else if (window.scrollY > 0 && window.scrollY <= 100) {
    currentWidth = 50 - (19 * window.scrollY) / 100;
    console.log("cw=" + currentWidth) // Adjust the step as needed
    let a = 19 - (11 * window.scrollY) / 100;
    resizableDiv.style.top = a + 'vh'
  } else if (window.scrollY > 100 && window.scrollY <= 200) {
    currentWidth = 31.5 - (18.5 * (window.scrollY - 100)) / 100;
    console.log("cw=" + currentWidth) // Adjust the step as needed
    let a = 11 - (8 * (window.scrollY - 100)) / 100;
    resizableDiv.style.top = a + 'vh'
  }
  else {
    currentWidth = 13
    resizableDiv.style.top = '3vh'

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


  const slider = document.querySelector(".image-slider");

  const beforecontainer = document.querySelector(".before-image-container");
  const beforeimageElement = document.getElementById("before-image");
  const beforetitleElement = document.getElementById("before-title");
  const beforedescriptionElement =
    document.getElementById("before-description");

  const container = document.querySelector(".image-container");
  const imageElement = document.getElementById("image");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");

  const aftercontainer = document.querySelector(".after-image-container");
  const afterimageElement = document.getElementById("after-image");
  const aftertitleElement = document.getElementById("after-title");
  const afterdescriptionElement =
    document.getElementById("after-description");



  //first attempt
  // const leftHalf = document.querySelector(".image-container .left-half");
  // const rightHalf = document.querySelector(".image-container .right-half");

  // leftHalf.addEventListener("mouseover", () => {
  //   leftHalf.style.cursor = "url('https://www.kinfolk.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg') 50% 50%, auto";
  // });

  // rightHalf.addEventListener("mouseover", () => {
  //   rightHalf.style.cursor = "url('https://www.kinfolk.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg') 50% 50%, auto";
  // });

  //second atttempt
  // const halves = document.querySelectorAll(".image-container div");

  // halves.forEach((half) => {
  //   half.addEventListener("mouseover", (event) => {
  //     if (event.target === halves[0]) {
  //       // Change cursor for left half
  //       half.style.cursor = "url('https://www.kinfolk.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg') 50% 50%, auto";
  //     } else {
  //       // Change cursor for right half
  //       half.style.cursor = "url('https://www.kinfolk.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg') 50% 50%, auto";
  //     }
  //   });

  //   half.addEventListener("mouseout", () => {
  //     // Reset cursor to default when leaving either half
  //     half.style.cursor = "default";
  //   });
  // });

  container.addEventListener("mousemove", (event) => {
    const containerWidth = container.offsetWidth;
    const mouseX = event.clientX;

    // Accurately determine the half-width boundary for cursor changes
    const halfWidthBoundary =
      container.getBoundingClientRect().left + containerWidth / 2;

    if (mouseX < halfWidthBoundary) {
      container.style.cursor =
        "url('https://ik.imagekit.io/0nujz0cvk/chevron-left.png?updatedAt=1706181370585'), auto";
    } else {
      container.style.cursor =
        "url('https://ik.imagekit.io/0nujz0cvk/chevron-right.png?updatedAt=1706181400215'), auto";
    }
  });

  const images = [
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_033_on-white-img-1.jpg?updatedAt=1706090946759",
      title: "COMMUNION",
      description: "image 1",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_039_on-white-img-2.jpg?updatedAt=1706090946661",
      title: "ANGELA TRIMBUR",
      description: "image 2",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_045_on-white-img-3.jpg?updatedAt=1706090946753",
      title: "GABRIEL ESCAMEZ",
      description: "image 3",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_049_on-white-img-4.jpg?updatedAt=1706090946776",
      title: "ANNIE RAUWERDA",
      description: "image 4",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_053_on-white-img-5.jpg?updatedAt=1706090946767",
      title: "THE OLD GAYS",
      description: "image 5",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_059_on-white-img-6.jpg?updatedAt=1706090946773",
      title: "CLOSE KNIT",
      description: "image 6",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_069_on-white-img-7.jpg?updatedAt=1706090946668",
      title: "BICYCLES",
      description: "image 7",
    },
    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_070_on-white-img-8.jpg?updatedAt=1706090946746",
      title: "PEACE & QUIET",
      description: "image 8",
    },

    {
      url: "https://ik.imagekit.io/0nujz0cvk/carousel-images/K50_Spread_020_on-white-img-9.jpg?updatedAt=1706090946665",
      title: "CAROLINE POLACHEK",
      description: "image 9",
    },
  ];

  let beforecurrentImageIndex = undefined;
  beforecurrentImageIndex = images.length - 1;
  let currentImageIndex = undefined;
  currentImageIndex = 0;
  let aftercurrentImageIndex = undefined;
  aftercurrentImageIndex = 1;

  slider.addEventListener("click", clickHandler);

  function clickHandler(event) {
    const clickX = event.clientX;
    const containerWidth = slider.offsetWidth;

    if (clickX < containerWidth / 2) {
      previousImage();
    } else {
      nextImage();
    }
  }

  function updateImageDisplay() {
    const beforecurrentImage = images[beforecurrentImageIndex];
    beforeimageElement.src = beforecurrentImage.url;
    // beforetitleElement.textContent = beforecurrentImage.title;
    // beforedescriptionElement.textContent = beforecurrentImage.description;

    const currentImage = images[currentImageIndex];
    imageElement.src = currentImage.url;
    titleElement.textContent = currentImage.title;
    descriptionElement.textContent = currentImage.description;

    const aftercurrentImage = images[aftercurrentImageIndex];
    afterimageElement.src = aftercurrentImage.url;
    // aftertitleElement.textContent = aftercurrentImage.title;
    // afterdescriptionElement.textContent = aftercurrentImage.description;

    // container.classList.remove("active", "left", "right");
    // if (currentImageIndex === images.length - 1) {
    //   // Apply active class if coming from the last image
    //   container.classList.add("active");
    // } else if (currentImageIndex === 0) {
    //   container.classList.add("left");
    // } else {
    //   container.classList.add("right");
    // }
  }

  function nextImage() {
    beforecurrentImageIndex++;
    currentImageIndex++;
    aftercurrentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    if (beforecurrentImageIndex >= images.length) {
      beforecurrentImageIndex = 0;
    }
    if (aftercurrentImageIndex >= images.length) {
      aftercurrentImageIndex = 0;
    }
    updateImageDisplay();
  }

  function previousImage() {
    beforecurrentImageIndex--;
    currentImageIndex--;
    aftercurrentImageIndex--;
    if (beforecurrentImageIndex < 0) {
      beforecurrentImageIndex = images.length - 1;
    }
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    if (aftercurrentImageIndex < 0) {
      aftercurrentImageIndex = images.length - 1;
    }
    updateImageDisplay();
  }

  updateImageDisplay(); // Show the first image initially
});