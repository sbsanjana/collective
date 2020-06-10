import React from 'react';
import {Card, OverlayTrigger, Button, Container, Row} from 'react-bootstrap'
import styles from './styles.css'
import {Link} from 'react-router-dom'

export default class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.onClick.bind(this);
    }
    onClick = () => {
        window.location.href='http://'+ this.props.hlink;
    }


    render() {
   
        return (
            <div>
    
            <Card style={{width:250, height: 250, margin:10}}className="bg-light text-white">
            <Card.Img src= {this.props.imgsrc} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title style={{color:this.props.fontcolor}}>{this.props.title}</Card.Title>
                    <Card.Text style={{color:this.props.fontcolor}}>
                    {this.props.info} 
                               
                    </Card.Text>             
                    <Button variant={this.props.var} onClick={this.onClick}>View</Button>
            </Card.ImgOverlay>
        </Card>
        </div>
  
        );
    }
}