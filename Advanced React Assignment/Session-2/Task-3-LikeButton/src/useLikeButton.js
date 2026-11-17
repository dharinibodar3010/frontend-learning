import { useState } from "react";

function useLikeButton() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setCount(count - 1);
        } else {
            setLiked(true);
            setCount(count + 1);
        }
    };

    return {
        liked,
        count,
        handleLike
    };
}

export default useLikeButton;