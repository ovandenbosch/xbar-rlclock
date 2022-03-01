#!/usr/local/bin node


// Metadata allows your plugin to show up in the app, and website.
//
//  <xbar.title>RL Clock</xbar.title>
//  <xbar.version>v1.0</xbar.version>
//  <xbar.author>Oliver van den Bosch</xbar.author>
//  <xbar.author.github>ovandenbosch</xbar.author.github>
//  <xbar.desc>An xbar plugin that provides a quick look at information about the Roxbury Latin school day.</xbar.desc>
//  <xbar.image>https://upload.wikimedia.org/wikipedia/en/6/66/Roxbury_Latin_School_coa.png</xbar.image>
//  <xbar.dependencies>node</xbar.dependencies>
//  



import fetch from "node-fetch";

const getInfo = () => {
  let blockInfoUrl = "https://mod-clock-api.roxburylatin.org/daytype.json";

  fetch(blockInfoUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let dayType = data["dayType"];
      let hallLength = data["hallLength"];
      let currentBlock = data["currentBlock"]["name"];

      console.log(`Day Type | ${dayType}`);
      if (hallLength > 0) {
        console.log(`Hall Length | ${hallLength}`);
      }
      console.log(`Current Block | ${currentBlock}`);
    });
};

getInfo();
