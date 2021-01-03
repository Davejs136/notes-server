declare namespace Notes {
  interface TimeStap {
    createdAt: Date;
    updatedAt: Date;
  }

  namespace Users {
    interface User extends TimeStap {
      firstname: string;
      lastname?: string;
      username: string;
      email: string;
      password: string;
      repeatPassword: string;
    }

    interface UserDocument extends User {
      encryptPassword(password: string): string;
      comparePassword(password: string): boolean;
    }
  }

  namespace Auth {
    type Decoded = {
      id: string;
    }
  }
}