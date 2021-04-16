const fs = require("fs");






function modifyNotes() {
  fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
    if (err) throw err;
    return true;
  });
}

