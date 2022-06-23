const welcome = () => {
  const inputValue = document.querySelector('input').value
  const generatedElement = document.createElement('p');
  generatedElement.innerHTML = `<p>Hello ${inputValue}, come one come all</p>`;
  document.body.appendChild(generatedElement);
}