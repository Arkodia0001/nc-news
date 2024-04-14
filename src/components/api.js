import axios from "axios";

const newsApiUrl = axios.create({
  baseURL: "https://nc-news-project-lijk.onrender.com/api",
});

export const fetchArticles = (topic, sortByQuery, orderQuery) => {
  let endpoint = `/articles`;
  
  const params = {topic: topic, sort_by: sortByQuery, order: orderQuery}

  return newsApiUrl.get(endpoint, {params}).then(({ data }) => {
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

export const deleteComment = (comment_id) => {
  let endpoint = `/comments/${comment_id}`
  return newsApiUrl.delete(endpoint).then(({data}) => {
    console.log(data)
  })
}

export const fetchTopics = () => {
  let endpoint = '/topics'
  return newsApiUrl.get(endpoint).then(({data}) => {
    return data.topics
  })
}

export const increaseCommentVotes = (comment_id) => {
  const patchBody = {
    inc_votes: 1
  }
  let endpoint = `/comments/${comment_id}`
  return newsApiUrl.patch(endpoint, patchBody).then(({data}) => {
    return data.article
  })
}

export const decreaseCommentVotes = (comment_id) => {
  const patchBody = {
    inc_votes: -1
  }
  let endpoint = `/comments/${comment_id}`
  return newsApiUrl.patch(endpoint, patchBody).then(({data}) => {
    return data.article
  })
}