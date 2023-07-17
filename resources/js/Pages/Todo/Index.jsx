import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import InputSection from "../../Component/InputSection";
import ListTodo from "../../Component/ListTodo";

const Index = () => {
    return (
        <div className="grid grid-row-1 h-screen">
            <div className="grid grid-cols-3 gap-1">
                <InputSection></InputSection>
                <ListTodo></ListTodo>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout children={page}></Layout>;

export default Index;
