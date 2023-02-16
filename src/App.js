import Profile from "./profile/profile";
import face from "./profile/face.png";
function App() {
 
  const person = [
    {
      Name:  'Jed Njima',
      bio: "hello i'm jed",
      prof: "web developer",
      image: face},
    {
      Name:  'Leila Rajah',
      bio: "hello i'm Leila",
      prof: "web developer",
      image: face },
    {
      Name:  'Ahlem Touati',
      bio: "hello i'm Ahlem",
      prof: "web developer",
      image:face
    },
  ];
  const alertName = (x) => { void
    alert(x);
  };

  return (
    <> 
     
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
     
    </>
  );
}
export default App;
