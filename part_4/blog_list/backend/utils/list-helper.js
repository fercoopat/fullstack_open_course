export const dummy = (blogs = []) => {
  return 1;
};

export const totalLikes = (blogs = []) => {
  return blogs?.reduce((prev, curr) => prev + curr?.likes, 0);
};

export const favoriteBlog = (blogs = []) => {
  if (!blogs?.length) {
    return null;
  }
  return blogs?.reduce((prev, curr) => {
    return prev?.likes > curr?.likes ? prev : curr;
  }, blogs?.[0]);
};

export const sortBlogsByFav = (blogs = []) => {
  return blogs?.sort((a, b) => b?.likes < a?.likes);
};

export const mostBlogs = (blogs = []) => {
  if (!blogs?.length) {
    return null;
  }

  const authorCounts = {};

  blogs.forEach((blog) => {
    if (authorCounts[blog.author]) {
      authorCounts[blog.author]++;
    } else {
      authorCounts[blog.author] = 1;
    }
  });

  let topAuthor = null;
  let maxBlogs = 0;

  for (const author in authorCounts) {
    if (authorCounts[author] > maxBlogs) {
      maxBlogs = authorCounts[author];
      topAuthor = author;
    }
  }

  return {
    author: topAuthor,
    blogs: maxBlogs,
  };
};
