import { config } from 'config';

export const API = {
  companies: () => `${config.baseUrl}/companies`,
  lookupsSpecialities: () => `${config.baseUrl}/lookups/specialities`,
  lookupsCities: () => `${config.baseUrl}/lookups/cities`,
};