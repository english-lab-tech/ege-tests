/* Тест 3 из сборника «ЕГЭ 2027. Типовые экзаменационные варианты» (Национальное образование). */
window.VARIANT = {
  id: 'ege2027-3',
  title: 'ЕГЭ 2027 · Тест 3',
  source: 'ЕГЭ 2027. Типовые экзаменационные варианты · Вариант 3',
  listening: { audio: 'audio/listening.mp3', marks: [[0, 'b1'], [741, 'b2'], [1273, 'b3']] },
  written: [
    { section: 1, title: 'Аудирование', items: [
      { type: 'match', id: 1, block: 'b1', points: 2,
        instr: 'Вы услышите 6 высказываний. Установите соответствие между высказываниями каждого говорящего A–F и утверждениями, данными в списке 1–7. Используйте каждое утверждение, обозначенное соответствующей цифрой, только один раз. В задании есть одно лишнее утверждение. Вы услышите запись дважды.',
        options: [
          'I needed help to repair my device before my job training.',
          'What I really need is more important than what the technology offers.',
          'It is not as convenient as it seems, and there are limitations in using it.',
          'I couldn’t finish my schoolwork on time because of a problem.',
          'It took me a very long time to learn how to use it effectively.',
          'My device broke and I lost some of my important files.',
          'Technology failed me at a very important moment, but I fixed it myself.'
        ],
        rowLabel: 'Говорящий', rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '471235' },
      { type: 'tf', id: 2, block: 'b2', points: 3,
        instr: 'Вы услышите диалог. Определите, какие из приведённых утверждений A–G соответствуют содержанию текста (1 — True), какие не соответствуют (2 — False) и о чём в тексте не сказано, то есть на основании текста нельзя дать ни положительного, ни отрицательного ответа (3 — Not stated). Вы услышите запись дважды.',
        statements: [
          ['A', 'Sarah is wearing an expensive jacket.'],
          ['B', 'At first, David finds thrifting confusing.'],
          ['C', 'Sarah wants to buy particular brands.'],
          ['D', 'Sarah doesn’t buy clothes with stains.'],
          ['E', 'David and Sarah have similar T-shirts.'],
          ['F', 'Sarah has her book meeting on Sunday.'],
          ['G', 'Sarah agrees to have lunch together.']
        ], key: '2122331' },
      { type: 'intro', block: 'b3', text: 'Вы услышите интервью. В заданиях 3–9 выберите ответ 1, 2 или 3, соответствующий выбранному Вами варианту ответа. Вы услышите запись дважды.' },
      { type: 'mc', id: 3, block: 'b3', q: 'What is the name of the radio show?', opts: ['Sunshine FM.', 'Air Thursday.', 'Culture Connect.'], key: '3' },
      { type: 'mc', id: 4, block: 'b3', q: 'What did people originally dance around?', opts: ['A pole.', 'A bush.', 'Flowers.'], key: '2' },
      { type: 'mc', id: 5, block: 'b3', q: 'What made Lena start maypole dancing again?',
        opts: ['Kids enjoying the dance.', 'School events full of music.', 'Learning about her family’s history.'], key: '1' },
      { type: 'mc', id: 6, block: 'b3', q: 'A tradition of maypole dancing in Lena’s country…',
        opts: ['preserved its original form.', 'was adapted to the new environment.', 'turned into something completely different.'], key: '2' },
      { type: 'mc', id: 7, block: 'b3', q: 'How does Lena’s version differ from the original tradition?',
        opts: ['It unites kids and parents.', 'It includes modern elements.', 'It doesn’t need prior experience.'], key: '2' },
      { type: 'mc', id: 8, block: 'b3', q: 'What does Lena say about changing traditions?',
        opts: ['She believes it shouldn’t be done.', 'She knows they are frozen in time.', 'She thinks it helps to preserve them.'], key: '3' },
      { type: 'mc', id: 9, block: 'b3', q: 'At the end of the talk, the presenter invites listeners to…',
        opts: ['join Lena’s new BeatPole project.', 'visit the website of the radio programme.', 'start their own creative community project.'], key: '2' }
    ]},
    { section: 2, title: 'Чтение', items: [
      { type: 'match', id: 10, points: 3,
        instr: 'Установите соответствие между текстами A–G и заголовками 1–8. Используйте каждую цифру только один раз. В задании один заголовок лишний.',
        options: ['Success stories', 'A date to celebrate', 'Different celebrations', 'Everyone’s support',
                  'History in brief', 'Nature’s effect on us', 'The planet in danger', 'Living together with nature'],
        texts: [
          'Earth Day is a yearly event that attracts attention to the importance of wildlife protection, climate action, and eco-friendly habits. It is marked every year on April 22. It brings together more than 190 countries worldwide — through new projects, events, programmes, and other environmental activities. Earth Day’s goal is to encourage collective action for a healthier planet and brighter future. It is a great opportunity for millions of people in different countries to take meaningful action to protect the planet.',
          'The first official Earth Day was held in 1970. It was celebrated with meetings, marches, and educational events across the United States. The movement encouraged 20 million people to take part. The day brought together a lot of individual groups that had already been fighting against factory pollution, oil spills, toxic waste, and other environmental issues. They had one common goal — to protect the Earth and its wildlife for future generations. In Russia, Earth Day was celebrated for the first time in 1990.',
          'Since 1970, Earth Day has grown into a global event, with a lot of countries taking part every year. One of the most important wins as a direct result of Earth Day is the Great Global Clean-up volunteer programme. This is now a worldwide event. Earth Day’s Canopy Project has planted millions of trees in 32 countries, focusing on areas in need of new trees. And a lot has changed as a result of better education and understanding of ecological problems. For example, there has been more investment in solar power than in oil.',
          'There are a number of ways to get involved in Earth Day and its goal of reducing waste and developing green habits. To start with, people can easily find and take part in clean-up events in their own regions. Besides, it is better to refuse to follow fast fashion and buy fewer things in general. Fast fashion is responsible for big amounts of waste and pollution. In fact, it is more eco-friendly to buy second-hand or to buy clothes that last. Businesses have an opportunity to make a great difference, as well.',
          'Nature plays an important role in people’s lives. Spending time connecting with nature is brilliant for people’s mental health. It can reduce stress and anxiety, put everyone in a good mood, and help their minds to have a rest. Nature provides the basic conditions for human health. For example, nature can be essential to make water cleaner or regulate air quality, and it enables food production on land and in seas. Earth Day is the perfect moment to plan how to get closer to nature and develop new green habits.',
          'Because nature is so good at helping us feel well, everyone should get their daily dose of it. Filling our homes with the wonders of the natural world is not a new idea. For centuries, people have been using nature as a way to decorate their homes, brighten things up, and bring happiness. It could be a bunch of flowers here, a pine cone there, or a seashell display in the bathroom. It could also be growing houseplants, or collecting nature-themed photographs. Nature in one’s home can look different for everyone.',
          'Every year, Earth Day focuses on environmental issues such as climate change, deforestation, pollution, and nature protection. There have already been more than 55 Earth Days. In spite of this, climate change and other environmental issues still threaten the health of the planet. In the fight for a clean environment, it is becoming more urgent to address climate change now, as its effects are damaging. They include extreme weather events, such as floods and wildfires around the world. People can’t ignore climate change.'
        ],
        rowLabel: 'Текст', rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], key: '2514687' },
      { type: 'gaps', id: 11, points: 2,
        instr: 'Прочитайте текст и заполните пропуски A–F частями предложений, обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя.',
        title: 'Mysterious destinations',
        paras: [
          'Despite the best efforts of science and humanity, there are still unique destinations around the world that can’t be fully explained. These places are real mysteries, from a scientific or historical point of view. They are the world’s popular tourist attractions, as well as hidden destinations far away. From dark forests to lost mountain cities, there are mysteries in every corner of the globe, {A}.',
          'Stonehenge is at the top of the list. It is a puzzle in every way. Who built it, why they built it, how they built it, and where the stones came from are all part of the mystery, making Stonehenge a unique destination {B}. So, what do we know about Stonehenge? We know {C} and that the stones originated from Wales, nearby in England, and even as far away as Scotland. The giant nature of the stones is particularly confusing, as the prehistoric people in England had no easy way to transport them across the landscape. Adding to the legends surrounding this monument, some people say {D}, if you listen hard enough.',
          'Another mysterious destination is Easter Island, or Rapa Nui. It is the most remote inhabited place in the world, {E}. This tiny piece of land is home to around 6,000 permanent residents. It is famous for its 887 massive statues {F}. The statues are the strongest remaining evidence of an ancient civilisation.'
        ],
        options: ['that leaves more questions than answers', 'that the giant stones can still sing', 'some of which may never be fully solved',
                  'that were created by the Rapa Nui people', 'that it was built about 4,500 years ago', 'where the most popular tourist destinations',
                  'which lies 2,000 miles off the coast of Chile'],
        rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '315274' },
      { type: 'text', title: 'Celebrating Christmas',
        instr: 'Прочитайте текст и выполните задания 12–18. В каждом задании выберите ответ 1, 2, 3 или 4.',
        paras: [
          'As the festive season approaches, I find myself reflecting on how I wish to celebrate Christmas. It’s a time of year that brings people together, a time to reconnect with your loved ones, and a time to express gratitude for the good things in life. I believe that Christmas is a special time to create lasting memories, show appreciation for those around me, and spread love and kindness to those in need.',
          'First and foremost, I wish to celebrate Christmas with my family and friends. There’s something special about sharing this time of year with those closest to me, and creating memories that will last a lifetime. We would come together, share stories, and enjoy traditional Nigerian dishes like rice and Suya, as well as international favourites like roasted turkey and mashed potatoes. We would laugh, play games, and make merry, enjoying each other’s company. I’m not much of a cook, nor do I really enjoy it (baking is slightly more my thing). If this is true for you, too, don’t feel pressure to pull off the perfect holiday meal. I use shortcuts for cooking and baking: they are ready-made side dishes or boxed baking mixes. You can customise them, too, with add-in ingredients. As for traditional dishes, we cook them together, so it is not just rushing to cook, it’s a shared, welcomed experience.',
          'I would decorate my home with simple yet elegant decorations, using natural materials like pinecones, twigs, and leaves to create a warm and cosy atmosphere. The soft glow of lights and the sweet scent of the pine tree would get me in the holiday spirit. I would hang stockings by the fireplace, fill them with small gifts and treats, and create a special Christmas Eve box with notes and surprises for each family member.',
          'Gift-giving is another important part of Christmas, and I wish to keep it thoughtful and meaningful. I’d choose gifts that reflect the personality of each person, and maybe even make some gifts myself, like baked goods or crafts, to add a personal touch. I believe that the thought and love behind a gift are what truly matters, not the price or grandeur. Let’s be honest, Christmas shopping and spending money are fun — especially if your love language is gift-giving. I love giving presents, but buying an item because it is on sale or a “good deal” is not as special as spending more on a gift that is truly meaningful to someone. Resist the sales, keep Christmas simple, and only shop for original gifts!',
          'Attending a church service on Christmas Eve would be a great way to celebrate the true meaning of Christmas, and I’d love to volunteer at a local orphanage or old people’s home, spreading joy and kindness to those who need it. Giving back to the people around me is an essential part of the holiday season, and I’d feel grateful to be able to make a difference in someone’s life.',
          'Honour your time and energy limits. If holiday cards take up too much time, let them go this year, or send a Merry Christmas email instead. If you love to bake, yet don’t have the energy to make anything from scratch, use a boxed mix, as I’ve mentioned above. Enjoy a simple Christmas by conserving your time and energy for what’s most important to you during the holidays.',
          'Christmas for me means cosy, festive decorations and singing carols on Christmas Eve. It means watching “Home Alone” in pyjamas, or spending time with friends and sharing the Christmas Story with my children.',
          'For you, it could mean many other things: perhaps it’s an annual ski trip, or the local holiday performance, or a special holiday meal. The beautiful thing about Christmas is we all have special traditions and ways to celebrate the holiday season.'
        ] },
      { type: 'mc', id: 12, q: 'Before holiday season the author is mainly thinking about…',
        opts: ['the people she loves.', 'last year celebrations.', 'what she misses in life.', 'what she wants to do.'], key: '4' },
      { type: 'mc', id: 13, q: 'The word <i>shortcut</i> in “I use <b>shortcuts</b> for cooking and baking” (paragraph 2) is closest in meaning to a … way of doing something.',
        opts: ['quick', 'fun', 'creative', 'complex'], key: '1' },
      { type: 'mc', id: 14, q: 'What is the author’s attitude to Christmas decorations?',
        opts: ['She avoids using artificial decorations.', 'She prefers hand-made decorations.', 'She chooses cozy atmosphere over decorations.', 'She combines traditional and natural ones.'], key: '4' },
      { type: 'mc', id: 15, q: 'What is the author’s advice on choosing gifts?',
        opts: ['The more you spend, the better the gift will be.', 'Think about a suitable present for everyone.', 'Buying gifts is easier than making them.', 'Sales are a good way to save money and time.'], key: '2' },
      { type: 'mc', id: 16, q: 'Besides celebrating with family, what other activity does the author plan to do at Christmas time?',
        opts: ['Watch movies alone.', 'Do charity work.', 'Bake complex desserts.', 'Send holiday cards.'], key: '2' },
      { type: 'mc', id: 17, q: 'What is the main idea of paragraph 6?',
        opts: ['Plan your time well ahead.', 'Skip traditions to save time.', 'Simplify things to enjoy yourself.', 'Focus on one thing at a time.'], key: '3' },
      { type: 'mc', id: 18, q: 'How does the author describe “the beautiful thing about Christmas” at the end of the text?',
        opts: ['There are various traditions that we follow.', 'Everyone celebrates Christmas in a similar way.', 'It is a time to think about what you love most.', 'It is much more than just holiday decorations.'], key: '1' }
    ]},
    { section: 3, title: 'Грамматика и лексика', items: [
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, обозначенных номерами 19–24, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'From fiction to life' },
      { type: 'word', id: 19, word: 'CREATE', s: 'It is generally believed that authors turn real life into fiction. However, some works of fiction achieve remarkable popularity by ___ entire alternative worlds.', key: ['creating'] },
      { type: 'word', id: 20, word: 'CHILD', s: 'Often, particularly in the genres of fantasy, science fiction, and literature for ___, these books create new words.', key: ['children'] },
      { type: 'word', id: 21, word: 'THIS', s: 'Some of ___ gain a new life and are taken up in the real world.', key: ['these'] },
      { type: 'word', id: 22, word: 'ADD', s: 'When this happens, they ___ to the Cambridge Dictionary.', key: ['are added'] },
      { type: 'word', id: 23, word: 'LACK', s: 'In the Harry Potter novels, a muggle is an ordinary person ___ magical abilities. This word was taken up by British English speakers and used to talk about people who lack a particular skill, or have no ability at all: <i>I’m a bit of a muggle when it comes to computers.</i>', key: ['lacking'] },
      { type: 'word', id: 24, word: 'WRITE', s: 'Another book that ___ for kids but appeals equally to adults is The Wonderful Wizard of Oz by L. Frank Baum. It follows the adventures of Dorothy and her dog, Toto, in the magical land of Oz. Although there is no direct evidence for it, Oz seems to have been taken up as a nickname for Australia, thanks to the similarity in sound between Oz and the first syllable of Australia.', key: ['was written'] },
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Образуйте от слов, напечатанных заглавными буквами в конце строк, обозначенных номерами 25–29, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Common mistakes to avoid' },
      { type: 'word', id: 25, word: 'DIFFER', s: 'Many people think the words “explorer” and “traveller” are complete synonyms, but this is a mistake that can lead to confusion and misunderstanding. The biggest mistake people make is using the terms “explorer” and “traveller” interchangeably. While both terms refer to someone who travels, there are some key ___ between the two.', key: ['differences'] },
      { type: 'word', id: 26, word: 'FAMILIAR', s: 'An explorer is someone who travels to remote or ___ places, in order to discover new things. Explorers may be scientists, adventurers, or simply people who are passionate about discovering new places and cultures.', key: ['unfamiliar'] },
      { type: 'word', id: 27, word: 'BUSY', s: 'A traveller, on the other hand, is someone who travels for leisure or ___ purposes. They may visit popular tourist destinations or travel for work.', key: ['business'] },
      { type: 'word', id: 28, word: 'PRIORITY', s: 'Travellers are more focused on relaxation and convenience than on exploration and discovery, and they ___ safety and comfort.', key: ['prioritise', 'prioritize'] },
      { type: 'word', id: 29, word: 'CORRECT', s: 'After exploring the differences between explorers and travellers, it is clear that both have their own unique characteristics and motivations. It’s important to use these terms ___.', key: ['correctly'] },
      { type: 'cloze', title: 'Business communication',
        instr: 'Прочитайте текст с пропусками, обозначенными номерами 30–36. Эти номера соответствуют заданиям 30–36, в которых представлены возможные варианты ответов. Выберите ответ 1, 2, 3 или 4.',
        paras: [
          'Have you ever thought what business people typically write in English when they are trying to arrange a time to talk or meet with someone? It turns {30} that direct, specific requests, such as <i>“Can we meet at 2 p.m. on Wednesday?”</i> are very rare. It is more common to give the other person, the email recipient, the option to {31} a time. By far, the most frequent phrase in this context is <i>“Let me know”</i>, used in sentences such as <i>“Let me know what time you would like to talk/have the meeting”</i>. By using these kinds of expressions, we are {32} it clear to the other person that we value their time and their needs. We show that we are willing to use phrases that work for them and {33} them best.',
          'It is important to bear in {34} that email practices may vary from one cultural context to another. A phrase that might be the most frequent in British English may occur far less frequently in American English.',
          'And here’s a fun fact that linguists {35} while considering the issue: according to word frequency, Friday and Monday are the most important days of the work week — or at least the most talked about! In decreasing order of frequency, the days mentioned are Friday — Monday — Thursday — Tuesday — Wednesday. It seems that {36} anything happens on a Wednesday.'
        ],
        tasks: [
          { id: 30, opts: ['over', 'on', 'out', 'off'], key: '3' },
          { id: 31, opts: ['advise', 'suggest', 'remind', 'present'], key: '2' },
          { id: 32, opts: ['doing', 'keeping', 'holding', 'making'], key: '4' },
          { id: 33, opts: ['suit', 'fit', 'match', 'fix'], key: '1' },
          { id: 34, opts: ['brain', 'mind', 'head', 'view'], key: '2' },
          { id: 35, opts: ['explored', 'invented', 'discovered', 'developed'], key: '3' },
          { id: 36, opts: ['merely', 'nearly', 'really', 'hardly'], key: '4' }
        ] }
    ]},
    { section: 4, title: 'Письмо', items: [
      { type: 'email', id: 37, min: 100, max: 140,
        from: 'Tom@mail.uk', to: 'Russian_friend@ege.ru', subject: 'Homework',
        body: '…I really struggle with doing homework regularly. How do you usually organise your homework routine? What subjects do you typically get the most homework in at Russian schools? What type of homework do you and your friends find most useful, and why?<br>…Last weekend, I finally finished reading that long novel for my literature class…',
        task: 'Write an email to Tom.<br>In your message:<br>— answer his questions;<br>— ask 3 questions about the novel he has read.<br>Write 100–140 words.<br>Remember the rules of email writing.' },
      { type: 'project', id: 38, min: 200, max: 250,
        choices: [
          { n: '38.1', topic: 'problems of civilisation',
            lead: 'Imagine that you are doing a project on <b>the biggest problems facing modern civilisation</b>. You have found some data on the subject — the results of a survey conducted among Zetlanders (see the table below).',
            question: 'What do you think is the most serious problem in the world today?',
            chart: { kind: 'table', head: ['Options', 'Number of respondents (%)'],
              rows: [['Climate change and pollution', 40], ['Wars and conflicts', 25], ['Poverty and inequality', 18], ['Spread of diseases', 10], ['Overpopulation', 7]] },
            problem: 'outline a problem that can arise with climate change and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the most urgent problem facing civilisation today.' },
          { n: '38.2', topic: 'what young people value',
            lead: 'Imagine that you are doing a project on <b>what young people value most in life</b>. You have found some data on the subject — the results of a survey conducted among Zetland school students (see the pie chart below).',
            question: 'What is the most important thing for your happiness?',
            chart: { kind: 'pie', rows: [['True friends and love', 38], ['Family support', 29], ['Money and material things', 18], ['Career success', 10], ['Free time for hobbies', 5]] },
            problem: 'outline a problem that can arise when young people focus too much on material things and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on what is the most important thing in life.' }
        ] }
    ]}
  ],
  oral: {
    t1: {
      lead: 'Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.',
      text: 'Films about teenage crushes and young sweethearts appeared long before the genre became a major hit. Early pictures quietly explored teenage romance in simple formats. And it was only after these early attempts that filmmakers truly learned how to capture the magic of first love. Legend has it that the genre’s popularity began when directors noticed how young readers connected to the love letters and advice columns in popular youth magazines. Another legend says that the earliest teen romances were inspired by local radio shows that played catchy love songs and shared stories from high school students. They understood the quiet hallways and nervous heartbeats from their own school days. Over time, these films developed unique features which are still popular today. Audiences could enjoy funny conversations, watch perfectly timed misunderstandings, or get swept away by soundtracks that capture the thrill of a first crush.'
    },
    t2: {
      title: 'It’s time for a change!', img: 'img/ad.jpg',
      lead: 'You are considering having a new haircut to change your image and now you’d like to get more information. In 1.5 minutes you are to ask four direct questions to find out about the following:',
      points: ['hairdresser’s location;', 'working hours;', 'average price;', 'payment options.']
    },
    t3: {
      clips: ['audio/t3-q1.mp3', 'audio/t3-q2.mp3', 'audio/t3-q3.mp3', 'audio/t3-q4.mp3', 'audio/t3-q5.mp3'], outro: 'audio/t3-end.mp3',
      questions: [
        'What do you enjoy most — getting or giving presents? Why?',
        'What is the best present you have ever been given? Who gave it to you?',
        'What aspects of a present do you value most?',
        'Do you think it is difficult to choose presents? Why or why not?',
        'What present would you like to have for your next birthday? Describe it.'
      ]
    },
    t4: {
      lead: 'Imagine that you and your friend are doing a school project “Different museums”. You have found some photos to illustrate it but for technical reasons you cannot send them now. Leave a voice message to your friend explaining your choice of the photos and sharing some ideas about the project. In 2.5 minutes be ready to:',
      plan: [
        'explain the choice of the illustrations for the project by briefly describing them and noting the differences;',
        'mention the advantages (1–2) of the two types of museums;',
        'mention the disadvantages (1–2) of the two types of museums;',
        'express your opinion on the subject of the project — say which type of the museums presented in the pictures you’d prefer to visit and why.'
      ],
      photos: ['img/photo1.jpg', 'img/photo2.jpg']
    }
  }
};
