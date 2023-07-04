import axios from "axios";

export async function getRequest(url) {
    let answer = {
        data: {
            ok: false
        }
    }

    answer = await axios.get(url)

    return answer
}

export function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

export function sleep(delay) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}