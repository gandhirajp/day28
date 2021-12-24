import React from 'react'
import { Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

function Productform() {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            national: "",
            productName: "",
            price: "",
            millage: "",
            productcc: "",

        },
        onSubmit: async values => {
            try {
                await fetch("https://61c46bbbf1af4a0017d99520.mockapi.io/propro", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                navigate("/productform")
            }
            catch (error) {
                console.log(error)
            }

        }

    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Product list</h1>
            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6' >
                            <lable>National</lable>
                            <input type="text" className='form-control' name='national'
                             onChange={formik.handleChange} value={formik.values.national} required
                            ></input>

                        </div>
                        <div className='col-lg-6' >
                            <lable>Product Name</lable>
                            <input type="text" className='form-control' name='productName'
                             onChange={formik.handleChange} value={formik.values.productName} required
                            ></input>

                        </div>
                        <div className='col-lg-3' >
                            <lable>Price</lable>
                            <input type="text" className='form-control' name='price'
                             onChange={formik.handleChange} value={formik.values.price} required
                            ></input>

                        </div>
                        <div className='col-lg-6' >
                            <lable>Millage</lable>
                            <input type="text" className='form-control'name='millage'
                             onChange={formik.handleChange} value={formik.values.millage} required
                            ></input>

                        </div>
                        <div className='col-lg-3' >
                            <lable>Product CC</lable>
                            <input type="text" className='form-control' name='productcc'
                             onChange={formik.handleChange} value={formik.values.productcc} required
                            ></input>

                        </div>
                        <div className='col-lg-4' >

                            <input type="submit" className='btn btn-danger mt-3' ></input>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Productform
