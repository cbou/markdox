/**
 * A function in an evented system.
 * 
 * @fires someEvent
 * @fires someOtherEvent
 * @listens someGlobalEvent
 * @listens SomeClass#event:myEvent
 * @throws {Error} Throws on error
 */
function foo() {}

/**
 * Some random event.
 * 
 * @event someEvent
 * @type {String}
 */

/**
 * Some other random event.
 * 
 * @event someOtherEvent
 * @type {Object}
 * @property {String} type The type of event
 * @property {boolean} important Is this event important?
 */

/**
 * A global event with no defined type.
 * 
 * @event someGlobalEvent
 */

/**
 * A class-specific event
 * 
 * @event SomeClass#event:MyEvent
 */
