import CardDir from "../Components/CardDir";
import { useData } from "../ThemeContext";
import { useState } from "react";
import "./stylesheets/Directory.less";
import { Menu, Dropdown, Button, Divider, Space, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
    FaStepForward,
    FaFastForward,
    FaStepBackward,
    FaFastBackward,
} from "react-icons/fa";

// Ini
const cardNumberSlice = { initialValue: 0, finalValue: 30 };

function Directory() {
    const { data, loading } = useData();
    const [partialData, setPartialData] = useState(data.slice(0, 30));
    const [viewNoCard, setViewNoCard] = useState(cardNumberSlice);

    // Determining the viewing list
    const viewList = [
        { name: "List", id: 1, mode: false },
        { name: "Gallery", id: 2, mode: true },
    ];
    const [viewItem, setViewItem] = useState(viewList[1].name);

    const menuView = (
        <Menu>
            {viewList.map((list) => (
                <Menu.Item
                    key={list.id}
                    value={list.name}
                    onClick={() => setViewItem(list.name)}
                >
                    {list.name}
                </Menu.Item>
            ))}
        </Menu>
    );

    // Number of cards that will be displayed
    const numPages = [30, 60, 100];
    const [numItem, setNumItem] = useState(numPages[0]);
    const menuPerPage = (
        <Menu>
            {numPages.map((num) => (
                <Menu.Item key={num} onClick={() => resetSliceData(num)}>
                    {num} Per Page
                </Menu.Item>
            ))}
        </Menu>
    );

    // Reset the state of number of cards shown
    function resetSliceData(num) {
        setPartialData(data.slice(0, num));
        setNumItem(num);
    }

    // Slice data with forward/backward button
    function forwardSliceData(num) {}

    // Props of CardDir determining List/Gallery View

    const whatView = viewList.filter((list) => list.name === viewItem)[0].mode;
    const loadData = partialData.map((mem) => {
        if (whatView) {
            return <CardDir mem={mem} key={mem.id} />;
        }

        return (
            <img
                key={mem.id}
                src={mem.card_images[0].image_url_small}
                style={{ margin: "0.5em" }}
            />
        );
    });

    // Styles for List Mode
    const listViewStyle = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div className="bodyDirectory">
            <Row gutter={[]} style={{ marginTop: "2em", marginBottom: "8em" }}>
                <Divider />
                <Col span={18}>
                    <Space size={24}>
                        <Dropdown overlay={menuView}>
                            <Button className="buttonList">
                                <strong>
                                    {viewItem} <DownOutlined />
                                </strong>
                            </Button>
                        </Dropdown>
                        showing
                        <Dropdown overlay={menuPerPage}>
                            <Button className="buttonList">
                                <strong>
                                    {numItem} Per Page <DownOutlined />
                                </strong>
                            </Button>
                        </Dropdown>
                    </Space>
                </Col>
                <Col span={5}>
                    <Space size={16}>
                        <Button className="movePageButton">
                            <FaFastBackward />
                        </Button>
                        <Button className="movePageButton">
                            <FaStepBackward />
                        </Button>
                        <Button className="movePageButton">
                            <FaStepForward />
                        </Button>
                        <Button className="movePageButton">
                            <FaFastForward />
                        </Button>
                    </Space>
                </Col>
                <Divider />
            </Row>
            <div className="dataContainer">
                <h3 className="showNoCards">
                    {viewNoCard.initialValue}-{viewNoCard.finalValue} of{" "}
                    {data.length} cards
                </h3>
                <div style={whatView ? { display: "block" } : listViewStyle}>
                    {loading ? <h1>loading.....</h1> : loadData}
                </div>
            </div>
        </div>
    );
}

export default Directory;
