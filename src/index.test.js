import expect from 'expect';

describe("Our first test", () => {
    it("should pass", () => {
        expect(true).toEqual(true);
    });

    it("should pass again", () => {
        expect(false).toEqual(false);
    });
});