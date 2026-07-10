import { BusinessCard } from '@/types/card';

/**
 * Build a vCard 3.0 payload from a business card. Encoding this in the QR
 * code lets any phone camera save the contact directly, with no backend.
 */
export function buildVCard(card: BusinessCard): string {
  const [firstName, ...rest] = card.fullName.split(' ');
  const lastName = rest.join(' ');

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeValue(lastName)};${escapeValue(firstName)};;;`,
    `FN:${escapeValue(card.fullName)}`,
    card.company && `ORG:${escapeValue(card.company)}`,
    card.jobTitle && `TITLE:${escapeValue(card.jobTitle)}`,
    card.email && `EMAIL;TYPE=WORK:${escapeValue(card.email)}`,
    card.phone && `TEL;TYPE=CELL:${escapeValue(card.phone)}`,
    card.website && `URL:${escapeValue(normalizeUrl(card.website))}`,
    'END:VCARD',
  ];

  return lines.filter(Boolean).join('\n');
}

function escapeValue(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/[,;]/g, (m) => `\\${m}`);
}

function normalizeUrl(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}
