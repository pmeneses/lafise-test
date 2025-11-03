const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen max-w-[1200px] bg-background">
            {children}
        </div>
    );
}

export default PageWrapper;