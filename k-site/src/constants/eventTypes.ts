/**
 * Event Data Type Definitions
 * Single source of truth for event data structure
 */

export interface EventDetail {
  title: string;
  description: string;
  participation: string;
  rounds: string[];
  rules: string[];
  prize: string[];
  schedule: string[];
  contact: string[];
  image?: string; // Path to event image in assets
  registrationLink?: string; // Event-specific registration link
}

export interface EventCategory {
  label: string;
  description: string;
  events: string[];
}

export type EventDetailsRecord = Record<string, EventDetail>;
export type EventCategoriesRecord = Record<string, EventCategory>;
