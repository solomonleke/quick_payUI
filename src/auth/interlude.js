import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Interlude(){
    const [isauthenticated, setIsauthenticated] = React.useState(false);
    const [data, setData] = React.useState([]);
    const {username,password} = useParams();
    const navigate = useNavigate()
    // const [amount,setAmount]=useState('');
    React.useEffect(() => {
        const url = 'https://aplecash.smartpowerbilling.com/signin';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "table":"tbl_cashcollect_users",
                "username":username,
                "password":password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        fetch(url,options)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
        
    }, []);

    React.useEffect(() => {
        if (data.length !== 0) {
            if (data.error){
                navigate('/login')
            }
            setIsauthenticated(true);
            navigate('/')
        }
        sessionStorage.setItem('limit_amount', data.limit_amount);
        sessionStorage.setItem('token', data.token);
        console.log(data);
    }, [data]);
    return(
        <div>
            Logging In .....
        </div>
    )
}