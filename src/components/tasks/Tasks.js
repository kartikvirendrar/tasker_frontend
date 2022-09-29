import React from "react";
import { useState, useEffect } from 'react';
import { getTasks, toggleCompleted } from "../../api/task";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Tasks = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    window.localStorage.setItem("a", 0);
    window.localStorage.setItem("b", 0);
    function priority() {
        for (let i = 0; i < tasks.length; i++) {
            let fdate = Date.parse(tasks[i].fDate);
            let today = new Date();
            today.setHours(5, 30, 0, 0);
            let m = today.toUTCString();
            let mili = Date.parse(m);
            let diff = fdate / day - mili / day;
            if (diff === 1) {
                tasks[i].daydiff = fdate / day - mili / day + " Day Remaining";
            } else if (diff <= 0) {
                tasks[i].daydiff = -(fdate / day - mili / day) + " Days Passed Away";
            } else {
                tasks[i].daydiff = fdate / day - mili / day + " Days Remaining";
            }
            tasks[i].tDate = (tasks[i].tDate).toString().substring(0, 10);
            tasks[i].fDate = (tasks[i].fDate).toString().substring(0, 10);

            if (tasks[i].completed) {
                window.localStorage.setItem("a", 1);
            } else {
                window.localStorage.setItem("b", 1);
            }

            if (tasks[i].priority === 1) {
                tasks[i].color = "red";
                tasks[i].hml = "High";
            } else if (tasks[i].priority === 2) {
                tasks[i].color = "blue";
                tasks[i].hml = "Medium";
            }
            else if (tasks[i].priority === 3) {
                tasks[i].color = "green";
                tasks[i].hml = "Low";
            }
        }
    }

    function toggle(taskId) {
        toggleCompleted(taskId)
            .then(res => {
                //   setQuestions(res.data);
                console.log(res.data);
                toast.success("Task Marked")
                getTasks(window.localStorage.getItem("userid"))
                    .then(res => {
                        // console.log(res.data);
                        setTasks(res.data);
                        setTimeout(none(), 15000);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    function none() {
        if (window.localStorage.getItem("b") === '0') {
            document.getElementById("sched").innerHTML = "NONE";
        }else{
            document.getElementById("sched").innerHTML = "";
        }
        if (window.localStorage.getItem("a") === '0') {
            document.getElementById("compl").innerHTML = "NONE";
        }else{
            document.getElementById("compl").innerHTML = "";
        }
    }

    useEffect(() => {
        if(window.localStorage.getItem("userid")===null || window.localStorage.getItem("userid")===undefined){
            navigate("/login");
            toast.error("Please login first!");
            return;
        }
        getTasks(window.localStorage.getItem("userid"))
            .then(res => {
                // console.log(res.data);
                setTasks(res.data);
                setTimeout(none(), 15000);
            })
            .catch(err => console.log(err));
    }, [navigate]);
    priority();

    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Tasks</h1>
                    <div className="flex justify-center mt-3">
                        <a href="/tasks/add" className="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Add Tasks
                        </a>
                    </div>
                    <div className="mt-6 space-y-8 xl:mt-6">
                        <p className="text-xl text-center text-gray-500 dark:text-gray-300">
                            Scheduled Tasks
                        </p>
                        {tasks.map((task) => (
                            <div>
                                <div id="sched" className="text-center"></div>
                                {!task.completed
                                    ?
                                    <div className={`flex justify-between max-w-2xl mx-auto px-8 py-4 border border-${task.color}-500 rounded-xl dark:border-${task.color}-700`}>
                                        <div className="flex flex-col items-left space-y-2">
                                            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{task.daydiff}</span>
                                            <a href={`/task/${task._id}`} className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">{task.title}</a>
                                            <p className="mt-2 text-gray-600 dark:text-gray-300">{task.description}</p>
                                            <p className={`text-${task.color}-600 dark:text-${task.color}-400`}>{task.hml} Priority</p>
                                        </div>
                                        <div className="flex flex-col space-y-5">
                                            <button onClick={() => toggle(task._id)} className="text-center py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Done</button>
                                            <div className="space-y-0">
                                                <p className="text-gray-700 text-center dark:text-gray-200">{task.fDate}</p>
                                                <p className="text-gray-700 text-center dark:text-gray-200">-</p>
                                                <p className="text-gray-700 text-center dark:text-gray-200">{task.tDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="border-red-500 border-green-500 border-blue-500 text-blue-600 text-green-600 text-red-600 hidden"></div>
                                }
                            </div>
                        ))}
                        <p className="text-xl text-center text-gray-500 dark:text-gray-300">
                            Completed Tasks
                        </p>
                        {tasks.map((task) => (
                            <div>
                                <div id="compl" className="text-center"></div>
                                {task.completed
                                    ?
                                    <div className={`flex justify-between max-w-2xl mx-auto px-8 py-4 bg-gray-100 border border-${task.color}-500 rounded-xl dark:border-${task.color}-700 dark:bg-transparent`}>
                                        <div className="flex flex-col items-left space-y-2">
                                            <span className="text-sm font-light text-gray-400 dark:text-gray-400">{task.daydiff}</span>
                                            <p className="text-2xl font-bold text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">{task.title}</p>
                                            <p className="mt-2 text-gray-400 dark:text-gray-300">{task.title}</p>
                                            <p className={`text-${task.color}-400 dark:text-${task.color}-400`}>{task.hml} Priority</p>
                                        </div>
                                        <div className="flex flex-col space-y-5">
                                            <button onClick={() => toggle(task._id)} className="text-center py-1 px-4 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-400 rounded cursor-pointer hover:bg-gray-500">Completed</button>
                                            <div className="space-y-0">
                                                <p className="text-gray-400 text-center cursor-pointer dark:text-gray-200">{task.fDate}</p>
                                                <p className="text-gray-400 text-center cursor-pointer dark:text-gray-200">-</p>
                                                <p className="text-gray-400 text-center cursor-pointer dark:text-gray-200">{task.tDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="border-red-500 border-green-500 border-blue-500 text-blue-400 text-green-400 text-red-400 dark:border-green-700 dark:border-red-700 dark:border-blue-700 hidden"></div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tasks;