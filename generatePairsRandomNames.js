/*
Coding pairer-upper script.
*/

var names = [
'Wilson Pride',
'Tom Arron',
'John Hopkins',
'Elliott Soyer ',
'James Hide',
'Jane Doe',
'Jared Luther',
'Joshua Todd',
'Natoya Reynolds',
'Nick Patrick',
];


//function to generate random number
function getRandomIntInRange(min, max) {
	return Math.floor(Math.random() * (max-min+1)) - min;  
}

//function passing random functionaility to spliced function
function spliceRandomEntry(list){
  	var min = 0;
  	var max = list.length - 1;
  	var randomIndex = getRandomIntInRange(min, max);
	return list.splice(randomIndex, 1)[0];
}

function generateRandomPairs(nameList) {
	var pairs = [];
  
  	while(nameList.length > 0) {
      if (nameList.length === 1) {
		pairs.push([nameList.pop(), 'YO! I am alone?']);
      } else {
        var name1 = spliceRandomEntry(nameList);
        var name2 = spliceRandomEntry(nameList);
        pairs.push([name1, name2]);
      }
    }
  
  	return pairs;
}

var pairs = generateRandomPairs(names);

//call the function