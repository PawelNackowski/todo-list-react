import { useHistory, useLocation } from "react-router-dom";
import Input from "../../tasks/Input";
import { Wrapper } from "./styled";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
   <Wrapper>
      <Input
        placeholder="Filtruj zadanie"
        value={query || ""}
        onChange={onInputChange}
      />
   </Wrapper>
  )
};

export default Search;