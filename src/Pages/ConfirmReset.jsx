import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/confirmreset.css'




const ConfirmReset = () => {
  return (
    <div className='confirm-reset'>
<form action="" className='form-confirmreset'>
    <div className="reset-settings">
        <label htmlFor="">New Pin</label>
        <input type="text" />
    </div>
    <div className="reset-settings">
        <label htmlFor="">Confirm New Pin</label>
        <input type="text" />
    </div>
    <Link to='/newpin'>
    <button>SUBMIT</button>
    </Link>
</form>
    </div>
  )
}

export default ConfirmReset