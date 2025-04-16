import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const Layout = ({ children }) => {
    return (
        <div className="px-5">
            <Suspense
                fallback={
                    <div className="mt-4">
                        <BarLoader
                            width={"100%"}
                            color={"#a3a3a3"} // slightly lighter gray works in both themes
                        />
                    </div>
                }
            >
                {children}
            </Suspense>
        </div>

    )
}

export default Layout