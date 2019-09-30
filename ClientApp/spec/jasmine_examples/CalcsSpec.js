describe("Calcs", function () {
    var Calcs = require('../../lib/jasmine_examples/Calcs');


    describe("Calcs testing", function () {

        it("converts a timespan measured in milliseconds to seconds", function () {
            const d1 = new Date('2019-10-30');
            const d2 = new Date('2019-9-30');

            const timespan = d1 - d2;

            expect(Calcs.tsToSeconds(timespan)).toEqual("2,570,400");
        });

        it("calling toDateString on a millisecond value returns a formatted date", function () {

            console.log(Math.round(100000000).toLocaleString());
        });

        it("toLocaleString returns number formatted with commas", function () {

          const d = new Date(Date.UTC(2019, 8, 30, 6));
            console.log(Calcs.toFormattedDate(d));
        });
    });


});
