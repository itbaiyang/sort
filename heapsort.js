//堆排  选择排序

var arr_l = [4,5,3,2,7,9,0,1,5,4,8,9,2]
function headAdjust(elements, pos, len){
	var swap = elements[pos]
	var child = pos * 2 + 1
	while(child < len) {
		if(child + 1 < len && elements[child] < elements[child + 1]) {
			child +=1
		}
		if(elements[pos] < elements[child]){
			elements[pos] = elements[child]
			pos = child
			child = pos * 2 + 1
		}
		else{
			break;
		}
		elements[pos] = swap
	}
}
function buildHeap(elements){
	let i
	elements.length % 2 == 0 ? i = elements.length/2 -1 : i = (elements.length -1)/2-1
	for(; i >= 0; i--){
		headAdjust(elements, i, elements.length)
	}
}

function sort(elements) {
	buildHeap(elements)
	for(var i=elements.length-1; i>0; i--){
		var swap = elements[i]
		elements[i] = elements[0]
		elements[0] = swap
		headAdjust(elements, 0, i)
	}
}


console.log(arr_l);
sort(arr_l)
console.log(arr_l);
