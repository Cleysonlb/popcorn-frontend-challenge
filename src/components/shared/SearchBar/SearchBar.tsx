import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export interface SearchBarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTitle: string;
}

const SearchBar = ({ handleChange, searchTitle }: SearchBarProps) => {
  return (
    <Container>
      <InputWrapper>
        <BiSearch />
        <SearchBarInput
          data-testid="search-bar-input"
          type="text"
          placeholder="Search books..."
          onChange={handleChange}
          value={searchTitle}
        />
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div``;
const InputWrapper = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spacing.space[3]};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.spacing.space[10]};
`;
const SearchBarInput = styled.input`
  width: 100%;
  border: 0 none;
  font-size: ${(props) => props.theme.typography.fontSizes.md};
  padding-left: ${(props) => props.theme.spacing.space[4]};
  &:focus {
    outline: none;
  }
`;

export default SearchBar;

// .Wrapper {
//   padding: 0 var(--mobile-margin);
//   @media (--desktop) {
//     padding: 0;
//   }
// }

// .InputWrapper {
//   display: flex;
//   padding: var(--space-2);
//   border-radius: var(--radius-1);
//   background-color: var(--color-default);
// }

// .SearchInput {
//   width: 100%;
//   border: 0 none;
//   font-size: var(--font-size);
//   padding-left: var(--space-2);
//   color: var(--color-dark);
//   letter-spacing: var(--letter-spacing);
//   &:focus {
//     outline: none;
//   }
// }
