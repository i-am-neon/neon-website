import { HexColors } from "../enums/Colors";

const asciiLines = [
    '//////////////////////////////////////////////////////////////////////',
    '//                                                                  //',
    '//                           _        _______  _______  _           //',
    '//                          ( (    /|(  ____ \\(  ___  )( (    /|    //',
    '//                          |  \\  ( || (    \\/| (   ) ||  \\  ( |    //',
    '//                          |   \\ | || (__    | |   | ||   \\ | |    //',
    '//                          | (\\ \\) ||  __)   | |   | || (\\ \\) |    //',
    '//                          | | \\   || (      | |   | || | \\   |    //',
    '//                          | )  \\  || (____/\\| (___) || )  \\  |    //',
    '//     they call me...      |/    )_)(_______/(_______)|/    )_)    //',
    '//                                                                  //',
    '//////////////////////////////////////////////////////////////////////',
];

export const logSecretMessage = (): void => {
    console.clear()
    console.log('\n\n\n\n\n\n\n\n\n\n');

    //     const styling = `
    //     background-image: linear-gradient(to right, #f22, #f2f, #22f, #2ff, #2f2, #ff2);
    //   color: transparent;
    //   -webkit-background-clip: text;
    //   background-clip: text;
    //   `
    const styling = 'color: ' + HexColors.cyan;

    asciiLines.forEach(line => {
        console.log('%c' + line, styling);
    });
}