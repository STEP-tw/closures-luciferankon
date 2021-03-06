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
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(old){
  return function(delta=0){
    let result = {old: old, delta:delta, new: old+delta};
    old = old + delta;
    return result;
  }
}

const makeFiboGenerator = function(secondElement = 1,firstElement = 0){
  let firstTerm = Math.min(firstElement,secondElement);
  let secondTerm = Math.max(firstElement,secondElement);
  return function(){
    let fibNumber = firstTerm;
    firstTerm = secondTerm;
    secondTerm = fibNumber + firstTerm;
    return fibNumber;
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
