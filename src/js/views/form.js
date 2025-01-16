import React, {useEffect} from "react";


export const Form = () => {

    return (
        <div className="mt-4">
            <h1 className="text-center">Add New Contact</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Fullname</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    )
}