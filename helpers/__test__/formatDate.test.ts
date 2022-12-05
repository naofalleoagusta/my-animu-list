import formatDate from '../formatDate'

describe('format date', () => {
  it('YYYY-MM', () => {
    expect(formatDate('2022-11')).toBe("1/11/2022")
  })
  it('YYYY-MM-DD ', () => {
    expect(formatDate('2022-11-30')).toBe("30/11/2022")
  })
  it('YYYY ', () => {
    expect(formatDate('2022')).toBe("1/1/2022")
  })
  
  it('YYYY-MM, showMonth=true', () => {
    expect(formatDate('2022-11',true)).toBe("1 Nov, 2022")
  })
  it('YYYY-MM-DD, showMonth=true', () => {
    expect(formatDate('2022-11-30',true)).toBe("30 Nov, 2022")
  })
  it('YYYY, showMonth=true', () => {
    expect(formatDate('2022',true)).toBe("1 Jan, 2022")
  })

  it('Invalid Date', () => {
    expect(formatDate('asdasd')).toBe("NaN/NaN/NaN")
  })

  
  it('Invalid Date, showMonth=true', () => {
    expect(formatDate('asdasd',true)).toBe("NaN NaN, NaN")
  })
})