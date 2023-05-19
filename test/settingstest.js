describe("Set values for Settings Bill Widget", function () {

    it("Should be able to set the call cost", function () {

        let settingsBill = BillWithSettings();
        settingsBill.setcallCost(1.85);
        assert.equal(1.85, settingsBill.makecallCost());
    })

    it("Should be able to set the call cost", function () {

        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setcallCost(2.75);

        assert.equal(2.75, settingsBill2.makecallCost());
    })

    it("Should be able to set the call and sms cost", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setcallCost(2.75);
        settingsBill.setsmsCost(0.85);
        settingsBill.setWarningLevel(20);
        settingsBill.setCriticalLevel(50);

        assert.equal(0.85, settingsBill.getsmsCost());
        assert.equal(2.75, settingsBill.makecallCost());


    })

    it("Should be able to set the warning levels", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20);

        assert.equal(20, settingsBill.getWarningLevel());
    })

    it("Should be able to set the critical levels", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(50);

        assert.equal(50, settingsBill.getCriticalLevel());
    })

    it("Should be able to set the warning and critical level", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(100);
        settingsBill.setCriticalLevel(200);

        assert.equal(100, settingsBill.getWarningLevel());
        assert.equal(200, settingsBill.getCriticalLevel());


    })


});


describe("Use Values for Settings Bill Widget", function () {

    it("Should be able to use the call cost set for 3 calls at 2.25", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(7.99);
        settingsBill.setcallCost(2.25);
        settingsBill.setsmsCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalcallCost());
        assert.equal(0.00, settingsBill.getTotalsmsCost());


    })

    it("Should be able to use the call cost set for 2 calls at 1.35", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(7.99);
        settingsBill.setcallCost(1.35);
        settingsBill.setsmsCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalsmsCost());
        assert.equal(2.70, settingsBill.getTotalcallCost());

    })

    it("Should be able to use the sms cost set for 4 sms at 1.59", function () {

        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(20.99);
        settingsBill.setcallCost(1.90);
        settingsBill.setsmsCost(1.59);

        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.sendsms();

        assert.equal(6.36, settingsBill.getTotalCost());
        assert.equal(6.36, settingsBill.getTotalsmsCost());
        assert.equal(0.00, settingsBill.getTotalcallCost());

    })

    it("Should be able to use the sms cost set for 3 sms at 1.99", function () {

        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(20.99);
        settingsBill.setcallCost(2.98);
        settingsBill.setsmsCost(1.99);


        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.sendsms();


        assert.equal(5.97, settingsBill.getTotalCost());
        assert.equal(5.97, settingsBill.getTotalsmsCost());
        assert.equal(0.00, settingsBill.getTotalcallCost());

    })

    it("Should be able to use the sms cost set for 2 sms at 1.99 and 2 calls at 2.98", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(20.99);
        settingsBill.setcallCost(2.98);
        settingsBill.setsmsCost(1.99);


        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(9.94, settingsBill.getTotalCost());
        assert.equal(3.98, settingsBill.getTotalsmsCost());
        assert.equal(5.96, settingsBill.getTotalcallCost());

    })


});

describe("Warning and Critical Level for Settings Bill Widget", function () {

    it("Should be able to return a class name 'warning' set if warning level is reached", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setcallCost(2.98);
        settingsBill.setsmsCost(1.99);
        settingsBill.setWarningLevel(5.00);
        settingsBill.setCriticalLevel(10.99);


        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("warning", settingsBill.totalClassName());

    })

    it("Should be able to return a class name 'critical' set if critical level is reached", function () {

        let settingsBill3 = BillWithSettings();

        settingsBill3.setcallCost(2.08);
        settingsBill3.setsmsCost(0.61);
        settingsBill3.setWarningLevel(5.00);
        settingsBill3.setCriticalLevel(7.99);

        settingsBill3.sendsms();
        settingsBill3.sendsms();
        settingsBill3.makeCall();
        settingsBill3.makeCall();
        settingsBill3.makeCall();
        settingsBill3.makeCall();
        settingsBill3.makeCall();
        settingsBill3.makeCall();

        assert.equal("critical", settingsBill3.totalClassName1());


    })

    it("Should stop the Total call cost from increasing when the critical level has been reached", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setcallCost(2.00);
        settingsBill.setsmsCost(1.00);
        settingsBill.setWarningLevel(5.00);
        settingsBill.setCriticalLevel(12.00);


        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName1());
        assert.equal(12.00, settingsBill.getTotalcallCost());

    })

    it("Should stop the Total sms cost from increasing when the critical level has been reached", function () {

        let settingsBill = BillWithSettings();

        settingsBill.setcallCost(2.00);
        settingsBill.setsmsCost(1.99);

        settingsBill.setCriticalLevel(10.00);


        settingsBill.sendsms();
        settingsBill.sendsms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName1());
        assert.equal(8.00, settingsBill.getTotalcallCost());
    })


    it("Should allow the total to increase if the critical level has been increased", function () {
       
        let settingsBill = BillWithSettings();
      
        settingsBill.setcallCost(2.00);
        settingsBill.setsmsCost(0.85);
        settingsBill.setWarningLevel(8.00);
        settingsBill.setCriticalLevel(10.00);
      
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        
        assert.equal("critical", settingsBill.totalClassName1());
        
        assert.equal(12.00, settingsBill.getTotalcallCost());

        settingsBill.setWarningLevel(8.00);
        settingsBill.setCriticalLevel(20.00);
       
        assert.equal("warning", settingsBill.totalClassName());

        settingsBill.makeCall();
        settingsBill.makeCall();
      
        
        assert.equal(16.00, settingsBill.getTotalcallCost());
      });
      

});

