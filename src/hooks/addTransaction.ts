"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { transactionSlice } from "@/store/transaction";
import customFetch from "@/util/fetch";
import { useRouter } from "next/navigation";

type Amount = {
    currency: string;
    value: number;
};

type trxResponse = {
    transaction_number: string;
    description: string;
    bank_description: string;
    transaction_type: 'Credit' | 'Debit' | string;
    amount: Amount;
    origin: string;
    destination: string;
    transaction_date: string;
};

const useAddTransaction = () => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const accounts = useAppSelector((state) => state.user.products.filter((p) => p.type === "Account"));

    const execute = async (params: {
        amount: number;
        origin: number;
        destination: number;
        reference: string;
        debitConcept: string;
        sendConfirmationTo: string;
        creditConcept: string;
    }) => {
        const originAccount = accounts.find((a) => Number(a.id) === params.origin);

        if (!originAccount) {
            alert("Cuenta de origen no encontrada");
            return;
        }

        if (params.origin === params.destination) {
            alert("La cuenta de origen y destino no pueden ser la misma");
            return;
        }

        if (originAccount.balance < params.amount) {
            alert("Fondos insuficientes en la cuenta de origen");
            return;
        }

        const result = await customFetch<trxResponse>("http://localhost:3000/api/transaction", {
            method: "POST",
        }, {
            ...params,
            currency: originAccount.currency,
        });

        if (result) {
            dispatch(transactionSlice.actions.add({
                date: result.transaction_date,
                description: params.creditConcept,
                amount: result.amount.value,
                balance: originAccount.balance - result.amount.value,
            }));

            alert("Transferencia realizada con éxito");

            route.push("/");
        }
    }

    return { execute };

}

export default useAddTransaction;