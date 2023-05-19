//connectng Dom with Factory Function 
const billSettings = BillWithSettings();//factory function 

const updateBtn = document.querySelector(".updateSettings");//settings button
const radioAdd = document.querySelector(".buttonAdd");//radio button selecting sms and calls

const callTotalSettings = document.querySelector(".callTotalSettings");//total call
const smsTotalSettings = document.querySelector(".smsTotalSettings");//total sms
const totalSettings = document.querySelector(".totalSettings");//total

const callCostValue = document.querySelector(".callCostSetting");//call settings
const smsCostValue = document.querySelector(".smsCostSetting");//sms settings

const warningLevelSetting = document.querySelector(".warningLevelSetting");//warning settings
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");//critical settings


//
//function1 for my settings 
function updateSettingButton() {

    //So the main guy settingsBill is linking with the baby functions and in the paratheneses 
    //we using parse method that changes strings and returns them into numbers and only returns the 1st num
    //we then call the dom settings and get the value whatever is passed into the textbox(the argument) 

    billSettings.setcallCost(parseFloat(callCostValue.value));//callCostValue
    billSettings.setsmsCost(parseFloat(smsCostValue.value));//smsCostValue
    billSettings.setWarningLevel(parseFloat(warningLevelSetting.value));//warningLevelSetting
    billSettings.setCriticalLevel(parseFloat(criticalLevelSetting.value));//criticalLevelSetting

    totalSettings.classList.remove("warning");//removing manually instead of the factory functions 
    totalSettings.classList.remove("danger");

}

//add cost function 
function addCostButton() {
//tryna check if sms or call was checked 
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {

        // billItemType will be 'call' or 'sms'
        if (checkedRadioBtn.value === "sms") {
            billSettings.sendsms();
            //what im tryna say is that if the checkedradiobtn gets the value of "call" /"sms" 
            //then we should call the baby function makeCall and the same for sms 
        }
        else if (checkedRadioBtn.value === "call") {
            billSettings.makeCall();

        }

    }

    callTotalSettings.innerHTML = billSettings.getTotalcallCost().toFixed(2);

    smsTotalSettings.innerHTML = billSettings.getTotalsmsCost().toFixed(2);

    totalSettings.innerHTML = billSettings.getTotalCost().toFixed(2);


    totalSettings.classList.add(billSettings.totalClassName1())//warning level
    totalSettings.classList.add(billSettings.totalClassName());//critical

}

radioAdd.addEventListener("click", addCostButton);

updateBtn.addEventListener("click", updateSettingButton);