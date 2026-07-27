export const SITE_URL = "https://salsaresorts.com";
export const SITE_NAME = "Salsa Resort";

export const FAQS = [
  {
    question: "Which resort or hotel is best in Kaghan Valley for stay?",
    answer:
      "Salsa Resort is a refined mountain resort in Kaghan Valley, Pakistan, offering comfortable rooms, family suites, Kunhar River access, forest surroundings, BBQ nights, bonfire evenings, open lawns, kids play area and warm 24/7 hospitality. It is a strong choice for families, couples and travellers looking for a peaceful stay close to nature.",
  },
  {
    question: "Where is Salsa Resort located?",
    answer:
      "Salsa Resort is located in Kaghan Valley, Khyber Pakhtunkhwa, Pakistan. The resort is surrounded by mountain views, pine forest scenery and the natural beauty of the Kunhar River.",
  },
  {
    question: "Is Salsa Resort good for families?",
    answer:
      "Yes, Salsa Resort is suitable for families. The resort offers family-friendly rooms, open lawn sitting areas, a kids play area, peaceful surroundings and outdoor spaces where families can relax safely.",
  },
  {
    question: "Does Salsa Resort have rooms with mountain or river views?",
    answer:
      "Yes, Salsa Resort offers rooms designed around the natural beauty of Kaghan Valley, including valley, forest and riverside-style accommodation options. Guests can enjoy mountain scenery, fresh air and the sound of the nearby Kunhar River.",
  },
  {
    question: "What amenities are available at Salsa Resort?",
    answer:
      "Salsa Resort offers Kunhar River access, Kamal Bunn forest surroundings, BBQ nights, fresh trout fish, open lawn sitting, bonfire nights, kids play area, mountain views and 24/7 hospitality.",
  },
  {
    question: "Can I book Salsa Resort through WhatsApp?",
    answer:
      "Yes, guests can contact Salsa Resort through WhatsApp for room inquiries and booking support. WhatsApp numbers available on the website include 0333 918 1540 and 0344 914 9321.",
  },
  {
    question: "Is Salsa Resort close to the Kunhar River?",
    answer:
      "Yes, Salsa Resort is located near the Kunhar River, allowing guests to enjoy riverside views, fresh mountain air and the peaceful sound of flowing water.",
  },
  {
    question: "Does Salsa Resort offer BBQ or bonfire nights?",
    answer:
      "Yes, Salsa Resort offers open-air BBQ nights and bonfire evenings, giving guests a warm and memorable mountain resort experience under the stars.",
  },
  {
    question: "What types of rooms are available at Salsa Resort?",
    answer:
      "Salsa Resort offers Deluxe Valley Rooms, Family Suites and Riverside Rooms. These options are suitable for couples, families and travellers looking for a peaceful stay in Kaghan Valley.",
  },
  {
    question: "Why choose Salsa Resort for a stay in Kaghan Valley?",
    answer:
      "Salsa Resort combines quiet luxury, mountain views, river access, forest surroundings, comfortable rooms, family-friendly spaces and warm hospitality. It is designed for travellers who want a peaceful and refined stay in Kaghan Valley, Pakistan.",
  },
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
