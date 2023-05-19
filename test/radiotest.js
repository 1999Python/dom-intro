describe('Radio Bill Widget' , function(){

    it("should return a 5.50 for 2 calls made" , function(){

        let calculateBillRadio = radioBillWidget()

    
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')

        assert.equal(5.50, calculateBillRadio.cAllTotal());
    
    });

    it( "should return a 1.50 for 2 sms sent", function(){

        let calculateBillRadio = radioBillWidget()

        calculateBillRadio.smsSentRadio('sms')
        calculateBillRadio.smsSentRadio('sms')
      

        assert.equal(1.50, calculateBillRadio.sMsTotal());

    });

    it( "should return a 7.00 for 2 sms are sent and 2 calls made", function(){

        let calculateBillRadio = radioBillWidget()

        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')

        calculateBillRadio.smsSentRadio('sms')
        calculateBillRadio.smsSentRadio('sms')
        
    
        assert.equal(10.50, calculateBillRadio.billTotalR());

    });

    it("Should return a class name 'warning' if total is more than or equal to 30", function() {

        let calculateBillRadio = radioBillWidget();
        
     
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
    

        assert.equal( "warning",calculateBillRadio.classNameLevelW())
    })

      it("Should return a class name 'danger' if total is more than or equal to 50", function() {
        
        let calculateBillRadio = radioBillWidget();

        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        calculateBillRadio.callMadeRadio('call')
        
        assert.equal("danger", calculateBillRadio.classNameLevelD())
    })

});