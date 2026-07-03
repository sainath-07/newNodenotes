const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  fs.readFile("formdata.html", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Page data found</h1>");
      return res.end();
    }

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    } else if (req.url === "/submit") {
      let userdata = [];

      // we get data in chunch format.
      req.on("data", (chunck) => {
        userdata.push(chunck);
      });

      // To convert data in human readable format , we need to convert buffer data into human readable format.
      req.on("end", () => {
        let parsedData = Buffer.concat(userdata).toString();
        console.log({ parsedData });
        // Output:
        // { parsedData: 'email=sainathb308%40gmail.com&name=sainath' }

        // to make data more readable like in objects we can use inbuilt module called querystring

        const finalData = querystring.parse(parsedData);
        console.log({ finalData });

        // Output:
        //         {
        //   finalData: [Object: null prototype] {
        //     email: 'sainathb308@gmail.com',
        //     name: 'sainath'
        //   }
        // }
      });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1>Form submitted successfully</h1>`);
    } else {
      res.write(`No data found`);
      return res.end();
    }

    res.end();
  });
});

server.listen(3000, () => {
  console.log(`Server running`);
});

// 1. becuase of adding method post in form element, it doesnot add form data in browser URL when we submit form
// 2.
