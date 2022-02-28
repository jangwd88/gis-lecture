"use strict"


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["wonder", "chang", "jangwd88"],
    passwd: ["1234", "12345", "123456", ],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const passwd = req.body.passwd;
        const response = {};

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.passwd[idx] === passwd){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인 실패하였습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};