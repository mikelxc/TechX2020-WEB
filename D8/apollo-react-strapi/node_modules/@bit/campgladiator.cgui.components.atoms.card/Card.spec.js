import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('<Card />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Card />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(shallow(<Card className="my-card" />).hasClass('my-card')).toBe(true)
    expect(shallow(<Card className="my-card" />).hasClass('cg-card')).toBe(true)
  })
})
