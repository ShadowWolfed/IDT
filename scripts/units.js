const delta = extendContent(UnitType, "delta", {});
delta.constructor = () => extend(UnitEntity, {});
delta.defaultController = () => extend(BuilderAI, {});

delta.ammoType = AmmoTypes.power;
delta.flying = true;
delta.drag = 0.05;
delta.speed = 3;
delta.rotateSpeed = 20;
delta.accel = 0.1;
delta.range = 200;
delta.health = 550;
delta.buildSpeed = 5;
delta.engineOffset = 6.5;
delta.hitSize = 13;
delta.lowAltitude = true;
delta.mineTier = 6;
delta.mineSpeed = 10;

delta.abilities.add(new RepairFieldAbility(20, 450, 70));