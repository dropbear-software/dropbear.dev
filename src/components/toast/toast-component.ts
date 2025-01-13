import {html, LitElement} from 'lit';
import {animate} from '@lit-labs/motion';
import {Toast} from './toast.js';
import { componentStyles } from './styles.css.js';
import { state, customElement } from 'lit/decorators.js';

/**
 * @tagname toast-component
 * @extends LitElement
 * @summary An element that displays non-interactive, passive, 
 *          and asynchronous short messages for users.
 * @event {CustomEvent} toast-added - When a new toast message is added.
 * @event {CustomEvent} toast-removed - When a toast message is removed.
 */
@customElement('toast-component')
export class ToastComponent extends LitElement {

  static override styles = [componentStyles];

  @state()
  _messages: Toast[] = [];

  override connectedCallback() {
    super.connectedCallback()
    window.addEventListener('show-toast', (event) => this.#handleShowToastEvent(event as CustomEvent));
  }

  override disconnectedCallback() {
    super.connectedCallback()
    window.removeEventListener('show-toast', (event) => this.#handleShowToastEvent(event as CustomEvent));
  }

  /**
   * Renders the toast messages to the screen either with or without
   * animation depending on the user's browser preferences.
   * 
   * @protected
   * @override
   * @see {@link https://lit.dev/docs/components/rendering/}
   * @see {@link https://github.com/lit/lit/tree/main/packages/labs/motion}
   */
  protected override render(){
    if (this.#shouldAnimate()) {
      return html`
        ${this._messages.map((toast: Toast) => html`
          <output role="status" ${animate()} data-id="${toast.id}">${toast.message}</output>
        `)}
      `;
    } else {
      return html`
        ${this._messages.map((toast: Toast) => html`
          <output role="status" data-id="${toast.id}">${toast.message}</output>
        `)}
      `;
    }
  }

  /**
   * Displays a toast message to the user.
   *
   * This method creates a new toast message and adds it to the list of messages
   * to be displayed. It then waits for the toast element to be added to the DOM
   * and for any animations to complete before removing the toast from the list
   * of messages.
   *
   * @async
   * @public
   * @param {string} message - The message to display in the toast.
   */
  public async showToast(message: string) {
    const toast = new Toast(message);
    this.#addToast(toast);
    // Wait for the component to finish updating before we try to use a query selector
    await this.updateComplete;

    try {
      const toastElement = this.#getToastById(toast.id);
      if (toastElement !== null) {
        await Promise.allSettled(
            toastElement.getAnimations().map(animation => animation.finished)
          );
          this.#removeToastById(toast.id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes a CustomEvent and uses it to call the `showToast` method
   * 
   * @private
   * @param {CustomEvent} event - The event containing the message to be displayed
   */
  #handleShowToastEvent(event: CustomEvent) {
    this.showToast(event.detail.message);
  }

  /**
   * Determines whether toast messages should be animated.
   *
   * This method checks the user's preference for reduced motion using the
   * `prefers-reduced-motion` media query. If the user has requested reduced
   * motion, this method returns `false` to disable animations. Otherwise, it
   * returns `true` to enable animations.
   *
   * @private
   * @return {boolean} `true` if animations should be enabled, `false` otherwise.
   */
  #shouldAnimate() {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Gets the toast element from the shadow DOM with the given ID.
   *
   * @private
   * @param {string} id - The ID of the toast element to get.
   * @return {HTMLOutputElement | null} The toast element with the given ID, 
   * or null if no such element exists.
   */
  #getToastById(id: string): HTMLOutputElement | null {
    return this.shadowRoot!.querySelector(`output[data-id="${id}"]`);
  }

  /**
   * Removes the toast with the given ID from the list of messages.
   *
   * @private
   * @param {string} idToRemove - The ID of the toast to remove.
   * @fires {CustomEvent} toast-removed
   */
  #removeToastById(idToRemove: string) {
    this._messages = this._messages.filter(toast => toast.id !== idToRemove);
    this.dispatchEvent(new CustomEvent('toast-removed', {
      detail: {
        id: idToRemove
      },
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * Adds a new toast message to the list of messages.
   *
   * @private
   * @param {Toast} toast - The toast message to add.
   * @fires {CustomEvent} toast-added
   */
  #addToast(toast: Toast) {
    // Note: In order to take advantage of Lit's concept of reactive properties
    // we need to actually replace the list rather than just adding an item to the list.
    this._messages = [...this._messages, toast];
    this.dispatchEvent(new CustomEvent('toast-added', {
      detail: {
        id: toast.id
      },
      bubbles: true,
      composed: true,
    }));
  }
}
