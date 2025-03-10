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
