var anArray = [1,2,2,1,3,3,3,10,4,1,2,2,4,4,4,5,5];

var getNumberWithFrequencyOfOne = function(arrayParam) {
	for (var i = 0; i < arrayParam.length; i++) {
		
		if (arrayParam.indexOf(arrayParam[i]) === arrayParam.lastIndexOf(arrayParam[i])) {
			return arrayParam[i];
		}
	}
}

console.log(getNumberWithFrequencyOfOne(anArray));