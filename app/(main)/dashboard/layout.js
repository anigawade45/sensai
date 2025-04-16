import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const Layout = ({children}) => {
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-5">
               <h1 className="text-6xl font-bold md:text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-gray-200 to-gray-600">Industry insights</h1>
            </div>
            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray"/>}>{children}</Suspense>
        </div>
    )
}

export default Layout