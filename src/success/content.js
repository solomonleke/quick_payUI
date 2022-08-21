


export default function Success(){
    const message = sessionStorage.getItem('message');
    const account = sessionStorage.getItem('account');
    const category = sessionStorage.getItem('category');
    const token = sessionStorage.getItem('token_id');
    const unit = sessionStorage.getItem('unit');
    const amount = sessionStorage.getItem('amount');
    return(
        <div className="container">
                <div className="row row-same-height" style={{background:"white"}}>
                    <div className="col-md-5 b-r b-dashed " >
                        <div className="padding-30 sm-padding-5 sm-m-t-15" >
                            <h2>{message}</h2>
                            <p className="small hint-text">Kindly confirm the details below</p>
                            <table className="table table-condensed">
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Account</span>
                                    </td>
                                    <td className=" col-md-3 text-right" style={{width: "200px"}}>
                                        <span className="bold">{account}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Category</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span> {category}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Token</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{token}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Units</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{unit}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Amount</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{amount}</span>
                                    </td>
                                </tr>
                    
                            </table>
                        </div>
                    </div>
                </div>
            </div>      
    )
}