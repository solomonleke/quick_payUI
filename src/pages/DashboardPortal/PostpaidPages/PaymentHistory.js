// import React from 'react'
// import MainLayout from '../../../Layout/DashboardLayout/Index'
// import Seo from '../../../Utils/Seo'

// export default function PaymentHistory() {
//   return (
//     <MainLayout>
//     <Seo title='PostPaid PaymentHistory' description='Aple PostPaid PaymentHistory'/>

//     </MainLayout>
//   )
// }
import React, { useEffect, useState } from 'react'
import MainLayout from '../../../Layout/DashboardLayout/Index'
import Seo from '../../../Utils/Seo'
import Header from '../../../Components/Header'
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { ConsumptionAPI, paymentHistoryAPI } from '../../../Utils/ApiCalls'
import { showToast } from '../../../utility/tool'
import TableRow from '../../../Components/TableRow'
import moment from 'moment'
import { configuration } from '../../../Utils/config'
import Pagination from '../../../Components/Pagination'
import Preloader from '../../../Components/Preloader'

export default function PaymentHistory() {
    const [Data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // pagination setup 
    const [CurrentPage, setCurrentPage] = useState(1);
    const [PostperPage, setPostperPage] = useState(configuration.sizeperpage);
    //get current post

    const indexOfLastSra = CurrentPage * PostperPage;
    const indexOfFirstSra = indexOfLastSra - PostperPage;
    const currentData = Data?.slice(indexOfFirstSra, indexOfLastSra);
    //change page 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const paymentHistory = async () => {

        try {

            let result = await paymentHistoryAPI();
            console.log("paymenthistory", result);

            if (result.status === 200) {
                setData(result.data)
                setisLoading(false)
            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            console.error('consumptionError:', e.message);
        }

    }

    useEffect(() => {
        paymentHistory()
    }, [])

    return (
        <MainLayout>
            <Seo title='PostPaid PaymentHistory' description='Aple PostPaid PaymentHistory' />
            {
                isLoading && (
                    <Preloader />
                )
            }
            <Header title={"postpaid payment history"} mt='22px' />

            <Box mt="10px" >
                <div className='LoginCardX'>
                    <Text display={"flex"} justifyContent={"flex-end"} fontSize={"15px"} fontWeight={"500"}>Total Payment history - {Data?.length}</Text>

                    <Table variant='striped' colorScheme='orange'>
                        <Thead bg={"blue.blue100"} >
                            <Tr>
                                <Th color="#fff">Date</Th>
                                <Th color="#fff">E_month</Th>
                                <Th color="#fff" >e_year</Th>
                                <Th color="#fff" >bill amount</Th>
                                <Th color="#fff" >last pay</Th>
                                <Th color="#fff" >b_prev_bal</Th>
                                <Th color="#fff" >b_arrears</Th>
                                <Th color="#fff" >b_outstand</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                currentData?.map((item, i) => (
                                    <TableRow
                                        type="paymentHistory"
                                        key={i}
                                        date={moment(item.date).format("DD/MM/YYYY")}
                                        e_month={item.e_month}
                                        e_year={item.e_year}
                                        billamount={item.billamount}
                                        last_pay={item.last_pay}
                                        b_prev_bal={item.b_prev_bal}
                                        b_arrears={item.b_arrears}
                                        b_outstand={item.b_outstand}
                                    />
                                ))
                            }


                        </Tbody>

                    </Table>

                    <Pagination postPerpage={PostperPage} currentPage={CurrentPage} totalPosts={Data?.length} paginate={paginate} />


                </div>

            </Box>


        </MainLayout>
    )
}
