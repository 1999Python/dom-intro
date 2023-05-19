
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



//function1 for my settings 
function updateSettingButton() {
//So the main guy settingsBill is linking with the baby functions and in the paratheneses 
//we using parse method that changes strings and returns them into numbers and only returns the 1st num
//we then call the dom settings and get the value whatever is passed into the textbox(the argument) 
    billSettings.setcallCost(parseFloat(callCostValue.value));//callCostValue
    billSettings.setsmsCost(parseFloat(smsCostValue.value));//smsCostValue
    billSettings.setWarningLevel(parseFloat(warningLevelSetting.value));//warningLevelSetting
    billSettings.setCriticalLevel(parseFloat(criticalLevelSetting.value));//criticalLevelSetting

    if (billSettings.getTotalCost() <= criticalLevelSetting && billSettings.getTotalCost() >= warningLevelSetting)
    //im referencing the factfunct and the baby function for the total less than or 
    //equal to the critical level setting and && both needs to be true more than an equal to warning settings
    //we checking that after it has been updated will the colors be removed.

    {
        totalSettings.classList.remove(billSettings.totalClassName1(criticalLevelSetting.value));//critical
        totalSettings.classList.add(billSettings.totalClassName(warningLevelSetting.value));//warning
    }

    else if (billSettings.getTotalCost() <= warningLevelSetting) {
        //unless its less than both warning and critical level then both colors need to be removed.
        totalSettings.classList.remove(billSettings.totalClassName(warningLevelSetting.value));//warning one I get confused should rename them
        totalSettings.classList.remove(billSettings.totalClassName1(criticalLevelSetting.value));//critical
    }

}

//add cost function 
function addCostButton() {
    
    // var checkedRadioBtn = document.querySelector("billItemTypeWithSetting");
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        
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
    


    if (billSettings.hasReachedCriticalLevel()) {
//if the total has reached critical level it should remove the warning color and add he red color.

        totalSettings.classList.add(billSettings.totalClassName1(criticalLevelSetting.value));//critical
        totalSettings.classList.remove(billSettings.totalClassName(warningLevelSetting.value));//warning
      
    }

    else if (billSettings.getTotalCost() >= warningLevelSetting) {

//if the total is more than and equal to the warning setting
// then add the warning color and remove critical color

        totalSettings.classList.add(billSettings.totalClassName(warningLevelSetting.value));//warning
        totalSettings.classList.remove(billSettings.totalClassName1(criticalLevelSetting.value));//critical
    }
}

radioAdd.addEventListener("click", addCostButton);

updateBtn.addEventListener("click", updateSettingButton);