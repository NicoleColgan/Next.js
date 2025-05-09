import {useState} from 'react';

  export default function HomePage() {
    //the 0 sets likes to 0 as a default
    const [likes, setLikes] = useState(0);

    const names = ['jon wick', 'jennifer lawrence', 'tom cruise'];

    function handleClick() {
      setLikes(likes + 1);
      console.log("increment the count")
    }

    return (
      <div>
        <Header title="I love React <3" />
        <Header />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <button onClick={handleClick}>Like ({likes})</button>
      </div>
    );
  }

  function Header({ title }) {
    console.log(title)
    return <h1>{title ? title : 'COOL NEW BLOG POST'}</h1>;
  }
