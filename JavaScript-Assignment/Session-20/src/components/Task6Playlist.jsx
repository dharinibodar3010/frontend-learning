import { useState } from "react";

function Task6Playlist() {

    const [name, setName] = useState("");

    const [description, setDescription] =
        useState("");

    const [error, setError] = useState("");


    function handleSubmit(event) {

        event.preventDefault();

        if (
            name.trim() === "" ||
            description.trim() === ""
        ) {

            setError(
                "Please fill in all fields."
            );

            return;
        }


        setError("");

        alert("Playlist created successfully!");

        setName("");

        setDescription("");
    }


    return (
        <div className="card">

            <h2>Create Playlist</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Playlist Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />


                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />


                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}


                <button type="submit">
                    Create Playlist
                </button>

            </form>

        </div>
    );
}

export default Task6Playlist;