export class DetailsAbout {
  name: string;
  occupations: string[];
  text: string;
}

export class DetailsSocialMedia {
  url: string;
  iconClass: string;
  tooltip: string;
}

export class DetailsOfficeAddress {
  label: string;
  link: string;
}

export class DetailsContact {
  email: string;
  socialMedia: DetailsSocialMedia[];
  officeAddress: DetailsOfficeAddress;
  address: string[];
}

export class Details {
  about: DetailsAbout;
  contact: DetailsContact;
}
