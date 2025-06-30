import React from "react";
import './MainFile.css';

export function About(props){

    const[user, setUser] = React.useState({});

    const[login, setLogin] = React.useState("");
    const[password, setPassword] = React.useState("");
    const[error, setError] = React.useState("");
    const [isAuthorized, setIsAuthorized] = React.useState(false);
    

    React.useEffect(() => {setUser(props.user); }, [props.user])
    function handleNameChange(event){
        setUser({...user, Name: event.target.value});
    }
    function handleAdressChange(event){
        setUser({...user, Adress: event.target.value});
    }
    function handleRateChange(event){
        setUser({...user, Rate: event.target.value});
    }
    function handleCuisinChange(event){
        setUser({...user, Cuisin: event.target.value});
    }

    function handleSubmit(event){
        if(login.trim() === "" || password.trim() === ""){
            setError("Enter");
        } else if (login !== "admin" || password !== "1234") {
            setError("Login or Password")
        } else{
            setError("");
            alert("Good job");
            setIsAuthorized(true);
        }
    }
    
    return(
        <>
            <div className = "Checking">
                <p>Login: <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} /></p>
                <p>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>

                <button onClick={handleSubmit}>Зайти</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className='full'>
                <div className='left'>
                    <h2>{user.Name}</h2>
                    <p>Адреса: {user.Adress}</p>
                    <p>Рейтинг: {user.Rate}</p>
                    <p>Кухня: {user.Cuisin}</p>
                    <img src={user.Photo} alt="Restaurant" width="300" />
                </div>
                <div className='right'>
                    <p>Название: <input type="text" value={user.Name} onChange={handleNameChange} /></p>
                    <p>Адреса: <input type="text" value={user.Adress || ""} onChange={handleAdressChange} /></p>
                    <p>Рейтинг: <input type="text" value={user.Rate || ""} onChange={handleRateChange} /></p>
                    <p>Кухня: <input type="text" value={user.Cuisin || ""} onChange={handleCuisinChange} /></p>
                </div>
            </div>
        </>
        
    );
}




















