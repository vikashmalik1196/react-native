import React from 'react';
import { View, Text ,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const CustomCard = () => {
return(
  <>
 <Card style={{margin:5}}>
 <Card.Title title="Card Title" subtitle="Card Subtitle"  />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
 </Card>
  </>
)
}
 




export default CustomCard;
