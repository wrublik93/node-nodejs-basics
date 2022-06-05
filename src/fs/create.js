import { readdir, writeFile } from 'fs/promises';

export const create = async () => {
    const path = './src/fs/files';
    const data = 'I am fresh and young';
    const files = await readdir(path);

    if(files.includes('fresh.txt')) throw new Error('FS operation failed');

    await writeFile(`${path}/fresh.txt`, data);
};

create().then();