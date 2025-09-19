let idCounter = 0;

export function generateUniqueId(): number {
  return ++idCounter + Date.now();
}

export function generateRandomId(): number {
  return Math.floor(Math.random() * 1000000) + Date.now();
}
