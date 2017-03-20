//冒泡排序
const arr_l = [4,5,3,2,7,9,0,1,5,4,8,9,2]
function bubbleSort(arr){
	if(arr.length <= 1) {
		return arr
	}
	for(let j = 1; j < arr.length; j++){
		for(let i = 0; i < arr.length-j; i++){
			let temp = Number;
			if(arr[i] > arr[i+1]){
				temp = arr[i+1]
				arr[i+1] = arr[i]
				arr[i] = temp
			}
		}
	}
	return arr
}
console.log(arr_l, bubbleSort(arr_l));