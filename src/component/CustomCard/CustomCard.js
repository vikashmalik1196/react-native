import React from 'react';
import {  Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types'

const CustomCard = ({username,email,phone}) => {
return(
  <>
 <Card style={{margin:5}}>
 {/* <Card.Title title="Username" subtitle="Phone"  /> */}
    <Card.Content>
      <Title>{username}</Title>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{phone}</Paragraph>
    </Card.Content>
 </Card>
  </>
)
}
 




export default CustomCard;
