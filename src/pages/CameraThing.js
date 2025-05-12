function CameraThing() {
    return (
        <div className="CameraThing">
            <h1 className="title is-1 main-title">ABOUT YOU</h1>
            <iframe
                src="/webcam.html"
                width="400"
                height="400"
                style={{ border: "none", marginTop: "20px" }}
                title="Fly Sketch"
                className="sketch"
            />
        </div>
    );
}

export default CameraThing;
