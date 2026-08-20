import { useState } from "react";

function Task7Review() {

    const [review, setReview] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (review.trim() === "") {

            setError("Review cannot be empty.");
            return;

        }

        setError("");

        alert("Review submitted!");

        setReview("");
    }

    return (
        <div className="card">

            <h2>Add Review</h2>

            <form onSubmit={handleSubmit}>

                <textarea
                    placeholder="Write your review"
                    value={review}
                    onChange={(e) =>
                        setReview(e.target.value)
                    }
                />

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <button type="submit">
                    Submit Review
                </button>

            </form>

        </div>
    );
}

export default Task7Review;