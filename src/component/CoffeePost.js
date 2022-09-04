import "./CoffeePost.css";

function CoffeePost(props) {
    const{ coffee, onBgClick } = props;
    return(
        <div className="coffee-post">
            <div className="coffee-post-bg" onClick={onBgClick}/>
            <div className="coffee-post-content" >
                <img src={coffee.thumbnailUrl} />
                <h4>{ coffee.title }</h4>
            </div>
        </div>
    );
}

export default CoffeePost;