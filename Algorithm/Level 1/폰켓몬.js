function solution(nums) {
  const pick = nums.length / 2;
  const pokemons = {};
  nums.forEach((num, idx) => (pokemons[num] = num));
  if (pick >= Object.keys(pokemons).length) {
    return Object.keys(pokemons).length;
  } else return pick;
}
