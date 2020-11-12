function main() {
	var jschartingElements = document.querySelectorAll('.jscharting');

	for (const jschartingElement of jschartingElements) {
		try {
			var jscConfig = getConfigFromElement(jschartingElement);
			JSC.Chart(jschartingElement, fillData(jscConfig));
		} catch (e) {
			jschartingElement.innerText = e;
		}
	}
}

function getConfigFromElement(element) {
	if (!element) {
		return null;
	}

	const jsonString = element.textContent;
	element.innerHTML = '';

	return JSON5.parse(jsonString);
}

window.addEventListener(
	"load",
	function () { main(); },
	false
);


function fillData(cfg){
	if(!cfg.series || cfg.series.length ===0){
		cfg.series = [
			{
				name:'Temporary Data',
				points:[
					{name:'A',y:20},
					{name:'B',y:50},
					{name:'C',y:150},
					{name:'D',y:75},
				]
			}
		];
	}
	return cfg;
}