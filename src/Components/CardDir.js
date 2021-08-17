//============= // Format of cards in directory
//============= // Name
//card_image    // type | race
//============= // desc
//============= // prices

import "./stylesheets/CardDir.css";

function CardDir({ mem }) {
    console.log(mem);
    return (
        <div>
            <img src={mem.card_images[0].image_url} />
            <h1>{mem.name}</h1>
            <h2>{mem.type}</h2>
            <h2>{mem.race}</h2>
            <p>{mem.desc}</p>
        </div>
    );
}

export default CardDir;
