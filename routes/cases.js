// routes/cases.js
const express = require('express');
const router = express.Router();
const connection = require('../db'); // Import your database connection module

// Define a route for rendering the form for adding an officer
router.get('/add-officer', (req, res) => {
  res.render('addOfficer.ejs'); // This line specifies the EJS template to render
});

// Define the route for handling the POST request to add an officer
router.post('/add-officer', (req, res) => {
  // Extract officer details from the request body
  const { ad, soyad, rutbe, rozetNumarasi, iletisimNumarasi } = req.body;

  // Prepare the SQL query to insert the officer into the Memurlar table
  const sql = 'INSERT INTO Memurlar (Ad, Soyad, Rutbe, RozetNumarasi, IletisimNumarasi) VALUES (?, ?, ?, ?, ?)';

  // Execute the query with the officer details
  connection.query(sql, [ad, soyad, rutbe, rozetNumarasi, iletisimNumarasi], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error'); // Send an error response if the query fails
    } else {
      // Officer added successfully
      console.log('Officer added successfully!');
      res.send('Officer added successfully!'); // Send a success response
    }
  });
});



router.get('/add-case', (req, res) => {
  res.render('addCase'); // This line specifies the EJS template to render
});

// Define the route for handling the POST request to add a case
router.post('/add-case', (req, res) => {
  // Extract case details from the request body
  const { vakaNumarasi, vakaTipi, vakaTanimi, vakaDurumu, memurID } = req.body;

  // Prepare the SQL query to insert the case into the Vakalar table
  const sql = 'INSERT INTO Vakalar (VakaNumarasi, VakaTipi, VakaTanimi, VakaDurumu, MemurID) VALUES (?, ?, ?, ?, ?)';

  // Execute the query with the case details
  connection.query(sql, [vakaNumarasi, vakaTipi, vakaTanimi, vakaDurumu, memurID], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error'); // Send an error response if the query fails
    } else {
      // Case added successfully
      console.log('Case added successfully!');
      res.send('Case added successfully!'); // Send a success response
    }
  });
});



router.get('/add-evidence', (req, res) => {
  res.render('addEvidence'); // This line specifies the EJS template to render
});

// Define the route for handling the POST request to add a case
router.post('/add-evidence', (req, res) => {
  // Extract case details from the request body
  const { VakaID, Tanimi, Tipi, DepolamaYeri } = req.body;

  // Prepare the SQL query to insert the case into the Vakalar table
  const sql = 'INSERT INTO Kanitlar (VakaID, Tanimi, Tipi, DepolamaYeri ) VALUES (?, ?, ?, ?)';

  // Execute the query with the case details
  connection.query(sql, [VakaID, Tanimi, Tipi, DepolamaYeri], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error'); // Send an error response if the query fails
    } else {
      // Case added successfully
      console.log('Evidence added successfully!');
      res.send('Evidence added successfully!'); // Send a success response
    }
  });
});




router.get('/add-witness', (req, res) => {
    res.render('addWitness'); // This line specifies the EJS template to render
});

// Define the route for handling the POST request to add a witness
router.post('/add-witness', (req, res) => {
    // Extract witness details from the request body
    const { VakaID, Ad, Soyad, DogumGunu, Adres } = req.body;

    // Prepare the SQL query to insert the witness into the Taniklar table
    const sql = 'INSERT INTO Taniklar (VakaID, Ad, Soyad, DogumGunu, Adres) VALUES (?, ?, ?, ?, ?)';

    // Execute the query with the witness details
    connection.query(sql, [VakaID, Ad, Soyad, DogumGunu, Adres], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error'); // Send an error response if the query fails
        } else {
            // Witness added successfully
            console.log('Witness added successfully!');
            res.send('Witness added successfully!'); // Send a success response
        }
    });
});




// routes/cases.js

// ...

// Define the route for rendering the form for adding a victim
router.get('/add-victim', (req, res) => {
    res.render('addVictim'); // This line specifies the EJS template to render
});

// Define the route for handling the POST request to add a victim
router.post('/add-victim', (req, res) => {
    // Extract victim details from the request body
    const { VakaID, Ad, Soyad, DogumGunu, Adres } = req.body;

    // Prepare the SQL query to insert the victim into the Kurbanlar table
    const sql = 'INSERT INTO Kurbanlar (VakaID, Ad, Soyad, DogumGunu, Adres) VALUES (?, ?, ?, ?, ?)';

    // Execute the query with the victim details
    connection.query(sql, [VakaID, Ad, Soyad, DogumGunu, Adres], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error'); // Send an error response if the query fails
        } else {
            // Victim added successfully
            console.log('Victim added successfully!');
            res.send('Victim added successfully!'); // Send a success response
        }
    });
});



// routes/cases.js

// ...

// Define the route for rendering the form for adding a suspect
router.get('/add-suspect', (req, res) => {
    res.render('addSuspect'); // This line specifies the EJS template to render
});

// Define the route for handling the POST request to add a suspect
router.post('/add-suspect', (req, res) => {
    // Extract suspect details from the request body
    const { VakaID, Ad, Soyad, DogumGunu, Adres } = req.body;

    // Prepare the SQL query to insert the suspect into the Supheliler table
    const sql = 'INSERT INTO Supheliler (VakaID, Ad, Soyad, DogumGunu, Adres) VALUES (?, ?, ?, ?, ?)';

    // Execute the query with the suspect details
    connection.query(sql, [VakaID, Ad, Soyad, DogumGunu, Adres], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error'); // Send an error response if the query fails
        } else {
            // Suspect added successfully
            console.log('Suspect added successfully!');
            res.send('Suspect added successfully!'); // Send a success response
        }
    });
});

// ...







// Handle GET request to show the update form
router.get('/update/:id', (req, res) => {
  const vakaID = req.params.id;
  // Fetch case details from the database based on vakaID
  connection.query('SELECT * FROM Vakalar WHERE VakaID = ?', [vakaID], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      // Render the update form with the fetched data
      res.render('updateCase', { caseData: results[0] });
    }
  });
});

// Handle POST request to update the case
router.post('/update/:id', (req, res) => {
  const vakaID = req.params.id;
  const { vakaNumarasi, vakaTipi, vakaTanimi, vakaDurumu, memurID } = req.body;
  // Call the VakaDetayGuncelle procedure with the provided data
  connection.query(
    'CALL VakaDetayGuncelle(?, ?, ?, ?, ?, ?)',
    [vakaID, vakaNumarasi, vakaTipi, vakaTanimi, vakaDurumu, memurID],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        // Redirect to the case details page or any desired location
        res.redirect('/cases/details/' + vakaID);
      }
    }
  );
});



router.get('/delete/:id', (req, res) => {
  const vakaID = req.params.id;
  res.render('delete', { vakaID }); // Render the delete form with the case ID
});

// Handle POST request to delete the case
router.post('/delete/:id', (req, res) => {
  const vakaID = req.params.id;
  // Call the VakaSil procedure with the provided vakaID
  connection.query('CALL VakaSil(?)', [vakaID], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      // Redirect to the case listing page or any desired location
      res.redirect('/cases');
    }
  });
});



// ...
module.exports = router;
