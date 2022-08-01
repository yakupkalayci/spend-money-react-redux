import React from 'react'

import "./styles.css";

function Receipt() {
  return (
    <div className='receiptContainer'>
      <h2>Your Receipt</h2>
      <div className='receipts'>
      <div className='singleReceipt'>
        <span className='receiptPName'>Product Name</span>
        <span className="receiptPAmount">xamoount</span>
        <span className='receiptPTotal'>$total</span>
      </div>
      <div className='singleReceipt'>
        <span className='receiptPName'>Product Name</span>
        <span className="receiptPAmount">xamoount</span>
        <span className='receiptPTotal'>$total</span>
      </div>
      <div className='singleReceipt'>
        <span className='receiptPName'>Product Name</span>
        <span className="receiptPAmount">xamoount</span>
        <span className='receiptPTotal'>$total</span>
      </div>
      <div className='singleReceipt'>
        <span className='receiptPName'>Product Name</span>
        <span className="receiptPAmount">xamoount</span>
        <span className='receiptPTotal'>$total</span>
      </div>
      <div className='singleReceipt'>
        <span className='receiptPName'>Product Name</span>
        <span className="receiptPAmount">xamoount</span>
        <span className='receiptPTotal'>$total</span>
      </div>
      <div className='singleReceipt'>
        <span className='receiptPName'>Product Name</span>
        <span className="receiptPAmount">xamoount</span>
        <span className='receiptPTotal'>$total</span>
      </div>
      </div>
      <div className='totalPrice'>
        <span>TOTAL</span>
        <span className='receiptPTotal'>$213,500,000</span>
      </div>
    </div>
  )
}

export default Receipt;