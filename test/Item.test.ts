import Item from "../src/obj/Item";

function newItem(): Item {
    return new Item()
}

test('after initialisation item.Value should be 0', () => {
    expect(newItem().Value).toBe(0)
})

test('set item.Value', () => {
    const item = newItem()
    item.Value = 10
    expect(item.Value).toBe(10)
})