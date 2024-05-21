//import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function MyButton2() {
  return (
    <div dangerouslySetInnerHTML={{__html: 'In this case we create a function and return the HTML h1 tag and the button tag with the text inside, then export the default my app function, to display this page.<br><br>In this case, the button is nested in the my app function.<br><br><small>React component names must always start with a capital letter, while HTML tags must be lowercase.</small>'}} />

  );
}
export default function MyApp() {
  return (
    <div>
      <h1>React Components and Nested Components</h1>
      <p>Example of a React Component:</p>
	  <MyButton />
	  <p></p>
	  <MyButton2 />
    </div>


  );
}
	
