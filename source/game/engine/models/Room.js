Room = new Class({
  Extends: Base,
  long: null,
  short: null,
  exits: {},
  items: {},
  players: {},

  initialize: function() {
    this.players = new Hash(this.players);
    this.exits = new Hash(this.exits);
    this.items = new Hash(this.items);
    this.create();
  },
	addPlayer: function(player) {
		this.players[player.name] = player;
	},
  getPlayer: function(name) {
		return this.players[name] || false;
	},
  removePlayer: function(name) {
    this.players[name] = null;
  },
  getExits: function() {
    return this.exits;
  },
  getItems: function() {
    return this.items();
  },
  hasExit: function(exit) {
    return typeof this.exits[exit] !== 'undefined';
  },
  set_short: function(short) {
    this.short = short;
  },
  set_long: function(long) {
    this.long = long;
  },
  add_exit: function(dir, loc) {
    this.exits[dir] = loc;
  },
  //add an item view inside the room desc. LPC naming style.
  add_item: function(keyword, desc, aliases) {
    this.items[keyword] = desc;
    var that = this;
    var aliases = new Hash(aliases);
    aliases.each(function(alias) { that.items[alias] = keyword; });
  },
  create: function() {
    this.set_short("Empty place")
    this.set_long("This room is broken. Pretend you didn't see it")
  }});


