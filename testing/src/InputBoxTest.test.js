import { render, screen } from "@testing-library/react"
import InputBoxTest from "./InputBoxTest"

test('Test input box', () => {
    render(<InputBoxTest/>);
    const checkInput = screen.getByRole('textbox');
    const checkInputPlaceholder = screen.getByPlaceholderText('Enter name');
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute('name', 'user name');
    expect(checkInput).toHaveAttribute('id', 'user')
    expect(checkInput).toHaveAttribute('type', 'text')

})