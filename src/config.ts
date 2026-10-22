// Centrale instellingen. Pas hier naam, contactgegevens en navigatie aan;
// de rest van de site leest deze waarden uit.
export const site = {
  name: 'Bestuurskundig Leerhuis',
  // De persoon achter het leerhuis (pagina Over)
  eigenaar: 'Alidia Bosma',
  tagline: 'AI-geletterdheid & algoritmisch bestuur',
  description:
    'Trainingen in AI-geletterdheid en algoritmisch bestuur voor overheden en semi-publieke organisaties.',
  email: 'info@example.nl',
  phone: '',
  kvk: '',
  btw: '',
  crkbo: '',
  // Adres van de formulierdienst (bijv. Formspree/Netlify). Leeg = nog niet gekoppeld.
  formAction: '',
};

export const nav = [
  { label: 'Aanbod', href: 'aanbod/' },
  { label: 'Visie', href: 'visie/' },
  { label: 'Werkwijze', href: 'werkwijze/' },
  { label: 'Over', href: 'over/' },
  { label: 'Contact', href: 'contact/' },
];
