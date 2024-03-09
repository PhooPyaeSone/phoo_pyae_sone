import {h} from "vue";

export default (props:any, context:any) => {
    const {name, position, link, to, from} = props.work;
    return h("a", {
        class: 'flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6',
        href: link,
    }, [
        h("span", {class: 'font-theme_bold text-head_text'}, name),
        h("span", {class: 'flex-[1_1_auto]'}),
        h("span", {class: 'sm:text-right text-sm sm:text-base'}, position),
        h("span", {class: 'text-sm sm:text-base'}, `${from} - ${to}`),
    ])
}

// export default (props: { work: { name: string; position: string; link: string; to: string; from: string } }, context) => {
//     const { name, position, link, to, from } = props.work;
//     return h("a", {
//         class: 'flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6',
//         href: link,
//     }, [
//         h("span", { class: 'font-theme_bold text-head_text' }, name),
//         h("span", { class: 'flex-[1_1_auto]' }),
//         h("span", { class: 'sm:text-right text-sm sm:text-base' }, position),
//         h("span", { class: 'text-sm sm:text-base' }, `${from} - ${to}`),
//     ])
// }
