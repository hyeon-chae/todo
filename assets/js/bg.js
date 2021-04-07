const body = document.querySelector('body');
// const bgArea = body.querySelector('img');

const IMG_NUM = 20;

paintImage = (imgNum) => {
  const newimg = new Image();
  const bgArea = body.querySelector('img');
  bgArea.remove()
  newimg.src = `assets/img/img${imgNum + 1}.jpg`;
  newimg.classList.add('bg-img');
  // newimg.classList.add('bg-img-ani');
  
  body.append(newimg);
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

setInterval(init, 10000)
// init();