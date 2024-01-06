import Header from '../AppLayout/Components/Header/Header'
import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppStore from '../AppStore/AppStore'

it('Should render header component or not',() => {
    render(<BrowserRouter>
    <Provider store={AppStore}>
    <Header/> 
    </Provider>
    </BrowserRouter>);

    const header = screen.getByRole('list');

    expect(header).toBeInTheDocument();
})

it('should render home in header component',() => {
    render(<BrowserRouter>
        <Provider store={AppStore}>
        <Header/> 
        </Provider>
        </BrowserRouter>);
    
    const home = screen.getByText('Home');
    // console.log(home)

    expect(home).toBeInTheDocument();
})

it('should render cart in header component',() => {
    render(<BrowserRouter>
        <Provider store={AppStore}>
        <Header/> 
        </Provider>
        </BrowserRouter>);
    
    const cartItems = screen.getByText(/cart/);

    expect(cartItems).toBeInTheDocument();
})