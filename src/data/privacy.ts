export type PrivacySection = {
  number: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

export const privacySections: PrivacySection[] = [
  {
    number: "01",
    title: "About this policy",
    paragraphs: [
      "Bennett Advisory Ltd (Bennett Advisory, we, us or our) is a New Zealand accounting and trust services practice.",
      "This policy explains how we collect, use, store and protect personal information when you use this website or contact us through it. It should be read alongside any engagement letter or service-specific privacy notice that applies to our work with you.",
      "We handle personal information in accordance with the Privacy Act 2020 and the information privacy principles that apply in New Zealand.",
    ],
  },
  {
    number: "02",
    title: "Information we collect",
    paragraphs: [
      "From this website, we generally collect the information you choose to provide through our contact form or other direct enquiry, such as your name, email address, phone number and the details of your enquiry.",
      "Please do not send passwords, IRD numbers or sensitive financial information through an initial website enquiry. We will ask for information through more appropriate channels when it is needed for an engagement.",
      "Depending on the services we provide, our client records may also include information such as a physical or postal address, company or business details, billing or payment details, date of birth, and information relating to accounting, tax, trusts, estates or other matters. The information collected for an engagement is described or governed by the engagement letter and related communications.",
    ],
  },
  {
    number: "03",
    title: "How we use information",
    paragraphs: [
      "We use personal information to respond to enquiries, understand the assistance you are seeking and communicate with you about a possible or existing engagement.",
      "We also use information to provide and administer accounting, tax and trust services, keep appropriate business records, meet legal or regulatory obligations, protect our systems and improve the way our website works.",
      "We aim to use personal information only for the purpose for which it was collected, a directly related purpose, or another purpose permitted or required by law.",
    ],
  },
  {
    number: "04",
    title: "Cookies and analytics",
    paragraphs: [
      "This website uses cookies and similar technologies. Cookies are small text files stored by your browser that can help a website function and provide information about how it is used.",
      "We use Google Analytics to understand website traffic and improve our website. We also use Meta Pixel to measure website activity and the effectiveness of online communications. These providers may collect technical and usage information through cookies or similar technologies under their own privacy policies.",
      "You can control or delete cookies through your browser settings and use the privacy controls provided by Google and Meta. Disabling cookies or opting out of analytics may affect some website features and the way website activity is measured.",
    ],
  },
  {
    number: "05",
    title: "Sharing and overseas processing",
    paragraphs: [
      "We do not sell personal information. We may disclose it where this is necessary to provide a service, operate our business, comply with the law, protect our rights, or respond to a lawful request.",
      "We use service providers that support our email, website, information technology, analytics, cloud and business systems. Those providers may process personal information on our behalf and may have their own privacy policies.",
      "Our email services are provided through Microsoft. Some service providers may store or process personal information outside New Zealand. We take reasonable steps to ensure that information is handled with appropriate safeguards and in accordance with the Privacy Act 2020.",
    ],
  },
  {
    number: "06",
    title: "Storage and security",
    paragraphs: [
      "Personal information may be stored in our email systems, client relationship systems and other business systems needed to provide our services. We use password protection, restricted staff access and two-factor authentication to help protect the information we hold.",
    ],
  },
  {
    number: "07",
    title: "Retention and deletion",
    paragraphs: [
      "We keep personal information only for as long as it is needed for the lawful purpose for which it was collected, to provide or administer a service, to meet legal or professional obligations, or to resolve a dispute.",
      "When information is no longer required, we take reasonable steps to securely delete it or destroy it. Some records may need to be retained for longer because of legal, accounting, tax or professional requirements.",
    ],
  },
  {
    number: "08",
    title: "Access and correction",
    paragraphs: [
      "You may ask us to confirm whether we hold personal information about you and request access to that information. You may also ask us to correct information that is inaccurate, out of date, incomplete or misleading.",
      "To make a request, email our privacy contact using the details below. We may need to confirm your identity before responding. We will handle requests in accordance with the Privacy Act 2020, including any applicable exceptions.",
    ],
  },
  {
    number: "09",
    title: "Complaints and privacy breaches",
    paragraphs: [
      "If you have a concern about how we have handled your personal information, please contact us first so we can understand and address it.",
      "If a privacy breach occurs and it has caused, or is likely to cause, serious harm, we will assess and respond to it in accordance with the notification requirements of the Privacy Act 2020. This may include notifying affected people and the Office of the Privacy Commissioner where required.",
      "If we cannot resolve your concern, you can contact the Office of the Privacy Commissioner. Before making a complaint there, you should generally raise the concern with us first.",
    ],
  },
];
