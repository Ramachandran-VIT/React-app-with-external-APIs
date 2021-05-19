import { Dropdown, IDropdownStyles, Stack } from "@fluentui/react";
import { AxiosResponse } from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import youtube from "../api/youtube";

interface IVideoProps {
  videoSearch: string | undefined;
}

const maxResultsDropdown = [
  { key: "5", text: "5" },
  { key: "10", text: "10" },
  { key: "15", text: "15" },
  { key: "20", text: "20" },
  { key: "25", text: "25" },
];

const orderDropdown = [
  { key: "viewCount", text: "View Count" },
  { key: "relevance", text: "Relevance" },
  { key: "rating", text: "Rating" },
  { key: "date", text: "Date" },
];

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: "100%" },
};

const Video: FunctionComponent<IVideoProps> = ({ videoSearch }) => {
  const [maxResults, setMaxResults] = useState<string | null>("5");
  const [order, setOrder] = useState<string | null>("relevance");
  const [response, setResponse] = useState<Array<object>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: AxiosResponse<any> = await youtube.get("/search", {
        params: {
          order: order,
          maxResults: maxResults,
          q: videoSearch,
        },
      });
      setResponse(result.data.items);
    };
    if (videoSearch) {
      fetchData();
    }
  }, [videoSearch, order, maxResults]);

  return (
    <div>
      <h4>Video search results from YouTube</h4>
      <Dropdown
        label="Order By"
        options={orderDropdown}
        defaultSelectedKey="relevance"
        styles={dropdownStyles}
        onChange={(e) =>
          setOrder(orderDropdown[+e.currentTarget.id.slice(-1)].key)
        }
      />
      <Dropdown
        label="Select number of videos to fetch"
        options={maxResultsDropdown}
        defaultSelectedKey="5"
        styles={dropdownStyles}
        onChange={(e) =>
          setMaxResults(maxResultsDropdown[+e.currentTarget.id.slice(-1)].key)
        }
      />
      <div>
        {response.map((item: any) => {
          return (
            <div key={item.etag}>
              <div
                className="ms-Grid"
                dir="ltr"
                style={{ border: "1px solid black", margin: "5px 0 5px 0" }}
              >
                <div className="ms-Grid-row">
                  <Stack horizontal verticalAlign="center">
                    <div className="ms-Grid-col ms-sm4">
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                        width="120px"
                      />
                    </div>
                    <div className="ms-Grid-col ms-sm8">
                      <p>{item.snippet.description}</p>
                    </div>
                  </Stack>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
