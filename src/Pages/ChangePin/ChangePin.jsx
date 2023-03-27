import React from 'react'
import '../../stylesheets/changepin.css';
import {Link} from 'react-router-dom'




const ChangePin = () => {
  return (
    <div className='change'>
        <form action="" className='changepin'>
            <label htmlFor="">Old Pin</label>
            <input type="text" />
            <label htmlFor="">New Pin</label>
            <input type="text" />
            <label htmlFor="">Confirm New Pin</label>
            <input type="text" />
            <Link to='/newpin'>
                <button>PROCEED</button>
            </Link>
        </form>
    </div>
  )
}

export default ChangePin