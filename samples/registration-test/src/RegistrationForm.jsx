import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Registration successful!");
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input {...register('name', { required: true, maxLength: 50 })} />
                    {errors.name && <p>Name is required and should be less than 50 characters.</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <p>Please enter a valid email address.</p>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 8 })} />
                    {errors.password && <p>Password must be at least 8 characters long.</p>}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
