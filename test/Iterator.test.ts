import Iterator from "../src/tools/iterator"

const sampleArray = [1, 2, 3]
test('iterator initialisation', () => {
    const iter = new Iterator(sampleArray)
    expect(iter.HasNext()).toBe(true)
})

test('checking first values returned from iterator', () => {
  const iter = new Iterator(sampleArray)  
  const first = iter.Next()
  expect(first).toBe(1)
})

test('test last element of array returned from iterator', () => {
    const iter = new Iterator(sampleArray)
    let element = undefined
    while(iter.HasNext()) {
        element = iter.Next()
    }
    expect(element).toBe(3)
})

test('test previous element from the last element', () => {
    const iter = new Iterator(sampleArray)
    while(iter.HasNext()) {
        iter.Next()
    }
    iter.Previous()
    const element = iter.Previous()
    
    expect(element).toBe(2)
})

test('get last element from end iterator', () => {
  const iter = new Iterator(sampleArray)  
  while (iter.HasNext()) {
      iter.Next()
  }
  const lastElement = iter.Previous()
  expect(lastElement).toBe(3)
})

test('current step from iterator', () => {
  const iter = new Iterator(sampleArray)  
  expect(iter.CurrentStep).toBe(0)
  while (iter.HasNext()) {
      iter.Next()
  }
  expect(iter.CurrentStep).toBe(3)
})

test('test current element from iterator', () => {
    const iter = new Iterator(sampleArray)
    while (iter.HasNext()) {
iter.Next()
    }
    const element = iter.Previous()
    expect(iter.CurrentElement).toBe(element)
})