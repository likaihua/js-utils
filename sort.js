/***
 * 冒泡排序
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr){
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {        //相邻元素两两对比
        var temp = arr[j+1];        //元素交换
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/***
 * 选择排序
 * @param arr
 */
function selectionSort(arr) {
  var len = arr.length;
  var minIndex = 0;
  for(var i = 0;i<len-1;i++){
    minIndex = i;
    for(var j = i+1;j<len;j++ ){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}