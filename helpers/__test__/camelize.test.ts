import camelize from '../camelize'

describe('camelize', () => {
  it('return camelize', () => {
    expect(camelize('hello world')).toBe("helloWorld")
  })
})