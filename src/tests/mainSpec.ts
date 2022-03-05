import chai from 'chai';
import chaiHttp from 'chai-http';
import { SuperAgentRequest } from 'superagent';

chai.use(chaiHttp)

const expect = chai.expect
const req    = chai.request('http://localhost:8080/')

it("Server is up and running", async () => {
    const res = await tryCatch(req
      .get('')
    )
    expect(res).to.have.status(200)
  })

it("should fail without parameters", async () => {
    const res = await tryCatch(req
      .get('resize')
    )
    expect(res).to.have.status(500)
  })

  it("should fail with invalid parameters", async () => {
    const res = await tryCatch(req
      .get('resize?image=encenadaport.jpg&width=aa&height=200')
    )
    expect(res).to.have.status(500)
  })

  it("should success with valid inputs", async () => {
    const res = await tryCatch(req
      .get('resize?image=encenadaport.jpg&width=200&height=200')
    )
    expect(res).to.have.status(200)
  })

  async function tryCatch(promise: SuperAgentRequest) {
    try { return await promise }
    catch(e) { return e }
  }
