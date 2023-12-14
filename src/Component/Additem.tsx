import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddItem } from "../Redux/Action";
import { RootState } from "../Redux/Reducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

const Additem: React.FC = () => {
    const [name, namechange] = useState<string>('');
    const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();
    const navigate = useNavigate();

    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        const itemobj = { name };
        dispatch(FunctionAddItem(itemobj));
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add Item</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Enter your todo</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button>&nbsp;&nbsp;&nbsp;
                        <Link className="btn btn-danger" to={'/'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Additem;
