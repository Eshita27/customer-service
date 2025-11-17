import { PrismaClient, Channel } from '@prisma/client';
import { Tier, Gender } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const customers = [
    {
      firstName: 'Aarav',
      lastName: 'Mehta',
      email: 'aarav@example.com',
      gender: Gender.MALE,
      customerTier: Tier.ENTERPRISE,
      channel: Channel.B2B,
      dob: new Date('1990-05-15'),
      favoriteFlavors: ['vanilla', 'chocolate'],
      companyName: 'Tech Solutions',
      contactPerson: 'Ravi Mehta',
      communication: 'email'
    },
    {
      firstName: 'Isha',
      lastName: 'Reddy',
      email: 'isha@example.com',
      gender: Gender.FEMALE,
      customerTier: Tier.BASIC,
      channel: Channel.B2C,
      dob: new Date('1995-08-22'),
      favoriteFlavors: ['strawberry'],
      communication : 'phone'
    },
    // Add more sample customers as needed
  ];

  for (const customer of customers) {
    await prisma.customer.create({ data: customer });
  }

  console.log('✅ Seeded customer data');
}

seed()
  .catch((e) => {
    console.error('❌ Error seeding customers:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });