import React, { useEffect, useState } from "react";
import "../../styles/form.css";


export const Form = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

    const [hiddenMessage, setHiddenMessage] = useState("hidden")

    async function postContact(inputValue) {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": `${inputValue.name}`,
            "phone": `${inputValue.phone}`,
            "email": `${inputValue.email}`,
            "address": `${inputValue.address}`
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts", requestOptions);
            if (response.status == 201) {
                setHiddenMessage("")
                setInputValue({
                    name: "",
                    phone: "",
                    email: "",
                    address: ""
                })
            } else {
                setHiddenMessage("hidden")
            }
        } catch (error) {
            console.error(error);
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postContact(inputValue)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    return (
        <div className="mt-4">
            <h1 className="text-center">Add New Contact</h1>
            <h3 className={`text-center text-success ${hiddenMessage}`}>Contact Created Successfully</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label" >Fullname</label>
                    <input type="text" className="form-control" required value={inputValue.name} name="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={inputValue.email} name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" required value={inputValue.phone} name="phone" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" value={inputValue.address} name="address" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Save</button>
            </form>
        </div>
    )
}