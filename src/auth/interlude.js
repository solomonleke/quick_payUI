import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

// export default function Interlude(username,password){
//     // const [isauthenticated, setIsauthenticated] = React.useState(false);
//     // const [data, setData] = React.useState([]);
//     // const {username,password} = useParams();
//     // const navigate = useNavigate()
//     // const [amount,setAmount]=useState('');
//     // React.useEffect(() => {
//         console.log("name",username)
//         console.log("pass",password)
//         const url = 'https://aplecash.smartpowerbilling.com/signin';
//         const options = {
//             method: 'POST',
//             body: JSON.stringify({
//                 "table":"tbl_cashcollect_users",
//                 "username":username,
//                 "password":password
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         console.log(options)
//         fetch(url,options)
//         .then((response) => {
//             console.log(response)
//             response.json()
//         } )
//         .then((json) => {
//             console.log(json)      })
//         .catch((error) => console.log(error));
        
        
//     // }, []);

//     // React.useEffect(() => {
//     //     if (data.length !== 0) {
//     //         if (data.error){
//     //             navigate('/login')
//     //         }
//     //         setIsauthenticated(true);
//     //         navigate('/')
//     //     }
//     //     sessionStorage.setItem('limit_amount', data.limit_amount);
//     //     sessionStorage.setItem('token', data.token);
//     //     console.log(data);
//     // }, [data]);
//     // return(
//     //     <div>
//     //         Logging In .....
//     //     </div>
//     //     data
//     // )
// }

export async function request(endpoint, data, method, options) {
    try {
      const requestPayload = {
        method: method || 'GET',
        url: endpoint,
        data: data,
        headers: options ? options.headers : {},
      };
      console.log('requestPayload ', requestPayload);
      const result = await axios.request(requestPayload);
      console.log(result)
      return result.data;
    } catch (resp) {
      console.log('intro', 'resp', resp);
      return resp.response?.data;
    }
  }