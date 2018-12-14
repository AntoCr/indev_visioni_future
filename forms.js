/*let elem = window.parent.document.getElementsByClassName("klynt-button")[0]; 
console.log(elem);*/

let button = "klynt-button";

top.postMessage("editMode");


$(document).on('keydown', function(){

	if(event.key == 'Enter'){
		let nodeList = document.getElementsByTagName('input');
		let names = [];
		let count = 0;
		for (let elem of nodeList){
			if (elem.value == ""){
				$(elem).popover('show');
			}
			else{
				$(elem).popover('destroy');
				names[count++] = elem.value;
			}
		}

		if (count == nodeList.length){
			top.postMessage({'elem':button,
			'names':names}, '*')
		}
	}

});