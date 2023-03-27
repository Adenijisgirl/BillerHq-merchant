import React, { useState } from 'react'
import Mode from '../../assets/mode.svg'
import {Link} from 'react-router-dom'
import '../../stylesheets/rolls.css'

const Roll = () => {
  return (
    <div>
        <Link to='/rolecall' className='create-mode'>
        <button className='rolls'>
            <img src={Mode} alt="" />
            <p>Create Role</p>
        </button>
        </Link>
        <div className="role-table">
        <table className="account-table">
        <thead>
          <tr className="table-head1">
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
          
          <th className="table-paragra">
            <tr>Admin</tr>
            <tr>
              <Link to='/rolecall'>
            <button className='roller'>
            <img src={Mode} alt="" />
            <p>Edit Role</p>
        </button>
        </Link>
            </tr>
            </th>
        
          </table>
          </div>
    </div>
  )
}

export default Roll