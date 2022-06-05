import { rename as fsRename, readdir } from 'fs/promises';

export const rename = async () => {
    const path = './src/fs/files';
    const files = await readdir(path);

    if(!files.includes('wrongFilename.txt') || files.includes('properFilename.md')) {
        throw new Error('FS operation failed');
    }

    await fsRename(`${path}/wrongFilename.txt`, `${path}/properFilename.md`);
};

rename().then();