import React from "react"
const { Provider, Consumer } = React.createContext();

class ListContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [{
                name: "Ugly Shoes",
                description: "Very warn",
                site: "https://thumbs.dreamstime.com/b/old-shoes-ugly-isolated-white-background-43280802.jpg"
            },
            {
                name: "Ugly Shirt",
                description: "Ugly",
                site: "https://media.istockphoto.com/photos/bright-colorful-yellow-excited-nerdy-party-man-with-glasses-picture-id174782417?k=6&m=174782417&s=612x612&w=0&h=u4zUuLx9qw37-LpI51-j8eA9oxfE_FzHoNMX-u-V88w="
            }, {
                name: "Ugly Socks",
                description: "What your socks should not look like",
                site: "https://thumbs.dreamstime.com/b/feet-well-worn-striped-socks-isolated-white-background-one-has-hole-toe-200307844.jpg"
            }],
            name: "",
            description: "",
            site: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        let New = {
            name: this.state.name,
            description: this.state.description,
            site: this.state.site
        }
        this.state.list.push(New)
        this.setState({
            name: "",
            description: "",
            site: ""
        })
    }
    handleDelete(e) {
        let delButton = document.getElementsByClassName('cards')
        console.log(delButton)
        for(var i = 0; i < delButton.length; i++) {
            if (e.target == delButton[i]) {
                let a = delButton[i].parentNode
                let z = a.parentNode
                z.removeChild(a)
            }
        }
    }
    render() {
        const items = this.state.list
        return (
            <Provider value={{ list: items, delete: this.handleDelete, submit: this.handleSubmit, change: this.handleChange }}>
                {this.props.children}
            </Provider>
        )
    }
}
export { ListContextProvider, Consumer as ListContextConsumer };
