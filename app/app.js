"use strict"

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 설정
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터의 한글, 공백 등과 같은 문자가 포함된 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들웨어 등록 메서드

module.exports = app;
