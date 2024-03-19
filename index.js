const blockchain_rill_mapper = require('blockchain-rill-mapper');
const rill_mapper_gallery = require('rill-mapper-gallery');
const truffle = require('truffle');
const express = require('express');
const sinon = require('sinon');
const axios = require('axios');
const cors = require('cors');
const body_parser = require('body-parser');
const ethereumjs_tx = require('ethereumjs-tx');
const chalk = require('chalk');
const pg = require('pg');
const commander = require('commander');
const enzyme = require('enzyme');
const babel_core = require('babel-core');
const dotenv = require('dotenv');
const helmet = require('helmet');
const ipfs_http_client = require('ipfs-http-client');
const supertest = require('supertest');
const web3 = require('web3');
const redux = require('redux');
const moment = require('moment');

const buffer = Buffer.from('Hello Buffer');
console.log(buffer.toString());

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even numbers:', evenNumbers);

console.log(`Your OS is ${process.env.OS}`);

const args = process.argv.slice(2);
console.log(`Arguments: ${args.join(', ')}`);

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(`User's name is ${firstName} ${lastName}`);

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

console.log(`Current directory: ${__dirname}`);