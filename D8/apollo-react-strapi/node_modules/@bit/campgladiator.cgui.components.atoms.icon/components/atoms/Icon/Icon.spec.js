import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

describe('<Icon />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Icon name="check" />)).not.toThrow()
  })
})
