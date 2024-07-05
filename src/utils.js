export function transformLink(node) {
    if (node.type === 'tag' && node.name === 'a') {
        // Modify the target attribute
        node.attribs.target = '_blank';

        // Optionally, you can add other attributes, e.g., rel="noopener noreferrer"
        node.attribs.rel = 'noopener noreferrer';
    }

    return node;
}