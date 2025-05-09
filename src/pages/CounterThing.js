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
            <section class="hero is-large">
                <div class="hero-body centered">
                    <h2 class="title main-title">{count}</h2>
                    <button class="button counter-button" onClick={increase}>Increase</button>
                    <button class="button counter-button"  onClick={decrease}>Decrease</button>
                </div>
            </section>
        </div>
    );
}

export default CounterThing;
