import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productlist() {
    const [users, setUsers] = useState([])
   
    useEffect(async () => {
        try {
            let data = await fetch("https://61c46bbbf1af4a0017d99520.mockapi.io/propro");
            let userData = await data.json()
            setUsers(userData)
        }
      
        catch (error) {
            console.log(error)
        }

    }, [])

    let final = (async (id) => {
        let move = await fetch(`https://61c46bbbf1af4a0017d99520.mockapi.io/propro/${id}`, {
            method: "DELETE"
        });
        let data = await fetch("https://61c46bbbf1af4a0017d99520.mockapi.io/propro");
        let userData = await data.json()
        setUsers(userData)
    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Productlist</h1>
                <Link to="/productform" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create list</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>National</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Millage</th>
                                    <th>Product CC</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    users.map((proc, index) => {      // index is just uniqe value seperateed,only for map method this place use or not use no problem
                                        return <tr key={index} >
                                            <td>{proc.national}</td>
                                            <td>{proc.productName}</td>
                                            <td>{proc.price}</td>
                                            <td>{proc.millage}</td>
                                            <td>{proc.productcc}</td>
                                            <td>
                                                <Link to={`/editpro/${proc.id}`}> <button className='btn btn-primary'>Edit</button></Link>
                                                <button className='btn btn-danger' onClick={() => final(proc.id)}>Delete</button>

                                            </td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productlist
