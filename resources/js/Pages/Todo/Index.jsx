import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import InputSection from "../../Component/InputSection";
import ListTodo from "../../Component/ListTodo";

const Index = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-white w-1/3 rounded p-2 shadow-lg cursor-pointer">
                    <input
                        type="text"
                        placeholder="Type Here"
                        className="w-1/2 border-none bg-inherit focus:ring-0 focus:outline-none"
                    />
                </div>
                {/* Detail Input */}
                <div className="bg-white w-1/3 self-beetwe mt-2 rounded p-2 shadow-lg cursor-pointer">
                    <textarea
                        type="text"
                        placeholder="Type Here"
                        className="w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                    ></textarea>
                </div>
                <div className="flex w-1/3 mt-2">
                    <div className="w-full ">
                        <label htmlFor="" className="text-slate-500">
                            Due date
                        </label>
                        <div className="bg-white w-full rounded p-2 shadow-lg cursor-pointer">
                            <input
                                type="date"
                                placeholder="Type Here"
                                className="w-full border-none bg-inherit focus:ring-0 focus:outline-none  text-slate-500"
                            />
                        </div>
                    </div>
                    <span className="mx-1"></span>
                    <div className="w-full">
                        <label for="countries" className="text-slate-500">
                            Select an option
                        </label>
                        <div className="bg-white w-full rounded p-4 shadow-lg cursor-pointer">
                            <select
                                id="countries"
                                className="w-full border-none bg-inherit focus:ring-0 focus:outline-none text-slate-500"
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* End Detail Input */}

                <div className="flex w-1/3 py-2 text-slate-500">
                    <p className="mx-1 hover:underline cursor-pointer">
                        All (28)
                    </p>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
