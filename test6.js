class Country {
    constructor(name) {
      this.name = name;
    }
    declareWar(other) {
        return (this.name + " declare war to " + other);
      //console.log(this.name + " declare war to " + other);
    }
  }
  
  console.log(new Country("United States").declareWar("everyone"));
  