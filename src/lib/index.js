export async function getMarkdown(name) {
  if (!name) {
    throw new Error('Must give name of Markdown file to fetch.');
  }

  const res = await fetch(`/md/${name}`, {
    'Content-type': 'text/html'
  });

  if (!res.ok) {
    throw new Error('Markdown file not available.');
  }

  return res.text();
}

export async function getProjects() {
  console.log('ok');
  const response = await fetch('/api/projects.json', {
    'Content-type': 'application/json'
  });
  console.log('still');
  if (!response.ok) {
    throw new Error('Unable to fetch projects.');
  }

  return response.json();
}
