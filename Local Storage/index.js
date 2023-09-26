function retrieveData() {
  const userDataDisplay = document.getElementById('userData');
  userDataDisplay.innerHTML = '';
  
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const age = document.createElement('td');
    name.textContent = localStorage.getItem("name");
    age.textContent = localStorage.getItem("age");
    row.append(name, age);
    userDataDisplay.appendChild(row);
  
}
document.getElementById('userDataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  if (name && age) {
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
  }
});










