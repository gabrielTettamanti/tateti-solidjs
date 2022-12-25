import { createSignal } from "solid-js";

export default () => {
    let [turns, setTurns] = createSignal(1);

    let nextTurn = () => {
        let currentTurn = turns()
        let newTurn = currentTurn + 1
        setTurns(newTurn);
        console.log(turns())
    };

    return nextTurn()
}