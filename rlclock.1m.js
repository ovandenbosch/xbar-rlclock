#!/usr/local/bin/node

//  <xbar.title>RL Clock</xbar.title>
//  <xbar.version>v1.0</xbar.version>
//  <xbar.author>Oliver van den Bosch</xbar.author>
//  <xbar.author.github>ovandenbosch</xbar.author.github>
//  <xbar.desc>An xbar plugin that provides a quick look at information about the Roxbury Latin school day.</xbar.desc>
//  <xbar.image>https://upload.wikimedia.org/wikipedia/en/6/66/Roxbury_Latin_School_coa.png</xbar.image>
//  <xbar.dependencies>node</xbar.dependencies>

import fetch from "node-fetch";
function getInfo() {
  let blockInfoUrl = "https://mod-clock-api.roxburylatin.org/daytype.json";
  let scheduleUrl =
    "https://mod-clock-api.roxburylatin.org/todays_schedule.json";

  fetch(blockInfoUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let dayType = data["dayType"];
      let hallLength = data["hallLength"];
      let currentBlock = data["currentBlock"]["block"];

      // For after school
      if (currentBlock == undefined) {
        currentBlock = data["currentBlock"]["name"]
        console.log(currentBlock)
        console.log("---");
      } else {
        let remainingMin = data["remainingMin"];
        console.log(`${currentBlock} Block - ${remainingMin} minutes remaining`);
        console.log("---");
      }
      if (hallLength > 0) {
        console.log(`Hall Length ${hallLength}| color=#fafcff`);
      }
      console.log(`${dayType} Day| color=#fafcff`);
    });

  fetch(scheduleUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("---");
      let color = "#fafcff";
      let periods = data["periods"];
      periods.forEach((period) => {
        let pName = period["name"];
        let block = period["block"];
        
        // if (block == currentBlock) {
        //   color = "#e61010";
        // }
        if (block == undefined) {
          block = "";
        } else {
          block += " Block";
        }
        let start = period["start"];
        let end = period["end"];
        console.log(`${pName} - ${block} ${start} - ${end}| color=${color}`);
      });
      console.log("---");
      console.log(
        "App version: v1.0 | href=https://github.com/ovandenbosch/xbar-rlclock"
      );
      console.log(
        "uRL 🦊 | href=https://roxburylatin.myschoolapp.com/app/student#studentmyday/progress"
      );
    });
}

getInfo();
