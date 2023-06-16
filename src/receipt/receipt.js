import '../assets/css/pages.css';
import "./button.css";
import logo from "./argon-react.png"
import html2canvas from 'html2canvas'
import "./nucleo.css";
import React from 'react';
import jsPdf from 'jspdf'

function Invoice() {
    const vendorName = sessionStorage.getItem('vendorName');
    const account = sessionStorage.getItem('account');
    let arrears;
    const category = sessionStorage.getItem('category');
    const token = sessionStorage.getItem('token_id');
    const unit = sessionStorage.getItem('unit');
    let amount = sessionStorage.getItem('amount');
    const name = sessionStorage.getItem('name');
    const tariff_name = sessionStorage.getItem('tariff_name');
    const tariff = sessionStorage.getItem('tariff');
    const vat = sessionStorage.getItem('vat');
    const phone_no = sessionStorage.getItem('phone_no');
    const meter_no = sessionStorage.getItem('meter_no');
    const address = sessionStorage.getItem('address');
    const transformer = sessionStorage.getItem('transformer_id');
    const feeder = sessionStorage.getItem('feeder_id');
    const old_acc = sessionStorage.getItem('old_acc_no');
    const billedamount = sessionStorage.getItem('billed');
    const trans_ref = sessionStorage.getItem('trans_ref')
    const bill_type = sessionStorage.getItem('bill_type')
    const buckets = JSON.parse(sessionStorage.getItem('buckets'))
    let fees = sessionStorage.getItem('fees')
    let show;
    if (bill_type == 'bill') {
        show = 'Arrears'
        arrears = sessionStorage.getItem('arrears');
    } else {
        show = bill_type
        arrears = amount
    }
    if (!fees) {
        fees = 0
    }


    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const date = dd + "/" + mm + "/" + yyyy

    const [isprepaid, setIsprepaid] = React.useState(true);
    const [hasbuckets, sethasbuckets] = React.useState(true);

    React.useEffect(() => {
        if (category == 'postpaid') {
            setIsprepaid(false);
        }
    }, [category]);

    React.useEffect(() => {
        if (buckets.length < 1) {
            sethasbuckets(false);
        }
    }, [buckets]);

    const list = []
    buckets.forEach((bucket) => {
        list.push(<div className="row mx-0">
            <div className="col-md-1 col_no">
                <p>00</p>
            </div>
            <div className="col-md-5 col_des">
                <p className="bold">{bucket.bucket}({bucket.type})</p>
            </div>
            <div className="col col_price">
                <p>{bucket.amount}</p>
            </div>

        </div>)
        console.log(bucket)
    })
    console.log(list)
    const title = `invoice.pdf`;

    const handlePrint = () => {
        //window.print();
        print();
    }


    async function print() {
        const result = await processPDF();
        result.autoPrint();
        //result.output('dataurlnewwindow');
        // result.output('bloburl', {filename: title});
        window.open(result.output('bloburl', { filename: title }));

    }

    const generatePDF = async () => {
        const result = await processPDF();
        //result.save(title);
        // result.output('dataurlnewwindow',{filename: title});
        window.open(result.output('bloburl', { filename: title }));
    }

    const processPDF = async () => {
        const domElement = document.getElementById('receipt-div');
        const width = domElement.offsetWidth;
        const height = domElement.offsetHeight;
        return await html2canvas(domElement, {
            onclone: (document) => {
                document.getElementById('generate-pdf').style.visibility = 'hidden';
                document.getElementById('handle-print').style.visibility = 'hidden';
            },
        })
            .then((canvas) => {

                // const widthInMM = canvas.width * 0.264583;
                //const heightInMM = canvas.height * 0.264583;


                const widthInMM = 150;
                const heightInMM = canvas.height * 0.264583;


                const imgData = canvas.toDataURL(
                    'image/png');
                //const doc = new jsPdf("p", "mm", "a4");
                const doc = new jsPdf("a4", "mm", [widthInMM, heightInMM]);
                doc.setProperties({
                    title: title,
                });
                //delete the first page
                doc.deletePage(1);
                //recreate a new page with the new measurements
                doc.addPage([widthInMM, heightInMM], "a4");
                // add image to the page
                doc.addImage(imgData, 'PNG', 0, 0, widthInMM, heightInMM);
                return doc;
            });
    }

    return (
       
            <div className="container" id="receipt-div">

                <div className='row-center'>
                    <div className=''>

                        <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="" style={{ width: "100px" }} className="img-fluid font" />
                    </div>
                 

                </div>

                <p className="title text-center">{process.env.REACT_APP_QUIKPAY_RECEIPT}</p>

<div className='flex'>
<div className='receipt'> {
                    trans_ref &&
                    <>
                        Invoice No. <span style={{ wordWrap: "break-word" }}>{trans_ref || " "}</span>
                    </>
                }</div>
                <div className="receipt pl-4-">Date
                <span>
                    {
                        date || "03/04/22 02:30"
                    }
                </span>
                </div>
</div> 
              

                <div className="invoice_wrapper" >
                    
                    <div className="body">
                        <div className="main_table">
                        <div className="text-center titleD">DESCRIPTION</div>

                            <div className="table_body">
                                <div className="row mx-0">
                                    <div className="col-md-1 col_no">
                                        <p>01</p>
                                    </div>
                                    <div className="col-md-5 col_des">
                                        <p className="bold">Account Name:</p>
                                    </div>
                                    <div className="col col_price">
                                        <p> {name || "UWAKWE O"}</p>
                                    </div>

                                </div>
                                <div className="row mx-0">
                                    <div className="col-md-1 col_no">
                                        <p>02</p>
                                    </div>
                                    <div className="col-md-5 col_des">
                                        <p className="bold">Address :</p>
                                    </div>
                                    <div className="col col_price">
                                        <p> {address || ""}</p>
                                    </div>

                                </div>
                                <div className="row mx-0">
                                    <div className="col-md-1 col_no">
                                        <p>03</p>
                                    </div>
                                    <div className="col-md-5 col_des">
                                        <p className="bold">Tariff :</p>
                                    </div>
                                    <div className="col col_price">
                                        <p> {tariff || ""}</p>
                                    </div>

                                </div>
                                <div className="row mx-0">
                                    <div className="col-md-1 col_no">
                                        <p>04</p>
                                    </div>
                                    <div className="col-md-5 col_des">
                                        <p className="bold">Tariff Name:</p>
                                    </div>
                                    <div className="col col_price">
                                        <p> {tariff_name || ""}</p>
                                    </div>

                                </div>

                                <div className="row mx-0">
                                    <div className="col-md-1 col_no">
                                        <p>05</p>
                                    </div>
                                    <div className="col-md-5 col_des">
                                        <p className="bold">Meter No:</p>
                                    </div>
                                    <div className="col col_price">
                                        <p> {meter_no ? meter_no.toString() : " "}</p>
                                    </div>

                                </div>

                                <div className="row mx-0">
                                    <div className="col-md-1 col_no">
                                        <p>06</p>
                                    </div>
                                    <div className="col-md-5 col_des">
                                        <p className="bold">Account No :</p>
                                    </div>
                                    <div className="col col_price">
                                        <p> {account || "1056342"}</p>
                                    </div>

                                </div>

                                {isprepaid ? (
                                    <div className="row mx-0">
                                        <div className="col-md-1 col_no">
                                            <p>07</p>
                                        </div>

                                        <div className="col-md-5 col_des">
                                            <p className="bold"> Token: </p>
                                        </div>
                                        <div className="col col_price">
                                            <p> {token || "2547 8468 8893 1361 0269"}</p>
                                        </div>


                                    </div>) : (
                                    <div className="row mx-0">
                                        <div className="col-md-1 col_no">
                                            <p>07</p>
                                        </div>

                                        <div className="col-md-5 col_des">
                                            <p className="bold"> Old Account: </p>
                                        </div>
                                        <div className="col col_price">
                                            <p> {old_acc || ""}</p>
                                        </div>


                                    </div>
                                )
                                }


                                {
                                    (amount !== 0 && unit !== 0) &&
                                    <>
                                        {isprepaid ? (
                                            <div className="row mx-0">
                                                <div className="col-md-1 col_no">
                                                    <p>08</p>
                                                </div>
                                                <div className="col-md-5 col_des">
                                                    <p className="bold"> Units </p>
                                                </div>
                                                <div className="col col_price">
                                                    <p>
                                                        {unit || ""} KWh @ {tariff || "52.60"}
                                                    </p>
                                                </div>
                                            </div>) : (""
                                            //     <div className="row mx-0">
                                            //     <div className="col-md-1 col_no">
                                            //         <p>08</p>
                                            //     </div>
                                            //     <div className="col-md-5 col_des">
                                            //         <p className="bold"> Transformer Name </p>
                                            //     </div>
                                            //     <div className="col col_price">
                                            //         <p>
                                            //             {transformer || ""} 
                                            //         </p>
                                            //     </div>
                                            // </div>
                                        )}

                                        {isprepaid ? (
                                            <div className="row mx-0">
                                                <div className="col-md-1 col_no">
                                                    <p>09</p>
                                                </div>
                                                <div className="col-md-5 col_des">
                                                    <p className="bold"> VAT </p>
                                                </div>
                                                <div className="col col_price">
                                                    <p>
                                                        ₦{(vat) || ""}
                                                    </p>
                                                </div>
                                            </div>

                                        ) : (""
                                            // <div className="row mx-0">
                                            //     <div className="col-md-1 col_no">
                                            //         <p>09</p>
                                            //     </div>
                                            //     <div className="col-md-5 col_des">
                                            //         <p className="bold"> Feeder Name </p>
                                            //     </div>
                                            //     <div className="col col_price">
                                            //         <p>
                                            //         {feeder || ""}
                                            //         </p>
                                            //     </div>
                                            // </div>
                                        )}
                                        {hasbuckets ? (<div>{list}</div>) : ("")}
                                        {isprepaid ? (
                                            ""
                                        ) : (
                                            <div className="row mx-0">
                                                <div className="col-md-1 col_no">
                                                    <p>08</p>
                                                </div>
                                                <div className="col-md-5 col_des">
                                                    <p className="bold"> Billed Amount </p>
                                                </div>
                                                <div className="col col_price">
                                                    <p>
                                                        {billedamount || ""}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="row mx-0">
                                            <div className="col-md-1 col_no">
                                                <p>10</p>
                                            </div>
                                            <div className="col-md-5 col_des">
                                                <p className="bold"> {show} </p>
                                            </div>
                                            <div className="col col_price">
                                                <p>
                                                    ₦{(arrears || "")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row mx-0">
                                            <div className="col-md-1 col_no">
                                                <p>11</p>
                                            </div>
                                            <div className="col-md-5 col_des">
                                                <p className="bold"> Transaction Fee </p>
                                            </div>
                                            <div className="col col_price">
                                                <p>
                                                    ₦{(fees || "0")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row mx-0">
                                            <div className="col-md-1 col_no">
                                                <p>12</p>
                                            </div>
                                            <div className="col-md-5 col_des">
                                                <p className="bold"> Amount Paid</p>
                                            </div>
                                            <div className="col col_price">
                                                <p>
                                                    ₦{(parseFloat(amount) + parseFloat(fees) || "")}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                        <br />
                        <div className="paymethod_grandtotal_wrap">

                            <div className="paymethod_sec">
                                <span className="pr-2" style={{ color: "blue", fontWeight: "bold" }}>
                                    <button id="handle-print" data-testid="test-handle-print" className="custom-btn btn-12" onClick={handlePrint} ><span>Click!</span><span><i className="fas fa-print" ></i> print</span></button>
                                </span>

                                <span className="pr-2" style={{ marginLeft: "70px" }}>
                                    <button id="generate-pdf" data-testid="test-generate-pdf" className="custom-btn btn-12" onClick={generatePDF}><span>Click!</span><span><i className="fas fa-download" ></i> download</span></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        
    )
}

export default Invoice;