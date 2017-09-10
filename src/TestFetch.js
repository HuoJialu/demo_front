class Element extends Component {

    componentDidMount = () => {
        fetch('url-xxx')
            .then(res => res.json())
            .then(this.setState({
                //...
            });
    )
        ;
    }

    render = () => {
        // return (...);
    }
}