const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.articleCategory.createMany({
      data: [
        { name: 'top' },
        { name: 'sports' }, 
        { name: 'politics' },
        { name: 'science' },
        { name: 'business' },
        { name: 'food' },
        { name: 'world' },
        { name: 'tourism' },
        { name: 'entertainment' },
        { name: 'environment' },
        { name: 'technology' },
        { name: 'health' },
      ],
    });

  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();