const fs = require('fs');
const core = require('@actions/core');

const pagesFolder = './pages/';
const regex = new RegExp(/^[^_](.+).tsx$/, 'g');
const fileExtensionRegex = new RegExp(/\.[^/.]+$/, 'g');

try {
    const baseUrl = core.getInput('base-url')
    const routes = fs.readdirSync(pagesFolder, { withFileTypes: true })
        .filter(item => !item.isDirectory())
        .map(item => item.name)
        .filter(fileName => regex.test(fileName))
        .map(fileName => fileName.replace(fileExtensionRegex, ''))

    if (baseUrl) {
        const links = routes.map(fileName => `${baseUrl}/${fileName}`).join('\n')
        core.setOutput('links', links )
    }
    core.setOutput('routes', routes);
} catch (error) {
    core.setFailed(error.message);
}