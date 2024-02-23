// old browsers do not support Array.from() and arrow functions.
// we will use some of these advanced features here
// and construct a message for each continent.
const continents = ['Africa','America','Asia','Australia','Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(' ');

// here we change hardcoded message to using the message variable
const element = (
  <div title="Outer div">
    <h1>{message}</h1>
  </div>
);

ReactDOM.render(element, document.getElementById('contents'));
