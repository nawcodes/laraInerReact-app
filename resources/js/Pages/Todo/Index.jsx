import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import InputSection from "../../Component/InputSection";
import ListTodo from "../../Component/ListTodo";
import MoreInput from "../../Component/MoreInput";

const Index = () => {
    const [search, setSearch] = useState("");

    const [openList, setOpenList] = useState(true);

    const [payload, setPayload] = useState({
        title: "",
        description: "",
        duedate: "",
        priority: "",
    });

    const [isMoreInput, setIsMoreInput] = useState(false);

    const handleTitleClick = (e) => {
        openMoreInput();
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const openMoreInput = () => {
        if (isMoreInput == true) {
            setIsMoreInput(false);
        } else {
            setIsMoreInput(true);
        }
    };

    function handleValues(e) {
        const key = e.target.id;

        setPayload((value) => ({
            ...value,
            [key]: e.target.value,
        }));
    }

    function handleListAll(e) {
        setOpenList(true);
    }

    const todoLists = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <>
            <div className="w-full border-b-2 border-b-black shadow ">
                <input
                    type="text"
                    placeholder="Search Your do"
                    className="w-full border-none bg-inherit focus:ring-0 
                    focus:outline-none"
                    defaultValue=""
                    id="search"
                    onChange={(e) => handleSearch(e)}
                />
            </div>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full flex justify-center items-center">
                    <div
                        className={`flex flex-col justify-center  items-center border-2 rounded-lg  ${
                            isMoreInput ? "shadow border-slate-400" : ""
                        } lg:w-1/3 w-5/6 p-6`}
                    >
                        {openList ? (
                            todoLists.map((todo, index) => (
                                <div
                                    className="bg-white lg:2/3 w-full rounded my-1 p-2 shadow-lg cursor-pointer"
                                    onClick={(e) => handleTitleClick(e)}
                                >
                                    <input
                                        type="text"
                                        placeholder="Type Here"
                                        className="lg:w-2/3 w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                                        defaultValue={index}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={handleValues}
                                    />
                                </div>
                            ))
                        ) : (
                            <div
                                className="bg-white lg:2/3 w-full rounded my-1 p-2 shadow-lg cursor-pointer"
                                onClick={(e) => handleTitleClick(e)}
                            >
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    className="lg:w-2/3 w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                                    defaultValue=""
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={handleValues}
                                />
                            </div>
                        )}

                        {isMoreInput && (
                            <MoreInput
                                onKeyup={(e) => handleValues(e)}
                            ></MoreInput>
                        )}

                        {isMoreInput && (
                            <MoreInput
                                onKeyup={(e) => handleValues(e)}
                            ></MoreInput>
                        )}

                        <div className="flex w-full py-2 text-slate-500">
                            {openList ? (
                                <p className="mx-1 hover:underline cursor-pointer">
                                    Hide
                                </p>
                            ) : (
                                <p className="mx-1 hover:underline cursor-pointer">
                                    All (28)
                                </p>
                            )}
                           
                        </div>
                        <div className="">
                            {/* <nav aria-label="Page navigation example">
                                <ul class="inline-flex -space-x-px text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            Previous
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            aria-current="page"
                                            class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                        >
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            4
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            5
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
