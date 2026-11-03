(() => {
  const v = location.pathname.includes('/v1') ? 'v1' : 'v2';
  const root = document.getElementById('documentation');
  const nav = [...document.querySelectorAll('.sidebar a')];
  nav.forEach(a => { if (a.pathname.includes(v)) a.classList.add('active'); });
  const docs = {
    v1: {
      label: 'Version 1', badge: 'LEGACY', summary: 'Create a lesson with positional arguments. This version returns the identifier as lesson_id.',
      signature: 'createLesson(name, language)',
      request: `from nanouu_learning import Client

client = Client(api_key="YOUR_API_KEY")
lesson = client.createLesson("Python Basics", "en")
print(lesson["lesson_id"])`,
      response: `{"lesson_id": "lsn_2048", "status": "created"}`,
      note: 'Version 1 is maintained for existing projects. New projects should use Version 2.'
    },
    v2: {
      label: 'Version 2', badge: 'CURRENT', summary: 'Create a lesson with a named object. This version returns the identifier as id and accepts a learner level.',
      signature: 'create_lesson({ title, language, level })',
      request: `from nanouu_learning import Client

client = Client(api_key="YOUR_API_KEY")
lesson = client.create_lesson({
    "title": "Python Basics",
    "language": "en",
    "level": "beginner"
})
print(lesson["id"])`,
      response: `{"id": "lesson_2048", "state": "created"}`,
      note: 'Version 2 uses named fields and includes the learner level. Do not read lesson_id or status from a v2 response.'
    }
  };
  const d = docs[v];
  document.title = `Nanouu Learning API — ${d.label} docs`;
  root.innerHTML = `<p class="eyebrow">${d.badge} · API REFERENCE</p>
    <h1>${d.label}</h1><p>${d.summary}</p>
    <h2>Create a lesson</h2><p><code>${d.signature}</code></p>
    <h2>Python example</h2><pre><code>${d.request}</code></pre>
    <h2>Example response</h2><pre><code>${d.response}</code></pre>
    <p class="notice">${d.note}</p>
    <h2>Version links</h2><p><a href="/docs/v1/">v1 reference</a> · <a href="/docs/v2/">v2 reference</a></p>`;
})();
