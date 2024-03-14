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

export const increaseArticleVotes = (article_id) => {
  const patchBody = {
    inc_votes: 1
  }
  let endpoint = `/articles/${article_id}`
  return newsApiUrl.patch(endpoint, patchBody).then(({data}) => {
    return data.article
  })
}

export const decreaseArticleVotes = (article_id) => {
  const patchBody = {
    inc_votes: -1
  }
  let endpoint = `/articles/${article_id}`
  return newsApiUrl.patch(endpoint, patchBody).then(({data}) => {
    return data.article
  })
}

export const postNewComment = (article_id, commentToAdd) => {
  let endpoint = `/articles/${article_id}/comments`
  return newsApiUrl.post(endpoint, commentToAdd).then(({data}) => {
    return data.comment
  })
}