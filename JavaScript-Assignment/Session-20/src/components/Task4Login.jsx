import { useState } from "react";

function Task4Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});


    function handleLogin(event) {

        event.preventDefault();

        const newErrors = {};


        if (email.trim() === "") {

            newErrors.email =
                "Email is required.";

        }


        if (password.trim() === "") {

            newErrors.password =
                "Password is required.";

        }


        setErrors(newErrors);


        if (Object.keys(newErrors).length === 0) {

            alert("Login successful!");

        }
    }


    return (
        <div className="card">

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                {errors.email && (
                    <p className="error">
                        {errors.email}
                    </p>
                )}


                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                {errors.password && (
                    <p className="error">
                        {errors.password}
                    </p>
                )}


                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Task4Login;