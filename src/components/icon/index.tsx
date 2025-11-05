/* eslint-disable no-undef */
export const variants = {
  dashboardIcon: require('./assets/dashboardIcon'),
  payIcon: require('./assets/payIcon'),
  pagaNetIcon: require('./assets/pagaNetIcon'),
  myTrxIcon: require('./assets/myTrxIcon'),
  handleIcon: require('./assets/handleIcon'),
  checkIcon: require('./assets/checkIcon'),
  adminIcon: require('./assets/adminIcon'),
  transferIcon: require('./assets/transferIcon'),
  settingIcon: require('./assets/settingIcon'),
  savingIcon: require('./assets/savingIcon'),
  chevronRightIcon: require('./assets/chevronRight'),
  companyLogoIcon: require('./assets/companyLogo'),
  changeRateIcon: require('./assets/changeRate'),
  copyIcon: require('./assets/copyIcon'),
  usaFlagIcon: require('./assets/usaFlagIcon'),
  nioFlagIcon: require('./assets/nioFlagIcon'),
  stepCheck: require('./assets/stepCheck'),
  stepUncheck: require('./assets/stepUncheck'),
  menuIcon: require('./assets/menuIcon'),
  notifyIcon: require('./assets/notifyIcon'),
  searchIcon: require('./assets/searchIcon'),
  companyLogoWhiteIcon: require('./assets/companyLogoWhite'),
};

export type IconPropsTypes = {
  variant: keyof typeof variants;
  size?: number;
  width?: number;
  height?: number;
  style?: string;
  svgClassName?: string;
};

const Icon: React.FC<IconPropsTypes> = ({ variant, size, style, svgClassName }) => {
  const Component: React.FC<React.SVGProps<SVGSVGElement>> = variants[variant]?.default;

  if (!Component) return null;

  return (
    <div className={['flex flex-col items-center justify-center', style].join(' ')}>
      <div
        className="flex items-center justify-center"
        style={size ? { width: size, height: size } : {}}
      >
        <Component width="100%" height="100%" className={svgClassName} />
      </div>
    </div>
  );
};

export default Icon;
