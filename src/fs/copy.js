import { readdir, mkdir, copyFile } from 'fs/promises';

export const copy = async () => {
    const path = './src/fs';
    const contentInFsFolder = await readdir(path);

    if(!contentInFsFolder.includes('files') || contentInFsFolder.includes('files_copy')) {
        throw new Error('FS operation failed');
    }

    await mkdir(`${path}/files_copy`);

    const contentInFilesFolder = await readdir(`${path}/files`);
    for (const file of contentInFilesFolder) {
        await copyFile(`${path}/files/${file}`, `${path}/files_copy/${file}`);
    }
};

copy().then();