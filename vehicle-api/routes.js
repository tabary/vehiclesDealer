const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/vehicles');

module.exports = routes;

routes
    .get("/", (req, res) => {
        res.json("Hello world!!");
    })

    .get("/vehicles", (req,res) => {
        db.all(
            "select id,trademark,model,image,logo from vehicles",
            (err, rows) => {
                console.log(err)
                return res.json(rows)

            }
        )

    })
    .get("/vehicles/:id", (req,res) => {
            db.all(
                "select * from vehicles where id=?",
                [req.params.id],
                (err, rows) => {
                    if(rows.length == 0) {
                        res.status(404);
                        res.send("Not found")
                        return // IMPORTANT
                    }
                    row = rows[0]
                    row.wheels = JSON.parse(row.wheels);
                    return res.json(row)
                }
            );

    })
    .delete("/vehicles/:id", (req,res) => {
        db.all(
            "delete from vehicles where id=?",
            [req.params.id],
            (err, rows) => {
                res.send(204)
            }
        );
    })
    .patch("/vehicles/:id", (req,res) => {
        console.log(req.body.kilometers)
        db.all(
            "update vehicles set kilometers=? where id=?",
            [req.body.kilometers, req.params.id],
            (err, rows) => res.json(rows)
        );
    })
    .post("/vehicles", (req,res) => {
        wheels = [{min:24, max:37, pressure:"32"}, {min:24, max:37, pressure:"24"}, {min:20, max:34, pressure:"28"}, {min:19, max:37, pressure:"33"}]
        db.all(
            "INSERT INTO vehicles VALUES(NULL,?,?,?,?,?,?,?,?,0)",
            [req.body.trademark, req.body.model, req.body.image, req.body.logo, wheels, req.body.type, req.body.cylinders, req.body.color],
            (err, rows) => res.json(rows)
        );
    })
