import { AxiosResponse } from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import bingNews from "../api/bingNews";

interface INewsProps {
  newsSearch: string | undefined;
}

const News: FunctionComponent<INewsProps> = ({ newsSearch }) => {
  const [response, setResponse] = useState<Array<object>>([]);
  const [term, setTerm] = useState<string | undefined>('');

  useEffect(() => {
    const fetchNews = async () => {
      const result: AxiosResponse<any> = await bingNews.get("/search", {
        params: {
          q: term,
        },
      });
      setResponse(result.data.value);
    };
    if (term) {
      fetchNews();
    }
  }, [term]);

  useEffect(() => {
    if (newsSearch!==term) {
      setTerm(newsSearch);
    }
  }, [newsSearch, term]);

  return (
    <div>
      <h4>News results from Bing News</h4>
      <div>
        {response.map((item: any) => {
          return (
            <div
              key={item.name}
              style={{ margin: "5px 0 5px 0", border: "1px solid black" }}
            >
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
