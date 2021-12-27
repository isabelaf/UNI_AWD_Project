export class DetailsAbout {
  name: string;
  occupation: string;
  text: string;
}

export class DetailsSocialMedia {
  url: string;
  iconClass: string;
  tooltip: string;
}

export class DetailsContact {
  socialMedia: DetailsSocialMedia[];
  address: string[];
}

export class Details {
  about: DetailsAbout;
  contact: DetailsContact;
}
