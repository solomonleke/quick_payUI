import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

export default function TableRow({ type, className, amount, consumed, created,status,trans_ref,
     currentRead,previousRead,arrears,bill_description,casheir,payment_date,transaction,unit,units,feederName,ststoken,transformerName,date,e_month,e_year,billamount,last_pay ,b_prev_bal,b_arrears,b_outstand}) {
    return (
      <Tr>
        {
            type === "consumption" && (
                <>
                <Td>{className|| "Nil"}</Td>
                <Td>{amount|| "Nil"}</Td>
                <Td>{consumed|| "Nil"}</Td>
                <Td>{created|| "Nil"}</Td>
                <Td>{currentRead||"Nil"}</Td>
                <Td>{previousRead|| "Nil"}</Td>
                <Td>{feederName|| "Nil"}</Td>
                <Td>{transformerName|| "Nil"}</Td>
                </>
              
            )
        }
        {
            type === "paymentHistory" && (
                <>
                <Td>{date}</Td>
                <Td>{e_month}</Td>
                <Td>{e_year}</Td>
                <Td>{billamount}</Td>
                <Td>{last_pay}</Td>
                <Td>{b_prev_bal}</Td>
                <Td>{b_arrears}</Td>
                <Td>{b_outstand}</Td>
                </>
              
            )
        }
        {
            type === "prepaidTransaction" && (
                <>
                <Td>{amount||"₦0.00"}</Td>
                <Td>{arrears||"₦0.00"}</Td>
                <Td>{created||"Nil"}</Td>
                <Td>{ststoken||"Nil"}</Td>
                <Td>{transaction||"Nil"}</Td>
                <Td>{units||"Nil"}</Td>
                <Td>{unit||"Nil"}</Td>
              
                </>
              
            )
        }
        {
            type === "payment" && (
                <>
                <Td>{amount}</Td>
                <Td>{arrears}</Td>
                <Td>{bill_description}</Td>
                <Td>{casheir}</Td>
                <Td>{payment_date}</Td>
                <Td>{status}</Td>
                <Td>{trans_ref}</Td>
              
                </>
              
            )
        }
      </Tr>
  
   
  )
}
