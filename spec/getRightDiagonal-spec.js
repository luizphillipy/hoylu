const app = require("../index");
describe("Get the right diagonal beginning of the last element of the first column element from the bingoCard ", function (){
    it('The function should return the right diagonal of the BingoCard ', function () {
        const value=app.getRightDiagonal([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ])
        expect(value).toEqual([1,19,'FREE',48,65]);

    });
});