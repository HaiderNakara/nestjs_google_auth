import { PassportStrategy } from "@nestjs/passport";


import { Strategy, VerifyCallback } from "passport-google-oauth20";

import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      scope: ["profile", "email"],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
    try {
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
       accessToken,
       refreshToken
      };
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
  }
