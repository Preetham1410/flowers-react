import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { Icon } from 'semantic-ui-react';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import './preview.css';
import cartService from '../Services/CartService';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, '*Too Short!')
        .max(50, '*Too Long!')
        .required('*Name required'),
    email: Yup.string().email('*Invalid email').required('*Email Required'),
    phone: Yup.number()
        .typeError("*That doesn't look like a phone number")
        .integer("*A phone number can't include a decimal point")
        .min(10, "*Phone number contains 10 digits")
        .required('*Mobile number required'),
    house: Yup.string().required('*This field cannot be empty'),
    area: Yup.string().required('*This field cannot be empty'),
    landmark: Yup.string().required('*This field cannot be empty'),
    city: Yup.string().required('*This field cannot be empty'),
    state: Yup.string().required('*This field cannot be empty'),
    pincode: Yup.number()
        .typeError("*That doesn't look like a pincode")
        .min(6, "*pincode contains 6 digits")
        .required('*pincode required'),
});


function Preview() {
    const navigate = useNavigate();
    // const { img, name1, price } = location.state;

    const [clicked, setClicked] = useState();
    // const [clicked2, setClicked2] = useState();

    const[order,setOrder] = useState([]);

    // const [date, setDate] = useState("Today");
    // const [time, setTime] = useState("9AM - 12PM");

    // let localdate = JSON.parse(localStorage.getItem("date"));
    // let localtime = JSON.parse(localStorage.getItem("time"));


    // const current = new Date();
    // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const month = monthNames[current.getMonth()];
    // const year = current.getFullYear();
    // const today = current.getDate();
    // const tomorrow = current.getDate() + 1;
    // const nextday = current.getDate() + 2;

    useEffect(() => { 
        handleOrder();
    }, []);    
    
    const handleOrder = () => {
        cartService.getCart().then(res=>{
            setOrder(res.data)
        });
    }

    const address = (values) => {
        setClicked(true);
        console.log(order)
    }


    // const slots = (e) => {
    //     e.preventDefault();
    //     setClicked2(true);
    // }

    var retrievedData = localStorage.getItem("address");
    var localAddress = JSON.parse(retrievedData);
    
    if(localAddress===null){
        localAddress = [
            {
                name: "",
                email: "",
                phone: "",
                house: "",
                area: "",
                landmark: "",
                city: "",
                state: "",
                pincode: "",

            }
        ]
    }


    return (
        <>
            <button className='back-icon' onClick={() => navigate(-1)}>
                <Icon name='angle left' size='large' />
            </button>
            <div className='preview-content'>
                <div className='addressContainer'>
                    <h2>Enter your Delivery Address</h2>
                    <Formik
                        initialValues={{
                            name: localAddress.name,
                            email: localAddress.email,
                            phone: localAddress.phone,
                            house: localAddress.house,
                            area: localAddress.area,
                            landmark: localAddress.landmark,
                            city: localAddress.city,
                            state: localAddress.state,
                            pincode: localAddress.pincode,
                        }}
                        validationSchema={DisplayingErrorMessagesSchema}
                        onSubmit={values => {
                            // console.log(values);
                            localStorage.setItem("address", JSON.stringify(values));
                            return address(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className='input-contain'>
                                    <div className='add-label'><label>Full Name</label></div>
                                    <Field name="name"
                                    />
                                    {touched.name && errors.name && <div className="error">{errors.name}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Mobile Number</label></div>
                                    <Field name='phone'
                                    />
                                    {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Email</label></div>
                                    <Field name="email"
                                    />
                                    {touched.email && errors.email && <div className="error">{errors.email}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Flat, House no., Building, Company, Apartment</label></div>
                                    <Field name="house"
                                    />
                                    {touched.house && errors.house && <div className="error">{errors.house}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Area, Street, Sector, Village</label></div>
                                    <Field name="area"
                                    />
                                    {touched.area && errors.area && <div className="error">{errors.area}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Landmark</label></div>
                                    <Field name="landmark"
                                    />
                                    {touched.landmark && errors.landmark && <div className="error">{errors.landmark}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Town/City</label></div>
                                    <Field name="city"
                                    />
                                    {touched.city && errors.city && <div className="error">{errors.city}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>State</label></div>
                                    <Field name="state"
                                    />
                                    {touched.state && errors.state && <div className="error">{errors.state}</div>}
                                </div>

                                <div className='input-contain'>
                                    <div className='add-label'><label>Pincode</label></div>
                                    <Field name="pincode"
                                    />
                                    {touched.pincode && errors.pincode && <div className="error">{errors.pincode}</div>}
                                </div>

                                <button type="submit" className='add-button'>Use this Address</button>
                            </Form>
                        )}
                    </Formik>
                </div>


                <div className='deliverySlot'>
                    <table className='previewtable'>
                        <tbody>
                            <tr className='table-head'>
                                <td className='cartimage'>Image</td>
                                <td>Name</td>
                                <td>Price</td>
                            </tr>
                                   
                            {order.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td><img src={data.img} className='previewimage' alt="img" /></td>
                                        <td>{data.name}</td>
                                        <td>Rs. {data.price}.00</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>


                    {/* <h2>Delivery Slot</h2>
                    <form onSubmit={slots}>
                        <p className='selectHead'>Select Date</p>
                        <ul>
                            <li><input className='delinput' type="radio"
                                value="Today" name='date'
                                checked={date === "Today"}
                                onChange={() => setDate("Today")} />
                                {today} - {month} - {year}</li>

                            <li><input className='delinput' type="radio"
                                value="Tomorrow" name='date'
                                checked={date === "Tomorrow"}
                                onChange={() => setDate("Tomorrow")} />
                                {tomorrow} - {month} - {year}</li>

                            <li><input className='delinput' type="radio"
                                value="Next day" name='date'
                                checked={date === "Next day"}
                                onChange={() => setDate("Next day")} />
                                {nextday} - {month} - {year}</li>

                        </ul>
                        <p className='selectHead'>Select Time</p>
                        <ul>
                            <li><input className='delinput' type="radio"
                                value="9AM - 12PM" name='time'
                                checked={time === "9AM - 12PM"}
                                onChange={() => setTime("9AM - 12PM")} />9AM  - 12PM</li>

                            <li><input className='delinput' type="radio"
                                value="12PM - 3PM" name='time'
                                checked={time === "12PM - 3PM"}
                                onChange={() => setTime("12PM - 3PM")} />12PM - 3PM</li>

                            <li><input className='delinput' type="radio"
                                value="3PM - 6PM" name='time'
                                checked={time === "3PM - 6PM"}
                                onChange={() => setTime("3PM - 6PM")} />3PM - 6PM</li>
                        </ul>
                        {(date === localdate && time === localtime) ?
                            <>
                                <div className='error'>*Please select different time slot</div>
                                <button className='custom-btn' disabled>Done</button>
                            </>
                            : <button className='custom-btn' type='submit'>Done</button>
                        }
                    </form> */}



                    {(clicked === true) &&
                        (<div className='display'>
                            <h3>Your Order will be delivered to:</h3>
                            <p style={{ fontWeight: "400", fontSize: "20px" }}>{localAddress.name},</p>
                            <p>{localAddress.house},{localAddress.area},</p>
                            <p>{localAddress.landmark},</p>
                            <p>{localAddress.city},{localAddress.state}-{localAddress.pincode}</p>
                            <p>{localAddress.phone},</p>
                            <p>{localAddress.email}</p>
                        </div>)
                    }

                    {/* {(clicked2 === true) &&
                        (<div className='display'>
                            <h3>Your order will be delivered on:</h3>
                            <p>Date: {date}</p>
                            <p>Time : {time}</p>
                        </div>)
                    } */}

                    {((clicked === true) ) ?
                        <Link to='/'>
                            <button className='proceed' onClick={() => {
                                localStorage.removeItem("cart");
                                console.log(order)
                                // orderService.createOrder(order).then(res=>{
                                //     console.log("your orders : "+res.data)
                                // });
                                cartService.deleteAllCart().then(res=>console.log("Deleted" + order));
                                toast.success("Order Placed sucessfully!");
                                // localStorage.setItem("date", JSON.stringify(date));
                                // localStorage.setItem("time", JSON.stringify(time));
                                // console.log(localdate, localtime);
                            }} >Place Order</button>
                        </Link>
                        : null
                    }
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </>
    );
}

export default Preview;