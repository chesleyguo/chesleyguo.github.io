/**
 * "My Story" page content (story.html). English only for now: the Chinese page shows this text
 * marked lang="en". Section text and captions are the author's own words; edit them only here.
 *
 * photos: groups shown under a section. Each group is one figure with one caption; two images in a
 * group sit side by side (one column on narrow screens). `w`/`h` are the processed files' pixel
 * sizes, used so paired photos line up at the same height. An image whose file is missing is left
 * out; a group with no images left is not shown at all.
 */

export const storyTitle = 'My Story';

export const sections = [
  {
    when: 'ca. 2000s',
    title: 'A scar and a question',
    text: `I was raised by my grandparents in a rural village in China. When I was two, the village barefoot doctor stitched a cut on my face with ordinary thread and no anesthesia; the scar is still there. Safer care existed even then. It simply had not reached us. That scar planted the question I still work on: why does knowledge that could protect people so often fail to reach those who need it most?`,
  },
  {
    when: 'High school',
    title: 'Law and argument',
    text: `At an arts high school on the humanities track, politics and history were my strongest subjects, and I read law in my free time. I loved how a strong argument is built: find the information gap others have missed, then locate the point on which the logic turns. Law also seemed to me one of the few tools ordinary people have to defend their rights, if they know how to use it.`,
    photos: [
      {
        images: [
          { src: 'assets/story-pang-ying.jpg', w: 1200, h: 899, alt: 'Chesley with debater and author Pang Ying' },
          { src: 'assets/story-signed-book.jpg', w: 898, h: 1200, alt: 'Pang Ying’s inscription in Think Like a Debater' },
        ],
        caption: `With debater and author Pang Ying, who inscribed her book Think Like a Debater for me: “我偏要勉强” (“I choose to strive anyway”).`,
      },
    ],
  },
  {
    when: '2020',
    title: 'Into science',
    text: `In 2020, COVID-19 took the lives of several of my relatives, and I wanted to understand whether anything could have saved them. I became the first in my family to attend university, entering Xi’an Jiaotong-Liverpool University in mathematics and moving into bioinformatics, starting from zero in both. I also founded the university’s first student Law Society. We helped resolve more than 20 cases and secured housing refunds for students during the pandemic. Most students who came to us were not short of rights; they were short of information about them.`,
  },
  {
    when: '2022',
    title: 'The hardest year',
    text: `During research internships in Kunshan and Shanghai, I spent more than six months confined under lockdown, often without a reliable way to get food and unable to reach my family. As a nonbinary person, I also became a target of online harassment as LGBTQ content disappeared from Chinese platforms. That period left me with a disability, and with a second question: who decides what information people receive, and who is accountable when information systems fail them?`,
  },
  {
    when: '2023–2024',
    title: 'Finding information science',
    text: `I transferred to the University of Illinois Urbana-Champaign to study information science. There I sought treatment, built a strong support system, and saw my grades follow, finishing with a 3.91 GPA as an Edmund J. James Scholar. In my first information science class, Borges’s “The Library of Babel” showed me the field is about how people create, find, and trust knowledge, and I knew it was the problem I wanted to spend my life on.`,
    photos: [
      {
        images: [
          { src: 'assets/story-hopcroft.jpg', w: 1200, h: 900, alt: 'Chesley receiving a certificate from John Hopcroft on stage' },
        ],
        caption: `Receiving my certificate from Turing Award laureate John Hopcroft at the SJTU–THU–PKU Computer Science International Summer School, Shanghai, 2023.`,
      },
      {
        images: [
          { src: 'assets/story-commencement.jpg', w: 1200, h: 900, alt: 'Streamers at the UIUC commencement ceremony' },
          { src: 'assets/selfie_grad.jpg', w: 899, h: 1200, alt: 'Chesley’s graduation selfie' },
        ],
        caption: `Commencement at UIUC, 2024, the first in my family to earn a university degree.`,
      },
    ],
  },
  {
    when: '2024–2025',
    title: 'Inside AI products',
    text: `At ByteDance and Tencent, I worked on AI products used by millions of people. I saw how much these systems shape what people come to believe, and how rarely anyone on a product team is positioned to ask who is left out.`,
  },
  {
    when: '2025–',
    title: 'Development engineering at Berkeley',
    text: `At Berkeley, as an NSF NRT Fellow, I found the field where my questions meet: information and communication technologies for development, which asks how information systems can serve the communities usually last to benefit from them. My work now is to help build systems that carry reliable knowledge to the children and families still waiting for it to arrive.`,
  },
  {
    when: 'Outside work',
    title: 'My little brother',
    text: `Momo (墨墨), born in August 2024, is my little brother. He lives with my parents at home in Changzhou, China.`,
    photos: [
      {
        images: [
          { src: 'assets/story-dog-puppy.jpg', w: 1200, h: 900, alt: 'Momo as a one-month-old puppy' },
          { src: 'assets/story-dog-now.jpg', w: 192, h: 144, alt: 'Momo today' },
        ],
        caption: `Momo at one month old, and today.`,
      },
    ],
  },
];
