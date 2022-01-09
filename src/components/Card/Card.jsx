import React from 'react';
import {
  MyCard,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
} from './Card.styled';

const Card = () => {
  return (
    <MyCard>
      <CardImage src="https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      <CardContent>
        <CardTitle>Title PlaceHolder</CardTitle>
        <CardDescription>
          Some description of the video placeholder
        </CardDescription>
      </CardContent>
    </MyCard>
  );
};

export default Card;
