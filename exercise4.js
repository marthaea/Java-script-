let exp = "2024-09-24";
let cur = "2024-09-31";
let quality = 7;
if (cur > exp){
    console.log("Do not use");
}
if(quality > 8){
    console.log("Good Quality");
} 
else if(quality >=5 && quality <8){
    console.log("Average Quality");
} 
else{
    console.log("Poor quality");
}