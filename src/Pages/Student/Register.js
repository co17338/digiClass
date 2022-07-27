import React from 'react';

const Signup = () =>{
    return(
    <>
    <section className='signup'>
        <div className = "container mt-5">
            <div className='signup-content'>
                <div className='signup-form'>
                    <h2 className='font-title'> Sign Up</h2>
                    <form className='register-form'>
                        <div className='form-group'>
                        <label for ="name">Enter full name:</label>
                        <input type="text" name="name" id="name" autoComplete="off"placeholder=
                        "Your Name"/>
                        </div>
                        <div className='form-group'>
                        <label for ="email">Enter Email-Id:</label>
                        <input type="text" name="email" id="email" autoComplete="off"placeholder=
                        "Your Email"/>
                        </div>
                        <div className='form-group'>
                        <label for ="phone">Enter Mobile Number:</label>
                        <input type="number" name="phone" id="phone" autoComplete="off"placeholder=
                        "Phone number"/>
                        </div>
                        <label for ="name">Gender:</label>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" checked/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"></input>
                    
                    </form>
                </div>
            </div>
        </div>
    </section>

    </>
    );
};

export default Signup;