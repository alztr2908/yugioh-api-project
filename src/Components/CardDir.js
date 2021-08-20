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
                <div className="card-description">
                    <h1>{mem.name}</h1>
                    <div className="card-body">
                        <span>
                            <img
                                src={`https://ygoprodeck.com/pics/icons/${mem.type}.jpg`}
                            />
                            <h2>{mem.type}</h2>
                        </span>
                        <span>
                            <img
                                src={`https://ygoprodeck.com/pics/icons/race/${mem.race}.png`}
                                style={{
                                    width: "20px",
                                }}
                            />
                            <h2>{mem.race}</h2>
                        </span>
                    </div>
                    <h3>{mem.desc}</h3>
                </div>
            </Col>
        </Row>
    );
}

export default CardDir;
