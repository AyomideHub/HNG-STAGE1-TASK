const express = require("express");
const cors = require("cors");
const { notFound } = require("./middlwares/notFound");
const { numProperties, digitSum, isPerfect, isPrime } = require('./utilis/index');

const app = express();


app.use(cors());


app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  // if (!Number(number) || !number) {
  //   return res.status(400).json({
  //     number,
  //     error: true,
  //   });
  // }

  if (!number || !/^-?\d+$/.test(number)) {
    return res.status(400).json({
      number: number || "undefined",
      error: true,
    });
  }


  const num = Number(number);

  try {
    const Response = await fetch(`http://numbersapi.com/${num}/math`);
    const funFact = await Response.text();

    const responseObject = {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: numProperties(num),
      digit_sum: digitSum(num),
      fun_fact: funFact,
    };

    //res.set('Cache-Control', 'no-store');

    res.status(200).json(responseObject);

  } catch (error) {

    //console.error("Error fetching fun fact:", error);
    res.status(400).json({
      number,
      error: true,
    });

  }
});

app.use(notFound);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});