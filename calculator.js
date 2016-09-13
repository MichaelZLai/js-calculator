var calculator = {
  value: 0,
  clear: function(){
    return calculator.value = 0;  //clear memory//
  },
  add: function (x,y){  //addition//
    console.log(x+y, arguments.length);
    if (arguments.length ==2){
      return calculator.value = (x+y);
    }  else {
      return calculator.value = (calculator.value + x);
    }
  },
  subtract: function (x,y){  //subtraction//
    console.log(x-y);
    if (arguments.length ==2){
      return calculator.value = (x-y);
    }  else {
      return calculator.value = (calculator.value - x);
    }
  },
  multiply: function (x,y){  //multiplication//
    console.log(x*y);
    if (arguments.length ==2){
      return calculator.value = (x*y);
    }  else {
      return calculator.value = (calculator.value * x);
    }
  },
  divide: function (x,y){  //division//
    console.log(x/y);
    if (arguments.length ==2){
      return calculator.value = (x/y);
    }  else {
      return calculator.value = (calculator.value / x);
    }
  },
  power: function (x,y){  //exponent//
    console.log(Math.pow(x,y));
    return(Math.pow(x,y));
  },
  sqroot: function (x){  //square root//
    console.log(Math.sqrt(x));
    return(Math.sqrt(x));
  }

}
