import Card from "../AppLayout/Components/Body/Card"
import mockData from '../utils/mockDataForTest'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

it('Should render Restaurant card or in BodyComponent',( ) => {
    render(<Card restaurantData={mockData} />)

    const resName = screen.getByText("Ba Dastoor");

    expect(resName).toBeInTheDocument();
})