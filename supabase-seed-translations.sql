-- KaaiSpots — English Translation Seed Data
-- Run this in the Supabase SQL Editor to populate English translations

INSERT INTO spot_translations (spot_id, language, name, short_desc, long_desc, tips, student_perk, why, student_perk)
VALUES
  (
    'castelao', 'en',
    'Établissement Castelao',
    'Our regular sandwich shop. Baguettes, friendly owner, no fuss.',
    'A tile floor from 1962, a counter full of charcuterie and Madame Castelao who knows every student by name. Student discount (-10%) with your EhB card, and if you ask for "the daily special" she usually gives you something that is not on the menu.',
    'Thursday is daily special day (lasagna). Go early, around 12:30 there is a line.',
    '−10% with EhB card',
    ARRAY[
      'Cheapest hot lunch within 500m radius',
      'Student discount with EhB card',
      '4 min walk from campus',
      'You can ask for Wifi, but it is slow'
    ],
    '−10% with EhB card'
  ),
  (
    'kafka', 'en',
    'Café Kafka',
    'Low light, strong coffee, sockets at every table. Quiet zone until 5pm.',
    'A former bookstore converted into a café. The back room is officially a "quiet zone" until 5pm — laptops welcome, phone calls not. After 5pm the music turns on and it becomes a regular neighborhood café.',
    'Go to the back room for silence. Friday nights sometimes have a vinyl DJ.',
    'First coffee free on your first visit — ask for it',
    ARRAY[
      'Outlet at every table',
      'Wifi password on the board (KAFKA2026)',
      'Coffee stays 1.80 — for years now',
      'Back room is quiet until 5pm'
    ],
    'First coffee free on your first visit — ask for it'
  ),
  (
    'parkvorst', 'en',
    'Park van Vorst',
    'Open grassfield, pond, few tourists. Perfect for a long lunch break.',
    'One of the few Brussels parks where you can still lie on the grass without a police officer saying it is forbidden. Pond with ducks, a dozen beech trees that provide shade, and in summer there is sometimes free film projected on an inflatable screen.',
    'July/August: free outdoor cinema every Thursday evening (from 9:30pm).',
    NULL,
    ARRAY[
      'Completely free',
      'No tourists',
      'Benches with backrest (rare)',
      'Drinking fountain at the main entrance'
    ],
    NULL
  ),
  (
    'abattoir', 'en',
    'Abattoir Market',
    'Friday-Saturday-Sunday. Cheap vegetables, Moroccan bakers, lively.',
    'The largest covered market in Brussels, on the site of a former slaughterhouse. About 150 stalls: vegetables, fish, spices, fabrics, cheap clothes, fresh bread. Do not come here for a table experience — come to take food home or eat a msemmen pancake for 1.50 on the spot.',
    'Come before 11am, then everything is fresh and not sold out yet. Bring your own bag.',
    NULL,
    ARRAY[
      'Vegetables 30% cheaper than supermarket',
      'Fresh Moroccan bakers',
      'Real Brussels, not a tourist market',
      'Open on Sunday (rare)'
    ],
    NULL
  ),
  (
    'biblio', 'en',
    'Anderlecht Library',
    'Quiet floor on 2. Free wifi, long tables, closes at 7pm on weekdays.',
    'Three floors. Ground floor = books, children''s corner, sometimes noisy. Floor 1 = computers and newspapers. Floor 2 = quiet zone, long wooden tables, window on the street. Membership is free for anyone living in Brussels, otherwise 5 euros per year.',
    'Exam week = full. Come before 10am or find a spot on floor 1.',
    'Free membership under 26 years old',
    ARRAY[
      'Free membership (under 26)',
      'Quiet tables on floor 2',
      'Wifi: open network, no password',
      '24/7 book drop box at entrance'
    ],
    'Free membership under 26 years old'
  ),
  (
    'ramen', 'en',
    'Takumi Tonkotsu Brussel',
    'Ramen shop. Lunch formula 12 euros, busiest around 1pm.',
    'Ten tables, an open kitchen, three types of ramen. The broth takes 14 hours. Lunch formula (ramen + side dish + drink) is 12 euros and is one of the best deals in southern Brussels. Reserve via Instagram DM.',
    'Reserve via @tonkotsubxl on Instagram. Walk-in before 12:30pm usually still works.',
    NULL,
    ARRAY[
      'Lunch formula 12 euros',
      '14h broth — no powder stuff',
      'Vegan ramen on the menu',
      'Easy to reserve via Insta'
    ],
    NULL
  )
ON CONFLICT (spot_id, language) DO UPDATE SET
  name = EXCLUDED.name,
  short_desc = EXCLUDED.short_desc,
  long_desc = EXCLUDED.long_desc,
  tips = EXCLUDED.tips,
  student_perk = EXCLUDED.student_perk,
  why = EXCLUDED.why;

-- Note: For menu items and facilities, you can use the original Dutch data or translate them too.
-- The JavaScript will fall back to Dutch data if no English translation is found in the database.
