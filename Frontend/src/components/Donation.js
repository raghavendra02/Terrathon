import React from 'react'
import Money from './donation/Money'
import Food from './donation/Money'


const DonatePage = () => {
    return(
        <div>
        <div className='Slide-show-donate'>
        </div>
        <div className='Choice-food-money'>
            <h3 className='Title-donate'>How do you wish to contribute?</h3>
            <h4 className='Options'>Donate Money</h4>
            <h4 className='Options'>Donate Food</h4>
        </div>

        </div>
    )
}
 
export default DonatePage