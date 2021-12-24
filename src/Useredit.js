import React,{ useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'


function Useredit() { 

    let params=useParams()
    let navigate=useNavigate()  //this line use for delete the value,again reload
    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: "",    
            date: "",
            salary: ""
        },
        onSubmit:async values =>{
            try{
                await fetch(`https://61c46bbbf1af4a0017d99520.mockapi.io/user/${params.id}`,{
                    method:"PUT",
                    body: JSON.stringify(values),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                navigate("/users")    //this line use for delete the value,again reload
            }   
           catch (error){
                console.log(error)
           }
           
        }

    })

    useEffect(async () => {
        try {
            let load = await fetch(`https://61c46bbbf1af4a0017d99520.mockapi.io/user/${params.id}`);
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
                <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
            </div>

            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className='col-lg-4'>
                            <lable>Name</lable>
                            <input type="text" className='form-control' name='name'
                                onChange={formik.handleChange} value={formik.values.name} required
                            ></input>

                        </div>
                        <div className='col-lg-4'>
                            <lable>Position</lable>
                            <input type="text" className='form-control' onChange={formik.handleChange} required
                                name='position' value={formik.values.position} ></input>

                        </div>
                        <div className='col-lg-4'>
                            <lable>Office</lable>
                            <input type="text" className='form-control' onChange={formik.handleChange} required
                                name='office' value={formik.values.office} ></input>

                        </div>
                        <div className='col-lg-4'>
                            <lable>Age</lable>
                            <input type="text" className='form-control' onChange={formik.handleChange} required
                                name='age' value={formik.values.age}></input>

                        </div>
                        <div className='col-lg-4'>
                            <lable>Date</lable>
                            <input type="date" className='form-control' onChange={formik.handleChange} required
                                name='date' value={formik.values.date}></input>

                        </div>
                        <div className='col-lg-4'>
                            <lable className='text-center'>Salary</lable>
                            <input type="text" className='form-control' onChange={formik.handleChange} required
                                name='salary' value={formik.values.salary}></input>

                        </div>
                        <div className='col-lg-12 mt-3'>

                            <input type="submit" className='btn btn-primary' ></input>

                        </div>

                    </div>
                </form>

            </div>
        </>
        
    )


}

export default Useredit
