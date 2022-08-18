const app = require("../index");
describe("Check if a sequence of numbers is equals of the Drawn Numbers", function (){
    it('The function should return true if the sequence and Drawn Numbers are equals', function () {
        const value=app.hasBingo([
            8, 29, 35, 54, 65],[8,29,35,54,65])
        expect(value).toBe(true);

    });

    it('The function should return false if the sequence and Drawn Numbers are not equals', function () {
        const value=app.hasBingo([
            8, 29, 35, 54, 65],[8,29,35,53,65])
        expect(value).toBe(false);

    });
});