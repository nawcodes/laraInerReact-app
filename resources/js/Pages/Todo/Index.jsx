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
                <div className="flex w-1/3 py-2 text-slate-500">
                    <p className="mx-1 hover:underline cursor-pointer">All (28)</p>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
