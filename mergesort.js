//归并排序
var arr_l = [4,5,3,2,7,9,0,1,5,4,8,9,2]
function merge(left, right){
	var re = []
	while(left.length && right.length){
		if(left[0] < right[0]) {
			re.push(left.shift())
		}else{
			re.push(right.shift())
		}
		console.log(re)
	}
	return re.concat(left).concat(right)
}
function mergeSort(array){
	if(array.length == 1)
	{
		return array
	}else{
		var mid = Math.floor((array.length / 2))
		var left = array.slice(0,mid)
		var right = array.slice(mid)
		return merge(mergeSort(left),mergeSort(right))
	}
}
console.log(mergeSort(arr_l));