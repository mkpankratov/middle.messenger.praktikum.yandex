export default `
    <a href="#" class='{{#unless className}}navlink {{/unless}}{{#if danger}}danger {{/if}} {{className}}'>{{text}}</a>
`;
