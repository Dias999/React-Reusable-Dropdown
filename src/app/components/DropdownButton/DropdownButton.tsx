import { FC } from "react";
import * as S from "./styles";

type Props = {
  children: any;
  onClick?: () => void;
};

const DropdownButton: FC<Props> = ({ children, onClick }) => {
  return (
    <S.DropdownButtonContainer onClick={onClick} tabIndex={0}>
      {children}
    </S.DropdownButtonContainer>
  );
};

export default DropdownButton;
