/***
 * 柯里化函数
 * @param fn
 * @returns {Function}
 */
function currying(fn) {
  var slice = Array.prototype.slice;
  var initArgs = slice.call(arguments,1); // 获取初始参数
  var args = initArgs;
  return function(){
    var innerArgs = slice.call(arguments);
    if(!innerArgs.length){
      var finalArgs = args;
      args = initArgs;
      return fn.apply(null, finalArgs);
    }
    args = [].concat(args, innerArgs);
    return arguments.callee;
  }
}