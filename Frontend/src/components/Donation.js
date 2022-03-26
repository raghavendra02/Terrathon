import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Money from './donation/Money'
import Food from './donation/Money'


const DonatePage = () => {
    return (
        <div className='body-donate'>
            <div className='Slide-show-donate'>
            </div>
            <div className='Choice-food-money'>
                <h3 className='Title-donate'>How do you wish to contribute?</h3>
                <ListGroup>
                    <ListGroup.Item onClick={drirectToMoney}>Donate Money</ListGroup.Item>
                    <ListGroup.Item onClick={drirectToFood}>Donate Food</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default DonatePage