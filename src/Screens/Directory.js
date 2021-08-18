import CardDir from "../Components/CardDir";
import { Row, Col } from "antd";
import { useData } from "../ThemeContext";
import "./stylesheets/Directory.less";

function Directory() {
    const { data, loading } = useData();
    console.log(data);

    const loadData = data.map((mem) => <CardDir mem={mem} />);

    return (
        <div className="bodyDirectory">
            {loading ? <h1>loading.....</h1> : loadData}
        </div>
    );
}

export default Directory;
