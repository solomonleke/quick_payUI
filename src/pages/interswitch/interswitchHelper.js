import React, { useState, useEffect } from 'react';

function useScript(mode) {
  var src = mode.toLowerCase() === 'test' ? 'https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js' : 'https://newwebpay.interswitchng.com/inline-checkout.js';

  var _useState = useState({
    loaded: false,
    error: false
  }),
      state = _useState[0],
      setState = _useState[1];

  useEffect(function () {
    var script = document.createElement('script');
    script.src = src;
    script.async = true;

    var onScriptLoad = function onScriptLoad() {
      setState({
        loaded: true,
        error: false
      });
    };

    var onScriptError = function onScriptError() {
      setState({
        loaded: false,
        error: true
      });
    };

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('complete', onScriptLoad);
    script.addEventListener('error', onScriptError);
    document.body.appendChild(script);
    return function () {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('complete', onScriptLoad);
      script.removeEventListener('error', onScriptError);
    };
  }, [src]);
  return [state.loaded, state.error];
}

function useInterswitch(paymentOptions) {
  var _useScript = useScript(paymentOptions.mode),
      loaded = _useScript[0],
      error = _useScript[1];

  function initializePayment() {
    if (error) {
      console.error('Could not load Interswitch inline payment method');
      return;
    }

    if (paymentOptions.mode.toLowerCase() !== 'test' && paymentOptions.mode.toLowerCase() !== 'live') {
      console.error('Unrecognized payment mode.');
      return;
    }

    if (!paymentOptions.transactionReference || paymentOptions.transactionReference.length < 6) {
      console.error('Transaction reference is required and must be at least 6 characters long');
      return;
    }

    if (!paymentOptions.merchantCode) {
      console.error('Merchant code is required');
      return;
    }

    if (!paymentOptions.payItemID) {
      console.error('Pay Item ID is required');
      return;
    }

    if (!paymentOptions.redirectURL) {
      console.error('Redirect URL is required');
      return;
    }

    if (!paymentOptions.callback) {
      console.error('Callback is required');
      return;
    }

    if (loaded) {
      var _paymentOptions = {
        merchant_code: paymentOptions.merchantCode,
        pay_item_id: paymentOptions.payItemID,
        amount: paymentOptions.amount,
        site_redirect_url: paymentOptions.redirectURL,
        onComplete: paymentOptions.callback,
        mode: paymentOptions.mode || 'TEST',
        txn_ref: paymentOptions.transactionReference,
        currency: paymentOptions.currency || '566',
        pay_item_name: paymentOptions.payItemName,
        cust_name: paymentOptions.customerName || '',
        cust_email: paymentOptions.customerEmail,
        cust_id: paymentOptions.customerID,
        cust_mobile_no: paymentOptions.customerMobileNo || ''
      };
      window.webpayCheckout(_paymentOptions);
    }
  }

  return initializePayment;
}

// var InterswitchPay = function InterswitchPay(paymentParameters) {
//   var initializePayment = useInterswitch(paymentParameters);
//   return React.createElement("button", {
//     className: paymentParameters.className,
//     style: paymentParameters.style,
//     onClick: function onClick() {
//       return initializePayment();
//     }
//   }, paymentParameters.text || paymentParameters.children);
// };

export { useInterswitch };
//# sourceMappingURL=index.modern.js.map
