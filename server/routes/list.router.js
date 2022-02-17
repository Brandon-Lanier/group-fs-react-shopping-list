const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
  // Get all of the treats from the database
  const sqlText = `SELECT * FROM list`;
  pool.query(sqlText)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

router.post('/', (req, res) => {
  const newStudent = req.body.github_name;
  const sqlText = `INSERT INTO "list" (name, quantity, unit) VALUES ($1, $2, $3)`;

  pool.query(sqlText, [])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

// // DELETE 
// router.delete('/:id', (req, res) => {
//   let reqId = req.params.id;
//   let queryText = 'DELETE FROM "list" WHERE "id" = $1;';
//   pool.query(queryText, [reqId])
//     .then ((result) => {
//         console.log('grocery item deleted');
//         res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.log('Error making database query', queryText, error);
//         res.sendStatus(500)
//     });
// })


module.exports = router;