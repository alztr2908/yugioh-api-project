//============= // Format of cards in directory
//============= // Name
//card_image    // type | race
//============= // desc
//============= // prices

import { Row, Col } from "antd";
import "./stylesheets/CardDir.less";

function CardDir({ mem }) {
    return (
        <Row className="cardRow">
            <Col span={6}>
                <img src={mem.card_images[0].image_url_small} />
            </Col>
            <Col span={18}>
                <h1>{mem.name}</h1>
                <div>
                    <img
                        src={`https://ygoprodeck.com/pics/icons/${mem.type}.jpg`}
                        style={{
                            height: "20px",
                            width: "13.88px",
                            padding: "0px",
                            marginright: "5px",
                        }}
                    />
                    <h2>{mem.type}</h2>
                    <span>
                        <img
                            src={`https://ygoprodeck.com/pics/icons/race/${mem.race}.png`}
                            style={{
                                height: "20px",
                                width: "20px",
                                padding: "0px",
                                marginright: "5px",
                            }}
                        />
                        <h2>{mem.race}</h2>
                    </span>
                </div>
                <p>{mem.desc}</p>
            </Col>
        </Row>
    );
}

export default CardDir;
