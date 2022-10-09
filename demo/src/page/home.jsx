import axios from "axios";
import React from "react";
import Navbar from "../composant/navbar";


const baseURL = "http://localhost:3000/home";

export default function App() {

    return (
        <body>
            <div>
                <header>
                    <Navbar />
                </header>
                <div>
                    <h1>welcom {localStorage.getItem("login")}</h1>
                </div>
            </div>
        </body>
    );
}