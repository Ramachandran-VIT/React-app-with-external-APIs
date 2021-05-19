import { FunctionComponent, useState } from "react";
import { Stack } from "@fluentui/react";
import Search from "./components/Search";
import Image from './components/Image';
import Video from './components/Video';
import News from './components/News';

const App : FunctionComponent = () => {
  const [term, setTerm] = useState<string | undefined>("");
  
  return (
    <div>
      <Stack horizontalAlign="center">
        <Search onSearchSubmit={setTerm}/>
      </Stack>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg4">
            <Stack horizontalAlign="center">
              <Image imageSearch={term} />
            </Stack>
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg4">
            <Stack horizontalAlign="center">
              <Video videoSearch={term} />
            </Stack>
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg4">
            <Stack horizontalAlign="center">
              <News newsSearch={term} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
