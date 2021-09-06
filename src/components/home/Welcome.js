import React, { Component } from 'react'
import '../../css/index.css'


export default class Welcome extends Component {

    state={
        carouselText:'The Barrel',
        carouselCount:0
    }

    componentDidMount(){
        let texts = ["Liquor","Soft Drinks","Juices","Many more"];
        let {carouselCount:count} = this.state
        setInterval(()=>{
            if(count < texts.length){
                this.setState({carouselText:texts[count]});
                this.setState({carouselCount:count++});
            }else{
                count = 0;
                this.setState({carouselText:texts[count]})
                this.setState({carouselCount:count})
            }
        },5000)
    }

    render() {
        let {carouselText} = this.state
        return (
            <div id="home-root" className="container-fluid">
                <div className="row">
                   <div id="home-text-carousel-div" className="col-md-12">
                      <h1 id="home-text-carousel">{carouselText}</h1>
                      <h1 style={{color:'white'}}>Recepies | Instructions | Innovations</h1>
                   </div>
                </div>
            </div>
        )
    }
}
