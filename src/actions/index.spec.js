import * as actions from "../actions";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(actions.addTodo("Use Redux")).toMatchObject({
      type: "ADD_TODO",
      text: "Use Redux",
    });
  });

  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(actions.setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active",
    });
  });

  it("toogleTodo should create TOGGLE_TODO action", () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: "TOGGLE_TODO",
      id: 1,
    });
  });
});
