import {render, screen, cleanup} from '@testing-library/react'
import Todo from "../../components/todo"
import renderer from 'react-test-renderer'
afterEach(() => {
    cleanup()
})

test('should render the to do component', () => {
    const todo = { id: 1, title:'clean room', completed: false}
    render(<Todo todo={todo}/>);
    const toDoElement = screen.getByTestId(`todo-1`);
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent("clean room")
    expect(toDoElement).not.toContainHTML("<strike>")
})


test('should render the to do component', () => {
    const todo = { id: 5, title:'whatever', completed: true}
    render(<Todo todo={todo}/>);
    const toDoElement = screen.getByTestId(`todo-5`);
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent("whatever")
    expect(toDoElement).toContainHTML("strike")
})

test("matches snapchat", () => {
    const todo = { id: 1, title:'clean room', completed: false}
    const tree = renderer.create(<Todo todo={todo} />).toJSON()
    expect(tree).toMatchSnapshot()
})
