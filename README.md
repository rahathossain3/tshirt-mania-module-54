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


## Video 4
<!-- ---------------------------- -->

## conditional rendering options
    1. Element variable
    2. ternary operator: condition? true: false;
    3. && operator (shorthand) (jodi true hoy taile kaj kore)
    4. || operator  

### code example: (cart.js)

 #### 1
 let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh kipta, Khoroc kor</h5>
            <p>kinos na kn</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p> Please add more....</p>
    }
    else {
        command = <p><small>Thanks for Adding Item</small></p>
    }

<!-- return code  -->
 
             {/* 1 */}
            {command}

#### 2
            {/* 2 */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove ALL</button>}

#### 3
            {/* 3 */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>} 
            

#### 4            
            {/* 4 */}
            {cart.length === 0 || <p className='orange'> Yay ! you are buying</p>}



## Video 7

### react context api
    (https://reactjs.org/docs/context.html#reactcreatecontext)

    (https://reactjs.org/docs/hooks-reference.html)


## context api
   <!-- 1  (write outside of a function )-->

   export const RingContext = createContext('ring');


<!-- 2  area set using <RingContext>-->

    // <RingContext.Provider value='alur ring'>
       <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>Grandpa</h4>

                <p>House : {house}
                    <button
                        onClick={handelBuyAHouse}
                    > Buy a House </button>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Aunty house={house}></Aunty>
                    <Uncle house={house}></Uncle>
                </section>

            </div>
        </RingContext.Provider>


   <!-- // 3 get context or declare a component for use -->
    const ring = useContext(RingContext);