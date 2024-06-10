import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @State() time: number;
  @State() showChild = false;

  componentDidLoad() {
    window.setInterval(() => {
      this.time = Date.now();
    }, 100);
  }

  render() {
    return (
      <div>
        <span>Time: {this.time}</span>
        <br></br>
        <button
          onClick={() => {
            this.showChild = true;
          }}
        >
          show child
        </button>

        {this.showChild && <my-child></my-child>}
      </div>
    );
  }
}
