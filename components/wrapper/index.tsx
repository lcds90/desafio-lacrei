import styled from "styled-components";

interface Props {
  children: React.ReactNode[];
  maxElementsInRow?: number;
  gap: number;
}

interface StyledWrapperProps {
  elements: number;
  max: number;
  gap: number;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 100%;

  @media (min-width: 512px) {
    grid-template-rows: 1fr;
    padding: 0;
  }

  @media (min-width: 1040px) {
    gap: 0;
    place-items: unset;
  }
  ${({ elements, gap, max, theme: { spacing } }) =>
    (elements || gap || max) &&
    `
    grid-template-rows: repeat(${elements}, 1fr);
    margin-top: ${spacing.big};
    padding: ${spacing.default};

    @media (min-width: 512px) {
      grid-template-columns: repeat(${
        elements >= max ? max : elements
      }, minmax(0, 1fr));
      gap: ${gap}rem;
    }
  `}
`;

export const Wrapper = ({ children, maxElementsInRow = 4, gap }: Props) => {
  return (
    <StyledWrapper elements={children.length} max={maxElementsInRow} gap={gap}>
      {children}
    </StyledWrapper>
  );
};
