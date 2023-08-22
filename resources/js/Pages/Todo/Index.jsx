import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import InputSection from "../../Component/InputSection";
import ListTodo from "../../Component/ListTodo";
import MoreInput from "../../Component/MoreInput";
import axios from "axios";

const Index = ({ todos }) => {
    const [search, setSearch] = useState("");

    const [openList, setOpenList] = useState(false);

    const [payload, setPayload] = useState({});

    const [isMoreInput, setIsMoreInput] = useState(false);

    let filteredTodos = todos.data.filter((item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    const handleTitleClick = (e, id = null) => {
        if (id) {
            setOpenList(false);
            let data = todos.data.find((item) => item.id === id);
            // delete properties
            const { deleted_at, created_at, updated_at, ...filteredObj } = data;

            setPayload((value) => ({
                ...value,
                ...filteredObj,
            }));
        }
        openMoreInput();
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setOpenList(true);
    };

    const openMoreInput = () => {
        if (isMoreInput == true) {
            setIsMoreInput(false);
        } else {
            setIsMoreInput(true);
        }
    };

    function handleValues(e) {
        console.log(e);
        const key = e.target.id;

        setPayload((value) => ({
            ...value,
            [key]: e.target.value,
        }));
    }

    function handleListAll(e) {
        setIsMoreInput(false);
        setPayload({});
        setOpenList(true);
    }

    function handleCloseList(e) {
        setOpenList(false);
    }

    function handleAddButton(e) {
        setOpenList(false);
        console.log(payload);
        if (payload.title == "") {
            window.alert("Input title please ...");
            return false;
        }
        axios
            .post("/todo", payload)
            .then((response) => {
                setPayload({
                    title: "",
                    description: "",
                    duedate: "",
                    priority: "",
                });
                setIsMoreInput(false);
                window.alert("Todo Inserted");
                setInterval(() => {
                    window.location.reload();
                }, 500);
            })
            .catch((error) => {
                window.alert(error.message);
                setPayload({});
            });
    }

    function handleEditButton(e) {
        if (!payload.id) {
            window.alert("Error");
            return false;
        }

        axios
            .post(`/todo/${payload.id}`, payload)
            .then((response) => {
                setPayload({
                    title: "",
                    description: "",
                    duedate: "",
                    priority: "",
                });
                setIsMoreInput(false);
                window.alert("Todo Updated");
                setInterval(() => {
                    window.location.reload();
                }, 500);
            })
            .catch((error) => {
                window.alert(error.message);
                setPayload({});
            });
    }

    function handleRemoveButton(e) {
        if (!payload.id) {
            window.alert("Error");
            return false;
        }

        if (window.confirm("Are you sure?")) {
            axios
                .post(`/todo/${payload.id}/remove`, payload)
                .then((response) => {
                    setPayload({
                        title: "",
                        description: "",
                        duedate: "",
                        priority: "",
                    });
                    setIsMoreInput(false);
                    window.alert("Todo Deleted");
                    setInterval(() => {
                        window.location.reload();
                    }, 500);
                })
                .catch((error) => {
                    window.alert(error.message);
                    setPayload({});
                });
        }
    }

    function getClassName(active) {
        if (active) {
            return "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
        } else {
            return "flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
        }
    }

    return (
        <>
            <div className="w-full flex justify-center border-b-2 border-b-slate-300 shadow">
                <input
                    type="text"
                    placeholder="Search Your do"
                    className="border-none bg-inherit focus:ring-0 
                    focus:outline-none"
                    defaultValue=""
                    id="search"
                    onChange={(e) => handleSearch(e)}
                />
            </div>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full flex justify-center flex-col items-center">
                    <div className="flex justify-end lg:w-1/3 w-5/6 px-5 -my-6 z-10 ">
                        {!openList && (
                            <button
                                type="button"
                                className="text-white hover:bg-blue-800 focus:ring-4 shadow-2xl drop-shadow-xl focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-white-800"
                                onClick={() => handleAddButton()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </button>
                        )}
                        {payload.id && (
                            <>
                                <button
                                    type="button"
                                    className="text-white hover:bg-yellow-800 focus:ring-4 shadow-2xl drop-shadow-xl focus:ring-yellow-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-white-800"
                                    onClick={() => handleEditButton()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 p-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="text-white hover:bg-red-800 focus:ring-4 shadow-2xl drop-shadow-xl focus:ring-red-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-white-800"
                                    onClick={() => handleRemoveButton()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 p-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    <div
                        className={`flex flex-col justify-center  items-center  rounded-lg  ${
                            isMoreInput
                                ? "border-2 shadow border-slate-400"
                                : ""
                        } lg:w-1/3 w-5/6 p-6`}
                    >
                        {openList ? (
                            filteredTodos ? (
                                filteredTodos.map((value, index) => (
                                    <div
                                        className={`bg-white lg:2/3 w-full rounded my-1 p-2 shadow-lg cursor-pointer ${
                                            value.priority === "low"
                                                ? "border-l-4 border-blue-600"
                                                : value.priority === "high"
                                                ? "border-l-4 border-red-600"
                                                : ""
                                        } `}
                                        key={index}
                                        onClick={(e) =>
                                            handleTitleClick(e, value.id)
                                        }
                                    >
                                        <input
                                            id="title"
                                            type="text"
                                            placeholder="Type Here"
                                            className="lg:w-2/3 w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                                            defaultValue={value.title}
                                            value={value.title}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => handleValues(e)}
                                        />
                                    </div>
                                ))
                            ) : (
                                <></>
                            )
                        ) : (
                            <div
                                className="bg-white lg:2/3 w-full rounded my-1 p-2 shadow-lg cursor-pointer"
                                onClick={(e) => handleTitleClick(e)}
                            >
                                <input
                                    type="text"
                                    id="title"
                                    placeholder="Type Here"
                                    className="lg:w-2/3 w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                                    defaultValue={payload.title}
                                    value={payload.title}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => handleValues(e)}
                                />
                            </div>
                        )}

                        {isMoreInput && !openList && (
                            <MoreInput
                                onKeyup={(e) => handleValues(e)}
                                value={payload}
                            ></MoreInput>
                        )}

                        <div className="flex w-full py-2 text-slate-500">
                            {openList ? (
                                <p
                                    className="mx-1 hover:underline cursor-pointer"
                                    onClick={() => handleCloseList()}
                                >
                                    Hide
                                </p>
                            ) : (
                                <p
                                    className="mx-1 hover:underline cursor-pointer"
                                    onClick={() => handleListAll()}
                                >
                                    All ({todos.data.length})
                                </p>
                            )}
                        </div>

                        <div className="">
                            <nav aria-label="Page navigation example">
                                <ul class="inline-flex -space-x-px text-sm">
                                    {todos.links.map((link, index) =>
                                        link.url === null ? (
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                key={index}
                                            >
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label,
                                                    }}
                                                />
                                            </a>
                                        ) : (
                                            <Link
                                                className={getClassName(
                                                    link.active
                                                )}
                                                href={link.url}
                                                key={index}
                                            >
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label,
                                                    }}
                                                />
                                            </Link>
                                        )
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
