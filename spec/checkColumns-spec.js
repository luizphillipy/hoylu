const app = require("../index");
describe("Check if any column in the bingoCard has the DrawnNumbers", function (){
    it('The function should return false when no column match the DrawnNumbers ', function () {
        const value=app.checkColumns([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],[8,13,9,7,2])
        expect(value).toBe(false);

    });
    it("The function should return true when at least 1 column match the DrawnNumbers", function (){
        const value=app.checkColumns([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],[8,13,9,7,1])
        expect(value).toBe(true);
    });
});