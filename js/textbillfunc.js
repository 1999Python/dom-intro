function TextbillWiget(){
    
    var callCost = 2.75
    var smsCost = 0.75
    
    var callTotal = 0
    var smsTotal = 0

    var billTotal2 = 0;
 
    function smsSent(callSms){

        if (callSms.toLowerCase() == "sms") {
            smsTotal += smsCost;
            billTotal2 += smsTotal
        }
        
    return  billTotal2;
    }


    function callMade(callSms) {

            if (callSms.toLowerCase() === "call") {

                callTotal += callCost;
               billTotal2 += callTotal;
        }

        return billTotal2;
    }

   
    function smsSentTotal(){
        return smsTotal;
    }

    function callMadeTotal(){
        return callTotal;
    }

    function billTotal(){
        return  billTotal2;
    }

    function errorOccurred() {
        return billTotal2;
    }

    function hasReachedCriticalLevel3() {
        return billTotal2 >= 50;
    }

    function hasReachedWarningLevel3() {
        return billTotal2 >= 30;
    }

    function classNameLevelW() {

        if (hasReachedWarningLevel3()) {
            
            return "warning";
        }
    }

    function classNameLevelD() {
        if (hasReachedCriticalLevel3()) {
            return "danger";
        }
    }


     return {
        smsSent,
        callMade,
        errorOccurred,
        smsSentTotal,
        callMadeTotal,
        billTotal,
        classNameLevelD,
        classNameLevelW,
        hasReachedWarningLevel3,
        hasReachedCriticalLevel3
     }
    }

