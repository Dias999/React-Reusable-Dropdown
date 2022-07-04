import { FC } from "react";
import MoreIcon from "app/assets/MoreIcon";
import * as S from "./styles";

type Props = {
  children: any[];
};

const Dropdown: FC<Props> = ({ children }) => {
  console.log("children", children);
  return (
    <S.DropdownContainer data-testid="dropdown">
      <S.Button onClick={() => console.log("click")}>
        <MoreIcon size={24} />
      </S.Button>
      <S.DropdownListContainer>{children}</S.DropdownListContainer>
    </S.DropdownContainer>
  );
};

export default Dropdown;
