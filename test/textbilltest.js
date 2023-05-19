describe('Text Bill Widget' , function(){

    it("should return a 5.50 after 2 calls are made" , function(){

        let calculateBillText = TextbillWiget()

        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        assert.equal(5.50, calculateBillText.callMadeTotal());
    
    });

    it( "should return a 1.5 after 2 sms's made", function(){
        let calculateBillText = TextbillWiget()

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')

        assert.equal(calculateBillText.smsSentTotal(), 1.5);

    });

    it( "should return a total of 10.50 for 2 calls and 2 sms's ", function(){
        let calculateBillText = TextbillWiget()

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        assert.equal(calculateBillText.billTotal(), 10.50);

    });

    it( "should return 0.00 when other than either 'call' or 'sms' is passed for example. 'email','calling'", function(){
        let calculateBillText = TextbillWiget()

        assert.equal(calculateBillText.errorOccurred('email'), 0.00);

    });

    
    it("Should return a class name 'warning' if total is more than or equal to 30", function() {

        let calculateBillText = TextbillWiget();

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        assert.equal("warning",calculateBillText.classNameLevelW())
    })

      it("Should return a class name 'danger' if total is more than or equal to 50", function() {
        
        let calculateBillText = TextbillWiget();

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        calculateBillText.smsSent('sms')
        calculateBillText.smsSent('sms')
        calculateBillText.callMade('call')
        calculateBillText.callMade('call')

        assert.equal("danger", calculateBillText.classNameLevelD())
    })
});