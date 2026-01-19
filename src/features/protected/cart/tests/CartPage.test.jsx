import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartPage from '../CartPage';
import * as Context from '../../../../context/Context';

// Mock for the useProducts hook
jest.mock('../../../../context/Context', () => ({
  useProducts: jest.fn(),
}));

// Helper function to render with router
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CartPage with items', () => {
  const mockRemoveFromCart = jest.fn();
  const mockClearCart = jest.fn();

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    
    // Setup mock return value for useProducts with items in cart
    Context.useProducts.mockReturnValue({
      cart: [
        {
          id: 1,
          name: 'Test Product',
          price: 1000,
          quantity: 2,
          image: 'test-image.jpg',
        },
      ],
      removeFromCart: mockRemoveFromCart,
      clearCart: mockClearCart,
    });
  });

  test('renders cart items and total', () => {
    renderWithRouter(<CartPage />);

    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Kshs. 1000')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Kshs. 2000')).toBeInTheDocument();
    expect(screen.getByText(/Total: Kshs. 2000/)).toBeInTheDocument();
  });

  test('calls removeFromCart when remove button clicked', () => {
    renderWithRouter(<CartPage />);

    const removeButton = screen.getByText('X');
    fireEvent.click(removeButton);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
  });

  test('calls clearCart when clear cart button clicked', () => {
    renderWithRouter(<CartPage />);

    const clearButton = screen.getByText('Clear Cart');
    fireEvent.click(clearButton);

    expect(mockClearCart).toHaveBeenCalledTimes(1);
  });
});

describe('CartPage empty cart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup mock return value for useProducts with empty cart
    Context.useProducts.mockReturnValue({
      cart: [],
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
    });
  });

  test('shows empty cart message', () => {
    renderWithRouter(<CartPage />);

    expect(screen.getByText('Your cart is empty!')).toBeInTheDocument();
    expect(screen.getByText('Back to Shop')).toBeInTheDocument();
  });
});