// Elke trainingssoort krijgt één vorm uit de tegelcompositie op de homepage, in dezelfde kleur.
// `vlak` is de lichte achtergrond bovenaan de trainingspagina.
export const themaKleur: Record<string, { vlak: string; accent: string; vorm: string }> = {
  'Basistraining': { vlak: 'var(--perzik)', accent: 'var(--oker)', vorm: '100% 0 0 0' },
  'Verdieping voor adviseurs': { vlak: 'var(--salie)', accent: 'var(--ink)', vorm: '0 0 100% 0' },
  'Voor leidinggevenden': { vlak: 'var(--hemel)', accent: 'var(--denim)', vorm: '50%' },
};
