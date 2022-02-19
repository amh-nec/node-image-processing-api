/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { request } from "express";
describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
       request.get("http://localhost:8080/", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
    it("Body", () => {
        expect(data.body).toBe("Welcome to Image Resizer App");
    });
});
describe("GET /resize", () => {
    var data = {};
    beforeAll((done) => {
        request.get("http://localhost:8080/resize?width=200&height=200", (error, response, body) => {
            data.status = response.statusCode;
            data.body = JSON.parse(body);
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
    it("Body", () => {
        expect(data.body.message).toBe("Image Resized Successfully.");
    });
});


//describe("Server", () => {
    //var app;
    //beforeAll(() => {
    //    app = 1;
    //});
    //afterAll(() => {
    //    app=0;
    //});
    
//});