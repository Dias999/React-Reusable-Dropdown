import { FC, useState, useRef, ReactElement } from "react";
import MoreIcon from "app/assets/MoreIcon";
import useDetectClickOutsideRef from "hooks/useDetectClickOutsideRef";
import * as S from "./styles";

export type Alignment = "left" | "right";

type Props = {
  alignment?: Alignment;
  children: ReactElement[];
};

const Dropdown: FC<Props> = ({ alignment = "left", children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useDetectClickOutsideRef(containerRef, () => setIsOpen(false));

  const renderChildren = () =>
    children.map((child) => <div onClick={toggleDropdown}>{child}</div>);

  return (
    <S.DropdownContainer data-testid="dropdown" ref={containerRef}>
      <S.Button onClick={toggleDropdown}>
        <MoreIcon size={24} />
      </S.Button>
      <S.DropdownListContainer
        data-testid="dropdownList"
        isOpen={isOpen}
        alignment={alignment}
        tabIndex={-1}
      >
        {renderChildren()}
      </S.DropdownListContainer>
    </S.DropdownContainer>
  );
};

export default Dropdown;
