import React, { useState, useEffect } from "react";
import { Modal } from "./modal";

export const Card = () => {
    const [contactList, setContactList] = useState([])

    async function getContactList() {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts/", requestOptions);
            const result = await response.json();
            setContactList(result.contacts)
        } catch (error) {
            console.error(error);
        };
    }
    async function deleteContact(id) {
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts/${id}`, requestOptions)
            if (response.status == 204) {
                getContactList()
            }
        } catch (error) {
            console.error(error);
        };
    }

    async function putContact(id) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": "string",
            "phone": "",
            "email": "",
            "address": ""
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts/${id}`, requestOptions);
            const result = await response.text();
            console.log(result)
        } catch (error) {
            console.error(error);
        };
    }

    const handleDelete = (e) => {
        deleteContact(e.target.parentElement.id)

    }
    const handleEdit = (e) => {
        console.log(e.target.parentElement.id);
        
    }

    useEffect(() => {
        getContactList()
    }, [])
    return (
        <>
            {contactList.map((contact) => {
                return (
                    <div className="card" >
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-profile" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text"><i className="bi bi-geo-alt-fill"></i>{contact.address}</p>
                                    <p className="card-text"><i className="bi bi-telephone-fill"></i>{contact.phone}</p>
                                    <p className="card-text"><i className="bi bi-envelope-fill"></i>{contact.email}</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center align-items-center gap-3 fs-5" id={contact.id}>
                                <i className="bi bi-pencil-fill" onClick={handleEdit}></i>
                                <i className="bi bi-trash-fill" onClick={handleDelete}></i>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}