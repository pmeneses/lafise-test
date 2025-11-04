"use client";

import customFetch from "@/util/fetch";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userSlice } from "@/store/accountSlice";

type Account = {
        type: "Account";
        id: string;
        alias: string;
        balance: number;
        currency: string;
    };

    type ResponseType = {
        products: Account[];
    };

const useGetUser = () => {
    const dispatch = useAppDispatch();
    const accounts = useAppSelector((state) => state.user.products);

    const execute = async () => {
        if(accounts.length > 0) {
            return;
        }

        const result = await customFetch<ResponseType>("http://localhost:3000/api/user").catch((err) => {
            return null;
        });
        
        if (result) {
            dispatch(userSlice.actions.addProducts(result.products));
        }
    }

    return { execute };
}

export default useGetUser;