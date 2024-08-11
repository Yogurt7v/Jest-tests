beforeAll(() => console.log("1 -beforeAll"));
beforeEach(() => console.log("1 -beforeEach"));

test("", () => console.log("1 -test"));

afterAll(() => console.log("1 -afterAll"));
afterEach(() => console.log("1 -afterEach"));


describe("", () => {
    beforeAll(() => console.log("2 -beforeAll"));
    beforeEach(() => console.log("2 -beforeEach"));

    test("", () => console.log("2 -test"));

    afterAll(() => console.log("2 -afterAll"));
    afterEach(() => console.log("2 -afterEach"));

})