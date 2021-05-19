import axios from "axios";

export default axios.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com/news",
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-key": "8971165f41msh18d80ba71d773b8p18250djsneaa0afb0130d",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    useQueryString: true,
  },
  params: {
      safeSearch: "Strict",
      sortBy: "Date",
      freshness: "Day"
  }
});
