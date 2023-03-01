export default function (fn, duration = 100) {
  let timer = null;
  return (...args) => {
    //传入一个函数，返回一个新的函数
    //如果传入参数args，在调用新函数的同时传入参数args
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration)
  };
}