// lib/main.js
'use babel';
import { CompositeDisposable } from 'atom';

// This is your main singleton.
// The whole state of your package will be stored and managed here.
const NearestColor = {
  subscriptions: null,
  activate (state) {
    // Activates and restores the previous session of your package.
    this.subscriptions = new CompositeDisposable();

    // ...and adding commands.
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'nearest-color:convert': this.convert
      })
    );
  },
  deactivate () {
    // When the user or Atom itself kills a window, this method is called.
    this.subscriptions.dispose();
  },
  serialize () {
    // To save the current package's state, this method should return
    // an object containing all required data.
  }
};

export default NearestColor;
