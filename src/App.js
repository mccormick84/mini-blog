import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export default function app() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그!</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={"post-title"} element={<PostWritePage />} />
        <Route path={"post/:postId"} element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
