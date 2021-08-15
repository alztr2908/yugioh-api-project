import { useData } from "../ThemeContext";

function Home() {
    const { data } = useData();
    console.log(data);

    return (
        <div>
            <h1>asdsd</h1>
            {data.map((mem) => (
                <div key={mem.id}>
                    <h1>{mem.first_name}</h1>
                </div>
            ))}
        </div>
    );
}
export default Home;
