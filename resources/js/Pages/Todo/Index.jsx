import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";

const Index = () => {
    return (
        <div className="grid grid-row-1">
            <div className="grid grid-cols-3 gap-1">
                <div className="col-span-2 ">
                    {/* input section */}
                    <div className="w-full flex flex-row justify-center p-4">
                        <div className="self-center w-full">
                            <input
                                type="text"
                                className="w-full p-2 rounded-lg"
                                placeholder="You want do something? write me please :)"
                            />
                        </div>
                        <div className="self-center flex flex-row px-2">
                            <button className="p-2 bg-blue-700 rounded-lg text-white">
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
                                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </button>
                            <span class="px-1"></span>
                            <button className="p-2 bg-blue-700 rounded-lg text-white">
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
                        </div>
                    </div>
                    <div className="w-full h-screen px-4 ">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                                <label htmlFor="">Description</label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className="w-full rounded-lg p-2"
                                ></textarea>
                            </div>
                            <div className="">
                                <div>
                                    <label htmlFor="">Due Date</label>
                                    <div class="flex">
                                        <button className="bg-slate-200 border-r-2 border-slate-600 p-2 rounded-l-lg">
                                            Today
                                        </button>
                                        <button className="bg-slate-200  200 border-r- border-slate-600 p-2">
                                            Today
                                        </button>
                                        <input
                                            type="date"
                                            className="p-2 rounded-r-lg"
                                        />
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <label htmlFor="">Priority</label>
                                    <select
                                        name=""
                                        id=""
                                        className="w-full rounded p-1"
                                    >
                                        <option value="high">High</option>
                                        <option value="low">Low</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* List Section */}
                <div className="bg-slate-300 flex flex-col ">
                    <div class="py-2 pl-2 m-2 border-l-8 border-red-500 bg-blue-700 ">
                        <h6 className="text-white font-bold">Title</h6>
                        <div class="px-1 mt-3">
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="10"
                                className="w-[98%] p-2"
                            ></textarea>
                            <div className="my-2">
                                <label
                                    htmlFor=""
                                    className="text-white font-bold"
                                >
                                    Due Date
                                </label>
                                <div class="flex w-[98%]">
                                    <button className="bg-slate-200 border-r-2 border-slate-600 p-2 rounded-l-lg">
                                        Today
                                    </button>
                                    <button className="bg-slate-200  200 border-r- border-slate-600 p-2">
                                        Today
                                    </button>
                                    <input
                                        type="date"
                                        className="p-2 rounded-r-lg w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-2 pl-2 m-2 border-l-8 border-red-500 bg-blue-700 ">
                        <h6 className="text-white font-bold">Title</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
