const CONTRACT_ADDRESS = '0x300eDA7117C71a04d9ac161cE9e2bC9d49f5e048';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    defense: characterData.defense.toNumber(),
    criticChance: characterData.criticChance.toNumber(),
    evasionChance: characterData.evasionChance.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };