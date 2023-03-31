import NavBar from "../Layout/NavBar/NavBar";

const Error = props =>{
    return <>
    <NavBar/>
    <main>
        <h1> Error Occured!!</h1>
        <p>Could not find this page!</p>
        </main>
        </>
}

export default Error;