import { useData } from "../ThemeContext";

function Home() {
    const { data, loading } = useData();

    const loadData = data.map((mem) => (
        <div key={mem.id}>
            <h1>{mem.name}</h1>
        </div>
    ));

    return <div>{loading ? <h1>loading...</h1> : loadData}</div>;
}
export default Home;
