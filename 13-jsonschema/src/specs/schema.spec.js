import expect from "../libs/expect.js"

describe('SCHEMA COBA COBA', function () {

	it('coba primitif type', function () {
		const nama = "bambang"

		const schema = { type: "string" }

		expect(nama).to.be.jsonSchema(schema)
	})


	it('coba tipe object', function () {
		const todo = {
			id: 1,
			title: 'bermain tic tac toe',
			completed: false
		}

		const schema = {
			type: 'object',
			properties: {
				id: { type: 'number' },
				title: { type: 'string' },
				completed: { type: 'boolean' },
			}
		}

		expect(todo).to.be.jsonSchema(schema)
	})
})