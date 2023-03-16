import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./Components/Comments/Comments";
import GithubUsers from "./Components/Github/GithubUsers";
import Keyhits from "./Components/Keyhits/Keyhits";

const App = () => {

    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/keyhits" element={<Keyhits />} />
    //         <Route path="/github" element={<GithubUsers />} />
    //         <Route path="/comments" element={<Comments />} />
    //     </Routes>

    // </BrowserRouter>
    return (
        <Keyhits />
    );
};

ReactDom.render(<App />, document.querySelector("#root"));
