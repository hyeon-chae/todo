// const clockContainer = document.querySelector('.js-clock'),
const clockTitle = document.querySelector('h1');

getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const customHours = `${hours > 13 ? hours - 12 : hours}`
  const dayAndNight = `${hours > 13 ? 'PM' : 'AM'}`
  // console.log(dayAndNight);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText =`${dayAndNight} ${customHours < 10 ? `0${customHours}` : customHours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
// getTime = () => {
//   const date = new Date();
//   console.log(date);
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   clockTitle.innerText =`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
// }

init = () => {
  getTime()
  setInterval(getTime, 1000);
}

init()