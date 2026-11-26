// Elke trainingssoort krijgt een eigen lichte achtergrond en een eigen stand van de zon bij het huisje
// uit het logo (zie Huisje.astro).
export const themaKleur: Record<string, { vlak: string; zon: 'laag' | 'midden' | 'hoog' }> = {
  'Basistraining': { vlak: 'var(--perzik)', zon: 'laag' },
  'Verdieping voor adviseurs': { vlak: 'var(--salie)', zon: 'midden' },
  'Voor leidinggevenden': { vlak: 'var(--hemel)', zon: 'hoog' },
};
