const {
  randomBytes,
} = await import("node:crypto");

export const generateNonce = () => {
  // Generate 16 bytes of cryptographically secure random data.
  const nonceValue = randomBytes(16);

  // Convert the random bytes to a base64url-encoded string.
  return nonceValue.toString("base64url");
};
