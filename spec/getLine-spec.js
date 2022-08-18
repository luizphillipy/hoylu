const app = require("../index");
describe("Get the nth line from the bingoCard ", function (){
    it('The function should return the nth line of the BingoCard ', function () {
        const value=app.getLine([
            8, 29, 35, 54, 65,
            13, 24, 44, 48, 67,
            9, 21, 'FREE', 59, 63,
            7, 19, 34, 53, 61,
            1, 20, 33, 46, 72
        ],5)
        expect(value).toEqual([1,20,33,46,72]);

    });
});