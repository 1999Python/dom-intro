
function BillWithSettings() {

    var thecallCost = 0;
    var thesmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var smsCostTotal = 0;
    var callCostTotal = 0;

    function setcallCost(callCost) {

        thecallCost = callCost;

    }

    function makecallCost() {
        return thecallCost;
    }


    function setsmsCost(smsCost) {
        thesmsCost = smsCost;
    }

    function getsmsCost() {

        return thesmsCost;
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }


    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function makeCall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += thecallCost;
        }

    }

    function sendsms() {
        if (!hasReachedCriticalLevel()) {
            smsCostTotal += thesmsCost;
        }
    }

    function hasReachedCriticalLevel() {

        return getTotalCost() >= getCriticalLevel();

    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function getTotalcallCost() {
        return callCostTotal;
    }

    function getTotalsmsCost() {
        return smsCostTotal;
    }

    function totalClassName() {
        if (getTotalCost() > getWarningLevel()) {
            return "warning";
        }
    }
    function totalClassName1() {

        if (hasReachedCriticalLevel()) {
            return "danger";
        }
    }

    return {
        setcallCost,
        makecallCost,
        setsmsCost,
        getsmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        sendsms,
        getTotalCost,
        getTotalcallCost,
        getTotalsmsCost,
        totalClassName,
        totalClassName1,
        hasReachedCriticalLevel,

    }
}

