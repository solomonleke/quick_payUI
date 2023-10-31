import React, { useEffect, useState } from 'react'
import MainLayout from '../../../Layout/DashboardLayout/Index'
import Seo from '../../../Utils/Seo'
import Header from '../../../Components/Header'
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { ConsumptionAPI } from '../../../Utils/ApiCalls'
import { showToast } from '../../../utility/tool'
import TableRow from '../../../Components/TableRow'
import moment from 'moment'
import { configuration } from '../../../Utils/config'
import Pagination from '../../../Components/Pagination'
import Preloader from '../../../Components/Preloader'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Consumption() {
    const [Data, setData] = useState([]);
    const [ConsumeData, setConsumeData] = useState([]);
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

    const Consumption = async () => {

        try {

            let result = await ConsumptionAPI();
            console.log("consumptionApi", result);

            if (result.status === 200) {
                setData(result.data)
                const newData =   result.data.view?.map((item,i)=>{
                    
                    let newDate = moment(item.date).format('ll')
                    
                    item.date = newDate
                    
                    return item
                    
                })
                setConsumeData(newData)
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
        Consumption()
    }, [])

    return (
        <MainLayout>
            <Seo title='PostPaid Consumption' description='Aple PostPaid Consumption' />
            {
                isLoading && (
                    <Preloader />
                )
            }
            <Header title={"Postpaid Consumption"} mt='22px' />

            <Box mt="10px" >
                <div className='LoginCardX'>
                    <Text display={"flex"} justifyContent={"flex-end"} fontSize={"15px"} fontWeight={"500"}>Total consumption - {Data?.data?.length}</Text>

                    <Table variant='striped' colorScheme='orange'>
                        <Thead bg={"blue.blue100"} >
                            <Tr>
                                <Th color="#fff">class</Th>
                                <Th color="#fff">amount</Th>
                                <Th color="#fff" >consumed</Th>
                                <Th color="#fff" >created</Th>
                                <Th color="#fff" >current read</Th>
                                <Th color="#fff" >previous read</Th>
                                <Th color="#fff" >feeder name</Th>
                                <Th color="#fff" >transformer name</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                currentData?.map((item, i) => (
                                    <TableRow
                                        type="consumption"
                                        key={i}
                                        className={item.class}
                                        amount={item.amount}
                                        consumed={item.consumed}
                                        created={item.created_on}
                                        currentRead={item.current_read}
                                        previousRead={item.previous_read}
                                        feederName={item.feeder_name}
                                        transformerName={item.transformer_name}
                                    />
                                ))
                            }


                        </Tbody>

                    </Table>

                    <Pagination postPerpage={PostperPage} currentPage={CurrentPage} totalPosts={Data?.data?.length} paginate={paginate} />


                </div>

            </Box>

            <Header title={"Postpaid Consumption chart"} size='18px' mt='22px' />

            <Box mt="32px">
                <ResponsiveContainer width={"100%"} height={250}>
                    <BarChart data={ConsumeData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="consume" fill="navy" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>


        </MainLayout>
    )
}
