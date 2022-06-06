import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renders App', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
    const content = screen.getByText(/Content/i)
    expect(content).toBeInTheDocument()
})
