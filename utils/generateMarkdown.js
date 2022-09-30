// pacakges needed for app
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')


//function returns license badge based on which license is passed

function renderLicenseBadge (license) {
    let badge = '';
    if(license === 'MIT') {
        badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
    } else if (license === 'Apache 2.0') {
        badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GPL v3.0') {
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
      badge = ""
    }
    return badge;
  }
