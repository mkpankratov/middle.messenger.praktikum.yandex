export default `
  <div class='dropdown-wrapper'>
    <button class='dropdown-trigger{{#if className}} {{className}}{{/if}}'>
      {{triggerText}}      
    </button>
  </div>
`;
