(() => {
  // aplicando el principio de responsabilidad única
  // priorizar la composicion frente a la herencia

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
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({
      email, 
      role,
    }: UserProperties) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProperties {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({
      lastOpenFolder,
      workingDirectory,
    }: SettingsProperties) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSettings { // composicion antes que la herencia
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({
      birthdate, gender, name,
      email, role,
      lastOpenFolder, workingDirectory,
    }: UserSettingsProperties) {
      this.person = new Person({ birthdate, gender, name });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
      this.user = new User({ email, role });
    }
  }

  const userSettings = new UserSettings({
    name: "Jesus A",
    birthdate: new Date("1984-10-13"),
    gender: "M",
    email: "jesus@google.com",
    role: "Admin",
    lastOpenFolder: "/home",
    workingDirectory: "/usr/home",
  });
  console.log({ userSettings }, userSettings.user.checkCredentials());

  // const person = new Person({
  //   birthdate: new Date("1984-10-13"),
  //   gender: "M",
  //   name: "Jesus",
  // });
  // console.log({ person });

  // const user = new User({
  //   birthdate: new Date("1984-10-13"),
  //   gender: "M",
  //   name: "Jesus",
  //   email: "e@d.com",
  //   role: "User",
  // });
  // console.log({ user }, user.checkCredentials());
})();
