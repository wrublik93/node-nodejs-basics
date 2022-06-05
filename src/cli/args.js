import process from 'node:process';

export const parseArgs = () => {
    const { argv } = process;
    const myArgs = argv.slice(2);
    let str = '';

    myArgs.forEach((arg, index) => {
        if(index % 2 === 0) {
            str += `${arg.slice(2)} is `;
        } else {
            str += `${arg}, `;
        }

        if(index === (myArgs.length - 1)) {
            str = str.slice(0, -2);
        }
    });

    console.log(str);
};

parseArgs();