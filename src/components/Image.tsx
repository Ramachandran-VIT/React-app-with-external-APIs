import { Stack } from "@fluentui/react";
import { AxiosResponse } from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import unsplash from "../api/unsplash";

interface IImageProps {
  imageSearch: string | undefined;
}

const Image: FunctionComponent<IImageProps> = ({ imageSearch }) => {
  const [response, setResponse] = useState<Array<object>>([]);

  useEffect(() => {
    const searchImage = async () => {
      const result: AxiosResponse<any> = await unsplash.get("/search/photos", {
        params: {
          query: imageSearch,
        },
      });
      setResponse(result.data.results);
    };

    if (imageSearch) {
      searchImage();
    }
  }, [imageSearch]);

  return (
    <div>
      <h4>Image search results from Unsplash</h4>
      <Stack horizontalAlign="center">
        {response.map((image: any) => {
          return (
            <div key={image.id}>
              <img src={image.urls.regular} alt={image.alt_description} width="250px" />
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default Image;
