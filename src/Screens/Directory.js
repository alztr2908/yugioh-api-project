import CardDir from "../Components/CardDir";
import { useData } from "../ThemeContext";

function Directory() {
    const { data, loading } = useData();

    const loadData = data.map((mem) => (
        <div key={mem.id}>
            <CardDir mem={mem} />
        </div>
    ));

    return <div>{loading ? <h1>loading.....</h1> : loadData}</div>;
}

export default Directory;
