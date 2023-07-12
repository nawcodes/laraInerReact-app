import React from "react";

import { Link } from "@inertiajs/inertia-react";

function Layout ({children}) {
    return (
        <div className="">
            {children}
        </div>
    ) 
}

export default Layout;