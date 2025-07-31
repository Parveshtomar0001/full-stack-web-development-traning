
 import { VariableInJsx } from "./VariableInJsx"
 import { ConditionInJsx } from "./ConditionInJsx"
 import { FunctionInJsx }  from "./FunctionInJsx"

function App() {
    return (
        <div>
            <p>result = {2+6}</p>
            <FunctionInJsx/>
            <ConditionInJsx/>
            <VariableInJsx/>
        </div>
    )
}

export { App }   