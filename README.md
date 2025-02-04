# HNG-STAGE1-TASK (Node.js)

## Task Description
Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## Requirements
 Must be deployed to a publicly accessible endpoint,
 Must handle CORS (Cross-Origin Resource Sharing),
 Must return responses in JSON format

## Resources
 Fun fact API: http://numbersapi.com/#42,
 
https://en.wikipedia.org/wiki/Parity_(mathematics)


## Documentation

**Base URL**: `https://hng-stage0-task-tdv5.onrender.com`

### Main Endpoint
**GET <your-domain.com>/api/classify-number?number=371**
```json
Response:
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "armstrong",
    "odd"
  ],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
},

```


## Local Dev - Setup instructions

### 1. Clone repo - On Terminal(Bash):

```
git clone https://github.com/AyomideHub/HNG-STAGE1-TASK.git
cd repo
```
### 2. Install dependencies/modules:
```
npm install
```

### 3. Start dev server:
```
npm run dev
```