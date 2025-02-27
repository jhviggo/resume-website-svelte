<script>
  export let contact, experience;

  import Panel from './panel.svelte';
  import Icon from './icon.svelte';
  import SkillBar from './skillBar.svelte';

  import { marked } from 'marked';

  const tools = [
    {
      skillGroup: 'advanced',
      content: 'Linux'
    },
    {
      skillGroup: 'advanced',
      content: 'Git'
    },
    {
      skillGroup: 'intermediate',
      content: 'Docker & Kubernetes'
    },
    {
      skillGroup: 'intermediate',
      content: 'Cloud platforms'
    },
    {
      skillGroup: 'learning',
      content: 'Embedded systems'
    }
  ];

  const languages = [
    {
      skillGroup: 'advanced',
      content: 'Node JS & Typescript'
    },
    {
      skillGroup: 'intermediate',
      content: 'Python'
    },
    {
      skillGroup: 'intermediate',
      content: 'Vue, Svelte'
    },
    {
      skillGroup: 'intermediate',
      content: 'Go'
    },
    {
      skillGroup: 'basic',
      content: 'SQL'
    },
    {
      skillGroup: 'basic',
      content: 'C/C++'
    },
    {
      skillGroup: 'learning',
      content: 'FreeRTOS AVR'
    },
    {
      skillGroup: 'learning',
      content: 'Shell script'
    }
  ];
</script>

<div class="container">
  <div class="row mt-3">
    <div class="col-12 col-md-4 col-lg-3 mb-3 pe-0">
      <div class="mb-3">
        <Panel>
          <img class="profile" src={contact.image} alt={contact.imageAlt}/>
          <div class="contact">
            {#each contact.info as info}
              <div class="p-3">
                <Icon colorClass="blue">{info.icon}</Icon>
              </div>
              <div class="contact-details pt-3">
                <span>{info.value}</span>
                <span>{info.type}</span>
              </div>
            {/each}
          </div>
        </Panel>
      </div>
      <Panel>
        <div class="p-3">
          <SkillBar title="Programming" skills={languages} />
          <div class="mb-4"/>
          <SkillBar title="Tools & Services" skills={tools} />
        </div>
      </Panel>
      
    </div>
    <div class="col-12 col-md-8 col-lg-9 mb-3">
      {#each experience as exp}
        <div class="mb-3">
          <Panel>
            <div class="p-3">
              <h3 class="experience-title">
                <span class="me-2"><Icon colorClass="blue">{exp.icon}</Icon></span>
                {exp.title}
              </h3>
              {#await exp.text}
                Loading...
              {:then md} 
                {@html marked.parse(md)}
              {:catch}
                ⚠️ Unable to fetch '{exp.title}'
              {/await}
            </div>
          </Panel>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
.profile {
  width: 100%;
}

.contact {
  display: grid;
  grid-template-columns: auto 1fr;
}

.contact-details {
  display: grid;
  grid-template-rows: 1fr 1fr;
  
  &:not(:last-child) {
    border-bottom: 1px solid $text;
  }
}

.experience-title {
  display: flex;
}

/* marked js */
:global {
  p {
    margin-bottom: 0;
  }

  a {
    color: $blue;
    text-decoration: none;
  }
}
</style>
