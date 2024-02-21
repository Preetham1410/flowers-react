import React, { useState } from 'react';

function Address() {
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [plot, setPlot] = useState();
    const [area, setArea] = useState();
    const [landmark, setLandmark] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [pincode, setPincode] = useState();
    return (
        <>
            <div className='addressContainer'>
                <h2>Enter your Delivery Address</h2>
                <form>
                    <div className='input-contain'>
                        <div className='add-label'><label>Full Name</label></div>
                        <input type="text" value={name} onChange={event => setName(event.target.value)} required />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>Mobile Number</label></div>
                        <input type="number" value={mobile} onChange={event => setMobile(event.target.value)} required />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>Flat, House no., Building, Company, Apartment</label></div>
                        <input type="text" value={plot} onChange={event => setPlot(event.target.value)} required />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>Area, Street, Sector, Village</label></div>
                        <input type="text" value={area} onChange={event => setArea(event.target.value)} required />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>Landmark</label></div>
                        <input type="text" value={landmark} onChange={event => setLandmark(event.target.value)} placeholder='Eg. Near appollo Hospital (Optional)' />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>Town/City</label></div>
                        <input type="text" value={city} onChange={event => setCity(event.target.value)} required />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>State</label></div>
                        <input type="text" value={state} onChange={event => setState(event.target.value)} required />
                    </div>

                    <div className='input-contain'>
                        <div className='add-label'><label>Pincode</label></div>
                        <input type="number" value={pincode} onChange={event => setPincode(event.target.value)} required />
                    </div>

                    <button className='add-button'>Use this Address</button>
                </form>
            </div>
        </>
    );
}

export default Address;