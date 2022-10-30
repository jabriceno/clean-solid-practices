(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProperties {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthdate, gender, name }: PersonProperties) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProperties {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({
      birthdate,
      email, 
      gender,
      name,
      role,
    }: UserProperties) {
      super({ birthdate, gender, name });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProperties {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProperties) {
      super({ birthdate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1984-10-13"),
    email: "jesus@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Jesus",
    role: "Admin",
    workingDirectory: "/usr/home",
  });
  console.log({ userSettings }, userSettings.checkCredentials());

  const person = new Person({
    birthdate: new Date("1984-10-13"),
    gender: "M",
    name: "Jesus",
  });
  console.log({ person });

  const user = new User({
    birthdate: new Date("1984-10-13"),
    gender: "M",
    name: "Jesus",
    email: "e@d.com",
    role: "User",
  });
  console.log({ user }, user.checkCredentials());
})();
