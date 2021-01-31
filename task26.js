const fs = require('fs');
async function copy () {
  
    let readFile = (path) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fs.readFile(path, "utf-8", (err, data) => {
                    if (err) {
                      reject(err);
                    } else {
                      
                      resolve(data);
                    }
                });
            }, 1000);
        });
    }
    let writeFile = (path, content) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            fs.writeFile(path, content, (err, data) => {
                if (err) {
                    reject(err);
                } else
                  resolve(data);
            });
        });
        })
    }
    const read = await readFile("./file1.txt");
    const write = await writeFile("./file2.txt", read);
    return "file created";
}

module.exports = {
    content: copy
};
