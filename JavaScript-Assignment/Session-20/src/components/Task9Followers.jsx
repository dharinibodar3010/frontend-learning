import { useState } from "react";

function Task9Followers() {

    const [followers, setFollowers] = useState([]);

    function addFollower(name) {

        if (
            typeof name !== "string" ||
            name.trim() === ""
        ) {
            return;
        }

        setFollowers(prevFollowers => [
            ...prevFollowers,
            name.trim()
        ]);
    }

    return (
        <div className="card">

            <h2>Task 9 - Followers</h2>

            <button onClick={() => addFollower("Dharini")}>
                Add Dharini
            </button>

            <button onClick={() => addFollower("")}>
                Add Empty Name
            </button>

            <button onClick={() => addFollower(null)}>
                Add Null
            </button>

            <h3>Followers:</h3>

            <ul>
                {followers.map((name, index) => (
                    <li key={index}>
                        {name}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Task9Followers;