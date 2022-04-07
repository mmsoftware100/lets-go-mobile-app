function Express (name,location,detail,phone) {
this.name= name;
this.location= location;
this.detail=detail;
this.phone=phone;

} 

var TestBus = new Express ("SWDT@2",["yangon","mandalay","taunggyi"],["yangon","mandalay","taunggyi"],["3333","2354"]);
var TestBus1 = new Express ("SWDT@2",["yangon","mandalay","taunggyi"],["yangon","mandalay","taunggyi"],["123445","2354"]);
var TestBus2 = new Express ("SWDT@2",["yangon","magaway"],["yangon","mandalay","taunggyi"],["123445","2354"]);

var ExpressBus=[TestBus,TestBus1,TestBus2];
var aarr = ExpressBus[0].name+ExpressBus[0].location+ExpressBus[0].detail+ExpressBus[0].phone;
var i;
function search(locat1,locat2){
	
	let	result=[];
	for(i = 0; i < ExpressBus.length; i++){
		
		var a = ExpressBus[i].location.indexOf(locat1);
		var b = ExpressBus[i].location.indexOf(locat2);
		if (a >= 0 && b >= 0){
			
			result.push(i);
			
		}
		else{
			
			 result;

		}
		
	}
	return result;
	//console.log("result is "+JSON.stringify(result));
}
var search=search("yangon","taunggyi");
console.log("result is "+JSON.stringify(search));
var q,r;
function result_express(search_index){
	var result_bus="";
	for(q=0;q<search_index.length;q++){
		r= search_index[q];
		result_bus+=ExpressBus[r].name+ExpressBus[r].location+ExpressBus[r].detail+ExpressBus[r].phone+"<br>";

	}
	return result_bus;
}

var result=result_express(search);
console.log("result is "+JSON.stringify(result));