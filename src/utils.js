export function transformLink(node) {
    if (node.type === 'tag' && node.name === 'a') {
        // Modify the target attribute
        node.attribs.target = '_blank';

        // Optionally, you can add other attributes, e.g., rel="noopener noreferrer"
        node.attribs.rel = 'noopener noreferrer';
    }

    return node;
}

export const markdownSample = '# Welcome to my React Project!\n' +
    '\n' +
    '## Heading level 2\n' +
    '### Heading level 3\n' +
    '\n' +
    'Here is some text as computer `code` between 2 backticks(`) and the code block:\n' +
    '\n' +
    '```' +
    '\n' +
    '// this is a multi-line code:\n' +
    '\n' +
    'function helloWorld {\n' +
    '  console.log(Hello, World!);\n' +
    '  }\n' +
    '\n' +
    'helloWorld();\n' +
    '```' +
    '\n' +
    'You can also emphasize the text: **bold**, _italic_ or **_both!_**\n' +
    'It is possible to ~~cross the text out~~.\n' +
    '\n' +
    'Also you can link to my [page](https://kris-perova.github.io/).\n' +
    '\n' +
    'Is is possible to add a table:\n' +
    '\n' +
    'Column 1 | Column 2  | Column 3 \n' +
    '-------- | -------   | -------- \n' +
    'Text     | Text      | Text     \n' +
    'Text     | Text      | Text     \n' +
    '\n' +
    '- Some lists.\n' +
    '  - First item.\n' +
    '     - Second item.\n' +
    '        - Third item.\n' +
    '\n' +
    '\n' +
    'You can create an ordered list: \n' +
    '1. First item.\n' +
    '1. Second item.\n' +
    '3. Third item.\n' +
    '\n' +
    'And finally a MEME from [xkcd](https://xkcd.com/1296/):\n' +
    '\n' +
    '![git commit meme](https://imgs.xkcd.com/comics/git_commit.png)\n';