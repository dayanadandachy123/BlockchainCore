// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockchainCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockchainCore/i);
    expect(titleElement).toBeInTheDocument();
});
