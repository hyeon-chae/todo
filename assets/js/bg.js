const body = document.querySelector('body');

const IMG_NUM = 3;

paintImage = (imgNum) => {
  const img = new Image();
  img.src = `assets/img/${imgNum + 1}.jpg`;
  img.classList.add('bgImage');
  body.append(img);
};

genRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUM)
  // const number = Math.floor(Math.random())
  // const number = Math.random()
  // console.log(number);
  return number;
};

init = () =>{
  const randomNuber = genRandom();
  paintImage(randomNuber)
};
init();