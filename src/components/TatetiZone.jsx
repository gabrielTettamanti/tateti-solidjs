import { createSignal } from "solid-js";

import "./TatetiContainer.scss";

export default (props) => {

    let [state, setState] = createSignal("empty");

    let handleState = () => {
            let turn = props.turn
            let simbol = (turn % 2) == 0 ? "cross" : "circle"
            setState(simbol)
    }

    return (
        <div class="tateti-target"><div class={state()} onClick={handleState}></div></div>
    )
}