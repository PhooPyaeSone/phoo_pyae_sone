import {h} from "vue"

export default(props:any, context:any) => h("p",
    {class: "text-sm md:text-sm leading-relaxed slg:text-base slg:leading-8"},
    context.slots.default()
)