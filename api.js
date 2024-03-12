import axios from "axios";

const newsApiUrl = axios.create({
    baseURL: "https://nc-news-project-lijk.onrender.com/api"
})

export const fetchArticles = () => {
    let endpoint = '/articles'
    return newsApiUrl.get(endpoint).then(({ data }) => {
      return data.articles;
    });
  };