export default `
    <button class='{{#unless className}}navlink {{/unless}}{{#if danger}}danger {{/if}} {{className}}'>{{text}}</button>
`;
