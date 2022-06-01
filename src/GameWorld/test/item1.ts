import Item from "../../obj/Item";

function item1(): Item {
    const i = new Item()
i.Name = "jakis tam przedmiot"
i.Description = "to jest opis tego przedmiotu"
i.X = 1

    return i
}

export const Item1 = item1()