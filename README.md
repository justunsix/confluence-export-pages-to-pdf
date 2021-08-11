# Export Confluence page(s) to PDF

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/justunsix/confluence-export-pages-to-pdf)

## Why use?

### Advantages

- Uses an automated web based login to Confluence on a headless browser to export a PDF using [Confluence's own PDF export](https://confluence.atlassian.com/conf59/export-content-to-word-pdf-html-and-xml-792498686.html).
- Does not require Confluence API to be turned on to export files.
- Script can be changed to do any manual steps you can do in a browser (e.g. export to other formats, make changes).

### Disadvantages

- Script is an automated specific case and is not ideal to configurations or accepting parameters. For configurations, use the Confluence API or CLI.

## Web Automation Option

## Node.JS Puppeteer Option

### Set up

Install Node 10.18.1+ or later

```sh
npm install
cp config/default.yaml config/local.yaml
```

Edit local.yaml with your Confluence username, password, and URL for the export setting in your space.

### Run

```sh
node index.js
```

### Appendix: Original project setup

1. Record use case in Chrome recorder
2. Install Puppeteer which will include a recent version of Chromium `npm i puppeteer`
3. Install config to manage configuration files `npm install config`
4. Install js-yaml to parse yaml configuration `npm i js-yaml`

## References Used for Building this Repository and Researching Options

- [confluence-scraping](https://github.com/TheoWolf/confluence-scraping)
- [Confluence manual PDF export](https://confluence.atlassian.com/conf59/export-content-to-word-pdf-html-and-xml-792498686.html)
- [Confluence Command Line Interface (CLI)](https://bobswift.atlassian.net/wiki/spaces/CSOAP/overview?homepageId=10584073) and [Examples with PDF export](https://bobswift.atlassian.net/wiki/spaces/CSOAP/pages/10584066/Examples)
- [Python API for Confluence](https://github.com/atlassian-api/atlassian-python-api/) and [documentation](https://atlassian-python-api.readthedocs.io/index.html)
- [batch-export-wiki-pdf](https://github.com/qquunn/batch-export-wiki-pdf/) - recursively save PDFs from a parent page and its children

### Web Testing Approach

- [How to Build a Web Scraper - Python, Selenium](https://towardsdatascience.com/how-to-build-a-web-scraper-or-bot-in-python-using-selenium-2815f20023f7)
- [Modern Web Automation With Python and Selenium](https://realpython.com/modern-web-automation-with-python-and-selenium/)
- [Web Browser Automation with Selenium and Java](https://stackabuse.com/web-browser-automation-with-selenium-and-java/)
