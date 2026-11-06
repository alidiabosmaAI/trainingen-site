// Centrale instellingen. Pas hier naam, contactgegevens en navigatie aan;
// de rest van de site leest deze waarden uit.
export const site = {
  name: 'Bestuurskundig Leerhuis',
  // De persoon achter het leerhuis (pagina Over)
  eigenaar: 'Alidia Bosma',
  tagline: 'AI-geletterdheid & algoritmisch bestuur',
  description:
    'Trainingen in AI-geletterdheid en algoritmisch bestuur voor overheden en semi-publieke organisaties.',
  email: 'alidia@bestuurskundigleerhuis.nl',
  phone: '',
  kvk: '',
  btw: '',
  crkbo: '',
  // Optioneel: adres van een formulierdienst (bijv. https://formspree.io/f/...).
  // Leeg = het formulier opent het mailprogramma van de bezoeker met een ingevulde mail.
  // Ingevuld = eerst via de dienst versturen; lukt dat niet, dan alsnog via het mailprogramma.
  formAction: 'https://formspree.io/f/xzeewldo',
};

export const nav = [
  { label: 'Aanbod', href: 'aanbod/' },
  { label: 'Visie', href: 'visie/' },
  { label: 'Werkwijze', href: 'werkwijze/' },
  { label: 'Over', href: 'over/' },
  { label: 'Contact', href: 'contact/' },
];
