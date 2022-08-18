const app = require("../index");
describe("Get the nth column from the bingoCard ", function (){
    it('The function should return the nth column of the BingoCard ', function () {
        const value=app.getColumn([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],2)
        expect(value).toEqual([29,24,21,19,20]);

    });
});