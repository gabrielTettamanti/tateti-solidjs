import { createSignal } from "solid-js";
import TatetiZone from "./TatetiZone";

import "./TatetiContainer.scss";

export default () => {
    let [turns, setTurns] = createSignal(1);

    let nextTurn = () => {
        let currentTurn = turns()
        let newTurn = currentTurn + 1
        setTurns(newTurn);
    };

    return (
        <div class="tateti-container">
            <div class="tateti-zone tateti-zone-1" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone tateti-zone-3" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone tateti-zone-7" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone" onClick={nextTurn}><TatetiZone turn={turns()}/></div>
            <div class="tateti-zone tateti-zone-9" onClick={nextTurn}><TatetiZone/></div>
        </div>
    );
};