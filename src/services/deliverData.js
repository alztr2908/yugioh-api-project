import axios from "axios";

export async function getAllData(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res.data);
        });
    });
}
