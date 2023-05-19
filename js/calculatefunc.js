function calculateBillWidget() {

    var callCost = 2.75;
    var smsCost = 0.75;

    var billTotal = 0;

    function smsMade(listCallSms) {

        var currentList = listCallSms.split(",")

        for (var i = 0; i < currentList.length; i++) {

            var currentBill = currentList[i].trim();

            if (currentBill.toLowerCase() === "sms") {
                billTotal += smsCost;
            }
        }
        return billTotal;
    }

    function makeCall(listCallSms) {

        var currentList = listCallSms.split(",")

        for (var i = 0; i < currentList.length; i++) {

            var currentBill = currentList[i].trim();

            if (currentBill.toLowerCase() === "call") {

                billTotal += callCost;
            }
        }
        return billTotal;
    }

    function callSms(listCallSms) {

        var currentList = listCallSms.split(",")

        for (var i = 0; i < currentList.length; i++) {

            var currentBill = currentList[i].trim()

            if (currentBill.toLowerCase() === "call") {

                billTotal += callCost
            }

            else if (currentBill.toLowerCase() === "sms") {
                billTotal += smsCost
            }
        }
        return billTotal;
    }

   

    function errorOccurred() {
        return billTotal;
    }

    function hasReachedCriticalLevel() {
        return billTotal >= 30;
    }

    function hasReachedWarningLevel() {
        return billTotal >= 20;
    }

    function className() {
        if (hasReachedCriticalLevel()) {
            return "danger";
        }

        if (hasReachedWarningLevel()) {
            return "warning";
        }


    }

   
    return {
        smsMade,
        makeCall,
        errorOccurred,
        callSms,
        className,
        hasReachedWarningLevel,
        hasReachedCriticalLevel
    }

}