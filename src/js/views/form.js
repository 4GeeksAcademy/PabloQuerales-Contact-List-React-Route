import React, { useEffect, useState } from "react";
import "../../styles/form.css";


export const Form = () => {
    const [hiddenMessage, setHiddenMessage] = useState("hidden")
    function postContact(name, phone, email, address) {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": `${name}`,
            "phone": `${phone}`,
            "email": `${email}`,
            "address": `${address}`
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts", requestOptions)
            .then((response) => {
                if (response.status == 201) {
                    setHiddenMessage("")
                } else {
                    setHiddenMessage("hidden")
                }
                return response.json()
            })
            .then((result) => console.log(result))
            .catch((error) => console.error(error));



    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postContact(e.target.name.value, e.target.email.value, e.target.phone.value, e.target.address.value)
        e.target.name.value = ""
        e.target.email.value = ""
        e.target.phone.value = ""
        e.target.address.value = ""
    }
    return (
        <div className="mt-4">
            <h1 className="text-center">Add New Contact</h1>
            <h3 className={`text-center text-success ${hiddenMessage}`}>Contact Created Successfully</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Fullname</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Save</button>
            </form>
        </div>
    )
}