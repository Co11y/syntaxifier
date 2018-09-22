/*This script set page UI. */


String.prototype.unsp = function(){
	/*Delete all spaces from word. */

	return this.replace(/\s/g, '');
}


String.prototype.wordPos = function(n=1){
	/*Return start position of n-th word in sentence and -1 if not
	* founc. */

	if(n==1) return 0;
	let i=0, spaces=0;
	while(i<=this.length && spaces<n-1){
		if(this[i]==' ') spaces++;
		i++;
	}
	return i ? i : -1;
}


String.prototype.midPointPx = function(n){
	/*Return position in pixels of middle point of word in string. */

	return ( this.wordPos(n)+this.wordPos(n+1) )/2 * fontPxSize;
}



String.prototype.wordPosPx = function(n){
	/*Return position in pixels of middle point of word in string. */

	return this.wordPos(n) * fontPxSize;
}


const $ = (id) => {
	/*Returns array of nodes by its selector. */

	return Array.from(
		document.querySelectorAll(id)
	);
}


const $_ = (id) => {
	/*Returns first node in selector. Good to use when selecting by
	* id. */

	return $(id)[0];
}


/*CONST block*/
const input = $_('#input');
const shadowInput = $_('#shadowInput');
const result = $_('#result');
const sentenceExample = 'Фестиваль, що відбувся 18 квітня, залишив'+
	' по собі багато спогадів.';
const api = new API();
const apiDelay = 2000;


/*BEGIN block*/
let performanceBegin = 0;
let reqCache = ''
let reqTimer = -apiDelay;
let fontPxSize = 0;


input.oninput = e => {
	/*Resize <textarea> to fill all the text. */
	shadowInput.innerText = input.value;
	input.style.width = `${shadowInput.offsetWidth}px`;


	/*Set delayed server request. */

	if( input.value.length<3 ) return;
	if( reqCache.unsp() == input.value.unsp() ) return;
	if( performance.now()-reqTimer < apiDelay ) return;
	else
		setTimeout( () => input.oninput(), apiDelay );


	reqTimer = performanceBegin = performance.now();
	let url = reqCache = `parse/<callback>/<reqid>/${input.value}`;
	api.exec(url, 'api.callback', 'parseResult');
}


const parseResult = (data) => {
	performanceEnd = performance.now();
	console.log(`Request took ${performanceEnd-performanceBegin} ms`);
	console.log(data);
	reqCache = data.sentence;
}


(() => {
	/*Get font size in <textarea> in pixels. */

	let style = getComputedStyle(shadowInput, null);
	fontPxSize = parseFloat( style.getPropertyValue('font-size') );
}).call();


/*Set input height by start. */
input.value = sentenceExample;
input.oninput();
