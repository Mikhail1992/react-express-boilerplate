import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'
import { BrowserRouter } from 'react-router-dom'

test('renders Header', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const content = screen.getByText(/Header/i)
    expect(content).toBeInTheDocument()
})
