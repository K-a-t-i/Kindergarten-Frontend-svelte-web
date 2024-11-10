import ZitadelProvider from "@auth/core/providers/zitadel";
import { SvelteKitAuth } from "@auth/sveltekit";
import type { JwtCallbackParams, Metadata, SessionParams } from "./types/auth";

// Define Zitadel and OAuth configuration constants
const ISSUER_URL = "https://kindergarten-zmfpl7.us1.zitadel.cloud";
const CLIENT_ID = "292201069776322514";
const CLIENT_SECRET = "VvkVhU8NVbtm0ouITzPfQKfCwbKvqbGDYotgdbkUNtWM0S2XAgj5H3lxP56EaslW"; // Ensure this is correctly set
const SCOPE = "openid profile email";
const POST_LOGOUT_REDIRECT_URI = "https://kindergarten-frontend-svelte.vercel.app";
const RESPONSE_TYPE = "code";
const RESPONSE_MODE = "query";
const CODE_CHALLENGE_METHOD = "S256";

export const { handle, signIn } = SvelteKitAuth({
  providers: [
    ZitadelProvider({
      issuer: ISSUER_URL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      authorization: {
        params: {
          scope: SCOPE,
          response_type: RESPONSE_TYPE,
          response_mode: RESPONSE_MODE,
          code_challenge_method: CODE_CHALLENGE_METHOD,
          post_logout_redirect_uri: POST_LOGOUT_REDIRECT_URI
        }
      },
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          loginName: profile.preferred_username,
          image: profile.picture,
          accessToken: profile.access_token,
        };
      }
    })
  ],
  secret: "zhvL3CFJyYlXIjaHL6VBWHfh3zdjurBH6tvkkwW/C/0=", // Replace with actual secret if needed
  trustHost: true,
  callbacks: {
    async jwt({ token, user, account }: JwtCallbackParams) {
      if (account) {
        token.id = account.providerAccountId;
        token.accessToken = account.access_token;
      }
      if (user) {
        token.roles = user.roles;
        token.metadata = user.metadata;
      }
      return token;
    },
    async session({ session, token }: SessionParams) {
      session.accessToken = token.accessToken as string;
      if (session.user) {
        session.user.roles = token.roles as string[];
        session.user.metadata = token.metadata as Metadata;
      }
      return session;
    }
  }
});

//          redirect_uri: "https://kindergarten-frontend-svelte.vercel.app/auth/callback/zitadel",
