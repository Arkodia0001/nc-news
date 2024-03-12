import axios from "axios";

const newsApiUrl = axios.create({
  baseURL: "https://nc-news-project-lijk.onrender.com/api",
});

export const fetchArticles = () => {
  let endpoint = "/articles";
  return newsApiUrl.get(endpoint).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticle = (article_id) => {
  let endpoint = `/articles/${article_id}`;
  return newsApiUrl.get(endpoint).then(({ data }) => {
    return data.article;
  });
};

export const fetchComments = (article_id) => {
  let endpoint = `/articles/${article_id}/comments`;
  return newsApiUrl.get(endpoint).then(({data}) => {
    return data.comments;
  })
};
