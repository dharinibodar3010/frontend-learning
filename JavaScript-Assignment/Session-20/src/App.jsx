import Task1Cart from "./components/Task1Cart";
import Task4Login from "./components/Task4Login";
import Task6Playlist from "./components/Task6Playlist";
import Task7Review from "./components/Task7Review";
import Task9Followers from "./components/Task9Followers";
import Task10BugChecklist from "./components/Task10BugChecklist";
import Task12ReviewTest from "./components/Task12ReviewTest";

import "./App.css";


function App() {

    return (

        <div className="app">

            <h1>React Practical Tasks</h1>


            <section>
                <h2>Task 1, 2 & 3</h2>
                <Task1Cart />
            </section>


            <section>
                <h2>Task 4 & 5</h2>
                <Task4Login />
            </section>


            <section>
                <h2>Task 6</h2>
                <Task6Playlist />
            </section>


            <section>
                <h2>Task 7 & 8</h2>
                <Task7Review />
            </section>


            <section>
                <h2>Task 9</h2>

                <div className="card">
                    <p>
                        Check addFollower() in
                        the console.
                    </p>
                </div>

            </section>


            <section>
                <h2>Task 10 & 11</h2>

                <div className="card">

                    <p>
                        Test the buttons and
                        forms using the checklist.
                    </p>

                </div>

            </section>


            <section>
                <h2>Task 12</h2>
                <Task12ReviewTest />
            </section>

        </div>
    );
}

export default App;