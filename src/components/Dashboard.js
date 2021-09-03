import NavigationBar from './NavigationBar';
import PostForm from './PostForm';


function Dashboard() {
  return (
    <>
      <NavigationBar />
      <h2 className= "display-4 text-center m-5">Dashboard! </h2>
      <PostForm />
    </>
  )
}

export default Dashboard
