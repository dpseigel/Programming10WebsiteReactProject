import { useState } from "react";




function CounterThing() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    return (
        <div className="CounterThing">
            <section className="hero is-large">
                <div className="hero-body centered">
                    <h2 className="title main-title">{count}</h2>
                    <button className="button counter-button" onClick={increase}>Increase</button>
                    <button className="button counter-button"  onClick={decrease}>Decrease</button>
                </div>
            </section>
        </div>
    );
}

export default CounterThing;
