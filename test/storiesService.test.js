const { fetchTopStories } = require("../src/services/storiesServices");
const axios = require("axios");

// Mocking axios
jest.mock("axios");

describe("Stories Service", () => {
  it("should fetch top stories", async () => {
    axios.get.mockResolvedValue({
      data: { results: [{ title: "Test Story" }] },
    });

    const stories = await fetchTopStories();

    expect(stories).toBeDefined();
    expect(stories.length).toBeGreaterThan(0);
    expect(stories[0].title).toBe("Test Story");
  });
});
