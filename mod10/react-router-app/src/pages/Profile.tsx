import { useParams } from "react-router-dom";

function ProfilePage() {
    const params = useParams();
    console.log(params);
    
  return (
    <main>
      <h1>Profile Page</h1>
      <h3>Hello {params.username}</h3>
    </main>
  );
}

export default ProfilePage;
