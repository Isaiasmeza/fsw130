import React from "react"

const { Provider, Consumer } = React.createContext()

class ContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            Shows: [
                {
                    title: "Miracle Workers",
                    airedDate: "February 8, 2019",
                    televisionNetwork: "TBS"

                },
                {
                    title: "The Last OG",
                    airedDate: "March 31, 2018",
                    televisionNetwork: "TBS"
                },
                {
                    title: "Conan",
                    airedDate: "Novemebr 8, 2010",
                    televisionNetwork: "TBS"
                }
            ],
            title: "",
            airedDate: "",
            televisionNetwork: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }
    handleSubmit(e){
        e.preventDefault()
        let New = {
           title: this.state.title,
           airedDate: this.state.airedDate,
           televisionNetwork: this.state.televisionNetwork
        }
        
        this.state.Shows.push(New)
        this.setState({
            title:"",
            airedDate:"",
            televisionNetwork:""
        })
    }
    handleChange(e){
        e.preventDefault()
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            
            <Provider value={{Shows: this.state.Shows, submit:this.handleSubmit, change:this.handleChange}}>
            {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}
