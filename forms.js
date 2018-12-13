/*let elem = window.parent.document.getElementsByClassName("klynt-button")[0]; 
console.log(elem);*/

let button = "klynt-button";

$(document).on('keydown', function(){

	if(event.key == 'Enter'){
		let nodeList = document.getElementsByTagName('input');
		let count = 0;
		for (let elem of nodeList){
			if (elem.value == ""){
				$(elem).popover('show');
			}
			else{
				$(elem).popover('destroy');
				count++;
			}
		}

		if (count == nodeList.length){
			top.postMessage(button, '*')
		}
	}

});