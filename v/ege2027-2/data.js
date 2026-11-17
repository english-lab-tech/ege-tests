/* Тест 2 из сборника «ЕГЭ 2027. Типовые экзаменационные варианты» (Национальное образование). */
window.VARIANT = {
  id: 'ege2027-2',
  title: 'ЕГЭ 2027 · Тест 2',
  source: 'ЕГЭ 2027. Типовые экзаменационные варианты · Вариант 2',
  listening: { audio: 'audio/listening.mp3', marks: [[0, 'b1'], [743, 'b2'], [1288, 'b3']] },
  written: [
    { section: 1, title: 'Аудирование', items: [
      { type: 'match', id: 1, block: 'b1', points: 2,
        instr: 'Вы услышите 6 высказываний. Установите соответствие между высказываниями каждого говорящего A–F и утверждениями, данными в списке 1–7. Используйте каждое утверждение, обозначенное соответствующей цифрой, только один раз. В задании есть одно лишнее утверждение. Вы услышите запись дважды.',
        options: [
          'I didn’t like my school trip, but I learned a lesson.',
          'I enjoy having history lessons on school trips.',
          'I like to buy something to remember school trips.',
          'I prefer to spend time in a calmer way.',
          'The trip helped me to show one of my talents.',
          'I want to repeat this school trip experience.',
          'School trips can well replace science lessons.'
        ],
        rowLabel: 'Говорящий', rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '371645' },
      { type: 'tf', id: 2, block: 'b2', points: 3,
        instr: 'Вы услышите диалог. Определите, какие из приведённых утверждений A–G соответствуют содержанию текста (1 — True), какие не соответствуют (2 — False) и о чём в тексте не сказано, то есть на основании текста нельзя дать ни положительного, ни отрицательного ответа (3 — Not stated). Вы услышите запись дважды.',
        statements: [
          ['A', 'Mary’s mother does not approve of the use of AI.'],
          ['B', 'Peter frequently uses AI to do his homework for him.'],
          ['C', 'Peter’s older sister graduates this year from school.'],
          ['D', 'Mr Davies teaches a course on digital tools.'],
          ['E', 'The school Mary and Peter attend has a clear AI policy.'],
          ['F', 'Peter can help Mary to work on paraphrasing.'],
          ['G', 'Mary and Peter are meeting at the library at 6 p.m.']
        ], key: '1223311' },
      { type: 'intro', block: 'b3', text: 'Вы услышите интервью. В заданиях 3–9 выберите ответ 1, 2 или 3, соответствующий выбранному Вами варианту ответа. Вы услышите запись дважды.' },
      { type: 'mc', id: 3, block: 'b3', q: 'What do we learn about Leo Martinez at the beginning of the show?',
        opts: ['He used to dance hip-hop.', 'He blends different techniques.', 'He runs an exposition on the Verde Coast.'], key: '2' },
      { type: 'mc', id: 4, block: 'b3', q: 'How old was Leo when he started creating art?', opts: ['11', '13', '15'], key: '2' },
      { type: 'mc', id: 5, block: 'b3', q: 'How does Leo feel about selling his first painting?',
        opts: ['It motivated him to keep drawing.', 'It got him into the profession.', 'It was just another step.'], key: '3' },
      { type: 'mc', id: 6, block: 'b3', q: 'Which one is NOT mentioned as Leo’s source of inspiration?',
        opts: ['History of art.', 'Local legends.', 'Modern folklore.'], key: '3' },
      { type: 'mc', id: 7, block: 'b3', q: 'What helps Leo to create a surreal effect in his works?',
        opts: ['Layering different paints.', 'Working with spray paint.', 'Combining images and motifs.'], key: '1' },
      { type: 'mc', id: 8, block: 'b3', q: 'What does Leo advise to artists-to-be?',
        opts: ['Connect with others.', 'Experiment with materials.', 'Practise no matter what.'], key: '3' },
      { type: 'mc', id: 9, block: 'b3', q: 'What is the main aim of Leo’s exhibition?',
        opts: ['To inspire others to create.', 'To show his new paintings.', 'To teach about cultural diversity.'], key: '1' }
    ]},
    { section: 2, title: 'Чтение', items: [
      { type: 'match', id: 10, points: 3,
        instr: 'Установите соответствие между текстами A–G и заголовками 1–8. Используйте каждую цифру только один раз. В задании один заголовок лишний.',
        options: ['Cleaning the air', 'Forests need help', 'Important in many ways', 'Not all forests are the same',
                  'Forest wildlife', 'Forest careers', 'Making us happier', 'An open-air pharmacy'],
        texts: [
          'Over a third of our planet is covered in forest. Rainforests, kelp forests, pine forests, coniferous forests… Forests of all types and sizes are necessary for the health of the Earth. They are home to more than half of the world’s land-based animals, plants, and insects, and also support the lives of around 1.6 billion people. Forests are so much more than just areas of trees, plants, shrubs, and dirt — they are the lungs of the planet, producing a large amount of the oxygen people and animals breathe.',
          'The amount of carbon dioxide in the atmosphere has grown greatly in the last 100 years. Because of the sudden climate change, heatwaves, floods, droughts, and storms have become more frequent. Forests help the planet to fight back. They remove and store carbon dioxide from the atmosphere. Forests can also act like natural air filters. They trap things such as dust and other pollutants — which can be harmful to humans and animals — in their leaves and branches. This gives us fresher oxygen!',
          'Did you know that many of the world’s most important medical treatments come directly from forests? The leaves and bark from all kinds of trees are used for medicinal purposes by various cultures around the world. Here are some examples. The bark of white willow contains salicin, which is a natural compound similar to aspirin, and can be used as a pain-reliever. Birch bark contains betulin, which can treat viruses. And eucalyptus leaves contain important oils that have been used in different medicines.',
          'As well as producing much of the air people breathe and regulating the climate, forests are really meaningful to human beings. Cultures all over the world respect the forests, showing their connection to this environment. For many cultures, forests are places of beauty, freedom, and adventure. Spending more time in forests, close to nature, has been proved as a way to reduce stress, anxiety, and depression. So, forests can promote mental and emotional health of individuals and communities.',
          'As forests are necessary for the health and survival of life on the planet, people have to protect them from being destroyed. Deforestation, climate change, and wildfires have already caused damage to them. Most forest losses have happened in the last 300 years alone. All that forest was once home to billions of species, now no longer existing. Trying to protect the world’s forests means saving the planet’s health, fighting back against climate change, and keeping resources for future generations.',
          'Forests exist in various forms, shaped by their geographic locations, climates, and main plant types. Different types of forests are usually grouped into three main categories: boreal, temperate, and tropical. Each category of forest has a number of typical features and its own types. For example, rainforests are a type of tropical forests that are considered to be the most threatened by human activities. Coniferous forests are temperate forests with evergreen trees that keep their leaves and grow slowly all year.',
          'For people, forests are many things. They are places of natural beauty, economic possibilities, and survival. The forest sector also offers a lot of job opportunities, such as foresters, natural resource managers, scientists, engineers, and many more. Working in forest areas is more than just planting trees and fighting forest fires, although managing those tasks may be part of a forester’s working duties. It also includes professionals who specialise in certain parts of the forest, such as soil, water, or wildlife.'
        ],
        rowLabel: 'Текст', rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], key: '3187246' },
      { type: 'gaps', id: 11, points: 2,
        instr: 'Прочитайте текст и заполните пропуски A–F частями предложений, обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя.',
        title: 'Kolomenskoe',
        paras: [
          'The Kolomenskoe Museum-Reserve was founded in 1923. It is located on the bank of the Moscow River, and surrounded by over 350 hectares of ancient woodland, {A}. Kolomenskoe was first mentioned in chronicles in 1339. Since the 14th century, Kolomenskoe had been the summer residence of grand princes of Moscow, and then Russian tsars. Peter the Great spent his childhood there.',
          'Kolomenskoe features a lot of ancient wooden structures, such as beautiful churches and tent-roof constructions. The earliest building, {B}, is the Church of Ascension, first mentioned in historical documents in 1532. As the legend says, it was built by Grand Prince Vasily III in order {C} and heir to the throne, who later became Ivan the Terrible. It was the first tent-roof church to be built in stone.',
          'There is also the stunning Wooden Palace of Tsar Alexey Mikhailovich Romanov — recently reconstructed. Although it was only a summer palace, it was the tsar’s favourite residence. Tourists will have a unique chance {D}. The palace consists of six buildings connected by passages. The architecture and decor of the 24 reconstructed chambers correspond to their functions. The interior decor is bright and varied, {E} a fairy-tale palace.',
          'Today, Kolomenskoe is one of the most beautiful and popular places in Moscow. Kolomenskoe hosts a number of events {F} as Maslenitsa, Easter, and others.'
        ],
        options: ['which has survived until the present', 'which is now a well-preserved area', 'and a variety of local museums, such',
                  'to thank God for the birth of his son', 'which turns the whole building into', 'and traditional Russian festivals, such',
                  'to see the way of life of the Russian tsars'],
        rows: ['A', 'B', 'C', 'D', 'E', 'F'], key: '214756' },
      { type: 'text', title: 'Social media effects',
        instr: 'Прочитайте текст и выполните задания 12–18. В каждом задании выберите ответ 1, 2, 3 или 4.',
        paras: [
          'Do you remember the beginnings of social media? A time when no one cared about how many likes they made, and didn’t care how their content looked. When some people didn’t recognise now-famous names. Not to mention that mental health problems were not a common topic of discussion.',
          'Recent studies show social media’s negative effects, as they have dramatically increased depression and anxiety. Almost 70% of adults and 81% of teens use social media daily, and it’s no surprise that I also find myself in these percentages. I think it’s safe to say that we are addicted to social media. But how did we get here?',
          'We need to face the fact that social media’s negative effects are triggered by digital platforms, which create an instant gratification system that causes our amount of dopamine to increase dramatically. And this dopamine spike makes our brain want to pursue the use of social media channels in the endless search for nothing important.',
          'Let me very briefly explain how social media and mental health can lead to addiction. Dopamine is responsible for us feeling satisfied and motivated to pursue a certain action. When we have a dopamine spike in our brain, we feel good. Normally that would come with a certain degree of effort, like completing a task. Now, here comes a problem.',
          'The dopamine system gets triggered by the first interesting social media post that we find, making us feel good, and raising the secretion of dopamine. We neither made any effort to get that spike, nor will we get a spike that big with any following posts, unless we have a longer break from the phone. But we’ll continue scrolling in an endless subconscious pursuit to get the same brain impulse that we got previously.',
          'Another explanation is that, to a certain degree, our brain processes social media like it would process a gambling addiction. We refresh the feed the same way we would do with a slot machine, waiting to see if we got a prize or an interesting post next. We receive a notification and immediately check our screen to see what it is.',
          'Have you ever thought you received a notification, but when you checked your phone you saw that it was nothing? Well, this phantom call or notification is caused by our brain cravings, making us pick up the phone under the false expectation of reward, validation, or whatever you want to call it on a case-by-case basis. The idea is that this is not happening by mistake. Specialist teams work full-time to make us addicted to social media. I am not saying these are bad people. All I’m saying is that their job is to think up, find, and design features and mechanisms that tackle our reward and motivation brain system. Look at the short videos, which have become a whole trend. Being easy to consume, to share, and able to quickly go viral, this content format gets people in a sort of trance, scrolling for hours, even though their inner dialogue says it’s time to stop.',
          'We also can get this dopamine response when we post something and receive instant gratification or validation from others — through likes, reactions, and comments. I think we can highlight an idea: instant gratification creates psychological cravings. It creates a bubble that is only valid in the online world, making us believe that it also applies to the real world.',
          'Realising that it’s only a bubble we are in is the first and most important thing. Whatever we do afterward, whether it is taking regular breaks from social media or just adapting our online presence to a healthier and personal point of view, it all starts with acknowledging the problem.'
        ] },
      { type: 'mc', id: 12, q: 'According to the text, at the beginning, social media DID NOT…',
        opts: ['have a like feature.', 'affect mental health.', 'have so many users.', 'lead to discussion.'], key: '2' },
      { type: 'mc', id: 13, q: 'The word <i>spike</i> in “And this dopamine <b>spike</b> makes our brain” (paragraph 3) is closest in meaning to…',
        opts: ['change.', 'rise.', 'creation.', 'feature.'], key: '2' },
      { type: 'mc', id: 14, q: 'The problem outlined in paragraphs 4 and 5 is that…',
        opts: ['the influence of social media on mental health is hard to explain.', 'we constantly need dopamine to feel satisfied and content.', 'the production of dopamine influences brain’s reward system.', 'we get dopamine satisfaction from social media without any work.'], key: '4' },
      { type: 'mc', id: 15, q: 'The author compares social media to gambling to explain the… of social media addiction.',
        opts: ['danger', 'mechanism', 'speed', 'spread'], key: '2' },
      { type: 'mc', id: 16, q: '<i>This</i> in “<b>this</b> is not happening by mistake” (paragraph 7) most probably refers to…',
        opts: ['receiving fake information.', 'checking notifications often.', 'a careful design of social media.', 'a strong desire to get an update.'], key: '4' },
      { type: 'mc', id: 17, q: 'Which is NOT mentioned in the text as a reason for developing an addiction to social media?',
        opts: ['A wish to escape reality.', 'Looking for quick satisfaction.', 'Fast recognition by others.', 'Effortless entertainment.'], key: '1' },
      { type: 'mc', id: 18, q: 'In the last two paragraphs, what does the author encourage the reader to do first?',
        opts: ['Stop using social media for some time.', 'Change your attitude to the online world.', 'Differentiate social media from reality.', 'Solve the problem with special help.'], key: '3' }
    ]},
    { section: 3, title: 'Грамматика и лексика', items: [
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, обозначенных номерами 19–24, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Is Konyukhov an explorer or traveller?' },
      { type: 'word', id: 19, word: 'BUILD', s: 'Fyodor Konyukhov is generally considered both an explorer and a traveller — but “explorer” is the more accurate term for his public image. He’s not just visiting places for leisure; his career ___ around extreme, often first-ever expeditions: solo sailing around the world, travelling to both poles, balloon flights, mountain climbs, desert crossings, etc.', key: ['is built', 'has been built'] },
      { type: 'word', id: 20, word: 'HE', s: 'These feats put ___ in the same category as other modern explorers, rather than casual travellers.', key: ['him'] },
      { type: 'word', id: 21, word: 'CROSS', s: 'Konyukhov has set world records, notably ___ the Atlantic Ocean in a row-boat, URALAZ, in 46 days.', key: ['crossing'] },
      { type: 'word', id: 22, word: 'TRAVEL', s: 'In November 2019, he said he ___ in a balloon into the stratosphere, and in 2025, Fyodor Konyukhov and Ivan Menaylo set a new Russian record, reaching 10,678 metres in a hot air balloon.', key: ['would travel'] },
      { type: 'word', id: 23, word: 'HIGH', s: 'Fyodor is the first Russian mountaineer to complete the Seven Summits challenge, for which a person must climb the ___ mountains of each of the seven continents.', key: ['highest'] },
      { type: 'word', id: 24, word: 'CREATE', s: 'During his travels Fyodor Konyukhov is engaged in research and creative work: he writes books and paints. In total, he ___ more than 3 thousand paintings and several books.', key: ['has created'] },
      { type: 'intro', text: 'Прочитайте приведённый ниже текст. Образуйте от слов, напечатанных заглавными буквами в конце строк, обозначенных номерами 25–29, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста. Заполните пропуски полученными словами.' },
      { type: 'heading', text: 'Travellers and explorers' },
      { type: 'word', id: 25, word: 'PERSON', s: 'An explorer is someone who travels to places where no one has ever been, in order to find out what is there. Their purpose is discovery of unknown territories and new knowledge. A traveller is someone who makes a journey for ___ experience and pleasure.', key: ['personal'] },
      { type: 'word', id: 26, word: 'HISTORY', s: 'The motivation behind explorers’ journeys is primarily scientific, educational, or ___ in nature.', key: ['historical'] },
      { type: 'word', id: 27, word: 'FIND', s: 'They aim to document their ___ for the advancement of human knowledge, whether it’s charting unmapped land, studying unique cultures, or collecting scientific data.', key: ['findings'] },
      { type: 'word', id: 28, word: 'TYPICAL', s: 'Explorers are ___ associated with adventure, discovery, and bravery. World history knows many famous explorers. Some of the names included in Encyclopedia Britannica’s list of Russian explorers are S. I. Dezhnyov, V. M. Golovnin, A. J. Krusenstern, and N. Przhevalsky.', key: ['typically'] },
      { type: 'word', id: 29, word: 'DAY', s: 'Conversely, travellers are motivated by a wide range of personal reasons, including leisure, the pursuit of happiness, and the desire to escape the routine of ___ life. They may visit popular tourist destinations or off-the-beaten-track locations, but their goal is to experience the local culture and way of life.', key: ['daily'] },
      { type: 'cloze', title: 'Great Grandmother',
        instr: 'Прочитайте текст с пропусками, обозначенными номерами 30–36. Эти номера соответствуют заданиям 30–36, в которых представлены возможные варианты ответов. Выберите ответ 1, 2, 3 или 4.',
        paras: [
          'I never met my Great Grandmother. From my father’s stories I know for sure that she was a {30} woman. She had never had a day of schooling in her life, but she was a born scholar, in a time and place where the term was unknown. A farmer in a remote village, she fixed a book-rest to her spinning wheel so that could read while spinning. Fiction, even great fiction, did not {31} to her — she read books on geology, on plant life, on the solar system, etc. She did not want to “escape” from the real world — she wanted to know about it. I was {32} by that, even as a child. Now I find it touching, as well. All fourteen of her children {33} school, which was almost unheard of in those days. Homework came before farm work for her kids — never {34} that people had to work hard for every small bit of food they could get.',
          'At some stage, probably quite early on, our father banged a nail into the wall of the master bedroom and hung upon it the picture of our Great Grandmother. We all grew up knowing about her dreams and being {35} of her gaze. For me, it was an unnerving experience. I was always convinced that she {36} of us all, with just one exception.'
        ],
        tasks: [
          { id: 30, opts: ['considerable', 'remarkable', 'comfortable', 'noticeable'], key: '2' },
          { id: 31, opts: ['attract', 'appeal', 'satisfy', 'invite'], key: '2' },
          { id: 32, opts: ['impatient', 'improved', 'indebted', 'impressed'], key: '4' },
          { id: 33, opts: ['finished', 'graduated', 'concluded', 'fulfilled'], key: '1' },
          { id: 34, opts: ['mind', 'think', 'care', 'worry'], key: '1' },
          { id: 35, opts: ['awake', 'amazed', 'aware', 'anxious'], key: '3' },
          { id: 36, opts: ['disappointed', 'dissatisfied', 'displeased', 'disapproved'], key: '4' }
        ] }
    ]},
    { section: 4, title: 'Письмо', items: [
      { type: 'email', id: 37, min: 100, max: 140,
        from: 'Sophia@mail.uk', to: 'Russian_friend@ege.ru', subject: 'Souvenirs',
        body: '…I have an unusual hobby — I collect tea cups brought from different cities I’ve been to. What souvenirs do you usually bring from your trips, if any? Is it a good idea to buy souvenirs for yourself and your family or friends? Why, or why not? What souvenir would you advise me to buy during my future visit to Russia?<br>…Last week, I won the local dance contest…',
        task: 'Write an email to Sophia.<br>In your message:<br>— answer her questions;<br>— ask 3 questions about the dance contest.<br>Write 100–140 words.<br>Remember the rules of email writing.' },
      { type: 'project', id: 38, min: 200, max: 250,
        choices: [
          { n: '38.1', topic: 'mobile phones',
            lead: 'Imagine that you are doing a project on <b>how teenagers in Zetland use their mobile phones</b>. You have found some data on the subject — the results of a survey conducted among Zetland teenagers (see the table below).',
            question: 'What do you mostly use your mobile phone for?',
            chart: { kind: 'table', head: ['Options', 'Number of respondents (%)'],
              rows: [['Surfing the net', 38], ['Texting', 30], ['Listening to music', 17], ['Taking photos', 10], ['Calling', 5]] },
            problem: 'outline a problem that can arise with using mobile phones and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the role of mobile phones in the lives of young people.' },
          { n: '38.2', topic: 'unusual hobbies',
            lead: 'Imagine that you are doing a project on <b>unusual hobbies</b>. You have found some data on the subject — the results of a survey conducted among Zetland school students (see the pie chart below).',
            question: 'What unusual hobby would you like to try?',
            chart: { kind: 'pie', rows: [['Robotics', 33], ['Rock climbing', 29], ['Horseback riding', 20], ['Graffiti art', 13], ['Astronomy', 5]] },
            problem: 'outline a problem that can arise with choosing a hobby and suggest a way of solving it;',
            conclude: 'conclude by giving and explaining your opinion on the importance of having a hobby in the lives of young people.' }
        ] }
    ]}
  ],
  oral: {
    t1: {
      lead: 'Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.',
      text: 'This rich, dark chocolate sponge cake with apricot jam and a thin layer of bitter sweet chocolate icing is one of the specialities of the capital of Austria. It can be found in practically every coffee and cake shop in the city. The closely guarded secret recipe dates back to 1832 when the Prince placed an order for a special dessert for himself and expecting guests. Unfortunately, the pastry chef of the Prince’s court kitchen got sick and his 16-year-old trainee Franz had to help out his master. He took the challenge and created a special dessert for guests of the court. The cake was a hit and after finishing his apprenticeship, Franz started to work for himself. The family business took another upward turn when his son opened their own hotel in 1876. He refined his father’s creation and it became the chocolate cake that we know today.'
    },
    t2: {
      title: 'The world of fun!', img: 'img/ad.jpg',
      lead: 'You are considering visiting the new playground with your younger sister and now you’d like to get more information. In 1.5 minutes you are to ask four direct questions to find out about the following:',
      points: ['number of slides;', 'busiest hours;', 'price for one;', 'age restrictions.']
    },
    t3: {
      clips: ['audio/t3-q1.mp3', 'audio/t3-q2.mp3', 'audio/t3-q3.mp3', 'audio/t3-q4.mp3', 'audio/t3-q5.mp3'], outro: 'audio/t3-end.mp3',
      questions: [
        'Do you help your parents with household chores?',
        'Do you have a favourite household chore? Why do you like it?',
        'What do you find the most difficult thing about cleaning the house?',
        'Do you prefer doing chores alone or with someone else? Why?',
        'Can teenagers in your area earn pocket money by helping others with their household chores? Have you ever got paid for it?'
      ]
    },
    t4: {
      lead: 'Imagine that you and your friend are doing a school project “Leisure time”. You have found some photos to illustrate it but for technical reasons you cannot send them now. Leave a voice message to your friend explaining your choice of the photos and sharing some ideas about the project. In 2.5 minutes be ready to:',
      plan: [
        'explain the choice of the illustrations for the project by briefly describing them and noting the differences;',
        'mention the advantages (1–2) of the two ways of spending leisure time;',
        'mention the disadvantages (1–2) of the two ways of spending leisure time;',
        'express your opinion on the subject of the project — say which of the ways of spending your leisure time you prefer and why.'
      ],
      photos: ['img/photo1.jpg', 'img/photo2.jpg']
    }
  }
};
