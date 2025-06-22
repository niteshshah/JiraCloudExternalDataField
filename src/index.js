import { isIP } from 'node:net';

export async function validateIp(value) {
  if (!value) {
    return { isValid: true };
  }
  if (isIP(value)) {
    return { isValid: true };
  }
  return { isValid: false, errorMessage: 'Invalid IP address' };
}
