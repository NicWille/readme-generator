function generateMarkdown(data) {

  let markdown = 
  ` 
  # ${data.title} 
  <img src=${renderLicenseBadge(data.license)}/>
 
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [Liscense](#liscense)
  
  ## Installation
  
  ${data.installation}
 
  ## Test Instructions
  
  ${data.test}
  
  ## Credits
  
  ${data.credit} 
  
  ## Features
  
  ${data.features}

  ## Questions

  ${data.email}
  
  ## Liscense
  
  ${renderLicenseSection(data.license)}
  <${renderLicenseLink(data.license)}>`

  return markdown;
 }

 function renderLicenseBadge(license) {

  if("MIT"){
    let mitURL = "https://img.shields.io/badge/license-MIT-blue";
    return mitURL;
  } else if("GNU"){
    let gnuURL = "https://img.shields.io/badge/license-GNU-green";
    return gnuURL;
  } else if("GPLv3"){
    let gplv3URL = "https://img.shields.io/badge/license-GPL3-brightgreen";
    return gplv3URL;
  } else if("AGPLv3"){
    let apglv3 = "https://img.shields.io/badge/license-APGL3-lightgrey";
    return apglv3;
  } else if("MPL"){
    let mplURL = "https://img.shields.io/badge/license-MPL-red";
    return mplURL; 
  } else if ("Apache-2.0"){
    let apache = "https://img.shields.io/badge/license-Apache2-orange";
    return apache;
  } else {
    let none = "";
    return none; 
  }
}

function renderLicenseSection(license) {

  if("MIT"){
    let mitDoc = "This product is licensed with MIT"
    return mitDoc;  
  } else if("GNU"){
    let gnuDoc = "This product is licensed with GNU"
    return gnuDoc;
  } else if("GPLv3"){
      let gplDoc = "This product is licensed with GPLv3"
    return gplDoc;
  } else if("AGPLv3"){
    let agpDoc = "This product is licensed with AGPLv3"
    return agpDoc;
  } else if("MPL"){
    let mplDoc = "This product is licensed with MPL"
    return mplDoc; 
  } else if ("Apache-2.0"){
    let apacheDoc = "This product is licensed with Apache-2"
    return apacheDoc;
  } else {
    let none = "";
    return none; 
  }
}

function renderLicenseLink(license) {

  if("MIT"){
    return "https://choosealicense.com/licenses/mit/";
  } else if("GNU"){
    return "https://choosealicense.com/licenses/lgpl-3.0/";
  } else if("GPLv3"){
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if("AGPLv3"){
    return "https://choosealicense.com/licenses/agpl-3.0/";
  } else if("MPL"){
    return "https://choosealicense.com/licenses/mpl-2.0/"; 
  } else if ("Apache-2.0"){
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else {
    let none = "";
    return none; 
  }
}
 
 module.exports = generateMarkdown;