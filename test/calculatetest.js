describe('Calculate Bill Widget' , function(){

    it("should return 2.75 when a call is made." , function(){
        
        let calculateBill = calculateBillWidget()

        assert.equal(2.75, calculateBill.makeCall("call"),2.75);

    });

    it( "should return 0.75 when a sms is made.", function(){

        let calculateBill = calculateBillWidget()

        assert.equal(calculateBill.smsMade("sms"), 0.75);

    });

    it("should return 0.00 when other than 'call' or 'sms' is passed for example. 'email','calling'", function(){

        let calculateBill = calculateBillWidget()

        assert.equal(calculateBill.errorOccurred("calling"), 0.00);
    });

    it("should return the total of 7.00 for 2 calls and 2 sms's", function(){

        let calculateBill= calculateBillWidget()

        assert.equal(calculateBill.callSms("call, call, sms, sms"), 7.00);
    });

    it("Should return a class name 'warning' if total is more than or equal to 20", function() {

        let calculateBill = calculateBillWidget();

        calculateBill.callSms("call, call, call, call, call, call, call, call, call, call");
        assert.equal( "warning",calculateBill.className())
    })

      it("Should return a class name 'danger' if total is more than or equal to 30", function() {
        
        let billCalculate = calculateBillWidget();

        billCalculate.callSms("call, call, call, call, call, call, call, call, call, call, call");
        assert.equal("danger", billCalculate.className())
    })
});