## Setup steps

1. Run the following command

```
npx auth secret
```

2. This will generate an `AUTH_SECRET` inside the `.env` file, create a `.env.local` file and move the line with the secret over to it. While you're at it copy over the two `ZITADEL_CLIENT_*` lines over, you'll need them later.

3. Install the project dependencies

```
yarn install
```

4. Go to the SpringBoot project and start up the docker compose

```
docker compose up
```

5. Come back here and start up caddy

```
sudo caddy run
```

6. Add the domains to your `/etc/hosts`

```
127.0.0.1 mail.kindergarten.test
127.0.0.1 kindergarten.test
127.0.0.1 zitadel.kindergarten.test
127.0.0.1 db-web.kindergarten.test
```

7. Follow Zitadel (`zitadel.kindergarten.test`) setup by logging in with the default account (https://zitadel.com/docs/self-hosting/deploy/compose)

User: `zitadel-admin@zitadel.zitadel.kindergarten.test`

Password: `Password1!`

8. Create `Kindergarten` project in zitadel (see next steps section in Zitadel)

9. In that new project create a new application (first button inside the page)

10. Name it `Kindergarten Website`, choose type `Web`, Authentication Method `Code`

11. On the form that now appears: enable development mode, set the redirect URI to `http://kindergarten.test/auth/callback/zitadel` and the post logout URI to `http://kindergarten.test`

12. Copy the ClientId and ClientSecret shown here over to the corresponding lines in the `.env.local`

13. In the project's token settings activate `User roles inside ID Token` and `User Info inside ID Token`

14. Go to `Default Settings` (top-right) -> `SMTP Provider` and add a `Generic SMTP` provider

15. Use `mailhog:1025` for the host and use whatever you want for the remaining fields (it doesn't matter) and click activate on the last step. You should see any email you trigger appear at `mail.kindergarten.test`

16. [Run the project](#running-the-application)

## Running the application

1. Ensure that in this project `sudo caddy run` and in the SpringBoot project `docker compose up` and the project itself are running

2. Start the website

```
yarn run dev
```

## Future improvements?

- Simplify setup by using the official terraform provider
