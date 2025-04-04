import axios from "axios";

export default function TestApi() {
    async function getRequest() {
        try {
            const data = await axios.get("/api/hello");
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <h1>TestApi</h1>
            <button onClick={getRequest}>Click</button>
        </>
    );
}
