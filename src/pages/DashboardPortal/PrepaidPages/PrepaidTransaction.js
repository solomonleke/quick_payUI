import React, { useEffect, useState } from 'react'
import MainLayout from '../../../Layout/DashboardLayout/Index'
import Seo from '../../../Utils/Seo'
import Header from '../../../Components/Header'
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { ConsumptionAPI, paymentHistoryAPI, prePaidTransactionAPI } from '../../../Utils/ApiCalls'
import { showToast } from '../../../utility/tool'
import TableRow from '../../../Components/TableRow'
import moment from 'moment'
import { configuration } from '../../../Utils/config'
import Pagination from '../../../Components/Pagination'
import Preloader from '../../../Components/Preloader'

export default function PrepaidTransaction() {
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

    const prePaidTransaction = async () => {

        try {

            let result = await prePaidTransactionAPI();
            console.log("prePaidTransaction", result);

            if (result.status === 200) {
                setData(result.data)
                setisLoading(false)
            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            setisLoading(false)
            console.error('consumptionError:', e.message);
        }

    }

    useEffect(() => {
        prePaidTransaction()
    }, [])

    return (
        <MainLayout>
 <Seo title='Prepaid Transaction' description='Aple Prepaid Transaction'/>            {
                isLoading && (
                    <Preloader />
                )
            }
            <Header title={"Prepaid transaction"} mt='22px' />

            <Box mt="10px" >
                <div className='LoginCardX'>
                    <Text display={"flex"} justifyContent={"flex-end"} fontSize={"15px"} fontWeight={"500"}>Total consumption - {Data?.length}</Text>

                    <Table variant='striped' colorScheme='orange'>
                        <Thead bg={"blue.blue100"} >
                            <Tr>
                                <Th color="#fff" >amount</Th>
                                <Th color="#fff" >arrears</Th>
                                <Th color="#fff">Date</Th>
                                <Th color="#fff" > token</Th>
                                <Th color="#fff">transaction</Th>
                                <Th color="#fff" >units</Th>
                                <Th color="#fff" >unit</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                currentData?.map((item, i) => (
                                    <TableRow
                                        type="prepaidTransaction"
                                        key={i}
                                        amount={item.amount}
                                        arrears={item.arrears}
                                        created={moment(item.created).format('DD/ MM/ YYYY, h:mm:ss a')}
                                        ststoken={item.ststoken}
                                        transaction={item.transaction}
                                        unit={item.unit}
                                        units={item.units}
                                       
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
