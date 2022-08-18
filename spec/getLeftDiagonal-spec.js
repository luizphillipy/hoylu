const app = require("../index");
describe("Get the left diagonal beginning of the first element from the bingoCard ", function (){
    it('The function should return the left diagonal of the BingoCard ', function () {
        const value=app.getLeftDiagonal([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ])
        expect(value).toEqual([8,24,'FREE',53,72]);

    });
});