'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useForm } from 'react-hook-form';
import { transferSlice } from '@/store/transfer';
import FormGroup from './formGroup';
import { TransferSteps } from '@/constant/transfer';
import Input from './Input';
import useAddTransaction from '@/hooks/addTransaction';

const TransferAditionalDataForm = () => {
  const dispatch = useAppDispatch();
  const addTrx = useAddTransaction();
  const transfer = useAppSelector((state) => state.transfer);

  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    defaultValues: {
      debitConcept: '',
      creditConcept: '',
      reference: '',
      sendConfirmationTo: '',
    },
  });

  const onSubmit = async (data: {
    debitConcept: string;
    creditConcept: string;
    sendConfirmationTo: string;
    reference: string;
  }) => {
    await addTrx.execute({
      amount: transfer.amount,
      reference: data.reference,
      debitConcept: data.debitConcept,
      creditConcept: data.creditConcept,
      origin: Number(transfer.accountFrom),
      destination: Number(transfer.accountTo),
      sendConfirmationTo: data.sendConfirmationTo,
    });
  };

  return (
    <div className="flex flex-col py-6 gap-7">
      <FormGroup>
        <Input
          {...register('debitConcept', { required: 'Este campo es requerido' })}
          label="Concepto de débito"
          className="w-full h-12"
          error={formState.errors.debitConcept?.message}
        />
        <Input
          {...register('creditConcept', { required: 'Este campo es requerido' })}
          className="w-full h-12"
          placeholder="Concepto de crédito"
          error={formState.errors.creditConcept?.message}
        />
      </FormGroup>
      <FormGroup>
        <Input
          {...register('reference', {
            required: 'Este campo es requerido',
            min: { value: 8, message: 'Este campo debe tener al menos 8 caracteres' },
          })}
          className="w-full h-12"
          placeholder="Referencia"
          error={formState.errors.reference?.message}
        />
        <Input
          {...register('sendConfirmationTo', {
            min: { value: 10, message: 'Este campo debe tener al menos 10 caracteres' },
          })}
          className="w-full h-12"
          placeholder="Enviar confirmación a:"
          error={formState.errors.sendConfirmationTo?.message}
        />
      </FormGroup>
      <div className="flex items-center justify-center gap-5 grow">
        <button
          className="h-12 border-[#00593B] border px-4 rounded-sm text-[#00593B] caption1 font-medium"
          onClick={() => {
            dispatch(transferSlice.actions.setStep(TransferSteps.Step3));
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

export default TransferAditionalDataForm;
