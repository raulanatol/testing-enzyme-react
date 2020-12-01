import * as React from 'react';
import { useState, useEffect } from 'react';
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Colors } from '../../theme/Colors';
import styled from '@emotion/styled';
import { Fonts } from '../../theme/Fonts';

const Button = styled.button`
  background: ${props => props.color};
  text-align: center;
  padding: 15px;
  font-family: ${Fonts.NORMAL};
`;

const Container = styled.div`
  display: flex; 
  margin: 10px 0px;
`;

export const Reactions: React.FC = () => {

  const [like, setLike] = useState<boolean>()
  const [dislike, setDislike] = useState<boolean>()

  const handleLike = () => { setLike(!like); setDislike(false) }
  const handleDislike = () => { setDislike(!dislike); setLike(false) }

  const [likeColor, setLikeColor] = useState(Colors.GREY.value)
  const [dislikeColor, setDislikeColor] = useState(Colors.GREY.value)


  useEffect(() => {
    setLikeColor(like ? Colors.GREEN.value : Colors.GREY.value)
    setDislikeColor(dislike ? Colors.RED.value : Colors.GREY.value)
  }, [like, dislike])

  return (
    <Container color="lightblue">
      <Button onClick={handleLike}>
        <FontAwesomeIcon icon={faThumbsUp} color={likeColor} />
      </Button>
      <Button onClick={handleDislike}>
        <FontAwesomeIcon icon={faThumbsDown} color={dislikeColor} />
      </Button>
    </Container>
  )
}

Reactions.displayName = 'Reactions';