## Video 1

## Custom Link (Active link): 
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


## Video 3

## click handler add ------------
      
        const handleAddToCart = (selectedItem) => {

<!-- jodi item cart a thake  (for duplicate reduce ) -->

            const exists = cart.find(tShirts => tShirts._id === selectedItem._id);

            if (!exists) {

<!-- get old cart data & add new data -->
                const newCart = [...cart, selectedItem];
<!-- set cart data -->
                setCart(newCart);
            }
            else {
                alert('Item already added');
            }
        };

<!-- item remove------------------------- -->
        const handleRemoveFromCart = (selectedItem) => {
            const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id);

            setCart(rest);
        };



