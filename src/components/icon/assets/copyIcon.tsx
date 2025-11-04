const copyIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
        stroke="#3B8668"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
      <path
        d="M4.16669 12.5H3.33335C2.89133 12.5 2.4674 12.3244 2.15484 12.0118C1.84228 11.6993 1.66669 11.2754 1.66669 10.8333V3.33332C1.66669 2.8913 1.84228 2.46737 2.15484 2.15481C2.4674 1.84225 2.89133 1.66666 3.33335 1.66666H10.8334C11.2754 1.66666 11.6993 1.84225 12.0119 2.15481C12.3244 2.46737 12.5 2.8913 12.5 3.33332V4.16666"
        stroke="#3B8668"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
    </svg>
  );
};

export default copyIcon;
