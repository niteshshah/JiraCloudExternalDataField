# Jira Cloud IP Address Custom Field

This Forge app provides a custom field that accepts IPv4 or IPv6 addresses. The field is rendered natively and validates the input using Node's networking utilities.

## Files
- `manifest.yml` – Forge manifest describing the custom field and validation function.
- `src/index.js` – Contains the `validateIp` function used to validate the custom field value.

## Usage
Deploy the app with the Forge CLI and add the `IP Address` custom field to your Jira issues. Values that are not valid IP addresses will be rejected on submission.
