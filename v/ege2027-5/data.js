/* Тест 5 из сборника «ЕГЭ 2027. Типовые экзаменационные варианты» (Национальное образование). */
window.VARIANT = {
  id: 'ege2027-5',
  title: 'ЕГЭ 2027 · Тест 5',
  source: 'ЕГЭ 2027. Типовые экзаменационные варианты · Вариант 5',
  listening: { audio: 'audio/listening.mp3', marks: [[0, 'b1'], [725, 'b2'], [1232, 'b3']] },
  written: [
    { section: 1, title: 'Аудирование', items: [
      { type: 'match', id: 1, block: 'b1', points: 2,
        instr: 'Вы услышите 6 высказываний. Установите соответствие между высказываниями каждого говорящего A–F и утверждениями, данными в списке 1–7. Используйте каждое утверждение, обозначенное соответствующей цифрой, только один раз. В задании есть одно лишнее утверждение. Вы услышите запись дважды.',
        options: [
          'Different family members shaped my personality.',
          'My relative guided me and encouraged to do my best.',
          'This person encouraged my love for risk and exploration.',
          'My role model helped me to overcome a fear of failure.',
          'My neighbour coached me to play a team sport.',
          'Thanks to my relative, I became more open-minded.',
          'This person taught me to be polite and modest.'
        ],
        rowLabel: 'Говорящий', rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '637125' },
      { type: 'tf', id: 2, block: 'b2', points: 3,
        instr: 'Вы услышите диалог. Определите, какие из приведённых утверждений A–G соответствуют содержанию текста (1 — True), какие не соответствуют (2 — False) и о чём в тексте не сказано, то есть на основании текста нельзя дать ни положительного, ни отрицательного ответа (3 — Not stated). Вы услышите запись дважды.',
        statements: [
          ['A', 'Zoe and Jake’s team present their project this Thursday.'],
          ['B', 'Jake is not happy with their two other teammates.'],
          ['C', 'Zoe agrees with Jake to set mini-deadlines.'],
          ['D', 'Zoe wants to write the introduction and conclusion.'],
          ['E', 'Ms. Rivera teaches physical education at school.'],
          ['F', 'Zoe offers to go and have something to eat.'],
          ['G', 'Jake feels nervous giving oral presentations.']
        ], key: '2112312' },
      { type: 'intro', block: 'b3', text: 'Вы услышите интервью. В заданиях 3–9 выберите ответ 1, 2 или 3, соответствующий выбранному Вами варианту ответа. Вы услышите запись дважды.' },
      { type: 'mc', id: 3, block: 'b3', q: 'What is the name of the radio show?', opts: ['City Voice.', 'The Bookshelf Hour.', 'Sunlight Chronicles.'], key: '2' },
      { type: 'mc', id: 4, block: 'b3', q: 'What do we learn about Julian Vance at the beginning of the show?',
        opts: ['He writes under a pseudonym.', 'He has a degree in psychology.', 'He produces detective shows.'], key: '1' },
      { type: 'mc', id: 5, block: 'b3', q: 'Why did Julian Vance decide to start writing in another genre?',
        opts: ['He finds police reports fascinating.', 'He is tired of writing about magical creatures.', 'He is interested in the work of human minds.'], key: '3' },
      { type: 'mc', id: 6, block: 'b3', q: 'How does Julian Vance choose what to include in the book?',
        opts: ['Facts support the mystery.', 'The more details the better.', 'Interesting details come first.'], key: '1' },
      { type: 'mc', id: 7, block: 'b3', q: 'How does Julian Vance balance the partnership of the detectives?',
        opts: ['They back each other up in the street.', 'They take turns narrating the story.', 'They focus on different parts of the case.'], key: '3' },
      { type: 'mc', id: 8, block: 'b3', q: 'What makes Julian Vance’s books different?',
        opts: ['They differ in the number of pages.', 'They follow different narrative structures.', 'They include characters of different age groups.'], key: '2' },
      { type: 'mc', id: 9, block: 'b3', q: 'Why does Madrid work well as a setting for the novels?',
        opts: ['It is full of contrasts.', 'It is smaller than other capitals.', 'It is the detectives’ home town.'], key: '1' }
    ]},
    { section: 2, title: 'Чтение', items: [
      { type: 'match', id: 10, points: 3,
        instr: 'Установите соответствие между текстами A–G и заголовками 1–8. Используйте каждую цифру только один раз. В задании один заголовок лишний.',
        options: ['Going green', 'Good and helpful', 'Safety comes first', 'An economical choice',
                  'Any disadvantages?', 'A hobby for everyone', 'An adventure for kids', 'Where is the best one?'],
        texts: [
          'Camping is a popular outdoor adventure. It provides opportunities for engaging in various activities, such as hiking, fishing, kayaking, and more. It allows people to explore and appreciate the natural environment. Spending time outdoors exposes individuals to fresh air, which can have a lot of health benefits, including improved well-being and increased oxygen intake. Camping trips offer a great chance to observe animals and plants in the wild — to have a better and deeper understanding of different ecosystems.',
          'Camping holidays are accessible to everyone. Compared to other forms of accommodation, such as renting a hotel room, a camping trip often allows tourists to save up. Different rental options, such as a tent, a mobile home, or a chalet are usually available. And the rates offered are a great alternative for enjoying a moment of relaxation and escape in a pleasant setting, while saving money. Camping is less expensive compared to traditional holidays, as it has lower accommodation and travel costs.',
          'Camping often involves limited access to basic things like electricity, running water, and showers. Sleeping in a tent or a sleeping bag may not provide the same level of comfort as a traditional bed. Campers need to adapt to a simpler way of living during their camping trip, and explore alternative options for personal comfort. Remote camping areas may have limited transportation options, as well. Camping also exposes tourists to fast changes of weather, including rain, extreme temperatures, or storms.',
          'Choosing the right campsite is the starting point for an enjoyable camping experience. There are some factors to consider when selecting a campsite. Campers have to decide how far they are willing to travel, and choose a campsite within that range. Some campsites offer facilities like picnic tables, fire pits, and even playgrounds for families with kids. It is recommended to think about future activities, such as hiking, fishing, or wildlife spotting, and choose a campsite to suit one’s interests.',
          'While camping is a fun and exciting activity, it is essential to think about possible risks, and be prepared for emergencies — especially if you bring kids. It is important to stay informed about the weather forecast for the camping location and pack suitable clothing and equipment for varying weather conditions. Campers should be prepared for changes in temperature, rain, or strong winds. It is also necessary to keep a list of emergency contacts, including local emergency services, park authorities, and any needed medical facilities.',
          'When planning a camping adventure, it is important to practise the “Leave No Trace” principle — to reduce the human effect on the environment, and preserve the beauty of nature around. It is required to pack out all waste, including food cans and packaging, and to not leave anything behind. It is important to observe wildlife from a distance and never feed wild animals. It is recommended to store food securely to prevent conflicts with animals. Campers should avoid making too much noise that may change wildlife behaviour.',
          'One camping trip can grow into a lifelong passion. Getting outside in nature can open a new bright world of wonders. It can help with realising that there is so much more to life than what people surround themselves with on a daily basis. Camping is among many good interests for people of all ages that can also help to fight stress and depression. When camping, adults and children are surrounded by trees, fresh air, and wildlife. This natural environment can have a really calming effect on their minds and bodies.'
        ],
        rowLabel: 'Текст', rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], key: '2458316' },
      { type: 'gaps', id: 11, points: 2,
        instr: 'Прочитайте текст и заполните пропуски A–F частями предложений, обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя.',
        title: 'Monarch butterfly’s mystery',
        paras: [
          'Every year, millions of monarch butterflies migrate down from Canada to central Mexico, to the Monarch Butterfly Biosphere Reserve. The reserve protects winter forests for the millions of butterflies {A}.',
          'Not only do large numbers of monarch butterflies make for an unforgettable sight, but their unique migration pattern is one of the Earth’s great mysteries. Just as turtles can always find the beach where they hatched, monarch butterflies {B} and back again always know where to go, too. Yet, the life cycle of a monarch butterfly is not long enough {C}. It takes at least four generations of butterflies to make the full circle. The butterflies going to south don’t even die until they reach Mexico {D} the average monarch butterfly.',
          'No matter their age, monarch butterflies know where to go. Their annual arrival in Mexico has traditionally symbolized both the harvest and the return of the spirits of the dead. Mexico’s famous Day of the Dead is on November 1–2, around the time {E}. Scientists have several ideas on how these butterflies migrate, such as using the sun as a compass or tapping into the Earth’s magnetic field, but there is no agreement. We don’t know whether scientists will ever succeed in {F}, but tourists can enjoy this natural wonder every year.'
        ],
        options: ['and therefore live much longer than', 'to see through the full migration pattern', 'to enjoy the holiday celebration more than',
                  'solving the mystery of their migration', 'when monarch butterflies usually arrive', 'that fill the air and weigh down tree branches',
                  'making the long journey from north to south'],
        rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '672154' },
      { type: 'text', title: 'Benefits of part-time work',
        instr: 'Прочитайте текст и выполните задания 12–18. В каждом задании выберите ответ 1, 2, 3 или 4.',
        paras: [
          'One of the things I remember doing when I first started university was to see if I could get a part-time job. I thought I’d share my experience, as well as the benefits of doing part-time work together with your studies, to hopefully help anyone considering having one while at university.',
          'I have done a lot of part-time work ever since I was at college. I started with a Christmas temporary job at a perfume shop, and then got lots of different experiences within jobs in sales and hotels through joining a job agency. Since then, I have done a range of part-time work, from sales assistants on shop floors, waitressing and bartending, cleaning, and even working in a warehouse.',
          'I loved the freedom and independence of being able to earn my own money that I could spend guilt-free on whatever I wanted (I had a bit of an “online shopping spree” stage you could say).',
          'All this experience in different industries not only looks good on my CV, but I believe has also helped me change and develop as a person. I have found that aside from the financial benefit, there are a myriad of useful benefits to having employment that I think everyone should consider.',
          'A significant advantage of part-time work is developing the skills needed for the job, so called transferable skills. Here are some important skills that I developed and improved due to part-time work. First of all, jobs boosted my interpersonal skills — I learnt how to interact with people to help build key relationships. I definitely improved my time management and organisational skills — I became more efficient and disciplined with my time, which helps me to plan and prioritise the important stuff (i.e. my degree). Well, almost everywhere you work with others, so teamwork and communication skills develop as well. Moreover, according to recent studies, communication skills are rated as the first most sought-after employability skills for employers, with teamwork being third.',
          'The good thing about these skills is that they can be transferred to many aspects of your life. For example, strong communication skills developed through a customer-facing role have useful applications for working on university group projects, or for forming good client relationships in your future career.',
          'Another plus is that employers look for some sort of evidence of part-time or volunteering work that they can collect references from, in order to confirm your work ethic. Having a part-time job is therefore perfect to put on a CV to demonstrate that you’ve developed the skills mentioned above. It can set you apart from other applicants and give you an edge in the job market.',
          'I can’t but mention one more benefit of getting a part-time job, which is a great opportunity to meet new people and make friends. Something I believe has become a lot more important since the Covid pandemic. It is particularly useful when you are just starting university. For example, working in my first year really helped me meet other students and get to know my university a bit better (i.e. where the best places to go or not go to are, etc.).',
          'That being said, having part-time work can also allow you to build up your professional network. Even if you’re not working in the field you want to develop in, you are still making professional connections. Who knows? You may realise your colleague has strong connections with people in your dream industry that they can connect you with.',
          'Overall, whether it’s giving you an insight into different industries or just broadening your knowledge on the world around you, there’s always something to gain. Just try your university or local jobs centre to see what’s available, and I’m sure you’ll find a suitable option.'
        ] },
      { type: 'mc', id: 12, q: 'The author got her first part-time job…',
        opts: ['during her final year at school.', 'as soon as she entered university.', 'after some university courses.', 'with the help of other students.'], key: '2' },
      { type: 'mc', id: 13, q: 'The author’s experience in part-time work can be described as…',
        opts: ['exhausting.', 'qualified.', 'well-paid.', 'diverse.'], key: '4' },
      { type: 'mc', id: 14, q: 'Which of the benefits of having a part-time job is NOT mentioned in paragraphs 3 and 4?',
        opts: ['Building your resume.', 'Affording things you want.', 'Improving oneself.', 'Earning your living.'], key: '4' },
      { type: 'mc', id: 15, q: 'According to the text, what is a “transferable skill”?',
        opts: ['An ability that is only useful for the specific job where you learned it.', 'An ability learned in one situation that can be applied in other areas.', 'A talent that you are born with and cannot be improved through work.', 'A skill that requires a special certificate or qualification to prove you have it.'], key: '2' },
      { type: 'mc', id: 16, q: 'According to the author, an advantage of having part-time work on your CV is that it…',
        opts: ['provides proof of your abilities and dedication to work.', 'guarantees you will get a higher salary in your first job.', 'proves you will not need any training in the future.', 'allows you to avoid providing references from university.'], key: '1' },
      { type: 'mc', id: 17, q: '<i>It</i> in “<b>It</b> is particularly useful when you are just starting university” (paragraph 8) most probably refers to…',
        opts: ['getting to know your town or city.', 'getting acquainted with people.', 'making friends with new teachers.', 'meeting offline after the pandemic.'], key: '2' },
      { type: 'mc', id: 18, q: 'The author’s main goal for writing this text is to…',
        opts: ['warn against working too much while studying.', 'describe specific steps for finding a part-time job.', 'encourage students to consider advantages of part-time work.', 'compare different types of part-time jobs available for students.'], key: '3' }
    ]},
    { section: 3, title: 'Грамматика и лексика', items: [
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, обозначенных номерами 19–24, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Small changes' },
      { type: 'word', id: 19, word: 'SIT', s: 'I remember that evening very well. My friend and I ___ outside a cafe, sharing a cheese pizza and scoops of coffee ice cream.', key: ['were sitting'] },
      { type: 'word', id: 20, word: 'HAVE', s: '“Mary,” he said, “I’ve not been feeling well lately. The doctor said I ___ serious health problems if I don’t change my habits. Fewer late nights, better food, more movement, more rest. Basically, a healthier lifestyle.”', key: ['would have'] },
      { type: 'word', id: 21, word: 'BECOME', s: 'My routines, my stress — they ___ my second nature. How do you even begin to change when your habits are your comfort zone?', key: ['have become'] },
      { type: 'word', id: 22, word: 'NOT NEED', s: '“Bob,” I said, “You ___ to transform overnight.”', key: ['do not need', 'don\'t need'] },
      { type: 'word', id: 23, word: 'EARLY', s: 'Start with one change. Maybe it’s two cups of coffee a day, instead of six. Maybe it’s a 15-minute walk after dinner. Maybe it’s shutting down the laptop 30 minutes ___ at night. Each little choice builds momentum — and momentum, over time, becomes transformation. You just need to begin. Pick one good habit. Stick with it. Let it continue into the rest of your life.', key: ['earlier'] },
      { type: 'word', id: 24, word: 'I', s: 'He clinked his spoon against ___ and smiled. “Thank you, Mary. That feels more doable. I think I can actually do this.”', key: ['mine'] },
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Образуйте от слов, напечатанных заглавными буквами в конце строк, обозначенных номерами 25–29, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Discovery and invention' },
      { type: 'word', id: 25, word: 'CREATE', s: 'Discovery and invention are two distinct, yet interconnected processes. Discovery refers to the act of finding or uncovering something that already exists. Invention involves the ___ of something completely new that did not previously exist.', key: ['creation'] },
      { type: 'word', id: 26, word: 'ADVANCE', s: 'Both processes contribute to the ___ of society and our understanding of the world, but they differ in their origins and the level of novelty they bring.', key: ['advancement'] },
      { type: 'word', id: 27, word: 'COUNT', s: 'Discoveries have practical applications, leading to technological innovations. For instance, the discovery of penicillin by Alexander Fleming saved ___ lives by introducing the first antibiotic. Similarly, the discovery of the laws of motion by Isaac Newton was the basis for modern transportation systems.', key: ['countless'] },
      { type: 'word', id: 28, word: 'LIKE', s: '___ discoveries, inventions are not part of the natural world, but are products of human intellect and innovation.', key: ['Unlike'], caseSensitive: true },
      { type: 'word', id: 29, word: 'REVOLUTION', s: 'The invention of the printing press by Johannes Gutenberg in the 15th century ___ the dissemination of knowledge, making books more accessible and fueling the Renaissance.', key: ['revolutionised', 'revolutionized'] },
      { type: 'cloze', title: 'The next best place to home',
        instr: 'Прочитайте текст с пропусками, обозначенными номерами 30–36. Эти номера соответствуют заданиям 30–36, в которых представлены возможные варианты ответов. Выберите ответ 1, 2, 3 или 4.',
        paras: [
          'Alan Milne became world famous for Winnie the Pooh, which is one of children’s favourite books all over the world. Alan Milne {30} up in the 1880s with his brothers in the small British schoolhouse where his father, John Milne, was the headmaster. John V. Milne was a kind man with an excellent {31} of humour. There was a great deal of laughter and happiness at Henley House. Once the schoolboys were asked in a test paper to name the things in the world that {32} to them most beautiful. It was not a test of what a boy learned, but a test {33} to make him think. The responses were predictable: moonlit nights, picturesque ruins, the sun setting at sea. However, the reply which brought the warmest response from the headmaster was “a smiling child”.',
          'John V. Milne had an unusual method of {34} prizes. It was not quite a case of “Everybody has won, and all must have prizes.” As long as a boy {35} 75 per cent of the possible marks, he got a prize. “Without affection,” J. V. Milne once wrote, “the schoolroom is a hard, forbidding place. With love, it becomes the next best place to home.” For the Milne boys, of course, school and home were inextricably entwined. As soon as he was old enough to think about it, Alan could {36} wait to be a teacher.'
        ],
        tasks: [
          { id: 30, opts: ['brought', 'rose', 'grew', 'raised'], key: '3' },
          { id: 31, opts: ['idea', 'sense', 'view', 'point'], key: '2' },
          { id: 32, opts: ['attracted', 'approved', 'appealed', 'appeared'], key: '4' },
          { id: 33, opts: ['intended', 'impressed', 'influenced', 'included'], key: '1' },
          { id: 34, opts: ['attending', 'awarding', 'accepting', 'allowing'], key: '2' },
          { id: 35, opts: ['repeated', 'recognised', 'received', 'required'], key: '3' },
          { id: 36, opts: ['hardly', 'merely', 'rarely', 'nearly'], key: '1' }
        ] }
    ]},
    { section: 4, title: 'Письмо', items: [
      { type: 'email', id: 37, min: 100, max: 140,
        from: 'Jenny@mail.uk', to: 'Russian_friend@ege.ru', subject: 'Art',
        body: '…I started attending art classes. Do you like art? What type of art is the most popular among Russian teenagers? Would you like to meet a famous artist? Why or why not?<br>…Last week I was given a lead role in our school play…',
        task: 'Write an email to Jenny.<br>In your message:<br>— answer her questions;<br>— ask 3 questions about the school play.<br>Write 100–140 words.<br>Remember the rules of email writing.' },
      { type: 'project', id: 38, min: 200, max: 250,
        choices: [
          { n: '38.1', topic: 'teamwork challenges',
            lead: 'Imagine that you are doing a project on <b>teamwork challenges in school projects</b>. You have found some data on the subject — the results of a survey conducted among Zetland teenagers (see the table below).',
            question: 'What is the biggest challenge you face while working on group projects?',
            chart: { kind: 'table', head: ['Options', 'Number of respondents (%)'],
              rows: [['Unequal distribution of work', 42], ['Communication problems', 24], ['Scheduling issues', 18], ['Different quality standards', 12], ['Personality conflicts', 4]] },
            problem: 'outline a problem that can arise with working individually on a project and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the importance of developing teamwork skills for future careers.' },
          { n: '38.2', topic: 'AI tools in education',
            lead: 'Imagine that you are doing a project on <b>AI tools in education</b>. You have found some data on the subject — the results of a survey conducted among Zetland school students (see the pie chart below).',
            question: 'How do you primarily use AI tools for studying?',
            chart: { kind: 'pie', rows: [['To brainstorm ideas', 38], ['To explain difficult concepts', 27], ['To check for errors', 19], ['To write assignments', 11], ['I do not use AI tools', 5]] },
            problem: 'outline a problem that can arise with trusting AI too much and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on why young people should learn how to use AI tools responsibly.' }
        ] }
    ]}
  ],
  oral: {
    t1: {
      lead: 'Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.',
      text: 'The “Last Bell” celebration in Russia does not have a fixed date. It is traditionally held at the end of May, when classes have already ended and exams have not started yet. On the day of the celebration, students walk through the school corridors for the last time. The “Last Bell” is celebrated not only in Russia, but also in other countries. In Italy, graduates prepare a banquet for teachers. By tradition, the graduates have to earn money for it on their own. To do this, they participate in fairs where they sell pastries and various handmade products. Chinese schoolchildren celebrate the “Last bell” radically — they throw textbooks, notebooks, briefcases and other school supplies out of the windows. This is how graduates cope with stress after a long exam period. In Norway, Sweden, and Finland, graduates ride around the city in rented buses, sing songs, and throw parties in navy caps. Teachers write warm wishes to their students on the headgear linings.'
    },
    t2: {
      title: 'Play hard, win smart!', img: 'img/ad.jpg',
      lead: 'You are considering taking part in the local volleyball competition with your school team and now you’d like to get more information. In 1.5 minutes you are to ask four direct questions to find out about the following:',
      points: ['competition venue;', 'number of games;', 'prizes for winners;', 'participation fee.']
    },
    t3: {
      clips: ['audio/t3-q1.mp3', 'audio/t3-q2.mp3', 'audio/t3-q3.mp3', 'audio/t3-q4.mp3', 'audio/t3-q5.mp3'], outro: 'audio/t3-end.mp3',
      questions: [
        'Do you celebrate Victory Day every year? Why is this day important for your family or for your country?',
        'How does your school celebrate Victory Day?',
        'When you were younger, did you watch the Victory Day parade on TV or go to see the fireworks with your family?',
        'What veteran or historical figure from World War II would you like to meet if you had a chance, and what would you ask them?',
        'What are you going to do on next Victory Day?'
      ]
    },
    t4: {
      lead: 'Imagine that you and your friend are doing a school project “Communication”. You have found some photos to illustrate it but for technical reasons you cannot send them now. Leave a voice message to your friend explaining your choice of the photos and sharing some ideas about the project. In 2.5 minutes be ready to:',
      plan: [
        'explain the choice of the illustrations for the project by briefly describing them and noting the differences;',
        'mention the advantages (1–2) of the two ways of communicating with people;',
        'mention the disadvantages (1–2) of the two ways of communicating with people;',
        'express your opinion on the subject of the project — say which way of communicating with people presented in the pictures you prefer and why.'
      ],
      photos: ['img/photo1.jpg', 'img/photo2.jpg']
    }
  }
};
