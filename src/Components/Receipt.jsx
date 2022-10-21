import html2canvas from "html2canvas";
import React from "react";
import Moment from "react-moment";
import ReceiptItem from "./ReceiptItem";
import { jsPDF } from "jspdf";
function Receipt({ order, cartItems }) {
  const exportPDF = () => {
    const input = document.getElementById("receipt");
    console.log("hello");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 200;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("P", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("receipt#" + order?.ReceiptNumber);
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center"></div>
      <div className="shadow" id="receipt">
        <h1 className="text-center my-3">Receipt</h1>
        <hr />

        <div className="d-flex row">
          {/* top */}
          <div className="col-sm mx-3 ">
            <h3 className="text-center">Azim Shoe Store</h3>
          </div>
          <div className="receipt">
            <div className="container col-sm">
              <table className="table table-striped table-responsive">
                <thead className="bg-secondary">
                  <tr>
                    <th>Receipt Number</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order?.ReceiptNumber}</td>
                    <td>{<Moment format="YYYY/MM/DD">{Date.now()}</Moment>}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="container mt-3">
              <table className="table table-responsive">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#444" }}
                >
                  <tr>
                    <th>Name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>amount</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <ReceiptItem item={item} />
                  ))}
                </tbody>
              </table>
              <h1 className="text-center h3 ">Amount {order.amount}</h1>
              {/* actions */}
            </div>
            {/* <div className="d-flex justify-content-center mx-4 my-2">
            <button className="btn btn-block btn-secondary">ORDER ITEM</button>
          </div> */}
          </div>
        </div>
      </div>
      <div className="btn-group d-flex justify-content-center">
        <button className="btn btn-block btn-dark mt-3">
          Confirm Purchase
        </button>
        <button
          className="btn btn-block btn-info mt-3"
          onClick={() => exportPDF()}
        >
          Download Receipt
        </button>
      </div>
    </>
  );
}

export default Receipt;
