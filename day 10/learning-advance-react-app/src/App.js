import { EventHandle } from "./EventHandling";
import { Counter } from "./Counter";
import { LearningState } from "./LearningState";
import { StateTypeOfArray } from "./StateTypeOfArray";
function App () {
    return(
        <div>
        <EventHandle/>
        <Counter/>
        <LearningState/>
        <StateTypeOfArray/>
        </div>
    )
}

export { App}