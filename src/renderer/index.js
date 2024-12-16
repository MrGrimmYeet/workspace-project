function switchTab(tab) {
    // Alle Tabs ausblenden
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Alle Tab-Buttons zurücksetzen
    let tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Das ausgewählte Tab anzeigen
    document.getElementById(tab).classList.add('active');

    // Den entsprechenden Button aktivieren
    document.querySelector(`.tab-btn[onclick="switchTab('${tab}')"]`).classList.add('active');
}
