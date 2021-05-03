import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()


//place data (JSON) into context provider, set as original state as array object, followed by empty object. 
class ContextProvider extends Component{
    state = {
        movies: [
            {
                title: "Birds of Prey",
                image:"https://cdn.vox-cdn.com/thumbor/3TrwCQYSoU6POaTLZFfxofcZr6I=/0x0:1948x1012/1200x675/filters:focal(1386x702:1696x1012)/cdn.vox-cdn.com/uploads/chorus_image/image/66261883/c788_innckcf8611968.0.jpg"
            },
            {
                title:"Bridesmaids",
                image:"https://coolmaterial.com/wp-content/uploads/2011/10/bridesmaids-in-bed.jpg"     
            },
            {
                title:"Up",
                image:"https://screenwritingfromiowa.files.wordpress.com/2014/01/up_.jpg"
            },
            {
                title:"The Old Gaurd",
                image:"https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
            },
            {
                title:"Mulan",
                image:"https://images.static-bluray.com/movies/covers/258539_large.jpg"
            },
            {
                title:"Black Panther",
                image:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F02%2Fdisney-plus-movies-television-shows-streaming-march-marvel-black-panther-a-wrinkle-in-time-star-wars-clone-wars-01.jpg?q=75&w=800&cbr=1&fit=max"        
            },
            {
                title:"Artemis Fowl",
                image:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Artemis_Fowl_poster.jpg/220px-Artemis_Fowl_poster.jpg"
            },
            {
                title:"The Door Man",
                image:"https://i.pinimg.com/564x/df/7c/bf/df7cbff974e400921215ac742b446d8f.jpg"
            },
            {
                title:"The Babysitter",
                image:"https://www.themiamihurricane.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-13-at-2.23.12-PM.png"
            },
            {
                title:"Doolittle",
                image:"https://www.familyvideo.com/media/catalog/product/cache/6775aaa63932417c8c7449399cef1edb/M/C/MCA_BR61199838_1.jpg"
            },
            {
                title:"Doctor Strange",
                image:"https://qph.fs.quoracdn.net/main-qimg-dad4c51dbedc466086cde392410cc071"
            }
        ], 
        title:'',
        image:''
    }
     //handlechange script
      handleChange= (e)=>{
          e.preventDefault()
            const {name, value} =e.target
            this.setState({
                [name]:value,
            })
        }
      //handlechange function
       addMovieListing = (e) =>{
           e.preventDefault()
           this.setState({
               movies:this.state.movies.concat({
                   title:this.state.title, 
                   image:this.state.image,
               }), 
               title:'',
               image:'',
           })
       }
       render() {
        return(
            //implements new state 
            <Provider 
            value={{
                movies:this.state.movies, 
                title:this.state.title, 
                image:this.state.image,
                handleChange:this.handleChange, 
                addMovieListing:this.addMovieListing,
                }}
                >
            {this.props.children}
            </Provider>
        )
      
    }
   
}

export{ContextProvider, Consumer as ContextConsumer}

