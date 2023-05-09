import '@testing-library/jest-dom/extend-expect'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Accordion from '../Accordion'

describe('Testing rendering', () => {
  test('renders content', () => {
    render(
      <Accordion className="" text="view">
        Hidden
      </Accordion>,
    )
    expect(screen.getByText(/view/i)).toBeDefined()

    //screen.debug()
  })
})

describe('Testing Accordion', () => {
  test('at start the children are not displayed', () => {
    const { container } = render(
      <Accordion className="" text="Testing">
        <h2>Hidden</h2>
      </Accordion>,
    )

    const div = container.querySelector('.accordion-inner')
    expect(div).toHaveStyle('display: none')
  })

  test('after clicking the button, children are displayed', async () => {
    const { container } = render(
      <Accordion className="" text="view">
        Hidden
      </Accordion>,
    )

    const user = userEvent.setup()
    const button = screen.getByText('view')
    await user.click(button)

    //screen.debug()

    const div = container.querySelector('.accordion-inner')
    expect(div).not.toHaveStyle('display: none')
  })

  test('toggled content can be closed', async () => {
    const { container } = render(
      <Accordion className="" text="view">
        Hidden
      </Accordion>,
    )

    const user = userEvent.setup()

    const button = screen.getByText('view')
    await user.click(button)

    const closeButton = screen.getByText('close')
    await user.click(closeButton)

    const div = container.querySelector('.accordion-inner')
    expect(div).toHaveStyle('display: none')
  })
})
