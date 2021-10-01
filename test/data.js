process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Data = require('../model/data');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Data', () => {
    beforeEach((done) => { //Before each test we empty the database
        Data.remove({}, (err) => {
            done();
        });
    });
    /*
      * Test the /GET route
      */
    describe('/GET Data', () => {
        it('it should GET all the datas', (done) => {
            chai.request(server)
                .get('/data/getData')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });

        it('it should not return all the datas', (done) => {
            chai.request(server)
                .get('/data/getDatas')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/save Data', () => {
        it('it should save data object', (done) => {
            chai.request(server)
                .post('/data/postData')
                .send({ input1: 10, input2: 20, result: 200 })
                .end((err, res) => {
                    console.log('rwsponse', res.body);
                    res.should.have.status(200);
                    done();
                });
        });

        it('it should not call the api', (done) => {
            chai.request(server)
                .get('/data/postDatas')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

});
