import './comments.css';
import {useState} from "react";
import {CommentData, comments} from "../../data/comments.ts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Comments (): JSX.Element {

    const [activeCommentIndex, setActiveCommentIndex] = useState<number>(0);

    const data: CommentData[] = comments;

    function handleNextComment(): void {
        if(activeCommentIndex < data.length-1) {
            setActiveCommentIndex(prevState => prevState + 1);
            console.log(activeCommentIndex);
        }
        if(activeCommentIndex === data.length-1) {
            setActiveCommentIndex(0);
        }

    }

    function handlePrevousComment(): void {
        if(activeCommentIndex > 0) {
            setActiveCommentIndex(prevState => prevState - 1);
            console.log(activeCommentIndex);
        }
        if(activeCommentIndex === 0) {
            setActiveCommentIndex(data.length-1);
        }
    }

    return (
        <div className='comments'>
            <div className="content-wrapper">
                <h2 className="comments-title">Opinie klientów</h2>
                <p className="comments-subtitle">Oto kilka opinii naszych zadowolonych klientów</p>
                <div className="comments-container">
                    <p className="comments-container_text">
                        {data[activeCommentIndex].content}
                    </p>
                </div>
                <div className="comments-buttons">
                    <button onClick={handlePrevousComment} className="comments-buttons_backwards">
                        <FaArrowLeft/>
                    </button>
                    <button onClick={handleNextComment} className="comments-buttons_forwards">
                        <FaArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}