import styled from "styled-components";

export const Icon = styled.img`
  height: 30px;
  filter: invert(100%) sepia(6%) saturate(4717%) hue-rotate(264deg)
    brightness(120%) contrast(105%);
  margin: 0.75rem 0.75rem;
`;

export const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.3);
`;
