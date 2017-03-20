//快速排序
const arr_l = [4,5,3,2,7,9,0,1,5,4,8,9,2]
function quickSort(arr){
	if(arr.length<=1){
		return arr
	}
	let pivotIndex = Math.floor(arr.length/2)
	let pivot = arr.splice(pivotIndex, 1)[0]
	let left = []
	let right = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i] <= pivot){
			left.push(arr[i])
		}else{
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot], quickSort(right))
}
var sortArr = quickSort(arr_l)
console.log(arr_l, sortArr);