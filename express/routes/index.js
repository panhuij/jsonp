var express = require("express");
var router = express.Router();
const url = require("url");
const queryString = require("querystring");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/api", (req, res) => {
    const ourl = url.parse(req.url, true);
    let { callback } = ourl.query;
    if (callback) {
        res.writeHead(200, {
            "Content-Type": "text/javascript"
        });

        const data = { code: 1, type: "jsonp",...ourl.query  };
        res.end(callback + "(" + JSON.stringify(data) + ")");
    } else {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify({ code: 1, type: "json",...ourl.query }));
    }
});

router.post("/pathapi", function(req, res, next) {
    console.log(req);
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    res.end(JSON.stringify({ code: 1, type: "json"}));
});

module.exports = router;
