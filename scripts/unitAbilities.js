const phantom = extendContent(UnitType, "phantom", {});
phantom.constructor = function(){
  return extend(PayloadUnit, {});
};

const jellyfish = extendContent(UnitType, "jellyfish", {});
jellyfish.constructor = function(){
  return extend(PayloadUnit, {});
};
jellyfish.abilities.add(new ForceFieldAbility(30, 1, 1, 1));

const olimp = extendContent(UnitType, "olimp", {});
olimp.constructor = function(){
  return extend(PayloadUnit, {});
};
olimp.abilities.add(new ForceFieldAbility(160, 8, 220, 1200), new RepairFieldAbility(120, 80, 210), new UnitSpawnAbility(phantom, 300, 0, 0));