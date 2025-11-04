"use client";

import useGetUser from "@/hooks/getUser";
import { useAppSelector } from "@/store/hooks";
import { Currency, formatCurrency } from "@/util/currency";
import React from "react";
import Icon from "./icon";

const AccountSection = () => {
    const getUser = useGetUser();
    const accounts = useAppSelector((state) => state.user.products.filter((product) => product.type === "Account"));

    React.useEffect(() => { getUser.execute() }, []);

    return (
        <div className="flex flex-col">
            <h2 className="headline2 font-semibold text-label">Cuentas</h2>
            <div className="flex gap-6">
                {accounts.map((account) => (
                    <div key={account.id} className="flex flex-col bg-[#FFFFFF] shadow-[0px_2px_15px_0px_#6868681C] rounded-lg p-4 relative gap-10 min-w-[365px]">
                        <div className="flex flex-col gap-2">
                            <h4 className="headline2 font-semibold text-label">{`${account.currency} ${account.alias}`}</h4>
                            <div className="flex gap-2 items-center">
                                <p className="py-2 px-3 rounded-sm bg-[#EDF5F2] self-start caption1 font-medium text-[#3B8668]">{account.id}</p>
                                <button onClick={() => navigator.clipboard.writeText(account.id)}>
                                    <Icon variant="copyIcon" style="cursor-pointer" />
                                </button>
                            </div>
                        </div>
                        <p className="headline2 font-semibold">{formatCurrency(account.balance, account.currency as any)}</p>
                        {account.currency === Currency.NIO && (
                           <Icon variant="nioFlagIcon" style="absolute top-4 right-4" />
                        )}
                        {account.currency === Currency.USD && (
                           <Icon variant="usaFlagIcon" style="absolute top-4 right-4" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountSection;