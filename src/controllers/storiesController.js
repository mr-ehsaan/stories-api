const { fetchTopStories } = require('../services/storiesServices');

exports.getTopStories = async (req, res) => {
  try {
    const stories = await fetchTopStories();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stories" });
  }
};
