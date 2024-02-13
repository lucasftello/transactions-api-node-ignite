import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.SERVER_PORT,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
  .catch((error) => {
    console.log(error)
  })
