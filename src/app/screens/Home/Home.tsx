import Dropdown from "app/components/Dropdown";
import * as S from "./styles";

const Home = () => {
  const dropdownOptions = [
    "Rename",
    "Delete",
    <a href="http://www.f1.com">"Share"</a>,
  ];

  const renderOptions = () =>
    dropdownOptions?.map((option) => <div>{option}</div>);
  return (
    <S.HomeContainer>
      <Dropdown>{renderOptions()}</Dropdown>
    </S.HomeContainer>
  );
};

export default Home;
