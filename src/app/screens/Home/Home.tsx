import Dropdown from "app/components/Dropdown";
import DropdownButton from "app/components/DropdownButton";
import * as S from "./styles";

const Home = () => {
  const handleRename = () => {
    console.log("Rename");
  };
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <S.HomeContainer>
      <Dropdown>
        <DropdownButton onClick={handleRename}>Rename</DropdownButton>
        <DropdownButton onClick={handleDelete}>Delete</DropdownButton>
        <a href="http://www.f1.com">Share</a>
      </Dropdown>
    </S.HomeContainer>
  );
};

export default Home;
