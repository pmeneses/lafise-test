'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useForm } from 'react-hook-form';
import { transferSlice } from '@/store/transfer';
import FormGroup from './formGroup';
import { TransferSteps } from '@/constant/transfer';
import CurrencyInput from 'react-currency-input-field';
import { cn } from '@/util/clsx';
import { useEffect } from 'react';
import FormActions from './formActions';

const TransferAmountForm = () => {
  const dispatch = useAppDispatch();
  const fromAccount = useAppSelector((state) => state.transfer.accountFrom);
  const accounts = useAppSelector((state) =>
    state.user.products.filter((p) => p.type === 'Account'),
  );
  const transferState = useAppSelector((state) => state.transfer);

  const fromAccountData = accounts.find((a) => a.id === fromAccount);

  const { register, handleSubmit, formState, watch, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: 100,
    },
  });

  register('amount', { min: { value: 1, message: 'Ingrese un monto válido' } });

  const onSubmit = (data: { amount: number }) => {
    dispatch(
      transferSlice.actions.addAmount({
        step: TransferSteps.Step4,
        amount: data.amount,
      }),
    );
  };

  useEffect(() => {
    if (transferState.amount) {
      setValue('amount', transferState.amount);
    }
  }, [transferState.amount, setValue]);

  return (
    <div className="flex flex-col py-6 gap-7 flex-1">
      <FormGroup className="w-[50%] self-center flex-1">
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex items-center justify-center gap-1">
            {fromAccountData && <p className="currency font-black">{fromAccountData.currency}</p>}
            <CurrencyInput
              className={cn(
                'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                'focus-visible:border-[#3B8668]',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                'headline2 font-semibold h-12 text-center',
              )}
              allowNegativeValue={false}
              placeholder="Ingrese el monto a transferir"
              decimalsLimit={2}
              value={watch('amount')}
              onValueChange={(value) => {
                setValue('amount', value ? parseFloat(value) : 0);
              }}
            />
          </div>
          {formState.errors.amount && (
            <p className="caption2 text-destructive text-center">
              {formState.errors.amount.message?.toString()}
            </p>
          )}
        </div>
      </FormGroup>
      <FormActions
        backLabel="Atrás"
        className="flex-2"
        continueLabel="Continuar"
        onBack={() => {
          dispatch(transferSlice.actions.setStep(TransferSteps.Step2));
        }}
        onContinue={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default TransferAmountForm;
