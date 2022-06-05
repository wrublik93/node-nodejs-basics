import process from 'node:process';

export const parseEnv = () => {
    const { env: {name1, name2} } = process;

    console.log(`RSS_name1=${name1}; RSS_name2=${name2}`);
};

parseEnv();