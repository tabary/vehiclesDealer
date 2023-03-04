

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/vehicles', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
    , (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the vehicle-api database.');
        }
    });



let w1 = JSON.stringify([{min:24, max:37, pressure:"32"}, {min:24, max:37, pressure:"24"}, {min:20, max:34, pressure:"28"}, {min:19, max:37, pressure:"33"}])
let w2 = JSON.stringify([{min:24, max:37, pressure:"29"}, {min:24, max:37, pressure:"25"}, {min:20, max:34, pressure:"24"}, {min:19, max:37, pressure:"31"}])
let w3 = JSON.stringify([{min:24, max:37, pressure:"25"}, {min:24, max:37, pressure:"27"}, {min:20, max:34, pressure:"28"}, {min:19, max:37, pressure:"32"}])
let w4 = JSON.stringify([{min:24, max:37, pressure:"27"}, {min:24, max:37, pressure:"29"}, {min:20, max:34, pressure:"29"}, {min:19, max:37, pressure:"22"}])

let query = [
    "PRAGMA foreign_keys = ON",
    "DROP TABLE IF EXISTS vehicles",
    "CREATE TABLE vehicles (id INTEGER PRIMARY KEY AUTOINCREMENT, trademark TEXT NOT NULL, model TEXT NOT NULL, image TEXT, logo TEXT,wheels TEXT , type TEXT, cylinders INT, kilometers INT, color TEXT)",
    "INSERT INTO vehicles  values (NULL, 'Ferrari', '812 GTS', 'https://cdn.ferrari.com/cms/network/media/img/resize/5d6fd2b0037869546bcce407-d-812gts-aerodynamic?', 'https://cdn.shopify.com/s/files/1/0133/3795/2320/products/Ferrari-Logo-Heat-Transfer_1024x1024@2x.jpg?v=1549746590', '"+w1+"', 'fuel', '12', 10000, 'red')",
    "INSERT INTO vehicles  values (NULL, 'Porche', '911', 'https://www.webmotors.com.br/imagens/prod/348968/PORSCHE_911_3.0_24V_H6_GASOLINA_TARGA_50_ANOS_PORSCHE_DESIGN_EDITION_PDK_3489681731207923.webp?s=fill&w=440&h=330&q=80&t=true', 'https://logo-marque.com/wp-content/uploads/2021/04/Porsche-Logo-650x366.png', '"+w2+"', 'fuel', '8', 5000, 'grey')",
    "INSERT INTO vehicles  values (NULL, 'Renault', '4L', 'https://www.solido.com/wp-content/uploads/2020/06/s1800109-renault-4l-gtl-vert-celadon-1978-01-600x403.jpg', 'https://logos-marques.com/wp-content/uploads/2021/02/Renault-Logo.png', '"+w3+"', 'fuel', '4', 200000,'blue')",
    "INSERT INTO vehicles  values (NULL, 'Citroen', '2cv', 'https://www.citroenorigins.fr/sites/default/files/styles/640/public/2cv_1950_62_1620x1000.png?itok=rqloumG6', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Citroen_Logo_2022.png/500px-Citroen_Logo_2022.png', '"+w4+"', 'fuel', '2', 149000,'green')",

]

db.serialize( () => {

    query.forEach(item => {
        db.run(item, err =>  {
            if (err)
                return console.error(err.message)
            console.log(item + ` done`)
        })
    })

})

db.close(err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
