import { useState } from "react";
import Dropdown from "app/components/Dropdown";
import DropdownButton from "app/components/DropdownButton";
import * as S from "./styles";

const Home = () => {
  const [isLeft, setIsLeft] = useState(false);

  const toggleAlignment = () => {
    setIsLeft((prev) => !prev);
  };

  const handleRename = () => {
    console.log("Rename");
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  const alignment = isLeft ? "left" : "right";
  return (
    <S.HomeContainer>
      <S.ToggleContainer onClick={toggleAlignment}>
        Toggle alignment: {alignment}
      </S.ToggleContainer>

      <Dropdown alignment={alignment}>
        <DropdownButton onClick={handleRename}>Rename</DropdownButton>
        <DropdownButton onClick={handleDelete}>Delete</DropdownButton>
        <a href="http://www.f1.com">Share</a>
      </Dropdown>
    </S.HomeContainer>
  );
};

export default Home;
