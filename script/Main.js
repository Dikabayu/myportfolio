
const navSlide = ()=>{
  const burger = document.querySelector(".burger")
  const navLists = document.querySelector("nav")
  
  burger.addEventListener("click", ()=>{
    navLists .classList .toggle ("hidden")
    burger .classList .toggle ("toggle-burger")
  });
};


navSlide ();

// clear form

window.onbeforunload = ()=>{
  for (const form of document.getElementsByTagName("form")){
    form.reset();
  };
};
