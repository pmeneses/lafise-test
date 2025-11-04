"use client";

import useGetUser from "@/hooks/getUser";
import React from "react";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const getUser = useGetUser();

    React.useEffect(() => { getUser.execute() }, []);

    return (
        <>
            {children}
        </>
    );
}

export default AppWrapper;