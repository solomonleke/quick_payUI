import axios from "axios";
import { baseURL,  OnlineUserToken} from "./ApiConfig"; 


export const PortalSignInApi = (Payload) => {


    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return axios.post(`${baseURL}/api/login/`, Payload, {

        headers: headers,

    })
        .then((response) => {
            return response
        })
        .catch(function (error) {
            if (error.response.data[0].Error) {
                throw new Error(error.response.data[0].Error)
            } else if (error.request) {
                throw new Error(error.message)
            } else {
                throw new Error(error.message)
            }
        });

}

export const DashboardApi = () => {

    let data = {
        "token": OnlineUserToken
      }

      
      let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/dashboard/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };

    return axios.request(config)
        .then((res) => {
            
        
            return res
        })
        .catch(function (error) {
            if (error.response.data[0].Error) {
                throw new Error(error.response.data[0].Error)
            } else if (error.request) {
                throw new Error(error.message)
            } else {
                throw new Error(error.message)
            }
        });

   
}
export const UserDetails = () => {

    let data = {
        "token": OnlineUserToken
      }
    
      let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/portal_search/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };

    return axios.request(config)
        .then((res) => {
            
            return res
        })
        .catch(function (error) {
            if (error.response.data[0].Error) {
                throw new Error(error.response.data[0].Error)
            } else if (error.request) {
                throw new Error(error.message)
            } else {
                throw new Error(error.message)
            }
        });

   
}


export const ConsumptionAPI = () => {


    let data = JSON.stringify({
        "token": OnlineUserToken
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/ConsumptionApi/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };
      
   return axios.request(config)
      .then((res) => {

        return res
      })
      .catch(function (error) {
        if (error.response.data[0].Error) {
            throw new Error(error.response.data[0].Error)
        } else if (error.request) {
            throw new Error(error.message)
        } else {
            throw new Error(error.message)
        }
    });

}
export const PaymentAPI = () => {


    let data = JSON.stringify({
        "token": OnlineUserToken
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/payments/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };
      
   return axios.request(config)
      .then((res) => {
        console.log("paymentRes", res)
        return res
      })
      .catch(function (error) {
        if (error.response.data[0].Error) {
            throw new Error(error.response.data[0].Error)
        } else if (error.request) {
            throw new Error(error.message)
        } else {
            throw new Error(error.message)
        }
    });

}
export const paymentHistoryAPI = () => {


    let data = JSON.stringify({
        "token": OnlineUserToken
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/history/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };
      
   return axios.request(config)
      .then((res) => {
        console.log("paymentHistoryRes", res)
        return res
      })
      .catch(function (error) {
        if (error.response.data[0].Error) {
            throw new Error(error.response.data[0].Error)
        } else if (error.request) {
            throw new Error(error.message)
        } else {
            throw new Error(error.message)
        }
    });

}
export const prePaidTransactionAPI = () => {


    let data = JSON.stringify({
        "token": OnlineUserToken
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/prepaid_transaction/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };
      
   return axios.request(config)
      .then((res) => {
        console.log("prePaidTransactionAPI", res)
        return res
      })
      .catch(function (error) {
        if (error.response.data[0].Error) {
            throw new Error(error.response.data[0].Error)
        } else if (error.request) {
            throw new Error(error.message)
        } else {
            throw new Error(error.message)
        }
    });


  

}
export const PayBillsDetailsApi = () => {


    let data = JSON.stringify({
        "token": OnlineUserToken
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseURL}/api/paybill-details/`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${OnlineUserToken}`
        },
        data : data
      };
      
     return axios.request(config)
      .then((res) => {
        console.log("payBills", res);
        return res
      })
      .catch(function (error) {
        if (error.response.data[0].Error) {
            throw new Error(error.response.data[0].Error)
        } else if (error.request) {
            throw new Error(error.message)
        } else {
            throw new Error(error.message)
        }
    });

}




