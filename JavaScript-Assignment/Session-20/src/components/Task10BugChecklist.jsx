function Task10BugChecklist() {

    const bugs = [
        {
            bug: "Double Add",
            problem: "Clicking Add to Cart multiple times adds the same product again.",
            fix: "Check the product ID before adding it to the cart."
        },
        {
            bug: "Empty Fields",
            problem: "Form submits when input fields are empty.",
            fix: "Check input values before form submission."
        },
        {
            bug: "Cart Count Not Updating",
            problem: "Cart count does not change after adding a product.",
            fix: "Update the cart using React state."
        },
        {
            bug: "Empty Review",
            problem: "An empty review is submitted.",
            fix: "Use trim() to check whether the review is empty."
        },
        {
            bug: "UI Not Updating",
            problem: "Deleted item still appears on the screen.",
            fix: "Update the state after deleting the item."
        }
    ];

    return (
        <div className="card">

            <h2>Bug Testing Checklist</h2>

            {bugs.map((item, index) => (

                <div className="bug-item" key={index}>

                    <h3>
                        ☑ {item.bug}
                    </h3>

                    <p>
                        <strong>Problem:</strong>{" "}
                        {item.problem}
                    </p>

                    <p>
                        <strong>Fix:</strong>{" "}
                        {item.fix}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default Task10BugChecklist;