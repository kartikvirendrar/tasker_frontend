import React from "react";
import { useState } from "react";
import { createTask } from "../../api/task";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddTasks = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [fDate, setFDate] = useState("");
    const [tDate, setTDate] = useState("");
    const [priority, setPriority] = useState(1);

    if(window.localStorage.getItem("userid")===null || window.localStorage.getItem("userid")===undefined){
        navigate("/login");
        toast.error("Please login first!");
        return;
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    const user = window.localStorage.getItem("userid");
        createTask({ user, title, description, fDate, tDate, priority})
          .then((res) => {
            console.log(res.data);
            toast.success("Task Created Successfully");
            navigate("/tasks");
        })
          .catch((err) => 
          {console.log(err);
    });
      };

    function checkDate() {
        if (fDate > tDate) {
            setFDate(tDate);
            document.getElementById("fDate").value = tDate;
        }    
    }

    return (
        <>
            <section className="my-6 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-blue-500 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add New Task</h2>

                <form onSubmit={handleSubmit} method="POST">
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Title</label>
                            <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Description</label>
                            <input id="description" type="text" onChange={(e) => setDescription(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">From Date</label>
                            <input id="fDate" type="date" onChange={(e) => setFDate(e.target.value)} onClick={() => checkDate()} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">To Date</label>
                            <input id="tDate" type="date" onChange={(e) => setTDate(e.target.value)} onClick={() => checkDate()} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Priority</label>
                            <select onChange={(e) => setPriority(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="3">Low</option>
                                <option value="2">Medium</option>
                                <option value="1">High</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <a href="/tasks" className="mx-4 px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</a>
                        <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddTasks;