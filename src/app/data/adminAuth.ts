export interface AdminUser {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
  role: 'admin' | 'super-admin';
  createdAt: number;
  lastLogin?: number;
}

export interface EmailVerification {
  email: string;
  code: string;
  expiresAt: number;
  attempts: number;
}

// Mock admin database (in real app, this would be a database)
export const ADMIN_USERS: AdminUser[] = [
  {
    id: 'admin_001',
    email: 'quynhpvnse182895@fpt.edu.vn',
    name: 'Admin HCM',
    isVerified: true,
    role: 'super-admin',
    createdAt: Date.now() - 86400000, // 1 day ago
    lastLogin: Date.now() - 3600000 // 1 hour ago
  }
];

// Mock email verification storage
export const EMAIL_VERIFICATIONS: Map<string, EmailVerification> = new Map();

// Generate verification code
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Generate admin ID
export function generateAdminId(): string {
  return 'admin_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Send verification email (mock function)
export async function sendVerificationEmail(email: string, code: string): Promise<boolean> {
  // In real app, this would send actual email
  console.log(`📧 Verification email sent to ${email}`);
  console.log(`🔐 Verification code: ${code}`);
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return true;
}

// Verify email code
export function verifyEmailCode(email: string, code: string): boolean {
  const verification = EMAIL_VERIFICATIONS.get(email);
  
  if (!verification) {
    return false;
  }
  
  if (Date.now() > verification.expiresAt) {
    EMAIL_VERIFICATIONS.delete(email);
    return false;
  }
  
  if (verification.attempts >= 3) {
    EMAIL_VERIFICATIONS.delete(email);
    return false;
  }
  
  if (verification.code !== code) {
    verification.attempts++;
    return false;
  }
  
  // Code is correct
  EMAIL_VERIFICATIONS.delete(email);
  return true;
}

// Create verification session
export function createVerificationSession(email: string): string {
  const code = generateVerificationCode();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
  
  EMAIL_VERIFICATIONS.set(email, {
    email,
    code,
    expiresAt,
    attempts: 0
  });
  
  return code;
}

// Check if email is admin
export function isAdminEmail(email: string): boolean {
  return ADMIN_USERS.some(admin => admin.email === email);
}

// Get admin by email
export function getAdminByEmail(email: string): AdminUser | null {
  return ADMIN_USERS.find(admin => admin.email === email) || null;
}

// Create new admin
export function createAdmin(email: string, name: string): AdminUser {
  const admin: AdminUser = {
    id: generateAdminId(),
    email,
    name,
    isVerified: true,
    role: 'admin',
    createdAt: Date.now()
  };
  
  ADMIN_USERS.push(admin);
  return admin;
}

// Update admin last login
export function updateAdminLogin(adminId: string): void {
  const admin = ADMIN_USERS.find(a => a.id === adminId);
  if (admin) {
    admin.lastLogin = Date.now();
  }
}
