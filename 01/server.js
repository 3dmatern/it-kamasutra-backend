// Ответ на ДЗ https://code.mu/ru/javascript/nodejs/book/prime/server/resources/

const http = require("http");
const fs = require("fs");

let requestsCount = 0;

const server = http.createServer(async (request, response) => {
    if (request.url != "/favicon.ico") {
        requestsCount++;

        switch (request.url) {
            case "/students":
                response.write("STUDENTS");
                break;
            case "/":
            case "/courses":
                response.write("FRONT + BACK");
                break;
            default:
                response.write("404 Not Found");
                response.statusCode = 404;
        }

        response.write(" IT-KAMASUTRA: " + requestsCount);
    } else {
        let favicon = await fs.promises.readFile("favicon.ico");
        response.writeHead(200, { "Content-Type": "image/x-icon" });
        response.write(favicon);
    }

    response.end();
});

server.listen(3003);
