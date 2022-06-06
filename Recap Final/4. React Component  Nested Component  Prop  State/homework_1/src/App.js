import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import PictureCard from './Components/PictureCard'



function App() {

  let Content_data = [
    {
        id: 1,
        imgSrc: "https://images.unsplash.com/photo-1639264416398-ff4509f6e1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        createBy: 'Mr.Karn',
        LikeCount: 500,
        commentCount: 10

    },
    {
        id: 2,
        imgSrc: "https://images.unsplash.com/photo-1625806786037-2af608423424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        createBy: 'Mr.Sita',
        LikeCount: 500,
        commentCount: 10
    },
    {
        id: 3,
        imgSrc: "https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        createBy: 'Mr.Jame',
        LikeCount: 500,
        commentCount: 10
    },
    {
        id: 4,
        imgSrc: "https://images.unsplash.com/photo-1565347878188-d5a035536f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        createBy: 'Mr.Max',
        LikeCount: 500,
        commentCount: 10
    },
    {
        id: 5,
        imgSrc: "https://images.unsplash.com/photo-1567604713218-36a0f5841046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        createBy: 'Mr.Min',
        LikeCount: 500,
        commentCount: 10
    },
    {
        id: 6,
        imgSrc: "https://images.unsplash.com/photo-1608249887976-3e564514024f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        createBy: 'Mr.Count',
        LikeCount: 500,
        commentCount: 10
    },
    {
        id: 7,
        imgSrc: "https://images.unsplash.com/photo-1608249815172-97e52017623f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        createBy: 'Mr.Bee',
        LikeCount: 500,
        commentCount: 10
    },
    {
        id: 8,
        imgSrc: "https://images.unsplash.com/photo-1608249889023-b110a2fceae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        createBy: 'Mr.K',
        LikeCount: 500,
        commentCount: 10
    },
  ];

  return (
    <div className="App">
      <Header />


      <div className="GetContent">
        {Content_data.map((x)=>(
          <PictureCard 
            id={x.id} 
            imgSrc={x.imgSrc} 
            createBy = {x.createBy}
            LikeCount = {x.LikeCount}
            commentCount = {x.commentCount}
          />
      ))}</div>

        <div className="body_Footer">
            <Footer />
        </div>
     
    </div>
  );
}

export default App;
