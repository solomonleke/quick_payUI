import '../header/css/style.css';
import "./button.css";
import logo from "./argon-react.png"
import html2canvas from 'html2canvas'
import "./nucleo.css";
import React from 'react';
import jsPdf from 'jspdf'

function Invoice(){
    const vendorName = sessionStorage.getItem('vendorName');
    const account = sessionStorage.getItem('account');
    const arrears = sessionStorage.getItem('arrears');
    const category = sessionStorage.getItem('category');
    const token = sessionStorage.getItem('token_id');
    const unit = sessionStorage.getItem('unit');
    const amount = sessionStorage.getItem('amount');
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


    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const date = dd+"/"+mm+"/"+yyyy

    const [isprepaid,setIsprepaid] = React.useState(true);

    React.useEffect(() => {
        if (category == 'postpaid') {
            setIsprepaid(false);
        }
    }, [category]);


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


                const widthInMM = 100;
                const heightInMM = canvas.height * 0.264583;


                const imgData = canvas.toDataURL(
                    'image/png');
                //const doc = new jsPdf("p", "mm", "a4");
                const doc = new jsPdf("p", "mm", [widthInMM, heightInMM]);
                doc.setProperties({
                    title: title,
                });
                //delete the first page
                doc.deletePage(1);
                //recreate a new page with the new measurements
                doc.addPage([widthInMM, heightInMM], "p");
                // add image to the page
                doc.addImage(imgData, 'PNG', 0, 0, widthInMM, heightInMM);
                return doc;
            });
    }

return (
    <React.Fragment>
        <br /><br /><br />
        <div className="wrapper" id="receipt-div">
            <div className="invoice_wrapper" >
                <div className="heade">
                    <br />
                    <div className="row">
                        <div className="col-md-8">
                            <img src={logo} alt="" style={{ height: "70px", width: "85px" }} className="img-fluid font" />
                            <div className="title_wrap">

                                <p className="title bold">ABA POWER LIMITED</p>
                                {/* <p className="sub_title"> (APL ELECTRIC)</p> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="invoice bold">Receipt</p>
                            {/* <p className="invoice_no">

                                <span> {
                                    invoiceId &&
                                    <>
                                        Invoice No. <span>{invoiceId || "XXXX"}</span>
                                    </>
                                }</span>
                            </p> */}
                            <p className="date">
                                <span>
                                    <div className="bold">Date</div>
                                    <div>
                                        {
                                            date || "03/04/22 02:30"
                                        }
                                    </div>
                                </span>

                            </p>
                        </div>
                    </div>

                </div>
                <div className="body">
                    <div className="main_table">
                        <div className="table_header">
                            <div className="row">
                                <div className="col col_no"></div>
                                <div className="col col_des">DESCRIPTION</div>
                                <div className="col col_price"></div>
                                <div className="col col_total"></div>
                                <div className="col col_total"></div>
                            </div>
                        </div>
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


                            </div>):(
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
                                    </div>):(
                                        <div className="row mx-0">
                                        <div className="col-md-1 col_no">
                                            <p>08</p>
                                        </div>
                                        <div className="col-md-5 col_des">
                                            <p className="bold"> Transformer Name </p>
                                        </div>
                                        <div className="col col_price">
                                            <p>
                                                {transformer || ""} 
                                            </p>
                                        </div>
                                    </div>
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
                                            ₦{(0.75* amount).toFixed(2) || ""}
                                            </p>
                                        </div>
                                    </div>
                                ):(
                                    <div className="row mx-0">
                                        <div className="col-md-1 col_no">
                                            <p>09</p>
                                        </div>
                                        <div className="col-md-5 col_des">
                                            <p className="bold"> Feeder Name </p>
                                        </div>
                                        <div className="col col_price">
                                            <p>
                                            {feeder || ""}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {isprepaid ? (
                                    ""
                                    ):(
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
                                        <p className="bold"> Arrears </p>
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
                                            <p className="bold"> Amount Paid </p>
                                        </div>
                                        <div className="col col_price">
                                            <p>
                                                ₦{(amount || "")}
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


    </React.Fragment>
)
}

export default Invoice;