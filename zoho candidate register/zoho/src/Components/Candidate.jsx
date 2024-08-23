import React from 'react'
import './Candidate.css'
import { useState, useEffect } from 'react'
import { IconParkLeft, MdiCloseOutline } from '../icons'
const Candidate = () => {
    const initialValues = { email: "", fName: "", phone: "", lName: "", office: "", aadhar: "", pan: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  
      if (Object.keys(formErrors).length === 0) {
        try {
          const response = await fetch('http://localhost:8080/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
          });
          if (response.ok) {
            alert('Data submitted successfully!');
          } else {
            alert('Error submitting data.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error submitting data.');
        }
      }
    };
  
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fName) {
            errors.fName = "FirstName is required";
        }
        if (!values.email) {
            errors.email = "email is required";
        }
        else if (!regex.test(values.email)) {
            errors.email = " Invalid email";
        }
        if (!values.phone) {
            errors.phone = "phone is required";
        }
        //   else if(values.phone>10 || values.phone<10){
        //     errors.phone="enter a valid mobile number";
        //   }
        if (!values.lName) {
            errors.lName = "Last Name is required";
        }
        if (!values.office) {
            errors.office = "Office mail id is required";
        }
        else if (!regex.test(values.office)) {
            errors.office = "Invalid email";

        }
        return errors;
    };
    return (
        <div className='container2'>
            <div className='nav2'>
                <div className='candidate'>

                    <div className='left-icon'>
                        <div>
                            < IconParkLeft />
                        </div>
                        <div>
                            <h3 className='Add'>Add Candidate</h3>
                        </div>
                    </div>
                    <div className='close'>
                        <MdiCloseOutline />
                    </div>
                </div>
            </div>

            <div className='card'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4 className='txt'>Candidates Details</h4>
                        <div className='card-details'>
                            <div>
                                <label htmlFor="email">Email<span>*</span></label>
                                <input className='inp' name='email' value={formValues.email} onChange={handleChange} type="email" placeholder='Email' />
                                <p className='error-col1'>{formErrors.email}</p>
                            </div>
                            <div>
                                <label className='second-lab' htmlFor="First Name">First Name<span>*</span></label>
                                <input className='inp' name='fName' value={formValues.fName} onChange={handleChange} type="text" placeholder='First Name' />
                                <p className='error-col2'>{formErrors.fName}</p>

                            </div>
                        </div>
                        <div className='card-details'>
                            <div>
                                <label htmlFor="Phone">Phone<span>*</span></label>
                                <input className='inp' name='phone' value={formValues.phone} onChange={handleChange} type="text" placeholder='Phone Number' />
                                <p className='error-col1'>{formErrors.phone}</p>

                            </div>
                            <div>
                                <label className='second-lab' htmlFor="Last Name">Last Name<span>*</span></label>
                                <input className='inp' name='lName' type="text" value={formValues.lName} onChange={handleChange} placeholder='Last Name' />
                                <p className='error-col2'>{formErrors.lName}</p>

                            </div>
                        </div>
                        <div className='card-details'>
                            <div>
                                <label htmlFor="UAN">UAN Number<span>*</span></label>
                                <input className='inp uan' type="text" placeholder='UAN Number' />
                                {/* <p className='error-col1'>{formErrors.uan}</p> */}
                            </div>
                            <div>
                                <label className='second-lab' htmlFor="Office-email">Office email<span>*</span></label>
                                <input className='inp' name='office' type="email" 
                                value={formValues.office} onChange={handleChange}
                                 placeholder='Office email' />
                                {/* <p className='error-col2'>{formErrors.office}</p> */}

                            </div>
                        </div>
                        <div className="card-details">
                            <div>
                                <label htmlFor="UAN">Aadhar Number<span>*</span></label>
                                <input className='inp aadhar'value={formValues.aadhar} name='aadhar' onChange={handleChange} type="text" placeholder='Aadhar Number' />
                                {/* <p className='error-col1'>{formErrors.aadhar}</p> */}
                            </div>
                        </div>
                        <div className="card-details">
                            <div>
                                <label htmlFor="UAN">PAN Number<span>*</span></label>
                                <input className='inp uan' name='pan' value={formValues.pan}  onChange={handleChange} type="text" placeholder='Pan Number' />
                                {/* <p className='error-col1'>{formErrors.pan}</p> */}
                            </div>
                        </div>
                        <div className="card-details">
                            <div>
                                <label htmlFor="UAN">Photo <span>*</span></label>
                                <input className=' upload ' name='uan' type="file" placeholder='Upload photo' />
                                {/* <p className='error-col1'>{formErrors.uan}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='Address'>
                        <h4 className='txt'>Address Details</h4>
                        <div className='card-details'>
                            <div className='outer-div'>
                                <div>
                                    <label>Permanent Address</label>
                                </div>
                                <div className='addressContents'>
                                    <input className='inp addressInput sp' name='pan' type="text" placeholder='Address Line1' />
                                    <input className='inp addressInput sp' name='pan' type="text" placeholder='Address Line2' />
                                    <div>
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='City' />
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='Select State' />
                                    </div>
                                    <div>
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='India' />
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='Postal Code' />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='card-details'>
                            <div className='outer-div'>
                                <div>
                                    <label>Present Address</label>
                                </div>
                                <div className='addressContents'>
                                    <div className='checkbox'>
                                        <input type="checkbox" className='sp ' name="" id="" /> Same As Present Address

                                    </div>
                                    <input className='inp addressInput sp' name='pan' type="text" placeholder='Address Line1' />
                                    <input className='inp addressInput sp' name='pan' type="text" placeholder='Address Line2' />
                                    <div>
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='City' />
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='Select State' />
                                    </div>
                                    <div>
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='India' />
                                        <input className='inp small-inp sp' name='pan' type="text" placeholder='Postal Code' />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='proffessional'>
                            <h4 className='txt'>Proffessional Details</h4>
                            <div className='card-details'>
                                <div>
                                    <label htmlFor="experience">Experience<span>*</span></label>
                                    <input className='inp' name='experience' 
                                    // onChange={handleChange} type="text"
                                     placeholder='In months' />
                                    {/* <p className='error-col1'>{formErrors.experience}</p> */}
                                </div>
                                <div>
                                    <label className='second-lab' htmlFor="loaction">Location<span>*</span></label>
                                    <input className='inp' name='loaction'
                                    //  value={formValues.location} onChange={handleChange} 
                                     type="text" placeholder='Source' />
                                    {/* <p className='error-col2'>{formErrors.location}</p> */}

                                </div>
                            </div>
                            <div className='card-details'>
                                <div>
                                    <label htmlFor="hire">Source Of Hire<span>*</span></label>
                                    <input className='inp hire' name='hire' 
                                    // value={formValues.email} onChange={handleChange} 
                                    type="text" placeholder='Source' />
                                    {/* <p className='error-col1'>{formErrors.hire}</p> */}
                                </div>
                                <div className='title-cover' >
                                    <div>
                                        <label className='second-lab' htmlFor="title">Title<span>*</span></label>
                                    </div>
                                    <div className='titles'>
                                        <input className="radio" type="radio" id="html" name="fav_language" value="HTML" />
                                        <label for="html">CEO</label><br />
                                        <input className="radio" type="radio" id="css" name="fav_language" value="CSS" />
                                        <label for="css">Administration</label><br />
                                        <input className="radio" type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="Manager">Manager</label>     <br />
                                        <input className="radio" type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="Manager">Assistant Mannager</label>     <br />
                                        <input className="radio" type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="Manager">Team Member</label>     <br />
                                    </div>
                                </div>
                            </div>
                            <div className='card-details'>
                                <div className='skills'>
                                    <label className="skill-set" htmlFor="skills">Skill Set<span>*</span></label>
                                    <textarea className='text-area' name="skills" id=""></textarea>
                                    {/* <p className='error-col1'>{formErrors.skills}</p> */}
                                </div>

                            </div>

                            <div className='card-details'>

                                <div>
                                    <label htmlFor="qualification">Highest Qualification<span>*</span></label>
                                    <input className='inp qualification' name='qualification'
                                    //  value={formValues.qualification} onChange={handleChange} 
                                     type="text" />


                                </div>
                                <div>
                                    <label className='currency' htmlFor="salary">Current Salary<span>*</span></label>
                                    <input className='inp currency-inp' name='salary' type="text"
                                    //  value={formValues.salary} onChange={handleChange}
                                      />

                                </div>
                            </div>
                            <div className='card-details'>

                                <div>
                                    <label htmlFor="qualification">Highest Qualification<span>*</span></label>
                                    <textarea className='text-area2' name="qualification" id=""></textarea>

                                </div>
                                <div className='dep'>
                                    <div>
                                    <label className='department' htmlFor="department">Department<span>*</span></label>
                                    <input className='inp in ' name='department' type="text" 
                                    // value={formValues.department} onChange={handleChange} 
                                    />
                                    
                                    </div>
                                    <div><label className='department' htmlFor="offer">Offer Letter<span>*</span></label>
                                    <input className='inp in' name='offer' type="text"
                                    //  value={formValues.offer} onChange={handleChange}
                                      />
                                    </div>
                                    <div><label className='department' htmlFor="date">Tentative Joining Date<span>*</span></label>
                                    <input className='inp ins' name='date' type="text"
                                    //  value={formValues.date} onChange={handleChange}
                                      />
                                    </div>
                                   
                                </div>
                            </div>

                        </div>


                    </div>

                    <button className='submit'>Submit</button>

                </form>
            </div>
        </div>

    )
}

export default Candidate
