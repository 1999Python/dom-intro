// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const updateSettings3 = document.querySelector(".updateSettings");

const myButton3 = document.querySelector(".buttonAdd"); 

const callsTotalElem3 = document.querySelector(".callTotalSettings");

const smsTotalElem3 = document.querySelector(".smsTotalSettings");

const totalCostElem3 = document.querySelector(".totalSettings");

const callCostSetting3 = document.querySelector(".callCostSetting");

const smsCostSetting3 = document.querySelector(".smsCostSetting");

const criticalLevelSetting3 = document.querySelector(".criticalLevelSetting"); 

const warningLevelSetting3 = document.querySelector(".warningLevelSetting");

var callCost = 0;
var smsCost = 0;
var criticalLevel = 0;
var warningLevel = 0;
var callsTotal3 = 0;
var smsTotal3 = 0;
var totalCost3 = 0;

function updatingSettings(){
//get the value of the settings elements.

callCost = Number(callCostSetting3.value);
smsCost = Number(smsCostSetting3.value);
warningLevel = warningLevelSetting3.value;
criticalLevel = criticalLevelSetting3.value;

if(totalCost3 < criticalLevel){
    myButton3.disabled = false; 
    totalCostElem3.classList.remove("danger");
    totalCostElem3.classList.remove("warning");
}

}

function textBillTotal3() {

// var billTypeEntered3 = myText3.value;

var checkedRadioBtn3 = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn3){
var billTypeEntered3 = checkedRadioBtn3.value
}

if (billTypeEntered3 === "call") {
callsTotal3 += callCost
}
else if (billTypeEntered3 === "sms") {
smsTotal3 += smsCost;
}
console.log(callsTotal3)
callsTotalElem3.innerHTML = callsTotal3.toFixed(2);
smsTotalElem3.innerHTML = smsTotal3.toFixed(2);
totalCost3 = callsTotal3 + smsTotal3;
totalCostElem3.innerHTML = totalCost3.toFixed(2);

if (totalCost3 >= criticalLevel){
    totalCostElem3.classList.add("danger");
    myButton3.disabled = true; 
    
}
    else if (totalCost3 >= warningLevel){
    totalCostElem3.classList.add("warning");
    
}



}    

//add an event listener for when the 'Update settings' button is pressed
updateSettings3.addEventListener("click", updatingSettings);
myButton3.addEventListener("click", textBillTotal3);
