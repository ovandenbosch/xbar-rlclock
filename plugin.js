#!/usr/bin/env node

import fetch from "node-fetch";

const getInfo = () => {
  let blockInfoUrl = "https://mod-clock-api.roxburylatin.org/daytype.json";

  fetch(blockInfoUrl)
  .then(res => {
      return res.json();
  })
  .then(console.log(data))


};

getInfo()