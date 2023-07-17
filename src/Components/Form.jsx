import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    return (
        <div className="min-h-screen bg-[#004b43]">
            <h1 className="text-center">Employer Data Collection</h1>
            <div className="text-white w-2/4 m-auto p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative my-6">
                        <input
                            id="name"
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className={`relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer ${errors.name ? "border-pink-500" : "border-slate-200"
                                } text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                        />
                        <label
                            htmlFor="name"
                            className={`absolute left-2 -top-2 z-[1] px-2 text-xs transition-all ${errors.name ? "text-pink-500" : "text-slate-400"
                                } ${register("name").value ? "-top-2" : "top-2.5"
                                } peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent bg-white`}
                        >
                            Your name
                        </label>
                        {errors.name && (
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-700 peer-invalid:text-pink-500">
                                <span>{errors.name.message}</span>
                            </small>
                        )}
                    </div>

                    <div className="relative my-6">
                        <input
                            id="email"
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className={`relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer ${errors.email ? "border-pink-500" : "border-slate-200"
                                } text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all ${register("email").value ? "-top-2" : "top-2.5"
                                } peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent bg-white`}
                        >
                            Your email
                        </label>
                        {errors.email && (
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-700 peer-invalid:text-pink-500">
                                <span>{errors.email.message}</span>
                            </small>
                        )}
                    </div>
                    <div className="relative my-6">
                        <input
                            id="salary"
                            type="number"
                            {...register("salary", { required: "Salary is required" })}
                            className={`relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer ${errors.salary ? "border-pink-500" : "border-slate-200"
                                } text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                        />
                        <label
                            htmlFor="salary"
                            className={`absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all ${register("salary").value ? "-top-2" : "top-2.5"
                                } peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent bg-white`}
                        >
                            Salary
                        </label>
                        {errors.salary && (
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-700 peer-invalid:text-pink-500">
                                <span>{errors.salary.message}</span>
                            </small>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn border-0 inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-purple-700 disabled:cursor-not-allowed disabled:border"
                    >
                        {editClick ? "Update Data" : "Add Employer"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
