/* Тест 1 из сборника «ЕГЭ 2027. Типовые экзаменационные варианты» (Национальное образование).
   Формат данных описан в assets/trainer.js. */
window.VARIANT = {
  id: 'ege2027-1',
  title: 'ЕГЭ 2027 · Тест 1',
  source: 'ЕГЭ 2027. Типовые экзаменационные варианты · Вариант 1',

  listening: {
    audio: 'audio/listening.mp3',
    // где в записи начинается каждое задание (секунды) — подсвечиваем текущий блок
    marks: [[0, 'b1'], [750, 'b2'], [1270, 'b3']]
  },

  written: [
    /* ---------------- Раздел 1. Аудирование ---------------- */
    { section: 1, title: 'Аудирование', items: [
      { type: 'match', id: 1, block: 'b1', points: 2,
        instr: 'Вы услышите 6 высказываний. Установите соответствие между высказываниями каждого говорящего A–F и утверждениями, данными в списке 1–7. Используйте каждое утверждение, обозначенное соответствующей цифрой, только один раз. В задании есть одно лишнее утверждение. Вы услышите запись дважды.',
        options: [
          'Changing my usual way of celebrating was worth it.',
          'To save money for a good cause, I avoid celebrating my birthday.',
          'I enjoy a delicious dinner at home with my close family.',
          'My birthday is for doing what I want with my time and money.',
          'A happy birthday for me is spending time in nature with my partner.',
          'I have to spend more money on my birthday than at any other time.',
          'I plan a bigger celebration for my birthday, though it’s expensive.'
        ],
        rowLabel: 'Говорящий', rows: ['A', 'B', 'C', 'D', 'E', 'F'],
        key: '413572' },

      { type: 'tf', id: 2, block: 'b2', points: 3,
        instr: 'Вы услышите диалог. Определите, какие из приведённых утверждений A–G соответствуют содержанию текста (1 — True), какие не соответствуют (2 — False) и о чём в тексте не сказано, то есть на основании текста нельзя дать ни положительного, ни отрицательного ответа (3 — Not stated). Вы услышите запись дважды.',
        statements: [
          ['A', 'Maya is participating in the Summer Literary Competition.'],
          ['B', 'Leo won the regional contest for authors last year.'],
          ['C', 'Maya is worried that her plot will confuse the readers.'],
          ['D', 'Leo uses stickers to create a timeline on the wall.'],
          ['E', 'Maya knows the emotions she wants to arouse in readers.'],
          ['F', 'The journalist in Maya’s story is a fearless man.'],
          ['G', 'Leo writes in the young adult fiction genre.']
        ],
        key: '2311123' },

      { type: 'intro', block: 'b3',
        text: 'Вы услышите интервью. В заданиях 3–9 выберите ответ 1, 2 или 3, соответствующий выбранному Вами варианту ответа. Вы услышите запись дважды.' },
      { type: 'mc', id: 3, block: 'b3', q: 'What is the main aim of the radio show?',
        opts: ['To share inspiring stories.', 'To motivate young creators.', 'To make our world a bit better.'], key: '1' },
      { type: 'mc', id: 4, block: 'b3', q: 'How did Spice Kitchen start?',
        opts: ['It has always been a family business.', 'It began with a simple love for cooking.', 'It started as a Christmas Day science experiment.'], key: '2' },
      { type: 'mc', id: 5, block: 'b3', q: 'What was the biggest challenge Spice Kitchen faced?',
        opts: ['Lack of experience.', 'Customer service.', 'Eco-friendly materials.'], key: '1' },
      { type: 'mc', id: 6, block: 'b3', q: 'Where did food exhibitions take place?',
        opts: ['Russia.', 'Canada.', 'Ireland.'], key: '3' },
      { type: 'mc', id: 7, block: 'b3', q: 'How did Spice Kitchen deal with financial aspects?',
        opts: ['They used grants for start-up businesses.', 'They shipped goods after getting payment.', 'They received credit from the bank.'], key: '1' },
      { type: 'mc', id: 8, block: 'b3', q: 'What does Tom advise future entrepreneurs?',
        opts: ['Follow your instincts.', 'Do what you truly love.', 'Wait for perfect conditions.'], key: '2' },
      { type: 'mc', id: 9, block: 'b3', q: 'What does Tom find the most satisfying?',
        opts: ['Creating new spice blends.', 'Learning customers’ feedback.', 'Sharing his journey with others.'], key: '2' }
    ]},

    /* ---------------- Раздел 2. Чтение ---------------- */
    { section: 2, title: 'Чтение', items: [
      { type: 'match', id: 10, points: 3,
        instr: 'Установите соответствие между текстами A–G и заголовками 1–8. Используйте каждую цифру только один раз. В задании один заголовок лишний.',
        options: ['Saving lions', 'Home for lions', 'The lion’s family', 'The lion’s language',
                  'Needing help', 'King of the jungle', 'The next generation', 'Important big cats'],
        texts: [
          'Unlike other big cats, lions are highly social creatures. They live and hunt in large groups, known as prides. Prides are central to the lion’s survival, offering safety, community, and control of territory. They are often made up of anywhere from 15 to 40 individual lions. Prides usually consist of related females and their cubs. Dominant males, with their flowing manes, fight to maintain their leadership. Roles within the pride are well-defined, and by working together, every member of the pride can benefit.',
          'The pride gives safety to cubs. When the cubs are born, they are completely dependent on their mothers. And it will remain that way until they are about 2–3 years old. The pride allows the cubs to learn important hunting and survival skills, which they will need later in life. They learn to hunt and fight through play. The young females typically stay in the pride their whole lives, and start to contribute to hunting. The young males will need to go off on their own and find a new pride to be part of.',
          'Powerful and majestic, the “king of the beasts” has no natural enemies. Surprisingly, African lion numbers have decreased by half in just 30 years. Three-quarters of their population are in decline. The main threats to African lions are human-wildlife conflict and lack of food, as well as habitat loss, climate change, and wildlife trade. With around 23,000 African lions left in the wild, they are called “vulnerable”. Specific conservation efforts are needed to stop a large decrease in their number.',
          'Today, government agencies and local communities in Africa work together to help to protect and increase the lion population. They deal with the main threats, using, for example, “lion lights” — flashing lights around the village that deceive the lions into believing that someone is walking in the area with a flashlight. The lions are scared away and prevented from being killed. Volunteers help to restore natural habitats for lions to have enough space to roam. Volunteers also help to fight the illegal wildlife trade.',
          'Lions occupy less than 8% of their historic range. Most lions are found in southern and eastern Africa. Lions are found in a wide range of different habitats. Lions are highly adaptable and can live in very dry areas, even in deserts. Living in desert areas, they get most of their water from their prey, and sometimes will even drink from plants. Lions prefer open woodland, thick bush, scrub, and grasslands. They need some land cover to help them to hunt. And they also need some shade — to rest in during the heat of the day.',
          'Lions are at the top of the food chain in their environment, whether that is grasslands, desert, or open woodland. It means they play a great role in keeping a healthy balance of numbers among other animals, like zebras and wildebeests. This, in turn, has an impact on the state of grasslands and savannahs. Lion landscapes make a large contribution to Africa’s ecosystem services. They also contribute to national economies, through tourism. For example, in Uganda, each lion brings in about £14,000 every year.',
          'Lions have developed different ways of communicating that help to keep the pride together. Male lions roar to show their power and mark their territory, while females may also roar to communicate with their pride. Roars act as a warning to other lions and prides, if they get too close. Roars allow lions to communicate across great distances. As well as roaring, lions use body movements. Gentle grooming and play help to make family-like bonds stronger. Like most cats, lions use scent to mark their territory.'
        ],
        rowLabel: 'Текст', rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        key: '3751284' },

      { type: 'gaps', id: 11, points: 2,
        instr: 'Прочитайте текст и заполните пропуски A–F частями предложений, обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя.',
        title: 'Izmailovo Kremlin',
        paras: [
          'The Izmailovo Kremlin is a regular venue for national and local celebrations and outdoor festivities. Different exhibitions, trade fairs, and festivals {A} folk arts are held there. Russian history is “coming back to life” in theatre performances and animated shows. One can also take part in workshops {B}.',
          'Performances of concert groups, team games, competitions, fun fights, horse riding, and pancake-week parades — all these are an important part of cultural life in the Izmailovo Kremlin.',
          'At the beginning of the Kremlin tour in Izmailovo, everyone will be welcomed in a traditional Russian way — with bread and salt. After a short introduction, visitors are invited to take part in various activities, {C} the season. Folk games, such as rope pulling, treasure hunting, or troika riding are very popular. There are a lot of local museums, for example, the Museum of Russian Toys, Bread Museum, Moscow Museum of Animation, and Museum of Unusual Bicycles, {D}. A lot of educational and entertainment programmes are offered for children. Baba Yaga’s Hut is especially popular with kids.',
          'Izmailovo, which is named after the estate {E}, is also well-known for its flea market. It is a treasure store of old and sometimes new things. All traditional souvenirs are on sale, {F} antique silver and jewellery, samovars, and old icons.'
        ],
        options: ['which are surely worth visiting', 'where Peter the Great grew up', 'to create works of the decorative arts',
                  'to find and buy something unusual', 'depending on their interests, age, and', 'including Matryoshka dolls, as well as',
                  'that are devoted to Russian crafts and'],
        rows: ['A', 'B', 'C', 'D', 'E', 'F'],
        key: '735126' },

      { type: 'text', title: 'Ten things a day',
        instr: 'Прочитайте текст и выполните задания 12–18. В каждом задании выберите ответ 1, 2, 3 или 4.',
        paras: [
          'If somebody told me to write ten things a day that I’m grateful for, I’d definitely think they’re crazy. How do you find ten things to write each day? How are you motivated to actually write them? Why should you write that, apart from the fact that during those few minutes you’ll feel good and grateful? It all sounds so silly.',
          'Five years ago, when I read a book called The Magic, the first chapter asked us to write ten things we’re grateful for, because being positive attracts the positive. It’s through this experience that I realised that being grateful brings in more good things. Now I feel positive and more mindful. I invite you to see how things changed for me, and if you resonate with it, then try it, too.',
          'I truly believe that there is light even in darkness, not just at the end of the tunnel. You just have to choose to see it. Studies show that optimism is a learnt behaviour. And optimists are able to recover quickly after an unpleasant situation, and have higher chances of achieving their goals, as compared to pessimists. Even during the darkest times, bringing my diary out and penning down 10 things I’m grateful for makes me feel better for the moment. It also makes an anxious situation a lot easier for me to handle. With time, dealing with unfortunate situations becomes easier, because you train your mind to look at the best in everything. For a person like me, who thinks too much and too long, this was a huge gain.',
          'I must mention that there are always over ten things once you start. In the beginning, writing ten things is frightening. Food, water, home, family, friends — now what else? With time, it gets easier, because you are focusing on counting your good things consciously, which you ignored earlier. Many people talk about noticing the good, and it’s a beautiful feeling to do so when you think of how lucky you are. But how many actually do this every day?',
          'Once you start, you find out there’s so much to feel grateful for. I understand you sometimes feel that you’re not as good as others you compare yourself to, but you truly have so much that so many could only wish for. A lot of your basics could be somebody else’s luxury. Tell me, do you get 24/7 electricity? If yes, be grateful because in the place where I live, power cuts are frequent. If there’s rain or a storm, they last as long as 3–6 hours! See, that’s one example of your basic being my luxury.',
          'When you get into habit of writing a diary, each day feels like a gift. I often remember Maya Angelou’s words, “This is a wonderful day. I’ve never seen this one before.” The first thing I think of in the morning is how grateful am I to sleep in the comfort of my house, sleep well, wake up healthy, and say “Good morning!” to those I love. There’s no guarantee that we’ll live another day or another minute, so it truly is a gift.',
          'Writing a gratitude diary has encouraged me to celebrate life. When I eat, I’m grateful for the food on my plate. The rice you eat isn’t just rice, it’s months of hard work with somebody’s blood and sweat. All that work just for it to reach your table — so appreciable, isn’t it? I feel like this a few times during the day, making me appreciate the smallest bits of life which earlier went without notice. It’s helped me become more conscious and aware of myself and the things around me.',
          'Looking around leads you to look inwards, which helps you shine on the outside. It’s a pleasant feeling to see and experience beauty in all the things around you. While life isn’t a bed of roses, practising gratitude has helped me tackle tough situations with my chin a little higher, and has built my faith that if things go down or change the route, it’s for the best.'
        ] },
      { type: 'mc', id: 12, q: 'How did the writer feel at first about writing ten things you are thankful for?',
        opts: ['Embarrassed.', 'Motivated.', 'Doubtful.', 'Curious.'], key: '3' },
      { type: 'mc', id: 13, q: 'What prompted the writer to start writing down ten things she is grateful for?',
        opts: ['A book.', 'A trip.', 'Complaints.', 'Feelings.'], key: '1' },
      { type: 'mc', id: 14, q: 'It is implied in paragraph 3 that the writer…',
        opts: ['avoids pessimistic views.', 'has a lot of worries in life.', 'usually achieves her goals.', 'avoids analysing situations.'], key: '1' },
      { type: 'mc', id: 15, q: '<i>It</i> in “With time, <b>it</b> gets easier” (paragraph 4) most probably refers to… the good things.',
        opts: ['focusing on', 'writing down', 'thinking of', 'ignoring'], key: '2' },
      { type: 'mc', id: 16, q: 'Which is NOT mentioned by the writer as something she feels grateful for?',
        opts: ['Constant power supply.', 'Having accommodation.', 'Modern medicine.', 'Close relationships.'], key: '3' },
      { type: 'mc', id: 17, q: 'The expression <i>to celebrate life</i> in “encouraged me <b>to celebrate life</b>” (paragraph 7) is closest in meaning to…',
        opts: ['being able to buy food.', 'having rest and relaxing.', 'spending time happily.', 'valuing common things.'], key: '4' },
      { type: 'mc', id: 18, q: 'The main goal of the author is to…',
        opts: ['persuade the readers to say grateful words.', 'share her experience with the readers.', 'explain how to start writing a diary.', 'demonstrate the beauty around her.'], key: '2' }
    ]},

    /* ---------------- Раздел 3. Грамматика и лексика ---------------- */
    { section: 3, title: 'Грамматика и лексика', items: [
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, обозначенных номерами 19–24, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'What is CANBEC?' },
      { type: 'word', id: 19, word: 'DEVELOP', s: 'The abbreviation CANBEC stands for the Cambridge and Nottingham Business English Corpus. The project ___ by the School of English Studies at the University of Nottingham, UK, together with Cambridge University Press, in the early 2000s.', key: ['was developed'] },
      { type: 'word', id: 20, word: 'SPEAK', s: 'The CANBEC corpus consists of one million words of ___ data recorded in a variety of different businesses, from big multinational companies to small partnerships.', key: ['spoken'] },
      { type: 'word', id: 21, word: 'INVOLVE', s: 'Most of the data was obtained in the UK, but some was recorded in other countries, which included a range of non-native speakers. The data covers internal meetings, external meetings (___ two or more different companies), office talk, sales presentations, telephone conversations and general office banter.', key: ['involving'] },
      { type: 'word', id: 22, word: 'LARGE', s: 'Meetings form the ___ part of the corpus.', key: ['largest'] },
      { type: 'word', id: 23, word: 'ENABLE', s: 'The data ___ researchers to find out how real people speak and use English today in a work environment, how to teach it better, and how to make language learning materials for business English.', key: ['enables', 'has enabled', 'enable', 'have enabled'] },
      { type: 'word', id: 24, word: 'PRODUCE', s: 'It has already been extensively used for the recently ___ materials in a range of course books, grammars, and dictionaries.', key: ['produced'] },

      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Образуйте от слов, напечатанных заглавными буквами в конце строк, обозначенных номерами 25–29, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Special days' },
      { type: 'word', id: 25, word: 'HISTORY', s: 'What are special days? “Special days” are days that have particular significance or importance, often marked by celebration, commemoration, or unique events. These days can be personal milestones, holidays, or days with specific cultural or ___ relevance.', key: ['historical'] },
      { type: 'word', id: 26, word: 'MEMORY', s: 'Special days include national, or public, holidays (New Year Holidays, International Women’s Day, Victory Day, etc.); festivals (for example, Maslenitsa); key commemorative dates (Cosmonautics Day, Battle of Borodino Day). In Russia there is a Federal Law “On Days of Military Glory and ___ Dates of Russia”.', key: ['Memorable'], caseSensitive: true },
      { type: 'word', id: 27, word: 'ACHIEVE', s: 'Special days also include birthdays, anniversaries, graduations, and other ___ that hold personal meaning.', key: ['achievements'] },
      { type: 'word', id: 28, word: 'HAPPY', s: 'Our lives are focused on careers, projects, or the pursuit of personal ___, but we still need celebrations to help us focus on something else.', key: ['happiness'] },
      { type: 'word', id: 29, word: 'STRENGTH', s: 'Special days often involve traditions and rituals that ___ bonds and create a sense of community. They help us mark the passage of time and create lasting memories.', key: ['strengthen'] },

      { type: 'cloze', title: 'Email communications',
        instr: 'Прочитайте текст с пропусками, обозначенными номерами 30–36. Эти номера соответствуют заданиям 30–36, в которых представлены возможные варианты ответов. Выберите ответ 1, 2, 3 или 4.',
        paras: [
          'How often do you use email for professional purposes? According to some reports, the {30} office worker handles more than 100 emails every day, and most people in other walks of life also often have to write business emails. If email communication is central to your business, you probably {31} sure that your message comes across as professional, effective, and polite — but have you ever thought about just what it is in the message that gives this impression?',
          'Everyone has their own writing style, of course, but there are certain words and phrases that tend to {32} very often in professional email communication. What are these phrases and how do we find {33} about them? This is where corpus linguistics comes in. Corpus linguists analyse large collections of texts to {34} any patterns that stand out, and to learn more about how we communicate in different contexts. Nowadays, corpora are stored and accessed electronically, and some of the biggest ones {35} several million words. Email corpora aren’t as big yet — it’s hard to collect this data because companies have concerns about confidential emails. However, researchers have reached agreements to use some of their email archives, so we are now starting to {36} out research based on real email data.'
        ],
        tasks: [
          { id: 30, opts: ['regular', 'usual', 'average', 'standard'], key: '3' },
          { id: 31, opts: ['make', 'keep', 'turn', 'hold'], key: '1' },
          { id: 32, opts: ['approach', 'approve', 'achieve', 'appear'], key: '4' },
          { id: 33, opts: ['out', 'on', 'over', 'off'], key: '1' },
          { id: 34, opts: ['realise', 'identify', 'differentiate', 'distinguish'], key: '2' },
          { id: 35, opts: ['include', 'arrange', 'conclude', 'complete'], key: '1' },
          { id: 36, opts: ['control', 'conduct', 'create', 'carry'], key: '4' }
        ] }
    ]},

    /* ---------------- Раздел 4. Письменная речь ---------------- */
    { section: 4, title: 'Письмо', items: [
      { type: 'email', id: 37, min: 100, max: 140,
        from: 'Mia@mail.uk', to: 'Russian_friend@ege.ru', subject: 'Hobbies',
        body: '…Yesterday, I discussed hobbies with my friends. For example, I enjoy cooking in my free time. What do you prefer doing in your free time? What hobbies are most popular with teens in Russia? Do you believe that everyone should have an activity to do for pleasure? Why, or why not?<br>…Last weekend, we had a nice family party and I baked an apple pie…',
        task: 'Write an email to Mia.<br>In your message:<br>— answer her questions;<br>— ask 3 questions about her family party.<br>Write 100–140 words.<br>Remember the rules of email writing.',
        questions: 'about her family party' },

      { type: 'project', id: 38, min: 200, max: 250,
        choices: [
          { n: '38.1', topic: 'shopping habits',
            lead: 'Imagine that you are doing a project on <b>shopping habits</b>. You have found some data on the subject — the results of a survey conducted among adult Zetlanders (see the table below).',
            question: 'Where do you like shopping most of all?',
            chart: { kind: 'table', head: ['Types of shops', 'Number of respondents (%)'],
              rows: [['Shopping mall', 34], ['Online shop', 32], ['Discount shop', 18], ['Street market', 9], ['Corner shop', 7]] },
            problem: 'outline a problem that can arise with shopping online and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the type of shopping you prefer.' },
          { n: '38.2', topic: 'birthday parties',
            lead: 'Imagine that you are doing a project on <b>birthday parties</b>. You have found some data on the subject — the results of a survey conducted among Zetlanders (see the pie chart below).',
            question: 'Who do you invite to your birthday parties most often?',
            chart: { kind: 'pie',
              rows: [['Relatives', 38], ['Friends', 35], ['Colleagues', 15], ['Neighbours', 9], ['No one', 3]] },
            problem: 'outline a problem that can arise while organising a birthday party and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on what makes a great birthday party for you.' }
        ] }
    ]}
  ],

  oral: {
    t1: {
      lead: 'Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.',
      text: 'Skateboarding is often seen as just a sport, a pastime for teenagers and young adults. However, to those who go deeper into the culture, skateboarding is much more. It is a way of life, a mindset that shapes how individuals face challenges. Skateboarding began in the 1950s in California, as a way for surfers to practise their skills on land. Unlike many traditional sports, skateboarding doesn’t have strict rules or a common way to play. Instead, it encourages individuality, creativity, and personal expression. One of the main aspects of skateboarding as a lifestyle is the sense of community it fosters. Skateboarders often gather in skate parks, urban spots, and competitions, forming close groups that share a common passion. This community is characterised by its help and support, welcoming people from different backgrounds and encouraging newcomers to learn and grow.'
    },
    t2: {
      title: 'Winter Adventures Await!', img: 'img/ad.jpg',
      lead: 'You are considering going to the winter camp and now you’d like to get more information. In 1.5 minutes you are to ask four direct questions to find out about the following:',
      points: ['camp’s location;', 'accommodation;', 'equipment provided;', 'discounts for students.']
    },
    t3: {
      clips: ['audio/t3-q1.mp3', 'audio/t3-q2.mp3', 'audio/t3-q3.mp3', 'audio/t3-q4.mp3', 'audio/t3-q5.mp3'],
      outro: 'audio/t3-end.mp3',
      topic: 'social media',
      questions: [
        'What social media app do you use the most? Why do you like it?',
        'When it comes to media, do you prefer posting content or looking at what others post? Why?',
        'What do you find the most difficult about using social media? Why?',
        'What kind of content do teenagers in your area usually watch or share online?',
        'Are there any rules in your family about using phones or social media?'
      ]
    },
    t4: {
      lead: 'Imagine that you and your friend are doing a school project “Ideal place to study”. You have found some photos to illustrate it but for technical reasons you cannot send them now. Leave a voice message to your friend explaining your choice of the photos and sharing some ideas about the project. In 2.5 minutes be ready to:',
      plan: [
        'explain the choice of the illustrations for the project by briefly describing them and noting the differences;',
        'mention the advantages (1–2) of the two places for studying;',
        'mention the disadvantages (1–2) of the two places for studying;',
        'express your opinion on the subject of the project — say which type of the places presented in the pictures you prefer for studying and why.'
      ],
      photos: ['img/photo1.jpg', 'img/photo2.jpg']
    }
  }
};
