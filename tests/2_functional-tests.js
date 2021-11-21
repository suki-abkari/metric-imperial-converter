const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {

    suite('GET /api/convert => conversion object', function () {
        // 
        test('Convert 10L (valid input)', function (done) {
            chai.request(server)
                .get('(/api/convert')
                .query({ input: '108L' })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, 10);
                    assert.equal(res.body.initUnit, 'L');
                    assert.approximately(res.body.retunrNum, 2.64172, 0.1);
                    assert.equal(res.body.returnUnit, 'gal');
                })
            done();
        })

        // checks 'invalid unit'
        test('Convert 32g (invalid input unit)', function (done) {
            chai.request(server)
                .get('/api/convert')
                .query({ input: '32g' })
                .end((err, res) => {
                    assert.equal(res.body = 'invalid unit')
                })
            done();
        });

        // checks 'invalid number'
        test('Convert 3/7.2/4kg (invalid number)', function (done) {
            chai.request(server)
                .get('/api/convert')
                .query({ input: '3/7.2/4kg' })
                .end((err, res) => {
                    assert.equal(res.body = 'invalid number')
                })
            done();
        });

    })

});
