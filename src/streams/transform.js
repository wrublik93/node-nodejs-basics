import { Transform } from 'stream';
import {pipeline} from "stream/promises";

export const transform = async () => {
    const reverseText = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    await pipeline(process.stdin, reverseText, process.stdout);
};

transform().then();