const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();


async function main() {
  try {
    await db.articleCountry.createMany({
      data: [
    { id: 'AF', name: 'Afrikaans' },
    { id: 'AL', name: 'Albanian' },
    { id: 'AM', name: 'Amharic' },
    { id: 'AR', name: 'Arabic' },
    { id: 'AM', name: 'Armenian' },
    { id: 'AS', name: 'Assamese' },
    { id: 'AZ', name: 'Azerbaijani' },
    { id: 'BS', name: 'Basque' },
    { id: 'BY', name: 'Belarusian' },
    { id: 'BG', name: 'Bengali' },
    { id: 'BA', name: 'Bosnian' },
    { id: 'BG', name: 'Bulgarian' },
    { id: 'BM', name: 'Burmese' },
    { id: 'CA', name: 'Catalan' },
    { id: 'CK', name: 'Central Kurdish' },
    { id: 'CN', name: 'Chinese' },
    { id: 'HR', name: 'Croatian' },
    { id: 'CZ', name: 'Czech' },
    { id: 'DK', name: 'Danish' },
    { id: 'NL', name: 'Dutch' },
    { id: 'EN', name: 'English' },
    { id: 'ET', name: 'Estonian' },
    { id: 'PH', name: 'Filipino' },
    { id: 'FI', name: 'Finnish' },
    { id: 'FR', name: 'French' },
    { id: 'GE', name: 'Georgian' },
    { id: 'DE', name: 'German' },
    { id: 'GR', name: 'Greek' },
    { id: 'GU', name: 'Gujarati' },
    { id: 'HE', name: 'Hebrew' },
    { id: 'HI', name: 'Hindi' },
    { id: 'HU', name: 'Hungarian' },
    { id: 'IS', name: 'Icelandic' },
    { id: 'ID', name: 'Indonesian' },
    { id: 'IT', name: 'Italian' },
    { id: 'JA', name: 'Japanese' },
    { id: 'KA', name: 'Kannada' },
    { id: 'KM', name: 'Khmer' },
    { id: 'RW', name: 'Kinyarwanda' },
    { id: 'KO', name: 'Korean' },
    { id: 'LV', name: 'Latvian' },
    { id: 'LT', name: 'Lithuanian' },
    { id: 'LU', name: 'Luxembourgish' },
    { id: 'MK', name: 'Macedonian' },
    { id: 'MY', name: 'Malay' },
    { id: 'ML', name: 'Malayalam' },
    { id: 'MT', name: 'Maltese' },
    { id: 'MA', name: 'Maori' },
    { id: 'MR', name: 'Marathi' },
    { id: 'MN', name: 'Mongolian' },
    { id: 'NE', name: 'Nepali' },
    { id: 'NO', name: 'Norwegian' },
    { id: 'OR', name: 'Oriya' },
    { id: 'PS', name: 'Pashto' },
    { id: 'FA', name: 'Persian' },
    { id: 'PL', name: 'Polish' },
    { id: 'PT', name: 'Portuguese' },
    { id: 'PU', name: 'Punjabi' },
    { id: 'RO', name: 'Romanian' },
    { id: 'RU', name: 'Russian' },
    { id: 'SA', name: 'Samoan' },
    { id: 'SE', name: 'Serbian' },
    { id: 'SH', name: 'Shona' },
    { id: 'SI', name: 'Sinhala' },
    { id: 'SK', name: 'Slovak' },
    { id: 'SL', name: 'Slovenian' },
    { id: 'SO', name: 'Somali' },
    { id: 'ES', name: 'Spanish' },
    { id: 'SW', name: 'Swahili' },
    { id: 'SW', name: 'Swedish' },
    { id: 'TA', name: 'Tajik' },
    { id: 'TA', name: 'Tamil' },
    { id: 'TE', name: 'Telugu' },
    { id: 'TH', name: 'Thai' },
    { id: 'TR', name: 'Turkish' },
    { id: 'TK', name: 'Turkmen' },
    { id: 'UK', name: 'Ukrainian' },
    { id: 'UR', name: 'Urdu' },
    { id: 'UZ', name: 'Uzbek' },
    { id: 'VI', name: 'Vietnamese' },
    { id: 'WA', name: 'Welsh' },
      ],skipDuplicates: true
    });

  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();