<script>
  import FrontPage from '../components/frontPage.svelte';

  const intro = {
    headline: 'Viggo Petersen',
    description: 'I\'m a software developer who loves learning and challenging myself, most of my days are spend reading, coding or hacking away, be it through my studies, work or spare time!',
    portrait: '/images/headshot_outline.webp',
    portraitAlt: 'Portrait'
  };

  const coreValues = [
    {
      icon: 'cloud_done',
      color: 'green',
      title: 'Reliability',
      text: 'Services should always be available and ready for use and we have the tools to make that happen, we just need to use them'
    },
    {
      icon: 'memory',
      color: 'blue',
      title: 'Optimization',
      text: 'Making code more reliable, run faster or use less memory can be a challenge as it may require vast knowledge of algorithms and data structures, but nothing beats the feeling of making great code'
    },
    {
      icon: 'lightbulb',
      color: 'yellow',
      title: 'Creativity',
      text: 'Being creative and having fun is very important! Attending coding challenges, hackathons or creating something ridiculous is great for expanding ones knowledge and creative thinking'
    },
  ];
</script>

<svelte:head>
  <meta name="keywords" content="developer,computer science,software engineering,cs,student,programmer,programming,cv" />
  <meta name="description" content="I am a student of Software Engineering. This site is made for my online CV and a timeline of my projects." />
  <meta name="og:description" content="I am a student of Software Engineering. This site is made for my online CV and a timeline of my projects." />
</svelte:head>

<FrontPage intro={intro} coreValues={coreValues} />
