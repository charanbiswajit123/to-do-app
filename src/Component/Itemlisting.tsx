import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchItemList, Removeitem } from "../Redux/Action";
import { RootState } from '../Redux/Reducer';

interface ItemlistingProps {
    item: {
        loading: boolean;
        errmessage: string;
        itemlist: {
            id: number;
            name: string;
        }[];
    };
    loaditem: () => void;
    removeitem: (code: number) => void;
}

const Itemlisting: React.FC<ItemlistingProps> = (props) => {
    useEffect(() => {
        props.loaditem();
    }, []);

    const handledelete = (code: number) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeitem(code);
            window.location.reload();
        }
    };

    return (
        props.item.loading ? <div><h2>Loading...</h2></div> :
            props.item.errmessage ? <div><h2>{props.item.errmessage}</h2></div> :

                <div>
                    <div className="card">
                        <div className="card-header" >
                            <Link to={'/add'} className="btn btn-success">Add Item [+]</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>No.</td>
                                        <td>Todo Item</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.item.itemlist && props.item.itemlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <Link to={'/edit/' + item.id} className="btn btn-primary">Edit</Link>&nbsp;&nbsp;&nbsp;
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        item: state.item
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loaditem: () => dispatch(FetchItemList()),
        removeitem: (code: any) => dispatch(Removeitem(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itemlisting);
