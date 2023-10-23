import { describe, expect, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
  const props = {
    type: 'primary',
    children: 'Click Me',
    handleClick: () => {},
  }

  it('matches snapshot', () => {
    const button = Button(props)
    expect(button).toMatchSnapshot()
  })
})
