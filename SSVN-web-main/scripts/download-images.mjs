import fs from 'node:fs/promises';
import path from 'node:path';

const images = {
  'award.jpg': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2024/12/IMG-20241214-WA0007-1024x681.jpg',
  'leaders.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2023/06/111.png',
  'music.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2023/06/108-1.png',
  'graduation.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2023/06/graduation-day-8-1.png',
  'sports.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2023/12/2-1.png',
  'science.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2023/12/1-2.png',
  'council.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2023/12/3-1.png',
  'card1.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2024/01/1-1.png',
  'card2.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2024/01/2-1.png',
  'card3.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2024/01/3-1.png',
  'card4.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2024/01/4-1.png',
  'navratri.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2025/01/Screenshot-2025-01-23-130629-300x157.png',
  'christmas.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2025/01/Screenshot-2025-01-23-130539-300x187.png',
  'shirdi-saian.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2025/01/Screenshot-2025-01-23-130433-300x143.png',
  'sankranti.png': 'https://srishirdisaividyaniketan.com/wp-content/uploads/2025/01/Screenshot-2025-01-23-130504-300x147.png'
};

const out = path.resolve('public/images');
await fs.mkdir(out, { recursive: true });
for (const [name, url] of Object.entries(images)) {
  const target = path.join(out, name);
  if (await fs.stat(target).then(() => true).catch(() => false)) {
    console.log(`exists: ${name}`);
    continue;
  }
  console.log(`downloading: ${name}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  await fs.writeFile(target, Buffer.from(await res.arrayBuffer()));
}
console.log('All images downloaded to public/images');
