
import React, { useEffect, useState } from 'react'
import MainLayout from '../../../Layout/DashboardLayout/Index'
import Seo from '../../../Utils/Seo'
import Header from '../../../Components/Header'
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { ConsumptionAPI, DashboardApi, PaymentAPI } from '../../../Utils/ApiCalls'
import { showToast } from '../../../utility/tool'
import TableRow from '../../../Components/TableRow'
import moment from 'moment'
import { configuration } from '../../../Utils/config'
import Pagination from '../../../Components/Pagination'
import Preloader from '../../../Components/Preloader'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Payment() {
    const [Data, setData] = useState([]);
    const [DashboardData, setDashboardData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // pagination setup 
    const [CurrentPage, setCurrentPage] = useState(1);
    const [PostperPage, setPostperPage] = useState(configuration.sizeperpage);
    //get current post

    const indexOfLastSra = CurrentPage * PostperPage;
    const indexOfFirstSra = indexOfLastSra - PostperPage;
    const currentData = Data?.data?.slice(indexOfFirstSra, indexOfLastSra);
    //change page 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const PaymentApi = async () => {

        try {

            let result = await PaymentAPI();
            console.log("PaymentApi", result);

            if (result.status === 200) {
                setData(result.data)
                setisLoading(false)
            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            console.error('payment:', e.message);
        }

    }

    const getData = async () => {
        try {
    
          let result = await DashboardApi();
    
          if (result.status === 200) {
    
            const newDataAmount =   result.data.pay?.map((item,i)=>{
         

                let newDate = moment(item.paydate).format('ll')
               
                item.paydate = newDate
                
                return item
                
              })
              setDashboardData(newDataAmount)
          

            setisLoading(false)
    
          } else {
    
            console.log("errorMessage", result.response.data[0].Error)
          }
    
    
        } catch (e) {
    
          showToast({
            message: e.message,
            type: 'error'
          });
          setisLoading(false)
          console.error('DashboardError:', e.message);
        }
    
      }

    useEffect(() => {
        PaymentApi()
        getData()
    }, [])

    return (
        <MainLayout>
            <Seo title='PostPaid Payment' description='Aple PostPaid Payment' />            {
                isLoading && (
                    <Preloader />
                )
            }
            <Header title={"Postpaid Payment"} mt='22px' />

            <Box mt="10px" >
                <div className='LoginCardX'>
                    <Text display={"flex"} justifyContent={"flex-end"} fontSize={"15px"} fontWeight={"500"}>Total Payment - {Data?.data?.length}</Text>

                    <Table variant='striped' colorScheme='orange'>
                        <Thead bg={"blue.blue100"} >
                            <Tr>

                                <Th color="#fff">amount</Th>
                                <Th color="#fff" >arrears</Th>
                                <Th color="#fff" >Bill description</Th>
                                <Th color="#fff" >cashier</Th>
                                <Th color="#fff" >payment date</Th>
                                <Th color="#fff" >status</Th>
                                <Th color="#fff" >trans ref</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                currentData?.map((item, i) => (
                                    <TableRow
                                        type="payment"
                                        key={i}
                                        amount={item.amount || "Nil"}
                                        arrears={item.arrears || "Nil"}
                                        bill_description={item.bill_description || "Nil"}
                                        casheir={item.casheir || "Nil"}
                                        payment_date={moment(item.payment_date).format("DD/MM/YYYY")}
                                        status={item.status}
                                        trans_ref={item.trans_ref}

                                    />
                                ))
                            }


                        </Tbody>

                    </Table>

                    <Pagination postPerpage={PostperPage} currentPage={CurrentPage} totalPosts={Data?.data?.length} paginate={paginate} />


                </div>

            </Box>

            <Header title={"Postpaid Payment chart"} size='18px' mt='22px' />

            <Box mt="32px">
                <ResponsiveContainer width={"100%"} height={250}>
                    <BarChart data={DashboardData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="paydate" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="navy" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>



        </MainLayout>
    )
}
