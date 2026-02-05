const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'database.js');
const outputPath = path.join(__dirname, 'backend', 'data', 'source.js');

try {
    let content = fs.readFileSync(inputPath, 'utf8');
    // Append the export statement
    content += '\nmodule.exports = Database;\n';

    fs.writeFileSync(outputPath, content, 'utf8');
    console.log('Successfully created backend/data/source.js');
} catch (err) {
    console.error('Error creating source file:', err);
    process.exit(1);
}
