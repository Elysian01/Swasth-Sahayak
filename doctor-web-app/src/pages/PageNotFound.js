import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./css/common.css";
import Navbar from "../components/misc/Navbar";


function PageNotFound() {
    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <h1>404, Page Not Found</h1>
            <button>Go to Dashboard</button>
        </div>
    )
}

export default PageNotFound;