import { describe, expect, it } from 'vitest'
import Input from './Input'

describe('Input', () => {
  const props = {
    id: 'email',
    type: 'text',
    label: 'Label',
  }

  it('matches snapshot', () => {
    const element = Input(props)
    expect(element).toMatchSnapshot()
  })
})

// TypeError: Cannot read properties of null (reading 'useState')
