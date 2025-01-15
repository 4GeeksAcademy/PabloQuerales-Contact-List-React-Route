import React from "react";

export const Form = () => {
    return (
        <div className="mt-4">
            <h1 className="text-center">Add New Contact</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Fullname</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    )
}