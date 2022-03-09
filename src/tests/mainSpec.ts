/* eslint-disable no-var */
import Request from "request";

describe("Server", () => {
    var server: { close: () => void; };
    beforeAll(() => {
        server = require("../main");
    });
    
    describe("GET / Server is up and running", () => {
        var data = {status:200,body:String};
        beforeAll((done) => {
            Request.get("http://localhost:8080/", (error, response, body) => {
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
    describe("GET /resize should success with valid inputs", () => {
        var data = {status:200,body:String};
        beforeAll((done) => {
            Request.get("http://localhost:8080/resize?image=encenadaport.jpg&width=200&height=200", (error, response, body) => {
                data.status = response.statusCode;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });
    describe("GET /resize should fail without parameters", () => {
      var data = {status:200,body:String};
      beforeAll((done) => {
          Request.get("http://localhost:8080/resize", (error, response, body) => {
              data.status = response.statusCode;
              done();
          });
      });
      it("Status 200", () => {
          expect(data.status).toBe(500);
      });
  });
  describe("GET /resize should fail with invalid parameters", () => {
    var data = {status:200,body:String};
    beforeAll((done) => {
        Request.get("http://localhost:8080/resize?image=encenadaport.jpg&width=aa&height=200", (error, response, body) => {
            data.status = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(500);
    });
});
});
