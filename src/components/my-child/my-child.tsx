import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-child',
})
export class MyChild {
  async componentWillLoad() {
    throw new Error('my child error');
  }

  render() {
    return <div>My-Child</div>;
  }
}
