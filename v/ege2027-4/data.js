/* Тест 4 из сборника «ЕГЭ 2027. Типовые экзаменационные варианты» (Национальное образование). */
window.VARIANT = {
  id: 'ege2027-4',
  title: 'ЕГЭ 2027 · Тест 4',
  source: 'ЕГЭ 2027. Типовые экзаменационные варианты · Вариант 4',
  listening: { audio: 'audio/listening.mp3', marks: [[0, 'b1'], [739, 'b2'], [1263, 'b3']] },
  written: [
    { section: 1, title: 'Аудирование', items: [
      { type: 'match', id: 1, block: 'b1', points: 2,
        instr: 'Вы услышите 6 высказываний. Установите соответствие между высказываниями каждого говорящего A–F и утверждениями, данными в списке 1–7. Используйте каждое утверждение, обозначенное соответствующей цифрой, только один раз. В задании есть одно лишнее утверждение. Вы услышите запись дважды.',
        options: [
          'My dog helps me stay more optimistic.',
          'I can’t imagine my life without my dog now.',
          'I explore many outdoor places with my dog.',
          'I found my partner thanks to my dog.',
          'I learned to value gradual improvement.',
          'My dog trained me to be more sociable.',
          'My life has become calmer with the dog.'
        ],
        rowLabel: 'Говорящий', rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '417653' },
      { type: 'tf', id: 2, block: 'b2', points: 3,
        instr: 'Вы услышите диалог. Определите, какие из приведённых утверждений A–G соответствуют содержанию текста (1 — True), какие не соответствуют (2 — False) и о чём в тексте не сказано, то есть на основании текста нельзя дать ни положительного, ни отрицательного ответа (3 — Not stated). Вы услышите запись дважды.',
        statements: [
          ['A', 'Lily is tired of hanging out every night.'],
          ['B', 'Lily feels that she is not a good friend.'],
          ['C', 'Mike also worries about being selfish.'],
          ['D', 'Lily finds Mike’s advice possible to follow.'],
          ['E', 'Mike says boundaries are for friends, not family.'],
          ['F', 'Lily has to go back home in half an hour.'],
          ['G', 'Mike is going to pay for the smoothie.']
        ], key: '2131221' },
      { type: 'intro', block: 'b3', text: 'Вы услышите интервью. В заданиях 3–9 выберите ответ 1, 2 или 3, соответствующий выбранному Вами варианту ответа. Вы услышите запись дважды.' },
      { type: 'mc', id: 3, block: 'b3', q: 'What do we learn about David Mopp at the beginning of the show?', opts: ['He won an Oscar.', 'He hosts TV game shows.', 'He creates TV shows.'], key: '3' },
      { type: 'mc', id: 4, block: 'b3', q: 'In the first part of the interview David says that in his shows he talks about…', opts: ['love and drama.', 'community issues.', 'cultural stereotypes.'], key: '2' },
      { type: 'mc', id: 5, block: 'b3', q: 'How does David keep the story natural in the show?',
        opts: ['He focuses on the key message.', 'He shows the reasons for problems.', 'He includes choices celebrities made.'], key: '2' },
      { type: 'mc', id: 6, block: 'b3', q: 'What influence does the show have on young people?',
        opts: ['They join street groups.', 'They learn more about sports.', 'They start seeing other options.'], key: '3' },
      { type: 'mc', id: 7, block: 'b3', q: 'According to David Mopp, what helps families to sort out cultural issues in their life?',
        opts: ['Sharing stories of love.', 'Being honest with one another.', 'Talking about personal journeys.'], key: '2' },
      { type: 'mc', id: 8, block: 'b3', q: 'What extra information is included in every episode?',
        opts: ['Links to paid educational courses.', 'Contacts of international support groups.', 'Phone numbers for assistance.'], key: '3' },
      { type: 'mc', id: 9, block: 'b3', q: 'When does the Voices for Change show run?', opts: ['Twice a week.', 'On Tuesdays.', 'Every other Thursday.'], key: '1' }
    ]},
    { section: 2, title: 'Чтение', items: [
      { type: 'match', id: 10, points: 3,
        instr: 'Установите соответствие между текстами A–G и заголовками 1–8. Используйте каждую цифру только один раз. В задании один заголовок лишний.',
        options: ['A good life lesson', 'Having a great time', 'Disadvantages of a hobby', 'A variety to suit everyone',
                  'A family effort', 'Old and new hobbies', 'Getting independence', 'Having various benefits'],
        texts: [
          'Statistics show that most teenagers have about five hours of spare time on any given weekday. That is after school, homework, and eating. A hobby is the best way to fill that time. Even if a teenager is not interested in typical hobbies like sports or computers, there is a whole world of things to do out there. It is a matter of one’s choice. Popular hobbies for teens range from photography, drawing, and cooking, to skateboarding, dancing, and music. A hobby can be an all-consuming ambition, or just something to pass the time.',
          'Hobbies give teenagers a chance to meet new people, discover new interests, develop skills outside of school, and do something all kids should do — just have fun. When a teenager succeeds in something related to their hobby, such as learning a new song, scoring a goal, or writing a poem, it builds their confidence and improves their mental and emotional health. Besides, taking up a hobby teaches teens how to use their time wisely. They find out how to fit their hobby-time in with homework and family duties.',
          'While people do not always agree that all things needed in life come only from hard work, they do agree that without hard work, it is difficult to achieve most things of great value. When teenagers choose a hobby, they will have to spend time working at it in order to become skilled and experienced. And if the hobby is a sport or a fine art, they are lucky — as they can spend a lifetime improving their skill. In the teenage years, this type of effort forms a great starting point for achievements throughout adulthood.',
          'Hobbies are a great way for teens to form an identity outside their family. And hobbies that take place after school hours can be even better. They also give teenagers a chance to find their own path outside of the watchful eye of parents and teachers. Hobbies like sports or music are useful in that way. It is common knowledge that sports coaches and band directors are neither teachers, nor parents. They help teens learn and grow in new and different ways, teaching them skills they do not learn at home or in class.',
          'It is natural for interests to change over time, and it is possible that a teenager will lose interest in a hobby. They can explore new activities, or return to previous hobbies to enjoy them again. It is important for teenagers to have the freedom to explore different interests and find what attracts them most. Teenagers can try new things, attend workshops or classes, join clubs or community groups, volunteer, or ask friends and family for advice. Online resources such as tutorials or forums can also help teenagers discover new interests.',
          'Many parents worry that their children will give up on a hobby not long after starting it. While this is normal and not always something to be concerned about, it can be disappointing. What can parents do to change the situation? They can support their children’s hobbies by encouraging exploration, and by providing resources and opportunities for learning or training. It would be great to offer praise, and to show interest in their children’s hobbies. Parents can also help with access to materials, equipment, or classes related to hobbies.',
          'Some hobbies are just fun. And that’s what is great about them. They are not school, they are not work, they are not family — they are just something nice and enjoyable to do to pass the time. Sometimes teenagers need an evening or two when they are basically doing nothing but relaxing. Everyone needs a way to fight stress and boredom, and to have a good time while doing so. That is the amazing thing about hobbies, as they can be just that — relatively unimportant activities that make us feel good.'
        ],
        rowLabel: 'Текст', rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], key: '4817652' },
      { type: 'gaps', id: 11, points: 2,
        instr: 'Прочитайте текст и заполните пропуски A–F частями предложений, обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя.',
        title: 'Pyramids of Giza',
        paras: [
          'The last remaining wonder of the ancient world is Egypt’s Pyramids of Giza. They are so old {A} that built them. Constructed during the “Golden Age” or the “Age of the Pyramids”, about 4,500 years ago, the three main pyramids are named after the pharaohs they were built for: Khufu, Khafre, and Menkaure. The Great Pyramid of Khufu is the largest, with millions of stones weighing over 2 tons each.',
          'The image of the pyramids, {B} by the Great Sphinx, creates a sense of wonder and mystery. The pyramids hold many secrets. Despite extensive research, historians don’t know {C}, although there is strong evidence that they were constructed by a skilled, well-treated workforce, and not slaves — as previously thought. Different points of the pyramids may form straight lines with certain stars or the sun. And various newly-discovered rooms within the pyramids have no clear purpose.',
          'Scientists know {D} to Giza via the Nile, and canals were built for this specific purpose. Once there, builders likely used a ramp system, spiralling around the outside or perhaps from inside the structure itself. How they did all of this {E}, though, is another story. And the surprising acts of architecture and engineering that have added to the pyramids’ durability remain lost to time. Although some people still believe {F}.'
        ],
        options: ['how the pyramids were originally built', 'attracting tourists and supporting locals', 'that aliens constructed the pyramids',
                  'that they have long outlived the culture', 'having no modern tools or infrastructure', 'rising straight out of the sands, guarded',
                  'that most of huge stones were transported'],
        rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '461753' },
      { type: 'text', title: 'Fashion trends and psychology',
        instr: 'Прочитайте текст и выполните задания 12–18. В каждом задании выберите ответ 1, 2, 3 или 4.',
        paras: [
          'Fashion trends are like waves — they come and go, only to return in different forms. One moment we are obsessed with mini skirts, and the next, oversized blazers are everywhere. But have you ever wondered why we are so drawn to the latest fads, even when they seem fleeting? Well, sorry to break it to you, but there is more behind it than just wanting to stay stylish. These trends reflect our mental and emotional processes, and there are powerful psychological forces at play that keep us hooked.',
          'Have you ever noticed how an item seems more desirable once a few influencers or celebrities start wearing it? That is social proof in action. Social proof is a situation when people copy the actions of others in choosing how to behave in a given situation. According to the author of this term, humans tend to look to others for cues on how to behave, and fashion is no exception. When everyone is rocking a certain style, our brains tell us that it must be worth our attention and we must take part, too. Social media platforms boost this effect. One viral post can transform a brand into a must-have.',
          'Another reason is the need for the new. We all love new things, as it’s part of human nature. Psychologically, we long for new experiences. This desire for the new is fueled by dopamine, the brain’s “feel-good” chemical. Every single time we experience something new, our brain gives us a dopamine boost, which makes us feel rewarded. So, when a fresh trend appears, we are chasing that dopamine rush without realising it.',
          'Dr. Katy Shine, author of books about fashion, explains that fashion helps us express our personality and can affect our emotions. When we try out a new trend, it is not just about the clothes, it is about the excitement of stepping out in something fresh, which gives us a sense of achievement and pleasure.',
          'We cannot talk about fashion trends without acknowledging the pressure to keep up. Fashion’s cyclical nature is tied to what psychologists call the “scarcity effect”. When an item is seen as limited or exclusive, it becomes more desirable. In fact, social comparison theory, first introduced in 1954, suggests that people determine their social and personal worth based on how they stack up against others. This drive to evaluate ourselves in relation to others explains many of our fashion choices. Whether it is upward social comparison, like looking up to celebrities, or downward comparison — feeling more fashionable than others — these comparisons push us toward specific trends.',
          'Brands have mastered this method by using limited releases to create a sense of urgency. This taps into our FOMO (fear of missing out) and makes us more likely to buy something, even if we don’t need it. And, let’s be real, once famous people wear it, we are all trying to get our hands on it.',
          'While it’s fun to experiment with new styles, it’s also easy to get caught up in the ocean of fast fashion. The key to breaking free from that cycle is understanding your own style and buying what is truly similar to your beliefs. Try investing in timeless pieces or trends that reflect your personality, so you won’t feel the pressure to constantly chase the next big thing.',
          'One thing is for sure, fashion trends will always come and go, but understanding the psychology behind them can help you make more conscious choices. Whether it’s social proof pushing you towards a new jewellery piece, or the dopamine hit you want from trying something new, there is always a reason behind why we jump on the latest fads. The next time you feel the desire to buy into a trend, ask yourself — is it because you love it, or because everyone else does?'
        ] },
      { type: 'mc', id: 12, q: 'According to the author, what is the main reason why we follow fashion trends?',
        opts: ['A desire to look stylish.', 'A variety of fashion trends.', 'Mechanisms in our mind.', 'Famous people’s choices.'], key: '3' },
      { type: 'mc', id: 13, q: 'The word <i>it</i> in “but there is more behind <b>it</b>” (paragraph 1) most probably refers to…',
        opts: ['a feature of fashion trends to last only a short time.', 'the reason why people follow fashion trends.', 'the fact that fashion trends are like waves.', 'a desire to stay stylish by following trends.'], key: '2' },
      { type: 'mc', id: 14, q: 'According to the text, we want the clothes famous people wear because…',
        opts: ['influencers and stars are more stylish than others.', 'this always proves our higher status in society.', 'stars are usually the first to wear new fashionable outfits.', 'people tend to imitate others to decide how to behave.'], key: '4' },
      { type: 'mc', id: 15, q: 'Which of the following is NOT mentioned as a reason to follow trends in paragraphs 2 and 3?',
        opts: ['Social media can increase a brand’s popularity very quickly.', 'Wearing new clothes boosts pleasure through a chemical reaction.', 'New clothes are always much better quality than old clothes.', 'People have a natural psychological desire for new experiences.'], key: '3' },
      { type: 'mc', id: 16, q: 'According to Dr. Katy Shine, fashion makes us feel…',
        opts: ['successful.', 'pressured.', 'relaxed.', 'disturbed.'], key: '1' },
      { type: 'mc', id: 17, q: 'What is the author’s advice regarding fashion?',
        opts: ['Buy classical things in your own style.', 'Avoid comparing yourself to others.', 'Buy trends that have proven valuable.', 'Try out new styles from time to time.'], key: '1' },
      { type: 'mc', id: 18, q: 'What is the main idea of the text?',
        opts: ['Fashion trends are pointless, so people should ignore them completely.', 'It’s important to understand the reasons for your desire to follow fashion.', 'Following fashion is deeply rooted in our brain and we can hardly avoid it.', 'Mostly, social media and celebrities make us follow new fashion trends.'], key: '2' }
    ]},
    { section: 3, title: 'Грамматика и лексика', items: [
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, обозначенных номерами 19–24, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'The impact of discovery and invention on society' },
      { type: 'word', id: 19, word: 'NOT EXIST', s: 'Discovery refers to the act of finding or uncovering something that already exists. Invention involves the creation of something entirely new that ___ before.', key: ['did not exist', 'didn\'t exist'] },
      { type: 'word', id: 20, word: 'BROAD', s: 'Both discovery and invention have significant impacts on society, though in different ways. Discoveries often have a considerably ___ influence.', key: ['broader'] },
      { type: 'word', id: 21, word: 'SHAPE', s: 'They expand our understanding of the universe and contribute to the development of new theories and models. Discovery and invention are two distinct, yet interconnected processes, that ___ human civilization.', key: ['shape', 'have shaped', 'have been shaping', 'are shaping'] },
      { type: 'word', id: 22, word: 'ADVANCE', s: 'While discoveries uncover hidden truths and phenomena, inventions create new solutions and possibilities. Both play a crucial role in ___ knowledge.', key: ['advancing'] },
      { type: 'word', id: 23, word: 'LAY', s: 'Discoveries have practical applications, leading to technological innovations. For instance, the discovery of the laws of motion by Isaac Newton ___ the groundwork for modern engineering and transportation systems.', key: ['laid'] },
      { type: 'word', id: 24, word: 'MAKE', s: 'Inventions, on the other hand, have a more immediate impact on society. The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the dissemination of knowledge, ___ books more accessible.', key: ['making'] },
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Образуйте от слов, напечатанных заглавными буквами в конце строк, обозначенных номерами 25–29, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Explorers' },
      { type: 'word', id: 25, word: 'SCIENCE', s: 'What do you know about explorers and exploration? Explorers have played an important role in human history, from the early seafarers who charted new trade routes and discovered new lands, to the modern ___ who study the earth’s ecosystems and uncover new insights into the natural world.', key: ['scientists'] },
      { type: 'word', id: 26, word: 'CURIOUS', s: 'They are driven by a sense of ___ and a desire to expand their knowledge and understanding of the world.', key: ['curiosity'] },
      { type: 'word', id: 27, word: 'PROFESSION', s: 'Explorers can be ___ or amateur, and may work in a variety of fields, including geography, anthropology, archaeology, biology, and geology. They may travel alone or as part of a team, and may use different methods to reach their destinations, including hiking, climbing, sailing, or flying.', key: ['professional'] },
      { type: 'word', id: 28, word: 'LOCATE', s: 'They often undertake expeditions to remote or difficult-to-reach ___, and may face significant challenges in the pursuit of their goals.', key: ['locations'] },
      { type: 'word', id: 29, word: 'HISTORY', s: 'The word “explorer” implies a sense of adventure and discovery. It is often used to describe ___ figures who travelled to unknown lands, or to people who are researching new frontiers.', key: ['historical'] },
      { type: 'cloze', title: 'Polite ways to ask people to behave better',
        instr: 'Прочитайте текст с пропусками, обозначенными номерами 30–36. Эти номера соответствуют заданиям 30–36, в которых представлены возможные варианты ответов. Выберите ответ 1, 2, 3 или 4.',
        paras: [
          'There’s a new topic for discussion. A reader of these blogs recently requested a post on phrases for {30} order in the classroom. While thinking about that, it occurred to me that there are several other situations in which people have to impose control on a group, or {31} in a work meeting. The difficult part is knowing how to do that without being bossy or aggressive. This post, {32}, offers some polite phrases that both teachers and others could use.',
          'I’ll start with asking people to be quiet. The command <i>“Be quiet”</i> itself sounds very blunt and is certainly not {33} in a group of adults. You might ask children to settle {34}, but for adults, a phrase like <i>“Can we have some quiet now, please?”</i>, would sound less bossy. If you are at the beginning of a meeting, something like <i>“OK, I think it’s time to get started now”</i> could work too. If someone is {35} a meeting, you might say, <i>“Could we let someone else speak now?”</i> or <i>“Can we get someone else’s view?”</i> If people have started to become {36} from what they are doing, you could ask them to focus on the task at hand. I hope you find these phrases useful, and that they will help you with the old saying <i>“It’s not what you say, it’s the way that you say it!”</i>'
        ],
        tasks: [
          { id: 30, opts: ['keeping', 'putting', 'holding', 'setting'], key: '1' },
          { id: 31, opts: ['for a start', 'for instance', 'for the moment', 'for a time'], key: '2' },
          { id: 32, opts: ['however', 'although', 'moreover', 'therefore'], key: '4' },
          { id: 33, opts: ['appropriate', 'apparent', 'authentic', 'artificial'], key: '1' },
          { id: 34, opts: ['down', 'over', 'around', 'after'], key: '1' },
          { id: 35, opts: ['doubting', 'debating', 'dominating', 'damaging'], key: '3' },
          { id: 36, opts: ['disagreed', 'disbelieved', 'disapproved', 'distracted'], key: '4' }
        ] }
    ]},
    { section: 4, title: 'Письмо', items: [
      { type: 'email', id: 37, min: 100, max: 140,
        from: 'Betty@school.com', to: 'Russian_friend@ege.ru', subject: 'Space project',
        body: '…In school, we had a lesson about space. What do you think about the Moon and Mars space programmes? What space museums are there in Russia? What topic would you choose if you were to write a school project about space?<br>…Next week, I am going to an interactive rocket-building lesson with my classmates…',
        task: 'Write an email to Betty.<br>In your message:<br>— answer her questions;<br>— ask 3 questions about the rocket-building lesson.<br>Write 100–140 words.<br>Remember the rules of email writing.' },
      { type: 'project', id: 38, min: 200, max: 250,
        choices: [
          { n: '38.1', topic: 'internet safety',
            lead: 'Imagine that you are doing a project on <b>internet safety awareness in Zetland</b>. You have found some data on the subject — the results of a survey conducted among Zetland teenagers (see the table below).',
            question: 'What internet threat do you consider most dangerous?',
            chart: { kind: 'table', head: ['Options', 'Number of respondents (%)'],
              rows: [['Online scams and fraud', 35], ['Data leaks', 28], ['Cyberbullying', 20], ['Harmful content', 12], ['Addiction to social media', 5]] },
            problem: 'outline a problem that can arise with internet security for teenagers and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the biggest disadvantage of modern technology.' },
          { n: '38.2', topic: 'inspiring famous people',
            lead: 'Imagine that you are doing a project on <b>famous people who inspire young people</b>. You have found some data on the subject — the results of a survey conducted among Zetland school students (see the pie chart below).',
            question: 'What famous people inspire you most?',
            chart: { kind: 'pie', rows: [['Musicians and actors', 32], ['Athletes', 25], ['Writers and poets', 18], ['Scientists and inventors', 15], ['Political leaders', 10]] },
            problem: 'outline a problem that can arise when young people choose a role-model for themselves and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the most inspiring famous person for you.' }
        ] }
    ]}
  ],
  oral: {
    t1: {
      lead: 'Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.',
      text: 'We have all heard people who say that pets are “just” animals, as though they are not important in our lives. These people have likely never owned a loyal dog or a loving cat and their words couldn’t be further from the truth. Most pet owners will know how wonderful owning an animal can be. They will understand the companionship and how close bonds can be formed between an animal and a human. The benefits to owning a pet are endless. Pets are good for our health. It’s common knowledge that stroking an animal can greatly reduce stress levels. Pets offer emotional support. They help people to gain a sense of responsibility, and are always there when we need them. Pets can give a sense of purpose and a reason to get out of bed when we feel particularly depressed or anxious. Animals such as cats and dogs can have a deeply calming effect on humans and can often pick up on their owner’s mood. So, owning a pet can change life and bring much joy and love.'
    },
    t2: {
      title: 'Freshly baked: come and buy!', img: 'img/ad.jpg',
      lead: 'You are considering going to the bakery and now you’d like to get more information. In 1.5 minutes you are to ask four direct questions to find out about the following:',
      points: ['bakery’s location;', 'kinds of bread sold;', 'sugar-free cakes;', 'payment options.']
    },
    t3: {
      clips: ['audio/t3-q1.mp3', 'audio/t3-q2.mp3', 'audio/t3-q3.mp3', 'audio/t3-q4.mp3', 'audio/t3-q5.mp3'], outro: 'audio/t3-end.mp3',
      questions: [
        'Are you interested in any kind of art? Why or why not?',
        'What Russian artists do you know? Who is your favourite artist?',
        'What personal qualities are needed to become a good artist?',
        'What skills can be developed because of doing art?',
        'Do you think all children should study art at school? Why do you think so?'
      ]
    },
    t4: {
      lead: 'Imagine that you and your friend are doing a school project “Camps for kids”. You have found some photos to illustrate it but for technical reasons you cannot send them now. Leave a voice message to your friend explaining your choice of the photos and sharing some ideas about the project. In 2.5 minutes be ready to:',
      plan: [
        'explain the choice of the illustrations for the project by briefly describing them and noting the differences;',
        'mention the advantages (1–2) of the two types of camps for kids;',
        'mention the disadvantages (1–2) of the two types of camps for kids;',
        'express your opinion on the subject of the project — say which type of the camps presented in the pictures you preferred as a child and why.'
      ],
      photos: ['img/photo1.jpg', 'img/photo2.jpg']
    }
  }
};
