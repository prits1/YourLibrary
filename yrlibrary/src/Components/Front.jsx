import React, { useRef , useEffect, useState} from "react";
import { IoMdSearch } from "react-icons/io";

function Front() {
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const [elementsToShow, setElementsToShow] = useState(3);

  useEffect(() => {
    const updateElementsToShow = () => {
      if (document.body.clientWidth < 640) {
        setElementsToShow(1);
      } else if (document.body.clientWidth < 1200) {
        setElementsToShow(2);
      } else {
        setElementsToShow(3);
      }}
      updateElementsToShow();

      window.addEventListener('resize', updateElementsToShow);
      return () => window.removeEventListener('resize', updateElementsToShow);
    },[]);
  
  useEffect(()=> {
    const SliderContainer = sliderContainerRef.current;
    const slider = sliderRef.current;
    const cards = slider.getElementsByTagName('li');

    const SliderContainerWidth = SliderContainer.clientWidth;
    const cardWidth = SliderContainerWidth / elementsToShow;

    slider.style.width = `${cards.length * cardWidth}px`;

    Array.from(cards).forEach(card => {
      card.style.Width = `${cardWidth}px`;
    });

    slider.style.marginLeft = '0px'; //Initialize marginLeft
  }, [elementsToShow]);
  const prev = () => {
    const slider = sliderRef.current;
    const SliderContainer = sliderContainerRef.current;
    const cardWidth = SliderContainer.clientWidth/3; // Adjust if necessary
    const newMarginLeft = parseFloat(slider.style.marginLeft) - cardWidth;

    if (newMarginLeft + slider.clientWidth > SliderContainer.clientWidth) {
      slider.style.marginLeft = `${newMarginLeft}px`;
    }
  };

  const next = () => {
    const slider = sliderRef.current;
    const SliderContainer = sliderContainerRef.current;
    const cardWidth = SliderContainer.clientWidth/3; // Adjust if necessary
    const newMarginLeft = parseFloat(slider.style.marginLeft) + cardWidth;

    if (newMarginLeft <= 0) {
      slider.style.marginLeft = `${newMarginLeft}px`;
    }
  };

  return (
    <div className="text-center">
      <div className="mx-2 grid md:grid-cols-12 text-center">
        <div className="font-abc text-center md:text-left md:col-span-5 min-h-[100px] text-4xl px-10 pt-12">
         WELCOME TO YOUR OPEN SOURCE LIBRARY 
          <p className="text-base m-1">Search for books across the globe..</p>
          <div className="relative group">
            <input
              type="text"
              placeholder="Search the book"
              className="search-bar px-10"
            />
            <IoMdSearch className="text-xl text-gray-700 group-hover:text-primary absolute top-1/2 -translate-y-1 left-48 duration-200 md:left-3 " />
          </div>
        </div>
        <div className=" md:col-span-7 min-h-[450px] ">
          <img src="./img/image 1.png" alt="" srcSet="" />
        </div>
      </div>
      <div className="text-3xl md:mt-10 ">About us</div>
      <div className="flex group ml-6">
        <img src="./img/image 3.png" alt="" srcset="" />
        <div className="flex group bg-amber-100 p-2 h-40 my-6 shadow-md text-left rounded-xl text-xs sm:text-sm sm:p-8 mr-20 md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          excepturi odio laboriosam nulla nobis ipsum nemo non alias. Mollitia
          eos odit incidunt aliquid tempora nulla in, voluptas atque ut magnam?
          Laborum, veniam!
        </div>
      </div>
      <div className="text-3xl ">
        Book Categories
          <section>
         <div className="flex">
          <div className="w-2/12 flex items-center">
          <div className="w-full text-right">
<button onClick={prev} className="p-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
          </div>
          </div>
          <div id="SliderContainer" className="w-8/12 overflow-hidden" ref={sliderContainerRef}>
            <ul id="Slider" className="flex w-full border border-hidden transition-margin duration-700" ref={sliderRef}>
          <li className="p-5">
          <div className="rounded-lg h-72 w-52 flex gap-2 my-10 mx-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/#Edu">
              <img
                className="rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_1280.jpg"
                alt="remote"
                srcset=""
                />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col translate-y-[60%] items-center justify-center p-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Education</h1>
              <p className="text-sm italic text-white mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus harum adipisci!</p>
            </div>
                </a>
          </div>
          </li>
         
          <li className="p-5">
          <div className="rounded-lg h-72 w-52 flex gap-2 my-10 mx-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/#mystery">
              <img
                className="rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_1280.jpg"
                alt="remote"
                srcset=""
                />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col translate-y-[60%] items-center justify-center p-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Mystery</h1>
              <p className="text-sm italic text-white mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus harum adipisci!</p>
            </div>
                </a>
          </div>
          </li> 
          <li className="p-5">
          <div className="rounded-lg h-72 w-52 flex gap-2 my-10 mx-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/#novel">
              <img
                className="rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_1280.jpg"
                alt="remote"
                srcset=""
                />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col translate-y-[60%] items-center justify-center p-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Novel</h1>
              <p className="text-sm italic text-white mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus harum adipisci!</p>
            </div>
                </a>
          </div>
          </li> 
          <li className="p-5">
          <div className="rounded-lg h-72 w-52 flex gap-2 my-10 mx-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/#biography">
              <img
                className="rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_1280.jpg"
                alt="remote"
                srcset=""
                />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col translate-y-[60%] items-center justify-center p-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Biography</h1>
              <p className="text-sm italic text-white mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus harum adipisci!</p>
            </div>
                </a>
          </div>
          </li> 
          <li className="p-5">
          <div className="rounded-lg h-72 w-52 flex gap-2 my-10 mx-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/#pop">
              <img
                className="rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_1280.jpg"
                alt="remote"
                srcset=""
                />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col translate-y-[60%] items-center justify-center p-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Populars</h1>
              <p className="text-sm italic text-white mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus harum adipisci!</p>
            </div>
                </a>
          </div>
          </li>
          <li className="p-5">
          <div className="rounded-lg h-72 w-52 flex gap-2 my-10 mx-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/#pop">
              <img
                className="rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_1280.jpg"
                alt="remote"
                srcset=""
                />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col translate-y-[60%] items-center justify-center p-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Others</h1>
              <p className="text-sm italic text-white mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus harum adipisci!</p>
            </div>
                </a>
          </div>
          </li>
            </ul>
          </div>
          <div className="w-2/12 flex items-center">
          <div>
<button onClick={next} className="p-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
          </div>
          </div>
         </div>
          </section>

          </div>
       </div>
  );
}

export default Front;
