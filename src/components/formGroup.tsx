const FormGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex flex-col py-3 px-8 ${className}`}>
      <div className="flex items-center gap-10 w-[80%] self-center">{children}</div>
    </div>
  );
};

export default FormGroup;
