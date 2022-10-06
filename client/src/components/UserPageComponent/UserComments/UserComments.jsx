import { Avatar, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import { Box } from '@mui/system';
import Button from '@mui/joy/Button';
import { setAllComments, submitMessage } from '../../../redux/actions/allCommentsActions';
import '../index.css';

export default function UserComments() {
  const [input, setInput] = useState({ text: '', stars: '' });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => { dispatch(setAllComments(id)); }, [id]);

  const allComments = useSelector((state) => state.allComments);

  const inputHandler = useCallback((e) => setInput((prev) => (
    { ...prev, [e.target.name]: e.target.value }), []));

  const submitHandler = () => {
    dispatch(submitMessage(input, setInput, id));
  };

  // console.log(allComments);

  return (
// <<<<<<< HEAD
//     <div className="allComments">
//       <Card
//         style={{
//           width: '18rem',
//         }}
//       >
//         <CardTitle tag="h5">
//           Отзывы обо мне
//         </CardTitle>
//         {allComments && allComments?.map((el) => (
//           <CardBody key={el.id} style={{ marginTop: '-20px' }}>
//             <CardSubtitle>
//               от кого:
//               <Link to={`/page/${el?.authorId?.id}`}>{el?.authorId?.name}</Link>
//             </CardSubtitle>
//             <Avatar
//               alt="Remy Sharp"
//               style={{
//                 marginLeft: '10px', marginTop: '15px', width: '50px', height: '50px',
//               }}
//               src={`http://localhost:3001/${el?.authorId?.photo}`}
//             />
//             <p />
//             <CardSubtitle
//               className="mb-2 text-muted"
//               tag="h6"
//             >
//               <StarBorderPurple500SharpIcon />
//               {el?.stars}
//             </CardSubtitle>
//             <CardText>
//               {el?.text}
//             </CardText>
//           </CardBody>
//         ))}
//       </Card>
//       <div className="sendedComments">
//         <h4>Оставить комментарий обо мне</h4>
//         <Box component="form">
//           <TextField id="outlined-basic" label="Ваш отзыв" variant="outlined" name="text" value={input.text} onChange={inputHandler} />
//           <div style={{ marginTop: '15px' }} />
//           <TextField id="outlined-basic" label="Ваш оценка от 1 до 10" variant="outlined" name="stars" value={input.stars} onChange={inputHandler} />
//           <div style={{ marginTop: '15px' }} />
//           <TextField id="outlined-basic" label="ссылка на фотографию" variant="outlined" name="photo" value={input.photo} onChange={inputHandler} />
//           <div style={{ marginTop: '15px' }} />
//           <Button
//             color="info"
//             variant="outlined"
//             type="button"
//             onClick={() => submitHandler()}
//           >
//             Оставить отзыв
//           </Button>
//         </Box>
//       </div>
//     </div>
// =======
    <>
      <div>Оставить отзыв обо мне</div>
      <div style={{ marginTop: '15px' }} />
      <Box component="form">
        <TextField id="outlined-basic" label="Ваш отзыв" variant="outlined" name="text" value={input.text || ''} onChange={inputHandler} sx={{ width: '400px' }} />
        <div style={{ marginTop: '15px' }} />
        <TextField id="outlined-basic" label="Ваш оценка от 1 до 10" variant="outlined" name="stars" value={input.stars || ''} onChange={inputHandler} sx={{ width: '400px' }} />
        <div style={{ marginTop: '15px' }} />
        <Button
          color="info"
          variant="outlined"
          type="button"
          onClick={submitHandler}
        >
          Отправить
        </Button>
        <div style={{ marginTop: '50px' }} />
      </Box>
      <Card
        style={{
          width: '90%',
        }}
      >
        <CardTitle
          tag="h4"
        >
          <center>Отзывы обо мне</center>
        </CardTitle>
      </Card>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        p: 1,
        m: 1,
        borderRadius: 1,
      }}
      >
        {allComments && allComments?.map((el) => (
          <Card
            style={{
              width: '18rem',
            }}
          >
            <CardBody key={el.id} style={{ marginTop: '-20px' }}>

              <CardSubtitle>
                от кого:
                <Link to={`/page/${el?.authorId?.id}`}>{el?.authorId?.name}</Link>
              </CardSubtitle>
              <Avatar
                alt="Remy Sharp"
                style={{
                  marginLeft: '10px', marginTop: '15px', width: '50px', height: '50px',
                }}
                src={`http://localhost:3001/${el?.authorId?.photo}`}
              />
              <p />
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                <StarBorderPurple500SharpIcon />
                {el?.stars}
              </CardSubtitle>
              <CardText>
                {el?.text}
              </CardText>

            </CardBody>
          </Card>
        ))}
      </Box>

    </>
  );
}
