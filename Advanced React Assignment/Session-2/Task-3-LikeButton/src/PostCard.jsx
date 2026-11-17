import useLikeButton from "./useLikeButton";

function PostCard() {
    const {
        liked,
        count,
        handleLike
    } = useLikeButton();

    return (
        <div>
            <h2>My Instagram Post</h2>

            <button onClick={handleLike}>
                {liked ? "Unlike" : "Like"}
            </button>

            <p>{count} Likes</p>
        </div>
    );
}

export default PostCard;