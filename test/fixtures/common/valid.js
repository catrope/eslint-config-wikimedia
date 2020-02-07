// Rule: linebreak-style
// Rule: max-len
// Rule: max-statements-per-line
// Rule: wrap-iife
// Rule: semi
// Rule: semi-spacing
// Rule: semi-style
// Rule: prefer-numeric-literals
// Rule: unicode-bom
// Rule: jsdoc/check-alignment
// Rule: jsdoc/check-indentation
// Rule: jsdoc/check-param-names
// Rule: jsdoc/check-property-names
// Rule: jsdoc/check-tag-names
// Rule: jsdoc/check-types
// Rule: jsdoc/implements-on-classes
// Rule: jsdoc/newline-after-description
// Rule: jsdoc/valid-types
( function ( global ) {
	var APP,
		hasOwn = Object.prototype.hasOwnProperty,
		APPHasOwnProperty = Object.prototype.hasOwnProperty.call( APP, 'hasOwn' );

	// Rule: spaced-comment
	// Example

	// Empty function declaration
	function upHere() {}

	// Rule: camelcase (function, param, var, propery, method)
	// Rule: func-call-spacing
	function upHereAlso( yArg ) {
		var rArg = yArg.fooBar;
		return rArg + yArg.getQuux();
	}

	/**
	 * Example description.
	 *
	 * @class
	 *
	 * @param {string} id
	 * @param {Object} options
	 */
	APP.Example = function ( id, options ) {
		var name, inline, bar;

		// Rule: max-len
		bar = 'This is a long string that is indeed so long that it breaches the line length rules and thus would trigger a warning were it not for the over-ride.';

		// Rule: space-infix-ops
		this.total = upHere() + id;
		name = options.bar ? upHereAlso( id ) : id;

		// Rule: brace-style
		// Rule: dot-notation
		// Rule: keyword-spacing
		// Rule: space-before-blocks
		if ( options.quux ) {
			name += options.quux;
		} else if ( options.default ) {
			name += options.default;
		// Rule: computed-property-spacing
		} else if ( options[ 'property-name' ] ) {
			name += 'property-name';
		}

		// Rule: operator-linebreak
		// Rule: space-infix-ops
		if ( bar &&
			bar.hasData() &&
			bar.getName() !== name &&
			!bar.isQuux()
		) {
			return;
		}

		// Rule: eqeqeq
		// Rule: yoda (never)
		if ( bar === undefined ) {
			return;
		}

		// Rule: block-spacing
		// Rule: space-before-function-paren
		// Rule: space-in-parens
		inline = function ( items ) {
			return items.slice();
		};

		inline = function ( items ) {
			items = items.slice();
			items.pop();
			return items;
		};

		inline = function named( items ) {
			try {
				return APP.loop( items );
			} catch ( e ) {
			}
			return null;
		};

		// Rule: comma-style
		this.data = [
			bar,
			inline()
		];

		// Rule: array-bracket-spacing
		// Rule: comma-spacing
		this.items = [ 'foo', 'bar' ];
	};

	APP.unaryWords = function ( obj ) {
		// Rule: space-unary-ops
		obj.type = typeof obj;
		delete obj.type;
	};

	APP.loop = function ( items ) {
		// Rule: comma-dangle
		// Rule: comma-spacing
		// Rule: comma-style
		// Rule: curly
		// Rule: one-var
		// Rule: vars-on-top
		var i, len, item, key,
			j = 1,
			ret = {};

		// Rule: for-direction
		for ( i = 0, len = items.length; i < len; i++ ) {
			if ( items[ i ] !== null ) {
				item = items[ i ];
				break;
			}
		}

		if ( !item ) {
			return;
		}

		for ( key in item ) {
			if ( APPHasOwnProperty || hasOwn.call( item, key ) ) {
				// Rule: computed-property-spacing
				ret[ key ] = new APP.Example( item[ key ] );
			}
		}

		do {
			j = i++;
			APP.fall( --j );
		} while ( i < 5 );

		return ret;
	};

	// Rule: valid-jsdoc

	/**
	 * @param {boolean|number} code
	 * @return {null|undefined}
	 */
	APP.fall = function ( code ) {
		// Rule: switch-colon-spacing
		// Rule: indent (SwitchCase)
		switch ( code ) {
			case 200:
				break;
			default:
				return null;
		}
	};

	/**
	 * @param {number} a
	 * @param {number} b
	 * @return {number}
	 */
	APP.sum = function ( a, b ) {
		return a + b;
	};

	APP.cast = function ( options, val ) {
		options.enable = !!val;
		options.disable = Boolean( val );

		options.posX = +val;
		options.posY = Number( val );

		options.title = String( val );

		return options.title.indexOf( '.' ) !== -1;
	};

	APP.fetch = function () {
		// Rule: new-cap
		// Rule: new-parens
		var eg = new APP.Example();
		return eg.Deferred();
	};

	APP.example = new APP.Example( 'banana', {
		// Rule: key-spacing
		// Rule: quote-props
		// Rule: quotes
		first: 'Who',
		default: 'is',
		null: 'there?',
		// Rule: object-curly-spacing
		second: { value: { of: 'What' } },
		third: {
			value: {
				of: 'I don\'t know'
			}
		},
		// Rule: quotes
		fourth: "Who's coming to tea?"
	} );

	APP.example( 'banana' )
		.done( function () { } );

	// Rule: dot-location
	APP.example( 'banana' )
		.done( function () {} )
		.fail( function () {} );

	APP.$head
		.appendTo( APP.$element );

	/**
	 * @param {boolean} a
	 * @param {number} b
	 * @param {string} c
	 * @param {undefined} d
	 * @param {null} e
	 * @param {Object} f
	 * @param {Array} g
	 * @param {Function} h
	 * @param {Date} i
	 * @param {RegExp} j
	 * @return {Error}
	 */
	APP.JSDocTypes = function ( a, b, c, d, e, f, g, h, i, j ) {
		return a || b || c || d || e || f || g || h || i || j;
	};

	/**
	 * {@link APP}
	 * {@link APP}
	 *
	 * @abstract
	 * @extends String
	 * @class
	 * @constructs
	 * @const
	 * @default
	 * @desc Description.
	 * @external String
	 * @file Description.
	 * @fires Event
	 * @function
	 * @method
	 * @member
	 * @param {number} a
	 * @param {number} b
	 * @property {number} c
	 * @return {number}
	 * @throws {Error}
	 * @yield
	 */
	APP.JSDocTags = function ( a, b ) {
		return a || b;
	};

	global.APP = APP;

}( this ) );

// Rule: eol-last
