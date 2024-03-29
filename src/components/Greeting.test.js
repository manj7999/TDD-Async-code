import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/Hello World/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    act(() => { // act ke andar function wrap kiya hai
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
      });
  

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    act(() => { // act ke andar function wrap kiya hai
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
      });

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
