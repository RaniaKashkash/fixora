// Service type dropdown 
const selectBtn=document.querySelector('#service-type-dropdown .select-btn');

const items=document.querySelectorAll('#service-type-dropdown .item');

selectBtn.addEventListener("click",()=>{
  selectBtn.classList.toggle('open');
  selectBtn2.classList.add('open')
});
items.forEach((item=>{
  item.addEventListener("click",()=>{
    item.classList.toggle("checked")
    const checkedItems = item.closest("#service-type-dropdown .list-items").querySelectorAll("#service-type-dropdown .item.checked");
     const icon = item.querySelector("#service-type-dropdown .check-item");
    if (item.classList.contains("checked")) {
      icon.src = "./images/checked (2).png";
    } else {
      icon.src = "./images/not-checked.png";
    }
    let btnText=document.querySelector("#service-type-dropdown .btn-text");

    if(checkedItems && checkedItems.length>0){
      btnText.innerHTML=`${checkedItems.length} Selected`
    }else{
      btnText.innerHTML=`Service type`
    }
  })
}))

// Detailed service  dropdown 
const selectBtn2=document.querySelector('#detailed-service-dropdown .select-btn');
const items2=document.querySelectorAll('#detailed-service-dropdown .item');
selectBtn2.addEventListener("click",()=>{
  selectBtn2.classList.toggle('open')
});
items2.forEach((item2=>{
  item2.addEventListener("click",()=>{
    item2.classList.toggle("checked")
    const checkedItems2 = item2.closest("#detailed-service-dropdown .list-items").querySelectorAll("#detailed-service-dropdown .item.checked");
     const icon2 = item2.querySelector("#detailed-service-dropdown .check-item");
    if (item2.classList.contains("checked")) {
      icon2.src = "./images/checked (2).png";
    } else {
      icon2.src = "./images/not-checked.png";
    }
    let btnText2=document.querySelector("#detailed-service-dropdown .btn-text");

    if(checkedItems2 && checkedItems2.length>0){
      btnText2.innerHTML=`${checkedItems2.length} Selected`
    }else{
      btnText2.innerHTML=`Service type`
    }
  })
}))
const homeImage = document.querySelector(".home-image");
const serviceTitle = document.querySelector(".service-title");
const serviceDescription = document.querySelector(".service-description");

const icons = [
  document.querySelector(".home-icon-top"),
  document.querySelector(".home-icon-right"),
  document.querySelector(".home-icon-left")
];


// Home animation

const slides = [
  {
    image: "./images/home-image1.png",
    title: "Cleaning",
    description: `Professional cleaning services for a spotless<br>
                  and healthy home – from everyday tidying to<br>
                  deep cleaning kitchen & bathroom sanitizing,<br>
                  and upholstery care`,
    icons: [
      "./images/home-icon1.png",
      "./images/home-icon2.png",
      "./images/home-icon3.png"
    ]
  },
  {
    image: "./images/home-image2.png",
    title: "Electrical",
    description: `Reliable electrical services for a safe And<br/>
        efficient home – from fixing everyday issues to<br/>
        appliance repair, installation, and safety<br/>
        inspections .`,
    icons: [
      "./images/home-icon4.png",
      "./images/home-icon5.png",
      "./images/home-icon6.png"
    ]
  },
  {
    image: "./images/home-image3.png",
    title: "Plumbing",
    description: `Provide high-quality plumbing services,<br/>
     including leak repair, drain cleaning, faucet<br/>
      installation, and water network maintenance, by<br/>
       professional plumbers.`,
    icons: [
      "./images/home-icon7.png",
      "./images/home-icon8.png",
      "./images/home-icon9.png"
    ]
  }
];

const fadeElements = [
  serviceTitle,
  serviceDescription,
  ...icons
];

let currentIndex = 0;

function changeSlide() {
      fadeElements.forEach(el => el.classList.add('hidden'));

  homeImage.classList.remove("animate-right", "animate-left", "animate-zoom");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % slides.length;

    homeImage.src = slides[currentIndex].image;

    serviceTitle.textContent = slides[currentIndex].title;
    serviceDescription.innerHTML = slides[currentIndex].description;

    icons.forEach((icon, i) => {
      icon.src = slides[currentIndex].icons[i];
    });

        fadeElements.forEach(el => el.classList.remove('hidden'));
        homeImage.classList.remove("animate-right", "animate-left", "animate-zoom");

    if (currentIndex === 0) homeImage.classList.add("animate-right");
    else if (currentIndex === 1) homeImage.classList.add("animate-left");
    else homeImage.classList.add("animate-zoom");
  }, 300); 
}
changeSlide();

setInterval(changeSlide, 3000);


// Discount slider animatiom
let discountCurrentIndex = 0;

const discounImg = document.querySelector(".discount-img");
const discountSlides = [
  {
    image: "./images/discount-image.png",
  },
  {
    image: "./images/home-image2.png",
  },
  {
    image: "./images/photography-professional-plumber copy 1.png",
  }
];
function changeDiscountSlide() {
  discounImg.classList.remove("animate-right", "animate-left", "animate-zoom");

  setTimeout(() => {
    discountCurrentIndex = (discountCurrentIndex + 1) % discountSlides.length;

    discounImg.src = discountSlides[discountCurrentIndex].image;

    discounImg.classList.remove("animate-right", "animate-left", "animate-zoom");

    if (discountCurrentIndex === 0) discounImg.classList.add("animate-right");
    else if (discountCurrentIndex === 1) discounImg.classList.add("animate-left");
    else discounImg.classList.add("animate-zoom");
  }, 300); 
}
console.log(discountSlides);

changeDiscountSlide();

setInterval(changeDiscountSlide, 3000);
// Show question's answers
function toggle(event) {
  const img = event.currentTarget;
  const questionDetail = img.closest('.question-details');
  const answerDiv = questionDetail.querySelector('.question-answer'); 

  if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
    answerDiv.style.display = 'block';
    img.src = './images/cancel.png';
  } else {
    answerDiv.style.display = 'none';
    img.src = './images/plus.png'; 
  }
}