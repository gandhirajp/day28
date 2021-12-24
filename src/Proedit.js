import React,{ useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'


function Proedit() { 

    let params=useParams()
    let navigate=useNavigate()  //this line use for delete the value,again reload
    const formik = useFormik({
        initialValues: {
            national: "",
            productName: "",
            price: "",
            millage: "",
            productcc: ""
        },
        onSubmit:async values =>{
            try{
                await fetch(`https://61c46bbbf1af4a0017d99520.mockapi.io/propro/${params.id}`,{
                    method:"PUT",
                    body: JSON.stringify(values),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                navigate("/pro")    //this line use for delete the value,again reload
            }   
           catch (error){
                console.log(error)
           }
           
        }

    })

    useEffect(async () => {
        try {
            let load = await fetch(`https://61c46bbbf1af4a0017d99520.mockapi.io/propro/${params.id}`);
            let userLoad = await load.json()
            formik.setValues(userLoad)
          
        }
        catch (error) {     
            console.log(error)
        }

    }, [])
    return (
        <> // component return only one value,  using more element that is ---(Fragment)----
          
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

export default Proedit
