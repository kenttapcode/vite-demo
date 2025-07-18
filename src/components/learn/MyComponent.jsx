import './style.css'

const MyComponent = () => {

    // const bientest = [1, 2, 3];
    const bientest = { name: "Quoc", age: 29 };
    return (
        <>
            <div>Hello {JSON.stringify(bientest)}</div>
            {console.log("Video 31")}
            <div className='child' style={{ fontWeight: "700" }}>Div child</div>
        </>
    )
}

export default MyComponent;