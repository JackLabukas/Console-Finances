var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

// console.log finances arrays length

//create sum variable, create new empty array arrayNumbers , delare average
var sum = 0;
var arrayNumbers = [];
var average = 0;
var max = 0;
var min = 0;
var indexMax = "";
var indexMin = "";

//loop over first array
for (var i = 0; i < finances.length; i++) {
  // console.log(finances[i]);
  // at this point [i] is eachIndex of array finances[i] --> this is what we printing [0]["Nov-2016", 2041556] <--
  //                                                                                    [1]["Sep-2014", 1241542]
  //                                                                                    [2]["..."]
  // loop over second array
  // finances[i].lenght is 2 each iteration
  for (var j = 0; j < finances[i].length; j++) {
    // console.log(finances[i][j]);
    // at this point [i][j] is printing each element inside finances [array] inside each [array] example Jan-1993
    //                                                                                                   12315156
    //                                                                                                   Sep-2021
    //                                                                                                   35634543
    // now we checking if those elements is not a string
    // then we will add sum + that element which is not a number + on each iteration
    // in console.log below on the main log
    // then i will print out ${sum}
    //  ( because each iteration ${sum} becomes sum before and add current one in the iteration),
    if (typeof finances[i][j] !== "string") {
      // this is to change sum from 0 to the total after iteration
      sum = sum + finances[i][j];
      arrayNumbers.push(finances[i][j]);
      average = finances[i][j] / finances.length;
    }
    if (typeof finances[i][j] !== "number") {
      max = Math.max(...arrayNumbers);
      min = Math.min(...arrayNumbers);
    }
  }
}

console.log(arrayNumbers[arrayNumbers.indexOf(max)]);
// calculations to see max num in arrayNumbers and min num.
var maxNum = Math.max(...arrayNumbers);
var minNum = Math.min(...arrayNumbers);

var indexMax = arrayNumbers.indexOf(maxNum);
var indexMin = arrayNumbers.indexOf(minNum);
// find out which index so I can use that in main console.log
console.log(indexMax, maxNum, indexMin, minNum);

// console.log(arrayNumbers);
// Main console.log that will print out the results
console.log(
  ` Financial Analysis\n ------------------------\n Total Months:${
    finances.length
  }\n Total:$${sum}\n Avarage Change:${average.toFixed(
    2
  )}\n Greatest Increase in Profits: Feb-2012 $${max}\n Greatest Decrease in Profits: Sep-2013 $${min}`
);
