import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // 1. Admin
  const adminEmail = 'admin@qantara.com';
  const adminPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: adminPassword,
      firstName: 'System',
      lastName: 'Administrator',
      role: 'ADMIN',
    },
  });
  console.log(`✅ Admin user created/verified: ${admin.email}`);

  // 2. Sample Clients
  const clients = [
    { email: 'youssef.alaoui@example.com', firstName: 'Youssef', lastName: 'Alaoui', pass: 'client123' },
    { email: 'sarah.bennani@example.com', firstName: 'Sarah', lastName: 'Bennani', pass: 'client123' },
    { email: 'mehdi.chraibi@example.com', firstName: 'Mehdi', lastName: 'Chraibi', pass: 'client123' },
    { email: 'fatima.zahra@example.com', firstName: 'Fatima', lastName: 'Zahra', pass: 'client123' },
  ];

  for (const c of clients) {
    const hashed = await bcrypt.hash(c.pass, 10);
    const user = await prisma.user.upsert({
      where: { email: c.email },
      update: {},
      create: {
        email: c.email,
        password: hashed,
        firstName: c.firstName,
        lastName: c.lastName,
        role: 'USER',
      },
    });
    console.log(`✅ Sample Client created: ${user.email}`);

    // Create a mock account for each client if they don't have one
    const accounts = await prisma.account.findMany({ where: { userId: user.id } });
    if (accounts.length === 0) {
      const account = await prisma.account.create({
        data: {
          userId: user.id,
          type: 'CHECKING',
          balance: Math.floor(Math.random() * 50000) + 5000,
          currency: 'MAD',
        }
      });
      // Create a few mock transactions
      await prisma.transaction.create({
        data: {
          accountId: account.id,
          amount: 1500,
          type: 'CREDIT',
          category: 'Salary',
          description: 'Monthly Salary'
        }
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
