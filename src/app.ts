import "reflect-metadata";
import { createConnection } from 'typeorm'
import express from 'express'
import userRouter from './routers/UserRouter'

class App {

	public app: express.Application

	constructor() {
		this.app = express()
		this.app.use(express.json())
		this.routers()
		this.connection()
	}

	routers(): void {
		this.app.use(userRouter)
	}

	connection(): void {
		createConnection().then(connection => {
			console.log('postgres connect')
		}).catch(err => console.log(err))
	}

}

export default new App().app