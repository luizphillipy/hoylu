const app = require("../index");
describe("Check if any line, column or diagonal in the bingoCard has the DrawnNumbers", function (){
    it('The function should return false when neither diagonal, neither line nor column match the DrawnNumbers ', function () {
        const value=app.checkForBingo([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],[8,24,53,7,2])
        expect(value).toBe(false);

    });
    it('The function should return true when at least 1 diagonal match the DrawnNumbers ', function (){
        const value=app.checkForBingo([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],[8,24,53,72])
        expect(value).toBe(true);
    });

    it('The function should return true when at least 1 line match the DrawnNumbers ', function (){
        const value=app.checkForBingo([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],[13,24,44,48,67])
        expect(value).toBe(true);
    });

    it('The function should return true when at least 1 column match the DrawnNumbers ', function (){
        const value=app.checkForBingo([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],[65,67,63,61,72])
        expect(value).toBe(true);
    });
});