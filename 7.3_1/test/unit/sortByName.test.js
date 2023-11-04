const sorting = require("../../app");

describe("Books names test suit", () => {
    it("Books names should be sorted in ascending order", () => {
        const input = [
            "Гарри Поттер",
            "Властелин Колец",
            "Волшебник изумрудного города",
        ];
        const result = sorting.sortByName(input);
        const expected = [
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ];
        expect(result).toEqual(expected);
    });
    it("Throws exception if called without param", () => {
        expect(() => sorting.sortByName()).toThrow(TypeError);
    });
    it("There are identical books in the array", () => {
        expect(
            sorting.sortByName([
                "Властелин Колец",
                "Властелин Колец",
                "Гарри Поттер",
                "Волшебник изумрудного города",
            ])
        ).toEqual([
            "Властелин Колец",
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ]);
    });
});
