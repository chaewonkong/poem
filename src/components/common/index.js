import styled from "styled-components";
import CustomHeader from "./CustomHeader";
import DefaultHeader from "./DefaultHeader";
import Loading from "./Loading";
import Search from "./Search";
import * as Modal from "./ModalView";

export { CustomHeader, DefaultHeader, Loading, Search, Modal };

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7e7e7;
`;

export const PoemContent = styled.div`
  margin-top: 5vh;
`;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 10vh;
  background: #f7f7f7;
`;
