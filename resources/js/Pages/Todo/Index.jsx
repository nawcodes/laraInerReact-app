import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";

const Index = () => {
    return (
        <div>
            ini index todo
        </div>
    )
}


Index.layout = (page) => <Layout children={page}></Layout>

export default Index;