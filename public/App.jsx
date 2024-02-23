/*
the transformation of JSX to JavaScript happened at runtime with past
code. this is inefficient. here, the transformation is moved to the 
build state in our development so that a ready-to-use version 
can be deployed.
*/

const element = (
  <div title="Outer div">
    <h1>Hello World!</h1>
  </div>
);

ReactDOM.render(element, document.getElementById('contents'));
