'use client';

import PageWrapper from '@/components/pageWrapper';
import Stepper from '@/components/stepper';
import TransferAccountForm from '@/components/transferAccountForm';
import TransferAditionalDataForm from '@/components/transferAditionalDataForm';
import TransferAmountForm from '@/components/transferAmountForm';
import { TransferSteps } from '@/constant/transfer';
import { useAppSelector } from '@/store/hooks';

export default function Transfer() {
  const transferStep = useAppSelector((state) => state.transfer.step);
  return (
    <PageWrapper className="p-10 flex-col">
      <h2 className="headline2 font-bold">Transferir </h2>
      <div className="flex flex-col border border-[#DFE1DF] rounded-lg py-4 gap-6 mt-4">
        <Stepper
          totalSteps={4}
          currentStep={transferStep}
          stepsLabels={[
            'Cuenta origen',
            'Cuenta destino',
            'Monto a transferir',
            'Datos adicionales',
          ]}
        />
        {(() => {
          switch (transferStep) {
            case TransferSteps.Step1:
            case TransferSteps.Step2:
              return <TransferAccountForm />;
            case TransferSteps.Step3:
              return <TransferAmountForm />;
            case TransferSteps.Step4:
              return <TransferAditionalDataForm />;
            default:
              return null;
          }
        })()}
      </div>
    </PageWrapper>
  );
}
