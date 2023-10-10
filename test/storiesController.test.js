const { getTopStories } = require("../src/controllers/storiesController");
const { fetchTopStories } = require("../src/services/storiesServices");

// Mocking the storiesService
jest.mock("../src/services/storiesServices.js");

describe("Stories Controller", () => {
  it("should fetch top stories and return them", async () => {
    const mockStories = [{ title: "Test Story" }];

    // Mocking the fetchTopStories function to return our mock data
    fetchTopStories.mockResolvedValue(mockStories);

    // Mocking Express.js response and request
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    await getTopStories(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockStories);
  });
});
