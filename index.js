var readlineSync = require('readline-sync');

var data = [
{name:"",
 prefinal:"",
 final:""
  },
  {name:"",
  prefinal:"",
  final:""
  },
  {name:"",
  prefinal:"",
  final:""
  },
  {name:"",
 prefinal:"",
 final:""
  },
  {name:"",
  prefinal:"",
  final:""
  }
]
var arrayOfMarks = []
var sumOfMarks = []

sum = 0
for (i= 0;i<5;i++){
  console.log(`student ${i}`)
  var name = readlineSync.question("what is your name? ")
  data[i].name =name
  var prefinal = readlineSync.question("what are your pre-final marks? ")
  
  data[i].prefinal = prefinal
  var premarks  = Number(prefinal)
  var final = readlineSync.question("what are your final marks? ")
  data[i].final = final
  var finalMark = Number(final)
  arrayOfMarks.push(data[i].final)
  var sum = premarks + finalMark
  sumOfMarks.push(sum)

 
  
}
console.log(`Highest marks are ${Math.max(...arrayOfMarks)}`)
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(`Average of 5 students is ${sumOfMarks.reduce(reducer)/5}`)
