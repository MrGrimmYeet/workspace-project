const pages = {
    emails: 'pages/emails.html',
    todos: 'pages/todos.html',
    money: 'pages/money.html',
    calendar: 'pages/calendar.html'
  };
  
  function loadPage(page) {
    const content = document.getElementById('content');
    fetch(pages[page])
      .then(response => response.text())
      .then(data => content.innerHTML = data)
      .catch(err => console.error("Seite konnte nicht geladen werden:", err));
  }
  