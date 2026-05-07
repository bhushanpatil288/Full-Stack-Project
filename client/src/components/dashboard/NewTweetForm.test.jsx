import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import NewTweetForm from "./NewTweetForm";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(() => ({ userData: { _id: "user-1" } })),
}));

vi.mock("../../api/api", () => ({
  newTweet: vi.fn(),
}));

describe("NewTweetForm", () => {
  let newTweetMock;

  beforeEach(async () => {
    const api = await import("../../api/api");
    newTweetMock = api.newTweet;
    newTweetMock.mockResolvedValue({ status: 201 });
    global.alert = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("submits new tweet data and shows success alert", async () => {
    render(<NewTweetForm />);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const submitButton = screen.getByRole("button", { name: /create/i });

    await userEvent.type(titleInput, "Hello world");
    await userEvent.type(descriptionInput, "This is a new tweet.");
    await userEvent.click(submitButton);

    expect(newTweetMock).toHaveBeenCalledWith({
      title: "Hello world",
      description: "This is a new tweet.",
    });
    expect(global.alert).toHaveBeenCalledWith("tweet created");
  });
});
