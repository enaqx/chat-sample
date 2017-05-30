#### Chat example

Chat consists of:
  * `chat-server` to serve data
  * `chat-web` web client server
  * `chat-mobile` mobile app

First you need to run `chat-server`:
  * Install Node. For your convenience use [nvm](https://github.com/creationix/nvm#installation).
  * Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
  * Proceed to `chat-server` directory
  * Install dependencies: `$ yarn`
  * Build and start app: `$ yarn build:start`

Next you need to start web client server `chat-web`:
  * Proceed to `chat-web` directory
  * Install dependencies: `$ yarn`
  * Then proceed to [http://localhost:3000](http://localhost:3000)
  * Fill new user credential and press `Sign Up`. After you can `Sign Out` and use these credentials to `Log In`.
  * Open in another browser or tab using other credentials and check chat functionality.

You can seamlessly use same functionality through mobile app for iOS and Android
  * Proceed to `chat-mobile` directory
  * Install dependencies: `$ yarn`
  * Start iOS app: `$ yarn ios`
  * You can also start Android app: `$ yarn android` (you need open emulator for this)
  * Use existing user to Log In or create new one for app.

![Screenshot](https://api.monosnap.com/rpc/file/download?id=dKt0Ti8xCedpiD3ptyTvhela7aVMI6)
