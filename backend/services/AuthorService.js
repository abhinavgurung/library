const getAllAuthors = async () => {
  const books = { name: 'test book' };
  return books;
};

const addAuthor = async (author) => {
  try {
    const result = await author.save();
    return { success: true, body: result };
  } catch (error) {
    console.log(error.message);
    return { success: false, error: error };
  }
};

module.exports = {
  getAllAuthors,
  addAuthor,
};
