<script>
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
      text: '**Frontend Developer at Ipaper**\n\n_FEB 2023 - Current_\n\nI will be working on various project\n___\n **API developer at Salling Group**\n\n_JAN 2021 - FEB 2023_\n\nMy main responsibilities are building new APIs, working with Kubernetes infrastructure and maintain our [Developer Portal](https://developer.sallinggroup.com/).\n___\n**Backend Developer at Salling Group**\n\n_DEC 2019 - JAN 2021_\n\nI moved to the backend to get experience in a different environment, I worked with Spring-boot in java, Openshift and a small amount of ReactJS.\n___\n**Frontend Developer at Salling Group**\n\n_SEP 2017 - DEC 2019_\n\nI work as a Frontend Developer where I worked with VueJS and Netlify. I was also a project-lead for [scocykler.dk](https://www.scocykler.dk).'
    },
    {
      icon: 'school',
      title: 'Education',
      text: '**Bachelor of Software Technology Engineering**\n\n_AUG 2021 - JAN 2023_\n\nVIA University College, Horsens.\n\nI had the following Electives:\n* Stochastic Modelling and Processing\n* Linear Algebra\n* IT Security and Cryptography in Practice ([chacha20-poly1305 paper](https://github.com/jhviggo/chacha20-poly1305/blob/master/viggo_SCP_iot_security_with_chacha20_poly1305.pdf))\n* Hardware Oriented programming\n\n___\n**AP Computer Science (Datamatiker)**\n\n_JAN 2019 - JUN 2021_\n\nI finished my AP degree at Business Academy Aarhus and had my internship and final project at Salling Group.\n___\n**High School**\n\n_AUG 2014 - JUN 2017_\n\nI went to the Danish High School HTX (Higher Technical Exams), where I focused on mathematics and programming.\n\n* Mathematics A\n* Electronics A\n* Information Technology B\n* Programming C'
    },
    {
      icon: 'code',
      title: 'Events',
      text: '**AUHack**\n\n_MAR 2022_\n\nI attended [AUHack](https://auhack.org/) in March of 2022 and my group won the LEGO case.\n___\n**The DEVOPS Conference**\n\n_Jun 2021_\n\n I attended the live [DEVOPS Conference](https://www.thedevopsconference.com/previous-years/tdoc-2021)\n___\n**Aarhacks**\n\n_NOV 2019_\n\nI attended [Arrhacks](https://aarhushacks.dk/aarhacks/) 24-hour hackathon and won the Christmas-hack category.\n___\n**CTF-Aarhus**\n\n_MAY 2019_\n\nI attended [CTF-aarhus](https://www.aarhus-ctf.dk/), a capture-the-flag event sponsored by Aarhus University. It was a 24-hour competition with plenty of challenges in various categories, web, Crypto, Reversing and more.\n___\n**AUHack**\n\n_APR 2019_\n\nI attended [AUHack](https://auhack.org/) in 2019 as attendee and Mentor for Salling Group.\n___\n**IT-camp for piger**\n\n_OCT 2018_\n\nI was an Organizer for [IT-camp for girls](https://www.itcamp.dk/), a Computer Science camp for High School girls held by Aarhus University.\n___\n**AUHack**\n\n_APR 2018_\n\nI attended [AUHack](https://auhack.org/) in 2018 as Wizard (aka. Tech, it and programming helper).\n___\n**DotJS Conference**\n\n_NOV 2018_\n\nI attended [DotJS 2018](https://2018.dotjs.io/) in Paris with part of my team from work. We attended all the talks and presented the new-found techniques for the rest of the team.'
    }
  ];
</script>

<svelte:head>
  <meta name="keywords" content="developer,computer science,software engineering,cs,student,programmer,programming,cv" />
  <meta name="description" content="I am a student of Software Engineering. This site is made for my online CV and a timeline of my projects." />
  <meta name="og:description" content="I am a student of Software Engineering. This site is made for my online CV and a timeline of my projects." />
</svelte:head>

<CvPage contact={contact} experience={experience} />
