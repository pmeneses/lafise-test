import { variants } from '@/components/icon';

type MenuOptionsType = {
  label: string;
  icon: keyof typeof variants;
  route?: string;
};

const menuOptions: MenuOptionsType[] = [];

menuOptions.push({
  label: 'Tablero',
  icon: 'dashboardIcon',
  route: '/',
});

menuOptions.push({
  label: 'Transferir',
  icon: 'transferIcon',
  route: '/transfer',
});

menuOptions.push({
  label: 'Pagar',
  icon: 'payIcon',
});

menuOptions.push({
  label: 'Mis transacciones',
  icon: 'myTrxIcon',
  route: '/transactions',
});

menuOptions.push({
  label: 'Gestionar',
  icon: 'handleIcon',
});

menuOptions.push({
  label: 'Cheques',
  icon: 'checkIcon',
});

menuOptions.push({
  label: 'Paganet',
  icon: 'pagaNetIcon',
});

menuOptions.push({
  label: 'Administrar',
  icon: 'adminIcon',
});

menuOptions.push({
  label: 'Ahorro automático',
  icon: 'savingIcon',
});

menuOptions.push({
  label: 'Configuración',
  icon: 'settingIcon',
});

export default menuOptions;
