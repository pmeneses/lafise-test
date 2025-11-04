'use client';

import { transactionTypes } from '@/data/transfer';
import Select from './select';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useForm } from 'react-hook-form';
import { transferSlice } from '@/store/transfer';
import { useRouter } from 'next/navigation';
import FormGroup from './formGroup';
import { TransferSteps } from '@/constant/transfer';
import { useEffect } from 'react';
import AccountSelect from './accountSelect';
import { Currency, formatCurrency } from '@/util/currency';

const TransferAccountForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) =>
    state.user.products.filter((p) => p.type === 'Account'),
  );
  const transfer = useAppSelector((state) => state.transfer);

  const { register, handleSubmit, formState, watch, setValue, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      accountId: 0,
      transactionType: '',
    },
  });

  register('transactionType', { required: 'Este campo es requerido' });
  register('accountId', {
    required: 'Este campo es requerido',
    min: { value: 1, message: 'Seleccione una cuenta válida' },
  });

  const onSubmit = (data: { accountId: number; transactionType: string }) => {
    if (transfer.step === TransferSteps.Step1) {
      dispatch(
        transferSlice.actions.addAccountFrom({
          step: TransferSteps.Step2,
          accountFrom: data.accountId.toString(),
          accountFromType: data.transactionType,
        }),
      );
    }

    if (transfer.step === TransferSteps.Step2) {
      dispatch(
        transferSlice.actions.addAccountTo({
          step: TransferSteps.Step3,
          accountTo: data.accountId.toString(),
          accountToType: data.transactionType,
        }),
      );
    }

    reset();
  };

  useEffect(() => {
    if (transfer.step === TransferSteps.Step1) {
      reset({
        accountId: transfer.accountFrom ? Number(transfer.accountFrom) : 0,
        transactionType: transfer.accountFromType || '',
      });
    }

    if (transfer.step === TransferSteps.Step2) {
      reset({
        accountId: transfer.accountTo ? Number(transfer.accountTo) : 0,
        transactionType: transfer.accountToType || '',
      });
    }
  }, [
    transfer.step,
    reset,
    transfer.accountFrom,
    transfer.accountFromType,
    transfer.accountTo,
    transfer.accountToType,
  ]);

  return (
    <div className="flex flex-col py-6 gap-7">
      <FormGroup className="bg-[#F9FAF9]">
        <Select
          options={transactionTypes}
          label="Tipo de transacción"
          className="w-full data-[size=default]:h-12"
          value={watch('transactionType')}
          error={formState.errors.transactionType?.message?.toString()}
          onSelect={(value) => {
            setValue('transactionType', value);
          }}
        />
        <AccountSelect
          options={accounts.map((c) => ({
            value: c.id,
            label: `${c.currency} ${c.alias}`,
            accountNumber: `${c.id}`,
            balance: formatCurrency(c.balance, c.currency as Currency),
          }))}
          label="Cuenta"
          className="w-full data-[size=default]:h-12"
          value={watch('accountId').toString()}
          error={formState.errors.accountId?.message?.toString()}
          onSelect={(value) => {
            setValue('accountId', Number(value));
          }}
        />
      </FormGroup>
      <div className="flex items-center justify-center gap-5 grow">
        <button
          className="h-12 border-[#00593B] border px-4 rounded-sm text-[#00593B] caption1 font-medium"
          onClick={() => {
            if (transfer.step === TransferSteps.Step1) {
              router.push('/');
            }

            if (transfer.step === TransferSteps.Step2) {
              dispatch(transferSlice.actions.setStep(TransferSteps.Step1));
            }
          }}
        >
          Atrás
        </button>
        <button
          className="h-12 bg-[#00593B] px-4 rounded-sm text-[#FFFFFF] caption1 font-medium"
          onClick={handleSubmit(onSubmit)}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default TransferAccountForm;
