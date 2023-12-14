import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchItemObj, FunctionUpdateItem } from "../Redux/Action";
import { RootState } from "../Redux/Reducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

const Updateitem: React.FC = () => {
    const [id, idchange] = useState<any>(0);
    const [name, namechange] = useState<string>('');
    const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();
    const navigate = useNavigate();
    const { code } = useParams<{ code: any }>();

    const itemobj = useSelector((state: RootState) => state.item.itemobj);

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedItem = { id, name };
        dispatch(FunctionUpdateItem(updatedItem, id));
        navigate('/');
    }

    useEffect(() => {
        dispatch(FetchItemObj(code));
    }, [code, dispatch])

    useEffect(() => {
        if (itemobj) {
            idchange(itemobj.id);
            namechange(itemobj.name);
        }
    }, [itemobj])

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
                                    <label>Id</label>
                                    <input value={id || ''} disabled className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Enter your todo</label>
                                    <input value={name || ''} onChange={e => namechange(e.target.value)} className="form-control"></input>
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

export default Updateitem;
