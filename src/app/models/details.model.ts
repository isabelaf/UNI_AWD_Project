export class ContactSocialMedia {
  url: string;
  iconClass: string;
  tooltip: string;
}

export class ContactOfficeAddress {
  label: string;
  link: string;
}

export class Contact {
  email: string;
  socialMedia: ContactSocialMedia[];
  officeAddress: ContactOfficeAddress;
  address: string[];
}