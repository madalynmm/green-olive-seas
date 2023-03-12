// License badge, link, and section
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return '';
}

function renderDescriptionSection(description) {
  if (description !== 'None') {
    return `## Descritpion
    
    ${description}
    
    `;
  }
  return '';
}

// Installation link and section
function renderInstallationLink(installation) {
  if (installation !== 'None') {
    return `\n* [Installation](#installations)\n`;
  }
  return '';
}

function renderInstallationSection(installation) {
  if (installation !== 'None') {
    return `## Installation
    
    To install necessary dependencies, run the following command:

    ${installation}
    
    `;
  }
  return '';
}

// Usage link and section
function renderUsageLink(usage) {
  if (usage !== 'None') {
    return `\n* [Usage](#usage)\n`;
  }
  return '';
}

function renderUsageSection(usage) {
  if (usage !== 'None') {
    return `## Usage
    
    ${usage}
    
    `;
  }
  return '';
}

// Contributing link and section
function renderContributingLink(contributing) {
  if (contributing !== 'None') {
    return `\n* [Contributing](#contributing)\n`;
  }
  return '';
}

function renderContributingSection(contributing) {
  if (contributing !== 'None') {
    return `## Contributing
    
    ${contributing}
    
    `;
  }
  return '';
}

// Tests link and section
function renderTestsLink(tests) {
  if (tests !== 'None') {
    return `\n* [Tests](#tests)\n`;
  }
  return '';
}

function renderTestsSection(tests) {
  if (tests !== 'None') {
    return `## Tests

    To run tests, run the following command:
    
    ${tests}
    
    `;
  }
  return '';
}

// Questions link and section
function renderQuestionsLink() {
  return `\n* [Questions](#questions)\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return readmeData = `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${renderDescriptionSection(data.description)}

  ## Table of Contents

  ${renderInstallationLink(data.installation)}

  ${renderUsageLink(data.usage)}

  ${renderLicenseLink(data.license)}

  ${renderContributingLink(data.contributing)}

  ${renderTestsLink(data.tests)}

  ${renderQuestionsLink()}

  
  ${renderInstallationSection(data.installation)}

  ${renderUsageSection(data.usage)} 

  ${renderLicenseSection(data.license)}

  ${renderContributingSection(data.contributing)} 

  ${renderTestsSection(data.tests)}

  ## Questions
    
    If you have any questions about the repo, open an issue, or want to contact me directly, you can reach me at ${data.email}. You can find more of my work on [GitHub](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
