let num = [1,2,3,4,5,6,7,8,9];
let ansnum = [0,0,0,0];
let playnum = [3,4,5,6];
let numleng = num.length;
let Hit = 0;
let Blow = 0;
let count = 0;
const number = () =>{
	count = 0;
	numleng = num.length;
	while(numleng){
		let J = Math.floor(Math.random() * numleng);
		let T = num[--numleng];
		num[numleng] = num[J];
		num[J] = T;
	}
	let C=0;
	while(C < 4){
		ansnum[C]=num[C];
		console.log(ansnum[C]);
		C++;
	}
}
const playans = () =>{
	let text = document.getElementById("player");
	let anstext = text.value.split('');
	playnum = anstext.map(Number);
	document.getElementById('result').innerHTML =playnum;
	ans();
}

const ans = () =>{
	Hit = 0; Blow = 0;
	for(let I = 0 ; I < 4 ; I++ ){
		if(playnum[I] == ansnum[I]){
			Hit++;
		}else{
			for(let N = 0; N < 4; N++){
				if(playnum[N] == ansnum[I]) Blow++;
				}
			}
		count++;
	}
	console.log("Hit:"+Hit+"  Blow:"+Blow);
	document.getElementById('result2').innerHTML =("Hit:"+Hit+"  Blow:"+Blow);

	if(Hit == 4) window.alert("Congratulation!!!");
}