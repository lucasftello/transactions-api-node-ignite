import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.SERVER_PORT,
    host: 'RENDER' in process.env ? `0.0.0.0` : `localhost`,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
  .catch((error) => {
    console.log(error)
  })
