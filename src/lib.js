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
const makeDeltaTracker = undefined;
//  return function(delta){
//    let result = {old:'',delta:'',new:''};
//    if(result.old=='' || delta==undefined){
//      result = {old:old, delta:0, new:old}
//      if(delta!=undefined){
//        result = {old:old, delta:delta, new:old+delta};
//      }
//      return result;
//    }
//    result={old:old+delta, delta:delta, new:old+delta};
//    return result;
//  }
//}
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
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
