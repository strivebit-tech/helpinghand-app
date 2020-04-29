const randomNumber = () => {
  var minm = 1000;
  var maxm = 9999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};

export default randomNumber;
