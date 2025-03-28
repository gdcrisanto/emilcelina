import weddingHero from '../../public/assets/wedding_hero.jpeg';
import invitation1 from '../../public/assets/invitation1.png';
import invitation2 from '../../public/assets/invitation2.png';
import invitation3 from '../../public/assets/invitation3.jpeg';

const WEDDING_HERO = {
  image: weddingHero,
  title: 'Wedding Details',
};

const WEDDING_ANCHORS = [
  {
    title: 'Invitation',
    id: 'invitation',
  },
  {
    title: 'Schedule',
    id: 'schedule',
  },
  {
    title: 'Attire',
    id: 'attire',
  },
  // {
  // 	title: 'Entourage',
  // 	id: 'entourage',
  // },
];

const SCHEDULE_OF_EVENTS = {
  title: 'Schedule of Events',
  events: [
    {
      event: 'Arrival',
      description: 'Our Lady of Lourdes Parish',
      time: '3:00 PM',
    },
    {
      event: 'Ceremony',
      description: 'Our Lady of Lourdes Parish',
      time: '3:30 PM',
    },
    {
      event: 'Cocktails',
      description: 'The Lobby at Arocarrìa',
      time: '5:30 PM',
    },
    {
      event: 'Dinner',
      description: 'The Ballroom at Arocarrìa',
      time: '7:00 PM',
    },
    {
      event: 'After-Party',
      description: 'The Ballroom at Arocarrìa',
      time: '9:00 PM',
    },
  ],
};

const ATTIRE_FOR_GUESTS = {
  title: 'Attire for Guests',
  ladies: {
    title: 'Ladies',
    description: 'Floor-length gown in beige, ecru or taupe',
    subDescription: 'Please reserve white for the bride.',
  },
  gentlemen: {
    title: 'Gentlemen',
    description: 'Long-sleeved Barong Tagalog with black trousers',
    subDescription: 'We kindly request classic beige for your Barong Tagalog.',
  },
  colors: ['bg-[#F0E8DB]', 'bg-[#E2D4C5]', 'bg-[#D8C9BA]'],
  note: 'Dress code is strictly formal.',
};

const ENTOURAGE = {
  title: 'Entourage',
  sections: [
    {
      title: 'PRINCIPAL SPONSORS',
      names: [
        {
          left: 'Angel Emperado-Uy',
          right: 'Antonio Catangui',
        },
        {
          left: 'Jing Turalba',
          right: 'Bernie Fontanilla',
        },
        {
          left: 'Jo Catangui',
          right: 'Dindo Campilan',
        },
        {
          left: 'Rence Bascuña',
          right: 'Jorge Guerrero',
        },
        {
          left: 'Rhodora Kapunan',
          right: 'Robert Cano',
        },
        {
          left: 'Rose Mercado',
          right: 'Tim Abejo',
        },
      ],
    },
    {
      title: {
        left: 'BEST MEN',
        right: 'MAID & MATRON OF HONOR',
      },
      names: [
        {
          left: 'Emilio Cano IV',
          right: 'Janine Marie Crisanto',
        },
        {
          left: 'Gerald Lumba',
          right: 'Christine Anne Crisanto',
        },
      ],
    },
    {
      title: {
        left: 'GROOMSMEN',
        right: 'BRIDESMAIDS',
      },
      names: [
        {
          left: 'Elijah Corpus',
          right: 'Anna Dominique Yao',
        },
        {
          left: 'Josefino Catangui',
          right: 'Jessica Rae Siapno',
        },
        {
          left: 'JV Valerio',
          right: 'Julia Granada',
        },
        {
          left: 'Rafa Abaya',
          right: 'Samantha Mae Mercado',
        },
        {
          left: 'Ricky Fontanilla',
          right: 'Viktor Kristian Kapunan',
        },
      ],
    },
    {
      title: {
        left: 'CANDLE',
        right: 'VEIL',
      },
      names: [
        {
          left: 'Gian Lorenzo Crisanto',
          right: 'Gian Paolo Crisanto',
        },
        {
          left: 'Cyril Catherine Cano',
          right: 'Annie Concepcion',
        },
      ],
    },
    {
      title: 'CORD',
      names: ['Gian Diego Crisanto', 'Lorem Ipsum'],
    },
    {
      title: {
        left: 'COIN BEARER',
        right: 'BIBLE BEARER',
      },
      names: [
        {
          left: 'Lorem Ipsum',
          right: 'Lorem Ipsum',
        },
      ],
    },
    {
      title: 'RING BEARER',
      names: 'Lorem Ipsum',
    },
    {
      title: 'FLOWER GIRLS',
      names: ['Penelope Rose Crisanto', 'Sunny Alican', 'Tori Hu'],
    },
  ],
};

const INVITATION_IMAGES_DESKTOP = [invitation2, invitation1, invitation3];
const INVITATION_IMAGES_MOBILE = [invitation1, invitation2, invitation3];

export default {
  WEDDING_HERO,
  WEDDING_ANCHORS,
  SCHEDULE_OF_EVENTS,
  ATTIRE_FOR_GUESTS,
  ENTOURAGE,
  INVITATION_IMAGES_MOBILE,
  INVITATION_IMAGES_DESKTOP,
};
