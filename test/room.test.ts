import Room from "../src/obj/Room"
import { Floors } from "../src/obj/Floors"
import GameObj from "../src/obj/GameObj"

const loc = new Room()  

function newRoom(): Room {
  return new Room()
}

function newObject(): GameObj {
  class TestObject extends GameObj {}
  return new TestObject()
}

test('after initialisation Room.Name field should be not defined', () => {
  
  expect(loc.Name.length).toBe(0)
})

test('after initialisation room.Description should be not defined', () => {
    expect(loc.Description.length).toBe(0)
})

test('after initialisation Room.Objects should be empty', () => {
  expect(loc.Objects.length).toBe(0)
})

test('after initialisation Room.Exits["east"] should be undefined', () => {
  expect(loc.Exits["east"]).toBeUndefined
})

test('after initialisation Room.Floors value has been none', () => {
  expect(loc.Floors[0][2]).toBe("NONE")
})

test('ttests set room.Name', () => {
  const rm = newRoom()
  rm.Name = "nazwa"
  expect(rm.Name).toBe("nazwa")
})

test('set new description to Room.Description', () => {
  const rm = newRoom()
  const desc = "to jest jakas tam opisownia"
  rm.Description = desc
  expect(rm.Description).toBe(desc)
})

test('test check validate arguments in room set floor', () => {
  const rm = newRoom()
  expect(() => {
  rm.Floors = [
    [Floors.grass, Floors.grass, Floors.grass]
  ]}).toThrow()
})

test('set valid parameters to Room.Floors', () => {
  const fl: Floors[][] = [
    [Floors.grass, Floors.none, Floors.stone],
    [Floors.grass, Floors.none, Floors.stone],
    [Floors.grass, Floors.stone, Floors.none]
  ]

  const rm = newRoom()
  rm.Floors = fl
  expect(rm.Floors).toBe(fl)
})

test('checking set exit to room', () => {
  const rm = newRoom()
rm.Exits.north = new Room()
expect(rm.Exits.north).toBeDefined()
})

test('add object to Room.objects', () => {
  const rm = newRoom()
rm.AddObject(newObject(), newObject(), newObject())
  expect(rm.Objects.length).toBe(3)
})

test('get objects with concrete coordinates', () => {
  const obj1 = newObject()
const obj2 = newObject()
  const obj3 = newObject()
  obj1.X = obj1.Y  = obj2.X = obj2.Y = 1
  obj3.X = 2
  obj3.Y = 1
  const rm = newRoom()
  rm.AddObject(obj1, obj2)
  rm.AddObject(obj3)
  expect(rm.getObject(1, 1)).toStrictEqual([obj1, obj2])
})

test('deleting object from room.objects', () => {
  const room = newRoom()
  const obj1 = newObject()
    const obj2 = newObject()
const obj3 = newObject()
room.AddObject(obj1, obj2, obj3)
room.removeObject(obj2)
expect(room.Objects.length).toBe(2)
expect(room.Objects.includes(obj2)).toBe(false)
})

test('testing respawn', () => {
  const rm = newRoom()
  const it1 = newObject()
  const it2 = newObject()
  const it3 = newObject()
  rm.AddObject(it1, it2, it3)
  expect(rm.Objects.length).toBe(3)
  rm.removeObject(it2)
  expect(rm.Objects.includes(it2)).toBe(false)
  rm.Update()
  expect(rm.Objects.length).toBe(3)
})