import { it, describe, vi, beforeEach, expect} from 'vitest';
import { MemoryRouter } from 'react-router-dom'; // Fixed import
import HomePage from './HomePage';
import { render , screen, within} from '@testing-library/react'; // Added waitFor
import axios from 'axios';
import userEvent from '@testing-library/user-event';



vi.mock('../../components/Header', () => ({
  default: ({ cart }) => <div data-testid="header-mock">Header Mock - Cart items: {cart.length}</div>
}));


vi.mock('axios');

describe('HomePage Component', () => {
  let user;
  let loadCart;
  beforeEach(() => {

    loadCart = vi.fn();
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === '/api/products') {
        return {
          data: [{
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
          },
          {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
              stars: 4,
              count: 127
            },
            priceCents: 2095,
            keywords: ["sports", "basketballs"]
          }]
        }
      }
    })
    user = userEvent.setup();
  });

  it('renders HomePage with products',async () => {
    render(
    <MemoryRouter>
    <HomePage cart={[]} loadCart={loadCart} />
    </MemoryRouter>
    );
   const productContainers = await screen.findAllByTestId('product-container');
    
    expect(productContainers.length).toBe(2);

    within(productContainers[0]).getByTestId('product-image');
    within(productContainers[0]).getByTestId('product-rating-stars');
    within(productContainers[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs');
    within(productContainers[0]).getByText('87');
    within(productContainers[0]).getByText('$10.90');
  });

  it('adds product to cart', async () => {
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );
    const productContainers = await screen.findAllByTestId('product-container');
    const addToCartButton = within(productContainers[0]).getByTestId('add-to-cart-button');
    await user.click(addToCartButton);
    expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1
    });
    expect(loadCart).toHaveBeenCalled();
  });

});