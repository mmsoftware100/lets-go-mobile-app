//////////////////////////////bus gate data///////////////////////////////////////

function Express (name,location,detail,phone) {
this.name= name;
this.location= location;
this.detail=detail;
this.phone=phone;

} 


//////////////////////////////////////Searching BusGate //////////////////////////////
var i;
function search(Bus_array,locat1,locat2){
	if(locat1==locat2){
		// alert("Error");
		document.getElementById("result").innerHTML = "ပြောင်းလဲရှာဖွေပါ";
	}
	else{
	result=[];
	for(i = 0; i < Bus_array.length; i++){
		
		var a = Bus_array[i].location.indexOf(locat1);
		var b = Bus_array[i].location.indexOf(locat2);
		if (a >= 0 && b >= 0){
			
			result.push(i);
			
		}
		else{
			
			 result;

		}
		
	}
	return result;
	// console.log("result is "+JSON.stringify(result));
}
}
///////////////////////////////////////////////////////////////////////////////
var q,r;
function result_expressname(Bus_array,search_index){
	if(search_index.length==0){
		// alert("There is no route");
		//document.getElementById("demo").innerHTML = "There is no route";
		return "ရှာမတွေ့ပါ";
	}
	else{
	var result_bus_name="";
	for(q=0;q<search_index.length;q++){
		r= search_index[q];
		result_bus_name+='<div class="expressname"  onclick="myFunction2()" id="'+r+'" style="cursor:pointer;background-color:blue;border-radius:10px;color:white;text-align:center;float:left">'+Bus_array[r].name+'</div>';

	}
	return result_bus_name;
}
}
///////////////////////////////// select box /////////////////////////////////////////////////
function create_select(Parent_div,array_cityname,select_idname)
{
// var myParent = document.body;
var myParent=document.getElementById(Parent_div)

//Create array of options to be added
// var array = ["Volvo","Saab","Mercades","Audi"];
var array = array_cityname;
//Create and append select list
var selectList = document.createElement("select");
selectList.id = select_idname;
myParent.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}
return selectList;
}
/////////////////////////////////////////////////////////////////////////
// var TestBus7 = new Express ("SWDT@1",["ရန်ကုန်","မန္တလေး","စစ်ကိုင်း"],["တောင်ကြီး-ရန်ကုန်","mandalay","taunggyi"],["reyrey445","2354"]);
// var TestBus1 = new Express ("SWDT@2",["ရန်ကုန်","mandalay","စစ်ကိုင်း"],["yangon","mandalay","taunggyi"],["123445","2354"]);
// var TestBus2 = new Express ("SWDT@3",["ရန်ကုန်","magaway"],["yangon","mandalay","taunggyi"],["123445","2354"]);
// var TestBus3 = new Express ("SWDT@4",["ရန်ကုန်","magaway","Sagaing"],["yangon","mandalay","taunggyi"],["123445","2354"]);
// var TestBus = new Express ("SWDT@5",["ရန်ကုန်","mandalay","taunggyi"],["yangon","mandalay","taunggyi"],["reyrey445","2354"]);
// var TestBus4 = new Express ("SWDT@6",["ရန်ကုန်","mandalay","taunggyi"],["yangon","mandalay","taunggyi"],["123445","2354"]);
// var TestBus5 = new Express ("SWDT@7",["ရန်ကုန်","magaway"],["yangon","mandalay","taunggyi"],["123445","2354"]);
// var TestBus6 = new Express ("SWDT@8",["ရန်ကုန်","magaway","Sagaing"],["yangon","mandalay","taunggyi"],["123445","2354"]);
//var ExpressBus=[TestBus1,TestBus2,TestBus3,TestBus4,TestBus5,TestBus6,TestBus7];
// var json = function () {
//     var jsonTemp = null;
//     $.ajax({
//         'async': false,
//         'url': "data.json",
//         'success': function (data) {
//             jsonTemp = data;
//             //alert("123");
//         }
//     });
//     return jsonTemp;
// }(); 
// console.log(json);
var ExpressBus=jsonbus;




// var jsoncity = function () {
//     var jsonTemp2 = null;
//     $.ajax({
//         'async': false,
//         'url': "town.json",
//         'success': function (data) {
//             jsonTemp2 = data;
//             //alert("123");
//         }
//     });
//     return jsonTemp2;
   
// }(); 
// console.log(jsoncity);
var city = jsoncity;
create_select('select_city1_box',city,'select_city1');
create_select('select_city2_box',city,'select_city2');


// on click try it 
function myFunction(){
//get value
var select_city1=document.getElementById('select_city1').value;
var select_city2=document.getElementById('select_city2').value;
// document.getElementById("select_city1_name").innerHTML = select_city1;
// document.getElementById("select_city2_name").innerHTML = select_city2;

//search(Bus_array,locat1,locat2)
var resultbus=search(ExpressBus,select_city1,select_city2);

//result_expressname(Bus_array,search_index)
var result_bus_name=result_expressname(ExpressBus,resultbus);
document.getElementById("result").innerHTML = result_bus_name;
}


function myFunction2(){

	
		var detailId=event.srcElement.id;
		//alert(detailId);
	
	function detail_name(Bus,index_detail){
		this.Bus=Bus;
		this.index_detail=index_detail;
		return answer=	Bus[index_detail].name;
		// ExpressBus[r].name
	
	}
	function detail_detail(Bus,index_detail){
		this.Bus=Bus;
		this.index_detail=index_detail;
		return answer=	Bus[index_detail].detail;
		// ExpressBus[r].name
	
	}
	function detail_phone(Bus,index_detail){
		this.Bus=Bus;
		this.index_detail=index_detail;
		return answer=	Bus[index_detail].phone;
		// ExpressBus[r].name
	
	}
// result_bus+=ExpressBus[r].name+ExpressBus[r].location+ExpressBus[r].detail+ExpressBus[r].phone+r+"<br>";
var detail_name=detail_name(ExpressBus,detailId);
var detail_detail=detail_detail(ExpressBus,detailId);
var detail_phone=detail_phone(ExpressBus,detailId);
var detailbox="";
var phonebox="";
// var detail_name = [4, 9, 16, 25];
document.getElementById("name").innerHTML = '<div class="busname"  style="cursor:pointer;border-radius:10px;text-align:center;">'+detail_name+'</div>';
//  console.log("result is "+JSON.stringify(detail_name));
// document.getElementById("name").innerHTML = detail_name;
// function namefun(item, index){
// 	 namebox = namebox + item + "<br>";
// }
detail_detail.forEach(detailfun);
document.getElementById("detail").innerHTML = detailbox;
detail_phone.forEach(phonefun);
document.getElementById("phone").innerHTML = phonebox;

var detailId="";
function detailfun(item, index){
	// detailbox =  item + "<br>";
	detailbox =detailbox +'<div class="detail_of_bus"  id="detail_of_bus" style="cursor:pointer;border-radius:10px;float:left;color:white;text-align:center;">'+ item+'</div>';

}
function phonefun(item, index){
	// phonebox = phonebox + item + "<br>";
	//phonebox = phonebox +'<div class="detail_of_bus"  id="detail_of_bus" style="cursor:pointer;width:100px;height;50px;background-color:green;border-radius:10px;float:left;color:white;text-align:center;">'+ item+'</div>';
	phonebox = phonebox +'<div class="phone_of_bus"  id="phone_of_bus" style="cursor:pointer;border-radius:10px;float:left;text-align:center;""><a style="text-decoration:none;color:#1E90FF;"href="tel:'+ item+'">'+ item+'</a></div>'

}
}



var all_detailbox='';
var all_name=ExpressBus;
all_name.forEach(all_bus);
document.getElementById("all_detail").innerHTML = all_detailbox;
console.log(all_detailbox);
function all_bus(item, index){
	// phonebox = phonebox + item + "<br>";
	all_detailbox = all_detailbox +'<div class="detail_of_bus"  id="'+index+'" onclick="myFunction2()"style="cursor:pointer;border-radius:10px;float:left;text-align:center;">'+ item['name']+'</div>';

}




$(document).ready(function(){
	$(document).on("click",".detail_of_bus",function(){
		//alert("haha4");
		$(".app_body").show();
		$(".all_detail").hide();
	})
	$(document).on("click","#home_btn",function(){
		//alert("haha");
		$(".all_detail").show();
		$(".app_body").hide();
		$("#result").hide();
	})
	$(document).on("click","#search_btn",function(){
		//alert("haha1");
		$("#result").show();
		$(".app_body").hide();
		$(".all_detail").hide();
		
	})

	$(document).on("click",".expressname",function(){
		//alert("haha1");
	
		$("#result").hide();
		$(".app_body").show();
		
	})

});


