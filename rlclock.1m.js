#!/usr/bin/env node

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
      let currentBlock = data["currentBlock"]["name"]

      console.log(dayType)
      console.log(hallLength)
      console.log(currentBlock)
    });
};

getInfo();
