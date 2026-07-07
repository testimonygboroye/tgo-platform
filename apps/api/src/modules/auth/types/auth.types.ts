export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}
