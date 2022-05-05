import React from 'react';

let Content = () => {
    const Content_data = [
        {
            id: 1,
            imgSrc: "https://images.unsplash.com/photo-1639264416398-ff4509f6e1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            createBy: 'Silapakarn',
            likeCount: 500,
            commentCount: '1000k'

        },
        {
            id: 2,
            imgSrc: "https://images.unsplash.com/photo-1625806786037-2af608423424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            createBy: 'Silapakoon',
            likeCount: 500,
            commentCount: '1000k'
        },
        {
            id: 3,
            imgSrc: "https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            createBy: 'UUUUUU',
            likeCount: 500,
            commentCount: '1000k'
        },
        {
            id: 4,
            imgSrc: "https://images.unsplash.com/photo-1565347878188-d5a035536f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            createBy: 'KKKKKK',
            likeCount: 500,
            commentCount: '1000k'
        },
        {
            id: 5,
            imgSrc: "https://images.unsplash.com/photo-1567604713218-36a0f5841046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            createBy: 'YYYYY',
            likeCount: 500,
            commentCount: '1000k'
        },
        {
            id: 6,
            imgSrc: "https://images.unsplash.com/photo-1608249887976-3e564514024f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            createBy: 'UJLK:L',
            likeCount: 500,
            commentCount: '1000k'
        },
        {
            id: 7,
            imgSrc: "https://images.unsplash.com/photo-1608249815172-97e52017623f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            createBy: 'UOLJH',
            likeCount: 500,
            commentCount: '1000k'
        },
        {
            id: 8,
            imgSrc: "https://images.unsplash.com/photo-1608249889023-b110a2fceae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            createBy: 'RRRRR',
            likeCount: 500,
            commentCount: '1000k'
        },
      ];
    
    
    
    const GetContent = Content_data.map((x,i) => {

        return (
            <div className="container_Content" key={`picture${i}`}>
                <div style={{padding: '10px'}}>
                    <img className="img_Content" style={{width: '100%'}} src={x.imgSrc} alt={x.name} />
                </div>
    
                <div  className="Content_Name">
                    <h3>{x.name}</h3>
                </div>

                <div className="likeAndComment">
                    <a>10K like</a>
                    <a>100 comments</a>
                </div>
                
            </div>
        );
    });


    return <div className="GetContent">{GetContent}</div>
}



export default Content;