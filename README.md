## Video 1

## Custom Link: 
<!-- create a component -->

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? 'red' : 'black', textDecoration: match ? "underline" : "none" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    export default CustomLink;

## Video 2

