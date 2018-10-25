const makeConstant = function(argument){
  return function(){
    return argument;
  }
}
const makeCounterFromN = function(number){
  return function(){
    return number++;
  }
}
const makeCounterFromZero = function(){
  let count = 0;
  return function(){
    return count++;
  }
}
const makeDeltaTracker = function(old){
  let result = {old:'', delta:'', new:''};
  return function(delta){
    if(delta==undefined){
      delta=0;
    }
    if(result.old == ''){
      result = {old: old, delta:delta, new: old+delta};
      return result;
    }
    result = {old:result.new, delta:delta, new: result.new+delta}
    return result;
  }
}
const makeFiboGenerator = function(secondElement,firstElement){
  if(firstElement!=undefined && secondElement!=undefined){
    let temp = firstElement;
    firstElement = secondElement;
    secondElement = temp;
  }
  if(firstElement==undefined){
    if(secondElement==undefined){
      secondElement = 1;
    }
    firstElement = 0;
  }
  let fibNumber = { fibValue: 0, oldValue:firstElement, newValue:secondElement};
  return function(){
    fibNumber = { fibValue: fibNumber.oldValue, oldValue: fibNumber.newValue, newValue:fibNumber.oldValue+fibNumber.newValue};
    return fibNumber.fibValue;
  }
}
const makeCycler = function(source){
  let index = 0;
  let length = source.length;
  let input = source.slice();
  return function(){
    return input[index++%length];
  }
}
const curry = function(func,first){
  return function(second,third){
    return func(first,second,third);
  }
}
const compose = function(func1,func2){
  return function(arg1,arg2){
    return func1(func2(arg1,arg2));
  }
}


exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
