function AnimationThing() {
    return (
        <div className="AnimationThing">
            <h1 className="title is-1 main-title">HUMAN</h1>
            <iframe
                src="/humansketch.html"
                width="400"
                height="400"
                style={{ border: "none", marginTop: "20px" }}
                title="Fly Sketch"
                className="sketch"
            />
            <h1 className="centered">made with <a href="https://p5js.org">p5.js</a>.</h1>
        </div>
    );
}

export default AnimationThing;
