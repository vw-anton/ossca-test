const { execSync } = require('child_process');

const currentDate = new Date().toISOString().slice(0, 10);
const tagName = `${currentDate}`;

try {
    // Create a new tag
    execSync(`git tag -a ${tagName} -m "Tagged ${currentDate}"`);
    // Push the tag to remote
    execSync(`git push origin ${tagName}`);
    console.log(`Tag ${tagName} created successfully.`);
} catch (error) {
    console.error(`Error creating tag: ${error.message}`);
    process.exit(1);
}
