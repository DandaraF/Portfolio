import styled from "styled-components";
import { github, linkedin } from "../../assert/img";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: ${(props) => props.theme.palette.background.primary}80;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  font-size: 1.4rem;
  gap: 10px;
  flex-direction: column;
`;

export const ContainerIcon = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ContactIcon = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const Text = styled.p``;

export const Strong = styled.strong`
  color: ${(props) => props.theme.palette.text.tertiary};
`;
