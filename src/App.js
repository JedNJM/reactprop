import Profile from "./profile/profile";
import face from "./profile/face.png";
function App() {
 
  const person = [
    {
      Name:  'jed',
      bio: "hello i'm jed",
      prof: "web developer",
      image: face},
    {
      Name:  'yo',
      bio: "hello i'm jed",
      prof: "web developer",
      image: face },
    {
      Name:  'med',
      bio: "hello i'm jed",
      prof: "web developer",
      image:face
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
