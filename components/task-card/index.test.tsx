import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskCard from "./index";
import Task from "./task";

describe("TaskCard", () => {
  render(<TaskCard />);

  it("checks task card component to be in document", () => {
    const taskCard = screen.getByTestId("task-card");
    expect(taskCard).toBeInTheDocument();
  });

  it("updates title when input value changes", () => {
    render(<TaskCard />);
    const titleInput = screen.getByPlaceholderText(
      "Title..."
    ) as HTMLInputElement;

    fireEvent.change(titleInput, { target: { value: "New Title" } });

    expect(titleInput.value).toBe("New Title");
  });

  it("adds a task and updates content", () => {
    render(<TaskCard />);
    const addButton = screen.getByText("Add Task");

    fireEvent.click(addButton);

    const contentInputs = screen.getAllByPlaceholderText(
      "Inner Content..."
    ) as HTMLInputElement[];
    fireEvent.change(contentInputs[0], { target: { value: "New Content 1" } });
    fireEvent.change(contentInputs[1], { target: { value: "New Content 2" } });

    expect(contentInputs[0].value).toBe("New Content 1");
    expect(contentInputs[1].value).toBe("New Content 2");
  });

  it("should remove a task when 'Remove' button is clicked", () => {
    render(<TaskCard />);
    const removeButton = screen.getByTestId("remove-button");
    act(() => {
      fireEvent.click(removeButton);
    })

    const taskInputs = screen.getAllByPlaceholderText(
      "Inner Content..."
    ) as HTMLInputElement[];

    expect(taskInputs).toHaveLength(1); // Only the initial task should remain
  });

  it("should display warning message when trying to remove the only task", () => {
    render(<TaskCard />);
    const removeButton = screen.getByTestId("remove-button");

    act(() => {
      fireEvent.click(removeButton);
    });

    const warningMessage = screen.getByText("Must have one task");
    expect(warningMessage).toBeInTheDocument();
  });
});

describe("Task", () => {
  test("renders Task component and triggers event handlers correctly", async () => {
    const mockHandleTitleChange = jest.fn();
    const mockHandleAddTask = jest.fn();
    const mockHandleContentChange = jest.fn();
    const mockHandleRemove = jest.fn();

    const data = {
      title: "Initial Title",
      content: [{ innerContent: "Content" }, { innerContent: "Content 2" }],
    };

    render(
      <Task
        data={data}
        handleTitleChange={mockHandleTitleChange}
        handleAddTask={mockHandleAddTask}
        handleContentChange={mockHandleContentChange}
        handleRemove={mockHandleRemove}
      />
    );

    const titleInput = screen.getByPlaceholderText(
      "Title..."
    ) as HTMLInputElement;
    const addButton = screen.getByRole("button", { name: /Add Task/ });
    const contentInputs = screen.getAllByPlaceholderText(
      "Inner Content..."
    ) as HTMLInputElement[];

    // Act
    fireEvent.change(titleInput, { target: { value: "New Title" } });
    fireEvent.click(addButton);

    fireEvent.change(contentInputs[0], {
      persist: mockHandleContentChange,
      target: { value: `New Content ${1}` },
    });
    fireEvent.change(contentInputs[1], {
      persist: mockHandleContentChange,
      target: { value: `New Content ${2}` },
    });

    // Assert
    expect(mockHandleTitleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleTitleChange).toHaveBeenCalledWith("New Title");

    expect(mockHandleAddTask).toHaveBeenCalledTimes(1);

    expect(mockHandleContentChange).toHaveBeenCalledTimes(2);
    expect(mockHandleContentChange).toHaveBeenCalledWith("New Content 1", 0);
    expect(mockHandleContentChange).toHaveBeenCalledWith("New Content 2", 1);
    expect(mockHandleContentChange).toHaveBeenCalledWith(expect.anything(), 0);
    expect(mockHandleContentChange).toHaveBeenCalledWith(expect.anything(), 1);

    expect(titleInput.value).toBe("New Title");
  });
});
