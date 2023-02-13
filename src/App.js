import Profile from "./profile/profile";
function App() {
  const person = [
    {
      Name:  'jed',
      bio: "hello i'm jed",
      prof: "web developer",
      image:
        "https://c8.alamy.com/zooms/9/6dfa69b4eb06485ab6e1eb8ab3eed896/mrpm90.jpg",
    },
    {
      Name:  'jed',
      bio: "hello i'm jed",
      prof: "web developer",
      image:
        "https://c8.alamy.com/zooms/9/6dfa69b4eb06485ab6e1eb8ab3eed896/mrpm90.jpg",
    },
    {
      Name:  'med',
      bio: "hello i'm jed",
      prof: "web developer",
      image:
        "https://c8.alamy.com/zooms/9/6dfa69b4eb06485ab6e1eb8ab3eed896/mrpm90.jpg",
    },
  ];
  const alertName = (x) => { void
    alert(x);
  };

  return (
    <> 
      <div style={{ width: "400px", border: "2px solid black" }}>
        {person.map((el) => 
          <Profile
          img={el.image}
            x={el.Name}
            bio={el.bio}
            prof={el.prof}
            alertClick={() => alertName(
              el.Name)}
          />
        )}
      </div>
    </>
  );
}
export default App;
