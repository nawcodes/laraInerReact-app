import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import InputSection from "../../Component/InputSection";
import ListTodo from "../../Component/ListTodo";
import MoreInput from "../../Component/MoreInput";

const Index = () => {

    const handleTitleClick = (e) => {
    }

    return (
        <>
            <div className="w-full border-b-2 border-b-black shadow -mb-7">
                <input
                    type="text"
                    placeholder="Search Your do"
                    className="w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                />
            </div>
            <div className="w-full flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center items-center border-2 rounded-lg shadow border-slate-400 lg:w-1/3 w-5/6 lg:h-1/2 h-5/6 p-6" >
                    <div className="bg-white w-full rounded p-2 shadow-lg cursor-pointer" onClick={(e) => handleTitleClick(e)}>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className="lg:w-2/3 w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                        />
                    </div>
                    <MoreInput></MoreInput>
                    <div className="flex w-full py-2 text-slate-500">
                        <p className="mx-1 hover:underline cursor-pointer">
                            All (28)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
