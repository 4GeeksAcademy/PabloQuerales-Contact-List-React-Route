import React from "react";
import { Form } from "./form";
import { Link } from "react-router-dom";

export const AddContact = () => {
    return (
        <div className="container">
            <Form />
            <Link to={"/"}>
                <span>or get back to contact</span>
            </Link>
        </div>
    )
}