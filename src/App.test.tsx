import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link - teste husky 2', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
