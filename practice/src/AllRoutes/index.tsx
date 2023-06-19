import React from "react";
import { Route, Routes } from "react-router-dom";
import PracticePage from "../pages/Practice";
import HomePage from "../pages/Home";

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
        </Routes>
      </div>
    </section>
  );
};

export default AllRoutes;
