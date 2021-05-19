import { ISearchBoxStyles, SearchBox } from "@fluentui/react";
import { FunctionComponent, useState } from "react";

const searchBoxStyles: Partial<ISearchBoxStyles> = {
  root: { width: 400 },
};

interface ISearchProps {
  onSearchSubmit: (term: string | undefined) => void;
}

const Search: FunctionComponent<ISearchProps> = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState<string | undefined>("");

  const onSearchBoxSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <form onSubmit={onSearchBoxSubmit}>
      <SearchBox
        styles={searchBoxStyles}
        onChange={(_, newValue) => setTerm(newValue)}
      />
    </form>
  );
};

export default Search;
