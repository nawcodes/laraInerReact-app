import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import InputSection from "../../Component/InputSection";
import ListTodo from "../../Component/ListTodo";
import MoreInput from "../../Component/MoreInput";

const Index = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-white lg:w-1/3 w-3/4 rounded p-2 shadow-lg cursor-pointer">
                    <input
                        type="text"
                        placeholder="Type Here"
                        className="lg:w-1/2 w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                    />
                </div>
                <MoreInput></MoreInput>
                <div className="flex lg:w-1/3 w-3/4 py-2 text-slate-500">
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
