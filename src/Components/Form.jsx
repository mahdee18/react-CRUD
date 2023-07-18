import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { LuEdit, LuTrash2 } from "react-icons/lu";
import "sweetalert2/dist/sweetalert2.min.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("");

    const onSubmit = (data) => {
        if (editClick) {
            const tempTableData = [...tableData];
            Object.assign(tempTableData[editIndex], data);
            setTableData(tempTableData);
            setEditClick(false);
            reset();
            Swal.fire({
                icon: "success",
                title: "Data Updated",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            setTableData([...tableData, data]);
            reset();
            Swal.fire({
                icon: "success",
                title: "Data Added",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleDelete = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const filterData = tableData.filter((item, i) => i !== index);
                setTableData(filterData);
                Swal.fire({
                    icon: "success",
                    title: "Data Deleted",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    const handleEdit = (index) => {
        const tempData = tableData[index];
        setEditClick(true);
        setEditIndex(index);
        reset(tempData);
    };

    return (
        <div className="min-h-screen bg-gray-800 pb-20">
            <h1 className="text-center text-white text-4xl font-semibold pt-10">Employer Data Collection</h1>
            <div className="text-white sm:w-2/4 md:w-2/4 m-auto p-10">
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
                                } ${watch("name") ? "-top-2" : "top-2.5"} peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent bg-white`}
                        >
                            Your name
                        </label>
                        {errors.name && (
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-red-500 peer-invalid:text-white">
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
                            className={`absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all ${watch("email") ? "-top-2" : "top-2.5"
                                } peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent bg-white`}
                        >
                            Your email
                        </label>
                        {errors.email && (
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-red-500 peer-invalid:text-pink-500">
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
                            className={`absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all ${watch("salary") ? "-top-2" : "top-2.5"
                                } peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent bg-white`}
                        >
                            Salary
                        </label>
                        {errors.salary && (
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-red-500 peer-invalid:text-pink-500">
                                <span>{errors.salary.message}</span>
                            </small>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn border-0 inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-purple-600 disabled:cursor-not-allowed disabled:border"
                    >
                        {editClick ? "Update Data" : "Add An Employer"}
                    </button>
                </form>

            </div>
            <div className="overflow-x-auto">
                <table className="sm:w-full md:w-5/6 mx-auto mt-20 text-center">
                    <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="p-2 md:p-4">Name</th>
                            <th className="p-2 md:p-4">Email</th>
                            <th className="p-2 md:p-4">Salary</th>
                            <th className="p-2 md:p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index} className="border-t border-gray-300 bg-gray-100">
                                <td className="p-2 md:p-4">{item.name}</td>
                                <td className="p-2 md:p-4">{item.email}</td>
                                <td className="p-2 md:p-4">${item.salary}</td>
                                <td className="p-2 md:p-4 flex justify-center gap-2 md:justify-center">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-1 px-2 border border-blue-500 mb-2 md:mb-0 md:mr-2"
                                        title="Edit"
                                    >
                                        <LuEdit></LuEdit>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="text-white
                                        bg-red-700 hover:bg-white
                                        text-lg hover:text-red-700 font-bold py-1 px-2 border border-red-500"
                                        title="Delete"
                                    >
                                        <LuTrash2></LuTrash2>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Form;
