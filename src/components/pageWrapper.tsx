const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex px-10">
            {children}
        </div>
    );
}

export default PageWrapper;