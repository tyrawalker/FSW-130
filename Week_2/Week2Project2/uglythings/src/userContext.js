import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

//fake data storage, establish state

class ContextProvider extends Component{
    state= {
        uglyThings :[
        {
            image:"https://i.pinimg.com/originals/57/7b/eb/577beb72af953ce2cc1a01250ef6c7eb.jpg", 
            title:"Orange House",
            escription:"Bright Orange Paint"
        },
        {
            image:"https://image.shutterstock.com/image-illustration/candy-pink-modern-compact-electric-260nw-750513736.jpg", 
            title:"Pink Car", 
            Description:"Bubble Gum Pink"
        },
        {
            image:"https://post.healthline.com/wp-content/uploads/2019/04/Crooked-bottom-teeth-1296x728-gallery_slide1.jpg",
            title:"Ugly Teeth",
            Description:"Crooked Smile"
        },
        {
            image:"http://recordcollectornews.com/wp-content/uploads/2013/07/Ugly-Things-Magazine-602x288.jpg", 
            title:"Funny faces", 
            Description:"Magazine celebrate ugly things"
        },
        {
            image:"http://zeinahkreimid.weebly.com/uploads/4/1/3/7/41370661/9648989_orig.jpg", 
            title:"Ugly animals", 
            Description:"Chubby Toad"
        },
        {
            image:"https://static.tumblr.com/b9309ff1358d07141b95020c67de0a99/3mtjvuh/sxTo516dj/tumblr_static_c8jx6petl0oo8coks4o8g0co8.png", 
            title:"Endangered ugly things", 
            Description:"sea creature"
        },
        {
            image:"http://pm1.narvii.com/7064/bc7bee249f4df7662a7cae34f602420c0b07b84er1-1536-2048v2_uhq.jpg", 
            title:"Horror Amino", 
            Description:"Ugly drawings"
        }
        ], 
        image:'', 
        title:'', 
        Description:''
    }
    //handle change scripting
    handleChange= (e) =>{
        e.preventDefault()
        const {name, value} =e.target
        this.setstate({
            [name]:value, 
        })
    }

    //handlechange function
    addUglyThing = (e) => {
        e.preventDefault()
        this.setState({
            uglyThings:this.state.uglyThings.concat({
                image:this.state.image, 
                title:this.state.title, 
                Description:this.state.Description
            }), 
            image:'', 
            title:'', 
            Description:''
        })
    }
    render () {
        return(
            <Provider
                value={{
                    uglyThings:this.state.uglyThings, 
                    title:this.state.title, 
                    Description:this.state.Description, 
                    handleChange:this.handleChange, 
                    addUglyThing:this.addUglyThing,
                }}
                >
                {this.props.children}
            </Provider>
        )
    }
}

export{ContextProvider, Consumer as ContextConsumer}

