/**
 * Utility functions for parsing and rendering contact information
 */

export interface ParsedContact {
  type: 'phone' | 'email' | 'name';
  value: string;
  displayText: string;
}

/**
 * Parse a contact string and determine its type (phone, email, or name)
 */
export function parseContact(contact: string): ParsedContact {
  // Check if it's an email (contains @ symbol)
  if (contact.includes('@')) {
    return {
      type: 'email',
      value: contact,
      displayText: contact,
    };
  }

  // Check if it's a phone number (contains digits and optional +, -, spaces)
  const phoneMatch = contact.match(/[\d\s\-+()+]/g);
  if (phoneMatch && phoneMatch.length >= 7) {
    // Extract the phone number
    const phoneNumber = contact.replace(/\D/g, '');
    return {
      type: 'phone',
      value: phoneNumber,
      displayText: contact,
    };
  }

  // Otherwise, treat as a name
  return {
    type: 'name',
    value: contact,
    displayText: contact,
  };
}

/**
 * Get the href value for a parsed contact
 */
export function getContactHref(parsed: ParsedContact): string {
  switch (parsed.type) {
    case 'email':
      return `mailto:${parsed.value}`;
    case 'phone':
      return `tel:+91${parsed.value}`;
    default:
      return '#';
  }
}

/**
 * Check if a contact is linkable (phone or email)
 */
export function isLinkableContact(parsed: ParsedContact): boolean {
  return parsed.type === 'phone' || parsed.type === 'email';
}
