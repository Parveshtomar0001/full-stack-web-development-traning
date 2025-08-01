
 import { VariableInJsx } from "./VariableInJsx"
 import { ConditionInJsx } from "./ConditionInJsx"
 import { FunctionInJsx }  from "./FunctionInJsx"
 import { RenderList } from "./RenderList"
function App() {
    return (
        <div>
            <p>result = {2+6}</p>
            <FunctionInJsx/>
            <ConditionInJsx/>
            <VariableInJsx/>
            <RenderList/>
        </div>
    )
}

export { App }   