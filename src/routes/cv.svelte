<script>
  import { getMarkdown } from '../lib';

  import CvPage from '../components/cvPage.svelte';

  const contact = {
    image: '/images/profile.webp',
    imageAlt: 'Profile picture',
    info: [
      {
        icon: 'mail',
        value: 'vig56@hotmail.com',
        type: 'E-mail'
      },
      {
        icon: 'location_on',
        value: 'Aarhus',
        type: 'Denmark'
      },
      {
        icon: 'today',
        value: 'March 20th, 1997',
        type: ''
      }
    ]
  };

  const experience = [
    {
      icon: 'work',
      title: 'Work Experience',
      text: getMarkdown('cv-work.md'),
    },
    {
      icon: 'school',
      title: 'Education',
      text: getMarkdown('cv-school.md'),
    },
    {
      icon: 'code',
      title: 'Events',
      text: getMarkdown('cv-events.md')
    }
  ];
</script>

<svelte:head>
  <meta name="keywords" content="developer,computer science,software engineering,cs,student,programmer,programming,cv" />
  <meta name="description" content="I am a student of Software Engineering. This site is made for my online CV and a timeline of my projects." />
  <meta name="og:description" content="I am a student of Software Engineering. This site is made for my online CV and a timeline of my projects." />
</svelte:head>

<CvPage contact={contact} experience={experience} />
