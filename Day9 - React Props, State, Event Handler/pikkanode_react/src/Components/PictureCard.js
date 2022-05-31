import React ,{useState} from 'react';

const PictureCard = (props) => {

    const [like, setLike] = useState(props.LikeCount)
    const [CountComment, setCountComment] = useState(props.commentCount)


    const onComment = (e) => {
        if(e.which === 13){
            alert('Thank you for Comment');
            setCountComment(CountComment + 1);
        }
    }

    const onClickLike = () => {
        setLike(like + 1);
    }


    const onChangeFunc =(event) => {
        console.log(event.target.value)
      }


    return <>
        <div className="container_Content">
            <p>ID: {props.id}</p>

            <div style={{padding: '10px'}}>
                <img className="img_Content" style={{width: '100%'}} src={props.imgSrc}></img>
            </div>
            
            <div className="Content_Name">
                <h3>{props.createBy}</h3>
            </div>
            
            <div>
                <p>Like: {like}</p>
                <input className='Like' type="button" value="Like" onClick={onClickLike}/> 
                <p>CommentCount: {CountComment}</p>
            </div>

            <div>
                <input className='Comment' type="text" onChangeFunc={onChangeFunc} onKeyPress={onComment} />
            </div>
        </div>
    </>
}

export default PictureCard;