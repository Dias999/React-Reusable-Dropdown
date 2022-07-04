import { FC, useState, useRef } from "react";
import MoreIcon from "app/assets/MoreIcon";
import useDetectClickOutsideRef from "hooks/useDetectClickOutsideRef";
import * as S from "./styles";

type Props = {
  children: any[];
};

const Dropdown: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useDetectClickOutsideRef(containerRef, () => setIsOpen(false));

  return (
    <S.DropdownContainer data-testid="dropdown" ref={containerRef}>
      <S.Button onClick={toggleDropdown}>
        <MoreIcon size={24} />
      </S.Button>
      <S.DropdownListContainer
        data-testid="dropdownList"
        isOpen={isOpen}
        tabIndex={-1}
      >
        {children}
      </S.DropdownListContainer>
    </S.DropdownContainer>
  );
};

export default Dropdown;
