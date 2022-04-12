import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  googleLogin(req :any) {
  if(!req.user) {
    throw new UnauthorizedException();
  }
  return req.user;
  }
  
}
