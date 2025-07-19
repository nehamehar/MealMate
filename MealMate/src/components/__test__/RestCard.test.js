import {render, screen } from "@testing-library/react";
import Item from "../Item"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"
it ("should render RestaurantCard component with props Data", () => {
    render (<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    expect (name). toBeInTheDocument();
})

