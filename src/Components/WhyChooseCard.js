import React from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa';

export default function WhyChooseCard({icon, title, body}) {
    return (
        <div className='col-lg-4 col-md-6 d-flex col-sm-12 col-xs-12 mt-3'>
            <div className='singleCard'>

                <div className='icon'>
                   {icon}
                </div>
                <div className='CardTitle'>
                    {title}
                </div>
                <div className='CardBody'>
                    {body}
                </div>


              
            </div>
        </div>
    )
}
