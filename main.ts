"use strict"
const calcNum = (base, diff) =>{
	let total = 1;
	for(let count = 0; count < diff; count++){
		total = total * (base - count);
	}
	return total;
}
const calcComb = (up, down)=>{
	const upN = calcNum(up, down);
	const downN = calcNum(down, down);
	return upN / downN;
}
const calcHiperGeom = () =>{
	const N = Number(document.getElementsByTagName("input")[0].value);
    const n = Number(document.getElementsByTagName("input")[1].value);
    const k = Number(document.getElementsByTagName("input")[2].value);
    let result:string;
	if(!(isNaN(N) && isNaN(n) && isNaN(k))){
		if(N >= n){
			if(n >= k){
				const res1 = calcComb(n, k);
				const res2 = calcComb(N - n, n - k);
				const res3 = calcComb(N,n);
				result = (res1 * res2) + " / " + res3 + " = " + ((res1 * res2) / res3);
			}else{
				result = "You can't have more correct numbers than balls drawn >:V";
            }
		}else{
			result = "You can't draw more balls than the amount of balls you have >:V";
		}
	}else{
		result = "You need to fill the data with numbers >:V";
    }
    document.getElementsByTagName("div")[0].innerHTML = result;
}
document.getElementsByTagName("input")[3].addEventListener("click", ()=>{
    calcHiperGeom();
});