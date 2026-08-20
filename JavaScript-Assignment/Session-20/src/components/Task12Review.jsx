import { useState } from "react";

function Task12ReviewTest() {

    const [review, setReview] = useState("");

    const [rating, setRating] = useState("");

    const [errors, setErrors] = useState({});


    function handleSubmit(event) {

        event.preventDefault();

        const newErrors = {};


        // Review validation

        if (review.trim() === "") {

            newErrors.review =
                "Review is required.";
        }


        // Rating validation

        if (rating === "") {

            newErrors.rating =
                "Rating is required.";

        } else if (
            Number(rating) < 1 ||
            Number(rating) > 5
        ) {

            newErrors.rating =
                "Rating must be between 1 and 5.";
        }


        setErrors(newErrors);


        if (
            Object.keys(newErrors).length === 0
        ) {

            alert("Review submitted!");

            setReview("");

            setRating("");
        }
    }


    return (
        <div className="card">

            <h2>Zomato Review</h2>

            <form onSubmit={handleSubmit}>

                <textarea
                    placeholder="Write your review"
                    value={review}
                    onChange={(e) =>
                        setReview(e.target.value)
                    }
                />

                {errors.review && (
                    <p className="error">
                        {errors.review}
                    </p>
                )}


                <input
                    type="number"
                    placeholder="Rating 1-5"
                    value={rating}
                    onChange={(e) =>
                        setRating(e.target.value)
                    }
                />

                {errors.rating && (
                    <p className="error">
                        {errors.rating}
                    </p>
                )}


                <button type="submit">
                    Submit Review
                </button>

            </form>

        </div>
    );
}

export default Task12ReviewTest;