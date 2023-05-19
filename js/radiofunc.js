function radioBillWidget(){

    var callCost = 2.75
    var smsCost = 0.75

    var callTotal = 0
    var smsTotal = 0

    var billTotalRadio = 0;

    function smsSentRadio(callSms){

        if (callSms.toLowerCase() === "sms") {
            
            smsTotal += smsCost;

            billTotalRadio += smsTotal
        }
        
    return  billTotalRadio;
    }

    function callMadeRadio(callSms) {

        if (callSms.toLowerCase() === "call") {

            callTotal += callCost;

           billTotalRadio += callTotal;
    }

    return billTotalRadio;
}


    function sMsTotal(){
        return smsTotal;
    }

    function cAllTotal(){
        return callTotal;
    }

    function billTotalR(){
        return billTotalRadio;
    }


    function hasReachedCriticalLevel() {
        return billTotalRadio >= 50;
    }

    function hasReachedWarningLevel() {
        return billTotalRadio >= 30;
       
    }

    function classNameLevelW() {

        if (hasReachedWarningLevel()) {
            
            return "warning";
        }
    }

    function classNameLevelD() {
        if (hasReachedCriticalLevel()) {
            return "danger";
        }
    }
    return {
        smsSentRadio,
        callMadeRadio,
        sMsTotal,
        cAllTotal,
        billTotalR,
        classNameLevelD,
        classNameLevelW,
        hasReachedWarningLevel,
        hasReachedCriticalLevel
    }

 }